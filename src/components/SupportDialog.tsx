'use client';

import { FC } from 'react';
import { cn } from 'tailwind-variants';
import { XIcon } from './Icons/XIcon';

/**
 * Public-facing support contact info.
 * Centralised here so the footer, privacy policy, and any future surfaces stay in sync.
 */
export const SUPPORT_INFO = {
  businessName: 'Iconec Jewelry LLC-FZ',
  address: '726 Tamani Arts Building, Al Asayel St, Business Bay, Dubai, UAE',
  phone: '+971 56 511 3170',
  email: 'support@iconec.co',
} as const;

export interface SupportDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const SupportDialog: FC<SupportDialogProps> = ({ isOpen = false, onClose }) => {
  const telHref = `tel:${SUPPORT_INFO.phone.replace(/\s+/g, '')}`;
  const mailHref = `mailto:${SUPPORT_INFO.email}`;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-dialog-title"
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 flex items-center justify-center max-mobile:overflow-auto',
        'transition-all duration-300 ease-out z-20 bg-black/40 max-mobile:flex-col max-mobile:justify-start max-mobile:py-10',
        isOpen
          ? 'opacity-100 backdrop-blur-[75px] pointer-events-auto'
          : 'opacity-0 backdrop-blur-0 pointer-events-none',
      )}
    >
      <button
        type="button"
        aria-label="Close support"
        className={cn(
          'absolute top-[8%] left-[8%] ring-1 ring-white rounded-full size-11 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer',
          'max-mobile:relative max-mobile:size-9 max-mobile:top-0 max-mobile:left-0 max-mobile:mr-auto max-mobile:ml-6 max-mobile:mb-9 shrink-0',
        )}
        onClick={onClose}
      >
        <XIcon className="text-white-500" />
      </button>

      <div
        className={cn(
          'transition-all duration-300 ease-out',
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2',
        )}
      >
        <div className="max-w-130.25 w-full px-6 text-white">
          <header className="flex flex-col gap-2 pb-10">
            <h1 id="support-dialog-title" className="max-mobile:text-base">
              We&apos;re here to help.
            </h1>
            <h2 className="text-[#FFFFFF99] max-mobile:text-base">
              Reach out any time — we&apos;ll get back to you as soon as possible.
            </h2>
          </header>

          <dl className="flex flex-col gap-6">
            <ContactRow label="Business">
              <span>{SUPPORT_INFO.businessName}</span>
            </ContactRow>

            <ContactRow label="Address">
              <span>{SUPPORT_INFO.address}</span>
            </ContactRow>

            <ContactRow label="Phone">
              <a href={telHref} className="hover:underline underline-offset-4">
                {SUPPORT_INFO.phone}
              </a>
            </ContactRow>

            <ContactRow label="Email">
              <a href={mailHref} className="hover:underline underline-offset-4">
                {SUPPORT_INFO.email}
              </a>
            </ContactRow>
          </dl>
        </div>
      </div>
    </aside>
  );
};

interface ContactRowProps {
  label: string;
  children: React.ReactNode;
}

const ContactRow: FC<ContactRowProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[rgba(255,255,255,0.6)] text-sm uppercase tracking-wider">{label}</dt>
      <dd className="text-base max-mobile:text-[15px]">{children}</dd>
    </div>
  );
};
