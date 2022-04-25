function filterApiData(apiData, mandatoryKeys) {
  if (mandatoryKeys.length === 1) {
    const filtered = apiData.filter(
      (filterByKey) => filterByKey[mandatoryKeys]
    );
    return filtered;
  }
  if (mandatoryKeys.length > 1) {
    const filtered = apiData.filter(
      (filterByKey) => filterByKey[mandatoryKeys[0]]
    );
    return filtered;
  }
}
