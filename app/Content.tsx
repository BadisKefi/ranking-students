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
    <div className="px-1 w-full md:container mx-auto py-2 md:py-5 lg:py-10">
      <Card>
        <CardHeader>
          <CardTitle>Students 3eme DSI And Their Ranks</CardTitle>
          <CardDescription>
            ranks was calculated by comparing just the &quot;moyenne
            general&quot; and if 2 students got the same &quot;moyenne&quot;
            then they will be given the same rank (exp : both 19 & 19) while the
            next student after them will get (21 instead of 20), if this way is
            wrong you can contact me with the correct formula.
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
