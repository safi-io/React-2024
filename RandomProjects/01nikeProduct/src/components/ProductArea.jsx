import amazon from "../assets/amazon.png"
import flipkart from "../assets/flipkart.png"
import shoe_image from "../assets/shoe_image.png"
import './ProductArea.css'

export default function ProductArea() {
  return (
    <section className="flex items-center justify-evenly m-auto h-full mt-16 main">
      <div className="max-w-[600px] h-[500px] text">
        <h1 className="text-black font-black text-[90px] leading-[70px] tracking-wide">
          YOUR FEET
          <br /> DESERVE
          <br /> THE BEST
        </h1>
        <p className="text-[#5A5959] mt-10 font-semibold">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
          <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>
        <div className="flex items-center justify-start mt-5 gap-7">
          <button className="bg-[#D01C28] text-white p-1 px-4 border-2 border-solid border-[#D01C28]">
            Shop Now
          </button>
          <button className="p-1 px-4 border-2 border-solid border-[#5A5959] font-semibold text-[#5A5959]">
            Category
          </button>
        </div>

        <div className="mt-5">
            <div className="text">
                <p className="text-[#5A5959]">Also Available On</p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-2 ecommerce">
                <img src={amazon} alt="flipkart_logo" className="order-2" />
                <img src={flipkart} alt="amazon_logo"/>
            </div>
        </div>

      </div>

      <div className="flex items-center justify-end max-w-[500px] img">

        <img src={shoe_image} alt="shoe_image"/>
      </div>
    </section>
  );
}
