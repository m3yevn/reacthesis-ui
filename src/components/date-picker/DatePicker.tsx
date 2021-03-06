import React from "react";
import "./DatePicker.scss";

interface IDatePicker
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  native?: boolean;
  value?: any;
  minDate?: string;
  maxDate?: string;
}

/**
 * @param {*} years
 */
const getMinDate = (years: number) => {
  const today = new Date();
  return `${today.getFullYear() - years}-${
    today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
  }-${today.getDate()}`;
};

/**
 * @param {*} years
 */
const getMaxDate = (years: number) => {
  const today = new Date();
  return `${today.getFullYear() + years}-${
    today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
  }-${today.getDate()}`;
};

/**
 * @name  DatePicker
 * @description DatePicker JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/date-picker
 */
export default function DatePicker({
  native,
  placeholder,
  value,
  minDate = getMinDate(100),
  maxDate = getMaxDate(100),
  ...props
}: IDatePicker) {
  return (
    <div className="rts-ui__datepicker" {...props}>
      {!native && <div></div>}
      {!!native && (
        <input
          type="date"
          placeholder={placeholder}
          value={value}
          min={minDate}
          max={maxDate}
        />
      )}
    </div>
  );
}
