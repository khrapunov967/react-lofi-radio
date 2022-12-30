import MusicPlayer from "./components/MusicPlayer";
import RootLayout from "./components/RootLayout";
import LofiBanner from "./assets/images/lofi-banner.svg";

const App: React.FC = () => {
  return (
    <RootLayout>
      <div
        className="fixed w-full min-h-screen bg-[#2F1B41] bg-opacity-50"
      />

      <section className="w-full min-h-screen flex justify-center items-center">
        <div className="z-40 w-fit">
          <img 
            src={LofiBanner} 
            alt="Lofi Radio" 
            className="w-[256px] h-[128px]"
          />

          <MusicPlayer />
        </div>
      </section>
    </RootLayout>
  );
}

export default App;
