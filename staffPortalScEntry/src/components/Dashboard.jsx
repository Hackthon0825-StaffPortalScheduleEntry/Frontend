// src/components/Dashboard.jsx
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Localization setup
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

// Sample events
const events = [
  {
    title: "Team Meeting",
    start: new Date(2025, 7, 20, 10, 0),
    end: new Date(2025, 7, 20, 12, 0),
  },
  {
    title: "Workshop on React",
    start: new Date(2025, 7, 22, 14, 0),
    end: new Date(2025, 7, 22, 16, 0),
  },
];

function Dashboard() {
  const [showCourses, setShowCourses] = useState(false); // toggle submenu

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">My Dashboard</a>
        <div className="ms-auto">
          <button className="btn btn-outline-light btn-sm me-2">🔔</button>
          <button className="btn btn-outline-light btn-sm">Logout</button>
        </div>
      </nav>

      {/* Layout: Sidebar + Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{ width: "220px" }}>
          <h5 className="mb-4">📊 Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Home</a>
            </li>

            {/* Courses with Submenu */}
            <li className="nav-item mb-2">
              <button
                className="btn btn-link text-white nav-link w-100 text-start p-0"
                onClick={() => setShowCourses(!showCourses)}
              >
                Courses {showCourses ? "▲" : "▼"}
              </button>
              {showCourses && (
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item">
                    <a href="/course" className="nav-link text-white">CDAC Course</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-white">Other Courses</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Reports</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Settings</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          {/* Statistics Row */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card text-center shadow-sm p-3">
                <h6>Total Courses</h6>
                <h3>120</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-sm p-3">
                <h6>Active Projects</h6>
                <h3>18</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-sm p-3">
                <h6>Pending Tasks</h6>
                <h3>45</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-sm p-3">
                <h6>Revenue</h6>
                <h3>$12k</h3>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="card shadow p-3">
            <h5 className="mb-3">📅 Calendar</h5>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 400 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
