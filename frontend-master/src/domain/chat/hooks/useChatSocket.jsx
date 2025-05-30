import { getAccessToken } from "@/utils/TokenManager";
import { useEffect, useRef } from "react";

/**
 * WebSocket 연결 및 메시지 수신 핸들러
 * @param {string} roomId - 현재 채팅방 ID
 * @param {function} onMessage - 메시지 수신 콜백
 */
export function useChatSocket(roomId, onMessage) {
  const socketRef = useRef(null);

  useEffect(() => {
    if (!roomId || roomId == 0) return;

    // EC2 주소나 localhost에 맞게 수정하세요
    const socket = new WebSocket(
      `${
        import.meta.env.VITE_BACK_WEB_SOCKET_URL
      }/chat?roomId=${roomId}&token=${getAccessToken()}`
    );
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("🔌 WebSocket connected");
      // 특정 채팅방 구독 요청
      socket.send(
        JSON.stringify({
          type: "join",
          chatRoomId: roomId,
          token: getAccessToken(),
        })
      );
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log("📩 Received:", msg);
      onMessage(msg);
    };

    socket.onerror = (err) => {
      console.error("WebSocket error", err);
    };

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, [roomId, onMessage]);

  return socketRef;
}
