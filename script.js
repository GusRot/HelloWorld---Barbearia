function submitForms() {
    const telephone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    let hour = setHour();
    let receiveNews = "Não quero receber notícias";
    const observation = document.getElementById('message').value;
    const news = document.getElementById('news');


    if(news.checked) {
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
    `)

    function setHour() {
        for( let i =1; i <= 3; i++) {
            const option = document.getElementById(('hour'+ i));
            if(option.checked != 0) {
                const element = option;
                return element.previousElementSibling;
            }
        }
    }
}

