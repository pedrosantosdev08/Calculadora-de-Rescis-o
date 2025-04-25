function calcularRescisao() {
    const salario = parseFloat(document.getElementById("salario").value);
    const meses = parseInt(document.getElementById("meses").value);
    const aviso = document.getElementById("aviso").value;
  
    if (isNaN(salario) || isNaN(meses)) {
      document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
      return;
    }
  
    const ferias = (salario / 12) * meses + (salario / 3); // férias proporcionais + 1/3
    const decimoTerceiro = (salario / 12) * meses;
    const avisoPrevio = aviso === "nao" ? salario : 0;
  
    const total = ferias + decimoTerceiro + avisoPrevio;
  
    document.getElementById("resultado").innerText = `Total estimado da rescisão: R$ ${total.toFixed(2)}`;
  }
  
