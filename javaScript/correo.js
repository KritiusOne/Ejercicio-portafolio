const nombre = document.querySelector(".name");
const email = document.querySelector(".email");
const button = document.querySelector("contact__form__button");
button.addEventListener("submit",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        alert(error[1]);
    }else{
        alert(`!MUCHAS GRACIAS¡ ${eror[1]}`);
    }
})
const validarCampos = ()=>{
    let error = [false, `todo bien, todo correcto`];
    if(nombre.value ===""){
        error = [true, `El nombre está vacio`];
        return error;
    }else if(nombre.value.length < 3){
        error = [true, `el nombre es muy corto`];
        return error;
    }
    if(email.value === ""){
        error = [true, `El email está vacio`];
        return error;
    }else if(email.value.length < 5 || email.indexOf("@") === -1 || email.indexOf(".") === -1 ){
        error = [true,`el email es invalido`];
    }
    return error;
}