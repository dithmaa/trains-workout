import React, { useState, useEffect } from "react";
import styles from "./DumbbellSizes.module.scss";
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
  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [inputData, setInputData] = useState<InputData>({
    init: "758575043",
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
    try {
      const response = await getUpdatedEquipments({
        init: inputData.init,
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
      init: "758575043",
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
    handleGetUpdatedEquipments();
  }, []);

  useEffect(() => {
    if (inputData.equipments.length > 0 && inputData.equipments[0].option_id) {
      handleUpdate();
    }
  }, [inputData]);

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
            onClick={() => handleClick(index, weight)}
          >
            {weight.value}
          </div>
        ))}
    </div>
  );
};
