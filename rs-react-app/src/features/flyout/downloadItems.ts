import type { ResponseItem } from '../../api/interfaces/Response';

export const downloadItems = (items: ResponseItem[]): void => {
  const currentURL = window.location.href;

  const text: string =
    currentURL +
    '\n\n' +
    items
      .map((item) => {
        return `Name: 
    ${item.name + '\n'}
    Description:
    ${item.description.join('\n')}`;
      })
      .join('\n\n');

  const blob = new Blob([text], {
    type: 'text/csv;charset=utf-8;',
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;
  link.download = `${items.length}_items.csv`;

  link.click();

  URL.revokeObjectURL(url);
};
