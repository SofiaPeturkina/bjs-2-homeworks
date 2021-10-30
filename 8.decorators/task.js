function cachingDecoratorNew(func) {
  const cache = [];
  return function (...args) {
    const key = args.join(',');
    const index = cache.findIndex((elem) => !!elem[key]);
    
    if (~index) {
      console.log('cache');
      return 'Из кэша: ' + cache[index][key];
    } else {
      console.log('work');
      const obj = {};
      obj[key] = func.call(this, ...args);
      cache.push(obj);

      if (cache.length > 5) {
        cache.shift();
      }

      return 'Вычисляем: ' + obj[key];
    }
  };
}

function debounceDecoratorNew(func, timeout) {
  let timerId;
  let isFirst = true;

  return function (...args) {
    if (isFirst) {
      isFirst = false;
      return func.call(this, ...args);
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function debounceDecorator2(func, timeout) {
  let timerId;
  let isFirst = true;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (isFirst) {
      isFirst = false;
      return func.call(this, ...args);
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal);
setTimeout(upgradedSendSignal, 300); 
setTimeout(upgradedSendSignal, 900); 
setTimeout(upgradedSendSignal, 1200); 
setTimeout(upgradedSendSignal, 2300);
setTimeout(upgradedSendSignal, 4400); 
setTimeout(upgradedSendSignal, 4500); 
