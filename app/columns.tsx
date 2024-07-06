"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Student, students } from "./data";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Student>[] = [
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

      const calculateRank = (score: number, array: Student[]) => {
        const sortedStudents = array.slice().sort((a, b) => b.score - a.score);
        let rank = 0;
        for (let i = 0; i < sortedStudents.length; i++) {
          if (score < sortedStudents[i].score) {
            rank++;
          } else if (score === sortedStudents[i].score) {
            if (
              i > 0 &&
              sortedStudents[i].score === sortedStudents[i - 1].score
            ) {
              rank = rank;
            } else {
              rank++;
            }
          } else {
            break;
          }
        }
        return rank;
      };
      return (
        <div className="text-right font-medium">
          {calculateRank(score, students)}
        </div>
      );
    },
  },
];
