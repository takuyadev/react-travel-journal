import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "./style.css";
import { data } from "./data.js";

export default function App() {
  const cards = data.map((journal, i) => {
    return (
      <div>
        <Card item={journal} />
        {i !== data.length - 1 && <hr />}
      </div>
    );
  });
  return (
    <div>
      <Header />
      <main className="journal-list">{cards}</main>
    </div>
  );
}
