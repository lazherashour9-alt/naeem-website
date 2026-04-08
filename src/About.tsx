import React from "react";
import { useLanguage } from './LanguageContext';
import { getContent } from './content';

export default function About() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Geometric divider */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-1 w-12 bg-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {content.about.title}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder with geometric accent */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-accent/20 rounded-sm" />
            <div className="relative bg-secondary rounded-sm overflow-hidden aspect-square">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/hero-bg-5Vyx7gqKJMNdFCbAGNRpiD.webp"
              alt="Naeem Factory"
              className="w-full h-full object-cover"
            />
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-sm" />
          </div>

          {/* Right: Text content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              {content.about.description}
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/10">
                  <span className="text-accent font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === 'ar' ? 'جودة مضمونة' : 'Quality Assured'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'معايير عالية في كل منتج'
                    : 'High standards in every product'}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/10">
                  <span className="text-accent font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === 'ar' ? 'خبرة عميقة' : 'Deep Expertise'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'أكثر من عقد من الخبرة'
                    : 'Over a decade of experience'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
