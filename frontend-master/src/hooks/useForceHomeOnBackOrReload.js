import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useForceHomeOnBackOrReload = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // 새로고침 감지
        const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
        if (isReload) {
            navigate("/", { replace: true });
        }
        // 뒤로가기 시 홈으로 이동
        const handlePopState = () => {
            navigate("/", { replace: true });
        };
        window.addEventListener("popstate", handlePopState);
        // 클린업
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [navigate]);
};