import React, { useState } from 'react';
import './App.css';

function App() {
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(() => {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
      heartArr[0].remove();
    }
  }, 100);

  const showPopupMessage = (message) => {
    setPopupText(message);
    setShowPopup(true);
  };

  const handleClickOutside = () => {
    setShowPopup(false);
  };

  const clickedYes = () => {
    showPopupMessage("Its either you couldn't catch the no button or you really wanted to be my valentine's date.");
  };

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  return (
    <>
      <p className="pre-valentine">Bjanka, will you be my</p>
      <p className="valentine">Valentine</p>
      <button 
        style={yesStyle}
        onClick={clickedYes}
      >
        YES!
      </button> 
      <button
        onMouseOver={mouseOver}
        style={noStyle}
        onClick={() => showPopupMessage("AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!")}
      >
        no
      </button>

      {showPopup && (
        <div className="popup" onClick={handleClickOutside}>
          <div className="popup-content">{popupText}</div>
          <img style={{
            transform: 'rotate(-90%)',
          }} src='./image.jpg' />
        </div>
      )}
    </>
  );
}

export default App;