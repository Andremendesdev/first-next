import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center p-24 bg-linear-to-b from-slate-950 to-slate-600 min-h-screen">
      <Card>
        {" "}
        <Card className="w-lg">
          <CardHeader className="gap-2 grid grid-cols-2">
            <CardTitle className="text-center col-span-3">To do list</CardTitle>
            <Input className="col-span-2" placeholder="Digite sua tarefa" />
            <Button variant="destructive" className="cursor-pointer ">
              <Plus /> Cadastrar
            </Button>
          </CardHeader>
          <CardContent>
            <Separator className="my-4" />

            <Badge>todos</Badge>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Card>
    </main>
  );
};
export default Home;
