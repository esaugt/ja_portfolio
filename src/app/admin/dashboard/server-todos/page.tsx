// export const dynamic = 'force-dynamic'
// export const revalidate = 0;

// import { getUserSessionServer } from "@/app/auth/actions/auth-actions";
// import prisma from "@/lib/prisma";
// import { NewTodo } from "@/todos/components/NewTodo";
// import { TodosGrid } from "@/todos/components/TodosGrid";
// // import { NewTodo, TodosGrid } from "@/todos";

// export const metadata = {
//     title: 'Listado de Todos',
//     description: 'SEO Title',
// };


export default async function ServerTodosPage() {
//     const user = await getUserSessionServer()

//     const todos = await prisma.todo.findMany({
//         where: { userId: user?.id },
//         orderBy: { description: 'asc' }
//     });


    return (
        <div>
{/* //             <span className="text-2xl mb-10">Server Actions</span>
//             <div className="w-full px-3 mx-5 mb-5">
//                 <NewTodo />

//             </div>
//             <TodosGrid todos={todos} /> */}

        </div>
    );
}