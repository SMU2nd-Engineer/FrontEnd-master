import axiosInstance from "@/lib/axiosInstance";

export const getTicketList = () => {
  return axiosInstance.get("ticket/list", { withCredentials: true });
};
