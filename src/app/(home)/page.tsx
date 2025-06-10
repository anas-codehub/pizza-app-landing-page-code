"use client";

import ProductCard, { Product } from "@/components/ProductCard";
import { Button, Tab, Tabs } from "@heroui/react";
import Image from "next/image";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/images/pizza.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/images/pizza.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/images/pizza.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/images/pizza.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/images/pizza.png",
    price: 500,
  },
];

export default function Home() {
  return (
    <main className="font-recoleta bg-[#fdfbf3] min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Super Delicious Pizza in <br />
              <span className="text-orange-500">Only 45 Minutes</span>
            </h1>
            <p className="text-lg md:text-2xl mt-6 max-w-xl mx-auto md:mx-0 leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-6 px-8 font-bold bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition">
              Get Your Pizza Now
            </Button>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={"/images/pizza.png"}
              width={450}
              height={450}
              alt="Pizza"
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs
            aria-label="Product Categories"
            variant="bordered"
            color="warning"
          >
            <Tab key="pizza" title="Pizza">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </Tab>
            <Tab key="beverages" title="Beverages">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
