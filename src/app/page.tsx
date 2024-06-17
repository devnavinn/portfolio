import Header from "@/components/header";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image
            src="/profile-banner.webp"
            alt="Profile Banner"
            width={1500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <p className={`${lato.className} mb-2 text-xl `}>
          Hi, I'm{" "}
          <span className="text-sky-500 after:bg-sky-500">Navin Kumar</span>
        </p>
        <h1
          className={`${lato.className} text-3xl md:text-4xl lg:text-5xl leading-none font-aspekta mb-5 font-semibold`}
        >
          Creating{" "}
          <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
            {" "}
            full-stack
          </span>{" "}
          products people <span className="text-pink-400">love</span>
        </h1>
      </div>
    </div>
  );
}
