import React from "react";
import Spinner from "./components/Spinner";
import Home from "./containers/Home";
import "./App.scss";

export const SpinnerContext = React.createContext();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <SpinnerContext.Provider
        value={{
          loading: this.state.loading,
          setLoading: (bool) => {
            this.setState({ loading: bool });
          },
        }}
      >
        <Home />
        {this.state.loading ? <Spinner /> : <></>}
      </SpinnerContext.Provider>
    );
  }
}

export default App;
