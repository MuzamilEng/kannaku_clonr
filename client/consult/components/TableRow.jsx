import React from "react";

function TableRow({ handleShow }) {
  return (
    <tr>

      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"  
          onClick={handleShow}
        >
          9:00
        </button>
      </td>

      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>
      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>

      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>
      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>

      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.6em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>
      <td>
        <button
          className="btn bg-dark"
          style={{ color: "white", marginRight:"-10px", marginBottom:"-10px", fontSize:"0.7em" }}
          type="button"
          onClick={handleShow}
        >
          9:00
        </button>
      </td>
      <td></td>
    </tr>
  );
}

export default TableRow;
