const CATEGORY = {
  "CONTENTS" : 1,
  "CONTENTSGENRE" : 2,
  "TICKET" : 3,
  "BOARD" : 4,
  "REVIEW" : 5,
  "PAYMENT" : 6
}

export const getCategoryIdx = (str ="") =>{
  return CATEGORY[str.toUpperCase()];
} 