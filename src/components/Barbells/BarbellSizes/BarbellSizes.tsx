import React, { useState, useEffect } from "react";
import styles from "./BarbellSizes.module.scss";
import {
  useGetUpdatedEquipmentsMutation,
  useUpdateEquipmentsMutation,
} from "../../../store/equipmentsApi";

// Тип для вложенного объекта options
interface Size {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
}

// Тип для основного объекта details
interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null; // Если фото отсутствует, оно null
  name: string;
  type: string;
  options: Size[]; // Вложенный массив с типом Size
}

// Тип для пропсов компонента
interface BarbellSizesProps {
  details: Detail[]; // Массив объектов с типом Detail
}

// Тип для структуры inputData
interface InputData {
  init: any;
  equipments: {
    equipment_id: number;
    detail_id: number;
    option_id: number;
  }[];
}
const tg = window.Telegram.WebApp;

export const BarbellSizes: React.FC<BarbellSizesProps> = ({ details }) => {
  const [initData, setInitData] = useState();
  useEffect(() => {
    // Проверка, что WebApp инициализирован
    tg.ready();

    // Получение userId
    setInitData(tg?.initData);
  });

  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [inputData, setInputData] = useState<InputData>({
    init: initData,
    equipments: [],
  });

  const handleUpdate = async () => {
    try {
      const response = await updateEquipments(inputData).unwrap();
      if (response?.choices) {
        const indices = response.choices.map((choice: { option_id: number }) =>
          details[0].options.findIndex(
            (option) => option.id === choice.option_id
          )
        );
        setActiveIndexes(indices);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleGetUpdatedEquipments = async () => {
    console.log("{init: initData}", {
      init: initData,
    });

    try {
      const response = await getUpdatedEquipments({
        init: initData,
      }).unwrap();

      if (response?.choices) {
        const indices = response.choices.map((choice: { option_id: number }) =>
          details[0].options.findIndex(
            (option) => option.id === choice.option_id
          )
        );
        setActiveIndexes(indices);
      }
    } catch (error) {
      console.error("Get updated equipment error:", error);
    }
  };

  const handleClick = (index: number, size: Size) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    setInputData({
      init: initData, // айдишник остается неизменным
      equipments: [
        {
          equipment_id: size.equipment_id, // Идентификатор оборудования
          detail_id: size.detail_id, // Идентификатор детали
          option_id: size.id, // ID выбранного размера (например, 5 кг)
        },
      ],
    });
  };

  useEffect(() => {
    console.log("handleGetUpdatedEquipments...");
    handleGetUpdatedEquipments();
  }, []);
  useEffect(() => {
    if (inputData.equipments.length > 0 && inputData.equipments[0].option_id) {
      handleUpdate();
    }
    console.log("Danya", inputData);
  }, [inputData]);

  useEffect(() => {
    console.log("tg", tg);
    console.log("tg.initData", tg.initData);
    console.log("tg.initDataUnsafe", tg.initDataUnsafe);
    console.log("initData", initData);
  }, [initData]);

  return (
    <div className={styles.root}>
      {details && <h2 className="main-title">{details[0].name}</h2>}
      {details &&
        details[0].options.map((weight, index) => (
          <div className={styles.root__circle} key={index}>
            <div
              className={`${styles.root__item} ${
                activeIndexes.includes(index) ? "active" : ""
              }`}
              onClick={() => handleClick(index, weight)} // Передаем weight в обработчик
            ></div>
            {weight.value}
          </div>
        ))}
    </div>
  );
};
