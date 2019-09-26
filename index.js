
  const map = (array, callBack) => {
    return array.map(function(element) {
        return callBack(element);
    })
  }

  const reduce = (array, callBack, startingPoint) => {
      if (startingPoint) {
        return array.reduce(callBack, startingPoint);
      } else {
        return array.reduce(callBack);
      }
  }
  