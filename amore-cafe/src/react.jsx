import React, { useState } from "react";

export default function Menu() {
  const coffeeSets = [
    ["Espresso", "Caramel Latte", "Cappuccino"],
    ["Mocha", "Americano", "Flat White"],
    ["Macchiato", "Irish Coffee", "Cold Brew"]
  ];

  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % coffeeSets.length);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">☕ Coffee Menu</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {coffeeSets[currentSet].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-2xl w-40 hover:scale-105 transition-transform"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      <button
        onClick={nextSet}
        className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Show More
      </button>
    </div>
  );
}
