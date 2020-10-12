
//tugas hari
function myFunction() {
  var hari, text;

  hari = document.getElementById("numb").value;  

 if (hari === "senin") {
  text = "Besok adalah hari selasa";
 } else if (hari === "selasa") {
  text = "Besok adalah hari rabu";
 } else if (hari === "rabu") {
  text = "Besok adalah hari kamis";
 } else if (hari === "kamis") {
  text = "Besok adalah hari jum'at";
 } else if (hari === "jum'at") {
  text = "Besok adalah hari sabtu";
 } else if (hari === "sabtu") {
  text = "Besok adalah hari minggu";
 } else if (hari === "minggu") {
  text = "Besok adalah hari senin";
 } else {
  text = "Bukan nama hari";
 }
  document.getElementById("demo").innerHTML = text;
}

  //tugas Nilai
  function myFunction1() {
    var niai, text;
  
    nilai = document.getElementById("numb1").value;
    

   if (nilai >= 90 && nilai <=100) {
    text = "Nilai A";
   } else if (nilai >= 75 && nilai <=89) {
    text = "Nilai B";
   } else if (nilai >= 60  && nilai <=74) {
    text = "Nilai C";
   } else if (nilai >= 50 && nilai <=59) {
    text = "Nilai D";
   } else if (nilai <= 50 ) {
    text = "Tidak Lulus";
   } else {
    text = "Coba lagi";
   }
    document.getElementById("demo1").innerHTML = text;
  }

  //tugas Ganjil
  function myFunction2() {
    var angka ;
    var text = "";

    angka = document.getElementById("numb2").value;
    

    for(var i = 1; i <= angka; i++){
      if((i%2)===1){
    text += "<br>Angka Ganjil " + i;
    i++;
      }
   } 
    document.getElementById("demo2").innerHTML = text;
  }
  
  //tugas Genap
  function myFunction3() {
    var angka1 ;
    var text = "";

    angka1 = document.getElementById("numb3").value;
    var i = 2
   
    while (i<angka1){
    text += "<br>Angka Genap " + i;
    i+=2;
      } 
    document.getElementById("demo3").innerHTML = text;
  }