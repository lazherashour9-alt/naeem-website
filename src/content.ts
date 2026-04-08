export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
    },
    hero: {
      title: 'Naeem Factory',
      subtitle: 'Premium Marble, Natural Stones & Granite',
      cta: 'Explore Products',
    },
    about: {
      title: 'About Us',
      description: 'Naeem Factory for Polishing and Cutting Marble and Granite. Established in 2012 (License No. 2012-2732 issued by the Ministry of Economy and Trade, Misrata) to keep pace with the urban renaissance in Libya and meet the local market\'s needs for the finest marble and granite. We combine the supply of raw materials from local and global quarries with professional installation services and technical consultations based on years of industry experience.',
    },
    services: {
      title: 'Our Services',
      intro: 'We provide a wide range of marble and granite that meets various tastes and construction requirements, focusing on quality that ensures resistance to moisture and weathering:',
      items: [
        {
          title: 'Facades and Floors',
          description: 'Supply and installation with standard specifications.',
        },
        {
          title: 'Detailed Finishes',
          description: 'Execution of door thresholds, window frames, and kitchens.',
        },
        {
          title: 'Technical Support',
          description: 'Specialized consultations in choosing the most suitable colors and materials for every space.',
        },
      ],
    },
    products: {
      title: 'Top Selling Products',
      items: [
        { name: 'Silvia Marble', image: 'silvia.webp' },
        { name: 'Panorama (Sunny Minya) Marble', image: 'panorama.webp' },
        { name: 'New Halayeb Granite', image: 'new-halayeb.webp' },
        { name: 'Turkish Marmara Marble', image: 'marmara.webp' },
        { name: 'Indian Galaxy Granite', image: 'galaxy.webp' },
        { name: 'Indian Blackberry Granite', image: 'blackberry.webp' },
        { name: 'Omani Creamy Marble', image: 'omani-creamy.webp' },
        { name: 'Turkish Crema Nova Marble', image: 'crema-nova.webp' },
      ],
    },
    footer: {
      address: 'Road No. 4 (leading to the heavy transport road), near Sukairat Island, Al-Sukairat area, Misrata',
      phone: '0913278006',
      email: 'Info@naim.ly',
      copyright: '© 2024 Naeem Factory. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'الخدمات',
      products: 'المنتجات',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'مصنع نعيم',
      subtitle: 'رخام وأحجار طبيعية وجرانيت فاخر',
      cta: 'استكشف المنتجات',
    },
    about: {
      title: 'عن المصنع',
      description: 'مصنع نعيم لجلي و قص الرخام و الجرانيت. تأسس مصنع نعيم سنة 2012 برقم ترخيص 2012-2732 الصادرة من وزارة الاقتصاد والتجارة مصراته، وهذا لمواكبة النهضة العمرانية في ليبيا، وتلبية احتياجات السوق المحلي من أجود خامات الرخام والجرانيت المستخدمة في بناء المساكن والمشاريع التجارية. نحن نجمع بين توريد الخامات المتوفرة من المحاجر المحلية والعالمية، وبين تقديم خدمات التركيب الاحترافية والاستشارات الفنية المبنية على خبرة سنوات في هذا المجال.',
    },
    services: {
      title: 'خدماتنا',
      intro: 'نوفر تشكيلة واسعة من الرخام والجرانيت التي تلبي مختلف الأذواق والمتطلبات الإنشائية، مع التركيز على الجودة التي تضمن مقاومة الرطوبة وعوامل الجو:',
      items: [
        {
          title: 'الواجهات والأرضيات',
          description: 'توريد وتركيب بمواصفات قياسية.',
        },
        {
          title: 'التشطيبات التفصيلية',
          description: 'تنفيذ عتبات الأبواب، إطارات النوافذ، والمطابخ.',
        },
        {
          title: 'الدعم الفني',
          description: 'استشارات متخصصة في اختيار الألوان والخامات الأنسب لكل مساحة.',
        },
      ],
    },
    products: {
      title: 'أفضل المنتجات مبيعاً',
      items: [
        { name: 'رخام سيلفيا', image: 'silvia.webp' },
        { name: 'رخام بانوراما (صني منيا)', image: 'panorama.webp' },
        { name: 'جرانيت نيو حلايب', image: 'new-halayeb.webp' },
        { name: 'رخام مرمرة تركي', image: 'marmara.webp' },
        { name: 'جرانيت جلاكسي هندي', image: 'galaxy.webp' },
        { name: 'جرانيت بلاك بيري هندي', image: 'blackberry.webp' },
        { name: 'رخام عماني كريمي', image: 'omani-creamy.webp' },
        { name: 'رخام كريما نوفا تركي', image: 'crema-nova.webp' },
      ],
    },
    footer: {
      address: 'طريق رقم 4 (المؤدي إلى طريق النقل الثقيل)، بالقرب من جزيرة السكرات منطقة السكيرات، مصراته',
      phone: '0913278006',
      email: 'Info@naim.ly',
      copyright: '© 2024 مصنع نعيم. جميع الحقوق محفوظة.',
    },
  },
};

export type Language = 'en' | 'ar';

export function getContent(lang: Language) {
  return content[lang];
}
