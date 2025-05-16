import axiosInstance from "@/lib/axiosInstance"

export const getCategory = (idx) =>{
  return axiosInstance.get(`/category/${idx}`, {},  { withCredentials: true })
}