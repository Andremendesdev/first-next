import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, List, X, Check, SquarePen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center p-24 bg-linear-to-b from-slate-950 to-slate-600 min-h-screen">
      <Card className="w-lg shadow-lg shadow-pink-700">
        <CardHeader className="gap-2 grid grid-cols-2">
          <CardTitle className="text-center col-span-3">To do list</CardTitle>
          <Input className="col-span-2" placeholder="Digite sua tarefa" />
          <Button variant="destructive" className="cursor-pointer ">
            <Plus /> Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator />
          <div className="flex gap-1 ">
            <Badge className="cursor-pointer bg-pink-600">
              <List />
              todos
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <X /> Não finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="secondary">
              <Check /> Concluídas
            </Badge>
          </div>
        </CardContent>

        <div className="mt-4 border-b">
          <div className="flex items-center h-14 border-t">
            <div className="h-full w-1 bg-fuchsia-800"></div>
            <SquarePen />
            <p className="flex-1 px-2 text-sm"> Te amo Ana</p>
          </div>
        </div>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};
export default Home;
