import _ from "lodash";

function buttonClicked() {
	const el = document.getElementById("header");
	el.innerHTML = "Hey i have updated the code !";

	const listItems = ["Apple", "orange", "Banana"];
	const ul = document.getElementById("shoppingList");
	_.forEach(listItems, function (item) {
	  const tempEl = document.createElement("li");
	  tempEl.innerHTML = item;
	  ul.appendChild(tempEl);
	});
};
