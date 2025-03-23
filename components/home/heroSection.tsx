import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import NavLink from "../common/nav-link";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col relative justify-center items-center mx-auto py-16  sm:py-20 lg:pb-10 z-0 transition-all animate-in lg:px-12 max-w-7xl">
    
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group hover:bg-rose-700">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600 "> Powered by AI</p>
          </Badge>
        </div>
     

      <h1 className="text-center font-bold py-6">
        Transform PDFs into{""}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl text-center lg:text-2xl px-4 lg:px-0 lg:max-w-4xl">
        Get a beautiful summary reel of the document in seconds
      </h2>

      <div className="">
        <Button
          variant={"link"}
          className=" rounded-full text-white text-base sm:text-lg lg:text-xl px-8 sm:px-12  py-4 sm:py-7 lg:py-8 lg:mt-16 mt-6 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300"
        >
          <Link
            href="/#pricing"
            className="flex items-center justify-center gap-1 font-bold"
          >
            <span>Try Summary</span> <ArrowRight className="animate-pulse" />{" "}
          </Link>
        </Button>
      </div>
    </section>
  );
}
