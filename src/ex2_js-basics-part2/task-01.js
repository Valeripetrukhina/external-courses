function argumentType(value) {
  if (Number.isNaN(value)) {
    return "undefined";
  } else if (typeof value !== "number" && typeof value !== "string") {
    return "undefined";
  }
  return typeof value;
}
module.exports = argumentType;
