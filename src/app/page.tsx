import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
          <div className="flex flex-col sm:-mx-4 sm:flex-row">
            <Image width={200}
              height={200} className="flex-shrink-0 object-cover w-30 h-30 rounded-full sm:mx-4 ring-4 ring-gray-300" src="/agus.jpg" alt="" />

            <div className="mt-4 sm:mx-4 sm:mt-0">
              <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Agus Hermansyah</h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Fullstack Developer</p>
            </div>
          </div>

          <p className="mt-4 text-gray-800 dark:text-gray-300 group-hover:text-gray-300">
            Harapan untuk PT Tech Mayantara Asia. <br></br>
            Semoga kedepannya bisa terus lebih baik lagi, terutama dalam sistem pengembangan karirnya untuk membantu karyawan meningkatkan keterampilan, pengetahuan, dan pengalaman mereka, sehingga mencapai tujuan karir yang lebih baik.</p>
        </div>
        <div className="items-center">
          <Link href="/joke" className=" border-indigo-600 rounded-full border border-solid
           dark:border-white/[.145] transition-colors flex items-center 
           justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent 
           font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">Joke hari ini</Link>

        </div>
      </main>
    </div>
  );
}
