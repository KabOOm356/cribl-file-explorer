import { FileNode } from '@src/types/fileNode';
import grid from '@src/components/FolderExplorer/grid.less';

const dateFormat = new Intl.DateTimeFormat('en-US');

const RowModified = ({ modified }: FileNode) => {
  const el = document.createElement('div');
  el.classList.add(grid.modified);
  el.setAttribute('data-testid', 'row-modified');
  el.setAttribute('data-folder-row', 'true');
  el.textContent = dateFormat.format(modified);

  return el;
};

export default RowModified;
