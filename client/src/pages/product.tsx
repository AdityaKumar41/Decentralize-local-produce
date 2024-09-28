import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import ABI from "@/abi.json";
import { Slider } from "@nextui-org/slider";
import { IconShoppingCart } from "@tabler/icons-react";
import DefaultLayout from "@/layouts/default";
import { useAllProduct } from "@/hooks/product";
import { Skeleton } from "@nextui-org/skeleton";
import { ethers } from "ethers";
import UnsplashImage from "@/components/ImageRender";
import toast from "react-hot-toast";

const WalletAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

console.log(WalletAddress);

const contractABI = ABI;
console.log(contractABI);

export default function ProductSection() {
  const { product, isLoading } = useAllProduct();
  // const { setAllProducts, getAllProducts } = useAppStore();
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // useEffect(() => {
  //   async () => {
  //     try {
  //       if (window.ethereum) {
  //         const provider = new ethers.providers.Web3Provider(window.ethereum);
  //         const account = await provider.send("eth_requestAccounts", []);

  //       }
  //     } catch (error) {}
  //   };
  // }, []);

  const buyProduct = async (product: Product) => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined") {
        alert("Please install MetaMask to make purchases.");
        return;
      }
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Create a new ethers provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // Create contract instance
      const contract = new ethers.Contract(WalletAddress, contractABI, signer);
      // Convert price to wei
      const priceInWei = ethers.utils.parseEther(product.price.toString());

      // Call the buyProduct function
      const transaction = await contract.buyProduct(product.id, {
        value: priceInWei,
      });
      // Wait for the transaction to be mined
      const receipt = await transaction.wait();
      console.log("Transaction receipt:", receipt);
      toast.success("Product purchased successfully!");
    } catch (error) {
      toast.error("You can't buy your own product.");
    } finally {
      // console.log("done");
    }
  };

  interface Product {
    id: number;
    name: string;
    price: number;
    seller: string;
  }

  // const filteredProducts = product
  //   .filter(
  //     (product) =>
  //       (selectedCategory === "All" || product.category === selectedCategory) &&
  //       product.price >= priceRange[0] &&
  //       product.price <= priceRange[1]
  //   )
  //   .sort((a, b) => {
  //     if (sortBy === "price") return a.price - b.price;
  //     if (sortBy === "rating") return b.rating - a.rating;
  //     return a.name.localeCompare(b.name);
  //   });
  return (
    <DefaultLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Local Products
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Category
                  </label>
                  <Select onSelect={() => setSelectedCategory}>
                    <SelectSection>
                      <SelectItem key={"1"} value="All">
                        All Categories
                      </SelectItem>
                      <SelectItem key={"2"} value="Dairy & Eggs">
                        Dairy & Eggs
                      </SelectItem>
                      <SelectItem key={"3"} value="Vegetables">
                        Vegetables
                      </SelectItem>
                      <SelectItem key={"4"} value="Bakery">
                        Bakery
                      </SelectItem>
                      <SelectItem key={"5"} value="Meat">
                        Meat
                      </SelectItem>
                      <SelectItem key={"6"} value="Pantry">
                        Pantry
                      </SelectItem>
                    </SelectSection>
                  </Select>
                </div>
                <div>
                  <Slider
                    label="Price Range"
                    step={0.01}
                    maxValue={1}
                    minValue={0}
                    defaultValue={0.4}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">
                  {product?.getAllProducts.length} products found
                </p>
                <Select onSelect={(value) => setSortBy("")} className="w-1/3">
                  <SelectSection>
                    <SelectItem key={"1"} value="name">
                      Name
                    </SelectItem>
                    <SelectItem key={"2"} value="price">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem key={"3"} value="rating">
                      Rating: High to Low
                    </SelectItem>
                  </SelectSection>
                </Select>
              </div>

              {!isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product?.getAllProducts.map((product: Product) => (
                    <Card key={product.id}>
                      <CardHeader>
                        <UnsplashImage
                          productName={product.name}
                          altText={product.name}
                        />
                      </CardHeader>
                      <CardBody>
                        <CardHeader>{product.name}</CardHeader>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {product.seller}
                        </p>
                        {/* <div className="flex items-center mt-2">
                        <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {product.rating.toFixed(1)}
                        </span>
                      </div> */}
                        {/* <Badge variant="solid" className="mt-2">
                    {product.category}
                    </Badge> */}
                      </CardBody>
                      <CardFooter className="flex justify-between items-stretch flex-col">
                        <span className="text-lg font-bold my-4">
                          {ethers.utils.formatEther(product.price)} AVAX
                        </span>
                        <Button size="sm" onClick={() => buyProduct(product)}>
                          <IconShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
