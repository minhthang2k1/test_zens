import React, { useState, useEffect } from "react";
import { notification } from "antd";

import "./Content.css";

const Content = () => {
  const Jokes = [
    {
      id: 1,
      desc: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    },
    {
      id: 2,
      desc: 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    },
    {
      id: 3,
      desc: 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"',
    },
    {
      id: 4,
      desc: 'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
    },
  ];

  const [currentJokeIndex, setCurrentJokeIndex] = useState(-1);
  const [displayedJokes, setDisplayedJokes] = useState(() => {
    const savedJokes = localStorage.getItem("displayedJokes");
    return savedJokes ? JSON.parse(savedJokes) : [];
  });
  const [votedJokes, setVotedJokes] = useState(() => {
    const savedVotes = localStorage.getItem("votedJokes");
    return savedVotes ? JSON.parse(savedVotes) : {};
  });

  useEffect(() => {
    localStorage.setItem("displayedJokes", JSON.stringify(displayedJokes));
  }, [displayedJokes]);

  useEffect(() => {
    localStorage.setItem("votedJokes", JSON.stringify(votedJokes));
  }, [votedJokes]);

  useEffect(() => {
    handleNextJoke();
  }, []);

  const handleNextJoke = () => {
    if (displayedJokes.length === Jokes.length) {
      notification.info({
        message: "That's all the jokes for today! Come back another day!",
        duration: 4,
      });
      return setCurrentJokeIndex(-1);
    }

    const remainingJokes = Jokes.filter(
      (joke) => !displayedJokes.includes(joke.desc)
    );

    if (remainingJokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingJokes.length);
      const nextJoke = remainingJokes[randomIndex];
      const nextJokeIndex = Jokes.findIndex(
        (joke) => joke.desc === nextJoke.desc
      );
      setCurrentJokeIndex(nextJokeIndex);
      setDisplayedJokes([...displayedJokes, nextJoke.desc]);
    } else {
      setCurrentJokeIndex(-1);
    }
  };

  const handleVote = (voteType) => {
    if (currentJokeIndex !== -1) {
      const jokeId = Jokes[currentJokeIndex].id;
      setVotedJokes((prevVotes) => ({
        ...prevVotes,
        [jokeId]: voteType,
      }));
    }
  };

  return (
    <div className="container">
      <div id="content" className="content">
        <p className="desc">
          {currentJokeIndex === -1
            ? "That's all the jokes for today! Come back another day!"
            : Jokes[currentJokeIndex]?.desc}
        </p>
        <div className="btn">
          <button
            className="funny"
            onClick={() => {
              handleNextJoke();
              handleVote("funny");
            }}
          >
            This is funny!
          </button>
          <button
            className="bore"
            onClick={() => {
              handleNextJoke();
              handleVote("boring");
            }}
          >
            This is not funny.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
