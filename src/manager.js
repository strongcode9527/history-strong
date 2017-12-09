const manager = () => {
  const listeners = []

  function addListener(fn) {
    if(listeners.find(fn), typeof fn !== 'function') {
      return
    }
    listeners.push(fn)
  }

  function notifyListener(something) {
    try{
      listeners.forEach(listener => listener(something))
    }
    catch(e) {
      console.log(e)
    }
  }

  return {
    addListener,
    notifyListener,
  }
}

