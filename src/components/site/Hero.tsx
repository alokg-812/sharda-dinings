import { motion } from "framer-motion";
import { Star, Users, Sparkles, Shield } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  const stats = [
    { icon: Star, value: "4.4", label: t("Rating", "रेटिंग") },
    { icon: Users, value: "3620+", label: t("Reviews", "समीक्षाएँ") },
    { icon: Sparkles, value: t("Family", "फैमिली"), label: t("Restaurant", "रेस्टोरेंट") },
    { icon: Shield, value: "100%", label: t("Hygienic", "स्वच्छ") },
  ];
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Sharda Dinings ambience" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/60 to-[#0d0d0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,154,44,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-gold backdrop-blur"
        >
          <Sparkles size={14} /> {t("A Culinary Celebration", "एक पाक-कला उत्सव")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-gold"
        >
          SHARDA DININGS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 font-hindi text-3xl md:text-5xl text-beige"
          style={{ fontFamily: "var(--font-hindi)" }}
        >
          शारदा डाइनिंग्स
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-beige/80 italic"
        >
          {t(
            '"Authentic Flavours. Warm Hospitality. Memorable Experiences."',
            '"प्रामाणिक स्वाद। गर्मजोशी भरा आतिथ्य। यादगार अनुभव।"'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold">{t("Reserve a Table", "टेबल बुक करें")}</a>
          <a href="#menu" className="btn-outline-gold hover:bg-gold/10">{t("View Menu", "मेन्यू देखें")}</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl px-5 py-5 text-center"
            >
              <s.icon className="mx-auto mb-2 text-gold" size={22} />
              <div className="font-display text-2xl text-beige">{s.value}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-beige/70">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 text-xs tracking-widest"
      >
        {t("SCROLL", "स्क्रॉल")}
      </motion.div>
    </section>
  );
}