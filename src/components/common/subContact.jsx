import React from "react";
const SubContact = ({ iC, name }) => {
  let classname = "fa fa-" + iC;
  return (
    <div>
      <i className={classname} />
      {name}
    </div>
  );
};

export default SubContact;
