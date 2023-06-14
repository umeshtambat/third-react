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
      <h1>App Body</h1>
    </>
  );
}

//user defined Tag: <AppFooter/>
function AppFooter() {
  return (
    <>
      <h1>App Footer</h1>
    </>
  );
}

export default App;
