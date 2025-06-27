import { ReactElement, ReactNode } from "react";
import { LayoutAdminProvider } from "../contexts/admin/AdminContext";

type Props = {
    children: ReactElement
}



export default function AuthLayout({ children }: Props) {
    return (
        <LayoutAdminProvider>
            <LayoutContent>{children}</LayoutContent>
        </LayoutAdminProvider>
    )
}

function LayoutContent({ children }: { children: ReactNode }) {

    return (
        <main className="min-h-screen bg-background ">
            {children}
        </main>
    )
}