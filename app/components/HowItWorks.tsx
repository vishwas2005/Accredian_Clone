import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      img: "https://img.icons8.com/color/96/combo-chart--v1.png",
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      img: "https://img.icons8.com/color/96/monitor--v1.png",
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry needs.",
      img: "https://img.icons8.com/color/96/target.png",
    },
  ];

  return (
    <section id="how" className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How We{" "}
          <span className="text-blue-600">Deliver Results</span>{" "}
          That Matter?
        </h2>

        <p className="text-gray-600 mt-3">
          A Structured Three-Step Approach to Skill Development
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

          {steps.map((step, index) => (
            <div key={index} className="flex items-center">


              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition w-[300px] text-center relative">


                <div className="absolute -top-4 left-4 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                  {index + 1}
                </div>


                <div className="flex justify-center">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>


              {index !== steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-24">
                  <div className="w-full h-[2px] bg-blue-400"></div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}