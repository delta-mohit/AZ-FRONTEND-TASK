import ContentHeader from "./ContentHeader";
import ContentMain from "./ContentMain";
import ContentSide from "./ContentSide";

function Content() {
  return (
    <div className="rounded-lg border-[1.5px] border-[#A4E6FF] border-opacity-70 rounded-br-none rounded-bl-none">
      <ContentHeader />
      <div className="flex mx-8">
        <ContentSide className="basis-[36%]" />
        <ContentMain />
      </div>
    </div>
  );
}

export default Content;
