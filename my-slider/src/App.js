import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel
      show={3}
      infiniteLoop={true}
      >
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
