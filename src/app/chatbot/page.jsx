import Chatbot from "@/src/componentes/chatbot/chatbot";
import Header from "@/src/componentes/header/headerUser";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header bgColor="#003786" />
        <Wave bgColor="#003786" position="relative" />
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}
