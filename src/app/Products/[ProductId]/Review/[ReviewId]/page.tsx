export default async function Reviews({
    params,
}: { params: Promise<{ProductId:string,ReviewId:string}>
}) {
  const productId = (await params).ProductId
  const reviewId = (await params).ReviewId
  return <p>Review for {productId} is {reviewId}</p>
}