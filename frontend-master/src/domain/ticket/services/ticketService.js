import axiosInstance from "@/lib/axiosInstance";

export const getTicketCalendar = (month) => {
  console.log("요청 날짜:", { month }); // ✅ 안전한 로그
  return axiosInstance.get("/ticket/calendar", {
    params: { month },
    withCredentials: true,
  });
};
// export const getTicketCalendar = (date) => {
//   console.log(date);
//   return axiosInstance.get(
//     "/ticket/calendar",
//     { params: { month: `${date.getYear()}-${date.getMonth()}` } },
//     { withCredentials: true }
//   );
// };

// export const getTicketList = () => {
//   return axiosInstance.get("ticket/list", { withCredentials: true });
// };
