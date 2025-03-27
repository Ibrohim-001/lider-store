import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "UStudy", summa: 2000000 },
  { month: "ProWeb", summa: 3050000 },
  { month: "March", summa: 237000 },
  { month: "April", summa: 730000 },
  { month: "May", summa: 209000 },
  { month: "June", summa: 214000 },
]

const chartData2 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig2 = {
  summa: {
    label: "To'laydigan summasi",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Statistics() {
  const [product, setProduct] = React.useState({ id: '', name: '', price: '', brand: '', image: '' })

  const send = async (e: any) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/products', product)
      console.log(res);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={send} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="id">ID</Label>
                <Input onChange={(e: any) => setProduct({ ...product, id: e.target.value })} value={product.id} id="id" placeholder="Enter product ID" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input onChange={(e: any) => setProduct({ ...product, name: e.target.value })} value={product.name} id="productName" placeholder="Enter product name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input onChange={(e: any) => setProduct({ ...product, price: e.target.value })} value={product.price} id="price" type="number" placeholder="Enter price" min="0" step="0.01" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brandName">Brand Name</Label>
                <Input onChange={(e: any) => setProduct({ ...product, brand: e.target.value })} value={product.brand} id="brandName" placeholder="Enter brand name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Product Image</Label>
                <Input onChange={(e: any) => setProduct({ ...product, image: e.target.value })} value={product.image} id="image" placeholder="Image" type="url" />
              </div>

              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 container mx-auto px-8">
        <div className="flex flex-col gap-7">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart - Horizontal</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                  }}
                >
                  <XAxis type="number" dataKey="summa" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="summa" fill="var(--color-desktop)" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart - Horizontal</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                  }}
                >
                  <XAxis type="number" dataKey="summa" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="summa" fill="var(--color-desktop)" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart - Horizontal</CardTitle>
              <CardDescription>January - June {new Date().getFullYear()}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                  }}
                >
                  <XAxis type="number" dataKey="summa" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="summa" fill="var(--color-desktop)" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart - Multiple</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig2}>
                <BarChart accessibilityLayer data={chartData2}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Statistics