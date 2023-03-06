import FolderTreeComponent from "./FolderTreeComponent";

const onNodeClick = ({ defaultOnClick, nodeData }) => {
  defaultOnClick();

  const { path, name, checked, isOpen } = nodeData;
  console.log(path);
};

function SplitLayout() {
  return (
    <div className="m-1	 flex flex-wrap sm:flex-row-reverse items-stretch ">
      <div className="md:w-3/4 xl:w-3/5 flex scrollbar-hide"></div>
      <div className="w-full flex-1 bg-blue-lightest p-4 	">
        <h2 className="font-semibold text-lg m-1">Repositories</h2>
        <FolderTreeComponent className="border border-sky-500"></FolderTreeComponent>
      </div>
    </div>
  );
}
export default SplitLayout;
