import React from "react";

export default function City(props) {
  return (
    <div className="City">
      It is {props.temperature}°C in {props.name}
    </div>
  );
}
