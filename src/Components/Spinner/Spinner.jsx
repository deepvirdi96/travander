import { GridLoader } from "halogenium";
import React from "react";
import { Component } from "react";
import Content from "../Content/Content";
import styles from "./Spinner.module.css";

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinner__component}>
        <GridLoader color="#0062cc" size="20px" margin="4px" />
      </div>
    );
  }
}

export default Spinner;
