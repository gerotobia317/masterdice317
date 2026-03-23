const _0x56548a = _0x3477;
(function (_0x3e38f6, _0xeb7ae9) {
    const _0x2e89b5 = _0x3477, _0x5d38a = _0x3e38f6();
    while (!![]) {
        try {
            const _0x563907 = -parseInt(_0x2e89b5(0x13e)) / 0x1 + -parseInt(_0x2e89b5(0x123)) / 0x2 * (parseInt(_0x2e89b5(0x33c)) / 0x3) + -parseInt(_0x2e89b5(0x168)) / 0x4 * (parseInt(_0x2e89b5(0x197)) / 0x5) + parseInt(_0x2e89b5(0x16a)) / 0x6 * (-parseInt(_0x2e89b5(0x303)) / 0x7) + -parseInt(_0x2e89b5(0x388)) / 0x8 + -parseInt(_0x2e89b5(0x28a)) / 0x9 * (parseInt(_0x2e89b5(0x11a)) / 0xa) + -parseInt(_0x2e89b5(0x40e)) / 0xb * (-parseInt(_0x2e89b5(0x1df)) / 0xc);
            if (_0x563907 === _0xeb7ae9)
                break;
            else
                _0x5d38a['push'](_0x5d38a['shift']());
        } catch (_0xed6ddf) {
            _0x5d38a['push'](_0x5d38a['shift']());
        }
    }
}(_0x20dd, 0xa01e4), Object['defineProperty'](String[_0x56548a(0x410)], _0x56548a(0x214), {
    'value': function () {
        const _0x1621c0 = _0x56548a, _0x29b899 = {
                'ZVeoC': function (_0x79154b, _0x54a824) {
                    return _0x79154b + _0x54a824;
                }
            };
        return _0x29b899[_0x1621c0(0x3ba)](this[_0x1621c0(0x269)](0x0)['toUpperCase'](), this[_0x1621c0(0x3b4)](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x56548a(0x125), game = _0x56548a(0x3ac), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x56548a(0x1c8), kenoRisk = _0x56548a(0x3d1), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x56548a(0x2e5), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
    'amount': 0x0,
    'Amount': 0x0,
    'chance': 0x0,
    'Chance': 0x0,
    'roll': 0x0,
    'Roll': 0x0,
    'profit': 0x0,
    'Profit': 0x0,
    'target': 0x0,
    'chance1': 0x0,
    'Chance1': 0x0,
    'chance2': 0x0,
    'Chance2': 0x0,
    'chance3': 0x0,
    'Chance3': 0x0,
    'chance4': 0x0,
    'Chance4': 0x0,
    'target1': 0x0,
    'Target1': 0x0,
    'target2': 0x0,
    'Target2': 0x0,
    'target3': 0x0,
    'Target3': 0x0,
    'target4': 0x0,
    'Target4': 0x0,
    'betSide': _0x56548a(0x2e5),
    'BetSide': _0x56548a(0x2e5),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x56548a(0x2b4))), wdbUI = '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20' + WDB_MODE + _0x56548a(0x1ed) + CASINO_GAME + _0x56548a(0x268) + WDB_HOME + _0x56548a(0x1ed) + location[_0x56548a(0x381)][_0x56548a(0x23e)]('www.', '') + _0x56548a(0x325));
function _0x3477(_0x5ecbc2, _0x1d6892) {
    const _0x20dd7f = _0x20dd();
    return _0x3477 = function (_0x34771c, _0x1b5d2f) {
        _0x34771c = _0x34771c - 0x114;
        let _0x5120e8 = _0x20dd7f[_0x34771c];
        return _0x5120e8;
    }, _0x3477(_0x5ecbc2, _0x1d6892);
}
const rangediceLuaScript = _0x56548a(0x394), rangediceJsScript = _0x56548a(0x35c), plinkoLuaScript = _0x56548a(0x255), plinkoJsScript = _0x56548a(0x2e3), kenoLuaScript = _0x56548a(0x39e), kenoJsScript = _0x56548a(0x3ab);
function exportLog() {
    const _0x276b12 = _0x56548a, _0x3e3f5f = { 'WgpuS': 'application/json' }, _0x275748 = JSON['stringify'](fullLogs), _0x1c2ef5 = document[_0x276b12(0x18d)]('a');
    _0x1c2ef5['href'] = window[_0x276b12(0x26a)]['createObjectURL'](new Blob([_0x275748], { 'type': _0x3e3f5f[_0x276b12(0x299)] })), _0x1c2ef5[_0x276b12(0x1af)] = _0x276b12(0x1bf) + Date['now']()[_0x276b12(0x13b)]()[_0x276b12(0x3b4)](-0x6) + '.json', _0x1c2ef5[_0x276b12(0x1d7)]();
}
class Chart {
    constructor(_0x548426, _0xc8f24c = ![], _0x19e752 = 0x64) {
        const _0x55b818 = _0x56548a, _0x3bce26 = {
                'liNZJ': _0x55b818(0x158),
                'dUmYd': _0x55b818(0x253),
                'gxJEE': _0x55b818(0x1bb)
            };
        this['containerId'] = _0x548426, this[_0x55b818(0x3d3)] = _0xc8f24c, this[_0x55b818(0x3f0)] = _0x19e752, this['dps'] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x55b818(0x321)] = new CanvasJS['Chart'](_0x548426, {
            'theme': _0xc8f24c ? _0x3bce26[_0x55b818(0x167)] : _0x3bce26[_0x55b818(0x343)],
            'axisY': { 'includeZero': ![] },
            'data': [{
                    'type': _0x3bce26['gxJEE'],
                    'markerSize': 0x0,
                    'dataPoints': this[_0x55b818(0x292)]
                }]
        }), this[_0x55b818(0x321)][_0x55b818(0x372)]();
    }
    set [_0x56548a(0x329)](_0x3991f5) {
        const _0x5e1b4b = _0x56548a;
        this[_0x5e1b4b(0x3f0)] = _0x3991f5;
    }
    get [_0x56548a(0x329)]() {
        return this['_maxRows'];
    }
    set [_0x56548a(0x1dd)](_0x103ea2) {
        const _0x2cd92e = _0x56548a, _0x3e1a21 = { 'sEgMp': _0x2cd92e(0x158) };
        this[_0x2cd92e(0x3d3)] = _0x103ea2, this['chart'][_0x2cd92e(0x2cd)][_0x2cd92e(0x276)] = _0x103ea2 ? _0x3e1a21[_0x2cd92e(0x389)] : _0x2cd92e(0x253), this[_0x2cd92e(0x321)]['render']();
    }
    get [_0x56548a(0x1dd)]() {
        const _0x58724f = _0x56548a;
        return this[_0x58724f(0x3d3)];
    }
    [_0x56548a(0x3b8)](_0x281a57, _0x3ce0ba, _0x4689e9) {
        const _0x219dc4 = _0x56548a, _0x4a5466 = {
                'asKyp': function (_0xe1c4ee, _0x4e2706) {
                    return _0xe1c4ee - _0x4e2706;
                }
            };
        this[_0x219dc4(0x292)][_0x219dc4(0x3f7)]({
            'x': _0x281a57,
            'y': _0x3ce0ba,
            'lineColor': _0x4689e9
        });
        if (this[_0x219dc4(0x292)][_0x219dc4(0x1b1)] > this['_maxRows'])
            this[_0x219dc4(0x292)][_0x219dc4(0x1ff)]();
        if (this[_0x219dc4(0x292)][_0x4a5466[_0x219dc4(0x2b9)](this[_0x219dc4(0x292)][_0x219dc4(0x1b1)], 0x2)])
            this['dps'][_0x4a5466[_0x219dc4(0x2b9)](this['dps']['length'], 0x2)][_0x219dc4(0x199)] = _0x4689e9;
        this[_0x219dc4(0x321)]['render']();
    }
    ['resetChart']() {
        const _0x1cd5a6 = _0x56548a;
        this[_0x1cd5a6(0x292)] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart'][_0x1cd5a6(0x2cd)][_0x1cd5a6(0x376)][0x0][_0x1cd5a6(0x185)] = this[_0x1cd5a6(0x292)], this['chart'][_0x1cd5a6(0x372)]();
    }
}
function changeMaxRows() {
    const _0x1ca73d = _0x56548a, _0x12e50d = {
            'QrLiW': _0x1ca73d(0x21c),
            'CHYSp': function (_0x3c7a46) {
                return _0x3c7a46();
            },
            'vwwRj': function (_0x5e9a61) {
                return _0x5e9a61();
            },
            'xHdvw': function (_0x256a01, _0xb4aed7) {
                return _0x256a01(_0xb4aed7);
            },
            'oIUyt': _0x1ca73d(0x23c)
        }, _0x1a3853 = _0x12e50d[_0x1ca73d(0x234)]['split']('|');
    let _0x111cce = 0x0;
    while (!![]) {
        switch (_0x1a3853[_0x111cce++]) {
        case '0':
            _0x12e50d[_0x1ca73d(0x263)](resetchart);
            continue;
        case '1':
            _0x12e50d['vwwRj'](resetlog);
            continue;
        case '2':
            chart[_0x1ca73d(0x329)] = maxRows;
            continue;
        case '3':
            resethistory();
            continue;
        case '4':
            maxRows = _0x12e50d[_0x1ca73d(0x386)](Number, document[_0x1ca73d(0x157)](_0x12e50d[_0x1ca73d(0x2b0)])['value']);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x30854b = _0x56548a, _0x59b80c = {
            'lfPnb': _0x30854b(0x335),
            'jqjHe': _0x30854b(0x144),
            'mVlbp': _0x30854b(0x2e8),
            'YcTAg': _0x30854b(0x35e),
            'DDhoB': _0x30854b(0x2d6),
            'FaorB': _0x30854b(0x232),
            'bAqvp': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'gMplR': '.wdb-stats\x20div\x20li',
            'AFixY': _0x30854b(0x276),
            'AgaKt': _0x30854b(0x275),
            'aylfv': _0x30854b(0x1d1),
            'eFvAn': function (_0x3c59bb) {
                return _0x3c59bb();
            }
        };
    darkMode = !darkMode, chart[_0x30854b(0x1dd)] = darkMode;
    const _0x368824 = document[_0x30854b(0x157)](_0x59b80c[_0x30854b(0x1e9)]), _0x19b3a5 = document[_0x30854b(0x157)](_0x59b80c[_0x30854b(0x3bb)]), _0x2c4143 = document[_0x30854b(0x1c5)](_0x59b80c['FaorB']), _0x4d9467 = document[_0x30854b(0x1c5)](_0x59b80c[_0x30854b(0x2a1)]), _0x297569 = document[_0x30854b(0x1c5)](_0x59b80c['gMplR']);
    if (darkMode) {
        const _0x12e3f8 = _0x30854b(0x1cb)[_0x30854b(0x187)]('|');
        let _0x3d061d = 0x0;
        while (!![]) {
            switch (_0x12e3f8[_0x3d061d++]) {
            case '0':
                _0x297569['forEach'](_0x4b8006 => _0x4b8006['style'][_0x30854b(0x28b)] = _0x30854b(0x144));
                continue;
            case '1':
                _0x368824['style'][_0x30854b(0x28b)] = _0x59b80c[_0x30854b(0x201)];
                continue;
            case '2':
                _0x19b3a5['style'][_0x30854b(0x39f)] = _0x30854b(0x1ce);
                continue;
            case '3':
                _0x368824[_0x30854b(0x16f)]['borderColor'] = _0x59b80c[_0x30854b(0x395)];
                continue;
            case '4':
                _0x4d9467['forEach'](_0x5349f8 => _0x5349f8[_0x30854b(0x16f)][_0x30854b(0x28b)] = _0x30854b(0x144));
                continue;
            case '5':
                luaEditor['setOption'](_0x59b80c[_0x30854b(0x387)], _0x59b80c[_0x30854b(0x163)]);
                continue;
            case '6':
                jsEditor[_0x30854b(0x1b7)](_0x59b80c['AFixY'], _0x30854b(0x275));
                continue;
            case '7':
                _0x2c4143['forEach'](_0x16ddd1 => {
                    const _0x4a53db = _0x30854b;
                    _0x16ddd1[_0x4a53db(0x16f)]['backgroundColor'] = _0x59b80c[_0x4a53db(0x395)], _0x16ddd1[_0x4a53db(0x16f)][_0x4a53db(0x28b)] = _0x59b80c[_0x4a53db(0x201)];
                });
                continue;
            case '8':
                _0x368824['style'][_0x30854b(0x39f)] = _0x30854b(0x335);
                continue;
            }
            break;
        }
    } else {
        const _0x21aec3 = _0x59b80c[_0x30854b(0x3c5)]['split']('|');
        let _0x1f1e09 = 0x0;
        while (!![]) {
            switch (_0x21aec3[_0x1f1e09++]) {
            case '0':
                _0x368824['style'][_0x30854b(0x39f)] = _0x59b80c[_0x30854b(0x201)];
                continue;
            case '1':
                _0x4d9467['forEach'](_0xef6cfe => _0xef6cfe[_0x30854b(0x16f)]['color'] = '#000');
                continue;
            case '2':
                _0x2c4143[_0x30854b(0x1da)](_0x7fa680 => {
                    const _0x404349 = _0x30854b;
                    _0x7fa680[_0x404349(0x16f)][_0x404349(0x39f)] = _0x404349(0x144), _0x7fa680[_0x404349(0x16f)][_0x404349(0x28b)] = _0x59b80c[_0x404349(0x147)];
                });
                continue;
            case '3':
                _0x297569[_0x30854b(0x1da)](_0x329295 => _0x329295[_0x30854b(0x16f)][_0x30854b(0x28b)] = '#000');
                continue;
            case '4':
                luaEditor['setOption'](_0x59b80c['AFixY'], _0x30854b(0x392));
                continue;
            case '5':
                _0x19b3a5['style'][_0x30854b(0x39f)] = _0x30854b(0x2f6);
                continue;
            case '6':
                jsEditor['setOption']('theme', 'default');
                continue;
            case '7':
                _0x368824[_0x30854b(0x16f)]['borderColor'] = _0x59b80c[_0x30854b(0x201)];
                continue;
            case '8':
                _0x368824['style']['color'] = _0x59b80c[_0x30854b(0x147)];
                continue;
            }
            break;
        }
    }
    _0x59b80c[_0x30854b(0x331)](updateStats);
}
let previousPosition = {
    'top': _0x56548a(0x23a),
    'left': '5px',
    'position': 'fixed'
};
function loadSavedPosition() {
    const _0xff0fbf = _0x56548a, _0x4ea19b = { 'uWrCH': _0xff0fbf(0x2f0) }, _0x1102ef = localStorage[_0xff0fbf(0x308)](_0x4ea19b[_0xff0fbf(0x235)]);
    if (_0x1102ef)
        try {
            const _0x228966 = JSON[_0xff0fbf(0x378)](_0x1102ef);
            _0x228966[_0xff0fbf(0x272)] && _0x228966['left'] && (previousPosition = _0x228966);
        } catch (_0x3b607c) {
        }
}
function savePosition() {
    const _0x23e42c = _0x56548a, _0x39480c = { 'lbVXt': _0x23e42c(0x2f0) };
    localStorage[_0x23e42c(0x1cc)](_0x39480c['lbVXt'], JSON[_0x23e42c(0x134)](previousPosition));
}
function toggleMinimalBot(_0x4b61e3) {
    const _0x41ec74 = _0x56548a, _0x2aa041 = {
            'qhkVx': 'wdbMain',
            'KxjZR': _0x41ec74(0x3b6),
            'tVDLa': _0x41ec74(0x35e),
            'XBmZY': function (_0x225568, _0x5c9ebb) {
                return _0x225568 === _0x5c9ebb;
            },
            'lzXCh': _0x41ec74(0x23a),
            'lFTLj': _0x41ec74(0x13a),
            'WRvpD': function (_0x26388c) {
                return _0x26388c();
            },
            'kYfyY': _0x41ec74(0x137),
            'RiXgT': function (_0x221865, _0x511d99) {
                return _0x221865 / _0x511d99;
            },
            'AwAOM': function (_0x4cc7ad, _0x160451) {
                return _0x4cc7ad + _0x160451;
            },
            'vfUUd': '0|4|3|1|5|2|6',
            'KrQpO': _0x41ec74(0x36d),
            'CQHJk': _0x41ec74(0x2ed)
        }, _0x221285 = document[_0x41ec74(0x157)](_0x2aa041[_0x41ec74(0x2af)]), _0x433d70 = document[_0x41ec74(0x157)](_0x2aa041[_0x41ec74(0x219)]), _0x43c24d = document[_0x41ec74(0x157)](_0x2aa041['tVDLa']);
    if (_0x2aa041[_0x41ec74(0x213)](_0x4b61e3[_0x41ec74(0x265)], '▼')) {
        const _0x3cea92 = window[_0x41ec74(0x336)](_0x43c24d);
        previousPosition = {
            'top': _0x43c24d['style'][_0x41ec74(0x272)] || _0x3cea92[_0x41ec74(0x272)] || _0x41ec74(0x23a),
            'left': _0x43c24d[_0x41ec74(0x16f)][_0x41ec74(0x1f5)] || _0x3cea92[_0x41ec74(0x1f5)] || _0x2aa041['lzXCh'],
            'position': _0x43c24d['style'][_0x41ec74(0x30b)] || _0x3cea92[_0x41ec74(0x30b)] || _0x2aa041[_0x41ec74(0x351)]
        }, _0x2aa041[_0x41ec74(0x37c)](savePosition), _0x221285[_0x41ec74(0x16f)][_0x41ec74(0x181)] = _0x2aa041[_0x41ec74(0x216)], _0x433d70[_0x41ec74(0x16f)][_0x41ec74(0x181)] = _0x2aa041[_0x41ec74(0x216)], _0x43c24d['style'][_0x41ec74(0x228)] = _0x41ec74(0x246);
        const _0x1aa27f = window[_0x41ec74(0x342)], _0x51907c = 0x15e, _0xd79710 = _0x2aa041['RiXgT'](_0x1aa27f - _0x51907c, 0x2);
        _0x43c24d['style'][_0x41ec74(0x272)] = 'calc(100vh\x20-\x2060px)', _0x43c24d[_0x41ec74(0x16f)][_0x41ec74(0x1f5)] = _0x2aa041[_0x41ec74(0x2d9)](_0xd79710, 'px'), _0x43c24d[_0x41ec74(0x16f)][_0x41ec74(0x30b)] = _0x2aa041[_0x41ec74(0x351)], _0x4b61e3[_0x41ec74(0x265)] = '▲';
    } else {
        const _0x2c7a9 = _0x2aa041['vfUUd']['split']('|');
        let _0x4bcaa1 = 0x0;
        while (!![]) {
            switch (_0x2c7a9[_0x4bcaa1++]) {
            case '0':
                _0x221285[_0x41ec74(0x16f)][_0x41ec74(0x181)] = _0x2aa041[_0x41ec74(0x2d8)];
                continue;
            case '1':
                _0x43c24d[_0x41ec74(0x16f)][_0x41ec74(0x272)] = previousPosition[_0x41ec74(0x272)];
                continue;
            case '2':
                _0x43c24d[_0x41ec74(0x16f)]['position'] = previousPosition[_0x41ec74(0x30b)];
                continue;
            case '3':
                _0x43c24d['style']['width'] = _0x2aa041['CQHJk'];
                continue;
            case '4':
                _0x433d70['style']['display'] = _0x41ec74(0x36d);
                continue;
            case '5':
                _0x43c24d[_0x41ec74(0x16f)][_0x41ec74(0x1f5)] = previousPosition[_0x41ec74(0x1f5)];
                continue;
            case '6':
                _0x4b61e3[_0x41ec74(0x265)] = '▼';
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x5a6531) {
    const _0x50ac1d = _0x56548a, _0x287d45 = {
            'whhmN': _0x50ac1d(0x2f1),
            'veoJF': function (_0x29dedc, _0xe134d5) {
                return _0x29dedc === _0xe134d5;
            },
            'pjagM': _0x50ac1d(0x137)
        }, _0x394638 = document['getElementById'](_0x287d45[_0x50ac1d(0x165)]);
    _0x287d45[_0x50ac1d(0x21b)](_0x5a6531[_0x50ac1d(0x265)], '▲') ? (_0x394638[_0x50ac1d(0x16f)][_0x50ac1d(0x181)] = _0x287d45[_0x50ac1d(0x3d5)], _0x5a6531[_0x50ac1d(0x265)] = '▼') : (_0x394638[_0x50ac1d(0x16f)][_0x50ac1d(0x181)] = 'flex', _0x5a6531[_0x50ac1d(0x265)] = '▲');
}
function drawSelectCoin() {
    const _0x41a10f = _0x56548a, _0x43eed3 = {
            'zYTyR': _0x41a10f(0x145),
            'VZlLs': function (_0x3843c8, _0x5b259b) {
                return _0x3843c8(_0x5b259b);
            }
        }, _0x254da6 = coins[_0x41a10f(0x375)](_0xd33adf => _0x41a10f(0x2f4) + _0xd33adf + '\x22>' + _0xd33adf + '</option>')[_0x41a10f(0x350)]('');
    document[_0x41a10f(0x157)](_0x43eed3[_0x41a10f(0x285)])[_0x41a10f(0x340)] = _0x254da6, currency = _0x43eed3['VZlLs'](String, coin)[_0x41a10f(0x140)](), fengari[_0x41a10f(0x393)](_0x41a10f(0x12e) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x379a74 = _0x56548a, _0x1d36fe = {
            'RToVB': '0|2|5|3|1|4',
            'fYjOB': function (_0x36ba9d, _0x5f1bf1) {
                return _0x36ba9d - _0x5f1bf1;
            },
            'HbItq': function (_0x37f190, _0x13fa68) {
                return _0x37f190 - _0x13fa68;
            },
            'OhhDP': function (_0xd4543c, _0x11b902) {
                return _0xd4543c + _0x11b902;
            },
            'nXHOS': function (_0x3963df, _0x571a57) {
                return _0x3963df === _0x571a57;
            },
            'RVYmc': function (_0x17cd81, _0x3e821e) {
                return _0x17cd81 === _0x3e821e;
            },
            'RPKwA': 'INPUT',
            'tLSho': _0x379a74(0x3ae),
            'rwgLj': function (_0x498b49, _0x58cb32) {
                return _0x498b49 / _0x58cb32;
            },
            'nYMMV': function (_0x50a3f2, _0x2c2eb1) {
                return _0x50a3f2 - _0x2c2eb1;
            },
            'naYgB': function (_0x9f5300, _0x4c011e) {
                return _0x9f5300 === _0x4c011e;
            },
            'PVHVx': function (_0x2df3db) {
                return _0x2df3db();
            },
            'DImQe': _0x379a74(0x33f),
            'Eyaks': 'wdb',
            'LDCQB': _0x379a74(0x2d6),
            'nKQVj': _0x379a74(0x248),
            'IGNdh': 'wdbWrapInitializing',
            'jcqRg': _0x379a74(0x392),
            'iqsZW': _0x379a74(0x125),
            'lWfju': _0x379a74(0x3eb),
            'zAxHb': _0x379a74(0x3a6),
            'MOncd': _0x379a74(0x12c),
            'BKWfH': 'none',
            'qSFPA': _0x379a74(0x15e),
            'JVvcS': _0x379a74(0x189),
            'SxqPB': _0x379a74(0x36a),
            'Hgvod': _0x379a74(0x2e0),
            'iNtEs': _0x379a74(0x250),
            'jVYmt': 'click',
            'pGHFO': _0x379a74(0x290),
            'cbQPX': _0x379a74(0x3f2)
        }, _0x35ec9b = document[_0x379a74(0x18d)]('div');
    _0x35ec9b['id'] = 'wdbWrap', _0x35ec9b['innerHTML'] = wdbUI, document[_0x379a74(0x2a9)]['prepend'](_0x35ec9b);
    const _0x3d3417 = document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x1fe)]);
    let _0x23c125 = 0x0, _0xaaa385 = 0x0, _0x2fb0b8 = 0x0, _0xe515a4 = 0x0;
    loadSavedPosition(), _0x3d3417[_0x379a74(0x16f)]['top'] = previousPosition[_0x379a74(0x272)], _0x3d3417[_0x379a74(0x16f)][_0x379a74(0x1f5)] = previousPosition[_0x379a74(0x1f5)], _0x3d3417[_0x379a74(0x16f)][_0x379a74(0x30b)] = previousPosition[_0x379a74(0x30b)];
    function _0x4bf55f(_0x5d53ac) {
        const _0x151b85 = _0x379a74, _0x33d7de = _0x1d36fe['RToVB'][_0x151b85(0x187)]('|');
        let _0x234380 = 0x0;
        while (!![]) {
            switch (_0x33d7de[_0x234380++]) {
            case '0':
                _0x5d53ac = _0x5d53ac || window['event'];
                continue;
            case '1':
                document[_0x151b85(0x333)] = _0x329b1e;
                continue;
            case '2':
                _0x5d53ac['preventDefault']();
                continue;
            case '3':
                _0xe515a4 = _0x5d53ac[_0x151b85(0x2cb)];
                continue;
            case '4':
                document['onmousemove'] = _0x5b04ed;
                continue;
            case '5':
                _0x2fb0b8 = _0x5d53ac[_0x151b85(0x379)];
                continue;
            }
            break;
        }
    }
    function _0x5b04ed(_0x153a2c) {
        const _0x1951e6 = _0x379a74;
        _0x153a2c = _0x153a2c || window[_0x1951e6(0x2f3)], _0x153a2c[_0x1951e6(0x288)](), _0x23c125 = _0x1d36fe[_0x1951e6(0x141)](_0x2fb0b8, _0x153a2c[_0x1951e6(0x379)]), _0xaaa385 = _0x1d36fe[_0x1951e6(0x141)](_0xe515a4, _0x153a2c['clientY']), _0x2fb0b8 = _0x153a2c[_0x1951e6(0x379)], _0xe515a4 = _0x153a2c[_0x1951e6(0x2cb)];
        let _0xf2461f = _0x1d36fe[_0x1951e6(0x2b8)](_0x3d3417[_0x1951e6(0x1e7)], _0xaaa385), _0x43eb72 = _0x1d36fe[_0x1951e6(0x141)](_0x3d3417[_0x1951e6(0x2d0)], _0x23c125);
        _0x3d3417[_0x1951e6(0x16f)][_0x1951e6(0x272)] = _0x1d36fe['OhhDP'](_0xf2461f, 'px'), _0x3d3417[_0x1951e6(0x16f)][_0x1951e6(0x1f5)] = _0x1d36fe['OhhDP'](_0x43eb72, 'px');
    }
    function _0x329b1e() {
        const _0x43800d = _0x379a74, _0x33b046 = document[_0x43800d(0x157)](_0x43800d(0x33f));
        if (_0x33b046 && _0x1d36fe[_0x43800d(0x15d)](_0x33b046[_0x43800d(0x265)], '▼')) {
            const _0x217d03 = window[_0x43800d(0x336)](_0x3d3417);
            previousPosition[_0x43800d(0x272)] = _0x3d3417[_0x43800d(0x16f)][_0x43800d(0x272)] || _0x217d03[_0x43800d(0x272)], previousPosition[_0x43800d(0x1f5)] = _0x3d3417[_0x43800d(0x16f)]['left'] || _0x217d03[_0x43800d(0x1f5)], savePosition();
        }
        document[_0x43800d(0x333)] = null, document[_0x43800d(0x2c8)] = null;
    }
    document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x24d)])[_0x379a74(0x271)] = _0x4bf55f, document[_0x379a74(0x230)](_0x379a74(0x3fb), function (_0x4735be) {
        const _0x46a683 = _0x379a74;
        if (_0x4735be[_0x46a683(0x298)]['toLowerCase']() === 'w') {
            const _0xf8386b = document['activeElement'], _0xf30f0 = _0x1d36fe['RVYmc'](_0xf8386b[_0x46a683(0x2aa)], _0x1d36fe['RPKwA']) || _0xf8386b[_0x46a683(0x2aa)] === _0x1d36fe[_0x46a683(0x3f9)] || _0xf8386b['isContentEditable'] || _0xf8386b[_0x46a683(0x400)]('.CodeMirror');
            if (!_0xf30f0) {
                const _0xfa48fe = _0x1d36fe['rwgLj'](_0x1d36fe[_0x46a683(0x30e)](window[_0x46a683(0x22d)], _0x3d3417[_0x46a683(0x13f)]), 0x2), _0x490ec3 = (window[_0x46a683(0x342)] - _0x3d3417[_0x46a683(0x207)]) / 0x2;
                _0x3d3417[_0x46a683(0x16f)][_0x46a683(0x272)] = _0xfa48fe + 'px', _0x3d3417[_0x46a683(0x16f)][_0x46a683(0x1f5)] = _0x1d36fe[_0x46a683(0x267)](_0x490ec3, 'px');
                const _0xde4655 = document['getElementById']('wdbToggleMinimal');
                _0xde4655 && _0x1d36fe['naYgB'](_0xde4655[_0x46a683(0x265)], '▼') && (previousPosition['top'] = _0x3d3417[_0x46a683(0x16f)][_0x46a683(0x272)], previousPosition[_0x46a683(0x1f5)] = _0x3d3417[_0x46a683(0x16f)][_0x46a683(0x1f5)], _0x1d36fe[_0x46a683(0x124)](savePosition));
            }
        }
    }), window['addEventListener'](_0x1d36fe[_0x379a74(0x27d)], function () {
        const _0x536f52 = _0x379a74, _0xc0d68f = document[_0x536f52(0x157)](_0x1d36fe['DImQe']);
        if (_0xc0d68f && _0xc0d68f[_0x536f52(0x265)] === '▲') {
            const _0x19013a = window['innerWidth'], _0x3c3a9a = 0x15e, _0x459852 = _0x1d36fe['rwgLj'](_0x1d36fe[_0x536f52(0x141)](_0x19013a, _0x3c3a9a), 0x2);
            _0x3d3417[_0x536f52(0x16f)][_0x536f52(0x1f5)] = _0x1d36fe[_0x536f52(0x267)](_0x459852, 'px');
        }
    });
    if (document['getElementById'](_0x379a74(0x2ee)))
        document[_0x379a74(0x157)]('wdbWrapLicenseBox')[_0x379a74(0x365)]();
    if (document['getElementById'](_0x1d36fe['IGNdh']))
        document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x3be)])[_0x379a74(0x365)]();
    luaEditor = CodeMirror[_0x379a74(0x17d)](document[_0x379a74(0x157)](_0x379a74(0x320)), {
        'theme': _0x1d36fe['jcqRg'],
        'mode': _0x1d36fe[_0x379a74(0x1a7)],
        'lineNumbers': !![]
    }), luaEditor[_0x379a74(0x3b2)](), jsEditor = CodeMirror['fromTextArea'](document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x1e5)]), {
        'theme': _0x1d36fe['jcqRg'],
        'mode': _0x1d36fe['zAxHb'],
        'lineNumbers': !![]
    }), jsEditor[_0x379a74(0x3b2)](), document[_0x379a74(0x157)](_0x1d36fe['MOncd'])[_0x379a74(0x16f)][_0x379a74(0x181)] = _0x1d36fe['BKWfH'], document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x212)])[_0x379a74(0x16f)]['display'] = _0x1d36fe[_0x379a74(0x2dc)], document[_0x379a74(0x157)](_0x1d36fe['JVvcS'])['style'][_0x379a74(0x181)] = _0x1d36fe['BKWfH'], document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x175)])[_0x379a74(0x16f)][_0x379a74(0x181)] = _0x1d36fe[_0x379a74(0x2dc)], document[_0x379a74(0x157)](_0x1d36fe['Hgvod'])[_0x379a74(0x16f)][_0x379a74(0x181)] = _0x1d36fe[_0x379a74(0x2dc)], document[_0x379a74(0x157)](_0x379a74(0x1e1))[_0x379a74(0x16f)][_0x379a74(0x181)] = _0x379a74(0x137), document[_0x379a74(0x157)](_0x379a74(0x315))[_0x379a74(0x15b)] = !![];
    const _0x3c4b7d = document['getElementById'](_0x1d36fe[_0x379a74(0x2e4)]);
    _0x3c4b7d[_0x379a74(0x230)](_0x1d36fe[_0x379a74(0x274)], () => {
        _0x3c4b7d['value'] = null;
    }), _0x3c4b7d['addEventListener'](_0x1d36fe[_0x379a74(0x266)], async _0x2db7e6 => {
        const _0x46aad8 = _0x379a74, _0x16c579 = await new Response(_0x2db7e6['target'][_0x46aad8(0x36f)][0x0])[_0x46aad8(0x22c)]();
        if (!_0x16c579)
            return;
        luaEditor[_0x46aad8(0x358)](_0x16c579);
    });
    const _0x584aa2 = document[_0x379a74(0x157)](_0x1d36fe[_0x379a74(0x192)]);
    return _0x584aa2[_0x379a74(0x230)](_0x1d36fe['jVYmt'], () => {
        _0x584aa2['value'] = null;
    }), _0x584aa2[_0x379a74(0x230)](_0x1d36fe['pGHFO'], async _0x30cdf9 => {
        const _0x16b11e = _0x379a74, _0x4e6051 = await new Response(_0x30cdf9[_0x16b11e(0x403)][_0x16b11e(0x36f)][0x0])['text']();
        if (!_0x4e6051)
            return;
        jsEditor[_0x16b11e(0x358)](_0x4e6051);
    }), chart = new Chart(_0x379a74(0x2dd), ![], 0x64), _0x379a74(0x1e6);
}
async function wdbLoader(_0x2757f5) {
    const _0x442d3c = _0x56548a, _0x3b1df6 = {
            'vrudW': _0x442d3c(0x14d),
            'OVuqN': _0x442d3c(0x2c3),
            'HgkqW': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
            'OQZZU': _0x442d3c(0x2d4),
            'bwPKX': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
            'Mxwdi': _0x442d3c(0x1f4),
            'LvIYG': function (_0x59373d, _0x37250a) {
                return _0x59373d + _0x37250a;
            },
            'WyGWr': '/canvasjs.min.js',
            'pBSAd': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
            'jEMUb': _0x442d3c(0x172),
            'JDceA': function (_0x49c47a, _0x28ae8c) {
                return _0x49c47a(_0x28ae8c);
            },
            'mYmij': function (_0x3d1a29) {
                return _0x3d1a29();
            },
            'oxjmw': _0x442d3c(0x364),
            'JaISi': _0x442d3c(0x1d0),
            'EdMJL': _0x442d3c(0x28e),
            'HtFEO': function (_0x3ec01a, _0x5b920c) {
                return _0x3ec01a === _0x5b920c;
            },
            'cXpcp': _0x442d3c(0x3fd),
            'kLOte': function (_0x28e3ee, _0x4d4ee1) {
                return _0x28e3ee(_0x4d4ee1);
            },
            'OkYcn': _0x442d3c(0x3f3)
        }, _0x48efc8 = [
            _0x3b1df6[_0x442d3c(0x287)],
            _0x3b1df6['OVuqN'],
            _0x3b1df6[_0x442d3c(0x1b6)],
            _0x3b1df6[_0x442d3c(0x3f8)],
            _0x3b1df6[_0x442d3c(0x2b7)],
            WDB_LIB + _0x3b1df6[_0x442d3c(0x406)],
            _0x3b1df6[_0x442d3c(0x360)](WDB_LIB, _0x3b1df6[_0x442d3c(0x2c1)])
        ], _0x567c06 = [
            _0x3b1df6[_0x442d3c(0x2c6)],
            _0x3b1df6[_0x442d3c(0x3ef)]
        ];
    for (const _0x30e8fd of _0x48efc8) {
        await _0x2757f5['loadScript'](_0x30e8fd);
    }
    for (const _0x50c011 of _0x567c06) {
        await _0x2757f5[_0x442d3c(0x3b9)](_0x50c011);
    }
    await _0x3b1df6['JDceA'](beforeWork, _0x2757f5), await wdbCreateUI(), await _0x3b1df6[_0x442d3c(0x139)](getListCoin), await initLua();
    if (game === _0x3b1df6[_0x442d3c(0x2ef)])
        luaEditor['setValue'](rangediceLuaScript), jsEditor[_0x442d3c(0x358)](rangediceJsScript), document[_0x442d3c(0x270)](_0x442d3c(0x28e))[_0x442d3c(0x15b)] = !![];
    else {
        if (game === _0x3b1df6[_0x442d3c(0x3c8)])
            luaEditor[_0x442d3c(0x358)](plinkoLuaScript), jsEditor['setValue'](plinkoJsScript), document[_0x442d3c(0x270)](_0x3b1df6[_0x442d3c(0x349)])[_0x442d3c(0x15b)] = !![];
        else
            _0x3b1df6['HtFEO'](game, _0x3b1df6[_0x442d3c(0x132)]) && (luaEditor[_0x442d3c(0x358)](kenoLuaScript), jsEditor[_0x442d3c(0x358)](kenoJsScript), document[_0x442d3c(0x270)](_0x3b1df6[_0x442d3c(0x349)])[_0x442d3c(0x15b)] = !![]);
    }
    return _0x3b1df6[_0x442d3c(0x339)](log, 'Connected'), _0x3b1df6[_0x442d3c(0x301)];
}
function toggleNav(_0xbdcd3b) {
    const _0x141555 = _0x56548a, _0x6702ad = {
            'bCxqp': function (_0x428afc, _0x22ae9f) {
                return _0x428afc === _0x22ae9f;
            },
            'wZeaP': 'block',
            'uRwpj': _0x141555(0x137),
            'DmwdS': _0x141555(0x127),
            'rGSsS': 'Variables',
            'EyaTD': _0x141555(0x1b9)
        }, _0x580b50 = [
            _0x141555(0x3e8),
            _0x6702ad['DmwdS'],
            _0x6702ad[_0x141555(0x1f1)],
            _0x141555(0x341),
            _0x6702ad[_0x141555(0x33a)]
        ];
    _0x580b50['forEach'](_0x4ffd40 => {
        const _0x478bb8 = _0x141555, _0x39cb3d = _0x6702ad['bCxqp'](_0x4ffd40[_0x478bb8(0x140)](), _0xbdcd3b) ? _0x6702ad[_0x478bb8(0x352)] : _0x6702ad[_0x478bb8(0x217)];
        document[_0x478bb8(0x157)]('wdbWrap' + _0x4ffd40)[_0x478bb8(0x16f)]['display'] = _0x39cb3d, document[_0x478bb8(0x157)](_0x478bb8(0x152) + _0x4ffd40)[_0x478bb8(0x15b)] = _0x6702ad['bCxqp'](_0x39cb3d, _0x6702ad[_0x478bb8(0x352)]);
    });
}
function toggleShow(_0x260eed) {
    const _0x21380b = _0x56548a, _0x1bcb7a = {
            'gLkrK': function (_0x1628f2, _0x15b952) {
                return _0x1628f2 + _0x15b952;
            },
            'OPslE': function (_0x52abe1, _0x4c0e11) {
                return _0x52abe1(_0x4c0e11);
            }
        }, _0x38917e = document[_0x21380b(0x157)](_0x21380b(0x337) + _0x1bcb7a[_0x21380b(0x3a1)](_0x260eed[_0x21380b(0x269)](0x0)[_0x21380b(0x2eb)](), _0x260eed[_0x21380b(0x3b4)](0x1)))[_0x21380b(0x138)];
    _0x1bcb7a[_0x21380b(0x164)](selectFunction, _0x38917e ? _0x21380b(0x353) + _0x260eed : 'hide' + _0x260eed);
}
function toggleLive(_0x5487a1) {
    const _0xe81bc0 = _0x56548a, _0x2c89ca = {
            'nScJC': function (_0x433db5, _0x211dc3) {
                return _0x433db5 + _0x211dc3;
            },
            'GHVVf': _0xe81bc0(0x1fb),
            'lgHvf': _0xe81bc0(0x121)
        }, _0x58dc4b = document[_0xe81bc0(0x157)](_0xe81bc0(0x1a8) + _0x2c89ca[_0xe81bc0(0x2f2)](_0x5487a1['charAt'](0x0)[_0xe81bc0(0x2eb)](), _0x5487a1[_0xe81bc0(0x3b4)](0x1)))['checked'];
    selectFunction('' + (_0x58dc4b ? _0x2c89ca[_0xe81bc0(0x3f4)] : _0x2c89ca[_0xe81bc0(0x3cb)]) + _0x5487a1);
}
function selectFunction(_0x112e7b) {
    const _0x5e60c8 = _0x56548a, _0x41b161 = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x5e60c8(0x256)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog(_0x5e60c8(0x20f)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x5e60c8(0x121)),
            'startchart': () => toggleChart(_0x5e60c8(0x1fb)),
            'stophistory': () => toggleHistory(_0x5e60c8(0x121)),
            'starthistory': () => toggleHistory(_0x5e60c8(0x1fb)),
            'stoplog': () => toggleLog('stop'),
            'startlog': () => toggleLog(_0x5e60c8(0x1fb)),
            'hidestats': () => toggleStats(_0x5e60c8(0x2f5)),
            'showstats': () => toggleStats(_0x5e60c8(0x353)),
            'hidechart': () => toggleChart(_0x5e60c8(0x2f5)),
            'showchart': () => toggleChart(_0x5e60c8(0x353)),
            'hidehistory': () => toggleHistory(_0x5e60c8(0x2f5)),
            'showhistory': () => toggleHistory('show')
        };
    if (_0x41b161[_0x112e7b])
        _0x41b161[_0x112e7b]();
}
function toggleMode(_0x17603f) {
    const _0x588cca = _0x56548a, _0x497e67 = {
            'Wjwkg': function (_0x49a01e, _0x53419e) {
                return _0x49a01e === _0x53419e;
            },
            'aMRhR': _0x588cca(0x364),
            'nXpbs': _0x588cca(0x3fd),
            'sXzRH': _0x588cca(0x12c),
            'rXAHP': _0x588cca(0x125),
            'NSKFr': 'block',
            'nJxFn': _0x588cca(0x137),
            'NlfhD': function (_0x237201, _0x4e8d3b) {
                return _0x237201 === _0x4e8d3b;
            },
            'GqrUu': _0x588cca(0x21a)
        };
    mode = _0x17603f;
    if (_0x497e67['Wjwkg'](game, _0x497e67[_0x588cca(0x245)]))
        luaEditor[_0x588cca(0x358)](rangediceLuaScript), jsEditor[_0x588cca(0x358)](rangediceJsScript);
    else {
        if (game === _0x588cca(0x1d0))
            luaEditor[_0x588cca(0x358)](plinkoLuaScript), jsEditor[_0x588cca(0x358)](plinkoJsScript);
        else
            game === _0x497e67[_0x588cca(0x29c)] && (luaEditor[_0x588cca(0x358)](kenoLuaScript), jsEditor[_0x588cca(0x358)](kenoJsScript));
    }
    const _0x344ab8 = document[_0x588cca(0x157)](_0x588cca(0x344)), _0x1a1777 = document[_0x588cca(0x157)](_0x497e67[_0x588cca(0x3fa)]), _0x4f5297 = document[_0x588cca(0x157)](_0x588cca(0x15e));
    _0x344ab8['style'][_0x588cca(0x181)] = _0x17603f === _0x497e67['rXAHP'] ? _0x497e67[_0x588cca(0x16e)] : _0x497e67[_0x588cca(0x3d8)], _0x1a1777[_0x588cca(0x16f)][_0x588cca(0x181)] = _0x17603f === 'js' ? _0x497e67[_0x588cca(0x16e)] : _0x497e67['nJxFn'], _0x4f5297['style']['display'] = _0x497e67[_0x588cca(0x176)](_0x17603f, _0x497e67[_0x588cca(0x1a4)]) ? _0x497e67[_0x588cca(0x16e)] : 'none', luaEditor[_0x588cca(0x196)](), jsEditor[_0x588cca(0x196)]();
}
function toggleStats(_0x24664e) {
    const _0x83d49f = _0x56548a, _0x42fa3d = {
            'XSbLn': _0x83d49f(0x2f5),
            'xqImh': _0x83d49f(0x142)
        }, _0x27e96d = _0x24664e === _0x42fa3d[_0x83d49f(0x171)] ? _0x83d49f(0x137) : _0x42fa3d[_0x83d49f(0x398)];
    document[_0x83d49f(0x157)](_0x83d49f(0x30d))[_0x83d49f(0x16f)][_0x83d49f(0x181)] = _0x27e96d;
}
function toggleChart(_0x14ccb1) {
    const _0x4faa03 = _0x56548a, _0x44f478 = {
            'lDsjb': 'wdbChart',
            'syABp': _0x4faa03(0x31b),
            'ignty': _0x4faa03(0x2f5),
            'GxGOs': _0x4faa03(0x137),
            'GwmHE': _0x4faa03(0x19f),
            'QxzgO': _0x4faa03(0x353),
            'jSWIQ': _0x4faa03(0x369),
            'VYVnF': _0x4faa03(0x121),
            'jbCZa': _0x4faa03(0x1fb),
            'bIaWA': _0x4faa03(0x256)
        }, _0xf6b660 = document[_0x4faa03(0x157)](_0x44f478['lDsjb']), _0x5b9531 = document[_0x4faa03(0x157)](_0x44f478[_0x4faa03(0x231)]);
    switch (_0x14ccb1) {
    case _0x44f478[_0x4faa03(0x209)]:
        _0xf6b660['style'][_0x4faa03(0x181)] = _0x44f478[_0x4faa03(0x154)], _0x5b9531[_0x4faa03(0x16f)][_0x4faa03(0x17f)] = _0x44f478[_0x4faa03(0x17b)];
        break;
    case _0x44f478[_0x4faa03(0x166)]:
        _0xf6b660['style'][_0x4faa03(0x181)] = _0x4faa03(0x36d), _0x5b9531[_0x4faa03(0x16f)][_0x4faa03(0x17f)] = _0x44f478[_0x4faa03(0x25b)];
        break;
    case _0x44f478[_0x4faa03(0x3fe)]:
        stopChart = !![];
        break;
    case _0x44f478['jbCZa']:
        stopChart = ![];
        break;
    case _0x44f478[_0x4faa03(0x155)]:
        betsChart = 0x0, profitChart = 0x0, chart[_0x4faa03(0x30c)]();
        break;
    }
}
function toggleHistory(_0x31b816) {
    const _0x4f0510 = _0x56548a, _0x30e4ed = {
            'WSaWi': _0x4f0510(0x3db),
            'PUWOv': 'hide',
            'bjVGo': _0x4f0510(0x137),
            'NADtk': _0x4f0510(0x19f),
            'SNLZB': _0x4f0510(0x369),
            'VAvew': _0x4f0510(0x121),
            'FxSht': _0x4f0510(0x1fb),
            'fnpKf': _0x4f0510(0x20f)
        }, _0x41ec6d = document['getElementById'](_0x30e4ed[_0x4f0510(0x14a)]), _0x5cb959 = document[_0x4f0510(0x157)](_0x4f0510(0x2dd));
    switch (_0x31b816) {
    case _0x30e4ed[_0x4f0510(0x1d2)]:
        _0x41ec6d[_0x4f0510(0x16f)][_0x4f0510(0x181)] = _0x30e4ed[_0x4f0510(0x1be)], _0x5cb959[_0x4f0510(0x16f)][_0x4f0510(0x17f)] = _0x30e4ed[_0x4f0510(0x2ec)];
        break;
    case _0x4f0510(0x353):
        _0x41ec6d[_0x4f0510(0x16f)][_0x4f0510(0x181)] = _0x4f0510(0x36d), _0x5cb959['style'][_0x4f0510(0x17f)] = _0x30e4ed[_0x4f0510(0x2e2)];
        break;
    case _0x30e4ed[_0x4f0510(0x278)]:
        stopHistory = !![];
        break;
    case _0x30e4ed[_0x4f0510(0x363)]:
        stopHistory = ![];
        break;
    case _0x30e4ed[_0x4f0510(0x34b)]:
        _0x41ec6d['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x121433) {
    const _0x1f6b58 = _0x56548a, _0x2fc434 = {
            'fDvGp': 'stop',
            'RWffG': 'start'
        };
    switch (_0x121433) {
    case _0x2fc434[_0x1f6b58(0x2ad)]:
        stopLog = !![];
        break;
    case _0x2fc434[_0x1f6b58(0x128)]:
        stopLog = ![];
        break;
    case _0x1f6b58(0x20f):
        document[_0x1f6b58(0x157)](_0x1f6b58(0x148))[_0x1f6b58(0x340)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x5886ed = _0x56548a, _0x183c48 = {
            'AtuUo': function (_0x48a1c8, _0x1f3342) {
                return _0x48a1c8(_0x1f3342);
            },
            'OJsJi': _0x5886ed(0x2c0),
            'JhLdL': _0x5886ed(0x3e6),
            'yNZmh': _0x5886ed(0x191),
            'ssJTY': _0x5886ed(0x1a0),
            'ONQpV': _0x5886ed(0x204),
            'ZozcT': _0x5886ed(0x366),
            'kftzx': _0x5886ed(0x40d),
            'WxkYV': function (_0x51a626, _0x2af2ba) {
                return _0x51a626(_0x2af2ba);
            },
            'jkwoj': _0x5886ed(0x324),
            'uPhah': 'advancedMultiOnLoseCheck',
            'CzIhv': _0x5886ed(0x2a3),
            'UQPvt': _0x5886ed(0x2cc),
            'WetEg': 'advancedBetHighOnBetCheck',
            'digKR': function (_0x418029, _0x1cb8e2) {
                return _0x418029(_0x1cb8e2);
            },
            'qlmqy': 'advancedBetHighOnBet',
            'BsroF': function (_0x525b90, _0x37cb54) {
                return _0x525b90 === _0x37cb54;
            },
            'KyDMb': function (_0x23f98b, _0x5d9e7b) {
                return _0x23f98b % _0x5d9e7b;
            },
            'qFibr': _0x5886ed(0x3f5),
            'BFUBY': function (_0x172d07, _0x21456b) {
                return _0x172d07(_0x21456b);
            },
            'sNbaq': _0x5886ed(0x323),
            'kGyNu': function (_0x3fb7e0, _0x1d0450) {
                return _0x3fb7e0 >= _0x1d0450;
            },
            'COxFS': _0x5886ed(0x1bd),
            'oBMwx': _0x5886ed(0x23b),
            'ruSzJ': function (_0x3fee9c) {
                return _0x3fee9c();
            },
            'GMOEB': function (_0x59eb10, _0x4fbe7e) {
                return _0x59eb10 + _0x4fbe7e;
            },
            'ljfKc': 'advancedStopAfterStreakCheck',
            'jlbRX': function (_0x5d788a, _0x3875c1) {
                return _0x5d788a(_0x3875c1);
            },
            'DQBmJ': _0x5886ed(0x404),
            'UouHr': function (_0x4bcd4c, _0x3d1e40) {
                return _0x4bcd4c > _0x3d1e40;
            },
            'AKTDL': function (_0x11639b) {
                return _0x11639b();
            },
            'ZUoqX': function (_0x5c053f, _0x38296f) {
                return _0x5c053f + _0x38296f;
            },
            'eOLeX': _0x5886ed(0x178),
            'cItmH': function (_0x2bae7c, _0x485f50) {
                return _0x2bae7c <= _0x485f50;
            },
            'NSSYf': _0x5886ed(0x1cf),
            'uVIMx': _0x5886ed(0x15f),
            'JmmXn': function (_0x3c4e12, _0x47b75f) {
                return _0x3c4e12 >= _0x47b75f;
            },
            'sVjkc': function (_0x14e13f, _0x411e01) {
                return _0x14e13f(_0x411e01);
            },
            'oCukY': function (_0x402a40, _0x59e852) {
                return _0x402a40 + _0x59e852;
            },
            'RhGDT': _0x5886ed(0x368),
            'BUtez': '\x20bet',
            'zyIve': _0x5886ed(0x170),
            'qDJoz': _0x5886ed(0x2f7),
            'hYyNO': function (_0x3a6f6a, _0x4abee2) {
                return _0x3a6f6a >= _0x4abee2;
            },
            'DrHqa': function (_0x2d5e41) {
                return _0x2d5e41();
            },
            'LfXGN': function (_0x3613bd, _0x269c40) {
                return _0x3613bd + _0x269c40;
            },
            'pbsna': _0x5886ed(0x374),
            'AckrH': function (_0x15cce0, _0x531764) {
                return _0x15cce0(_0x531764);
            },
            'BLaFI': function (_0x1c67a3, _0x3cfdb6) {
                return _0x1c67a3 + _0x3cfdb6;
            },
            'HIGzm': function (_0xd7b9da, _0x157bce) {
                return _0xd7b9da + _0x157bce;
            },
            'iGjse': _0x5886ed(0x19e),
            'nYdPm': _0x5886ed(0x1f7),
            'ykvVe': function (_0x113f86, _0x3b5f2e) {
                return _0x113f86(_0x3b5f2e);
            },
            'trxzD': function (_0x12c241, _0x18bcfc) {
                return _0x12c241(_0x18bcfc);
            },
            'mfXbr': function (_0x2267eb, _0x325de8) {
                return _0x2267eb + _0x325de8;
            },
            'sSXRk': _0x5886ed(0x221),
            'XAHNd': _0x5886ed(0x257),
            'pzMXs': function (_0x41abd4) {
                return _0x41abd4();
            },
            'HcGIf': _0x5886ed(0x162),
            'goefV': _0x5886ed(0x203),
            'qWudy': _0x5886ed(0x2ca),
            'iiZwi': function (_0x1f3383, _0x1af79b) {
                return _0x1f3383 % _0x1af79b;
            },
            'CCgZU': function (_0x5af4e1, _0x58043a) {
                return _0x5af4e1 % _0x58043a;
            },
            'gmvAI': _0x5886ed(0x408),
            'PbKkh': function (_0x118812, _0x54ab0d) {
                return _0x118812(_0x54ab0d);
            },
            'lgcnV': _0x5886ed(0x20e),
            'CJQEF': function (_0x4e8df0, _0x17e313) {
                return _0x4e8df0 % _0x17e313;
            },
            'CNGnN': function (_0x165b47, _0x5981d6) {
                return _0x165b47 % _0x5981d6;
            },
            'UXKMu': function (_0x1ca47f, _0x45a391) {
                return _0x1ca47f === _0x45a391;
            },
            'GkKzH': function (_0x2ba447, _0x3f6517) {
                return _0x2ba447 * _0x3f6517;
            },
            'egDRi': 'handleAdvanced\x20ok'
        };
    chance = _0x183c48[_0x5886ed(0x3ad)](Number, document['getElementById'](_0x5886ed(0x237))[_0x5886ed(0x279)]);
    const _0x3656dd = document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x1cd)])['checked'], _0x57e5e1 = _0x3656dd ? Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x2ab)])[_0x5886ed(0x279)]) : chance, _0x29e346 = Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x3d4)])[_0x5886ed(0x279)]), _0x481a13 = document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x3aa)])[_0x5886ed(0x138)], _0x112508 = _0x481a13 ? Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x238)])[_0x5886ed(0x279)]) : chance, _0x19efc2 = Number(document[_0x5886ed(0x157)](_0x5886ed(0x223))[_0x5886ed(0x279)]), _0x3efc77 = document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x31e)])['checked'], _0x399f74 = _0x3efc77 ? Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x2d5)])['value']) : 0x1, _0x56fb9a = _0x183c48[_0x5886ed(0x1b0)](Number, document['getElementById'](_0x183c48['jkwoj'])[_0x5886ed(0x279)]), _0x25e010 = document['getElementById'](_0x183c48[_0x5886ed(0x1c2)])[_0x5886ed(0x138)], _0x2300fa = _0x25e010 ? Number(document['getElementById'](_0x183c48[_0x5886ed(0x3e9)])[_0x5886ed(0x279)]) : 0x1, _0x5ef9d7 = Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x304)])['value']), _0x3cd4f4 = document['getElementById'](_0x183c48['WetEg'])['checked'];
    if (_0x3cd4f4) {
        const _0x30b97b = _0x183c48[_0x5886ed(0x206)](Number, document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x239)])[_0x5886ed(0x279)]);
        if (_0x183c48['BsroF'](_0x183c48['KyDMb'](bets, _0x30b97b), 0x0))
            bethigh = !bethigh;
    }
    const _0x5f1cc7 = document[_0x5886ed(0x157)](_0x5886ed(0x3b5))['checked'];
    if (_0x5f1cc7) {
        const _0x364c8d = Number(document[_0x5886ed(0x157)](_0x183c48['qFibr'])[_0x5886ed(0x279)]);
        if (profit >= _0x364c8d)
            bethigh = !bethigh;
    }
    const _0x459836 = document[_0x5886ed(0x157)]('resetstatsOnProfitCheck')[_0x5886ed(0x138)];
    if (_0x459836) {
        const _0x2518b5 = _0x183c48['BFUBY'](Number, document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x226)])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x120)](profit, _0x2518b5))
            resetstats();
    }
    const _0x331d73 = document['getElementById'](_0x183c48['COxFS'])[_0x5886ed(0x138)];
    if (_0x331d73) {
        const _0x28d757 = Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x29b)])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x1e2)](lastBet['result'], _0x28d757))
            _0x183c48['ruSzJ'](stop), _0x183c48[_0x5886ed(0x1b0)](log, _0x183c48[_0x5886ed(0x131)](_0x5886ed(0x34a), _0x28d757));
    }
    const _0x271c11 = document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x332)])[_0x5886ed(0x138)];
    if (_0x271c11) {
        const _0x2ab680 = _0x183c48[_0x5886ed(0x151)](Number, document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x2fc)])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x2ce)](_0x2ab680, 0x0)) {
            if (currentstreak >= _0x2ab680)
                _0x183c48[_0x5886ed(0x39d)](stop), _0x183c48[_0x5886ed(0x206)](log, _0x183c48['ZUoqX'](_0x183c48[_0x5886ed(0x22a)], _0x2ab680));
        } else {
            if (_0x183c48[_0x5886ed(0x1de)](currentstreak, _0x2ab680))
                _0x183c48[_0x5886ed(0x39d)](stop), log(_0x183c48['GMOEB'](_0x183c48[_0x5886ed(0x22a)], _0x2ab680));
        }
    }
    const _0x5f21a4 = document['getElementById'](_0x183c48['NSSYf'])[_0x5886ed(0x138)];
    if (_0x5f21a4) {
        const _0x24b913 = _0x183c48['jlbRX'](Number, document[_0x5886ed(0x157)](_0x183c48['uVIMx'])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x11c)](bets, _0x24b913))
            stop(), _0x183c48[_0x5886ed(0x11f)](log, _0x183c48[_0x5886ed(0x1f8)](_0x183c48[_0x5886ed(0x3cf)], _0x24b913) + _0x183c48[_0x5886ed(0x20d)]);
    }
    const _0x4dc85c = document['getElementById'](_0x183c48['zyIve'])['checked'];
    if (_0x4dc85c) {
        const _0xe0792f = Number(document[_0x5886ed(0x157)](_0x183c48['qDJoz'])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x373)](winstreak, _0xe0792f))
            _0x183c48[_0x5886ed(0x2a7)](stop), log(_0x183c48[_0x5886ed(0x3a5)](_0x183c48[_0x5886ed(0x131)](_0x183c48[_0x5886ed(0x3cf)], _0xe0792f), _0x5886ed(0x3bd)));
    }
    const _0x182ab4 = document[_0x5886ed(0x157)](_0x183c48['pbsna'])[_0x5886ed(0x138)];
    if (_0x182ab4) {
        const _0x490ea4 = _0x183c48[_0x5886ed(0x33b)](Number, document[_0x5886ed(0x157)](_0x5886ed(0x119))['value']);
        if (_0x183c48[_0x5886ed(0x120)](losestreak, _0x490ea4))
            stop(), _0x183c48['sVjkc'](log, _0x183c48[_0x5886ed(0x150)](_0x183c48[_0x5886ed(0x40c)](_0x183c48[_0x5886ed(0x3cf)], _0x490ea4), _0x183c48['iGjse']));
    }
    const _0x249305 = document[_0x5886ed(0x157)](_0x183c48['nYdPm'])['checked'];
    if (_0x249305) {
        const _0x538d6d = _0x183c48[_0x5886ed(0x11d)](Number, document[_0x5886ed(0x157)](_0x5886ed(0x236))[_0x5886ed(0x279)]);
        if (profit >= _0x538d6d)
            stop(), _0x183c48['trxzD'](log, _0x183c48[_0x5886ed(0x24f)](_0x183c48['sSXRk'], _0x538d6d));
    }
    const _0x8b7766 = document[_0x5886ed(0x157)](_0x5886ed(0x1b4))[_0x5886ed(0x138)];
    if (_0x8b7766) {
        const _0x20fa07 = _0x183c48[_0x5886ed(0x296)](Number, document['getElementById'](_0x183c48[_0x5886ed(0x24e)])[_0x5886ed(0x279)]);
        if (_0x183c48[_0x5886ed(0x11c)](balance, _0x20fa07))
            _0x183c48[_0x5886ed(0x26f)](stop), _0x183c48[_0x5886ed(0x206)](log, _0x183c48[_0x5886ed(0x131)](_0x183c48[_0x5886ed(0x38b)], _0x20fa07));
    }
    if (win) {
        const _0x460c8d = document[_0x5886ed(0x157)](_0x183c48['goefV'])[_0x5886ed(0x138)];
        if (_0x460c8d) {
            const _0x1e3a83 = Number(document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x3a0)])[_0x5886ed(0x279)]);
            if (_0x183c48[_0x5886ed(0x18a)](winstreak, _0x1e3a83) === 0x0)
                bethigh = !bethigh;
        }
        if (_0x183c48[_0x5886ed(0x385)](winstreak, _0x29e346) === 0x0)
            chance = _0x57e5e1;
        if (_0x3efc77) {
            if (_0x183c48[_0x5886ed(0x1e2)](_0x183c48[_0x5886ed(0x23d)](winstreak, _0x56fb9a), 0x0))
                nextbet = previousbet * _0x399f74;
        } else
            nextbet = basebet;
    } else {
        const _0x17f841 = document['getElementById'](_0x183c48[_0x5886ed(0x254)])[_0x5886ed(0x138)];
        if (_0x17f841) {
            const _0x524708 = _0x183c48[_0x5886ed(0x225)](Number, document[_0x5886ed(0x157)](_0x183c48[_0x5886ed(0x297)])[_0x5886ed(0x279)]);
            if (_0x183c48['BsroF'](_0x183c48[_0x5886ed(0x22f)](losestreak, _0x524708), 0x0))
                bethigh = !bethigh;
        }
        if (_0x183c48['CNGnN'](losestreak, _0x19efc2) === 0x0)
            chance = _0x112508;
        if (_0x25e010) {
            if (_0x183c48[_0x5886ed(0x198)](_0x183c48[_0x5886ed(0x18a)](losestreak, _0x5ef9d7), 0x0))
                nextbet = _0x183c48[_0x5886ed(0x22b)](previousbet, _0x2300fa);
        } else
            nextbet = basebet;
    }
    return _0x183c48[_0x5886ed(0x40a)];
}
function changeCoin() {
    const _0x30dbd1 = _0x56548a, _0xd3b9bb = { 'mhWzk': 'wdbMenuCoin' };
    coin = document[_0x30dbd1(0x157)](_0xd3b9bb[_0x30dbd1(0x260)])[_0x30dbd1(0x279)], currency = coin['toLowerCase'](), fengari[_0x30dbd1(0x393)](_0x30dbd1(0x12e) + currency + '\x22')(), checkbalance();
}
async function handleStats() {
    const _0x27cd04 = _0x56548a, _0x31621f = {
            'UDaLF': function (_0x5619d0, _0x3c67e4) {
                return _0x5619d0 === _0x3c67e4;
            },
            'WtPEz': 'lua',
            'YILpC': function (_0x40017e) {
                return _0x40017e();
            },
            'zzyDv': function (_0x50ae4e, _0x3a2248) {
                return _0x50ae4e === _0x3a2248;
            },
            'wGMNZ': _0x27cd04(0x21a),
            'VDPOn': function (_0x23a672, _0x389be4) {
                return _0x23a672 && _0x389be4;
            },
            'uqdxc': function (_0x21ec79) {
                return _0x21ec79();
            },
            'olHKP': function (_0x2c9fb) {
                return _0x2c9fb();
            },
            'zWgZd': function (_0x230040) {
                return _0x230040();
            },
            'FNnbb': _0x27cd04(0x364),
            'KXSaS': function (_0x23ff92, _0x44e242) {
                return _0x23ff92 === _0x44e242;
            },
            'bWlHo': 'dice',
            'tdchK': function (_0x3a9c4d, _0x48f12a) {
                return _0x3a9c4d < _0x48f12a;
            },
            'BVfNo': _0x27cd04(0x1d0),
            'BSXrY': _0x27cd04(0x3fd),
            'jUiyr': function (_0x57e14b, _0x32571f) {
                return _0x57e14b > _0x32571f;
            },
            'ibxFO': function (_0x18b3b5, _0x56afe9) {
                return _0x18b3b5 === _0x56afe9;
            },
            'HDJJg': _0x27cd04(0x2e5),
            'HLvqd': _0x27cd04(0x153),
            'gMWWu': function (_0x53f7f2, _0x5ccba6) {
                return _0x53f7f2 > _0x5ccba6;
            },
            'ygvZj': function (_0x1d3bb8, _0x14f6d6) {
                return _0x1d3bb8 === _0x14f6d6;
            },
            'npkpD': 'between2',
            'sESLZ': function (_0x8319ad, _0x394f92) {
                return _0x8319ad > _0x394f92;
            },
            'QnjQk': function (_0x49b91e, _0xf88720) {
                return _0x49b91e > _0xf88720;
            },
            'BpzXj': function (_0x2b0aef, _0x593d5c) {
                return _0x2b0aef || _0x593d5c;
            },
            'NmTrm': function (_0xc93a00, _0x4f8ebd) {
                return _0xc93a00 >= _0x4f8ebd;
            },
            'laOZD': '2|0|3|4|1',
            'dkPOq': _0x27cd04(0x3c6),
            'dbALC': function (_0x1712e5, _0x5e9084) {
                return _0x1712e5 > _0x5e9084;
            },
            'PcxCI': function (_0x3c05b2, _0x4ac676) {
                return _0x3c05b2 > _0x4ac676;
            },
            'DURFK': function (_0x39195e, _0x48998c) {
                return _0x39195e < _0x48998c;
            },
            'EcRWj': function (_0x11a469, _0x28eb4d) {
                return _0x11a469 > _0x28eb4d;
            }
        }, _0x333d39 = Date['now']();
    speedHistory[_0x27cd04(0x3f7)](_0x333d39);
    const _0x2ccbf4 = 0x2710;
    speedHistory = speedHistory[_0x27cd04(0x384)](_0x415af3 => _0x333d39 - _0x415af3 <= _0x2ccbf4), bets++, lastBet[_0x27cd04(0x1f6)] = lastBet[_0x27cd04(0x3a4)], lastBet[_0x27cd04(0x403)] = target, lastBet[_0x27cd04(0x377)] = target;
    _0x31621f[_0x27cd04(0x35a)](game, _0x31621f[_0x27cd04(0x3c0)]) && (lastBet['chance1'] = chance1, lastBet[_0x27cd04(0x1a9)] = chance1, lastBet['chance2'] = chance2, lastBet[_0x27cd04(0x3e2)] = chance2, lastBet[_0x27cd04(0x26b)] = chance3, lastBet[_0x27cd04(0x305)] = chance3, lastBet[_0x27cd04(0x1d9)] = chance4, lastBet[_0x27cd04(0x27a)] = chance4, lastBet[_0x27cd04(0x328)] = betSide, lastBet[_0x27cd04(0x39b)] = betSide);
    lastBet[_0x27cd04(0x345)] = result, lastBet['Result'] = result, lastBet[_0x27cd04(0x18c)] = currentprofit, lastBet[_0x27cd04(0x314)] = currentprofit, lastBet[_0x27cd04(0x1eb)] = lastBet['nonce'], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x31621f['KXSaS'](game, _0x31621f['bWlHo']))
        win = lastBet[_0x27cd04(0x3d2)] ? lastBet['result'] > lastBet[_0x27cd04(0x403)] : _0x31621f[_0x27cd04(0x1db)](lastBet[_0x27cd04(0x345)], lastBet[_0x27cd04(0x403)]);
    else {
        if (_0x31621f[_0x27cd04(0x35a)](game, _0x31621f['BVfNo']) || _0x31621f[_0x27cd04(0x3f1)](game, _0x31621f[_0x27cd04(0x355)]))
            win = _0x31621f['jUiyr'](lastBet[_0x27cd04(0x18c)], 0x0);
        else {
            if (_0x31621f[_0x27cd04(0x35a)](game, _0x31621f['FNnbb'])) {
                if (_0x31621f[_0x27cd04(0x28c)](lastBet['betSide'], _0x31621f[_0x27cd04(0x2b1)]))
                    win = lastBet['roll'] > lastBet[_0x27cd04(0x3df)] && lastBet[_0x27cd04(0x3a4)] < lastBet['chance2'];
                else {
                    if (lastBet[_0x27cd04(0x328)] === _0x31621f[_0x27cd04(0x36c)])
                        win = _0x31621f[_0x27cd04(0x1db)](lastBet['roll'], lastBet[_0x27cd04(0x3df)]) || _0x31621f[_0x27cd04(0x169)](lastBet['roll'], lastBet[_0x27cd04(0x18e)]);
                    else {
                        if (_0x31621f[_0x27cd04(0x2e6)](lastBet[_0x27cd04(0x328)], _0x31621f['npkpD'])) {
                            const _0x30395c = _0x31621f['sESLZ'](lastBet[_0x27cd04(0x3a4)], lastBet['chance1']) && _0x31621f['tdchK'](lastBet[_0x27cd04(0x3a4)], lastBet[_0x27cd04(0x18e)]), _0x14717b = _0x31621f['QnjQk'](lastBet[_0x27cd04(0x3a4)], lastBet[_0x27cd04(0x26b)]) && lastBet[_0x27cd04(0x3a4)] < lastBet[_0x27cd04(0x1d9)];
                            win = _0x31621f[_0x27cd04(0x312)](_0x30395c, _0x14717b);
                        }
                    }
                }
            } else
                win = _0x31621f['NmTrm'](lastBet[_0x27cd04(0x345)], lastBet['target']);
        }
    }
    if (win) {
        const _0x177175 = _0x31621f[_0x27cd04(0x322)][_0x27cd04(0x187)]('|');
        let _0x3a93a0 = 0x0;
        while (!![]) {
            switch (_0x177175[_0x3a93a0++]) {
            case '0':
                wins++;
                continue;
            case '1':
                currentstreak = winstreak;
                continue;
            case '2':
                color = _0x27cd04(0x118);
                continue;
            case '3':
                winstreak++;
                continue;
            case '4':
                losestreak = 0x0;
                continue;
            }
            break;
        }
    } else {
        const _0xb9e08f = '0|3|2|4|1|5'[_0x27cd04(0x187)]('|');
        let _0x50b193 = 0x0;
        while (!![]) {
            switch (_0xb9e08f[_0x50b193++]) {
            case '0':
                color = _0x31621f[_0x27cd04(0x338)];
                continue;
            case '1':
                currentstreak = -losestreak;
                continue;
            case '2':
                losestreak++;
                continue;
            case '3':
                losses++;
                continue;
            case '4':
                winstreak = 0x0;
                continue;
            case '5':
                if (_0x31621f[_0x27cd04(0x2fd)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            }
            break;
        }
    }
    if (_0x31621f[_0x27cd04(0x17a)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x31621f[_0x27cd04(0x2c9)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (losestreak > maxlosestreak)
        maxlosestreak = losestreak;
    if (_0x31621f['tdchK'](balance, minbalance))
        minbalance = balance;
    if (_0x31621f['jUiyr'](balance, maxbalance))
        maxbalance = balance;
    if (_0x31621f[_0x27cd04(0x1b5)](profit, minprofit))
        minprofit = profit;
    if (_0x31621f[_0x27cd04(0x220)](profit, maxprofit))
        maxprofit = profit;
    showInfo()[_0x27cd04(0x405)](async () => {
        const _0x5eabe5 = _0x27cd04;
        try {
            if (_0x31621f[_0x5eabe5(0x2c7)](mode, _0x31621f[_0x5eabe5(0x32e)]))
                await _0x31621f[_0x5eabe5(0x222)](updateLua);
            else {
                if (mode === 'js')
                    await _0x31621f[_0x5eabe5(0x222)](dobet);
                else
                    _0x31621f[_0x5eabe5(0x35a)](mode, _0x31621f[_0x5eabe5(0x38e)]) && await handleAdvanced();
            }
            if (_0x31621f['VDPOn'](win, sOW))
                _0x31621f[_0x5eabe5(0x32f)](stop);
            if (run)
                _0x31621f[_0x5eabe5(0x28d)](playBet);
        } catch (_0x882e68) {
            _0x31621f['zWgZd'](stop), log(_0x882e68);
        }
    });
}
function _0x20dd() {
    const _0x9a1769 = [
        'Betting\x20',
        'uwCLN',
        'bwPKX',
        'HbItq',
        'asKyp',
        'fpAyH',
        'TGeXz',
        'scriptName',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'SjxTF',
        'wdbHighLose',
        'advancedChanceOnWinCheck',
        'WyGWr',
        'AoxQS',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'nRHRx',
        'MFvel',
        'pBSAd',
        'UDaLF',
        'onmousemove',
        'PcxCI',
        'advancedBetHighOnWin',
        'clientY',
        'advancedMultiOnLoseBets',
        'options',
        'UouHr',
        'KEyfh',
        'offsetLeft',
        'WZxwF',
        '<input\x20id=\x22bethigh',
        '$1=$1*$2\x20',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'kftzx',
        'wdbHeader',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'KrQpO',
        'AwAOM',
        'xvHFz',
        'UVzLd',
        'BKWfH',
        'wdbChart',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'cDsMU',
        'wdbWrapFunctions',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'SNLZB',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'iNtEs',
        'between',
        'ygvZj',
        'MeugZ',
        '#000',
        'wdbMenuMode',
        'ylzNd',
        'toUpperCase',
        'NADtk',
        '1000px',
        'wdbWrapLicenseBox',
        'oxjmw',
        'wdb-bot-position',
        'wdbWrapControl',
        'nScJC',
        'event',
        '<option\x20value=\x22',
        'hide',
        'antiquewhite',
        'advancedStopOnWins',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'wdbPercentWagered',
        'OzqAt',
        'wdbHighWinStreak',
        'DQBmJ',
        'dbALC',
        '\x0a\x20\x20\x20\x20chance=',
        'rBiQQ',
        '\x20Hits',
        'OkYcn',
        'vcgCS',
        '15659CDkptZ',
        'UQPvt',
        'Chance3',
        'cBLPn',
        'rdWgX',
        'getItem',
        'qaLAC',
        'SKFfe',
        'position',
        'resetChart',
        'wdbStats',
        'nYMMV',
        'xZXPR',
        'EzYDF',
        'random',
        'BpzXj',
        'kenoNumbers',
        'Profit',
        'wdbShowMode',
        '$1=$1+$2\x20',
        'QbNWc',
        '</td>',
        'SPxTb',
        'uFwyY',
        'wdbWrapHistory',
        '8|5|4|2|1|17|11|18|10|3|14|6|16|15|7|0|12|9|13',
        'AbhKX',
        'ZozcT',
        '#91f190',
        'wdbScriptBoxLUA',
        'chart',
        'laOZD',
        'resetstatsOnProfit',
        'advancedMultiOnWinBets',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'mZbCq',
        'wdbWins',
        'betSide',
        'maxRows',
        'updateStats\x20ok',
        'DEvJZ',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'WtPEz',
        'uqdxc',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'eFvAn',
        'ljfKc',
        'onmouseup',
        'wdbCurrentStreak',
        '#2a2a2a',
        'getComputedStyle',
        'wdbToggleShow',
        'dkPOq',
        'kLOte',
        'EyaTD',
        'AckrH',
        '3WmAkWI',
        'insertBefore',
        'LkPeI',
        'wdbToggleMinimal',
        'innerHTML',
        'Functions',
        'innerWidth',
        'dUmYd',
        'wdbLUAMode',
        'result',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'script',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'EdMJL',
        'Stop\x20on\x20roll\x20number\x20',
        'fnpKf',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'high',
        'pHgOS',
        'IsYki',
        'join',
        'lFTLj',
        'wZeaP',
        'show',
        ';path=/',
        'BSXrY',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'amxNt',
        'setValue',
        'syylG',
        'zzyDv',
        'wdbPercentProfit',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'poqve',
        'wdb',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'LvIYG',
        'QcMxM',
        'return\x20nextbet',
        'FxSht',
        'rangedice',
        'remove',
        'advancedMultiOnWinCheck',
        'NMNqv',
        'Stop\x20on\x20',
        '190px',
        'wdbWrapVariables',
        'tcOKE',
        'HLvqd',
        'block',
        'startsWith',
        'files',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'LwrMX',
        'render',
        'hYyNO',
        'advancedStopOnLoseCheck',
        'map',
        'data',
        'Target',
        'parse',
        'clientX',
        'Snuen',
        'kbcOP',
        'WRvpD',
        '0:0:0:0',
        'nBMlP',
        'wdbMinProfit',
        'ykKfa',
        'hostname',
        'jlhnw',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'filter',
        'KyDMb',
        'xHdvw',
        'AFixY',
        '5749472nmTsrQ',
        'sEgMp',
        'mmOTF',
        'HcGIf',
        'nonce',
        'sRHTC',
        'wGMNZ',
        'cNSFy',
        'return\x20chance1',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'default',
        'load',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'lfPnb',
        'wdbSpeed',
        'cookie',
        'xqImh',
        'exFxo',
        'vbZNl',
        'BetSide',
        'wdbHighBet',
        'AKTDL',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'backgroundColor',
        'qWudy',
        'gLkrK',
        'white',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'roll',
        'LfXGN',
        'javascript',
        'VSqcA',
        'message',
        'IOmXj',
        'ssJTY',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'dice',
        'AtuUo',
        'TEXTAREA',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'doKwM',
        'save',
        'dlkUd',
        'slice',
        'advancedBetHighOnProfitCheck',
        'wdbFooter',
        'wdbMaxProfit',
        'updateChart',
        'loadCSS',
        'ZVeoC',
        'DDhoB',
        'BTdjD',
        '\x20win',
        'IGNdh',
        'round',
        'FNnbb',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'oxazh',
        '\x0a\x20\x20\x20\x20wagered=',
        'zFgRm',
        'aylfv',
        'red',
        'WDBScript',
        'JaISi',
        '\x0a\x20\x20\x20\x20bets=',
        'hLIWF',
        'lgHvf',
        'expires=',
        'black',
        'casino=\x22',
        'RhGDT',
        '\x20to\x20win,\x20',
        'classic',
        'bethigh',
        '_darkMode',
        'yNZmh',
        'pjagM',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'dNHZU',
        'nJxFn',
        'bKMIF',
        '\x0a\x20\x20\x20\x20balance=',
        'wdbHistory',
        'showInfo\x20OK',
        'UaneU',
        'BmqJW',
        'chance1',
        'toUTCString',
        '1|2|5|7|6|0|3|4',
        'Chance2',
        'text/plain;\x20charset=utf-8',
        'GGcfB',
        'BqPiY',
        'advancedChanceOnWin',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'Mode',
        'CzIhv',
        'xLKEH',
        'wdbScriptBoxJS',
        'umMfW',
        'Dribz',
        'return\x20bethigh',
        'jEMUb',
        '_maxRows',
        'KXSaS',
        'wdbOpenJSScript',
        'wdbLoader\x20ok',
        'GHVVf',
        'advancedBetHighOnProfit',
        'QreUF',
        'push',
        'OQZZU',
        'tLSho',
        'sXzRH',
        'keydown',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'keno',
        'VYVnF',
        'XjJjo',
        'closest',
        '\x0a\x20\x20\x20\x20minprofit=',
        'zTqkZ',
        'target',
        'advancedStopAfterStreak',
        'then',
        'Mxwdi',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'advancedBetHighOnLoseCheck',
        'JFRvo',
        'egDRi',
        'OwfQA',
        'HIGzm',
        'advancedMultiOnWin',
        '33FyxhSk',
        'YDGQw',
        'prototype',
        'WCexb',
        'children',
        '\x0a\x20\x20\x20\x20wins=',
        'eGqED',
        'green',
        'advancedStopOnLose',
        '60ZnDQxr',
        'return\x20scriptname',
        'JmmXn',
        'ykvVe',
        'href',
        'sVjkc',
        'kGyNu',
        'stop',
        'QEYxn',
        '232074daclrL',
        'PVHVx',
        'lua',
        'SApco',
        'Log',
        'RWffG',
        'Dgvcu',
        'HgQPG',
        'aUAYo',
        'wdbJSMode',
        'return\x20currency',
        'currency=\x22',
        'QwhkH',
        'YElMN',
        'GMOEB',
        'cXpcp',
        'bhnWy',
        'stringify',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'nHzTF',
        'none',
        'checked',
        'mYmij',
        'fixed',
        'toString',
        'createObjectURL',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        '493261ELnRcd',
        'offsetHeight',
        'toLowerCase',
        'fYjOB',
        'flex',
        'RIATy',
        '#fff',
        'wdbMenuCoin',
        'dWVXk',
        'mVlbp',
        'wdbLog',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'WSaWi',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'return\x20chance2',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'wdbProfit',
        'lastChild',
        'BLaFI',
        'jlbRX',
        'wdbShow',
        'outside',
        'GxGOs',
        'bIaWA',
        'wdbWrapPercentProfit',
        'getElementById',
        'dark1',
        'return\x20betSide',
        'PqOhL',
        'disabled',
        'appendChild',
        'nXHOS',
        'wdbAdvancedMode',
        'advancedStopOnBets',
        'aKWQg',
        'fFnyD',
        'Stop\x20on\x20balance\x20',
        'AgaKt',
        'OPslE',
        'whhmN',
        'QxzgO',
        'liNZJ',
        '469940GqnhrG',
        'gMWWu',
        '1374oQGydj',
        'iywAT',
        '#wdbSaveScriptButton',
        'OhLqy',
        'NSKFr',
        'style',
        'advancedStopOnWinsCheck',
        'XSbLn',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'KLEOJ',
        'hkSLe',
        'SxqPB',
        'NlfhD',
        'setTime',
        'Stop\x20on\x20current\x20streak\x20',
        'wdbRunningScript',
        'QnjQk',
        'GwmHE',
        '\x20at\x20',
        'fromTextArea',
        'indexOf',
        'height',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'display',
        'eXXgD',
        'pavHS',
        'wdbHighLoseStreak',
        'dataPoints',
        'wdbWagered',
        'split',
        'jmHez',
        'wdbWrapLog',
        'iiZwi',
        'return\x20chance3',
        'profit',
        'createElement',
        'chance2',
        'jfXml',
        'play',
        'advancedChanceOnWinBets',
        'cbQPX',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'CMevK',
        '0123456789',
        'deleteH',
        '30bUseaX',
        'UXKMu',
        'lineColor',
        'HsSbk',
        'wdbTime',
        'wdbBets',
        'getValue',
        '\x20lose',
        '380px',
        'advancedChanceOnLoseCheck',
        'oBazU',
        'chance',
        '#advancedBetHigh',
        'GqrUu',
        'vXoYL',
        'qRzoj',
        'iqsZW',
        'wdbToggleLive',
        'Chance1',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'updateLua\x20done',
        '\x0a\x20\x20\x20\x20chance4=',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        '\x0a\x20\x20\x20\x20losses=',
        'download',
        'WxkYV',
        'length',
        'toFixed',
        '\x0a\x20\x20\x20\x20chance2=',
        'stopOnBalanceCheck',
        'DURFK',
        'HgkqW',
        'setOption',
        'chance1=',
        'Tips',
        'wdbStartButton',
        'line',
        'YBmCR',
        'advancedStopRollNumberCheck',
        'bjVGo',
        'log-',
        'YNWww',
        'CjkMe',
        'uPhah',
        'GHklI',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'querySelectorAll',
        'sKegk',
        'reMnk',
        'low',
        'LtXqr',
        'MrwtH',
        '8|1|3|2|5|6|7|4|0',
        'setItem',
        'OJsJi',
        'dimgray',
        'advancedStopOnBetsCheck',
        'plinko',
        '0|8|7|5|4|6|2|1|3',
        'PUWOv',
        'return\x20chance',
        'jrTUO',
        'wdbStopOnWinButton',
        'lrUJZ',
        'click',
        'wdbBalance',
        'chance4',
        'forEach',
        'tdchK',
        'trim',
        'darkMode',
        'cItmH',
        '15707460SNSyxt',
        'HPgss',
        'wdbWrapTips',
        'BsroF',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'ZKXNI',
        'lWfju',
        'createUIOk',
        'offsetTop',
        'ADocH',
        'YcTAg',
        'toaFx',
        'Nonce',
        'removeChild',
        '\x20|\x20',
        'dSVtL',
        '\x0a\x20\x20\x20\x20chance3=',
        'brMaB',
        'rGSsS',
        'zdbXs',
        'rYHbZ',
        '/fengari-web.min.js',
        'left',
        'Roll',
        'stopOnProfitCheck',
        'oCukY',
        'response',
        'FtjHG',
        'start',
        'QibVZ',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'Eyaks',
        'shift',
        '\x0a\x20\x20\x20\x20winstreak=',
        'jqjHe',
        'hxPST',
        'advancedBetHighOnWinCheck',
        'advancedChanceOnLose',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'digKR',
        'offsetWidth',
        'wjjEV',
        'ignty',
        'sNDKa',
        'yHRvo',
        'dhyrn',
        'BUtez',
        'advancedBetHighOnLose',
        'clear',
        '1|4|2|3|0',
        'wdbMinBalance',
        'qSFPA',
        'XBmZY',
        'capitalize',
        'cgvWb',
        'kYfyY',
        'uRwpj',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'KxjZR',
        'advanced',
        'veoJF',
        '4|2|0|3|1',
        'ndkFD',
        'EMOxa',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'EcRWj',
        'Stop\x20on\x20profit\x20',
        'YILpC',
        'advancedChanceOnLoseBets',
        'VHogj',
        'PbKkh',
        'sNbaq',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'width',
        'OcZUx',
        'eOLeX',
        'GkKzH',
        'text',
        'innerHeight',
        'wdbLosses',
        'CJQEF',
        'addEventListener',
        'syABp',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'DswNB',
        'QrLiW',
        'uWrCH',
        'stopOnProfit',
        'advancedChance',
        'ONQpV',
        'qlmqy',
        '5px',
        'advancedStopRollNumber',
        'wdbMaxRows',
        'CCgZU',
        'replace',
        'noWgg',
        'floor',
        'FWpsg',
        'jTePE',
        'nCngt',
        'ztCIJ',
        'aMRhR',
        '350px',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        'resize',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'getTime',
        'rNnph',
        'gxIiG',
        'LDCQB',
        'XAHNd',
        'mfXbr',
        'wdbOpenLUAScript',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'light1',
        'gmvAI',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'reset',
        'stopOnBalance',
        'smgGN',
        'GtbAb',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'jSWIQ',
        'VwQBX',
        'VQpZS',
        'OAOBj',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'mhWzk',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'wdbResumeButton',
        'CHYSp',
        'KOGUb',
        'innerText',
        'pGHFO',
        'OhhDP',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'charAt',
        'URL',
        'chance3',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'BYAeU',
        'KViAn',
        'pzMXs',
        'querySelector',
        'onmousedown',
        'top',
        'return\x20plinkoRow',
        'jVYmt',
        'darcula',
        'theme',
        '<td>',
        'VAvew',
        'value',
        'Chance4',
        'wdbMaxBalance',
        'PCHsL',
        'nKQVj',
        'head',
        'KUkPq',
        'rows',
        'return\x20plinkoRisk',
        'DFXks',
        'wDGPS',
        'QzfcK',
        'zYTyR',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'vrudW',
        'preventDefault',
        'EPSILON',
        '1088784xpVQae',
        'color',
        'ibxFO',
        'olHKP',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        '\x0a\x20\x20\x20\x20losestreak=',
        'change',
        'okmqG',
        'dps',
        '#wdbOpenScript',
        'AwcSr',
        '\x20Balls',
        'BFUBY',
        'lgcnV',
        'key',
        'WgpuS',
        'IIXYh',
        'oBMwx',
        'nXpbs',
        'amount',
        'ofMLI',
        'GUTNF',
        'CIebV',
        'bAqvp',
        'www.',
        'advancedMultiOnLose',
        'cRYtW',
        'cnNrN',
        '0.00',
        'DrHqa',
        'YpLrb',
        'body',
        'tagName',
        'JhLdL',
        '\x0a\x20\x20\x20\x20win=',
        'fDvGp',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'qhkVx',
        'oIUyt',
        'HDJJg',
        'eUaFL',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        '/ching.mp3'
    ];
    _0x20dd = function () {
        return _0x9a1769;
    };
    return _0x20dd();
}
async function showInfo() {
    const _0x18cb11 = _0x56548a, _0x3c6e5a = {
            'WCFfC': function (_0xe271ea, _0x4fe421) {
                return _0xe271ea === _0x4fe421;
            },
            'gCOZH': 'white',
            'MFvel': function (_0x459e38, _0x567ed7) {
                return _0x459e38 < _0x567ed7;
            },
            'reMnk': 'red',
            'KLEOJ': _0x18cb11(0x3cd),
            'xZXPR': function (_0x11d9c4, _0x281f34) {
                return _0x11d9c4 < _0x281f34;
            },
            'nBMlP': function (_0x20dcac, _0x2e196c) {
                return _0x20dcac > _0x2e196c;
            },
            'vcgCS': _0x18cb11(0x118),
            'cRYtW': function (_0x1d75f8, _0x4b6016) {
                return _0x1d75f8 > _0x4b6016;
            },
            'UVzLd': _0x18cb11(0x184),
            'BTdjD': 'wdbBalance',
            'DFXks': _0x18cb11(0x14e),
            'NVASw': _0x18cb11(0x39c),
            'ztCIJ': _0x18cb11(0x2bf),
            'HOMEW': _0x18cb11(0x19c),
            'IIXYh': _0x18cb11(0x327),
            'toaFx': _0x18cb11(0x22e),
            'SjxTF': 'wdbCurrentStreak',
            'dhyrn': _0x18cb11(0x211),
            'UaneU': _0x18cb11(0x37f),
            'dlkUd': 'wdbMaxProfit',
            'OzqAt': function (_0x16eef5, _0x335747) {
                return _0x16eef5 / _0x335747;
            },
            'FtjHG': function (_0x28e647, _0x94a98c) {
                return _0x28e647(_0x94a98c);
            },
            'PCHsL': function (_0x650749, _0xa737bd) {
                return _0x650749 / _0xa737bd;
            },
            'rYHbZ': function (_0x57e745, _0x48990d) {
                return _0x57e745 + _0x48990d;
            },
            'iywAT': function (_0x56178f, _0x11f816) {
                return _0x56178f(_0x11f816);
            },
            'QbNWc': _0x18cb11(0x156),
            'VHogj': 'wdbPercentProfit',
            'gxIiG': function (_0x30fda6, _0x3a6f64) {
                return _0x30fda6 + _0x3a6f64;
            },
            'zFgRm': _0x18cb11(0x1ed),
            'QwhkH': function (_0x4bbdfb, _0xb7c4eb) {
                return _0x4bbdfb !== _0xb7c4eb;
            },
            'cDsMU': 'rangedice',
            'cNSFy': function (_0x41ac00, _0x477ab7) {
                return _0x41ac00 === _0x477ab7;
            },
            'CjkMe': function (_0x12150b, _0x5d0886) {
                return _0x12150b(_0x5d0886);
            },
            'HicqY': function (_0x26edf5, _0x236613) {
                return _0x26edf5(_0x236613);
            },
            'asVwQ': function (_0xe65546, _0x576f43) {
                return _0xe65546 !== _0x576f43;
            },
            'jrTUO': function (_0x114fe3, _0x5754ce) {
                return _0x114fe3 === _0x5754ce;
            },
            'oxazh': _0x18cb11(0x1d0),
            'SPxTb': function (_0x30edf0, _0x7c74c6) {
                return _0x30edf0 === _0x7c74c6;
            },
            'GdHuj': _0x18cb11(0x3fd),
            'bibLw': _0x18cb11(0x295),
            'KEyfh': function (_0x519e63, _0x434355) {
                return _0x519e63 + _0x434355;
            },
            'HPgss': function (_0x3b1be1, _0x33c790) {
                return _0x3b1be1(_0x33c790);
            },
            'GUTNF': function (_0x54a025, _0xb230ff) {
                return _0x54a025 + _0xb230ff;
            },
            'rdWgX': function (_0x515df1, _0x4002a3) {
                return _0x515df1 + _0x4002a3;
            },
            'rNnph': function (_0x1bb8cf, _0x1f92a1) {
                return _0x1bb8cf === _0x1f92a1;
            },
            'wDGPS': _0x18cb11(0x300),
            'mXEAa': _0x18cb11(0x31f),
            'ofMLI': _0x18cb11(0x3db),
            'Dribz': '#wdbHistory',
            'CMevK': function (_0x240b01, _0x493d74) {
                return _0x240b01 + _0x493d74;
            },
            'fFnyD': function (_0x11939c, _0x2e2cc1) {
                return _0x11939c(_0x2e2cc1);
            },
            'hxPST': function (_0x27f47f, _0x355223) {
                return _0x27f47f !== _0x355223;
            },
            'kbcOP': function (_0xf04c65, _0x5d21c9) {
                return _0xf04c65(_0x5d21c9);
            },
            'poqve': function (_0x5f75c5, _0x1f6e7e) {
                return _0x5f75c5(_0x1f6e7e);
            },
            'WZxwF': function (_0x34ca23, _0x6ab5bd) {
                return _0x34ca23(_0x6ab5bd);
            },
            'MrwtH': function (_0x4e4af3, _0x4420df) {
                return _0x4e4af3 === _0x4420df;
            },
            'dSVtL': function (_0x3b49cf, _0x327e9f) {
                return _0x3b49cf > _0x327e9f;
            },
            'sNDKa': _0x18cb11(0x3dc)
        }, _0x24b873 = _0x3c6e5a['WCFfC'](profit, 0x0) ? darkMode ? _0x3c6e5a['gCOZH'] : _0x18cb11(0x3cd) : _0x3c6e5a[_0x18cb11(0x2c5)](profit, 0x0) ? _0x3c6e5a[_0x18cb11(0x1c7)] : _0x18cb11(0x118), _0x2c8980 = currentstreak === 0x0 ? darkMode ? 'white' : _0x3c6e5a[_0x18cb11(0x173)] : _0x3c6e5a[_0x18cb11(0x30f)](currentstreak, 0x0) ? _0x3c6e5a[_0x18cb11(0x1c7)] : _0x18cb11(0x118), _0x2c7bdc = _0x3c6e5a[_0x18cb11(0x37e)](maxwinstreak, 0x0) ? _0x3c6e5a[_0x18cb11(0x302)] : _0x3c6e5a[_0x18cb11(0x173)], _0x791075 = _0x3c6e5a[_0x18cb11(0x2a4)](maxlosestreak, 0x0) ? _0x3c6e5a[_0x18cb11(0x1c7)] : _0x3c6e5a[_0x18cb11(0x173)];
    document['getElementById'](_0x18cb11(0x2fb))[_0x18cb11(0x16f)][_0x18cb11(0x28b)] = _0x2c7bdc, document[_0x18cb11(0x157)](_0x3c6e5a['UVzLd'])[_0x18cb11(0x16f)][_0x18cb11(0x28b)] = _0x791075, document[_0x18cb11(0x157)]('wdbWagered')[_0x18cb11(0x265)] = wagered[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x3bc)])['innerText'] = balance[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x282)])[_0x18cb11(0x16f)][_0x18cb11(0x28b)] = _0x24b873, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x282)])[_0x18cb11(0x265)] = profit[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a['NVASw'])['innerText'] = maxBetAmount[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x244)])[_0x18cb11(0x265)] = maxLosseAmount[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a['HOMEW'])[_0x18cb11(0x265)] = bets, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x29a)])['innerText'] = wins, document['getElementById'](_0x3c6e5a[_0x18cb11(0x1ea)])[_0x18cb11(0x265)] = losses, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x2be)])[_0x18cb11(0x16f)]['color'] = _0x2c8980, document['getElementById'](_0x3c6e5a[_0x18cb11(0x2be)])[_0x18cb11(0x265)] = currentstreak, document['getElementById']('wdbHighWinStreak')[_0x18cb11(0x265)] = maxwinstreak, document['getElementById'](_0x3c6e5a[_0x18cb11(0x2db)])[_0x18cb11(0x265)] = maxlosestreak, document['getElementById'](_0x3c6e5a[_0x18cb11(0x20c)])[_0x18cb11(0x265)] = minbalance[_0x18cb11(0x1b2)](decimalAmountView), document['getElementById'](_0x18cb11(0x27b))[_0x18cb11(0x265)] = maxbalance[_0x18cb11(0x1b2)](decimalAmountView), document['getElementById'](_0x3c6e5a[_0x18cb11(0x3dd)])['innerText'] = minprofit[_0x18cb11(0x1b2)](decimalAmountView), document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x3b3)])['innerText'] = maxprofit[_0x18cb11(0x1b2)](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x3c6e5a[_0x18cb11(0x2fa)](Math['round']((percentWagered + Number['EPSILON']) * 0x2710), 0x2710), percentWagered = _0x3c6e5a[_0x18cb11(0x1fa)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x18cb11(0x157)]('wdbPercentWagered')[_0x18cb11(0x265)] = percentWagered, percentProfit = _0x3c6e5a[_0x18cb11(0x2fa)](profit, startBalance) * 0x64, percentProfit = _0x3c6e5a[_0x18cb11(0x27c)](Math[_0x18cb11(0x3bf)](_0x3c6e5a[_0x18cb11(0x1f3)](percentProfit, Number[_0x18cb11(0x289)]) * 0x2710), 0x2710), percentProfit = _0x3c6e5a[_0x18cb11(0x16b)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x317)])['style'][_0x18cb11(0x28b)] = _0x24b873, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x224)])['innerText'] = percentProfit;
    if (!stopHistory) {
        const _0x447dbb = game === _0x18cb11(0x3ac) ? lastBet[_0x18cb11(0x3d2)] ? '>' : '<' : '>', _0x49096d = lastBet[_0x18cb11(0x3d2)] ? _0x18cb11(0x2d2) + bets + _0x18cb11(0x3c1) : '<input\x20id=\x22bethigh' + bets + _0x18cb11(0x26c), _0x7a74c5 = '' + (havePlinkoRows ? _0x3c6e5a['gxIiG'](plinkoRow, _0x3c6e5a[_0x18cb11(0x3c4)]) : '') + plinkoRisk, _0x42c878 = _0x18cb11(0x277) + bets + _0x18cb11(0x251) + _0x3c6e5a[_0x18cb11(0x1fa)](Number, lastBet[_0x18cb11(0x29d)])['toFixed'](decimalAmountView) + _0x18cb11(0x251) + (_0x3c6e5a[_0x18cb11(0x12f)](game, _0x3c6e5a[_0x18cb11(0x2df)]) ? _0x49096d : betSide) + _0x18cb11(0x251) + (_0x3c6e5a[_0x18cb11(0x38f)](game, _0x18cb11(0x1d0)) ? _0x7a74c5 : _0x3c6e5a[_0x18cb11(0x24c)](_0x3c6e5a[_0x18cb11(0x16b)](Number, lastBet[_0x18cb11(0x1a2)])[_0x18cb11(0x1b2)](decimalChanceView), '%')) + _0x18cb11(0x251) + _0x3c6e5a[_0x18cb11(0x1c1)](Number, lastBet[_0x18cb11(0x3a4)])[_0x18cb11(0x1b2)](decimalChanceView) + _0x18cb11(0x1c4) + _0x3c6e5a['HicqY'](Number, lastBet[_0x18cb11(0x18c)])[_0x18cb11(0x1b2)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x3c6e5a['asVwQ'](game, _0x3c6e5a[_0x18cb11(0x2df)]) ? _0x3c6e5a[_0x18cb11(0x1d4)](game, _0x3c6e5a[_0x18cb11(0x3c2)]) ? _0x7a74c5 : _0x3c6e5a[_0x18cb11(0x319)](game, _0x3c6e5a['GdHuj']) ? _0x3c6e5a[_0x18cb11(0x1f3)](_0x3c6e5a['HicqY'](Number, lastBet[_0x18cb11(0x403)])[_0x18cb11(0x1b2)](0x0), _0x3c6e5a['bibLw']) : _0x3c6e5a[_0x18cb11(0x2cf)](_0x447dbb, _0x3c6e5a[_0x18cb11(0x1e0)](Number, lastBet[_0x18cb11(0x403)])[_0x18cb11(0x1b2)](decimalTargetResult)) : _0x3c6e5a['GUTNF'](_0x3c6e5a[_0x18cb11(0x2cf)](target1 + '|' + target2, target3 ? _0x3c6e5a[_0x18cb11(0x307)]('|', target3) : ''), target4 ? _0x3c6e5a[_0x18cb11(0x29f)]('|', target4) : '')) + _0x18cb11(0x251) + (_0x3c6e5a[_0x18cb11(0x24b)](game, _0x3c6e5a['GdHuj']) ? _0x3c6e5a[_0x18cb11(0x29f)](_0x3c6e5a[_0x18cb11(0x1e0)](Number, result)['toFixed'](0x0), _0x3c6e5a[_0x18cb11(0x283)]) : _0x3c6e5a[_0x18cb11(0x1e0)](Number, result)[_0x18cb11(0x1b2)](decimalTargetResult)) + _0x18cb11(0x251) + lastBet[_0x18cb11(0x38c)] + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet['id'] + _0x18cb11(0x318), _0x9755ad = document[_0x18cb11(0x18d)]('tr');
        _0x9755ad['style'][_0x18cb11(0x39f)] = win ? _0x3c6e5a['mXEAa'] : '#ffc0cb', _0x9755ad[_0x18cb11(0x340)] = _0x42c878, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x29e)])[_0x18cb11(0x33d)](_0x9755ad, document[_0x18cb11(0x157)](_0x3c6e5a[_0x18cb11(0x29e)])[_0x18cb11(0x115)][0x0]);
        const _0x4bc813 = document[_0x18cb11(0x270)](_0x3c6e5a['Dribz'])[_0x18cb11(0x280)];
        if (_0x3c6e5a[_0x18cb11(0x2a4)](_0x4bc813['length'], maxRows))
            document['querySelector'](_0x3c6e5a[_0x18cb11(0x3ed)])[_0x18cb11(0x14f)][_0x18cb11(0x365)]();
    }
    const _0x40177a = '' + (havePlinkoRows ? _0x3c6e5a[_0x18cb11(0x194)](plinkoRow, _0x3c6e5a[_0x18cb11(0x3c4)]) : '') + plinkoRisk;
    return fullLogs[_0x18cb11(0x3f7)]({
        'game': game,
        'bets': bets,
        'amount': _0x3c6e5a[_0x18cb11(0x161)](Number, lastBet[_0x18cb11(0x29d)])[_0x18cb11(0x1b2)](decimalAmountView),
        'bethigh': game !== _0x3c6e5a[_0x18cb11(0x2df)] ? lastBet[_0x18cb11(0x3d2)] : null,
        'chance': _0x3c6e5a[_0x18cb11(0x202)](game, _0x3c6e5a[_0x18cb11(0x2df)]) ? _0x3c6e5a[_0x18cb11(0x37b)](Number, lastBet[_0x18cb11(0x1a2)])[_0x18cb11(0x1b2)](decimalChanceView) : lastBet[_0x18cb11(0x1a2)],
        'target': game !== _0x3c6e5a[_0x18cb11(0x2df)] ? _0x3c6e5a[_0x18cb11(0x24b)](game, _0x18cb11(0x1d0)) ? _0x40177a : lastBet[_0x18cb11(0x403)] : null,
        'roll': _0x3c6e5a[_0x18cb11(0x1e0)](Number, lastBet[_0x18cb11(0x3a4)])['toFixed'](decimalChanceView),
        'result': _0x3c6e5a[_0x18cb11(0x35d)](Number, result)[_0x18cb11(0x1b2)](decimalTargetResult),
        'profit': _0x3c6e5a[_0x18cb11(0x2d1)](Number, lastBet[_0x18cb11(0x18c)])[_0x18cb11(0x1b2)](decimalAmountView),
        'nonce': lastBet[_0x18cb11(0x38c)],
        'id': lastBet['id'],
        'chance1': _0x3c6e5a[_0x18cb11(0x319)](game, _0x3c6e5a['cDsMU']) ? lastBet[_0x18cb11(0x3df)] : null,
        'chance2': _0x3c6e5a[_0x18cb11(0x24b)](game, _0x18cb11(0x364)) ? lastBet[_0x18cb11(0x18e)] : null,
        'chance3': _0x3c6e5a[_0x18cb11(0x1d4)](game, _0x3c6e5a['cDsMU']) ? lastBet[_0x18cb11(0x26b)] : null,
        'chance4': _0x3c6e5a[_0x18cb11(0x319)](game, _0x3c6e5a['cDsMU']) ? lastBet[_0x18cb11(0x1d9)] : null,
        'betSide': _0x3c6e5a[_0x18cb11(0x1ca)](game, _0x3c6e5a[_0x18cb11(0x2df)]) ? lastBet['betSide'] : null
    }), _0x3c6e5a[_0x18cb11(0x1ee)](fullLogs[_0x18cb11(0x1b1)], 0x2710) && fullLogs[_0x18cb11(0x1ff)](), !stopChart && chart['updateChart'](betsChart, profitChart, color), _0x3c6e5a[_0x18cb11(0x20a)];
}
async function updateStats() {
    const _0x1ce827 = _0x56548a, _0x160d71 = {
            'QreUF': _0x1ce827(0x3a2),
            'fpAyH': _0x1ce827(0x3cd),
            'cLQct': function (_0x122a51, _0x1665fc) {
                return _0x122a51 === _0x1665fc;
            },
            'eAwUI': function (_0x3e6493, _0x248b06) {
                return _0x3e6493 < _0x248b06;
            },
            'mmOTF': 'red',
            'jTePE': _0x1ce827(0x118),
            'qRzoj': function (_0x13f5ac, _0x1ab824) {
                return _0x13f5ac > _0x1ab824;
            },
            'dWVXk': _0x1ce827(0x2fb),
            'YDGQw': 'wdbHighLoseStreak',
            'amxNt': _0x1ce827(0x1d8),
            'EMOxa': 'wdbProfit',
            'BqPiY': _0x1ce827(0x39c),
            'KViAn': _0x1ce827(0x2bf),
            'hkSLe': _0x1ce827(0x19c),
            'aUAYo': 'wdbWins',
            'cgvWb': _0x1ce827(0x22e),
            'uFwyY': _0x1ce827(0x334),
            'okmqG': _0x1ce827(0x211),
            'DUwkc': 'wdbMinProfit',
            'wjjEV': _0x1ce827(0x3b7),
            'syylG': function (_0x4ec53a, _0x21969f) {
                return _0x4ec53a / _0x21969f;
            },
            'QcMxM': function (_0x30c82e, _0x851908) {
                return _0x30c82e * _0x851908;
            },
            'ZKXNI': function (_0x4b657f, _0x166800) {
                return _0x4b657f + _0x166800;
            },
            'VwQBX': function (_0x39df1c, _0x55ea9f) {
                return _0x39df1c(_0x55ea9f);
            },
            'fERGn': _0x1ce827(0x2f9),
            'KRIba': function (_0x20a6b9, _0x3ab77d) {
                return _0x20a6b9 / _0x3ab77d;
            },
            'SApco': function (_0x45425b, _0x56a498) {
                return _0x45425b * _0x56a498;
            },
            'YNWww': 'wdbWrapPercentProfit',
            'SKFfe': _0x1ce827(0x35b),
            'Swmsa': _0x1ce827(0x32a)
        }, _0x585097 = profit === 0x0 ? darkMode ? _0x160d71[_0x1ce827(0x3f6)] : _0x160d71[_0x1ce827(0x2ba)] : profit < 0x0 ? _0x1ce827(0x3c6) : _0x1ce827(0x118), _0x42b224 = _0x160d71['cLQct'](currentstreak, 0x0) ? darkMode ? _0x160d71[_0x1ce827(0x3f6)] : _0x1ce827(0x3cd) : _0x160d71['eAwUI'](currentstreak, 0x0) ? _0x160d71[_0x1ce827(0x38a)] : _0x1ce827(0x118), _0x252d02 = maxwinstreak > 0x0 ? _0x160d71[_0x1ce827(0x242)] : darkMode ? _0x160d71['QreUF'] : _0x160d71[_0x1ce827(0x2ba)], _0x499b03 = _0x160d71[_0x1ce827(0x1a6)](maxlosestreak, 0x0) ? _0x160d71[_0x1ce827(0x38a)] : darkMode ? _0x1ce827(0x3a2) : 'black';
    return document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x146)])[_0x1ce827(0x16f)][_0x1ce827(0x28b)] = _0x252d02, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x40f)])[_0x1ce827(0x16f)][_0x1ce827(0x28b)] = _0x499b03, document[_0x1ce827(0x157)](_0x1ce827(0x186))[_0x1ce827(0x265)] = wagered[_0x1ce827(0x1b2)](decimalAmountView), document['getElementById'](_0x160d71[_0x1ce827(0x357)])[_0x1ce827(0x265)] = balance[_0x1ce827(0x1b2)](decimalAmountView), document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x21e)])['style'][_0x1ce827(0x28b)] = _0x585097, document[_0x1ce827(0x157)](_0x160d71['EMOxa'])[_0x1ce827(0x265)] = profit[_0x1ce827(0x1b2)](decimalAmountView), document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x3e5)])[_0x1ce827(0x265)] = maxBetAmount[_0x1ce827(0x1b2)](decimalAmountView), document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x26e)])[_0x1ce827(0x265)] = maxLosseAmount[_0x1ce827(0x1b2)](decimalAmountView), document['getElementById'](_0x160d71[_0x1ce827(0x174)])[_0x1ce827(0x265)] = bets, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x12b)])[_0x1ce827(0x265)] = wins, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x215)])[_0x1ce827(0x265)] = losses, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x31a)])[_0x1ce827(0x16f)][_0x1ce827(0x28b)] = _0x42b224, document[_0x1ce827(0x157)](_0x1ce827(0x334))['innerText'] = currentstreak, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x146)])[_0x1ce827(0x265)] = maxwinstreak, document[_0x1ce827(0x157)](_0x160d71['YDGQw'])[_0x1ce827(0x265)] = maxlosestreak, document['getElementById'](_0x160d71[_0x1ce827(0x291)])[_0x1ce827(0x265)] = minbalance[_0x1ce827(0x1b2)](decimalAmountView), document[_0x1ce827(0x157)](_0x1ce827(0x27b))[_0x1ce827(0x265)] = maxbalance[_0x1ce827(0x1b2)](decimalAmountView), document[_0x1ce827(0x157)](_0x160d71['DUwkc'])[_0x1ce827(0x265)] = minprofit['toFixed'](decimalAmountView), document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x208)])[_0x1ce827(0x265)] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x160d71[_0x1ce827(0x359)](wagered, startBalance), percentWagered = _0x160d71['syylG'](Math[_0x1ce827(0x3bf)](_0x160d71['QcMxM'](_0x160d71[_0x1ce827(0x1e4)](percentWagered, Number['EPSILON']), 0x64)), 0x64), percentWagered = _0x160d71[_0x1ce827(0x25c)](isNaN, percentWagered) || !isFinite(percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x160d71['fERGn'])[_0x1ce827(0x265)] = percentWagered, percentProfit = _0x160d71[_0x1ce827(0x361)](_0x160d71['KRIba'](profit, startBalance), 0x64), percentProfit = _0x160d71[_0x1ce827(0x359)](Math[_0x1ce827(0x3bf)](_0x160d71[_0x1ce827(0x126)](percentProfit + Number[_0x1ce827(0x289)], 0x64)), 0x64), percentProfit = isNaN(percentProfit) || !_0x160d71[_0x1ce827(0x25c)](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x1c0)])[_0x1ce827(0x16f)][_0x1ce827(0x28b)] = _0x585097, document[_0x1ce827(0x157)](_0x160d71[_0x1ce827(0x30a)])[_0x1ce827(0x265)] = percentProfit, _0x160d71['Swmsa'];
}
function log(_0x2acf49) {
    const _0x2dda25 = _0x56548a, _0x2eb052 = {
            'eGqED': _0x2dda25(0x3a2),
            'jfXml': 'black',
            'cQUkE': function (_0x4cca05, _0x1f8754) {
                return _0x4cca05 > _0x1f8754;
            }
        }, _0x3fe0cf = document[_0x2dda25(0x157)](_0x2dda25(0x148)), _0x3b58f9 = document[_0x2dda25(0x18d)]('li');
    _0x3b58f9[_0x2dda25(0x265)] = _0x2acf49, _0x3b58f9['style'][_0x2dda25(0x28b)] = darkMode ? _0x2eb052[_0x2dda25(0x117)] : _0x2eb052[_0x2dda25(0x18f)], _0x3fe0cf['insertBefore'](_0x3b58f9, _0x3fe0cf['firstChild']), _0x2eb052['cQUkE'](_0x3fe0cf['children'][_0x2dda25(0x1b1)], maxRows) && _0x3fe0cf[_0x2dda25(0x1ec)](_0x3fe0cf['lastChild']);
}
function updateSpeed() {
    const _0x3aac29 = _0x56548a, _0x14180b = {
            'qVTeb': function (_0x310a4e, _0x36ee36) {
                return _0x310a4e < _0x36ee36;
            },
            'DswNB': _0x3aac29(0x396),
            'xLKEH': '0.00',
            'RIATy': function (_0xd8319c, _0x5d0826) {
                return _0xd8319c / _0x5d0826;
            }
        };
    if (_0x14180b['qVTeb'](speedHistory[_0x3aac29(0x1b1)], 0x2)) {
        document[_0x3aac29(0x157)](_0x14180b['DswNB'])[_0x3aac29(0x265)] = _0x14180b[_0x3aac29(0x3ea)];
        return;
    }
    const _0x5cd0d0 = Date['now'](), _0x5525a9 = 0x2710;
    speedHistory = speedHistory[_0x3aac29(0x384)](_0x33703e => _0x5cd0d0 - _0x33703e <= _0x5525a9);
    if (speedHistory[_0x3aac29(0x1b1)] < 0x2) {
        document[_0x3aac29(0x157)]('wdbSpeed')[_0x3aac29(0x265)] = _0x14180b[_0x3aac29(0x3ea)];
        return;
    }
    const _0x487350 = speedHistory[0x0], _0x20ce4e = _0x14180b['RIATy'](_0x5cd0d0 - _0x487350, 0x3e8), _0x7c58fa = _0x14180b[_0x3aac29(0x143)](speedHistory[_0x3aac29(0x1b1)], _0x20ce4e);
    document[_0x3aac29(0x157)](_0x14180b[_0x3aac29(0x233)])['innerText'] = _0x7c58fa[_0x3aac29(0x1b2)](0x2);
}
function updateTimer() {
    const _0x3574db = _0x56548a, _0x3f8351 = {
            'zTqkZ': function (_0x490345, _0x3bf91a) {
                return _0x490345 / _0x3bf91a;
            },
            'tcOKE': function (_0x26988e, _0x336d44) {
                return _0x26988e * _0x336d44;
            },
            'gUgfz': function (_0x33579c, _0x28f871) {
                return _0x33579c * _0x28f871;
            },
            'GHklI': function (_0x453063, _0x302b60) {
                return _0x453063 / _0x302b60;
            },
            'cOeBb': function (_0x510fb1, _0x337849) {
                return _0x510fb1 % _0x337849;
            }
        };
    elapsedTime++;
    const _0x1dbeb0 = Math[_0x3574db(0x240)](_0x3f8351[_0x3574db(0x402)](elapsedTime, _0x3f8351[_0x3574db(0x36b)](0x18, 0x3c) * 0x3c)), _0x1aaf24 = Math['floor'](_0x3f8351[_0x3574db(0x402)](elapsedTime % _0x3f8351['gUgfz'](_0x3f8351[_0x3574db(0x36b)](0x18, 0x3c), 0x3c), _0x3f8351[_0x3574db(0x36b)](0x3c, 0x3c))), _0x2fa56 = Math[_0x3574db(0x240)](_0x3f8351[_0x3574db(0x1c3)](_0x3f8351['cOeBb'](elapsedTime, 0x3c * 0x3c), 0x3c)), _0x1f881d = _0x3f8351['cOeBb'](elapsedTime, 0x3c);
    document['getElementById'](_0x3574db(0x19b))[_0x3574db(0x265)] = _0x1dbeb0 + ':' + _0x1aaf24 + ':' + _0x2fa56 + ':' + _0x1f881d;
}
async function start() {
    const _0x578736 = _0x56548a, _0x6e6b50 = {
            'nRHRx': function (_0x3db292, _0x53c093) {
                return _0x3db292 === _0x53c093;
            },
            'bKMIF': _0x578736(0x364),
            'GGcfB': _0x578736(0x2e5),
            'CinGw': _0x578736(0x19b),
            'sKegk': _0x578736(0x37d),
            'HgQPG': _0x578736(0x145),
            'brMaB': _0x578736(0x2e9),
            'emoHU': _0x578736(0x1ba),
            'oHiQA': _0x578736(0x250),
            'nHzTF': _0x578736(0x16c),
            'eXXgD': function (_0x2f9e5a, _0x2fcbc3) {
                return _0x2f9e5a(_0x2fcbc3);
            },
            'oBazU': function (_0x533b50, _0x110cfc) {
                return _0x533b50(_0x110cfc);
            },
            'LkPeI': function (_0x1d7d14, _0x41328b, _0x4bbbd3) {
                return _0x1d7d14(_0x41328b, _0x4bbbd3);
            },
            'IOmXj': _0x578736(0x125),
            'pTvYA': _0x578736(0x2bc),
            'sRHTC': _0x578736(0x316),
            'BYAeU': '$1=$1-$2\x20',
            'ADocH': _0x578736(0x2d3),
            'OhLqy': '$1=$1/$2\x20',
            'OcZUx': _0x578736(0x179),
            'YBmCR': _0x578736(0x347),
            'KUkPq': function (_0x3c0026, _0x43eb04) {
                return _0x3c0026 === _0x43eb04;
            },
            'TGeXz': _0x578736(0x21a),
            'dNHZU': function (_0x314a79, _0x1dea6a) {
                return _0x314a79(_0x1dea6a);
            },
            'OwfQA': 'advancedBaseBet',
            'VQpZS': 'advancedChance',
            'zdbXs': _0x578736(0x1a3)
        };
    if (_0x6e6b50[_0x578736(0x2c4)](game, _0x6e6b50[_0x578736(0x3d9)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x6e6b50[_0x578736(0x3e4)];
        const _0x374fb5 = _0x578736(0x1b8) + chance1 + _0x578736(0x1b3) + chance2 + _0x578736(0x1ef) + chance3 + _0x578736(0x1ac) + chance4 + _0x578736(0x346) + betSide + '\x22';
        fengari[_0x578736(0x393)](_0x374fb5)();
    }
    try {
        if (!run) {
            document[_0x578736(0x157)](_0x6e6b50['CinGw'])[_0x578736(0x265)] = _0x6e6b50[_0x578736(0x1c6)], document[_0x578736(0x157)](_0x6e6b50[_0x578736(0x12a)])['disabled'] = !![], document[_0x578736(0x157)](_0x6e6b50[_0x578736(0x1f0)])[_0x578736(0x15b)] = !![], document[_0x578736(0x157)](_0x6e6b50['emoHU'])[_0x578736(0x15b)] = !![], document[_0x578736(0x157)]('wdbResumeButton')[_0x578736(0x15b)] = !![], document[_0x578736(0x157)](_0x6e6b50['oHiQA'])['disabled'] = !![], document[_0x578736(0x157)](_0x578736(0x3f2))[_0x578736(0x15b)] = !![], document[_0x578736(0x1c5)](_0x6e6b50[_0x578736(0x136)])[_0x578736(0x1da)](_0x4a9fe9 => _0x4a9fe9[_0x578736(0x15b)] = !![]), document[_0x578736(0x1c5)](_0x578736(0x293))[_0x578736(0x1da)](_0x56792a => _0x56792a[_0x578736(0x15b)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x6e6b50[_0x578736(0x182)](clearInterval, timerInterval), _0x6e6b50[_0x578736(0x1a1)](clearInterval, speedUpdateInterval), timerInterval = setInterval(updateTimer, 0x3e8), speedUpdateInterval = _0x6e6b50[_0x578736(0x33e)](setInterval, updateSpeed, 0x1f4), fengari[_0x578736(0x393)]('scriptname\x20=\x20\x22\x22')(), fengari[_0x578736(0x393)](_0x578736(0x383))();
            if (mode === _0x6e6b50[_0x578736(0x3a9)]) {
                const _0x592c78 = _0x578736(0x210)[_0x578736(0x187)]('|');
                let _0x165adb = 0x0;
                while (!![]) {
                    switch (_0x592c78[_0x165adb++]) {
                    case '0':
                        document[_0x578736(0x157)](_0x6e6b50['pTvYA'])[_0x578736(0x265)] = scriptname ? 'Script\x20Name:\x20' + scriptname : '';
                        continue;
                    case '1':
                        diceScript = luaEditor[_0x578736(0x19d)]();
                        continue;
                    case '2':
                        fengari[_0x578736(0x393)](diceScript)();
                        continue;
                    case '3':
                        scriptname = fengari[_0x578736(0x393)](_0x578736(0x11b))();
                        continue;
                    case '4':
                        diceScript = diceScript['replace'](/!=/g, '~=')[_0x578736(0x23e)](/!/g, 'not\x20')[_0x578736(0x23e)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x6e6b50[_0x578736(0x38d)])[_0x578736(0x23e)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x6e6b50[_0x578736(0x26d)])[_0x578736(0x23e)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x6e6b50[_0x578736(0x1e8)])['replace'](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x6e6b50[_0x578736(0x16d)]);
                        continue;
                    }
                    break;
                }
            } else {
                if (mode === 'js') {
                    const _0xe780b5 = document['getElementById'](_0x6e6b50[_0x578736(0x229)]);
                    if (_0xe780b5)
                        _0xe780b5['remove']();
                    diceScript = jsEditor[_0x578736(0x19d)]();
                    const _0x2b76ff = document[_0x578736(0x18d)](_0x6e6b50[_0x578736(0x1bc)]);
                    _0x2b76ff['id'] = _0x6e6b50[_0x578736(0x229)], _0x2b76ff[_0x578736(0x340)] = diceScript, document[_0x578736(0x27e)][_0x578736(0x15c)](_0x2b76ff);
                } else
                    _0x6e6b50[_0x578736(0x27f)](mode, _0x6e6b50[_0x578736(0x2bb)]) && (basebet = _0x6e6b50[_0x578736(0x3d7)](Number, document[_0x578736(0x157)](_0x6e6b50[_0x578736(0x40b)])[_0x578736(0x279)]), nextbet = basebet, chance = _0x6e6b50[_0x578736(0x3d7)](Number, document[_0x578736(0x157)](_0x6e6b50[_0x578736(0x25d)])['value']), bethigh = document[_0x578736(0x270)](_0x6e6b50[_0x578736(0x1f2)])[_0x578736(0x138)]);
            }
            if (run)
                return playBet();
        }
    } catch (_0x2b39c8) {
        stop(), _0x6e6b50[_0x578736(0x182)](log, _0x2b39c8);
    }
}
function stop() {
    const _0x185d60 = _0x56548a, _0x303dfa = {
            'nCngt': function (_0x23f7d1, _0x44649c) {
                return _0x23f7d1(_0x44649c);
            },
            'mwLSm': _0x185d60(0x145),
            'FWpsg': 'wdbMenuMode',
            'DWYXv': _0x185d60(0x1ba),
            'BmqJW': 'wdbResumeButton',
            'vaOwS': _0x185d60(0x3f2),
            'MqZlq': _0x185d60(0x1d5)
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x303dfa[_0x185d60(0x243)](clearInterval, timerInterval), _0x303dfa['nCngt'](clearInterval, speedUpdateInterval);
    const _0x1c7ebb = [
        _0x303dfa['mwLSm'],
        _0x303dfa[_0x185d60(0x241)],
        _0x303dfa['DWYXv'],
        _0x303dfa[_0x185d60(0x3de)],
        'wdbOpenLUAScript',
        _0x303dfa['vaOwS'],
        _0x303dfa['MqZlq']
    ];
    _0x1c7ebb[_0x185d60(0x1da)](_0x522bfb => {
        const _0x3c7ec7 = _0x185d60;
        document[_0x3c7ec7(0x157)](_0x522bfb)[_0x3c7ec7(0x15b)] = ![];
    }), document[_0x185d60(0x1c5)](_0x185d60(0x370))[_0x185d60(0x1da)](_0x24b9d3 => _0x24b9d3[_0x185d60(0x15b)] = ![]);
}
async function resume(_0x2498d0) {
    const _0x4f412c = _0x56548a, _0x5a09c1 = {
            'Snuen': _0x4f412c(0x2e9),
            'lrUJZ': _0x4f412c(0x1ba),
            'rBiQQ': _0x4f412c(0x250),
            'SjAfN': _0x4f412c(0x3f2),
            'CIebV': _0x4f412c(0x370),
            'vXoYL': function (_0x54434a, _0x4003d7) {
                return _0x54434a(_0x4003d7);
            },
            'JFRvo': _0x4f412c(0x14b),
            'GtbAb': function (_0x424dbc, _0x32bea4, _0x5b4311) {
                return _0x424dbc(_0x32bea4, _0x5b4311);
            },
            'smgGN': function (_0x4912f3) {
                return _0x4912f3();
            }
        };
    if (!run) {
        const _0xebf534 = [
            _0x4f412c(0x145),
            _0x5a09c1[_0x4f412c(0x37a)],
            _0x5a09c1[_0x4f412c(0x1d6)],
            _0x4f412c(0x262),
            _0x5a09c1[_0x4f412c(0x2ff)],
            _0x5a09c1['SjAfN']
        ];
        return _0xebf534[_0x4f412c(0x1da)](_0x36ef6b => {
            const _0x4099bd = _0x4f412c;
            document[_0x4099bd(0x157)](_0x36ef6b)[_0x4099bd(0x15b)] = !![];
        }), document[_0x4f412c(0x1c5)](_0x5a09c1[_0x4f412c(0x2a0)])['forEach'](_0x1ad935 => _0x1ad935[_0x4f412c(0x15b)] = !![]), !_0x2498d0 && (_0x5a09c1[_0x4f412c(0x1a5)](log, _0x5a09c1[_0x4f412c(0x409)]), await new Promise(_0x2b557c => setTimeout(_0x2b557c, 0x1388))), run = !![], sOW = ![], timerInterval = setInterval(updateTimer, 0x3e8), speedUpdateInterval = _0x5a09c1[_0x4f412c(0x259)](setInterval, updateSpeed, 0x1f4), _0x5a09c1[_0x4f412c(0x258)](playBet);
    }
}
function stopOnWin() {
    const _0x27d257 = _0x56548a;
    sOW = !![];
    if (run)
        document[_0x27d257(0x157)](_0x27d257(0x1d5))[_0x27d257(0x15b)] = !![];
}
async function playBet() {
    const _0x1e415d = _0x56548a, _0xe4a2b3 = {
            'qaLAC': function (_0x117e87, _0x37aa65) {
                return _0x117e87 === _0x37aa65;
            },
            'DEvJZ': _0x1e415d(0x125),
            'OXKhg': _0x1e415d(0x3e1),
            'DQCql': _0x1e415d(0x18b),
            'aKWQg': _0x1e415d(0x362),
            'KOGUb': 'return\x20chance4',
            'MeugZ': _0x1e415d(0x159),
            'AbhKX': _0x1e415d(0x3ee),
            'EzYDF': _0x1e415d(0x14c),
            'umMfW': _0x1e415d(0x390),
            'doKwM': function (_0x36c2ff, _0x266d4d) {
                return _0x36c2ff(_0x266d4d);
            },
            'lrCrz': function (_0x1edd6c, _0x2eceda) {
                return _0x1edd6c !== _0x2eceda;
            },
            'MFZeV': _0x1e415d(0x364),
            'pHgOS': function (_0x4e5059, _0x38fa33) {
                return _0x4e5059 === _0x38fa33;
            },
            'uwCLN': 'plinko',
            'vLdlJ': function (_0x2fe53c, _0x21dcf6) {
                return _0x2fe53c + _0x21dcf6;
            },
            'ndkFD': '\x20|\x20',
            'WCexb': function (_0x2c1684, _0x4bd4c3) {
                return _0x2c1684 === _0x4bd4c3;
            },
            'bhnWy': _0x1e415d(0x3ac),
            'jmHez': _0x1e415d(0x34d),
            'QzfcK': _0x1e415d(0x1c8),
            'LwrMX': function (_0x2d0bc2, _0x31d47e) {
                return _0x2d0bc2 + _0x31d47e;
            },
            'eUaFL': function (_0x34b4fc) {
                return _0x34b4fc();
            }
        };
    try {
        if (_0xe4a2b3[_0x1e415d(0x309)](mode, _0xe4a2b3[_0x1e415d(0x32b)])) {
            const _0x2c0236 = _0xe4a2b3['OXKhg'][_0x1e415d(0x187)]('|');
            let _0x48bdb0 = 0x0;
            while (!![]) {
                switch (_0x2c0236[_0x48bdb0++]) {
                case '0':
                    chance3 = fengari['load'](_0xe4a2b3['DQCql'])();
                    continue;
                case '1':
                    nextbet = fengari[_0x1e415d(0x393)](_0xe4a2b3[_0x1e415d(0x160)])();
                    continue;
                case '2':
                    chance = fengari[_0x1e415d(0x393)](_0x1e415d(0x1d3))();
                    continue;
                case '3':
                    chance4 = fengari[_0x1e415d(0x393)](_0xe4a2b3[_0x1e415d(0x264)])();
                    continue;
                case '4':
                    betSide = fengari['load'](_0xe4a2b3[_0x1e415d(0x2e7)])();
                    continue;
                case '5':
                    bethigh = fengari[_0x1e415d(0x393)](_0xe4a2b3[_0x1e415d(0x31d)])();
                    continue;
                case '6':
                    chance2 = fengari[_0x1e415d(0x393)](_0xe4a2b3[_0x1e415d(0x310)])();
                    continue;
                case '7':
                    chance1 = fengari[_0x1e415d(0x393)](_0xe4a2b3[_0x1e415d(0x3ec)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0xe4a2b3[_0x1e415d(0x3b1)](Number, nextbet), chance = Number(chance), previousbet = nextbet, lastBet = {
            ...lastBet,
            'amount': nextbet,
            'Amount': nextbet,
            'chance': chance,
            'Chance': chance,
            'bethigh': bethigh,
            'chance1': chance1,
            'chance2': chance2,
            'chance3': chance3,
            'chance4': chance4,
            'betSide': betSide,
            'chance1': chance1,
            'chance2': chance2,
            'chance3': chance3,
            'chance4': chance4,
            'BetSide': betSide
        };
        if (!stopLog) {
            const _0x1a5c73 = _0xe4a2b3[_0x1e415d(0x3b1)](Number, lastBet[_0x1e415d(0x29d)])[_0x1e415d(0x1b2)](decimalAmountView), _0x3f8b58 = Number(lastBet['chance'])[_0x1e415d(0x1b2)](decimalChanceView), _0x9dcf30 = _0xe4a2b3['lrCrz'](game, _0xe4a2b3['MFZeV']) ? _0xe4a2b3[_0x1e415d(0x34e)](game, _0xe4a2b3[_0x1e415d(0x2b6)]) ? _0x1e415d(0x2b5) + _0x1a5c73 + '\x20at\x20' + (havePlinkoRows ? _0xe4a2b3['vLdlJ'](plinkoRow, _0xe4a2b3[_0x1e415d(0x21d)]) : '') + plinkoRisk + '\x20to\x20win' : _0x1e415d(0x2b5) + _0x1a5c73 + _0x1e415d(0x17c) + _0x3f8b58 + '%\x20chance\x20to\x20win,\x20' + (_0xe4a2b3[_0x1e415d(0x114)](game, _0xe4a2b3[_0x1e415d(0x133)]) ? bethigh ? _0xe4a2b3[_0x1e415d(0x188)] : _0xe4a2b3[_0x1e415d(0x284)] : _0xe4a2b3['jmHez']) : _0x1e415d(0x2b5) + _0x1a5c73 + '\x20at\x20' + chance1 + '|' + chance2 + (chance3 ? _0xe4a2b3[_0x1e415d(0x371)]('|', chance3) : '') + (chance4 ? '|' + chance4 : '') + _0x1e415d(0x3d0) + betSide;
            log(_0x9dcf30);
        }
        if (run)
            return _0xe4a2b3[_0x1e415d(0x2b2)](sendBet);
    } catch (_0x57dd99) {
        _0xe4a2b3[_0x1e415d(0x2b2)](stop), _0xe4a2b3[_0x1e415d(0x3b1)](log, _0x57dd99);
    }
}
function resetall() {
    const _0x9c4497 = _0x56548a, _0x537221 = {
            'XjJjo': _0x9c4497(0x396),
            'Dgvcu': _0x9c4497(0x2a6),
            'AwcSr': function (_0x5c908d) {
                return _0x5c908d();
            },
            'RzuYm': _0x9c4497(0x37d),
            'cBLPn': function (_0x346317) {
                return _0x346317();
            },
            'YtnBV': function (_0x438a68) {
                return _0x438a68();
            }
        }, _0x2ebaf8 = '3|1|0|4|2|5'[_0x9c4497(0x187)]('|');
    let _0x500668 = 0x0;
    while (!![]) {
        switch (_0x2ebaf8[_0x500668++]) {
        case '0':
            resetstats();
            continue;
        case '1':
            document[_0x9c4497(0x157)](_0x537221[_0x9c4497(0x3ff)])[_0x9c4497(0x265)] = _0x537221[_0x9c4497(0x129)];
            continue;
        case '2':
            _0x537221[_0x9c4497(0x294)](resethistory);
            continue;
        case '3':
            document['getElementById'](_0x9c4497(0x19b))['innerText'] = _0x537221['RzuYm'];
            continue;
        case '4':
            _0x537221[_0x9c4497(0x306)](resetchart);
            continue;
        case '5':
            _0x537221['YtnBV'](resetlog);
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x21a12d = _0x56548a, _0x22ae12 = {
            'xvHFz': function (_0x4cb7d2, _0xa460c1) {
                return _0x4cb7d2(_0xa460c1);
            },
            'mTPAT': _0x21a12d(0x256)
        };
    return _0x22ae12[_0x21a12d(0x2da)](toggleChart, _0x22ae12['mTPAT']);
}
function resethistory() {
    const _0x2e2f4f = _0x56548a;
    return toggleHistory(_0x2e2f4f(0x20f));
}
function resetlog() {
    const _0x45f26e = _0x56548a, _0x3941c5 = {
            'IsYki': function (_0x59db50, _0x3a8f0b) {
                return _0x59db50(_0x3a8f0b);
            },
            'YElMN': _0x45f26e(0x20f)
        };
    return _0x3941c5[_0x45f26e(0x34f)](toggleLog, _0x3941c5[_0x45f26e(0x130)]);
}
function resetstats() {
    const _0x3a60e7 = _0x56548a, _0x34c2a7 = {
            'QEYxn': function (_0x202016) {
                return _0x202016();
            }
        }, _0x370cf5 = _0x3a60e7(0x31c)[_0x3a60e7(0x187)]('|');
    let _0x4e93d0 = 0x0;
    while (!![]) {
        switch (_0x370cf5[_0x4e93d0++]) {
        case '0':
            wins = 0x0;
            continue;
        case '1':
            profit = 0x0;
            continue;
        case '2':
            percentWagered = 0x0;
            continue;
        case '3':
            maxlosestreak = 0x0;
            continue;
        case '4':
            wagered = 0x0;
            continue;
        case '5':
            startBalance = balance;
            continue;
        case '6':
            maxbalance = balance;
            continue;
        case '7':
            bets = 0x0;
            continue;
        case '8':
            fullLogs = [];
            continue;
        case '9':
            currentstreak = 0x0;
            continue;
        case '10':
            maxwinstreak = 0x0;
            continue;
        case '11':
            maxBetAmount = 0x0;
            continue;
        case '12':
            losses = 0x0;
            continue;
        case '13':
            _0x34c2a7[_0x3a60e7(0x122)](updateStats);
            continue;
        case '14':
            minbalance = balance;
            continue;
        case '15':
            maxprofit = 0x0;
            continue;
        case '16':
            minprofit = 0x0;
            continue;
        case '17':
            percentProfit = 0x0;
            continue;
        case '18':
            maxLosseAmount = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x38676e) {
    return _0x38676e;
}
function ching() {
    const _0x2afd7f = _0x56548a;
    return wdbSound[_0x2afd7f(0x190)]();
}
function sleep(_0x5c5140) {
    return new Promise(_0x2ad402 => setTimeout(_0x2ad402, _0x5c5140 * 0x3e8));
}
async function initLua() {
    const _0x3ccf3e = _0x56548a, _0x2f560 = {
            'MrSxp': _0x3ccf3e(0x180),
            'exFxo': 'function\x20resume()\x0ajs.global:resume()\x0aend',
            'NMNqv': _0x3ccf3e(0x2e1),
            'DflGO': _0x3ccf3e(0x13d),
            'LtXqr': _0x3ccf3e(0x193),
            'hLIWF': _0x3ccf3e(0x34c),
            'vbZNl': _0x3ccf3e(0x1fd),
            'ylzNd': _0x3ccf3e(0x3a3),
            'spfuJ': _0x3ccf3e(0x2bd),
            'dmovj': _0x3ccf3e(0x2f8),
            'PqOhL': _0x3ccf3e(0x1ad),
            'JXhKd': 'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
            'noWgg': _0x3ccf3e(0x2b3),
            'pavHS': _0x3ccf3e(0x2a2),
            'HsSbk': 'initLuaOk'
        };
    fengari[_0x3ccf3e(0x393)](_0x2f560['MrSxp'])(), fengari[_0x3ccf3e(0x393)](_0x3ccf3e(0x330))(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x399)])(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x367)])(), fengari[_0x3ccf3e(0x393)](_0x2f560['DflGO'])(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x1c9)])(), fengari['load'](_0x2f560[_0x3ccf3e(0x3ca)])(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x39a)])(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x2ea)])(), fengari[_0x3ccf3e(0x393)](_0x2f560['spfuJ'])(), fengari[_0x3ccf3e(0x393)](_0x3ccf3e(0x32c))(), fengari[_0x3ccf3e(0x393)](_0x2f560['dmovj'])(), fengari['load'](_0x2f560[_0x3ccf3e(0x15a)])(), fengari[_0x3ccf3e(0x393)](_0x2f560['JXhKd'])(), fengari['load'](_0x3ccf3e(0x356))(), fengari[_0x3ccf3e(0x393)](_0x2f560[_0x3ccf3e(0x23f)])(), fengari[_0x3ccf3e(0x393)](_0x3ccf3e(0x261))(), fengari['load'](_0x3ccf3e(0x3e7))();
    const _0x4c7546 = location[_0x3ccf3e(0x381)][_0x3ccf3e(0x23e)](_0x2f560[_0x3ccf3e(0x183)], '');
    let _0x51913f = _0x4c7546[_0x3ccf3e(0x17e)]('.');
    return casino = _0x4c7546[_0x3ccf3e(0x3b4)](0x0, _0x51913f), fengari[_0x3ccf3e(0x393)](_0x3ccf3e(0x3ce) + casino + '\x22')(), _0x2f560[_0x3ccf3e(0x19a)];
}
async function updateLua() {
    const _0x307f1a = _0x56548a, _0x723c99 = {
            'jlhnw': _0x307f1a(0x12d),
            'MnOZK': _0x307f1a(0x281),
            'YcxgM': _0x307f1a(0x273),
            'yHRvo': 'return\x20kenoRisk',
            'QibVZ': _0x307f1a(0x3af),
            'cnNrN': _0x307f1a(0x1ab)
        }, _0x186d39 = _0x307f1a(0x2ac) + win + _0x307f1a(0x3c9) + bets + _0x307f1a(0x116) + wins + _0x307f1a(0x1ae) + losses + _0x307f1a(0x200) + winstreak + _0x307f1a(0x28f) + losestreak + _0x307f1a(0x32d) + currentstreak + _0x307f1a(0x3da) + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + _0x307f1a(0x401) + minprofit + _0x307f1a(0x227) + maxprofit + _0x307f1a(0x2fe) + chance + '\x0a\x20\x20\x20\x20bethigh=' + bethigh + _0x307f1a(0x3d6) + chance1 + _0x307f1a(0x1b3) + chance2 + _0x307f1a(0x1ef) + chance3 + _0x307f1a(0x1ac) + chance4 + _0x307f1a(0x346) + betSide + '\x22\x0a\x0a\x20\x20\x20\x20nextbet=' + nextbet + '\x0a\x20\x20\x20\x20previousbet=' + previousbet + '\x0a\x20\x20\x20\x20profit=' + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x307f1a(0x2de) + partialprofit + _0x307f1a(0x3c3) + wagered + _0x307f1a(0x25a) + lastBet[_0x307f1a(0x29d)] + ',\x0a\x20\x20\x20\x20\x20\x20Amount=' + lastBet['amount'] + _0x307f1a(0x247) + lastBet[_0x307f1a(0x1a2)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=' + lastBet[_0x307f1a(0x1a2)] + ',\x0a\x20\x20\x20\x20\x20\x20roll=' + lastBet[_0x307f1a(0x3a4)] + _0x307f1a(0x2ae) + lastBet[_0x307f1a(0x3a4)] + _0x307f1a(0x149) + lastBet['profit'] + _0x307f1a(0x3b0) + lastBet['profit'] + _0x307f1a(0x205) + lastBet[_0x307f1a(0x403)] + _0x307f1a(0x135) + lastBet[_0x307f1a(0x403)] + _0x307f1a(0x1e3) + lastBet['chance1'] + _0x307f1a(0x35f) + lastBet[_0x307f1a(0x3df)] + ',\x0a\x20\x20\x20\x20\x20\x20chance2=' + lastBet[_0x307f1a(0x18e)] + _0x307f1a(0x25f) + lastBet['chance2'] + _0x307f1a(0x218) + lastBet[_0x307f1a(0x26b)] + _0x307f1a(0x348) + lastBet['chance3'] + _0x307f1a(0x407) + lastBet['chance4'] + _0x307f1a(0x286) + lastBet[_0x307f1a(0x1d9)] + ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22' + lastBet['betSide'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22' + lastBet[_0x307f1a(0x328)] + _0x307f1a(0x1aa) + lastBet[_0x307f1a(0x345)] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet['result'] + ',\x0a\x20\x20\x20\x20\x20\x20nonce=' + lastBet[_0x307f1a(0x38c)] + _0x307f1a(0x21f) + lastBet[_0x307f1a(0x38c)] + _0x307f1a(0x249) + lastBet['id'] + _0x307f1a(0x391) + lastBet['id'] + _0x307f1a(0x2d7);
    fengari['load'](_0x186d39)(), fengari['load']('dobet()')(), currency = fengari[_0x307f1a(0x393)](_0x723c99[_0x307f1a(0x382)])() || currency, coin = String(currency)[_0x307f1a(0x2eb)](), plinkoRisk = fengari[_0x307f1a(0x393)](_0x723c99['MnOZK'])() || plinkoRisk, plinkoRow = fengari[_0x307f1a(0x393)](_0x723c99['YcxgM'])() || plinkoRow, kenoRisk = fengari['load'](_0x723c99[_0x307f1a(0x20b)])() || kenoRisk;
    const _0x405558 = fengari[_0x307f1a(0x393)](_0x723c99[_0x307f1a(0x1fc)])();
    return _0x405558 && (window[_0x307f1a(0x313)] = _0x405558[_0x307f1a(0x187)](',')['filter'](_0x24ad7c => _0x24ad7c !== '')['map'](Number)), _0x723c99[_0x307f1a(0x2a5)];
}
function randomString(_0x19967e, _0x41d2bf) {
    const _0x1158d4 = _0x56548a, _0x293b7c = {
            'ykKfa': _0x1158d4(0x195),
            'AoxQS': function (_0x16fe13, _0x2f5a3a) {
                return _0x16fe13 < _0x2f5a3a;
            },
            'WWfiT': function (_0x3857ec, _0x454287) {
                return _0x3857ec * _0x454287;
            }
        }, _0x3cb5ee = {
            'alphabet': _0x1158d4(0x252),
            'numeric': _0x293b7c[_0x1158d4(0x380)],
            'hex': '0123456789abcdef',
            'rangedice': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
            'default': _0x1158d4(0x3fc)
        }, _0x7cf6b8 = _0x3cb5ee[_0x41d2bf] || _0x3cb5ee[_0x1158d4(0x392)];
    let _0x4bc0f3 = '';
    for (let _0x320c39 = 0x0; _0x293b7c[_0x1158d4(0x2c2)](_0x320c39, _0x19967e); _0x320c39++) {
        _0x4bc0f3 += _0x7cf6b8[_0x1158d4(0x269)](Math[_0x1158d4(0x240)](_0x293b7c['WWfiT'](Math[_0x1158d4(0x311)](), _0x7cf6b8[_0x1158d4(0x1b1)])));
    }
    return _0x4bc0f3;
}
function setCookie(_0x59171c, _0x2c22ee, _0x306c0d) {
    const _0x2e2797 = _0x56548a, _0x1d0b76 = {
            'qAYdA': function (_0x21f739, _0x18c2c3) {
                return _0x21f739 + _0x18c2c3;
            },
            'OAOBj': function (_0x5abdf7, _0x1ca51a) {
                return _0x5abdf7 * _0x1ca51a;
            },
            'VSqcA': function (_0x1b5298, _0x1bcd93) {
                return _0x1b5298 * _0x1bcd93;
            }
        }, _0x5a2517 = new Date();
    _0x5a2517[_0x2e2797(0x177)](_0x1d0b76['qAYdA'](_0x5a2517[_0x2e2797(0x24a)](), _0x1d0b76['OAOBj'](_0x1d0b76[_0x2e2797(0x25e)](_0x1d0b76[_0x2e2797(0x25e)](_0x1d0b76[_0x2e2797(0x3a7)](_0x306c0d, 0x18), 0x3c), 0x3c), 0x3e8)));
    const _0x21fee6 = _0x2e2797(0x3cc) + _0x5a2517[_0x2e2797(0x3e0)]();
    document['cookie'] = _0x59171c + '=' + _0x2c22ee + ';' + _0x21fee6 + _0x2e2797(0x354);
}
function getCookie(_0x8371f2) {
    const _0x1ee5c6 = _0x56548a, _0x28fcbc = {
            'YpLrb': function (_0x4e42bc, _0x8d09e) {
                return _0x4e42bc + _0x8d09e;
            }
        }, _0x59484f = _0x28fcbc[_0x1ee5c6(0x2a8)](_0x8371f2, '='), _0x1d97c7 = document[_0x1ee5c6(0x397)][_0x1ee5c6(0x187)](';')[_0x1ee5c6(0x375)](_0x352136 => _0x352136[_0x1ee5c6(0x1dc)]());
    for (const _0x34e4c5 of _0x1d97c7) {
        if (_0x34e4c5[_0x1ee5c6(0x36e)](_0x59484f))
            return _0x34e4c5['substring'](_0x59484f[_0x1ee5c6(0x1b1)]);
    }
    return '';
}
function saveScript() {
    const _0x3bb22c = _0x56548a, _0x2e1a2e = {
            'mZbCq': 'lua',
            'VxMwY': _0x3bb22c(0x3e3)
        }, _0x10710f = mode === _0x2e1a2e[_0x3bb22c(0x326)] ? luaEditor[_0x3bb22c(0x19d)]() : jsEditor[_0x3bb22c(0x19d)](), _0xe8d4ec = document[_0x3bb22c(0x18d)]('a');
    _0xe8d4ec[_0x3bb22c(0x11e)] = window['URL'][_0x3bb22c(0x13c)](new Blob([_0x10710f], { 'type': _0x2e1a2e['VxMwY'] })), _0xe8d4ec[_0x3bb22c(0x1af)] = _0x3bb22c(0x3c7) + Date['now']()[_0x3bb22c(0x13b)]()['slice'](-0x6) + '.' + mode, _0xe8d4ec[_0x3bb22c(0x1d7)]();
}
function getErrMsg(_0x352571) {
    const _0x4558a6 = _0x56548a;
    return _0x352571[_0x4558a6(0x1f9)] && _0x352571[_0x4558a6(0x1f9)][_0x4558a6(0x376)] && _0x352571[_0x4558a6(0x1f9)]['data'][_0x4558a6(0x3a8)] || _0x352571['message'] || _0x352571[_0x4558a6(0x13b)]();
}

const _0x1b7105 = _0x4d7d;
function _0x4d7d(_0x4c8ed5, _0x36ca17) {
    const _0x54a32f = _0x54a3();
    return _0x4d7d = function (_0x4d7df7, _0x12169d) {
        _0x4d7df7 = _0x4d7df7 - 0xec;
        let _0x4f9424 = _0x54a32f[_0x4d7df7];
        return _0x4f9424;
    }, _0x4d7d(_0x4c8ed5, _0x36ca17);
}
function _0x54a3() {
    const _0x414321 = [
        'cJiMI',
        'UdNPm',
        'EPSILON',
        'Not\x20supported',
        'push',
        'HeXGN',
        'BELOW',
        'KZVCj',
        'wwMTl',
        'maxbet=',
        'uOxAa',
        'post',
        'ZDIin',
        'rIYrD',
        'balance=',
        'betAmount',
        '37008eYHXza',
        'toFixed',
        '5089605OpGUWZ',
        'https://api.paradice.in/api.php',
        'winAmount',
        'load',
        'resetseed()\x20not\x20support',
        'toUpperCase',
        'errors',
        '242994thoVXT',
        '9uDqxEi',
        'mutation\x20rollDice($number:\x20Float!,\x20$betAmount:\x20Float!,\x20$side:\x20RollSideEnum!,\x20$currency:\x20CurrencyEnum!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20rollDice(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20number:\x20$number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20betAmount:\x20$betAmount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20side:\x20$side\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20currency:\x20$currency\x0a\x20\x20\x20\x20\x20\x20\x20\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20roll\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20betAmount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20winAmount\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}',
        '9cPDeWS',
        'currency',
        'round',
        'qsctl',
        'data',
        '6393112twqOWa',
        'dyBCq',
        'rollDice',
        'HWxUh',
        '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20me\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...FRAGMENT_COMPLETE_USER_DATA\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20fragment\x20FRAGMENT_COMPLETE_USER_DATA\x20on\x20User\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20wallets\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...FRAGMENT_USER_WALLET\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20fragment\x20FRAGMENT_USER_WALLET\x20on\x20Wallet\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20\x20\x20}',
        '54544210zEmXhy',
        'token',
        'RZjKc',
        'minbalance=',
        'getItem',
        'stringify',
        'ErlWx',
        'length',
        'TjXPk',
        'MUuOP',
        'vRSMm',
        'roll',
        'maxbalance=',
        'application/json',
        'ZyLET',
        'Cixeq',
        'wallets',
        '4804443mzwNin',
        'HMqJN',
        '1127kBOlop',
        'VXBxx',
        'qrwIo',
        '{\x0a\x20\x20\x20\x20\x20\x20me\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20...FRAGMENT_COMPLETE_USER_DATA\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20fragment\x20FRAGMENT_COMPLETE_USER_DATA\x20on\x20User\x20{\x0a\x20\x20\x20\x20\x20\x20wallets\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20...FRAGMENT_USER_WALLET\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20fragment\x20FRAGMENT_USER_WALLET\x20on\x20Wallet\x20{\x0a\x20\x20\x20\x20\x20\x20balance\x0a\x20\x20\x20\x20\x20\x20currency\x0a\x20\x20\x20\x20}',
        'zWsLk',
        'JQDKo',
        'oIHLr',
        'noODZ',
        'BLFkQ',
        '2993328eHndtH'
    ];
    _0x54a3 = function () {
        return _0x414321;
    };
    return _0x54a3();
}
(function (_0x1185d9, _0x520a2a) {
    const _0x258fbe = _0x4d7d, _0x251907 = _0x1185d9();
    while (!![]) {
        try {
            const _0x3a93bd = parseInt(_0x258fbe(0x110)) / 0x1 * (-parseInt(_0x258fbe(0x10f)) / 0x2) + -parseInt(_0x258fbe(0x12d)) / 0x3 + -parseInt(_0x258fbe(0x117)) / 0x4 + parseInt(_0x258fbe(0x108)) / 0x5 + -parseInt(_0x258fbe(0x106)) / 0x6 * (parseInt(_0x258fbe(0xec)) / 0x7) + -parseInt(_0x258fbe(0xf5)) / 0x8 + -parseInt(_0x258fbe(0x112)) / 0x9 * (-parseInt(_0x258fbe(0x11c)) / 0xa);
            if (_0x3a93bd === _0x520a2a)
                break;
            else
                _0x251907['push'](_0x251907['shift']());
        } catch (_0x358b16) {
            _0x251907['push'](_0x251907['shift']());
        }
    }
}(_0x54a3, 0xc6378), CASINO_API = _0x1b7105(0x109), token = localStorage[_0x1b7105(0x120)](_0x1b7105(0x11d)));
async function beforeWork() {
    const _0x53cfc3 = _0x1b7105, _0x28151c = { 'UdNPm': _0x53cfc3(0x129) };
    axios['defaults']['headers'] = {
        'authorization': token,
        'content-type': _0x28151c[_0x53cfc3(0xf7)]
    };
}
function vault() {
    const _0x15ff27 = _0x1b7105, _0x499f71 = { 'Xyovf': _0x15ff27(0xf9) };
    log(_0x499f71['Xyovf']);
}
function unvault() {
    const _0x10b1ce = _0x1b7105, _0xa39157 = {
            'noODZ': function (_0x17cf1b, _0x420c2a) {
                return _0x17cf1b(_0x420c2a);
            },
            'qrwIo': _0x10b1ce(0xf9)
        };
    _0xa39157[_0x10b1ce(0xf3)](log, _0xa39157[_0x10b1ce(0xee)]);
}
async function getListCoin() {
    const _0x409761 = _0x1b7105, _0x28b599 = {
            'fspjk': function (_0x356864, _0xfb8d9e) {
                return _0x356864 < _0xfb8d9e;
            },
            'uOxAa': function (_0x28349b) {
                return _0x28349b();
            }
        }, _0x41de33 = JSON[_0x409761(0x121)]({
            'variables': {},
            'query': _0x409761(0xef)
        }), {data: _0x54f272} = await axios[_0x409761(0x101)](CASINO_API, _0x41de33);
    for (let _0x55ddf2 = 0x0; _0x28b599['fspjk'](_0x55ddf2, _0x54f272[_0x409761(0x116)]['me'][_0x409761(0x12c)][_0x409761(0x123)]); _0x55ddf2++) {
        coins[_0x409761(0xfa)](_0x54f272['data']['me']['wallets'][_0x55ddf2][_0x409761(0x113)]);
    }
    return coins = coins['sort'](), coin = coins[0x0], (_0x28b599[_0x409761(0x100)](drawSelectCoin), _0x28b599[_0x409761(0x100)](checkbalance));
}
async function checkbalance() {
    const _0x271be5 = _0x1b7105, _0x386bce = {
            'cJiMI': function (_0x1f3dd0, _0x5b5c50) {
                return _0x1f3dd0(_0x5b5c50);
            },
            'vRSMm': function (_0x1f364a, _0x4f2d55) {
                return _0x1f364a + _0x4f2d55;
            },
            'VXBxx': _0x271be5(0x104),
            'HeXGN': _0x271be5(0x11f),
            'zWsLk': _0x271be5(0x128),
            'Cixeq': 'minbet=',
            'jQYdi': _0x271be5(0xff),
            'knfnU': function (_0x436872) {
                return _0x436872();
            },
            'NPqFq': function (_0x40116e, _0x242490) {
                return _0x40116e(_0x242490);
            },
            'rIYrD': function (_0x4708b1, _0x331f2b) {
                return _0x4708b1(_0x331f2b);
            }
        };
    try {
        const _0x620e87 = JSON[_0x271be5(0x121)]({
                'variables': {},
                'query': _0x271be5(0x11b)
            }), {data: _0x15d725} = await axios[_0x271be5(0x101)](CASINO_API, _0x620e87);
        return balance = _0x386bce[_0x271be5(0xf6)](getBalance, _0x15d725[_0x271be5(0x116)]['me'][_0x271be5(0x12c)]), fengari[_0x271be5(0x10b)](_0x386bce[_0x271be5(0x126)](_0x386bce[_0x271be5(0xed)], balance))(), startBalance = balance, minbalance = balance, fengari[_0x271be5(0x10b)](_0x386bce[_0x271be5(0x126)](_0x386bce[_0x271be5(0xfb)], balance))(), maxbalance = balance, fengari[_0x271be5(0x10b)](_0x386bce['vRSMm'](_0x386bce[_0x271be5(0xf0)], balance))(), minbet = 1e-8, fengari[_0x271be5(0x10b)](_0x386bce[_0x271be5(0x12b)] + minbet)(), maxbet = balance, fengari[_0x271be5(0x10b)](_0x386bce[_0x271be5(0x126)](_0x386bce['jQYdi'], maxbet))(), updateStats();
    } catch (_0x5717a1) {
        return _0x386bce['knfnU'](stop), _0x386bce['NPqFq'](log, _0x386bce[_0x271be5(0x103)](getErrMsg, _0x5717a1));
    }
}
function resetseed() {
    const _0x1b4d39 = _0x1b7105, _0x25fa77 = { 'RZjKc': _0x1b4d39(0x10c) };
    log(_0x25fa77[_0x1b4d39(0x11e)]);
}
async function sendBet() {
    const _0x589091 = _0x1b7105, _0x2edf00 = {
            'HMqJN': function (_0x383e41, _0x10f7d9) {
                return _0x383e41 / _0x10f7d9;
            },
            'ErlWx': function (_0x19b1c0, _0x1b9f91) {
                return _0x19b1c0 * _0x1b9f91;
            },
            'KZVCj': function (_0x218c02, _0x15da22) {
                return _0x218c02 + _0x15da22;
            },
            'JQDKo': function (_0x240d14, _0x5738b1) {
                return _0x240d14 - _0x5738b1;
            },
            'dyBCq': _0x589091(0x119),
            'oIHLr': 'ABOVE',
            'ZDIin': _0x589091(0xfc),
            'TjXPk': function (_0x38a56b) {
                return _0x38a56b();
            }
        };
    try {
        chance = _0x2edf00[_0x589091(0x12e)](Math[_0x589091(0x114)](_0x2edf00[_0x589091(0x122)](_0x2edf00[_0x589091(0xfd)](chance, Number[_0x589091(0xf8)]), 0x64)), 0x64), target = bethigh ? _0x2edf00[_0x589091(0xf1)](0x64, chance) : chance;
        const _0x415703 = JSON[_0x589091(0x121)]({
                'operationName': _0x2edf00[_0x589091(0x118)],
                'variables': {
                    'betAmount': nextbet[_0x589091(0x107)](0x8),
                    'number': target['toFixed'](0x2),
                    'side': bethigh ? _0x2edf00[_0x589091(0xf2)] : _0x2edf00[_0x589091(0x102)],
                    'currency': String(coin)[_0x589091(0x10d)]()
                },
                'query': _0x589091(0x111)
            }), {data: _0x5cb352} = await axios[_0x589091(0x101)](CASINO_API, _0x415703);
        if (_0x5cb352['errors'])
            return stop(), log(_0x5cb352[_0x589091(0x10e)][0x0]['message']);
        else
            return handleResult(_0x5cb352[_0x589091(0x116)][_0x589091(0x119)]);
    } catch (_0x99aa6d) {
        if (run)
            return _0x2edf00[_0x589091(0x124)](sendBet);
    }
}
async function handleResult(_0x246631) {
    const _0x288e77 = _0x1b7105, _0x500deb = {
            'BLFkQ': function (_0x43802e, _0x442eaf) {
                return _0x43802e - _0x442eaf;
            },
            'wwMTl': function (_0x4b89b3, _0x43f33b) {
                return _0x4b89b3(_0x43f33b);
            },
            'HWxUh': function (_0x411b14) {
                return _0x411b14();
            },
            'Cwwtv': function (_0x2ebd7a, _0x1e715e) {
                return _0x2ebd7a(_0x1e715e);
            },
            'ZyLET': function (_0x21583d, _0x508ae5) {
                return _0x21583d(_0x508ae5);
            }
        };
    try {
        return currentprofit = _0x500deb[_0x288e77(0xf4)](_0x246631[_0x288e77(0x10a)], _0x246631[_0x288e77(0x105)]), lastBet[_0x288e77(0x127)] = Number(_0x246631[_0x288e77(0x127)]), result = _0x500deb[_0x288e77(0xfe)](Number, _0x246631[_0x288e77(0x127)]), _0x500deb[_0x288e77(0x11a)](handleStats);
    } catch (_0x339127) {
        return stop(), _0x500deb['Cwwtv'](log, _0x500deb[_0x288e77(0x12a)](getErrMsg, _0x339127));
    }
}
function getBalance(_0x4f3970) {
    const _0x5e7b80 = _0x1b7105, _0x46b168 = {
            'qsctl': function (_0x50cc39, _0x2a6213) {
                return _0x50cc39 === _0x2a6213;
            },
            'MUuOP': function (_0x48f0ea, _0x31c033) {
                return _0x48f0ea(_0x31c033);
            }
        };
    for (const _0x4ce510 in _0x4f3970)
        if (_0x46b168[_0x5e7b80(0x115)](_0x4f3970[_0x4ce510][_0x5e7b80(0x113)], coin))
            return _0x46b168[_0x5e7b80(0x125)](Number, _0x4f3970[_0x4ce510]['balance']);
}