function comparisonInArr(datas){
  return datas.every(function(data) {
     return (data === datas[0])
})
}
module.exports = comparisonInArr;
