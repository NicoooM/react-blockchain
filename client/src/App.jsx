import { useState, useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);

function App() {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const Loader = () => (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-red-700 border-b-2"></div>
    </div>
  );

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {!currentAccount && (
        <button onClick={connectWallet}>Connect wallet</button>
      )}
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amout in ETH"
        name="amount"
        type="number"
        handleChange={handleChange}
      />
      <Input
        placeholder="Message"
        name="message"
        type="text"
        handleChange={handleChange}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      )}
    </div>
  );
}

export default App;
