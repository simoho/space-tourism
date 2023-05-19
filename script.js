const bodyImg = document.querySelector('body')
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navTab = document.querySelectorAll('nav button')
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const navActive = document.querySelector('.active');
const pagesList = document.querySelectorAll('section');

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", "false");

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, [`#${targetPanel}`]);

  hideContent(mainContainer, 'picture');
  showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute('hidden');
}
function dataVisible() {
  pagesList.forEach((page) => {
    page.setAttribute('data-visible', 'false');
  })
}
function changeBG(element) {
  let el = element.getAttribute("aria-controls");
  bodyImg.className = el;
  switch (el) {
    case 'home':
      pagesList[0].setAttribute('data-visible', 'true');

      break;
    case 'destination':
      pagesList[1].setAttribute('data-visible', 'true');
      break;
    case 'crew':
      pagesList[2].setAttribute('data-visible', 'true');
      break;
    case 'technology':
      pagesList[3].setAttribute('data-visible', 'true');
      break;

    default:
      console.log('something is wrong')
      break;
  }
}
function navFunction() {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
}

function actToggle(el) {
  const navActive = document.querySelector('.active');
  let tabactive = el.classList.contains('.active');
  if (!tabactive) {
    navActive.classList.remove('active');
    el.classList.add('active');
  }
}

// events
navToggle.addEventListener("click", () => {
  navFunction()
})

navTab.forEach(tab => {
  tab.addEventListener('click', (e) => {
    let tabTarget = e.target;
    actToggle(tabTarget);
    dataVisible();
    changeBG(tabTarget)
  })
});
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});
