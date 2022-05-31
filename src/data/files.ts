import { FileNode } from '@src/types/fileNode';
import { getRandomDate } from '@src/util/date';

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
          children: [
            {
              type: 'file',
              name: 'Resume.pdf',
              modified: getRandomDate(),
              size: 500,
            },
          ],
        },
        {
          type: 'folder',
          name: 'School',
          modified: getRandomDate(),
          children: [
            {
              type: 'file',
              name: 'Homework.doc',
              modified: getRandomDate(),
              size: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'folder',
      name: 'Images',
      modified: getRandomDate(),
      children: [
        {
          type: 'file',
          name: 'Photo.jpg',
          modified: getRandomDate(),
          size: 100,
        },
        {
          type: 'file',
          name: 'Vacation.jpg',
          modified: getRandomDate(),
          size: 250,
        },
      ],
    },
    {
      type: 'folder',
      name: 'System',
      modified: getRandomDate(),
      children: [
        {
          type: 'file',
          name: 'Settings.ini',
          modified: getRandomDate(),
          size: 10,
        },
        {
          type: 'file',
          name: 'Startup.bat',
          modified: getRandomDate(),
          size: 10,
        },
      ],
    },
    {
      type: 'file',
      name: 'Description.rtf',
      modified: getRandomDate(),
      size: 1,
    },
    {
      type: 'file',
      name: 'Description.txt',
      modified: getRandomDate(),
      size: 2,
    },
  ],
};

export default files;
