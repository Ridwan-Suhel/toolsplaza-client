import {
  CogIcon,
  CubeIcon,
  CubeTransparentIcon,
  LibraryIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100 px-4 custom-scroll">
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
            <Link to="/dashboard">
              <UserCircleIcon className="h-7 w-7 text-neutral"></UserCircleIcon>
              My Profile
            </Link>
          </li>
          {!admin && (
            <>
              <li>
                <NavLink to="/dashboard/myorders">
                  <CubeIcon className="h-7 w-7 text-neutral" />
                  My Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  <SparklesIcon className="h-7 w-7 text-neutral" />
                  Add Review
                </NavLink>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/users">
                  <LibraryIcon className="h-7 w-7 text-neutral" />
                  Make Admin
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addproduct">
                  <CubeIcon className="h-7 w-7 text-neutral" />
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageorders">
                  <CubeTransparentIcon className="h-7 w-7 text-neutral" />
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageoproducts">
                  <CogIcon className="h-7 w-7 text-neutral" />
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
