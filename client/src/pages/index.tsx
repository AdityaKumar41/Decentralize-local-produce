import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";

export default function DecentralizedMarketplace() {
  const data = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      discription: "Fresh from local producers",
      image: "/image1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      discription: "Fresh from local producers",
      image: "/image2.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      price: 19.99,
      discription: "Fresh from local producers",
      image: "/image3.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      price: 19.99,
      discription: "Fresh from local producers",
      image: "/image4.jpg",
    },
  ];
  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Decentralized Marketplace for Local Producers
                  </h1>
                  <p className="mx-auto max-w-[700px] text-black md:text-xl dark:text-white">
                    Connect directly with local producers. Buy fresh, support
                    local, and build a sustainable community.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>
                    <Link to={"/product"}>Browse Products</Link>
                  </Button>
                  <Button variant="bordered">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                Featured Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((i) => (
                  <Card key={i.id}>
                    <CardHeader>
                      <img
                        src={i.image}
                        alt={`Product ${i}`}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      {/* <CardTitle>Local Product {i}</CardTitle> */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {i.discription}
                      </p>
                    </CardBody>
                    <CardFooter className="flex justify-between">
                      <span className="font-bold">${i.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
