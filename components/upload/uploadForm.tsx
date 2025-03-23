'use client'
import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import UploadFormInput from "./upload-form-input";
import {z} from 'zod'

const schema=z.object({
    file:z
    .instanceof(File,{message:'Invalid File'})
    .refine((file)=>file.size<=24*1024*1024,"File size must be less than 24mb",
    )
    .refine((file)=>file.type.startsWith('application/pdf'),'File must bE PDF')
})

export default function UploadForm() {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const file=formData.get('file') as File
        const validatedField=schema.safeParse(file);
        if(!validatedField.success){
            console.log(validatedField.error.flatten().fieldErrors.file?.[0]?? 'valid file')
        }
      
    }
  return (
    <div className="flex flex-col gap-8 w-full max-2xl mx-auto ">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
