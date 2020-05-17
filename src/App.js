import React from "react";
import HealthCheck from "./components/HealthMonitor";

//Make sure that babel-polyfill is only required in once
// if (!global._babelPolyfill && !window._babelPolyfill) {
//   require("babel-polyfill");
// }

const config = [
  {
    name: "Sandbox EUN",
    endpoints: [
      {
        url: "http://origin-sx-eun.deploy.systems.next/footer",
        resourceName: "Footer",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-eun.deploy.systems.next/header",
        resourceName: "Header",
        mayReceiveWarnings: true,
      },
      {
        url:
          "http://origin-sx-eun.deploy.systems.next/shop/gender-women-productaffiliation-coatsandjackets-0",
        resourceName: "PLP",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-eun.deploy.systems.next/product-summary/122589",
        resourceName: "Product Summary",
        mayReceiveWarnings: true,
      },
    ],
  },
  {
    name: "Sandbox EUW",
    endpoints: [
      {
        url: "http://origin-sx-euw.deploy.systems.next/footer",
        resourceName: "Footer",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-euw.deploy.systems.next/header",
        resourceName: "Header",
        mayReceiveWarnings: true,
      },
      {
        url:
          "http://origin-sx-euw.deploy.systems.next/shop/gender-women-productaffiliation-coatsandjackets-0",
        resourceName: "PLP",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-euw.deploy.systems.next/product-summary/122589",
        resourceName: "Product Summary",
        mayReceiveWarnings: true,
      },
    ],
  },
  {
    name: "CI EUN",
    endpoints: [
      {
        url: "http://origin-sx-eun.deploy.systems.next/footer",
        resourceName: "Footer",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-eun.deploy.systems.next/header",
        resourceName: "Header",
        mayReceiveWarnings: true,
      },
      {
        url:
          "http://origin-sx-eun.deploy.systems.next/shop/gender-women-productaffiliation-coatsandjackets-0",
        resourceName: "PLP",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-eun.deploy.systems.next/product-summary/122589",
        resourceName: "Product Summary",
        mayReceiveWarnings: true,
      },
    ],
  },
  {
    name: "CI EUW",
    endpoints: [
      {
        url: "http://origin-sx-euw.deploy.systems.next/footer",
        resourceName: "Footer",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-euw.deploy.systems.next/header",
        resourceName: "Header",
        mayReceiveWarnings: true,
      },
      {
        url:
          "http://origin-sx-euw.deploy.systems.next/shop/gender-women-productaffiliation-coatsandjackets-0",
        resourceName: "PLP",
        mayReceiveWarnings: true,
      },
      {
        url: "http://origin-sx-euw.deploy.systems.next/product-summary/122589",
        resourceName: "Product Summary",
        mayReceiveWarnings: true,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <HealthCheck config={config} />
    </div>
  );
}

export default App;
