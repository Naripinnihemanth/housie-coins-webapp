function rool() {
  let a = Math.floor(Math.random() * 90) + 1;
  return a;
}
let b = [];
function cheak1(x) {
  if (b.length < 90) {
    for (let i = 0; i <= b.length; i++) {
      if (b[i] == x) {
        t = true;
        break;
      } else {
        t = false;
      }
    }
    if (t) {
      return true;
    } else {
      b.push(x);
      console.log(b);
      return false;
    }
  } else {
    return "ovr";
  }
}

function click1() {
  let r = rool();
  let w = cheak1(r);
  if (w == "ovr") {
    over();
  } else {
    if (w) {
      click1();
    } else {
      document.getElementById("hed1").innerHTML = r;
    }
  }
}
function reset() {
  b = [0];
  document.getElementById("hed1").innerHTML = "RESETED";
  document.getElementById("btn1").disabled = false;
}
function over() {
  b = [0];
  document.getElementById("hed1").innerHTML = "90 Numbers are completed";
  document.getElementById("btn1").disabled = true;
}
