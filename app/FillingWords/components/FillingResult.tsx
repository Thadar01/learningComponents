"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";

const FillingResult = () => {
  const params = useSearchParams();
  const score = Number(params.get("score")) || 0; // Get score from URL
  const difficulty = params.get("difficulty") || "easy"; // Get difficulty from URL (default to 'easy')

  const [highestScore, setHighestScore] = useState<number>(0);

  useEffect(() => {
    // Map difficulty to its corresponding localStorage key
    const difficultyKeyMap: Record<string, string> = {
      easy: "fillingEasyScore",
      medium: "fillingMediumScore",
      hard: "fillingHardScore",
    };

    const storageKey = difficultyKeyMap[difficulty];
    console.log(storageKey);

    // Get the highest score for the difficulty
    const storedScore = Number(localStorage.getItem(storageKey)) || 0;
    setHighestScore(storedScore);

    // Update the highest score if the current score exceeds it
    if (score > storedScore) {
      setHighestScore(score);
      localStorage.setItem(storageKey, score.toString());
    }
  }, [score, difficulty]);
  return (
    <div className="w-[40%] flex flex-col justify-center items-center gap-4">
      <div className="bg-[#A6BBC966] backdrop-blur-sm w-full flex flex-col justify-center items-center p-7 rounded-xl gap-3">
        {score <= 500 ? (
          <>
            <h1 className=" font-bold text-[20px]">Defeat</h1>
            <h2 className=" font-bold">Nice try!</h2>
          </>
        ) : (
          <>
            <h1 className=" font-bold text-[20px]">Victory</h1>
            <h2 className=" font-bold">You Are Amazing!</h2>
          </>
        )}

        <div className="bg-white bg-opacity-30 w-[90%] flex justify-center items-center rounded-xl h-[50px] mt-5">
          <p className=" font-bold">Score: {score}</p>
        </div>
        <div className="bg-white bg-opacity-30 w-[90%] flex justify-center items-center rounded-xl h-[50px] mt-2">
          <p className=" font-bold">Highest Score : {highestScore}</p>
        </div>
      </div>
      <Link
        className="bg-[#009DEB] w-[140px] h-[50px] flex justify-center items-center rounded-xl border-x-1 border-t-1 border-b-4 border-[#1481B8] gap-2"
        href={"/FillingWords"}
      >
        <p className="text-white font-bold">Play Again</p>
        <BsArrowRepeat className="text-white text-[20px]" />
      </Link>
    </div>
  );
};

export default FillingResult;
