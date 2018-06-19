let cacheName = 'mws-stage1-01';
console.log("testing");
self.addEventListener('install', (event) =>
      event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/register.js',
        '/js/sw.js',
        '/data/restaurants.json',
        '/img/'
      ]);
    })
  )
);

self.addEventListener('fetch', (event) => {
  let requestUrl = new URL(event.request.url);
  let cacheReq = event.request;
  if (requestUrl.pathname.startsWith('/restaurant.html')) {
      cacheReq = new Request('restaurant.html');
  }
  event.respondWith (
      caches.match(cacheReq).then((response) => {
          return (
              response || fetch(event.request).then((fetchResponse) => 
                caches.open(cacheName).then((cache) => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                })
            ).catch((error) => {
                if (event.request.url.pathname.startsWith('/*.jpg')) {
                    return caches.match('/img/');
                }
                return new Response('Application in offline mode', {
                    status: 404,
                    statusText: 'Application in offline mode'
                });
            })
          )
      })
    )
});
