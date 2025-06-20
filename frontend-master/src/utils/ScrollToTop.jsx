import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 맨위로
  }, [pathname]); // URL 경로가 바뀔 때마다 실행

  return null;
}
