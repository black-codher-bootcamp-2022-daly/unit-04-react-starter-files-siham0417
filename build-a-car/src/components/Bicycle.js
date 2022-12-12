import Wheel from './Wheel';

export default function Bicycle(props) {
  const wheels = [];

for  (let i = 0; i < props.numberOfWheels; i++) {
  wheels.push("wheel-" + i);
} 
  return (
    <div>
  <h2>Good Morning, I am a Bicycle 
    I have
    {props.numberOfWheels} wheels
  </h2>
  {wheels.map((wheel) => <Wheel key={wheel} />)}
  <button>Click me</button>
  </div>
  );
}