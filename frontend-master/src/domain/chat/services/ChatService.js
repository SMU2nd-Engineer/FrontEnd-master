import axiosInstance from "@/lib/axiosInstance";

/**
 * 채팅방 목록 조회
 * @param {number} userId 유저 id
 * @returns {Promise<ChatRoom>}
 */
export const getChatRooms = async () =>
  await axiosInstance.get(`/chat/rooms`, {}, { withCredentials: true });

/**
 * 채팅방 삭제
 * @param {number} chatRoomId 채팅방 id
 * @returns {Promise<ChatRoom>}
 */
export const deleteChatRoom = async (chatRoomId) =>
  await axiosInstance.delete(
    `/chat/rooms/${chatRoomId}`,
    {},
    { withCredentials: true }
  );

/**
 * 채팅방 채팅내역 조회
 * @param {number} chatRoomId 채팅방 id
 * @returns {Promise<Chat>}
 */
export const getChatRoomMessage = async (chatRoomId) => {
  return await axiosInstance.get(
    `/chat/messages`,
    { params: { chatRoomId: chatRoomId } },
    { withCredentials: true }
  );
};

/**
 * 채팅 입력 함수
 * @param {{user_idx : number, content : string, chatRoom_id: number}} obj
 * @returns {Promise<Chat>}
 */
export const postChatMessage = async ({ content, chatRoomId }) => {
  return await axiosInstance.post(
    `chat`,
    {
      content,
      chatRoomId,
    },
    { withCredentials: true }
  );
};
