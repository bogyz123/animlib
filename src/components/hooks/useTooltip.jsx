import { useCallback } from "react";
import data from "../../assets/data.json";

const useTooltip = () => {
  const handleTooltipClick = useCallback((e) => {
    console.log("called.");
    const isHighlightedElement = e.target.classList.contains("highlighted");
    if (!isHighlightedElement) {
      console.log(e.target.textContent);
      return;
    }
    console.log("is tooltip.");
    // if the clicked element is an element that has a tooltip.
    const tooltips = e?.target.querySelectorAll(".tooltip");
    if (tooltips.length > 0) {
      // if the tooltip is already shown, remove it.
      tooltips.map((tooltip) => tooltip.remove());
    } else {
      // if the tooltip isn't shown, create and append it.
      e.target.style.position = "relative";

      const tooltip = document.createElement("div");
      tooltip.classList.add("bg-card", "fixed", "bottom-1", "left-1/2", "translate-x-[-50%]", "text-xs", "tooltip", "w-max", "p-2", "rounded-md");
      tooltip.textContent = data[e.target.textContent];

      tooltip.addEventListener("click", (e) => {
        e.target.remove();
      });
      e.target.appendChild(tooltip);
    }
  });
  return handleTooltipClick;
};

export default useTooltip;
