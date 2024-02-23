import HomePage from './pages/home_page';
import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,} from "react-router-dom";
import RootLayout from "./layout/root_layout";
import PageNotFound from './pages/page_not_found';

import "./global.css";

//importing from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} /> 
           {/* //index lekhyo vane parent ko path nai tes ko path huncha */}
        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="contact" element={<h1>contact page</h1>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Route>
    )
  );
 return( <RouterProvider router={router}/>);
}

export default App;
