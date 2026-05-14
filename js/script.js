

document.getElementById('alertSucesso').addEventListener('click', function () {
    const nome = document.getElementById('inputNome').value
    const cpf = document.getElementById('inputCPF').value
    const email = document.getElementById('inputEmail').value
    const senha = document.getElementById('inputSenha').value


    if (nome && cpf && email && senha) {
        Swal.fire('Matricula enviada com sucesso!',
            'Compareça a uma de nossas unidades presenciais para finalizar o cadastro',
            'success');
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Ops...Impossível realizar a mátricula",
            text: "Parece que você preencheu incorretamente suas informações"
        });
    }

});
