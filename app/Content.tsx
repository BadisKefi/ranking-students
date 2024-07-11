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
import { AlgorithmRadio } from "./AlgorithmRadio";

export default function Content() {
  return (
    <div className="px-1 w-full md:container mx-auto py-2 md:py-5 lg:py-10">
      <Card>
        <CardHeader>
          <CardTitle>🎓 Dsi Students And Their Ranks</CardTitle>
          <CardDescription>
            <p className="leading-8 text-red-500">READ CAREFULLY!</p>
            <p className="leading-7">
              Values are verified by multiple students ✅.
            </p>

            <p className="leading-7">
              the institution is not using a genuine algorithm 💔 💭.
            </p>
            <p className="leading-7">
              let me explain what i mean : if 2 students got the same score then
              they should get the same rank, but the institution is not giving
              them te same rank, instead the alphabetic name who comes first get
              the good rank.
            </p>

            <AlgorithmRadio />
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
