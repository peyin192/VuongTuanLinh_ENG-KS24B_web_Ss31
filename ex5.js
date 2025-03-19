// add employer
const employees = [
    { id: 1, 
      name: 'Pham Thi Mai Trang',
      age: 18,
      adress: 'Hanoi',
    },
    {
      id: 2, 
      name: 'Vuong Tuan Linh',
      age: 18,
      adress: 'Hanoi',
    }
    ];
// show employers in table
    const tbody = document.querySelector('tbody');
    employees.forEach((employee) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.adress}</td>
        `;
        tbody.appendChild(tr);
    });