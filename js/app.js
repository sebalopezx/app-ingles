/*
https://www.poliglota.org/post/conoce-la-lista-de-verbos-regulares-en-ingles-y-como-usarlos?utm_term=&utm_campaign=Performance+Max+%7C+Chile&utm_source=adwords&utm_medium=ppc&hsa_acc=5154450239&hsa_cam=16519146636&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV8Q6oe8nV-5tl5Vvfnda76kmHO_k-oMGvAed9ScTvr8WmQH6vrtZYYaArcrEALw_wcB
https://www.poliglota.org/post/lista-completa-de-verbos-irregulares-en-ingles?utm_term=&utm_campaign=Performance+Max+%7C+Chile&utm_source=adwords&utm_medium=ppc&hsa_acc=5154450239&hsa_cam=16519146636&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV9HIoXoKGMKo0Qr9WohxRxqmpgbNUylcNEOexOAK8V1d8UWHfYhwTEaAgagEALw_wcB
*/

// Funciones onmouse over y out  de verbos REGULARES
function regulares(id){
    for(let verbo in listaVerbosRegulares){
        if(id == listaVerbosRegulares[verbo]){
            let indice = listaVerbosRegulares.indexOf(id);
            let traducido = traducirVerbosRegulares[indice];
            let pasado = pasadoVerbosRegulares[indice];
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-pasado`).innerHTML = pasado; 
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = traducido;
            }
        }
    }

function regresarRegular(id){
    for(let verbo in listaVerbosRegulares){
        if(id == listaVerbosRegulares[verbo]){
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-pasado`).innerHTML = ""; 
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = "";
            }
        }
    }

// Funciones onmouse over y out  de verbos IRREGULARES
function irregulares(id){
    for(verbo in listaVerbosIrregulares){
        if(id == listaVerbosIrregulares[verbo]){
            let indice = listaVerbosIrregulares.indexOf(id);
            let simple = pasadoSimpleVerbos[indice];
            let participio = pasadoParticipioVerbos[indice];
            let traducido = traducirVerbosIrregulares[indice];
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-simple`).innerHTML = simple;
            document.getElementById(`${buscarVerbo}-participio`).innerHTML = participio;
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = traducido;
            }
        }
    }

function regresarIrregular(id){
    for(let verbo in listaVerbosIrregulares){
        if(id == listaVerbosIrregulares[verbo]){
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-simple`).innerHTML = "";
            document.getElementById(`${buscarVerbo}-participio`).innerHTML = "";
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = "";
            }
        }
    }

// BUSQUEDA.HTML de verbos en ESP y ENG

