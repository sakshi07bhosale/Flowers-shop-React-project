import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Card({children}){
  return (
    <div className="card">
      {children}
    </div>
  );

}
function Home() {
  return (
    <div>
      <Navbar />
      Home
      <Card>Hiii</Card>
      <Card>Hello</Card>
       <Card><h1>Hello</h1></Card>
      <Footer />
    </div>
  );
}

export default Home;
