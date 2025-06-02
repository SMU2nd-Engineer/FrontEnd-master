import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ProductDetails from "../styles/ProductDetailDesign";
import Button from "@/components/Button";
import { deleteProducts, getProductDetail } from "../services/productService";
import ProductImage from "./ProductImage";
import { postChatRooms } from "@/domain/chat/services/ChatService";
import ChatPopup from "@/domain/chat/components/ChatPopup";
import ImageSlider from "./ImageSlider";
import PeakButton from "./PeakButton";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import { useProductStore } from "@/domain/payment/store/useProductStore";

export default function ProductDetail() {
  const { idx } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [chatPopup, setChatPopup] = useState(0);
  const { userInfo } = useLoginUserInfoStore();
  const { setProductInfo } = useProductStore();

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => res.data)
      .then((data) => {
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
    setProductInfo(product);
    navigate(`/payment/${product.idx}/trade`, {
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

  const handleDelete = async () => {
    try {
      await deleteProducts(idx);
      alert("상품이 삭제되었습니다.");
      navigate("/product/list"); // 목록 페이지로 이동
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <div className="detailinfo">
      {chatPopup === 0 || (
        <ChatPopup selectRoom={chatPopup} handleClose={closePopup} />
      )}
      <ProductDetails.DetailTop>
        {/* 이미지 슬라이드, 이미지 리스트 */}
        <ProductDetails.ThumbnailBox>
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
            {product.user_idx === userInfo.userIdx ? (
              <ProductDetails.EditDeleteBox>
                <Button
                  className="product_editbutton"
                  text={"수정"}
                  onClick={handleEdit}
                />
                <Button
                  className="product_deletebutton"
                  text={"삭제"}
                  onClick={handleDelete}
                />
                {/* <ProductDelete idx={idx}   /> */}
              </ProductDetails.EditDeleteBox>
            ) : (
              <>
                <ProductDetails.Pickbutton>
                  <PeakButton idx={idx} pick={product.pick}>
                    찜
                  </PeakButton>
                </ProductDetails.Pickbutton>
                <Button
                  className="chatbutton"
                  text={"💬 채팅"}
                  onClick={handleRoomClick}
                ></Button>
                <Button
                  className="orderbutton"
                  text={"💳 구매"}
                  onClick={handleClick}
                />
              </>
            )}
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
      </ProductDetails.DetailBottom>
    </div>
  );
}
