import "./Button.css";

interface ButtonProps {
  symbol: "+" | "-";
  actionOnClick: () => void;
}

const Button = ({ symbol, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {symbol}
    </button>
  );
};

export default Button;
