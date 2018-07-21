function demo() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(()=>{
        const obj1 = {a:1};
        const obj2 = {b:2};
        const obj3 = {c:3};
        const obj4 = {d:4};
        const result = {...obj1, ...obj2, ...obj3, ...obj4};
        resolve(result);
      }, 1000)
    } catch (err) {
      reject(err);
    }
  })
}

export default demo;