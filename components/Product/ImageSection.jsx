"use client";
import Image from "next/image";
import { useRef, useState } from "react";

// Example product images
import product2 from "@/public/assets/dummy/heroBanner.jpg";
import product1 from "@/public/assets/dummy/product-1.jpg";
import product3 from "@/public/assets/dummy/product-3.jpg";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";

export default function ImageSection() {
  const images = [
    { id: 1, src: product1, alt: "Product Image 1" },
    { id: 2, src: product2, alt: "Product Image 2" },
    { id: 3, src: product3, alt: "Product Image 3" },
    { id: 4, src: product3, alt: "Product Image 4" },
  ];

  const [mainImage, setMainImage] = useState(images[0].src);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const lastOffset = useRef({ x: 0, y: 0 });

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1));
    setOffset({ x: 0, y: 0 }); // reset pan when zooming out fully
    lastOffset.current = { x: 0, y: 0 };
  };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    lastOffset.current = offset;
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative h-96 w-96 border rounded-lg overflow-hidden "
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="h-full w-full flex items-center justify-center transition-transform duration-300"
          style={{
            transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
              offset.y / zoom
            }px)`,
          }}
        >
          <Image
            className="object-cover"
            src={mainImage}
            alt="Main Product Image"
            fill
            priority
          />
        </div>
        {/* Zoom Controls */}
        <div className="absolute bottom-2 right-2 flex gap-2 opacity-50  group-hover:opacity-100 transition-opacity ">
          <button
            onClick={handleZoomIn}
            className="p-2  rounded-full hover:shadow hover:bg-gray-100"
          >
            <AiOutlineZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2  rounded-full hover:shadow hover:bg-gray-100"
          >
            <AiOutlineZoomOut size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-5">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setMainImage(img.src)}
            className={`relative h-20 w-20 border rounded-lg overflow-hidden transition-all duration-300
              ${
                mainImage.src === img.src
                  ? "ring-2 ring-blue-500 scale-105"
                  : "hover:scale-105"
              }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
