import Image from "next/image";
import { BsClipboard } from "react-icons/bs";
import Logo from "../3dmodels/Logo";

export function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Hi, I&apos;m JSLegend
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Creative developer with a passion for building interactive
            experiences and games on the web.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            jslegend@protonmail.com
            <span className="pl-4">
              <BsClipboard />
            </span>
          </a>
        </div>
        <div className="mt-3 md:place-self-center lg:col-span-5 lg:mt-0 lg:flex">
          <Logo zoom={3} />
        </div>
      </div>
    </section>
  );
}
