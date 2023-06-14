//user defined Tag: <App/>
function App() {
  return (
    <>
      
      {/* <AppHeader></AppHeader> */}
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </>
  );
}

//user defined Tag: <AppHeader/>
function AppHeader() {
  return (
    <>
      <h1>Header</h1>
    </>
  );
}

//user defined Tag: <AppBody/>
function AppBody() {
  return(
    <>
    <h1>App Body</h1>
    </>
  )
}

//user defined Tag: <AppFooter/>
function AppFooter() {
  return (
    <>
    <h1>App Footer</h1>
    </>
  )
}

export default App;
