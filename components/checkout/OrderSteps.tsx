type OrderStepsProps = {
  currentStep: 1 | 2 | 3;
};

const steps = [
  { id: 1, label: "Payment" },
  { id: 2, label: "Processing" },
  { id: 3, label: "Confirmed" },
];

export default function OrderSteps({ currentStep }: OrderStepsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-start justify-between gap-2">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-[11px] uppercase tracking-[0.08em] transition
                    ${isCompleted ? "border-[#c6a96b] bg-[#c6a96b] text-black" : isActive ? "border-white bg-white text-black" : "border-white/20 text-white/35"}`}
                >
                  {isCompleted ? "✓" : step.id}
                </div>

                <p
                  className={`mt-3 text-[10px] uppercase tracking-[0.22em] md:text-[11px]
                    ${isCompleted || isActive ? "text-white" : "text-white/35"}`}
                >
                  {step.label}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`mx-3 mb-7 h-px flex-1
                    ${currentStep > step.id ? "bg-[#c6a96b]" : "bg-white/10"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
