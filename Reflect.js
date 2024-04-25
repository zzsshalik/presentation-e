function getProxy(targetObject) {
  return new Proxy(targetObject, {
    get(target, property, receiver) {
      if (property === "diff") {
        return () => Object.getOwnPropertyNames(receiver);
      }
      return Reflect.get(target, property, receiver);
    },
  });
}

function getNewState(initialState) {
  const newState = getProxy({ a: 2 });
  Reflect.setPrototypeOf(newState, initialState);
  return newState;
}

const initialState = { a: 1, b: 1 };
const newState = getNewState(initialState);

delete newState.a;
delete newState.a;
newState.b = 2;

newState.diff();




///////


function getNewState(initialState) {
  const newState = { a: 2 };
  Reflect.setPrototypeOf(newState, initialState);
  return newState;
}
const initialState = { a: 1, b: 1 };
const newState = getNewState(initialState);

delete newState.a;
delete newState.a;
newState.b = 2;

Object.getOwnPropertyNames(newState);