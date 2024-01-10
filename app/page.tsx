import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>William Beck&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hi, my name is <button className="text-blue-600">William Beck</button>
        </h1>
        
        <div className="flex mt-6">
          <div className="flex-1">
            <Image src="/image1.png" alt="William Beck" width={200} height={200} className="rounded-full" />
          </div>
          <div className="flex-1 text-left px-4">
            <p>Your brief description goes here. You can talk about your interests, skills, or any other introductory information.</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-4xl">Check out my projects:</h2>
          <div className="mt-4">
            <Link href="https://visual-flow-affi-switch-demo.vercel.app/">
              <button className="text-2xl text-blue-500 hover:underline">Visual Flow Project</button>
            </Link>
          </div>
          <div className="mt-2">
            <Link href="https://beck-crypto.vercel.app/">
              <button className="text-2xl text-blue-500 hover:underline">Beck Crypto Project</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
