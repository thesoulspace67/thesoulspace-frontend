import Image from "next/image";
import Link from "next/link";

const BestSeller = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center w-full justify-center gap-5 mb-7">
        <span className="h-[2px] px-3 bg-gray-200 w-[15%]"></span>
        <h1 className="text-gray-800 font-bold text-4xl text-center">
          Best Sellers
        </h1>
        <span className="h-[2px] px-3 bg-gray-200 w-[15%]"></span>
      </div>
      <div className="mt-3 flex justify-center flex-wrap w-full gap-8 md:gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSeller;

const ProductCard = () => {
  return (
    <div className="hover:scale-105 w-[300px] transition-all duration-200 p-3 flex flex-col gap-2">
      <div className="rounded-xl overflow-hidden">
        <Image
          width={300}
          height={300}
          src="https://source.unsplash.com/random/300x300/?modernart"
          alt="pr1"
          className="object-cover"
        />
      </div>
      <div className=" px-2">
        <Link href={"/pr1"} className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg">Canvas Quote Table</h2>
            <p className="font-semibold">&#x20B9;150</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, modi!
          </p>
        </Link>
      </div>
    </div>
  );
};
