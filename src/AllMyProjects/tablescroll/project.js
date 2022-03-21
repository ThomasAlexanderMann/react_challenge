import React from "react";
import styled from "styled-components";

// TODO refactor this code and then work out how to scroll along at a steady pace

// Table Button
function UnstyledTableButton(props) {
  return (
    <button onClick={props.handleClick} className={props.className}>
      {props.children}
    </button>
  );
}

const TableButton = styled(UnstyledTableButton)`
  position: absolute;
  top: 0;
  ${(props) => props.left && "left: 0;"};
  ${(props) => props.right && "right: 0;"};

  background-color: rgba(204, 204, 204, 0.4);

  width: 50px;
  height: 100%;
`;

// Table
function unstyledTable(props) {
  function handleClickLeft() {
    // currently just scrolls back to start of table rows
    const element = document.getElementById("innerDiv");
    element.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleClickRight() {
    // currently just scrolls to the end of the table rows
    const element = document.getElementById("innerDiv");
    element.scroll({
      top: 0,
      left: 2000,
      behavior: "smooth",
    });
  }

  return (
    <div className={props.className}>
      <TableButton handleClick={handleClickLeft} left>
        &lt;
      </TableButton>
      <TableButton handleClick={handleClickRight} right>
        &gt;
      </TableButton>
      <div id="innerDiv">
        <table>
          <thead>
            <tr>
              <th>Data Header 1</th>
              <th>Data Header 2</th>
              <th>Data Header 3</th>
              <th>Data Header 4</th>
              <th>Data Header 5</th>
              <th>Data Header 6</th>
              <th>Data Header 7</th>
              <th>Data Header 8</th>
              <th>Data Header 9</th>
              <th>Data Header 10</th>
              <th>Data Header 11</th>
              <th>Data Header 12</th>
              <th>Data Header 13</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data item 1</td>
              <td>Data item 2</td>
              <td>Data item 3</td>
              <td>Data item 4</td>
              <td>Data item 5</td>
              <td>Data item 6</td>
              <td>Data item 7</td>
              <td>Data item 8</td>
              <td>Data item 9</td>
              <td>Data item 10</td>
              <td>Data item 11</td>
              <td>Data item 12</td>
              <td>Data item 13</td>
            </tr>
            <tr>
              <td>Data item 1</td>
              <td>Data item 2</td>
              <td>Data item 3</td>
              <td>Data item 4</td>
              <td>Data item 5</td>
              <td>Data item 6</td>
              <td>Data item 7</td>
              <td>Data item 8</td>
              <td>Data item 9</td>
              <td>Data item 10</td>
              <td>Data item 11</td>
              <td>Data item 12</td>
              <td>Data item 13</td>
            </tr>
            <tr>
              <td>Data item 1</td>
              <td>Data item 2</td>
              <td>Data item 3</td>
              <td>Data item 4</td>
              <td>Data item 5</td>
              <td>Data item 6</td>
              <td>Data item 7</td>
              <td>Data item 8</td>
              <td>Data item 9</td>
              <td>Data item 10</td>
              <td>Data item 11</td>
              <td>Data item 12</td>
              <td>Data item 13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Table = styled(unstyledTable)`
  // applied to div container
  position: relative;
  margin: 5rem 2rem;

  #innerDiv {
    overflow-x: scroll;
  }

  table {
    table-layout: fixed;
    width: 2000px;
    border: 2px solid grey;
    margin: 0 50px;
  }

  th,
  td {
    width: 200px;
    padding: 1rem;
  }

  td {
    background: #ccc;
  }

  tfoot {
  }
`;

const Main = styled.main`
  padding: 2rem;
`;

export default function Project() {
  return (
    <Main>
      <Table></Table>
    </Main>
  );
}
