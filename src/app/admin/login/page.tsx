'use client';

import { useLayoutAdminContext } from "@/context/admin/AdminContext";
import { JoshepAlvarez } from "@/components/Ui/JoshepAlvarez";
import { redirect } from "next/navigation";
import { LoginForm } from "./ui/LoginForm";

export default function SignIn() {

  const { isLoged } = useLayoutAdminContext()

  if (isLoged != false) (
    redirect('/')
  )

  return (
    <section className="m-8 flex gap-4 justify-center items-center">

      <div className="w-1/2 mt-24">

        <div className="text-center text-sm">
          <JoshepAlvarez/>
        </div>

        <LoginForm/>
        
      </div>

    </section>
  );
}
