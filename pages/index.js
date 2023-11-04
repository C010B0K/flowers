import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetDataFLowers } from '@/api/QueryHooks/useGetData'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const FlowersQuery = useGetDataFLowers(); // Используйте хук как объект, а не функцию
  const { data } = FlowersQuery; // Получите данные из объекта

  console.log(FlowersQuery)

  return (
    <main
      // className={flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}}
    >
      {/* Ваш код для отображения данных здесь */}
    </main>
  );
}