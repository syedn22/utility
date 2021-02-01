export default class SetOperations {
  union = (SetA, SetB) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < SetA.length; i++) {
      if (!result.includes(SetA[i])) {
        result[count] = SetA[i];
        count++;
      }
    }
    for (let i = 0; i < SetB.length; i++) {
      if (!result.includes(SetB[i])) {
        result[count] = SetB[i];
        count++;
      }
    }
    return result ? result.join(",") : null;
  };

  intersection = (SetA, SetB) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < SetA.length; i++)
      if (SetB.includes(SetA[i]) && !result.includes(SetA[i])) {
        result[count] = SetA[i];
        count++;
      }
    return result ? result.join(",") : null;
  };

  difference = (SetA, SetB) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < SetA.length; i++)
      if (!SetB.includes(SetA[i])) {
        result[count] = SetA[i];
        count++;
      }
    return result ? result.join(",") : null;
  };
}
