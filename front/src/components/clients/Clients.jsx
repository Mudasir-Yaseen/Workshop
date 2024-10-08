import React from "react";
import logo from "../../../public/logo.jpg";

const Clients = () => {
  const clients = [
    { id: 1, logo: "logo.jpg" }, // Replace with actual logo paths
    { id: 2, logo: "logo.jpg" },
    { id: 3, logo: "logo.jpg" },
    { id: 4, logo: "logo.jpg" },
    { id: 5, logo: "logo.jpg" },
  ];

  return (
    <section id="client">
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
            Our Esteemed Clients
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {/* Original Logos */}
              <div className="flex">
                {clients.map((client) => (
                  <div key={client.id} className="flex-shrink-0 mx-4">
                    <img
                      src={client.logo}
                      alt={`Client ${client.id}`}
                      className="h-16"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate Logos for Seamless Scrolling */}
              <div className="flex">
                {clients.map((client) => (
                  <div key={client.id + 5} className="flex-shrink-0 mx-4">
                    <img
                      src={client.logo}
                      alt={`Client ${client.id}`}
                      className="h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;
