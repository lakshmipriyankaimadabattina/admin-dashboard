var data = [
    {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "Admin"
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "User"
    },
    {
        "id": "3",
        "name": "Bob Johnson",
        "email": "bob.johnson@example.com",
        "role": "Moderator"
    },
    {
        "id": "4",
        "name": "Alice Williams",
        "email": "alice.williams@example.com",
        "role": "User"
    },
    {
        "id": "5",
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "role": "User"
    },
    {
        "id": "6",
        "name": "Eva Davis",
        "email": "eva.davis@example.com",
        "role": "User"
    },
    {
        "id": "7",
        "name": "Frank Miller",
        "email": "frank.miller@example.com",
        "role": "Moderator"
    },
    {
        "id": "8",
        "name": "Grace Wilson",
        "email": "grace.wilson@example.com",
        "role": "User"
    },
    {
        "id": "9",
        "name": "Henry Lee",
        "email": "henry.lee@example.com",
        "role": "User"
    },
    {
        "id": "10",
        "name": "Ivy Turner",
        "email": "ivy.turner@example.com",
        "role": "User"
    },


{
    "id": "11",
    "name": "Jack Anderson",
    "email": "jack.anderson@example.com",
    "role": "User"
},
{
    "id": "12",
    "name": "Lily Martinez",
    "email": "lily.martinez@example.com",
    "role": "User"
},
{
    "id": "13",
    "name": "Mason Turner",
    "email": "mason.turner@example.com",
    "role": "Moderator"
},
{
    "id": "14",
    "name": "Natalie White",
    "email": "natalie.white@example.com",
    "role": "User"
},
{
    "id": "15",
    "name": "Oliver Harris",
    "email": "oliver.harris@example.com",
    "role": "User"
},
{
    "id": "16",
    "name": "Penny Smith",
    "email": "penny.smith@example.com",
    "role": "User"
},
{
    "id": "17",
    "name": "Quincy Brown",
    "email": "quincy.brown@example.com",
    "role": "Moderator"
},
{
    "id": "18",
    "name": "Rachel Miller",
    "email": "rachel.miller@example.com",
    "role": "User"
},
{
    "id": "19",
    "name": "Samuel Turner",
    "email": "samuel.turner@example.com",
    "role": "User"
},
{
    "id": "20",
    "name": "Tina Davis",
    "email": "tina.davis@example.com",
    "role": "User"
},
{
    "id": "21",
    "name": "Ulysses Wilson",
    "email": "ulysses.wilson@example.com",
    "role": "Moderator"
},
{
    "id": "22",
    "name": "Violet Lee",
    "email": "violet.lee@example.com",
    "role": "User"
},
{
    "id": "23",
    "name": "Walter Brown",
    "email": "walter.brown@example.com",
    "role": "User"
},
{
    "id": "24",
    "name": "Xena Turner",
    "email": "xena.turner@example.com",
    "role": "User"
},
{
    "id": "25",
    "name": "Yasmine White",
    "email": "yasmine.white@example.com",
    "role": "User"
},
{
    "id": "26",
    "name": "Zachary Miller",
    "email": "zachary.miller@example.com",
    "role": "Moderator"
},
{
    "id": "27",
    "name": "Amy Harris",
    "email": "amy.harris@example.com",
    "role": "User"
},
{
    "id": "28",
    "name": "Brian Turner",
    "email": "brian.turner@example.com",
    "role": "User"
},
{
    "id": "29",
    "name": "Cindy Davis",
    "email": "cindy.davis@example.com",
    "role": "User"
},
{
    "id": "30",
    "name": "David Wilson",
    "email": "david.wilson@example.com",
    "role": "Moderator"
}
];

var tableHeaders = Object.keys(data[0]);
var table = document.getElementById('user-table');
var thead = document.createElement('thead');
var th = tableHeaders.map(function(key) {
    return '<th>' + key.charAt(0).toUpperCase() + key.slice(1) + '</th>';
}).join('');

thead.innerHTML = '<tr><th><input type="checkbox" id="select-all"></th>' + th + '<th>Action</th></tr>';
table.appendChild(thead);

function updateTableAndPaginationWithSearch() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var filteredData = data.filter(function (rowData) {
        return Object.values(rowData).some(function (value) {
            return value.toLowerCase().includes(searchTerm);
        });
    });

    currentPage = 1;
    data = filteredData;
    updateTableAndPagination();
}


function renderTableRows(data) {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(function (rowData, index) {
        var row = document.createElement('tr');

        var cells = tableHeaders.map(function (key) {
            return '<td>' + rowData[key] + '</td>';
        }).join('');

        var actions = '<td><button class="edit-button" data-index="' + index + '" title="Edit">&#9998;</button> <button class="delete-button" data-index="' + index + '" title="Delete">&#128465;</button></td>';
        row.innerHTML = '<td><input type="checkbox" class="checkbox"></td>' + cells + actions;
        tableBody.appendChild(row);
    });
}

function paginateData(data, page, itemsPerPage) {
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}


