'use client';

import { useRouter } from 'next/navigation';
import Button from './components/button';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="h-screen bg-black flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image width={64} height={64} src="/icons/logo1.svg" alt="logo" />
          <h1 className="text-7xl font-bold text-center text-purple-300 mb-4">
            TruScape
          </h1>
          <h2 className="text-3xl font-semibold text-center text-purple-400 animate-fadeIn">
            Manage with ease, grow with confidence
          </h2>
        </div>
        <div className="flex gap-8 justify-center mt-20">
          <Button onClick={() => router.push('/dashboard')}>
            Dashboard
          </Button>
          <Button onClick={() => router.push('/companies')}>
            Companies
          </Button>
        </div>
      </div>
    </main>
  );
}
