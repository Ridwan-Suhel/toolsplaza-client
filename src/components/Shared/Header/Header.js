import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();
  const logout = () => {
    signOut(auth);
  };
  console.log("I am from header", user);
  // displayName

  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}

      {user ? (
        <li>
          <NavLink onClick={logout} to="/login">
            Logout
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}

      {user && (
        <button class="btn btn-sm btn-primary btn-outline ml-2">
          {user?.displayName}
        </button>
      )}
    </>
  );
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <header className="border-b">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start lg:w-1/4">
            {/* drawer btn  */}
            {pathname.includes("dashboard") && (
              <label for="my-drawer-2" class="pl-3 drawer-button lg:hidden">
                <svg
                  class="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>
            )}
            {/* drawer btn end here  */}

            <Link to="/home" className="btn btn-ghost normal-case text-xl">
              ToolsPlaza
            </Link>
          </div>
          <div className="navbar-end hidden lg:w-3/4 lg:flex">
            <ul className="menu menu-horizontal items-center p-0">
              {menuItems}
            </ul>
          </div>
          {/* ================================= */}
          <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
