import Image from "next/image";
import { Button } from "primereact/button";
import panelModule from './panel.module.css'
export default function Home() {
  return (
    <div>

      {/* Hero */}
      <div className="h-[720px] w-full bg-[#fc5c65]">

      </div>

      {/* Problem Statement*/}
      <div>
        <div className="h-[720px] w-full bg-gray-[20px]">

        </div>
      </div>

      {/* How it works*/}
      <div>
        <div className="h-[620px] w-full bg-red-100">


        </div>
      </div>


      {/* Demo or screenshot*/}
      <div>
        <div className="h-[620px] w-full bg-white">
          <h1>Feautures that blows mind</h1>
          <p>End to end payments and financial management in a <br /> single solution.Meet the right platform to help realize.</p>

          <div className="flex flex-row space-x-2">
            <div class="w-[400px] flex flex-col bg-white h-[300px] border border-gray-200 border-t-4 border-t-red-600 shadow-2xs rounded-xl ">
              <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-black">
                  Card title
                </h3>
                <p class="mt-2 text-gray-500 dark:text-neutral-400">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                  Card link
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Screenshots come here */}
      </div>

      {/* Testimonials*/}
      <div>
        <div className="h-[620px] w-full bg-green-100">

          <div className="flex flex-row space-x-2">
            <img src="/wom-2.png" alt="warning" height={600} width={600} />

            <div>
              <p>Our feature</p>
              <h1>Receive payments <br /> quickly from anywhere</h1>
              <p>why kept every home mrs Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non, nobis quo corrupti labore sequi doloremque facilis nemo facere cum, quia quidem deserunt natus debitis error officiis asperiores voluptatibus dolorem!</p>

              <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-hidden focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div>
        <div className="w-full h-[620px] bg-red-100 flex flex-row space-x-2">
          <div>
            <p>We are here to help <br /> you grow your buiness</p>
          </div>

          <div className="h-[400px] w-[400px] bg-white">

            <div>
              <div className="max-w-sm space-y-3">
                <div className="relative">
                  <input type="email" className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:outline-none focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter name" />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <input type="password" className="peer focus:outline-none py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter password" />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                      <circle cx="16.5" cy="7.5" r=".5"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
        <div className="h-[620px] w-full bg-white mx-auto p-4 max-w-[1500px]  mx-auto items-center flex justify-center">

          <div>
            <p>project management app</p>
            <h2>Download our free project management for clients</h2>
            <p>End to end payments and financial management in a single action</p>

            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-hidden focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
              Button
            </button>

            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-purple-500 text-white hover:bg-purple-600 focus:outline-hidden focus:bg-purple-600 disabled:opacity-50 disabled:pointer-events-none">
              Button
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div>
        <div className="h-[420px] w-full bg-gray-500 text-white">
          <div className="grid grid-cols-4 gap-8 p-4 max-w-[1500px]  mx-auto">
            <div className="">
              <div></div>
              <h1>Mudella</h1>
              <p className="pt-3">Mudella is tech startup that ensures the security and safety of the female gender in terms of GBV and access to the right abortion centers</p>

              <h1>Copyright Tanah Air Studio</h1>
            </div>
            <div className="">
              <h1>Services</h1>
              <ul>
                <li>Features</li>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="">
              <h1>Company</h1>
              <ul>
                <li>Features</li>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="">
              <h1>Join a Newsletter</h1>
              <p>Your Email</p>
              <div className="relative max-w-sm focus:ring-yellow-50">
                <textarea
                  className=" focus:outline-hidden max-h-36 py-2.5 sm:py-3 ps-4 pe-20 block w-full border-gray-700 rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none focus:border-yellow-500 bg-white focus:ring-yellow-50 text-neutral-900 resize-none overflow-y-auto bg-green"
                  placeholder="Message..."
                  rows="1"
                  data-hs-textarea-auto-height='{
                    "defaultHeight": 48
                  }'
                ></textarea>

                <div className="focus:ring-yellow-50 absolute top-2 end-3 z-10">
                  <button
                    type="button"
                    className="focus:ring-yellow-50 cursor-pointer py-1.5 px-3 inline-flex shrink-0 justify-center items-center text-sm font-medium rounded-lg text-white bg-red-400 focus:outline-hidden focus:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}
