export const stringToTime = (pTime) => {
  let tempDate = new Date(pTime);
  let stringNewDate =
    (tempDate.getMonth() + 1 > 9
      ? (tempDate.getMonth() + 1).toString()
      : "0" + (tempDate.getMonth() + 1)) +
    "-" +
    (tempDate.getDate() > 9
      ? tempDate.getDate().toString()
      : "0" + tempDate.getDate().toString()) +
    " " +
    tempDate.getHours() +
    ":" +
    (tempDate.getMinutes() > 9
      ? tempDate.getMinutes().toString()
      : "0" + tempDate.getMinutes().toString());

  return stringNewDate;
};
