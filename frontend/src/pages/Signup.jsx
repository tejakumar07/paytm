import { useState } from "react";
import { ButtonComponent } from "../Components/ButtonComponent.jsx";
import { ButtonWarning } from "../Components/ButtonWarning.jsx";
import {Heading} from "../Components/Heading.jsx";
import { InputBox } from "../Components/InputBox.jsx";
import { SubHeading } from "../Components/SubHeading.jsx";
import axios from "axios";


export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#c2ceda] flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 ">
        <div className="mb-4 text-center">
          <Heading value={"Sign Up"} />
          <SubHeading value={"Enter your Information to Create an Account"} />
        </div>
        <div className="space-y-4">
          <InputBox value1={"First Name"} value2={"Jon"} value3={"text"} value4={e => {
            setFirstName(e.target.value);
          }}/>
          <InputBox value1={"Last Name"} value2={"Snow"} value3={"text"} value4={e => {
            setLastName(e.target.value);
          }}/>
          <InputBox value1={"Email"} value2={"jonsnow@gmail.com"} value3={"text"} value4={e => [
            setEmail(e.target.value)
          ]}/>
          <InputBox value1={"Password"} value2={""} value3={"password"} value4={e => {
            setPassword(e.target.value)
          }}/>
        </div>
        <div className="mt-4">
          <ButtonComponent onClick={async () => {
            const response = await axios.post("http://localhost:3000/sapi/v1/user/signup", {
              email,
              password,
              firstName,
              lastName
            });
            localStorage.setItem("token", response.data.token)
          }} value={"Signup"}/>
        </div>
        <ButtonWarning label={"Already have an account?"} buttonText={"Login Up"} to={"/login"}/>
      </div>
    </div>
  );
}