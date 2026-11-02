import { Camera, Pencil } from "lucide-react";

const UploadPhoto = () => {
  return (
    <div>
      <div className="relative w-[170px] h-[170px] rounded-3xl border-2 border-dashed border-(--border-color) bg-(--bg-main) flex flex-col items-center justify-center">
        <Camera size={42} className="text-(--text-muted)" />

        <p className="mt-4 text-(--text-secondary) font-medium">
          Upload Photo
        </p>

        <button className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-(--primary) text-white flex items-center justify-center">
          <Pencil size={18} />
        </button>
      </div>

      <p className="mt-5 text-sm font-medium text-(--text-secondary)">
        JPG or PNG. Max size of 800K.
      </p>
    </div>
  );
};

export default UploadPhoto;
