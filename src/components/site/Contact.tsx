import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { SectionHeader, fadeUp } from "./Section";
import { useLang } from "@/lib/i18n";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLang();
  return (
    <section id="contact" className="relative bg-[#0f0806] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,0,0,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("Reserve · Visit · Connect", "बुक करें · मिलें · जुड़ें")}
          title={<>{t("Come", "आइए")} <span className="text-gradient-gold">{t("Dine With Us", "हमारे साथ भोजन करें")}</span></>}
          subtitle={t(
            "Reserve your table or drop a message — we'd love to host you.",
            "अपनी टेबल बुक करें या संदेश भेजें — मेज़बानी में हमें ख़ुशी होगी।"
          )}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...fadeUp(0)} className="space-y-6">
            <div className="rounded-3xl border border-gold/20 bg-white/[0.03] p-7 backdrop-blur-sm">
              <h3 className="font-display text-2xl text-beige">{t("Sharda Dinings", "शारदा डाइनिंग्स")}</h3>
              <div className="mt-2 font-hindi text-lg text-gold" style={{ fontFamily: "var(--font-hindi)" }}>शारदा डाइनिंग्स</div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3 text-beige/85">
                  <MapPin className="shrink-0 text-gold" size={20} />
                  <div>{t("Gorakhnath Road, Rajendra Nagar,", "गोरखनाथ रोड, राजेंद्र नगर,")}<br />{t("Gorakhpur, Uttar Pradesh 273015", "गोरखपुर, उत्तर प्रदेश 273015")}</div>
                </div>
                <a href="tel:+918726827777" className="flex gap-3 text-beige/85 hover:text-gold">
                  <Phone className="shrink-0 text-gold" size={20} />
                  <div>+91 87268 27777</div>
                </a>
                <div className="flex gap-3 text-beige/85">
                  <Clock className="shrink-0 text-gold" size={20} />
                  <div>{t("Open Daily · 12 PM — 12 AM", "रोज़ खुला · दोपहर 12 — रात 12")}</div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gold/20">
              <iframe
                title="Sharda Dinings Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3561.690881249774!2d83.3541778!3d26.7861218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145298e625461%3A0x5128b876f4c96957!2sSharda%20dinings!5e0!3m2!1sen!2sin!4v1784875892557!5m2!1sen!2sin"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            {...fadeUp(0.1)}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
            className="rounded-3xl border border-gold/25 bg-white/[0.04] p-7 backdrop-blur-sm"
          >
            <h3 className="font-display text-2xl text-beige">{t("Send us a message", "हमें संदेश भेजें")}</h3>
            <p className="mt-1 text-sm text-beige/60">{t("We'll get back within a few hours.", "हम कुछ ही घंटों में जवाब देंगे।")}</p>
            <div className="mt-6 grid gap-4">
              {[
                { name: "name", type: "text", label: t("Full Name", "पूरा नाम"), required: true },
                { name: "email", type: "email", label: t("Email", "ईमेल"), required: true },
                { name: "phone", type: "tel", label: t("Phone", "फ़ोन"), required: true },
              ].map((f) => (
                <input
                  key={f.name}
                  type={f.type}
                  required={f.required}
                  placeholder={f.label}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-beige placeholder:text-beige/40 outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
                />
              ))}
              <textarea
                rows={5}
                required
                placeholder={t("Your message", "आपका संदेश")}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-beige placeholder:text-beige/40 outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
              />
              <button type="submit" className="btn-gold inline-flex items-center justify-center gap-2">
                <Send size={16} /> {sent ? t("Message Sent ✓", "संदेश भेज दिया ✓") : t("Send Message", "संदेश भेजें")}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}