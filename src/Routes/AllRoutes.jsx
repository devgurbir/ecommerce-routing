import {Route, Switch} from "react-router-dom"
import ProductListing from "../Pages/ProductListing"
import Categories from "../Pages/Categories"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"

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

            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default AllRoutes