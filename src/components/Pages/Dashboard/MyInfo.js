import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyInfo = () => {
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;
  const url = `http://localhost:5000/userinfo/${email}`;
  const {
    isLoading,
    data: userInfo,
    refetch,
  } = useQuery(["userinfo", email], () => fetch(url).then((res) => res.json()));

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl border ">
      <div className="p-4">
        <div className="md:flex md:justify-between md:items-center">
          <h2 className="text-2xl mb-4">My Info</h2>
          <button
            onClick={() => handleRefresh()}
            className="btn btn-primary btn-sm"
          >
            Refresh
          </button>
        </div>

        {userInfo ? (
          <div className="info-txt-wrapper">
            <div className="mb-2">
              <small>Phone:</small>
              <h2 className="text-xl">{userInfo?.phone}</h2>
            </div>
            <div className="mb-2">
              <small>Education:</small>
              <h2 className="text-xl">{userInfo?.education}</h2>
            </div>
            <div className="mb-2">
              <small>City:</small>
              <h2 className="text-xl">{userInfo?.city}</h2>
            </div>
            <div className="mb-2">
              <small>Zip Code:</small>
              <h2 className="text-xl">{userInfo?.zip}</h2>
            </div>
            <div className="mb-2">
              <small>Country:</small>
              <h2 className="text-xl">{userInfo?.country}</h2>
            </div>
            <div className="mb-2">
              <small>Linkedin:</small>
              <h2 className="text-xl">{userInfo?.linkedin}</h2>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <h2 className="text-xl text-error">Please Update Your profile</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInfo;
