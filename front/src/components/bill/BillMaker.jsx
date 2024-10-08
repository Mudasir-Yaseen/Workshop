import React, { useState, useEffect } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import axios from "axios";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const BillMaker = () => {
  const [items, setItems] = useState([{ name: "", price: "", quantity: 1, size: "" }]);
  const [customerName, setCustomerName] = useState("");
  const [total, setTotal] = useState(0);
  const [companyName] = useState("M. Yaseen Kitchen Engineering");
  const [logoBase64, setLogoBase64] = useState("");

  useEffect(() => {
    const getBase64ImageFromUrl = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const blob = await res.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return null; // return null in case of an error
      }
    };

    getBase64ImageFromUrl("/Logo.png").then((base64) => {
      if (base64) {
        setLogoBase64(base64);
      } else {
        console.error("Failed to convert logo to Base64");
      }
    });
  }, []);

  const handleDownloadPDF = () => {
    const docDefinition = {
      content: [
        logoBase64
          ? { image: logoBase64, width: 250, alignment: "center", margin: [0, -90, 0, -50] }
          : "",
        { text: `Customer Name: ${customerName}`, style: "subheader", margin: [0, 20, 0, 10] },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", "auto", "auto", "auto"],
            body: [
              [
                { text: "Item", style: "tableHeader", alignment: "center" },
                { text: "Price", style: "tableHeader", alignment: "center" },
                { text: "Size", style: "tableHeader", alignment: "center" },
                { text: "Quantity", style: "tableHeader", alignment: "center" },
                { text: "Total Price", style: "tableHeader", alignment: "center" },
              ],
              ...items.map((item) => [
                { text: item.name, alignment: "center" },
                { text: item.price.toString(), alignment: "center" },
                { text: item.size, alignment: "center" },
                { text: item.quantity.toString(), alignment: "center" },
                { text: (item.price * item.quantity).toFixed(2), alignment: "center" },
              ]),
              [
                { text: "Total", colSpan: 4, alignment: "right", bold: true },
                {},
                {},
                {},
                { text: total.toFixed(2), alignment: "center", bold: true },
              ],
            ],
          },
          layout: {
            fillColor: (rowIndex) => (rowIndex === 0 ? "#CCCCCC" : null),
            paddingLeft: () => 10,
            paddingRight: () => 10,
            paddingTop: () => 5,
            paddingBottom: () => 5,
          },
          margin: [0, 20, 0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
        subheader: {
          fontSize: 16,
          bold: true,
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: "black",
        },
      },
    };

    pdfMake.createPdf(docDefinition).download("bill.pdf");
  };

  useEffect(() => {
    const calculatedTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, [items]);

  const addItem = () => {
    setItems([...items, { name: "", price: "", quantity: 1, size: "" }]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSaveBill = async () => {
    const billData = {
      customerName,
      items,
      total,
    };
  
    try {
      const response = await axios.post("http://localhost:3002/bill/create", billData); // Corrected URL
      if (response.status === 201) { // Check for 201 Created status
        alert("Bill saved successfully!");
      }
    } catch (error) {
      console.error("Error saving bill:", error.response?.data || error.message); // Enhanced error logging
      alert("Failed to save bill.");
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Bill Maker</h2>

      <div className="mb-6">
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Customer Name"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 sm:px-6 text-left">Item Name</th>
              <th className="py-3 px-2 sm:px-6 text-left">Price</th>
              <th className="py-3 px-2 sm:px-6 text-left">Size</th>
              <th className="py-3 px-2 sm:px-6 text-left">Quantity</th>
              <th className="py-3 px-2 sm:px-6 text-left">Total Price</th>
              <th className="py-3 px-2 sm:px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {items.map((item, index) => (
              <tr className="border-b border-gray-200" key={index}>
                <td className="py-3 px-2 sm:px-6 text-left whitespace-nowrap">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].name = e.target.value;
                      setItems(newItems);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].price = e.target.value;
                      setItems(newItems);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    min="0"
                  />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input
                    type="text"
                    value={item.size}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].size = e.target.value;
                      setItems(newItems);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].quantity = e.target.value;
                      setItems(newItems);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    min="1"
                  />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addItem}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add Item
        </button>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Download Bill
        </button>

        <button
          onClick={handleSaveBill}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          Save Bill
        </button>
      </div>
    </div>
  );
};

export default BillMaker;
