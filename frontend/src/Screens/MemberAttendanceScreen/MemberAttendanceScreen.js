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

  const handleUpdateLastName = (e, id) => {
    console.log(id);
    const filterById = members.filter((member) => member._id === id);
    if (filterById[0]._id === id) {
      setLName(e.target.value);
      filterById[0].lastName = e.target.value;
    }
    console.log(filterById[0].lastName);
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
            <th>Add/Subtract</th>
          </tr>

          {members.map((member, i) => {
            return (
              <tr key={i}>
                <td style={{ width: "20%" }}>
                  <TableInput
                    value={member.firstName}
                    key={member._id}
                    handleChange={(e) => setFName(e.target.value)}
                  />
                </td>
                <td style={{ width: "20%" }}>
                  <TableInput
                    defaultValue={member.lastName}
                    key={member._id}
                    handleChange={(e) => handleUpdateLastName(e, member._id)}
                  />
                </td>
                <td style={{ width: "10%" }}>
                  <TableInput
                    value={member.gradeYear}
                    handleChange={(e) => setGradeYear(e.target.value)}
                  />
                </td>
                <td style={{ width: "25%" }}>
                  <TableInput
                    value={member.workshop}
                    handleChange={(e) => setCurrentWorkshop(e.target.value)}
                  />
                </td>
                <td style={{ width: "15%" }}>
                  <TableInput
                    value={member.timesAttended}
                    handleChange={(e) => setTimesAttended(e.target.value)}
                  />
                </td>

                <td>
                  <button>+</button> <button>-</button>
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
