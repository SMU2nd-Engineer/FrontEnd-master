import axiosInstance from "@/lib/axiosInstance";

export const getTicketCalendar = (month, selectedIds) => {
  return axiosInstance.get(
    "/ticket/calendar",
    {
      params: {
        categories: selectedIds,
        month: month,
      },
    },
    { withCredentials: true }
  );
};

export const getTicketInfo = (idx) => {
  return axiosInstance.get(`/ticket/${idx}`, {
    withCredentials: true,
  });
};

export const getSearchTicket = ({ categories, query, startDate, endDate }) => {
  return axiosInstance.get(
    "/ticket/search",
    {
      params: {
        categories,
        query,
        startDate,
        endDate,
      },
    },
    { withCredentials: true }
  );
};

// export const getTicketList = () => {
//   return axiosInstance.get("/ticket/search", {
//     params: {
//       categories: categoriesParam,
//       query: searchTitle,
//       startDate: startDate ? startDate.toISOString().split("T")[0] : null, // date 형식을 'yyyy-mm-dd' 형식으로 가져오게 하기 위함(시간 빼고)
//       endDate: endDate ? endDate.toISOString().split("T")[0] : null,
//     }, // categories, query 파라미터 넘김
//   });
// };

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
