import { useState } from "react";
import Stepper from "../Components/Stepper";
import StepperControl from "../Components/StepperControl";
import { UseContextProvider } from "../Context/StepperContext"; 

import DetailOfOwner from "../Components/Steps/DetailsOfOwner";
import Doc from "../Components/Steps/Doc";
import Docs from "../Components/Steps/Docs";
import Final from "../Components/Steps/Final";


function BrokerForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Details of Owner",
    "Details of Company",
    "Documents",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <DetailOfOwner />;
      case 2:
        return <Doc />;
      case 3:
        return <Docs />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
     
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default BrokerForm;