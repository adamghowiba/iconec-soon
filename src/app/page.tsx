'use client';

import Image from 'next/image';
import GirlImage from '../../public/girl.png';
import { Chip } from '@/components/Chip';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (open) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [open]);

  return (
    <div
      className="size-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${GirlImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        ref={videoRef}
      >
        <source src="/iconec_video.mp4" type="video/mp4" />
      </video>

      <div className="z-10 bg-black/30 size-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-6 z-10">
          <Image src="/iconec_logo.png" alt="Iconec logo" width={240} height={89.02} />

          <h1 className="text-lg text-white max-mobile:text-[15px]">Always. In. Trend.</h1>

          <h2 className="text-lg text-[#FFFFFFB2] max-mobile:text-[15px] max-mobile:max-w-57.5">
            Affordable luxury lifestyle brand catering to your jewelry needs.
          </h2>

          <div className="flex items-center gap-1.5">
            <Chip>Coming soon in 2026</Chip>
            <Chip>UAE</Chip>
          </div>

          <Button variant="primary" size="large" className="w-53.25 font-[450]" onClick={() => setOpen(true)}>
            Join Waitlist
          </Button>
        </div>
      </div>

      <ContactForm isOpen={open} onClose={() => setOpen(false)} />

      <div className="absolute bottom-2 left-0 right-0 w-full flex items-center justify-center text-sm text-white/80 gap-6 z-10">
        <span>© 2026 Iconec Jewelry LLC-FZ</span>

        <div className="flex items-center gap-2">
          <Link href="/legal/terms" className="hover:underline hover:text-white/90 transition-colors cursor-pointer">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
