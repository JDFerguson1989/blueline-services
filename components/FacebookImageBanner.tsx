import Image from 'next/image';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61589064537386';
const IMG_SRC = '/images/social/follow-blueline-facebook-water-banner.png';
const IMG_ALT =
  'Follow BlueLine Services on Facebook for recent projects, before-and-after photos, updates, and local specials';

interface FacebookImageBannerProps {
  variant?: 'large' | 'compact';
}

export default function FacebookImageBanner({ variant = 'large' }: FacebookImageBannerProps) {
  const isLarge = variant === 'large';

  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full group"
      aria-label="Follow BlueLine Services on Facebook"
    >
      <div
        className={`
          mx-auto
          rounded-2xl
          border border-blue-500/30
          shadow-lg shadow-blue-900/30
          overflow-hidden
          transition-transform duration-300
          group-hover:scale-[1.015]
          group-hover:shadow-blue-900/50
          ${isLarge ? 'max-w-[1200px]' : 'max-w-[700px]'}
        `}
      >
        <Image
          src={IMG_SRC}
          alt={IMG_ALT}
          width={isLarge ? 1200 : 700}
          height={isLarge ? 300 : 200}
          className="w-full h-auto object-cover"
          priority={isLarge}
        />
      </div>
    </a>
  );
}
