import React from "react";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function index() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c5a7300851662ffe78a4220c191ee5e7~c5_300x300.webp?x-expires=1656381600&x-signature=ZQCxuVS%2BteePgDJdGHBlWKG6hKg%3D"
        alt="User name"
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Bruce lee</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </h4>
        <span className={cx("username")}>brucelee</span>
      </div>
    </div>
  );
}
