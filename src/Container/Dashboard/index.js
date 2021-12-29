import "./index.scss";
import { Button } from "antd";
import { logOut } from "../../redux/actions/authAction";
import { useDispatch ,useSelector} from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const profileName = useSelector((state) => state.authReducer.profileName);

  return (
    <div className="dashoard">
      <header>
        <Button onClick={() => dispatch(logOut())} className="logout-btn">
          Logout
        </Button>
      </header>
      <h2>Welcome to {profileName}</h2>
    </div>
  );
};
export default Dashboard;
