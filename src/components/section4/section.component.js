import "./../base.css";
import "./section.css";

import img1 from "./../img/about1.jpg";
import img2 from "./../img/about2.jpg";

const section = function () {
  return (
    <section className="section section4">
      <div className="story__1">
        <div className="story__1_content">
          <h1 className="heading__primary">About this section</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="btn">Continue</button>
        </div>
        <div className="story__1_image">
          <img src={img1} alt="Story" className="story__image" />
        </div>
      </div>
      <div className="story__2">
        <div className="story__2_image">
          <img src={img2} alt="Story" className="story__image" />
        </div>
        <div className="story__2_content">
          <h1 className="heading__primary">About this section</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="btn">Continue</button>
        </div>
      </div>
    </section>
  );
};
export default section;
