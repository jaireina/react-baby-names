import React, { useRef, useEffect } from "react";
import { useAppState } from "../providers/app-state";

export default function Search() {
  const { searchValue, updateSearchValue } = useAppState();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={(e) => updateSearchValue(e.target.value)}
      />
    </header>
  );
}
