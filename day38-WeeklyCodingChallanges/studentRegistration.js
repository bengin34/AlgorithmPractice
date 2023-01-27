// The purpose of this coding challenge is to display the data given as string in the form of an html table.

// Expected Outcome
// ​

// St Nr	First Name	Last Name	    Location	      Path
// C1234	John	        Doe	          London	    Full-Stack
// C2345	Jane    	    Doe           London	    Data-Science
// C2346	Mary	        Ann         	Paris       AWS-Devops
// C2347	Adam	        Smith	        Texas   	  AWS-Devops
// C2444	Michael	      Great         Arizona	    Full-Stack
// C2555	William	      Cash	        Manchester	Data-Science
// C2455	Patrick	      Jane	        Madrid	    Full-Stack
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Sample Input
let data = [
  "St Nr-  First Name,Last Name,Location	Path",
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

function createTable(data) {
  let table = document.createElement("table");
  table.style.borderCollapse = "seperate";
  table.style.border = "1px solid white";
  let tbody = document.createElement("tbody");
  let theader = document.createElement("theader");
  table.appendChild(tbody);
  tbody.appendChild(theader);

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.style.border = " 1px solid white";

    let cells = data[i].replace("-", ",").split(",");
    for (let j = 0; j < cells.length; j++) {
        let td = document.createElement("td");
        td.style.border = " 1px solid white";
        td.innerHTML = cells[j];
        tr.appendChild(td);
    }
  }
  document.body.appendChild(table);
}

createTable(data);
