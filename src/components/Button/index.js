import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;

    //remove event if button disabled
    // Object.keys(props).forEach((key) => {
    //   if (key.startsWith("on") && typeof props[key] === "function") {
    //     delete props[key];
    //   }
    // });
  }

  if (to) {
    props.to = Link;
  } else if (href) {
    props.href = href;
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
