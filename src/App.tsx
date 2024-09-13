import VaraComponent from "./components/VaraComponent.tsx";
import FadeUp from "./components/FadeUp.tsx";
import Letter from "./components/Letter.tsx";
import Cake from "./components/Cake.tsx";
import ReactConfetti from "react-confetti";

function App() {
  return (<>
    <div className="fixed top-0">
      <ReactConfetti />
    </div>
    <div className="overflow-x-hidden z-40">
      <div className="w-screen flex justify-center items-center mt-20 flex-col">
        <VaraComponent text={"Hello Ary! :3"} />
        <FadeUp delay={1000}>
          <div className="flex justify-center items-center">
            <Letter />
          </div>
        </FadeUp>
        <h1 className="font-extrabold text-4xl m-10 mb-0 text-center">Alssssooooo, CAKEEE!!!</h1>
        <p className="text-sm font-thin mx-10 text-center">yes, you can move it around and yes I made the 3D cake</p>
        <div className="md:w-1/3 w-screen h-[20rem] items-center justify-center mb-10">
          <Cake />
        </div>
      </div>
    </div>
  </>);
}

export default App;
