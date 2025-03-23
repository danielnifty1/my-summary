import {
  ArrowRight,
  BrainCircuit,
  FileOutput,
  FileText,
  MoveRight,
  CalculatorIcon,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import NavLink from "../common/nav-link";
import Link from "next/link";
import { ReactNode } from "react";

type Step = { icon: ReactNode; label: string; description: string };
const steps: Step[] = [
  {
    label: "Upload a PDF",
    description: "Upload a PDF document that you want to summarize",
    icon: <FileText size={64} strokeWidth={1.5} />,
  },
  {
    label: "Summarize",
    description: "Summarize the document using our AI-powered algorithm",
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
  },
  {
    label: "Download",
    description: "Download the summary and enjoy reading",
    icon: <FileOutput size={64} strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gray-50 ">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40  -z-10 transform-gpu overflow-hidden blur-3 sm:-top-30"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%,79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            className="relative left-[calc[50%-11rem]] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-200 opacity-20 sm:left-[calc[50%-30rem]] sm:w-[72rem]"
          ></div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">
            How it works
          </h2>

          <h3 className="font-bold text-2xl max-w-2xl mx-auto px-4 sm:px-6 ">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto  relative ">
          {steps.map((step, index) => (
            <div className="relative flex items-stretch  " key={index}>


              <StepItem  {...step} />
               
              {index < steps.length - 1 && (
                <div className="hidden md:block top-1/2 -right-4 transform -translate-y-1/2 z-10 absolute ">
                  <MoveRight size={32} strokeWidth={1} className="text-rose-500 " />
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  function StepItem({ icon, label, description }: Step) {
    return (
      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors duration-200 group w-full ">
        <div className="flex flex-col gap-4 h-hull">
          <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-rose-500/50 to-transparent group-hover:from-rose-500/50">
            <div className="text-rose-500">{icon}</div>
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <h4 className="text-center font-bold  text-xl ">{label}</h4>
            <p className="text-center text-gray-500 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
