import { motion } from "framer-motion";
import { whyChoose } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function WhyChoose() {
  const { t } = useLang();
  return (
    <section className="relative bg-[#0d0d0d] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,154,44,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Why Choose Us", "हमें क्यों चुनें")}
          title={<>{t("Crafted for the", "बनाया गया है")} <span className="text-gradient-gold">{t("Discerning Guest", "खास मेहमानों के लिए")}</span></>}
          subtitle={t(
            "Nine reasons Sharda Dinings has become Gorakhpur's most beloved family address.",
            "नौ कारण जिनकी वजह से शारदा डाइनिंग्स गोरखपुर का सबसे पसंदीदा पारिवारिक ठिकाना बन चुका है।"
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.04)}
              whileHover={{ y: -6, borderColor: "rgba(196,154,44,0.6)" }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-maroon/25 text-gold ring-1 ring-gold/30 transition-transform group-hover:scale-110">
                  <c.icon size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl text-beige">{c.title}</h3>
                  <p className="mt-2 text-sm text-beige/65 leading-relaxed">{c.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}