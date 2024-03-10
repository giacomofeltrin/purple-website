import "./chobe.scss";
import Cursor from "./components/cursor/Cursor";
import ChobeTool from "./components/tool/ChobeTool";
import Navbar from "./components/navbar/Navbar";

const Chobe = () => {
  return (
    <div>
      <Cursor />
      <section id="Chobe Tool">
        <Navbar />
        <ChobeTool />
      </section>
    </div>
  );
};

export default Chobe;
