import React from "react";
import { useAppState } from "../providers/app-state";
import { useNames } from "../providers/names";
import NameList from "./name-list";

export default function ShortList() {
  const { shortlist, setShortList } = useAppState();
  const names = useNames();
  const shortListedNames = names.filter((name) => shortlist.includes(name.id));

  function removeFromShortList(id) {
    setShortList(shortlist.filter((item) => item !== id));
  }

  const hasNames = shortlist.length > 0;
  return (
    <div className="short-list">
      <h2>{hasNames ? "Your shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
        <>
          <NameList
            nameList={shortListedNames}
            onNameClick={removeFromShortList}
          ></NameList>
          <hr />
        </>
      )}
    </div>
  );
}
