/**
  /////////////////////// Category Scroll JS /////////////////

  @param {Object} object - Container for all options.
    @param {string || DOM node} selector - Element selector.
    @param {string} navSelector - Nav element selector.
    @param {string} contentSelector - Content element selector.
    @param {string} itemSelector - Items selector.
    @param {string} buttonLeftSelector - Left button selector.
    @param {string} buttonRightSelector - Right button selector.
    @param {integer || string} scrollStep - Amount to scroll on button click. 'average' gets the average link width.
*/

const PriorityNavScroller = function ({
  selector: selector = ".nav-scroller",
  navSelector: navSelector = ".nav-scroller-nav",
  contentSelector: contentSelector = ".nav-scroller-content",
  itemSelector: itemSelector = ".nav-scroller-item",
  buttonLeftSelector: buttonLeftSelector = ".nav-scroller-btn--left",
  buttonRightSelector: buttonRightSelector = ".nav-scroller-btn--right",
  scrollStep: scrollStep = 500,
                                        // scrollStep: scrollStep = 0,
} = {}) {
  const navScroller =
    typeof selector === "string" ? document.querySelector(selector) : selector;

  const validateScrollStep = () => {
    return Number.isInteger(scrollStep) || scrollStep === "average";
  };

  if (
    navScroller === undefined ||
    navScroller === null ||
    !validateScrollStep()
  ) {
    throw new Error("There is something wrong, check your options.");
  }

  const navScrollerNav = navScroller.querySelector(navSelector);
  const navScrollerContent = navScroller.querySelector(contentSelector);
  const navScrollerContentItems =
    navScrollerContent.querySelectorAll(itemSelector);
  const navScrollerLeft = navScroller.querySelector(buttonLeftSelector);
  const navScrollerRight = navScroller.querySelector(buttonRightSelector);

  let scrolling = false;
  let scrollAvailableLeft = 0;
  let scrollAvailableRight = 0;
  let scrollingDirection = "";
  let scrollOverflow = "";
  let timeout;

  // Sets overflow and toggle buttons accordingly
  const setOverflow = function () {
    scrollOverflow = getOverflow();
    toggleButtons(scrollOverflow);
    calculateScrollStep();
  };

  // Debounce setting the overflow with requestAnimationFrame
  const requestSetOverflow = function () {
    if (timeout) window.cancelAnimationFrame(timeout);

    timeout = window.requestAnimationFrame(() => {
      setOverflow();
    });
  };

  // Gets the overflow available on the nav scroller
  const getOverflow = function () {
    let scrollWidth = navScrollerNav.scrollWidth;
    let scrollViewport = navScrollerNav.clientWidth;
    let scrollLeft = navScrollerNav.scrollLeft;

    scrollAvailableLeft = scrollLeft;
    scrollAvailableRight = scrollWidth - (scrollViewport + scrollLeft);

    // 1 instead of 0 to compensate for number rounding
    let scrollLeftCondition = scrollAvailableLeft > 1;
    let scrollRightCondition = scrollAvailableRight > 1;

    // console.log(scrollWidth, scrollViewport, scrollAvailableLeft, scrollAvailableRight);

    if (scrollLeftCondition && scrollRightCondition) {
      return "both";
    } else if (scrollLeftCondition) {
      return "left";
    } else if (scrollRightCondition) {
      return "right";
    } else {
      return "none";
    }
  };

  // Calculates the scroll step based on the width of the scroller and the number of links
  const calculateScrollStep = function () {
    if (scrollStep === "average") {
      let scrollViewportNoPadding =
        navScrollerNav.scrollWidth -
        (parseInt(
          getComputedStyle(navScrollerContent).getPropertyValue("padding-left"),
        ) +
          parseInt(
            getComputedStyle(navScrollerContent).getPropertyValue(
              "padding-right",
            ),
          ));

      let scrollStepAverage = Math.floor(
        scrollViewportNoPadding / navScrollerContentItems.length,
      );

      scrollStep = scrollStepAverage;
    }
  };

  // Move the scroller with a transform
  const moveScroller = function (direction) {
    if (
      scrolling === true ||
      (scrollOverflow !== direction && scrollOverflow !== "both")
    )
      return;

    let scrollDistance = scrollStep;
    let scrollAvailable =
      direction === "left" ? scrollAvailableLeft : scrollAvailableRight;

    // If there will be less than 25% of the last step visible then scroll to the end
    if (scrollAvailable < scrollStep * 1.75) {
      scrollDistance = scrollAvailable;
    }

    if (direction === "right") {
      scrollDistance *= -1;
    }

    navScrollerContent.classList.remove("no-transition");
    navScrollerContent.style.transform = "translateX(" + scrollDistance + "px)";

    scrollingDirection = direction;
    scrolling = true;
  };

  // Set the scroller position and removes transform, called after moveScroller() in the transitionend event
  const setScrollerPosition = function () {
    var style = window.getComputedStyle(navScrollerContent, null);
    var transform = style.getPropertyValue("transform");
    var transformValue = Math.abs(parseInt(transform.split(",")[4]) || 0);

    if (scrollingDirection === "left") {
      transformValue *= -1;
    }

    navScrollerContent.classList.add("no-transition");
    navScrollerContent.style.transform = "";
    navScrollerNav.scrollLeft = navScrollerNav.scrollLeft + transformValue;
    navScrollerContent.classList.remove("no-transition");

    scrolling = false;
  };

  // Toggle buttons depending on overflow
  const toggleButtons = function (overflow) {
    if (overflow === "both" || overflow === "left") {
      navScrollerLeft.classList.add("active");
    } else {
      navScrollerLeft.classList.remove("active");
    }

    if (overflow === "both" || overflow === "right") {
      navScrollerRight.classList.add("active");
    } else {
      navScrollerRight.classList.remove("active");
    }
  };

  const init = function () {
    setOverflow();

    window.addEventListener("resize", () => {
      requestSetOverflow();
    });

    navScrollerNav.addEventListener("scroll", () => {
      requestSetOverflow();
    });

    navScrollerContent.addEventListener("transitionend", () => {
      setScrollerPosition();
    });

    navScrollerLeft.addEventListener("click", () => {
      moveScroller("left");
    });

    navScrollerRight.addEventListener("click", () => {
      moveScroller("right");
    });
  };

  // Self init
  init();

  // Reveal API
  return {
    init,
  };
};

