import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64 min-h-screen">
      <ClipLoader color="#A76111" size={70} />
    </div>
  );
}