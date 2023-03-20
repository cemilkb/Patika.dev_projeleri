let add = document.getElementById("liveToastBtn");
let inp = document.getElementById("task");
let liste = document.getElementById("list");


add.addEventListener(`click`, ekle);

inp.addEventListener("keyup",function(e){
  if(e.keyCode == 13){
    ekle();
  }
});

function ekle() {

  if (inp.value != "") {
    let gorev = document.createElement("li");
    let sil = document.createElement("div");
    let tamamla = document.createElement("div");
    sil.classList.add("sil");
    tamamla.classList.add("isaretle");
    sil.innerText = "Sil";
    tamamla.innerText = "Tamamlandı";
    gorev.innerHTML = inp.value;
    liste.appendChild(gorev);
    gorev.appendChild(sil);
    gorev.appendChild(tamamla);
    inp.value = ("");

    tamamla.addEventListener("click", function(){
      gorev.classList.toggle("mavi");
    });
    sil.addEventListener("click", function(){
      liste.removeChild(gorev);
    });

  }else{
    let tle = document.getElementById("liveToast")
    let toast = new bootstrap.Toast(tle)

    toast.show()
  }

}