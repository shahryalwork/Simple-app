import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Routes, Route } from "react-router-dom";
import Auth from "./Container/Auth";
import Dashboard from "./Container/Dashboard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/authAction";
import PrivateRoute from "./component/privateRoute";
function App() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // when component rendor
  useEffect(() => {
    const profileName = localStorage.getItem("profileName");
    if (profileName) {
      dispatch(setUser({profileName}))
    }
  }, []);

  useEffect(() => {
    isLoggedIn
      ? navigate("/dashboard", { replace: true })
      : navigate("/", { replace: true });
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route exact path="/" element={<Auth />} />
      <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
    </Routes>
  );
}

export default App;
