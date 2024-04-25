import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Toaster
        toastOptions={{
          duration: 2500,
          classNames: {
            error: "text-red-900 bg-red-300 border-red-900 p-4",
            success: "text-green-900 bg-green-300 border-green-900 p-4",
            warning: "text-yellow-900 bg-yellow-300 border-yellow-900 p-4",
            info: "text-blue-900 bg-blue-300 border-blue-900 p-4",
            closeButton: "bg-accent dark:bg-foreground border-current",
          },
        }}
      />
      <Footer />
    </>
  );
}
