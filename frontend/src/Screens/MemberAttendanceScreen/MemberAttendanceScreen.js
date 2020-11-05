import React, { useEffect, useState } from "react";
import "./styles.scss";
import TableContainer from "../../Components/Table/index";
import members from "../../dummyData";
import TableInput from "../../Components/TableInput";
import Pagination from "react-bootstrap/Pagination";
import Input from "../../Components/Input";

const MemberAttendanceScreen = () => {
  const [timesAttended, setTimesAttended] = useState();
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

  // const handleUpdate = (e, id) => {
  //   const value = e.target.value;
  //   const filterById = members.filter((member) => member._id === id);
  //   if (e.target.name === "timesAttended") {
  //     filterById[0].timesAttended = value;
  //   }

  //   //from here we can update the db of members directly
  //   //update values through redux
  // };
  console.log(timesAttended);
  //search input
  const searchMemberByFirstName = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target;
    filter = e.target.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    console.log(tr);

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <div className="member-attendance-screen">
      <div className="search-input">
        <Input placeholder="search for member" handleInput={searchMemberByFirstName} />
      </div>
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
                <td style={{ width: "20%" }}>{member.firstName}</td>
                <td style={{ width: "20%" }}>{member.lastName}</td>
                <td style={{ width: "10%" }}>{member.gradeYear}</td>
                <td style={{ width: "25%" }}>{member.workshop}</td>
                <td style={{ width: "15%" }}>
                  <TableInput
                    name="timesAttended"
                    type="number"
                    defaultValue={member.timesAttended}
                    handleChange={(e) => setTimesAttended(e.target.value)}
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
