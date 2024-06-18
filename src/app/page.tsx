import Header from "@/components/header";
import Image from "next/image";
import { PT_Sans } from "next/font/google";
import Link from "next/link";
import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react";
const lato = PT_Sans({
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
          Hi, {`I'm`}{" "}
          <span className="text-sky-500 after:bg-sky-500">Navin Kumar</span>
        </p>
        <h1
          className={`${lato.className} text-3xl md:text-4xl lg:text-5xl  leading-none font-aspekta mb-5 font-semibold`}
        >
          I make{" "}
          <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
            {" "}
            full-stack
          </span>{" "}
          products that poeple <span className="text-pink-400">love</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          {"I'm"} a full-stack developer with experience in building web
          applications using modern technologies like React, Next.js, Node.js,
          and MongoDB.
        </p>
      </div>
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">
              <li className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
                <Link
                  target="_blank"
                  href="https://github.com/neo062"
                  className="flex gap-2 items-center hover:scale-125"
                >
                  <GithubIcon size={24} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/neo62/"
                  className="flex gap-2 items-center hover:scale-125"
                >
                  <LinkedinIcon size={24} />
                </Link>
                <Link
                  href="mailto:codernavin@gmail.com"
                  className="flex gap-2 items-center hover:scale-125"
                >
                  <MailIcon size={24} />
                </Link>
              </li>
            </div>
          </div>
        </div>
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6"></div>
        </aside>
      </div>
    </div>
  );
}
