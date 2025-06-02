import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import { useRef } from "react";

const PaymentLayout = () => {
  const skipBeforeUnload = useRef(false); // false면 경고, true면 예외
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
      if (!skipBeforeUnload.current) {
        e.preventDefault();
        e.returnValue = ""; // 크롬 등에서 표시
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return <Outlet context={{ skipBeforeUnload }} />;
};

export default PaymentLayout;
