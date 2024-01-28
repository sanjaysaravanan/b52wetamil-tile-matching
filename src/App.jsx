import { useState } from "react";
import "./App.css";

const data = [
  {
    id: "1",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "2",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "3",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "4",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "5",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "6",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "7",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "8",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "9",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
];

function App() {
  const [imageStates, setImageStates] = useState(data);

  const [selectedImages, setSelectedImages] = useState({
    imageOne: null,
    imageTwo: null,
  });

  const setStatus = (index, status) => {
    const temp = [...imageStates];

    temp[index].isOpen = true;

    setImageStates(temp);
  };

  const clickCard = (card) => {
    const index = imageStates.findIndex((tile) => tile.id === card.id);
    const { imageOne, imageTwo } = selectedImages;
    if (selectedImages.imageOne) {
      setSelectedImages({
        ...selectedImages,
        imageTwo: card,
      });
      setStatus(index, true);

      setInterval(() => {
        if (imageOne.image !== imageTwo.image) {
          setStatus(index, false);
          const indexOne = imageStates.findIndex(
            (tile) => tile.id === imageOne.id
          );
          setStatus(indexOne, false);
        }
        setSelectedImages({
          imageOne: null,
          imageTwo: null,
        });
      }, 2000);
    } else {
      setSelectedImages({
        ...selectedImages,
        imageOne: card,
      });
      setStatus(index, true);
    }
  };

  return (
    <>
      {imageStates.map((card) => {
        return (
          <div
            tabIndex={0}
            className="flip-card"
            onClick={() => clickCard(card)}
            key={card.id}
            style={{
              transform: card.isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div
              className="flip-card-inner"
              style={{
                transform: card.isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div className="flip-card-front"></div>
              <div className="flip-card-back">
                <img
                  src={card.image}
                  alt="Avatar"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
