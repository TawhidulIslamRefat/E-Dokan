"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className=" py-2.5 md:py-6 bg-linear-to-r from-[#a78f31] to-[#141111] my-6">
      <Marquee gradient={false} speed={150}>
        <span className="mx-6 text-xl font-semibold flex items-center gap-2">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
            alt="E-Dokan Logo"
            height={40}
            width={40}
            className="object-cover"
          />
          <span className=" text-lg md:text-2xl font-bold text-white">Free Shipping on Orders Over $500</span>
        </span>

        <span className="mx-6 text-xl font-semibold flex items-center gap-2">
          <div>
            <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
            alt="E-Dokan Logo"
            width={40}
            height={40}
            className="object-cover"
          />
          </div>
          <span className="text-lg md:text-2xl font-bold text-white">Buy More, Save More</span>
        </span>

        <span className="mx-6 text-xl font-semibold flex items-center gap-2">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
            alt="E-Dokan Logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <span className="text-lg md:text-2xl font-bold text-white">Upgrade Your Home – Save 20%</span>
        </span>

        <span className="mx-6 text-xl font-semibold flex items-center gap-2">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
            alt="E-Dokan Logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <span className="text-lg md:text-2xl font-bold text-white">Free Assembly on All Orders</span>
        </span>
        <span className="mx-6 text-xl font-semibold flex items-center gap-2">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
            alt="E-Dokan Logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <span className="text-lg md:text-2xl font-bold text-white">Limited Time Offer – 15% Off</span>
        </span>
      </Marquee>
    </div>
  );
}
