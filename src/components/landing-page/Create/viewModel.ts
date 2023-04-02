import { useState } from "react";
import { TAB_STEPPER } from "../../../enum/enum";
import stepOne from "../../../assets/create/step1.png";
import stepTwo from "../../../assets/create/step2.png";
import stepThree from "../../../assets/create/step3.png";
import stepFour from "../../../assets/create/step4.png";
const useViewModel = () => {
  const [openTab, setOpentab] = useState(1);

  const tabs = [
    {
      label: "Step 1",
      value: TAB_STEPPER.STEP_ONE,
      img: stepOne,
      head: "How to Set up your wallet.",
      caption:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
    {
      label: "Step 2",
      value: TAB_STEPPER.STEP_TWO,
      img: stepTwo,
      head: "Create your collection.",
      caption:
        "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },

    {
      label: "Step 3",
      value: TAB_STEPPER.STEP_THREE,
      img: stepThree,
      head: "Add your NFTs",
      caption:
        "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content",
    },
    {
      label: "Step 4",
      value: TAB_STEPPER.STEP_FOUR,
      img: stepFour,
      head: "List them for sale",
      caption:
        "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
    },
  ];

  const previousPage = () => {
    setOpentab(openTab - 1);
  };

  const nextPage = () => {
    setOpentab(openTab + 1);
  };

  return { openTab, setOpentab, tabs, previousPage, nextPage };
};

export default useViewModel;
