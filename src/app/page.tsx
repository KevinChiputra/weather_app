import Weather from '@/components/weather/page';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center p-4 text-[48px]">

      <Weather />
    </main>
  );
}
