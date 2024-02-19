import NavBar from "./layout/nav_bar/nav_bar";
import HomePage from './pages/home_page';

import "./global.css";

//importing from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
 return(
  <div>
    <NavBar/>
    <HomePage/>
  </div>
  );
}

export default App;
