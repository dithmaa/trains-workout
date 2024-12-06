import React, { useState, useEffect } from "react";
import styles from "./GriphSizes.module.scss";
import { ReactComponent as GrayGriph } from "../../assets/img/griph-gray.svg";
import { ReactComponent as GreenGriph } from "../../assets/img/griph-green.svg";
import {
  useGetUpdatedEquipmentsMutation,
  useUpdateEquipmentsMutation,
} from "../../store/equipmentsApi";

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
interface GriphSizesProps {
  details: Detail[]; // Массив объектов с типом Detail
}

// Тип для структуры inputData
interface InputData {
  init: string;
  equipments: {
    equipment_id: number;
    detail_id: number;
    option_id: number;
  }[];
}

// Тип для полученного ответа
interface ChoiceResponse {
  choices: Array<{
    equipment_id: number;
    detail_id: number;
    option_id: number;
  }>;
}

export const GriphSizes: React.FC<GriphSizesProps> = ({ details }) => {
  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  // Стейт для хранения активных индексов
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [inputData, setInputData] = useState<InputData>({
    init: "758575043", // Идентификатор
    equipments: [], // Массив с выбранными опциями
  });

  const handleUpdate = async () => {
    try {
      const response = await updateEquipments(inputData).unwrap();
      console.log("Update success:", response);

      // Обновляем активные индексы на основе полученных данных
      if (response?.choices) {
        const indices = response.choices.map((choice: { option_id: number }) =>
          details[1].options.findIndex(
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
    try {
      // Отправляем только init с айдишником
      const response = await getUpdatedEquipments({
        init: inputData.init,
      }).unwrap();
      console.log("Updated equipment:", response);

      // Обновляем активные индексы на основе полученных данных
      if (response?.choices) {
        const indices = response.choices.map((choice: { option_id: number }) =>
          details[1].options.findIndex(
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
    // Обновляем активные индексы
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    // Обновляем данные для отправки в API
    setInputData({
      init: "758575043", // айдишник остается неизменным
      equipments: [
        {
          equipment_id: size.equipment_id, // Идентификатор оборудования
          detail_id: size.detail_id, // Идентификатор детали
          option_id: size.id, // ID выбранного размера
        },
      ],
    });
  };

  // Вызов handleGetUpdatedEquipments при первом рендере компонента
  useEffect(() => {
    handleGetUpdatedEquipments(); // Вызов при монтировании компонента
  }, []); // Пустой массив зависимостей для первого рендера

  // Вызов handleUpdate, когда inputData изменяется
  useEffect(() => {
    if (inputData.equipments.length > 0 && inputData.equipments[0].option_id) {
      handleUpdate();
    }
  }, [inputData]); // Обновляем, когда inputData изменяется

  return (
    <div className={styles.root}>
      {details && <h2 className="main-title">{details[1].name}</h2>}
      {details &&
        details[1].options.map((item, index) => {
          const isActive = activeIndexes.includes(index);
          return (
            <div
              key={index}
              className={`${styles.root__item} ${
                isActive ? styles.root_active : ""
              }`}
              onClick={() => handleClick(index, item)} // Передаем item в обработчик
            >
              <span>{item.value}</span>
              {isActive ? <GreenGriph /> : <GrayGriph />}
            </div>
          );
        })}
    </div>
  );
};
