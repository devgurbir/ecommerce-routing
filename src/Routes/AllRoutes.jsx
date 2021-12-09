import {Route, Switch} from "react-router-dom"
import ProductListing from "../Pages/ProductListing"
import Categories from "../Pages/Categories"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"
import PrivateRoutes from './PrivateRoutes'
import Dashboard from "../Pages/Dashboard"
import Settings from "../Pages/Settings"

function AllRoutes(){
    return(
        <Switch>
            <Route exact path="/">
                <div>Homepage</div>
            </Route>

            <Route exact path="/categories">
                The categories page
            </Route>

            <Route exact path="/categories/:id">
                <Categories />
            </Route>

            <Route exact path="/product/:id">
                <ProductListing />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <PrivateRoutes exact path="/dashboard">
                <Dashboard />
            </PrivateRoutes>

            <PrivateRoutes exact path="/dashboard/settings">
                <Settings />
            </PrivateRoutes>


            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default AllRoutes