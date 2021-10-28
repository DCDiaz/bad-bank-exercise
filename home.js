function Home(){
  return (
    <>
      <h1>Welcome to the Bad Bank</h1>
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </>  
  );  
}