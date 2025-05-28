import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../styles/ProductDetail.css";
import * as ProductDetails from "../styles/ProductDetailDesign";
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
      <ProductDetails.DetailTop>
        <ProductDetails.ThumbnailBox>
          <ProductImage
            imageList={product.imageList}
            title={product.title}
            mode="thumbnail"
          />
        </ProductDetails.ThumbnailBox>

        <ProductDetails.VerticalDivider />

        <ProductDetails.Column>
          <p className="title">{product.title}</p>
          <p className="price">{product.price}원</p>
          <p className="salerInfo">{product.nickName}</p>
          <ProductDetails.HorizontalDivider />
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
        </ProductDetails.Column>
      </ProductDetails.DetailTop>
      <ProductDetails.DetailBottom>
        <div className="dcbox">
          <p className="detailcontent-label">상세 정보</p>

          <ProductDetails.HorizontalDivider />
          <ProductImage
            imageList={product.imageList}
            title={product.title}
            mode="all"
          />
          <p className="detailContent">{product.content}</p>
          <div className="salerinfo"></div>
          <div>
            <Button
              className="product_editbutton"
              text={"수정"}
              onClick={handleEdit}
            />
            <ProductDelete idx={idx} />
          </div>
        </div>
      </ProductDetails.DetailBottom>
    </div>
  );
}
