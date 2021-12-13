import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import { AuthContext } from './Context/AuthContextProvider';
import {useContext} from 'react'

function App() {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  console.log(isAuth)
  return (
    
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
