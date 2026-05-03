import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plus,
  List,
  X,
  Check,
  SquarePen,
  Trash,
  ListCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Home = () => {
  return (
    <main className=" w-full h-screen flex justify-center items-center p-6 bg-linear-to-b from-fuchsia-950 to-pink-700 min-h-screen">
      <Card className="w-lg shadow-lg shadow-pink-700 p-1">
        <CardHeader className="gap-2 grid grid-cols-2">
          <CardTitle className="text-center col-span-3">To do list</CardTitle>
          <Input className="col-span-2" placeholder="Digite sua tarefa" />
          <Button
            variant="destructive"
            className="cursor-pointer text-pink-700"
          >
            <Plus /> Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
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

        <div className="mt-4 flex flex-col">
          <div className="px-3">
            <div className="border-t"></div>
          </div>
          <div className="h-10 flex items-stretch gap-2 px-3 justify-between">
            <div className="w-1 bg-fuchsia-600"></div>

            <p className="flex-1 mt-2 items-center text-sm ">Te amo Ana</p>
            <div className="flex px-2 gap-1">
              <SquarePen className="mt-2" />
              <Trash className="mt-2" />
            </div>
          </div>
          <div className="px-3">
            <div className="border-b"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-2 gap-4">
          <div className="flex items-center gap-2 ml-3">
            <ListCheck size={14} />
            <p className="text-xs">Tarefas concluídas (3/3)</p>
          </div>
        </div>
        <div className="mx-2">
          <div className="w-full h-2 bg-linear-to-r from-pink-500 to-purple-500 rounded-md">
            <div className="h-full bg"></div>
          </div>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="text-xs text-pink-700 h-6 inline-flex items-center gap-1"
              >
                <Trash size={14} /> Limpar tarefas concluidas
              </Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>
              Tem certeza que deseja excluir x itens?
            </AlertDialogTitle>
            <AlertDialogDescription>Te amo ana</AlertDialogDescription>

            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-linear-to-r cursor-pointer from-pink-500 to-purple-500 hover:opacity-50 transition duration-300">
              Continue
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>

        <CardFooter></CardFooter>
      </Card>
    </main>
  );
};
export default Home;
