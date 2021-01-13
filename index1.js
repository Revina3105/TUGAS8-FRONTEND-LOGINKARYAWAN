// INPUT DOM
var nameDOM = document.querySelector("#name");
var address = document.querySelector("#address");
var genderContainer = document.querySelector("#gender-container");
var hobbyContainer = document.querySelector("#hobby-container");
var religion = document.querySelector("#religion");
// INPUT DOM

var table = document.querySelector("#data-table");
var submitBtn = document.querySelector("#submit");

var state = {
  querySet: tableDataDB,
  page: 1,
  rows: 5,
  window: 3,
};
// INITIAL DATA
var tableDataDB = [
  {
    first_name: "Revina",
    address: "Jakarta",
    number: "1",
    gender: "Female",
    hobby: "Running",
    religion: "Islam",
  },
  {
    first_name: "Matt",
    address: "Hasselbeck",
    number: "2",
    gender: "Male",
    hobby: "Reading",
    religion: "Protestan",
  },
  {
    first_name: "Jim",
    address: "Zorn",
    number: "3",
    gender: "Female",
    hobby: "Reading",
    religion: "Katholik",
  },
  {
    first_name: "Brady",
    address: "Quinn",
    number: "4",
    gender: "Male",
    hobby: "Swimming",
    religion: "Hindu",
  },
  {
    first_name: "Charly",
    address: "Whitehurst",
    number: "5",
    gender: "Male",
    hobby: "Reading",
    religion: "Protestan",
  },
  {
    first_name: "Duane",
    address: "Devine",
    number: "6",
    gender: "Male",
    hobby: "Reading",
    religion: "Protestan",
  },
  {
    first_name: "Tom",
    address: "Brady",
    number: "7",
    gender: "Female",
    hobby: "Running",
    religion: "Hindu",
  },
  {
    first_name: "Arron",
    address: "Rogers",
    number: "8",
    gender: "Male",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Patrick",
    address: "Mahoms",
    number: "9",
    gender: "Male",
    hobby: "Swimming",
    religion: "Katholik",
  },
  {
    first_name: "Gardner",
    address: "Minshew",
    number: "10",
    gender: "Male",
    hobby: "Reading",
    religion: "Protestan",
  },
  {
    first_name: "Andrew",
    address: "Luck",
    number: "11",
    gender: "Male",
    hobby: "Reading",
    religion: "Katholik",
  },
  {
    first_name: "Josh",
    address: "Gordon",
    number: "12",
    gender: "Male",
    hobby: "Singing",
    religion: "Hindu",
  },
  {
    first_name: "Drew",
    address: "Brees",
    number: "13",
    gender: "Female",
    hobby: "Swimming",
    religion: "Islam",
  },
  {
    first_name: "Cam",
    address: "Newton",
    number: "14",
    gender: "Female",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Joe",
    address: "Montana",
    number: "15",
    gender: "Female",
    hobby: "Running",
    religion: "Katholik",
  },

  {
    first_name: "Relly",
    address: "Depok",
    number: "16",
    gender: "Female",
    hobby: "Swimming",
    religion: "Islam",
  },
  {
    first_name: "Matt",
    address: "Hasselbeck",
    number: "17",
    gender: "Male",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Jim",
    address: "Zorn",
    number: "18",
    gender: "Female",
    hobby: "Running",
    religion: "Budha",
  },
  {
    first_name: "Brady",
    address: "Quinn",
    number: "19",
    gender: "Male",
    hobby: "Swimming",
    religion: "Budha",
  },
  {
    first_name: "Charly",
    address: "Whitehurst",
    number: "20",
    gender: "Male",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Duane",
    address: "Devine",
    number: "21",
    gender: "Female",
    hobby: "Running",
    religion: "Hindu",
  },
  {
    first_name: "Tom",
    address: "Brady",
    number: "22",
    gender: "Female",
    hobby: "Singing",
    religion: "Budha",
  },
  {
    first_name: "Arron",
    address: "Rogers",
    number: "23",
    gender: "Male",
    hobby: "Swimming",
    religion: "Hindu",
  },
  {
    first_name: "Patrick",
    address: "Mahoms",
    number: "24",
    gender: "Male",
    hobby: "Swimming",
    religion: "Katholik",
  },
  {
    first_name: "Gardner",
    address: "Minshew",
    number: "25",
    gender: "Female",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Andrew",
    address: "Luck",
    number: "26",
    gender: "Male",
    hobby: "Swimming",
    religion: "Budha",
  },
  {
    first_name: "Josh",
    address: "Gordon",
    number: "27",
    gender: "Female",
    hobby: "Swimming",
    religion: "Islam",
  },
  {
    first_name: "Drew",
    address: "Brees",
    number: "28",
    gender: "Male",
    hobby: "Reading",
    religion: "Hindu",
  },
  {
    first_name: "Cam",
    address: "Newton",
    number: "29",
    gender: "Female",
    hobby: "Singing",
    religion: "Islam",
  },
  {
    first_name: "Joe",
    address: "Montana",
    number: "30",
    gender: "Male",
    hobby: "Running",
    religion: "Budha",
  },
];

