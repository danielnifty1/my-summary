import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
type PriceType = {
  name: string;
  price: number;
  description: string;
  items: [];
  id: string;
  paymentLink: string;
  priceId: string;
};
const plan = [
  {
    id: "basic",
    name: "basic",
    paymentLink: "",
    price: 90,
    priceId: "",
    description: "to certify our customers",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "pro",
    paymentLink: "",
    price: 120,
    description: "to certify our customers",
    items: [
      "unlimited PDF summaries per month",
      "Priority speed",
      "Email support",
    ],
  },
];

const PlanCard = ({
  id,
  name,
  paymentLink,
  price,
  description,
  priceId,
  items,
}: PriceType) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300 ease-in-out ">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 m-auto  border-[1px] border-gray-500/20 rounded-2xl justify-center mx-auto",
          id == "pro" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs font-semibold uppercase">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        <div className="space-y-2.5 leading-relaxed text-base">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckIcon size={10} />
              <span> {item}</span>
            </li>
          ))}
        </div>

        <div className="w-full justify-center flex space-y-2">
          <Link
            className={cn(
              "flex items-center justify-center rounded-full w-full gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2 transform duration-300 ease-in-out",
              id === "pro"
                ? "border-rose-900" 
                : "border-rose-100 from-rose-400 to-rose-500 "
            )}
            href={paymentLink}
          >
            Buy Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PriceSection() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24  mx-auto px-4 sm:px-6 lg:mx-10">
        <div className="flex items-center justify-center w-full pb-12 ">
          <h2 className="font-bold mb-8 text-xl text-rose-500 uppercase">
            Pricing
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row  items-center lg:items-stretch gap-8 p-4 mx-auto  w-full">
          {plan.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
