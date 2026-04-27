import Image from "next/image";

export default function Edge() {
  return (
    <section id="edge" className="py-20 px-4 bg-white">

      <div className="max-w-7xl mx-auto text-center">


        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          The <span className="text-[#2563eb]">Accredian Edge</span>
        </h2>


        <p className="mt-3 text-gray-600">
          Key Aspects of{" "}
          <span className="text-[#2563eb]">
            Our Strategic Training
          </span>
        </p>


        <div className="mt-16 flex justify-center">
          <Image
            src="/logos/edge.svg"
            alt="Accredian Edge"
            width={1000}
            height={500}
            className="w-full max-w-5xl"
          />
        </div>

      </div>

    </section>
  );
}