import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacebookImageBanner from '@/components/FacebookImageBanner';

const GALLERY_ITEMS = [
  // Original 16
  { id: 'siding', image: '/images/gallery/new-ba-1.jpg', label: 'House Washing', },
  { id: 'driveway', image: '/images/gallery/new-ba-2.jpg', label: 'Driveway Cleaning', },
  { id: 'fence', image: '/images/gallery/new-ba-3.jpg', label: 'Fence Restoration', },
  { id: 'gutter', image: '/images/gallery/new-ba-4.jpg', label: 'Gutter Cleaning', },
  { id: 'sidewalk', image: '/images/gallery/new-ba-5.jpg', label: 'Walkway Cleaning', },
  { id: 'stone', image: '/images/gallery/stone-after.jpg', label: 'Stone Wall Cleaning', },
  { id: 'flowerbed', image: '/images/gallery/flowerbed-after.jpg', label: 'Flower Bed Border', },
  { id: 'roof', image: '/images/gallery/brick-roof.jpg', label: 'Roof Soft Wash', },
  { id: 'roof-metal', image: '/images/gallery/metal-roof.jpg', label: 'Metal Roof Cleaning', },
  { id: 'dock', image: '/images/gallery/dock.jpg', label: 'Boat Dock Cleaning', },
  { id: 'roof-house', image: '/images/gallery/roof-1.jpg', label: 'Exterior & Roof Wash', },
  { id: 'pier', image: '/images/gallery/pier-wash.jpg', label: 'Pier Wash', },
  { id: 'mobile-home', image: '/images/gallery/mobile-home.png', label: 'Mobile Home Soft Wash', },
  { id: 'concrete-wash', image: '/images/gallery/concrete-wash.jpg', label: 'Concrete Wash', },
  { id: 'beach-stairs', image: '/images/gallery/beach-stairs.jpg', label: 'Wooden Stairs Restoration', },
  { id: 'beach-walkway', image: '/images/gallery/beach-walkway.jpg', label: 'Beach Walkway Cleaning', },
  // NEW authentic job photos
  { id: 'real-sidewalk', image: '/images/sidewalk_both.webp', label: 'Concrete Sidewalk Cleaning', },
  { id: 'real-siding', image: '/images/siding_before.webp', label: 'House Siding Soft Wash', },
  { id: 'real-dock', image: '/images/dock.webp', label: 'Boat Dock Restoration', },
  { id: 'real-roof', image: '/images/mobil_home.webp', label: 'Metal Roof Soft Wash', },
  { id: 'real-action', image: '/images/patio_slab.webp', label: 'Surface Cleaner in Action', },
  { id: 'real-screen', image: '/images/screen_before.webp', label: 'Screen Enclosure Cleaning', },
  { id: 'real-fence', image: '/images/white_fence_composite.webp', label: 'White Fence Restoration', },
];

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group bg-black">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} before and after pressure washing`}
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
