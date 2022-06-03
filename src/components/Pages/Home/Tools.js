import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const callData = async () => {
    await fetch("https://peaceful-shelf-27425.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data.slice(0, 6)));
    setIsLoading(true);
  };

  useEffect(() => {
    callData();
  }, []);

  // const url = `https://peaceful-shelf-27425.herokuapp.com/tools`;
  // const {
  //   data: tools,
  //   isLoading,
  //   error,
  // } = useQuery("tools", () => fetch(url).then((res) => res.json()));

  // if (isLoading) {
  //   return (
  //     <div className="my-20 text-center">
  //       <button className="btn btn-square loading"></button>
  //     </div>
  //   );
  // }

  // const showTools = tools?.slice(0, 6);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          titleWrapperClasses="title mb-16 text-neutral"
          shortHeading="Our Tools"
          shortTitle="Check our best recent tools."
        />
        <div className="tools-wrapper">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4">
            {/* single card  */}
            {isLoading ? (
              tools.map((tool) => <Tool key={tool._id} tool={tool} />)
            ) : (
              <div className="mb-16 relative col-span-3 ">
                <button class="btn loading absolute top-0 translate-x-[-50%] left-1/2">
                  loading
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
