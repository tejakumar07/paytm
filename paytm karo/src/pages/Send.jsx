import { ButtonComponent } from "../Components/ButtonComponent";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Send() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState();
  return (
    <div className="bg-[#c2ceda] flex justify-center items-center min-h-screen">
      <div className="bg-white p-2 rounded-sm w-96 space-y-2">
        <div className="text-center">
          <Heading value={"Send Money"} />
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full " src="/boy.png" alt="logo" />
          <p className="text-blue-600 font-medium">{name}</p>
        </div>
        <InputBox
          value1={"Amount in Rs"}
          value2={"Enter Amount"}
          value4={(e) => {
            setAmount(e.target.value);
          }}
        />
        <ButtonComponent
          value={"Transfer Money"}
          onClick={() => {
            axios.post(
              "https://paytm-lmm3.onrender.com/sapi/v1/account/transfer",
              {
                to: id,
                amount: parseFloat(amount),
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              },
            );
          }}
        />
      </div>
    </div>
  );
}
