"use client";

import Video from "@/components/Background";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Landing = () => {
  const t = useTranslations("Landing");
  const slogan = t("slogan").split("\n");

  return (
    <div className="grid h-full grid-rows-3 px-7 place-items-center justify-center w-full">
      <motion.div
        className="relative row-start-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          className=""
          src="dark-logo.svg"
          width={350}
          height={350}
          alt="Eternal Story Logo"
        />
      </motion.div>
      <h1 className="self-end row-start-3 pb-20 text-4xl font-bold uppercase">
        {slogan[0]}
        <br />
        {slogan[1]}
        <br />
        {`${slogan[2] ? slogan[2] : ""} ${slogan[3] ? slogan[3] : ""}`}
      </h1>
    </div>
  );
};

export default Landing;
