import Header from "../components/Header";
import Footer from "../components/Footer";
import bg from "../assets/bg.jpg";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About us";
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col">
      <Header />
      <div
        className="flex min-h-[230px] items-center gap-x-7 justify-center bg-center bg-cover relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:backdrop-blur-[3px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white z-10 text-3xl font-semibold uppercase">
          Chupee Computer Peripherals
        </h1>
        <span className="h-[70px] w-[2px] bg-white z-10"></span>
        <div className="flex flex-col z-10 text-white text-xl font-thin italic">
          <p>See how your purchase has purpose</p>
          <p className="text-green-500">- better experience for all.</p>
        </div>
      </div>
      <main className="flex flex-col">
        <section className="w-full flex flex-col max-w-[1400px] mx-auto">
          <div className="flex-col flex pt-[50px] pb-[90px] gap-y-4">
            <h1 className="text-3xl text-green-600 font-semibold uppercase">About Us</h1>
            <div className="flex flex-col gap-y-2">
              <span className="text-xl">
                Welcome to Chupee – Your Ultimate Destination for Cutting-Edge Computer Peripherals!
              </span>
              <p>
                At Chupee, we are passionate about enhancing your digital experience by offering a
                curated selection of top-notch computer peripherals. We understand that in today's
                fast-paced technological landscape, having the right tools can make all the
                difference. That's why we've dedicated ourselves to bringing you the latest and most
                innovative peripherals that seamlessly integrate with your computing needs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 flex py-8">
          <div className="mx-auto flex-1 max-w-[1400px] flex flex-col py-3 gap-y-5">
            <div className="flex items-center gap-x-10">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="flex-1 max-h-[500px]"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="m50.09 23.24c-4 1-4 6.29-2 8.37s7.21 1.29 7.58-3.37-3.67-5.45-5.58-5zm4.77 4.94a3.73 3.73 0 0 1 -6.13 2.72c-1.62-1.68-1.69-6 1.58-6.77a3.63 3.63 0 0 1 4.55 4.05zm-4.24-2.83c-2.22.53-2.17 3.45-1.07 4.59a2.53 2.53 0 0 0 4.15-1.85 2.46 2.46 0 0 0 -3.08-2.74zm-.49 3.9c-.72-.75-.75-2.68.71-3a1.62 1.62 0 0 1 2 1.81 1.67 1.67 0 0 1 -2.71 1.19zm.94-2.11c-.67.16-.66 1-.33 1.39a.77.77 0 0 0 1.26-.53.74.74 0 0 0 -.93-.86zm-36.07-11.57c.21 0 0-.42 0-.79s-2.21.12-2.46.12c0 0-.08.8.09.92a12 12 0 0 0 2.37-.25zm-2.29 1.21s-.08.79.08.92a12.75 12.75 0 0 0 2.42-.25c.21-.05 0-.42 0-.8s-2.29.13-2.54.13zm-.92 2.83a20 20 0 0 0 -.45-4.61c-.21-.34-3.75.16-4 .29a36.52 36.52 0 0 0 .75 4.79 13.36 13.36 0 0 0 3.66-.47zm-1.33-3.54c.08.13.29 2.63.29 2.63s-1.87.45-1.91.29-.34-2.75-.34-2.75a8.52 8.52 0 0 1 1.92-.17zm5.08 4.46c-.08-.21-7.08.8-7.25.83s-.08.84 0 1 7.09-.92 7.3-1 0-.62-.09-.83zm.3 1.79c-.09-.21-7.09.8-7.25.83s-.09.84 0 1 7.08-.91 7.29-1 0-.62-.08-.83zm.29 2c-.09-.21-7.08.8-7.25.84s-.09.83 0 .95 7.08-.91 7.29-1 0-.54-.08-.75zm-5.83 6.5a1.73 1.73 0 0 0 2.45-2 1.78 1.78 0 0 0 -2.7-.91 1.65 1.65 0 0 0 .25 2.91zm.26-2.19a.89.89 0 0 1 1.35.46.87.87 0 0 1 -1.23 1 .83.83 0 0 1 -.12-1.46zm3.57-1.1a1.66 1.66 0 0 0 .25 2.87 1.74 1.74 0 0 0 2.46-1.95 1.78 1.78 0 0 0 -2.71-.92zm1.87 1.14a.87.87 0 0 1 -1.23 1 .83.83 0 0 1 -.13-1.44.9.9 0 0 1 1.36.44zm10.71-10.67a1.22 1.22 0 0 0 -1.71-1.35c-.91.55-1 1.21-.5 1.88a1.33 1.33 0 0 0 2.21-.53zm1.88-3.25c.58-.13.83-.88.29-1.5s-1.62-.1-1.71.12c-.37.99.83 1.53 1.42 1.41zm7.58 3.08a2.38 2.38 0 0 0 1.46 1 9.62 9.62 0 0 0 1.37 1c.34.13 1.59.71 2.38-.12s-.38-2.43-.38-2.43a3.26 3.26 0 0 0 0-2.38c-.5-1.45-2.42-1.37-2.42-1.37-1.87-1.63-3.25-.88-3.54 0s.75 2.67.75 2.67a2.73 2.73 0 0 0 .38 1.66zm4.67 1.34c-.34.37-1.38-.38-1.38-.38a1.18 1.18 0 0 0 .54-.25 5.2 5.2 0 0 0 .5-.5s.67.78.34 1.16zm-2.13-4.59a1.8 1.8 0 0 1 1.67 1.92 1.68 1.68 0 0 1 -2.83 1c-1.17-1.14-.67-3.14 1.16-2.89zm-2.71-1.05c.5-.5 1.3.37 1.3.37a2 2 0 0 0 -.67.5 3.22 3.22 0 0 1 -.38.46s-.75-.86-.25-1.33zm2 8.67c-.45.37-.54 1.91.59 2.08a1.26 1.26 0 0 0 1.54-1.58c-.21-.96-1.61-.93-2.13-.5zm.78 1.41c-.48-.07-.45-.73-.25-.9s.83-.19.91.22a.54.54 0 0 1 -.66.68zm16.56-5.87c-.21.12-.42.08-1 0a1.05 1.05 0 0 0 -.92.37 8.57 8.57 0 0 0 -.46-1.62c-.25-.5-.58-.33-1.42-.17a6 6 0 0 1 -2.12-.16s-.12-2.09-.12-2.16-.73-.14-.84 0a65.79 65.79 0 0 0 -.33 7.58c.17.21 7.79 1.08 7.79 1.08a4.11 4.11 0 0 0 .17-.91c0-.17-2.38-.38-4-.71a10.32 10.32 0 0 0 -2.71-.25 5.28 5.28 0 0 1 .88-.63 2.09 2.09 0 0 0 .79-1.16c.12-.34.62-.25 1-.17s0 0 .37.25.46.62.63.87a2.36 2.36 0 0 0 .62.71 3.5 3.5 0 0 0 1.42.46c.16-.08.12-.29-.25-.67s-.88-.5-.88-.7-.08-.67.09-.88 1.12-.21 1.37-.21a4.36 4.36 0 0 0 1.33-.46c.17-.12-.08-.87-.08-.87a12 12 0 0 0 -1.33.41zm-4.46.26a2 2 0 0 0 -.88 1c-.16.33-.25.58-.54.71s.08-2.34.08-2.34a6.55 6.55 0 0 0 1.42 0c.67-.08 1.13-.37 1.33-.16a1.72 1.72 0 0 1 .3.75 3.21 3.21 0 0 0 -1.71.04zm-38.75 17.78a10.3 10.3 0 0 0 -2.83.22 9.93 9.93 0 0 0 .62 3.5 12.34 12.34 0 0 0 2.79-.38 14.45 14.45 0 0 0 -.58-3.34zm-.13 2.7a7.32 7.32 0 0 1 -1.55.21 5.83 5.83 0 0 1 -.35-1.94 5.93 5.93 0 0 1 1.57-.14 8 8 0 0 1 .33 1.87zm4-3.16a10.33 10.33 0 0 0 -2.83.25 10.12 10.12 0 0 0 .62 3.5 12.5 12.5 0 0 0 2.8-.37 14.47 14.47 0 0 0 -.59-3.38zm-.22 2.68a6.66 6.66 0 0 1 -1.55.21 5.54 5.54 0 0 1 -.34-1.94 5.89 5.89 0 0 1 1.57-.14 8 8 0 0 1 .32 1.87zm2.36-.13a1.43 1.43 0 0 0 2-1.61 1.46 1.46 0 0 0 -2.22-.76 1.37 1.37 0 0 0 .22 2.39zm.22-1.8a.72.72 0 0 1 1.11.37.71.71 0 0 1 -1 .81.68.68 0 0 1 -.11-1.16zm3.28 1.59a1.43 1.43 0 0 0 2-1.61 1.46 1.46 0 0 0 -2.22-.76 1.37 1.37 0 0 0 .22 2.39zm.22-1.8a.73.73 0 0 1 1.11.37.71.71 0 0 1 -1 .81.68.68 0 0 1 -.11-1.16zm-11.13 4.7a1.37 1.37 0 0 0 .2 2.37 1.43 1.43 0 0 0 2-1.61 1.46 1.46 0 0 0 -2.2-.76zm.52 1.75a.68.68 0 0 1 -.1-1.18.73.73 0 0 1 1.11.37.71.71 0 0 1 -1.01.81zm3.27-2.16a1.37 1.37 0 0 0 .2 2.36 1.43 1.43 0 0 0 2-1.61 1.47 1.47 0 0 0 -2.2-.75zm.48 1.74a.69.69 0 0 1 -.1-1.18.73.73 0 0 1 1.11.38.71.71 0 0 1 -1.01.8zm27.1-7.37a1.37 1.37 0 0 0 .21 2.37 1.43 1.43 0 0 0 2-1.61 1.47 1.47 0 0 0 -2.17-.76zm.53 1.75a.68.68 0 0 1 -.1-1.18.73.73 0 0 1 1.11.37.72.72 0 0 1 -.97.81zm3.22-1a1.37 1.37 0 0 0 .21 2.37 1.43 1.43 0 0 0 2-1.61 1.47 1.47 0 0 0 -2.17-.76zm.57 1.73a.68.68 0 0 1 -.1-1.18.73.73 0 0 1 1.11.37.72.72 0 0 1 -1.01.81zm3.35-.68a.68.68 0 0 0 .11 1.18.72.72 0 0 0 1-.81.73.73 0 0 0 -1.11-.35zm2.92.66a.69.69 0 0 0 .1 1.18.71.71 0 0 0 1-.8.73.73 0 0 0 -1.1-.36zm7.73-22.6c-.08-3.54-5.75-3.2-9.37-3.16a23.18 23.18 0 0 0 -5 .41 5.39 5.39 0 0 0 -.59-1.75c-.37-.5-3.54-1.08-7.62-1.08s-14.75-.5-17.42 0a5.23 5.23 0 0 0 -3.71 2.75 34.62 34.62 0 0 0 -5.75.12 42.42 42.42 0 0 0 -6.37 1.17c-1.13.46-1.13 2-.88 2.63s3.59 17.77 3.59 17.77a8 8 0 0 0 -1.75.83c-.25.29 2.5 11.46 2.7 11.88s5.42-.3 5.42-.3 1.92 8.84 2.08 9.13 1.25.54 7.59.58 24.75.13 25.25-.08 2.46-8.88 2.46-8.88 3.37.3 3.87.25 1.42-1.83 2-4.16.17-7.13.17-7.13 3.41-17.36 3.33-20.96zm-42.21-1.89c.09-.25.46-1.84 3.09-2.17s8.33-.12 13.62.08 9.21.75 9.38 1.25.25 9 .16 12.25-.71 7.67-1 7.67h-3.66a7.5 7.5 0 0 0 -3.42-1.57c-2.13-.42-3.25-.59-3.25-.59s.79-5.12-2.75-7.58a7.69 7.69 0 0 0 -8.08-.54 12.85 12.85 0 0 0 -3.17 2.5s-1-11.05-.92-11.3zm7.21 14c-.5 0-1.87.21-2 1.46s0 1.91.83 2.41a4.18 4.18 0 0 0 1.92.5l-.62 1.14s-5.75.29-5.84.16-.41-6.79-.41-6.79c.16-.12 1.87-2.58 4-3.37a7.34 7.34 0 0 1 3.91-.38 2.26 2.26 0 0 0 -1.21 2.03c.17 1.38 1.75 1.63 2.59 1.38s.87-1 .58-1.17-.92.38-1.29.38-1.13-1-.59-1.54a1.76 1.76 0 0 1 1.55-.5 5.05 5.05 0 0 1 2.91 3.58c.54 2.54.17 3.33.17 3.33s-2.83-.11-3.17-.11a9.07 9.07 0 0 0 -1 .37s-.33-.87-.45-.79-.55 1.38-1.71 1.13-1.84-2.09-.71-2.34l1.12-.22s-.08-.66-.58-.66zm-19.79-12.63a26.94 26.94 0 0 1 5.42-.86c2.54-.21 5-.25 5.08 0s1.71 18.82 1.58 19a53.83 53.83 0 0 1 -8.29 1c-.25-.14-4.12-17.76-3.79-19.14zm4.17 30.25c-.13-.12-2.34-8.62-2.13-9s4.58-.66 7.67-1.12a94.73 94.73 0 0 1 9.71-.46s-1.05 4.83-1.25 5-5.8 1.47-6.05 1.58.71 3.21.5 3.25-8.33.88-8.45.75zm18.75 9.89c-.13 0-2.25.08-2.25.08a19.68 19.68 0 0 0 -1.59-3.29c-.29-.08-.79.13-.71.25s1.13 2.96 1.13 2.96h-1.25s-1.75-3.67-2-3.71-1 .08-.84.25 2 3.37 1.71 3.41-1.33.09-1.33.09-1.58-3-1.75-3-.71.25-.67.37a20 20 0 0 1 1.05 2.59 23.63 23.63 0 0 1 -3.05-.18c-.12-.12-1.62-8-1.5-8s3.34-.5 3.34-.5a10.12 10.12 0 0 0 2.62 2.54 37.06 37.06 0 0 0 6.38 3.14l.58.2a22.79 22.79 0 0 1 .13 2.8zm4.2-4.42c-.12.13-.91.5-.83 1a34.16 34.16 0 0 1 .63 3.67 24.55 24.55 0 0 1 -2.46 0 37.62 37.62 0 0 0 .5-3.88c-.13-.12-5.13-1.21-8-3.92s-3-4.79-2.75-4.91 5.83-1.59 5.91-1.84 1.21-5.87 1.46-6.5a6.22 6.22 0 0 1 1.54-2.2c.94-.65 4.46.12 5.55.16a7.26 7.26 0 0 1 3.08 1c.17.25 1.08 7.17 1.29 7.34s5.38 1.66 5.58 2.21-1.33 3.08-2.2 3.91a10.85 10.85 0 0 1 -1.46 1.21 21.54 21.54 0 0 0 -2-3c-.25 0-1 .17-.8.54s2.13 2.75 2 2.92a6.65 6.65 0 0 1 -1.25.58 37 37 0 0 0 -2.37-3c-.17 0-.88.21-.79.37a28.18 28.18 0 0 1 2 3.17 2.12 2.12 0 0 1 -.75.33s-2.63-3.46-2.79-3.42-.71.33-.59.5a24.85 24.85 0 0 1 2.34 3.08 12.09 12.09 0 0 1 -1.79.38 25.46 25.46 0 0 0 -2.42-3c-.25 0-.71.42-.63.58a25.94 25.94 0 0 1 2 2.75zm16.25-1.34s-.54-1.34-.7-1.29-.84.37-.67.54a11.67 11.67 0 0 1 1.08 2.51c0 .21-.41 1.54-.41 1.54s-1.55-2.67-1.67-2.67-.83.25-.71.46 2 3.38 2 3.63-.17 1.5-.17 1.5l-.41-.09s-2.46-4.37-2.63-4.37a3.14 3.14 0 0 0 -.75.41l2.34 4.09h-1.25a36.42 36.42 0 0 0 -2.05-3.43c-.16 0-.75.25-.75.42s1.79 2.91 1.63 3a11.83 11.83 0 0 1 -1.29-.05s-1.13-2.29-1.38-2.29-.92.13-.83.29l1 2h-1s-.63-1.54-.88-1.58-.91.13-.83.25.54 1.38.37 1.38a34.11 34.11 0 0 1 -4.2-.09 14.62 14.62 0 0 1 -.38-3 18.57 18.57 0 0 0 5.5-1.92 16.87 16.87 0 0 0 4.67-4 37.65 37.65 0 0 1 4.79.46c0 .13-.42 2.3-.42 2.3zm2.21-6.71c-.08.17-.41 2.54-.54 2.54a1.86 1.86 0 0 1 -.42-.12l.25-2.63a11.16 11.16 0 0 1 -2-.37 9 9 0 0 1 .33-1 31.37 31.37 0 0 1 4.46 1c0 .12-.13.91-.25.87s-1.74-.46-1.83-.29zm4.17-1.53a19.73 19.73 0 0 1 -1.46 4.71 7.39 7.39 0 0 1 -2.54-.5c-.17-.13.29-1.5.46-1.59a16.61 16.61 0 0 1 1.71.34c.25 0 .66-2.38.66-2.63s-5.71-1.33-6-1.33-.5 2.75-.5 2.75l1.79.66-.08 1.67-3.71-.37a5 5 0 0 0 .42-1c.12-.46.42-2.25-.5-2.88a39.26 39.26 0 0 0 -5.13-2l-.79-4.66a29.89 29.89 0 0 1 5.84.46 74.78 74.78 0 0 1 10 2.75 8.12 8.12 0 0 1 -.17 3.62zm1.46-11a16.59 16.59 0 0 1 -1.34 5.54 48.11 48.11 0 0 0 -6.25-1.79 22.36 22.36 0 0 1 -3.79-1s.84-6.67 1-10.54.13-8.25.13-8.25h7s4.87.29 5 1.21-1.34 11.03-1.75 14.83zm-27.84 3.57a18 18 0 0 0 -.58 3.13c0 .29.58.29.79.2a14.84 14.84 0 0 0 .71-3.2c0-.25-.8-.25-.92-.13zm12.17 11.17c.13-.29-.32-.93-.46-.88a3 3 0 0 0 -.62.59l.71.7a.84.84 0 0 0 .37-.41z"
                    fill="#1d1d1b"
                  ></path>
                </g>
              </svg>
              <div className="flex-1 flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold text-green-600">Mission</h1>
                <p>
                  At CHUPEE, we're on a mission to revolutionize your online shopping experience for
                  computer peripherals. Committed to excellence, we curate a selection of top-tier
                  products, ensuring quality, durability, and innovation. Our focus on customer
                  satisfaction drives us to provide a seamless shopping journey, with user-friendly
                  interfaces and responsive support. CHUPEE is your destination for the latest and
                  most reliable peripherals, empowering individuals and businesses to stay at the
                  forefront of technology. Join us in our quest to make cutting-edge computer
                  peripherals easily accessible, enhancing the way you live, work, and play.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-10">
              <div className="flex-1 flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold text-green-600">Vision</h1>
                <p>
                  At CHUPEE, we envision a future where technology seamlessly integrates into every
                  aspect of our lives, enhancing connectivity and productivity. Our vision is to be
                  a leading online hub for computer peripherals, setting the standard for
                  innovation, reliability, and accessibility. CHUPEE aims to empower individuals and
                  businesses by providing a curated selection of cutting-edge peripherals that not
                  only meet but exceed the evolving demands of the digital era. We strive to be a
                  catalyst for technological advancement, fostering a community of tech enthusiasts
                  who embrace the latest innovations. In this future, CHUPEE is not just a
                  marketplace; it's a dynamic ecosystem where everyone, regardless of expertise, can
                  easily access and enjoy the benefits of state-of-the-art computer peripherals.
                  Together, let's shape a future where technology enriches lives, and CHUPEE is at
                  the forefront of that transformative journey.
                </p>
              </div>
              <svg
                className="flex-1 max-h-[500px]"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 499.232 499.232"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <g>
                        <path d="M183.592,112.704l-6.984-14.392c-5,2.424-9.952,5.144-14.712,8.064l8.376,13.64 C174.584,117.36,179.064,114.896,183.592,112.704z"></path>
                        <path d="M146.152,138.408c3.68-3.448,7.584-6.744,11.6-9.808l-9.704-12.72c-4.44,3.384-8.752,7.032-12.832,10.832 L146.152,138.408z"></path>
                        <path d="M224.616,83.464l2.344,15.832c5.024-0.744,10.112-1.248,15.136-1.496l-0.792-15.984 C235.768,82.096,230.152,82.648,224.616,83.464z"></path>
                        <path d="M402.856,181.056c-2.288-5.104-4.848-10.144-7.616-14.96l-13.872,7.968c2.504,4.36,4.824,8.912,6.888,13.536 L402.856,181.056z"></path>
                        <path d="M364.072,126.76c-4.064-3.808-8.376-7.456-12.816-10.832l-9.704,12.72c4.008,3.064,7.912,6.36,11.592,9.808 L364.072,126.76z"></path>
                        <path d="M96.424,180.944l14.592,6.56c2.072-4.616,4.4-9.168,6.896-13.528l-13.872-7.968 C101.28,170.824,98.712,175.848,96.424,180.944z"></path>
                        <path d="M272.384,99.312l2.392-15.832c-5.488-0.832-11.112-1.384-16.704-1.664L257.28,97.8 C262.344,98.056,267.432,98.56,272.384,99.312z"></path>
                        <path d="M337.432,106.424c-4.768-2.936-9.72-5.656-14.72-8.08l-6.968,14.408c4.512,2.176,8.984,4.64,13.296,7.296 L337.432,106.424z"></path>
                        <path d="M287.272,102.32c4.856,1.24,9.736,2.76,14.496,4.504l5.504-15.032c-5.264-1.92-10.664-3.592-16.032-4.968L287.272,102.32 z"></path>
                        <path d="M363.712,149.352c3.344,3.832,6.52,7.832,9.44,11.92l13.016-9.312c-3.224-4.504-6.728-8.928-10.416-13.144 L363.712,149.352z"></path>
                        <path d="M226.848,399.92l-2.392,15.832c5.488,0.832,11.112,1.384,16.704,1.664l0.792-15.984 C236.888,401.176,231.8,400.672,226.848,399.92z"></path>
                        <path d="M274.616,415.768l-2.344-15.832c-5.024,0.744-10.112,1.248-15.136,1.496l0.792,15.984 C263.464,417.136,269.08,416.584,274.616,415.768z"></path>
                        <path d="M315.64,386.528l6.984,14.392c5-2.424,9.952-5.144,14.712-8.064l-8.368-13.64 C324.648,381.872,320.168,384.336,315.64,386.528z"></path>
                        <path d="M287.16,396.944l3.936,15.504c5.408-1.368,10.808-3.04,16.056-4.952l-5.496-15.032 C296.92,394.192,292.04,395.704,287.16,396.944z"></path>
                        <path d="M353.08,360.824c-3.68,3.448-7.584,6.744-11.6,9.808l9.704,12.72c4.44-3.384,8.752-7.032,12.832-10.832L353.08,360.824z"></path>
                        <path d="M402.808,318.288l-14.592-6.56c-2.072,4.616-4.4,9.168-6.896,13.528l13.872,7.968 C397.952,328.408,400.52,323.384,402.808,318.288z"></path>
                        <path d="M161.8,392.808c4.768,2.936,9.72,5.656,14.72,8.08l6.968-14.408c-4.512-2.176-8.984-4.64-13.296-7.296L161.8,392.808z"></path>
                        <path d="M363.672,349.92l12.024,10.56c3.68-4.192,7.184-8.616,10.432-13.152l-13.016-9.312 C370.176,342.128,367,346.128,363.672,349.92z"></path>
                        <path d="M135.52,349.88c-3.344-3.832-6.52-7.832-9.44-11.92l-13.016,9.312c3.224,4.504,6.728,8.928,10.416,13.144L135.52,349.88z "></path>
                        <path d="M135.16,372.472c4.064,3.808,8.376,7.456,12.816,10.832l9.704-12.72c-4.008-3.064-7.912-6.36-11.592-9.808 L135.16,372.472z"></path>
                        <path d="M96.376,318.176c2.288,5.104,4.848,10.144,7.616,14.96l13.872-7.968c-2.504-4.36-4.824-8.912-6.888-13.536 L96.376,318.176z"></path>
                        <path d="M211.96,396.912c-4.856-1.24-9.736-2.76-14.496-4.504l-5.504,15.032c5.264,1.92,10.664,3.592,16.032,4.968 L211.96,396.912z"></path>
                        <polygon points="241.616,24.568 241.616,65.616 257.616,65.616 257.616,24.568 293.176,48.272 302.056,34.96 249.616,0 197.176,34.96 206.056,48.272 "></polygon>
                        <polygon points="84.824,96.136 113.848,125.16 125.16,113.848 96.136,84.824 138.048,76.448 134.912,60.76 73.112,73.12 60.752,134.904 76.44,138.048 "></polygon>
                        <polygon points="125.16,385.384 113.848,374.072 84.824,403.096 76.44,361.184 60.752,364.328 73.112,426.12 134.912,438.472 138.048,422.784 96.136,414.408 "></polygon>
                        <polygon points="257.616,474.664 257.616,433.616 241.616,433.616 241.616,474.664 206.056,450.96 197.176,464.272 249.616,499.232 302.056,464.272 293.176,450.96 "></polygon>
                        <polygon points="414.408,403.096 385.384,374.072 374.072,385.384 403.096,414.408 361.184,422.784 364.32,438.472 426.12,426.12 438.48,364.328 422.792,361.184 "></polygon>
                        <polygon points="374.072,113.848 385.384,125.16 414.408,96.136 422.792,138.048 438.48,134.904 426.12,73.12 364.32,60.76 361.184,76.448 403.096,84.824 "></polygon>
                        <path d="M449.616,201.616c-9.472,0-18.632,3-26.52,8.32c-36.504-25.672-96.256-56.32-173.48-56.32s-136.976,30.648-173.48,56.32 c-7.896-5.32-17.056-8.32-26.52-8.32c-26.472,0-48,21.528-48,48s21.528,48,48,48c9.472,0,18.632-3,26.52-8.32 c36.504,25.672,96.256,56.32,173.48,56.32s136.976-30.648,173.48-56.32c7.888,5.32,17.048,8.32,26.52,8.32 c26.472,0,48-21.528,48-48S476.088,201.616,449.616,201.616z M49.616,281.616c-17.648,0-32-14.352-32-32s14.352-32,32-32 c4.336,0,8.568,1.008,12.536,2.752c-16.216,12.8-25.368,22.672-26.456,23.864l-4.896,5.384L35.696,255 c1.088,1.192,10.24,11.064,26.456,23.864C58.192,280.608,53.952,281.616,49.616,281.616z M52.928,249.608 c15.448-14.72,63.376-55.472,133.848-72.392c-20.272,17.608-33.16,43.504-33.16,72.4c0,28.88,12.872,54.752,33.12,72.368 C116.392,305.04,68.384,264.304,52.928,249.608z M249.616,329.616c-44.112,0-80-35.888-80-80s35.888-80,80-80s80,35.888,80,80 S293.728,329.616,249.616,329.616z M312.456,322.016c20.272-17.608,33.16-43.504,33.16-72.4c0-28.88-12.872-54.752-33.12-72.368 c70.344,16.944,118.344,57.68,133.808,72.376C430.856,264.344,382.928,305.096,312.456,322.016z M449.616,281.616 c-4.336,0-8.576-1.008-12.536-2.752c16.216-12.8,25.368-22.672,26.456-23.864l4.896-5.384l-4.896-5.384 c-1.088-1.192-10.24-11.064-26.456-23.864c3.96-1.744,8.2-2.752,12.536-2.752c17.648,0,32,14.352,32,32 S467.264,281.616,449.616,281.616z"></path>{" "}
                        <path d="M249.616,193.616c-30.88,0-56,25.128-56,56s25.12,56,56,56c11.048,0,21.744-3.224,30.936-9.336l-8.848-13.328 c-6.568,4.36-14.2,6.664-22.088,6.664c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40 c0,6.984-1.864,13.896-5.392,19.992l13.84,8.016c4.944-8.528,7.552-18.208,7.552-28.008 C305.616,218.744,280.496,193.616,249.616,193.616z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section className="w-full bg-white flex">
          <div className="flex-1 max-w-[1400px] m-auto flex flex-col pt-14 pb-24 gap-y-12">
            <h1 className="text-3xl text-green-600 font-semibold text-center rounded-sm">
              Core Values
            </h1>
            <div className="grid grid-cols-4 auto-rows-auto gap-6">
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Innovation</h4>
                <p className="text-sm">
                  We embrace a culture of continuous innovation, always seeking the latest
                  advancements in technology to provide our customers with cutting-edge computer
                  peripherals that enhance their digital experiences.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Quality Excellence</h4>
                <p className="text-sm">
                  We are committed to delivering products of the highest quality, rigorously
                  selecting and testing each peripheral to ensure durability, reliability, and
                  optimal performance.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Customer-Centric Approach</h4>
                <p className="text-sm">
                  We are committed to delivering products of the highest quality, rigorously
                  selecting and testing each peripheral to ensure durability, reliability, and
                  optimal performance.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Integrity</h4>
                <p className="text-sm">
                  Trust is the foundation of our relationships—with customers, partners, and within
                  our team. We uphold the highest standards of integrity in all our interactions,
                  fostering transparency, honesty, and accountability.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Accessibility</h4>
                <p className="text-sm">
                  We believe that the benefits of advanced technology should be accessible to
                  everyone. CHUPEE is committed to providing a diverse range of computer peripherals
                  at various price points, making innovation within reach for individuals and
                  businesses alike.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Community Engagement</h4>
                <p className="text-sm">
                  We actively engage with our community of tech enthusiasts, fostering a
                  collaborative environment where ideas are shared, and knowledge is celebrated.
                  CHUPEE is not just a marketplace; it's a hub for learning, exploration, and shared
                  passion for technology.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Sustainability</h4>
                <p className="text-sm">
                  We recognize our responsibility to the environment. CHUPEE is committed to
                  sustainable business practices, including eco-friendly packaging, responsible
                  sourcing, and minimizing our carbon footprint, contributing to a healthier planet
                  for future generations.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 p-5 border border-green-600 rounded-md">
                <h4 className="text-xl font-[500] text-green-600">Adaptability</h4>
                <p className="text-sm">
                  In the dynamic world of technology, we remain adaptable and responsive to change.
                  We encourage a culture that embraces new challenges, seeks opportunities for
                  growth, and remains agile in the face of evolving industry trends. These core
                  values guide CHUPEE in every decision and action, shaping our identity as a
                  reliable and forward-thinking provider of computer peripherals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
