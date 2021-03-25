import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonCustom.css";

const ButtonCustom = ({ style = 'rounded_button_gradient', text = 'text' }) => {
  return (
    <Button className={style} variant="primary" type="submit">
      {text}
    </Button>
  );
};

export default ButtonCustom;
