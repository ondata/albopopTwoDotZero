/*** Remove logo in title if words wrap ***/
/* jQuery plugin to check if text has overflowed (more than one row) */
jQuery.fn.hasOverflowed = function () {
    var res;
    var cont = $('<div>'+this.text()+'</div>').css("display", "table")
    .css("z-index", "-1").css("position", "absolute")
    .css("font-family", this.css("font-family"))
    .css("font-size", this.css("font-size"))
    .css("font-weight", this.css("font-weight")).appendTo('body');
    res = (cont.width()>this.width());
    cont.remove();
    return res;
}
/* End plugin */

/* Check if titles has overflowed and hide/show logo */
$(function() {

    function fn() {
        $('.lettering').each(function() {
            $(this)
                .find("img, svg")
                .toggleClass(
                    "d-none",
                    $(this).hasOverflowed()
                );
        });
    };

    /* On page loading and also on window resizing */
    $(window).resize(fn);
    fn();
    
});
/*** End ***/