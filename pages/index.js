import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetDataFLowers } from '@/api/QueryHooks/useGetData'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Flowers =useGetDataFLowers();
  const {data} = Flowers()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  )
}