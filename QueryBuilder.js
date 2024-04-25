const SELECT = {
  from() {
    return this;
  },
  where() {
    return {
      then(onComplete) {
        const req = new Promise((resolve) => {
          setTimeout(() => resolve([1, 2, 3]), 1000);
        });
        return req.then(onComplete);
      },
    };
  },
};

async function exec() {
  const x = SELECT.from().where();
  const x2 = await SELECT.from().where();
  console.log(x, x2);
}

exec();
