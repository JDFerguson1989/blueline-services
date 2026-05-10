import Image from 'next/image';

const GALLERY_ITEMS = [
  {
    id: 'sidewalk',
    image: '/images/sidewalk_both.webp',
    label: 'Concrete Sidewalk Cleaning',
    location: 'Bay City, TX',
  },
  {
    id: 'siding',
    image: '/images/siding_before.webp',
    label: 'House Siding Soft Wash',
    location: 'Matagorda County, TX',
  },
  {
    id: 'dock',
    image: '/images/dock.webp',
    label: 'Boat Dock Restoration',
    location: 'Gulf Coast, TX',
  },
  {
    id: 'roof',
    image: '/images/mobil_home.webp',
    label: 'Metal Roof Soft Wash',
    location: 'Brazoria County, TX',
  },
  {
    id: 'patio',
    image: '/images/algae_after.webp',
    label: 'Algae & Mildew Removal',
    location: 'Lake Jackson, TX',
  },
  {
    id: 'action',
    image: '/images/patio_slab.webp',
    label: 'Surface Cleaner in Action',
    location: 'Angleton, TX',
  },
  {
    id: 'screen',
    image: '/images/screen_before.webp',
    label: 'Screen Enclosure Cleaning',
    location: 'Clute, TX',
  },
  {
    id: 'fence',
    image: '/images/white_fence_b4.webp',
    label: 'White Fence Restoration',
    location: 'Van Vleck, TX',
  },
];

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  return (
    <div id={`gallery-${item.id}`} className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group h-56 lg:h-64 bg-black">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} before and after pressure washing in ${item.location}`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[11px] lg:text-xs font-bold px-3 lg:px-4 py-1.5 rounded-full border border-blue-500/40 whitespace-nowrap shadow-lg z-10 pointer-events-none">
        {item.label}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg z-10 pointer-events-none">
        {item.location}
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
            Real before-and-after results from actual jobs across the Texas Gulf Coast. No stock photos. No AI. Just honest work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

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
