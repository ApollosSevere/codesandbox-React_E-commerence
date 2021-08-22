import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home/Home";
import Header from "./components/utils/Header/Header";
import ProductDetail from "./components/productDetail/ProductDetail";
import { GlobalProvider } from "./Context/Context";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
// import '../../assets/main.css'

function App() {
  return (
    <GlobalProvider>
      <div className="wrapper">
        <Router>
          <Header />

          <div className="stuff">
            <Switch>
              {/* <Route path="/">
                <Home />
              </Route> */}

              {/* <Route exact path="/produtDetail">
                <ProductDetail />
              </Route> */}

              <Route path="/" exact component={Home} />
              <Route path="/productDetail/:id/:obj" component={ProductDetail} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
