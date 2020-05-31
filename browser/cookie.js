// https://github.com/js-cookie/js-cookie
const get = key => {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  const res = {};

  for (let cookie of cookies) {
    const parts = cookie.split('=');
    const v = decodeURIComponent(parts.slice(1).join('='));
    const k = decodeURIComponent(parts[0]);

    res[k] = v;
    if (k === key) break;
  }

  return key == null ? res : res[key];
};

const set = (key, value, options = {}) => {
  if (!options.path) {
    options.path = '/';
  }
  if (options.expires) {
    options.expires = options.expires.toUTCString();
  }

  let res = '';
  for (let k in options) {
    const v = options[k];
    if (v == null) continue; // { path: undefined }
    if (v === false) continue; // { secure: false}
    res += `; ${k}=${v}`;
  }

  const cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}${res}`;
  document.cookie = cookie;
  
  return cookie;
};

const remove = key => {
  const expires = new Date(Date.now() - 1);
  set(key, '', { expires });
};
