const convertToDate = (str) => {
  return str.replace("T", ", ").substring(0, 17);
};

const defineStatus = (number) => {
  switch (number) {
    case 0:
      return {
        text: "В оброботке",
        class: "start",
      };
    case 1:
      return {
        text: "На кухне",
        class: "prepare",
      };
    case 2:
      return {
        text: "Готов",
        class: "ready",
      };
    case 3:
      return {
        text: "Завершен",
        class: "",
      };
  }
};

export { convertToDate, defineStatus };
