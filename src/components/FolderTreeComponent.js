import FolderTree from "react-folder-tree";
import "./FolderTreeComponent.css";
import GroupLogo from "../assets/group.svg";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

function useFileTree() {
  const [fileTree, setFileTree] = useState({});
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    async function getData() {
      let data = await axios.get("http://localhost:3000/filetree");
      data = await data;
      console.log(data);
      setFileTree(data.data);
    }
    getData();
    setLoading(1);
  }, [loading]);
  return fileTree;
}

function FolderTreeComponent() {
  const fileTree = useFileTree();
  const customIcon = ({ onClick: defaultOnClick, nodeData }) => {
    const { path, name, checked, isOpen, ...restData } = nodeData;

    return <GroupLogo />;
  };
  console.log("test");
  console.log(fileTree);
  return (
    <div className="inline">
      <FolderTree
        data={fileTree}
        showCheckbox={false}
        indentPixels={15}
        iconComponents={GroupLogo}
      />
    </div>
  );
}
export default FolderTreeComponent;
