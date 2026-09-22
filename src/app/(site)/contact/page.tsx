"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SendIcon,
} from "lucide-react";
import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/constant";
import WhatsAppIcon from "@/components/whatsapp-icon";

const contactLinks = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2)}`,
    href: getWhatsAppLink("Hi Navin, I found your portfolio and wanted to connect."),
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "codernavin@gmail.com",
    href: "mailto:codernavin@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/devnavinn",
    href: "https://github.com/devnavinn",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/devnavin",
    href: "https://www.linkedin.com/in/devnavin/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [message, setMessage] = useState("");

  const whatsappHref = getWhatsAppLink(
    message.trim() || "Hi Navin, I'd like to get in touch."
  );

  return (
    <div className="pt-8 pb-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          {"Let's"}{" "}
          <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
            talk
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
          The fastest way to reach me is WhatsApp. Write a quick note below
          and it{"'"}ll open a chat with your message ready to send.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 mb-10 max-w-[700px]"
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2"
        >
          What do you want to build?
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi Navin, I'm looking for help with..."
          className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent px-4 py-3 text-sm outline-none focus:border-sky-500 dark:focus:border-sky-500 transition-colors"
        />
        <div className="flex justify-end mt-4">
          <Link
            target="_blank"
            href={whatsappHref}
            className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 font-medium transition-colors"
          >
            <SendIcon size={16} />
            Send on WhatsApp
          </Link>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-[700px]">
        {contactLinks.map(({ icon: Icon, label, value, href }) => (
          <Link
            key={label}
            target="_blank"
            href={href}
            className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-sky-50 dark:bg-sky-500/10 text-sky-500">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {label}
              </p>
              <p className="font-medium truncate">{value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
