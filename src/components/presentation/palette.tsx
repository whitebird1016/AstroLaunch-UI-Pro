import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white p-8 my-12">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="palette.png" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              color="dark"
              className="!flex !items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              Attention to beautiful design
            </Typography>

            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-5xl"
            >
              Awesome color palette, variables & elements foundation.
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
              Customize your colors, sizes, spacing or typography in minutes so they can fit perfectly for your brand. Spend time creating dApps logic and UX, our tools take care of the rest.
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
