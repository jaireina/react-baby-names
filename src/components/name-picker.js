import React from "react";
import NameList from "./name-list";
import { useNames } from "../providers/names";
import { useAppState } from "../providers/app-state";

export function NamePicker() {
  const { searchValue, shortlist, setShortList } = useAppState();
  const names = useNames();
  const filteredNames = names
    .filter((name) =>
      name.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((name) => !shortlist.includes(name.id));

  function addToShortlist(id) {
    setShortList([...shortlist, id]);
  }

  return (
    <NameList nameList={filteredNames} onNameClick={addToShortlist}></NameList>
  );
}
