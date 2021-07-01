function calc(a) {
  return {
    add: (b) => (a += b),
    sub: (b) => (a -= b),
    mult: (b) => (a *= b),
    div: (b) => (a /= b),
    getResult: () => {
      console.log(a);
    },
  };
}

const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

first.getResult(); // 50
