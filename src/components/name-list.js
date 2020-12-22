import React from "react";

export default function NameList({ nameList, onNameClick }) {
  return (
    <ul>
      {nameList.map((name) => (
        <li
          key={name.id}
          className={name.sex}
          onClick={() => onNameClick(name.id)}
        >
          {name.name}
        </li>
      ))}
    </ul>
  );
}
