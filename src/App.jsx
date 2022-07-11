import './App.css'

export const App = ({num = 10}) => {
  const fib = [0, 1]

  for (let i = 2; i <= num; i++) {

    fib[i] = fib[ i - 1 ] + fib[ i - 2 ];

  }
  console.log(fib);
  return fib[num]
}
