import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100 px-4">
        {/* <!-- Page content here --> */}

        <Outlet />
        {/* <!-- Page content end here --> */}
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 shadow-xl border m-2 rounded-lg text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="mb-3 flex justify-between items-center">
            <h2 className="text-xl">
              Welcome{" "}
              <span className="text-primary font-bold">
                {user?.displayName}
              </span>
            </h2>
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
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <NavLink to="/dashboard/addreview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myprofile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
