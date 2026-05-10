import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacebookImageBanner from '@/components/FacebookImageBanner';

const GALLERY_ITEMS = [
  {
    id: 'sidewalk',
    image: '/images/sidewalk_both.webp',
    label: 'Concrete Sidewalk Cleaning',
    location: 'Bay City, TX',
    desc: 'Years of dirt and organic buildup removed in a single session.',
  },
  {
    id: 'siding',
    image: '/images/siding_before.webp',
    label: 'House Siding Soft Wash',
    location: 'Matagorda County, TX',
    desc: 'Algae and mildew safely removed without damaging vinyl or paint.',
  },
  {
    id: 'dock',
    image: '/images/dock.webp',
    label: 'Boat Dock Restoration',
    location: 'Gulf Coast, TX',
    desc: 'Weathered dock wood brought back to life with professional cleaning.',
  },
  {
    id: 'roof',
    image: '/images/mobil_home.webp',
    label: 'Metal Roof Soft Wash',
    location: 'Brazoria County, TX',
    desc: 'Black streaks and oxidation eliminated with low-pressure treatment.',
  },
  {
    id: 'patio',
    image: '/images/algae_after.webp',
    label: 'Algae & Mildew Removal',
    location: 'Lake Jackson, TX',
    desc: 'Green algae growth under deck completely eradicated.',
  },
  {
    id: 'action',
    image: '/images/patio_slab.webp',
    label: 'Surface Cleaner in Action',
    location: 'Angleton, TX',
    desc: 'Industrial surface cleaner delivering consistent results on concrete.',
  },
  {
    id: 'screen',
    image: '/images/screen_before.webp',
    label: 'Screen Enclosure Cleaning',
    location: 'Clute, TX',
    desc: 'Dirt and pollen buildup removed from pool cage screens and frames.',
  },
  {
    id: 'fence',
    image: '/images/white_fence_b4.webp',
    label: 'White Fence Restoration',
    location: 'Van Vleck, TX',
    desc: 'Mildew-stained white vinyl fence restored to original brightness.',
  },
  {
    id: 'fence-after',
    image: '/images/whitefenceafter.webp',
    label: 'White Fence After',
    location: 'Van Vleck, TX',
    desc: 'Final result after cleaning and brightening treatment.',
  },
  {
    id: 'brick',
    image: '/images/brick_driveway_before.webp',
    label: 'Paver Driveway Before',
    location: 'Markham, TX',
    desc: 'Faded, dirty paver bricks before professional restoration.',
  },
  {
    id: 'brick-after',
    image: '/images/brick_driveway.webp',
    label: 'Paver Driveway After',
    location: 'Markham, TX',
    desc: 'Clean, vibrant paver surface after pressure washing and sealing.',
  },
  {
    id: 'roof-before',
    image: '/images/roofb4.webp',
    label: 'Roof Before Cleaning',
    location: 'Sweeny, TX',
    desc: 'Heavily oxidized and stained metal roof before treatment.',
  },
  {
    id: 'roof-after',
    image: '/images/roof_after.webp',
    label: 'Roof After Cleaning',
    location: 'Sweeny, TX',
    desc: 'Bright, clean metal roof surface after soft wash application.',
  },
];

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(4,13,26,0.8)] border border-blue-900/40 group bg-black">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.label} before and after pressure washing in ${item.location}`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="p-4 border-t border-blue-900/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm font-bold">{item.label}</span>
          <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {item.location}
          </span>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#040d1a] pt-28 pb-12 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Real Results. Real Jobs. Real Texas Gulf Coast.
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Every photo here is from an actual BlueLine Services job. No stock imagery. No AI generation. No borrowed marketing shots. Just honest before-and-after proof of what professional pressure washing can do for your property.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#040d1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {GALLERY_ITEMS.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#040d1a] py-16 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to See Your Property Transformed?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Serving Bay City, Lake Jackson, Angleton, Clute, Freeport, Sweeny, and the entire Texas Gulf Coast.
          </p>
          <a
            href="tel:8325578758"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40 mr-4"
          >
            Call (832) 557-8758
          </a>
          <a
            href="/contact"
            className="inline-block bg-transparent hover:bg-blue-900/30 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors duration-200 border border-blue-500/40"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <div className="bg-navy-900 py-6 md:py-8 px-4">
        <FacebookImageBanner variant="small" />
      </div>
      <Footer />
    </main>
  );
}