function buscarVerbo(){
    let input = document.getElementById("buscarVerbo");
    let palabra = capitalizar(input);

    // Busqueda por verbo en ESPAÑOL y cod. HTML para ESPAÑOL
    for(p in traducirVerbosRegulares){
        if(traducirVerbosRegulares[p] == palabra){

            document.getElementById("tipo").innerHTML = "<br><br><h3>Verbo Regular</h3>";

            let indice = traducirVerbosRegulares.indexOf(palabra);
            let palabraIngles = listaVerbosRegulares[indice];
            let palabraLower = palabra.toLowerCase();
            let textoVerboRegularEspHTML = crearVerboRegularEspHTML(palabra,palabraLower);

            document.getElementById("busqueda").innerHTML = textoVerboRegularEspHTML;
            break;
        }
        else{
            document.getElementById("tipo").innerHTML = "";
            document.getElementById("busqueda").innerHTML = "<br><br><h3>Verbo NO encontrado</h3>";
        }
    }
    // Busqueda por verbo en ESPAÑOL y cod. HTML para ESPAÑOL
    for(p in traducirVerbosIrregulares){
        if(traducirVerbosIrregulares[p] == palabra){

            document.getElementById("tipo").innerHTML = "<br><br><h3>Verbo Irregular</h3>";

            let indice = traducirVerbosIrregulares.indexOf(palabra);
            let palabraLower = palabra.toLowerCase();
            let textoVerboIrregularEspHTML = crearVerboIrregularEspHTML(palabra,palabraLower); 

            document.getElementById("busqueda").innerHTML = textoVerboIrregularEspHTML;
            break;
        }
    }
    // Busqueda por verbo en INGLES y cod. HTML para INGLES
    for(p in listaVerbosRegulares){
        if(listaVerbosRegulares[p] == palabra){

            document.getElementById("tipo").innerHTML = "<br><br><h3>Verbo Regular</h3>";

            let indice = listaVerbosRegulares.indexOf(palabra);
            let palabraLower = palabra.toLowerCase();
            let textoVerboRegularInglesHTML = crearVerboRegularInglesHTML(palabra,palabraLower);

            document.getElementById("busqueda").innerHTML = textoVerboRegularInglesHTML;
            break;
        }
    }
    // Busqueda por verbo en INGLES y cod. HTML para INGLES
    for(p in listaVerbosIrregulares){
        if(listaVerbosIrregulares[p] == palabra){

            document.getElementById("tipo").innerHTML = "<br><br><h3>Verbo Irregular</h3>";

            let palabraLower = palabra.toLowerCase();
            let textoVerboIrregularInglesHTML = crearVerboIrregularInglesHTML(palabra,palabraLower);

            document.getElementById("busqueda").innerHTML = textoVerboIrregularInglesHTML;
            break;
        }
    }
}
function busquedaRegularESP(id){
    for(let verbo in traducirVerbosRegulares){
        if(id == traducirVerbosRegulares[verbo]){
            let indice = traducirVerbosRegulares.indexOf(id);
            let traducido = listaVerbosRegulares[indice];
            let pasado = pasadoVerbosRegulares[indice];
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-pasado`).innerHTML = pasado; 
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = traducido;
        }
    }
}
function regresarRegularESP(id){
    for(let verbo in traducirVerbosRegulares){
        if(id == traducirVerbosRegulares[verbo]){
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-pasado`).innerHTML = ""; 
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = "";
        }
    }
}
function busquedaIrregularesESP(id){
    for(verbo in traducirVerbosIrregulares){
        if(id == traducirVerbosIrregulares[verbo]){
            let indice = traducirVerbosIrregulares.indexOf(id);
            let simple = pasadoSimpleVerbos[indice];
            let participio = pasadoParticipioVerbos[indice];
            let traducido = listaVerbosIrregulares[indice];
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-simple`).innerHTML = simple;
            document.getElementById(`${buscarVerbo}-participio`).innerHTML = participio;
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = traducido;
            }
        }
    }
function regresarIrregularESP(id){
    for(let verbo in traducirVerbosIrregulares){
        if(id == traducirVerbosIrregulares[verbo]){
            let buscarVerbo = id.toLowerCase();

            document.getElementById(`${buscarVerbo}-simple`).innerHTML = "";
            document.getElementById(`${buscarVerbo}-participio`).innerHTML = "";
            document.getElementById(`${buscarVerbo}-traducido`).innerHTML = "";
            }
        }
    }

/* CAPITALIZA el verbo que se ingresa al buscar */ 
const capitalizar =(input)=>{
    let palabra = input.value;
    if(!input.value) return;
    let mayuscula = palabra.substring(0,1).toUpperCase();
    let minuscula = palabra.substring(1).toLowerCase();
    input.value = mayuscula.concat(minuscula);
    return input.value;
}

/* FORMATO HTML  para la creacion de tablas de regulares e irregulares
por medio de BUSQUEDA */

// Crea HTML para busqueda de verbo REGULAR en ESP
const crearVerboRegularEspHTML = (palabraESP,palabraLower)=>{
    let textoVerboRegularEspHTML = `
    <table>
    <tr>
        <th>Español</th>
        <th>Pasado Simple y Participio</th>
        <th>Infinitivo</th>
    </tr>
    <tr>
        <td id="${palabraESP}" onmouseover="busquedaRegularESP(id)" onmouseout="regresarRegularESP(id)" class="infinitivo">${palabraESP}</td>          
        <td id="${palabraLower}-pasado" class="pasado" ></td>
        <td id="${palabraLower}-traducido" class="traducido" ></td> 
    </tr>
    </table>
    `;
    return textoVerboRegularEspHTML;
}
// Crea HTML para busqueda de verbo IRREGULAR en ESP
const crearVerboIrregularEspHTML = (palabraESP,palabraLower)=>{
    let textoVerboIrregularEspHTML = `
    <table>
        <tr>
            <th>Español</th>
            <th>Pasado Simple</th>
            <th>Pasado Participio</th>
            <th>Infinitivo</th>
        </tr> 
        <tr>
            <td id="${palabraESP}" onmouseover="busquedaIrregularesESP(id)" onmouseout="regresarIrregularESP(id)" class="infinitivo">${palabraESP}</td>    
            <td id="${palabraLower}-simple" class="pasado"></td>
            <td id="${palabraLower}-participio" class="pasado"></td>
            <td id="${palabraLower}-traducido" class="traducido"></td>            
        </tr>
    </table>
    `;
    return textoVerboIrregularEspHTML;
}
// Crea HTML para busqueda de verbo REGULAR en ENG
const crearVerboRegularInglesHTML = (palabraING,palabraLower)=>{
    let textoVerboRegularInglesHTML = `
    <table>
    <tr>
        <th>Infinitivo</th>
        <th>Pasado Simple y Participio</th>
        <th>Español</th>
    </tr>
    <tr>
        <td id="${palabraING}" onmouseover="regulares(id)" onmouseout="regresarRegular(id)" class="infinitivo">${palabraING}</td>
        <td id="${palabraLower}-pasado" class="pasado" ></td>
        <td id="${palabraLower}-traducido" class="traducido" ></td>
    </tr>
    </table>
    `;
    return textoVerboRegularInglesHTML;
}
// Crea HTML para busqueda de verbo IRREGULAR en ENG
const crearVerboIrregularInglesHTML = (palabraING,palabraLower)=>{
    let textoVerboIrregularInglesHTML = `
    <table>
       <tr>
           <th>Infinitivo</th>
           <th>Pasado Simple</th>
           <th>Pasado Participio</th>
           <th>Español</th>
       </tr> 
       <tr>
           <td id="${palabraING}" onmouseover="irregulares(id)" onmouseout="regresarIrregular(id)" class="infinitivo">${palabraING}</td>
           <td id="${palabraLower}-simple" class="pasado"></td>
           <td id="${palabraLower}-participio" class="pasado"></td>
           <td id="${palabraLower}-traducido" class="traducido"></td>
       </tr>
   </table>
   `;
   return textoVerboIrregularInglesHTML;
}

/* FORMATO HTML  para la creacion de tablas de regulares e irregulares */

// TABLA DE VERBOS REGULARES
const crearTablaRegular = ()=>{
    let crearTablaRegulares = [`
    <tr>
        <th>Infinitivo</th>
        <th>Pasado Simple y Participio</th>
        <th>Español</th>
    </tr>`];
    for(verbo in listaVerbosRegulares){
        let palabra = listaVerbosRegulares[verbo]; 
        let palabraLower = palabra.toLocaleLowerCase();
        let crearTablaHTML = 
        `<tr>
            <td id="${palabra}" onmouseover="regulares(id)" onmouseout="regresarRegular(id)" class="infinitivo">${palabra}</td>
            <td id="${palabraLower}-pasado" class="pasado" ></td>
            <td id="${palabraLower}-traducido" class="traducido" ></td>
        </tr>
        `;
        crearTablaRegulares += crearTablaHTML;
    document.getElementById("crearTabla").innerHTML = crearTablaRegulares;
    }
};

// TABLA DE VERBOS IRREGULARES
const crearTablaIrregular = ()=>{
    let crearTablaIrregulares = [
    `<tr>
        <th>Infinitivo</th>
        <th>Pasado Simple</th>
        <th>Pasado Participio</th>
        <th>Español</th>
    </tr>`];
    for(verbo in listaVerbosIrregulares){
        let palabra = listaVerbosIrregulares[verbo]; 
        let palabraLower = palabra.toLocaleLowerCase();
        let crearTablaHTML = 
        `<tr>
            <td id="${palabra}" onmouseover="irregulares(id)" onmouseout="regresarIrregular(id)" class="infinitivo">${palabra}</td>
            <td id="${palabraLower}-simple" class="pasado"></td>
            <td id="${palabraLower}-participio" class="pasado"></td>
            <td id="${palabraLower}-traducido" class="traducido"></td>
        </tr>
        `;
        crearTablaIrregulares += crearTablaHTML;
    document.getElementById("crearTabla").innerHTML = crearTablaIrregulares;
    }
} 


// ONLOAD para indicar el link donde se esta posicionado (pagina)
const link = (link)=>{
    document.getElementById(link).style.color = "red";
    document.getElementById(link).style.padding = "10px 20px";
    document.getElementById(link).style.boxShadow = "0px 0px 10px 4px aqua";
    document.getElementById(link).style.borderRadius = "20px"; 
    document.getElementById(link).style.transition = "1s"; 
    if(link == "link-home"){
        document.getElementById(link).innerHTML = "<h1>>> English App <<</h1>"
    }
    else if(link == "link-busqueda"){
        document.getElementById(link).innerHTML = "> Busqueda <"
    }
    else if(link == "link-regulares"){
        document.getElementById(link).innerHTML = "> Regulares <"
    }
    else if(link == "link-irregulares"){
        document.getElementById(link).innerHTML = "> Irregulares <"
    }

}

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