
import "./ResumeCardDownloadStyle.css";
import img1 from "../assets/CVResume.png";

const ResumeCardDownload = () => {
  return (
    <div className="resume">
      <div className="resume-card-container">
        <div className="resume-card">
          <img src={img1} alt="resume" />
          <h3 className="card-title">- Resume/CV -</h3>
          <div className="resume-details">
            <p>This is my CV</p>
            <div className="res-buttons">
              <a
                href="https://github.com/CornelOlaru"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <button className="btn">GitHub</button>
              </a>
              <a href="https://drive.google.com/file/d/1Lf7KbZa89q2WsecGfAxZ3m_nAcoXZbXi/view?usp=sharing" target="_blank">
                <button className="btn">View</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCardDownload;
