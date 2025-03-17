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
  } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-center">Generate Activity</h2>
      <div className="flex justify-between items-baseline p-5">
        <p>Research a topic you're interested in </p>
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px] "
          onClick={handleGetClick}
        >
          Expand
        </button>
      </div>
      <div className="flex justify-between items-baseline p-5">
        <p>Start a collection</p>
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px]"
          onClick={handleActivityClick}
        >
          Expand
        </button>
      </div>
      <div>{actCheck && <ExpandableListItem item={item} />}</div>
      <div className="flex justify-between items-baseline p-5">
        <p>Bake a pike with some friends</p>
        <button
          className=" p-1 ml-5 border-2 bg-cyan-700 text-white rounded-[10px]"
          onClick={handleDetailsClick}
        >
          Collapse
        </button>
      </div>
      <div>{detailsCheck && <ExpandableListItemDetails item={item} />}</div>
    </div>
  );
};

export default GenerateList;
