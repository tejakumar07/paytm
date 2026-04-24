import { ButtonComponent } from "../Components/ButtonComponent";
import { HeroSection } from "../Components/HeroSection";
import { VericalCards } from "../Components/VarticalCards";

export function HomePage() {
  return (
    <div>
      <div className="flex justify-between items-center shadow-lg rounded-lg px-10 h-16">
        <img
          className="h-40 w-40 object-contain py-2"
          src="/logo_new.svg"
          alt="logo"
        />

        <div className="flex items-center gap-8 text-sm">
          <h1 className="hover:cursor-pointer hover:underline">
            Recharges and Bills
          </h1>
          <h1 className="hover:cursor-pointer hover:underline">
            Ticket Booking
          </h1>
          <h1 className="hover:cursor-pointer hover:underline">
            Paytm for Business
          </h1>
          <h1 className="hover:cursor-pointer hover:underline">
            Paytm & Services
          </h1>
          <h1 className="hover:cursor-pointer hover:underline">Features</h1>
          <h1 className="hover:cursor-pointer hover:underline">Login</h1>
          <h1 className="hover:cursor-pointer hover:underline">Signup</h1>
        </div>
      </div>
      <HeroSection />
      <VericalCards
        imageURL={"/Trains-Republic-Day_Thin-Banner.jpg"}
        imageCover={"Paythm Let's you book trian tickets"}
        imageName={"train ticket"}
      />
      <VericalCards
        imageURL={"Bus-Republic-Day_Thin-Banner.jpg"}
        imageCover={"Paythm Let's you book Bus tickets"}
        imageName={"Bus ticket"}
      />
      <VericalCards
        imageURL={"/Flights-Republic-Day_Thin-Banner.jpg"}
        imageCover={"Paythm Let's you book Flight tickets"}
        imageName={"Flight ticket"}
      />
    </div>
  );
}
