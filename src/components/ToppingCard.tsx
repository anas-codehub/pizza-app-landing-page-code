import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface Topping {
  id: string;
  image: string;
  name: string;
  price: number;
  isAvailable: boolean;
}

interface ToppingCardProps {
  topping: Topping;
  selectToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
}

const ToppingCard: React.FC<ToppingCardProps> = ({
  topping,
  selectToppings,
  handleCheckBoxCheck,
}: ToppingCardProps) => {
  const isCurrentSelected = selectToppings.some(
    (element) => element.id === topping.id
  );
  return (
    <Button
      onClick={() => handleCheckBoxCheck(topping)}
      variant="bordered"
      className={cn(
        "flex flex-col h-40",
        isCurrentSelected ? "border-warning" : ""
      )}
    >
      <Image src={topping.image} width={80} height={80} alt={topping.name} />
      <h3>{topping.name}</h3>
      <p>&#8377;{topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="absolute top-0 right-1 text-warning" />
      )}
    </Button>
  );
};

export default ToppingCard;
