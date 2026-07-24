import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import Lightbox from "./Lightbox";
import { useLang } from "@/lib/i18n";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const { t } = useLang();
  return (
    <section id="gallery" className="relative bg-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Gallery", "गैलरी")}
          title={<>{t("Moments at", "पल")} <span className="text-gradient-gold">{t("Sharda", "शारदा के")}</span></>}
          subtitle={t(
            "Interiors, plates and celebrations captured in golden light.",
            "इंटीरियर, थाली और उत्सव — सुनहरी रोशनी में क़ैद।"
          )}
        />
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <motion.button
              key={src}
              {...fadeUp((i % 6) * 0.04)}
              onClick={() => setIdx(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-gold/15"
              style={{ breakInside: "avoid" }}
            >
              <div className="relative">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox images={galleryImages} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </section>
  );
}