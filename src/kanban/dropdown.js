const blockTemplate = `
    <div id="list" class="dropdown_list">
        <a href="#" class="dropdown_element">My account</a>
        <a href="#" class="dropdown_element">My tasks</a>
        <a href="#" class="dropdown_element">Log out</a>
    </div>
`;

const buttonUserMenu = document.querySelector(".user_menu");
const headerElement = document.querySelector(".header_element");
const newBlock = document.createElement("div");
const vector = document.querySelector(".vector");

const dropDown = () => {
  const list = document.getElementById("list");
  newBlock.innerHTML = blockTemplate;
  if (list === null) {
    headerElement.append(newBlock);
    vector.setAttribute("style", "transform: rotate(180deg);");
  } else {
    newBlock.remove();
    vector.setAttribute("style", "transform: rotate(360deg);");
  }
};

buttonUserMenu.addEventListener("click", dropDown);
