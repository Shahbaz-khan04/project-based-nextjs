import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center bg-green-300">
      <div className="mx-4 order-last">
        <Image src="/logo.png" width={100} height={100} alt="next image" />
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-6xl font-bold text-blue-700">NUML University</h1>
        <h2 className="text-3xl font-semibold text-red-500">
          Teaching Software Engineering
        </h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-yellow-400">
          About us
        </button>
      </div>
    </div>
  );
}
