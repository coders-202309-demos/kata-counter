import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const App = (): React.ReactElement => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    if (number >= 10) {
      return;
    }

    setNumber((number) => number + 1);
  };

  const decrease = () => {
    if (number <= 0) {
      return;
    }

    setNumber((number) => number - 1);
  };

  return (
    <div className="container">
      <Button symbol="-" actionOnClick={decrease} />
      <Input number={number} />
      <Button symbol="+" actionOnClick={increase} />
    </div>
  );
};

export default App;
