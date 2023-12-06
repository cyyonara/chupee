import React from "react";

const ShopArticle: React.FC = () => {
  return (
    <div className="flex flex-col text-white">
      <h2 className="text-[clamp(20px,10vh,34px)]">
        Welcome to Chupee – Your Ultimate Destination for Premium Computer Peripherals!
      </h2>
      <div className="flex flex-col mt-8 gap-y-1">
        <p>
          At Chupee, we're more than just a store; we're your go-to hub for top-notch computer parts
          and accessories. Dive into a world of cutting-edge technology where performance meets
          precision.
        </p>
        <p>
          Explore our extensive range of high-quality peripherals, from gaming gear that takes your
          experience to the next level to productivity tools that enhance your work environment.
          Whether you're a tech enthusiast, gamer, or professional, we've got the perfect components
          to elevate your computing journey.
        </p>
        <p>
          Our commitment to excellence extends beyond products to unparalleled customer service.
          Feel free to reach out to our knowledgeable team for expert advice or assistance. Your
          satisfaction is our priority!
        </p>
      </div>
    </div>
  );
};

export default ShopArticle;
