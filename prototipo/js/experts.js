const data = [
  {
    name: 'John Doe',
    expertise: 'Lorem Ipsum dolor',
  },
  {
    name: 'Jane',
    expertise: 'Lorem Ipsum dolor',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const addExpertRow = (table, data) => {
    const ROW_CLASS_LIST = 'odd:bg-gray-100';
    const CELL_CLASS_LIST = 'px-2';

    const row = table.insertRow();
    row.classList.add(ROW_CLASS_LIST);

    const nameCell = row.insertCell();
    nameCell.innerHTML = data.name;
    nameCell.classList.add(CELL_CLASS_LIST);

    const expertiseCell = row.insertCell();
    expertiseCell.innerHTML = data.expertise;
    expertiseCell.classList.add(CELL_CLASS_LIST);

    const actionsCell = row.insertCell();
    actionsCell.classList.add(CELL_CLASS_LIST);
    actionsCell.innerHTML = `
      <td class="px-2">
        <button class="cursor-not-allowed border border-gray-300 rounded-md py-2 px-3 my-2 text-accent">
          <i class="fa fa-solid fa-pencil"></i>
          <span class="hidden sm:inline">Editar</span>
        </button>
        <button class="cursor-not-allowed border border-gray-300 rounded-md py-2 px-3 my-2 text-accent">
          <i class="fa fa-solid fa-search"></i>
          <span class="hidden sm:inline">Ver</span>
        </button>
        <button class="table-row-remove-action border border-gray-300 rounded-md py-2 px-3 my-2 text-accent">
          <i class="fa fa-solid fa-trash"></i>
          <span class="hidden sm:inline">Remover</span>
        </button>
      </td>
    `;
  };

  const params = new URLSearchParams(window.location.search);
  if (params.has('name') && params.has('expertise')) {
    data.push({ name: params.get('name'), expertise: params.get('expertise') });
  }

  const table = document.getElementById('data-table');
  for (const expert of data) {
    addExpertRow(table, expert);
  }

  const tableRemoveRowActionButtons = document.getElementsByClassName('table-row-remove-action');
  for (const element of tableRemoveRowActionButtons) {
    element.addEventListener('click', () => {
      element.closest('tr').remove();
    });
  }
});
