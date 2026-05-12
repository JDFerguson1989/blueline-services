import Image from 'next/image';

const GALLERY_ITEMS = [
  {
    id: 'house-siding',
    image: '/images/gallery/house-siding-cleaning-landscape.webp',
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
    image: '/images/gallery/balcony-patio-cleaning-landscape.webp',
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
    <div id={`gallery-${item.id}`} className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group h-56 lg:h-64 bg-black">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} by BlueLine Services`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[11px] lg:text-xs font-bold px-3 lg:px-4 py-1.5 rounded-full border border-blue-500/40 whitespace-nowrap shadow-lg z-10 pointer-events-none">
        {item.label}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#040d1a] py-20 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
            <h2 className="section-title text-white font-display">SEE THE DIFFERENCE</h2>
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Real results from real jobs in your community. This is what BlueLine Services delivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
