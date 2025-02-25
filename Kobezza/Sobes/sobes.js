for(let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}

for(var i = 0; i < 3; i++) {
  setTimeout((arg) => console.log(arg), 1000, i)
}

// ===================== 1
const object = {
  name: "Name",

  getName: () => {
    console.log(this.name);
  },

  getName2() {
    console.log(this.name);
  },
};

object.getName();// undefined
object.getName2();// Name

const fn = object.getName2;
fn();// undefined

fn.call(object);// Name

// ===================== 3
function foo() {
  const x = 10;
  // this.x = 30

  return {
    x: 20,

    bar() {
      console.log(this.x);
    },

    baz: () => {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // 20
obj1.baz(); // undefined

const obj2 = foo.call({ x: 30 });
let y = obj2.bar;
let x = obj2.baz;

y(); // undefined
x(); // 30

obj2.bar();// 20
obj2.baz();// 30




// ================ 1
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// "Создание промиса", "Конец скрипта", "Обработка промиса", "Таймаут"


// ================ 2
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


// 1 7 3 5 2 6 4

// ================ 3
console.log(1);

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

new Promise(function (resolve, reject) {
  console.log("Promise");
  
  setTimeout(() => {
    console.log(777);
    resolve();
  }, 0);
})
  .then(() => {
    console.log("then1");
  })
  .then(() => {
    console.log("then2");
  });

console.log(4);

setTimeout(() => {
  console.log("timeOut2");
}, 0);

// 1 Promise 4 Таймаут 777 then1 then2 timeout2




// чему будет равен count после 1 клика
// выведется ли в консоль Count-render после клика

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClick}>increment</button>

            <Count onClick={onClick} />
        </div>
    );
};

export const Count = React.memo(() => {
    console.log("Count-render");

     return <div>Count component</div>;
})


//=====================
import React, { useState } from "react";

const fetchNumber = () => Promise.resolve(Math.random());

const heavyFunc = () => {
    return Math.random()
}

const ARR = [1, 2, 3, 4]

const App = () => {
    const [number, setNumber] = useState(0);
    const [scroll, setScroll] = useState(window.scrollY);
    
    const [data, setData] = useState(() => heavyFunc());
    // error isLoading   


    React.useEffect(() => {
        const getNumber = async () => {
           const num = await fetchNumber()
           setNumber(num);  // trycatch
        } 
        
        getNumber()
        
        const onScroll = () => setScroll(window.scrollY)

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll); // throttle
        };
    }, []);

    return (
        <div>
            <div>{number}</div>
            <div>{scroll}</div>

            <ul>
            {ARR.map((el) => (
                <li key={el}>{el}</li>
            ))}
            </ul>
        </div>
    );
};

export default App;



// зарефакторить код
import React, { useState } from "react";

const fetchNumber = () => Promise.resolve(Math.random());

const heavyFunc = () => {
    return Math.random()
}

const App = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();
    
    const [data, setData] = useState(heavyFunc());

    React.useEffect(async () => {
        setNumber(await fetchNumber());

        window.addEventListener("scroll", () => setScroll(window.scrollY));

        return () => {
            window.removeEventListener("scroll", () =>
                setScroll(window.scrollY)
            );
        };
    }, []);

    return (
        <div>
            <div>{number}</div>
            <div>{scroll}</div>

            {[1, 2, 3, 4].map((el) => (
                <div>{el}</div>
            ))}
        </div>
    );
};

export default App;
















