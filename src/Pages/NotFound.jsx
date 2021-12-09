import {Link} from "react-router-dom"

function NotFound(){
    return (
        <div>
        <h3>This Page Does Not Exist</h3>
        <p>Go back to:</p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
        </ul>
        </div>
    )
}

export default NotFound