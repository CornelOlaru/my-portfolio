
import { useEffect, useRef } from "react";
import "./projectsPage.css";

// eslint-disable-next-line react/prop-types
const ProjectsPage = ({ image, cardTitle, cardLink, cardText, flippedCardId, onCardFlip, cardId }) => {
 const cardRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (flippedCardId) {
          onCardFlip(cardId)
        } // Close the card if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCardFlip, flippedCardId, cardId]);
  return (
    <div  className="flip-card" ref={cardRef}>
      <div className={`flip-card-inner ${flippedCardId ? "flip" : ""}`}>
        <div className="flip-card-front">
          <img className="card-img rounded" src={image} alt="Card front" />
          <h3>{cardTitle}</h3>
          <div className="card-buttons">
            <a href={cardLink} target="_blank" rel="noopener noreferrer">
              <button className="btn">View</button>
            </a>
            <button className="btn" onClick={onCardFlip}>
              About
            </button>
          </div>
        </div>
        <div   className="flip-card-back">
          <h3>{cardTitle}</h3>
          <p>{cardText}</p>
          {/* <div className="card-buttons">
            
            <button className="btn" onClick={() => onCardFlip(cardId)}>
              Back
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
