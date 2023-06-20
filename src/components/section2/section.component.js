import "./../base.css";
import "./section.css";

import dot1 from "./../img/dot1.png";
import document from "./../img/document.png";
import dot2 from "./../img/dot2.png";
import star from "./../img/star.png";
import dot3 from "./../img/dot3.png";
import crown from "./../img/crown.png";
import dot4 from "./../img/dot4.png";
import graph from "./../img/graph.png";
import dot5 from "./../img/dot5.png";
import chart from "./../img/chart.png";
import dot6 from "./../img/dot6.png";
import figma from "./../img/figma.png";

const section = function () {
  return (
    <section className="section">
      <div className="card__heading">
        <h2 className="heading__secondary">Heading for section 2</h2>
        <p className="card__heading_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card__images">
            <img src={dot1} className="card__dot" alt="Color Dot" />
            <img src={document} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="card">
          <div className="card__images">
            <img src={dot2} className="card__dot" alt="Color Dot" />
            <img src={star} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="card">
          <div className="card__images">
            <img src={dot3} className="card__dot" alt="Color Dot" />
            <img src={crown} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="card">
          <div className="card__images">
            <img src={dot4} className="card__dot" alt="Color Dot" />
            <img src={graph} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="card">
          <div className="card__images">
            <img src={dot5} className="card__dot" alt="Color Dot" />
            <img src={chart} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div className="card">
          <div className="card__images">
            <img src={dot6} className="card__dot" alt="Color Dot" />
            <img src={figma} className="card__img" alt="Document" />
          </div>
          <h3 className="heading__tertairy">Text about it</h3>
          <p className="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </section>
  );
};
export default section;
