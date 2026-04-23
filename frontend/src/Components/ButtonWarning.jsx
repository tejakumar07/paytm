import { Link } from "react-router-dom"

export function ButtonWarning({label, buttonText, to}) {
    return (
        <div className="flex gap-5 mt-4">
            {label}
            <Link className="underline" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}