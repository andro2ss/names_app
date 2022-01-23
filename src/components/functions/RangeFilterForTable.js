function RangeFilterForTable(array, range) {
  let step = array.length / 100;
  let minIndex = Math.floor(range[0] * step);
  let maxIndex = Math.ceil(range[1] * step) - 1;
  return [minIndex, maxIndex];
}
export default RangeFilterForTable;
