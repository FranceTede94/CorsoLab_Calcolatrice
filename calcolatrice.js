document.addEventListener("DOMContentLoaded", function() {
    
    let numeri = document.querySelectorAll(".numeri");
    console.log(numeri);

    for (let i = 0; i < numeri.length; i++) {
      numeri[i].onclick = function() {
  
        let numero1 = parseInt(numeri[i].innerText);
        console.log("Numero valore " + numero1);
  
        //commento prova
        document.getElementById("somma").onclick = function() {
          for (let i = 0; i < numeri.length; i++) {
            numeri[i].onclick = function() {
  
              let numero2 = parseInt(numeri[i].innerText);
              console.log("Numero valore " + numero2);
  
              document.getElementById("uguale").onclick = function() {
                let somma = numero1 + numero2;
                console.log("Somma: " + somma);
                document.getElementById("risultato").innerHTML = somma;
                setTimeout(resetta, 1000);
              }
            }
          }
        }
  
        document.getElementById("sottrazione").onclick = function() {
          for (let i = 0; i < numeri.length; i++) {
            numeri[i].onclick = function() {
  
              let numero2 = parseInt(numeri[i].innerText);
              console.log("Numero valore " + numero2);
  
              document.getElementById("uguale").onclick = function() {
                let sottrazione = numero1 - numero2;
                console.log("Sottrazione: " + sottrazione);
                document.getElementById("risultato").innerHTML = sottrazione;
                setTimeout(resetta, 1000);
              }
            }
          }
        }

        document.getElementById("moltiplicazione").onclick = function() {
            for (let i = 0; i < numeri.length; i++) {
              numeri[i].onclick = function() {
    
                let numero2 = parseInt(numeri[i].innerText);
                console.log("Numero valore " + numero2);
    
                document.getElementById("uguale").onclick = function() {
                  let moltiplicazione = numero1 * numero2;
                  console.log("Moltiplicazione: " + moltiplicazione);
                  document.getElementById("risultato").innerHTML = moltiplicazione;
                  setTimeout(resetta, 1000);
                }
              }
            }
          }

          document.getElementById("divisione").onclick = function() {
            for (let i = 0; i < numeri.length; i++) {
              numeri[i].onclick = function() {
    
                let numero2 = parseInt(numeri[i].innerText);
                console.log("Numero valore " + numero2);
    
                document.getElementById("uguale").onclick = function() {
                  let divisione = numero1 / numero2;
                  console.log("Divisione: " + divisione);
                  document.getElementById("risultato").innerHTML = divisione;
                  setTimeout(resetta, 1000);
                }
              }
            }
          }



      } 
    }

   
  });

  function resetta() {
    document.getElementById("risultato").innerHTML = "";
    location.reload();
}


      