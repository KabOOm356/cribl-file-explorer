import files from 'src/data/files';
import styles from './styles.less';
import FolderNav from 'src/components/FolderNav';

import './global.less';

const el = document.createElement('div');
el.classList.add(styles.container);

const nav = FolderNav(files);
if (nav) {
  el.appendChild(nav);
}

document.addEventListener('openFolder', function (e) {
  console.log('openFolder', e);
});

document.body.replaceChildren(el);
