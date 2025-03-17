import React, { useContext } from "react";
import ExpandableListItem from "./ExpandableListItem";
import ExpandableListItemDetails from "./ExpandableListItemDetails";
import { AppContext } from "@/AppContext";

const GenerateList = () => {
  const {
    handleGetClick,
    handleActivityClick,
    handleDetailsClick,
    item,
    actCheck,
    detailsCheck,
    index,
  } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-center">Generate Activity</h2>
      <div className="flex justify-between items-baseline p-5">
        <p>Bring Information About Next Employee</p>
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px] "
          onClick={handleGetClick}
        >
          {index === 0 ? "Get" : "Next"}
        </button>
      </div>
      <div className="flex justify-between items-baseline p-5">
        <p>About Which Employee </p>
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px]"
          onClick={handleActivityClick}
        >
          Show Employee's Name
        </button>
      </div>
      <div>{actCheck && <ExpandableListItem item={item} />}</div>
      <div className="flex justify-between items-baseline p-5">
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px]"
          onClick={handleDetailsClick}
        >
          Show Empoyee's İnformations
        </button>
      </div>
      <div>{detailsCheck && <ExpandableListItemDetails item={item} />}</div>
    </div>
  );
};

export default GenerateList;
