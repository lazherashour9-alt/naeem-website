import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from './LanguageContext';
import { getContent } from './content';
import { Globe, Menu, X } from 'lucide-react';
import logo from './assets/logo.png';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const content = getContent(language);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#home", label: content.nav.home },
    { href: "#about", label: content.nav.about },
    { href: "#services", label: content.nav.services },
    { href: "#products", label: content.nav.products },
    { href: "#contact", label: content.nav.contact },
  ];
  const displayedLinks = language === 'ar' ? [...links].reverse() : links;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm relative">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Naeem Factory Logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">
              {language === 'ar' ? 'مصنع نعيم' : 'Naeem Factory'}
            </h1>
            <p className="text-xs text-muted-foreground">
              {language === 'ar' ? 'رخام وجرانيت' : 'Marble & Granite'}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {displayedLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href.substring(1))} className="text-foreground hover:text-accent transition-colors duration-300 hover:scale-105 text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <button onClick={toggleLanguage} className="hidden md:flex items-center gap-2 px-3 py-1 rounded-sm border border-border hover:bg-secondary transition-colors duration-300" aria-label="Toggle language">
          <Globe size={16} className="text-accent" />
          <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md border border-border hover:bg-secondary transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-sm border border-border hover:bg-secondary transition-colors duration-300" aria-label="Toggle language">
            <Globe size={16} className="text-accent" />
            <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute top-full inset-x-0 bg-white/95 backdrop-blur-sm border-t border-border shadow-md z-40 flex flex-col items-center py-4 gap-4">
          {displayedLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href.substring(1))} className="text-foreground hover:text-accent transition-colors duration-300 text-base font-medium">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
