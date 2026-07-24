import { motion } from "framer-motion";
import { services } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function Services() {
  const { t } = useLang();
  return (
    <section className="relative bg-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Services", "सेवाएँ")}
          title={<>{t("Everything,", "सब कुछ,")} <span className="text-gradient-gold">{t("Under One Roof", "एक ही छत के नीचे")}</span></>}
          subtitle={t(
            "From breakfast to dinner, dine-in to delivery — Sharda serves every craving.",
            "नाश्ते से डिनर तक, डाइन-इन से डिलीवरी तक — शारदा हर स्वाद के लिए हाज़िर है।"
          )}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp((i % 6) * 0.04)}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm hover:border-gold/40 hover:bg-gold/5 transition-colors"
            >
              <s.icon className="text-gold" size={26} />
              <div className="text-xs md:text-sm text-beige/85">{s.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}