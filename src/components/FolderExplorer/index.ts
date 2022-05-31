import { FileNode } from '@src/types/fileNode';
import styles from './styles.less';
import Header from './Header';
import HeaderModified from './HeaderModified';
import HeaderName from './HeaderName';
import HeaderSize from './HeaderSize';
import RowIcon from './RowIcon';
import RowName from './RowName';
import RowModified from './RowModified';
import RowSize from './RowSize';

const FolderExplorer = (initialNode: FileNode) => {
  const el = document.createElement('main');
  el.classList.add(styles.container);

  const headerEl = Header();
  el.appendChild(headerEl);

  const headerNameEl = HeaderName();
  el.appendChild(headerNameEl);

  const headerModifiedEl = HeaderModified();
  el.appendChild(headerModifiedEl);

  const headerSizeEl = HeaderSize();
  el.appendChild(headerSizeEl);

  document.addEventListener('openFolder', (e) => {
    const node = (e as CustomEvent<FileNode>).detail;
    if (node.type === 'folder') {
      // Remove previous folder rows
      el.querySelectorAll(`[data-folder-row="true"]`).forEach((row) =>
        el.removeChild(row)
      );

      // Add new folder rows
      node.children.forEach((child) => {
        const icon = RowIcon(child);
        const name = RowName(child);
        const modified = RowModified(child);
        const size = RowSize(child);

        if (child.type === 'folder') {
          name.addEventListener('click', (e: Event) => {
            e.stopPropagation();
            e.preventDefault();
            document.dispatchEvent(
              new CustomEvent('openFolder', { detail: child })
            );
          });
        }

        el.appendChild(icon);
        el.appendChild(name);
        el.appendChild(modified);
        el.appendChild(size);
      });
    }
  });

  // Now that the event listener is added, trigger it with the initial node
  if (initialNode.type === 'folder') {
    document.dispatchEvent(
      new CustomEvent('openFolder', { detail: initialNode })
    );
  }

  return el;
};

export default FolderExplorer;
