import Image from "next/image";

const Featured = () => {
  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="section-header text-center">
        <div className="uppercase tracking-[3px] text-[#A76137] text-xs sm:text-[15px] font-medium mb-3">
          Furniture picks every room style
        </div>
        <h3 className="text-black font-bold text-2xl md:text-4xl">
          <span>Featured Collections</span>
        </h3>
      </div>
      <div className=" mt-10 md:mt-20 grid grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="relative w-[70%] h-30 md:w-full md:h-120 mx-auto">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/c3.gif?v=1739091263&width=360"
            alt="Comfort Chair"
            fill
            className="rounded-full border-3 border-gray-400"
          />
        </div>
        <div className="relative w-[70%] h-30 md:w-full md:h-120 mx-auto">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/c2.gif?v=1739091263&width=360"
            alt="Comfort Chair"
            fill
            className="rounded-full border-3 border-gray-400"
          />
        </div>
        <div className="relative w-[70%] h-30 md:w-full md:h-120 mx-auto">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/c4.gif?v=1739091263&width=360"
            alt="Comfort Chair"
            fill
            className="rounded-full border-3 border-gray-400"
          />
        </div>
        <div className="relative w-[70%] h-30 md:w-full md:h-120 mx-auto">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/c5.gif?v=1739091263&width=360"
            alt="Comfort Chair"
            fill
            className="rounded-full border-3 border-gray-400"
          />
        </div>
      </div>
     
    </div>
  );
};

export default Featured;
