import { FileNode } from 'src/types/fileNode';
import { getRandomDate } from 'src/util/date';

const files: FileNode = {
  type: 'folder',
  name: 'Files',
  modified: getRandomDate(),
  children: [
    {
      type: 'folder',
      name: 'Documents',
      modified: getRandomDate(),
      children: [
        {
          type: 'folder',
          name: 'Work',
          modified: getRandomDate(),
          children: [],
        },
      ],
    },
    {
      type: 'folder',
      name: 'Images',
      modified: getRandomDate(),
      children: [],
    },
    {
      type: 'folder',
      name: 'System',
      modified: getRandomDate(),
      children: [],
    },
    {
      type: 'file',
      name: 'Description.rtf',
      modified: getRandomDate(),
      size: 1000,
    },
    {
      type: 'file',
      name: 'Description.txt',
      modified: getRandomDate(),
      size: 2000,
    },
  ],
};

export default files;
