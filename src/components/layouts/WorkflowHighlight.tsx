import { WorkflowHighlightItems } from "@/app/data";

export default function WorkflowHighlight() {
  return (
    <section
      id="highlight-project"
      className="mt-6 w-full rounded-md bg-card-dark pt-6 pb-2 px-2 sm:mt-0"
    >
      <div className="flex w-full items-center justify-between">
        <h5 className="text-xl font-semibold text-typography-dark">
          Workflow Highlights
        </h5>
      </div>


      <div className="grid grid-cols-1 gap-4 p-2 text-primary-foreground mt-4">
        {WorkflowHighlightItems.map(({item, icon: Icon}) => (
        <div key={item} className="flex items-center gap-2 bg-[#282828] p-2 rounded-md">
          <Icon size={20} />
          <p>{item}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
