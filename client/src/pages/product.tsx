import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Slider } from "@nextui-org/slider";
import { Badge } from "@nextui-org/badge";
import { IconShoppingCart, IconStar } from "@tabler/icons-react";
import DefaultLayout from "@/layouts/default";

const products = [
  {
    id: 1,
    name: "Farm Fresh Eggs",
    price: 4.99,
    category: "Dairy & Eggs",
    rating: 4.5,
    producer: "Happy Hens Farm",
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    price: 3.49,
    category: "Vegetables",
    rating: 4.2,
    producer: "Sunshine Organics",
  },
  {
    id: 3,
    name: "Artisan Sourdough Bread",
    price: 6.99,
    category: "Bakery",
    rating: 4.8,
    producer: "Local Loaves",
  },
  {
    id: 4,
    name: "Grass-fed Ground Beef",
    price: 8.99,
    category: "Meat",
    rating: 4.6,
    producer: "Green Pastures Ranch",
  },
  {
    id: 5,
    name: "Honey",
    price: 7.49,
    category: "Pantry",
    rating: 4.9,
    producer: "Busy Bees Apiary",
  },
  {
    id: 6,
    name: "Fresh Goat Cheese",
    price: 5.99,
    category: "Dairy & Eggs",
    rating: 4.3,
    producer: "Mountain Meadow Dairy",
  },
];

export default function ProductSection() {
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

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
                  {filteredProducts.length} products found
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <img
                        src={`/image1.jpg`}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </CardHeader>
                    <CardBody>
                      <CardHeader>{product.name}</CardHeader>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {product.producer}
                      </p>
                      <div className="flex items-center mt-2">
                        <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <Badge variant="solid" className="mt-2">
                        {product.category}
                      </Badge>
                    </CardBody>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button size="sm">
                        <IconShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
