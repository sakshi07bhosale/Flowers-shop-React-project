import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "./../../config";
import PageTitle from "../../components/PageTitle/PageTitle";
function Home() {
  return (
    <div className="main-container">
      <Navbar active="Home" />
      <PageTitle title="Welcome to our Flowers shop..!!!" 
      subtitle={"We are the best in the business"} />

      <BodyContainer>
      <div className="products-container">
        {PRODUCTS.map((product) => {
        return <ProductCard product={product} />;
      })}
      </div>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Home;
