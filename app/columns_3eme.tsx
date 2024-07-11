"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Student, students_3eme } from "./data";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "./AlgorithmRadio";

export const columns_3eme: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
  {
    id: "rank",
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rank
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const score = parseFloat(row.getValue("score"));
      const name = row.getValue("name") as string;
      const { algorithm, change } = useStore();
      const calculateRank = (
        name: string,
        score: number,
        array: Student[],
        algorithm: "genuine" | "institution"
      ): number => {
        let rank = 1;

        if (algorithm === "genuine") {
          // Sort students by score in descending order
          array.sort((a, b) => b.score - a.score);
          // Find the rank based on the score
          for (let i = 0; i < array.length; i++) {
            if (array[i].score > score) {
              rank++;
            } else if (array[i].score === score) {
              break;
            }
          }
        } else if (algorithm === "institution") {
          // Sort students by score in descending order and maintain original order for ties
          array.sort(
            (a, b) => b.score - a.score || a.name.localeCompare(b.name)
          );
          // Find the rank based on the position in the array
          for (let i = 0; i < array.length; i++) {
            if (
              array[i].score > score ||
              (array[i].score === score &&
                array[i].name.localeCompare(name) < 0)
            ) {
              rank++;
            } else if (array[i].score === score && array[i].name === name) {
              break;
            }
          }
        }

        return rank;
      };

      return (
        <div className="text-right font-medium">
          {calculateRank(name, score, students_3eme, algorithm)}
        </div>
      );
    },
  },
];
