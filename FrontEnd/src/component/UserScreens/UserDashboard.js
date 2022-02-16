import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./UserDashboard.css";
import { Link} from "react-router-dom";


function UserDashboard() {
  return (
      <div className="MainBar">
        <div className="Side_bar">
          <div className="Dashboard_text col-text">
            <h2>Dashboard</h2>
          </div>
          <div className="TimeSheet_Manage_bar col-dash-1">
            <CalendarTodayIcon fontSize="large" />
            <Link  className="Attribute_link" to="/timesheet">TimeSheet</Link>
          </div>
          {/* <div className="Report_Manage_bar col-dash-1">
            <AnalyticsIcon fontSize="large" />
            <Link  className="Attribute_link" to="/report">Report</Link>
          </div> */}
          
        </div>
      </div>
  );
}

export default UserDashboard;
