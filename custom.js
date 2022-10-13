var sayac = 0;
var btnEkle=document.getElementById("inp9")
var listele = document.getElementById("listele")
let data = fetch("https://getir-assignment-app-server.herokuapp.com/api/products")
    .then(response => response.json())
    .then(veri => {
        veri.forEach(element => {

            if (sayac < 30) {
                sayac++;
                listele.innerHTML += `<div class="box"> <ul>
                <li><h6 class="etiket">Ürün Adı:</h6>${element.name} 
                <li><h6 class="etiket">Ürün Fiyatı:</h6>${element.price}
                <li><h6 class="etiket">Açıklama:</h6>${element.description}
                <li><h6 class="etiket">Ürün Türü:</h6>${element.slug}
                <li><h6 class="etiket">Ürün Numarası:</h6>${element.added}
                <li><h6 class="etiket">Üretici Firma:</h6>${element.manufacturer}
                <li><h6 class="etiket">Ürün Tipi:</h6>${element.itemType}
                <li><h6 class="etiket">Etiketler:</h6>${element.tags}
                
                </ul> </div>`;
            }
        }
        )
    }
    );
    btnEkle.onclick=function()
    {
        var name=document.getElementById("inp1").value;
        var price=document.getElementById("inp2").value;
        var comment=document.getElementById("inp3").value;
        var kind=document.getElementById("inp4").value;
        var no=document.getElementById("inp5").value;
        var producer=document.getElementById("inp6").value;
        var type=document.getElementById("inp7").value;
        var tag=document.getElementById("inp8").value;
        listele.innerHTML += `<div class="box"> <ul>
        <li><h6 class="etiket">Ürün Adı:</h6>${name}
        <li><h6 class="etiket">Ürün Fiyatı:</h6>${price}
                <li><h6 class="etiket">Açıklama:</h6>${comment}
                <li><h6 class="etiket">Ürün Türü:</h6>${kind}
                <li><h6 class="etiket">Ürün Numarası:</h6>${no}
                <li><h6 class="etiket">Üretici Firma:</h6>${producer}
                <li><h6 class="etiket">Ürün Tipi:</h6>${type}
                <li><h6 class="etiket">Etiketler:</h6>${tag}
        </ul> </div>`;
        inp1.value="";
        inp2.value="";
        inp3.value="";
        inp4.value="";
        inp5.value="";
        inp6.value="";
        inp7.value="";
        inp8.value="";

    }
