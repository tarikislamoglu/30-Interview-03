import React from "react";

const ExpandableListItem = ({ item }) => {
  return (
    <p className="text-orange-500">
      Employee : {item?.first_name} {item?.last_name}
    </p>
  );
};

export default ExpandableListItem;
