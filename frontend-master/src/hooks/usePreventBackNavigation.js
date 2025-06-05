// src/hooks/usePreventBackNavigation.js
import { useEffect } from 'react';

const usePreventBackNavigation = () => {
  useEffect(() => {
    // 현재 히스토리 상태를 덮어쓰기 (이전 페이지 제거)
    window.history.replaceState(null, '', window.location.pathname);

    const handlePopState = (event) => {
      // 뒤로가기 이벤트 발생시 선택하는 팝업창
      const originateBack = window.confirm("페이지를 벗어나시겠습니까?");

      if(originateBack) {
        // 사용자가 진행을 선택하면, 뒤로가기를 허용 (이벤트 무시하고 기본 동작 유지)
        // 여기서는 특별히 아무 조치 안 해도 뒤로가기 됨 
      } else {
        // 브라우저 뒤로가기 눌렀을 때 현재 페이지를 유지해서 이전페이지로 못 돌아가게 함
        window.history.go(1); // 앞으로 가기 시도 (현재 페이지 유지)
      }      
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};

export default usePreventBackNavigation;
