import { routesLinks } from "@/constats/route-links";
import { Logo } from "./logo";
import NavigationLinks from "./navigation-links";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="text-white w-full py-4 bg-black-bg">
      <div className="max-w-6xl mx-auto w-full flex space-y-5 flex-col p-4 items-center md:items-start justify-between gap-5">
        <div className="flex flex-col items-center md:items-start justify-between gap-5 lg:flex  lg:justify-between w-full lg:flex-row">
          <Logo className="w-32" />
          <div className="mt-8 lg:mt-0">
            <NavigationLinks
              routes={routesLinks}
              className="flex-col md:flex-row lg:items-center lg:justify-center"
            />
          </div>
        </div>
        <p className="text-sm text-white/50 mt-2 text-center w-full md:text-start sm:w-2/3  lg:w-1/2">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:w-full">
          <p className="text-sm text-white/50 mt-2">
            Copyright 2021. All Rights Reserved
          </p>
          <span className="flex items-center justify-center gap-4">
            <Link to="#">
              <img
                src="/images/icons/facebook.png"
                alt="facebook icon"
                className={"w-6  object-contain cursor-pointer"}
              />
            </Link>
            <Link to="#">
              <img
                src="/images/icons/x.png"
                alt="twitter icon"
                className={"w-6  object-contain cursor-pointer"}
              />
            </Link>
            <Link to="#">
              <img
                src="/images/icons/instagram.png"
                alt="instagram icon"
                className={"w-6  object-contain cursor-pointer"}
              />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
