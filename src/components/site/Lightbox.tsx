import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export default function Lightbox({
  images, index, onClose, onIndex,
}: { images: string[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const [zoom, setZoom] = useState(1);
  useEffect(() => setZoom(1), [index]);
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndex]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <button onClick={onClose} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-beige hover:bg-white/20" aria-label="Close">
            <X size={22} />
          </button>
          <div className="absolute top-5 left-5 flex gap-2">
            <button onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.3, 3)); }} className="rounded-full bg-white/10 p-3 text-beige hover:bg-white/20" aria-label="Zoom in">
              <ZoomIn size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.3, 1)); }} className="rounded-full bg-white/10 p-3 text-beige hover:bg-white/20" aria-label="Zoom out">
              <ZoomOut size={20} />
            </button>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + images.length) % images.length); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-beige hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            src={images[index]}
            alt="Menu"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: `scale(${zoom})` }}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl transition-transform"
          />
          <button
            onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % images.length); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-beige hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-xs text-beige">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}