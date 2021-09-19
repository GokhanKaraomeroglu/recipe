import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import About from "../pages/about/About";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <PrivateRouter isAuth={isAuth} exact path="/" component={Home} />
      <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
      <PrivateRouter isAuth={isAuth} path="/about" component={About} />
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route component={AuthContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;


// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
// import About from "../pages/about/About";
// import Home from "../pages/home/Home";
// import Details from "../pages/details/Details";
// import Login from "../pages/login/Login";
// function AppRouter() {
//   return (
//     <BrowserRouter>
//         <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" exact component={About} />
//         <Route path="/details" exact component={Details} />
//         <Route path="/login" exact component={Login} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default AppRouter;