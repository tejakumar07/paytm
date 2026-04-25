import { HeroSection } from "../Components/HeroSection";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div>

      <div className="flex justify-between items-center shadow-lg rounded-lg px-10 h-16">
        <img
          className="h-40 w-40 object-contain py-2"
          src="/logo_new.svg"
          alt="logo"
        />

        <div className="flex items-center gap-8 text-sm">
          <h1 onClick={() => {
            navigate("/nothing")
          }} className="hover:cursor-pointer hover:underline">
            Recharges and Bills
          </h1>
          <h1 onClick={() => {
            navigate("/nothing")
          }} className="hover:cursor-pointer hover:underline">
            Ticket Booking
          </h1>
          <h1 onClick={() => {
            navigate("/nothing")
          }} className="hover:cursor-pointer hover:underline">
            Paytm for Business
          </h1>
          <h1 onClick={() => {
            navigate("/nothing")
          }} className="hover:cursor-pointer hover:underline">
            Paytm & Services
          </h1>
          <h1 onClick={() => {
            navigate("/nothing")
          }} className="hover:cursor-pointer hover:underline">Features</h1>
          <h1 onClick={() => {
            navigate("/login")
          }} className="hover:cursor-pointer hover:underline">Login</h1>
          <h1 onClick={() => {
            navigate("/signup")
          }} className="hover:cursor-pointer hover:underline">Signup</h1>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <HeroSection />


        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="flex justify-center">
              <img
                src="/CreditCard.png"
                alt="Credit Card"
                className="w-64 md:w-72 object-contain"
              />
            </div>


            <div className="flex justify-center">
              <img
                src="/CreditCard.png"
                alt="Credit Card"
                className="w-64 md:w-72 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
