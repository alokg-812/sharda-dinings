import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();
  const links = [
    { href: "#home", label: t("Home", "होम") },
    { href: "#about", label: t("About", "हमारे बारे में") },
    { href: "#menu", label: t("Menu", "मेन्यू") },
    { href: "#gallery", label: t("Gallery", "गैलरी") },
    { href: "#reviews", label: t("Reviews", "समीक्षाएँ") },
    { href: "#contact", label: t("Contact", "संपर्क") },
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-gold font-display text-lg">S</span>
          <div className="leading-tight">
            <div className="font-display text-lg text-beige tracking-wide">{t("Sharda Dinings", "शारदा डाइनिंग्स")}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{t("Since Forever", "सदा से")}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-beige/85 hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          {/* <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 text-xs uppercase tracking-widest text-gold hover:bg-gold/10 transition"
          >
            <Languages size={14} />
            {lang === "en" ? "हिं" : "EN"}
          </button> */}
          <a href="#contact" className="btn-gold text-sm">{t("Reserve Table", "टेबल बुक करें")}</a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          {/* <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1 rounded-full border border-gold/40 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold"
          >
            <Languages size={12} />
            {lang === "en" ? "हिं" : "EN"}
          </button> */}
          <button
            className="text-beige"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden border-t border-gold/20 bg-[#0d0d0d]/95 backdrop-blur-xl"
        >
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-beige/90 hover:text-gold border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold text-center mt-2">
              {t("Reserve Table", "टेबल बुक करें")}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}