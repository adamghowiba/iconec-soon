import { XIcon } from '@/components/Icons/XIcon';
import Link from 'next/link';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col">
      <Link href="/">
        <button className="ml-auto absolute right-6 top-6 hover:bg-black/5 rounded-full p-1 flex items-center justify-center transition-colors cursor-pointer">
          <XIcon className="size-7 text-black" />
        </button>
      </Link>

      <div className="mx-auto max-w-3xl w-full px-4 py-12 flex flex-col gap-4">
        <Link href="/">
          <button className="w-fit px-6 py-1 rounded-full bg-[#284423] text-white font-medium hover:bg-[#284423]/90 transition-colors cursor-pointer">
            Close
          </button>
        </Link>
        <article className="prose prose-neutral w-full max-w-none">{children}</article>
      </div>
    </div>
  );
}
