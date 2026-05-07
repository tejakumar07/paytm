import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { ButtonComponent } from "../Components/ButtonComponent";
import { ButtonWarning } from "../Components/ButtonWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const verifySession = async () => {
      try {
        await axios.get("https://paytm-lmm3.onrender.com/sapi/v1/user/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        navigate("/dashboard", { replace: true });
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
      }
    };

    verifySession();
  }, [navigate]);

  return (
    <div className="bg-[#c2ceda] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <div className="text-center mb-6">
          <Heading value={"Login"} />
          <SubHeading value={"Enter your credentials to access your account"} />
        </div>

        <div className="space-y-4">
          <InputBox
            value1={"Email"}
            value2={"johnsnow@gmail.com"}
            value3={"text"}
            value4={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            value1={"Password"}
            value2={""}
            value3={"password"}
            value4={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {errorMessage ? (
          <div className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <div className="mt-6">
          <ButtonComponent
            value={"Login"}
            onClick={async () => {
              setErrorMessage("");

              try {
                const response = await axios.post(
                  "https://paytm-lmm3.onrender.com/sapi/v1/user/signin",
                  {
                    email,
                    password,
                  },
                );

                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "firstName",
                  response.data.firstName || "",
                );
                localStorage.setItem("lastName", response.data.lastName || "");
                navigate("/dashboard", {
                  state: {
                    message: response.data.msg || "Successfully logged in",
                  },
                });
              } catch (error) {
                setErrorMessage(
                  error?.response?.data?.msg ||
                    "User does not exist. Try again.",
                );
              }
            }}
          />
        </div>
        <ButtonWarning
          label={"Don't have an account?"}
          buttonText={"Signup"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}
