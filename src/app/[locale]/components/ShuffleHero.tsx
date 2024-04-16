"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { use, useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  const t = useTranslations("ShuffleHero");

  return (
    <section className="grid items-center w-full max-w-6xl grid-cols-1 gap-8 px-8 py-12 mx-auto md:grid-cols-2">
      <div>
        <span className="block mb-4 text-xs font-medium text-indigo-500 md:text-sm">
          {t("slogan")}
        </span>
        <h3 className="text-4xl font-semibold md:text-6xl">{t("title")}</h3>
        <p className="my-4 text-base md:text-lg text-slate-200 md:my-6">
          {t("description")}
        </p>
        <button className="px-4 py-2 font-medium text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 active:scale-95">
          <a href="#Services">{t("more")}</a>
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "../../chapterOne-1.png",
  },
  {
    id: 2,
    src: "../../chapterOne-2.png",
  },
  {
    id: 3,
    src: "../../chapterOne-3.png",
  },
  {
    id: 4,
    src: "../../chapterOne-4.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
