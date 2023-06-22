import { Observable } from 'rxjs';
 
const getAnObservable$ = () => {
   return new Observable(observer => {
       observer.next('Valor 1');
       observer.next('Valor 2');
       observer.next('Valor 3');
   });
};
(() => {
  getAnObservable$
    .pipe(
       // Manipulación de resultados con RxJS
    )
    .subscribe(res => {
      console.log(res);
    });
})


// Promesas con .then() y .catch()
const p = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("¡Hola Promesa!");
    }, 1000);
  });
  p.then((result) => {
    console.log(result);        // ¡Hola Promesa!
  }).catch(err => {
    console.log(err);           // En caso de error
  });
  
  // Promesas con async/await
  (async () => {
      const p = await new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve("¡Hola Promesa!");
        }, 1000);
      }).catch(err => {
        console.log(err);           // En caso de error
      });;
      console.log(p);            // ¡Hola Promesa!
  });