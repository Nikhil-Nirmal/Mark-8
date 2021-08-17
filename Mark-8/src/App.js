import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😆": "Grinning Squinting Face",
  "😁": "Beaming Face with Smiling Eyes",
  "❤️": "love",
  "😑": "annoyance",
  "😉": "Winking Facee",
  "😇": "Angle",
  "🥰": "In-love",
  "🤑": "Rich",
  "🤗": "hug",
  "😐": "Neutral-Expression"
};

const emojiDictionary2 = {
  smiling: "😊",
  disbelief: "😳",
  sad: "😔",
  "grinning squinting face": "😆",
  lol: "😁",
  love: "❤️",
  annoyance: "😑",
  "winking facee": "😉",
  angel: "😇",
  "in love": "🥰",
  rich: "🤑",
  hug: "🤗",
  neutral: "😐"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Emoji Name will be shown here");

  function changeHandler(event) {
    const inputEmoji = event.target.value.toLowerCase();
    setEmoji(inputEmoji);
    console.log(inputEmoji.toLowerCase());
    if (inputEmoji in emojiDictionary2) {
      setMeaning(emojiDictionary2[inputEmoji]);
      console.log(emojiDictionary2[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter App</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
