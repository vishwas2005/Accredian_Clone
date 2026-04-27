import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career, Freshers",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Tailored <span className="text-[#2563eb]">Course Segmentation</span>
        </h2>

        <p className="mt-3 text-gray-600">
          Explore{" "}
          <span className="text-[#2563eb] font-medium">
            Custom-fit Courses
          </span>{" "}
          Designed to Address Every Professional Focus
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-left">
                <h3 className="text-[#2563eb] font-semibold">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}