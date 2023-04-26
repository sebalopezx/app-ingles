const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    const meses = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"];
    const dias = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto =  `${diaSemana}, ${dia}<sup>th</sup> ${mes} ${año}`;
    
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}
const formatoHora = (hora) =>{
    if(hora < 10)
    hora = "0" + hora;
    return hora;
}
setInterval(mostrarReloj,1000);

// CAMBIO DE COLOR INSTRUCCION "GIF"
const cambiarColorInstruccion = ()=>{
    let elemento = document.getElementById("contenedor_instruccion");
    if(elemento.style.background == "slateblue"){
        elemento.style.background = "aqua";
        elemento.style.color = "black";
    }else{
        elemento.style.background = "slateblue";  
        elemento.style.color = "whitesmoke";
    }  
};
// MOVIMIENTO INSTRUCCION "GIF"
setInterval(cambiarColorInstruccion,1000);
const moverFlecha = ()=>{
    let gif = document.getElementById("gif_click");
    if(gif.style.top == "-15px" && gif.style.right == "-50px"){
        gif.style.top = "25px";
        gif.style.right = "0px";
    }else{
        gif.style.top = "-15px";
        gif.style.right = "-50px";
    }
}
setInterval(moverFlecha,1000);