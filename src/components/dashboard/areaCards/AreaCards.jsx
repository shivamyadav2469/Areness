import AreaCard from "./AreaCard";
import { FaEnvelope, FaSms, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        icon={<FaEnvelope size={20} color="var(--red-color)" />}
        cardInfo={{
          title: "Email Delivered",
          value: "53897",
          number: "+3.48%",
          text: "Since last month.",
        }}
      />
      <AreaCard
        icon={<FaSms size={20} color="#475be8" />}
        cardInfo={{
          title: "SMS Delivered",
          value: "3,20000",
          number: "+5.20%",
          text: "Since last month",
        }}
      />
      <AreaCard
        icon={<FaWhatsapp size={20} color="#4ce13f" />}
        cardInfo={{
          title: "Whatsapp Delivered",
          value: "+2503",
          number: "-2.82%",
          text: " Since last month",
        }}
      />
      <AreaCard
        icon={<FaMailBulk size={20} color="#f29a2e" />}
        cardInfo={{
          title: "India post Delivered",
          value: "3000",
          number: "+8.12%",
          text: "Since last month",
        }}
      />
    </section>
  );
};

export default AreaCards;