// // Init with default setup
const priorityNavScrollerDefault = PriorityNavScroller();

/////////////// Active Tab  //////////////////

const navLinks = document.querySelectorAll(".nav-scroller-item");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    navLinks.forEach(function (otherLink) {
      otherLink.classList.remove("active-tab");
    });
    link.classList.add("active-tab");
  });
});

/////////////// Hero-Search Fields (where)  //////////////////

const whereInput = document.getElementById("Where");
const searchWhereCard = document.querySelector(".search-where-card");
whereInput.addEventListener("focus", function () {
  searchWhereCard.classList.remove("d-none");
});
whereInput.addEventListener("blur", function () {
  searchWhereCard.classList.add("d-none");
});
/////////////// End Active Tab  //////////////////

/////////////// Signup Buttons Toggle (Host/Guest)  //////////////////

function toggleButtons(clickedButton) {
  const buttons = document.querySelectorAll(".btns-signup");
  event.preventDefault();
  buttons.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}






/////////////// Check-in Check-out Hero Section Calender  //////////////////

flatpickr("#Check-in", {
  dateFormat: "Y-m-d", // Set your desired date format
  minDate: "today", // Start date selection from today
});

flatpickr("#Check-out", {
  dateFormat: "Y-m-d", // Set your desired date format
  minDate: "today", // Start date selection from today
});

flatpickr("#selectCheckDate", {
  dateFormat: "Y-m-d", // Set your desired date format
  minDate: "today", // Start date selection from today
});

/////////////// Favorite Button Toggle  //////////////////

function toggleActiveFavorite(wrapper) {
  wrapper.classList.toggle("active-favorite");
}

/////////////// New Listing - Selected Category  //////////////////

function listingCategoryActive(btn) {
  const allButtons = document.querySelectorAll(".new-home-cat-btn");
  allButtons.forEach((button) => {
    button.classList.remove("category-active");
  });

  btn.classList.add("category-active");
}

