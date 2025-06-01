import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ProductDetails from "../styles/ProductDetailDesign";
import Button from "@/components/Button";
import { getProductDetail } from "../services/productService";
import ProductImage from "./ProductImage";
import ProductDelete from "./ProductDelete";
import { postChatRooms } from "@/domain/chat/services/ChatService";
import ChatPopup from "@/domain/chat/components/ChatPopup";
import ImageSlider from "./ImageSlider";
import GlobalStyle from "@/style/AppDesign";
import PeakButton from "./PeakButton";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

export default function ProductDetail() {
  const { idx } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [chatPopup, setChatPopup] = useState(0);
  const {userInfo} = useLoginUserInfoStore();
  console.log("로그인 유저 정보:", userInfo);
  // console.log("게시글 작성자 ID:", product.user_idx);

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
        {/* 이미지 슬라이드, 이미지 리스트 */}
        <ProductDetails.ThumbnailBox>
          {/* <ProductImage imageList={product.imageList} title={product.title} mode="thumbnail" /> */}
          <ImageSlider imageList={product.imageList} />
          <ProductDetails.OtherImages>
            <ProductImage
              imageList={product.imageList}
              title={product.title}
              mode="all"
            />
          </ProductDetails.OtherImages>
        </ProductDetails.ThumbnailBox>

        {/* 상품 상세, 버튼 */}
        <ProductDetails.Column>
          <p className="title">{product.title}</p>
          <p className="price">{product.price}원</p>

          <ProductDetails.HorizontalDivider />

          {/* 닉네임 날짜 */}
          <ProductDetails.NickNDate>
            <p className="salerInfo">{product.nickName}</p>
            <p>등록일: {new Date(product.sdate).toLocaleDateString()}</p>
          </ProductDetails.NickNDate>

          {/* 찜 채팅 구매 버튼 */}
          <ProductDetails.Buttonbox>
            <PeakButton idx={idx} className="pickbutton">
              찜
            </PeakButton>
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
          </ProductDetails.Buttonbox>
        </ProductDetails.Column>
      </ProductDetails.DetailTop>

      {/* 큰 이미지, 삭제 수정 버튼박스 */}
      <ProductDetails.DetailBottom>
        <ProductDetails.PDetailLabel>상세 정보</ProductDetails.PDetailLabel>

        <ProductDetails.HorizontalDivider />

        <ProductImage
          imageList={product.imageList}
          title={product.title}
          mode="all"
        />
        {/* <ImageSlider imageList={product.imageList} /> */}


        <ProductDetails.PDetailContent>
          {product.content}
        </ProductDetails.PDetailContent>

        { product.user_idx === userInfo.userIdx &&(
          // <ProductDetails.EditDeleteBox>
          <Button
            className="product_editbutton"
            text={"수정"}
            onClick={handleEdit}
          />
          // <ProductDelete idx={idx} />
        // </ProductDetails.EditDeleteBox>
        )}
      </ProductDetails.DetailBottom>
    </div>
  );
}
