import { Heading } from "../Components/Heading"
import { SubHeading } from "../Components/SubHeading"
import { InputBox } from "../Components/InputBox"
import { ButtonComponent } from "../Components/ButtonComponent"
import { ButtonWarning } from "../Components/ButtonWarning";
import { useState } from "react";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="bg-[#c2ceda] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        
        
        <div className="text-center mb-6">
          <Heading value={"Login"} />
          <SubHeading value={"Enter your credentials to access your account"} />
        </div>

       
        <div className="space-y-4">
          <InputBox value1={"Email"} value2={"johnsnow@gmail.com"} value3={"text"} value4={(e) => {
            setEmail(e.target.value)
          }}/>
          <InputBox value1={"Password"} value2={""} value3={"password"} value4={(e) => {
            setPassword(e.target.value)
          }}/>
        </div>

        
        <div className="mt-6">
          <ButtonComponent value={"Login"}/>
        </div>
        <ButtonWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"} />
      </div>
    </div>
  );
}