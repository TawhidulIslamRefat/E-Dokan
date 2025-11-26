import Image from "next/image";

export default function SubscribeSection() {
  const logos = [
    "https://qx-plank.myshopify.com/cdn/shop/files/01-150p-01-copy-9.jpg?v=1738519306&width=1920",
    "https://qx-plank.myshopify.com/cdn/shop/files/1.jpg?v=1738519306&width=1920",
    "https://qx-plank.myshopify.com/cdn/shop/files/2.jpg?v=1738519306&width=1920",
    "https://qx-plank.myshopify.com/cdn/shop/files/01-150p-01-copy-8.jpg?v=1738519306&width=1920",
    "https://qx-plank.myshopify.com/cdn/shop/files/1.jpg?v=1738519306&width=1920",
  ];

  return (
    <section className="bg-[#f8f3ee] py-16">
      {/* Top Logos */}
      <div className="flex justify-center gap-38 flex-wrap">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo}
            alt="brand logo"
            width={120}
            height={120}
            className="opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* Subscribe Card */}
      <div className="max-w-7xl mx-auto mt-16 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        {/* Left Content */}
        <div className="bg-[#D1C4B0] w-full md:w-1/2 px-10 py-12 flex flex-col justify-center">
          <p className="text-sm tracking-[3px] text-gray-700">
            GET THE LATEST IN FURNITURE TRENDS, EXCLUSIVE OFFERS
          </p>
          <h2 className="text-3xl font-bold mt-3">
            Stay Inspired, Stay Comfortable
          </h2>

          <div className="mt-6">
            <div className="flex items-center bg-white rounded-lg border px-4 py-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 outline-none text-gray-700"
              />
              <button className="text-gray-600">→</button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/articles/blog-5_d28def92-20a2-47d3-b862-0e3c887f8047_360x.jpg?v=1747553776"
            alt="Chair"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
