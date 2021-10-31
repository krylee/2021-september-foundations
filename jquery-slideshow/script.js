function simpleSlider(element = '#simple-slider', auto = false, pause) {

    // Get  parent element
    var $this = $(element);

    // Slides container
    var slidesCont = $this.children('.slides-container');

    // Get all slides
    var slides = slidesCont.children('.slide');

    // Get pager div
    var pager = $this.children('.pager');

    // Get previous / next links
    var arrowsCont = $this.chlidren('.arrows');
    var prevSlide = arrowsCont.children('.prev');
    var nextSlide = arrowsCont.children('.next');

    // Total Slides count
    var slidesCount = slides.length;

    // Set currentSlide to first child
    var currentSlide = slides.first();
    var currentSlideIndex = 1;

    var autoPlay = null;
}

$(function() {
    simpleSlider("#slider", true, 8000);
});