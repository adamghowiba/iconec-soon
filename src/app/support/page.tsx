import type { Metadata } from 'next';
import { HomeScreen } from '@/components/HomeScreen';

export const metadata: Metadata = {
  title: 'Support · Iconec',
  description: 'Get in touch with Iconec support — address, phone, and email for any questions about our products or services.',
};

export default function SupportPage() {
  return <HomeScreen defaultDialog="support" />;
}
