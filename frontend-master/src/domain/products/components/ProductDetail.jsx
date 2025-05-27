import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetail.css";
import { Divider } from "@chakra-ui/react";
import Button from "@/components/Button";
import { getProductDetail } from "../services/productService";
import ProductImage from "./ProductImage";
import ProductDelete from "./ProductDelete";
import { postChatRooms } from "@/domain/chat/services/ChatService";
import ChatPopup from "@/domain/chat/components/ChatPopup";

export default function ProductDetail() {
  const { idx } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [chatPopup, setChatPopup] = useState(0);

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => res.data)
      .then((data) => {
        console.log("#########", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error("상품 불러오기 실패:", err));
  }, [idx]);

  if (loading) {
    return <p>loading... </p>;
  }

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }
  const handleClick = () => {
    navigate(`/payment/trade/${product.idx}`, {
      state: { product },
    });
  };

  const handleEdit = () => {
    console.log("수정할 idx: ", idx);
    navigate(`/product/edit/${idx}`);
  };

  const handleRoomClick = () => {
    postChatRooms(product.user_idx, product.title).then((res) => {
      setChatPopup(res.data.id);
    });
  };

  const closePopup = () => {
    setChatPopup(0);
  };

  return (
    <div className="detailinfo">
      {chatPopup === 0 || (
        <ChatPopup selectRoom={chatPopup} handleClose={closePopup} />
      )}
      <div className="detail-top">
        <div className="image">
          <ProductImage
            imageList={product.imageList}
            title={product.title}
            mode="thumbnail"
          />
        </div>
        <div className="chakra-divider">
          <Divider orientation="vertical" height="400px" />
        </div>
        <div className="column">
          <p className="title">{product.title}</p>
          <p className="price">{product.price}{product.nickname}원</p>
          <p className="salerInfo"></p>
          <div className="chakra-divider">
            <Divider orientation="horizontal" />
          </div>
          <div className="buttonbox">
            <button className="pickbutton">찜</button>
            <Button
              className="chatbutton"
              text={"1:1 채팅"}
              onClick={handleRoomClick}
            ></Button>
            <Button
              className="orderbutton"
              text={"바로구매"}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="detail-bottom">
        <div className="dcbox">
          <p className="detailcontent-label">상세 정보</p>
          <div className="chakra-divider">
            <Divider orientation="horizontal" />
          </div>
          <div className="salerinfo">
            {/* 판매자 정보 뜨게 하고 싶엉 */}
          </div>
          <div>
            <Button className='product_editbutton' text={"수정"} onClick={handleEdit}/>
            <ProductDelete idx={idx} />
          </div>
        </div> 
      </div>
    </div>
  );
}
