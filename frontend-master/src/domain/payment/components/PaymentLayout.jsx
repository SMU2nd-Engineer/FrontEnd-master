import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";

const PaymentLayout = () => {
  const productInfo = useProductStore((state) => state.productInfo);
  const { idx } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isEmptyObject = (obj) =>
      obj && Object.keys(obj).length === 0 && obj.constructor === Object;

    if (!productInfo || isEmptyObject(productInfo)) {
      navigate(`/product/detail/${idx}`, { replace: true });
    }
  }, [productInfo, navigate, idx]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return <Outlet />;
};

export default PaymentLayout;
