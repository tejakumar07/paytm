import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";
export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col self-stretch bg-white pb-[188px] gap-9">
        <div
          className="flex items-center self-stretch bg-white py-10 border border-solid border-[#DEC4C4]"
          style={{
            boxShadow: "0px 4px 4px #00000040",
          }}
        >
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Foi9xPdSmI/xrfe8lq1_expires_30_days.png"
            }
            className="w-[162px] h-[37px] ml-6 mr-5 object-fill"
          />
          <span className="flex-1 text-black text-2xl font-bold text-center mr-[49px]">
            {"Recharges and Bills"}
          </span>
          <span className="text-black text-2xl font-bold mr-12">
            {"Ticket  Booking"}
          </span>
          <span className="flex-1 text-black text-2xl font-bold text-center mr-[49px]">
            {"Payment and Services"}
          </span>
          <span className="flex-1 text-black text-2xl font-bold text-center mr-[47px]">
            {"Paytm for Bussiness"}
          </span>
          <span className="text-black text-2xl font-bold mr-12">
            {"Company"}
          </span>
          <span className="text-black text-2xl font-bold mr-[52px]">
            {"Download  App"}
          </span>
          <button
            className="flex flex-col shrink-0 items-start bg-[#002970] text-left py-6 px-[50px] mr-[71px] rounded-[50px] border-0"
            onClick={() => navigate("/login")}
          >
            <span className="text-[#FFFFFB] text-2xl font-bold">{"Login"}</span>
          </button>
        </div>
        <div className="flex justify-between items-start self-stretch max-w-[1676px] mx-auto">
          <div className="flex flex-col shrink-0 items-start mt-[63px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Foi9xPdSmI/zjdpfvkx_expires_30_days.png"
              }
              className="w-[315px] h-[58px] mb-[26px] ml-[22px] object-fill"
            />
            <span className="text-black text-[64px] font-bold mb-[5px] ml-4">
              {"Pay anyone directly"}
            </span>
            <div className="flex flex-col items-start pr-1.5 mb-[11px] ml-[3px]">
              <span className="text-black text-[64px] font-bold ml-1.5">
                {"from your bank"}
              </span>
              <span className="text-[#00BAF2] text-[64px] font-bold">
                {"Account"}
              </span>
            </div>
            <span className="text-black text-2xl font-bold mb-1 ml-[11px]">
              {"Pay anyone, everywhere. Make contactless & Secure"}
            </span>
            <span className="text-black text-2xl font-bold mb-2 ml-[9px]">
              {"Payments in-store or online using Paytm UPI or"}
            </span>
            <span className="text-black text-2xl font-bold mb-[19px] ml-[9px]">
              {"receive money from anyone"}
            </span>
            <button
              className="flex flex-col items-start bg-[#002970] text-left py-[49px] px-[38px] rounded-[80px] border-0"
              onClick={() => navigate("/signup")}
            >
              <span className="text-white text-2xl font-bold">
                {"Create Account"}
              </span>
            </button>
          </div>
          <div className="flex flex-col shrink-0 items-start relative">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Foi9xPdSmI/tyq41agm_expires_30_days.png"
              }
              className="w-[690px] h-[704px] object-fill"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
