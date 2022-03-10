/* Code soal nomer 1
class user{
  var id;
  var username;
  var password;
}

class userservice{
  user[] users = [];

  user[] getallusers(){
    return users;
  }

  user getuserbyid(userid){
    return users.filter(userid)
  }
}

*/

/*
Problem 1 - Analysis

Berapa banyak kekurangan dalam penulisan kode tersebut?
Ans => Dari analisa saya terdapat 3 kekurangan dalam penulisan kode tersebut

Bagaimana saja terjadi kekurangan tersebut?
Ans => 
1. Penamaan class
2. Pendeklarasian property dalam class
3. Penambahan kode yang tidak perlu pada saat delarasi property dan method

Tuliskan alasan dari tiap kekurangan tersebut?
Ans =>
1. Penamaan class seharusnya huruf pertama ditulis dengan huruf kapital dan jika class terdiri dari 2 kata, huruf pertama kata kedua ditulis huruf kapital juga. Jadi penulisan class yang benar adalah User dan UserService.
2. Property dalam class harus dideklarasikan di dalam method constructor.
3. Di class UserService, kita tidak perlu menambah kode `user[]` di depan variabel dan method

*/

/*
Problem 2 - Rewrite
*/

class Kendaraan {
  constructor() {
    this.totalRoda = 0;
    this.kecepatanPerJam = 0;
  }
}

class Mobil extends Kendaraan {
  berjalan() {
    this.tambahKecepatan(10);
  }
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru;
  }
}

const mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

const mobilLamban = new Mobil();
mobilLamban.berjalan();
