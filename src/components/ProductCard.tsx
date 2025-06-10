import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";

import Image from "next/image";
import React from "react";
import ToppingList from "./ToppingList";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="flex items-center justify-center pt-6">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={160}
            className="object-contain"
          />
        </CardHeader>

        <CardBody className="text-center px-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        </CardBody>

        <CardFooter className="flex items-center justify-between px-6 pb-6">
          <div className="text-sm text-gray-700">
            <span className="text-gray-500">From</span>{" "}
            <span className="font-bold text-gray-800">৳{product.price}</span>
          </div>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm shadow transition"
            onPress={onOpen}
          >
            Choose
          </Button>
        </CardFooter>
      </Card>

      {/* MODAL */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-w-4xl bg-[#fff7ec] rounded-2xl p-0 overflow-hidden">
          {(onClose) => (
            <>
              <ModalBody className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left - Image */}
                  <div className="bg-white flex items-center justify-center w-full md:w-1/3 p-8">
                    <Image
                      src={product.image}
                      width={300}
                      height={300}
                      alt={product.name}
                      className="rounded-xl object-contain"
                    />
                  </div>

                  {/* Right - Details */}
                  <div className="w-full md:w-1/2 p-6 md:p-10">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>

                    {/* Size Selector */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">
                        Choose the size
                      </h4>
                      <Tabs variant="bordered" color="warning" radius="sm">
                        <Tab key="small" title="Small" />
                        <Tab key="medium" title="Medium" />
                        <Tab key="large" title="Large" />
                      </Tabs>
                    </div>

                    {/* Crust Selector */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">
                        Choose the crust
                      </h4>
                      <Tabs variant="bordered" color="warning" radius="sm">
                        <Tab key="thin" title="Thin" />
                        <Tab key="thick" title="Thick" />
                      </Tabs>
                    </div>

                    {/* Toppings */}
                    <div className="mt-6">
                      <ToppingList />
                    </div>

                    {/* Price + Add Button */}
                    <div className="flex items-center justify-between mt-8">
                      <span className="text-xl font-semibold text-gray-800">
                        ৳400
                      </span>
                      <Button
                        color="warning"
                        className="flex items-center gap-2 text-white"
                      >
                        <ShoppingCart size={18} />
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
