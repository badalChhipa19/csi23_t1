import "./../base.css";
import "./section.css";

import user from "./../img/users.png";
import dot from "./../img/dot5.png";

const section = function () {
  return (
    <section className="section section6">
      <div className="user__logo_box">
        <img src={dot} alt="dot" className="logo__dot" />
        <img src={user} alt="users" className="users" />
      </div>
      <h2>Section heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor{" "}
      </p>
      <br />
      <br />
      <button className="btn">Sign up</button>
    </section>
  );
};

export default section;
