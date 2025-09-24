function fnCarregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    // let hora = 20
   

    msg.innerHTML=`AGORA SÃO: ${hora} hrs`

    if(hora>=0 && hora<12){
        //Bom dia
        img.src="manha.png"
        document.body.style.background='#eee7dc'
    }else if(hora>=12 && hora<18){
        //Boa Tarde
        img.src="tarde.png"
        document.body.style.background='#25aae3'
    }else{
        //Boa noite
        img.src="noite.png"
        document.body.style.background='#223442'
    }
}