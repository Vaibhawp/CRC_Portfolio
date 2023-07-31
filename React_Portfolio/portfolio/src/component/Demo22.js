import React from "react";

let m = [
  { name: "Vaibhaw", branch: "csds" },
  { name: "Nitin", branch: "csds" },
  { name: "Vibhu", branch: "csds" },
  { name: "Raj", branch: "Iot" },
  { name: "Aman", branch: "csai" },
];

export default function Demo22() {
  return (
    <>
      {m.map((obj) => {
        return (
          <p>
            Welcome {obj.name} your branch is {obj.branch}.
          </p>
        );
      })}
    </>
  );
}
