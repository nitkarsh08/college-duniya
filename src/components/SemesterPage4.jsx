import React from "react";
import "./SemesterPage4.css";  // same CSS file use kar sakte ho jo maine pehle diya tha

function SemesterPage4() {
  return (
    <div className="semester-page">
      <h1>📖 4th Semester</h1>
      <p>Welcome to the 4th Semester resources page</p>

      <div className="sections">
        {/* Syllabus Section */}
        <div className="section-card">
          <h2>📘 Syllabus</h2>
          <p>Download the complete syllabus of 1st semester.</p>
          <a
            href="/public/cse syllabus-40-55.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Syllabus
          </a>
        </div>

        {/* Previous Question Papers Section */}
        <div className="section-card">
          <h2>📝 Previous Question Papers</h2>
          <p>Access past university papers for exam preparation.</p>
          <a
            href="/files/sem1-previous.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Papers
          </a>
        </div>

        {/* Sessional Exam Papers Section */}
        <div className="section-card">
          <h2>📄 Sessional Exam Papers</h2>
          <p>Check sessional exam papers for practice.</p>
          <a
            href="/files/sem1-sessional.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Sessional
          </a>
        </div>
      </div>
    </div>
  );
}

export default SemesterPage4;
