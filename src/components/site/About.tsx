import { motion } from "framer-motion";
import { aboutCards } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          invert
          eyebrow={t("About Us", "हमारे बारे में")}
          title={<>{t("A Warm Table,", "एक गर्मजोशी भरी टेबल,")} <span className="text-gradient-gold">{t("Every Day", "हर दिन")}</span></>}
          subtitle={t(
            "At Sharda Dinings we bring together authentic North Indian classics, wok-fresh Chinese favourites and the kind of hospitality that turns first visits into family traditions.",
            "शारदा डाइनिंग्स में हम प्रामाणिक उत्तर भारतीय व्यंजन, ताज़ा चाइनीज़ पसंदीदा और वो आतिथ्य लाते हैं जो पहली बार आने वालों को परिवार बना देता है।"
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.05)}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(139,0,0,0.35)] transition-shadow hover:shadow-[0_30px_60px_-25px_rgba(196,154,44,0.4)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-gold/20 to-maroon/10 blur-xl" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-[#8a6a1a] text-white shadow-lg">
                  <c.icon size={22} />
                </div>
                <h3 className="font-display text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}