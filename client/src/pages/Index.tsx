import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import ProductsGrid from "../components/ProductsGrid";
import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";

const Index: React.FC = () => {
  const imagesPath: string[] = [bg1, bg2];

  useEffect(() => {
    document.title = "Chupee";
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 w-full sm:px-8 md:px-12">
          <div className="mx-auto flex flex-col flex-1 max-w-[1400px] sm:mt-4">
            <div className="w-full h-[27vw] min-h-[340px]">
              <Carousel className="overflow-hidden rounded-sm">
                {imagesPath.map((path) => (
                  <img
                    key={path}
                    src={path}
                    alt={path}
                    className="object-cover object-center h-full w-full"
                  />
                ))}
              </Carousel>
            </div>
            <ProductsGrid />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Index;
