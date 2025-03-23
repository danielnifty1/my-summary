'use client'
import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface uploadFormInputProps{
    onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}
export default function UploadFormInput({onSubmit}:uploadFormInputProps){
    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-center items-center gap-1.5">
            <Input id="file" name="file" accept="application/pdf" required className="" type="file" />
            
            <Button variant={"secondary"} className="bg-rose-300 text-white ">Upload your PDF <Upload/> </Button>

            </div>
          

        </form>
    )
}