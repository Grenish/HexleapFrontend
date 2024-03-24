"use client"

import Image from "next/image";
import ad from "../../public/assets/ad.jpeg";
import ae from "../../public/assets/ae.jpeg";

export default function Spotlight() {
  const spotlight = [
    {
      id: 1,
      img: ae,
      name: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
    },
    {
      id: 2,
      img: ad,
      name: "Sacramento River Cats",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
    },
    {
      id: 3,
      img: ae,
      name: "Las Vegas Aviators",
      date: "OCT 15 | SUN | 4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
    },
  ];

  return (
    <div className="px-32">
      <div className="w-full bg-gradient-to-b from-gradient1 dark:from-gradient3 to-gradient2 dark:to-gradient4">
        <div className="px-20 pt-20 pb-10  relative">
          <div className="flex flex-col w-4/5 m-auto text-center dark:text-black text-white">
            <span className="text-4xl font-bold">Collection Spotlight</span>
            <span className="text-sm mt-5">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </span>
          </div>
          <div className="mt-20 flex justify-evenly">
            {spotlight.map((card: any) => (
              <div className="relative w-[257px] dark:bg-darkWhite bg-cardBack p-4 shadow-md" key={card.id}>
                <div>
                  <Image
                    src={card.img}
                    alt="Just an image"
                    placeholder="blur"
                    className="w-full h-[50vh] object-cover"
                  />
                </div>
                <div className="relative flex items-center justify-center mt-8">
                  <div className="w-4 h-8 absolute -left-4 bg-gradient2 dark:bg-gradient4 rounded-tr-full rounded-br-full shadow-inner"></div>
                  <div className="w-[190px] border-dashed border-t-2 border-[#818A97]"></div>
                  <div className="w-4 h-8 absolute -right-4 bg-gradient2 dark:bg-gradient4 rounded-tl-full rounded-bl-full shadow-inner"></div>
                </div>
                <div className="w-full mt-5 flex flex-col">
                  <span className="text-xl text-center font-semibold dark:text-black text-white ">{card.name}</span>
                  <span className="text-sm text-center mt-2 dark:text-black text-white">{card.date}</span>
                  <span className="text=xs text-center mt-2 dark:text-darkTextWhite text-[#DFDFDF]  ">
                    {card.location}
                  </span>

                  <button className="mt-2 capitalize bg-black py-3 text-xs  text-white">
                    take flight collection
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-10">
            <button className="border-arrow border-2 flex justify-center items-center px-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-10">
            <button className="border-arrow border-2 flex justify-center items-center px-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
