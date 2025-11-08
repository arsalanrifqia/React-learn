import { useState } from "react";
import Header from "./Component/Header.jsx";
import AngkaPrint from "./Component/AngkaPrint.jsx";

function App() {
  const students = ["Arsalan", "Rifqi", "Marco"];
  const [likes, setLikes] = useState(0);

  const buttons = ["-", "Reset", "+"];
  const [angka, setAngka] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function handleCounter(button) {
    switch (button) {
      case "+":
        setAngka((angka) => (angka < 10 ? angka + 1 : (angka = 12))); // maks 10
        break;
      case "-":
        setAngka((angka) => (angka > 0 ? angka - 1 : (angka = 12))); // min 0
        break;
      default:
        setAngka(0);
    }
  }

  return (
    <>
      <Header />
      <Header name="Rifqi" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
      <h2>Latihan</h2>
      <AngkaPrint nomer={angka} />
      {buttons.map((button) => (
        <button key={button} onClick={() => handleCounter(button)}>
          {button}
        </button>
      ))}
    </>
  );
}

export default App;
