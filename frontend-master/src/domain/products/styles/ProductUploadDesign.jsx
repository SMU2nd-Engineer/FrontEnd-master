import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;

  max-width: 640px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

export const UploadForm = styled.form`
  font-family: 'Pretendard-Regular';
  font-size: 20px;
  line-height: 400%;
  /* margin-left: 145px */

  .form-row {
  display: flex;
  gap: 80px;
  align-items: center;
}

.form-row label {
  width: 95px;
  text-align: left;
}

.form-row input {
  border: 1px solid #ccc;
  width: 400px;
  height: 35px;
  border-radius: 5px;
}

textarea {
  margin-top: 10px;
  width: 450px;
  height: 100px;
  
}

`
export const CategorySelect = styled.div`
  display: flex;
  gap: 20px;
  width: 100px;
  height: 40px;
     
  select {
    border-radius: 5px;
    border-color: #ddd;
  }   
`


export const ButtonBox = styled.div`
  margin-top: 20px;
  flex-shrink: 0; 
  display: flex;
  align-items: center;
  justify-content: center;

  .upload {
  border-color: rgb(194, 194, 194);
  flex-shrink: 0; 
  display: flex;
  align-items: center;
  justify-content: center;
}
`
