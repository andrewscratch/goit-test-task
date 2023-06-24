import { Link, Outlet } from "react-router-dom";
import css from "./Home.module.css";
import bigLogo from "../../image/goit_big.png";
import testPhoto from "../../image/testImg.jpg";
import { FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={bigLogo} alt="logo" width={100}></img>
        <div className={css.logoText}></div>
      </div>

      <h1>Test Task</h1>
      <h3>
        Create tweet cards and add interactivity when clicking on a button.
      </h3>
      <img src={testPhoto} alt="testImg" className={css.testImg}></img>

      <div className={css.buttonBox}>
        <Link to="tweets" className={css.button}>
          Go to Tweets <FaTwitterSquare className={css.icon} />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
