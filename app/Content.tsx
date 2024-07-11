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
              2eme values are correct and using the perfect algorithm to give
              all students what they deserve, but sadly the institution is not
              doing exactly that.
            </p>
            <p className="leading-7">
              let me explain what i mean : if 2 students got the same score then
              they should get the same rank, but the institution is not giving
              them te same rank, instead the alphabetic name who comes first get
              the good rank.
            </p>
            <p className="leading-7">
              so if what you read here is not the same as what the institution
              wrote for you then its because there is someone else before your
              name who got the same score as you. i'm so sorry for you 💔
            </p>
            <p className="leading-7">
              Ranks here where calculated by comparing just the &quot;moyenne
              general&quot; and if 2 students got the same &quot;moyenne&quot;
              then they will be given the same rank (exp : both 19 & 19) while
              the next student after them will get (21 instead of 20 : to keep
              the total in sync), this is the perfect algorithm but the
              institution is not using it 💭 so some students who got the same
              rank as others must add +n where n is the number of students who
              got the same rank as them.
              <br />
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
