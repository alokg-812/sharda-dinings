import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "./data";
import { SectionHeader } from "./Section";
import { useLang } from "@/lib/i18n";

export default function Reviews() {
  const [i, setI] = useState(0);
  const { t } = useLang();
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];

  return (
    <section id="reviews" className="relative bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          invert
          eyebrow={t("Google Reviews", "गूगल समीक्षाएँ")}
          title={<>{t("Loved by", "पसंद किया")} <span className="text-gradient-gold">{t("Our Guests", "हमारे मेहमानों ने")}</span></>}
        />

        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={22} fill="currentColor" />
            ))}
          </div>
          <div className="font-display text-3xl text-ink">4.4 <span className="text-ink/50 text-lg">/ 5</span></div>
          <div className="text-sm text-ink/60">{t("Based on 3,620+ reviews", "3,620+ समीक्षाओं पर आधारित")}</div>
        </div>

        <div className="relative rounded-3xl border border-gold/25 bg-white p-8 md:p-14 shadow-[0_30px_80px_-40px_rgba(139,0,0,0.4)]">
          <Quote className="absolute -top-6 left-8 text-gold" size={48} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display text-xl md:text-2xl text-ink italic leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex justify-center text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="mt-3 font-semibold text-ink">— {r.name}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="rounded-full border border-ink/20 p-2 text-ink hover:bg-ink hover:text-beige transition" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-ink/20"}`}
                  aria-label={`Review ${k + 1}`}
                />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % reviews.length)} className="rounded-full border border-ink/20 p-2 text-ink hover:bg-ink hover:text-beige transition" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}