currentIndex = tableDataDB.length + 1;

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var newName = nameDOM.value;
  var newAddress = address.value;
  var newGender = "";
  var newHobby = [];
  for (input of genderContainer.querySelectorAll("input")) {
    if (input.checked == true) {
      newGender = input.value;
    }
  }
  for (input of hobbyContainer.querySelectorAll("input")) {
    if (input.checked == true) {
      console.log(input.value);
      newHobby.push(input.value);
    }
  }
  tableDataDB.push({
    first_name: newName,
    number: `${currentIndex}`,
    address: newAddress,
    gender: newGender,
    hobby: newHobby.join(","),
    religion: religion.value,
  });
  currentIndex += 1;
  refreshTableData(tableDataDB);
});

var filterInput = document.querySelector("input#searchfor");
// filter data dari kotak input
filterInput.addEventListener("input", function () {
  let filtered = tableDataDB.filter(function (datum) {
    return (
      datum.first_name
        .toLocaleLowerCase()
        .includes(filterInput.value.toLocaleLowerCase()) ||
      datum.address
        .toLocaleLowerCase()
        .includes(filterInput.value.toLocaleLowerCase())
    );
  });
  state.page = 1;
  refreshTableData(filtered);
});

// delete data dengan ID
function deleteData(number) {
  tableDataDB = tableDataDB.filter((data) => data.number != number);
  // benerin number yang sudah di delete
  tableDataDB = tableDataDB.map((datum, index) => {
    datum.number = index + 1;
    return datum;
  });
  refreshTableData(tableDataDB);
}

// edit data dengan id, memakai prompt
function editData(number) {
  var data = tableDataDB.filter((data) => data.number == number);
  var newName = prompt("masukkan nama", data.first_name);
  var newAddress = prompt("masukkan alamat", data.address);
  var newGender = prompt("masukan gender", data.gender);
  var newHobby = prompt("masukkan hobi", data.hobby);
  var newReligion = prompt("masukkan agama", data.religion);
  tableDataDB = tableDataDB.map((data) => {
    if (data.number == number) {
      return {
        first_name: newName || data.name,
        address: newAddress || data.address,
        gender: newGender || data.gender,
        hobby: newHobby || data.hobby,
        religion: newReligion || data.religion,
        number: number,
      };
    }
    return data;
  });
  refreshTableData(tableDataDB);
}

function pagination(querySet, page, rows) {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;
  var trimmedData = querySet.slice(trimStart, trimEnd);
  var pages = Math.round(querySet.length / rows);
  return {
    querySet: trimmedData,
    pages: pages,
  };
}

function pageButtons(pages) {
  var wrapper = document.getElementById("pagination-wrapper");
  wrapper.innerHTML = ``;
  console.log("Pages:", pages);
  var maxLeft = state.page - Math.floor(state.window / 2);
  var maxRight = state.page + Math.floor(state.window / 2);
  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = state.window;
  }
  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1);
    if (maxLeft < 1) {
      maxLeft = 1;
    }
    maxRight = pages;
  }

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`;
  }

  if (state.page != 1) {
    wrapper.innerHTML =
      `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` +
      wrapper.innerHTML;
  }

  if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`;
  }

  $(".page").on("click", function () {
    $("#table-body").empty();
    state.page = Number($(this).val());
    console.log(state.querySet);
    refreshTableData(state.querySet);
  });
}

function refreshTableData(data) {
  let dom = "";
  var paginationData = pagination(data, state.page, state.rows);
  state.querySet = data;
  paginationData.querySet.forEach((element, index) => {
    dom += `
        <tr>
          <td width="10px">${element.number}</td>
          <td>${element.first_name}</td>
          <td>${element.address}</td>
            <td>${element.gender}</td>
            <td>${element.hobby}</td>
            <td>${element.religion}</td>
            <td><button onclick="editData(${element.number})">Edit</button></td>
            <td><button onclick="deleteData(${element.number})">Delete</button></td>
          </tr>
          `;
  });
  table.innerHTML =
    `<tr>
            <td width="10px">No</td>
            <td>Name</td>
            <td>Address</td>
            <td>Gender</td>
            <td>Hobby</td>
            <td>Religion</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>` + dom;

  pageButtons(paginationData.pages);
}
refreshTableData(tableDataDB);
