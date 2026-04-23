import { ButtonComponent } from "./ButtonComponent"
export function UsersComponent({value1}) {
    return (
        <div className="flex justify-between items-center px-6 mt-2">
            <div className="flex gap- items-center">
                <div><img src="\public\user-icon.svg" alt="user" /> </div>
                <div className="text-blue-600 font-medium">{value1}</div>
            </div>
            <ButtonComponent value={"Send Money"} />
        </div>
    )
}