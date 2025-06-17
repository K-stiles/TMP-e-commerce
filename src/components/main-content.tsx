import CategoryCard from "@/common/category-card";
import Landing from "./landing";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import Heading from "./heading";

export default function MainContent() {
  // const { data: products, isLoading, error } = useProducts();

  // if (isLoading) return <p className="p-4">Loading products...</p>;
  // if (error) return;

  const productsCategories = [
    {
      id: "1",
      name: "HEADPHONES",
      path: "29.99",
      imageUrl: "/images/icons/image-removebg-preview(41).png",
    },
    {
      id: "2",
      name: "SPEAKERS",
      path: "39.99",
      imageUrl: "/images/icons/speaker.png",
    },
    {
      id: "3",
      name: "EARPHONES",
      path: "49.99",
      imageUrl: "/images/icons/earphones.png",
    },
  ];
  return (
    <>
      <section className="bg-black-bg flex items-center lg:items-start min-h-screen justify-between w-full px-0 md:px-10">
        <Landing />
      </section>

      {/* <section className="">
        <CategoryCard /> */}
      {/* <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      {/* </section> */}
      <section className="mt-20 py-10 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsCategories.map((productCat) => (
              <CategoryCard
                key={productCat.id}
                title={productCat.name}
                imageUrl={productCat.imageUrl}
                path={productCat.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ZX9 Speaker Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "bg-primary rounded-xl grid lg:grid-cols-2 gap-12 items-center ",
              "bg-no-repeat bg-[length:650px_auto] bg-[position:bottom_0px_left_1.5rem]"
            )}
            style={{ backgroundImage: "url(/images/icons/ovals.png)" }}
          >
            <div className="flex pt-20 justify-center">
              <img
                src="/images/icons/zx9-speaker.png"
                alt="ZX9 Speaker"
                className="w-72 h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
            <div className="text-white">
              <Heading className="w-1/3">ZX9 SPEAKER</Heading>
              <p className="text-lg mb-8 opacity-90 max-w-md">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to={"/products"}
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-black-bg hover:bg-black-bg/50"
                )}
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div
            className=" p-20 lg:p-16 relative overflow-hidden rounded-xl"
            style={{
              backgroundImage: "url(/images/icons/speaker-bottom.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <Heading size={"h3"} className="mb-8">
                ZX7 SPEAKER
              </Heading>
              <Link
                to={"/products"}
                className={cn(
                  "border-2 border-black hover:bg-black hover:text-white px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all"
                )}
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-200 w-full flex-1 overflow-hidden rounded-xl flex items-center justify-center">
            <img
              src="/images/icons/large-earphones.png"
              alt="YX1 Earphones"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="bg-gray-100 p-12 flex flex-col justify-center rounded-xl">
            <Heading size={"h3"} className="mb-8">
              YX1 EARPHONES
            </Heading>
            <Link
              to={"/products"}
              className={cn(
                "border-2 w-fit border-black hover:bg-black hover:text-white px-8 py-3 text-sm uppercase tracking-wide font-semibold transition-all"
              )}
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Heading size="h2" className=" w-2/3">
              BRINGING YOU THE
              <span className="text-primary pl-4">BEST</span> AUDIO GEAR
            </Heading>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="bg-gray-200 h-full rounded-lg  flex items-center justify-center">
            <img
              src="/images/icons/person.png"
              alt="About Us"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
