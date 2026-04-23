import { ButtonComponent } from "../Components/ButtonComponent.jsx";
import { ButtonWarning } from "../Components/ButtonWarning.jsx";
import {Heading} from "../Components/Heading.jsx";
import { InputBox } from "../Components/InputBox.jsx";
import { SubHeading } from "../Components/SubHeading.jsx";

export function SignUp() {
  return (
    <div className="bg-[#c2ceda] flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 ">
        
        
        <div className="mb-4 text-center">
          <Heading value={"Sign Up"} />
          <SubHeading value={"Enter your Information to Create an Account"} />
        </div>

        
        <div className="space-y-4">
          <InputBox value1={"First Name"} value2={"Jon"} />
          <InputBox value1={"Last Name"} value2={"Snow"} />
          <InputBox value1={"Email"} value2={"jonsnow@gmail.com"} />
          <InputBox value1={"Password"} value2={""} value3={"password"} />
        </div>

        
        <div className="mt-4">
          <ButtonComponent value={"Signup"} />
        </div>
        <ButtonWarning label={"Already have an account?"} buttonText={"Login Up"} to={"/login"}/>
      </div>
    </div>
  );
}