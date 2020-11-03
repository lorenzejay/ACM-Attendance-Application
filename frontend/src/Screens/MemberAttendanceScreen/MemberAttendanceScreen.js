import React, { useEffect, useState } from "react";
import "./styles.scss";
import TableContainer from "../../Components/Table/index";
import members from "../../dummyData";
import TableInput from "../../Components/TableInput";
import Pagination from "react-bootstrap/Pagination";
const MemberAttendanceScreen = () => {
  /*once redux state or whatever state management you use is established with the db
  all these values can be updated after save button is clicked.
  */

  const memberPages = parseInt(members.length / 10);

  //pagnation
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= memberPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>
    );
  }

  const pagination = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

  const generateRange = (min, max, step) => {
    let arr = [];
    for (let i = min; i < max; i += step) {
      arr.push(i);
    }
    return arr;
  };
  console.log(generateRange(active * 10 - 10, active * 10, 1));
  const paginateBy10 = members.filter(
    (member, index) => index > active * 10 - 10 && index < active * 10
  );
  // console.log(paginateBy10);

  const handleUpdate = (e, id) => {
    const value = e.target.value;
    const filterById = members.filter((member) => member._id === id);
    if (filterById[0]._id === id) {
      switch (e.target.name) {
        case "firstName":
          filterById[0].firstName = value;
          break;
        case "lastName":
          filterById[0].lastName = value;
          break;
        case "gradeYear":
          filterById[0].gradeYear = value;
          break;
        case "workshop":
          filterById[0].workshop = value;
          break;
        case "timesAttended":
          filterById[0].timesAttended = value;
          break;
        default:
          return;
      }
    }
    //from here we can update the db of members directly
    //update values through redux
  };

  return (
    <div className="member-attendance-screen">
      <TableContainer>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>Workshop</th>
            <th>Times Attended</th>
          </tr>

          {paginateBy10.map((member, i) => {
            return (
              <tr key={i}>
                <td style={{ width: "20%" }}>
                  <TableInput
                    defaultValue={member.firstName}
                    key={member._id}
                    name="firstName"
                    handleChange={(e) => handleUpdate(e, member._id)}
                  />
                </td>
                <td style={{ width: "20%" }}>
                  <TableInput
                    defaultValue={member.lastName}
                    key={member._id}
                    name="lastName"
                    handleChange={(e) => handleUpdate(e, member._id)}
                  />
                </td>
                <td style={{ width: "10%" }}>
                  <TableInput
                    name="gradeYear"
                    defaultValue={member.gradeYear}
                    handleChange={(e) => handleUpdate(e, member._id)}
                  />
                </td>
                <td style={{ width: "25%" }}>
                  <TableInput
                    name="workshop"
                    defaultValue={member.workshop}
                    handleChange={(e) => handleUpdate(e, member._id)}
                  />
                </td>
                <td style={{ width: "15%" }}>
                  <TableInput
                    name="timesAttended"
                    type="number"
                    defaultValue={member.timesAttended}
                    handleChange={(e) => handleUpdate(e, member._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
      {pagination}
    </div>
  );
};

export default MemberAttendanceScreen;
