import { Outlet } from "react-router-dom";

import "./../../components/directory-item/directory-item.component";
import Categories from "./../../components/categories/categories.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};

export default Home;
