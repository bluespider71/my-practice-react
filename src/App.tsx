import React from 'react';
import PropTypes from 'prop-types';

function App(props: any) {
  const { propArray, propBool, propString, propNumber, propFunc } = props;

  return <>
    <h1>ReactJS Props validation example</h1>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Value</th>
          <th>Valid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Array</td>
          <td>{propArray}</td>
          <td>{propArray ? "true" : "False"}</td>
        </tr>
        <tr>
          <td>Boolean</td>
          <td>{propBool ? "true" : "False"}</td>
          <td>{propBool ? "true" : "False"}</td>
        </tr>
        <tr>
          <td>Function</td>
          <td>{propFunc(5)}</td>
          <td>{propFunc(5) ? "true" : "False"}</td>
        </tr>
        <tr>
          <td>String</td>
          <td>{propString}</td>
          <td>{propString ? "true" : "False"}</td>
        </tr>
        <tr>
          <td>Number</td>
          <td>{propNumber}</td>
          <td>{propNumber ? "true" : "False"}</td>
        </tr>
      </tbody>
    </table>
  </>
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
}

App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x: any) { return x + 5 },
  propNumber: 1,
  propString: "JavaTpoint",
}


export default App;
