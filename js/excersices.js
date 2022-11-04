function Sumar(){
    let num1 = parseInt(document.getElementById("txtNum1").value);
    let num2 = parseInt(document.getElementById("txtNum2").value);
    let resultado = num1 + num2;
    document.getElementById("txtResultado").innerHTML = 'Resultado: ' + resultado;
}
function CalcularOperacion(){
     let op = document.getElementById('selectOp').value; 
     let num1 = parseInt(document.getElementById('txt2Num1').value);
      let num2 = parseInt(document.getElementById('txt2Num2').value); 
      if(op == 0){
       alert("Seleccione primero la operación");
     }
      else if(op == 1){
         document.getElementById('txt2Result').innerHTML = "La suma es: " + (num1 + num2);
         }
          else if(op == 2){ 
            document.getElementById('txt2Result').innerHTML = "La resta es: " + (num1 - num2);
         } 
         else if(op == 3){
             document.getElementById('txt2Result').innerHTML = "El producto es: " + (num1 * num2);
             }
              else if(op == 4){
                 document.getElementById('txt2Result').innerHTML = "La division es: " + (num1 / num2); 
                }
            }

            function CalcularIR(SalBruto){
                let SalBrutoAnual = SalBruto * 12;
                let IRAnual = 0;
                if(SalBrutoAnual <= 100000) IRAnual = 0;
                else if(SalBrutoAnual > 100000 && SalBrutoAnual <= 200000)
                IRAnual = (SalBrutoAnual - 100000) * 0.15;
                else if(SalBrutoAnual > 200000 && SalBrutoAnual <= 350000)
                IRAnual = ((SalBrutoAnual - 200000) * 0.20) + 15000;
                else if(SalBrutoAnual > 350000 && SalBrutoAnual <= 500000)
                IRAnual = ((SalBrutoAnual - 350000) * 0.25) + 45000;
                else
                IRAnual = ((SalBrutoAnual - 500000) * 0.30) + 82500;
                return IRAnual / 12;
                }
                
                function CalcularSalario(){
                    let SalBase = parseFloat(document.getElementById('inputSalario').value);
                    let inss = SalBase * 0.07;
                    let ir = CalcularIR(SalBase - inss);
                    let SalNeto = SalBase - inss - ir;
                    document.getElementById('txtINSS').innerHTML = "INSS: C$ " + inss.toFixed(2);
                    document.getElementById('txtIR').innerHTML = "IR: C$ " + ir.toFixed(2);
                    document.getElementById('txtSalNeto').innerHTML = "Salario Neto: C$ " + SalNeto.toFixed(2);
                    }