"use client";


export interface StepItem {
  id?: string;
  img?: string;
  title: string;
  description: string;
  altImageText?: string;
  isActive?: boolean;
  sequenceNo?: number;
}

export interface StepsProductProps {
  data: StepItem[];
  baseUrl?: string;
  title?: string;
}

export default function StepsProduct({
  data,
  baseUrl = "",
  title,
}: StepsProductProps) {
  const steps = data
    ?.filter((step) => step.isActive)
    ?.sort((a, b) => (a.sequenceNo ?? 0) - (b.sequenceNo ?? 0));

  return (
    <section className="py-24 bg-white w-full">
      <div className="w-full px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl text-gray-900 font-extrabold ">
            {title || `Getting Started in ${steps?.length} Steps`}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 relative">
          {steps?.map((step, index) => (
            <div
              key={step.id ?? index}
              className="flex flex-col items-center text-center flex-1 relative"
            >
              <div className="mt-6 w-16 h-16 border border-gray-500 rounded-full flex items-center justify-center">
                <img
                  src={
                    step.id
                      ? `${baseUrl}/${step.id}`
                      : step.img
                  }
                  alt={step.altImageText}
                  title={step.altImageText}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="mt-6 font-semibold text-lg text-slate-900 max-w-xs">
                {step.title}
              </h3>

              <p className="mt-4 text-md text-slate-500 max-w-xs">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <svg
                  className="hidden lg:block absolute top-5 -right-14"
                  width="70"
                  height="40"
                  viewBox="0 0 70 40"
                  fill="#070707"
                >
                  <path
                    d="M5 35 Q35 5 65 20"
                    stroke="#070707"
                    strokeWidth="2"
                    fill="none"
                  />
                  <polygon points="60,15 68,20 60,25" fill="#070707" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}