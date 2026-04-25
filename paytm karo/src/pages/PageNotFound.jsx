import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();
  return (
    // Wraps everything in a full-screen flex container to center the grid
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* max-w-6xl limits how far apart the text and image can get */}
      <div className="grid grid-cols-12 gap-10 items-center max-w-6xl w-full">
        {/* Keep text slightly narrower so the image can be larger */}
        <div className="col-span-4">
          <h1 className="text-5xl font-extrabold text-blue-600">
            You’re lost.
          </h1>
          <h1 className="text-5xl font-extrabold text-blue-300">
            But at least you’re not alone.
          </h1>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-blue-600 font-bold text-white p-2 rounded-lg hover:bg-blue-300 hover:text-black mt-5 mx-8 px-5"
          >
            Home
          </button>
        </div>

        {/* Give the image more horizontal space */}
        <div className="col-span-8 flex justify-center">
          <img
            className="w-full h-auto max-h-[88vh] object-contain"
            src="/Gemini_Generated_Image_wq4955wq4955wq49.png"
            alt="page not found"
          />
        </div>
      </div>
    </div>
  );
}
