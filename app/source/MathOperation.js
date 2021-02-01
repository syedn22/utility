export default class MathOperation {
  // GCD or HCF
  findGCD = (a, b) => {
    if (a == 0) return b;
    if (b == 0) return a;
    if (a == b) return a;
    if (a > b) return this.findGCD(a - b, b);
    return this.findGCD(a, b - a);
  };

  findLCM = (a, b) => {
    return (a * b) / this.findGCD(a, b);
  };

  findStandardDeviation = (numbers) => {
    return Math.sqrt(this.findVariance(numbers));
  };

  findVariance = (numbers) => {
    let sum = 0;
    let mean = 0;
    let variance = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.abs(numbers[i]);
    }
    mean = sum / numbers.length;
    for (let i = 0; i < numbers.length; i++) {
      variance += Math.pow(numbers[i] - mean, 2);
    }
    return variance / numbers.length;
  };
}
