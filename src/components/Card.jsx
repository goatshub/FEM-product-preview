import cartIcon from "/images/icon-cart.svg";

const Card = () => {
  return (
    <section className="m-4 rounded-xl overflow-hidden xsm:grid xsm:grid-cols-2 xsm:max-w-[600px]">
      <div className="h-60 xsm:h-full  bg-cover bg-[url('/images/image-product-mobile.jpg')] xsm:bg-[url('/images/image-product-desktop.jpg')]"></div>
      <div className="bg-white p-5 xsm:p-8 ">
        <p className="uppercase tracking-[0.3em] text-xs">Perfume</p>
        <h1 className="font-fraunces text-very-dark-blue text-bold leading-8 text-[2rem]">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex flex-wrap mt-5 xsm:mt-7 gap-x-4 items-center">
          <h1 className="text-dark-cyan font-fraunces text-3xl">$149.99</h1>
          <span className="line-through">$169.99</span>
        </div>
        <button className="bg-dark-cyan mt-5 hover:bg-darker-cyan flex gap-3 place-content-center text-white w-full p-3.5 rounded-lg">
          <img src={cartIcon} alt="Cart Icon" />
          <span className="font-semibold">Add to Cart</span>
        </button>
      </div>
    </section>
  );
};
export default Card;
