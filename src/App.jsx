import { useEffect, useState } from "react";
import "./App.css";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const data = [
  {
    id: "1",
    image:
      "https://as2.ftcdn.net/v2/jpg/00/68/65/13/1000_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg",
    isOpen: false,
  },
  {
    id: "2",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/69/54/22/1000_F_69542226_PC8tx6GxK8m2wM9rEm56s7lgaFmtEIiU.jpg",
    isOpen: false,
  },
  {
    id: "3",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/69/54/22/1000_F_69542226_PC8tx6GxK8m2wM9rEm56s7lgaFmtEIiU.jpg",
    isOpen: false,
  },
  {
    id: "4",
    image:
      "https://t4.ftcdn.net/jpg/00/49/23/25/240_F_49232510_IarInMXjn3jJjog5jfOaJEmjBIX98y6G.jpg",
    isOpen: false,
  },
  {
    id: "5",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "6",
    image:
      "https://t4.ftcdn.net/jpg/00/49/23/25/240_F_49232510_IarInMXjn3jJjog5jfOaJEmjBIX98y6G.jpg",
    isOpen: false,
  },
  {
    id: "7",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    isOpen: false,
  },
  {
    id: "8",
    image:
      "https://as2.ftcdn.net/v2/jpg/00/68/65/13/1000_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg",
    isOpen: false,
  },
];

function App() {
  const [imageStates, setImageStates] = useState([]);

  const [selectedImages, setSelectedImages] = useState({
    imageOne: null,
    imageTwo: null,
  });

  const setStatus = (index, status) => {
    const temp = [...imageStates];

    temp[index].isOpen = status;

    setImageStates(temp);
  };

  const clickCard = (card) => {
    const index = imageStates.findIndex((tile) => tile.id === card.id);
    const { imageOne } = selectedImages;
    if (selectedImages.imageOne) {
      setSelectedImages({
        ...selectedImages,
        imageTwo: card,
      });
      setStatus(index, true);

      setTimeout(() => {
        if (imageOne.image !== card.image) {
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
      }, 1000);
    } else {
      setSelectedImages({
        ...selectedImages,
        imageOne: card,
      });
      setStatus(index, true);
    }
  };

  useEffect(() => {
    setImageStates(shuffle(data));
  }, []);

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
