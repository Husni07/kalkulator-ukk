let textbox = document.getElementById("textbox");

function angka(isi) {
  if (
    textbox.value == "" &&
    (isi == "+" || isi == "-" || isi == "×" || isi == "÷")
  ) {
    return;
  }

  let text_awal = textbox.value;
  let text_akhir = text_awal[text_awal.length - 1];

  if (
    (isi == "+" || isi == "-" || isi == "×" || isi == "÷") &&
    (text_akhir == "+" ||
      text_akhir == "-" ||
      text_akhir == "÷" ||
      text_akhir == "×")
  ) {
    console.log(text_awal[text_awal.length - 1]);
    textbox.value = text_awal.substring(0, text_awal.length - 1) + isi;
    return;
  }

  if (
    textbox.value == "error" ||
    textbox.value == "∞" ||
    textbox.value == "00" ||
    textbox.value == ","
  ) {
    textbox.value = "";
  }
  textbox.value += isi;
}
let text_awal = textbox.value;
let text_akhir = text_awal[text_awal.length - 1];
console.log(text_akhir);

function hitung() {
  if (textbox.value !== "") {
    let hasil;
    try {
      hasil = eval(
        textbox.value.replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, ".")
      );
      if (hasil == "Infinity") {
        hasil = "∞";
      }
    } catch (e) {
      hasil = "error";
    }
    textbox.value = hasil;
  }
}

function ac() {
  textbox.value = "";
}

function c() {
  textbox.value = textbox.value.substring(0, textbox.value.length - 1);
}

function persen() {
  if (textbox.value !== "") {
    textbox.value = eval(textbox.value / 100);
  }
}

function sin() {
  if (textbox.value !== "") {
    textbox.value = Math.sin(textbox.value);
  }
}
function cos() {
  if (textbox.value !== "") {
    textbox.value = Math.cos(textbox.value);
  }
}
function tan() {
  if (textbox.value !== "") {
    textbox.value = Math.tan(textbox.value);
  }
}
function log() {
  if (textbox.value !== "") {
    textbox.value = Math.log(textbox.value);
  }
}
function akar() {
  if (textbox.value !== "") {
    textbox.value = Math.sqrt(textbox.value);
  }
}

textbox.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    hitung();
  }
});