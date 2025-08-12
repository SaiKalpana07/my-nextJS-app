export default async function Products({
    params,
  }: {
    params: Promise<{ ProductId: string }>
  }) {
    const  productId  = (await params).ProductId
    console.log(productId)
    return <p>My Product:{productId}</p>
  }