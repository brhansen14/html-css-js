let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ' ]').classList.add('active');
            });
        };
    });
};

$(document).ready(function(){
    // Adiciona um manipulador de evento de clique para o botão que muda de página
    $('#btn').click(function(e){
        e.preventDefault(); // Evita que o link seja seguido normalmente

        // Obtém o URL da página desejada a partir do atributo href do botão
        var novaPagina = $(this).attr('href');

        // Redireciona para a nova página
        window.location.href = novaPagina;
    });
});

