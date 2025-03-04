// metadata static
// export const metadata = {
//   title: "Home Page",
// };
// Output:
// <head>
//  <title>Home</title>
// </head>

// metadata dynamic
// export const generateMetadata = async({ params }:{params: number }) => {
//   const product = await getProduct(params.id)
//   return {title: product.title}
// };
// Output:
// <head>
//  <title>"This is some product's title"</title>
// </head>

export default function Home() {
  return <div>This is page</div>;
}
