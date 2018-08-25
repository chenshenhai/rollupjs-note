import demo from './lib/demo';

export default {
  init() {
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    console.log([...arr1, ...arr2]);

    async function initDemo () {
      let data = await demo();
      console.log(data);
    }

    initDemo();
  }
}

