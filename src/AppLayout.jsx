import { Outlet } from "react-router-dom";
import FixedHeader from "./components/FixedHeader";

const AppLayout = () => {
  return (
    <>
      <FixedHeader />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;