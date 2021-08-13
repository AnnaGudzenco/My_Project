export default class Filter {
  filter() {
    const searchByTitle = document.getElementById("search-by-title");
    const items = document.querySelectorAll(".card");
    const inputSelectDoctors = document.getElementById("inputSelect01");
    const selectIndexDoctors = inputSelectDoctors.selectedIndex;
    const nputSelectPriority = document.getElementById("inputSelect02");
    const selectIndexPriority = nputSelectPriority.selectedIndex;
    items.forEach.call(items, (item) => {
      const childTitle = item.children[1].children[2];
      const childNameTitle = childTitle.firstChild.textContent.split(": ")[1];
      const childDoctor = item.children[1].children[1];
      const childNameDoctor = childDoctor.firstChild.textContent.split(": ")[1];
      const childPriority = item.children[1].children[3];
      const childNamePriority =
        childPriority.firstChild.textContent.split(": ")[1];
      if (childNameTitle.includes(searchByTitle.value)) {
        items.forEach((el) => {
          if (
            !el.children[1].children[2].firstChild.textContent
              .split(": ")[1]
              .includes(searchByTitle.value)
          ) {
            el.parentElement.style = "display: none;";
          } else {
            if (selectIndexDoctors === 1 && childNameDoctor !== "Кардиолог") {
              items.forEach(() => {
                if (
                  el.children[1].children[1].firstChild.textContent.split(
                    ": "
                  )[1] !== "Кардиолог"
                ) {
                  el.parentElement.style = "display: none;";
                } else {
                  if (
                    selectIndexPriority === 1 &&
                    childNamePriority !== "Обычная"
                  ) {
                    items.forEach(() => {
                      proverca(el.children[1].children[3], el.parentElement);
                    });
                  } else if (
                    selectIndexPriority === 2 &&
                    childNamePriority !== "Приоритетная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Приоритетная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (
                    selectIndexPriority === 3 &&
                    childNamePriority !== "Неотложная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Неотложная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (selectIndexPriority === 0) {
                    items.forEach(() => {
                      el.parentElement.style = "display: block;";
                    });
                  }
                }
              });
            } else if (
              selectIndexDoctors === 2 &&
              childNameDoctor !== "Стоматолог"
            ) {
              items.forEach(() => {
                if (
                  el.children[1].children[1].firstChild.textContent.split(
                    ": "
                  )[1] !== "Стоматолог"
                ) {
                  el.parentElement.style = "display: none;";
                } else {
                  if (
                    selectIndexPriority === 1 &&
                    childNamePriority !== "Обычная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Обычная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (
                    selectIndexPriority === 2 &&
                    childNamePriority !== "Приоритетная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Приоритетная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (
                    selectIndexPriority === 3 &&
                    childNamePriority !== "Неотложная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Неотложная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (selectIndexPriority === 0) {
                    items.forEach(() => {
                      el.parentElement.style = "display: block;";
                    });
                  }
                }
              });
            } else if (
              selectIndexDoctors === 3 &&
              childNameDoctor !== "Терапевт"
            ) {
              items.forEach(() => {
                if (
                  el.children[1].children[1].firstChild.textContent.split(
                    ": "
                  )[1] !== "Терапевт"
                ) {
                  el.parentElement.style = "display: none;";
                } else {
                  if (
                    selectIndexPriority === 1 &&
                    childNamePriority !== "Обычная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Обычная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (
                    selectIndexPriority === 2 &&
                    childNamePriority !== "Приоритетная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Приоритетная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (
                    selectIndexPriority === 3 &&
                    childNamePriority !== "Неотложная"
                  ) {
                    items.forEach(() => {
                      if (
                        el.children[1].children[3].firstChild.textContent.split(
                          ": "
                        )[1] !== "Неотложная"
                      ) {
                        el.parentElement.style = "display: none;";
                      } else {
                        el.parentElement.style = "display: block;";
                      }
                    });
                  } else if (selectIndexPriority === 0) {
                    items.forEach(() => {
                      el.parentElement.style = "display: block;";
                    });
                  }
                }
              });
            } else if (selectIndexDoctors === 0) {
              items.forEach(() => {
                if (
                  selectIndexPriority === 1 &&
                  childNamePriority !== "Обычная"
                ) {
                  items.forEach(() => {
                    if (
                      el.children[1].children[3].firstChild.textContent.split(
                        ": "
                      )[1] !== "Обычная"
                    ) {
                      el.parentElement.style = "display: none;";
                    } else {
                      el.parentElement.style = "display: block;";
                    }
                  });
                } else if (
                  selectIndexPriority === 2 &&
                  childNamePriority !== "Приоритетная"
                ) {
                  items.forEach(() => {
                    if (
                      el.children[1].children[3].firstChild.textContent.split(
                        ": "
                      )[1] !== "Приоритетная"
                    ) {
                      el.parentElement.style = "display: none;";
                    } else {
                      el.parentElement.style = "display: block;";
                    }
                  });
                } else if (
                  selectIndexPriority === 3 &&
                  childNamePriority !== "Неотложная"
                ) {
                  items.forEach(() => {
                    if (
                      el.children[1].children[3].firstChild.textContent.split(
                        ": "
                      )[1] !== "Неотложная"
                    ) {
                      el.parentElement.style = "display: none;";
                    } else {
                      el.parentElement.style = "display: block;";
                    }
                  });
                } else if (selectIndexPriority === 0) {
                  items.forEach(() => {
                    el.parentElement.style = "display: block;";
                  });
                }
              });
            }
          }
        });
      }
    });
  }
}

function proverca(elememtTpSplit, elementToDisplay) {
  if (elememtTpSplit.firstChild.textContent.split(": ")[1] !== "Обычная") {
    elementToDisplay.style = "display: none;";
  } else {
    elementToDisplay.style = "display: block;";
  }
}
