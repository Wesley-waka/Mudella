import Image from "next/image";
import { Button } from "primereact/button";
import panelModule from './panel.module.css';
import Footer from "./Footer";

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <div className="h-[1000px] w-full bg-[#fc5c65] flex flex-col items-center justify-center text-white mx-auto gap-4 ">

        <div className="flex flex-col items-center justify-center gap-4 max-w-[1500px] mx-auto">
          <div>
            <h1 className="text-center leading-16">Ending Gender-Based Violence & Unsafe Abortion, <span className="block"> Fast, Safe, and Connected.</span></h1>
          </div>
          <div>
          <p className="text-center text-lg mt-4">
          Get instant help, find verified services, and access life-saving support—all in one place. 
          <span className="block">Trigger emergency alerts, book consultations, or chat with Sidi AI for guidance.</span>
                </p>
          </div>
          <button className="bg-purple-600 px-10 py-3 rounded-md text-medium font-bold mt-4">Learn More</button>
          <Image
            src="/hero.png"
            alt="hero"
            height={320}
            width={320}
            className="object-cover object-center mt-4"
          />
        </div>

      </div>

      {/* Problem Statement*/}
      <div className="my-20">
        <div className=" bg-gray-[20px] max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center">Your Safety,Our Care</h1>
            <p className="text-center w-[400px]">Emergency alerts for GBV, safe abortion care, and AI support—anytime, anywhere.</p>
          </div>
          <div className="flex flex-row space-x-8 mt-28">
            <div className="w-[400px] flex flex-col bg-purple-200 h-[300px]   rounded-xl ">
            <div className="flex flex-col items-center justify-center gap-4 py-2 px-3">
                <img src="/protect.png" alt="warning" className="" height={100} width={100} />

                <h2 className="text-center text-2xl font-semibold">
                  Incident Reponse
                </h2>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, amet! Omnis a mollitia nobis alias nihil harum et nulla odit 
                </p>

              </div>
            </div>

            <div className="w-[400px] flex flex-col bg-purple-200 h-[300px]   rounded-xl ">
            <div className="flex flex-col   items-center justify-center gap-4 py-2 px-3">
                <img src="/medic.png" alt="warning" className="w-[100px] h-[100px]" />

                <h2 className="text-center text-2xl font-semibold"> 
                  Arbotion Care
                </h2>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, amet! Omnis a mollitia nobis alias nihil harum et nulla odit 
                </p>

              </div>

            </div>

            <div className="w-[400px] flex flex-col bg-purple-200 h-[300px]   rounded-xl ">
            <div className="flex flex-col   items-center justify-center gap-4 py-2 px-3">
                <img src="/doctors-office.png" alt="warning" className="w-[100px] h-[100px]" />

                <h2 className="text-center text-2xl font-semibold">
                  Therapy and Consultation
                </h2>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, amet! Omnis a mollitia nobis alias nihil harum et nulla odit 
                </p>
              </div>
              
            </div>

            <div className="w-[400px] flex flex-col  bg-purple-200  h-[300px]   rounded-xl ">
            <div className="flex flex-col items-center justify-center gap-4 py-2 px-3">
                <Image src="/doctor.png" alt="warning" className="p-4 bg-[#fc5c65] rounded-full" height={100} width={100} />


                <h2 className="text-center text-2xl font-semibold">
                  Sidi AI(AI practitioner)
                </h2>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, amet! Omnis a mollitia nobis alias nihil harum et nulla odit 
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* How it works*/}
      <div className="bg-red-100">
        <div className="max-w-[74rem] mx-auto px-9 ">
        <div>
              {/* <div className=" flex flex-col items-center space-y-6 my-20">
                  <h3 className="text-4xl text-center">Discover KSK -<br /> Where Innovation Meets Design</h3>
                  <img className="object-cover h-48 rounded-md w-[1600px] h-[550px]" 
                      src="/assets/images/furni.jpg" alt="sofa"/>
              </div> */}
              <div>
                <div className="text-center flex flex-col items-center">
                    <h1 className="font-thin text-sm">KSK LLC</h1>
                    <h2 className="2xl text-3xl text-center">KSK LLC Journey Story</h2>
                    <h3 className=" w-[700px] mt-[20px] ">The KSK Journey:Transforming spaces with innovative
                        design.Explore
                        our story of
                        craftmanship and
                        style,creating
                        furniture that inspires and enhances modern living.</h3>
                </div>
                <div className="py-10">
                    <div className="flex flex-col space-y-12 items-center my-4">
                        <div className="flex w-full flex-row  space-x-6  justify-between" >
                            <div className="h-[300px] w-1/2  rounded-md flex flex-row justify-center items-center">
                                <Image
                                    src="/incident.png"
                                    className=""
                                    alt=""
                                    height={220}
                                    width={220}
                                />
                            </div>
                            <div className="align-middle my-auto w-1/2">
                            <div
                              className="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                              style={{ width: "100px", height: "50px", border: "1px solid rgb(158, 40, 41)" }}
                            >
                              <img src="/siren.png" alt="Hospitality Icon" />
                              </div>
                                <h3 className="text-xl font-semibold mb-2">Hospitality Furniture</h3>
                                <h3 className="">Transform your hotel or restaurant with our elegant and durable
                                    furniture. From stylish dining sets to comfortable lounge chairs, we offer designs that
                                    cater to
                                    both aesthetics and functionality.</h3>
                            </div>
                        </div>

                        <div className="flex w-full flex-row  space-x-6  justify-between" >
                          <div className="align-middle my-auto w-1/2">
                            <div
                              className="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                              style={{ width: "100px", height: "50px", border: "1px solid rgb(158, 40, 41)" }}
                            >
                              <img src="/pills.png" alt="Retail Icon" />
                            </div>
                                <h3 className="text-xl font-semibold mb-2">Healthcare Furniture</h3>
                                <h3  className="">Our healthcare furniture is designed with both patients and
                                    providers
                                    in mind. We focus on comfort, durability, and hygiene, ensuring that our products meet
                                    the rigorous standards.</h3>
                            </div>

                            <div className="w-1/2 flex flex-row justify-center items-center">
                            <Image
                                    src="/abortion.png"
                                    className=""
                                    alt=""
                                    height={220}
                                    width={220}
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-row  space-x-6  justify-between" >
                        <div className="w-1/2 flex flex-row justify-center items-center">
                            <Image
                                    src="/consultation.png"
                                    className=""
                                    alt=""
                                    height={220}
                                    width={220}
                                />
                            </div>
                            <div className="align-middle my-auto w-1/2">
                            <div
                              className="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                              style={{ width: "100px", height: "50px", border: "1px solid rgb(158, 40, 41)" }}
                            >
                              <img src="/doctors-office.png" alt="Hospitality Icon" />
                              </div>
                                <h3 className="text-xl font-semibold mb-2">Hospitality Furniture</h3>
                                <h3 className="">Transform your hotel or restaurant with our elegant and durable
                                    furniture. From stylish dining sets to comfortable lounge chairs, we offer designs that
                                    cater to
                                    both aesthetics and functionality.</h3>
                            </div>
                        </div>

                        <div className="flex w-full flex-row  space-x-6  justify-between" >
                          <div className="align-middle my-auto w-1/2">
                            <div
                              className="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                              style={{ width: "100px", height: "50px", border: "1px solid rgb(158, 40, 41)" }}
                            >
                              <img src="/doctorAI.png" alt="Retail Icon" />
                            </div>
                                <h3 className="text-xl font-semibold mb-2">Healthcare Furniture</h3>
                                <h3  className="">Our healthcare furniture is designed with both patients and
                                    providers
                                    in mind. We focus on comfort, durability, and hygiene, ensuring that our products meet
                                    the rigorous standards.</h3>
                            </div>

                            <div className="w-1/2 flex flex-row justify-center items-center">
                            <Image
                                    src="/chatAI.png"
                                    className=""
                                    alt=""
                                    height={220}
                                    width={220}
                                />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>


        </div>
      </div>

      {/* </div> */}
      </div>

      


      {/* Demo or screenshot*/}
      <div>
        


        <div className="my-14 bg-white">
            <div className="max-w-[100rem] mx-auto pl-8">
                <h3 className="text-4xl text-left font-medium leading-12 my-10 ">Your safety and Guidance,<br />is at your fingertip</h3>
            </div>
            <div className="relative overflow-hidden my-8">
                <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div aria-hidden="true" className="flex -z-[1] absolute start-0">
                        <div className="bg-blue-500 opacity-20 blur-3xl w-[1036px] h-[300px] ">
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                        <div className="hidden lg:block lg:col-span-2">
                            <img className="rounded-xl"
                                src="/safety.jpg"
                                alt="Avatar"/>
                        </div>
                        <div className="lg:col-span-4">
                            <blockquote>

                                <p
                                    className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal ">
                                    I was looking for unique and stylish furniture for my new apartment, and KSK LLC
                                    delivered. Their selection is amazing, and the staff helped me find exactly what I
                                    needed. Great experience!
                                </p>
                                <footer className="mt-6">
                                    <div className="flex items-center">
                                        <div className="lg:hidden shrink-0">
                                            <img className="size-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Avatar"/>
                                        </div>
                                        <div className="ms-4 lg:ms-0">
                                            <p className="font-medium text-gray-800 dark:text-neutral-800">
                                                Nicole Grazioso
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-neutral-800">
                                                Head of Finance
                                            </p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
        </div>
            </div>

        {/* Screenshots come here */}
      </div>

      {/* Testimonials*/}
      <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-black-500 ">Subscribe</h2>
            <p className="mt-3 text-black-500 ">
              Subscribe and start making the most of every engagement.
            </p>
          </div>

          <form>
            <div className="w-full sm:max-w-lg md:ms-auto">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                  <label for="hero-input" className="sr-only">Search</label>
                  <input type="text"  className="py-2.5 sm:py-3 px-4 block w-full border-black-200 border-[0.5px] rounded-lg sm:text-sm  focus:outline-0  bg-white disabled:opacity-50 disabled:pointer-events-none placeholder-black" placeholder="Enter your email"/>
                </div>
                <a className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#fc5c65] text-white hover:bg-purple-700 focus:outline-0  disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                No spam, unsubscribe at any time
              </p>
            </div>
          </form>
        </div>
      </div>

      

      <Footer/>
    </div>

  );
}
