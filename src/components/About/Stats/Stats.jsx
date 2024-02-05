import React, { useState, useEffect } from "react";

const Stats = () => {
  const initialData = {
    projects: 0,
    clients: 0,
    partners: 0,
    yearsOnMarket: 0,
  };

  const targetData = {
    projects: 100,
    clients: 50,
    partners: 20,
    yearsOnMarket: 5,
  };

  const [animatedValues, setAnimatedValues] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) => ({
        projects: Math.min(prevValues.projects + 1, targetData.projects),
        clients: Math.min(prevValues.clients + 1, targetData.clients),
        partners: Math.min(prevValues.partners + 1, targetData.partners),
        yearsOnMarket: Math.min(
          prevValues.yearsOnMarket + 0.1,
          targetData.yearsOnMarket
        ),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[200px] bg-gray-100 py-16 px-24 lg:px-24">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8">
          {/* Projects */}
          <div className="flex flex-col items-center">
            <div>
              <span className="text-4xl lg:text-5xl font-bold">
                {animatedValues.projects}
              </span>
              <p>Projects Completed</p>
            </div>
          </div>

          {/* Clients */}
          <div className="flex flex-col items-center">
            <div>
              <span className="text-4xl lg:text-5xl font-bold">
                {animatedValues.clients}
              </span>
              <p>Clients Served</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <span className="text-4xl lg:text-5xl font-bold">
                {animatedValues.partners}
              </span>
              <p>Partnerships Established</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <span className="text-4xl lg:text-5xl font-bold">
                {Math.floor(animatedValues.yearsOnMarket)}
                {animatedValues.yearsOnMarket >= targetData.yearsOnMarket &&
                  "+"}
              </span>
              <p>Years on the Market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
