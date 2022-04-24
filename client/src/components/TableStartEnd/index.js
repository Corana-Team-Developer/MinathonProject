import React from "react";

const TableStartEnd = ({ data }) => {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Choosen Day</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />
            </td>
            <td>
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableStartEnd;
