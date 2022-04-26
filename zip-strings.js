function zipStrings(strA, strB) {
  strA = strA.split("");
  strB = strB.toString().split("");
  let newString = "";

  if (strA.length < strB.length) {
    for (let i = 0; i < strB.length; i++) {
      if (strA[i] == undefined) {
        strA[i] = "";
      }
      if (strB[i] == undefined) {
        strB[i] = "";
      }
      newString += strA[i] + strB[i];
    }
  } else {
    for (let i = 0; i < strA.length; i++) {
      if (strA[i] == undefined) {
        strA[i] = "";
      }
      if (strB[i] == undefined) {
        strB[i] = "";
      }
      newString += strA[i] + strB[i];
    }
  }
  return newString;
}
