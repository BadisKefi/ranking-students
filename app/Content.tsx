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

export default function Content() {
  return (
    <div className="px-2 md:container mx-auto py-2 md:py-5 lg:py-10">
      <Card>
        <CardHeader>
          <CardTitle>Students And Their Ranks</CardTitle>
          <CardDescription>
            ranks was calculated by comparing just the &quot;moyenne
            general&quot; and if 2 students got the same &quot;moyenne&quot;
            then they will be given the same rank (8 & 8) while the next student
            after them will get (10 instead of 9), if this way is wrong you can
            contact me with the correct formula.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={students} />
        </CardContent>
        <CardFooter>total number of students is {students.length}</CardFooter>
      </Card>
    </div>
  );
}
