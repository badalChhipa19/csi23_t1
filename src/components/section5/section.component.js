import "./../base.css";
import "./section.css";

import logo1 from "./../img/logo1.png";
import logo2 from "./../img/logo2.png";
import logo3 from "./../img/logo3.png";
import logo4 from "./../img/logo4.png";
import logo5 from "./../img/logo5.png";
import logo6 from "./../img/logo6.png";
import logo7 from "./../img/logo7.png";
import logo8 from "./../img/logo8.png";
import logo9 from "./../img/logo9.png";

const section = function () {
  return (
    <section className="section section5 ">
      <div className="colobration__heding">
        <h2>Heading for this section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="logos">
        <div className="logo__img_box logo__img_box--1 ">
          <img src={logo1} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--2 ">
          <img src={logo2} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--3 ">
          <img src={logo3} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--4 ">
          <img src={logo4} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--5 ">
          <img src={logo5} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--6 ">
          <img src={logo6} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--7 ">
          <img src={logo7} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--8 ">
          <img src={logo8} alt="logo" className="logo__img" />
        </div>
        <div className="logo__img_box logo__img_box--9 ">
          <img src={logo9} alt="logo" className="logo__img" />
        </div>
      </div>
    </section>
  );
};

export default section;
