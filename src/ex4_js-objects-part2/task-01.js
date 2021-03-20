function searchInPrototype (property, obj){
  return obj.__proto__[property];
     }
module.exports =searchInPrototype