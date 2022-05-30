import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-xl text-primary">
        We have total - {users.length} {users.length > 1 ? "Users" : "User"}
      </h2>
      <div className="users-wrapper mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users.map((user, index) => (
                <UserRow
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
