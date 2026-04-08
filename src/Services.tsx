import React from "react";
import { useLanguage } from './LanguageContext';
import { getContent } from './content';
import { Building2, Hammer, Lightbulb } from 'lucide-react';

const icons = [Building2, Hammer, Lightbulb];

export default function Services() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-1 w-12 bg-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {content.services.title}
          </h2>
        </div>

        {/* Intro text */}
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          {content.services.intro}
        </p>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-sm border border-border hover:border-accent transition-colors hover:shadow-lg group"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-accent/10 rounded-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={28} className="text-accent group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Accent line */}
                <div className="mt-6 h-1 w-8 bg-accent/30 group-hover:bg-accent transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}