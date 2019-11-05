import React from "react";
import "./App.scss";
import Input from "./components/Input";
import Label from "./components/Label";
import Button from "./components/Button";
import Select from "./components/Select";
import { MONTHS, YEARS } from "./constants";

function CardForm() {
  return (
    <main className="card__form">
      <div className="wrapper">
        <div className="card__item">
          <Label title={"Card Number"} />
          <Input placeholder={"4885 0025 3562 9985"} />
        </div>
        <div className="card__item">
          <Label title={"Card Holders"} />
          <Input placeholder={"Maksim Razhnov"} />
        </div>
        <div className="card__item label__wrapper">
          <Label title={"Expiration Date"} />
          <Label title={"CVV"} />
        </div>
        <div className="card__item card__inner">
          <div className="card__inner__container">
            <Select data={MONTHS} />
            <i className="fas fa-chevron-down arrow"></i>
          </div>
          <div className="card__inner__container">
            <Select data={YEARS} />
            <i className="fas fa-chevron-down arrow"></i>
          </div>
          <div className="card__inner__container">
            <Input placeholder={"4885"} />
          </div>
        </div>
        <Button title={"Submit"} />
      </div>
    </main>
  );
}

export default CardForm;
