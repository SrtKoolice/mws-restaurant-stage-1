if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then( (reg) => 
        console.log("Service Worker: ", reg.scope)
    ).catch( (error) => 
        console.log("Registration: ", error)
    )
    navigator.serviceWorker.ready.then(function(registration) {
        console.log('Service Worker Ready');
    });
}

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/js/sw.js')
//       .then(function(registration) {
//             console.log('Service Worker Registered');
//       });

//     navigator.serviceWorker.ready.then(function(registration) {
//        console.log('Service Worker Ready');
//     });
//   }