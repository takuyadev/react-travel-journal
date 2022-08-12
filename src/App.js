import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import './style.css'
import journalData from "./data.js";

export default function App() {
  const cards = journalData.map((journal, i) => {
    return (
      <div>
        <Card item={journal} />
        {i !== journalData.length - 1 && <hr />}
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
