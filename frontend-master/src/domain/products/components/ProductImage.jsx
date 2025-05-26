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

  const thumbnail = imageList.find((img) => img.flag === true || img.flag === "true");
  const others = imageList.filter((img) => img !== thumbnail);

  return (
  <div className="image_box">
    {/* 썸네일 먼저 보여주기 */}
      {thumbnail && (
        <img
          key={thumbnail.idx}
          src={BASE_URL+thumbnail.image_Url}
          alt={`${title}_thumbnail`} // 썸네일 강조 스타일 예시
        />
      )}
      {/* 나머지 이미지 리스트 */}
      {others.map((img, i) => (
        <img key={i} src={`${BASE_URL}/${img.image_Url}`} alt={`${title}_${i}`} />
      ))}

  </div>
)
};

export default ProductImage;

