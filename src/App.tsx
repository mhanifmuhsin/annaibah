// import "./App.css";

import Banner from "./components/banner";
import BottomNavigation from "./components/bottom-navigation";
import InfoFeatures from "./components/InfoFeatures";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* konten utama */}
        <div className="mx-auto w-full max-w-md flex-1 bg-white shadow-md">
          <Banner />
          <InfoFeatures />
        </div>
        <section></section>

        {/* bottom navigation selalu di bawah */}
        <BottomNavigation />
      </div>
    </>
  );
}

export default App;
