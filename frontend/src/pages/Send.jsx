import { ButtonComponent } from "../Components/ButtonComponent";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";

export function Send() {
    return (
        <div className="bg-[#c2ceda] flex justify-center items-center min-h-screen">
            <div className="bg-white p-2 rounded-sm w-96 space-y-2">
                <div className="text-center"><Heading value={"Send Money"} /></div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full " src="/public/boy.png" alt="logo" />
                    <p className="text-blue-600 font-medium">Friend's Name</p>
                </div>
                <InputBox value1={"Amount in Rs"} value2={"Enter Amount"} />
                <ButtonComponent value={"Transfer Money"} />
            </div>
        </div>
    )
}



