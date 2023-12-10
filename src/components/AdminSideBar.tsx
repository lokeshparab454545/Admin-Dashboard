import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaGamepad, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const AdminSideBar = () => {
  const [showModal, setShowModel] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
  const reSizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", reSizeHandler);
    return () => {
      window.removeEventListener("resize", reSizeHandler);
    };
  }, []);
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModel(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DivOne />
        <DivTwo phoneActive={phoneActive} setShowModel={setShowModel} />
      </aside>
    </>
  );
};
const DivOne = () => {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/dashboard")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/dashboard"}
            style={{
              color: location.pathname.includes("/admin/dashboard")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <RiDashboardFill />
            Dashboard
          </Link>
        </li>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/product")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/product"}
            style={{
              color: location.pathname.includes("/admin/product")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <RiShoppingBag3Fill />
            Product
          </Link>
        </li>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/customer")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/customer"}
            style={{
              color: location.pathname.includes("/admin/customer")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <AiFillFileText />
            Customer
          </Link>
        </li>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/transaction")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/transaction"}
            style={{
              color: location.pathname.includes("/admin/transaction")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <IoIosPeople />
            Transaction
          </Link>
        </li>
      </ul>
    </div>
  );
};

const DivTwo = ({
  phoneActive,
  setShowModel,
}: {
  phoneActive: boolean;
  setShowModel: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/app/stopwatch")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/app/stopwatch"}
            style={{
              color: location.pathname.includes("/admin/app/stopwatch")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <FaStopwatch />
            Stopwatch
          </Link>
        </li>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/app/coupon")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/app/coupon"}
            style={{
              color: location.pathname.includes("/admin/app/coupon")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <RiCoupon3Fill />
            Coupon
          </Link>
        </li>
        <li
          style={{
            backgroundColor: location.pathname.includes("/admin/app/toss")
              ? "rgba(0, 115, 225, 0.1)"
              : "white",
          }}
        >
          <Link
            to={"/admin/app/toss"}
            style={{
              color: location.pathname.includes("/admin/app/toss")
                ? "rgba(0, 115, 225)"
                : "black",
            }}
          >
            <FaGamepad />
            Toss
          </Link>
        </li>
      </ul>
      {phoneActive && (
        <button id="closeSideBar" onClick={() => setShowModel(false)}>
          Close
        </button>
      )}
    </div>
  );
};
export default AdminSideBar;
