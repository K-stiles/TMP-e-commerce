import React from "react";
import { Link, NavLink, useNavigate, useRouteError } from "react-router-dom";

import "../../sass/pages/error.scss";
import backArrow from "../../assets/error/Icon.svg";

const Error: React.FC = function () {
  const error: any = useRouteError();
  const navigate = useNavigate();
  const date = new Date();

  const today = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <div className="not-found">
      <h1 className="not-found__title">400 – Oops an Error Occured</h1>
      <p className="not-found__message">
        {error.statusText ||
          error.message ||
          "An unexpected error has occurred."}
      </p>

      <Link to="/" replace>
        <button>
          <img src={backArrow} alt="back" />
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;
