import { useNavigate } from "react-router-dom";
export function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">

      <div className="space-y-8 flex-1">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
          <span className="text-[#002970]">Paytm</span>
          <br />
          <span className="text-[#00baf2]">Karo</span>
        </h1>

        <div className="max-w-xl">
          <p className="text-gray-600 text-xl md:text-2xl mb-8 leading-relaxed">
            Payments that move as fast as you do — simple, secure, and seamless.
          </p>
          <button onClick={() => {
            navigate("/signup")
          }} className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold  transition shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 hover:bg-blue-300 hover:cursor-pointer">
            Get Started <span className="ml-2">→</span>
          </button>
        </div>
      </div>


      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/PAYTM-PAYMENT-BANK-removebg-preview.png"
          alt="Paytm Payments Bank"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
