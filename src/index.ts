import files from '@src/data/files';
import styles from './styles.less';
import FolderNav from '@src/components/FolderNav';
import FolderExplorer from '@src/components/FolderExplorer';

import './global.less';

const el = document.createElement('div');
el.classList.add(styles.container);

const nav = FolderNav(files);
if (nav) {
  el.appendChild(nav);
}
const explorer = FolderExplorer(files);
el.appendChild(explorer);

document.body.replaceChildren(el);
