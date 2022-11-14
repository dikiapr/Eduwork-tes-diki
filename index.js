//SOAL NOMOR 1
function test1(int) {
  let angka = 1;
  let faktor = 1;
  while (angka <= int) {
    faktor = faktor * angka;
    angka = angka + 1;
  }
  console.log(faktor);
}

test1(4);
test1(8);

//SOAL NOMOR 2
const ubahHuruf = (huruf) => {
  const currentStr = huruf;
  let newStr = "";
  for (let i = huruf.length - 1; i >= 0; i--) {
    newStr = newStr + currentStr[i];
  }
  return newStr;
};
console.log(ubahHuruf("abcde"));

//SOAL NOMOR 4
function test4() {
  let a = 3;
  let b = 7;
  console.log("a awal = " + a);
  console.log("b awal = " + b);

  a -= b; // a = a - b = -4
  b += a; // b = b + a = 3
  a = b - a; // 7

  console.log("a final = " + a);
  console.log("b final = " + b);
}

test4();

//SOAL NOMOR 5
function test5(int) {
  if (int == 4) {
    console.log("empat");
  } else if (int == 20) {
    console.log("dua puluh");
  } else if (int == 39) {
    console.log("tiga puluh sembilan");
  } else if (int > 0 && int <= 100) {
    console.log(int);
  } else {
    console.log("silahkan masukkan bilangan 1-100");
  }
}

test5(20);

//SOAL NOMOR 6
const data = [1, 4, 7, 9, 12];

const test6 = data.filter((item) => item >= 2 && item <= 15);
console.log(test6);

//SOAL NOMOR 7
const dataArr = [1, 4, 7, 9, 12];

const test7 = dataArr.filter((item) => item >= 2 && item <= 15).length;
console.log(test7);

//SOAL NOMOR 8
for (let int = 1; int <= 15; int++) {
  if (int % 3 === 0 && int % 5 !== 0) {
    console.log("Edu");
  } else if (int % 5 === 0 && int % 3 !== 0) {
    console.log("Work");
  } else if (int % 3 === 0 && int % 5 === 0) {
    console.log("Eduwork");
  } else {
    console.log(int);
  }
}

//SOAL NOMOR 9
const arrLow = [4, 2, 6, 88, 3, 11];
for (let i = 0; i < arrLow.length; i++) {
  if (i == 0) {
    var nilaiLow = arrLow[i];
  } else {
    if (arrLow[i] < nilaiLow) {
      nilaiLow = arrLow[i];
    }
  }
}
console.log(nilaiLow);

const arrHigh = [4, 2, 6, 88, 3, 11];
for (let i = 0; i < arrHigh.length; i++) {
  if (i == 0) {
    var nilaiHigh = arrHigh[i];
  } else {
    if (arrHigh[i] > nilaiHigh) {
      nilaiHigh = arrHigh[i];
    }
  }
}
console.log(nilaiHigh);

// SOAL NOMOR 10
const tahun = (tahun) => {
  if (tahun % 4 === 0) {
    console.log(tahun + " adalah tahun kabisat");
  } else {
    console.log(tahun + " bukan tahun kabisat");
  }
};

tahun(2021);
tahun(2024);
