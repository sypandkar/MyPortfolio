export const toggleDetails = (completeview, updateCompleteView, option) => {
  // check if current option when clicked on is getting set to true.
  //  if true, mark all others false
  //  else, don't do anything.
  const adjustedView =
    completeview[option] === false
      ? Object.keys(completeview).reduce((acc, elem) => {
          return { ...acc, [elem]: false };
        }, {})
      : completeview;

  const updatedView = { ...adjustedView, [option]: !adjustedView[option] };
  updateCompleteView(updatedView);
};
