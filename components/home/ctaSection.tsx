import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="font-bold mx-auto text-3xl text-center tracking-tight sm:text-4xl md:text-5xl">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              Transform lenghty documents into clear, actionable insights with
              our AI-powered summerizer.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center  ">
            <div className=" p-6 justify-center flex space-y-2">
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4  text-white w-full bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 transition-all duration-300 rounded-xl gap-2"
              >
                Get Started
                <ArrowRight size={23} className="ml-2 h-4 w-4 animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
