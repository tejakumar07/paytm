import { AppBar } from "../Components/AppBar";
import { InputBox } from "../Components/InputBox"
import { ButtonComponent } from "../Components/ButtonComponent";
import { UsersComponent } from "../Components/UsersComponent";


export  function Dashboard() {
    return (
        <div>
            <div><AppBar/></div>
            <div className="font-bold text-blue-600 px-6.5">Your Balance Rs. 10, 000</div>
            <div className="px-6.5 mt-4">
                <InputBox  value1={"Users"} value2={"Search Users..."} value3={"text"} />
            </div>
            <UsersComponent value1={"User1"}/>
            <UsersComponent value1={"User2"}/>
            <UsersComponent value1={"User3"}/>
        </div>
    )
}


