import Wheel from './Wheel.js';

export default function Bus(props) {
  const wheels = [];

for  (let i = 0; i < props.numberOfWheels; i++) {
  wheels.push("wheel-" + i);
} 
  return (
    <div>
  <h2>Hello, I am a Bus 
    I have
    {props.numberOfWheels} wheels
  </h2>
  {wheels.map((wheel) => <Wheel key={wheel} />)}
  <button>Click me</button>
  </div>
  );
}