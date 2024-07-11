"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Student, students_2eme } from "./data";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RankRow } from "./RankRow";

export const columns_2eme: ColumnDef<Student>[] = [
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

      return <RankRow name={name} score={score} array={students_2eme} />;
    },
  },
];
