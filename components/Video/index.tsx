"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import { CldVideoPlayer } from 'next-cloudinary';


const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
     <div className="flex flex-col items-center justify-center">
          <p className="inline-block px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Intro Video
          </p>
         </div>
      <div className="container">
        <SectionTitle
          title="Are You Ready to Experience"
          paragraph="The Spiral Staircase is a places where moms will find what suits their needs: relaxation, adventure, glamour, and mystery.
"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/ss6.jpeg" alt="video image" fill />
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> */}


      <ModalVideo
        channel="custom"
        url="https://res.cloudinary.com/dlnetpm32/video/upload/v1691986017/SSPitch.mp4"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
      
      {/* <CldVideoPlayer
        width='960'
        height='540'
        src='SSPitch'
         colors={{
        base: '#0f0',
        text: '#000',
        accent: '#fff',
    }}
      /> */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] mb-12">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
       <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-20">
                  
                  <Link
                    href="https://localhost:3001"
                    className="rounded-md bg-royalpurple py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Pre-Order Membership
                  </Link>
                </div>
    </section>
  );
};

export default Video;
