import React, { useEffect, useState } from "react";
import "./styles.scss";
import TableContainer from "../../Components/Table/index";
import members from "../../dummyData";
import TableInput from "../../Components/TableInput";

const MemberAttendanceScreen = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gradeYear, setGradeYear] = useState("");
  const [workshop, setCurrentWorkshop] = useState("");
  const [timesAttended, setTimesAttended] = useState(0);

  /*once redux state or whatever state management you use is established with the db
  all these values can be updated after save button is clicked.
  */
  // useEffect(() => {
  //if state is being grabbed from redux, im sure there is a way to update
  // }, [fName, lName, gradeYear, workshop, timesAttended]);

  const updateHandleChange = () => {
    //can update state which updates
  };

  //might need to repeat this for every table column
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

          {members.map((member, i) => {
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
    </div>
  );
};

export default MemberAttendanceScreen;
