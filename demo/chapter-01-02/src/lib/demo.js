function demo() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(()=>{
        const obj1 = {a:1};
        const obj2 = {b:2};
        const result = {...obj1, ...obj2};
        resolve(result);
      }, 1000)
    } catch (err) {
      reject(err);
    }
  })
}

export default demo;