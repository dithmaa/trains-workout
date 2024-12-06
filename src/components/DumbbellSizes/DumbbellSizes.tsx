import React, { useState, useEffect } from "react";
import styles from "./DumbbellSizes.module.scss";
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
interface DumbbellSizesProps {
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

export const DumbbellSizes: React.FC<DumbbellSizesProps> = ({ details }) => {
  console.log(details);

  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  // Изменили типизацию inputData
  const [inputData, setInputData] = useState<InputData>({
    init: "758575043", // Айдишник
    equipments: [], // Массив, который изначально пустой
  });

  // Состояние для хранения активных индексов
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleUpdate = async () => {
    try {
      const response = await updateEquipments(inputData).unwrap();
      console.log("Update success:", response);

      // Обновляем активные индексы на основе полученных данных
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
    try {
      // В запросе отправляем только init с айдишником
      const response = await getUpdatedEquipments({
        init: inputData.init, // Отправляем только init с айдишником
      }).unwrap();
      console.log("Updated equipment:", response);

      // Обновляем активные индексы на основе полученных данных
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
    console.log("size", size);

    // Обновляем активный элемент
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    // Обновляем данные для отправки с выбором по размеру (option_id)
    setInputData({
      init: "758575043", // айдишник остается неизменным
      equipments: [
        {
          equipment_id: size.equipment_id, // Идентификатор оборудования
          detail_id: size.detail_id, // Идентификатор детали
          option_id: size.id, // ID выбранного размера (например, 5 кг)
        },
      ],
    });
  };

  // Вызов handleGetUpdatedEquipments при первом рендере компонента
  useEffect(() => {
    // Вызовим handleGetUpdatedEquipments только при первом рендере
    handleGetUpdatedEquipments();
  }, []); // Пустой массив зависимостей, чтобы хук сработал только один раз при монтировании компонента

  // Вызываем handleUpdate, когда inputData обновляется
  useEffect(() => {
    if (inputData.equipments.length > 0 && inputData.equipments[0].option_id) {
      handleUpdate();
    }
  }, [inputData]); // Каждый раз, когда inputData изменяется, выполняем update

  return (
    <div className={styles.root}>
      {details && <h2 className="main-title">{details[0].name}</h2>}
      {details &&
        details[0].options.map((weight, index) => (
          <div
            key={index}
            className={`${styles.root__item} ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
            onClick={() => handleClick(index, weight)} // Передаем weight в обработчик
          >
            {weight.value}
          </div>
        ))}
    </div>
  );
};
