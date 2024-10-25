import ViewNowBtn from "../../components/ViewNowBtn/ViewNowBtn";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.HomeContentWrapper}>
      <h1 className={style.HomeHeader}>Campers of your dreams</h1>
      <p className={style.HomeSlogan}>
        You can find everything you want in our catalog
      </p>
      <ViewNowBtn className={style.HomeBtn} />
    </div>
  );
};

export default HomePage;
