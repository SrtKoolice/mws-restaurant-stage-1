if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/js/sw.js").then( (reg) => 
        console.log("Service Worker: ", reg.scope)
    ).catch( (error) => 
        console.log("Registration: ", error)
    )
}