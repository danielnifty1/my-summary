import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UploadHeader(){
    return (
        <div className="flex flex-col justify-center items-center gap-6 text-center">
        <div className="relative p-[1px] overflow-hidden rounded-full  bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-rose-50 rounded-full group-hover:bg-gray-50 transition-colors duration-200 "
          >
            <Sparkles className="w-6 h-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600">
              AI-Powered Content Creation
            </p>
          </Badge>
        </div>
        <div className="capitalize text-3xl font-bold">
          <h1 className="lg:text-6xl md:text-4xl sm:text-4xl">
            Start Uploading Your{" "}
            <span className="relative inline-block">
            <span className="relative z-10 px-2">PDF's</span>
            <span
          className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
          aria-hidden="true"
        ></span>
            </span>
          </h1>
          <p>upload your PDF and let AI do the magic!✨</p>
        </div>
      </div>
    )

}