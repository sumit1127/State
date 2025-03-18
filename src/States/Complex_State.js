import { useState } from "react";
const Complex_State = () => {
  
  const [myFavouriteThings, setMyFavouriteThings] = useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];

  const thingsElement = myFavouriteThings.map((x, i) => <p key={i}>{x}</p>);

  function addFavouriteThings() {
    setMyFavouriteThings((prev) => [...prev, allFavoriteThings[prev.length]]);
  }

  return (
    <main>
      <button onClick={addFavouriteThings}>Add Item</button>
      <section>{thingsElement}</section>
    </main>
  );
};

export default Complex_State;
