import React from "react";
import classes from "./PokemonInfo.module.css";

let ogr = 600851475143;

function largestPF(num) {
  let n = 2,
    max = 1;
  while (n <= num) {
    if (num % n == 0) {
      max = n;
      num = num / n;
      console.log("n je  " + n);
      console.log("max je  " + max);
      console.log("num je " + num);
    } else n++;
  }
  return n;
}
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

console.log("is prime   " + isPrime(largestPF(999)));
export default function PokemonInfo(props) {
  const { img, name, type, weight, height, special } = props;

  return (
    <div className={classes.Flex}>
      <img src={img} alt={name} width="150" height="150" />
      <div>
        <h3>{name}</h3>
        <p>Pokemon type</p>
        {type.map(type => (
          <p key={type}> - {type}</p>
        ))}
        <p>Pokemon weight</p>
        <p> - {weight.minimum}</p>
        <p> - {weight.maximum}</p>
        <p>Pokemon height</p>
        <p> - {height.minimum}</p>
        <p> - {height.maximum}</p>
      </div>
      <div>
        <h3>Special attacks</h3>
        {special.map(attack => {
          return (
            <p key={attack.name}>
              {attack.name} : {attack.damage}
            </p>
          );
        })}
      </div>
    </div>
  );
}
