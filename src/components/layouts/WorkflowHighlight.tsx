import { WorkflowHighlightItems } from "@/app/data";

export default function WorkflowHighlight() {
  return (
    <section
      id="highlight-project"
      className="mt-6 w-full rounded-md bg-card-dark pt-6 pb-2 px-2 sm:mt-0"
    >
      <div className="flex gap-1.5 flex-col w-full ">
        <h5 className="text-xl font-semibold text-typography-dark">
          Workflow Highlights
        </h5>
        <p className="text-typography-light text-sm leading-loose">How I move a UI/UX product from a raw idea to a shipped, polished design five steps, in order.</p>
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
