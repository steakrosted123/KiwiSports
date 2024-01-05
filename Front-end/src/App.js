import "./App.css";
import ListingContainer from "./components/properties/ListingContainer";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewListingForm from "./components/NewListing/NewListingForm";
import ListingDetails from "./components/properties/ListingDetails";
import Update from "./components/properties/Update";
import NewListing from "./components/NewListing/NewListing";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import BlogEditor from "./components/editor/BlogEditor";
import SM from "./components/editor/Success";
import Profile from  "./components/profile/Profile";
import Work from "./components/editor/WorkDetails";
import Payment from "./components/editor/Payment";
import { db } from "./firebase";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
function App() {

  const [userName, setUserName] = useState("");
  const [useremail, setUseremail] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUseremail(user.email);
      } else 
      {setUserName("");
        setUseremail("");
    }
    });
  }, []);
  return (
   
    <div className="">
      <Router>
        <Navigation name={userName}/>
        <Routes>
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="/listings" element={<ListingContainer  name={useremail}/>} />
          <Route path="/update" element={<Update />} />
          <Route path="/details" element={<ListingDetails />} />
          <Route path="/new" element={<NewListing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-blog" element={<BlogEditor name={useremail}/>} />
          <Route path="/sm" element={<SM name={useremail}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Work" element={<Work name={useremail}/>} />
          <Route path="/payment" element={<Payment  name={useremail}/>} />
          <Route path="/feedback" element={<Search name={useremail}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
