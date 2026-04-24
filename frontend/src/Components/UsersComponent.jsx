import { useEffect, useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export function UsersComponent({ filter }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function usersData() {
      const response = await axios.get(
        "http://localhost:3000/sapi/v1/user/bulk?filter=" + filter,
      );
      setUsers(response.data.user);
    }
    usersData();
  }, [filter]);

  return (
    <div className="px-6 mt-2 space-y-3">
      {users.map((user) => (
        <div key={user._id} className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <div className="bg-blue-300 font-bold text-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
              <h1 className="leading-none">H</h1>
            </div>
            <div className="text-blue-600 font-medium">
              <h1>
                {user.firstName} {user.lastName}
              </h1>
            </div>
          </div>
          <ButtonComponent
            value={"Send Money"}
            onClick={(e) => {
              navigate(
                "/send?id=" +
                  user._id +
                  "&name=" +
                  user.firstName +
                  " " +
                  user.lastName,
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}
