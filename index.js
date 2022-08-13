let retorno = false;
let primeiraLing;
let addLing = false;
let ling = [];
alert('Olá, você será submetido a algumas perguntas para podermos analisar sobre você\nClique em OK para continuar');
let area = prompt('Você gostaria de seguir em qual área?\nÁrea de Front-End - digite "front"\nÁrea de Back-End - digite "back"');
    if(area === 'front'){
        primeiraLing = prompt('Você gostaria de aprender React ou Vue?');
            if((primeiraLing !== 'react')&&(primeiraLing !== 'React')&&(primeiraLing !== 'Vue')&&(primeiraLing !== 'vue')){
                alert('Responta inválida');}
            else{
                retorno = true;
                ling.push(primeiraLing);
            }
            }
    else if(area === 'back'){
                primeiraLing = prompt('Você gostaria de aprender Java ou C#?');
                    if((primeiraLing !== 'java')&&(primeiraLing !== 'Java')&&(primeiraLing !== 'C#')&&(primeiraLing !== 'c#')){
                        alert('Responta inválida');}
                    else{
                        retorno = true;
                        ling.push(primeiraLing);
                    }
                    }

if(retorno == true){
    let aprender = confirm(`Que ótimo! Tenho certeza que irá gostar muito de aprender ${primeiraLing}!\nGostaria de aprender mais alguma linguagem?`);
    if(aprender == true){
        addLing = true;
    } else{
        alert(`Tudo bem, então você aprenderá somente ${primeiraLing}!`);
    }     
}

if((addLing === true)){
    let confirmacao;
    let novaLing;
    do{
        novaLing = prompt('Qual outra linguagem que gostaria de aprender?');
        ling.push(novaLing);
        confirmacao = confirm(`${novaLing}? Exelente!\nGostaria de aprender mais alguma linguagem?`);
    } while (confirmacao == true);
    const joinLing = ling.join(', ');
    alert(`Você aprenderá as linguagens ${joinLing}!\nObrigado por participar`);
}
