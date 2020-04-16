let cache = {};

const setCacheValue = (key, value) => {
  cache[key] = {
    value,
    timestamp: new Date().getTime(),
  }
}

const getCacheValue = (key) => {
  const saveCacheTime = 3600000; // equals 1 hr
  if (cache[key]) {
    if ((new Date().getTime() - cache[key].timestamp) > saveCacheTime) {
      cache[key] = null;
    } else {
      return cache[key].value;
    }
  } else {
    return null;
  }
}

module.exports = {
  setCacheValue,
  getCacheValue,
};