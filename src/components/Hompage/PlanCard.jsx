import { useState } from "react";
import plan1 from "../../assets/plan1.jpeg";
import plan2 from "../../assets/plan2.jpeg";
import plan3 from "../../assets/plan3.jpeg";
import demo1 from "../../assets/plan1Demo.png";
import demo2 from "../../assets/plan2Demo.png";
import demo3 from "../../assets/plan3Demo.png";
import { Lightbox } from "react-modal-image";
const PlanCard = ({ title, description, small, large }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-[22rem] bg-[#28302A] text-white">
      {isOpen && (
        <Lightbox
          small={small}
          large={large}
          alt={title}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <figure className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <img src={small} alt="plan" className="w-[22rem] h-72 object-cover opacity-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start mt-4">
          <button
            className="btn btn-outline border-teal-500 text-white hover:border-teal-500 hover:bg-teal-500"
            onClick={() => setIsOpen(true)}
          >
            Show Detail
          </button>
        </div>
      </div>
    </div>
  );
};

const PlanList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center space-x-8">
      <PlanCard
        title="單機版"
        description="手機 <==> 物聯通"
        small={plan1}
        large={demo1}
      />
      <PlanCard
        title="內網版"
        description="手機 <==> Router <==> 物聯通"
        small={plan2}
        large={demo2}
      />
      <PlanCard
        title="雲端版"
        description="手機 <==> Router <==> 雲端 <==>物聯通"
        small={plan3}
        large={demo3}
      />
    </div>
  );
};

export default PlanList;
