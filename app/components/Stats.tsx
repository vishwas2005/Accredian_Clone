"use client";

export default function Stats() {
  const stats = [
    {
      value: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">


        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p className="text-gray-500 mt-2">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>


        <div className="mt-12 flex flex-col md:flex-row items-center justify-between">

          {stats.map((item, index) => (
            <div key={index} className="flex items-center w-full justify-center">


              <div className="px-6 text-center max-w-xs">
                <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold inline-block">
                  {item.value}
                </div>

                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>


              {index !== stats.length - 1 && (
                <div className="hidden md:block h-20 w-[1px] bg-gray-300 mx-6"></div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}