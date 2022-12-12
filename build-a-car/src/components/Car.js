import Wheel from './Wheel.js';

export default function Car (props) {
const wheels = [];

for  (let i = 0; i < props.numberOfWheels; i++) {
  wheels.push("wheel-" + i);
} 

  return (
  <div>
  <h2>Hi, I am a Car! I have
    {props.numberOfWheels} wheels
  </h2>

  {wheels.map((wheel) => <Wheel key={wheel} />)}
  <button>Click me</button>
  </div>
  );
}