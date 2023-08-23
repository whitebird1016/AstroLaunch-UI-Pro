import React from "react";

import {
  Button,
  Typography,
  Avatar,
  Input,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { StarIcon } from "@heroicons/react/24/solid";

const users = [
  {
    name: "John Michael",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Laurent Perrier",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Michael Levi",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Miriam Eric",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  },
  {
    name: "Richard Gran",
    img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];


export function HeroSectionOne() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full min-h-screen w-screen bg-white px-4 pt-24">
        <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row">
          <div className="mr-0 lg:mr-16 xl:mr-24">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 text-4xl !leading-tight md:text-5xl"
            >
              Your work with AstroLaunch UI
            </Typography>
            <Typography
              variant="lead"
              className="mb-16 text-blue-gray-800 md:pr-16 xl:pr-28"
            >
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </Typography>
            <div className="mb-6 flex w-full flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Input color="black" label="Enter your email" size="lg" />
              <Button color="dark" className="w-full px-4 md:w-[12rem]">get started</Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="inline-flex items-center font-normal"
            >
              We care about your data in our&nbsp;
              <Typography
                as="a"
                href="#"
                variant="small"
                className="underline decoration-gray-500 underline-offset-4"
              >
                privacy policy
              </Typography>
            </Typography>
          </div>
          <img
            src="https://images.unsplash.com/photo-1633287453185-6c497fd6f099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt="team work"
            className="lg:0 mb-8 h-96 w-full rounded-xl object-cover lg:h-[40rem] lg:w-1/2"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionOne;
