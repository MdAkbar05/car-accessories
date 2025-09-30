"use client";
import gallery from "@/public/assets/icons/image-gallery.svg";
import Image from "next/image";
import { useRef } from "react";

export default function GalleryUpload() {
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // you can upload or preview here
    }
  };

  // Trigger input click
  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* Image that opens file picker */}
      <button onClick={openFilePicker}>
        <Image src={gallery} alt="gallery" width={24} height={24} />
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
