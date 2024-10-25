import style from "./ViewNowBtn.module.css";
import { useNavigate } from "react-router-dom";

const ViewNowBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/campers");
  };

  return (
    <button onClick={handleClick} className={style.ViewNowBtn}>
      View Now
    </button>
  );
};

export default ViewNowBtn;
