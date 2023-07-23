import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export const ProgressC = () => {
//   const step1Content = <h1>Step 1 Content</h1>;
//   const step2Content = <h1>Step 2 Content</h1>;
//   const step3Content = <h1>Step 3 Content</h1>;
//   const step4Content = <h1>Step 4 Content</h1>;
  function step2Validator() {
    // return a boolean
  }

  function step3Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
   <div className="progressbar" style={{height: '5rem', padding: '.3rem'}}>
     <StepProgressBar
      startingStep={0}
      onSubmit={onFormSubmit}
      steps={[
        {
            name: "",
          label: "",
        //   content: step1Content
        },
        {
          label: "",
          name: "",
        //   content: step2Content,
        //   validator: step2Validator
        },
        {
          label: "",
          name: "",
        //   content: step3Content,
        //   validator: step3Validator
        },
        {
          label: "",
          name: "",
        //   content: step4Content,
        //   validator: step3Validator
        }
      ]}
    />
   </div>
  );
};
