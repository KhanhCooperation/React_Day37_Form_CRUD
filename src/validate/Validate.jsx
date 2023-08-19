
// validate input 
export const validInput = (minLength, value ) => {
  // console.log("validInput có hđ");
    if (minLength !== -1 && !value?.length ) {
        // console.log("Lỗi ko nhập");
        return false;
      }else{
        return true;
      }
}
//validate regex
export const validReg =(validity, name) => {
     if (validity.patternMismatch) {
        // console.log("Lỗi regex");
        if (name === "idSV") {
          // console.log("KO HOP LE");
          return false
        } else if (name === "email") {
          return false
        } else if (name === "tenSV") {
          return false
        } else if ((name === "sdt")) {
          return false
        }
    }
    console.log("HOPLE");
        return true;
}

//Validate length
export const validLength=(value, max, min,name) => {
  // console.log("validLength có hđ");
    if (( value?.length > max || value?.length < min ) && name === "idSV") {
        // console.log("lỗi độ dài");
        return false
      }else{
        return true
      }
}

//Check duplicate
export const checkDuplicate =(arrayChecked, value, prop) => {
  // console.log("checkDuplicate có hđ");
    // return arrayChecked.some( (e) => e[prop] === value)
  if(arrayChecked.some( (e) => e[prop] === value) === true){
    console.log("ID bi trung");
    return true
  }else{
    console.log("ID Hop Le");
    return false
  }
}