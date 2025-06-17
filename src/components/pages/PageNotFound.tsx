import { Link } from "react-router-dom";

import "../../sass/pages/page_not_found.scss";
import backArrow from "../../assets/error/Icon.svg";

const PageNotFound = function () {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 – Page Not Found</h1>
      <p className="not-found__message">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" replace>
        <button className="not-found__button">
          <img src={backArrow} alt="back" />
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
