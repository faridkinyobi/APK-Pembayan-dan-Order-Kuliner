import Orderlist from "./components/Features/Order list/Orderlist";
import Navigation from "./components/Header/Navigation";
import Layout from "./components/Layout/Layout";
import MenuList from "./components/UI/MenuList";
import SearchForm from "./components/UI/SearchForm";
// import Es from "./Img/esteh-preview1.png";
function App() {
  return (
    <div className="App ">
      <Navigation />
      <Layout>
        <div className="flex flex-wrap justify-between items-center mt-3  md:max-w-[95%] lg:max-w-[90%] mx-auto">
          <h2 className="text-xl font-bold">Order list</h2>
          {/* search */}
          <SearchForm />
        </div>
        <Orderlist />
        <MenuList />
      </Layout>
    </div>
  );
}

export default App;
