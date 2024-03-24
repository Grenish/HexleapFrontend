"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import aa from "../../public/assets/aa.jpeg";
import ab from "../../public/assets/ab.jpeg";
import ac from "../../public/assets/ac.jpeg";
import af from "../../public/assets/af.jpeg";

export default function Sports() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const sportsCard = [
    {
      id: 1,
      img: ac,
      name: "Sacramento River Cats",
      totalEvents: "48 Events",
      Sport: "Baseball",
    },
    {
      id: 2,
      img: ab,
      name: "Las Vegas Aviators",
      totalEvents: "28 Events",
      Sport: "Baseball",
    },
    {
      id: 3,
      img: aa,
      name: "new jersey devils",
      totalEvents: "15 Events",
      Sport: "Ice Hockey",
    },
    {
      id: 4,
      img: ab,
      name: "Las Vegas Aviators",
      totalEvents: "28 Events",
      Sport: "Baseball",
    },
  ];

  return (
    <div className=" px-32 py-10">
      <div className="">
        <div className="flex items-center justify-between">
          <span className=" border-b-2 border-under font-bold pb-1 dark:text-black text-white">
            Sports
          </span>
          <button
            onClick={() => setIsDark(!isDark)}
            className=" bg-button p-1 rounded-full text-xs"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white dark:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}{" "}
          </button>
        </div>
        <div className="mt-5 flex flex-col ">
          <div className="flex justify-between">
            {sportsCard.map((card: any) => (
              <div className="flex shadow-md" key={card.id}>
                <div className="p-3 bg-cardBack dark:bg-white">
                  <Image
                    src={card.img}
                    alt="Image of a ice hockey player"
                    placeholder="blur"
                    className="w-[220px] h-[350px] object-cover"
                  />

                  <div className="mt-3">
                    <span className="font-semibold capitalize">
                      {card.name}
                    </span>
                    <div className="flex justify-between text-xs mt-2">
                      <div className="flex flex-col w-1/2 text-xs dark:bg-[#F7F7F8] bg-back p-2">
                        <span className="dark:text-[#525965] text-[#DFDFDF] mb-1">
                          Total Events
                        </span>
                        <span className="dark:text-black text-white">
                          {card.totalEvents}
                        </span>
                      </div>
                      <div className="flex flex-col w-1/2 text-xs dark:bg-[#F7F7F8] bg-back p-2">
                        <span className="dark:text-[#525965] text-[#DFDFDF] mb-1">
                          Sports
                        </span>
                        <span className="dark:text-black text-white">
                          {card.Sport}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex">
              <div className="p-3 bg-cardBack dark:bg-white shadow-md">
                <div className="relative">
                  <Image
                    src={af}
                    alt="Image of a ice hockey player"
                    placeholder="blur"
                    className="w-[220px] h-[220px] object-cover"
                  />
                  <span className="absolute top-0 right-0 bg-black px-4 py-1 text-xs text-white">
                    Ad
                  </span>
                </div>

                <div className="mt-3 flex flex-col w-[220px]">
                  <span className="font-semibold text-xl mt-3">
                    Advertisement title
                  </span>
                  <span className="text-xs mt-2 dark:text-[#525965] text-[#DFDFDF]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe laudantium minus numquam sit ex voluptates ipsa ipsum
                    mollitia excepturi accusantium. Iusto mollitia veritatis aut
                    commodi veniam nobis, incidunt unde iure quibusdam facere!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10 ">
            <button className="px-6 py-3 bg-button rounded-sm shadow-md">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
