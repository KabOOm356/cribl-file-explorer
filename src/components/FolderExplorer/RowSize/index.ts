import { FileNode } from '@src/types/fileNode';
import grid from '@src/components/FolderExplorer/grid.less';

const numberFormat = new Intl.NumberFormat('en-US');

const RowSize = (node: FileNode) => {
  const el = document.createElement('div');
  el.classList.add(grid.size);
  el.setAttribute('data-testid', 'row-size');
  el.setAttribute('data-folder-row', 'true');
  el.textContent =
    node.type === 'file' ? `${numberFormat.format(node.size)} KB` : '';

  return el;
};

export default RowSize;
