import React, { useState, useEffect } from "react";
import { CardTweet } from "../card/CardTweet";
import css from "./CardList.module.css";
import { BsArrowCounterclockwise } from "react-icons/bs";

export const CardList = ({ users, filter }) => {
  const cardsPerRow = 3;
  const [next, setNext] = useState(cardsPerRow);
  const [sortedUsers, setSortedUsers] = useState([]);
  const handleLoadMoreCards = () => {
    setNext(next + cardsPerRow);
  };

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      switch (filter) {
        case "follow":
          return !JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
        case "followings":
          return JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
        case "all":
          return true;
        default:
          return null;
      }
    });
    setSortedUsers(filteredUsers);
  }, [filter, users]);

  return (
    <>
      <div className={css.list}>
        {sortedUsers.slice(0, next).map((user) => (
          <CardTweet key={user.id} user={user} />
        ))}
      </div>
      <div className={css.buttonBox}>
        {next < sortedUsers.length && (
          <button onClick={handleLoadMoreCards} className={css.button}>
            Load more <BsArrowCounterclockwise className={css.icon} />
          </button>
        )}
      </div>
    </>
  );
};

