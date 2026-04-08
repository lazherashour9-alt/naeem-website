export const imageUrls = {
  hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/hero-bg-5Vyx7gqKJMNdFCbAGNRpiD.webp',
  footer: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/footer-bg-2K2PXNEty4kAbCjmoFw6MY.webp',
  products: {
    'silvia.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/silvia-GWKHtPro2jjpTNgDhG3rEn.webp',
    'panorama.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/panorama-cUGsFNUsmQdygHHFgeXzUx.webp',
    'new-halayeb.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/new-halayeb-Ew4WQvteXrZnSLgona2tMX.webp',
    'marmara.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/marmara-kKU6EHjHHZybCu4dAPWQ8P.webp',
    'galaxy.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/galaxy-nXgEu5KnQgUPraFdJUDHZ3.webp',
    'blackberry.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/blackberry-GpeCpPxvJs8Wy9pLAm8YqZ.webp',
    'omani-creamy.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/omani-creamy-6XDdygNePobT7gzUjqaXsQ.webp',
    'crema-nova.webp': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663358600671/E3jX36AT5dRYuGE5ALH9Ej/crema-nova-5Naar5xGCueyNdi9yMtiMB.webp',
  },
};

export function getProductImageUrl(filename: string): string {
  return imageUrls.products[filename as keyof typeof imageUrls.products] || '';
}
