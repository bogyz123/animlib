import { useCallback } from "react";
import data from "../../assets/data.json";

const useTooltip = () => {
  const handleTooltipClick = useCallback((e) => {
    const isHighlightedElement = e.target.classList.contains("highlighted");
    if (!isHighlightedElement) {
      return;
    }
    // if the clicked element is an element that has a tooltip.
    const tooltips = document.querySelectorAll(".tooltip");
    if (tooltips.length > 0) {
      // if the tooltip is already shown, remove it.
      tooltips.forEach((tooltip) => tooltip.remove());
    }
    const tooltip = document.createElement("div");
    tooltip.classList.add("bg-card", "fixed", "bottom-1", "left-1/2", "translate-x-[-50%]", "text-xs", "tooltip","mx-auto", "p-2", "rounded-md");
    tooltip.textContent = data[e.target.textContent].unsupportedBy != null ? data[e.target.textContent].explanation + ` (${data[e.target.textContent].unsupportedBy.join(", ")} do not support it.)` : data[e.target.textContent].explanation;
    tooltip.addEventListener("click", (e) => {
      e.target.remove();
    });
    e.target.appendChild(tooltip);
  });
  return handleTooltipClick;
};

export default useTooltip;
