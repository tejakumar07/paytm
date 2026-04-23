export function InputBox({value1, value2, value3}) {
    return (
        <div>
            <label className="font-medium text-blue-600 mb-2 block">{value1}</label>
            <input className="outline-1 outline-gray-500 rounded-md p-2 w-full" type={value3} placeholder={value2} />
        </div>
    )
}