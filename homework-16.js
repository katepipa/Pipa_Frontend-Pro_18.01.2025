function saveCalls (originalFunction) {
  const cache = {};
  const lastTenCallsArray = [];

  return function (phoneNumber) {
    if (cache[phoneNumber] !== undefined) {
      console.log(`This phone number was retrieved from cache: ${phoneNumber}`);

      return cache[phoneNumber];
    }

    const result = originalFunction(phoneNumber);
    cache[phoneNumber] = result;
    lastTenCallsArray.push(phoneNumber);

    if (lastTenCallsArray.length > 10) {
      const oldestPhoneNumber = lastTenCallsArray.shift();
      delete cache[oldestPhoneNumber];
    }

    console.log(`New call was completed: ${phoneNumber}`);

    return result;
  }
}

function makeCall (phoneNumber) {
  return `A call was made to the number: ${phoneNumber}`;
}

const cachedCall = saveCalls(makeCall);

console.log(cachedCall('056-123-19-07')); 
console.log(cachedCall('056-123-19-07')); 
console.log(cachedCall('125-923-23-81')); 
console.log(cachedCall('125-923-23-81')); 
console.log(cachedCall('123-642-12-56'));