function renderPagination(totalPages) {
    var pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement('button');
        button.classList.add('page-button', 'page-number');
        button.textContent = i;
        pagination.appendChild(button);
    }
}

var itemsPerPage = 10;
var currentPage = 1;

function updateTableAndPagination() {
    var paginatedData = paginateData(data, currentPage, itemsPerPage);
    renderTableRows(paginatedData);
    renderPagination(Math.ceil(data.length / itemsPerPage));
}

document.getElementById('search-input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        updateTableAndPaginationWithSearch();
    }
});

document.getElementById('select-all-header').addEventListener('click', function (event) {
    var checked = event.target.checked;
    var tableBody = document.getElementById('table-body');
    var checkboxes = tableBody.querySelectorAll('.checkbox');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = checked;
        highlightRow(checkbox.parentElement.parentElement, checked);
    });
});

document.getElementById('delete-selected').addEventListener('click', function () {
    var tableBody = document.getElementById('table-body');
    var checkboxes = tableBody.querySelectorAll('.checkbox');

    checkboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            data.splice(index + (currentPage - 1) * itemsPerPage, 1);
        }
    });

    currentPage = 1;
    updateTableAndPagination();
});

document.getElementById('user-table').addEventListener('click', function (event) {
    if (event.target.classList.contains('checkbox')) {
        highlightRow(event.target.parentElement.parentElement, event.target.checked);
    }
});

document.querySelectorAll('.page-number').forEach(function (button) {
    button.addEventListener('click', function () {
        currentPage = parseInt(button.textContent);
        updateTableAndPagination();
    });
});

document.querySelector('.first-page').addEventListener('click', function () {
    currentPage = 1;
    updateTableAndPagination();
});


document.querySelector('.previous-page').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        updateTableAndPagination();
    }
});

document.querySelector('.next-page').addEventListener('click', function () {
    var totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateTableAndPagination();
    }
});




document.querySelector('.last-page').addEventListener('click', function () {
    var totalPages = Math.ceil(data.length / itemsPerPage);
    currentPage = totalPages;
    updateTableAndPagination();
});

document.getElementById('delete-selected').addEventListener('click', function () {
    var tableBody = document.getElementById('table-body');
    var checkboxes = tableBody.querySelectorAll('.checkbox');

    checkboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            data.splice(index + (currentPage - 1) * itemsPerPage, 1);
        }
    });

    currentPage = 1;
    updateTableAndPagination();
});

// ... (your existing code)

document.getElementById('user-table').addEventListener('click', function (event) {
    var target = event.target;

    // Check if the clicked element is an edit or delete button
    if (target.classList.contains('edit-button')) {
        var index = parseInt(target.dataset.index);
        editRow(index);
    } else if (target.classList.contains('delete-button')) {
        var index = parseInt(target.dataset.index);
        deleteRow(index);
    }
});

function editRow(index) {
    var editedName = prompt('Enter edited name:', data[index].name);
    if (editedName !== null) {
        data[index].name = editedName;
        updateTableAndPagination();
    }
}

function deleteRow(index) {
    if (confirm('Are you sure you want to delete this row?')) {
        data.splice(index + (currentPage - 1) * itemsPerPage, 1);
        updateTableAndPagination();
    }
}

// ... (your existing code)

document.getElementById('pagination').addEventListener('click', function (event) {
    if (event.target.classList.contains('page-number')) {
        currentPage = parseInt(event.target.textContent);
        updateTableAndPagination();
    } else if (event.target.classList.contains('first-page')) {
        currentPage = 1;
        updateTableAndPagination();
    } else if (event.target.classList.contains('previous-page')) {
        if (currentPage > 1) {
            currentPage--;
            updateTableAndPagination();
        }
    } else if (event.target.classList.contains('next-page')) {
        var totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateTableAndPagination();
        }
    } else if (event.target.classList.contains('last-page')) {
        var totalPages = Math.ceil(data.length / itemsPerPage);
        currentPage = totalPages;
        updateTableAndPagination();
    }
});

// ... (Your existing code)

function createPaginationButton(text, className, clickHandler) {
    var button = document.createElement('button');
    button.classList.add('page-button', className);
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function renderPagination() {
    var pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    var totalPages = Math.ceil(data.length / itemsPerPage);

    pagination.appendChild(createPaginationButton('Previous', 'previous-page', function () {
        if (currentPage > 1) {
            currentPage--;
            updateTableAndPagination();
        }
    }));

    for (var i = 1; i <= totalPages; i++) {
        pagination.appendChild(createPaginationButton(i, 'page-number', function () {
            currentPage = parseInt(this.textContent);
            updateTableAndPagination();
        }));
    }

    pagination.appendChild(createPaginationButton('Next', 'next-page', function () {
        var totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateTableAndPagination();
        }
    }));
}

// ... (Your existing code)

document.getElementById('search-input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        updateTableAndPaginationWithSearch();
    }
});

// ... (Rest of your existing code)

renderPagination();


updateTableAndPagination();




