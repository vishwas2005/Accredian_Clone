import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-4 bg-white">

      <div className="max-w-6xl mx-auto text-center">


        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Proven{" "}
          <span className="text-[#2563eb]">Partnerships</span>
        </h2>


        <p className="mt-3 text-gray-600">
          Successful Collaborations With the{" "}
          <span className="text-[#2563eb] font-medium">
            Industry’s Best
          </span>
        </p>


        <div className="mt-12 flex flex-wrap justify-center items-center gap-20">

          <Image src="/logos/reliance.png" alt="Reliance" width={120} height={60} />
          <Image src="/logos/hcl.png" alt="HCL" width={120} height={60} />
          <Image src="/logos/ibm.png" alt="IBM" width={120} height={60} />
          <Image src="/logos/crf.png" alt="CRF" width={120} height={60} />
          <Image src="/logos/adp.svg" alt="ADP" width={120} height={60} />
          <Image src="/logos/bayer.svg" alt="Bayer" width={120} height={60} />

        </div>

      </div>

    </section>
  );
}