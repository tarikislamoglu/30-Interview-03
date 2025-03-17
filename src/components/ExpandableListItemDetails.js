import React from "react";

const ExpandableListItemDetails = ({ item }) => {
  return (
    <div className="bg-cyan-700 text-white rounded-[10px] p-10">
      <h2 className="text-center p-5 text-orange-300">
        İnformation About {item.first_name}
      </h2>
      {item && (
        <ul className="flex flex-col justify-center items-center">
          <li>Phone:{item.phone}</li>
          <li>Birthdate:{item.birth_date}</li>
          <li>Salary:{item.salary}</li>
          <li>department:{item.department}</li>
          <li>created_at:{item.created_at}</li>
          <li>Email:{item.email}</li>
          <li>Address:{item.address}</li>
          <li>gender:{item.gender}</li>
          <li>experience:{item.experience}</li>
        </ul>
      )}
    </div>
  );
};

export default ExpandableListItemDetails;
