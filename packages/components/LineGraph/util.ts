/** 将字符串长度转换为数值，英文字母长度记为1，中文记为2，符号记为0.5 */
export const computeStringShowLength = (str: string, maxLength = 10) => {
  let length = 0;
  let maxIndex = str.length - 1;
  for (let i = 0; i < str.length; i += 1) {
    const asc = str.charCodeAt(i);
    length += ((asc >= 0 && asc <= 128) // 英文字母或符号
      ? ((asc >= 48 && asc <= 57) || (asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) // 字母或数字
        ? 1.5 : 0.8
      : 2); // 中文
    if (maxLength <= length) { maxIndex = i; break; }
  }
  return { length, maxIndex };
};
