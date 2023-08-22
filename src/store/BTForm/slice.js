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
      //*Lay obj bo vao productEdit
      state.productEdit = state.productList.filter(
        (prd) => prd.idSV === action.payload
      );
    },
    updateProduct: (state, action) => {
      let newArr= state.productList.filter( (prd) => prd.idSV !== action.payload.idSV )
      state.productList=[...newArr];
      state.productList.push(action.payload)
      state.productEdit = undefined;
    }
    },
  },
);

export const { actions: btFormActions, reducer: btFormReducer } = btFormSlice;
