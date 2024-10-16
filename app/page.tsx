"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Component() {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 bg-[radial-gradient(circle,_#FCF3C4_0%,_#DB61FA_50%,_#9D8EF8_100%)] text-black ${inter.className}`}
    >
      <h1 className="text-4xl md:text-6xl mb-4 text-shadow">
        <code className="px-2 py-1">&lt;code/&gt;</code>Growth
      </h1>
      <h2 className="text-xl md:text-2xl mb-8 text-shadow">
        Craft. Code. Grow.
      </h2>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0], // This creates the floating effect
        }}
        transition={{
          duration: 0.5,
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="p-4 rounded-lg mb-8"
      >
        <Image
          src="https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png"
          alt="Neon butterfly illustration representing the fusion of creativity and technology"
          width={400}
          height={400}
          objectFit="contain"
        />
      </MotionDiv>

      <p className="text-center max-w-2xl mb-8 text-lg">
        When content and features are commodity, product-led marketing is the
        only way to stand out in the crowd. Like a Butterfly that blurs the
        lines between creativity and technology, &lt;code/&gt; Growth is about
        using technology and brand voice to drive growth. Get Started to unlock
        tools, resources and hands-on training below.
      </p>
      <div className="flex space-x-4">
        <Link href="/dashboard" className="mt-5">
          <Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
