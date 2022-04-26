function filterApiData(data, keys) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    let containsAllKeys = true;

    for (let x = 0; x < keys.length; x++) {
      if (!Object.keys(obj).includes(keys[x])) {
        containsAllKeys = false;
      }
    }

    if (containsAllKeys) {
      result.push(obj);
    }
  }

  return result;
}
