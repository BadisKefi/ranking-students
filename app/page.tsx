import { columns } from "./columns";
import { students } from "./data";
import { DataTable } from "./data-table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber = getRandomNumber(1, 6);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${
        randomNumber === 1
          ? "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
          : randomNumber === 2
          ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
          : randomNumber === 3
          ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
          : randomNumber === 4
          ? "bg-gradient-to-r from-rose-700 to-pink-600"
          : randomNumber === 5
          ? "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400"
          : randomNumber === 6
          ? "bg-gradient-to-r from-emerald-500 to-lime-600"
          : ""
      }`}
    >
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Students And Their Ranks</CardTitle>
            <CardDescription>
              ranks was calculated by comparing just the &quot;moyenne
              general&quot; and if 2 students got the same &quot;moyenne&quot;
              then they will be given the same rank (8 & 8) while the next
              student after them will get (10 instead of 9), if this way is
              wrong you can contact me with the correct formula.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={students} />
          </CardContent>
          <CardFooter>total number of students is {students.length}</CardFooter>
        </Card>
      </div>
    </main>
  );
}
