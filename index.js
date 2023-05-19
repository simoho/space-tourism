const mainList = document.querySelectorAll('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelectorAll('[role="tabpanel"]');
const body = document.querySelector('body')

// function
// function pageFun(parent, child){
//   parent.querySelector
// }

// adding event
tabs.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    // const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    console.log(targetTab)
    // if (
    //   targetPanel == "home" ||
    //   targetPanel == "destination" ||
    //   targetPanel == "crew" ||
    //   targetPanel == "technology"
    // ) {
    //   body.className = targetPanel;
    // }

  })
})