function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>All Data in Store</h1>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
