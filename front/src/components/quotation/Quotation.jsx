import React from "react";

const Quotation = () => {
  return (
    <section id="quotation">
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Request a Quotation
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Product</label>
                <select className="w-full p-3 border border-gray-300 rounded">
                  <option value="">Select a Product</option>
                  <option value="Commercial Oven">Commercial Oven</option>
                  <option value="Industrial Mixer">Industrial Mixer</option>
                  <option value="Refrigeration Unit">Refrigeration Unit</option>
                  <option value="Dishwasher">Dishwasher</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold py-3 rounded hover:bg-yellow-400 transition"
              >
                Submit Quotation Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quotation;
