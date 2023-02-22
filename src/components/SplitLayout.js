import FolderTreeComponent from "./FolderTreeComponent";

function SplitLayout() {
  return (
    <div className="flex flex-wrap sm:flex-row-reverse items-stretch h-screen">
      <div className="w-full md:w-1/2 xl:w-3/5 bg-cover flex"></div>
      <div className="w-full flex-1 bg-blue-lightest p-4 overflow-y-scroll">
        <FolderTreeComponent></FolderTreeComponent>
      </div>
    </div>
  );
}
export default SplitLayout;
