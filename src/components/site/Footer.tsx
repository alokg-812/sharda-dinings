import { Facebook, Instagram, Youtube, Phone, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const quick = [
    { href: "#home", label: t("Home", "होम") },
    { href: "#about", label: t("About", "हमारे बारे में") },
    { href: "#menu", label: t("Menu", "मेन्यू") },
    { href: "#gallery", label: t("Gallery", "गैलरी") },
    { href: "#reviews", label: t("Reviews", "समीक्षाएँ") },
    { href: "#contact", label: t("Contact", "संपर्क") },
  ];
  return (
    <footer className="border-t border-gold/20 bg-[#0a0a0a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 font-display text-2xl text-gold">S</span>
              <div>
                <div className="font-display text-xl text-beige">{t("Sharda Dinings", "शारदा डाइनिंग्स")}</div>
                <div className="font-hindi text-sm text-gold" style={{ fontFamily: "var(--font-hindi)" }}>शारदा डाइनिंग्स</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-beige/60 leading-relaxed">
              {t(
                "Where every meal becomes a celebration. Authentic North Indian and Chinese cuisine in the heart of Gorakhpur.",
                "जहाँ हर भोजन एक उत्सव बन जाता है। गोरखपुर के दिल में प्रामाणिक उत्तर भारतीय और चाइनीज़ व्यंजन।"
              )}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-gold">{t("Quick Links", "त्वरित लिंक")}</h4>
            <ul className="space-y-2 text-sm">
              {quick.map((l) => (
                <li key={l.href}><a href={l.href} className="text-beige/70 hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-gold">{t("Reach Us", "संपर्क करें")}</h4>
            <ul className="space-y-3 text-sm text-beige/70">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> {t("Gorakhnath Road, Gorakhpur, UP 273015", "गोरखनाथ रोड, गोरखपुर, यूपी 273015")}</li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-gold" /> +91 87268 27777</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-beige/50 md:flex-row">
          <div>© {new Date().getFullYear()} {t("Sharda Dinings. All rights reserved.", "शारदा डाइनिंग्स। सर्वाधिकार सुरक्षित।")}</div>
          <div>{t("Designed with", "बनाया गया")} <span className="text-maroon">❤️</span> {t("for food lovers.", "खाने के शौकीनों के लिए।")}</div>
        </div>
      </div>
    </footer>
  );
}