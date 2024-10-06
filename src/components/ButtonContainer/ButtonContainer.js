import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonLogout from "../ButtonLogout/ButtonLogout";

const ButtonContainer = ({ isLogin }) => {
  return (
    <div>
      {!isLogin && <ButtonLogin />}
      {isLogin && <ButtonLogout />}
    </div>
  );
};

export default ButtonContainer;

// 1) if - має багато разгалуджень
// 2) умова ? якщо тру : якщо фолс
// 3) || - ?? - && nullish collision operator

/*
const a = b.name || b.surname; // з усіма хибними значеннями undefined, null, 0, '', false

const x = b.name ?? b.surname; // undefined aбо null */
