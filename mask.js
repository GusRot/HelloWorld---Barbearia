/* Máscaras ER */
function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function cep(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{3})$/, "$1-$2"); //Coloca hífen entre o quinto e sexto dígitos
    return v;
}

function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id("telefone").onkeyup = function () {
        mascara(this, mtel);
    };

    id("cep").onkeyup = function () {
        mascara(this, cep);
    };
};

function submitForms() {
    const telephone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    let hour = setHour();
    let receiveNews = "Não quero receber notícias";
    const observation = document.getElementById("message").value;
    const news = document.getElementById("news");

    if (news.checked) {
        receiveNews = "Quero Receber notícias";
    }

    alert(` 
        Obrigado pelo contato! Recebemos as informações abaixo: 
        Nome: ${username.value}
        Email: ${email.value}
        Tel: ${telephone.value}
        Horário: ${hour.innerHTML}
        ${receiveNews}
        ${observation}
    `);

    function setHour() {
        for (let i = 1; i <= 3; i++) {
            const option = document.getElementById("hour" + i);
            if (option.checked != 0) {
                const element = option;
                return element.previousElementSibling;
            }
        }
    }
}
