import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const semesters = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester",
    "Academic Calendar", // string rakha
  ];

  return (
    <div className="dashboard">
      <h1 className="title">📚 Student Dashboard</h1>
      <h1 className="Department">📚 Department Of Computer Science</h1>
      <p className="subtitle">Select a semester to view details</p>
      <p className="principle"><b>Principle:</b> Gaurav Tejpal</p>
      <p className="hod"><b>Hod:</b>Sandeep Kad</p>
      

      <div className="grid">
        {semesters.map((sem, index) => (
          <div key={index} className="card">
            <h2>{sem}</h2>

            {/* Agar Academic Calendar hai to PDF link show kare */}
            {sem === "Academic Calendar" ? (
              <a
                href="/acedemic calender.pdf" // 📂 public folder me rakho
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Open PDF
              </a>
            ) : (
              <Link to={`/semester/${index + 1}`} className="btn">
                Open
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
