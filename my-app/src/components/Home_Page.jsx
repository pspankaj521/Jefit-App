import Navbar from "./navbar"
import BlueBox from "./home_blue_sec";
import Auto_Slider from "./Auto_Slider";
import Three_Vertical from "./three_vertical_div";
import Tree_Black_Box from "./three_black_box";
import Footer from "./footer";

function Home_Page() {
  return (
    <div>
      <Navbar />
      <BlueBox />
      <Auto_Slider />
      <Three_Vertical />
      <Tree_Black_Box />
      <Footer/>
    </div>
  );
}

export default Home_Page;
