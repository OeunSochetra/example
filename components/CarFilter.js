"use client";
import { useState } from "react";
import { itemsCar } from "@/data/filter";

const CarFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="flex items-center justify-center pt-16 text-black">
        <div className="InputContainer ">
          <input
            className="input fixed"
            type="text"
            placeholder="Search Car"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="text-white">
          {searchTerm === "" ? (
            <span className="ml-10 font-[400] text-red-300">
              Search for something
            </span>
          ) : (
            <div className="flex items-center justify-center pt-[100px] fixed">
              <div className="grid grid-cols-4 gap-5 items-center">
                {itemsCar.map(
                  (items) =>
                    items.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) && (
                      <div
                        className="w-[150px] h-[50px] bg-red-300 rounded-md"
                        key={items.id}
                      >
                        <span className="flex items-center justify-center pt-3 font-[400] text-sm">
                          {items.name}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CarFilter;
