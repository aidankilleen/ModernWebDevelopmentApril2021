if ('serviceWorker' in navigator) {
    // this browser can install a PWA
    navigator.serviceWorker.register('/sw.js');
}