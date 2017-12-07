(function($) {

    $.fn.loadSpreadSimilator = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white",
            prices: {
                sell: 10,
                buy: 20
            },
            stake: 1,
            isInplayNow: false,
            returns: 0
        },
        options);

        var $container = this;

        this.renderButtons = function() {
            var div = '<div class="sps-btns>';

            div += '</div>';
            $container.append(div);
        };

        this.renderSimulator = function() {
            $container.append('<div><label for="sps-stake">Stake</label><input type="text" id="sps-stake"></div>');
            $container.append('<div><label for="sps-stake">Stake</label><input type="text" id="sps-stake"></div>');

            $container.css({
                color: settings.color,
                backgroundColor: settings.backgroundColor,
                height: settings.height,
                width: settings.width
            });
        };

        this.loadSimilator = function() {

            this.renderSimulator();

        };


        this.loadSimilator();
        return this;

    };
}(jQuery));