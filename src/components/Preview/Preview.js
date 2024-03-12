import "./Preview.css";
import Laptop from "../../assets/images/Laptop.svg"
import Cube1 from "../../assets/images/Cube4.png"
import Cube2 from "../../assets/images/Cube8.png"
import { forwardRef } from "react";

const Preview = forwardRef((props,ref) => {
  return (
    <div className="preview-container" ref={ref}>
      <div className="preview-text">
        <div className="title-1">The future belongs to you</div>
        <div className="title-2">
          Technology belongs to <span className="gradient-text">everyone</span>
        </div>
        <div className="title-3">
          Accelerate your business and jump into the new era with the help of a
          team of A-players.
        </div>
      </div>
      <div className="preview-mesh">
        {/* <img className="mesh-bg" src={BgImg} alt="bg-mesh" /> */}
        <img className="mesh-laptop preview-images" src={Laptop} alt="bg-mesh" />
        <img className="mesh-cube-1 preview-images" src={Cube1} alt="bg-mesh" />
        <img className="mesh-cube-2 preview-images" src={Cube1} alt="bg-mesh" />
        <img className="mesh-cube-3 preview-images" src={Cube2} alt="bg-mesh" />
      </div>
    </div>
  );
});

export default Preview;
