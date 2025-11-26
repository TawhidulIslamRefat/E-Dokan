import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#F7F2EE] my-10">
      <div className=" w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="uppercase tracking-[3px] text-[#A57B4E] text-sm font-medium mb-3">
            Minimal Meets Functional
          </p>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight mb-6">
            Redefine Comfort <br /> & Luxury
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
            Experience the latest trends in sustainable furniture.
            Stylish designs that bring warmth to your living space.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-sm text-sm tracking-wider hover:bg-gray-800 duration-300 flex items-center gap-2">
            SHOP NOW →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/pexels-pixabay-276583.jpg?v=1737910247&width=1920"
            alt="Comfort Chair"
            width={900}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
