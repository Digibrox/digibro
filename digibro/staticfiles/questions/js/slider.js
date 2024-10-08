

document.addEventListener('DOMContentLoaded', () => {
    const COLOR_TRACK = "#CBD5E1";
    const COLOR_RANGE = "#0EA5E9";

    // Get the sliders and tooltips
    const fromSlider = document.querySelector('#fromSlider');
    const toSlider = document.querySelector('#toSlider');
    const fromTooltip = document.querySelector('#fromSliderTooltip');
    const toTooltip = document.querySelector('#toSliderTooltip');
    const scale = document.getElementById('scale');

    // Set min, max, and step values for the sliders
    const MIN = parseInt(fromSlider.getAttribute('min')); // 10,000,000
    const MAX = parseInt(fromSlider.getAttribute('max')); // 50,000,000

    function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
        if (from > to) {
            fromSlider.value = to;
        }
        setTooltip(fromSlider, fromTooltip);
    }

    function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
        setToggleAccessible(toSlider);
        if (from <= to) {
            toSlider.value = to;
        } else {
            toSlider.value = from;
        }
        setTooltip(toSlider, toTooltip);
    }

    function getParsed(currentFrom, currentTo) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max - to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
          ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
          ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
          ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
          ${sliderColor} 100%)`;
    }

    function setToggleAccessible(currentTarget) {
        const toSlider = document.querySelector('#toSlider');
        if (Number(currentTarget.value) <= 0) {
            toSlider.style.zIndex = 2;
        } else {
            toSlider.style.zIndex = 0;
        }
    }

    function setTooltip(slider, tooltip) {
        const value = slider.value;
        tooltip.textContent = `$${parseInt(value).toLocaleString()}`;
        const thumbPosition = (value - slider.min) / (slider.max - slider.min);
        const percent = thumbPosition * 100;
        const markerWidth = 20; // Width of the marker in pixels
        const offset = (((percent - 50) / 50) * markerWidth) / 2;
        tooltip.style.left = `calc(${percent}% - ${offset}px)`;
    }

    function createScale(min, max) {
        // Create marker for the minimum value (10 million)
        const minMarker = document.createElement('div');
        minMarker.style.left = "0%";
        minMarker.textContent = `$${min.toLocaleString()}`;
        scale.appendChild(minMarker);

        // Create marker for the maximum value (50 million)
        const maxMarker = document.createElement('div');
        maxMarker.style.left = "100%";
        maxMarker.textContent = `$${max.toLocaleString()}`;
        scale.appendChild(maxMarker);
    }

    // events
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

    // Initial load
    fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
    setToggleAccessible(toSlider);
    setTooltip(fromSlider, fromTooltip);
    setTooltip(toSlider, toTooltip);
    createScale(MIN, MAX);
});