import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { foods } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function FeaturedFoods() {
  const { t } = useLang();
  return (
    <section className="relative bg-[#111] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Featured Dishes", "खास व्यंजन")}
          title={<>{t("Signature", "सिग्नेचर")} <span className="text-gradient-gold">{t("Plates", "थाली")}</span></>}
          subtitle={t(
            "From smoky tandoor kebabs to slow-dum biryanis — the flavours our guests come back for.",
            "तंदूर के धुएँदार कबाब से लेकर दम बिरयानी तक — वो स्वाद जिनके लिए मेहमान बार-बार आते हैं।"
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((f, i) => (
            <motion.article
              key={f.name}
              {...fadeUp(i * 0.04)}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-[0_25px_60px_-40px_rgba(196,154,44,0.6)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-gold backdrop-blur">
                  {f.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-sm font-bold text-ink shadow-lg">
                  {f.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-beige">{f.name}</h3>
                <p className="mt-2 text-sm text-beige/60 leading-relaxed line-clamp-2">{f.description}</p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-beige transition-all hover:bg-gold hover:text-ink">
                  <ShoppingBag size={15} /> {t("Order Now", "अभी ऑर्डर करें")}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}