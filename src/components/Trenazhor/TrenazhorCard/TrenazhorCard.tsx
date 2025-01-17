import React, { useState, useEffect } from "react";
import styles from "./TrenazhorCard.module.scss";
import {
  useGetUpdatedEquipmentsMutation,
  useUpdateEquipmentsMutation,
} from "../../../store/equipmentsApi";

// Тип для размеров
type Sizes = {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
};

// Тип для пропсов компонента
interface TrenazhorCardProps {
  picture: string;
  title: string;
  sizes: Sizes[]; // Массив объектов с размерами
}

interface InputData {
  init: any;
  equipments: {
    equipment_id: number;
    detail_id: number;
    option_id: number;
  }[];
}

const tg = window.Telegram.WebApp;

export const TrenazhorCard: React.FC<TrenazhorCardProps> = ({
  picture,
  title,
  sizes,
}) => {
  const [initData, setInitData] = useState();
  useEffect(() => {
    // Проверяем, инициализирован ли WebApp и initData
    if (!initData && tg?.initData) {
      tg.ready();
      setInitData(tg.initData);
    }
  }, [initData]); // Зависимость только от initData

  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  // Стейт для активных размеров
  const [activeSizes, setActiveSizes] = useState<boolean[]>(
    Array(sizes.length).fill(false)
  );

  const [inputData, setInputData] = useState<InputData>({
    init: initData, // Идентификатор пользователя
    equipments: [], // Массив с выбранными опциями
  });

  // Обработчик клика для активирования/деактивирования размера
  const handleActiveSizes = (index: number, size: Sizes) => {
    const newActiveSizes = activeSizes.map((item, key) => {
      if (key === index) {
        return !item;
      }
      return item;
    });
    setActiveSizes(newActiveSizes);

    // Обновляем данные для отправки в API
    setInputData({
      init: initData, // Идентификатор пользователя
      equipments: [
        {
          equipment_id: size.equipment_id, // Идентификатор оборудования
          detail_id: size.detail_id, // Идентификатор детали
          option_id: size.id, // ID выбранного размера
        },
      ],
    });
  };

  // Функция для отправки данных на сервер (обновление)
  const handleUpdate = async () => {
    try {
      const response = await updateEquipments(inputData).unwrap();

      // Дополнительно можно обработать ответ и обновить состояние, если нужно
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    // Проверяем, инициализирован ли WebApp и initData
    if (!initData && tg?.initData) {
      tg.ready();
      setInitData(tg.initData);
    }
  }, [initData]); // Зависимость только от initData

  useEffect(() => {
    if (!initData) return; // Ждём, пока initData будет установлен

    const handleGetUpdatedEquipments = async () => {
      try {
        const response = await getUpdatedEquipments({
          init: initData,
        }).unwrap();

        if (response?.choices) {
          const updatedActiveSizes = response.choices.map(
            (choice: { option_id: number }) =>
              sizes.findIndex((size) => size.id === choice.option_id)
          );

          // Обновляем активные размеры
          setActiveSizes(
            activeSizes.map((_, index) => updatedActiveSizes.includes(index))
          );
        }
      } catch (error) {
        console.error("Get updated equipment error:", error);
      }
    };

    handleGetUpdatedEquipments();
  }, [initData, sizes, getUpdatedEquipments]); // Добавлены необходимые зависимости

  // Вызов handleUpdate, когда inputData изменяется
  useEffect(() => {
    if (inputData.equipments.length > 0 && inputData.equipments[0].option_id) {
      handleUpdate();
    }
  }, [inputData]); // Обновляем, когда inputData изменяется

  return (
    <div className={styles.root}>
      <div className={styles.root__top}>
        <div className={styles.root__picture}>
          <img src={picture} alt="Фото тренажера" />
        </div>
        <div className={styles.root__title}>{title}</div>
      </div>
      <div className={styles.root__sizes}>
        {sizes.map((item, key) => {
          const isActive = activeSizes[key];
          return (
            <div
              key={key}
              className={`${styles.root__size} ${
                isActive ? styles.root_active : ""
              }`}
              onClick={() => handleActiveSizes(key, item)} // Передаем item для обновления
            >
              {item.value.split(" ")[0]} {/* Отображаем только число */}
            </div>
          );
        })}
      </div>
      <span className={styles.root__text}>Шаг веса в тренажере</span>
    </div>
  );
};
