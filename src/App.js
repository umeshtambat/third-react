//user defined Tag: <App/>
function App() {
  return (
    <>
      {/* <AppHeader></AppHeader> */}
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}

//user defined Tag: <AppHeader/>
function AppHeader() {
  return (
    <div className="row bg-success text-light">
      {/* <h1 className="bg-dark  trxt-light p-3">Header</h1> */}
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">AboutUs</div>
    </div>
  );
}

//user defined Tag: <AppBody/>
function AppBody() {
  return (
    <>
      <div className="alert-success fs-3 mb-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        excepturi assumenda eius possimus, reprehenderit autem obcaecati
        exercitationem tenetur quae deserunt quod eveniet qui voluptatum ut
        dignissimos itaque officia rerum. Repudiandae!
      </div>
    </>
  );
}

//user defined Tag: <AppFooter/>
function AppFooter() {
  return (
    <>
      <div
        className="bg-dark  text-light d-flex justify-content-center align-items-center"
        style={{ height: "2pppx" }}
      >
        
        Lorem ipsum dolor sit amet.
      </div>
    </>
  );
}

export default App;
