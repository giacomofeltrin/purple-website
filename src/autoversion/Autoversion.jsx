import "./autoversion.scss";
import Cursor from "./components/cursor/Cursor";
import AutoversionTool from "./components/tool/AutoversionTool";
import Navbar from "./components/navbar/Navbar";

const Autoversion = () => {
  return (
    <div>
      <Cursor />
      <section id="Autoversion Tool">
        <Navbar />
        <AutoversionTool />
      </section>
    </div>
  );
};

export default Autoversion;
