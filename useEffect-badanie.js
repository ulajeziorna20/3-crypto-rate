
// const [isOn, setIsOn] = useState(false)



// App.js
// const [color, setColor] = useState('blue')


// <Crypto color={color} setColor={setColor} />


// Crypto.js


  // tylko przy stworzeniu komponentu -->  pierwsze renderowanie. Ale jeśli komponent umrze(cos wstawimy i zapiszemy na przyklad) i znowu się narodzi wtedy on najpierw zakonczy zywot returnem a potem znowu sie odrodzi
// function App() {
//   const [isOn, setIsOn] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => console.log('tick'), 1000);

//     return () => clearInterval(interval);
//   }, []);
// }



// 2. 


  // nie ma drugiejo parametru. nie wazne ktory stan sie zmieni uruchomi sie wtedy useEffect
  // useEffect(() => {
  //   console.log(`moj useEffect`);

//   return (() => {
  //     console.log(`moj effekt KONCZY SIE`);
  //   })
  // })



//   useEffect(() => {
//     const interval = setInterval(() => console.log('tick'), 1000);

//     return () => clearInterval(interval);
//   });
// }



// 3. 


// UseEffect reaguje tylko na zmiane konkretnego stanu/stanów. 
// useEffect(() => {

//   // if (isOn) {
//   //   console.log(`IsOn!`);
//   // } else {
//   //   console.log(`IsOff!`);
//   // }
//   const myColor = () => {
//     return props.color
//   }


//   console.log(`useEffect ON/OFF`);
//   console.log(myColor());


//   return (() => {
//     console.log(`useE ffect ON/OFF KONCZY SIE`);
//   })

// }, [props.color, isOn])






//  buttony przykładowe


{/* <button onClick={() => {
  setIsOn((isOn) => !isOn)
}}>{isOn ? `off` : `on`}</button>
<button onClick={() => {
  props.setColor((props.color === `blue`) ? `red` : `blue`)

}} className={props.color}>
  {props.color}
</button> */}
