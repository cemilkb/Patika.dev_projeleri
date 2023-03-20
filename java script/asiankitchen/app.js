const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "data:image/jpeg;base64,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",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let section = document.querySelector(".section-center");
let buttonItems = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  buttonItems.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");


  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();