import ItemCatalog from "../components/ItemCatalog";
const Index = (props: {}) => {
  return (
    <div className="index_page">
      <ItemCatalog />
    </div>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  console.log("Hello world");

  // Pass data to the page via props
  return { props: { something: "asd" } };
}
export default Index;
