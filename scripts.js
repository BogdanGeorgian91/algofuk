var search = document.getElementById("search");
var solution = document.getElementById("solution");
var solutionIndex = document.getElementById("solution-index");
var lengthArr = document.getElementById("length");
var range = document.getElementById("range");

search.addEventListener("click", findProd);

function findProd(x, y) {
  //crearea unui array ului cu valori random care sa ia ca parametri datele introduse de user
  var x = parseInt(lengthArr.value); // cate elemente sa aiba array-ul
  var y = parseInt(range.value); // range-ul dinauntrul caruia sa se aleaga numerele
  var arr = (x, y) =>
    Array(x)
      .fill()
      .map(() => Math.round(Math.random() * y));
  var arrray = arr(x, y);
  console.log(arrray);

  //facem ca Array ul sa contina numere unice astfel incat cele mai mari 2 numere din sir sa nu fie acelasi si le sortam de la mic la mare
  var uniqueArr = [...new Set(arrray)].sort((a, b) => a - b);
  console.log(uniqueArr);

  // display the array on the page
  document.getElementById("show-array").textContent = uniqueArr.join(", ");
 

  //aflam cele mai mari numere din Array
  var max1 = Math.max.apply(null, uniqueArr); // cel mai mare numar din sir
  var maxi = uniqueArr.indexOf(max1);
  uniqueArr[maxi] = -Infinity;
  var max2 = Math.max.apply(null, uniqueArr); // al doilea cel mai mare numar din sir
  uniqueArr[maxi] = max1;
  console.log(max1);
  console.log(max2);
  console.log(max1 * max2);

  var fib = []; //crearea unui array care va contine sirul lui Fibonacci
  fib[0] = 0;
  fib[1] = 1;
  var N_fib = 1; //nr elemente sir Fibonacci

  while (fib[N_fib] < max1 * max2) {
    N_fib++;
    fib[N_fib] = fib[N_fib - 1] + fib[N_fib - 2];
  }

  console.log(N_fib);
  console.log(fib);

  // display the Fibonacci array on the page
  document.getElementById("show-fib").textContent = fib.join(", ");
  
  var fib_val_max = 0;
  var fib_idx_max = 0;

  for (var i = 0; i < x; i++) {
    for (var j = i + 1; j < x; j++) {
      //calculam produsul curent
      var produs = uniqueArr[i] * uniqueArr[j];

      //verificam daca produsul este mai mare decat produsul anterior
      if (produs > fib_val_max) {
        //verificam daca produsul este un numar Fibonacci(element din array-ul fib)
        //daca face parte din numerele Fibonacci, actualizam valoarea si indexul
        //  console.log(produs)
        for (var k = fib_idx_max + 1; k < N_fib; k++) {
          if (fib[k] == produs) {
            fib_val_max = produs;
            fib_idx_max = k;
          }
          if (fib[k] > produs) {
            break;
          }
        }
      }
    }
  }

  //display the seeked results on the page
  solution.innerText = fib_val_max; 
  solution.style.visibility = "visible";
  solutionIndex.innerText = fib_idx_max;
  solutionIndex.style.visibility = "visible";
  return solution, solutionIndex;
}

