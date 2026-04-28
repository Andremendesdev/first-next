import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";



const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center p-24 bg-gradient-to-b from-slate-950 to-slate-600 min-h-screen">
      <Input placeholder="Digite sua tarefa"/>
      <Button variant="destructive">Hello World</Button>
      <Card>      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
         <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
  </CardHeader>
        <CardContent>
             <p>Card Content</p>
         </CardContent>
      <CardFooter>
            <p>Card Footer</p>
     </CardFooter>
  </Card>
</Card>
    </main>
  )
} 
export default Home;