// import logo from './logo.svg';
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Feed from './components/Feed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
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
           
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
