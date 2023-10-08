const prompt = require('prompt-sync')({sigint: true});


const num1 = prompt('Akar pangkat 2 dari: ');

// Kondisi bilangan genap
if(num1 % 2 == 0){

    (console.log(Math.sqrt(num1)))

// Kondisi bilangan ganjil
}else if(num1 % 2 == 1 ){
    console.log("Tidak bisa input bilangan Ganjil!")

// Kondisi bilangan negatif
}else if (num1 < 0){
    console.log("Tidak bisa input bilangan Negatif!")

}