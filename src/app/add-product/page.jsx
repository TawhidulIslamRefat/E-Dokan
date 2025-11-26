"use client";

import { useState } from "react";
import Head from "next/head";

export default function AddItem({ user }) {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    priority: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // এখানে API call বা DB logic লাগবে
  };

  return (
    <div className=" py-14 min-h-screen">
      <Head>
        <title>Add Product</title>
      </Head>

      <div className="w-[95%] lg:w-3xl mx-auto bg-white  shadow-xl rounded-xl mt-20 p-5 md:p-10">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-8">
          Add New <span className="text-[#A86111]">Product</span>
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1 text-sm">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block font-semibold mb-1 text-sm">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter short description"
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block font-semibold mb-1 text-sm">Full Description</label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Enter full description"
              required
            ></textarea>
          </div>

          {/* Price, Date, Priority */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-sm">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-sm">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-sm">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Optional Image URL */}
          <div>
            <label className="block font-semibold mb-1 text-sm">Image URL (optional)</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>
                {/* User Info (readonly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              value={user?.displayName || ""}
              className="input input-bordered w-full bg-gray-100 "
              readOnly
            />
            <input
              type="email"
              value={user?.email || ""}
              className="input input-bordered w-full bg-gray-100"
              readOnly
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#A86111] hover:bg-orange-900 text-white text-sm sm:text-lg py-2 rounded-md transition-all duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
