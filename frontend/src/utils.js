import members from "./dummyData";
export const handleUpdate = (e, id) => {
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
  console.log(
    filterById[0].firstName,
    filterById[0].lastName,
    filterById[0].workshop,
    filterById[0].gradeYear,
    filterById[0].timesAttended
  );
};
