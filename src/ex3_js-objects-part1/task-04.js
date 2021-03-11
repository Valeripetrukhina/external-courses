function strObjNew(str, obj) {
    if ((obj.hasOwnProperty(str)) === false) {
         const newObj = {
            [str]: 'new'
        };
        console.log(Object.assign(obj, newObj));
    } else {
        console.log(obj);
    }
 } 

 module.exports = strObjNew 