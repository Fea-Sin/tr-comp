import IsArray from 'lodash/isArray';

/**
 * 数组包含元素则删除
 * 数组不包含元素则插入
 */
function changeInOut(arr, value) {
  if (IsArray(arr) && value) {
    if (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1);
    } else {
      arr.push(value);
    }
    return arr;
  }
  return [];
}

function changeInOutArr(arr, valueArr) {
  if (IsArray(arr) && IsArray(valueArr)) {
    const retArr = valueArr.reduce((ret, current) => changeInOut(ret, current), arr);

    return retArr;
  }
  return [];
}

export { changeInOut, changeInOutArr };
