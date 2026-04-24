export function VericalCards({ imageURL, imageName, imageCover }) {
  return (
    <div className="grid grid-cols-2 mt-10 mx-10 items-center">
      {/* LEFT: TEXT + BUTTON */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-blue-600">
          {imageCover}
        </h1>

        <button className="bg-blue-600 rounded-lg w-40 h-10 text-white hover:bg-blue-500 font-bold flex items-center justify-center self-start">
          Book Now
        </button>
      </div>

      <div className="flex justify-center">
        <img
          className="max-w-xl w-full object-contain"
          src={imageURL}
          alt={imageName}
        />
      </div>
    </div>
  );
}
