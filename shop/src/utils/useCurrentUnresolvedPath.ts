import { useResolvedPath } from "react-router-dom";

const useCurrentUnresolvedPath = () => {
  let resolved = useResolvedPath('');
  let rootPath = resolved.pathname;

  if (rootPath?.slice(-1) === '/') {
    rootPath = rootPath.slice(0, -1);
  }
  return rootPath || '';
};

export default useCurrentUnresolvedPath;