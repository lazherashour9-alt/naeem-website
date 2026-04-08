import React, { useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import { getContent } from "./content";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Footer() {
  const { language } = useLanguage();
  const content = getContent(language);

  // Format phone
  const rawPhone = content.footer.phone.replace(/\s+/g, "");
  const phoneNumber = rawPhone.startsWith("+218") ? rawPhone : `+218${rawPhone.replace(/^0/, "")}`;
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  // Google Maps link
  const mapsLink = "https://maps.google.com/?q=32.33125770663211,15.14155602383492";

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0.7, 1], [0, -90]);
  const bgScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.06]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.92]);

  const floatA = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), { stiffness: 50, damping: 18 });
  const floatB = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), { stiffness: 50, damping: 18 });

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  }), []);

  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}>
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" style={{ y: floatA }} />
      <motion.div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" style={{ y: floatB }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* Address */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="show" className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <MapPin className="text-cyan-300" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{language === "ar" ? "العنوان" : "Address"}</h3>
                <p className="text-sm text-white/80">{content.footer.address}</p>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-cyan-300 hover:underline text-sm">
                  {language === "ar" ? "فتح في خرائط Google" : "Open in Google Maps"}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="show" className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Phone className="text-emerald-300" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{language === "ar" ? "الهاتف" : "Phone"}</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <a href={`tel:${phoneNumber}`} className="text-sm text-white/80 hover:text-cyan-300">
                    <span dir="ltr">+218 {phoneNumber.replace("+218", "")}</span>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500/20 p-2 rounded-full hover:bg-green-500/30">
                    <span className="text-green-400 text-sm">WA</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="show" className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Mail className="text-amber-300" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{language === "ar" ? "البريد الإلكتروني" : "Email"}</h3>
                <a href={`mailto:${content.footer.email}`} className="text-sm text-white/80 hover:text-cyan-300">
                  {content.footer.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - MAP */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4051.678618653977!2d15.14155602383492!3d32.33125770663211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a151d0bfb26f2b%3A0x361c70ae79cdcbec!2z2YXYtdmG2Lkg2YbYudmK2YUg2YTZhNix2K7Yp9mFINmIINin2YTYrNix2KfZhtmK2KogMg!5e1!3m2!1sar!2sly!4v1775469169487!5m2!1sar!2sly"
              className="w-full h-[300px] md:h-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-white/10" />

        {/* Copyright */}
        <div className="pt-6 text-center text-sm text-white/60">
          {language === "ar" ? "جميع الحقوق محفوظة. مصنع نعيم © 2026" : "© 2026 Naeem Factory. All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
