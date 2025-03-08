import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Register from "./pages/register/Register";
import FindHouse from "./pages/find-house/FindHouses";
import FindRoomate from "./pages/find-roommate/FindRoomates";
import ListingCard from "./pages/Listings/ListingCards";
import MapboxMap from "./Components/maps";
import Error404 from "./pages/error-page/Error404";
import GoogleMapComponent from "./Components/maps";
import AddListing from "./pages/add-listing/AddListing";
import Profile from "./pages/profile/Profile";
import Error401 from "./pages/error-page/Error401";
import AuthGuard from "./modules/components/auth-gaurd/AuthGuard";
import { ILoginPageState } from "./types/login";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store";
import MyPreferences from "./pages/my-preferences/MyPreferences";
import { listings } from "./models/Listing";
import ListingDetail from "./pages/Listings/ListingDetail";
import ListingPage from "./pages/Listings/ListingPage";
import RoomateDetails from "./pages/roommate-details/RoomateDetails";
import ForgetPassword from "./pages/forget-password/ForgetPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Loader from "./modules/components/loader/Loader";
import ContactUs from "./modules/components/footer/ContactUs";
import SuccessPage from "./modules/components/footer/SuccessPage";

const App: React.FC = () => {
  const authGuard = new AuthGuard(<Error401 />);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const loginState: ILoginPageState = useAppSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      setIsAuth(true);
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      console.log(loginState.error);
      setIsAuth(false);
    }
  }, [loginState]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/success" element={<SuccessPage />} />
          
          {/* Protected Routes */}
          <Route
            path="/find-houses"
            element={authGuard.protect(<ListingPage />, isAuth)}
          />
          <Route
            path="/find-roommates"
            element={authGuard.protect(<FindRoomate />, isAuth)}
          />
          <Route
            path="/find-roommates/:id"
            element={authGuard.protect(<RoomateDetails />, isAuth)}
          />
          <Route
            path="/my-preferences"
            element={authGuard.protect(<MyPreferences />, isAuth)}
          />
          <Route
            path="/add-listing"
            element={authGuard.protect(<AddListing />, isAuth)}
          />
          <Route
            path="/profile"
            element={authGuard.protect(<Profile />, isAuth)}
          />

          {/* Listings and Map Routes */}
          <Route path="/listings" element={<ListingCard listings={listings} />} />
          <Route
            path="/listing-detail/:listingAddress"
            element={<ListingDetail listings={listings} />}
          />
          <Route
            path="/maps"
            element={<GoogleMapComponent listings={listings} />}
          />
          <Route path="/listing-page" element={<ListingPage />} />

          {/* Logout Route */}
          <Route path="/logout" element={<Logout />} />

          {/* Fallback Routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
