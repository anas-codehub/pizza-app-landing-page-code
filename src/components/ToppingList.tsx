import React, { useState } from "react";
import ToppingCard from "./ToppingCard";

type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
};

const toppings: Topping[] = [
  {
    id: "1",
    name: "chicken",
    image: "/images/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: "/images/Jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "cheese",
    image: "/images/cheese.png",
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectToppings, setSelectToppings] = useState<Topping[]>([]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectToppings.some(
      (element) => element.id === topping.id
    );

    if (isAlreadyExists) {
      setSelectToppings((prev) => prev.filter((elm) => elm.id !== topping.id));
    } else {
      setSelectToppings((prev) => [...prev, topping]);
    }
  };

  return (
    <section>
      <h3 className="mt-6">Extra Toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectToppings={selectToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
