class NumsArr {
  constructor(min, max, count) {
    this.min = min;
    this.max = max;
    this.count = count;
    this.nums = this.getNums();
  };

  getNums(){
    let nums = [];
    while (nums.length < this.count) {
      nums.push(Math.floor(Math.random() * (Number(this.max) - Number(this.min) + 1)) + Number(this.min))
    }
    return nums;
  };

  getMean(){
    let total = 0;
    this.nums.forEach(el => {
      total += el;
    });
    this.mean = (total / this.nums.length).toFixed();
    return this.mean;
  };
  getMedian() {
    this.nums.sort();
    if(this.nums.length % 2 === 0) {
      return (this.nums[this.nums.length / 2 - 1] + this.nums[this.nums.length / 2]) / 2;
    }else{
      return this.nums[(this.nums.length - 1) / 2];
    }
  };
  getMode() {
    let modes = [];
    let maxIndex = 0, count = [], i;
    this.nums.forEach(el => {
      count[el] = (count[el] || 0) + 1;
      if (count[el] > maxIndex) {
        maxIndex = count[el];
      }
    });

    for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
            modes.push(Number(i));
          }
      }
    return modes;
  };
  getStdOtclone(){
    let mean = this.getMean();
    let sum = 0;
    this.nums.forEach(el => {
      let n = (el - mean)**2;
      sum += n;
    });
    console.log(sum)
    return Math.sqrt(sum / this.nums.length).toFixed(2);
  };
};

export default NumsArr
