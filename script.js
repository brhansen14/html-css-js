let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//
function expandirConteudo(id) {
    var conteudo = document.getElementById(id);
    conteudo.classList.remove('texto-hidden');
}

function fecharConteudo(id) {
    var conteudo = document.getElementById(id);
    conteudo.classList.add('texto-hidden');
}

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
