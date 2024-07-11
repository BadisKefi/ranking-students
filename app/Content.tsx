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
              when comparing your 2eme rank here to your official university
              rank it may look different a little bit , but i can&apos;t tell
              why , if it&apos;s a problem from my side then it may be because
              of the calculation method or the data itself 🤔.
            </p>
            <p className="leading-7">
              Ranks where calculated by comparing just the &quot;moyenne
              general&quot; and if 2 students got the same &quot;moyenne&quot;
              then they will be given the same rank (exp : both 19 & 19) while
              the next student after them will get (21 instead of 20), if this
              way is wrong you can contact me with the correct formula 💭.
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
