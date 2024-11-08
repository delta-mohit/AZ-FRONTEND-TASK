import ContentHeader from "./ContentHeader";
import ContentMain from "./ContentMain";
import ContentSide1 from "./ContentSide1";

function Content() {
  return (
    <div className="rounded-lg border-[1.5px] border-[#A4E6FF] border-opacity-70 rounded-br-none rounded-bl-none flex-1">
      <ContentHeader />
      <div className="flex mx-8 flex-col lg:flex-row">
        <ContentSide1 className="basis-[36%]" />
        <ContentMain />
      </div>
    </div>
  );
}

export default Content;
