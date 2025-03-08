import React from "react";
 
import Listing from "../models/Listing";
 
 
import Navbar from "../modules/components/navigation-bar/NavigationBar";
 
import "../styles/dashboard.css";
 
type Props = {
  listings : Listing[]
}
const Dashboard: React.FC<Props> = (props:Props) => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
};
 
export default Dashboard;