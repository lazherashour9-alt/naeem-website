import React from "react";
import { useLanguage } from './LanguageContext';
import { getContent } from './content';
import ProductCard from './ProductCard';

export default function Products() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-1 w-12 bg-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {content.products.title}
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.items.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}