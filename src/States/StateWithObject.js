import { useState } from "react";

const StateWithObject = () => {
  const [contact, setContact] = useState({
    firstName: "Jhon",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "jhondoe@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? "Yes" : "No";
  console.log(starIcon);

  const toggleSwitch = () => {
    setContact((prev) => ({
      ...prev,
      isFavorite: !prev.isFavorite,
    }));
  };

  return (
    <main>
      <article className="card">
        <div className="info">
          <button
            onClick={toggleSwitch}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>

          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default StateWithObject;
