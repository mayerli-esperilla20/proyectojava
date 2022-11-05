//triangulo
let triangulo=document.getElementById("botondice")
let hallartriangulo=document.getElementById("resultado")

triangulo.addEventListener("click", solucióntriangulo)

function solucióntriangulo(){
    let N1=parseFloat(document.getElementById("N1").value)
    let N2=parseFloat(document.getElementById("N2").value)
    let area=N1*N2/2
    hallartriangulo.innerHTML=`El área del trinagulo es: ${area} cm`
}

//paralelogramo
let paralelogramo=document.getElementById("botoncito")
let hallarparalelogramo=document.getElementById("otroresultado")

paralelogramo.addEventListener("click", soluciónparalelogramo)

function soluciónparalelogramo(){
    let N3=parseFloat(document.getElementById("N3").value)
    let N4=parseFloat(document.getElementById("N4").value)
    let area=N3*N4
    hallarparalelogramo.innerHTML=`El área del paralelogramo es: ${area} cm`
}

//rectángulo
let rectángulo=document.getElementById("botondelam")
let hallarrectángulo=document.getElementById("resultadito")

rectángulo.addEventListener("click", soluciónrectángulo)

function soluciónrectángulo(){
    let N5=parseFloat(document.getElementById("N5").value)
    let N6=parseFloat(document.getElementById("N6").value)
    let area=N5*N6
    hallarrectángulo.innerHTML=`El área del rectángulo es: ${area} cm`
}

//cuadrado
let cuadrado=document.getElementById("botonpuem")
let hallarcuadrado=document.getElementById("resultadote")

cuadrado.addEventListener("click", solucióncuadrado)

function solucióncuadrado(){
    let N7=parseFloat(document.getElementById("N7").value)
    let N8=parseFloat(document.getElementById("N8").value)
    let area=N7*N8
    hallarcuadrado.innerHTML=`El área del cuadrado es: ${area} cm`
}

//rombo
let rombo=document.getElementById("botonyyo")
let hallarrombo=document.getElementById("resultade")

rombo.addEventListener("click", soluciónrombo)

function soluciónrombo(){
    let N9=parseFloat(document.getElementById("N9").value)
    let N10=parseFloat(document.getElementById("N10").value)
    let area=N9*N10/2
    hallarrombo.innerHTML=`El área del rombo es: ${area} cm`
}

//cometa
let cometa=document.getElementById("botonytu")
let hallarcometa=document.getElementById("resultadiin")

cometa.addEventListener("click", solucióncometa)

function solucióncometa(){
    let N11=parseFloat(document.getElementById("N11").value)
    let N12=parseFloat(document.getElementById("N12").value)
    let area=N11*N12/2
    hallarcometa.innerHTML=`El área del cometa es: ${area} cm`
}

//trapecio
let trapecio=document.getElementById("botonpuee")
let hallartrapecio=document.getElementById("resultadaso")

trapecio.addEventListener("click", solucióntrapecio)

function solucióntrapecio(){
    let N13=parseFloat(document.getElementById("N13").value)
    let N14=parseFloat(document.getElementById("N14").value)
    let N15=parseFloat(document.getElementById("N15").value)
    let area=(N13+N14)*N15/2
    hallartrapecio.innerHTML=`El área del trapecio es: ${area} cm`
}

//círculo
let círculo=document.getElementById("botonpuehijito")
let hallarcírculo=document.getElementById("resultadason")

círculo.addEventListener("click", solucióncírculo)

function solucióncírculo(){
    let N16=parseFloat(document.getElementById("N16").value)
    let area= Math.PI*Math.pow(N16,2)
    hallarcírculo.innerHTML=`El área del círculo es: ${area} cm`
}
