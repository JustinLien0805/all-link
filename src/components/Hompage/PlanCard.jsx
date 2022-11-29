import { useState } from "react";
import plan1 from "../../assets/plan1.jpeg";
import plan2 from "../../assets/plan2.jpeg";
import plan3 from "../../assets/plan3.jpeg";
import demo1 from "../../assets/plan1Demo.png";
import demo2 from "../../assets/plan2Demo.png";
import demo3 from "../../assets/plan3Demo.png";
const PlanCard = ({ title, description, small, large, setDemo }) => {
  return (
    <>
      <div className="card lg:w-[22rem]  bg-[#28302A] text-white">
        <figure className="cursor-pointer">
          <img
            src={small}
            alt={title}
            className="w-[22rem] h-72 object-cover opacity-80"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start mt-4">
            <label
              htmlFor="planModal"
              className="btn btn-outline border-teal-500 text-white hover:border-teal-500 hover:bg-teal-500"
              onClick={() => setDemo(large)}
            >
              Show Detail
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const PlanList = () => {
  const [demo, setDemo] = useState("");
  return (
    <>
      <input type="checkbox" id="planModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="planModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={demo} alt="plan" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-12 md:space-y-0 text-black scale-90 lg:scale-100">
        <PlanCard
          title="單機版"
          description="手機 <==> 物聯通"
          small={plan1}
          large={demo1}
          setDemo={setDemo}
        />
        <PlanCard
          title="內網版"
          description="手機 <==> Router <==> 物聯通"
          small={plan2}
          large={demo2}
          setDemo={setDemo}
        />
        <PlanCard
          title="雲端版"
          description="手機 <==> Router <==> 雲端 <==>物聯通"
          small={plan3}
          large={demo3}
          setDemo={setDemo}
        />
      </div>
    </>
  );
};

export default PlanList;
