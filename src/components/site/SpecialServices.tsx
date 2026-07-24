import { motion } from "framer-motion";
import { specialServices } from "./data";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function SpecialServices() {
  const { t } = useLang();
  return (
    <section className="relative bg-gradient-to-b from-[#0d0d0d] via-[#140b0b] to-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Special Services", "विशेष सेवाएँ")}
          title={<>{t("Occasions,", "अवसर,")} <span className="text-gradient-gold">{t("Elevated", "और भी खास")}</span></>}
          subtitle={t(
            "From private dinners to rooftop soirées — we host it, you enjoy it.",
            "प्राइवेट डिनर से रूफटॉप शाम तक — मेज़बानी हमारी, आनंद आपका।"
          )}
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {specialServices.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.05)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.03] p-8 text-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-maroon/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#8a6a1a] text-white shadow-lg transition-transform group-hover:rotate-6">
                  <s.icon size={26} />
                </div>
                <h3 className="font-display text-lg text-beige">{s.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}