"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
  const { id } = useParams(); // grabs the product id from URL
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://e-dokan-server-dusky.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        className="btn  mb-4 bg-amber-100 hover:bg-amber-800 hover:text-white"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>
      <Image
        width={1000}
        height={300}
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
      <p className="mb-4 text-lg font-medium text-gray-600">
        {product.fullDescription}
      </p>
      <div className="text-gray-600">
        <p className="text-xl font-medium text-red-500 ">
          Price: <span>{product.price}</span>
        </p>
        <p className="text-xl font-medium text-gray-800 my-1">
          Date: <span>{product.date}</span>
        </p>
        <p className="text-xl font-medium text-gray-800">
          Priority: <span className="text-green-600">{product.priority}</span>
        </p>
      </div>
    </div>
  );
}
