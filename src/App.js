import "./App.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Blog from "./components/Pages/Blog/Blog";
import NotFound from "./components/Pages/NotFound/NotFound";
import Purchase from "./components/Pages/Purchase/Purchase";
import Signup from "./components/Pages/Signup/Signup";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyOrders from "./components/Pages/Dashboard/MyOrders";
import AddReview from "./components/Pages/Dashboard/AddReview";
import MyProfile from "./components/Pages/Dashboard/MyProfile";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        {/* dashboard routes start */}

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>

        {/* dashboard routes end here  */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
