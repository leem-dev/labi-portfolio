import React, { useEffect, useState } from "react";

const DevText = () => {
  const [details, setDetails] = useState("");
  const mySentence = [
    "Hello,",
    "I'm",
    "Seleem",
    "a",
    "dedicated",
    "software",
    "developer",
    "specializing",
    "in",
    "front-end",
    "development.",
    "With",
    "a",
    "passion",
    "for",
    "crafting",
    "engaging",
    "and",
    "intuitive",
    "user",
    "experiences.",
  ];

  const typingSpeed = 50;
  const delayEachWord = 300;

  useEffect(() => {
    let index = 0;
    let timer;

    const typeWord = () => {
      if (index < mySentence.length) {
        const word = mySentence[index];
        setDetails((prevText) => prevText + word + " ");
        index++;
        timer = setTimeout(typeWord, word.length * typingSpeed);
      }
    };
    timer = setTimeout(typeWord, delayEachWord);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="typing-container">
      <p>{details}</p>
    </div>
  );
};

export default DevText;
