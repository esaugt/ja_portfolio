import { Footer } from "@/components/Footer/Footer";

export default function HomeLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            {/* <TopMenu />
            <Sidebar /> */}

                {children}

            
            <Footer />
        </main>
    );
}