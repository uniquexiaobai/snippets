// 参考：https://github.com/yyx990803/register-service-worker/blob/master/src/index.js
const register = url => {
  if ('serviceWorker' in navigator) {
    serviceWorker
      .register(url)
      .then(registration => {
        console.log(registration);
      })
      .catch(err => {
        console.error(err);
      });
  }
};

// 参考：https://gist.github.com/zouhir/9d48fd4e4b7f6c58b1aba647aab9569b
const unregister = async (url, cacheName) => {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (let registration of registrations) {
      if (registration.active.scriptURL === url) {
        registration.unregister();

        caches.delete(cacheName);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
