import { Route, Routes,Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formInputs";
import "./style/dark.scss";
import { useContext } from "react";
import { ModeContext } from "./modeContext";
import { AuthContext } from "./AuthContext";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  const {mode}=useContext(ModeContext)
  const {currentUser}=useContext(AuthContext)
 
  
  const RequiereAuth=({children})=>{
    return currentUser ? (children) : <Navigate  to={'/login'}/>
  }
 
  return (
    <div className={mode==='light' ? 'app' : 'app dark'}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequiereAuth><Home /></RequiereAuth>} />
        <Route path="/users" element={<RequiereAuth><List type={'users'}/></RequiereAuth>} />
        <Route path="/users/:userId" element={<RequiereAuth><Single /></RequiereAuth>} />
        <Route
        type={'products'}
          path="/users/new"
          element={<New inputs={userInputs} title={"Add a new user"} />}
        />
        <Route path="/products" element={<RequiereAuth><List type={'products'}/></RequiereAuth>} />
        <Route path="/products/:productId" element={<RequiereAuth><Single products={true}/></RequiereAuth>} />
        <Route
          path="/products/new"
          element={<New  type={'products'} inputs={productInputs} title={"add a new product"} />}
        />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
};

export default App;
