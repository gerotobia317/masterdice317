const _0x562128 = _0x3a0a;
(function (_0x176fc4, _0x23a679) {
    const _0x380919 = _0x3a0a, _0x2a284a = _0x176fc4();
    while (!![]) {
        try {
            const _0x2d753e = -parseInt(_0x380919(0x191)) / 0x1 + parseInt(_0x380919(0x167)) / 0x2 + -parseInt(_0x380919(0x31c)) / 0x3 * (-parseInt(_0x380919(0x361)) / 0x4) + -parseInt(_0x380919(0x28f)) / 0x5 * (-parseInt(_0x380919(0x2da)) / 0x6) + parseInt(_0x380919(0x1ed)) / 0x7 + parseInt(_0x380919(0x3cb)) / 0x8 * (parseInt(_0x380919(0x3c9)) / 0x9) + -parseInt(_0x380919(0x3e6)) / 0xa * (parseInt(_0x380919(0x288)) / 0xb);
            if (_0x2d753e === _0x23a679)
                break;
            else
                _0x2a284a['push'](_0x2a284a['shift']());
        } catch (_0x473612) {
            _0x2a284a['push'](_0x2a284a['shift']());
        }
    }
}(_0x2d70, 0x6bbd9), Object['defineProperty'](String[_0x562128(0x2ec)], 'capitalize', {
    'value': function () {
        const _0x194628 = _0x562128, _0x2b7786 = {
                'wKhqF': function (_0x12be9f, _0x199e3f) {
                    return _0x12be9f + _0x199e3f;
                }
            };
        return _0x2b7786['wKhqF'](this[_0x194628(0x224)](0x0)[_0x194628(0x1c0)](), this['slice'](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x562128(0x286), game = _0x562128(0x2cc), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x562128(0x308), kenoRisk = _0x562128(0x409), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = 'between', result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x562128(0x223),
    'BetSide': _0x562128(0x223),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x562128(0x2c4))), wdbUI = '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20' + WDB_MODE + _0x562128(0x340) + CASINO_GAME + _0x562128(0x25b) + WDB_HOME + '\x20|\x20' + location[_0x562128(0x20f)][_0x562128(0x315)](_0x562128(0x270), '') + _0x562128(0x244));
const rangediceLuaScript = _0x562128(0x29c), rangediceJsScript = '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}', plinkoLuaScript = _0x562128(0x334), plinkoJsScript = _0x562128(0x418), kenoLuaScript = _0x562128(0x347), kenoJsScript = _0x562128(0x374);
function exportLog() {
    const _0x1f8878 = _0x562128, _0x206fd9 = { 'rGDNO': _0x1f8878(0x1c2) }, _0xd50fe3 = JSON['stringify'](fullLogs), _0x41397e = document[_0x1f8878(0x3f8)]('a');
    _0x41397e[_0x1f8878(0x226)] = window['URL'][_0x1f8878(0x2bd)](new Blob([_0xd50fe3], { 'type': _0x206fd9[_0x1f8878(0x3aa)] })), _0x41397e[_0x1f8878(0x2c6)] = _0x1f8878(0x3c7) + Date[_0x1f8878(0x186)]()[_0x1f8878(0x41e)]()[_0x1f8878(0x24f)](-0x6) + _0x1f8878(0x37b), _0x41397e[_0x1f8878(0x177)]();
}
class Chart {
    constructor(_0x210f44, _0xdefe1 = ![], _0x56f680 = 0x64) {
        const _0xa5b399 = _0x562128, _0x283329 = {
                'ZVbvk': _0xa5b399(0x372),
                'qcgnw': _0xa5b399(0x2a6),
                'pNlVi': _0xa5b399(0x15b),
                'aCYgX': _0xa5b399(0x1f0)
            }, _0x5a8e2f = _0x283329[_0xa5b399(0x154)]['split']('|');
        let _0x4b1f9d = 0x0;
        while (!![]) {
            switch (_0x5a8e2f[_0x4b1f9d++]) {
            case '0':
                this[_0xa5b399(0x159)] = _0x56f680;
                continue;
            case '1':
                this[_0xa5b399(0x156)] = _0x210f44;
                continue;
            case '2':
                this[_0xa5b399(0x2f5)] = _0xdefe1;
                continue;
            case '3':
                this[_0xa5b399(0x1a8)][_0xa5b399(0x276)]();
                continue;
            case '4':
                this[_0xa5b399(0x21b)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '5':
                this[_0xa5b399(0x1a8)] = new CanvasJS[(_0xa5b399(0x384))](_0x210f44, {
                    'theme': _0xdefe1 ? _0x283329[_0xa5b399(0x3d9)] : _0x283329[_0xa5b399(0x3f3)],
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0x283329[_0xa5b399(0x208)],
                            'markerSize': 0x0,
                            'dataPoints': this['dps']
                        }]
                });
                continue;
            }
            break;
        }
    }
    set [_0x562128(0x3ac)](_0x15b398) {
        this['_maxRows'] = _0x15b398;
    }
    get [_0x562128(0x3ac)]() {
        const _0x4d028c = _0x562128;
        return this[_0x4d028c(0x159)];
    }
    set [_0x562128(0x2dd)](_0x1a85dc) {
        const _0xd4ff45 = _0x562128, _0x513c1f = { 'fHyCh': _0xd4ff45(0x15b) };
        this['_darkMode'] = _0x1a85dc, this[_0xd4ff45(0x1a8)][_0xd4ff45(0x3be)][_0xd4ff45(0x32a)] = _0x1a85dc ? _0xd4ff45(0x2a6) : _0x513c1f[_0xd4ff45(0x2bb)], this['chart'][_0xd4ff45(0x276)]();
    }
    get [_0x562128(0x2dd)]() {
        const _0x5b707b = _0x562128;
        return this[_0x5b707b(0x2f5)];
    }
    [_0x562128(0x2f9)](_0x195c11, _0x7c8b60, _0x283928) {
        const _0x3d963e = _0x562128, _0xd2abda = {
                'QIZel': function (_0x44d023, _0x8a0083) {
                    return _0x44d023 - _0x8a0083;
                }
            };
        this[_0x3d963e(0x21b)][_0x3d963e(0x3b9)]({
            'x': _0x195c11,
            'y': _0x7c8b60,
            'lineColor': _0x283928
        });
        if (this['dps'][_0x3d963e(0x1ba)] > this[_0x3d963e(0x159)])
            this['dps'][_0x3d963e(0x1b2)]();
        if (this[_0x3d963e(0x21b)][this[_0x3d963e(0x21b)][_0x3d963e(0x1ba)] - 0x2])
            this['dps'][_0xd2abda[_0x3d963e(0x1c1)](this[_0x3d963e(0x21b)][_0x3d963e(0x1ba)], 0x2)][_0x3d963e(0x363)] = _0x283928;
        this[_0x3d963e(0x1a8)][_0x3d963e(0x276)]();
    }
    [_0x562128(0x23d)]() {
        const _0x18dfc1 = _0x562128;
        this[_0x18dfc1(0x21b)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x18dfc1(0x1a8)][_0x18dfc1(0x3be)][_0x18dfc1(0x142)][0x0]['dataPoints'] = this[_0x18dfc1(0x21b)], this[_0x18dfc1(0x1a8)][_0x18dfc1(0x276)]();
    }
}
function changeMaxRows() {
    const _0x303830 = _0x562128, _0x3d74a0 = {
            'tLvUe': '1|3|0|4|2',
            'LFNpx': function (_0x100dfd, _0x5735c6) {
                return _0x100dfd(_0x5735c6);
            },
            'krBgw': _0x303830(0x3f4),
            'RLRFq': function (_0x58d1f0) {
                return _0x58d1f0();
            }
        }, _0x35c6cf = _0x3d74a0[_0x303830(0x2c3)]['split']('|');
    let _0x4e0afc = 0x0;
    while (!![]) {
        switch (_0x35c6cf[_0x4e0afc++]) {
        case '0':
            resetchart();
            continue;
        case '1':
            maxRows = _0x3d74a0[_0x303830(0x1ea)](Number, document[_0x303830(0x28e)](_0x3d74a0[_0x303830(0x248)])[_0x303830(0x3f9)]);
            continue;
        case '2':
            _0x3d74a0['RLRFq'](resetlog);
            continue;
        case '3':
            chart[_0x303830(0x3ac)] = maxRows;
            continue;
        case '4':
            _0x3d74a0[_0x303830(0x419)](resethistory);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x465b43 = _0x562128, _0x4355c5 = {
            'WEYSl': _0x465b43(0x32b),
            'sbwLm': _0x465b43(0x3f0),
            'RrWUi': _0x465b43(0x3df),
            'kAJwi': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'oRHBd': _0x465b43(0x237),
            'ETJiw': _0x465b43(0x35a),
            'awmVH': '#2a2a2a',
            'NyVCi': _0x465b43(0x3d1),
            'JINqr': 'darcula',
            'cbMmS': _0x465b43(0x3fc),
            'FdSOC': _0x465b43(0x32a),
            'DgoEq': _0x465b43(0x17a),
            'WHeyx': _0x465b43(0x2a2),
            'qJvzr': function (_0x1e5a30) {
                return _0x1e5a30();
            }
        };
    darkMode = !darkMode, chart['darkMode'] = darkMode;
    const _0x33ffe6 = document[_0x465b43(0x28e)](_0x4355c5[_0x465b43(0x2e2)]), _0x5c9c7a = document[_0x465b43(0x28e)]('wdbHeader'), _0x1eeb8f = document[_0x465b43(0x392)]('#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre'), _0x2a9040 = document[_0x465b43(0x392)](_0x4355c5[_0x465b43(0x2cb)]), _0x23473c = document[_0x465b43(0x392)](_0x4355c5['oRHBd']);
    if (darkMode) {
        const _0x3a12a1 = _0x4355c5[_0x465b43(0x38c)][_0x465b43(0x1d1)]('|');
        let _0xb3aacb = 0x0;
        while (!![]) {
            switch (_0x3a12a1[_0xb3aacb++]) {
            case '0':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x2ea)] = _0x4355c5[_0x465b43(0x2b0)];
                continue;
            case '1':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x36e)] = _0x465b43(0x32b);
                continue;
            case '2':
                _0x23473c[_0x465b43(0x24a)](_0x2527dc => _0x2527dc['style'][_0x465b43(0x36e)] = '#fff');
                continue;
            case '3':
                _0x2a9040[_0x465b43(0x24a)](_0x5d5f65 => _0x5d5f65[_0x465b43(0x2a5)]['color'] = _0x465b43(0x32b));
                continue;
            case '4':
                _0x5c9c7a[_0x465b43(0x2a5)][_0x465b43(0x23f)] = _0x4355c5['NyVCi'];
                continue;
            case '5':
                luaEditor[_0x465b43(0x2f0)](_0x465b43(0x32a), _0x465b43(0x3d0));
                continue;
            case '6':
                jsEditor[_0x465b43(0x2f0)](_0x465b43(0x32a), _0x4355c5[_0x465b43(0x2f4)]);
                continue;
            case '7':
                _0x1eeb8f[_0x465b43(0x24a)](_0x1560c9 => {
                    const _0x3d26c1 = _0x465b43;
                    _0x1560c9[_0x3d26c1(0x2a5)][_0x3d26c1(0x23f)] = '#2a2a2a', _0x1560c9[_0x3d26c1(0x2a5)][_0x3d26c1(0x36e)] = _0x3d26c1(0x32b);
                });
                continue;
            case '8':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x23f)] = _0x4355c5[_0x465b43(0x2b0)];
                continue;
            }
            break;
        }
    } else {
        const _0x513e82 = _0x4355c5[_0x465b43(0x3b1)][_0x465b43(0x1d1)]('|');
        let _0x52de44 = 0x0;
        while (!![]) {
            switch (_0x513e82[_0x52de44++]) {
            case '0':
                _0x2a9040[_0x465b43(0x24a)](_0x5a4476 => _0x5a4476[_0x465b43(0x2a5)][_0x465b43(0x36e)] = _0x465b43(0x3f0));
                continue;
            case '1':
                luaEditor['setOption'](_0x4355c5[_0x465b43(0x342)], _0x4355c5['DgoEq']);
                continue;
            case '2':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x36e)] = _0x4355c5['sbwLm'];
                continue;
            case '3':
                _0x1eeb8f[_0x465b43(0x24a)](_0x248650 => {
                    const _0x2da383 = _0x465b43;
                    _0x248650[_0x2da383(0x2a5)][_0x2da383(0x23f)] = _0x4355c5[_0x2da383(0x359)], _0x248650['style'][_0x2da383(0x36e)] = _0x4355c5[_0x2da383(0x3ad)];
                });
                continue;
            case '4':
                _0x23473c[_0x465b43(0x24a)](_0x4ac554 => _0x4ac554[_0x465b43(0x2a5)][_0x465b43(0x36e)] = _0x465b43(0x3f0));
                continue;
            case '5':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x23f)] = _0x4355c5['WEYSl'];
                continue;
            case '6':
                _0x5c9c7a[_0x465b43(0x2a5)][_0x465b43(0x23f)] = _0x4355c5[_0x465b43(0x324)];
                continue;
            case '7':
                _0x33ffe6[_0x465b43(0x2a5)][_0x465b43(0x2ea)] = _0x465b43(0x32b);
                continue;
            case '8':
                jsEditor[_0x465b43(0x2f0)](_0x4355c5[_0x465b43(0x342)], _0x4355c5['DgoEq']);
                continue;
            }
            break;
        }
    }
    _0x4355c5[_0x465b43(0x19c)](updateStats);
}
let previousPosition = {
    'top': _0x562128(0x242),
    'left': _0x562128(0x242),
    'position': 'fixed'
};
function loadSavedPosition() {
    const _0x3a3bd8 = _0x562128, _0xf4f64b = { 'CzuKz': _0x3a3bd8(0x402) }, _0x33bf8e = localStorage[_0x3a3bd8(0x1b5)](_0xf4f64b['CzuKz']);
    if (_0x33bf8e)
        try {
            const _0x567bec = JSON[_0x3a3bd8(0x1aa)](_0x33bf8e);
            _0x567bec['top'] && _0x567bec[_0x3a3bd8(0x39d)] && (previousPosition = _0x567bec);
        } catch (_0x2d2f4b) {
        }
}
function savePosition() {
    const _0x42e12b = _0x562128;
    localStorage['setItem'](_0x42e12b(0x402), JSON[_0x42e12b(0x2d7)](previousPosition));
}
function toggleMinimalBot(_0x2034b4) {
    const _0x514800 = _0x562128, _0x55e4a8 = {
            'lvXOJ': _0x514800(0x348),
            'IcTsF': function (_0x5bd0ba, _0x3cf25b) {
                return _0x5bd0ba === _0x3cf25b;
            },
            'vzurI': function (_0x4d47f2) {
                return _0x4d47f2();
            },
            'joPwV': _0x514800(0x367),
            'Igrlv': _0x514800(0x1f6),
            'pyNIW': function (_0x314a93, _0x51c8fd) {
                return _0x314a93 / _0x51c8fd;
            },
            'gpFaL': function (_0x587b55, _0x482b73) {
                return _0x587b55 - _0x482b73;
            },
            'KrANF': _0x514800(0x2ab),
            'EglsB': function (_0x46c625, _0x27bd17) {
                return _0x46c625 + _0x27bd17;
            },
            'LvSMi': _0x514800(0x329),
            'WgPrn': _0x514800(0x3ee)
        }, _0x37e93d = document[_0x514800(0x28e)](_0x55e4a8[_0x514800(0x227)]), _0x46f62d = document[_0x514800(0x28e)](_0x514800(0x3d5)), _0x3bcf28 = document[_0x514800(0x28e)](_0x514800(0x3df));
    if (_0x55e4a8[_0x514800(0x40c)](_0x2034b4[_0x514800(0x2a3)], '▼')) {
        const _0x46bcf9 = window['getComputedStyle'](_0x3bcf28);
        previousPosition = {
            'top': _0x3bcf28[_0x514800(0x2a5)][_0x514800(0x416)] || _0x46bcf9['top'] || '5px',
            'left': _0x3bcf28[_0x514800(0x2a5)]['left'] || _0x46bcf9['left'] || _0x514800(0x242),
            'position': _0x3bcf28[_0x514800(0x2a5)][_0x514800(0x264)] || _0x46bcf9[_0x514800(0x264)] || _0x514800(0x2b4)
        }, _0x55e4a8['vzurI'](savePosition), _0x37e93d[_0x514800(0x2a5)][_0x514800(0x16f)] = _0x55e4a8[_0x514800(0x284)], _0x46f62d['style']['display'] = _0x55e4a8[_0x514800(0x284)], _0x3bcf28[_0x514800(0x2a5)]['width'] = _0x55e4a8[_0x514800(0x42f)];
        const _0x3520bf = window['innerWidth'], _0x3f1189 = 0x15e, _0x1b724c = _0x55e4a8[_0x514800(0x314)](_0x55e4a8[_0x514800(0x268)](_0x3520bf, _0x3f1189), 0x2);
        _0x3bcf28[_0x514800(0x2a5)][_0x514800(0x416)] = _0x55e4a8[_0x514800(0x34f)], _0x3bcf28[_0x514800(0x2a5)][_0x514800(0x39d)] = _0x55e4a8[_0x514800(0x1b8)](_0x1b724c, 'px'), _0x3bcf28['style'][_0x514800(0x264)] = _0x514800(0x2b4), _0x2034b4['innerText'] = '▲';
    } else {
        const _0x358a17 = _0x514800(0x163)['split']('|');
        let _0x4ce2f9 = 0x0;
        while (!![]) {
            switch (_0x358a17[_0x4ce2f9++]) {
            case '0':
                _0x3bcf28[_0x514800(0x2a5)]['top'] = previousPosition[_0x514800(0x416)];
                continue;
            case '1':
                _0x2034b4[_0x514800(0x2a3)] = '▼';
                continue;
            case '2':
                _0x3bcf28[_0x514800(0x2a5)][_0x514800(0x39d)] = previousPosition[_0x514800(0x39d)];
                continue;
            case '3':
                _0x37e93d[_0x514800(0x2a5)][_0x514800(0x16f)] = _0x55e4a8[_0x514800(0x352)];
                continue;
            case '4':
                _0x3bcf28['style']['width'] = _0x55e4a8[_0x514800(0x17d)];
                continue;
            case '5':
                _0x3bcf28['style'][_0x514800(0x264)] = previousPosition['position'];
                continue;
            case '6':
                _0x46f62d['style'][_0x514800(0x16f)] = _0x55e4a8['LvSMi'];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x37c382) {
    const _0x106b17 = _0x562128, _0xad0de2 = {
            'udhBj': 'wdbWrapControl',
            'uCJXW': _0x106b17(0x2d3)
        }, _0x417dbd = document[_0x106b17(0x28e)](_0xad0de2['udhBj']);
    _0x37c382[_0x106b17(0x2a3)] === '▲' ? (_0x417dbd['style'][_0x106b17(0x16f)] = 'none', _0x37c382[_0x106b17(0x2a3)] = '▼') : (_0x417dbd[_0x106b17(0x2a5)][_0x106b17(0x16f)] = _0xad0de2['uCJXW'], _0x37c382[_0x106b17(0x2a3)] = '▲');
}
function drawSelectCoin() {
    const _0x326a97 = _0x562128, _0x3720e5 = {
            'hEuof': _0x326a97(0x1d8),
            'suzZp': function (_0x3568e3, _0x165e71) {
                return _0x3568e3(_0x165e71);
            }
        }, _0x438add = coins[_0x326a97(0x31f)](_0x55a666 => _0x326a97(0x2a1) + _0x55a666 + '\x22>' + _0x55a666 + _0x326a97(0x14f))['join']('');
    document[_0x326a97(0x28e)](_0x3720e5[_0x326a97(0x413)])[_0x326a97(0x1da)] = _0x438add, currency = _0x3720e5['suzZp'](String, coin)[_0x326a97(0x1c5)](), fengari[_0x326a97(0x176)](_0x326a97(0x2dc) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x3d8fbc = _0x562128, _0x494c0a = {
            'bIOCE': _0x3d8fbc(0x2f6),
            'ugrch': function (_0x1dd871, _0x1111b0) {
                return _0x1dd871 - _0x1111b0;
            },
            'vlPwn': function (_0x14222d, _0x273900) {
                return _0x14222d - _0x273900;
            },
            'TrdMi': function (_0x379204, _0x41e702) {
                return _0x379204 + _0x41e702;
            },
            'bOZFm': function (_0x8d02a5, _0x24e682) {
                return _0x8d02a5 + _0x24e682;
            },
            'EqHDz': function (_0x614388, _0x2cf77e) {
                return _0x614388 === _0x2cf77e;
            },
            'nILSF': _0x3d8fbc(0x414),
            'sHgHo': _0x3d8fbc(0x42e),
            'uMdnY': function (_0x1e682c, _0x542cd6) {
                return _0x1e682c / _0x542cd6;
            },
            'KdfFv': function (_0x261ae3, _0x1f2740) {
                return _0x261ae3 + _0x1f2740;
            },
            'BUMah': _0x3d8fbc(0x304),
            'nssAC': function (_0x5f0ab7) {
                return _0x5f0ab7();
            },
            'PRjTs': 'wdb',
            'cyWKC': _0x3d8fbc(0x3a6),
            'mgOru': 'wdbWrapLicenseBox',
            'OTpnM': _0x3d8fbc(0x1b0),
            'lsAek': _0x3d8fbc(0x393),
            'fjDhI': _0x3d8fbc(0x17a),
            'DuldA': _0x3d8fbc(0x286),
            'YdlUo': _0x3d8fbc(0x39a),
            'fEXBh': 'javascript',
            'iuqtU': 'wdbJSMode',
            'FfEGg': _0x3d8fbc(0x367),
            'ghRrp': 'wdbAdvancedMode',
            'wbobV': _0x3d8fbc(0x33b),
            'uPUno': _0x3d8fbc(0x3b4),
            'xCIOo': _0x3d8fbc(0x42d),
            'MEVqZ': _0x3d8fbc(0x310),
            'LcKxN': _0x3d8fbc(0x177),
            'vVUFS': _0x3d8fbc(0x19f),
            'cFJXg': _0x3d8fbc(0x2b9),
            'rGrcu': _0x3d8fbc(0x318),
            'SEtxv': _0x3d8fbc(0x19d)
        }, _0x4e0774 = document[_0x3d8fbc(0x3f8)]('div');
    _0x4e0774['id'] = _0x3d8fbc(0x21d), _0x4e0774[_0x3d8fbc(0x1da)] = wdbUI, document[_0x3d8fbc(0x247)][_0x3d8fbc(0x157)](_0x4e0774);
    const _0x3a71bf = document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x214)]);
    let _0x18af00 = 0x0, _0x4f9eec = 0x0, _0x5baf30 = 0x0, _0x3ea848 = 0x0;
    _0x494c0a[_0x3d8fbc(0x2e3)](loadSavedPosition), _0x3a71bf[_0x3d8fbc(0x2a5)]['top'] = previousPosition['top'], _0x3a71bf[_0x3d8fbc(0x2a5)][_0x3d8fbc(0x39d)] = previousPosition[_0x3d8fbc(0x39d)], _0x3a71bf['style']['position'] = previousPosition[_0x3d8fbc(0x264)];
    function _0x40e041(_0x3f04df) {
        const _0x3449e6 = _0x3d8fbc, _0x5753c7 = _0x494c0a[_0x3449e6(0x287)]['split']('|');
        let _0x1df5d5 = 0x0;
        while (!![]) {
            switch (_0x5753c7[_0x1df5d5++]) {
            case '0':
                _0x3f04df['preventDefault']();
                continue;
            case '1':
                document['onmousemove'] = _0x27cb56;
                continue;
            case '2':
                _0x3ea848 = _0x3f04df['clientY'];
                continue;
            case '3':
                _0x5baf30 = _0x3f04df[_0x3449e6(0x266)];
                continue;
            case '4':
                _0x3f04df = _0x3f04df || window['event'];
                continue;
            case '5':
                document[_0x3449e6(0x238)] = _0x2e5912;
                continue;
            }
            break;
        }
    }
    function _0x27cb56(_0xde3a69) {
        const _0x4bc830 = _0x3d8fbc;
        _0xde3a69 = _0xde3a69 || window[_0x4bc830(0x274)], _0xde3a69['preventDefault'](), _0x18af00 = _0x494c0a[_0x4bc830(0x3a8)](_0x5baf30, _0xde3a69['clientX']), _0x4f9eec = _0x494c0a[_0x4bc830(0x3a8)](_0x3ea848, _0xde3a69['clientY']), _0x5baf30 = _0xde3a69[_0x4bc830(0x266)], _0x3ea848 = _0xde3a69['clientY'];
        let _0x8d7efd = _0x494c0a[_0x4bc830(0x42b)](_0x3a71bf[_0x4bc830(0x401)], _0x4f9eec), _0x4b5c11 = _0x3a71bf[_0x4bc830(0x417)] - _0x18af00;
        _0x3a71bf[_0x4bc830(0x2a5)][_0x4bc830(0x416)] = _0x494c0a[_0x4bc830(0x263)](_0x8d7efd, 'px'), _0x3a71bf[_0x4bc830(0x2a5)][_0x4bc830(0x39d)] = _0x494c0a['bOZFm'](_0x4b5c11, 'px');
    }
    function _0x2e5912() {
        const _0x54ff8a = _0x3d8fbc, _0x471f5f = document[_0x54ff8a(0x28e)](_0x54ff8a(0x304));
        if (_0x471f5f && _0x494c0a[_0x54ff8a(0x175)](_0x471f5f[_0x54ff8a(0x2a3)], '▼')) {
            const _0x4e9a21 = window[_0x54ff8a(0x155)](_0x3a71bf);
            previousPosition[_0x54ff8a(0x416)] = _0x3a71bf['style'][_0x54ff8a(0x416)] || _0x4e9a21[_0x54ff8a(0x416)], previousPosition[_0x54ff8a(0x39d)] = _0x3a71bf[_0x54ff8a(0x2a5)][_0x54ff8a(0x39d)] || _0x4e9a21[_0x54ff8a(0x39d)], savePosition();
        }
        document['onmouseup'] = null, document['onmousemove'] = null;
    }
    document[_0x3d8fbc(0x28e)](_0x3d8fbc(0x1b4))[_0x3d8fbc(0x26c)] = _0x40e041, document[_0x3d8fbc(0x1e9)](_0x494c0a[_0x3d8fbc(0x1e3)], function (_0x341b61) {
        const _0x402241 = _0x3d8fbc;
        if (_0x341b61[_0x402241(0x39b)][_0x402241(0x1c5)]() === 'w') {
            const _0x1710d3 = document[_0x402241(0x1a3)], _0xc44caf = _0x494c0a[_0x402241(0x175)](_0x1710d3[_0x402241(0x36d)], _0x494c0a[_0x402241(0x256)]) || _0x494c0a[_0x402241(0x175)](_0x1710d3[_0x402241(0x36d)], _0x494c0a[_0x402241(0x2ad)]) || _0x1710d3[_0x402241(0x1b3)] || _0x1710d3[_0x402241(0x219)](_0x402241(0x197));
            if (!_0xc44caf) {
                const _0x236f58 = _0x494c0a[_0x402241(0x1ff)](window[_0x402241(0x37f)] - _0x3a71bf[_0x402241(0x17b)], 0x2), _0x276560 = _0x494c0a['uMdnY'](_0x494c0a[_0x402241(0x42b)](window[_0x402241(0x140)], _0x3a71bf[_0x402241(0x3cf)]), 0x2);
                _0x3a71bf['style'][_0x402241(0x416)] = _0x494c0a[_0x402241(0x263)](_0x236f58, 'px'), _0x3a71bf[_0x402241(0x2a5)][_0x402241(0x39d)] = _0x494c0a['KdfFv'](_0x276560, 'px');
                const _0x34844c = document[_0x402241(0x28e)](_0x494c0a['BUMah']);
                _0x34844c && _0x34844c[_0x402241(0x2a3)] === '▼' && (previousPosition[_0x402241(0x416)] = _0x3a71bf['style'][_0x402241(0x416)], previousPosition[_0x402241(0x39d)] = _0x3a71bf[_0x402241(0x2a5)][_0x402241(0x39d)], _0x494c0a[_0x402241(0x2e3)](savePosition));
            }
        }
    }), window[_0x3d8fbc(0x1e9)]('resize', function () {
        const _0x1cbbb7 = _0x3d8fbc, _0x487b47 = document[_0x1cbbb7(0x28e)]('wdbToggleMinimal');
        if (_0x487b47 && _0x494c0a[_0x1cbbb7(0x175)](_0x487b47[_0x1cbbb7(0x2a3)], '▲')) {
            const _0x3694d7 = window['innerWidth'], _0x4f8111 = 0x15e, _0x4abbda = _0x494c0a[_0x1cbbb7(0x1ff)](_0x494c0a['ugrch'](_0x3694d7, _0x4f8111), 0x2);
            _0x3a71bf['style'][_0x1cbbb7(0x39d)] = _0x494c0a[_0x1cbbb7(0x400)](_0x4abbda, 'px');
        }
    });
    if (document['getElementById'](_0x494c0a[_0x3d8fbc(0x16d)]))
        document[_0x3d8fbc(0x28e)](_0x3d8fbc(0x222))[_0x3d8fbc(0x3a0)]();
    if (document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x3b7)]))
        document['getElementById'](_0x494c0a[_0x3d8fbc(0x3b7)])[_0x3d8fbc(0x3a0)]();
    luaEditor = CodeMirror['fromTextArea'](document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x2e6)]), {
        'theme': _0x494c0a['fjDhI'],
        'mode': _0x494c0a[_0x3d8fbc(0x234)],
        'lineNumbers': !![]
    }), luaEditor[_0x3d8fbc(0x398)](), jsEditor = CodeMirror[_0x3d8fbc(0x37e)](document['getElementById'](_0x494c0a[_0x3d8fbc(0x189)]), {
        'theme': _0x494c0a[_0x3d8fbc(0x425)],
        'mode': _0x494c0a[_0x3d8fbc(0x335)],
        'lineNumbers': !![]
    }), jsEditor[_0x3d8fbc(0x398)](), document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x2be)])[_0x3d8fbc(0x2a5)][_0x3d8fbc(0x16f)] = _0x494c0a[_0x3d8fbc(0x320)], document[_0x3d8fbc(0x28e)](_0x494c0a['ghRrp'])['style']['display'] = _0x494c0a[_0x3d8fbc(0x320)], document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x26f)])['style'][_0x3d8fbc(0x16f)] = 'none', document['getElementById'](_0x494c0a[_0x3d8fbc(0x258)])[_0x3d8fbc(0x2a5)][_0x3d8fbc(0x16f)] = _0x494c0a[_0x3d8fbc(0x320)], document['getElementById'](_0x3d8fbc(0x149))['style'][_0x3d8fbc(0x16f)] = _0x494c0a['FfEGg'], document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x27a)])[_0x3d8fbc(0x2a5)]['display'] = _0x494c0a['FfEGg'], document[_0x3d8fbc(0x28e)](_0x494c0a['MEVqZ'])[_0x3d8fbc(0x29d)] = !![];
    const _0xa20e69 = document[_0x3d8fbc(0x28e)]('wdbOpenLUAScript');
    _0xa20e69[_0x3d8fbc(0x1e9)](_0x494c0a[_0x3d8fbc(0x369)], () => {
        _0xa20e69['value'] = null;
    }), _0xa20e69[_0x3d8fbc(0x1e9)](_0x494c0a[_0x3d8fbc(0x1b9)], async _0x5a7cbf => {
        const _0x4ba91e = _0x3d8fbc, _0x10ec15 = await new Response(_0x5a7cbf[_0x4ba91e(0x41d)][_0x4ba91e(0x317)][0x0])['text']();
        if (!_0x10ec15)
            return;
        luaEditor[_0x4ba91e(0x277)](_0x10ec15);
    });
    const _0x17806f = document[_0x3d8fbc(0x28e)](_0x494c0a[_0x3d8fbc(0x39c)]);
    return _0x17806f[_0x3d8fbc(0x1e9)](_0x494c0a[_0x3d8fbc(0x369)], () => {
        const _0x1b09a0 = _0x3d8fbc;
        _0x17806f[_0x1b09a0(0x3f9)] = null;
    }), _0x17806f[_0x3d8fbc(0x1e9)](_0x494c0a[_0x3d8fbc(0x1b9)], async _0xffa5b1 => {
        const _0x5a50d5 = _0x3d8fbc, _0x3c5af2 = await new Response(_0xffa5b1['target'][_0x5a50d5(0x317)][0x0])[_0x5a50d5(0x3ff)]();
        if (!_0x3c5af2)
            return;
        jsEditor[_0x5a50d5(0x277)](_0x3c5af2);
    }), chart = new Chart(_0x494c0a['rGrcu'], ![], 0x64), _0x494c0a['SEtxv'];
}
async function wdbLoader(_0x9db4d1) {
    const _0x9d3ed3 = _0x562128, _0x52c883 = {
            'ekgdc': _0x9d3ed3(0x2f8),
            'mrjEf': _0x9d3ed3(0x2b3),
            'qqKux': _0x9d3ed3(0x15d),
            'VOuhp': function (_0x12fbbd, _0x2b24ac) {
                return _0x12fbbd + _0x2b24ac;
            },
            'MXAfW': _0x9d3ed3(0x26a),
            'gqUgr': function (_0x40fb0f, _0x3e5891) {
                return _0x40fb0f + _0x3e5891;
            },
            'pqGzK': '/canvasjs.min.js',
            'hcvpM': _0x9d3ed3(0x3f7),
            'XEDZm': function (_0x26e998, _0x1266e2) {
                return _0x26e998(_0x1266e2);
            },
            'oWhjp': function (_0x28ef19) {
                return _0x28ef19();
            },
            'vProa': function (_0x4eeb16, _0xcc8c36) {
                return _0x4eeb16 === _0xcc8c36;
            },
            'kvjNE': _0x9d3ed3(0x40b),
            'rAzpQ': '#wdbMenuMode\x20option[value=\x22advanced\x22]',
            'Mnamu': function (_0x6e4438, _0x15d6c9) {
                return _0x6e4438 === _0x15d6c9;
            },
            'jXzHK': _0x9d3ed3(0x2ce)
        }, _0x36ecb0 = [
            _0x9d3ed3(0x325),
            _0x9d3ed3(0x25a),
            _0x52c883[_0x9d3ed3(0x32c)],
            _0x52c883[_0x9d3ed3(0x3ba)],
            _0x52c883['qqKux'],
            _0x52c883[_0x9d3ed3(0x160)](WDB_LIB, _0x52c883[_0x9d3ed3(0x164)]),
            _0x52c883[_0x9d3ed3(0x3f5)](WDB_LIB, _0x52c883[_0x9d3ed3(0x2b6)])
        ], _0xbddb85 = [
            _0x9d3ed3(0x3a5),
            _0x52c883[_0x9d3ed3(0x2f1)]
        ];
    for (const _0x2d1ced of _0x36ecb0) {
        await _0x9db4d1['loadScript'](_0x2d1ced);
    }
    for (const _0x307804 of _0xbddb85) {
        await _0x9db4d1[_0x9d3ed3(0x37d)](_0x307804);
    }
    await _0x52c883[_0x9d3ed3(0x25f)](beforeWork, _0x9db4d1), await _0x52c883[_0x9d3ed3(0x1ad)](wdbCreateUI), await _0x52c883['oWhjp'](getListCoin), await initLua();
    if (_0x52c883[_0x9d3ed3(0x14d)](game, _0x52c883[_0x9d3ed3(0x399)]))
        luaEditor[_0x9d3ed3(0x277)](rangediceLuaScript), jsEditor[_0x9d3ed3(0x277)](rangediceJsScript), document[_0x9d3ed3(0x305)](_0x9d3ed3(0x389))[_0x9d3ed3(0x29d)] = !![];
    else {
        if (game === 'plinko')
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0x9d3ed3(0x277)](plinkoJsScript), document[_0x9d3ed3(0x305)](_0x52c883[_0x9d3ed3(0x2a4)])[_0x9d3ed3(0x29d)] = !![];
        else
            _0x52c883[_0x9d3ed3(0x2b5)](game, _0x52c883['jXzHK']) && (luaEditor[_0x9d3ed3(0x277)](kenoLuaScript), jsEditor[_0x9d3ed3(0x277)](kenoJsScript), document['querySelector'](_0x52c883[_0x9d3ed3(0x2a4)])[_0x9d3ed3(0x29d)] = !![]);
    }
    return _0x52c883[_0x9d3ed3(0x25f)](log, _0x9d3ed3(0x254)), _0x9d3ed3(0x281);
}
function toggleNav(_0x2d5fe3) {
    const _0x3eb5ce = _0x562128, _0x1399b4 = {
            'CnICF': function (_0x417869, _0x25ba81) {
                return _0x417869 === _0x25ba81;
            },
            'EFaoJ': _0x3eb5ce(0x329),
            'ezidh': _0x3eb5ce(0x367),
            'JQwPq': _0x3eb5ce(0x40d),
            'lQIdK': 'Log',
            'EIdsg': _0x3eb5ce(0x3fb),
            'GmxZW': _0x3eb5ce(0x394),
            'bxlfs': 'Tips'
        }, _0x565aa3 = [
            _0x1399b4['JQwPq'],
            _0x1399b4[_0x3eb5ce(0x370)],
            _0x1399b4['EIdsg'],
            _0x1399b4['GmxZW'],
            _0x1399b4['bxlfs']
        ];
    _0x565aa3[_0x3eb5ce(0x24a)](_0x231c3f => {
        const _0x467ea8 = _0x3eb5ce, _0x4dacd6 = _0x1399b4[_0x467ea8(0x30c)](_0x231c3f['toLowerCase'](), _0x2d5fe3) ? _0x1399b4['EFaoJ'] : _0x1399b4[_0x467ea8(0x380)];
        document[_0x467ea8(0x28e)]('wdbWrap' + _0x231c3f)[_0x467ea8(0x2a5)][_0x467ea8(0x16f)] = _0x4dacd6, document[_0x467ea8(0x28e)](_0x467ea8(0x20c) + _0x231c3f)[_0x467ea8(0x29d)] = _0x1399b4['CnICF'](_0x4dacd6, _0x1399b4[_0x467ea8(0x2c5)]);
    });
}
function toggleShow(_0x2c5e1f) {
    const _0x223125 = _0x562128, _0x3654cf = {
            'JwBej': function (_0x2900c4, _0x2505f1) {
                return _0x2900c4 + _0x2505f1;
            }
        }, _0x1839f1 = document[_0x223125(0x28e)](_0x223125(0x2de) + _0x3654cf[_0x223125(0x217)](_0x2c5e1f[_0x223125(0x224)](0x0)[_0x223125(0x1c0)](), _0x2c5e1f[_0x223125(0x24f)](0x1)))[_0x223125(0x282)];
    selectFunction(_0x1839f1 ? _0x223125(0x1a2) + _0x2c5e1f : _0x223125(0x17e) + _0x2c5e1f);
}
function toggleLive(_0x1326c1) {
    const _0x2baaea = _0x562128, _0xd19949 = {
            'eUFTm': function (_0x3140b7, _0x171b27) {
                return _0x3140b7 + _0x171b27;
            },
            'wdymi': function (_0x1f9485, _0x1d59d8) {
                return _0x1f9485(_0x1d59d8);
            },
            'CQTkG': 'start',
            'jMEcL': _0x2baaea(0x1cf)
        }, _0x5f17c4 = document[_0x2baaea(0x28e)](_0x2baaea(0x35c) + _0xd19949[_0x2baaea(0x1e0)](_0x1326c1[_0x2baaea(0x224)](0x0)[_0x2baaea(0x1c0)](), _0x1326c1[_0x2baaea(0x24f)](0x1)))[_0x2baaea(0x282)];
    _0xd19949[_0x2baaea(0x2af)](selectFunction, '' + (_0x5f17c4 ? _0xd19949[_0x2baaea(0x190)] : _0xd19949[_0x2baaea(0x245)]) + _0x1326c1);
}
function selectFunction(_0x1a0e1e) {
    const _0x41a8fd = _0x562128, _0x36c5fa = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x41a8fd(0x18f)),
            'resethistory': () => toggleHistory(_0x41a8fd(0x1a4)),
            'resetlog': () => toggleLog(_0x41a8fd(0x1a4)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x41a8fd(0x1cf)),
            'startchart': () => toggleChart(_0x41a8fd(0x3c4)),
            'stophistory': () => toggleHistory(_0x41a8fd(0x1cf)),
            'starthistory': () => toggleHistory(_0x41a8fd(0x3c4)),
            'stoplog': () => toggleLog('stop'),
            'startlog': () => toggleLog(_0x41a8fd(0x3c4)),
            'hidestats': () => toggleStats(_0x41a8fd(0x17e)),
            'showstats': () => toggleStats(_0x41a8fd(0x1a2)),
            'hidechart': () => toggleChart(_0x41a8fd(0x17e)),
            'showchart': () => toggleChart(_0x41a8fd(0x1a2)),
            'hidehistory': () => toggleHistory(_0x41a8fd(0x17e)),
            'showhistory': () => toggleHistory(_0x41a8fd(0x1a2))
        };
    if (_0x36c5fa[_0x1a0e1e])
        _0x36c5fa[_0x1a0e1e]();
}
function toggleMode(_0x4d602f) {
    const _0x2afc0a = _0x562128, _0x5431bc = {
            'izkny': function (_0x4d52b6, _0x45c7a1) {
                return _0x4d52b6 === _0x45c7a1;
            },
            'kotDk': _0x2afc0a(0x40b),
            'yMLte': function (_0x1f998a, _0x3220df) {
                return _0x1f998a === _0x3220df;
            },
            'SgwTJ': 'keno',
            'PKbdx': _0x2afc0a(0x1e5),
            'dWXuG': _0x2afc0a(0x2fb),
            'RmGNp': _0x2afc0a(0x286),
            'auzdX': _0x2afc0a(0x329),
            'DYkpS': _0x2afc0a(0x367),
            'UqEUh': _0x2afc0a(0x3f2)
        };
    mode = _0x4d602f;
    if (_0x5431bc[_0x2afc0a(0x2c9)](game, _0x5431bc[_0x2afc0a(0x195)]))
        luaEditor['setValue'](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript);
    else {
        if (_0x5431bc[_0x2afc0a(0x2c9)](game, _0x2afc0a(0x2ba)))
            luaEditor[_0x2afc0a(0x277)](plinkoLuaScript), jsEditor[_0x2afc0a(0x277)](plinkoJsScript);
        else
            _0x5431bc[_0x2afc0a(0x20a)](game, _0x5431bc[_0x2afc0a(0x2d4)]) && (luaEditor[_0x2afc0a(0x277)](kenoLuaScript), jsEditor[_0x2afc0a(0x277)](kenoJsScript));
    }
    const _0x3c830e = document[_0x2afc0a(0x28e)](_0x5431bc['PKbdx']), _0x5743b7 = document['getElementById']('wdbJSMode'), _0x1299ea = document[_0x2afc0a(0x28e)](_0x5431bc[_0x2afc0a(0x161)]);
    _0x3c830e[_0x2afc0a(0x2a5)]['display'] = _0x5431bc[_0x2afc0a(0x20a)](_0x4d602f, _0x5431bc[_0x2afc0a(0x351)]) ? _0x2afc0a(0x329) : _0x2afc0a(0x367), _0x5743b7['style']['display'] = _0x5431bc[_0x2afc0a(0x20a)](_0x4d602f, 'js') ? _0x5431bc['auzdX'] : _0x5431bc[_0x2afc0a(0x38f)], _0x1299ea['style']['display'] = _0x4d602f === _0x5431bc['UqEUh'] ? _0x5431bc[_0x2afc0a(0x39e)] : _0x5431bc[_0x2afc0a(0x38f)], luaEditor[_0x2afc0a(0x272)](), jsEditor[_0x2afc0a(0x272)]();
}
function toggleStats(_0x2bc6e3) {
    const _0x34395f = _0x562128, _0x4a8b8f = {
            'IPhPN': function (_0xe7e57b, _0x4f5f47) {
                return _0xe7e57b === _0x4f5f47;
            },
            'xpVtG': _0x34395f(0x17e),
            'HQjzw': 'none',
            'CUydH': _0x34395f(0x2d3),
            'yUSoE': _0x34395f(0x28c)
        }, _0x2af501 = _0x4a8b8f[_0x34395f(0x353)](_0x2bc6e3, _0x4a8b8f[_0x34395f(0x1ab)]) ? _0x4a8b8f[_0x34395f(0x1bd)] : _0x4a8b8f['CUydH'];
    document[_0x34395f(0x28e)](_0x4a8b8f[_0x34395f(0x14e)])[_0x34395f(0x2a5)][_0x34395f(0x16f)] = _0x2af501;
}
function toggleChart(_0x374bcb) {
    const _0x2de2dd = _0x562128, _0x4d1354 = {
            'DgsIH': _0x2de2dd(0x318),
            'bJMhp': 'wdbWrapHistory',
            'ZmCCm': 'hide',
            'gGelc': _0x2de2dd(0x367),
            'MnTZy': 'show',
            'OSZNN': _0x2de2dd(0x329),
            'UHwmN': _0x2de2dd(0x1e4),
            'bEmLQ': _0x2de2dd(0x1cf),
            'ZYcHV': _0x2de2dd(0x18f)
        }, _0x1b1126 = document[_0x2de2dd(0x28e)](_0x4d1354[_0x2de2dd(0x1df)]), _0x5796ae = document[_0x2de2dd(0x28e)](_0x4d1354[_0x2de2dd(0x2fa)]);
    switch (_0x374bcb) {
    case _0x4d1354['ZmCCm']:
        _0x1b1126['style'][_0x2de2dd(0x16f)] = _0x4d1354[_0x2de2dd(0x1f5)], _0x5796ae[_0x2de2dd(0x2a5)][_0x2de2dd(0x3dd)] = '380px';
        break;
    case _0x4d1354[_0x2de2dd(0x267)]:
        _0x1b1126['style'][_0x2de2dd(0x16f)] = _0x4d1354['OSZNN'], _0x5796ae[_0x2de2dd(0x2a5)][_0x2de2dd(0x3dd)] = _0x4d1354[_0x2de2dd(0x296)];
        break;
    case _0x4d1354['bEmLQ']:
        stopChart = !![];
        break;
    case _0x2de2dd(0x3c4):
        stopChart = ![];
        break;
    case _0x4d1354[_0x2de2dd(0x366)]:
        betsChart = 0x0, profitChart = 0x0, chart['resetChart']();
        break;
    }
}
function toggleHistory(_0x31d885) {
    const _0x14a96f = _0x562128, _0x3be0e4 = {
            'MDEVp': _0x14a96f(0x1a7),
            'wnCxE': 'hide',
            'NYwYQ': _0x14a96f(0x367),
            'Wbohm': _0x14a96f(0x3b0),
            'HqkBW': _0x14a96f(0x329),
            'OXPni': '190px',
            'rVeCt': _0x14a96f(0x3c4),
            'OPcOG': _0x14a96f(0x1a4)
        }, _0x5e1c4a = document[_0x14a96f(0x28e)](_0x3be0e4[_0x14a96f(0x388)]), _0x475bbe = document[_0x14a96f(0x28e)]('wdbChart');
    switch (_0x31d885) {
    case _0x3be0e4['wnCxE']:
        _0x5e1c4a[_0x14a96f(0x2a5)][_0x14a96f(0x16f)] = _0x3be0e4['NYwYQ'], _0x475bbe[_0x14a96f(0x2a5)][_0x14a96f(0x3dd)] = _0x3be0e4[_0x14a96f(0x390)];
        break;
    case _0x14a96f(0x1a2):
        _0x5e1c4a['style']['display'] = _0x3be0e4[_0x14a96f(0x1b6)], _0x475bbe[_0x14a96f(0x2a5)][_0x14a96f(0x3dd)] = _0x3be0e4[_0x14a96f(0x354)];
        break;
    case _0x14a96f(0x1cf):
        stopHistory = !![];
        break;
    case _0x3be0e4[_0x14a96f(0x3d6)]:
        stopHistory = ![];
        break;
    case _0x3be0e4[_0x14a96f(0x35b)]:
        _0x5e1c4a[_0x14a96f(0x1da)] = '';
        break;
    }
}
function toggleLog(_0x1fd913) {
    const _0x37ea40 = _0x562128, _0x4de00d = {
            'CCqao': 'stop',
            'kblwn': _0x37ea40(0x3c4),
            'uNcKr': _0x37ea40(0x1a4),
            'URbfn': _0x37ea40(0x261)
        };
    switch (_0x1fd913) {
    case _0x4de00d['CCqao']:
        stopLog = !![];
        break;
    case _0x4de00d[_0x37ea40(0x2bc)]:
        stopLog = ![];
        break;
    case _0x4de00d[_0x37ea40(0x262)]:
        document[_0x37ea40(0x28e)](_0x4de00d[_0x37ea40(0x230)])[_0x37ea40(0x1da)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x368c78 = _0x562128, _0x4f9bae = {
            'imAxw': _0x368c78(0x171),
            'tTPfW': function (_0xc50142, _0x3dff55) {
                return _0xc50142(_0x3dff55);
            },
            'gvgYK': _0x368c78(0x1fe),
            'JdJey': function (_0x38592e, _0x2a4ae7) {
                return _0x38592e(_0x2a4ae7);
            },
            'JxwIl': _0x368c78(0x1ec),
            'ULbEX': _0x368c78(0x236),
            'DRZYn': _0x368c78(0x36a),
            'SKKBJ': function (_0xfcab42, _0x1f7834) {
                return _0xfcab42(_0x1f7834);
            },
            'GpglN': function (_0x27a8a0, _0x49af3a) {
                return _0x27a8a0(_0x49af3a);
            },
            'ldLkO': _0x368c78(0x2f7),
            'cmnbv': _0x368c78(0x2c8),
            'hxVeG': _0x368c78(0x3c0),
            'FbDOD': _0x368c78(0x23b),
            'bKVIg': function (_0x235d08, _0x417a18) {
                return _0x235d08(_0x417a18);
            },
            'LWtej': 'advancedBetHighOnBet',
            'yxotg': function (_0x11df95, _0x24a2cf) {
                return _0x11df95 === _0x24a2cf;
            },
            'CfSsf': function (_0x4b610b, _0x56bad4) {
                return _0x4b610b % _0x56bad4;
            },
            'RAjWp': _0x368c78(0x1e7),
            'duOmw': function (_0x396800, _0x95e3dc) {
                return _0x396800(_0x95e3dc);
            },
            'aDrpe': _0x368c78(0x1cc),
            'jHonY': function (_0x5d96bb, _0x1911fc) {
                return _0x5d96bb >= _0x1911fc;
            },
            'EPVWa': _0x368c78(0x2e0),
            'jPLUW': function (_0x5e79ed) {
                return _0x5e79ed();
            },
            'AKRQM': _0x368c78(0x375),
            'HCguo': function (_0x8db95b, _0x4bd0a6) {
                return _0x8db95b + _0x4bd0a6;
            },
            'ETvdh': _0x368c78(0x1f3),
            'qfskb': _0x368c78(0x346),
            'NSiCS': function (_0x2c7e42, _0x3c7457) {
                return _0x2c7e42(_0x3c7457);
            },
            'exXSo': function (_0x32e825, _0x5c35a3) {
                return _0x32e825 > _0x5c35a3;
            },
            'XdPka': function (_0x4c47de) {
                return _0x4c47de();
            },
            'bvxXG': _0x368c78(0x383),
            'nldqH': function (_0x231434, _0x33242b) {
                return _0x231434 <= _0x33242b;
            },
            'LOmcY': function (_0x1d9273, _0xb4ee31) {
                return _0x1d9273 + _0xb4ee31;
            },
            'YiSZd': function (_0x1a1866, _0x53555c) {
                return _0x1a1866(_0x53555c);
            },
            'ChtWx': _0x368c78(0x3e0),
            'HGyLE': 'advancedStopOnWins',
            'MJkvi': function (_0x1da0c5, _0x4200ab) {
                return _0x1da0c5 + _0x4200ab;
            },
            'eTljV': _0x368c78(0x2b1),
            'YdAlw': _0x368c78(0x225),
            'TQtQO': function (_0xedb3b2, _0x1972e4) {
                return _0xedb3b2(_0x1972e4);
            },
            'esDzg': _0x368c78(0x404),
            'RPuml': function (_0x54b2d3, _0x49925a) {
                return _0x54b2d3(_0x49925a);
            },
            'NtEJq': function (_0x1ab097, _0x1b4b2b) {
                return _0x1ab097 + _0x1b4b2b;
            },
            'Utkqh': _0x368c78(0x32d),
            'FTQKb': _0x368c78(0x396),
            'oYKfV': function (_0x4825fe, _0x47bf36) {
                return _0x4825fe >= _0x47bf36;
            },
            'LKgTI': function (_0xea66ba, _0x344585) {
                return _0xea66ba(_0x344585);
            },
            'BAqcQ': _0x368c78(0x1a1),
            'YilCN': function (_0x4e3303, _0x5d0d77) {
                return _0x4e3303 >= _0x5d0d77;
            },
            'GAhDa': function (_0x4e8fe1) {
                return _0x4e8fe1();
            },
            'AVKuq': function (_0x3c0d86, _0x16c6d7) {
                return _0x3c0d86 + _0x16c6d7;
            },
            'juNTR': 'Stop\x20on\x20balance\x20',
            'gUztV': _0x368c78(0x293),
            'yabhh': _0x368c78(0x1fd),
            'fPThh': function (_0x27ef59, _0x2059be) {
                return _0x27ef59 === _0x2059be;
            },
            'GoRCW': function (_0x506a47, _0x31101d) {
                return _0x506a47 % _0x31101d;
            },
            'tsixj': function (_0x10fdc3, _0x3ef237) {
                return _0x10fdc3 * _0x3ef237;
            },
            'qNJAZ': 'advancedBetHighOnLoseCheck',
            'YIkBu': function (_0x39c2df, _0x17ee7e) {
                return _0x39c2df === _0x17ee7e;
            },
            'xlIwV': function (_0x6f0782, _0x413f63) {
                return _0x6f0782 % _0x413f63;
            },
            'PlMOa': function (_0x32e339, _0xf51fa7) {
                return _0x32e339 === _0xf51fa7;
            },
            'PYlRd': 'handleAdvanced\x20ok'
        };
    chance = Number(document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x357)])['value']);
    const _0x3f78ec = document['getElementById']('advancedChanceOnWinCheck')[_0x368c78(0x282)], _0x8160b8 = _0x3f78ec ? Number(document[_0x368c78(0x28e)](_0x368c78(0x3b3))[_0x368c78(0x3f9)]) : chance, _0x4db4fe = _0x4f9bae[_0x368c78(0x29a)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x2c0)])[_0x368c78(0x3f9)]), _0xd5fc81 = document['getElementById']('advancedChanceOnLoseCheck')[_0x368c78(0x282)], _0x2a8dc5 = _0xd5fc81 ? _0x4f9bae[_0x368c78(0x397)](Number, document[_0x368c78(0x28e)](_0x4f9bae['JxwIl'])[_0x368c78(0x3f9)]) : chance, _0x3fff3c = Number(document[_0x368c78(0x28e)](_0x4f9bae['ULbEX'])['value']), _0xf1a794 = document['getElementById'](_0x4f9bae[_0x368c78(0x337)])['checked'], _0x3e6674 = _0xf1a794 ? _0x4f9bae[_0x368c78(0x40f)](Number, document[_0x368c78(0x28e)](_0x368c78(0x3e8))[_0x368c78(0x3f9)]) : 0x1, _0x3527d5 = _0x4f9bae[_0x368c78(0x336)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x302)])['value']), _0x442c45 = document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x2fe)])[_0x368c78(0x282)], _0x58e868 = _0x442c45 ? Number(document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x24b)])[_0x368c78(0x3f9)]) : 0x1, _0x20c589 = Number(document[_0x368c78(0x28e)]('advancedMultiOnLoseBets')[_0x368c78(0x3f9)]), _0x4845b9 = document['getElementById'](_0x4f9bae['FbDOD'])['checked'];
    if (_0x4845b9) {
        const _0x328b2d = _0x4f9bae[_0x368c78(0x321)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x360)])['value']);
        if (_0x4f9bae['yxotg'](_0x4f9bae[_0x368c78(0x1d0)](bets, _0x328b2d), 0x0))
            bethigh = !bethigh;
    }
    const _0x1508e0 = document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x24e)])[_0x368c78(0x282)];
    if (_0x1508e0) {
        const _0x2477ae = _0x4f9bae[_0x368c78(0x378)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x35f)])[_0x368c78(0x3f9)]);
        if (_0x4f9bae[_0x368c78(0x198)](profit, _0x2477ae))
            bethigh = !bethigh;
    }
    const _0x4cec7e = document[_0x368c78(0x28e)](_0x4f9bae['EPVWa'])[_0x368c78(0x282)];
    if (_0x4cec7e) {
        const _0x3d409b = _0x4f9bae[_0x368c78(0x397)](Number, document[_0x368c78(0x28e)](_0x368c78(0x23a))[_0x368c78(0x3f9)]);
        if (_0x4f9bae['jHonY'](profit, _0x3d409b))
            _0x4f9bae['jPLUW'](resetstats);
    }
    const _0x5de3aa = document['getElementById'](_0x368c78(0x405))[_0x368c78(0x282)];
    if (_0x5de3aa) {
        const _0xc5abe7 = _0x4f9bae[_0x368c78(0x378)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x229)])['value']);
        if (_0x4f9bae[_0x368c78(0x343)](lastBet[_0x368c78(0x427)], _0xc5abe7))
            stop(), log(_0x4f9bae[_0x368c78(0x2ee)](_0x4f9bae[_0x368c78(0x38a)], _0xc5abe7));
    }
    const _0x5578dd = document[_0x368c78(0x28e)](_0x4f9bae['qfskb'])[_0x368c78(0x282)];
    if (_0x5578dd) {
        const _0x579cc2 = _0x4f9bae[_0x368c78(0x350)](Number, document[_0x368c78(0x28e)](_0x368c78(0x283))[_0x368c78(0x3f9)]);
        if (_0x4f9bae['exXSo'](_0x579cc2, 0x0)) {
            if (_0x4f9bae['jHonY'](currentstreak, _0x579cc2))
                _0x4f9bae['XdPka'](stop), _0x4f9bae[_0x368c78(0x40f)](log, _0x4f9bae[_0x368c78(0x2ee)](_0x4f9bae[_0x368c78(0x3c6)], _0x579cc2));
        } else {
            if (_0x4f9bae[_0x368c78(0x3c2)](currentstreak, _0x579cc2))
                _0x4f9bae[_0x368c78(0x3a4)](stop), log(_0x4f9bae[_0x368c78(0x16a)](_0x368c78(0x383), _0x579cc2));
        }
    }
    const _0x3561ca = document[_0x368c78(0x28e)]('advancedStopOnBetsCheck')[_0x368c78(0x282)];
    if (_0x3561ca) {
        const _0xfb1a12 = _0x4f9bae[_0x368c78(0x36f)](Number, document[_0x368c78(0x28e)](_0x368c78(0x3c8))[_0x368c78(0x3f9)]);
        if (_0x4f9bae['jHonY'](bets, _0xfb1a12))
            stop(), log(_0x4f9bae[_0x368c78(0x16a)](_0x4f9bae[_0x368c78(0x2ee)](_0x4f9bae[_0x368c78(0x1c7)], _0xfb1a12), _0x368c78(0x1bb)));
    }
    const _0x34c9a1 = document['getElementById'](_0x368c78(0x2bf))[_0x368c78(0x282)];
    if (_0x34c9a1) {
        const _0x15a567 = _0x4f9bae[_0x368c78(0x350)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x255)])[_0x368c78(0x3f9)]);
        if (_0x4f9bae[_0x368c78(0x198)](winstreak, _0x15a567))
            stop(), log(_0x4f9bae[_0x368c78(0x2ee)](_0x4f9bae[_0x368c78(0x271)](_0x4f9bae[_0x368c78(0x1c7)], _0x15a567), _0x4f9bae[_0x368c78(0x228)]));
    }
    const _0x6cfce9 = document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x2d2)])['checked'];
    if (_0x6cfce9) {
        const _0x501759 = _0x4f9bae[_0x368c78(0x3eb)](Number, document['getElementById'](_0x4f9bae[_0x368c78(0x252)])['value']);
        if (losestreak >= _0x501759)
            _0x4f9bae['XdPka'](stop), _0x4f9bae[_0x368c78(0x209)](log, _0x4f9bae[_0x368c78(0x3ae)](_0x4f9bae['ChtWx'] + _0x501759, '\x20lose'));
    }
    const _0x322973 = document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x33e)])[_0x368c78(0x282)];
    if (_0x322973) {
        const _0x253151 = _0x4f9bae[_0x368c78(0x40f)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x331)])['value']);
        if (_0x4f9bae[_0x368c78(0x21e)](profit, _0x253151))
            _0x4f9bae[_0x368c78(0x3bd)](stop), _0x4f9bae[_0x368c78(0x1c3)](log, _0x368c78(0x3cd) + _0x253151);
    }
    const _0x2ec94a = document['getElementById'](_0x368c78(0x16c))[_0x368c78(0x282)];
    if (_0x2ec94a) {
        const _0x2e6164 = Number(document[_0x368c78(0x28e)](_0x4f9bae['BAqcQ'])[_0x368c78(0x3f9)]);
        if (_0x4f9bae[_0x368c78(0x34b)](balance, _0x2e6164))
            _0x4f9bae['GAhDa'](stop), _0x4f9bae[_0x368c78(0x378)](log, _0x4f9bae['AVKuq'](_0x4f9bae['juNTR'], _0x2e6164));
    }
    if (win) {
        const _0xd1eea5 = document['getElementById'](_0x4f9bae['gUztV'])[_0x368c78(0x282)];
        if (_0xd1eea5) {
            const _0x5e6249 = _0x4f9bae[_0x368c78(0x40f)](Number, document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x382)])[_0x368c78(0x3f9)]);
            if (_0x4f9bae[_0x368c78(0x2e9)](winstreak % _0x5e6249, 0x0))
                bethigh = !bethigh;
        }
        if (_0x4f9bae['yxotg'](winstreak % _0x4db4fe, 0x0))
            chance = _0x8160b8;
        if (_0xf1a794) {
            if (_0x4f9bae[_0x368c78(0x2e9)](_0x4f9bae[_0x368c78(0x339)](winstreak, _0x3527d5), 0x0))
                nextbet = _0x4f9bae[_0x368c78(0x188)](previousbet, _0x3e6674);
        } else
            nextbet = basebet;
    } else {
        const _0x12cd51 = document[_0x368c78(0x28e)](_0x4f9bae[_0x368c78(0x27c)])[_0x368c78(0x282)];
        if (_0x12cd51) {
            const _0x7c9f51 = _0x4f9bae[_0x368c78(0x3eb)](Number, document[_0x368c78(0x28e)]('advancedBetHighOnLose')[_0x368c78(0x3f9)]);
            if (_0x4f9bae[_0x368c78(0x174)](_0x4f9bae[_0x368c78(0x143)](losestreak, _0x7c9f51), 0x0))
                bethigh = !bethigh;
        }
        if (_0x4f9bae[_0x368c78(0x143)](losestreak, _0x3fff3c) === 0x0)
            chance = _0x2a8dc5;
        if (_0x442c45) {
            if (_0x4f9bae[_0x368c78(0x2e7)](_0x4f9bae[_0x368c78(0x339)](losestreak, _0x20c589), 0x0))
                nextbet = previousbet * _0x58e868;
        } else
            nextbet = basebet;
    }
    return _0x4f9bae[_0x368c78(0x355)];
}
function changeCoin() {
    const _0x3f59bb = _0x562128, _0xe0d74a = {
            'HqmfW': function (_0x1ab6fb) {
                return _0x1ab6fb();
            }
        };
    coin = document[_0x3f59bb(0x28e)]('wdbMenuCoin')[_0x3f59bb(0x3f9)], currency = coin[_0x3f59bb(0x1c5)](), fengari[_0x3f59bb(0x176)]('currency=\x22' + currency + '\x22')(), _0xe0d74a[_0x3f59bb(0x3fe)](checkbalance);
}
async function handleStats() {
    const _0x199ab1 = _0x562128, _0x35881c = {
            'wwsVO': function (_0x493e12, _0x46980a) {
                return _0x493e12 === _0x46980a;
            },
            'zKMUh': function (_0x466dc7) {
                return _0x466dc7();
            },
            'tvhNK': function (_0x477ff3, _0x3992ab) {
                return _0x477ff3 === _0x3992ab;
            },
            'jDDlc': function (_0x14177e, _0x5382de) {
                return _0x14177e && _0x5382de;
            },
            'pfvGx': function (_0x48b0dc) {
                return _0x48b0dc();
            },
            'rxcrb': function (_0x2d3da5, _0x2f7131) {
                return _0x2d3da5(_0x2f7131);
            },
            'fHrxz': function (_0x293c5a, _0x2c0056) {
                return _0x293c5a === _0x2c0056;
            },
            'cAFFw': _0x199ab1(0x299),
            'LCzGs': _0x199ab1(0x2cc),
            'TMPLk': function (_0x30a16f, _0x37851c) {
                return _0x30a16f > _0x37851c;
            },
            'WVKTD': function (_0x5364ed, _0x426d5f) {
                return _0x5364ed < _0x426d5f;
            },
            'fpqSd': function (_0x4c0ff0, _0x2d6c79) {
                return _0x4c0ff0 === _0x2d6c79;
            },
            'jbisk': _0x199ab1(0x2ce),
            'LZLmF': _0x199ab1(0x223),
            'AJUhn': function (_0x8f9134, _0x263f62) {
                return _0x8f9134 < _0x263f62;
            },
            'ukjeI': function (_0x3f028e, _0x1ff5fd) {
                return _0x3f028e === _0x1ff5fd;
            },
            'CHPYq': _0x199ab1(0x3f6),
            'iqiPz': function (_0x5bb9a9, _0xe986e6) {
                return _0x5bb9a9 < _0xe986e6;
            },
            'LPjDv': function (_0x206bba, _0x213590) {
                return _0x206bba > _0x213590;
            },
            'ZtkYg': function (_0x14ae28, _0xee1369) {
                return _0x14ae28 === _0xee1369;
            },
            'DvnyV': _0x199ab1(0x162),
            'KzaOQ': function (_0x65074b, _0xe1e653) {
                return _0x65074b > _0xe1e653;
            },
            'itlSk': function (_0x383690, _0x8fb7e2) {
                return _0x383690 || _0x8fb7e2;
            },
            'kKUMP': _0x199ab1(0x3bc),
            'uQFqU': _0x199ab1(0x273),
            'WIxNG': _0x199ab1(0x29f),
            'zSDjo': function (_0x5ab8f9, _0x406c7c) {
                return _0x5ab8f9 < _0x406c7c;
            },
            'dLyad': function (_0x348620, _0xbaad93) {
                return _0x348620 > _0xbaad93;
            },
            'iyAmi': function (_0x1dbee7, _0x6a5d1f) {
                return _0x1dbee7 < _0x6a5d1f;
            },
            'kUxVB': function (_0x2fdbf2, _0x596eff) {
                return _0x2fdbf2 > _0x596eff;
            },
            'HGlUg': function (_0x5f5484) {
                return _0x5f5484();
            }
        }, _0x10acbf = Date['now']();
    speedHistory['push'](_0x10acbf);
    const _0x32f1f0 = 0x2710;
    speedHistory = speedHistory[_0x199ab1(0x221)](_0x550934 => _0x10acbf - _0x550934 <= _0x32f1f0), bets++, lastBet[_0x199ab1(0x3e2)] = lastBet[_0x199ab1(0x3fd)], lastBet[_0x199ab1(0x41d)] = target, lastBet['Target'] = target;
    if (_0x35881c[_0x199ab1(0x3ce)](game, _0x199ab1(0x40b))) {
        const _0x43fa68 = _0x35881c[_0x199ab1(0x377)]['split']('|');
        let _0xf68e10 = 0x0;
        while (!![]) {
            switch (_0x43fa68[_0xf68e10++]) {
            case '0':
                lastBet['Chance3'] = chance3;
                continue;
            case '1':
                lastBet[_0x199ab1(0x184)] = chance3;
                continue;
            case '2':
                lastBet[_0x199ab1(0x38e)] = chance4;
                continue;
            case '3':
                lastBet[_0x199ab1(0x2ae)] = chance1;
                continue;
            case '4':
                lastBet['chance4'] = chance4;
                continue;
            case '5':
                lastBet['betSide'] = betSide;
                continue;
            case '6':
                lastBet[_0x199ab1(0x25c)] = chance2;
                continue;
            case '7':
                lastBet[_0x199ab1(0x19e)] = chance2;
                continue;
            case '8':
                lastBet[_0x199ab1(0x365)] = betSide;
                continue;
            case '9':
                lastBet[_0x199ab1(0x1fb)] = chance1;
                continue;
            }
            break;
        }
    }
    lastBet['result'] = result, lastBet[_0x199ab1(0x2d8)] = result, lastBet[_0x199ab1(0x239)] = currentprofit, lastBet[_0x199ab1(0x3db)] = currentprofit, lastBet[_0x199ab1(0x3d3)] = lastBet[_0x199ab1(0x213)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x35881c[_0x199ab1(0x30a)](game, _0x35881c[_0x199ab1(0x2f3)]))
        win = lastBet[_0x199ab1(0x1be)] ? _0x35881c[_0x199ab1(0x291)](lastBet[_0x199ab1(0x427)], lastBet['target']) : _0x35881c[_0x199ab1(0x246)](lastBet[_0x199ab1(0x427)], lastBet[_0x199ab1(0x41d)]);
    else {
        if (_0x35881c[_0x199ab1(0x165)](game, _0x199ab1(0x2ba)) || game === _0x35881c[_0x199ab1(0x2e8)])
            win = lastBet[_0x199ab1(0x239)] > 0x0;
        else {
            if (game === 'rangedice') {
                if (lastBet[_0x199ab1(0x18e)] === _0x35881c[_0x199ab1(0x38b)])
                    win = _0x35881c[_0x199ab1(0x291)](lastBet['roll'], lastBet[_0x199ab1(0x2ae)]) && _0x35881c['AJUhn'](lastBet['roll'], lastBet[_0x199ab1(0x25c)]);
                else {
                    if (_0x35881c[_0x199ab1(0x30e)](lastBet[_0x199ab1(0x18e)], _0x35881c[_0x199ab1(0x2ef)]))
                        win = _0x35881c[_0x199ab1(0x33a)](lastBet[_0x199ab1(0x3fd)], lastBet[_0x199ab1(0x2ae)]) || _0x35881c[_0x199ab1(0x40a)](lastBet['roll'], lastBet['chance2']);
                    else {
                        if (_0x35881c[_0x199ab1(0x3e5)](lastBet['betSide'], _0x35881c[_0x199ab1(0x37c)])) {
                            const _0xfd5894 = _0x35881c[_0x199ab1(0x40a)](lastBet['roll'], lastBet[_0x199ab1(0x2ae)]) && _0x35881c[_0x199ab1(0x246)](lastBet[_0x199ab1(0x3fd)], lastBet[_0x199ab1(0x25c)]), _0x5bdb5c = _0x35881c[_0x199ab1(0x13f)](lastBet['roll'], lastBet[_0x199ab1(0x184)]) && _0x35881c[_0x199ab1(0x33a)](lastBet['roll'], lastBet[_0x199ab1(0x3a7)]);
                            win = _0x35881c['itlSk'](_0xfd5894, _0x5bdb5c);
                        }
                    }
                }
            } else
                win = lastBet[_0x199ab1(0x427)] >= lastBet[_0x199ab1(0x41d)];
        }
    }
    if (win)
        color = _0x35881c['kKUMP'], wins++, winstreak++, losestreak = 0x0, currentstreak = winstreak;
    else {
        const _0x432084 = _0x35881c[_0x199ab1(0x20d)][_0x199ab1(0x1d1)]('|');
        let _0x160d37 = 0x0;
        while (!![]) {
            switch (_0x432084[_0x160d37++]) {
            case '0':
                losestreak++;
                continue;
            case '1':
                losses++;
                continue;
            case '2':
                if (_0x35881c['KzaOQ'](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '3':
                winstreak = 0x0;
                continue;
            case '4':
                currentstreak = -losestreak;
                continue;
            case '5':
                color = _0x35881c[_0x199ab1(0x32f)];
                continue;
            }
            break;
        }
    }
    if (_0x35881c['TMPLk'](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x35881c[_0x199ab1(0x291)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x35881c[_0x199ab1(0x291)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x35881c[_0x199ab1(0x1c8)](balance, minbalance))
        minbalance = balance;
    if (_0x35881c[_0x199ab1(0x385)](balance, maxbalance))
        maxbalance = balance;
    if (_0x35881c[_0x199ab1(0x15a)](profit, minprofit))
        minprofit = profit;
    if (_0x35881c[_0x199ab1(0x1ee)](profit, maxprofit))
        maxprofit = profit;
    _0x35881c[_0x199ab1(0x185)](showInfo)[_0x199ab1(0x2d9)](async () => {
        const _0x320c15 = _0x199ab1;
        try {
            if (_0x35881c[_0x320c15(0x30a)](mode, _0x320c15(0x286)))
                await _0x35881c[_0x320c15(0x24c)](updateLua);
            else {
                if (_0x35881c[_0x320c15(0x30a)](mode, 'js'))
                    await dobet();
                else
                    _0x35881c[_0x320c15(0x1cd)](mode, _0x320c15(0x3f2)) && await _0x35881c[_0x320c15(0x24c)](handleAdvanced);
            }
            if (_0x35881c[_0x320c15(0x395)](win, sOW))
                _0x35881c[_0x320c15(0x24c)](stop);
            if (run)
                playBet();
        } catch (_0x4fc387) {
            _0x35881c[_0x320c15(0x19a)](stop), _0x35881c['rxcrb'](log, _0x4fc387);
        }
    });
}
async function showInfo() {
    const _0x2de524 = _0x562128, _0x44cc35 = {
            'SQTAz': function (_0x184baf, _0x240b48) {
                return _0x184baf === _0x240b48;
            },
            'PVQAk': _0x2de524(0x319),
            'fvsLt': 'red',
            'BSAhB': _0x2de524(0x3bc),
            'YcDor': _0x2de524(0x1de),
            'VSbDr': function (_0x1e613b, _0x2657ca) {
                return _0x1e613b > _0x2657ca;
            },
            'PAtuH': function (_0x2069cc, _0x1bc2bd) {
                return _0x2069cc > _0x1bc2bd;
            },
            'Fdjpt': _0x2de524(0x2b2),
            'Ejtgh': _0x2de524(0x3d8),
            'UfvTK': _0x2de524(0x403),
            'UiZXn': _0x2de524(0x330),
            'IcHOk': _0x2de524(0x407),
            'hZfkC': _0x2de524(0x423),
            'LrbKw': _0x2de524(0x194),
            'JEFHC': _0x2de524(0x381),
            'UONur': _0x2de524(0x3e3),
            'oPYae': _0x2de524(0x34a),
            'BawrW': function (_0x16751e, _0x27a166) {
                return _0x16751e / _0x27a166;
            },
            'EFSuK': function (_0x2732bd, _0x5438d1) {
                return _0x2732bd / _0x5438d1;
            },
            'eisqZ': function (_0x322f99, _0x2a1b2a) {
                return _0x322f99 * _0x2a1b2a;
            },
            'VlbwQ': function (_0x345c3a, _0x1baa5b) {
                return _0x345c3a + _0x1baa5b;
            },
            'VDXTk': _0x2de524(0x1f9),
            'IkGks': function (_0x5d0001, _0x26d681) {
                return _0x5d0001 + _0x26d681;
            },
            'NbCKR': function (_0x4d247e, _0x29ce86) {
                return _0x4d247e(_0x29ce86);
            },
            'TrFUB': _0x2de524(0x279),
            'YNDqG': _0x2de524(0x201),
            'qtPrt': function (_0x5625eb, _0x496b3f) {
                return _0x5625eb + _0x496b3f;
            },
            'rteyc': '\x20|\x20',
            'jNchS': function (_0x59ffc8, _0x2e1d38) {
                return _0x59ffc8(_0x2e1d38);
            },
            'RFnwN': function (_0x34b7fa, _0x3c1cac) {
                return _0x34b7fa !== _0x3c1cac;
            },
            'fgaUD': 'rangedice',
            'wGSAX': 'plinko',
            'DnZVI': function (_0x368102, _0x3ff3f9) {
                return _0x368102 + _0x3ff3f9;
            },
            'ZRtam': function (_0x2afeac, _0x27b63f) {
                return _0x2afeac === _0x27b63f;
            },
            'lZvVa': function (_0x536981, _0x5b0c17) {
                return _0x536981 + _0x5b0c17;
            },
            'tJCqi': _0x2de524(0x216),
            'ajThN': function (_0xa57e44, _0x3ffd19) {
                return _0xa57e44 + _0x3ffd19;
            },
            'wCnPF': function (_0xfa3b5c, _0x563cc3) {
                return _0xfa3b5c + _0x563cc3;
            },
            'kQKnU': _0x2de524(0x2ce),
            'BNrOE': function (_0x2143f9, _0x465c0d) {
                return _0x2143f9 + _0x465c0d;
            },
            'tjrLH': _0x2de524(0x33f),
            'dHVJd': _0x2de524(0x13e),
            'hRQBv': _0x2de524(0x1a7),
            'HTPPe': _0x2de524(0x39f),
            'GiEpN': function (_0x261d77, _0x455bec) {
                return _0x261d77(_0x455bec);
            },
            'KJOrv': function (_0x1e0178, _0x39211f) {
                return _0x1e0178 !== _0x39211f;
            },
            'YNYoQ': function (_0x24e8d6, _0x3b52f1) {
                return _0x24e8d6 === _0x3b52f1;
            },
            'zmSYc': function (_0x4d5dfb, _0x1f6679) {
                return _0x4d5dfb(_0x1f6679);
            },
            'KOoPF': function (_0x73f162, _0xf67cc1) {
                return _0x73f162(_0xf67cc1);
            },
            'bVDrO': function (_0x4ba39a, _0x854383) {
                return _0x4ba39a === _0x854383;
            },
            'QNguB': function (_0x35910f, _0x43c85a) {
                return _0x35910f === _0x43c85a;
            },
            'OXrCQ': _0x2de524(0x200)
        }, _0x5b18af = _0x44cc35['SQTAz'](profit, 0x0) ? darkMode ? _0x2de524(0x1de) : _0x44cc35['PVQAk'] : profit < 0x0 ? _0x44cc35['fvsLt'] : _0x44cc35[_0x2de524(0x1f7)], _0x1b8ada = _0x44cc35['SQTAz'](currentstreak, 0x0) ? darkMode ? _0x44cc35[_0x2de524(0x23c)] : _0x44cc35[_0x2de524(0x2e4)] : currentstreak < 0x0 ? _0x44cc35[_0x2de524(0x307)] : _0x44cc35['BSAhB'], _0x39d3c0 = _0x44cc35['VSbDr'](maxwinstreak, 0x0) ? _0x2de524(0x3bc) : _0x44cc35[_0x2de524(0x2e4)], _0x35aaa9 = _0x44cc35[_0x2de524(0x313)](maxlosestreak, 0x0) ? _0x44cc35[_0x2de524(0x307)] : _0x44cc35[_0x2de524(0x2e4)];
    document[_0x2de524(0x28e)](_0x2de524(0x215))['style'][_0x2de524(0x36e)] = _0x39d3c0, document['getElementById'](_0x44cc35[_0x2de524(0x37a)])[_0x2de524(0x2a5)][_0x2de524(0x36e)] = _0x35aaa9, document['getElementById'](_0x44cc35[_0x2de524(0x312)])[_0x2de524(0x2a3)] = wagered[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x15e)])[_0x2de524(0x2a3)] = balance[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x2de524(0x330))[_0x2de524(0x2a5)][_0x2de524(0x36e)] = _0x5b18af, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x16e)])[_0x2de524(0x2a3)] = profit[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x426)])[_0x2de524(0x2a3)] = maxBetAmount[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x290)])[_0x2de524(0x2a3)] = maxLosseAmount[_0x2de524(0x1ef)](decimalAmountView), document['getElementById'](_0x44cc35[_0x2de524(0x344)])[_0x2de524(0x2a3)] = bets, document[_0x2de524(0x28e)](_0x2de524(0x1d4))[_0x2de524(0x2a3)] = wins, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x338)])[_0x2de524(0x2a3)] = losses, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x2a0)])[_0x2de524(0x2a5)]['color'] = _0x1b8ada, document[_0x2de524(0x28e)](_0x2de524(0x3e3))[_0x2de524(0x2a3)] = currentstreak, document['getElementById'](_0x2de524(0x215))[_0x2de524(0x2a3)] = maxwinstreak, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x37a)])['innerText'] = maxlosestreak, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x298)])['innerText'] = minbalance[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x2de524(0x3c1))['innerText'] = maxbalance[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x2de524(0x27d))['innerText'] = minprofit[_0x2de524(0x1ef)](decimalAmountView), document[_0x2de524(0x28e)](_0x2de524(0x20b))['innerText'] = maxprofit[_0x2de524(0x1ef)](decimalAmountView), percentWagered = _0x44cc35[_0x2de524(0x1d9)](wagered, startBalance), percentWagered = _0x44cc35[_0x2de524(0x14a)](Math[_0x2de524(0x415)](_0x44cc35['eisqZ'](_0x44cc35[_0x2de524(0x1d5)](percentWagered, Number[_0x2de524(0x3bf)]), 0x2710)), 0x2710), percentWagered = isNaN(percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x44cc35['VDXTk'])[_0x2de524(0x2a3)] = percentWagered, percentProfit = _0x44cc35['EFSuK'](profit, startBalance) * 0x64, percentProfit = _0x44cc35['BawrW'](Math[_0x2de524(0x415)](_0x44cc35[_0x2de524(0x196)](_0x44cc35[_0x2de524(0x28d)](percentProfit, Number[_0x2de524(0x3bf)]), 0x2710)), 0x2710), percentProfit = _0x44cc35[_0x2de524(0x18a)](isNaN, percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x44cc35[_0x2de524(0x23e)])[_0x2de524(0x2a5)][_0x2de524(0x36e)] = _0x5b18af, document[_0x2de524(0x28e)](_0x44cc35[_0x2de524(0x420)])['innerText'] = percentProfit;
    if (!stopHistory) {
        const _0x41f8e6 = _0x44cc35[_0x2de524(0x31b)](game, 'dice') ? lastBet[_0x2de524(0x1be)] ? '>' : '<' : '>', _0x30cccd = lastBet[_0x2de524(0x1be)] ? _0x2de524(0x41a) + bets + _0x2de524(0x412) : _0x2de524(0x41a) + bets + _0x2de524(0x3cc), _0xe6e472 = '' + (havePlinkoRows ? _0x44cc35[_0x2de524(0x3b2)](plinkoRow, _0x44cc35[_0x2de524(0x349)]) : '') + plinkoRisk, _0x39fe38 = _0x2de524(0x25d) + bets + _0x2de524(0x1a5) + _0x44cc35[_0x2de524(0x260)](Number, lastBet['amount'])[_0x2de524(0x1ef)](decimalAmountView) + _0x2de524(0x1a5) + (_0x44cc35[_0x2de524(0x1e6)](game, _0x44cc35[_0x2de524(0x18b)]) ? _0x30cccd : betSide) + _0x2de524(0x1a5) + (_0x44cc35[_0x2de524(0x31b)](game, _0x44cc35[_0x2de524(0x280)]) ? _0xe6e472 : _0x44cc35['DnZVI'](Number(lastBet[_0x2de524(0x1d7)])[_0x2de524(0x1ef)](decimalChanceView), '%')) + _0x2de524(0x1a5) + _0x44cc35[_0x2de524(0x18a)](Number, lastBet[_0x2de524(0x3fd)])[_0x2de524(0x1ef)](decimalChanceView) + _0x2de524(0x391) + _0x44cc35[_0x2de524(0x260)](Number, lastBet[_0x2de524(0x239)])['toFixed'](decimalAmountView) + _0x2de524(0x1a5) + (_0x44cc35['RFnwN'](game, _0x44cc35[_0x2de524(0x18b)]) ? _0x44cc35[_0x2de524(0x31b)](game, _0x44cc35['wGSAX']) ? _0xe6e472 : _0x44cc35[_0x2de524(0x34c)](game, _0x2de524(0x2ce)) ? _0x44cc35[_0x2de524(0x27b)](Number(lastBet['target'])[_0x2de524(0x1ef)](0x0), _0x44cc35[_0x2de524(0x373)]) : _0x41f8e6 + _0x44cc35[_0x2de524(0x260)](Number, lastBet[_0x2de524(0x41d)])[_0x2de524(0x1ef)](decimalTargetResult) : _0x44cc35['ajThN'](target1, '|') + target2 + (target3 ? _0x44cc35[_0x2de524(0x295)]('|', target3) : '') + (target4 ? '|' + target4 : '')) + _0x2de524(0x1a5) + (_0x44cc35[_0x2de524(0x31b)](game, _0x44cc35[_0x2de524(0x2ff)]) ? _0x44cc35[_0x2de524(0x36b)](_0x44cc35['jNchS'](Number, result)[_0x2de524(0x1ef)](0x0), _0x44cc35[_0x2de524(0x1ce)]) : Number(result)[_0x2de524(0x1ef)](decimalTargetResult)) + _0x2de524(0x1a5) + lastBet[_0x2de524(0x213)] + _0x2de524(0x1a5) + lastBet['id'] + '</td>', _0x1b7656 = document[_0x2de524(0x3f8)]('tr');
        _0x1b7656['style'][_0x2de524(0x23f)] = win ? '#91f190' : _0x44cc35[_0x2de524(0x1ae)], _0x1b7656[_0x2de524(0x1da)] = _0x39fe38, document[_0x2de524(0x28e)](_0x44cc35['hRQBv'])[_0x2de524(0x3ca)](_0x1b7656, document[_0x2de524(0x28e)](_0x2de524(0x1a7))[_0x2de524(0x35d)][0x0]);
        const _0x580ac9 = document['querySelector'](_0x44cc35[_0x2de524(0x3ab)])['rows'];
        if (_0x44cc35['VSbDr'](_0x580ac9[_0x2de524(0x1ba)], maxRows))
            document['querySelector']('#wdbHistory')[_0x2de524(0x1cb)][_0x2de524(0x3a0)]();
    }
    const _0x19bd37 = '' + (havePlinkoRows ? plinkoRow + _0x44cc35[_0x2de524(0x349)] : '') + plinkoRisk;
    return fullLogs[_0x2de524(0x3b9)]({
        'game': game,
        'bets': bets,
        'amount': _0x44cc35[_0x2de524(0x29b)](Number, lastBet[_0x2de524(0x30f)])['toFixed'](decimalAmountView),
        'bethigh': game !== _0x44cc35[_0x2de524(0x18b)] ? lastBet['bethigh'] : null,
        'chance': _0x44cc35['RFnwN'](game, _0x44cc35[_0x2de524(0x18b)]) ? _0x44cc35[_0x2de524(0x260)](Number, lastBet[_0x2de524(0x1d7)])['toFixed'](decimalChanceView) : lastBet['chance'],
        'target': _0x44cc35['KJOrv'](game, _0x44cc35['fgaUD']) ? _0x44cc35['YNYoQ'](game, _0x2de524(0x2ba)) ? _0x19bd37 : lastBet[_0x2de524(0x41d)] : null,
        'roll': _0x44cc35[_0x2de524(0x148)](Number, lastBet[_0x2de524(0x3fd)])[_0x2de524(0x1ef)](decimalChanceView),
        'result': _0x44cc35[_0x2de524(0x199)](Number, result)[_0x2de524(0x1ef)](decimalTargetResult),
        'profit': Number(lastBet['profit'])[_0x2de524(0x1ef)](decimalAmountView),
        'nonce': lastBet[_0x2de524(0x213)],
        'id': lastBet['id'],
        'chance1': _0x44cc35[_0x2de524(0x327)](game, _0x44cc35[_0x2de524(0x18b)]) ? lastBet['chance1'] : null,
        'chance2': _0x44cc35['QNguB'](game, 'rangedice') ? lastBet['chance2'] : null,
        'chance3': game === _0x44cc35['fgaUD'] ? lastBet['chance3'] : null,
        'chance4': game === _0x44cc35[_0x2de524(0x18b)] ? lastBet[_0x2de524(0x3a7)] : null,
        'betSide': _0x44cc35['SQTAz'](game, _0x44cc35[_0x2de524(0x18b)]) ? lastBet[_0x2de524(0x18e)] : null
    }), fullLogs[_0x2de524(0x1ba)] > 0x2710 && fullLogs[_0x2de524(0x1b2)](), !stopChart && chart[_0x2de524(0x2f9)](betsChart, profitChart, color), _0x44cc35['OXrCQ'];
}
async function updateStats() {
    const _0x580b50 = _0x562128, _0x5a1cbc = {
            'QETHP': function (_0x34d60c, _0x19c45d) {
                return _0x34d60c === _0x19c45d;
            },
            'cjwNr': _0x580b50(0x1de),
            'RfafU': 'black',
            'NxqsI': function (_0x59eb6f, _0x58751f) {
                return _0x59eb6f < _0x58751f;
            },
            'vEelK': _0x580b50(0x29f),
            'aWiUJ': _0x580b50(0x3bc),
            'QSzSF': function (_0x1a3e68, _0x18e692) {
                return _0x1a3e68 > _0x18e692;
            },
            'UwtGD': 'wdbHighWinStreak',
            'bRTBo': _0x580b50(0x2b2),
            'kPOWn': 'wdbWagered',
            'gHOeY': _0x580b50(0x403),
            'iqBnT': _0x580b50(0x330),
            'aJlCh': _0x580b50(0x407),
            'avLca': _0x580b50(0x423),
            'CYeLg': _0x580b50(0x194),
            'QNLKK': _0x580b50(0x381),
            'CgvJj': 'wdbCurrentStreak',
            'GTWzO': _0x580b50(0x34a),
            'lZjTR': _0x580b50(0x3c1),
            'xZzEB': _0x580b50(0x27d),
            'vNsIP': _0x580b50(0x20b),
            'urhZo': function (_0x39be48, _0x2e984a) {
                return _0x39be48 / _0x2e984a;
            },
            'aOmcO': function (_0x54aaa6, _0x20d9e8) {
                return _0x54aaa6 + _0x20d9e8;
            },
            'BZBwH': function (_0x21f694, _0x142311) {
                return _0x21f694(_0x142311);
            },
            'SlBGX': function (_0x5883d4, _0x4e74e4) {
                return _0x5883d4(_0x4e74e4);
            },
            'fWOzr': _0x580b50(0x1f9),
            'SqghW': function (_0x5dc45a, _0x343133) {
                return _0x5dc45a + _0x343133;
            },
            'ifTMu': function (_0x582c8c, _0x3f14c3) {
                return _0x582c8c(_0x3f14c3);
            },
            'pyrak': _0x580b50(0x279),
            'YagLe': _0x580b50(0x201)
        }, _0x566ad4 = _0x5a1cbc[_0x580b50(0x21c)](profit, 0x0) ? darkMode ? _0x5a1cbc[_0x580b50(0x285)] : _0x5a1cbc['RfafU'] : _0x5a1cbc[_0x580b50(0x408)](profit, 0x0) ? _0x580b50(0x29f) : _0x580b50(0x3bc), _0x57cac9 = _0x5a1cbc[_0x580b50(0x21c)](currentstreak, 0x0) ? darkMode ? _0x5a1cbc[_0x580b50(0x285)] : _0x5a1cbc['RfafU'] : _0x5a1cbc[_0x580b50(0x408)](currentstreak, 0x0) ? _0x5a1cbc[_0x580b50(0x303)] : _0x5a1cbc[_0x580b50(0x41c)], _0x596b69 = _0x5a1cbc[_0x580b50(0x182)](maxwinstreak, 0x0) ? _0x5a1cbc[_0x580b50(0x41c)] : darkMode ? _0x580b50(0x1de) : _0x580b50(0x319), _0x5adec9 = maxlosestreak > 0x0 ? _0x5a1cbc[_0x580b50(0x303)] : darkMode ? _0x5a1cbc[_0x580b50(0x285)] : _0x580b50(0x319);
    return document[_0x580b50(0x28e)](_0x5a1cbc['UwtGD'])['style']['color'] = _0x596b69, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x421)])['style']['color'] = _0x5adec9, document[_0x580b50(0x28e)](_0x5a1cbc['kPOWn'])[_0x580b50(0x2a3)] = wagered[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x26e)])[_0x580b50(0x2a3)] = balance[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x17f)])[_0x580b50(0x2a5)][_0x580b50(0x36e)] = _0x566ad4, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x17f)])[_0x580b50(0x2a3)] = profit[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x1b7)])['innerText'] = maxBetAmount[_0x580b50(0x1ef)](decimalAmountView), document['getElementById'](_0x5a1cbc['avLca'])[_0x580b50(0x2a3)] = maxLosseAmount[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x26b)])[_0x580b50(0x2a3)] = bets, document[_0x580b50(0x28e)](_0x580b50(0x1d4))[_0x580b50(0x2a3)] = wins, document['getElementById'](_0x5a1cbc[_0x580b50(0x1fa)])['innerText'] = losses, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x429)])[_0x580b50(0x2a5)][_0x580b50(0x36e)] = _0x57cac9, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x429)])[_0x580b50(0x2a3)] = currentstreak, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x3d2)])[_0x580b50(0x2a3)] = maxwinstreak, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x421)])[_0x580b50(0x2a3)] = maxlosestreak, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x3e9)])[_0x580b50(0x2a3)] = minbalance[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x211)])[_0x580b50(0x2a3)] = maxbalance['toFixed'](decimalAmountView), document['getElementById'](_0x5a1cbc['xZzEB'])[_0x580b50(0x2a3)] = minprofit[_0x580b50(0x1ef)](decimalAmountView), document[_0x580b50(0x28e)](_0x5a1cbc['vNsIP'])[_0x580b50(0x2a3)] = maxprofit[_0x580b50(0x1ef)](decimalAmountView), percentWagered = _0x5a1cbc[_0x580b50(0x220)](wagered, startBalance), percentWagered = _0x5a1cbc[_0x580b50(0x220)](Math[_0x580b50(0x415)](_0x5a1cbc['aOmcO'](percentWagered, Number[_0x580b50(0x3bf)]) * 0x64), 0x64), percentWagered = _0x5a1cbc[_0x580b50(0x145)](isNaN, percentWagered) || !_0x5a1cbc[_0x580b50(0x323)](isFinite, percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x5a1cbc['fWOzr'])['innerText'] = percentWagered, percentProfit = _0x5a1cbc[_0x580b50(0x220)](profit, startBalance) * 0x64, percentProfit = _0x5a1cbc[_0x580b50(0x220)](Math[_0x580b50(0x415)](_0x5a1cbc['SqghW'](percentProfit, Number[_0x580b50(0x3bf)]) * 0x64), 0x64), percentProfit = _0x5a1cbc[_0x580b50(0x2f2)](isNaN, percentProfit) || !_0x5a1cbc['BZBwH'](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x22d)])['style'][_0x580b50(0x36e)] = _0x566ad4, document[_0x580b50(0x28e)](_0x5a1cbc[_0x580b50(0x3bb)])[_0x580b50(0x2a3)] = percentProfit, 'updateStats\x20ok';
}
function log(_0x39fea3) {
    const _0x590543 = _0x562128, _0x3869a0 = {
            'UPlVC': _0x590543(0x261),
            'fJACd': 'white'
        }, _0x2bf4ef = document[_0x590543(0x28e)](_0x3869a0[_0x590543(0x178)]), _0x15d5e1 = document[_0x590543(0x3f8)]('li');
    _0x15d5e1['innerText'] = _0x39fea3, _0x15d5e1[_0x590543(0x2a5)]['color'] = darkMode ? _0x3869a0['fJACd'] : 'black', _0x2bf4ef[_0x590543(0x3ca)](_0x15d5e1, _0x2bf4ef[_0x590543(0x333)]), _0x2bf4ef[_0x590543(0x35d)][_0x590543(0x1ba)] > maxRows && _0x2bf4ef[_0x590543(0x297)](_0x2bf4ef[_0x590543(0x1cb)]);
}
function updateSpeed() {
    const _0x1b5d94 = _0x562128, _0x50c090 = {
            'PQHnV': function (_0x3e5bd9, _0x307451) {
                return _0x3e5bd9 < _0x307451;
            },
            'BkUMO': _0x1b5d94(0x294),
            'VrAfh': _0x1b5d94(0x311),
            'qndsQ': function (_0x25eb30, _0x318d0a) {
                return _0x25eb30 / _0x318d0a;
            },
            'bWpEc': function (_0x3d2cf1, _0x5b5e47) {
                return _0x3d2cf1 - _0x5b5e47;
            }
        };
    if (_0x50c090[_0x1b5d94(0x205)](speedHistory[_0x1b5d94(0x1ba)], 0x2)) {
        document[_0x1b5d94(0x28e)](_0x1b5d94(0x311))['innerText'] = _0x50c090['BkUMO'];
        return;
    }
    const _0x160c5d = Date[_0x1b5d94(0x186)](), _0x1ef157 = 0x2710;
    speedHistory = speedHistory[_0x1b5d94(0x221)](_0x21eef3 => _0x160c5d - _0x21eef3 <= _0x1ef157);
    if (_0x50c090[_0x1b5d94(0x205)](speedHistory[_0x1b5d94(0x1ba)], 0x2)) {
        document[_0x1b5d94(0x28e)](_0x50c090[_0x1b5d94(0x240)])[_0x1b5d94(0x2a3)] = _0x1b5d94(0x294);
        return;
    }
    const _0x1312c6 = speedHistory[0x0], _0x719669 = _0x50c090[_0x1b5d94(0x2c2)](_0x50c090['bWpEc'](_0x160c5d, _0x1312c6), 0x3e8), _0x122a2f = _0x50c090[_0x1b5d94(0x2c2)](speedHistory[_0x1b5d94(0x1ba)], _0x719669);
    document[_0x1b5d94(0x28e)](_0x50c090[_0x1b5d94(0x240)])[_0x1b5d94(0x2a3)] = _0x122a2f['toFixed'](0x2);
}
function updateTimer() {
    const _0x5313f8 = _0x562128, _0x3dd62a = {
            'EnvRX': function (_0x5786cd, _0x415fe3) {
                return _0x5786cd / _0x415fe3;
            },
            'mHQOo': function (_0xd4feb9, _0x264be7) {
                return _0xd4feb9 * _0x264be7;
            },
            'vNEvA': function (_0x3b40c6, _0x628f72) {
                return _0x3b40c6 * _0x628f72;
            },
            'QFePj': function (_0x535b85, _0x4f1a31) {
                return _0x535b85 % _0x4f1a31;
            }
        };
    elapsedTime++;
    const _0xe6b51f = Math[_0x5313f8(0x204)](_0x3dd62a[_0x5313f8(0x3ea)](elapsedTime, _0x3dd62a[_0x5313f8(0x3c3)](_0x3dd62a['mHQOo'](0x18, 0x3c), 0x3c))), _0x494a33 = Math[_0x5313f8(0x204)](_0x3dd62a[_0x5313f8(0x3ea)](elapsedTime % _0x3dd62a[_0x5313f8(0x3c3)](_0x3dd62a[_0x5313f8(0x3c3)](0x18, 0x3c), 0x3c), _0x3dd62a[_0x5313f8(0x322)](0x3c, 0x3c))), _0x4921f1 = Math[_0x5313f8(0x204)](elapsedTime % _0x3dd62a['mHQOo'](0x3c, 0x3c) / 0x3c), _0x1af5f7 = _0x3dd62a[_0x5313f8(0x3dc)](elapsedTime, 0x3c);
    document[_0x5313f8(0x28e)]('wdbTime')[_0x5313f8(0x2a3)] = _0xe6b51f + ':' + _0x494a33 + ':' + _0x4921f1 + ':' + _0x1af5f7;
}
async function start() {
    const _0x1da3de = _0x562128, _0x738fe4 = {
            'UbbOt': function (_0x353873, _0x2003a1) {
                return _0x353873 === _0x2003a1;
            },
            'EIspL': 'rangedice',
            'qFFLG': 'wdbTime',
            'buDsR': '0:0:0:0',
            'WgIyO': _0x1da3de(0x1d8),
            'HadeC': _0x1da3de(0x1f1),
            'Aavcx': _0x1da3de(0x2a7),
            'MlFHX': _0x1da3de(0x356),
            'XSHaD': 'wdbOpenJSScript',
            'qcGcl': '#wdbSaveScriptButton',
            'gyCBt': function (_0x5e5ef5, _0x373c51) {
                return _0x5e5ef5(_0x373c51);
            },
            'YyMMH': function (_0x5960a7, _0x2acd6e) {
                return _0x5960a7(_0x2acd6e);
            },
            'AvLZf': function (_0x4876bb, _0xc963c5, _0x41f2b8) {
                return _0x4876bb(_0xc963c5, _0x41f2b8);
            },
            'fXpVX': function (_0x4a70a7, _0x5e2b0b) {
                return _0x4a70a7 === _0x5e2b0b;
            },
            'XcRDo': _0x1da3de(0x286),
            'RUTYT': _0x1da3de(0x2ed),
            'raaEd': '$1=$1+$2\x20',
            'ImYMp': '$1=$1*$2\x20',
            'WNWUx': _0x1da3de(0x1e1),
            'LYRpL': _0x1da3de(0x368),
            'wsXbJ': _0x1da3de(0x19b),
            'cfUqg': function (_0x28797d, _0x8439a) {
                return _0x28797d === _0x8439a;
            },
            'jFZSy': 'advanced',
            'nvSoF': _0x1da3de(0x2aa),
            'ffjuA': _0x1da3de(0x171),
            'uUmlc': function (_0x432224) {
                return _0x432224();
            },
            'yvDQh': function (_0x132bed) {
                return _0x132bed();
            },
            'wsShE': function (_0x229a08, _0x9b9a50) {
                return _0x229a08(_0x9b9a50);
            }
        };
    if (_0x738fe4['UbbOt'](game, _0x738fe4[_0x1da3de(0x15c)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x1da3de(0x223);
        const _0x13a360 = 'chance1=' + chance1 + _0x1da3de(0x192) + chance2 + '\x0a\x20\x20\x20\x20chance3=' + chance3 + _0x1da3de(0x233) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + '\x22';
        fengari[_0x1da3de(0x176)](_0x13a360)();
    }
    try {
        if (!run) {
            document['getElementById'](_0x738fe4['qFFLG'])[_0x1da3de(0x2a3)] = _0x738fe4[_0x1da3de(0x41f)], document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x173)])[_0x1da3de(0x29d)] = !![], document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x3fa)])[_0x1da3de(0x29d)] = !![], document['getElementById']('wdbStartButton')[_0x1da3de(0x29d)] = !![], document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x1bf)])[_0x1da3de(0x29d)] = !![], document[_0x1da3de(0x28e)](_0x738fe4['MlFHX'])['disabled'] = !![], document[_0x1da3de(0x28e)](_0x738fe4['XSHaD'])['disabled'] = !![], document['querySelectorAll'](_0x738fe4['qcGcl'])[_0x1da3de(0x24a)](_0x2a2068 => _0x2a2068[_0x1da3de(0x29d)] = !![]), document[_0x1da3de(0x392)]('#wdbOpenScript')['forEach'](_0x337d70 => _0x337d70[_0x1da3de(0x29d)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x738fe4[_0x1da3de(0x40e)](clearInterval, timerInterval), _0x738fe4[_0x1da3de(0x31e)](clearInterval, speedUpdateInterval), timerInterval = _0x738fe4[_0x1da3de(0x1db)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x738fe4['AvLZf'](setInterval, updateSpeed, 0x1f4), fengari[_0x1da3de(0x176)]('scriptname\x20=\x20\x22\x22')(), fengari[_0x1da3de(0x176)](_0x1da3de(0x2b7))();
            if (_0x738fe4[_0x1da3de(0x218)](mode, _0x738fe4[_0x1da3de(0x18c)]))
                diceScript = luaEditor['getValue'](), diceScript = diceScript['replace'](/!=/g, '~=')[_0x1da3de(0x315)](/!/g, _0x738fe4[_0x1da3de(0x1ac)])[_0x1da3de(0x315)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x738fe4[_0x1da3de(0x30d)])[_0x1da3de(0x315)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1da3de(0x22a))[_0x1da3de(0x315)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x738fe4[_0x1da3de(0x3ec)])['replace'](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x738fe4[_0x1da3de(0x183)]), fengari[_0x1da3de(0x176)](diceScript)(), scriptname = fengari['load'](_0x1da3de(0x22f))(), document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x3af)])[_0x1da3de(0x2a3)] = scriptname ? 'Script\x20Name:\x20' + scriptname : '';
            else {
                if (_0x738fe4[_0x1da3de(0x218)](mode, 'js')) {
                    const _0x4d25ac = document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x2e1)]);
                    if (_0x4d25ac)
                        _0x4d25ac[_0x1da3de(0x3a0)]();
                    diceScript = jsEditor[_0x1da3de(0x2fc)]();
                    const _0x5a9e9a = document[_0x1da3de(0x3f8)](_0x1da3de(0x152));
                    _0x5a9e9a['id'] = _0x738fe4[_0x1da3de(0x2e1)], _0x5a9e9a[_0x1da3de(0x1da)] = diceScript, document[_0x1da3de(0x364)][_0x1da3de(0x2a8)](_0x5a9e9a);
                } else
                    _0x738fe4[_0x1da3de(0x1c4)](mode, _0x738fe4['jFZSy']) && (basebet = Number(document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x3b5)])['value']), nextbet = basebet, chance = _0x738fe4[_0x1da3de(0x40e)](Number, document[_0x1da3de(0x28e)](_0x738fe4[_0x1da3de(0x21f)])[_0x1da3de(0x3f9)]), bethigh = document[_0x1da3de(0x305)](_0x1da3de(0x1af))['checked']);
            }
            if (run)
                return _0x738fe4[_0x1da3de(0x193)](playBet);
        }
    } catch (_0x255956) {
        _0x738fe4['yvDQh'](stop), _0x738fe4['wsShE'](log, _0x255956);
    }
}
function stop() {
    const _0x30ae3b = _0x562128, _0x45020e = {
            'MVgXL': function (_0x453044, _0x2f1c6f) {
                return _0x453044(_0x2f1c6f);
            },
            'EqOmF': 'wdbMenuCoin',
            'bfEdy': _0x30ae3b(0x1f1),
            'CuFlM': 'wdbStartButton',
            'vSiyP': _0x30ae3b(0x2a7),
            'szEuO': 'wdbOpenLUAScript',
            'zlTyb': _0x30ae3b(0x2b9),
            'KMCtz': 'wdbStopOnWinButton',
            'HDPbT': _0x30ae3b(0x179)
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x45020e['MVgXL'](clearInterval, timerInterval), clearInterval(speedUpdateInterval);
    const _0x5b4373 = [
        _0x45020e[_0x30ae3b(0x210)],
        _0x45020e[_0x30ae3b(0x42a)],
        _0x45020e[_0x30ae3b(0x181)],
        _0x45020e[_0x30ae3b(0x31a)],
        _0x45020e[_0x30ae3b(0x1d6)],
        _0x45020e['zlTyb'],
        _0x45020e['KMCtz']
    ];
    _0x5b4373[_0x30ae3b(0x24a)](_0x2f647e => {
        const _0x25aa29 = _0x30ae3b;
        document[_0x25aa29(0x28e)](_0x2f647e)[_0x25aa29(0x29d)] = ![];
    }), document[_0x30ae3b(0x392)](_0x45020e[_0x30ae3b(0x3a9)])[_0x30ae3b(0x24a)](_0xd1b1f1 => _0xd1b1f1[_0x30ae3b(0x29d)] = ![]);
}
async function resume(_0x1f08e1) {
    const _0x5dca05 = _0x562128, _0x2fa030 = {
            'rHPII': _0x5dca05(0x1d8),
            'oaaJJ': 'wdbMenuMode',
            'lnqfO': _0x5dca05(0x2a7),
            'vSybT': _0x5dca05(0x2b9),
            'FOCbb': _0x5dca05(0x179),
            'KORUA': function (_0x379f71, _0xf0a0e0) {
                return _0x379f71(_0xf0a0e0);
            },
            'UWRtm': 'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
            'jGShB': function (_0x3192a2) {
                return _0x3192a2();
            }
        };
    if (!run) {
        const _0x5c2aca = [
            _0x2fa030['rHPII'],
            _0x2fa030[_0x5dca05(0x379)],
            _0x5dca05(0x42c),
            _0x2fa030['lnqfO'],
            _0x5dca05(0x356),
            _0x2fa030[_0x5dca05(0x38d)]
        ];
        return _0x5c2aca['forEach'](_0x527c59 => {
            const _0x4de8c7 = _0x5dca05;
            document[_0x4de8c7(0x28e)](_0x527c59)[_0x4de8c7(0x29d)] = !![];
        }), document[_0x5dca05(0x392)](_0x2fa030[_0x5dca05(0x241)])['forEach'](_0x250545 => _0x250545[_0x5dca05(0x29d)] = !![]), !_0x1f08e1 && (_0x2fa030[_0x5dca05(0x1ca)](log, _0x2fa030['UWRtm']), await new Promise(_0x42c658 => setTimeout(_0x42c658, 0x1388))), run = !![], sOW = ![], timerInterval = setInterval(updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), _0x2fa030[_0x5dca05(0x250)](playBet);
    }
}
function stopOnWin() {
    const _0x2dd7e1 = _0x562128, _0x588e6e = { 'alojb': _0x2dd7e1(0x2fd) };
    sOW = !![];
    if (run)
        document[_0x2dd7e1(0x28e)](_0x588e6e['alojb'])[_0x2dd7e1(0x29d)] = !![];
}
async function playBet() {
    const _0x4f7615 = _0x562128, _0x40d19d = {
            'cziif': 'return\x20nextbet',
            'XzObr': _0x4f7615(0x231),
            'tDOvf': _0x4f7615(0x235),
            'odqYg': _0x4f7615(0x386),
            'YCpus': _0x4f7615(0x2ca),
            'XRkgp': _0x4f7615(0x41b),
            'Ckowr': function (_0x4a194d, _0x326d60) {
                return _0x4a194d(_0x326d60);
            },
            'XzJxC': function (_0x43e732, _0x652df) {
                return _0x43e732(_0x652df);
            },
            'mjazF': function (_0x503592, _0x4984f8) {
                return _0x503592 !== _0x4984f8;
            },
            'ypvbq': _0x4f7615(0x40b),
            'uxhPI': function (_0x163b48, _0x39612f) {
                return _0x163b48 === _0x39612f;
            },
            'TqJGt': _0x4f7615(0x2ba),
            'KTdAP': function (_0x27541a, _0x5211f3) {
                return _0x27541a + _0x5211f3;
            },
            'EGwWZ': function (_0x4c0948, _0x53a93d) {
                return _0x4c0948 === _0x53a93d;
            },
            'SgWFs': 'dice',
            'CsovL': _0x4f7615(0x2cf),
            'zoCbF': 'low',
            'noUru': function (_0x4069b9, _0x4470fc) {
                return _0x4069b9 + _0x4470fc;
            },
            'ehLBf': function (_0x4332d5, _0x56416a) {
                return _0x4332d5(_0x56416a);
            }
        };
    try {
        mode === _0x4f7615(0x286) && (nextbet = fengari[_0x4f7615(0x176)](_0x40d19d[_0x4f7615(0x243)])(), chance = fengari[_0x4f7615(0x176)](_0x40d19d[_0x4f7615(0x16b)])(), bethigh = fengari[_0x4f7615(0x176)](_0x40d19d[_0x4f7615(0x151)])(), chance1 = fengari[_0x4f7615(0x176)](_0x4f7615(0x309))(), chance2 = fengari[_0x4f7615(0x176)](_0x40d19d[_0x4f7615(0x27e)])(), chance3 = fengari[_0x4f7615(0x176)]('return\x20chance3')(), chance4 = fengari[_0x4f7615(0x176)](_0x40d19d[_0x4f7615(0x147)])(), betSide = fengari['load'](_0x40d19d[_0x4f7615(0x26d)])());
        nextbet = _0x40d19d[_0x4f7615(0x371)](Number, nextbet), chance = _0x40d19d['Ckowr'](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x28b2df = _0x40d19d[_0x4f7615(0x2a9)](Number, lastBet[_0x4f7615(0x30f)])['toFixed'](decimalAmountView), _0x35245f = Number(lastBet[_0x4f7615(0x1d7)])[_0x4f7615(0x1ef)](decimalChanceView), _0x346ee4 = _0x40d19d[_0x4f7615(0x2d6)](game, _0x40d19d['ypvbq']) ? _0x40d19d[_0x4f7615(0x1eb)](game, _0x40d19d[_0x4f7615(0x14c)]) ? _0x4f7615(0x411) + _0x28b2df + '\x20at\x20' + (havePlinkoRows ? _0x40d19d[_0x4f7615(0x18d)](plinkoRow, _0x4f7615(0x340)) : '') + plinkoRisk + _0x4f7615(0x387) : 'Betting\x20' + _0x28b2df + '\x20at\x20' + _0x35245f + _0x4f7615(0x251) + (_0x40d19d[_0x4f7615(0x1dd)](game, _0x40d19d[_0x4f7615(0x3d7)]) ? bethigh ? _0x40d19d['CsovL'] : _0x40d19d[_0x4f7615(0x1b1)] : _0x4f7615(0x2cf)) : _0x4f7615(0x411) + _0x28b2df + _0x4f7615(0x3da) + chance1 + '|' + chance2 + (chance3 ? _0x40d19d['noUru']('|', chance3) : '') + (chance4 ? _0x40d19d[_0x4f7615(0x18d)]('|', chance4) : '') + _0x4f7615(0x1dc) + betSide;
            _0x40d19d[_0x4f7615(0x2a9)](log, _0x346ee4);
        }
        if (run)
            return sendBet();
    } catch (_0x56dc9b) {
        stop(), _0x40d19d[_0x4f7615(0x3ed)](log, _0x56dc9b);
    }
}
function resetall() {
    const _0x6cbd84 = _0x562128, _0x1d0748 = {
            'SttBU': '0:0:0:0',
            'udXrQ': _0x6cbd84(0x311),
            'GOoaF': _0x6cbd84(0x294),
            'TIjFU': function (_0x264990) {
                return _0x264990();
            },
            'KpKzD': function (_0x336619) {
                return _0x336619();
            }
        };
    document[_0x6cbd84(0x28e)](_0x6cbd84(0x2e5))['innerText'] = _0x1d0748['SttBU'], document[_0x6cbd84(0x28e)](_0x1d0748[_0x6cbd84(0x2eb)])[_0x6cbd84(0x2a3)] = _0x1d0748[_0x6cbd84(0x362)], _0x1d0748[_0x6cbd84(0x358)](resetstats), _0x1d0748[_0x6cbd84(0x358)](resetchart), _0x1d0748[_0x6cbd84(0x3c5)](resethistory), resetlog();
}
function resetchart() {
    const _0x171d45 = _0x562128, _0x2faed1 = {
            'fiWSn': function (_0x21ad61, _0x26b1a7) {
                return _0x21ad61(_0x26b1a7);
            },
            'taSAr': _0x171d45(0x18f)
        };
    return _0x2faed1[_0x171d45(0x2c1)](toggleChart, _0x2faed1[_0x171d45(0x301)]);
}
function resethistory() {
    const _0x412fcb = _0x562128, _0x2ce90f = {
            'rssXZ': function (_0x2e177d, _0x4c65a8) {
                return _0x2e177d(_0x4c65a8);
            },
            'MMram': _0x412fcb(0x1a4)
        };
    return _0x2ce90f[_0x412fcb(0x150)](toggleHistory, _0x2ce90f[_0x412fcb(0x1d3)]);
}
function resetlog() {
    const _0x173500 = _0x562128, _0x53d18d = { 'KxrCQ': _0x173500(0x1a4) };
    return toggleLog(_0x53d18d[_0x173500(0x345)]);
}
function _0x2d70() {
    const _0x2e3bae = [
        'MJkvi',
        'deleteH',
        '5|1|0|3|4|2',
        'event',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'render',
        'setValue',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'wdbWrapPercentProfit',
        'xCIOo',
        'lZvVa',
        'qNJAZ',
        'wdbMinProfit',
        'odqYg',
        'getTime',
        'wGSAX',
        'wdbLoader\x20ok',
        'checked',
        'advancedStopAfterStreak',
        'joPwV',
        'cjwNr',
        'lua',
        'bIOCE',
        '3113WHhTmL',
        'YRmPk',
        'XZxiH',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'wdbStats',
        'IkGks',
        'getElementById',
        '3466470ALQgop',
        'hZfkC',
        'TMPLk',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'advancedBetHighOnWinCheck',
        '0.00',
        'wCnPF',
        'UHwmN',
        'removeChild',
        'oPYae',
        '3|9|6|7|1|0|4|2|5|8',
        'tTPfW',
        'GiEpN',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'disabled',
        'casino=\x22',
        'red',
        'UONur',
        '<option\x20value=\x22',
        'antiquewhite',
        'innerText',
        'rAzpQ',
        'style',
        'dark1',
        'wdbResumeButton',
        'appendChild',
        'XzJxC',
        'advancedBaseBet',
        'calc(100vh\x20-\x2060px)',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'sHgHo',
        'chance1',
        'wdymi',
        'awmVH',
        '\x20win',
        'wdbHighLoseStreak',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'fixed',
        'Mnamu',
        'pqGzK',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        '\x0a\x20\x20\x20\x20losses=',
        'wdbOpenJSScript',
        'plinko',
        'fHyCh',
        'kblwn',
        'createObjectURL',
        'iuqtU',
        'advancedStopOnWinsCheck',
        'gvgYK',
        'fiWSn',
        'qndsQ',
        'tLvUe',
        '/ching.mp3',
        'EFaoJ',
        'download',
        'SThsu',
        'advancedMultiOnLoseCheck',
        'izkny',
        'return\x20chance4',
        'kAJwi',
        'dice',
        'PGJYX',
        'keno',
        'high',
        '\x0a\x20\x20\x20\x20wins=',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'YdAlw',
        'flex',
        'SgwTJ',
        'VMcrE',
        'mjazF',
        'stringify',
        'Result',
        'then',
        '6wMVlPs',
        'CbOfu',
        'currency=\x22',
        'darkMode',
        'wdbToggleShow',
        'ZksyL',
        'resetstatsOnProfitCheck',
        'wsXbJ',
        'RrWUi',
        'nssAC',
        'PVQAk',
        'wdbTime',
        'lsAek',
        'PlMOa',
        'jbisk',
        'fPThh',
        'borderColor',
        'udXrQ',
        'prototype',
        'not\x20',
        'HCguo',
        'CHPYq',
        'setOption',
        'hcvpM',
        'ifTMu',
        'LCzGs',
        'JINqr',
        '_darkMode',
        '4|0|3|2|5|1',
        'advancedMultiOnWinBets',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'updateChart',
        'bJMhp',
        'wdbAdvancedMode',
        'getValue',
        'wdbStopOnWinButton',
        'cmnbv',
        'kQKnU',
        '\x0a\x20\x20\x20\x20wagered=',
        'taSAr',
        'ldLkO',
        'vEelK',
        'wdbToggleMinimal',
        'querySelector',
        'rgMmd',
        'fvsLt',
        'low',
        'return\x20chance1',
        'wwsVO',
        ';path=/',
        'CnICF',
        'raaEd',
        'ukjeI',
        'amount',
        'wdbShowMode',
        'wdbSpeed',
        'Ejtgh',
        'PAtuH',
        'pyNIW',
        'replace',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'files',
        'wdbChart',
        'black',
        'vSiyP',
        'SQTAz',
        '17691wfxyGR',
        'initLuaOk',
        'YyMMH',
        'map',
        'FfEGg',
        'bKVIg',
        'vNEvA',
        'SlBGX',
        'WHeyx',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'XjJWW',
        'bVDrO',
        '\x0a\x20\x20\x20\x20balance=',
        'block',
        'theme',
        '#fff',
        'ekgdc',
        'stopOnProfitCheck',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'WIxNG',
        'wdbProfit',
        'FTQKb',
        'Iboak',
        'firstChild',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'fEXBh',
        'GpglN',
        'DRZYn',
        'JEFHC',
        'GoRCW',
        'iqiPz',
        'wdbWrapLog',
        '\x0a\x20\x20\x20\x20chance=',
        '\x0a\x20\x20\x20\x20chance3=',
        'Utkqh',
        '\x20Hits',
        '\x20|\x20',
        'kenoNumbers',
        'FdSOC',
        'yxotg',
        'LrbKw',
        'KxrCQ',
        'advancedStopAfterStreakCheck',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'wdbMain',
        'rteyc',
        'wdbMinBalance',
        'YilCN',
        'ZRtam',
        'kitQI',
        'XDOKv',
        'KrANF',
        'NSiCS',
        'RmGNp',
        'LvSMi',
        'IPhPN',
        'OXPni',
        'PYlRd',
        'wdbOpenLUAScript',
        'imAxw',
        'TIjFU',
        'WEYSl',
        '8|1|0|4|5|6|7|3|2',
        'OPcOG',
        'wdbToggleLive',
        'children',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'aDrpe',
        'LWtej',
        '32JRDeho',
        'GOoaF',
        'lineColor',
        'head',
        'BetSide',
        'ZYcHV',
        'none',
        'scriptName',
        'LcKxN',
        'advancedMultiOnWinCheck',
        'BNrOE',
        '\x0a\x20\x20\x20\x20minprofit=',
        'tagName',
        'color',
        'YiSZd',
        'lQIdK',
        'Ckowr',
        '1|2|0|4|5|3',
        'tJCqi',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'advancedStopRollNumber',
        '0123456789',
        'cAFFw',
        'duOmw',
        'oaaJJ',
        'Fdjpt',
        '.json',
        'DvnyV',
        'loadCSS',
        'fromTextArea',
        'innerHeight',
        'ezidh',
        'wdbLosses',
        'yabhh',
        'Stop\x20on\x20current\x20streak\x20',
        'Chart',
        'dLyad',
        'return\x20chance2',
        '\x20to\x20win',
        'MDEVp',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'ETvdh',
        'LZLmF',
        'ETJiw',
        'vSybT',
        'Chance4',
        'DYkpS',
        'Wbohm',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'querySelectorAll',
        'wdbScriptBoxLUA',
        'Functions',
        'jDDlc',
        'stopOnProfit',
        'JdJey',
        'save',
        'kvjNE',
        'wdbScriptBoxJS',
        'key',
        'cFJXg',
        'left',
        'auzdX',
        '#wdbHistory',
        'remove',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'FjDyW',
        'RAXWH',
        'jPLUW',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'keydown',
        'chance4',
        'ugrch',
        'HDPbT',
        'rGDNO',
        'HTPPe',
        'maxRows',
        'sbwLm',
        'NtEJq',
        'LYRpL',
        '380px',
        'cbMmS',
        'qtPrt',
        'advancedChanceOnWin',
        'wdbWrapVariables',
        'nvSoF',
        'response',
        'OTpnM',
        'startsWith',
        'push',
        'mrjEf',
        'YagLe',
        'green',
        'XdPka',
        'options',
        'EPSILON',
        'advancedMultiOnLose',
        'wdbMaxBalance',
        'nldqH',
        'mHQOo',
        'start',
        'KpKzD',
        'bvxXG',
        'log-',
        'advancedStopOnBets',
        '594GHpfMo',
        'insertBefore',
        '21544kUxShV',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'Stop\x20on\x20profit\x20',
        'fHrxz',
        'offsetWidth',
        'darcula',
        'dimgray',
        'UwtGD',
        'Nonce',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'wdbFooter',
        'rVeCt',
        'SgWFs',
        'wdbWagered',
        'qcgnw',
        '\x20at\x20',
        'Profit',
        'QFePj',
        'height',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'wdb',
        'Stop\x20on\x20',
        'tptRa',
        'Roll',
        'wdbCurrentStreak',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'ZtkYg',
        '22180SeFtUK',
        'wrGGt',
        'advancedMultiOnWin',
        'GTWzO',
        'EnvRX',
        'TQtQO',
        'ImYMp',
        'ehLBf',
        '1000px',
        'WDBScript',
        '#000',
        'EGyLi',
        'advanced',
        'pNlVi',
        'wdbMaxRows',
        'gqUgr',
        'outside',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'createElement',
        'value',
        'HadeC',
        'Variables',
        '5|2|7|6|1|8|3|0|4',
        'roll',
        'HqmfW',
        'text',
        'KdfFv',
        'offsetTop',
        'wdb-bot-position',
        'wdbBalance',
        'advancedStopOnLose',
        'advancedStopRollNumberCheck',
        'kwPGb',
        'wdbHighBet',
        'NxqsI',
        'classic',
        'LPjDv',
        'rangedice',
        'IcTsF',
        'Mode',
        'gyCBt',
        'SKKBJ',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'Betting\x20',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'hEuof',
        'INPUT',
        'round',
        'top',
        'offsetLeft',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'RLRFq',
        '<input\x20id=\x22bethigh',
        'return\x20betSide',
        'aWiUJ',
        'target',
        'toString',
        'buDsR',
        'YNDqG',
        'bRTBo',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'wdbHighLose',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'fjDhI',
        'IcHOk',
        'result',
        'message',
        'CgvJj',
        'bfEdy',
        'vlPwn',
        'wdbStartButton',
        'wdbWrapTips',
        'TEXTAREA',
        'Igrlv',
        'pSIyZ',
        '#ffc0cb',
        'KzaOQ',
        'innerWidth',
        'trim',
        'data',
        'xlIwV',
        'random',
        'BZBwH',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'YCpus',
        'zmSYc',
        'wdbWrapFunctions',
        'EFSuK',
        '\x0a\x20\x20\x20\x20losestreak=',
        'TqJGt',
        'vProa',
        'yUSoE',
        '</option>',
        'rssXZ',
        'tDOvf',
        'script',
        '1|15|18|14|11|6|0|4|2|5|16|10|8|12|17|3|7|13|9',
        'ZVbvk',
        'getComputedStyle',
        'containerId',
        'prepend',
        'return\x20plinkoRisk',
        '_maxRows',
        'iyAmi',
        'light1',
        'EIspL',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'UfvTK',
        'TRUtu',
        'VOuhp',
        'dWXuG',
        'between2',
        '3|6|4|0|2|5|1',
        'MXAfW',
        'fpqSd',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        '1116502IgXzFl',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'updateLua\x20done',
        'LOmcY',
        'XzObr',
        'stopOnBalanceCheck',
        'mgOru',
        'UiZXn',
        'display',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'advancedChance',
        'UcQuT',
        'WgIyO',
        'YIkBu',
        'EqHDz',
        'load',
        'click',
        'UPlVC',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'default',
        'offsetHeight',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'WgPrn',
        'hide',
        'iqBnT',
        'CHGiC',
        'CuFlM',
        'QSzSF',
        'WNWUx',
        'chance3',
        'HGlUg',
        'now',
        '\x0a\x20\x20\x20\x20bethigh=',
        'tsixj',
        'YdlUo',
        'NbCKR',
        'fgaUD',
        'XcRDo',
        'KTdAP',
        'betSide',
        'reset',
        'CQTkG',
        '517984geqLUR',
        '\x0a\x20\x20\x20\x20chance2=',
        'uUmlc',
        'wdbBets',
        'kotDk',
        'eisqZ',
        '.CodeMirror',
        'jHonY',
        'KOoPF',
        'pfvGx',
        'wdbRunningScript',
        'qJvzr',
        'createUIOk',
        'Chance2',
        'change',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'stopOnBalance',
        'show',
        'activeElement',
        'clear',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'ibyin',
        'wdbHistory',
        'chart',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'parse',
        'xpVtG',
        'RUTYT',
        'oWhjp',
        'dHVJd',
        '#advancedBetHigh',
        'wdbWrapInitializing',
        'zoCbF',
        'shift',
        'isContentEditable',
        'wdbHeader',
        'getItem',
        'HqkBW',
        'aJlCh',
        'EglsB',
        'vVUFS',
        'length',
        '\x20bet',
        'dobet()',
        'HQjzw',
        'bethigh',
        'Aavcx',
        'toUpperCase',
        'QIZel',
        'application/json',
        'LKgTI',
        'cfUqg',
        'toLowerCase',
        'NaPdX',
        'ChtWx',
        'zSDjo',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'KORUA',
        'lastChild',
        'advancedBetHighOnProfit',
        'tvhNK',
        'tjrLH',
        'stop',
        'CfSsf',
        'split',
        'play',
        'MMram',
        'wdbWins',
        'VlbwQ',
        'szEuO',
        'chance',
        'wdbMenuCoin',
        'BawrW',
        'innerHTML',
        'AvLZf',
        '\x20to\x20win,\x20',
        'EGwWZ',
        'white',
        'DgsIH',
        'eUFTm',
        '$1=$1/$2\x20',
        '\x0a\x20\x20\x20\x20previousbet=',
        'cyWKC',
        '190px',
        'wdbLUAMode',
        'RFnwN',
        'advancedBetHighOnProfitCheck',
        'QmlYc',
        'addEventListener',
        'LFNpx',
        'uxhPI',
        'advancedChanceOnLose',
        '773668rDYwip',
        'kUxVB',
        'toFixed',
        'line',
        'wdbMenuMode',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'Stop\x20on\x20roll\x20number\x20',
        'expires=',
        'gGelc',
        '350px',
        'BSAhB',
        'MxIby',
        'wdbPercentWagered',
        'QNLKK',
        'Chance1',
        'return\x20plinkoRow',
        'advancedBetHighOnWin',
        'advancedChanceOnWinBets',
        'uMdnY',
        'showInfo\x20OK',
        'wdbPercentProfit',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'toUTCString',
        'floor',
        'PQHnV',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'aCYgX',
        'RPuml',
        'yMLte',
        'wdbMaxProfit',
        'wdbShow',
        'uQFqU',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'hostname',
        'EqOmF',
        'lZjTR',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        'nonce',
        'PRjTs',
        'wdbHighWinStreak',
        '\x20Balls',
        'JwBej',
        'fXpVX',
        'closest',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'dps',
        'QETHP',
        'wdbWrap',
        'oYKfV',
        'ffjuA',
        'urhZo',
        'filter',
        'wdbWrapLicenseBox',
        'between',
        'charAt',
        'advancedStopOnLoseCheck',
        'href',
        'lvXOJ',
        'eTljV',
        'AKRQM',
        '$1=$1-$2\x20',
        '\x0a\x20\x20\x20\x20minbalance=',
        'Wscbu',
        'pyrak',
        'text/plain;\x20charset=utf-8',
        'return\x20scriptname',
        'URbfn',
        'return\x20chance',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        '\x0a\x20\x20\x20\x20chance4=',
        'DuldA',
        'return\x20bethigh',
        'advancedChanceOnLoseBets',
        '.wdb-stats\x20div\x20li',
        'onmouseup',
        'profit',
        'resetstatsOnProfit',
        'advancedBetHighOnBetCheck',
        'YcDor',
        'resetChart',
        'TrFUB',
        'backgroundColor',
        'VrAfh',
        'FOCbb',
        '5px',
        'cziif',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'jMEcL',
        'WVKTD',
        'body',
        'krBgw',
        '\x0a\x20\x20\x20\x20profit=',
        'forEach',
        'hxVeG',
        'zKMUh',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'RAjWp',
        'slice',
        'jGShB',
        '%\x20chance\x20to\x20win,\x20',
        'esDzg',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'Connected',
        'HGyLE',
        'nILSF',
        'cookie',
        'uPUno',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'chance2',
        '<td>',
        'cscUB',
        'XEDZm',
        'jNchS',
        'wdbLog',
        'uNcKr',
        'TrdMi',
        'position',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'clientX',
        'MnTZy',
        'gpFaL',
        'substring',
        '/fengari-web.min.js',
        'CYeLg',
        'onmousedown',
        'XRkgp',
        'gHOeY',
        'wbobV',
        'www.'
    ];
    _0x2d70 = function () {
        return _0x2e3bae;
    };
    return _0x2d70();
}
function resetstats() {
    const _0x34df55 = _0x562128, _0x49ac7c = {
            'XjJWW': _0x34df55(0x153),
            'CHGiC': function (_0x78aef7) {
                return _0x78aef7();
            }
        }, _0x5cda8c = _0x49ac7c[_0x34df55(0x326)][_0x34df55(0x1d1)]('|');
    let _0x150f2e = 0x0;
    while (!![]) {
        switch (_0x5cda8c[_0x150f2e++]) {
        case '0':
            maxBetAmount = 0x0;
            continue;
        case '1':
            fullLogs = [];
            continue;
        case '2':
            maxwinstreak = 0x0;
            continue;
        case '3':
            wins = 0x0;
            continue;
        case '4':
            maxLosseAmount = 0x0;
            continue;
        case '5':
            maxlosestreak = 0x0;
            continue;
        case '6':
            percentProfit = 0x0;
            continue;
        case '7':
            losses = 0x0;
            continue;
        case '8':
            minprofit = 0x0;
            continue;
        case '9':
            _0x49ac7c[_0x34df55(0x180)](updateStats);
            continue;
        case '10':
            maxbalance = balance;
            continue;
        case '11':
            profit = 0x0;
            continue;
        case '12':
            maxprofit = 0x0;
            continue;
        case '13':
            currentstreak = 0x0;
            continue;
        case '14':
            percentWagered = 0x0;
            continue;
        case '15':
            startBalance = balance;
            continue;
        case '16':
            minbalance = balance;
            continue;
        case '17':
            bets = 0x0;
            continue;
        case '18':
            wagered = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x2f913a) {
    return _0x2f913a;
}
function ching() {
    const _0x3d76ac = _0x562128;
    return wdbSound[_0x3d76ac(0x1d2)]();
}
function _0x3a0a(_0xad144f, _0x1a0ece) {
    const _0x2d7027 = _0x2d70();
    return _0x3a0a = function (_0x3a0aa8, _0x35b62d) {
        _0x3a0aa8 = _0x3a0aa8 - 0x13e;
        let _0x1b98a2 = _0x2d7027[_0x3a0aa8];
        return _0x1b98a2;
    }, _0x3a0a(_0xad144f, _0x1a0ece);
}
function sleep(_0x15675a) {
    return new Promise(_0x50f846 => setTimeout(_0x50f846, _0x15675a * 0x3e8));
}
async function initLua() {
    const _0x560b73 = _0x562128, _0x1434be = {
            'rgMmd': 'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
            'VMcrE': 'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
            'FjDyW': _0x560b73(0x28b),
            'TRUtu': 'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
            'kitQI': _0x560b73(0x20e),
            'qiLIm': 'function\x20resetall()\x0ajs.global:resetall()\x0aend',
            'cscUB': 'function\x20ching()\x0ajs.global:ching()\x0aend',
            'XDOKv': 'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
            'kwPGb': _0x560b73(0x212),
            'Iboak': 'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
            'MxIby': _0x560b73(0x1c9),
            'diAeW': 'www.'
        };
    fengari[_0x560b73(0x176)](_0x560b73(0x206))(), fengari[_0x560b73(0x176)](_0x560b73(0x1a9))(), fengari[_0x560b73(0x176)](_0x560b73(0x207))(), fengari['load'](_0x1434be[_0x560b73(0x306)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x2d5)])(), fengari['load'](_0x560b73(0x265))(), fengari['load'](_0x1434be[_0x560b73(0x3a2)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x15f)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x34d)])(), fengari[_0x560b73(0x176)](_0x1434be['qiLIm'])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x25e)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x34e)])(), fengari[_0x560b73(0x176)](_0x560b73(0x424))(), fengari['load'](_0x1434be[_0x560b73(0x406)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x332)])(), fengari[_0x560b73(0x176)](_0x1434be[_0x560b73(0x1f8)])(), fengari[_0x560b73(0x176)](_0x560b73(0x2ac))(), fengari[_0x560b73(0x176)](_0x560b73(0x422))();
    const _0x277451 = location[_0x560b73(0x20f)][_0x560b73(0x315)](_0x1434be['diAeW'], '');
    let _0x3f212b = _0x277451['indexOf']('.');
    return casino = _0x277451['slice'](0x0, _0x3f212b), fengari[_0x560b73(0x176)](_0x560b73(0x29e) + casino + '\x22')(), _0x560b73(0x31d);
}
async function updateLua() {
    const _0x3869ec = _0x562128, _0x5ebdc4 = {
            'XZxiH': _0x3869ec(0x1bc),
            'UcQuT': 'return\x20currency',
            'ZksyL': _0x3869ec(0x1fc),
            'tptRa': 'return\x20kenoRisk',
            'NaPdX': _0x3869ec(0x169)
        }, _0x4b3b74 = '\x0a\x20\x20\x20\x20win=' + win + '\x0a\x20\x20\x20\x20bets=' + bets + _0x3869ec(0x2d0) + wins + _0x3869ec(0x2b8) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + _0x3869ec(0x14b) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + _0x3869ec(0x328) + balance + _0x3869ec(0x22b) + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + _0x3869ec(0x36c) + minprofit + _0x3869ec(0x3de) + maxprofit + _0x3869ec(0x33c) + chance + _0x3869ec(0x187) + bethigh + _0x3869ec(0x410) + chance1 + '\x0a\x20\x20\x20\x20chance2=' + chance2 + _0x3869ec(0x33d) + chance3 + _0x3869ec(0x233) + chance4 + _0x3869ec(0x278) + betSide + _0x3869ec(0x253) + nextbet + _0x3869ec(0x1e2) + previousbet + _0x3869ec(0x249) + profit + _0x3869ec(0x17c) + currentprofit + _0x3869ec(0x292) + partialprofit + _0x3869ec(0x300) + wagered + _0x3869ec(0x21a) + lastBet[_0x3869ec(0x30f)] + _0x3869ec(0x202) + lastBet['amount'] + _0x3869ec(0x232) + lastBet[_0x3869ec(0x1d7)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=' + lastBet[_0x3869ec(0x1d7)] + ',\x0a\x20\x20\x20\x20\x20\x20roll=' + lastBet['roll'] + _0x3869ec(0x170) + lastBet[_0x3869ec(0x3fd)] + _0x3869ec(0x3d4) + lastBet[_0x3869ec(0x239)] + ',\x0a\x20\x20\x20\x20\x20\x20Profit=' + lastBet[_0x3869ec(0x239)] + _0x3869ec(0x168) + lastBet[_0x3869ec(0x41d)] + _0x3869ec(0x259) + lastBet[_0x3869ec(0x41d)] + _0x3869ec(0x1a0) + lastBet[_0x3869ec(0x2ae)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance1=' + lastBet[_0x3869ec(0x2ae)] + ',\x0a\x20\x20\x20\x20\x20\x20chance2=' + lastBet[_0x3869ec(0x25c)] + _0x3869ec(0x2d1) + lastBet[_0x3869ec(0x25c)] + ',\x0a\x20\x20\x20\x20\x20\x20chance3=' + lastBet[_0x3869ec(0x184)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance3=' + lastBet[_0x3869ec(0x184)] + ',\x0a\x20\x20\x20\x20\x20\x20chance4=' + lastBet[_0x3869ec(0x3a7)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance4=' + lastBet[_0x3869ec(0x3a7)] + ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22' + lastBet['betSide'] + _0x3869ec(0x146) + lastBet[_0x3869ec(0x18e)] + _0x3869ec(0x3a1) + lastBet[_0x3869ec(0x427)] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet[_0x3869ec(0x427)] + _0x3869ec(0x35e) + lastBet[_0x3869ec(0x213)] + _0x3869ec(0x3e4) + lastBet['nonce'] + _0x3869ec(0x166) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + _0x3869ec(0x1f2);
    fengari[_0x3869ec(0x176)](_0x4b3b74)(), fengari[_0x3869ec(0x176)](_0x5ebdc4[_0x3869ec(0x28a)])(), currency = fengari[_0x3869ec(0x176)](_0x5ebdc4[_0x3869ec(0x172)])() || currency, coin = String(currency)[_0x3869ec(0x1c0)](), plinkoRisk = fengari[_0x3869ec(0x176)](_0x3869ec(0x158))() || plinkoRisk, plinkoRow = fengari[_0x3869ec(0x176)](_0x5ebdc4[_0x3869ec(0x2df)])() || plinkoRow, kenoRisk = fengari[_0x3869ec(0x176)](_0x5ebdc4[_0x3869ec(0x3e1)])() || kenoRisk;
    const _0x1d3218 = fengari[_0x3869ec(0x176)](_0x3869ec(0x275))();
    return _0x1d3218 && (window[_0x3869ec(0x341)] = _0x1d3218[_0x3869ec(0x1d1)](',')[_0x3869ec(0x221)](_0x5e5b7e => _0x5e5b7e !== '')[_0x3869ec(0x31f)](Number)), _0x5ebdc4[_0x3869ec(0x1c6)];
}
function randomString(_0x3a31fc, _0x4a1218) {
    const _0x561e84 = _0x562128, _0x326ff0 = {
            'SThsu': _0x561e84(0x32e),
            'pSIyZ': _0x561e84(0x376),
            'QmlYc': _0x561e84(0x316),
            'EGyLi': _0x561e84(0x24d),
            'CbOfu': function (_0x56d1e1, _0x1bae21) {
                return _0x56d1e1 < _0x1bae21;
            },
            'WOBjs': function (_0x4c63db, _0x55067c) {
                return _0x4c63db * _0x55067c;
            }
        }, _0x22a8c2 = {
            'alphabet': _0x326ff0[_0x561e84(0x2c7)],
            'numeric': _0x326ff0[_0x561e84(0x430)],
            'hex': '0123456789abcdef',
            'rangedice': _0x326ff0[_0x561e84(0x1e8)],
            'default': _0x326ff0[_0x561e84(0x3f1)]
        }, _0x1fae84 = _0x22a8c2[_0x4a1218] || _0x22a8c2[_0x561e84(0x17a)];
    let _0x3e29f8 = '';
    for (let _0xc4b522 = 0x0; _0x326ff0[_0x561e84(0x2db)](_0xc4b522, _0x3a31fc); _0xc4b522++) {
        _0x3e29f8 += _0x1fae84[_0x561e84(0x224)](Math[_0x561e84(0x204)](_0x326ff0['WOBjs'](Math[_0x561e84(0x144)](), _0x1fae84[_0x561e84(0x1ba)])));
    }
    return _0x3e29f8;
}
function setCookie(_0x5d99bd, _0xb65af, _0xdc1ccd) {
    const _0x58d09a = _0x562128, _0x32c0c2 = {
            'Wscbu': function (_0x274940, _0x592086) {
                return _0x274940 + _0x592086;
            },
            'ibyin': function (_0x265ef1, _0x98703e) {
                return _0x265ef1 * _0x98703e;
            },
            'PGJYX': function (_0x111fb4, _0x3323a8) {
                return _0x111fb4 + _0x3323a8;
            },
            'YRmPk': _0x58d09a(0x1f4)
        }, _0xfc5609 = new Date();
    _0xfc5609['setTime'](_0x32c0c2[_0x58d09a(0x22c)](_0xfc5609[_0x58d09a(0x27f)](), _0x32c0c2[_0x58d09a(0x1a6)](_0x32c0c2['ibyin'](_0xdc1ccd, 0x18) * 0x3c, 0x3c) * 0x3e8));
    const _0x515c64 = _0x32c0c2[_0x58d09a(0x2cd)](_0x32c0c2[_0x58d09a(0x289)], _0xfc5609[_0x58d09a(0x203)]());
    document['cookie'] = _0x5d99bd + '=' + _0xb65af + ';' + _0x515c64 + _0x58d09a(0x30b);
}
function getCookie(_0x18ad42) {
    const _0xe1a085 = _0x562128, _0x1ed9c8 = {
            'wrGGt': function (_0x385849, _0x15c822) {
                return _0x385849 + _0x15c822;
            }
        }, _0x193dab = _0x1ed9c8[_0xe1a085(0x3e7)](_0x18ad42, '='), _0x51234e = document[_0xe1a085(0x257)][_0xe1a085(0x1d1)](';')[_0xe1a085(0x31f)](_0x46b3a3 => _0x46b3a3[_0xe1a085(0x141)]());
    for (const _0x17ab16 of _0x51234e) {
        if (_0x17ab16[_0xe1a085(0x3b8)](_0x193dab))
            return _0x17ab16[_0xe1a085(0x269)](_0x193dab[_0xe1a085(0x1ba)]);
    }
    return '';
}
function saveScript() {
    const _0x326fdd = _0x562128, _0x4b684e = { 'RAXWH': _0x326fdd(0x22e) }, _0x2d5dee = mode === 'lua' ? luaEditor[_0x326fdd(0x2fc)]() : jsEditor['getValue'](), _0x223238 = document[_0x326fdd(0x3f8)]('a');
    _0x223238[_0x326fdd(0x226)] = window['URL']['createObjectURL'](new Blob([_0x2d5dee], { 'type': _0x4b684e[_0x326fdd(0x3a3)] })), _0x223238[_0x326fdd(0x2c6)] = _0x326fdd(0x3ef) + Date[_0x326fdd(0x186)]()[_0x326fdd(0x41e)]()[_0x326fdd(0x24f)](-0x6) + '.' + mode, _0x223238[_0x326fdd(0x177)]();
}
function getErrMsg(_0x37e231) {
    const _0x5ecdf4 = _0x562128;
    return _0x37e231[_0x5ecdf4(0x3b6)] && _0x37e231[_0x5ecdf4(0x3b6)][_0x5ecdf4(0x142)] && _0x37e231[_0x5ecdf4(0x3b6)]['data'][_0x5ecdf4(0x428)] || _0x37e231[_0x5ecdf4(0x428)] || _0x37e231[_0x5ecdf4(0x41e)]();
}

const _0x53dde4 = _0x4608;
(function (_0xa8ad93, _0xc86dc1) {
    const _0x3b7455 = _0x4608, _0x3a0a4c = _0xa8ad93();
    while (!![]) {
        try {
            const _0x530661 = -parseInt(_0x3b7455(0x189)) / 0x1 * (parseInt(_0x3b7455(0x17c)) / 0x2) + parseInt(_0x3b7455(0x1a0)) / 0x3 + -parseInt(_0x3b7455(0x1ae)) / 0x4 + parseInt(_0x3b7455(0x160)) / 0x5 + parseInt(_0x3b7455(0x195)) / 0x6 * (-parseInt(_0x3b7455(0x1a2)) / 0x7) + -parseInt(_0x3b7455(0x191)) / 0x8 * (parseInt(_0x3b7455(0x1b3)) / 0x9) + parseInt(_0x3b7455(0x17b)) / 0xa;
            if (_0x530661 === _0xc86dc1)
                break;
            else
                _0x3a0a4c['push'](_0x3a0a4c['shift']());
        } catch (_0xddafdc) {
            _0x3a0a4c['push'](_0x3a0a4c['shift']());
        }
    }
}(_0x11a8, 0x6c63a), token = localStorage[_0x53dde4(0x165)](_0x53dde4(0x164))[_0x53dde4(0x196)](), client = null, uuid = null, idInit = null, idBalance = null, idBet = null, idVault = null, amountVault = null, idUnVault = null, amountUnVault = 0x0, clientSeed = randomString(0x10), wdbConnected = ![], loadingCoin = !![], decimalAmountView = 0x9);
function _0x11a8() {
    const _0xb3f9c2 = [
        'onerror',
        'mutation\x20rotateSinglePlayerGameBetServerSeed\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rotateSinglePlayerGameBetServerSeed\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20previous\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20hash\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20betsMade\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}',
        'load',
        'RollOver',
        'sgvBg',
        'uuid',
        '16548020WfhQcO',
        '818Hjiyfz',
        'authenticate',
        'aEtVL',
        'query\x20authenticate($authToken:\x20String,\x20$referralCode:\x20String)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authenticate(authToken:\x20$authToken,\x20referralCode:\x20$referralCode)\x20{\x0a\x09\x09\x09\x09\x09\x09\x09_id\x0a\x09\x09\x09\x09\x09\x09\x09username\x0a\x09\x09\x09\x09\x09\x09\x09authToken\x0a\x09\x09\x09\x09\x09\x09\x09email\x0a\x09\x09\x09\x09\x09\x09\x09depositAddress\x0a\x09\x09\x09\x09\x09\x09\x09role\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09\x09\x09}',
        'Unvaulted\x20',
        'ukZjt',
        'depositToVault',
        'details',
        'bwTnz',
        'next',
        'initConnection\x20ok',
        'FCmDI',
        'type',
        '1324VsHToD',
        'bMBSA',
        'connection_ack',
        'playDice',
        'SOL',
        'Vaulted\x20',
        'OywZN',
        'xfrIf',
        '95912zxpAMk',
        'payload',
        'subscribe',
        'split',
        '2914962sfsRTV',
        'trim',
        'maxbet=',
        'SoMCa',
        'ENVRV',
        'profit',
        'randomUUID',
        'fuyzQ',
        'balance=',
        'errors',
        'withdrawnFromVault',
        '700614KdjVjz',
        'jrAnA',
        '7jLvgAY',
        'after',
        '1|10|8|3|9|5|6|2|7|4|0|12|11',
        'RRkcK',
        'OsIkb',
        'TLRqd',
        'result',
        'FGsTg',
        'stringify',
        'mutation\x20playDice($wager:\x20Float!,\x20$dividingPoint:\x20Float!,\x20$mode:\x20String!,\x20$clientSeed:\x20String!,\x20$autoplay:\x20Boolean!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20playDice(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wager:\x20$wager\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dividingPoint:\x20$dividingPoint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mode:\x20$mode\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientSeed:\x20$clientSeed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20autoplay:\x20$autoplay\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20isWin\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wager\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20details\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...\x20on\x20DiceGameDetails\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'minbalance=',
        'onopen',
        '867260mkqgUa',
        'data',
        'RTXyv',
        'Wjong',
        'fzIvm',
        '513dfzpQe',
        'doRro',
        'subscription\x20balance\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20balance\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20after\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'btEWk',
        'EPSILON',
        'mutation\x20withdrawnFromVault($amount:\x20Float!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20withdrawFromVault(amount:\x20$amount)\x0a\x20\x20\x20\x20\x20\x20}',
        'onmessage',
        'complete',
        'WlHis',
        'send',
        'HigbQ',
        'gRaHv',
        'QINhs',
        'readyState',
        'wFAwu',
        'DQrem',
        'LoWlp',
        'pTNcz',
        'VTJUJ',
        '2415765YlMsSS',
        'RwQfM',
        'connectServer\x20ok',
        'ODlri',
        'auth_token',
        'getItem',
        'mutation\x20depositToVault($amount:\x20Float!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20depositToVault(amount:\x20$amount)\x0a\x20\x20\x20\x20\x20\x20}',
        'MKbpK',
        'toFixed',
        'FhdYz',
        'balance',
        'then',
        'kImOP',
        'TyaCO',
        'PYXIW',
        'GYczM',
        'DZgWO',
        'ZMsGC',
        'round',
        'maxbalance=',
        'wCiEo'
    ];
    _0x11a8 = function () {
        return _0xb3f9c2;
    };
    return _0x11a8();
}
async function beforeWork() {
    return connectServer();
}
async function vault(_0x4a7c35) {
    const _0x1c83d5 = _0x53dde4, _0x2bf60b = {
            'bwTnz': _0x1c83d5(0x182),
            'FhdYz': function (_0x553154, _0x3f0bf2) {
                return _0x553154 * _0x3f0bf2;
            },
            'jWCcW': _0x1c83d5(0x193)
        };
    idVault = crypto[_0x1c83d5(0x19b)](), amountVault = _0x4a7c35;
    const _0x4976cc = {
        'id': idVault,
        'payload': {
            'operationName': _0x2bf60b[_0x1c83d5(0x184)],
            'query': _0x1c83d5(0x166),
            'variables': { 'amount': _0x2bf60b[_0x1c83d5(0x169)](_0x4a7c35, 0x3b9aca00) }
        },
        'type': _0x2bf60b['jWCcW']
    };
    client[_0x1c83d5(0x1bc)](JSON[_0x1c83d5(0x1aa)](_0x4976cc));
}
async function unvault(_0x12b6a3) {
    const _0x566fc6 = _0x53dde4, _0x2d38fa = {
            'KdaWS': function (_0x5d110c, _0x42d5b7) {
                return _0x5d110c * _0x42d5b7;
            },
            'ODlri': _0x566fc6(0x193)
        };
    idUnVault = crypto[_0x566fc6(0x19b)](), amountUnVault = _0x12b6a3;
    const _0xa042f6 = {
        'id': idUnVault,
        'payload': {
            'operationName': _0x566fc6(0x19f),
            'query': _0x566fc6(0x1b8),
            'variables': { 'amount': _0x2d38fa['KdaWS'](_0x12b6a3, 0x3b9aca00) }
        },
        'type': _0x2d38fa[_0x566fc6(0x163)]
    };
    client['send'](JSON[_0x566fc6(0x1aa)](_0xa042f6));
}
async function getListCoin() {
    const _0x13d149 = _0x53dde4, _0x4a9d8d = { 'pCOoW': _0x13d149(0x18d) };
    return coins = [_0x4a9d8d['pCOoW']], coin = coins[0x0], drawSelectCoin();
}
async function checkbalance() {
    const _0x5184f5 = _0x53dde4, _0x12876b = { 'OsIkb': _0x5184f5(0x16a) };
    wdbConnected && client[_0x5184f5(0x15a)] === 0x1 && (loadingCoin = !![], idBalance = crypto[_0x5184f5(0x19b)](), client['send'](JSON[_0x5184f5(0x1aa)]({
        'id': idBalance,
        'type': _0x5184f5(0x193),
        'payload': {
            'operationName': _0x12876b[_0x5184f5(0x1a6)],
            'query': _0x5184f5(0x1b5),
            'variables': {}
        }
    })));
}
async function resetseed() {
    const _0x552cc0 = _0x53dde4, _0x47c22e = {
            'klnVF': function (_0x4b5ab1, _0x4c0ea) {
                return _0x4b5ab1(_0x4c0ea);
            },
            'GYczM': 'rotateSinglePlayerGameBetServerSeed',
            'aIipH': _0x552cc0(0x193)
        };
    clientSeed = _0x47c22e['klnVF'](randomString, 0x10), client[_0x552cc0(0x1bc)](JSON[_0x552cc0(0x1aa)]({
        'id': crypto[_0x552cc0(0x19b)](),
        'payload': {
            'operationName': _0x47c22e[_0x552cc0(0x16f)],
            'query': _0x552cc0(0x176),
            'variables': {}
        },
        'type': _0x47c22e['aIipH']
    }));
}
async function sendBet() {
    const _0x172a09 = _0x53dde4, _0xa87e37 = {
            'DQrem': function (_0x52e6a6, _0x246f18) {
                return _0x52e6a6 * _0x246f18;
            },
            'kImOP': function (_0x21dba7, _0x64bdfb) {
                return _0x21dba7 + _0x64bdfb;
            },
            'RTXyv': function (_0x26930f, _0x201e72) {
                return _0x26930f - _0x201e72;
            },
            'RwQfM': _0x172a09(0x18c),
            'kljQe': function (_0x1c7acc, _0x328676) {
                return _0x1c7acc(_0x328676);
            },
            'FGsTg': function (_0x4d351a, _0x4ccb87) {
                return _0x4d351a * _0x4ccb87;
            },
            'ukZjt': 'subscribe',
            'pTNcz': function (_0x393328) {
                return _0x393328();
            }
        };
    chance = Math[_0x172a09(0x172)](_0xa87e37[_0x172a09(0x15c)](_0xa87e37[_0x172a09(0x16c)](chance, Number[_0x172a09(0x1b7)]), 0x64)) / 0x64, target = bethigh ? _0xa87e37[_0x172a09(0x1b0)](99.99, chance) : chance, target = Math[_0x172a09(0x172)]((target + Number[_0x172a09(0x1b7)]) * 0x64) / 0x64;
    if (run)
        idBet = crypto[_0x172a09(0x19b)](), client[_0x172a09(0x1bc)](JSON[_0x172a09(0x1aa)]({
            'id': idBet,
            'payload': {
                'operationName': _0xa87e37[_0x172a09(0x161)],
                'query': _0x172a09(0x1ab),
                'variables': {
                    'autoplay': ![],
                    'clientSeed': clientSeed,
                    'dividingPoint': target,
                    'mode': bethigh ? _0x172a09(0x178) : 'RollUnder',
                    'wager': _0xa87e37['kljQe'](parseInt, _0xa87e37[_0x172a09(0x1a9)](nextbet, 0x3b9aca00))
                }
            },
            'type': _0xa87e37[_0x172a09(0x181)]
        }));
    else
        _0xa87e37[_0x172a09(0x15e)](connectServer)[_0x172a09(0x16b)](sendBet);
}
async function handleResult(_0x1610de) {
    const _0x2ce899 = _0x53dde4, _0x34b6b6 = {
            'LoWlp': function (_0x249a7f, _0x142550) {
                return _0x249a7f(_0x142550);
            },
            'fzIvm': function (_0x4ff11c, _0x15cec6) {
                return _0x4ff11c(_0x15cec6);
            }
        };
    try {
        return currentprofit = _0x1610de[_0x2ce899(0x19a)] / 0x3b9aca00, lastBet['roll'] = _0x1610de['details'][_0x2ce899(0x1a8)], result = _0x1610de[_0x2ce899(0x183)][_0x2ce899(0x1a8)], lastBet['id'] = _0x34b6b6[_0x2ce899(0x15d)](String, _0x1610de['id']), handleStats();
    } catch (_0x388e07) {
        return stop(), log(_0x34b6b6[_0x2ce899(0x1b2)](getErrMsg, _0x388e07));
    }
}
async function connectServer() {
    const _0x28bb76 = _0x53dde4, _0x5754d2 = {
            'QINhs': function (_0x189288, _0xc63660, _0x28e489) {
                return _0x189288(_0xc63660, _0x28e489);
            },
            'bMBSA': function (_0xe6226d) {
                return _0xe6226d();
            },
            'WlHis': function (_0x2a2a6e, _0x1723ba) {
                return _0x2a2a6e(_0x1723ba);
            },
            'XzEZO': 'wss://nuts.tools/graphql',
            'PYXIW': 'graphql-transport-ws',
            'xfrIf': _0x28bb76(0x162)
        };
    return client = new WebSocket(_0x5754d2['XzEZO'], [_0x5754d2[_0x28bb76(0x16e)]]), client[_0x28bb76(0x1ad)] = async _0x2c0d6e => {
        const _0x2aa8d2 = _0x28bb76;
        client['send'](JSON[_0x2aa8d2(0x1aa)]({ 'type': 'connection_init' }));
    }, client['onclose'] = () => {
        const _0x5b25cc = _0x28bb76;
        wdbConnected = ![], _0x5754d2[_0x5b25cc(0x159)](setTimeout, connectServer, 0xbb8);
    }, client[_0x28bb76(0x175)] = _0x44a530 => {
        const _0x3558f7 = _0x28bb76;
        wdbConnected = ![], (_0x5754d2[_0x3558f7(0x18a)](stop), _0x5754d2[_0x3558f7(0x1bb)](log, _0x44a530));
    }, client[_0x28bb76(0x1b9)] = handleMessage, _0x5754d2[_0x28bb76(0x190)];
}
async function handleMessage(_0xb293fa) {
    const _0xc3fe0e = _0x53dde4, _0x4c5239 = {
            'SoMCa': function (_0x455a61, _0x399e6d) {
                return _0x455a61 === _0x399e6d;
            },
            'gRaHv': _0xc3fe0e(0x18b),
            'OywZN': function (_0x2d5a3f) {
                return _0x2d5a3f();
            },
            'ENVRV': function (_0x480f18, _0xeaa2f7) {
                return _0x480f18 === _0xeaa2f7;
            },
            'aEtVL': _0xc3fe0e(0x185),
            'wFAwu': function (_0x723c48, _0x5108f0) {
                return _0x723c48 === _0x5108f0;
            },
            'jrAnA': _0xc3fe0e(0x1a4),
            'ZMsGC': function (_0xdcca71, _0x1d1399) {
                return _0xdcca71 + _0x1d1399;
            },
            'doRro': _0xc3fe0e(0x197),
            'MKbpK': function (_0x5ebefb, _0x402c03) {
                return _0x5ebefb / _0x402c03;
            },
            'wCiEo': _0xc3fe0e(0x173),
            'Wjong': function (_0x3e3ead, _0x1b8f3b) {
                return _0x3e3ead + _0x1b8f3b;
            },
            'VTJUJ': 'minbet=',
            'btEWk': function (_0x585ada, _0x5a6f59) {
                return _0x585ada + _0x5a6f59;
            },
            'DZgWO': _0xc3fe0e(0x1ac),
            'FCmDI': function (_0x5ff140, _0x2a21fc) {
                return _0x5ff140 === _0x2a21fc;
            },
            'fuyzQ': function (_0x35a966, _0xc2774) {
                return _0x35a966(_0xc2774);
            },
            'HigbQ': function (_0x13ad6e, _0x22da8e) {
                return _0x13ad6e === _0x22da8e;
            },
            'TyaCO': _0xc3fe0e(0x1ba),
            'USwnO': 'balance=',
            'HagRN': function (_0x4b8d5d) {
                return _0x4b8d5d();
            },
            'RRkcK': function (_0x4531cf, _0x40ab24) {
                return _0x4531cf(_0x40ab24);
            },
            'xNuyC': function (_0x3b6aff, _0x363284) {
                return _0x3b6aff === _0x363284;
            },
            'elvTj': function (_0x2fccb3) {
                return _0x2fccb3();
            }
        }, _0x1fcb09 = JSON['parse'](_0xb293fa[_0xc3fe0e(0x1af)]);
    if (_0x4c5239[_0xc3fe0e(0x198)](_0x1fcb09[_0xc3fe0e(0x188)], _0x4c5239[_0xc3fe0e(0x158)]))
        await _0x4c5239[_0xc3fe0e(0x18f)](initConnection);
    if (_0x1fcb09['id'] === idInit && _0x4c5239[_0xc3fe0e(0x199)](_0x1fcb09['type'], _0x4c5239['aEtVL'])) {
        if (_0x1fcb09[_0xc3fe0e(0x192)][_0xc3fe0e(0x1af)][_0xc3fe0e(0x17d)])
            uuid = _0x1fcb09[_0xc3fe0e(0x192)]['data'][_0xc3fe0e(0x17d)][_0xc3fe0e(0x17a)];
        wdbConnected = !![], checkbalance();
    }
    if (_0x4c5239[_0xc3fe0e(0x199)](_0x1fcb09['id'], idBalance) && _0x4c5239[_0xc3fe0e(0x15b)](_0x1fcb09[_0xc3fe0e(0x188)], _0x4c5239['aEtVL'])) {
        if (_0x1fcb09[_0xc3fe0e(0x192)]['data'][_0xc3fe0e(0x16a)] && loadingCoin) {
            const _0x46b726 = _0x4c5239[_0xc3fe0e(0x1a1)][_0xc3fe0e(0x194)]('|');
            let _0x2bd9ba = 0x0;
            while (!![]) {
                switch (_0x46b726[_0x2bd9ba++]) {
                case '0':
                    fengari[_0xc3fe0e(0x177)](_0x4c5239[_0xc3fe0e(0x171)](_0x4c5239[_0xc3fe0e(0x1b4)], maxbet))();
                    continue;
                case '1':
                    balance = Number(_0x4c5239[_0xc3fe0e(0x167)](_0x1fcb09[_0xc3fe0e(0x192)][_0xc3fe0e(0x1af)][_0xc3fe0e(0x16a)][_0xc3fe0e(0x1a3)], 0x3b9aca00));
                    continue;
                case '2':
                    minbet = 1e-8;
                    continue;
                case '3':
                    minbalance = balance;
                    continue;
                case '4':
                    maxbet = balance;
                    continue;
                case '5':
                    maxbalance = balance;
                    continue;
                case '6':
                    fengari[_0xc3fe0e(0x177)](_0x4c5239['ZMsGC'](_0x4c5239[_0xc3fe0e(0x174)], balance))();
                    continue;
                case '7':
                    fengari[_0xc3fe0e(0x177)](_0x4c5239[_0xc3fe0e(0x1b1)](_0x4c5239[_0xc3fe0e(0x15f)], minbet))();
                    continue;
                case '8':
                    startBalance = balance;
                    continue;
                case '9':
                    fengari['load'](_0x4c5239[_0xc3fe0e(0x1b6)](_0x4c5239[_0xc3fe0e(0x170)], balance))();
                    continue;
                case '10':
                    fengari[_0xc3fe0e(0x177)](_0x4c5239[_0xc3fe0e(0x1b6)](_0xc3fe0e(0x19d), balance))();
                    continue;
                case '11':
                    return _0x4c5239['OywZN'](updateStats);
                case '12':
                    loadingCoin = ![];
                    continue;
                }
                break;
            }
        }
    }
    if (_0x4c5239[_0xc3fe0e(0x187)](_0x1fcb09['id'], idBet) && _0x1fcb09[_0xc3fe0e(0x188)] === _0x4c5239[_0xc3fe0e(0x17e)]) {
        if (_0x1fcb09[_0xc3fe0e(0x192)][_0xc3fe0e(0x1af)])
            return _0x4c5239[_0xc3fe0e(0x19c)](handleResult, _0x1fcb09[_0xc3fe0e(0x192)][_0xc3fe0e(0x1af)][_0xc3fe0e(0x18c)]);
        return stop(), log(_0x1fcb09[_0xc3fe0e(0x192)][_0xc3fe0e(0x19e)][0x0]['message']);
    }
    _0x4c5239[_0xc3fe0e(0x199)](_0x1fcb09['id'], idVault) && _0x4c5239['HigbQ'](_0x1fcb09['type'], _0x4c5239[_0xc3fe0e(0x16d)]) && (balance -= amountVault, fengari[_0xc3fe0e(0x177)](_0x4c5239[_0xc3fe0e(0x1b1)](_0x4c5239['USwnO'], balance))(), _0x4c5239['HagRN'](updateStats), _0x4c5239['fuyzQ'](log, _0xc3fe0e(0x18e) + _0x4c5239[_0xc3fe0e(0x1a5)](Number, amountVault)[_0xc3fe0e(0x168)](0x9) + '\x20' + coin)), _0x4c5239[_0xc3fe0e(0x157)](_0x1fcb09['id'], idUnVault) && _0x4c5239['xNuyC'](_0x1fcb09[_0xc3fe0e(0x188)], _0x4c5239[_0xc3fe0e(0x16d)]) && (balance += amountUnVault, fengari[_0xc3fe0e(0x177)](_0xc3fe0e(0x19d) + balance)(), _0x4c5239['elvTj'](updateStats), _0x4c5239['fuyzQ'](log, _0xc3fe0e(0x180) + _0x4c5239['fuyzQ'](Number, amountUnVault)[_0xc3fe0e(0x168)](0x9) + '\x20' + coin));
}
function _0x4608(_0x3bf38e, _0x5fa676) {
    const _0x11a8bc = _0x11a8();
    return _0x4608 = function (_0x4608b6, _0x213d4d) {
        _0x4608b6 = _0x4608b6 - 0x157;
        let _0x564107 = _0x11a8bc[_0x4608b6];
        return _0x564107;
    }, _0x4608(_0x3bf38e, _0x5fa676);
}
async function initConnection() {
    const _0xa67410 = _0x53dde4, _0x3afed5 = {
            'sgvBg': 'subscribe',
            'ICqfm': function (_0x3136d6) {
                return _0x3136d6();
            },
            'TLRqd': _0xa67410(0x186)
        };
    if (client[_0xa67410(0x15a)] === 0x1)
        idInit = crypto['randomUUID'](), client['send'](JSON[_0xa67410(0x1aa)]({
            'id': idInit,
            'payload': {
                'query': _0xa67410(0x17f),
                'variables': {
                    'authToken': token,
                    'referralCode': null
                }
            },
            'type': _0x3afed5[_0xa67410(0x179)]
        }));
    else
        _0x3afed5['ICqfm'](connectServer);
    return _0x3afed5[_0xa67410(0x1a7)];
}