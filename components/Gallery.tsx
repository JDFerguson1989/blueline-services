import Image from 'next/image';

const GALLERY_ITEMS = [
  // Original 16 items (as of commit 7a9a64b)
  {
    id: 'siding',
    image: '/images/gallery/new-ba-1.jpg',
    label: 'House Washing',
  },
  {
    id: 'driveway',
    image: '/images/gallery/new-ba-2.jpg',
    label: 'Driveway Cleaning',
  },
  {
    id: 'fence',
    image: '/images/gallery/new-ba-3.jpg',
    label: 'Fence Restoration',
  },
  {
    id: 'gutter',
    image: '/images/gallery/new-ba-4.jpg',
    label: 'Gutter Cleaning',
  },
  {
    id: 'sidewalk',
    image: '/images/gallery/new-ba-5.jpg',
    label: 'Walkway Cleaning',
  },
  {
    id: 'stone',
    image: '/images/stone_composite.webp',
    label: 'Stone Wall Cleaning',
  },
  {
    id: 'flowerbed',
    image: '/images/flowerbed_composite.webp',
    label: 'Flower Bed Border',
  },
  {
    id: 'roof',
    image: '/images/gallery/brick-roof.jpg',
    label: 'Roof Soft Wash',
  },
  {
    id: 'roof-metal',
    image: '/images/gallery/metal-roof.jpg',
    label: 'Metal Roof Cleaning',
  },
  {
    id: 'dock',
    image: '/images/gallery/dock.jpg',
    label: 'Boat Dock Cleaning',
  },
  {
    id: 'roof-house',
    image: '/images/gallery/roof-1.jpg',
    label: 'Exterior & Roof Wash',
  },
  {
    id: 'pier',
    image: '/images/gallery/pier-wash.jpg',
    label: 'Pier Wash',
  },
  {
    id: 'mobile-home',
    image: '/images/gallery/mobile-home.png',
    label: 'Mobile Home Soft Wash',
  },
  {
    id: 'concrete-wash',
    image: '/images/gallery/concrete-wash.jpg',
    label: 'Concrete Wash',
  },
  {
    id: 'beach-stairs',
    image: '/images/gallery/beach-stairs.jpg',
    label: 'Wooden Stairs Restoration',
  },
  {
    id: 'beach-walkway',
    image: '/images/gallery/beach-walkway.jpg',
    label: 'Beach Walkway Cleaning',
  },
  // NEW: Real job photos from Google Drive
  {
    id: 'real-sidewalk',
    image: '/images/sidewalk_both.webp',
    label: 'Concrete Sidewalk Cleaning',
  },
  {
    id: 'real-siding',
    image: '/images/siding_before.webp',
    label: 'House Siding Soft Wash',
  },
  {
    id: 'real-dock',
    image: '/images/dock.webp',
    label: 'Boat Dock Restoration',
  },
  {
    id: 'real-roof',
    image: '/images/mobil_home.webp',
    label: 'Metal Roof Soft Wash',
  },
  {
    id: 'real-action',
    image: '/images/patio_slab.webp',
    label: 'Surface Cleaner in Action',
  },
  {
    id: 'real-screen',
    image: '/images/screen_before.webp',
    label: 'Screen Enclosure Cleaning',
  },
  {
    id: 'real-fence',
    image: '/images/white_fence_composite.webp',
    label: 'White Fence Restoration',
  },
];

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  return (
    <div id={`gallery-${item.id}`} className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group h-56 lg:h-64 bg-black">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} before and after`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>

      {/* Label */}
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
            <h2 className="section-title text-white font-display">SEE THE DIFFERENCE</h2>
            <div className="flex-1 h-px bg-blue-600/40 max-w-[180px]" />
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Service examples and project inspiration showing the clean, refreshed look BlueLine Services is built to deliver for homes, rentals, driveways, docks, and exterior surfaces in your community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        <p className="text-center text-gray-500 text-[10px] mt-6 max-w-2xl mx-auto">
          Images in this section may include representative examples until more completed BlueLine project photos are added.
        </p>

        {/* CTA to full gallery */}
        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
