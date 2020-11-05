import React, { useEffect, useState } from "react";
import "./styles.scss";
import TableContainer from "../../Components/Table/index";
import members from "../../dummyData";
import TableInput from "../../Components/TableInput";
import Pagination from "react-bootstrap/Pagination";
import Input from "../../Components/Input";

const MemberAttendanceScreen = () => {
  const [typeOfData, setTypeOfData] = useState(members);
  const [timesAttended, setTimesAttended] = useState();
  const [filteredByGrade, setFilteredByGrade] = useState();
  const [active, setActive] = useState(1);
  // const [paginateBy10, setPaginateBy10] = useState(
  //   members.filter((member, index) => index > active * 10 - 10 && index < active * 10)
  // );
  /*once redux state or whatever state management you use is established with the db
  all these values can be updated after save button is clicked.
  */

  useEffect(() => {
    if (filteredByGrade) {
      setTypeOfData(filterByGrade);
    }
    if (!filteredByGrade) {
      setTypeOfData(members);
    }
  }, [filteredByGrade]);

  //pagnation
  const memberPages = parseInt(typeOfData.length / 10);

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

  const paginateBy10 = typeOfData.filter(
    (member, index) => index >= active * 10 - 10 && index < active * 10
  );

  //search input
  const searchMemberByFirstName = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target;
    filter = e.target.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

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

  //filter by student grade
  const filterByGrade = members.filter((member) => member.gradeYear === filteredByGrade);

  const handleFilterByGrade = async (e) => {
    setFilteredByGrade(e.target.value);
  };
  console.log(typeOfData);
  console.log(filteredByGrade);

  return (
    <div className="member-attendance-screen">
      <div className="search-input">
        <Input
          defaultValue=""
          placeholder="Search by first name"
          handleInput={searchMemberByFirstName}
        />
        <select onChange={handleFilterByGrade}>
          <option value="">All Members</option>
          <option value="Fr.">Freshman</option>
          <option value="Soph.">Sophomore</option>
          <option value="Jr.">Junior</option>
          <option value="Sr.">Senior</option>
        </select>
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
          {paginateBy10.map((member, i) => (
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
          ))}
          {/* {filteredByGrade
            ? paginateBy10.map((member, i) => (
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
              ))
            : paginateBy10.map((member, i) => {
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
              })} */}
        </tbody>
      </TableContainer>
      {pagination}
    </div>
  );
};

export default MemberAttendanceScreen;
