import Carousel from "./components/Carousel/Carousel"

const App = () => {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <Carousel>
      <img src="https://picsum.photos/id/237/200/300" height={400} width={800} alt="placeholder" />
      <img src="https://picsum.photos/200/300" height={400} width={800} alt="placeholder" />
      <img src="https://picsum.photos/seed/picsum/200/300" height={400} width={800} alt="placeholder" />
      </Carousel>
    </div>
  );
};

export default App;
