import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { IconUser, IconStar, IconArrowRight } from "@tabler/icons-react";
import DefaultLayout from "@/layouts/default";
export default function ProducerPage() {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-white dark:bg-black">
        <header className="bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Producers
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Featured Producers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Berry Patch Farm", rating: 4.3, products: 15 },
                  { name: "Green Acres Organic", rating: 4.7, products: 23 },
                  { name: "Sunshine Valley Fruits", rating: 4.5, products: 18 },
                ].map((producer) => (
                  <Card key={producer.name} className="p-3">
                    <CardHeader className="flex items-center">
                      <IconUser className="mr-2" />
                      {producer.name}
                    </CardHeader>
                    <CardBody>
                      <p className="flex items-center mb-2">
                        <IconStar className="mr-1 text-yellow-400" />
                        {producer.rating} rating
                      </p>
                      <p>{producer.products} products</p>
                      <Button variant="ghost" className="mt-2 p-0">
                        View Profile <IconArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Become a Producer
              </h2>
              <Card>
                <CardBody className="pt-6">
                  <p className="mb-4">
                    Join our marketplace and reach more customers with your
                    fresh, local produce.
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Easy onboarding process</li>
                    <li>Access to a wide customer base</li>
                    <li>Flexible delivery options</li>
                    <li>Support for sustainable farming practices</li>
                  </ul>
                  <Button>Apply Now</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
}
