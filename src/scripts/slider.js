const slider = document.getElementById("volume");

function updateSliderBackground(slider) {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #666 ${value}%, #dcdcdc ${value}%)`;
}

updateSliderBackground(slider);

slider.addEventListener("input", () => updateSliderBackground(slider));
