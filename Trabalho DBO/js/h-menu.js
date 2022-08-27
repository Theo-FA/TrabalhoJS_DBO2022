const resp = document.querySelector(".resp");
const menu = document.querySelector(".nav-bar")
resp.addEventListener('click', () => {
    resp.classList.toggle('act');
    menu.classList.toggle('act');
})

function validarNome(){
    let n = formulario.cname;
    let aux_n = document.querySelector("#auxN");
    if(n.value == ""){
        n.classList.add("err");
        n.classList.remove("norm");
        aux_n.classList.remove("erro");
        aux_n.classList.add("erroactive");
        formulario.cname.focus();
        return false
    }
    else{
        n.classList.add("norm");
        n.classList.remove("err");
        aux_n.classList.remove("erroactive")
        aux_n.classList.add("erro");
        return n.value;
    };
};

function validarCPF(){
    let c = formulario.cpf;
    let aux_c = document.querySelector("#auxC");
    if(c.value.length !== 11){
        c.classList.add("err");
        c.classList.remove("norm");
        aux_c.classList.remove("erro");
        aux_c.classList.add("erroactive");
        formulario.cpf.focus();
        return false;
    }
    else{
        c.classList.add("norm");
        c.classList.remove("err");
        aux_c.classList.remove("erroactive")
        aux_c.classList.add("erro");
        return c.value;
    }
};

function validarSenha(){
    let p = formulario.psw;
    let aux_p = document.querySelector("#auxP");
    if(p.value.length < 8){
        p.classList.add("err");
        p.classList.remove("norm");
        aux_p.classList.remove("erro");
        aux_p.classList.add("erroactive");
        formulario.psw.focus();
        return false;
    }
    else{
        p.classList.add("norm");
        p.classList.remove("err");
        aux_p.classList.remove("erroactive")
        aux_p.classList.add("erro");
        return p.value;
    }
};

function validarSenha2(){
    let p = formulario.psw;
    let p2 = formulario.pswc;
    let aux_p2 = document.querySelector("#auxP2");
    if(p2.value !== p.value || p2.value == ""){
        p2.classList.add("err");
        p2.classList.remove("norm");
        aux_p2.classList.remove("erro");
        aux_p2.classList.add("erroactive");
        formulario.pswc.focus();
        return false;
    }
    else{
        p2.classList.add("norm");
        p2.classList.remove("err");
        aux_p2.classList.remove("erroactive")
        aux_p2.classList.add("erro");
        return [validarNome(), validarCPF(), validarSenha()];
    };
};
function validarProfissao(){
    p = formulario.profissao;
    aux_p = document.querySelector("#auxN");
    if(p.value == ""){
        p.classList.add("err");
        p.classList.remove("norm");
        aux_p.classList.remove("erro");
        aux_p.classList.add("erroactive");
        formulario.profissao.focus();
        return false;
    }
    else{
        p.classList.add("norm");
        p.classList.remove("err");
        aux_p.classList.remove("erroactive")
        aux_p.classList.add("erro");
        return validarSenha2() += p.value;
    }
}

function validarEstado(){
    x = document.querySelector("#pr");
    y = document.querySelector("#sc");
    z = document.querySelector("#rs");
    if(x == true){return validarProfissao() += "Paraná"};
    if(y == true){return validarProfissao() += "Santa Catarina"};
    if(z == true){return validarProfissao() += "Rio Grande do Sul"};
};

function validarAnos(){
    x = formulario.anos;
    auxp = document.querySelector("#auxP");
    if(x.value >= 0 || x.value >50){
        x.classList.add("err");
        x.classList.remove("norm");
        auxp.classList.remove("erro");
        auxp.classList.add("erroactive");
        formulario.anos.focus();
        return false;
    }
    else{
        x.classList.add("norm");
        x.classList.remove("err");
        auxp.classList.remove("erroactive")
        auxp.classList.add("erro");
        return validarEstado() += x.value;
    }
}

function fase2(){
    if(validarSenha2().length == 3){
        formulario.cname.value = "";
        let nome = document.querySelector("#label1");
        nome = nome.innerText;
        nome = nome.replace("Nome", "Profissão");
        label1.innerText = nome;
        formulario.cname.setAttribute("placeholder", "Insira a sua profissão");
        formulario.cname.setAttribute("name", "profissao");


        let cpf = document.querySelector("#label2");
        cpf = cpf.innerText;
        cpf = cpf.replace("CPF", "Estado");
        label2.innerText = cpf;
        del = formulario.cpf;
        del.remove();
        let pr = document.createElement("label");
         pr.setAttribute("for", "pr");
         pr.innerHTML = "PR";
        document.querySelector("#form").appendChild(pr);
        document.querySelector("#form").insertBefore(pr, document.querySelector("#auxC"));
        let x = document.createElement("INPUT");
         x.setAttribute("type", "radio");
         x.setAttribute("name", "estado");
         x.setAttribute("id", "pr");
        document.querySelector("#form").appendChild(x);
        document.querySelector("#form").insertBefore(x, document.querySelector("#auxC"));
        let a = document.createElement("br");
        document.querySelector("#form").appendChild(a);
        document.querySelector("#form").insertBefore(a, document.querySelector("#auxC"));
        let sc = document.createElement("label");
        sc.setAttribute("for", "sc");
        sc.innerHTML = "SC";
       document.querySelector("#form").appendChild(sc);
       document.querySelector("#form").insertBefore(sc, document.querySelector("#auxC"));
        let y = document.createElement("INPUT");
         y.setAttribute("type", "radio");
         y.setAttribute("name", "estado");
         y.setAttribute("id", "sc");
        document.querySelector("#form").appendChild(y);
        document.querySelector("#form").insertBefore(y, document.querySelector("#auxC"));
        let b = document.createElement("br");
        document.querySelector("#form").appendChild(b);
        document.querySelector("#form").insertBefore(b, document.querySelector("#auxC"));
        let rs = document.createElement("label");
        rs.setAttribute("for", "rs");
        rs.innerHTML = "RS";
       document.querySelector("#form").appendChild(rs);
       document.querySelector("#form").insertBefore(rs, document.querySelector("#auxC"));
        let z = document.createElement("INPUT");
        z.setAttribute("name", "estado");
         z.setAttribute("type", "radio");
         z.setAttribute("id", "rs");
        document.querySelector("#form").appendChild(z);
        document.querySelector("#form").insertBefore(z, document.querySelector("#auxC"));
        let c = document.createElement("br");
        document.querySelector("#form").appendChild(c);
        document.querySelector("#form").insertBefore(c, document.querySelector("#auxC"));

        formulario.senha.value = "";
        let anos = document.querySelector("#label3");
        anos = anos.innerText;
        anos = anos.replace("Senha", "Período de atividade");
        label3.innerText = anos;
        formulario.senha.setAttribute("placeholder", "Há quantos anos trabalha?");
        psw = document.querySelector("#psw");
        psw.setAttribute("type", "number");
        psw.setAttribute("name", "anos");

        document.querySelector("#descarte").remove();

        formulario.senha2.value = "";
        document.querySelector("#conf").innerHTML = "";
        bt = document.querySelector("#pswc");
        bt.setAttribute("type", "button");
        bt.setAttribute("id", "butf");
        bt.setAttribute("onclick", "return validarProfissao(), validarEstado(), validarAnos()");
        bt.value = "Continuar";
        };
    };
