export interface CarsType {
  id: number
  make: string
  model: string
  type: string
  price: number
  image: string
  logo: string
  sales: sales[]
}

interface sales {
  date: string
  reseller: string
}