import imageNotFound from "../../assets/3814348.jpg";
import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <img className={css.imageNotFound} src={imageNotFound} alt="Not found" />
      <Link to={`/`}>
        <button className={css.homeBtn}>Home Page</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
