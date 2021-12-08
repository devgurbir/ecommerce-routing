import {Route, Switch} from "react-router-dom"
import Categories from "../Pages/Categories"

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
        </Switch>
    )
}

export default AllRoutes