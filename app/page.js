import Developers from "@/components/Developers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="h-auto bg-[#06152c]">
      <Header />
      <SearchBar />
      <Developers />
      <Footer />
    </div>
  );
}
