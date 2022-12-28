import MusicPlayer from "./components/MusicPlayer";
import RootLayout from "./components/RootLayout";
import LofiBanner from "./assets/images/lofi-banner.svg";

const App: React.FC = () => {
  return (
    <RootLayout>
      <section className="w-full min-h-screen flex justify-center items-center">
        <div className="w-fit">
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
