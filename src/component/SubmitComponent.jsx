import React from "react";

const SubmitComponent = ({ onSubmit}) => {
    return (
        <div className="ButtonSubmit">
            <button type="submit" onClick={onSubmit}>
                提交
            </button>
        </div>
    );
  };
  
  export default SubmitComponent;