import { BaseInfo } from '@/assets/Data/Data'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-8 mt-24 md:mt-28">
      <div className="flex flex-col order-2 md:order-1 gap-6 md:gap-8 md:justify-self-start">
        <div className="flex flex-col space-y-4">
          <span className="text-lg font-semibold uppercase">
            Hello, My Name is
          </span>
          <h1 className="text__bg text-3xl md:text-6xl uppercase font-semibold font-fontPrimary">
            {BaseInfo.name}
          </h1>
          <h2 className="text-xl font-semibold">{BaseInfo.position}</h2>
          <p className="text-base font-light">{BaseInfo.description}</p>
        </div>

        <button
          className="mb-6 text-left"
          style={{ backgroundSize: '200% auto' }}
        >
          <Link
            suppressHydrationWarning
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Download CV</span>
          </Link>
        </button>
      </div>
      <div className="relative order-1 md:order-2 justify-self-center mb-16 md:mb-0  md:mt-0 before:content-[''] before:bg-[#5a80d2] before:w-[70%] before:h-[70%] before:absolute before:top-[10rem] before:left-[12rem] before:rounded-full">
        <div className="relative p-2 border-4 rounded-full border-border">
          <div className="overflow-hidden rounded-full shadow-lg">
            <Image
              src={'/avatars/profile.png'}
              alt="profile"
              width={380}
              height={380}
              className="transform hover:scale-125 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
