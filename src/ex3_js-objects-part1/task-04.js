function strObjNew(str, obj) {
  if (obj.hasOwnProperty(str) === false) {
    let newData = {
      [str]: "new",
    };

    console.log(Object.assign(obj, newData));
  } else {
    console.log(obj);
  }
}
module.exports = strObjNew