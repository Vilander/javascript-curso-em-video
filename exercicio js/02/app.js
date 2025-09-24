function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res= document.getElementById('res')
    if(fano.value.length == 0 || fano.value>ano){
        alert('[ERRO] Verifique os dados novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano- Number(fano.value)
        let genero=''
        let img= document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src','foto-bebezo.png')
            }else if(idade>=10 && idade<18){
                //adolescente
                img.setAttribute('src','foto-adolescento.png')
            }else if(idade>=18 && idade<65){
                //adulto
                img.setAttribute('src','foto-adulto.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso.png')
            }

        }else if (fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src','foto-bebeza.png')
            }else if(idade>=10 && idade<18){
                //adolescente
                img.setAttribute('src','foto-adolescenta.png')
            }else if(idade>=18 && idade<65){
                //adulto
                img.setAttribute('src','foto-adulta.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos...`
        res.appendChild(img)
    }
}