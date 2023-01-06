module.exports = function toReadable(a) {

   let firstDozen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let secondDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

   return result();

   function result() {
      if (a < 100) {
         return lessHundert(a);
      } else if (a % 100 === 0) {
         return hunderts(a);
      } else if (a > 100 && a < 1000 && (a % 100 < 100)) {
         return (hunderts(a) + ' ' + dos(a));
      }
   }

   function lessHundert(a) {
      if (a < 10) {
         return firstDozen[a];
      } else if (a < 20) {
         return secondDozen[(a - 10)];
      } else if ((a % 10 === 0) && (a < 100)) {
         return dozens[((a - 20) / 10)];
      } else if (a > 20 && a < 100) {
         return dozens[Math.floor(a / 10 - 2)] + ' ' + firstDozen[a % 10];
      }
   }

   function hunderts(a) {
      if (a > 99 && a < 1000) {
         return firstDozen[Math.floor(a / 100)] + ' hundred';
      }
   }

   function dos(a) {
      if (a % 100 < 10) {
         return firstDozen[a % 100];
      } else if (a % 100 < 20) {
         return secondDozen[(a % 100) - 10];
      } else if (a % 100 % 10 === 0) {
         return dozens[a % 100 / 10 - 2];
      } else if (a % 100 > 20) {
         return dozens[Math.floor((a % 100) / 10 - 2)] + ' ' + firstDozen[(a % 100) % 10];
      }
   }
}





