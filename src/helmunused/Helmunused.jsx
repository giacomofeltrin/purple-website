import "./helmunused.scss";
import Cursor from "./components/cursor/Cursor";
import HelmunusedTool from "./components/tool/HelmunusedTool";
import Navbar from "./components/navbar/Navbar";

const Helmunused = () => {
  return (
    <div>
      <Cursor />
      <section id="Helmunused Tool">
        <Navbar />
        <HelmunusedTool />
      </section>
    </div>
  );
};

export default Helmunused;
