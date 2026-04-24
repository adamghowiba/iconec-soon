'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import GirlImage from '../../public/girl.png';
import { Button } from './Button';
import { Chip } from './Chip';
import { ContactForm } from './ContactForm';
import { SupportDialog } from './SupportDialog';

type DialogKey = 'waitlist' | 'support' | null;

const SUPPORT_PATH = '/support';
const HOME_PATH = '/';

export interface HomeScreenProps {
  /** Which dialog should be open when the screen mounts. */
  defaultDialog?: Exclude<DialogKey, null>;
}

/**
 * Shared landing screen used by both `/` and `/support`.
 *
 * Accepts a `defaultDialog` so the `/support` route can deep-link straight
 * into the support popup while keeping a single source of truth for the page.
 *
 * Dialog ↔ URL sync uses `window.history` directly rather than `router.push`
 * so toggling the support popup doesn't trigger a Next.js route change (which
 * would remount the page and visibly restart the background video).
 */
export const HomeScreen: FC<HomeScreenProps> = ({ defaultDialog }) => {
  const [dialog, setDialog] = useState<DialogKey>(defaultDialog ?? null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (dialog) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [dialog]);

  // Keep the dialog in sync with browser back/forward navigation.
  useEffect(() => {
    const syncFromUrl = () => {
      setDialog(window.location.pathname === SUPPORT_PATH ? 'support' : null);
    };
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const closeDialog = () => {
    setDialog(null);
    if (window.location.pathname !== HOME_PATH) {
      window.history.replaceState(null, '', HOME_PATH);
    }
  };

  const openSupport = () => {
    setDialog('support');
    if (window.location.pathname !== SUPPORT_PATH) {
      window.history.pushState(null, '', SUPPORT_PATH);
    }
  };

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
          <Image src="/iconec-logo.svg" alt="Iconec logo" width={240} height={92} />

          <h1 className="text-lg text-white max-mobile:text-[15px] font-fraunces italic">Always In Trend</h1>

          <h2 className="text-lg text-[#FFFFFFB2] max-mobile:text-[15px] max-mobile:max-w-57.5">
            Affordable luxury lifestyle brand catering to your jewelry needs.
          </h2>

          <div className="flex items-center gap-1.5">
            <Chip>Coming soon in 2026</Chip>
            <Chip>UAE</Chip>
          </div>

          <Button
            variant="primary"
            size="large"
            className="w-53.25 font-[450]"
            onClick={() => setDialog('waitlist')}
          >
            Join Waitlist
          </Button>
        </div>
      </div>

      <ContactForm isOpen={dialog === 'waitlist'} onClose={closeDialog} />
      <SupportDialog isOpen={dialog === 'support'} onClose={closeDialog} />

      <div className="absolute bottom-2 left-0 right-0 w-full flex items-center justify-center text-sm text-white/80 gap-6 z-10">
        <span>© 2026 Iconec Jewelry LLC-FZ | 726 Tamani Arts Building - Al Asayel St - Business Bay - Dubai UAE</span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openSupport}
            className="hover:underline hover:text-white/90 transition-colors cursor-pointer"
          >
            Support
          </button>
          <Link href="/legal/terms" className="hover:underline hover:text-white/90 transition-colors cursor-pointer">
            Terms
          </Link>
          <Link href="/legal/privacy" className="hover:underline hover:text-white/90 transition-colors cursor-pointer">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};
