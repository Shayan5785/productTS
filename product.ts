interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name:'table',price:200,},
    {name:'chair',price:40,},
    {name:'book',price:20,},
]

const calcAverageProductPrice = (arr:Product[]): number => {
    if(arr){
        let sum:number = arr.map( item => item.price).reduce((prev, curr) => prev + curr);
        let avgPrice = sum/arr.length;
        return avgPrice
    }   else{
        return 0
    }
}

let result:number = calcAverageProductPrice(products)

console.log( result )

export { Product,calcAverageProductPrice }