import { Outlet, useLocation } from "react-router-dom";
import { Equipments, TopNav } from "../../components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setBarbells,
  setDumbbells,
  setInventory,
  setTrenazhors,
} from "../../store/equipmentsSlice";

export const EquipmentsPage = () => {
  const location = useLocation();
  const isEquipmentPage =
    location.pathname === `/equipments/dumbbells` ||
    location.pathname === `/equipments/barbells` ||
    location.pathname === `/equipments/trenazhor` ||
    location.pathname === `/equipments/inventory`;

  const linkPath = isEquipmentPage ? `/equipments/` : `/more`;
  const dispatch = useDispatch();
  const getEquipmentData = async () => {
    const data = await axios
      .get("http://localhost:3000/equipments.json")
      .then(({ data }) => {
        dispatch(setDumbbells(data[3]));
        dispatch(setBarbells(data[2]));
        dispatch(setInventory(data[0]));
        dispatch(setTrenazhors(data[1]));
      });
  };
  useEffect(() => {
    getEquipmentData();
  }, []);

  return (
    <div className={"equipments-page"}>
      {!isEquipmentPage ? (
        <div className="container">
          <TopNav linkPath={linkPath} title="Настройки оборудования" />
          <h2 className="main-title">Какое оборудование есть в вашем зале?</h2>
          <Equipments />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
