let cont = 0
let items = document.querySelectorAll('.but-item')
//順序定義
//console.log(cont,Number(items[cont].getAttribute('value')))
  

// var openWin = function(){
//     var winRef = window.open("url","_blank");
//     $.ajax({
//         type: '',
//         url: '',
//         data: '',
//         success:function(json){
//             winRef.location = "新的url";
//         }
//     });
// };

function buton1(){
    if(cont==document.activeElement.getAttribute('value') ){
        
        // var winRef = window.open('https://yoman666.github.io/USR02/', '_blank', 'height=800,width=1050');
        // this.getLink(ID).then(res => (winRef.location = res));

        // var winRef = window.open('', '_blank');
        // winRef.location="https://yoman666.github.io/USR02/"

        window.open(' https://yoman666.github.io/USR02/ ', '新視窗的名稱');
        // unclick="window.open('https://yoman666.github.io/USR02/')"
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton2(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新視窗的名');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton3(){

    if(cont==document.activeElement.getAttribute('value') ){
        
        window.open(' https://yoman666.github.io/USR02/ ', '新視窗的');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton4(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新視窗');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton5(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新視');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton6(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton7(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新窗');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
function buton8(){

    if(cont==document.activeElement.getAttribute('value') ){
        window.open(' https://yoman666.github.io/USR02/ ', '新窗名稱');
        cont+=1
        items[cont].removeAttribute('disabled')
        console.log(cont,Number(items[cont].getAttribute('value')))
    }
}
// function buton9(){
//     if(cont==document.activeElement.getAttribute('value') ){
//         cont+=1
//         console.log(cont)
//     }
//     console.log('end')
// }
   

