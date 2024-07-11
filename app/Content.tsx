import { columns_2eme } from "./columns_2eme";
import { columns_3eme } from "./columns_3eme";
import { students_3eme, students_2eme } from "./data";
import { DataTable } from "./data-table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <CardTitle>🎓 Dsi Students And Their Ranks</CardTitle>
          <CardDescription>
            <p className="leading-7">
              2eme scores & ranks should be correct cause i tested it with some
              other students, the ranks where correct but still waiting to test
              the similar ranked students if this is how it should be, i will
              confirm when getting the answer.
            </p>
            <p className="leading-7">
              Ranks where calculated by comparing just the &quot;moyenne
              general&quot; and if 2 students got the same &quot;moyenne&quot;
              then they will be given the same rank (exp : both 19 & 19) while
              the next student after them will get (21 instead of 20), if this
              way is wrong you can contact me with the correct formula 💭.
              <br />
            </p>
            <p className="leading-7">
              please for the 3eme scores, don't take it seriously & if you found
              a mistake in someones score tell me 💭.
              <br />
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="2eme">
            <TabsList>
              <TabsTrigger value="2eme">2eme</TabsTrigger>
              <TabsTrigger value="3eme">3eme</TabsTrigger>
            </TabsList>
            <TabsContent value="2eme">
              <DataTable columns={columns_2eme} data={students_2eme} />
            </TabsContent>
            <TabsContent value="3eme">
              <DataTable columns={columns_3eme} data={students_3eme} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          total number of students is 2eme: {students_2eme.length} & 3eme:
          {students_3eme.length}
        </CardFooter>
      </Card>
    </div>
  );
}
