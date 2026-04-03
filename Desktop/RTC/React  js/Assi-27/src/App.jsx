import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <div>
      <h1 className='Heading'>Products shop</h1>
      <div className='products-container'>
        <ProductCard
          title="Mobile"
          price={100}
          imageUrl="https://cdn-icons-png.flaticon.com/128/186/186239.png"
          description="Mobile phone is a portable device."
        />
        <ProductCard
          title="laptop"
          price={100}
          imageUrl="https://cdn-icons-png.flaticon.com/128/2704/2704414.png"
          description="laptop is a portable computer."
        />
          <ProductCard
          title="Headset"
          price={200}
          imageUrl="https://cdn-icons-png.flaticon.com/128/543/543227.png"
          description="A headset is a device that combines headphones and a microphone."
        />
           <ProductCard
          title="Smart Watch"
          price={199}
          imageUrl="https://cdn-icons-png.flaticon.com/128/10169/10169344.png"
          description="A smart watch is a wearable device that offers various features."
          turnOfDiscount={true}
        />
      </div>



    </div>
  );
}

export default App;