/////////////// New Listing - Page Offer Buttons  //////////////////

function offerButtonActive(btn) {
  btn.classList.toggle("offer-active");
}

/////////////// New Listing - About Place increment/decrement   //////////////////

function increment(id) {
  const counterInput = document.getElementById(id);
  counterInput.value = parseInt(counterInput.value) + 1;
}

function decrement(id) {
  const counterInput = document.getElementById(id);
  if (parseInt(counterInput.value) > 0) {
    counterInput.value = parseInt(counterInput.value) - 1;
  }
}

/////////////// New Listing - Place Highlight Buttons  //////////////////

function offerButtonActive(btn) {
  // Check if the button is active
  const isActive = btn.classList.contains("place-highlights-btn-active");

  // Get all active buttons
  const activeButtons = document.querySelectorAll(
    ".place-highlights-btn-active",
  );

  // If the button is already active, remove the class
  if (isActive) {
    btn.classList.remove("place-highlights-btn-active");
  } else {
    // If the button is not active and there are less than 3 active buttons, add the class
    if (activeButtons.length < 3) {
      btn.classList.add("place-highlights-btn-active");
    }
  }
}

/////////////// New Listing - Place Description Title Limit  //////////////////

function titleLimit() {
  const maxLength = 32; // Maximum character limit
  let textarea = document.getElementById("describe-home-title");
  let charCount = document.getElementById("charCount");

  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength); // Truncate excess characters
  }

  charCount.textContent = textarea.value.length; // Update character count

  // Prevent further input if character limit is reached
  if (textarea.value.length >= maxLength) {
    textarea.removeEventListener("input", titleLimit); // Remove the event listener to stop further input
  } else {
    textarea.addEventListener("input", titleLimit); // Re-add the event listener if character count is below the limit
  }
}

/////////////// New Listing - Choose Guest toggle  //////////////////

function chooseGuestActive(btn) {
  const allButtons = document.querySelectorAll(".check-guest");
  allButtons.forEach((button) => {
    button.classList.remove("check-guest-active");
  });

  btn.classList.add("check-guest-active");
}

/////////////// New Listing - Listing Pricing Summary //////////////////
function updatePrice() {
  const priceInput = +document.getElementById("priceInput").value;

  const monthlyRent = document.getElementById("monthlyRent");
  const serviceCharges = +document.getElementById("serviceCharges").innerHTML;
  const youGet = document.getElementById("youGet");

  monthlyRent.innerHTML = priceInput;

  youGet.innerHTML = priceInput - serviceCharges;
  console.log(priceInput);
}

/////////////// appartment-details Calender  //////////////////

const hiddenDateInput = document.getElementById("hiddenDateInput");
const calendarContainer = document.getElementById("calendarContainer");

flatpickr(hiddenDateInput, {
  dateFormat: "Y-m-d", // Set your desired date format
  minDate: "today",
  appendTo: calendarContainer,
  inline: true,
});

/////////////// Home Hero Input Popups JS  //////////////////

function showGuestCard() {
  document.getElementById("hero-guest-card").style.display = "block";
}

// Function to hide the guest card pop-up
function hideGuestCard() {
  document.getElementById("hero-guest-card").style.display = "none";
}

// Function to show the search card pop-up
function showSearchCard() {
  document.getElementById("hero-search-card").style.display = "block";
}

// Function to hide the search card pop-up
function hideSearchCard() {
  document.getElementById("hero-search-card").style.display = "none";
}

/////////////// Help Center JS  //////////////////

// Function to show the guest guide section and hide the host guide section
function showGuestSection() {
  document.getElementById("guest-guide").style.display = "block";
  document.getElementById("host-guide").style.display = "none";
  document.getElementById("guestBtn").classList.add("help-center-btn-active");
  document.getElementById("hostBtn").classList.remove("help-center-btn-active");
}

// Function to show the host guide section and hide the guest guide section
function showHostSection() {
  document.getElementById("guest-guide").style.display = "none";
  document.getElementById("host-guide").style.display = "block";
  document
    .getElementById("guestBtn")
    .classList.remove("help-center-btn-active");
  document.getElementById("hostBtn").classList.add("help-center-btn-active");
}
