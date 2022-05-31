import { useEffect, useState, useRef } from 'react';
// import PropTypes from 'prop-types';

function App(props: any) {
  const [constructorHasRun, setConstructorHasRun] = useState(false);
  const didMountRef = useRef(false);
  const constructor = () => {
    if (constructorHasRun) return;
    console.log('Component Will MOUNT!')
    setConstructorHasRun(true);
  }
  constructor();

  const [hello, sethello] = useState(1)
  const { tmpname } = props;

  useEffect(() => {
    console.log('Component Did MOUNT!')

    return () => {
      console.log("Component will UNMOUNT!")
    }
  }, [])

  useEffect(() => {
    console.log('Component Will Recieve Props!', tmpname)
  }, [tmpname])

  useEffect(() => {
    if (didMountRef.current) {
      console.log('Component Did UPDATE!')
    } else {
      didMountRef.current = true;
    }
  })
  /////////////////////////////////////////////
  //shouldComponentUpdate to React Hooks
  // React.memo()
  // useMemo()
  /////////////////////////////////////////////
  // ??componentWillUpdate


  const changeState = (e: any) => {
    sethello(hello + 1);
  }
  return <>
    <h1>ReactJS component's Lifecycle</h1>
    <h3>Hello {hello}</h3>
    <button onClick={changeState}>Click Here!</button>
  </>
}


App.defaultProps = {
  "tmpname": "name"
}



export default App;
