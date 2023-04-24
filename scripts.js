let botaoPergunta = document.getElementById("botao-pergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("imagem-pergunta") 

function netflix(){
    if(menu.style.display == "block") {
        menu.style.display = "none"
        imagem.id = "imagem-pergunta"

    } else {
        menu.style.display = "block"
        imagem.id = "imagem-pergunta-girar"
    }

}

botaoPergunta.addEventListener("click", netflix)



let languageSelect = document.getElementById("language-select");
let botaoEntrar = document.getElementById("botao-entrar");
let title = document.getElementById("title");
let paragrafo1 = document.getElementById("paragrafo-assista")
let paragrafo2 = document.getElementById("paragrafo-quer")
let inputElement = document.getElementById("place");
let botaoEmail = document.getElementById("botao-email");
let perguntasFrequentes = document.getElementById("perguntas-frequentes");
let paragrafo3 = document.getElementById("paragrafo-inicial");
let paragrafo4 = document.getElementById("paragrafo-final");



languageSelect.addEventListener("change", () => {
  if (languageSelect.value === "english") {
    botaoEntrar.textContent = "Sign In";
    title.textContent = "Unlimited movies, TV shows, and more.";
    paragrafo1.textContent = "Watch anywhere. Cancel anytime.";
    paragrafo2.textContent = "Ready to watch? Enter your email to create or restart your membership";
    inputElement.placeholder = "Email address";
    botaoEmail.textContent = "Get Started";
    perguntasFrequentes.textContent = "Frequently Asked Questions";
    perguntasFrequentes.style.fontSize = "32px"
    botaoPergunta.textContent = "What is netflix?";
    imagem
    botaoPergunta.appendChild(imagem);
    paragrafo3.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    paragrafo4.textContent = "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"

  } else {
    botaoEntrar.textContent = "Entrar";
    title.textContent = "Filmes, séries e muito mais. Sem limites.";
    paragrafo1.textContent = "Assista onde quiser. Cancele quando quiser.";
    paragrafo2.textContent = "Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.";
    inputElement.placeholder = "Email";
    botaoEmail.textContent = "Vamos lá";
    perguntasFrequentes.textContent = "Perguntas frequentes";
    botaoPergunta.textContent = "O que é a Netflix?";
    imagem
    botaoPergunta.appendChild(imagem);
    paragrafo3.textContent = "A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet."
    paragrafo4.textContent = "Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."

  }
});
