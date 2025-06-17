import Heading from "./heading";
import { Button } from "./button";
import OverlineText from "./overline";

export default function Landing() {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-0 lg:p-16 items-center justify-center flex flex-col lg:flex-row">
      <div className="absolute space-y-3 lg:relative flex-1 w-full md:w-3/4 lg:w-1/2 order-2 lg:order-1 p-2 items-center lg:items-start justify-center flex flex-col ">
        <OverlineText className="text-white/70 ">NEW PRODUCT</OverlineText>
        <Heading size={"h2"} className="text-center text-white w-2/3 lg:w-full">
          XX99 Mark II Headphones
        </Heading>
        <p className="text-white/70 mt-4 mb-6 w-2/3 text-sm text-center lg:text-start">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button className="">See Product</Button>
      </div>
      <div className="flex-1 w-full order-1 lg:order-2 lg:w-1/2 items-center justify-center flex">
        <img
          src="/public/images/Bitmap.png"
          alt="head phone image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
