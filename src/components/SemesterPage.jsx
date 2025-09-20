import React from "react";
import { useParams, Link } from "react-router-dom";
import "./SemesterPage.css";
import SemesterPage1 from "./SemesterPage1";
import SemesterPage2 from "./SemesterPage2";
import SemesterPage3 from "./SemesterPage3";
import SemesterPage4 from "./SemesterPage4";
import SemesterPage5 from "./SemesterPage5";
import SemesterPage6 from "./SemesterPage6";
import SemesterPage7 from "./SemesterPage7";
import SemesterPage8 from "./SemesterPage8";

function SemesterPage() {
  const { id } = useParams(); // "1", "2", etc.

  // Select correct component based on id
  const renderSemesterPage = () => {
    switch (id) {
      case "1":
        return <SemesterPage1 />;
      case "2":
        return <SemesterPage2 />;
      case "3":
        return <SemesterPage3 />;
      case "4":
        return <SemesterPage4 />;
      case "5":
        return <SemesterPage5 />;
      case "6":
        return <SemesterPage6 />;
      case "7":
        return <SemesterPage7 />;
      case "8":
        return <SemesterPage8 />;
    }
  };

  return (
    <div className="semester-page">
      <h1>📖 {id} Semester</h1>
      <p>Welcome to the {id} Semester page. Here you can add syllabus, notes, or results.</p>

      {/* Back button */}
      <Link to="/dashboard" className="back-btn">
        ⬅ Back to Dashboard
      </Link>

      {/* Show selected semester page */}
      {renderSemesterPage()}
    </div>
  );
}

export default SemesterPage;
