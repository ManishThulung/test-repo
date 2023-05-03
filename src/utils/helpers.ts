export const sortArrayOfObjectsByString = (arrayData: any[], key: string) => {
  const sortedArray = arrayData.sort((a: any, b: any) => {
    const nameA = a[key].toUpperCase(); // ignore upper and lowercase
    const nameB = b[key].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    // names must be equal
    return 0;
  });
  return sortedArray;
};
