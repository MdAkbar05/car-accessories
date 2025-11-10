"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 w-full right-0 top-0 bottom-0 mx-auto bg-black/20 p-4"
      onClick={onClick}
      id="overlayModal"
    >
      <div
        ref={wrapper}
        className="absolute right-0 top-2/12  sm:w-10/12 md:w-8/12 lg:w-3/12 p-6 bg-white/80 backdrop-blur-lg rounded-md shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
