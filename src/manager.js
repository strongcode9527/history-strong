const manager = () => {
  const listeners = []

  function addListener(fn) {
    if(listeners.find(item => item === fn), typeof fn !== 'function') {
      return
    }
    listeners.push(fn)
    const length = listeners.length
    return () => {
      listener.splice(length - 1, 1)
      alert() 
    }
  }

  function notifyListeners(something) {
    try{
      listeners.forEach(listener => listener(something))
    }
    catch(e) {
      console.warn(e) 
    }
  }
  
  function getListener() {
    return listeners
  }

  return {
    addListener,
    getListener,
    notifyListeners,
  }
}

export default manager
