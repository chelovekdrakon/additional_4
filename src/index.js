module.exports = function multiply(first, second) {

  if (parseInt(first) === 0 || parseInt(second) === 0) {
         return '0';
     }

   first = first.split('').reverse();
   second = second.split('').reverse();
   let product = [];

   for (let i = 0; first[i] >= 0; i++) {
       for (let j = 0; second[j] >= 0; j++) {
           if (!product[i + j]) {
               product[i + j] = 0;
           }

           product[i + j] += first[i] * second[j];
       }
   }

   for (let i = 0; product[i] >= 0; i++) {
       if (product[i] >= 10) {
           if (!product[i + 1]) {
               product[i + 1] = 0;
           }

           product[i + 1] += parseInt(product[i] / 10);
           product[i] %= 10;
       }
   }

   return product.reverse().join('');
 }
