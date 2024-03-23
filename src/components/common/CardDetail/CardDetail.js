const CardDetail = ({ title,type, description, series, KeyFeatures,CustomizationOptions,Extras,Future }) => {

  return (
    <div className={`card-container ${type}-card`}>
      <div className="details">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <img src="" alt="image"/> */}
            {series.map((item, key) => {
              return (
                <div key={key}>
                  <h3>
                    <b>{item.name}</b>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
            {KeyFeatures.map((item, key) => {
              return (
                <div key={key}>
                  <h3>
                    <b>{item.name}</b>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
            <p>{CustomizationOptions}</p>
            {Extras.map((item, key) => {
              return (
                <div key={key}>
                  <h3>
                    <b>{item.name}</b>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
              {Future.map((item,key)=>{
                return(
                  <div key={key}>
                    <h3>
                      <b>{item.name}</b>
                    </h3>
                    <p>{item.desc}</p>
                </div>
                )
              })}
          </div>
      </div>
    </div>
  );
};

export default CardDetail;
