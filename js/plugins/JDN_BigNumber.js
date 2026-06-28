/*:
 * @target MV
 * @plugindesc Convert Big Numbers up to 999.99 decillion!!
 * @author JohnDoeNews
 * @url https://www.johndoenews.nl
 * 
 * 
 * @help Convert any big number into an easy to read number. 
 * 
 * Show "255.75 million" instead of 255748394
 * 
 * -------------------------------------------------------------------
 * PLUGINS COMMMAND
 * -------------------------------------------------------------------
 * 
 *      bignumber X Y
 * 
 * Replace X with if of the variables, containing the number you want to 
 * show, replace Y with the ID of the variable you want to store this in. 
 * 
 *      Example:
 *      bignumber 11 12
 * 
 * If variable 11 contained "1250000", it will store "1.25 million" in 
 * cariable 12. Not that this number is cosmetic! It can not be used 
 * in calculations or conditions!!! Use var X (in this case var 11) to 
 * calculate and var Y (in this case var 12) to show.
 * 
 * Once var X (in this case var 11) is updates, run the command again to 
 * update var Y (in this case var 12). 
 * 
 * Now show var Y in your dialogue, your interface or your hud, simply 
 * by putting \v[X] in your text message. (In this case, \v[12])
 * 
 * TERMS AND CONDITIONS: 
 * 
 * Credits to JohnDoeNews
 * Free to use in any RPG maker game.
 * Free to edit as you please.
 * Show me the games you make with this!
 * (This is not a request, it is a condition.) :p
 * 
 */


window.BIGNUMBER || (window.BIGNUMBER = {});
(function() {
    const params    = PluginManager.parameters('JDN_BigNumber');console.log(params);

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if(command === 'bignumber') {
            var input  = $gameVariables.value(args[0]);
            var output = writenumber(input);
            var varid = args[1];
            $gameVariables.setValue(varid, output);
            console.log("JDN_BigNumber input  = " + input);
            console.log("JDN_BigNumber output = " + output);
        };
    };

    function writenumber(v) {
        if (         v > 999999999999999999999999999999999) {
            var t = (v / 1000000000000000000000000000000000).toFixed(2) + " decillion";
        } else if (  v > 999999999999999999999999999999) {
            var t = (v / 1000000000000000000000000000000).toFixed(2) + " nonillion";
        } else if (  v > 999999999999999999999999999) {
            var t = (v / 1000000000000000000000000000).toFixed(2) + " octillion";
        } else if (  v > 999999999999999999999999) {
            var t = (v / 1000000000000000000000000).toFixed(2) + " septillion";
        } else if (  v > 999999999999999999999) {
            var t = (v / 1000000000000000000000).toFixed(2) + " sextillion";
        } else if (  v > 999999999999999999) {
            var t = (v / 1000000000000000000).toFixed(2) + " quintillion";
        } else if (  v > 999999999999999) {
            var t = (v / 1000000000000000).toFixed(2) + " quadrillion";
        } else if (  v > 999999999999) {
            var t = (v / 1000000000000).toFixed(2) + " trillion";
        } else if (  v > 999999999) {
            var t = (v / 1000000000).toFixed(2) + " billion";
        } else if (  v > 999999) {
            var t = (v / 1000000).toFixed(2) + " million";
        } else if (  v > 999) {
            var t = (v / 1000).toFixed(2) + " thousand";
        } else {
            var t = v;
        };
        return t
    };
})();
