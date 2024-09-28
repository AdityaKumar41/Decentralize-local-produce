import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { useAllProduct } from "@/hooks/product";
import UnsplashImage from "@/components/ImageRender";
import { ethers } from "ethers";
import { Skeleton } from "@nextui-org/skeleton";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
}

export default function DecentralizedMarketplace() {
  const { product, isLoading } = useAllProduct();

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
              {!isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {product?.getAllProducts?.slice(0, 4).map((i: Product) => (
                    <Card key={i.id}>
                      <CardHeader>
                        <UnsplashImage productName={i.name} altText={i.name} />
                      </CardHeader>
                      <CardBody>
                        {/* <CardTitle>Local Product {i}</CardTitle> */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {i.seller}
                        </p>
                      </CardBody>
                      <CardFooter className="flex justify-between items-stretch flex-col">
                        <span className="font-bold">
                          {ethers.utils.formatEther(i.price)} AVAX
                        </span>
                        <Link to={"/product"}>
                          {" "}
                          <Button size="sm">Add to Cart</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="w-[250px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                      <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                  <Card className="w-[250px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                      <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                  <Card className="w-[250px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                      <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                  <Card className="w-[250px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                      <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
