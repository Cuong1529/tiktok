import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => setSearchResult([]), 300);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-title")}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx("search")}>
              <input placeholder="Search accounts and videos" />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        </div>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
