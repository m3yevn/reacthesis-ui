import React from "react";
import "./Button.scss";

/**
 * @name IButton
 * @property {theme?}
 * @property {shape?}
 * @description Props interface for Button JSX element
 */
interface IButton
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "dark" | "light";
  shape?: "sharp" | "rounded";
  type?: "submit" | "button";
}

/**
 * @name  Button
 * @description Button JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/button
 */
export default function Button({
  children,
  color,
  shape,
  theme,
  type,
  ...props
}: IButton) {
  return (
    <button
      type={type}
      className={`rts-ui__button rts-ui__button--${color}${
        theme ? `--${theme}` : ""
      } ${shape ? `rts-ui__button--${shape}` : ""}
`}
      {...props}
    >
      {children}
    </button>
  );
}
