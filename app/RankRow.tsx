"use client";
import { useStore } from "./AlgorithmRadio";
import { Student } from "./data";

export function RankRow({
  name,
  score,
  array,
}: {
  name: string;
  score: number;
  array: Student[];
}) {
  const { algorithm, change } = useStore();
  const calculateRank = (): number => {
    let rank = 1;

    if (algorithm === "genuine") {
      array.sort((a, b) => b.score - a.score);
      for (let i = 0; i < array.length; i++) {
        if (array[i].score > score) {
          rank++;
        } else if (array[i].score === score) {
          break;
        }
      }
    } else if (algorithm === "institution") {
      array.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
      for (let i = 0; i < array.length; i++) {
        if (
          array[i].score > score ||
          (array[i].score === score && array[i].name.localeCompare(name) < 0)
        ) {
          rank++;
        } else if (array[i].score === score && array[i].name === name) {
          break;
        }
      }
    }
    return rank;
  };

  return <div className="text-right font-medium">{calculateRank()}</div>;
}
