function argumentType(value) {
  if (Number.isNaN(value)) {
    return("undefined");
  } else if (typeof value === 'number') {
    return("number");
  } else if (typeof value === 'string') {
    return("string");
  } 
    return(undefined);
  
}
module.exports = argumentType;
