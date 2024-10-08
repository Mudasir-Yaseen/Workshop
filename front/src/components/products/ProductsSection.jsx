import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; // Import Link for navigation
import productImage from "../../../public/post-2.png"; // Update image path accordingly

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleGetQuotation = () => {
    navigate("/quotation");
  };

  const products = [
    {
      id: 1,
      name: "Commercial Oven",
      description: "High-efficiency ovens for professional kitchens.",
      image: productImage, // Replace with actual image path
    },
    {
      id: 2,
      name: "Industrial Mixer",
      description: "Heavy-duty mixers for large-scale food preparation.",
      image: productImage,
    },
    {
      id: 3,
      name: "Refrigeration Unit",
      description: "Energy-efficient refrigeration solutions.",
      image: productImage,
    },
    {
      id: 4,
      name: "Dishwasher",
      description: "High-capacity dishwashing systems.",
      image: productImage,
    },
  ];

  return (
    <section id="products">
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-white mb-12">
            Our Premium Products
          </h2>

          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-gray-800 rounded-lg border border-gray-700 shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>

                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm mb-4">{product.description}</p>
                  <button
                    onClick={handleGetQuotation}
                    className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l2 2m-2-2v6"
                      />
                    </svg>
                    Get Quotation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
