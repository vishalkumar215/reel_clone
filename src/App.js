// import logo from './logo.svg';
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Feed from './components/Feed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Profile from './components/Profile'

// import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
   
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        
          <Route
            path="/login"
            element={
              <>
                {" "}
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {" "}
                <Signup/>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Feed/> 
              </>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <>
                {" "}
                <Profile/> 
              </>
            }
          />
           
        </Routes>
      </AuthProvider>
     </BrowserRouter>
  );
}

export default App;
