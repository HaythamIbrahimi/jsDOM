

var plus = document.querySelectorAll('.plus')
var minus = document.querySelectorAll('.minus')


for (let i = 0; i < plus.length; i++) {
   plus[i].addEventListener('click',handleClick)
     
}

for (let i = 0; i < minus.length; i++) {
     minus[i].addEventListener('click',handleClick)
     
}


function handleClick(event){
     var specificButton = event.target
//     console.log(specificButton)
     var div = specificButton.parentElement
     var td = div.parentElement
     var tr = td.parentElement
     var tab= document.querySelectorAll('.price')

     var p = div.querySelector('p')
     var price = tr.querySelector('.price')
     var unitPrice=tr.querySelector('.unitPrice')
     var tot1= Number(price.innerHTML)
     var som = 0
     
     var quantity = Number(p.innerHTML)
     if(specificButton.className==="minus"&&quantity>0){
          quantity--
     


     } if (specificButton.className==="plus"){

          quantity++
         
     }
     p.innerHTML=quantity
     tot1 = quantity*Number(unitPrice.innerHTML)
     price.innerHTML=tot1
     
     


     for (var i = 0; i < tab.length; i++) {
     
      som +=Number(tab[i].innerHTML)

     }
     document.getElementById('total').innerHTML=som
  
     

}
var like = document.querySelectorAll('.like')


for (let i = 0; i < like.length; i++) {
   like[i].addEventListener('click',BtnLike)
     
}
function BtnLike(event){
     var Btn=event.target
     if(  Btn.style.color == "red")
     {Btn.style.color = "#424242"
     
        
     }
     else{     Btn.style.color = "red"
}


}