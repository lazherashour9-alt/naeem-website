import React from "react";
import { getProductImageUrl } from './imageUrls';

export default function ProductCard({ name, image }) {
  const imageUrl = getProductImageUrl(image);

  return (
    <div className="group cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Product name */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {name}
      </h3>

      {/* Call for price button */}
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-3 px-4 py-2 text-sm font-medium text-accent border border-accent rounded-sm hover:bg-accent hover:text-white transition-colors"
      >
        Contact Us
      </button>
    </div>
  );
}