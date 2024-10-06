import "./App.css";
import { asideNavigation } from "./assets/constansts";
import Accordeon from "./components/Accordeon/Accordeon";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <main>
        <aside>
          Aside
          <nav>
            {asideNavigation.map(function (menuItem, indx) {
              return (
                <a key={indx + menuItem.text} href={menuItem.href}>
                  {menuItem.text}
                </a>
              );
            })}
          </nav>
        </aside>
        <ButtonContainer isLogin={false} />
        <Accordeon />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
