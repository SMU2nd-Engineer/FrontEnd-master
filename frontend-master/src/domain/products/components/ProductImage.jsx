import { OtherImages } from "../styles/ProductDetailDesign";

const ProductImage = ({ imageList, title, mode = 'all' }) => {
  const BASE_URL = import.meta.env.VITE_BACK_API_IMG_URL;

  if (!imageList?.length) return <div className="null_image"/>;

  if(mode === 'thumbnail') {
    const thumbnail = imageList.find((img) => img.flag === true || img.flag === "true");
    const thumbnailImage = thumbnail || imageList[0];
    return (
      <img key={thumbnailImage?.idx || 0} src={BASE_URL+thumbnailImage?.image_Url} alt={`${title}_thumbnail`} />
    )
  }

  const filteredImageList = (imageList || []).filter( img => String(img.flag).toLowerCase() === "true");
  const thumbnail = filteredImageList[0];
  const others = filteredImageList.slice(1);

  return (
  <OtherImages>
    {/* 썸네일 먼저 보여주기 */}
      {thumbnail && (
        <img
          key={thumbnail.idx}
          src={BASE_URL+thumbnail.image_Url}
          alt={`${title}_thumbnail`}
        />
      )}
      {/* 나머지 이미지 리스트 */}
      {others?.map((img, i) => (
        <img key={i} src={BASE_URL+img.image_Url} alt={`${title}_${i}`} />
      ))}

  </OtherImages>
)
};

export default ProductImage;

