function hitungLuas (){
    alas=parseFloat(document.getElementById("alas").value)
    tinggi=parseFloat(document.getElementById("tinggi").value)

    luas = (alas*tinggi)*0.5
    document.getElementById("luas").value=luas
}

function hitungKeliling (){
    a=parseFloat(document.getElementById("a").value)
    b=parseFloat(document.getElementById("b").value)
    c=parseFloat(document.getElementById("c").value)

    keliling =(a+b+c)
    document.getElementById("keliling").value=keliling
}

function reset (){
    document.getElementById("alas").value = ""
    document.getElementById("tinggi").value = ""
    document.getElementById("a").value = ""
    document.getElementById("b").value = ""
    document.getElementById("c").value = ""
    document.getElementById("luas").value = ""
    document.getElementById("keliling").value = ""
}

function popup (){

}