let btn1 = document.querySelector(`[data-input1]`);
let btn2 = document.querySelector(`[data-input2]`);

let values = [16, 20, 56, 28, 3, 64, 12, 49, 36, 69];

function min() {
  //   debugger;
  // let output1 = +document.getElementById(`result1`).value;
  if (values.length) {
    let minValue = Math.min(...values);
    document.getElementById(`result1`).textContent = `= ` + minValue;
  }
}

function max() {
//   let output2 = +document.getElementById(`result2`).value;
  if (values.length) {
    let maxValue = Math.max(...values);
    document.getElementById(`result2`).textContent = `= ` + maxValue;
  }
}
btn1.addEventListener(`click`, min);
btn2.addEventListener(`click`, max);
