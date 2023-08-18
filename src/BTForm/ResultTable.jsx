import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../store/BTForm/slice";

const ResultTable = () => {
  const { productList } = useSelector((state) => state.btForm);
  const dispatch = useDispatch();
  // console.log(productList);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-black text-white font-medium ">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    Mã SV
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Họ Tên
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Số điện thoại
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Khác
                  </th>
                </tr>
              </thead>
              <tbody>
                {productList.map((e) => (
                  <tr
                    key={e?.idSV}
                    className="border-b dark:border-neutral-500"
                  >
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                      {e?.idSV}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">{e?.tenSV}</td>
                    <td className="whitespace-nowrap  px-6 py-4">{e?.sdt}</td>
                    <td className="whitespace-nowrap  px-6 py-4">{e?.email}</td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      <button
                        className="px-3 py-1 p-2 bg-red-500 rounded"
                        onClick={() =>
                          dispatch(btFormActions.removeProduct(e?.idSV))
                        }
                      >
                        Hủy
                      </button>
                      <button
                        className="px-3 py-1 p-2 bg-yellow-500 rounded ml-3"
                        onClick={() => {
                          dispatch(btFormActions.editProduct(e?.idSV));
                        }}
                      >
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
