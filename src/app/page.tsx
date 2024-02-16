import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen border-2
  "
    >
      <Header />
      <div className="flex justify-between items-center gap-32 h-full mr-48 ml-32 mt-16 mb-10 ">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}
