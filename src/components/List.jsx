import React from "react";
import menu from "../menu.json";


const foods = menu.food.map(({ name, description, price }) => (
  <li key={name}>
    <strong> {name} </strong>
    <small > {description}</small>
    <em> ${price} </em>
  </li>
));

const drinks = menu.drinks.map(({ name, description, price }) => (
  <li key={name}>
    <strong> {name} </strong>
    <small> {description} </small>
    <em> ${price} </em>
  </li>
));

export { foods, drinks };
