import "./../base.css";
import "./footer.css";

import CircumIcon from "@klarr-agency/circum-icons-react";

const footer = function () {
  return (
    <footer className="footer">
      <div className="footer__nav_box">
        <ul className="footer__list">
          <h4>Links heading</h4>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <h4>Links heading</h4>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <h4>Links heading</h4>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <h4>Links heading</h4>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
          <li>
            <a href="--" className="list__item">
              Link text
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright__box">
        <p>&copy; all rights are reserved</p>

        <div className="social">
          <CircumIcon className="social__icons" name="linkedin" />
          <CircumIcon className="social__icons" name="twitter" />
          <CircumIcon className="social__icons" name="instagram" />
          <CircumIcon className="social__icons" name="facebook" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
