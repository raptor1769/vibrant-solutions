import "./Card.css";

const Card = ({ title, type, desc, img, color }) => {
  const servicesStyle = {
    backgroundColor: `#${color}`,
    width: "61px",
  };
  const productStyle = {};
  return (
    <div className={`card-container ${type}-card`}>
      <div
        className={`card-data-container`}
        style={type === "services" ? { borderTop: `2px solid #${color}` } : {}}
      >
        <div className="card-main">
          <div
            className="card-image"
            style={type === "services" ? servicesStyle : productStyle}
          >
            <img
              src={img}
              alt="services"
              style={
                type === "services"
                  ? { width: "24px", height: "24px" }
                  : { width: "80px" }
              }
            />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Card;
