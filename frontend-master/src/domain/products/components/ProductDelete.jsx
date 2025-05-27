import Button from '@/components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProducts } from '../services/productService';

const ProductDelete = ({idx}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
  try {
    await deleteProducts(idx);
    alert('상품이 삭제되었습니다.');
    navigate('/product/list'); // 목록 페이지로 이동
  } catch (error) {
    console.error('삭제 실패:', error);
    alert('삭제에 실패했습니다.');
  }
};


  return (
    <div>
     <Button className='deleteButton' text={"삭제"} onClick={handleDelete}  />
    </div>
  )
};

export default ProductDelete;