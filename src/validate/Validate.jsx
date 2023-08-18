

// validate input 
export const validInput = (minLength, value , mess, title, errorArr) => {
    if (minLength !== -1 && !value.length ) {
        // console.log("Lỗi ko nhập");
        mess = `Vui lòng nhập ${title}`;
        return false;
      }else{
        return true;
      }
}
//validate regex
export const validReg =(validity, name, mess) => {
     if (validity.patternMismatch) {
        // console.log("Lỗi regex");
        if (name === "idSV") {
          mess = `${name} phải có dạng: SVxxx (x là ký số) `;
          return false
        } else if (name === "email") {
          mess = `${name} phải có dạng: abc@gmail.com`;
          return false
        } else if (name === "tenSV") {
          mess = `${name} mà có số hay vậy?`;
          return false
        } else if ((name === "sdt")) {
          mess = `${name} mà có chữ ?:)))`;
          return false
        }
        return true;
    }
}

//Validate length
export const validLength=(value, max, min,name, mess) => {
    if (( value.length > max || value.length < min ) && name === "idSV") {
        // console.log("lỗi độ dài");
        mess = `Ký tự phải có dộ dài lớn hơn ${min} và bé hơn ${max}`;
        return false
      }else{
        return true
      }
}

//Check duplicate
export const checkDuplicate =(arrayChecked, value, prop) => {
    return arrayChecked.some( (e) => e[prop] === value)
}