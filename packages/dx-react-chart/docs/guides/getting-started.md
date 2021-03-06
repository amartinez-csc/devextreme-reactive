# React Chart - Getting Started

Project status: **CTP**

## Overview

The DevExtreme React Chart is a component that visualizes data using a variety of series types, including bar, line, area, scatter, pie, and more. It is a stateless component - it relies on properties and works in controlled mode only. The DevExtreme React Chart has a composable and extendable architecture in which plugins provide additional elements (such as axes, legend, grid). Twitter Bootstrap and Material-UI rendering and theming are supported out of the box.

## Installation

Install the dx-react-chart package and its dependencies using the following command:

```
npm i --save @devexpress/dx-react-core.npm-tag() @devexpress/dx-react-chart.npm-tag()
```

*Note: [react](https://www.npmjs.com/package/react) >=16.3.0 and [react-dom](https://www.npmjs.com/package/react) >=16.3.0 are peer dependencies.*

This package does not contain visual components. In the examples below, visual components are rendered using the Material-UI package. However, you can use any of the following:

- Material-UI

  ```
  npm i --save @devexpress/dx-react-chart-material-ui.npm-tag()
  ```

  *Note: [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) >=1.1.0 and [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) >=1.1.0 are peer dependencies.*

  Make sure that the [Material-UI](https://material-ui.com/) dependencies are installed and properly configured. Check the Material-UI's [Getting Started](https://material-ui.com/getting-started/installation) article for configuration details.

- Bootstrap 4

  ```
  npm i --save @devexpress/dx-react-chart-bootstrap4.npm-tag()
  ```

  *Note: [reactstrap](https://www.npmjs.com/package/reactstrap) >=6.3.0 is a peer dependency.*

  Make sure that [reactstrap](https://reactstrap.github.io/) dependencies are installed and properly configured. Check the reactstrap's [Getting Started](https://reactstrap.github.io/) article for configuration details. You also need the [OpenIconic](https://useiconic.com/open) icons in your project.

  Add the DevExtreme React Chart styles in the root .js file:

  ```js
  import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
  ```

  NOTE: The DevExtreme React Chart does not include Bootstrap CSS.

## Supported Browsers

React Chart supports the latest stable releases of all major browsers: Google Chrome, Mozilla Firefox, Safari, Opera, and Microsoft Edge.

React Chart can work in other browsers if they use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API. Some of these browsers may require adding [polyfills](#polyfills). However, correct operation in such browsers, including Internet Explorer, is not guaranteed.

## Polyfills

React Chart uses the latest web platform standards and does not support older browsers like IE11 and Android 4. Use the ES2015 (ES6) polyfill to support these browsers. We recommend [BABEL Polyfill](https://babeljs.io/docs/usage/polyfill/), but you can use an alternative.

## Using the Chart Component

The Chart component's functionality is implemented in plugins. You need a [series](series.md) plugin and the `ArgumentAxis`, `ValuesAxis`, and `Scale` plugins to draw a simple chart. The following code shows how to configure a simple line chart:

```jsx
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";
// import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-bootstrap4";

const App = () => (
  <Chart
      data={[
        { argument: 1, value: 10 },
        { argument: 2, value: 20 },
        { argument: 3, value: 30 }
      ]}
    >
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="value" argumentField="argument" />
      <Scale />
    </Chart>
);

```

## Try Out The React Chart

Follow the links below to try out the React Chart:

- [CodeSandbox for Material-UI](https://codesandbox.io/s/vqo8yw5om7)
- [CodeSandbox for Bootstrap4](https://codesandbox.io/s/5x17l61xyk)

## License

[DevExtreme licensing](https://js.devexpress.com/licensing/)
