import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from '../pages/home/Home'


function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Navbar />
								<Route path = '/' exact component ={Home} />
            </Switch>


        </BrowserRouter>
    )
}
export default AppRouter;