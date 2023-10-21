import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import List from './components/List';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 7;

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);

    return () => console.log('unmounting');
  }, [users]);

  const addTwo = useCallback((): void => setCount((prev) => prev + 2), []);

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div>
      <h1></h1>
      <input
        ref={inputRef}
        type='text'
      />
      <h2>{result}</h2>

      <button onClick={addTwo}>Add</button>
      <Heading title={'Hello'} />
      <Section title={'Different Title'}>This is my Section.</Section>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      <List
        items={['redbull', 'pizza', 'code']}
        render={(item: string) => <span className='gold'>{item}</span>}
      />
    </div>
  );
}
