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
const onNodeClick = ({ defaultOnClick, nodeData }) => {
  defaultOnClick();

  const { path, name, checked, isOpen } = nodeData;
  alert(name);
};

const EditIcon = (...args) => null;
const DeleteIcon = (...args) => null;
const CancelIcon = (...args) => null;

function FolderTreeComponent() {
  const fileTree = useFileTree();
  console.log("test");
  console.log(fileTree);
  return (
    <div className="inline">
      <FolderTree
        data={fileTree}
        iconComponents={{ EditIcon, DeleteIcon, CancelIcon }}
        showCheckbox={false}
        indentPixels={15}
        onNameClick={onNodeClick}
      />
    </div>
  );
}
export default FolderTreeComponent;
