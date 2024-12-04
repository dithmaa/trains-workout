export function formatScheduleDate(isoDate: string): string {
  const date = new Date(isoDate);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Сравниваем только год, месяц и день
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isTomorrow =
    date.getFullYear() === tomorrow.getFullYear() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getDate() === tomorrow.getDate();

  if (isToday) {
    return "Сегодня";
  } else if (isTomorrow) {
    return "Завтра";
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  }; // Формат: "2 декабря"
  return date.toLocaleDateString("ru-RU", options); // Локализация для русского языка
}
