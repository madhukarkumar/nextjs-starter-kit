import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 bg-[radial-gradient(circle,_#40C9FF_0%,_#9176FF_43%,_#E752FF_100%)] text-white ${inter.className}`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
        <code className="px-2 py-1">&lt;code/&gt;</code>Growth
      </h1>
      <h2 className="text-xl md:text-2xl mb-8 text-shadow">Craft. Code. Grow.</h2>
      <div className="relative w-full max-w-md aspect-square mb-8 overflow-hidden rounded-lg">
        <Image
          src="https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png"
          alt="Neon butterfly illustration representing the fusion of creativity and technology"
          layout="fill"
          objectFit="contain"
          className="mix-blend-lighten"
        />
      </div>
      <p className="text-center max-w-2xl mb-8 text-lg">
        When content and features are commoditym how do you stand out from the crowd? We believe it is by blurring the lines between creativity and technology. By driving growth with code and a unique brand voice. Get Started to unlock tools, resources and hands on training to stand out like a Butterfly. A testament of creativity with technology.
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl w-40">
          Get Started
        </button>
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-40">
          Login
        </button>
      </div>
    </div>
  )
}
