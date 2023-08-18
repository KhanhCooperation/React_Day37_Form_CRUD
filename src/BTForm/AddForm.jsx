import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../store/BTForm/slice";
import { checkDuplicate, validInput, validLength, validReg } from "../validate/Validate";

const AddForm = () => {
  const [formData, setFormData] = useState();
  console.log("formData: ", formData);
  const dispatch = useDispatch();
  const { productList, productEdit } = useSelector((state) => state.btForm);
  // console.log("ProList: ", productList);
  //error:
  const [formError, setFormError] = useState();


  // render thông báo lần đầu ========================
  useEffect(() => {
    let inputArr = document.querySelectorAll("input");
    const newFormErr = {}; //obj chứa tb err //*
    inputArr.forEach((e) => {
      const title = e.getAttribute("title");
      const name = e.getAttribute("name");
      if (e.hasAttribute("minLength")) {
        let mess = `Vui lòng nhập ${title}`;
        // setFormError({
        //   ...formError,
        //   [name]: mess,
        // });
        newFormErr[name] = mess; //*
      } else {
        let mess = `Không bắt buộc`;
        newFormErr[name] = mess;
      }
    });

    setFormError(newFormErr); //*
  }, []);
  // console.log(formError);

  //=========
  const handleData = () => (ev) => {
    const { name, title, max, minLength, value, validity } = ev.target;
    // console.log("valid: ", validity);
    //validate
    let flag;
    let mess;
    flag= validInput(minLength, value, mess, title) & !checkDuplicate(productList, value, "idSV" ) & validReg(validity, name, mess) & validLength(value, max, minLength, name, mess)

console.log("mess: ", mess);
    // if (minLength !== -1 && !value.length ) {
    //   // console.log("Lỗi ko nhập");
    //   mess = `Vui lòng nhập ${title}`;
    //   flag = false;
    // } else if (name === "idSV" && 
    // productList.map( (e) => {
    //   if (value === e.idSV){
    //     return true;
    //   }else{
    //     return false;
    //   }
    // })
    // ){
    //   mess=`${name} đã tồn tại, Vui lòng nhập id khác`;
    //   flag = false
    // } else if (validity.patternMismatch) {
    //   // console.log("Lỗi regex");
    //   if (name === "idSV") {
    //     mess = `${name} phải có dạng: SVxxx (x là ký số) `;
    //     flag = false;
    //   } else if (name === "email") {
    //     mess = `${name} phải có dạng: abc@gmail.com`;
    //     flag = false;
    //   } else if (name === "tenSV") {
    //     mess = `${name} mà có số hay vậy?`;
    //     flag = false;
    //   } else if ((name === "sdt")) {
    //     mess = `${name} mà có chữ ?:)))`;
    //     flag = false;
    //   }
    
    // } else if (( value.length > max || value.length < minLength ) && name === "idSV") {
    //   // console.log("lỗi độ dài");
    //   mess = `Ký tự phải có dộ dài lớn hơn ${minLength} và bé hơn ${max}`;
    //   flag = false;
    // }else{
    //   flag=true;
    // }

    setFormError({
      ...formError,
      [name]: mess,
    });
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
    return flag;
  };

  useEffect(() => {
    if (productEdit) {
      setFormData(productEdit);
      return;
    }
    //*Dùng để bắt thay đổi, nó render lại sự thay đổi
    console.log("formData trong UE: ", formData);
  }, [productEdit]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        let flag = handleData();
        if (flag && formData.length !== 0) {
          dispatch(btFormActions.addProduct(formData));
          console.log("SUBMIT");
        }
      }}
    >
      {/* //*Title */}
      <div className="w-full bg-black text-white p-3">
        <h1 className="text-3xl flex justify-self-start ">
          Thông tin sinh viên
        </h1>
      </div>
      {/* //*Row1 */}
      <div className="flex flex-wrap -mx-3 mb-6 mt-5">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Mã SV
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="idSV"
            value={formData ? formData[0]?.idSV : formData?.idSV}
            title="mã sinh viên"
            type="text"
            placeholder="Jane"
            minLength={1}
            max={5}
            pattern="^SV\d{0,3}$"
            onChange={handleData()}
          />
          <p className="text-red-500 text-xs italic">{formError?.idSV}</p>
        </div>
        {/* //===================== */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Họ Tên
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="tenSV"
            value={formData ? formData[0]?.tenSV : formData?.tenSV}
            title="tên SV"
            type="text"
            placeholder="Jane"
            minLength={1}
            pattern="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            onChange={handleData()}
          />
          <p className="text-red-500 text-xs italic">{formError?.tenSV}</p>
        </div>
      </div>
      {/* //*row2 */}
      <div className="flex flex-wrap -mx-3 mb-6 mt-5">
        {/* //======================== */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Số điện thoại
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="sdt"
            value={formData ? formData[0]?.sdt : formData?.sdt}
            // value={formData[0]?.idSV}
            type="text"
            title="Số điện thoại"
            placeholder="Jane"
            pattern="^[0-9]+$"
            onChange={handleData()}
          />
          <p className="text-blue-500 text-xs italic">{formError?.sdt}</p>
        </div>
        {/* //================================= */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="email"
            value={formData ? formData[0]?.email : formData?.email}
            title="Email"
            type="text"
            placeholder="Jane"
            minLength={1}
            onChange={handleData()}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          />
          <p className="text-red-500 text-xs italic">{formError?.email}</p>
        </div>
      </div>
      {/* //*Button  */}
      <button className="mx-3 my-1 bg-green-500 p-2 rounded-xl flex justify-items-start">
        Thêm Sinh Viên
      </button>
    </form>
  );
};

export default AddForm;
