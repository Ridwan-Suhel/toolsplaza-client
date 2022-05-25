import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyInfo from "./MyInfo";
import MyInfoUpdateForm from "./MyInfoUpdateForm";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-5">
      <h2 className="text-xl ">My Profile</h2>

      <div className="my-profile mt-5">
        <div className="lg:flex gap-4 ">
          {/* single card  */}
          <div className="left-area w-full">
            {/* left area single card  */}
            <div className="card w-full bg-base-100 shadow border row-auto">
              <div className="p-4">
                <div className="mb-3 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl">
                      <span className="text-primary font-bold">
                        {user?.displayName}
                      </span>
                    </h2>
                    <h2 className="text-lg">
                      <span className="">{user?.email}</span>
                    </h2>
                  </div>
                  {user?.photoURL && (
                    <div className="avatar">
                      <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="object-cover"
                          src={user?.photoURL}
                          alt={user?.displayName}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* left area single card  */}
            <div className="mt-5">
              <MyInfo></MyInfo>
            </div>
          </div>

          {/* single card  */}
          <div className="right-area w-full mt-5 lg:mt-0">
            <MyInfoUpdateForm></MyInfoUpdateForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
