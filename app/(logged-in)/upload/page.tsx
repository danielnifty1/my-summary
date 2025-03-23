import BgGradient from "@/components/common/bgGradient";
import UploadHeader from "@/components/upload/upload-headert";
import UploadForm from "@/components/upload/uploadForm";

export default function Uploads() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center gap-6 ">
          <UploadHeader />
          <UploadForm />
        </div>
      </div>
    </section>
  );
}
