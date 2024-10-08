"use client";
import React, { useEffect, useState } from "react";
import scss from "./LookForTrack.module.scss";
import { DebounceInput } from "react-debounce-input";
import { useRouter } from "next/navigation";
import { FaCompass } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const LookForTracks = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [hasUserInput, setHasUserInput] = useState(false);

  useEffect(() => {
    if (hasUserInput) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push(`/search`);
      }
    }
  }, [searchQuery, hasUserInput]);

  return (
    <>
      <DebounceInput
        className={scss.input}
        placeholder="What do you want to turn on ?"
        minLength={2}
        debounceTimeout={300}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          setHasUserInput(true);
        }}
        value={searchQuery}
        onFocus={() => router.push(`/search`)}
      />
    </>
  );
};

export default LookForTracks;
