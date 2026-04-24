export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-blue-700">Paytm</span>
          <br />
          <span className="text-blue-400">Karo</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-md">
          Payments that move as fast as you do — simple, secure, and seamless.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="/PAYTM-PAYMENT-BANK-removebg-preview.png"
          alt="hero"
          className="w-full max-w-lg md:max-w-xl object-contain"
        />
      </div>
    </div>
  );
}
