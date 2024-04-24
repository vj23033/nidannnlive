import Item from "./Item";
import { PRODUCTS, COMPANY, SUPPORT } from "./Menu";
import Button from "../Button";

const ItemsContainer = () => {
  return (
    <>

      <div className="flex gap-[50px] justify-between flex-wrap  px-5 py-16">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
        <div className="flex flex-col gap-[12px] items-start sm:basis-[30%]  sm:order-none">

          <h1 className='sm:text-[18px] font-bold '>Subscribe to our news letter</h1>
          <p className="sm:text-[18px] leading-[30px] text-[#6F6C90] max-w-full">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
          <input type="email" placeholder="Enter your email" className="rounded-[100px] border outline-none text-[16px] font-medium font-[#6F6C90] py-[22px] px-[25px] w-full mb-[8px]" />
          {/* <Button bg={"purple"} text={"white"} radius={"full"} >Subscribe</Button> */}
          <Button text={"white"} bg={"purpleGradient"} radius={"full"} >
            Subscribe
          </Button>
        </div>

      </div>
    </>
  );
};

export default ItemsContainer;