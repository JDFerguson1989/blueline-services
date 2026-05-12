import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacebookImageBanner from '@/components/FacebookImageBanner';

const GALLERY_ITEMS = [
  {
    id: 'house-siding',
    image: '/images/gallery/house-siding-cleaning-composite.webp',
    label: 'House Washing',
  },
  {
    id: 'fence',
    image: '/images/gallery/fence-restoration-composite.webp',
    label: 'Fence Restoration',
  },
  {
    id: 'driveway-split',
    image: '/images/gallery/new-ba-2.webp',
    label: 'Driveway Cleaning',
  },
  {
    id: 'stone-wall',
    image: '/images/gallery/stone-wall-cleaning-composite.webp',
    label: 'Stone Wall Cleaning',
  },
  {
    id: 'sidewalk',
    image: '/images/gallery/sidewalk-cleaning-composite.webp',
    label: 'Sidewalk Cleaning',
  },
  {
    id: 'roof-soft-wash',
    image: '/images/gallery/roof-soft-wash-composite.webp',
    label: 'Roof Soft Wash',
  },
  {
    id: 'roof-ba',
    image: '/images/gallery/new-ba-1.webp',
    label: 'Roof Cleaning',
  },
  {
    id: 'screen-enclosure',
    image: '/images/gallery/screen-enclosure-cleaning-composite.webp',
    label: 'Screen Enclosure Cleaning',
  },
  {
    id: 'flowerbed-border',
    image: '/images/gallery/flowerbed-border-cleaning-composite.webp',
    label: 'Flower Bed Border Cleaning',
  },
  {
    id: 'wooden-stairs',
    image: '/images/gallery/wooden-stairs-restoration-composite.webp',
    label: 'Wooden Stairs Restoration',
  },
  {
    id: 'beach-boardwalk',
    image: '/images/gallery/beach-boardwalk-cleaning-composite.webp',
    label: 'Beach Boardwalk Cleaning',
  },
  {
    id: 'patio-concrete',
    image: '/images/gallery/patio-concrete-pressure-washing.webp',
    label: 'Patio & Concrete Cleaning',
  },
  {
    id: 'boathouse',
    image: '/images/gallery/boathouse-cleaning.webp',
    label: 'Boathouse Cleaning',
  },
  {
    id: 'dock',
    image: '/images/gallery/dock-pressure-washing.webp',
    label: 'Boat Dock Cleaning',
  },
  {
    id: 'pier',
    image: '/images/gallery/pier-wash.webp',
    label: 'Pier Wash',
  },
  {
    id: 'beach-stairs',
    image: '/images/gallery/beach-stairs.webp',
    label: 'Beach Stairs Cleaning',
  },
  {
    id: 'beach-walkway',
    image: '/images/gallery/beach-walkway.webp',
    label: 'Beach Walkway Cleaning',
  },
  {
    id: 'balcony-patio',
    image: '/images/gallery/balcony-patio-cleaning.webp',
    label: 'Balcony & Patio Cleaning',
  },
  {
    id: 'algae',
    image: '/images/gallery/algae-removal-after.webp',
    label: 'Algae Removal',
  },
  {
    id: 'brick-driveway',
    image: '/images/gallery/brick-driveway-cleaning-composite.webp',
    label: 'Brick Driveway Cleaning',
  },
  {
    id: 'fence-action',
    image: '/images/gallery/new-ba-3.webp',
    label: 'Fence Cleaning',
  },
  {
    id: 'walkway',
    image: '/images/gallery/new-ba-5.webp',
    label: 'Walkway Cleaning',
  },
  {
    id: 'gutter',
    image: '/images/gallery/new-ba-4.webp',
    label: 'Gutter Cleaning',
  },
  {
    id: 'mobile-home',
    image: '/images/gallery/mobile-home-soft-wash.webp',
    label: 'Mobile Home Soft Wash',
  },
  {
    id: 'metal-roof',
    image: '/images/gallery/metal-roof.webp',
    label: 'Metal Roof Cleaning',
  },
  {
    id: 'roof-house',
    image: '/images/gallery/roof-1.webp',
    label: 'Roof Cleaning',
  },
  {
    id: 'brick-roof',
    image: '/images/gallery/brick-roof.webp',
    label: 'Brick & Roof Cleaning',
  },
  {
    id: 'concrete',
    image: '/images/gallery/concrete-wash.webp',
    label: 'Concrete Pressure Washing',
  },
];

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group bg-black">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} by BlueLine Services`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="p-4 border-t border-blue-900/30">
        <span className="text-white text-sm font-bold">{item.label}</span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[#040d1a] pt-28 pb-12 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Before & After Gallery
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Service examples and project inspiration showing the clean, refreshed look BlueLine Services is built to deliver for homes, rentals, driveways, docks, and exterior surfaces in your community.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40">
            Get Your Free Quote
          </a>
          <p className="text-gray-500 text-[10px] mt-4 max-w-2xl mx-auto">
            Images in this section may include representative examples until more completed BlueLine project photos are added.
          </p>
        </div>
      </section>
      <section className="bg-[#040d1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {GALLERY_ITEMS.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#040d1a] py-16 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to See Your Property Transformed?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Serving Bay City, Lake Jackson, Angleton, Clute, Freeport, Sweeny, and the entire Texas Gulf Coast.
          </p>
          <a href="tel:8325578758" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40 mr-4">
            Call (832) 557-8758
          </a>
          <a href="/contact" className="inline-block bg-transparent hover:bg-blue-900/30 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40">
            Get a Free Quote
          </a>
        </div>
      </section>
      <div className="bg-navy-900 py-6 md:py-8 px-4"><FacebookImageBanner variant="small" /></div>
      <Footer />
    </main>
  );
}
