import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productEdit: undefined,
};

const btFormSlice = createSlice({
  name: "btForm",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      //action.payload: id cua Product muon add
      // console.log("payload: ", action.payload);
      state.productList.map( (prd) => {
        if(prd.idSV === action.payload){
          let arr= state.productList.filter(
            (prd1) => prd1.idSV !== action.payload
          );
          state.productList=[...arr]
          state.productList.push(action.payload);
          return;
        }
      })
      state.productList.push(action.payload);
    },
    removeProduct: (state, action) => {
      //action.payload = id của product muốn xóa
      // console.log("act PAY: ", action.payload);

      // function filterProductById(prd, prdtoFilter) {
      //   console.log("prd.ID: ", prd.idSV);
      //   console.log("payload ID: ", prdtoFilter);
      //   if (prd.idSV != prdtoFilter) {
      //     console.log("GIỐNG");
      //     return true;
      //   } else {
      //     console.log("ĐÉO GIỐNG");
      //     return false;
      //   }
      // }

      // let newArr = [];
      state.productList = state.productList.filter(
        (prd) => prd.idSV !== action.payload
      );
      // console.log("List mới: ", newArr);
      //? Sao thay list thành Array nó bị lỏ?
    },
    editProduct: (state, action) => {
      console.log(action.payload);
      //!Mau chot
      state.productEdit = state.productList.filter(
        (prd) => prd.idSV === action.payload
      );

      
      
    },
  },
});

export const { actions: btFormActions, reducer: btFormReducer } = btFormSlice;
