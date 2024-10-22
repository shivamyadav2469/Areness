import PropTypes from "prop-types";

const AreaCard = ({ icon, cardInfo }) => {
  const isPositive = cardInfo.number.includes("+");

  return (
    <div className="area-card">
      <div className="area-card-info">
        <div>
          <h5 className="info-title">{cardInfo.title}</h5>
          <div className="info-value">{cardInfo.value}</div>
        </div>
        <div className="area-card-icon">{icon}</div>
      </div>
      <p className="info-text">
        <span className={isPositive ? "text-positive" : "text-negative"}>
          {cardInfo.number}
        </span>
        <p>{cardInfo.text}</p>
        
      </p>
      <p className="extra-info">
        <span className={isPositive ? "text-positive" : "text-negative"}>
          {cardInfo.extraNumber} 
        </span>
      </p>
    </div>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  icon: PropTypes.element.isRequired,
  cardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    extraNumber: PropTypes.string, // The new extra number prop
  }).isRequired,
};
