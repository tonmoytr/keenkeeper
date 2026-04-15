import { HiPlus } from "react-icons/hi"; // Using react-icons as we discussed

export default function Banner() {
  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];
  return (
    <>
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg text-slate-500 mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Action Button */}
        <button className="flex items-center gap-2 bg-[#2d4f43] hover:bg-[#243f36] text-white px-6 py-3 rounded-md font-medium transition-colors shadow-sm">
          <HiPlus size={20} />
          <span>Add a Friend</span>
        </button>
      </section>
      {/* Stats Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 pb-20 -mt-10">
          {" "}
          {/* Negative margin to overlap slightly if desired */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <span className="text-4xl font-bold text-[#1e293b] mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto">
        <div className="divider"></div>
      </div>
    </>
  );
}
