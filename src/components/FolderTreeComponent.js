import FolderTree from "react-folder-tree";
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
  console.log("test");
  console.log(fileTree);
  return (
    <div className="">
      <FolderTree data={fileTree} showCheckbox={false} indentPixels={15} />
    </div>
  );
}
export default FolderTreeComponent;
