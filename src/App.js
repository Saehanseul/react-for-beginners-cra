
import Button from './Button'
import styles from './App.module.css'
import { useEffect, useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState()
  const onClick = () => setCounter(prev => prev + 1)
  const onChange = (e) => setKeyword(e.target.value)
  console.log("render app")

  const IRunOnlyOnce = () => {
    console.log("I run only once")
  }
  useEffect(IRunOnlyOnce, [])

  useEffect(() => {
    console.log("search", keyword)
  }, [keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='search somethine..'/>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"HI~~!"}/>
    </div>
  );
}

export default App;
