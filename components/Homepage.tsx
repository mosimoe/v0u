/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2X3OIRi9UVi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0074C8] text-white px-4 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <UsbIcon className="h-8 w-8" />
          <span className="text-lg font-bold">USPS</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Send Mail
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Track a Package
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Find Locations
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Shop
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-[#0074C8] py-12 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Delivering for America</h1>
          <p className="text-lg text-white mb-8">Reliable and affordable postal services for all your needs.</p>
          <Button className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#005A9E] focus:outline-none focus:ring-2 focus:ring-[#0074C8] focus:ring-offset-2">
            Get Started
          </Button>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <CalendarIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Schedule a Pickup</span>
          </Link>
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <LocateIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Change Address</span>
          </Link>
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <StampIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Buy Stamps</span>
          </Link>
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <PackageIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Track a Package</span>
          </Link>
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <LocateIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Find Locations</span>
          </Link>
          <Link
            href="#"
            className="bg-[#F1F1F1] rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#E6E6E6] transition-colors"
            prefetch={false}
          >
            <StoreIcon className="h-8 w-8 text-[#333333]" />
            <span className="text-sm font-medium text-[#333333]">Shop</span>
          </Link>
        </section>
        <section className="bg-[#F1F1F1] py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">USPS News &amp; Updates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="#"
                className="bg-white rounded-md p-4 flex flex-col gap-2 hover:bg-[#F1F1F1] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">New Stamp Release</h3>
                <p className="text-[#333333]">Check out our latest stamp design featuring American wildlife.</p>
              </Link>
              <Link
                href="#"
                className="bg-white rounded-md p-4 flex flex-col gap-2 hover:bg-[#F1F1F1] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">Holiday Shipping Deadlines</h3>
                <p className="text-[#333333]">Plan ahead to ensure your packages arrive on time for the holidays.</p>
              </Link>
              <Link
                href="#"
                className="bg-white rounded-md p-4 flex flex-col gap-2 hover:bg-[#F1F1F1] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">USPS Sustainability Efforts</h3>
                <p className="text-[#333333]">Learn about our initiatives to reduce our environmental impact.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Popular Tools &amp; Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="#"
                className="bg-[#F1F1F1] rounded-md p-4 flex flex-col gap-2 hover:bg-[#E6E6E6] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">Zip Code Lookup</h3>
                <p className="text-[#333333]">Find the ZIP code for any address in the United States.</p>
              </Link>
              <Link
                href="#"
                className="bg-[#F1F1F1] rounded-md p-4 flex flex-col gap-2 hover:bg-[#E6E6E6] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">Shipping Rates Calculator</h3>
                <p className="text-[#333333]">Get estimated shipping costs for your packages.</p>
              </Link>
              <Link
                href="#"
                className="bg-[#F1F1F1] rounded-md p-4 flex flex-col gap-2 hover:bg-[#E6E6E6] transition-colors"
                prefetch={false}
              >
                <h3 className="text-lg font-medium">USPS Careers</h3>
                <p className="text-[#333333]">Explore job opportunities and apply to work with USPS.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0074C8] text-white px-4 py-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <UsbIcon className="h-6 w-6" />
          <span className="text-lg font-bold">USPS</span>
        </div>
        <p className="text-sm">&copy; 2024 United States Postal Service. All rights reserved.</p>
      </footer>
    </div>
  )
}

function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function LocateIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function StampIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 22h14" />
      <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
    </svg>
  )
}


function StoreIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}


function UsbIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="7" r="1" />
      <circle cx="4" cy="20" r="1" />
      <path d="M4.7 19.3 19 5" />
      <path d="m21 3-3 1 2 2Z" />
      <path d="M9.26 7.68 5 12l2 5" />
      <path d="m10 14 5 2 3.5-3.5" />
      <path d="m18 12 1-1 1 1-1 1Z" />
    </svg>
  )
}
