import { useState } from "react";
import { motion } from "framer-motion";
import { menuImages } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import Lightbox from "./Lightbox";
import { useLang } from "@/lib/i18n";

export default function MenuGallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const { t } = useLang();
  return (
    <section id="menu" className="relative bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          invert
          eyebrow={t("Our Menu", "हमारा मेन्यू")}
          title={<>{t("The Complete", "संपूर्ण")} <span className="text-gradient-gold">{t("Menu Card", "मेन्यू कार्ड")}</span></>}
          subtitle={t(
            "Tap any card to view in full screen. Zoom in for the finer details.",
            "किसी भी कार्ड को पूर्ण स्क्रीन में देखने के लिए टैप करें। बारीकियों के लिए ज़ूम करें।",
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuImages.map((src, i) => (
            <motion.button
              key={src}
              {...fadeUp(i * 0.05)}
              whileHover={{ y: -6 }}
              onClick={() => setIdx(i)}
              className="group overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={src} alt={`Menu ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-xs uppercase tracking-widest text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  {t("View Full", "पूरा देखें")}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox images={menuImages} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </section>
  );
}