import { useState } from "react";
import plan1 from "../assets/plan1.jpeg";
import plan2 from "../assets/plan2.jpeg";
import plan3 from "../assets/plan3.jpeg";
import demo1 from "../assets/plan1Demo.png";
import demo2 from "../assets/plan2Demo.png";
import demo3 from "../assets/plan3Demo.png";
import { Lightbox } from "react-modal-image";
const PlanCard = ({ title, description, small, large }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-72 bg-black text-white shadow-xl">
      {isOpen && (
        <Lightbox
          small={small}
          large={large}
          alt="plan"
          className="w-72 h-64 object-cover"
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <figure className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <img src={small} alt="plan" className="w-72 h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn bg-teal-500 text-black hover:bg-teal-800 hover:text-white" onClick={() => setIsOpen(true)}>
            Show Detail
          </button>
        </div>
      </div>
    </div>
  );
};

const PlanList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-12">
      <PlanCard
        title="單機版"
        description="方案一的描述"
        small={plan1}
        large={demo1}
      />
      <PlanCard
        title="內網版"
        description="方案二的描述"
        small={plan2}
        large={demo2}
      />
      <PlanCard
        title="雲端版"
        description="方案三的描述"
        small={plan3}
        large={demo3}
      />
    </div>
  );
};

export default PlanList;
