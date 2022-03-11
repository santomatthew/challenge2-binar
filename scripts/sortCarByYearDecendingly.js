function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length; i++) {
    for (let j = 1; j < result.length; j++) {
      if (result[j - 1].year < result[j].year) {
        const temp = result[j - 1];
        result[j - 1] = result[j];
        result[j] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
