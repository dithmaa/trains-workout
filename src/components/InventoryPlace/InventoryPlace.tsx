import React, { useState, useEffect } from "react";
import styles from "./InventoryPlace.module.scss";
import inventoryImg1 from "../../assets/img/inventory/1.png";
import inventoryImg2 from "../../assets/img/inventory/2.png";
import inventoryImg3 from "../../assets/img/inventory/3.png";
import inventoryImg4 from "../../assets/img/inventory/4.png";
import inventoryImg5 from "../../assets/img/inventory/5.png";
import inventoryImg6 from "../../assets/img/inventory/6.png";
import inventoryImg7 from "../../assets/img/inventory/7.png";
import inventoryImg8 from "../../assets/img/inventory/8.png";
import inventoryImg9 from "../../assets/img/inventory/9.png";
import {
  useUpdateEquipmentsMutation,
  useGetUpdatedEquipmentsMutation,
} from "../../store/equipmentsApi"; // Импортируем мутации

interface Size {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
}

interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null;
  name: string;
  type: string;
  options: Size[];
}

interface InventoryPlaceSizesProps {
  details: Detail[];
}

export const InventoryPlace: React.FC<InventoryPlaceSizesProps> = ({
  details,
}) => {
  const inventorys = [
    { id: 1, title: "Скамья", image: inventoryImg1 },
    { id: 2, title: "Степ", image: inventoryImg2 },
    { id: 3, title: "Брусья", image: inventoryImg3 },
    { id: 4, title: "Скакалка", image: inventoryImg4 },
    { id: 5, title: "Наклонная скамья", image: inventoryImg5 },
    { id: 6, title: "Фитбол", image: inventoryImg6 },
    { id: 7, title: "Коврик", image: inventoryImg7 },
    { id: 8, title: "Турник", image: inventoryImg8 },
    { id: 9, title: "Римский стул", image: inventoryImg9 },
  ];

  const [activeInventoryItems, setActiveInventoryItems] = useState<boolean[]>(
    new Array(inventorys.length).fill(false)
  );

  const [activeSizes, setActiveSizes] = useState<boolean[]>(
    new Array(inventorys.length).fill(false)
  );

  const [inputData, setInputData] = useState({
    init: "758575043", // айдишник остается неизменным
    equipments: [
      {
        equipment_id: 1, // Идентификатор оборудования
        detail_id: 0, // Идентификатор детали (по умолчанию 0)
        option_id: null, // option_id для инвентаря
      },
    ],
  });

  const [updateEquipments] = useUpdateEquipmentsMutation();
  const [getUpdatedEquipments] = useGetUpdatedEquipmentsMutation();

  // Функция для получения обновленных данных с API
  const handleGetUpdatedEquipments = async () => {
    try {
      // Отправляем только init с айдишником
      const response = await getUpdatedEquipments({
        init: inputData.init,
      }).unwrap();
      console.log("Updated equipment:", response);

      // Обрабатываем ответ от API, обновляем активные индексы
      if (response?.choices) {
        const updatedActiveSizes = response.choices.map(
          (choice: { option_id: number }) =>
            inventorys.findIndex((item) => item.id === choice.option_id)
        );
        // обновляем состояние activeSizes
        setActiveSizes(
          new Array(inventorys.length).fill(false).map(
            (_, index) => updatedActiveSizes.includes(index) // Устанавливаем true для нужных индексов
          )
        );
      }
    } catch (error) {
      console.error("Get updated equipment error:", error);
    }
  };

  // Функция для отправки обновленных данных на сервер
  const handleToggleInventory = async (index: number) => {
    // Обновляем состояние активных элементов
    setActiveInventoryItems((prev) =>
      prev.map((isActive, i) => (i === index ? !isActive : isActive))
    );

    // Обновляем inputData, где detail_id равен index
    const newInputData = {
      init: inputData.init,
      equipments: [
        {
          equipment_id: 1, // ID инвентаря
          detail_id: index + 1, // Индекс выбранного элемента как detail_id
          option_id: null, // option_id для инвентаря = null
        },
      ],
    };

    // Обновляем inputData и отправляем запрос
    setInputData(newInputData); // Обновляем состояние с новым detail_id
    try {
      const response = await updateEquipments(newInputData).unwrap(); // Используем обновленное inputData
      console.log("Updated equipment:", response); // Логируем ответ
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // Вызываем handleGetUpdatedEquipments при монтировании компонента
  useEffect(() => {
    handleGetUpdatedEquipments();
  }, []); // Пустой массив зависимостей (вызовется только один раз)

  return (
    <div className={styles.root}>
      {details &&
        details.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.root__item} ${
              activeInventoryItems[index] ? styles.root_active : ""
            }`} // Добавляем активный класс, если элемент выбран
            onClick={() => handleToggleInventory(index)} // Обработчик клика
          >
            <div className={styles.root__picture}>
              <img src={String(item.title_photo)} alt={item.name} />
            </div>
            <span className={styles.root__title}>{item.name}</span>
          </div>
        ))}
    </div>
  );
};
