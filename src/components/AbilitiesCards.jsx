import { Carousel } from "nuka-carousel";
import { useNavigate } from "react-router-dom";

const cards = [
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' },
  { src: '/src/assets/cards.png' }
];

const AbilitiesCards = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/app/student/abilities");
  };

  return (
    <div className="">
      <Carousel showArrows scrollDistance="slide">
        {cards.map((card, index) => (
          <img
            key={index}
            className="w-[399px] cursor-pointer"
            src={card.src}
            alt={`Card ${index + 1}`}
            onClick={handleCardClick}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default AbilitiesCards;
