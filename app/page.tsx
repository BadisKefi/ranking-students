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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Students And Their Ranks</CardTitle>
            <CardDescription>
              ranks was calculated by comparing just the "moyenne general" and
              if 2 students got the same "moyenne" then they will be given the
              same rank (8 & 8) while the next student after them will get (10
              instead of 9), if this way is wrong you can contact me with the
              correct formula.
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
