const _0x5cf6aa = _0x3c62;
(function (_0x5537c9, _0x435665) {
    const _0x48ed1d = _0x3c62, _0x418b77 = _0x5537c9();
    while (!![]) {
        try {
            const _0x41b3a6 = parseInt(_0x48ed1d(0x3e7)) / 0x1 * (parseInt(_0x48ed1d(0x3ec)) / 0x2) + parseInt(_0x48ed1d(0x41b)) / 0x3 * (parseInt(_0x48ed1d(0x306)) / 0x4) + parseInt(_0x48ed1d(0x3ce)) / 0x5 * (-parseInt(_0x48ed1d(0x29c)) / 0x6) + -parseInt(_0x48ed1d(0x347)) / 0x7 * (parseInt(_0x48ed1d(0x38b)) / 0x8) + parseInt(_0x48ed1d(0x21a)) / 0x9 * (-parseInt(_0x48ed1d(0x22b)) / 0xa) + parseInt(_0x48ed1d(0x2a3)) / 0xb + parseInt(_0x48ed1d(0x2a7)) / 0xc * (parseInt(_0x48ed1d(0x314)) / 0xd);
            if (_0x41b3a6 === _0x435665)
                break;
            else
                _0x418b77['push'](_0x418b77['shift']());
        } catch (_0x1c6c2a) {
            _0x418b77['push'](_0x418b77['shift']());
        }
    }
}(_0x3c48, 0xccc86), Object[_0x5cf6aa(0x2b2)](String[_0x5cf6aa(0x23e)], _0x5cf6aa(0x302), {
    'value': function () {
        const _0x1296a9 = _0x5cf6aa;
        return this[_0x1296a9(0x381)](0x0)['toUpperCase']() + this[_0x1296a9(0x448)](0x1);
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x5cf6aa(0x26e), game = 'dice', run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x5cf6aa(0x356), kenoRisk = _0x5cf6aa(0x2e8), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x5cf6aa(0x198), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x5cf6aa(0x198),
    'BetSide': _0x5cf6aa(0x198),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x5cf6aa(0x2b1))), wdbUI = '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20' + WDB_MODE + '\x20|\x20' + CASINO_GAME + _0x5cf6aa(0x46f) + WDB_HOME + '\x20|\x20' + location['hostname']['replace']('www.', '') + _0x5cf6aa(0x450));
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = _0x5cf6aa(0x37e), plinkoLuaScript = _0x5cf6aa(0x219), plinkoJsScript = '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a', kenoLuaScript = _0x5cf6aa(0x2c7), kenoJsScript = '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a';
function exportLog() {
    const _0x6d178c = _0x5cf6aa, _0x2f1863 = { 'HiRDj': _0x6d178c(0x2ad) }, _0x490f30 = JSON[_0x6d178c(0x357)](fullLogs), _0x541d2e = document[_0x6d178c(0x1bc)]('a');
    _0x541d2e['href'] = window[_0x6d178c(0x2a0)][_0x6d178c(0x243)](new Blob([_0x490f30], { 'type': _0x2f1863[_0x6d178c(0x2b4)] })), _0x541d2e[_0x6d178c(0x35b)] = _0x6d178c(0x350) + Date[_0x6d178c(0x413)]()[_0x6d178c(0x28e)]()[_0x6d178c(0x448)](-0x6) + '.json', _0x541d2e['click']();
}
class Chart {
    constructor(_0x288e3d, _0x1c2055 = ![], _0x293228 = 0x64) {
        const _0x1ad6e2 = _0x5cf6aa, _0x96ad5f = {
                'IRVOt': '2|4|0|3|1|5',
                'VhKXv': _0x1ad6e2(0x480)
            }, _0x5030c9 = _0x96ad5f['IRVOt'][_0x1ad6e2(0x284)]('|');
        let _0x1051a5 = 0x0;
        while (!![]) {
            switch (_0x5030c9[_0x1051a5++]) {
            case '0':
                this['_maxRows'] = _0x293228;
                continue;
            case '1':
                this[_0x1ad6e2(0x249)] = new CanvasJS[(_0x1ad6e2(0x1b6))](_0x288e3d, {
                    'theme': _0x1c2055 ? _0x96ad5f[_0x1ad6e2(0x2c1)] : 'light1',
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0x1ad6e2(0x400),
                            'markerSize': 0x0,
                            'dataPoints': this['dps']
                        }]
                });
                continue;
            case '2':
                this[_0x1ad6e2(0x36a)] = _0x288e3d;
                continue;
            case '3':
                this[_0x1ad6e2(0x2df)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '4':
                this[_0x1ad6e2(0x2ce)] = _0x1c2055;
                continue;
            case '5':
                this[_0x1ad6e2(0x249)][_0x1ad6e2(0x1c2)]();
                continue;
            }
            break;
        }
    }
    set [_0x5cf6aa(0x31c)](_0x200499) {
        this['_maxRows'] = _0x200499;
    }
    get ['maxRows']() {
        const _0x4e524c = _0x5cf6aa;
        return this[_0x4e524c(0x2e5)];
    }
    set [_0x5cf6aa(0x21d)](_0x4b361c) {
        const _0x1f1a56 = _0x5cf6aa, _0x4ab237 = { 'Xgsid': 'dark1' };
        this[_0x1f1a56(0x2ce)] = _0x4b361c, this[_0x1f1a56(0x249)][_0x1f1a56(0x487)][_0x1f1a56(0x3be)] = _0x4b361c ? _0x4ab237[_0x1f1a56(0x3ab)] : _0x1f1a56(0x206), this[_0x1f1a56(0x249)]['render']();
    }
    get [_0x5cf6aa(0x21d)]() {
        const _0x5d1956 = _0x5cf6aa;
        return this[_0x5d1956(0x2ce)];
    }
    [_0x5cf6aa(0x41f)](_0x117a5d, _0x426d98, _0x547d04) {
        const _0x5f3c1d = _0x5cf6aa, _0x2027bf = {
                'uxwjO': function (_0xe371bf, _0x3d4f4c) {
                    return _0xe371bf > _0x3d4f4c;
                },
                'VyOQg': function (_0x4ee958, _0xc10b7a) {
                    return _0x4ee958 - _0xc10b7a;
                }
            };
        this[_0x5f3c1d(0x2df)][_0x5f3c1d(0x425)]({
            'x': _0x117a5d,
            'y': _0x426d98,
            'lineColor': _0x547d04
        });
        if (_0x2027bf[_0x5f3c1d(0x3e0)](this['dps'][_0x5f3c1d(0x33b)], this[_0x5f3c1d(0x2e5)]))
            this[_0x5f3c1d(0x2df)][_0x5f3c1d(0x3c5)]();
        if (this['dps'][this[_0x5f3c1d(0x2df)][_0x5f3c1d(0x33b)] - 0x2])
            this['dps'][_0x2027bf[_0x5f3c1d(0x1c8)](this[_0x5f3c1d(0x2df)]['length'], 0x2)][_0x5f3c1d(0x2d6)] = _0x547d04;
        this['chart'][_0x5f3c1d(0x1c2)]();
    }
    [_0x5cf6aa(0x405)]() {
        const _0x41f4fd = _0x5cf6aa;
        this['dps'] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x41f4fd(0x249)][_0x41f4fd(0x487)][_0x41f4fd(0x43f)][0x0][_0x41f4fd(0x3b0)] = this[_0x41f4fd(0x2df)], this[_0x41f4fd(0x249)]['render']();
    }
}
function changeMaxRows() {
    const _0x588fa5 = _0x5cf6aa, _0x3d1a14 = {
            'sXRjt': _0x588fa5(0x42e),
            'LoNyK': function (_0x453839) {
                return _0x453839();
            },
            'NtGlN': function (_0x495cbd, _0x210a11) {
                return _0x495cbd(_0x210a11);
            },
            'mvgyF': 'wdbMaxRows',
            'thJcl': function (_0x49bb5a) {
                return _0x49bb5a();
            }
        }, _0x4ebb6f = _0x3d1a14[_0x588fa5(0x1e6)]['split']('|');
    let _0x15ed14 = 0x0;
    while (!![]) {
        switch (_0x4ebb6f[_0x15ed14++]) {
        case '0':
            _0x3d1a14['LoNyK'](resetchart);
            continue;
        case '1':
            _0x3d1a14['LoNyK'](resethistory);
            continue;
        case '2':
            maxRows = _0x3d1a14[_0x588fa5(0x1d5)](Number, document['getElementById'](_0x3d1a14[_0x588fa5(0x304)])[_0x588fa5(0x24a)]);
            continue;
        case '3':
            chart[_0x588fa5(0x31c)] = maxRows;
            continue;
        case '4':
            _0x3d1a14[_0x588fa5(0x370)](resetlog);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x450730 = _0x5cf6aa, _0x48bae5 = {
            'sxVet': _0x450730(0x2db),
            'xOECJ': _0x450730(0x481),
            'xJIxT': _0x450730(0x244),
            'lWCSq': 'wdb',
            'kIlhB': _0x450730(0x2cf),
            'gVBlC': _0x450730(0x445),
            'hkYHB': _0x450730(0x2ae),
            'ZqfJF': '.wdb-stats\x20div\x20li',
            'bxetS': _0x450730(0x3be),
            'EIuXD': _0x450730(0x2a8),
            'vtxGe': 'dimgray',
            'CNNCA': _0x450730(0x312),
            'vdXZW': function (_0x438a43) {
                return _0x438a43();
            }
        };
    darkMode = !darkMode, chart[_0x450730(0x21d)] = darkMode;
    const _0x708be = document[_0x450730(0x447)](_0x48bae5['lWCSq']), _0x219570 = document[_0x450730(0x447)](_0x48bae5[_0x450730(0x488)]), _0x190c7b = document['querySelectorAll'](_0x48bae5['gVBlC']), _0x2df398 = document[_0x450730(0x32b)](_0x48bae5[_0x450730(0x396)]), _0x1ac649 = document[_0x450730(0x32b)](_0x48bae5[_0x450730(0x326)]);
    if (darkMode) {
        const _0x4cf1f4 = '3|2|7|8|4|0|1|6|5'[_0x450730(0x284)]('|');
        let _0x30247b = 0x0;
        while (!![]) {
            switch (_0x4cf1f4[_0x30247b++]) {
            case '0':
                jsEditor[_0x450730(0x46e)](_0x48bae5[_0x450730(0x431)], _0x48bae5[_0x450730(0x2f9)]);
                continue;
            case '1':
                _0x190c7b[_0x450730(0x352)](_0x565489 => {
                    const _0x1756bd = _0x450730;
                    _0x565489[_0x1756bd(0x25a)][_0x1756bd(0x2c6)] = _0x48bae5[_0x1756bd(0x275)], _0x565489['style'][_0x1756bd(0x394)] = _0x48bae5[_0x1756bd(0x212)];
                });
                continue;
            case '2':
                _0x708be[_0x450730(0x25a)]['color'] = _0x48bae5[_0x450730(0x212)];
                continue;
            case '3':
                _0x708be['style'][_0x450730(0x2c6)] = _0x48bae5[_0x450730(0x275)];
                continue;
            case '4':
                luaEditor[_0x450730(0x46e)](_0x48bae5[_0x450730(0x431)], _0x48bae5[_0x450730(0x2f9)]);
                continue;
            case '5':
                _0x1ac649[_0x450730(0x352)](_0x4b50bf => _0x4b50bf[_0x450730(0x25a)][_0x450730(0x394)] = _0x450730(0x481));
                continue;
            case '6':
                _0x2df398[_0x450730(0x352)](_0x27959e => _0x27959e[_0x450730(0x25a)][_0x450730(0x394)] = _0x450730(0x481));
                continue;
            case '7':
                _0x708be[_0x450730(0x25a)][_0x450730(0x3b2)] = _0x48bae5[_0x450730(0x275)];
                continue;
            case '8':
                _0x219570[_0x450730(0x25a)]['backgroundColor'] = _0x48bae5[_0x450730(0x383)];
                continue;
            }
            break;
        }
    } else
        _0x708be['style']['backgroundColor'] = _0x48bae5[_0x450730(0x212)], _0x708be[_0x450730(0x25a)]['color'] = _0x48bae5['xJIxT'], _0x708be['style'][_0x450730(0x3b2)] = _0x48bae5[_0x450730(0x212)], _0x219570['style'][_0x450730(0x2c6)] = _0x450730(0x395), luaEditor['setOption'](_0x48bae5[_0x450730(0x431)], _0x48bae5[_0x450730(0x34e)]), jsEditor[_0x450730(0x46e)](_0x48bae5['bxetS'], _0x450730(0x312)), _0x190c7b[_0x450730(0x352)](_0x916587 => {
            const _0x5f4693 = _0x450730;
            _0x916587[_0x5f4693(0x25a)][_0x5f4693(0x2c6)] = _0x48bae5[_0x5f4693(0x212)], _0x916587[_0x5f4693(0x25a)][_0x5f4693(0x394)] = _0x48bae5[_0x5f4693(0x2b5)];
        }), _0x2df398['forEach'](_0x418fed => _0x418fed[_0x450730(0x25a)][_0x450730(0x394)] = _0x450730(0x244)), _0x1ac649[_0x450730(0x352)](_0x50b434 => _0x50b434[_0x450730(0x25a)][_0x450730(0x394)] = _0x450730(0x244));
    _0x48bae5[_0x450730(0x1db)](updateStats);
}
let previousPosition = {
    'top': _0x5cf6aa(0x2b9),
    'left': '5px',
    'position': _0x5cf6aa(0x437)
};
function loadSavedPosition() {
    const _0xaea248 = _0x5cf6aa, _0x27adea = { 'rsWDL': 'wdb-bot-position' }, _0x4d41de = localStorage[_0xaea248(0x316)](_0x27adea[_0xaea248(0x39f)]);
    if (_0x4d41de)
        try {
            const _0x195cf9 = JSON[_0xaea248(0x30a)](_0x4d41de);
            _0x195cf9['top'] && _0x195cf9[_0xaea248(0x1f0)] && (previousPosition = _0x195cf9);
        } catch (_0x277365) {
        }
}
function savePosition() {
    const _0x21a010 = _0x5cf6aa;
    localStorage[_0x21a010(0x40c)]('wdb-bot-position', JSON['stringify'](previousPosition));
}
function toggleMinimalBot(_0x7b9001) {
    const _0x5c740c = _0x5cf6aa, _0xa5bfd6 = {
            'BkYPV': 'wdbMain',
            'EpLYY': 'wdb',
            'CjkRP': _0x5c740c(0x2b9),
            'XeEif': function (_0x1eed06) {
                return _0x1eed06();
            },
            'bkuWH': _0x5c740c(0x344),
            'Tdsti': _0x5c740c(0x464),
            'QAXoa': function (_0x1a7be4, _0x4a4169) {
                return _0x1a7be4 - _0x4a4169;
            },
            'tCSzC': _0x5c740c(0x3d7),
            'fNBnr': _0x5c740c(0x437),
            'HOcxn': _0x5c740c(0x407),
            'tThUt': _0x5c740c(0x1c0),
            'tXrSu': _0x5c740c(0x1bf)
        }, _0x56a032 = document['getElementById'](_0xa5bfd6[_0x5c740c(0x49d)]), _0x440243 = document[_0x5c740c(0x447)](_0x5c740c(0x349)), _0x524856 = document['getElementById'](_0xa5bfd6[_0x5c740c(0x330)]);
    if (_0x7b9001['innerText'] === '▼') {
        const _0x31c47b = window[_0x5c740c(0x280)](_0x524856);
        previousPosition = {
            'top': _0x524856['style'][_0x5c740c(0x420)] || _0x31c47b[_0x5c740c(0x420)] || _0xa5bfd6[_0x5c740c(0x372)],
            'left': _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x1f0)] || _0x31c47b['left'] || _0xa5bfd6[_0x5c740c(0x372)],
            'position': _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x410)] || _0x31c47b[_0x5c740c(0x410)] || 'fixed'
        }, _0xa5bfd6[_0x5c740c(0x265)](savePosition), _0x56a032[_0x5c740c(0x25a)][_0x5c740c(0x4a5)] = _0xa5bfd6[_0x5c740c(0x3ca)], _0x440243['style']['display'] = _0x5c740c(0x344), _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x360)] = _0xa5bfd6[_0x5c740c(0x40a)];
        const _0x45084b = window[_0x5c740c(0x1c6)], _0x45295b = 0x15e, _0x2b8081 = _0xa5bfd6[_0x5c740c(0x30f)](_0x45084b, _0x45295b) / 0x2;
        _0x524856['style'][_0x5c740c(0x420)] = _0xa5bfd6[_0x5c740c(0x389)], _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x1f0)] = _0x2b8081 + 'px', _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x410)] = _0xa5bfd6[_0x5c740c(0x354)], _0x7b9001['innerText'] = '▲';
    } else {
        const _0x481889 = _0xa5bfd6[_0x5c740c(0x35a)][_0x5c740c(0x284)]('|');
        let _0x3f115b = 0x0;
        while (!![]) {
            switch (_0x481889[_0x3f115b++]) {
            case '0':
                _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x1f0)] = previousPosition[_0x5c740c(0x1f0)];
                continue;
            case '1':
                _0x56a032[_0x5c740c(0x25a)][_0x5c740c(0x4a5)] = _0xa5bfd6[_0x5c740c(0x3c2)];
                continue;
            case '2':
                _0x7b9001[_0x5c740c(0x319)] = '▼';
                continue;
            case '3':
                _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x410)] = previousPosition[_0x5c740c(0x410)];
                continue;
            case '4':
                _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x360)] = _0xa5bfd6[_0x5c740c(0x21b)];
                continue;
            case '5':
                _0x524856[_0x5c740c(0x25a)][_0x5c740c(0x420)] = previousPosition[_0x5c740c(0x420)];
                continue;
            case '6':
                _0x440243['style'][_0x5c740c(0x4a5)] = _0x5c740c(0x1c0);
                continue;
            }
            break;
        }
    }
}
function _0x3c48() {
    const _0x55aae4 = [
        'ecueb',
        '2|3|0|1|4',
        'advancedStopOnWinsCheck',
        'lRikW',
        'bxetS',
        'CTyfw',
        'wdbWrapInitializing',
        'MwUTP',
        'vgrbo',
        'Profit',
        'fixed',
        'TogSP',
        'yGFXs',
        'advancedStopAfterStreakCheck',
        'dobet()',
        'between2',
        'zsmNa',
        'IvmSU',
        'data',
        'vJNSm',
        'remove',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'handleAdvanced\x20ok',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        '#wdbOpenScript',
        'getElementById',
        'slice',
        'EglBP',
        'TAJQo',
        'ZnsUo',
        'Krmfe',
        '2|1|5|0|4|3',
        'lIQQA',
        'HWkPO',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'Cnxgm',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'XkHNE',
        'nQEAY',
        'wdb',
        'gXWmm',
        'wdbChart',
        'DvCeg',
        'bSgSj',
        'wlBGY',
        'uFELi',
        'NRXkX',
        'wdbToggleMinimal',
        'JFNQx',
        'innerHTML',
        'qsYKg',
        'KSlmO',
        'return\x20betSide',
        'tpsVX',
        '350px',
        '\x0a\x20\x20\x20\x20chance4=',
        'hTDeH',
        'profit',
        'getTime',
        'TEXTAREA',
        '/fengari-web.min.js',
        'chance2',
        'target',
        'GkDDI',
        'setOption',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'rmoUx',
        'ubKCb',
        'PZeoe',
        'IRqNK',
        'ZkGJC',
        'DcMqE',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'RexFI',
        '2|4|1|0|3',
        'scriptname\x20=\x20\x22\x22',
        'firstChild',
        'gRSjY',
        'aJjcL',
        'rvxXA',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'prepend',
        'dark1',
        '#fff',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'round',
        '\x0a\x20\x20\x20\x20chance3=',
        'removeChild',
        'GuUBY',
        'options',
        'kIlhB',
        'yjsfx',
        'toUpperCase',
        'DsJzq',
        'MXeKx',
        'insertBefore',
        'ZEaDq',
        'QKofe',
        'tbsYD',
        'BDktA',
        'eEwFK',
        'eDPUs',
        'Script\x20Name:\x20',
        'kenoNumbers',
        'black',
        'coDzs',
        'sUyFj',
        'SEEMr',
        'mfDWt',
        'ViSIm',
        'Connected',
        'BkYPV',
        'UPxwD',
        'goTJy',
        'advancedMultiOnLoseCheck',
        'IJkiG',
        'FszUV',
        'XcgEw',
        'tagName',
        'display',
        'sNIIa',
        'IZYwJ',
        'show',
        'replace',
        'ebPcW',
        'advancedBetHighOnBetCheck',
        'toUTCString',
        'between',
        'plinko',
        'hide',
        'stopOnBalanceCheck',
        'rAEAT',
        'advancedMultiOnWinCheck',
        'Dadev',
        'onmouseup',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'SznNI',
        'dHZKv',
        'LEwYQ',
        'ZpxTL',
        'wdbPercentWagered',
        'advanced',
        'YmCeU',
        'high',
        'preventDefault',
        'GiLcn',
        'WHmnI',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'QHHsa',
        'HFOIo',
        'LjSLp',
        'YUZfZ',
        'rTaEL',
        'PxQYj',
        'wdbWrapTips',
        'stopOnBalance',
        'chance',
        'Chart',
        'yJGkJ',
        'wdbTime',
        'PFjmY',
        'wdbWrap',
        'zzdnr',
        'createElement',
        'body',
        'lastChild',
        '1000px',
        'block',
        'wdbWrapHistory',
        'render',
        'Dpvon',
        'wDcJv',
        'KsbBU',
        'innerWidth',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'VyOQg',
        'appendChild',
        'wdbHighLoseStreak',
        'Stop\x20on\x20roll\x20number\x20',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'ckraE',
        'wdbProfit',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'flex',
        'HMDwe',
        'nOIPn',
        'RGlNi',
        '$1=$1*$2\x20',
        'NtGlN',
        'WxfxG',
        'dIrLE',
        'bgCpU',
        'return\x20bethigh',
        'return\x20kenoRisk',
        'vdXZW',
        'BNJVk',
        'href',
        'Nrila',
        'VWXJZ',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'kXzEA',
        'Eukqx',
        'advancedMultiOnLoseBets',
        'result',
        'advancedStopOnBetsCheck',
        'sXRjt',
        'DEeSE',
        'fuOth',
        'offsetTop',
        'HfJjT',
        'tBlDG',
        'GojVb',
        '</td>',
        'wdbMaxProfit',
        'wdbRunningScript',
        'left',
        'substring',
        'tkYrx',
        '\x0a\x20\x20\x20\x20losses=',
        'updateStats\x20ok',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'stop',
        'message',
        'startsWith',
        'SoKzx',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        '0123456789',
        'JBmvp',
        'advancedStopOnLose',
        'UKxHc',
        'wqOln',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'xisCN',
        'pqAST',
        'red',
        'KSHbR',
        'ZhZaS',
        'light1',
        '1|3|5|2|0|4',
        'ZkSXg',
        'resetstatsOnProfit',
        'FuBLp',
        'Mode',
        'sXuED',
        'wdbBalance',
        'ulABi',
        'NiDuG',
        'advancedBetHighOnWinCheck',
        'FzEfU',
        'xOECJ',
        'onmousemove',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'Target',
        '<td>',
        'files',
        'showInfo\x20OK',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        '9PsLRkm',
        'tXrSu',
        'PoNdJ',
        'darkMode',
        'random',
        'DAFUb',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'tpCNV',
        'wdbShowMode',
        'advancedBetHighOnProfitCheck',
        'FAZTi',
        'nwuCe',
        'getValue',
        'DZGaC',
        'advancedChanceOnLoseBets',
        'vvFig',
        'Qxilr',
        '15839380EHRizp',
        'fromTextArea',
        'ojzkQ',
        'DOkvB',
        '\x20|\x20',
        'oFhIa',
        'advancedChanceOnLoseCheck',
        'advancedChance',
        'NIFvq',
        'KSkCr',
        'Osuhr',
        'return\x20chance',
        'advancedStopRollNumberCheck',
        'rangedice',
        'offsetHeight',
        'LLvXc',
        'event',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        '\x0a\x20\x20\x20\x20minbalance=',
        'prototype',
        'UkOfy',
        'Kaefw',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'wdbOpenJSScript',
        'createObjectURL',
        '#000',
        'fbjNZ',
        'Functions',
        'LBSUT',
        'roll',
        'chart',
        'value',
        '0|4|5|6|9|1|2|8|7|3',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'clientX',
        'acsaZ',
        'then',
        ';path=/',
        'pSjob',
        'wdbToggleLive',
        '\x20at\x20',
        'WDBScript',
        'Rzzjn',
        'BRnlg',
        'TTtbv',
        'wdbHighBet',
        'style',
        'unVCp',
        '0123456789abcdef',
        'WRkGr',
        'amount',
        'DgxOe',
        '2|0|4|1|3',
        'lPdwr',
        '\x0a\x20\x20\x20\x20profit=',
        '\x0a\x20\x20\x20\x20chance2=',
        'tLccp',
        'XeEif',
        'Jocvq',
        'MrlHw',
        'mpjsP',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'floor',
        'oqjHp',
        'PxNfM',
        'advancedBetHighOnLoseCheck',
        'lua',
        'CSmSs',
        'wdbMenuMode',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'oiTfg',
        'innerHeight',
        'rHfrA',
        'sxVet',
        'ZgTrJ',
        'wdbMaxBalance',
        'ASHHL',
        'kpObq',
        'play',
        'kwMwT',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'AbftC',
        'closest',
        'script',
        'getComputedStyle',
        'wdbWagered',
        'return\x20chance1',
        'cWrOm',
        'split',
        'green',
        'paYOl',
        '$1=$1+$2\x20',
        'gaxwN',
        'UtNWU',
        'bFmGv',
        'GpbsN',
        'cDxmG',
        'jGXCo',
        'toString',
        'yfAMO',
        'vSRxI',
        'ZQoXE',
        'TnWAO',
        'rQScM',
        'UpzkY',
        'QxkKF',
        'VFwoT',
        'XKxGN',
        'CeFyq',
        'HOalw',
        'pUOzD',
        'advancedChanceOnLose',
        '697122rEfEqT',
        'jlEDC',
        'advancedStopRollNumber',
        'offsetWidth',
        'URL',
        'xHUPt',
        'chance3',
        '4057955plfwcU',
        'GHlun',
        'TVVdm',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        '6416112SkLZgL',
        'darcula',
        'WBOhO',
        'bbaXX',
        'jlRbv',
        'aszdd',
        'application/json',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'keno',
        'wdbScriptBoxLUA',
        '/ching.mp3',
        'defineProperty',
        'XGZqw',
        'HiRDj',
        'xJIxT',
        'wsSQB',
        'gCuOF',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '5px',
        'DwsfQ',
        'clear',
        'white',
        'SwmXa',
        'mlIBp',
        'Dxolq',
        'wdbMinProfit',
        'VhKXv',
        'return\x20plinkoRow',
        '\x0a\x20\x20\x20\x20bets=',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'kbzVb',
        'backgroundColor',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        '$1=$1/$2\x20',
        'wdbHistory',
        'YURIS',
        'wdbLosses',
        '\x0a\x20\x20\x20\x20previousbet=',
        'mOXjN',
        '_darkMode',
        'wdbHeader',
        'mpUXV',
        'Betting\x20',
        'advancedChanceOnWinBets',
        'EGLOG',
        'nonce',
        'deleteH',
        'lineColor',
        'return\x20nextbet',
        'OivMq',
        'sXpxE',
        'RBsXL',
        '#2a2a2a',
        'idwel',
        'YiWXa',
        'text',
        'dps',
        'LOZiq',
        'TVmHT',
        'DdDxz',
        'ZKqzO',
        'FuiBH',
        '_maxRows',
        'dRNDB',
        '\x0a\x20\x20\x20\x20minprofit=',
        'classic',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        '\x0a\x20\x20\x20\x20win=',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'HAEdt',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        '0:0:0:0',
        'zzYqE',
        'PHoEM',
        'LJvHZ',
        'tAFSy',
        'wdbHighWinStreak',
        'WzhlD',
        'SXmho',
        'Chance3',
        'betSide',
        'Stop\x20on\x20balance\x20',
        'EIuXD',
        'wdbAdvancedMode',
        'jFelw',
        'loadCSS',
        'yqPHA',
        'change',
        'OeJGZ',
        'AcNAW',
        '\x0a\x20\x20\x20\x20balance=',
        'capitalize',
        'BYsTF',
        'mvgyF',
        'WHaWU',
        '4uCcZwB',
        'gkoHV',
        'uAIyB',
        'Yhsxd',
        'parse',
        'addEventListener',
        'nlDUE',
        'fRqUA',
        'save',
        'QAXoa',
        'Sftbg',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'default',
        'disabled',
        '52AQVoLS',
        'jqnRz',
        'getItem',
        'RaWLn',
        'wdbStopOnWinButton',
        'innerText',
        'rpipd',
        'return\x20chance4',
        'maxRows',
        'ydyjX',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'children',
        'clientY',
        'FKWfw',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'wdbWrapFunctions',
        'XqKaf',
        'nzvOJ',
        'ZqfJF',
        'ywBLp',
        '</option>',
        'ihhgv',
        '#wdbSaveScriptButton',
        'querySelectorAll',
        'OJhUy',
        'oqskn',
        'Stop\x20on\x20current\x20streak\x20',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'EpLYY',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'tgBTP',
        'key',
        'lVPsS',
        'return\x20chance2',
        'LZwyG',
        'iWCZg',
        'Wgmyf',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'filter',
        'length',
        '/canvasjs.min.js',
        'hxiAY',
        'cJuaM',
        'qYSJJ',
        'chance1=',
        'PGzpH',
        'cTdZr',
        'stopOnProfit',
        'none',
        'aBYVM',
        'return\x20plinkoRisk',
        '1316427EjxQrk',
        'toFixed',
        'wdbFooter',
        'wdbHighLose',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'QnSUJ',
        'wdbWrapLog',
        'CNNCA',
        'tDkMx',
        'log-',
        'click',
        'forEach',
        'dSotZ',
        'fNBnr',
        'cookie',
        'low',
        'stringify',
        'VdGzX',
        '%\x20chance\x20to\x20win,\x20',
        'HOcxn',
        'download',
        'start',
        'jhPji',
        'bxrbp',
        'TlNcJ',
        'width',
        'text/plain;\x20charset=utf-8',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'CprCW',
        'wdbWrapVariables',
        '\x0a\x20\x20\x20\x20chance=',
        'AUQvj',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'STygk',
        'containerId',
        'dXzyH',
        'EbAxN',
        'wdbStats',
        'reset',
        'wWyAl',
        'thJcl',
        'RDMFP',
        'CjkRP',
        'keydown',
        'map',
        'moNRE',
        'ASRby',
        'VArPm',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'AgxrX',
        'yQGmq',
        '0.00',
        'isContentEditable',
        'wsGri',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'LDPRk',
        '\x20Balls',
        'charAt',
        'qLKCW',
        'vtxGe',
        'chance1',
        'EPSILON',
        'return\x20chance3',
        'bRCaV',
        'tvtaq',
        'tCSzC',
        'FpUqN',
        '40fHhLAf',
        'LPqjE',
        'pAqPI',
        '.CodeMirror',
        '#wdbHistory',
        'advancedMultiOnWin',
        '\x20lose',
        'wdbWrapLicenseBox',
        'toLowerCase',
        'color',
        'antiquewhite',
        'hkYHB',
        'dice',
        'advancedMultiOnWinBets',
        'bPgfJ',
        'GqbzX',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'activeElement',
        'initLuaOk',
        'wdbWrapControl',
        'rsWDL',
        'not\x20',
        'HSSTj',
        'QEKky',
        'height',
        'JsFdK',
        'createUIOk',
        'PfJFm',
        'ticPS',
        'wdbWrapPercentProfit',
        'McZIq',
        'load',
        'Xgsid',
        'Log',
        'LFeOC',
        'QYxeP',
        'acUnj',
        'dataPoints',
        'wdbShow',
        'borderColor',
        'loadScript',
        'YGFkf',
        'wdbMinBalance',
        'wdbStartButton',
        'onmousedown',
        'BetSide',
        'wdbJSMode',
        'CWpCK',
        'unwBq',
        'expires=',
        'ZLtGd',
        'theme',
        'qNvYn',
        'vywnJ',
        '190px',
        'tThUt',
        'IhBtb',
        'WckmE',
        'shift',
        'ElzSZ',
        'zlmKy',
        'VJBUZ',
        'YhIZE',
        'bkuWH',
        'AdYVT',
        'AYCjO',
        'MgWnS',
        '5OEtoIr',
        'ycLcL',
        'qpRyT',
        'QOJAJ',
        'mRnit',
        'fpkmJ',
        'querySelector',
        'TEVIE',
        'kMARR',
        'calc(100vh\x20-\x2060px)',
        'advancedBetHighOnBet',
        'jRVNZ',
        'TwwqB',
        'zPIuO',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'uVoRE',
        'rows',
        'lngWg',
        'uxwjO',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'TuvYo',
        'aiArS',
        'wdbOpenLUAScript',
        'wdbWins',
        'eWqkx',
        '221999zfhmhY',
        'xeWpt',
        'wdbMenuCoin',
        'join',
        'outside',
        '4DylObH',
        'xAvzl',
        '380px',
        'Roll',
        'checked',
        'wDfJG',
        'LnpRG',
        'axxZm',
        'WGwJY',
        'Tnrwz',
        'response',
        'Variables',
        'Zdclu',
        'wdbResumeButton',
        'resetstatsOnProfitCheck',
        'lPrJh',
        'advancedStopOnBets',
        'RenMQ',
        '$1=$1-$2\x20',
        'fFNWC',
        'line',
        'wdbSpeed',
        '\x20Hits',
        'wdbBets',
        'wdbPercentProfit',
        'resetChart',
        '<option\x20value=\x22',
        '1|6|4|5|0|3|2',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'return\x20currency',
        'Tdsti',
        '\x20to\x20win,\x20',
        'setItem',
        'RVajz',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'chance4',
        'position',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'obSqY',
        'now',
        'hIIPM',
        'return\x20scriptname',
        'RxHRZ',
        '6|11|4|7|15|16|5|12|17|18|9|13|14|3|1|2|0|8|10',
        'CoMPH',
        'advancedStopAfterStreak',
        'VmCHD',
        '1582839hHKapW',
        'dKxvM',
        'mdKem',
        'vkbnj',
        'updateChart',
        'top',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'bethigh',
        'setValue',
        'dXHQl',
        'push',
        'tWrfV',
        'advancedChanceOnWinCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'nMiOM',
        'wdbCurrentStreak',
        'JRZmx',
        'elYze'
    ];
    _0x3c48 = function () {
        return _0x55aae4;
    };
    return _0x3c48();
}
function toggleHideControlBot(_0x2409bf) {
    const _0x1a08ad = _0x5cf6aa, _0x32135d = { 'HAEdt': _0x1a08ad(0x344) }, _0x1a0aaa = document[_0x1a08ad(0x447)](_0x1a08ad(0x39e));
    _0x2409bf[_0x1a08ad(0x319)] === '▲' ? (_0x1a0aaa[_0x1a08ad(0x25a)]['display'] = _0x32135d[_0x1a08ad(0x2ec)], _0x2409bf[_0x1a08ad(0x319)] = '▼') : (_0x1a0aaa[_0x1a08ad(0x25a)]['display'] = _0x1a08ad(0x1d0), _0x2409bf[_0x1a08ad(0x319)] = '▲');
}
function drawSelectCoin() {
    const _0x4b21df = _0x5cf6aa, _0x47c953 = {
            'HOalw': _0x4b21df(0x3e9),
            'NIFvq': function (_0x14492d, _0x180ab8) {
                return _0x14492d(_0x180ab8);
            }
        }, _0x20f8f5 = coins[_0x4b21df(0x374)](_0x22e21f => _0x4b21df(0x406) + _0x22e21f + '\x22>' + _0x22e21f + _0x4b21df(0x328))[_0x4b21df(0x3ea)]('');
    document[_0x4b21df(0x447)](_0x47c953[_0x4b21df(0x299)])['innerHTML'] = _0x20f8f5, currency = _0x47c953[_0x4b21df(0x233)](String, coin)[_0x4b21df(0x393)](), fengari['load']('currency=\x22' + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x6aa11b = _0x5cf6aa, _0x26b475 = {
            'SXmho': function (_0x5d9d05, _0x29b1b2) {
                return _0x5d9d05 - _0x29b1b2;
            },
            'RBsXL': function (_0xfb8971, _0x281860) {
                return _0xfb8971 - _0x281860;
            },
            'Dxolq': function (_0x1b3b81, _0x546a13) {
                return _0x1b3b81 - _0x546a13;
            },
            'gaxwN': function (_0xf2afce, _0x3a658a) {
                return _0xf2afce + _0x3a658a;
            },
            'RVajz': function (_0x4a7f9a, _0xf6289c) {
                return _0x4a7f9a + _0xf6289c;
            },
            'BRnlg': 'wdbToggleMinimal',
            'NiDuG': function (_0x365c43, _0x547fe4) {
                return _0x365c43 === _0x547fe4;
            },
            'xHUPt': function (_0x5de57f) {
                return _0x5de57f();
            },
            'AdYVT': function (_0x42472c, _0x3daccc) {
                return _0x42472c === _0x3daccc;
            },
            'QnSUJ': 'INPUT',
            'ttjSQ': _0x6aa11b(0x469),
            'KSkCr': _0x6aa11b(0x38e),
            'Dadev': function (_0x1d355f, _0x27b806) {
                return _0x1d355f / _0x27b806;
            },
            'Wgmyf': function (_0x15578a, _0xde43b5) {
                return _0x15578a - _0xde43b5;
            },
            'LFeOC': function (_0x11dfb9, _0x52d33e) {
                return _0x11dfb9 === _0x52d33e;
            },
            'Qxilr': function (_0x391096, _0x5bbaf8) {
                return _0x391096 - _0x5bbaf8;
            },
            'fRqUA': function (_0x3790c2, _0xa53683) {
                return _0x3790c2 + _0xa53683;
            },
            'rAEAT': _0x6aa11b(0x1ba),
            'YGFkf': _0x6aa11b(0x455),
            'utenz': _0x6aa11b(0x2cf),
            'DfMPY': _0x6aa11b(0x373),
            'xAvzl': 'resize',
            'mvQln': _0x6aa11b(0x433),
            'DEeSE': _0x6aa11b(0x312),
            'fIyWq': _0x6aa11b(0x26e),
            'STygk': 'wdbScriptBoxJS',
            'gCuOF': 'javascript',
            'yQGmq': _0x6aa11b(0x3b9),
            'hIIPM': _0x6aa11b(0x344),
            'PGzpH': _0x6aa11b(0x34d),
            'sUyFj': _0x6aa11b(0x365),
            'VWXJZ': _0x6aa11b(0x323),
            'WHmnI': _0x6aa11b(0x1b3),
            'FszUV': 'click',
            'axxZm': _0x6aa11b(0x242),
            'TogSP': _0x6aa11b(0x2fe),
            'OJhUy': _0x6aa11b(0x457),
            'rLaWu': _0x6aa11b(0x3a5)
        }, _0x23783b = document[_0x6aa11b(0x1bc)]('div');
    _0x23783b['id'] = _0x26b475[_0x6aa11b(0x19c)], _0x23783b['innerHTML'] = wdbUI, document[_0x6aa11b(0x1bd)][_0x6aa11b(0x47f)](_0x23783b);
    const _0x3775fc = document['getElementById'](_0x26b475[_0x6aa11b(0x3b4)]);
    let _0x45468f = 0x0, _0x33dc83 = 0x0, _0x5c90ec = 0x0, _0x2d0f19 = 0x0;
    _0x26b475[_0x6aa11b(0x2a1)](loadSavedPosition), _0x3775fc[_0x6aa11b(0x25a)]['top'] = previousPosition['top'], _0x3775fc[_0x6aa11b(0x25a)]['left'] = previousPosition[_0x6aa11b(0x1f0)], _0x3775fc[_0x6aa11b(0x25a)][_0x6aa11b(0x410)] = previousPosition[_0x6aa11b(0x410)];
    function _0x4e90c9(_0x466464) {
        const _0x5aea24 = _0x6aa11b;
        _0x466464 = _0x466464 || window[_0x5aea24(0x23b)], _0x466464['preventDefault'](), _0x5c90ec = _0x466464[_0x5aea24(0x24e)], _0x2d0f19 = _0x466464[_0x5aea24(0x320)], document[_0x5aea24(0x19f)] = _0x2ad765, document['onmousemove'] = _0x5a34f2;
    }
    function _0x5a34f2(_0x11f2e5) {
        const _0x274751 = _0x6aa11b;
        _0x11f2e5 = _0x11f2e5 || window[_0x274751(0x23b)], _0x11f2e5[_0x274751(0x1a9)](), _0x45468f = _0x26b475[_0x274751(0x2f5)](_0x5c90ec, _0x11f2e5['clientX']), _0x33dc83 = _0x2d0f19 - _0x11f2e5['clientY'], _0x5c90ec = _0x11f2e5[_0x274751(0x24e)], _0x2d0f19 = _0x11f2e5[_0x274751(0x320)];
        let _0x283b2e = _0x26b475[_0x274751(0x2da)](_0x3775fc[_0x274751(0x1e9)], _0x33dc83), _0x226c1b = _0x26b475[_0x274751(0x2bf)](_0x3775fc['offsetLeft'], _0x45468f);
        _0x3775fc[_0x274751(0x25a)][_0x274751(0x420)] = _0x26b475[_0x274751(0x288)](_0x283b2e, 'px'), _0x3775fc[_0x274751(0x25a)][_0x274751(0x1f0)] = _0x26b475[_0x274751(0x40d)](_0x226c1b, 'px');
    }
    function _0x2ad765() {
        const _0x5e2955 = _0x6aa11b, _0x6e8c49 = document[_0x5e2955(0x447)](_0x26b475['BRnlg']);
        if (_0x6e8c49 && _0x26b475[_0x5e2955(0x20f)](_0x6e8c49['innerText'], '▼')) {
            const _0x1ebbc2 = window[_0x5e2955(0x280)](_0x3775fc);
            previousPosition['top'] = _0x3775fc[_0x5e2955(0x25a)][_0x5e2955(0x420)] || _0x1ebbc2[_0x5e2955(0x420)], previousPosition[_0x5e2955(0x1f0)] = _0x3775fc[_0x5e2955(0x25a)][_0x5e2955(0x1f0)] || _0x1ebbc2[_0x5e2955(0x1f0)], _0x26b475[_0x5e2955(0x2a1)](savePosition);
        }
        document[_0x5e2955(0x19f)] = null, document[_0x5e2955(0x213)] = null;
    }
    document['getElementById'](_0x26b475['utenz'])[_0x6aa11b(0x3b7)] = _0x4e90c9, document['addEventListener'](_0x26b475['DfMPY'], function (_0x3d416a) {
        const _0x44eb44 = _0x6aa11b;
        if (_0x26b475[_0x44eb44(0x3cb)](_0x3d416a[_0x44eb44(0x333)][_0x44eb44(0x393)](), 'w')) {
            const _0x318f96 = document[_0x44eb44(0x39c)], _0x4406c3 = _0x26b475[_0x44eb44(0x3cb)](_0x318f96[_0x44eb44(0x4a4)], _0x26b475[_0x44eb44(0x34c)]) || _0x26b475[_0x44eb44(0x20f)](_0x318f96[_0x44eb44(0x4a4)], _0x26b475['ttjSQ']) || _0x318f96[_0x44eb44(0x37c)] || _0x318f96[_0x44eb44(0x27e)](_0x26b475[_0x44eb44(0x234)]);
            if (!_0x4406c3) {
                const _0x540aee = _0x26b475[_0x44eb44(0x19e)](_0x26b475[_0x44eb44(0x2f5)](window[_0x44eb44(0x273)], _0x3775fc[_0x44eb44(0x239)]), 0x2), _0x3a6a20 = _0x26b475[_0x44eb44(0x19e)](_0x26b475[_0x44eb44(0x338)](window[_0x44eb44(0x1c6)], _0x3775fc[_0x44eb44(0x29f)]), 0x2);
                _0x3775fc[_0x44eb44(0x25a)][_0x44eb44(0x420)] = _0x26b475[_0x44eb44(0x40d)](_0x540aee, 'px'), _0x3775fc[_0x44eb44(0x25a)][_0x44eb44(0x1f0)] = _0x3a6a20 + 'px';
                const _0x4c4601 = document['getElementById'](_0x26b475[_0x44eb44(0x257)]);
                _0x4c4601 && _0x26b475[_0x44eb44(0x3cb)](_0x4c4601[_0x44eb44(0x319)], '▼') && (previousPosition[_0x44eb44(0x420)] = _0x3775fc[_0x44eb44(0x25a)][_0x44eb44(0x420)], previousPosition['left'] = _0x3775fc[_0x44eb44(0x25a)]['left'], _0x26b475[_0x44eb44(0x2a1)](savePosition));
            }
        }
    }), window['addEventListener'](_0x26b475[_0x6aa11b(0x3ed)], function () {
        const _0x39e3eb = _0x6aa11b, _0x4aa3bb = document[_0x39e3eb(0x447)](_0x39e3eb(0x45d));
        if (_0x4aa3bb && _0x26b475[_0x39e3eb(0x3ad)](_0x4aa3bb[_0x39e3eb(0x319)], '▲')) {
            const _0x2b5311 = window['innerWidth'], _0x5f2dd2 = 0x15e, _0x19c1b0 = _0x26b475[_0x39e3eb(0x19e)](_0x26b475[_0x39e3eb(0x22a)](_0x2b5311, _0x5f2dd2), 0x2);
            _0x3775fc[_0x39e3eb(0x25a)][_0x39e3eb(0x1f0)] = _0x26b475[_0x39e3eb(0x30d)](_0x19c1b0, 'px');
        }
    });
    if (document['getElementById'](_0x6aa11b(0x392)))
        document['getElementById'](_0x6aa11b(0x392))[_0x6aa11b(0x441)]();
    if (document[_0x6aa11b(0x447)](_0x6aa11b(0x433)))
        document[_0x6aa11b(0x447)](_0x26b475['mvQln'])['remove']();
    luaEditor = CodeMirror[_0x6aa11b(0x22c)](document[_0x6aa11b(0x447)](_0x6aa11b(0x2b0)), {
        'theme': _0x26b475['DEeSE'],
        'mode': _0x26b475['fIyWq'],
        'lineNumbers': !![]
    }), luaEditor['save'](), jsEditor = CodeMirror[_0x6aa11b(0x22c)](document[_0x6aa11b(0x447)](_0x26b475[_0x6aa11b(0x369)]), {
        'theme': _0x26b475[_0x6aa11b(0x1e7)],
        'mode': _0x26b475[_0x6aa11b(0x2b7)],
        'lineNumbers': !![]
    }), jsEditor[_0x6aa11b(0x30e)](), document['getElementById'](_0x26b475[_0x6aa11b(0x37a)])[_0x6aa11b(0x25a)][_0x6aa11b(0x4a5)] = _0x26b475[_0x6aa11b(0x414)], document['getElementById'](_0x6aa11b(0x2fa))[_0x6aa11b(0x25a)][_0x6aa11b(0x4a5)] = _0x26b475[_0x6aa11b(0x414)], document[_0x6aa11b(0x447)](_0x26b475[_0x6aa11b(0x341)])['style'][_0x6aa11b(0x4a5)] = _0x6aa11b(0x344), document[_0x6aa11b(0x447)](_0x26b475[_0x6aa11b(0x498)])['style'][_0x6aa11b(0x4a5)] = _0x26b475[_0x6aa11b(0x414)], document[_0x6aa11b(0x447)](_0x26b475[_0x6aa11b(0x1df)])[_0x6aa11b(0x25a)][_0x6aa11b(0x4a5)] = _0x26b475['hIIPM'], document[_0x6aa11b(0x447)](_0x26b475[_0x6aa11b(0x1ab)])[_0x6aa11b(0x25a)][_0x6aa11b(0x4a5)] = _0x6aa11b(0x344), document[_0x6aa11b(0x447)](_0x6aa11b(0x222))['disabled'] = !![];
    const _0x18035d = document[_0x6aa11b(0x447)](_0x6aa11b(0x3e4));
    _0x18035d[_0x6aa11b(0x30b)](_0x26b475[_0x6aa11b(0x4a2)], () => {
        const _0x2d83ae = _0x6aa11b;
        _0x18035d[_0x2d83ae(0x24a)] = null;
    }), _0x18035d['addEventListener'](_0x6aa11b(0x2fe), async _0x1bac18 => {
        const _0x3f3218 = _0x6aa11b, _0x55bc7d = await new Response(_0x1bac18[_0x3f3218(0x46c)][_0x3f3218(0x217)][0x0])[_0x3f3218(0x2de)]();
        if (!_0x55bc7d)
            return;
        luaEditor[_0x3f3218(0x423)](_0x55bc7d);
    });
    const _0x8d3007 = document['getElementById'](_0x26b475[_0x6aa11b(0x3f3)]);
    return _0x8d3007[_0x6aa11b(0x30b)](_0x26b475[_0x6aa11b(0x4a2)], () => {
        const _0x1f41d2 = _0x6aa11b;
        _0x8d3007[_0x1f41d2(0x24a)] = null;
    }), _0x8d3007['addEventListener'](_0x26b475[_0x6aa11b(0x438)], async _0x3182ab => {
        const _0x494f46 = _0x6aa11b, _0x385eac = await new Response(_0x3182ab[_0x494f46(0x46c)][_0x494f46(0x217)][0x0])['text']();
        if (!_0x385eac)
            return;
        jsEditor[_0x494f46(0x423)](_0x385eac);
    }), chart = new Chart(_0x26b475[_0x6aa11b(0x32c)], ![], 0x64), _0x26b475['rLaWu'];
}
async function wdbLoader(_0x2fdbe2) {
    const _0x241722 = _0x5cf6aa, _0x18c55d = {
            'dRNDB': _0x241722(0x27c),
            'tgBTP': 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
            'dXHQl': _0x241722(0x408),
            'zzdnr': _0x241722(0x411),
            'CSmSs': _0x241722(0x362),
            'tpCNV': function (_0xdf7ca9, _0x520982) {
                return _0xdf7ca9 + _0x520982;
            },
            'MXeKx': function (_0x3a0980) {
                return _0x3a0980();
            },
            'VdGzX': function (_0x5f8ccb) {
                return _0x5f8ccb();
            },
            'wlBGY': function (_0x50829c, _0x33b464) {
                return _0x50829c === _0x33b464;
            },
            'ucXmU': _0x241722(0x238),
            'yfAMO': _0x241722(0x2e9),
            'aiArS': function (_0x481d54, _0x376f9a) {
                return _0x481d54 === _0x376f9a;
            },
            'zsmNa': 'plinko',
            'JCNdM': function (_0x7aa0bf, _0x25a348) {
                return _0x7aa0bf === _0x25a348;
            },
            'OAlEK': _0x241722(0x2af),
            'nOIPn': function (_0x2b5278, _0x4b594e) {
                return _0x2b5278(_0x4b594e);
            },
            'DOkvB': _0x241722(0x49c),
            'ElzSZ': 'wdbLoader\x20ok'
        }, _0xf1d62d = [
            _0x18c55d[_0x241722(0x2e6)],
            _0x18c55d[_0x241722(0x332)],
            _0x18c55d[_0x241722(0x424)],
            _0x18c55d[_0x241722(0x1bb)],
            _0x18c55d[_0x241722(0x26f)],
            _0x18c55d[_0x241722(0x221)](WDB_LIB, _0x241722(0x46a)),
            _0x18c55d[_0x241722(0x221)](WDB_LIB, _0x241722(0x33c))
        ], _0x9713e7 = [
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css'
        ];
    for (const _0x5317ce of _0xf1d62d) {
        await _0x2fdbe2[_0x241722(0x3b3)](_0x5317ce);
    }
    for (const _0x267d9d of _0x9713e7) {
        await _0x2fdbe2[_0x241722(0x2fc)](_0x267d9d);
    }
    await beforeWork(_0x2fdbe2), await _0x18c55d[_0x241722(0x48c)](wdbCreateUI), await _0x18c55d[_0x241722(0x48c)](getListCoin), await _0x18c55d[_0x241722(0x358)](initLua);
    if (_0x18c55d[_0x241722(0x45a)](game, _0x18c55d['ucXmU']))
        luaEditor[_0x241722(0x423)](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript), document[_0x241722(0x3d4)](_0x18c55d['yfAMO'])['disabled'] = !![];
    else {
        if (_0x18c55d[_0x241722(0x3e3)](game, _0x18c55d[_0x241722(0x43d)]))
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0x241722(0x423)](plinkoJsScript), document[_0x241722(0x3d4)](_0x18c55d[_0x241722(0x28f)])[_0x241722(0x313)] = !![];
        else
            _0x18c55d['JCNdM'](game, _0x18c55d['OAlEK']) && (luaEditor[_0x241722(0x423)](kenoLuaScript), jsEditor[_0x241722(0x423)](kenoJsScript), document[_0x241722(0x3d4)](_0x241722(0x2e9))['disabled'] = !![]);
    }
    return _0x18c55d[_0x241722(0x1d2)](log, _0x18c55d[_0x241722(0x22e)]), _0x18c55d[_0x241722(0x3c6)];
}
function toggleNav(_0x46994f) {
    const _0x4bd379 = _0x5cf6aa, _0x2cbf2f = {
            'Jocvq': function (_0x404e93, _0x21d54c) {
                return _0x404e93 === _0x21d54c;
            },
            'iAWeH': _0x4bd379(0x344),
            'LazAJ': _0x4bd379(0x1c0),
            'WRkGr': _0x4bd379(0x20b),
            'oqjHp': _0x4bd379(0x3ac),
            'TAJQo': _0x4bd379(0x3f7),
            'acsaZ': _0x4bd379(0x246),
            'DsJzq': 'Tips'
        }, _0x28004a = [
            _0x2cbf2f[_0x4bd379(0x25d)],
            _0x2cbf2f[_0x4bd379(0x26b)],
            _0x2cbf2f[_0x4bd379(0x44a)],
            _0x2cbf2f[_0x4bd379(0x24f)],
            _0x2cbf2f[_0x4bd379(0x48b)]
        ];
    _0x28004a[_0x4bd379(0x352)](_0x666746 => {
        const _0x421439 = _0x4bd379, _0x50c2fc = _0x2cbf2f[_0x421439(0x266)](_0x666746['toLowerCase'](), _0x46994f) ? _0x421439(0x1c0) : _0x2cbf2f['iAWeH'];
        document[_0x421439(0x447)](_0x421439(0x1ba) + _0x666746)[_0x421439(0x25a)][_0x421439(0x4a5)] = _0x50c2fc, document['getElementById'](_0x421439(0x3b1) + _0x666746)[_0x421439(0x313)] = _0x50c2fc === _0x2cbf2f['LazAJ'];
    });
}
function toggleShow(_0x3b711e) {
    const _0x11977e = _0x5cf6aa, _0x42c7e9 = document[_0x11977e(0x447)]('wdbToggleShow' + (_0x3b711e[_0x11977e(0x381)](0x0)['toUpperCase']() + _0x3b711e[_0x11977e(0x448)](0x1)))['checked'];
    selectFunction(_0x42c7e9 ? _0x11977e(0x4a8) + _0x3b711e : _0x11977e(0x19a) + _0x3b711e);
}
function toggleLive(_0x40c28e) {
    const _0x212d38 = _0x5cf6aa, _0x553036 = {
            'JRZmx': function (_0x1d593e, _0x257988) {
                return _0x1d593e + _0x257988;
            },
            'rvxXA': 'start',
            'Yhsxd': _0x212d38(0x1f6)
        }, _0x22f1e0 = document[_0x212d38(0x447)](_0x212d38(0x253) + _0x553036[_0x212d38(0x42b)](_0x40c28e[_0x212d38(0x381)](0x0)[_0x212d38(0x48a)](), _0x40c28e[_0x212d38(0x448)](0x1)))[_0x212d38(0x3f0)];
    selectFunction('' + (_0x22f1e0 ? _0x553036[_0x212d38(0x47d)] : _0x553036[_0x212d38(0x309)]) + _0x40c28e);
}
function selectFunction(_0x2e5b5f) {
    const _0x27c713 = _0x5cf6aa, _0x35170a = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x27c713(0x36e)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog('clear'),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x27c713(0x1f6)),
            'startchart': () => toggleChart(_0x27c713(0x35c)),
            'stophistory': () => toggleHistory(_0x27c713(0x1f6)),
            'starthistory': () => toggleHistory(_0x27c713(0x35c)),
            'stoplog': () => toggleLog(_0x27c713(0x1f6)),
            'startlog': () => toggleLog(_0x27c713(0x35c)),
            'hidestats': () => toggleStats(_0x27c713(0x19a)),
            'showstats': () => toggleStats(_0x27c713(0x4a8)),
            'hidechart': () => toggleChart(_0x27c713(0x19a)),
            'showchart': () => toggleChart(_0x27c713(0x4a8)),
            'hidehistory': () => toggleHistory(_0x27c713(0x19a)),
            'showhistory': () => toggleHistory(_0x27c713(0x4a8))
        };
    if (_0x35170a[_0x2e5b5f])
        _0x35170a[_0x2e5b5f]();
}
function toggleMode(_0x49ee47) {
    const _0x10f51d = _0x5cf6aa, _0x3c2706 = {
            'aiBBM': _0x10f51d(0x238),
            'vgrbo': function (_0x7b7e00, _0x5418fc) {
                return _0x7b7e00 === _0x5418fc;
            },
            'SoKzx': _0x10f51d(0x199),
            'Cnxgm': 'keno',
            'jFelw': 'wdbLUAMode',
            'VArPm': 'wdbJSMode',
            'lVPsS': _0x10f51d(0x2fa),
            'iWCZg': function (_0x54a1d7, _0x4bcf27) {
                return _0x54a1d7 === _0x4bcf27;
            },
            'rQScM': _0x10f51d(0x26e),
            'lPdwr': _0x10f51d(0x1c0),
            'JBmvp': _0x10f51d(0x344),
            'bSgSj': function (_0x3c178b, _0x557de2) {
                return _0x3c178b === _0x557de2;
            },
            'HGFVO': function (_0x4c58dc, _0x8e8df6) {
                return _0x4c58dc === _0x8e8df6;
            },
            'RaWLn': _0x10f51d(0x1a6)
        };
    mode = _0x49ee47;
    if (game === _0x3c2706['aiBBM'])
        luaEditor[_0x10f51d(0x423)](rangediceLuaScript), jsEditor[_0x10f51d(0x423)](rangediceJsScript);
    else {
        if (_0x3c2706['vgrbo'](game, _0x3c2706[_0x10f51d(0x1f9)]))
            luaEditor['setValue'](plinkoLuaScript), jsEditor['setValue'](plinkoJsScript);
        else
            _0x3c2706[_0x10f51d(0x435)](game, _0x3c2706[_0x10f51d(0x451)]) && (luaEditor[_0x10f51d(0x423)](kenoLuaScript), jsEditor[_0x10f51d(0x423)](kenoJsScript));
    }
    const _0x2888d2 = document[_0x10f51d(0x447)](_0x3c2706[_0x10f51d(0x2fb)]), _0x38f71a = document[_0x10f51d(0x447)](_0x3c2706[_0x10f51d(0x377)]), _0x4355d1 = document[_0x10f51d(0x447)](_0x3c2706[_0x10f51d(0x334)]);
    _0x2888d2[_0x10f51d(0x25a)][_0x10f51d(0x4a5)] = _0x3c2706[_0x10f51d(0x337)](_0x49ee47, _0x3c2706[_0x10f51d(0x293)]) ? _0x3c2706[_0x10f51d(0x261)] : _0x3c2706['JBmvp'], _0x38f71a[_0x10f51d(0x25a)][_0x10f51d(0x4a5)] = _0x3c2706[_0x10f51d(0x459)](_0x49ee47, 'js') ? _0x3c2706[_0x10f51d(0x261)] : _0x3c2706[_0x10f51d(0x1fc)], _0x4355d1['style'][_0x10f51d(0x4a5)] = _0x3c2706['HGFVO'](_0x49ee47, _0x3c2706[_0x10f51d(0x317)]) ? _0x3c2706[_0x10f51d(0x261)] : _0x3c2706[_0x10f51d(0x1fc)], luaEditor[_0x10f51d(0x2d5)](), jsEditor[_0x10f51d(0x2d5)]();
}
function toggleStats(_0x3cc12b) {
    const _0x4af0ee = _0x5cf6aa, _0x4edafe = {
            'Kaefw': _0x4af0ee(0x19a),
            'CWpCK': _0x4af0ee(0x344),
            'pbCDc': _0x4af0ee(0x36d)
        }, _0xad3a43 = _0x3cc12b === _0x4edafe[_0x4af0ee(0x240)] ? _0x4edafe[_0x4af0ee(0x3ba)] : _0x4af0ee(0x1d0);
    document['getElementById'](_0x4edafe['pbCDc'])[_0x4af0ee(0x25a)]['display'] = _0xad3a43;
}
function toggleChart(_0x1f7a9c) {
    const _0x4b837 = _0x5cf6aa, _0x556955 = {
            'XPIHR': _0x4b837(0x1c1),
            'WckmE': _0x4b837(0x19a),
            'TVmHT': _0x4b837(0x344),
            'rnEmL': _0x4b837(0x3ee),
            'PoNdJ': _0x4b837(0x4a8),
            'QUSAU': _0x4b837(0x1c0),
            'TnWAO': _0x4b837(0x3c1),
            'dXzyH': _0x4b837(0x1f6),
            'EbAxN': _0x4b837(0x35c),
            'kwMwT': _0x4b837(0x36e)
        }, _0x11758c = document['getElementById'](_0x4b837(0x457)), _0x26eb57 = document[_0x4b837(0x447)](_0x556955['XPIHR']);
    switch (_0x1f7a9c) {
    case _0x556955[_0x4b837(0x3c4)]:
        _0x11758c['style']['display'] = _0x556955[_0x4b837(0x2e1)], _0x26eb57[_0x4b837(0x25a)][_0x4b837(0x3a3)] = _0x556955['rnEmL'];
        break;
    case _0x556955[_0x4b837(0x21c)]:
        _0x11758c[_0x4b837(0x25a)][_0x4b837(0x4a5)] = _0x556955['QUSAU'], _0x26eb57[_0x4b837(0x25a)][_0x4b837(0x3a3)] = _0x556955[_0x4b837(0x292)];
        break;
    case _0x556955[_0x4b837(0x36b)]:
        stopChart = !![];
        break;
    case _0x556955[_0x4b837(0x36c)]:
        stopChart = ![];
        break;
    case _0x556955[_0x4b837(0x27b)]:
        betsChart = 0x0, profitChart = 0x0, chart[_0x4b837(0x405)]();
        break;
    }
}
function toggleHistory(_0x4756a6) {
    const _0x2c0cdd = _0x5cf6aa, _0x11a7fa = {
            'jYBRs': 'wdbHistory',
            'vJNSm': 'wdbChart',
            'RtPjD': 'none',
            'ZkSXg': '380px',
            'pqAST': _0x2c0cdd(0x4a8),
            'ASRby': '190px',
            'XcgEw': _0x2c0cdd(0x1f6),
            'WHaWU': _0x2c0cdd(0x35c),
            'gXWmm': _0x2c0cdd(0x2bb)
        }, _0xff92bd = document['getElementById'](_0x11a7fa['jYBRs']), _0x397deb = document[_0x2c0cdd(0x447)](_0x11a7fa[_0x2c0cdd(0x440)]);
    switch (_0x4756a6) {
    case _0x2c0cdd(0x19a):
        _0xff92bd[_0x2c0cdd(0x25a)]['display'] = _0x11a7fa['RtPjD'], _0x397deb['style']['height'] = _0x11a7fa[_0x2c0cdd(0x208)];
        break;
    case _0x11a7fa[_0x2c0cdd(0x202)]:
        _0xff92bd['style'][_0x2c0cdd(0x4a5)] = _0x2c0cdd(0x1c0), _0x397deb['style'][_0x2c0cdd(0x3a3)] = _0x11a7fa[_0x2c0cdd(0x376)];
        break;
    case _0x11a7fa[_0x2c0cdd(0x4a3)]:
        stopHistory = !![];
        break;
    case _0x11a7fa[_0x2c0cdd(0x305)]:
        stopHistory = ![];
        break;
    case _0x11a7fa[_0x2c0cdd(0x456)]:
        _0xff92bd[_0x2c0cdd(0x45f)] = '';
        break;
    }
}
function toggleLog(_0x4c0568) {
    const _0x2622e4 = _0x5cf6aa, _0x49dd1c = {
            'wsSQB': _0x2622e4(0x1f6),
            'hTDeH': _0x2622e4(0x35c),
            'RxHRZ': 'wdbLog'
        };
    switch (_0x4c0568) {
    case _0x49dd1c[_0x2622e4(0x2b6)]:
        stopLog = !![];
        break;
    case _0x49dd1c[_0x2622e4(0x466)]:
        stopLog = ![];
        break;
    case _0x2622e4(0x2bb):
        document[_0x2622e4(0x447)](_0x49dd1c[_0x2622e4(0x416)])[_0x2622e4(0x45f)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x527dff = _0x5cf6aa, _0x2f5f8b = {
            'RenMQ': function (_0x5677a7, _0x5eb0d9) {
                return _0x5677a7(_0x5eb0d9);
            },
            'oiTfg': _0x527dff(0x427),
            'PHoEM': function (_0x14afef, _0x3449f1) {
                return _0x14afef(_0x3449f1);
            },
            'AUQvj': 'advancedChanceOnWin',
            'tDkMx': function (_0x1e1ac3, _0x4d5f90) {
                return _0x1e1ac3(_0x4d5f90);
            },
            'YURIS': _0x527dff(0x2d2),
            'UPxwD': function (_0x3479ad, _0x598b04) {
                return _0x3479ad(_0x598b04);
            },
            'JzqQe': _0x527dff(0x29b),
            'EuFoA': _0x527dff(0x228),
            'UKxHc': _0x527dff(0x390),
            'lngWg': _0x527dff(0x398),
            'tLccp': _0x527dff(0x4a0),
            'qNvYn': function (_0xa62316, _0x1a8313) {
                return _0xa62316(_0x1a8313);
            },
            'ycLcL': _0x527dff(0x196),
            'idwel': _0x527dff(0x3d8),
            'CoMPH': function (_0xa065a8, _0x28b530) {
                return _0xa065a8 === _0x28b530;
            },
            'DZGaC': function (_0x25c797, _0x4c201c) {
                return _0x25c797 % _0x4c201c;
            },
            'BYsTF': _0x527dff(0x223),
            'GiLcn': function (_0x31e92d, _0x39fb36) {
                return _0x31e92d(_0x39fb36);
            },
            'RnhnV': 'advancedBetHighOnProfit',
            'ClWme': _0x527dff(0x3fa),
            'ticPS': _0x527dff(0x209),
            'ViSIm': function (_0x471511, _0x3576c3) {
                return _0x471511 >= _0x3576c3;
            },
            'DdDxz': _0x527dff(0x237),
            'IZYwJ': _0x527dff(0x29e),
            'OivMq': function (_0x4871cb, _0x534ee6) {
                return _0x4871cb === _0x534ee6;
            },
            'AbftC': function (_0x2f5604) {
                return _0x2f5604();
            },
            'cjdPc': function (_0x299995, _0x59337b) {
                return _0x299995 + _0x59337b;
            },
            'nlDUE': _0x527dff(0x1cb),
            'auFYK': _0x527dff(0x43a),
            'lIQQA': _0x527dff(0x419),
            'WxfxG': function (_0x2447e1, _0x39a408) {
                return _0x2447e1(_0x39a408);
            },
            'AcNAW': function (_0x33b79d, _0x1f4c80) {
                return _0x33b79d + _0x1f4c80;
            },
            'xkoXF': _0x527dff(0x32e),
            'XKxGN': function (_0x5448ae, _0x42b7d7) {
                return _0x5448ae <= _0x42b7d7;
            },
            'RDMFP': function (_0x38752d, _0x134efe) {
                return _0x38752d(_0x134efe);
            },
            'unVCp': function (_0x2f3ef9, _0x124a25) {
                return _0x2f3ef9 + _0x124a25;
            },
            'sNIIa': _0x527dff(0x3fc),
            'FzEfU': function (_0x5179c6, _0x12fd59) {
                return _0x5179c6 + _0x12fd59;
            },
            'jGXCo': 'Stop\x20on\x20',
            'IhBtb': '\x20bet',
            'VFwoT': _0x527dff(0x42f),
            'NMjni': function (_0x224771, _0x183e67) {
                return _0x224771(_0x183e67);
            },
            'GojVb': 'advancedStopOnWins',
            'ddACu': '\x20win',
            'ebPcW': 'advancedStopOnLoseCheck',
            'BNJVk': _0x527dff(0x1fd),
            'OTTQz': function (_0x4b3f88, _0x2265ef) {
                return _0x4b3f88 + _0x2265ef;
            },
            'rmoUx': _0x527dff(0x391),
            'VJBUZ': 'stopOnProfitCheck',
            'UtNWU': function (_0xea21cc, _0x22442c) {
                return _0xea21cc(_0x22442c);
            },
            'fbjNZ': function (_0x1dff69) {
                return _0x1dff69();
            },
            'ZkGJC': function (_0x100cfb, _0x2c1d1d) {
                return _0x100cfb(_0x2c1d1d);
            },
            'IvmSU': 'Stop\x20on\x20profit\x20',
            'MwUTP': _0x527dff(0x19b),
            'sFsFq': _0x527dff(0x1b4),
            'HILrI': function (_0x5e87f9, _0x52eb62) {
                return _0x5e87f9 >= _0x52eb62;
            },
            'bgCpU': function (_0x220006) {
                return _0x220006();
            },
            'rpipd': function (_0x44a156, _0x62a750) {
                return _0x44a156(_0x62a750);
            },
            'oqAMl': _0x527dff(0x2f8),
            'nMiOM': _0x527dff(0x210),
            'qornd': 'advancedBetHighOnWin',
            'cTdZr': function (_0x4f4b43, _0x20c022) {
                return _0x4f4b43 % _0x20c022;
            },
            'ASHHL': _0x527dff(0x26d),
            'GCSvB': function (_0x4f1d27, _0x3cdd12) {
                return _0x4f1d27(_0x3cdd12);
            },
            'DySJc': 'advancedBetHighOnLose',
            'BDMVG': function (_0x37eff8, _0x22af04) {
                return _0x37eff8 === _0x22af04;
            },
            'ywBLp': function (_0x4e5440, _0x233790) {
                return _0x4e5440 % _0x233790;
            },
            'zAvLs': function (_0x43561f, _0x5390e0) {
                return _0x43561f === _0x5390e0;
            },
            'TVpUe': function (_0x3d53ab, _0x285bf7) {
                return _0x3d53ab % _0x285bf7;
            },
            'cJuaM': function (_0x36e684, _0x42a7f5) {
                return _0x36e684 % _0x42a7f5;
            },
            'ulJhV': function (_0x359bc6, _0x292e75) {
                return _0x359bc6 * _0x292e75;
            }
        };
    chance = _0x2f5f8b[_0x527dff(0x3fd)](Number, document['getElementById'](_0x527dff(0x232))[_0x527dff(0x24a)]);
    const _0x27d095 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x272)])[_0x527dff(0x3f0)], _0x218471 = _0x27d095 ? _0x2f5f8b[_0x527dff(0x2f0)](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x367)])[_0x527dff(0x24a)]) : chance, _0x47d870 = _0x2f5f8b[_0x527dff(0x34f)](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x2ca)])[_0x527dff(0x24a)]), _0x136bde = document['getElementById'](_0x527dff(0x231))[_0x527dff(0x3f0)], _0x1d08f5 = _0x136bde ? _0x2f5f8b[_0x527dff(0x49e)](Number, document[_0x527dff(0x447)](_0x2f5f8b['JzqQe'])['value']) : chance, _0x205ed5 = _0x2f5f8b['tDkMx'](Number, document[_0x527dff(0x447)](_0x2f5f8b['EuFoA'])['value']), _0x5273db = document[_0x527dff(0x447)](_0x527dff(0x19d))[_0x527dff(0x3f0)], _0x39e2da = _0x5273db ? _0x2f5f8b[_0x527dff(0x34f)](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x1fe)])[_0x527dff(0x24a)]) : 0x1, _0x37a7f2 = _0x2f5f8b[_0x527dff(0x34f)](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x3df)])[_0x527dff(0x24a)]), _0x47c3f1 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x264)])[_0x527dff(0x3f0)], _0x3f417a = _0x47c3f1 ? Number(document[_0x527dff(0x447)]('advancedMultiOnLose')[_0x527dff(0x24a)]) : 0x1, _0x3b7561 = _0x2f5f8b[_0x527dff(0x3bf)](Number, document[_0x527dff(0x447)](_0x527dff(0x1e3))[_0x527dff(0x24a)]), _0x4b8488 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x3cf)])[_0x527dff(0x3f0)];
    if (_0x4b8488) {
        const _0x45d188 = Number(document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x2dc)])['value']);
        if (_0x2f5f8b[_0x527dff(0x418)](_0x2f5f8b[_0x527dff(0x227)](bets, _0x45d188), 0x0))
            bethigh = !bethigh;
    }
    const _0x5e8b83 = document['getElementById'](_0x2f5f8b[_0x527dff(0x303)])[_0x527dff(0x3f0)];
    if (_0x5e8b83) {
        const _0x1166ac = _0x2f5f8b[_0x527dff(0x1aa)](Number, document[_0x527dff(0x447)](_0x2f5f8b['RnhnV'])['value']);
        if (profit >= _0x1166ac)
            bethigh = !bethigh;
    }
    const _0x4e45f8 = document['getElementById'](_0x2f5f8b['ClWme'])[_0x527dff(0x3f0)];
    if (_0x4e45f8) {
        const _0x2209e5 = Number(document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x3a7)])[_0x527dff(0x24a)]);
        if (_0x2f5f8b['ViSIm'](profit, _0x2209e5))
            resetstats();
    }
    const _0x5e4eb4 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x2e2)])[_0x527dff(0x3f0)];
    if (_0x5e4eb4) {
        const _0x911748 = Number(document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x4a7)])['value']);
        if (_0x2f5f8b['OivMq'](lastBet[_0x527dff(0x1e4)], _0x911748))
            _0x2f5f8b[_0x527dff(0x27d)](stop), _0x2f5f8b[_0x527dff(0x3bf)](log, _0x2f5f8b['cjdPc'](_0x2f5f8b[_0x527dff(0x30c)], _0x911748));
    }
    const _0x2ceeb8 = document[_0x527dff(0x447)](_0x2f5f8b['auFYK'])[_0x527dff(0x3f0)];
    if (_0x2ceeb8) {
        const _0x591b35 = _0x2f5f8b['PHoEM'](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x44e)])[_0x527dff(0x24a)]);
        if (_0x591b35 > 0x0) {
            if (_0x2f5f8b[_0x527dff(0x49b)](currentstreak, _0x591b35))
                _0x2f5f8b[_0x527dff(0x27d)](stop), _0x2f5f8b[_0x527dff(0x1d6)](log, _0x2f5f8b[_0x527dff(0x300)](_0x2f5f8b['xkoXF'], _0x591b35));
        } else {
            if (_0x2f5f8b[_0x527dff(0x297)](currentstreak, _0x591b35))
                stop(), _0x2f5f8b[_0x527dff(0x371)](log, _0x2f5f8b['unVCp'](_0x2f5f8b['xkoXF'], _0x591b35));
        }
    }
    const _0x3a76ab = document['getElementById'](_0x527dff(0x1e5))[_0x527dff(0x3f0)];
    if (_0x3a76ab) {
        const _0x35fd64 = Number(document['getElementById'](_0x2f5f8b[_0x527dff(0x4a6)])['value']);
        if (bets >= _0x35fd64)
            _0x2f5f8b[_0x527dff(0x27d)](stop), log(_0x2f5f8b[_0x527dff(0x25b)](_0x2f5f8b[_0x527dff(0x211)](_0x2f5f8b[_0x527dff(0x28d)], _0x35fd64), _0x2f5f8b[_0x527dff(0x3c3)]));
    }
    const _0x327d56 = document['getElementById'](_0x2f5f8b[_0x527dff(0x296)])[_0x527dff(0x3f0)];
    if (_0x327d56) {
        const _0x2fa548 = _0x2f5f8b['NMjni'](Number, document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x1ec)])['value']);
        if (winstreak >= _0x2fa548)
            _0x2f5f8b['AbftC'](stop), _0x2f5f8b[_0x527dff(0x1aa)](log, _0x2f5f8b['FzEfU'](_0x2f5f8b[_0x527dff(0x300)](_0x2f5f8b[_0x527dff(0x28d)], _0x2fa548), _0x2f5f8b['ddACu']));
    }
    const _0x5d9c03 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x195)])[_0x527dff(0x3f0)];
    if (_0x5d9c03) {
        const _0x1506d2 = Number(document['getElementById'](_0x2f5f8b[_0x527dff(0x1dc)])[_0x527dff(0x24a)]);
        if (_0x2f5f8b['ViSIm'](losestreak, _0x1506d2))
            _0x2f5f8b[_0x527dff(0x27d)](stop), _0x2f5f8b['WxfxG'](log, _0x2f5f8b['OTTQz'](_0x2f5f8b['jGXCo'], _0x1506d2) + _0x2f5f8b[_0x527dff(0x470)]);
    }
    const _0x97ebb5 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x3c8)])[_0x527dff(0x3f0)];
    if (_0x97ebb5) {
        const _0x20e7f5 = _0x2f5f8b[_0x527dff(0x289)](Number, document['getElementById'](_0x527dff(0x343))['value']);
        if (profit >= _0x20e7f5)
            _0x2f5f8b[_0x527dff(0x245)](stop), _0x2f5f8b[_0x527dff(0x474)](log, _0x2f5f8b[_0x527dff(0x43e)] + _0x20e7f5);
    }
    const _0x5d9423 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x434)])[_0x527dff(0x3f0)];
    if (_0x5d9423) {
        const _0xfcc991 = Number(document['getElementById'](_0x2f5f8b['sFsFq'])['value']);
        if (_0x2f5f8b['HILrI'](balance, _0xfcc991))
            _0x2f5f8b[_0x527dff(0x1d8)](stop), _0x2f5f8b[_0x527dff(0x31a)](log, _0x2f5f8b['oqAMl'] + _0xfcc991);
    }
    if (win) {
        const _0x23e4a9 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x429)])['checked'];
        if (_0x23e4a9) {
            const _0x29a462 = _0x2f5f8b['qNvYn'](Number, document[_0x527dff(0x447)](_0x2f5f8b['qornd'])[_0x527dff(0x24a)]);
            if (winstreak % _0x29a462 === 0x0)
                bethigh = !bethigh;
        }
        if (winstreak % _0x47d870 === 0x0)
            chance = _0x218471;
        if (_0x5273db) {
            if (_0x2f5f8b[_0x527dff(0x2d8)](_0x2f5f8b[_0x527dff(0x342)](winstreak, _0x37a7f2), 0x0))
                nextbet = previousbet * _0x39e2da;
        } else
            nextbet = basebet;
    } else {
        const _0x41a292 = document[_0x527dff(0x447)](_0x2f5f8b[_0x527dff(0x278)])['checked'];
        if (_0x41a292) {
            const _0x528e83 = _0x2f5f8b['GCSvB'](Number, document['getElementById'](_0x2f5f8b['DySJc'])[_0x527dff(0x24a)]);
            if (_0x2f5f8b['BDMVG'](_0x2f5f8b[_0x527dff(0x327)](losestreak, _0x528e83), 0x0))
                bethigh = !bethigh;
        }
        if (_0x2f5f8b['zAvLs'](_0x2f5f8b['TVpUe'](losestreak, _0x205ed5), 0x0))
            chance = _0x1d08f5;
        if (_0x47c3f1) {
            if (_0x2f5f8b[_0x527dff(0x33e)](losestreak, _0x3b7561) === 0x0)
                nextbet = _0x2f5f8b['ulJhV'](previousbet, _0x3f417a);
        } else
            nextbet = basebet;
    }
    return _0x527dff(0x444);
}
function changeCoin() {
    const _0x1a916d = _0x5cf6aa, _0x55ec8c = {
            'LBSUT': _0x1a916d(0x3e9),
            'cqeTe': function (_0x2f8d65) {
                return _0x2f8d65();
            }
        };
    coin = document[_0x1a916d(0x447)](_0x55ec8c[_0x1a916d(0x247)])[_0x1a916d(0x24a)], currency = coin[_0x1a916d(0x393)](), fengari[_0x1a916d(0x3aa)]('currency=\x22' + currency + '\x22')(), _0x55ec8c['cqeTe'](checkbalance);
}
async function handleStats() {
    const _0x508195 = _0x5cf6aa, _0x2529e0 = {
            'QOJAJ': function (_0xe6c16f, _0x558efb) {
                return _0xe6c16f === _0x558efb;
            },
            'VzaHP': 'lua',
            'ZhZaS': function (_0x13d43e) {
                return _0x13d43e();
            },
            'tvtaq': function (_0x3ebb8f, _0x41a851) {
                return _0x3ebb8f === _0x41a851;
            },
            'TTtbv': function (_0x1df53d) {
                return _0x1df53d();
            },
            'QKofe': function (_0x42cd57, _0xc411e) {
                return _0x42cd57 && _0xc411e;
            },
            'QHHsa': function (_0x126ee2) {
                return _0x126ee2();
            },
            'tkYrx': _0x508195(0x238),
            'PxQYj': _0x508195(0x24b),
            'MVrqm': function (_0x56c128, _0x5aa959) {
                return _0x56c128 === _0x5aa959;
            },
            'DgxOe': _0x508195(0x397),
            'Eukqx': function (_0x44cf0e, _0x8a9d79) {
                return _0x44cf0e > _0x8a9d79;
            },
            'UpzkY': function (_0x340d82, _0x18f020) {
                return _0x340d82 < _0x18f020;
            },
            'AYCjO': _0x508195(0x199),
            'ubKCb': function (_0x23d045, _0x1e5244) {
                return _0x23d045 === _0x1e5244;
            },
            'gkoHV': function (_0x146dfb, _0x5d37ce) {
                return _0x146dfb === _0x5d37ce;
            },
            'pSjob': function (_0x4f0597, _0x4218e3) {
                return _0x4f0597 === _0x4218e3;
            },
            'JwRpC': _0x508195(0x198),
            'Osuhr': function (_0x52ba3c, _0x154d1f) {
                return _0x52ba3c < _0x154d1f;
            },
            'pAqPI': _0x508195(0x3eb),
            'DscOu': _0x508195(0x43c),
            'TEVIE': function (_0x208c7c, _0xf33db8) {
                return _0x208c7c || _0xf33db8;
            },
            'ZEaDq': function (_0x394e84, _0x1bdd85) {
                return _0x394e84 >= _0x1bdd85;
            },
            'sDobF': _0x508195(0x260),
            'DAFUb': 'green',
            'dHZKv': _0x508195(0x207),
            'QPXXE': _0x508195(0x203),
            'nxbMk': function (_0x248924, _0x2dd9ff) {
                return _0x248924 > _0x2dd9ff;
            },
            'mdKem': function (_0x2508d0, _0xc10e67) {
                return _0x2508d0 > _0xc10e67;
            },
            'cWrOm': function (_0x1f1f17, _0x3dd593) {
                return _0x1f1f17 > _0x3dd593;
            }
        }, _0x42b591 = Date[_0x508195(0x413)]();
    speedHistory[_0x508195(0x425)](_0x42b591);
    const _0x5065ee = 0x2710;
    speedHistory = speedHistory[_0x508195(0x33a)](_0x59bcfe => _0x42b591 - _0x59bcfe <= _0x5065ee), bets++, lastBet[_0x508195(0x3ef)] = lastBet[_0x508195(0x248)], lastBet[_0x508195(0x46c)] = target, lastBet[_0x508195(0x215)] = target;
    if (_0x2529e0[_0x508195(0x3d1)](game, _0x2529e0[_0x508195(0x1f2)])) {
        const _0x37af4e = _0x2529e0[_0x508195(0x1b2)][_0x508195(0x284)]('|');
        let _0x2b05fc = 0x0;
        while (!![]) {
            switch (_0x37af4e[_0x2b05fc++]) {
            case '0':
                lastBet['chance1'] = chance1;
                continue;
            case '1':
                lastBet[_0x508195(0x2f6)] = chance3;
                continue;
            case '2':
                lastBet['chance4'] = chance4;
                continue;
            case '3':
                lastBet[_0x508195(0x3b8)] = betSide;
                continue;
            case '4':
                lastBet['Chance1'] = chance1;
                continue;
            case '5':
                lastBet[_0x508195(0x46b)] = chance2;
                continue;
            case '6':
                lastBet['Chance2'] = chance2;
                continue;
            case '7':
                lastBet[_0x508195(0x2f7)] = betSide;
                continue;
            case '8':
                lastBet['Chance4'] = chance4;
                continue;
            case '9':
                lastBet[_0x508195(0x2a2)] = chance3;
                continue;
            }
            break;
        }
    }
    lastBet[_0x508195(0x1e4)] = result, lastBet['Result'] = result, lastBet[_0x508195(0x467)] = currentprofit, lastBet[_0x508195(0x436)] = currentprofit, lastBet['Nonce'] = lastBet[_0x508195(0x2d4)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x2529e0['MVrqm'](game, _0x2529e0[_0x508195(0x25f)]))
        win = lastBet[_0x508195(0x422)] ? _0x2529e0[_0x508195(0x1e2)](lastBet[_0x508195(0x1e4)], lastBet[_0x508195(0x46c)]) : _0x2529e0[_0x508195(0x294)](lastBet['result'], lastBet[_0x508195(0x46c)]);
    else {
        if (_0x2529e0[_0x508195(0x388)](game, _0x2529e0[_0x508195(0x3cc)]) || _0x2529e0[_0x508195(0x471)](game, _0x508195(0x2af)))
            win = _0x2529e0['Eukqx'](lastBet[_0x508195(0x467)], 0x0);
        else {
            if (_0x2529e0[_0x508195(0x307)](game, _0x2529e0[_0x508195(0x1f2)])) {
                if (_0x2529e0[_0x508195(0x252)](lastBet['betSide'], _0x2529e0['JwRpC']))
                    win = lastBet[_0x508195(0x248)] > lastBet['chance1'] && _0x2529e0[_0x508195(0x235)](lastBet[_0x508195(0x248)], lastBet[_0x508195(0x46b)]);
                else {
                    if (_0x2529e0[_0x508195(0x252)](lastBet[_0x508195(0x2f7)], _0x2529e0[_0x508195(0x38d)]))
                        win = lastBet[_0x508195(0x248)] < lastBet[_0x508195(0x384)] || _0x2529e0[_0x508195(0x1e2)](lastBet[_0x508195(0x248)], lastBet[_0x508195(0x46b)]);
                    else {
                        if (lastBet['betSide'] === _0x2529e0['DscOu']) {
                            const _0x405a39 = _0x2529e0[_0x508195(0x1e2)](lastBet[_0x508195(0x248)], lastBet[_0x508195(0x384)]) && _0x2529e0['UpzkY'](lastBet['roll'], lastBet[_0x508195(0x46b)]), _0x1717ac = _0x2529e0['Eukqx'](lastBet['roll'], lastBet[_0x508195(0x2a2)]) && _0x2529e0[_0x508195(0x294)](lastBet[_0x508195(0x248)], lastBet[_0x508195(0x40f)]);
                            win = _0x2529e0[_0x508195(0x3d5)](_0x405a39, _0x1717ac);
                        }
                    }
                }
            } else
                win = _0x2529e0[_0x508195(0x48e)](lastBet['result'], lastBet[_0x508195(0x46c)]);
        }
    }
    if (win) {
        const _0x508383 = _0x2529e0['sDobF'][_0x508195(0x284)]('|');
        let _0x17af7d = 0x0;
        while (!![]) {
            switch (_0x508383[_0x17af7d++]) {
            case '0':
                wins++;
                continue;
            case '1':
                losestreak = 0x0;
                continue;
            case '2':
                color = _0x2529e0[_0x508195(0x21f)];
                continue;
            case '3':
                currentstreak = winstreak;
                continue;
            case '4':
                winstreak++;
                continue;
            }
            break;
        }
    } else {
        const _0x12226b = _0x2529e0[_0x508195(0x1a2)][_0x508195(0x284)]('|');
        let _0x5a8363 = 0x0;
        while (!![]) {
            switch (_0x12226b[_0x5a8363++]) {
            case '0':
                currentstreak = -losestreak;
                continue;
            case '1':
                color = _0x2529e0['QPXXE'];
                continue;
            case '2':
                winstreak = 0x0;
                continue;
            case '3':
                losses++;
                continue;
            case '4':
                if (_0x2529e0['nxbMk'](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '5':
                losestreak++;
                continue;
            }
            break;
        }
    }
    if (nextbet > maxBetAmount)
        maxBetAmount = nextbet;
    if (_0x2529e0[_0x508195(0x41d)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x2529e0[_0x508195(0x1e2)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x2529e0[_0x508195(0x294)](balance, minbalance))
        minbalance = balance;
    if (_0x2529e0[_0x508195(0x1e2)](balance, maxbalance))
        maxbalance = balance;
    if (_0x2529e0[_0x508195(0x235)](profit, minprofit))
        minprofit = profit;
    if (_0x2529e0[_0x508195(0x283)](profit, maxprofit))
        maxprofit = profit;
    _0x2529e0[_0x508195(0x205)](showInfo)[_0x508195(0x250)](async () => {
        const _0x518437 = _0x508195;
        try {
            if (_0x2529e0[_0x518437(0x3d1)](mode, _0x2529e0['VzaHP']))
                await _0x2529e0[_0x518437(0x205)](updateLua);
            else {
                if (_0x2529e0[_0x518437(0x388)](mode, 'js'))
                    await dobet();
                else
                    _0x2529e0[_0x518437(0x388)](mode, _0x518437(0x1a6)) && await _0x2529e0[_0x518437(0x258)](handleAdvanced);
            }
            if (_0x2529e0[_0x518437(0x48f)](win, sOW))
                _0x2529e0[_0x518437(0x258)](stop);
            if (run)
                _0x2529e0[_0x518437(0x1ad)](playBet);
        } catch (_0x2df2ff) {
            _0x2529e0[_0x518437(0x1ad)](stop), log(_0x2df2ff);
        }
    });
}
async function showInfo() {
    const _0x4de494 = _0x5cf6aa, _0x39ab43 = {
            'lPrJh': function (_0x558224, _0xb3aac2) {
                return _0x558224 === _0xb3aac2;
            },
            'coDzs': 'white',
            'PfJFm': _0x4de494(0x496),
            'WzhlD': function (_0x1fb5a0, _0x43afa3) {
                return _0x1fb5a0 < _0x43afa3;
            },
            'tpsVX': _0x4de494(0x203),
            'Tnrwz': _0x4de494(0x285),
            'wDcJv': _0x4de494(0x2f3),
            'RexFI': _0x4de494(0x1ca),
            'WBOhO': _0x4de494(0x20d),
            'LjSLp': _0x4de494(0x1ce),
            'FuBLp': _0x4de494(0x259),
            'fJeJe': _0x4de494(0x34a),
            'TwwqB': 'wdbBets',
            'knbaz': _0x4de494(0x3e5),
            'moNRE': 'wdbLosses',
            'qLKCW': _0x4de494(0x42a),
            'ecueb': _0x4de494(0x3b5),
            'nPXdk': 'wdbMaxBalance',
            'HreQE': _0x4de494(0x1ee),
            'XqKaf': function (_0x3a9434, _0x56e2c9) {
                return _0x3a9434 / _0x56e2c9;
            },
            'ulABi': function (_0x1db4d8, _0xd7f2d5) {
                return _0x1db4d8 / _0xd7f2d5;
            },
            'fpkmJ': function (_0x3008b0, _0x1085be) {
                return _0x3008b0 * _0x1085be;
            },
            'rHfrA': function (_0xd434b1, _0x1c3506) {
                return _0xd434b1 + _0x1c3506;
            },
            'wsGri': function (_0x51ce5c, _0x391aee) {
                return _0x51ce5c(_0x391aee);
            },
            'KSlmO': _0x4de494(0x1a5),
            'IRqNK': function (_0x3c9045, _0x387fb4) {
                return _0x3c9045 / _0x387fb4;
            },
            'Zdclu': function (_0x29ab0c, _0x39e0a3) {
                return _0x29ab0c / _0x39e0a3;
            },
            'obSqY': function (_0x53a320, _0xf48b0) {
                return _0x53a320 * _0xf48b0;
            },
            'kpObq': function (_0x55f078, _0x3f9a5e) {
                return _0x55f078 + _0x3f9a5e;
            },
            'PxNfM': _0x4de494(0x3a8),
            'EGLOG': _0x4de494(0x404),
            'GuUBY': function (_0x230808, _0x11c26d) {
                return _0x230808 === _0x11c26d;
            },
            'yqPHA': _0x4de494(0x397),
            'blrAu': _0x4de494(0x22f),
            'Sftbg': function (_0x5da490, _0x143e1d) {
                return _0x5da490 !== _0x143e1d;
            },
            'PFjmY': _0x4de494(0x238),
            'ojzkQ': _0x4de494(0x199),
            'kMARR': function (_0x2525fe, _0x3f9a76) {
                return _0x2525fe + _0x3f9a76;
            },
            'NRXkX': function (_0x190d14, _0x1f4fc0) {
                return _0x190d14(_0x1f4fc0);
            },
            'rTaEL': function (_0x95f694, _0x1e9bd7) {
                return _0x95f694(_0x1e9bd7);
            },
            'yjsfx': function (_0x1f1700, _0x141a8f) {
                return _0x1f1700 + _0x141a8f;
            },
            'ckraE': _0x4de494(0x380),
            'Nrila': function (_0x2fc9e2, _0x3f319a) {
                return _0x2fc9e2(_0x3f319a);
            },
            'buBdJ': function (_0x4e0847, _0x180095) {
                return _0x4e0847 + _0x180095;
            },
            'mlIBp': function (_0x5f3e1e, _0x1fbbb0) {
                return _0x5f3e1e + _0x1fbbb0;
            },
            'yGFXs': function (_0x5816d0, _0x3bd545) {
                return _0x5816d0 + _0x3bd545;
            },
            'yJGkJ': function (_0x438522, _0x30a82f) {
                return _0x438522 + _0x30a82f;
            },
            'mRnit': function (_0x4a9c82, _0x5c2e01) {
                return _0x4a9c82 === _0x5c2e01;
            },
            'lRikW': _0x4de494(0x2af),
            'QEKky': function (_0x4d849e, _0x5efbd6) {
                return _0x4d849e + _0x5efbd6;
            },
            'LPqjE': _0x4de494(0x402),
            'PMHqh': '#ffc0cb',
            'DwsfQ': _0x4de494(0x2c9),
            'xeWpt': _0x4de494(0x38f),
            'QYxeP': function (_0x4e4951, _0x152ebf) {
                return _0x4e4951 > _0x152ebf;
            },
            'XGZqw': function (_0x4d5040, _0x4dd34b) {
                return _0x4d5040(_0x4dd34b);
            },
            'Krmfe': function (_0x226993, _0x5b7d09) {
                return _0x226993 !== _0x5b7d09;
            },
            'RGlNi': function (_0x5aceb6, _0x6a4bd3) {
                return _0x5aceb6(_0x6a4bd3);
            },
            'vvFig': function (_0x2a04c5, _0x1f79b4) {
                return _0x2a04c5(_0x1f79b4);
            },
            'SznNI': function (_0x153b25, _0x3e1b5d) {
                return _0x153b25(_0x3e1b5d);
            },
            'oFhIa': function (_0x31b27d, _0x525b2d) {
                return _0x31b27d === _0x525b2d;
            },
            'ZKqzO': function (_0xa610d7, _0x52245e) {
                return _0xa610d7 === _0x52245e;
            },
            'TGdGj': _0x4de494(0x218)
        }, _0x56bfff = _0x39ab43['lPrJh'](profit, 0x0) ? darkMode ? _0x39ab43['coDzs'] : _0x39ab43[_0x4de494(0x3a6)] : _0x39ab43[_0x4de494(0x2f4)](profit, 0x0) ? _0x4de494(0x203) : 'green', _0x46218c = _0x39ab43[_0x4de494(0x3fb)](currentstreak, 0x0) ? darkMode ? _0x39ab43[_0x4de494(0x497)] : _0x39ab43[_0x4de494(0x3a6)] : _0x39ab43[_0x4de494(0x2f4)](currentstreak, 0x0) ? _0x39ab43[_0x4de494(0x463)] : _0x39ab43[_0x4de494(0x3f5)], _0x264b9c = maxwinstreak > 0x0 ? _0x4de494(0x285) : _0x4de494(0x496), _0x5c73fa = maxlosestreak > 0x0 ? _0x39ab43[_0x4de494(0x463)] : _0x39ab43[_0x4de494(0x3a6)];
    document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x1c4)])[_0x4de494(0x25a)]['color'] = _0x264b9c, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x477)])[_0x4de494(0x25a)]['color'] = _0x5c73fa, document[_0x4de494(0x447)](_0x4de494(0x281))[_0x4de494(0x319)] = wagered['toFixed'](decimalAmountView), document['getElementById'](_0x39ab43[_0x4de494(0x2a9)])[_0x4de494(0x319)] = balance['toFixed'](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x1af)])[_0x4de494(0x25a)][_0x4de494(0x394)] = _0x56bfff, document['getElementById'](_0x39ab43['LjSLp'])[_0x4de494(0x319)] = profit[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x20a)])[_0x4de494(0x319)] = maxBetAmount[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43['fJeJe'])['innerText'] = maxLosseAmount[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x3da)])[_0x4de494(0x319)] = bets, document['getElementById'](_0x39ab43['knbaz'])['innerText'] = wins, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x375)])[_0x4de494(0x319)] = losses, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x382)])['style'][_0x4de494(0x394)] = _0x46218c, document[_0x4de494(0x447)]('wdbCurrentStreak')[_0x4de494(0x319)] = currentstreak, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x1c4)])[_0x4de494(0x319)] = maxwinstreak, document['getElementById'](_0x39ab43['RexFI'])[_0x4de494(0x319)] = maxlosestreak, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x42d)])[_0x4de494(0x319)] = minbalance[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43['nPXdk'])[_0x4de494(0x319)] = maxbalance[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x4de494(0x2c0))[_0x4de494(0x319)] = minprofit[_0x4de494(0x348)](decimalAmountView), document[_0x4de494(0x447)](_0x39ab43['HreQE'])['innerText'] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x39ab43[_0x4de494(0x324)](wagered, startBalance), percentWagered = _0x39ab43[_0x4de494(0x20e)](Math[_0x4de494(0x483)](_0x39ab43[_0x4de494(0x3d3)](_0x39ab43['rHfrA'](percentWagered, Number[_0x4de494(0x385)]), 0x2710)), 0x2710), percentWagered = _0x39ab43['wsGri'](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x461)])['innerText'] = percentWagered, percentProfit = _0x39ab43[_0x4de494(0x3d3)](_0x39ab43[_0x4de494(0x473)](profit, startBalance), 0x64), percentProfit = _0x39ab43[_0x4de494(0x3f8)](Math[_0x4de494(0x483)](_0x39ab43[_0x4de494(0x412)](_0x39ab43[_0x4de494(0x279)](percentProfit, Number[_0x4de494(0x385)]), 0x2710)), 0x2710), percentProfit = isNaN(percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x39ab43[_0x4de494(0x26c)])[_0x4de494(0x25a)]['color'] = _0x56bfff, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x2d3)])['innerText'] = percentProfit;
    if (!stopHistory) {
        const _0x2622a5 = _0x39ab43[_0x4de494(0x486)](game, _0x39ab43[_0x4de494(0x2fd)]) ? lastBet['bethigh'] ? '>' : '<' : '>', _0x89cd59 = lastBet['bethigh'] ? '<input\x20id=\x22bethigh' + bets + '\x22\x20type=\x22checkbox\x22\x20checked\x20/>' : '<input\x20id=\x22bethigh' + bets + _0x4de494(0x311), _0xafda67 = '' + (havePlinkoRows ? plinkoRow + _0x39ab43['blrAu'] : '') + plinkoRisk, _0x39922d = _0x4de494(0x216) + bets + _0x4de494(0x442) + _0x39ab43[_0x4de494(0x37d)](Number, lastBet[_0x4de494(0x25e)])[_0x4de494(0x348)](decimalAmountView) + _0x4de494(0x442) + (_0x39ab43[_0x4de494(0x310)](game, _0x39ab43['PFjmY']) ? _0x89cd59 : betSide) + _0x4de494(0x442) + (_0x39ab43[_0x4de494(0x3fb)](game, _0x39ab43[_0x4de494(0x22d)]) ? _0xafda67 : _0x39ab43[_0x4de494(0x3d6)](_0x39ab43[_0x4de494(0x45c)](Number, lastBet[_0x4de494(0x1b5)])[_0x4de494(0x348)](decimalChanceView), '%')) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x39ab43[_0x4de494(0x1b1)](Number, lastBet[_0x4de494(0x248)])[_0x4de494(0x348)](decimalChanceView) + _0x4de494(0x482) + _0x39ab43['wsGri'](Number, lastBet[_0x4de494(0x467)])['toFixed'](decimalAmountView) + _0x4de494(0x442) + (game !== 'rangedice' ? game === _0x4de494(0x199) ? _0xafda67 : _0x39ab43[_0x4de494(0x486)](game, _0x4de494(0x2af)) ? _0x39ab43[_0x4de494(0x489)](Number(lastBet[_0x4de494(0x46c)])[_0x4de494(0x348)](0x0), _0x39ab43[_0x4de494(0x1cd)]) : _0x2622a5 + _0x39ab43[_0x4de494(0x1de)](Number, lastBet['target'])[_0x4de494(0x348)](decimalTargetResult) : _0x39ab43['buBdJ'](_0x39ab43[_0x4de494(0x2be)](_0x39ab43[_0x4de494(0x439)](target1 + '|', target2), target3 ? _0x39ab43[_0x4de494(0x1b7)]('|', target3) : ''), target4 ? _0x39ab43[_0x4de494(0x2be)]('|', target4) : '')) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x39ab43['mRnit'](game, _0x39ab43[_0x4de494(0x430)]) ? _0x39ab43[_0x4de494(0x3a2)](Number(result)[_0x4de494(0x348)](0x0), _0x39ab43[_0x4de494(0x38c)]) : _0x39ab43[_0x4de494(0x45c)](Number, result)['toFixed'](decimalTargetResult)) + _0x4de494(0x442) + lastBet[_0x4de494(0x2d4)] + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet['id'] + _0x4de494(0x1ed), _0x3c904b = document[_0x4de494(0x1bc)]('tr');
        _0x3c904b[_0x4de494(0x25a)][_0x4de494(0x2c6)] = win ? '#91f190' : _0x39ab43['PMHqh'], _0x3c904b[_0x4de494(0x45f)] = _0x39922d, document[_0x4de494(0x447)](_0x39ab43[_0x4de494(0x2ba)])[_0x4de494(0x48d)](_0x3c904b, document[_0x4de494(0x447)](_0x4de494(0x2c9))[_0x4de494(0x31f)][0x0]);
        const _0x2a1904 = document['querySelector'](_0x39ab43[_0x4de494(0x3e8)])[_0x4de494(0x3de)];
        if (_0x39ab43[_0x4de494(0x3ae)](_0x2a1904[_0x4de494(0x33b)], maxRows))
            document[_0x4de494(0x3d4)]('#wdbHistory')[_0x4de494(0x1be)][_0x4de494(0x441)]();
    }
    const _0x256829 = '' + (havePlinkoRows ? _0x39ab43[_0x4de494(0x274)](plinkoRow, _0x39ab43['blrAu']) : '') + plinkoRisk;
    return fullLogs[_0x4de494(0x425)]({
        'game': game,
        'bets': bets,
        'amount': _0x39ab43[_0x4de494(0x2b3)](Number, lastBet['amount'])[_0x4de494(0x348)](decimalAmountView),
        'bethigh': _0x39ab43[_0x4de494(0x44c)](game, 'rangedice') ? lastBet[_0x4de494(0x422)] : null,
        'chance': _0x39ab43['Krmfe'](game, _0x39ab43[_0x4de494(0x1b9)]) ? _0x39ab43[_0x4de494(0x1de)](Number, lastBet[_0x4de494(0x1b5)])[_0x4de494(0x348)](decimalChanceView) : lastBet['chance'],
        'target': game !== _0x39ab43[_0x4de494(0x1b9)] ? game === _0x39ab43[_0x4de494(0x22d)] ? _0x256829 : lastBet[_0x4de494(0x46c)] : null,
        'roll': _0x39ab43[_0x4de494(0x1d3)](Number, lastBet[_0x4de494(0x248)])[_0x4de494(0x348)](decimalChanceView),
        'result': _0x39ab43[_0x4de494(0x229)](Number, result)['toFixed'](decimalTargetResult),
        'profit': _0x39ab43[_0x4de494(0x1a1)](Number, lastBet[_0x4de494(0x467)])[_0x4de494(0x348)](decimalAmountView),
        'nonce': lastBet[_0x4de494(0x2d4)],
        'id': lastBet['id'],
        'chance1': _0x39ab43[_0x4de494(0x230)](game, _0x4de494(0x238)) ? lastBet[_0x4de494(0x384)] : null,
        'chance2': _0x39ab43[_0x4de494(0x3d2)](game, _0x39ab43[_0x4de494(0x1b9)]) ? lastBet[_0x4de494(0x46b)] : null,
        'chance3': _0x39ab43['lPrJh'](game, _0x39ab43[_0x4de494(0x1b9)]) ? lastBet[_0x4de494(0x2a2)] : null,
        'chance4': _0x39ab43[_0x4de494(0x486)](game, _0x39ab43[_0x4de494(0x1b9)]) ? lastBet[_0x4de494(0x40f)] : null,
        'betSide': _0x39ab43[_0x4de494(0x2e3)](game, _0x39ab43['PFjmY']) ? lastBet[_0x4de494(0x2f7)] : null
    }), fullLogs[_0x4de494(0x33b)] > 0x2710 && fullLogs[_0x4de494(0x3c5)](), !stopChart && chart[_0x4de494(0x41f)](betsChart, profitChart, color), _0x39ab43['TGdGj'];
}
async function updateStats() {
    const _0x30ec59 = _0x5cf6aa, _0xa36abb = {
            'LZwyG': function (_0x5a77b2, _0x31bec6) {
                return _0x5a77b2 === _0x31bec6;
            },
            'HMDwe': _0x30ec59(0x2bc),
            'wWyAl': _0x30ec59(0x496),
            'SwmXa': function (_0x3a80e7, _0x5ccf0d) {
                return _0x3a80e7 < _0x5ccf0d;
            },
            'bRCaV': 'red',
            'tBlDG': _0x30ec59(0x285),
            'iQmBl': function (_0x576b29, _0x58dfcd) {
                return _0x576b29 > _0x58dfcd;
            },
            'mfDWt': 'wdbHighWinStreak',
            'QolfA': 'wdbHighLoseStreak',
            'tAFSy': 'wdbWagered',
            'MrlHw': 'wdbBalance',
            'TVVdm': _0x30ec59(0x1ce),
            'ZLtGd': _0x30ec59(0x259),
            'QxkKF': _0x30ec59(0x34a),
            'LnpRG': _0x30ec59(0x403),
            'BUUhX': _0x30ec59(0x3e5),
            'oqskn': _0x30ec59(0x2cb),
            'HWkPO': _0x30ec59(0x42a),
            'RbSeP': _0x30ec59(0x3b5),
            'YUZfZ': _0x30ec59(0x277),
            'FLriz': 'wdbMinProfit',
            'WGwJY': _0x30ec59(0x1ee),
            'wDfJG': function (_0x3e9b0e, _0x185d81) {
                return _0x3e9b0e / _0x185d81;
            },
            'kXzEA': function (_0x5e8402, _0x374181) {
                return _0x5e8402 / _0x374181;
            },
            'EglBP': function (_0x306dc4, _0x292342) {
                return _0x306dc4 + _0x292342;
            },
            'IJkiG': function (_0x1256ce, _0x4ad2fb) {
                return _0x1256ce(_0x4ad2fb);
            },
            'jqnRz': _0x30ec59(0x1a5),
            'qpRyT': function (_0x16a7b7, _0x33343c) {
                return _0x16a7b7 * _0x33343c;
            },
            'LDPRk': function (_0x5d086b, _0x701bc9) {
                return _0x5d086b * _0x701bc9;
            },
            'jlEDC': function (_0x3667ac, _0x267267) {
                return _0x3667ac + _0x267267;
            },
            'eEwFK': function (_0x113496, _0x1d9fe2) {
                return _0x113496(_0x1d9fe2);
            },
            'acUnj': _0x30ec59(0x3a8),
            'CprCW': _0x30ec59(0x404),
            'qsYKg': _0x30ec59(0x1f4)
        }, _0x5b4d8f = _0xa36abb['LZwyG'](profit, 0x0) ? darkMode ? _0xa36abb[_0x30ec59(0x1d1)] : _0xa36abb[_0x30ec59(0x36f)] : _0xa36abb[_0x30ec59(0x2bd)](profit, 0x0) ? _0xa36abb[_0x30ec59(0x387)] : _0x30ec59(0x285), _0xef3c0a = _0xa36abb[_0x30ec59(0x336)](currentstreak, 0x0) ? darkMode ? _0xa36abb['HMDwe'] : _0xa36abb[_0x30ec59(0x36f)] : currentstreak < 0x0 ? _0xa36abb[_0x30ec59(0x387)] : _0xa36abb[_0x30ec59(0x1eb)], _0x141f2d = maxwinstreak > 0x0 ? _0xa36abb[_0x30ec59(0x1eb)] : darkMode ? _0xa36abb['HMDwe'] : 'black', _0x2e9ddb = _0xa36abb['iQmBl'](maxlosestreak, 0x0) ? _0xa36abb['bRCaV'] : darkMode ? _0xa36abb[_0x30ec59(0x1d1)] : _0xa36abb['wWyAl'];
    return document['getElementById'](_0xa36abb[_0x30ec59(0x49a)])[_0x30ec59(0x25a)][_0x30ec59(0x394)] = _0x141f2d, document[_0x30ec59(0x447)](_0xa36abb['QolfA'])[_0x30ec59(0x25a)][_0x30ec59(0x394)] = _0x2e9ddb, document['getElementById'](_0xa36abb[_0x30ec59(0x2f2)])[_0x30ec59(0x319)] = wagered[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x267)])[_0x30ec59(0x319)] = balance['toFixed'](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x2a5)])['style'][_0x30ec59(0x394)] = _0x5b4d8f, document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x2a5)])['innerText'] = profit[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x3bd)])['innerText'] = maxBetAmount[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x295)])[_0x30ec59(0x319)] = maxLosseAmount[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x3f2)])[_0x30ec59(0x319)] = bets, document[_0x30ec59(0x447)](_0xa36abb['BUUhX'])[_0x30ec59(0x319)] = wins, document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x32d)])[_0x30ec59(0x319)] = losses, document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x44f)])[_0x30ec59(0x25a)][_0x30ec59(0x394)] = _0xef3c0a, document[_0x30ec59(0x447)](_0xa36abb['HWkPO'])[_0x30ec59(0x319)] = currentstreak, document[_0x30ec59(0x447)]('wdbHighWinStreak')[_0x30ec59(0x319)] = maxwinstreak, document[_0x30ec59(0x447)](_0x30ec59(0x1ca))[_0x30ec59(0x319)] = maxlosestreak, document[_0x30ec59(0x447)](_0xa36abb['RbSeP'])[_0x30ec59(0x319)] = minbalance['toFixed'](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x1b0)])['innerText'] = maxbalance[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb['FLriz'])['innerText'] = minprofit[_0x30ec59(0x348)](decimalAmountView), document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x3f4)])['innerText'] = maxprofit[_0x30ec59(0x348)](decimalAmountView), percentWagered = _0xa36abb[_0x30ec59(0x3f1)](wagered, startBalance), percentWagered = _0xa36abb[_0x30ec59(0x1e1)](Math[_0x30ec59(0x483)](_0xa36abb[_0x30ec59(0x449)](percentWagered, Number[_0x30ec59(0x385)]) * 0x64), 0x64), percentWagered = isNaN(percentWagered) || !_0xa36abb[_0x30ec59(0x4a1)](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x315)])[_0x30ec59(0x319)] = percentWagered, percentProfit = _0xa36abb[_0x30ec59(0x3d0)](_0xa36abb[_0x30ec59(0x3f1)](profit, startBalance), 0x64), percentProfit = _0xa36abb['wDfJG'](Math[_0x30ec59(0x483)](_0xa36abb[_0x30ec59(0x37f)](_0xa36abb[_0x30ec59(0x29d)](percentProfit, Number[_0x30ec59(0x385)]), 0x64)), 0x64), percentProfit = _0xa36abb[_0x30ec59(0x492)](isNaN, percentProfit) || !isFinite(percentProfit) ? 0x0 : percentProfit, document[_0x30ec59(0x447)](_0xa36abb[_0x30ec59(0x3af)])[_0x30ec59(0x25a)]['color'] = _0x5b4d8f, document['getElementById'](_0xa36abb[_0x30ec59(0x364)])[_0x30ec59(0x319)] = percentProfit, _0xa36abb[_0x30ec59(0x460)];
}
function log(_0x25455c) {
    const _0x3f45f9 = _0x5cf6aa, _0x5095b2 = {
            'tWrfV': 'wdbLog',
            'CeFyq': _0x3f45f9(0x2bc),
            'jhPji': _0x3f45f9(0x496),
            'TlNcJ': function (_0x593972, _0x519db2) {
                return _0x593972 > _0x519db2;
            }
        }, _0xe255a9 = document[_0x3f45f9(0x447)](_0x5095b2[_0x3f45f9(0x426)]), _0x1e2d64 = document[_0x3f45f9(0x1bc)]('li');
    _0x1e2d64[_0x3f45f9(0x319)] = _0x25455c, _0x1e2d64[_0x3f45f9(0x25a)][_0x3f45f9(0x394)] = darkMode ? _0x5095b2[_0x3f45f9(0x298)] : _0x5095b2[_0x3f45f9(0x35d)], _0xe255a9[_0x3f45f9(0x48d)](_0x1e2d64, _0xe255a9[_0x3f45f9(0x47a)]), _0x5095b2[_0x3f45f9(0x35f)](_0xe255a9['children'][_0x3f45f9(0x33b)], maxRows) && _0xe255a9[_0x3f45f9(0x485)](_0xe255a9[_0x3f45f9(0x1be)]);
}
function updateSpeed() {
    const _0x331add = _0x5cf6aa, _0x3ab2fe = {
            'vywnJ': function (_0x5306c5, _0x3deb44) {
                return _0x5306c5 < _0x3deb44;
            },
            'dSotZ': _0x331add(0x37b),
            'bFmGv': _0x331add(0x401),
            'ZgTrJ': function (_0x140342, _0xb7cef6) {
                return _0x140342 / _0xb7cef6;
            },
            'KsbBU': function (_0x2ebefb, _0x12cdfe) {
                return _0x2ebefb - _0x12cdfe;
            }
        };
    if (_0x3ab2fe[_0x331add(0x3c0)](speedHistory[_0x331add(0x33b)], 0x2)) {
        document[_0x331add(0x447)](_0x331add(0x401))[_0x331add(0x319)] = _0x3ab2fe[_0x331add(0x353)];
        return;
    }
    const _0x58481d = Date[_0x331add(0x413)](), _0x5a1b58 = 0x2710;
    speedHistory = speedHistory[_0x331add(0x33a)](_0x8143c2 => _0x58481d - _0x8143c2 <= _0x5a1b58);
    if (speedHistory[_0x331add(0x33b)] < 0x2) {
        document[_0x331add(0x447)](_0x3ab2fe[_0x331add(0x28a)])[_0x331add(0x319)] = _0x3ab2fe['dSotZ'];
        return;
    }
    const _0x83c9e2 = speedHistory[0x0], _0xd1b730 = _0x3ab2fe[_0x331add(0x276)](_0x3ab2fe[_0x331add(0x1c5)](_0x58481d, _0x83c9e2), 0x3e8), _0x2e1f69 = _0x3ab2fe[_0x331add(0x276)](speedHistory[_0x331add(0x33b)], _0xd1b730);
    document[_0x331add(0x447)](_0x3ab2fe[_0x331add(0x28a)])['innerText'] = _0x2e1f69[_0x331add(0x348)](0x2);
}
function updateTimer() {
    const _0x8c1681 = _0x5cf6aa, _0x3aacf3 = {
            'HFOIo': function (_0x1bb61a, _0x364185) {
                return _0x1bb61a / _0x364185;
            },
            'dIrLE': function (_0x1f1afb, _0x5a5461) {
                return _0x1f1afb * _0x5a5461;
            },
            'GHlun': function (_0x4f464f, _0x140892) {
                return _0x4f464f * _0x140892;
            },
            'FpUqN': function (_0x1df67d, _0x40d2b2) {
                return _0x1df67d / _0x40d2b2;
            },
            'GqbzX': function (_0x282fc4, _0x553c48) {
                return _0x282fc4 % _0x553c48;
            },
            'vkbnj': function (_0xa9973f, _0xb33485) {
                return _0xa9973f % _0xb33485;
            }
        };
    elapsedTime++;
    const _0x46ca09 = Math[_0x8c1681(0x26a)](_0x3aacf3[_0x8c1681(0x1ae)](elapsedTime, _0x3aacf3[_0x8c1681(0x1d7)](_0x3aacf3[_0x8c1681(0x1d7)](0x18, 0x3c), 0x3c))), _0x4a4b50 = Math['floor'](elapsedTime % _0x3aacf3[_0x8c1681(0x1d7)](_0x3aacf3[_0x8c1681(0x1d7)](0x18, 0x3c), 0x3c) / _0x3aacf3[_0x8c1681(0x2a4)](0x3c, 0x3c)), _0x65a24e = Math[_0x8c1681(0x26a)](_0x3aacf3[_0x8c1681(0x38a)](_0x3aacf3[_0x8c1681(0x39a)](elapsedTime, _0x3aacf3[_0x8c1681(0x1d7)](0x3c, 0x3c)), 0x3c)), _0x1229db = _0x3aacf3[_0x8c1681(0x41e)](elapsedTime, 0x3c);
    document[_0x8c1681(0x447)](_0x8c1681(0x1b8))[_0x8c1681(0x319)] = _0x46ca09 + ':' + _0x4a4b50 + ':' + _0x65a24e + ':' + _0x1229db;
}
async function start() {
    const _0x3db11f = _0x5cf6aa, _0x50e7b7 = {
            'YmCeU': function (_0x11dc41, _0x444b9a) {
                return _0x11dc41 === _0x444b9a;
            },
            'zlmKy': _0x3db11f(0x198),
            'hxiAY': _0x3db11f(0x2ee),
            'nQEAY': _0x3db11f(0x3e9),
            'GpbsN': 'wdbMenuMode',
            'uAIyB': _0x3db11f(0x3b6),
            'bbaXX': _0x3db11f(0x3f9),
            'FAZTi': _0x3db11f(0x242),
            'jRVNZ': _0x3db11f(0x32a),
            'ZpxTL': _0x3db11f(0x446),
            'HfJjT': function (_0x1789ec, _0x121fb1) {
                return _0x1789ec(_0x121fb1);
            },
            'tbsYD': function (_0x4089fd, _0x371319) {
                return _0x4089fd === _0x371319;
            },
            'Rzzjn': _0x3db11f(0x478),
            'xisCN': _0x3db11f(0x415),
            'LLvXc': 'scriptName',
            'pUOzD': _0x3db11f(0x3a0),
            'zPIuO': _0x3db11f(0x287),
            'oCOCL': _0x3db11f(0x1d4),
            'mpUXV': _0x3db11f(0x2c8),
            'BDktA': _0x3db11f(0x1ef),
            'vSRxI': 'advanced',
            'Dpvon': 'advancedBaseBet',
            'uFELi': _0x3db11f(0x232),
            'qYSJJ': '#advancedBetHigh',
            'nwuCe': function (_0x5b12b5) {
                return _0x5b12b5();
            }
        };
    if (_0x50e7b7[_0x3db11f(0x1a7)](game, _0x3db11f(0x238))) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x50e7b7[_0x3db11f(0x3c7)];
        const _0x1bcd92 = _0x3db11f(0x340) + chance1 + _0x3db11f(0x263) + chance2 + _0x3db11f(0x484) + chance3 + _0x3db11f(0x465) + chance4 + _0x3db11f(0x2a6) + betSide + '\x22';
        fengari[_0x3db11f(0x3aa)](_0x1bcd92)();
    }
    try {
        if (!run) {
            document['getElementById'](_0x3db11f(0x1b8))[_0x3db11f(0x319)] = _0x50e7b7[_0x3db11f(0x33d)], document['getElementById'](_0x50e7b7[_0x3db11f(0x454)])[_0x3db11f(0x313)] = !![], document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x28b)])['disabled'] = !![], document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x308)])[_0x3db11f(0x313)] = !![], document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x2aa)])[_0x3db11f(0x313)] = !![], document['getElementById'](_0x3db11f(0x3e4))[_0x3db11f(0x313)] = !![], document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x224)])[_0x3db11f(0x313)] = !![], document['querySelectorAll'](_0x50e7b7[_0x3db11f(0x3d9)])[_0x3db11f(0x352)](_0x43305b => _0x43305b['disabled'] = !![]), document['querySelectorAll'](_0x50e7b7[_0x3db11f(0x1a4)])[_0x3db11f(0x352)](_0x43cbb9 => _0x43cbb9[_0x3db11f(0x313)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], clearInterval(timerInterval), _0x50e7b7[_0x3db11f(0x1ea)](clearInterval, speedUpdateInterval), timerInterval = setInterval(updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), fengari[_0x3db11f(0x3aa)](_0x3db11f(0x479))(), fengari['load'](_0x3db11f(0x443))();
            if (_0x50e7b7['tbsYD'](mode, _0x3db11f(0x26e))) {
                const _0x43f04c = _0x50e7b7[_0x3db11f(0x256)]['split']('|');
                let _0x4242ea = 0x0;
                while (!![]) {
                    switch (_0x43f04c[_0x4242ea++]) {
                    case '0':
                        scriptname = fengari[_0x3db11f(0x3aa)](_0x50e7b7[_0x3db11f(0x201)])();
                        continue;
                    case '1':
                        fengari[_0x3db11f(0x3aa)](diceScript)();
                        continue;
                    case '2':
                        diceScript = luaEditor[_0x3db11f(0x226)]();
                        continue;
                    case '3':
                        document['getElementById'](_0x50e7b7[_0x3db11f(0x23a)])[_0x3db11f(0x319)] = scriptname ? _0x3db11f(0x494) + scriptname : '';
                        continue;
                    case '4':
                        diceScript = diceScript[_0x3db11f(0x194)](/!=/g, '~=')[_0x3db11f(0x194)](/!/g, _0x50e7b7[_0x3db11f(0x29a)])[_0x3db11f(0x194)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x50e7b7[_0x3db11f(0x3db)])['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x3db11f(0x3fe))[_0x3db11f(0x194)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x50e7b7['oCOCL'])[_0x3db11f(0x194)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x50e7b7[_0x3db11f(0x2d0)]);
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x50e7b7[_0x3db11f(0x490)](mode, 'js')) {
                    const _0x41a04d = document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x491)]);
                    if (_0x41a04d)
                        _0x41a04d[_0x3db11f(0x441)]();
                    diceScript = jsEditor[_0x3db11f(0x226)]();
                    const _0x3868a6 = document[_0x3db11f(0x1bc)](_0x3db11f(0x27f));
                    _0x3868a6['id'] = 'wdbRunningScript', _0x3868a6['innerHTML'] = diceScript, document['head'][_0x3db11f(0x1c9)](_0x3868a6);
                } else
                    _0x50e7b7['YmCeU'](mode, _0x50e7b7[_0x3db11f(0x290)]) && (basebet = Number(document['getElementById'](_0x50e7b7[_0x3db11f(0x1c3)])[_0x3db11f(0x24a)]), nextbet = basebet, chance = _0x50e7b7[_0x3db11f(0x1ea)](Number, document[_0x3db11f(0x447)](_0x50e7b7[_0x3db11f(0x45b)])[_0x3db11f(0x24a)]), bethigh = document[_0x3db11f(0x3d4)](_0x50e7b7[_0x3db11f(0x33f)])['checked']);
            }
            if (run)
                return _0x50e7b7['nwuCe'](playBet);
        }
    } catch (_0x38bc6c) {
        _0x50e7b7[_0x3db11f(0x225)](stop), _0x50e7b7[_0x3db11f(0x1ea)](log, _0x38bc6c);
    }
}
function stop() {
    const _0x252f29 = _0x5cf6aa, _0x5b8a1d = {
            'MgWnS': function (_0x311016, _0x4a4fa9) {
                return _0x311016(_0x4a4fa9);
            },
            'AgxrX': 'wdbMenuCoin',
            'dKxvM': _0x252f29(0x270),
            'unwBq': 'wdbOpenJSScript',
            'goTJy': _0x252f29(0x318),
            'eWqkx': '#wdbSaveScriptButton,\x20#wdbOpenScript'
        };
    if (!run)
        return;
    run = ![], sOW = ![], clearInterval(timerInterval), _0x5b8a1d[_0x252f29(0x3cd)](clearInterval, speedUpdateInterval);
    const _0x210337 = [
        _0x5b8a1d[_0x252f29(0x379)],
        _0x5b8a1d[_0x252f29(0x41c)],
        'wdbStartButton',
        _0x252f29(0x3f9),
        'wdbOpenLUAScript',
        _0x5b8a1d[_0x252f29(0x3bb)],
        _0x5b8a1d[_0x252f29(0x49f)]
    ];
    _0x210337[_0x252f29(0x352)](_0x442417 => {
        const _0x545720 = _0x252f29;
        document[_0x545720(0x447)](_0x442417)[_0x545720(0x313)] = ![];
    }), document[_0x252f29(0x32b)](_0x5b8a1d[_0x252f29(0x3e6)])['forEach'](_0x2c4bed => _0x2c4bed['disabled'] = ![]);
}
async function resume(_0x36c16a) {
    const _0xd61118 = _0x5cf6aa, _0x3475f4 = {
            'elYze': _0xd61118(0x3e9),
            'rVcSg': _0xd61118(0x270),
            'uVoRE': _0xd61118(0x3f9),
            'zzYqE': 'wdbOpenLUAScript',
            'GToWD': _0xd61118(0x242),
            'CTyfw': '#wdbSaveScriptButton,\x20#wdbOpenScript',
            'xeAdr': _0xd61118(0x1e0),
            'jcIak': function (_0x42410d, _0xa9b934, _0x2b87a5) {
                return _0x42410d(_0xa9b934, _0x2b87a5);
            },
            'HvSsT': function (_0x2f83a2, _0x1428c7, _0x7f8eb4) {
                return _0x2f83a2(_0x1428c7, _0x7f8eb4);
            },
            'XkHNE': function (_0xd6ca47) {
                return _0xd6ca47();
            }
        };
    if (!run) {
        const _0xbab18a = [
            _0x3475f4[_0xd61118(0x42c)],
            _0x3475f4['rVcSg'],
            _0xd61118(0x3b6),
            _0x3475f4[_0xd61118(0x3dd)],
            _0x3475f4[_0xd61118(0x2ef)],
            _0x3475f4['GToWD']
        ];
        return _0xbab18a[_0xd61118(0x352)](_0xa914c5 => {
            const _0x47b8ce = _0xd61118;
            document[_0x47b8ce(0x447)](_0xa914c5)[_0x47b8ce(0x313)] = !![];
        }), document[_0xd61118(0x32b)](_0x3475f4[_0xd61118(0x432)])[_0xd61118(0x352)](_0x56b3ed => _0x56b3ed[_0xd61118(0x313)] = !![]), !_0x36c16a && (log(_0x3475f4['xeAdr']), await new Promise(_0x292511 => setTimeout(_0x292511, 0x1388))), run = !![], sOW = ![], timerInterval = _0x3475f4['jcIak'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x3475f4['HvSsT'](setInterval, updateSpeed, 0x1f4), _0x3475f4[_0xd61118(0x453)](playBet);
    }
}
function stopOnWin() {
    const _0x2aba3e = _0x5cf6aa, _0x5414b9 = { 'LJvHZ': _0x2aba3e(0x318) };
    sOW = !![];
    if (run)
        document['getElementById'](_0x5414b9[_0x2aba3e(0x2f1)])['disabled'] = !![];
}
async function playBet() {
    const _0x3b9748 = _0x5cf6aa, _0x48ddeb = {
            'DcMqE': function (_0x51f987, _0x3b333c) {
                return _0x51f987 === _0x3b333c;
            },
            'ZQoXE': _0x3b9748(0x26e),
            'gRSjY': '3|0|6|5|4|2|7|1',
            'HSSTj': _0x3b9748(0x236),
            'aszdd': _0x3b9748(0x462),
            'KSHbR': _0x3b9748(0x386),
            'jlRbv': _0x3b9748(0x2d7),
            'GkDDI': _0x3b9748(0x1d9),
            'mpjsP': _0x3b9748(0x31b),
            'nzvOJ': function (_0x4dca89, _0x3674b6) {
                return _0x4dca89(_0x3674b6);
            },
            'bxrbp': function (_0x50284f, _0x5b6d93) {
                return _0x50284f(_0x5b6d93);
            },
            'WijOA': _0x3b9748(0x199),
            'nARhA': function (_0x2d6e3c, _0xc13791) {
                return _0x2d6e3c + _0xc13791;
            },
            'bPgfJ': _0x3b9748(0x1a8),
            'kbzVb': function (_0x1f34f5, _0xfc4515) {
                return _0x1f34f5 + _0xfc4515;
            },
            'VmCHD': function (_0x20c72e) {
                return _0x20c72e();
            }
        };
    try {
        if (_0x48ddeb[_0x3b9748(0x475)](mode, _0x48ddeb[_0x3b9748(0x291)])) {
            const _0x1f0691 = _0x48ddeb[_0x3b9748(0x47b)][_0x3b9748(0x284)]('|');
            let _0x507962 = 0x0;
            while (!![]) {
                switch (_0x1f0691[_0x507962++]) {
                case '0':
                    chance = fengari['load'](_0x48ddeb[_0x3b9748(0x3a1)])();
                    continue;
                case '1':
                    betSide = fengari[_0x3b9748(0x3aa)](_0x48ddeb[_0x3b9748(0x2ac)])();
                    continue;
                case '2':
                    chance3 = fengari[_0x3b9748(0x3aa)](_0x48ddeb[_0x3b9748(0x204)])();
                    continue;
                case '3':
                    nextbet = fengari[_0x3b9748(0x3aa)](_0x48ddeb[_0x3b9748(0x2ab)])();
                    continue;
                case '4':
                    chance2 = fengari[_0x3b9748(0x3aa)](_0x3b9748(0x335))();
                    continue;
                case '5':
                    chance1 = fengari['load'](_0x3b9748(0x282))();
                    continue;
                case '6':
                    bethigh = fengari[_0x3b9748(0x3aa)](_0x48ddeb[_0x3b9748(0x46d)])();
                    continue;
                case '7':
                    chance4 = fengari['load'](_0x48ddeb[_0x3b9748(0x268)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x48ddeb[_0x3b9748(0x325)](Number, nextbet), chance = Number(chance), previousbet = nextbet, lastBet = {
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
            const _0x576409 = _0x48ddeb[_0x3b9748(0x35e)](Number, lastBet[_0x3b9748(0x25e)])[_0x3b9748(0x348)](decimalAmountView), _0x4ea378 = _0x48ddeb[_0x3b9748(0x35e)](Number, lastBet[_0x3b9748(0x1b5)])[_0x3b9748(0x348)](decimalChanceView), _0xd762a0 = game !== _0x3b9748(0x238) ? _0x48ddeb[_0x3b9748(0x475)](game, _0x48ddeb['WijOA']) ? _0x3b9748(0x2d1) + _0x576409 + _0x3b9748(0x254) + (havePlinkoRows ? _0x48ddeb['nARhA'](plinkoRow, _0x3b9748(0x22f)) : '') + plinkoRisk + '\x20to\x20win' : _0x3b9748(0x2d1) + _0x576409 + _0x3b9748(0x254) + _0x4ea378 + _0x3b9748(0x359) + (_0x48ddeb['DcMqE'](game, 'dice') ? bethigh ? 'high' : _0x3b9748(0x356) : _0x48ddeb[_0x3b9748(0x399)]) : _0x3b9748(0x2d1) + _0x576409 + _0x3b9748(0x254) + chance1 + '|' + chance2 + (chance3 ? _0x48ddeb[_0x3b9748(0x2c5)]('|', chance3) : '') + (chance4 ? _0x48ddeb['nARhA']('|', chance4) : '') + _0x3b9748(0x40b) + betSide;
            _0x48ddeb['nzvOJ'](log, _0xd762a0);
        }
        if (run)
            return _0x48ddeb[_0x3b9748(0x41a)](sendBet);
    } catch (_0x32934) {
        _0x48ddeb[_0x3b9748(0x41a)](stop), _0x48ddeb[_0x3b9748(0x325)](log, _0x32934);
    }
}
function resetall() {
    const _0x2e1126 = _0x5cf6aa, _0x262591 = {
            'JsFdK': _0x2e1126(0x44d),
            'sXpxE': function (_0x30a643) {
                return _0x30a643();
            },
            'gcUvU': _0x2e1126(0x2ee),
            'KkMuw': function (_0xf6ef13) {
                return _0xf6ef13();
            }
        }, _0x264f9d = _0x262591[_0x2e1126(0x3a4)]['split']('|');
    let _0x31a6f2 = 0x0;
    while (!![]) {
        switch (_0x264f9d[_0x31a6f2++]) {
        case '0':
            _0x262591[_0x2e1126(0x2d9)](resetchart);
            continue;
        case '1':
            document['getElementById'](_0x2e1126(0x401))['innerText'] = _0x2e1126(0x37b);
            continue;
        case '2':
            document[_0x2e1126(0x447)](_0x2e1126(0x1b8))[_0x2e1126(0x319)] = _0x262591['gcUvU'];
            continue;
        case '3':
            _0x262591[_0x2e1126(0x2d9)](resetlog);
            continue;
        case '4':
            _0x262591['KkMuw'](resethistory);
            continue;
        case '5':
            resetstats();
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x4f755c = _0x5cf6aa, _0x45b1ea = {
            'EdkDO': function (_0x343251, _0x10f3df) {
                return _0x343251(_0x10f3df);
            },
            'HAXqu': _0x4f755c(0x36e)
        };
    return _0x45b1ea['EdkDO'](toggleChart, _0x45b1ea['HAXqu']);
}
function resethistory() {
    const _0x57bea = _0x5cf6aa, _0x854e02 = {
            'ihhgv': function (_0x558932, _0x46f6fb) {
                return _0x558932(_0x46f6fb);
            },
            'FuiBH': _0x57bea(0x2bb)
        };
    return _0x854e02[_0x57bea(0x329)](toggleHistory, _0x854e02[_0x57bea(0x2e4)]);
}
function resetlog() {
    const _0x4832ba = _0x5cf6aa, _0x3aa1bf = {
            'eDPUs': function (_0x1592ea, _0x32df68) {
                return _0x1592ea(_0x32df68);
            }
        };
    return _0x3aa1bf[_0x4832ba(0x493)](toggleLog, _0x4832ba(0x2bb));
}
function resetstats() {
    const _0x128607 = _0x5cf6aa, _0x9c98ff = {
            'LOZiq': _0x128607(0x417),
            'OeJGZ': function (_0xb4ef2f) {
                return _0xb4ef2f();
            }
        }, _0x444467 = _0x9c98ff[_0x128607(0x2e0)][_0x128607(0x284)]('|');
    let _0x583f67 = 0x0;
    while (!![]) {
        switch (_0x444467[_0x583f67++]) {
        case '0':
            losses = 0x0;
            continue;
        case '1':
            bets = 0x0;
            continue;
        case '2':
            wins = 0x0;
            continue;
        case '3':
            maxprofit = 0x0;
            continue;
        case '4':
            wagered = 0x0;
            continue;
        case '5':
            maxBetAmount = 0x0;
            continue;
        case '6':
            fullLogs = [];
            continue;
        case '7':
            percentWagered = 0x0;
            continue;
        case '8':
            currentstreak = 0x0;
            continue;
        case '9':
            minbalance = balance;
            continue;
        case '10':
            _0x9c98ff[_0x128607(0x2ff)](updateStats);
            continue;
        case '11':
            startBalance = balance;
            continue;
        case '12':
            maxLosseAmount = 0x0;
            continue;
        case '13':
            maxbalance = balance;
            continue;
        case '14':
            minprofit = 0x0;
            continue;
        case '15':
            profit = 0x0;
            continue;
        case '16':
            percentProfit = 0x0;
            continue;
        case '17':
            maxwinstreak = 0x0;
            continue;
        case '18':
            maxlosestreak = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x23dce9) {
    return _0x23dce9;
}
function ching() {
    const _0x31d591 = _0x5cf6aa;
    return wdbSound[_0x31d591(0x27a)]();
}
function _0x3c62(_0x5cbc16, _0x1d90a7) {
    const _0x3c4894 = _0x3c48();
    return _0x3c62 = function (_0x3c6241, _0x4e202b) {
        _0x3c6241 = _0x3c6241 - 0x194;
        let _0x27e397 = _0x3c4894[_0x3c6241];
        return _0x27e397;
    }, _0x3c62(_0x5cbc16, _0x1d90a7);
}
function sleep(_0x535725) {
    return new Promise(_0x173dbf => setTimeout(_0x173dbf, _0x535725 * 0x3e8));
}
async function initLua() {
    const _0x17dcd7 = _0x5cf6aa, _0x3718b3 = {
            'ENLRw': _0x17dcd7(0x368),
            'LEwYQ': 'function\x20stop()\x0ajs.global:stop()\x0aend',
            'ydyjX': 'function\x20resume()\x0ajs.global:resume()\x0aend',
            'aBYVM': 'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
            'FKWfw': _0x17dcd7(0x200),
            'SEEMr': _0x17dcd7(0x3dc),
            'NSCJp': _0x17dcd7(0x1cf),
            'YiWXa': _0x17dcd7(0x1fa),
            'UkOfy': 'function\x20ching()\x0ajs.global:ching()\x0aend',
            'aJjcL': 'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
            'lRuAj': _0x17dcd7(0x32f),
            'kVloh': 'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
            'fuOth': _0x17dcd7(0x39d)
        };
    fengari[_0x17dcd7(0x3aa)](_0x3718b3['ENLRw'])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3[_0x17dcd7(0x1a3)])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3[_0x17dcd7(0x31d)])(), fengari[_0x17dcd7(0x3aa)](_0x17dcd7(0x241))(), fengari['load'](_0x3718b3[_0x17dcd7(0x345)])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3[_0x17dcd7(0x321)])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3[_0x17dcd7(0x499)])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3['NSCJp'])(), fengari[_0x17dcd7(0x3aa)](_0x17dcd7(0x322))(), fengari['load'](_0x3718b3[_0x17dcd7(0x2dd)])(), fengari['load'](_0x3718b3[_0x17dcd7(0x23f)])(), fengari['load'](_0x3718b3[_0x17dcd7(0x47c)])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3['lRuAj'])(), fengari[_0x17dcd7(0x3aa)](_0x3718b3['kVloh'])(), fengari['load'](_0x17dcd7(0x40e))(), fengari[_0x17dcd7(0x3aa)](_0x17dcd7(0x363))(), fengari[_0x17dcd7(0x3aa)](_0x17dcd7(0x378))(), fengari['load']('table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end')();
    const _0x581328 = location['hostname']['replace']('www.', '');
    let _0x481eef = _0x581328['indexOf']('.');
    return casino = _0x581328['slice'](0x0, _0x481eef), fengari['load']('casino=\x22' + casino + '\x22')(), _0x3718b3[_0x17dcd7(0x1e8)];
}
async function updateLua() {
    const _0x4cbbc1 = _0x5cf6aa, _0x10d6b9 = {
            'TuvYo': _0x4cbbc1(0x43b),
            'PZeoe': function (_0x53e3dd, _0x4ad975) {
                return _0x53e3dd(_0x4ad975);
            },
            'mOXjN': _0x4cbbc1(0x346),
            'Lbmfy': _0x4cbbc1(0x2c2),
            'rSXvU': _0x4cbbc1(0x1da),
            'wAVSE': _0x4cbbc1(0x421),
            'YhIZE': 'updateLua\x20done'
        }, _0x50de69 = _0x4cbbc1(0x2ea) + win + _0x4cbbc1(0x2c3) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x4cbbc1(0x1f3) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + '\x0a\x20\x20\x20\x20losestreak=' + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + _0x4cbbc1(0x301) + balance + _0x4cbbc1(0x23d) + minbalance + _0x4cbbc1(0x271) + maxbalance + _0x4cbbc1(0x2e7) + minprofit + _0x4cbbc1(0x2c4) + maxprofit + _0x4cbbc1(0x366) + chance + '\x0a\x20\x20\x20\x20bethigh=' + bethigh + _0x4cbbc1(0x34b) + chance1 + _0x4cbbc1(0x263) + chance2 + _0x4cbbc1(0x484) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x4cbbc1(0x2a6) + betSide + _0x4cbbc1(0x2eb) + nextbet + _0x4cbbc1(0x2cc) + previousbet + _0x4cbbc1(0x262) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x4cbbc1(0x1cc) + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=' + lastBet[_0x4cbbc1(0x25e)] + _0x4cbbc1(0x31e) + lastBet['amount'] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet['chance'] + _0x4cbbc1(0x476) + lastBet[_0x4cbbc1(0x1b5)] + _0x4cbbc1(0x1a0) + lastBet['roll'] + _0x4cbbc1(0x47e) + lastBet[_0x4cbbc1(0x248)] + _0x4cbbc1(0x39b) + lastBet[_0x4cbbc1(0x467)] + _0x4cbbc1(0x452) + lastBet[_0x4cbbc1(0x467)] + ',\x0a\x20\x20\x20\x20\x20\x20target=' + lastBet[_0x4cbbc1(0x46c)] + _0x4cbbc1(0x2ed) + lastBet['target'] + ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=' + lastBet[_0x4cbbc1(0x384)] + _0x4cbbc1(0x428) + lastBet['chance1'] + _0x4cbbc1(0x1f5) + lastBet[_0x4cbbc1(0x46b)] + _0x4cbbc1(0x24d) + lastBet[_0x4cbbc1(0x46b)] + _0x4cbbc1(0x331) + lastBet[_0x4cbbc1(0x2a2)] + _0x4cbbc1(0x269) + lastBet[_0x4cbbc1(0x2a2)] + _0x4cbbc1(0x1ac) + lastBet[_0x4cbbc1(0x40f)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance4=' + lastBet[_0x4cbbc1(0x40f)] + _0x4cbbc1(0x24c) + lastBet['betSide'] + _0x4cbbc1(0x220) + lastBet[_0x4cbbc1(0x2f7)] + '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=' + lastBet[_0x4cbbc1(0x1e4)] + _0x4cbbc1(0x3e1) + lastBet[_0x4cbbc1(0x1e4)] + ',\x0a\x20\x20\x20\x20\x20\x20nonce=' + lastBet[_0x4cbbc1(0x2d4)] + _0x4cbbc1(0x339) + lastBet[_0x4cbbc1(0x2d4)] + ',\x0a\x20\x20\x20\x20\x20\x20id=\x22' + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + _0x4cbbc1(0x1c7);
    fengari[_0x4cbbc1(0x3aa)](_0x50de69)(), fengari[_0x4cbbc1(0x3aa)](_0x10d6b9[_0x4cbbc1(0x3e2)])(), currency = fengari[_0x4cbbc1(0x3aa)](_0x4cbbc1(0x409))() || currency, coin = _0x10d6b9[_0x4cbbc1(0x472)](String, currency)[_0x4cbbc1(0x48a)](), plinkoRisk = fengari['load'](_0x10d6b9[_0x4cbbc1(0x2cd)])() || plinkoRisk, plinkoRow = fengari[_0x4cbbc1(0x3aa)](_0x10d6b9['Lbmfy'])() || plinkoRow, kenoRisk = fengari['load'](_0x10d6b9['rSXvU'])() || kenoRisk;
    const _0x4e8954 = fengari[_0x4cbbc1(0x3aa)](_0x10d6b9['wAVSE'])();
    return _0x4e8954 && (window[_0x4cbbc1(0x495)] = _0x4e8954[_0x4cbbc1(0x284)](',')[_0x4cbbc1(0x33a)](_0x5b6f60 => _0x5b6f60 !== '')['map'](Number)), _0x10d6b9[_0x4cbbc1(0x3c9)];
}
function randomString(_0x3c8443, _0x4f623a) {
    const _0x3e760a = _0x5cf6aa, _0x459ba8 = {
            'JFNQx': _0x3e760a(0x1fb),
            'fFNWC': _0x3e760a(0x25c),
            'wqOln': _0x3e760a(0x23c),
            'NaVjZ': _0x3e760a(0x214),
            'McZIq': function (_0x5a36b3, _0x1751d3) {
                return _0x5a36b3 * _0x1751d3;
            }
        }, _0x1bbb87 = {
            'alphabet': _0x3e760a(0x2b8),
            'numeric': _0x459ba8[_0x3e760a(0x45e)],
            'hex': _0x459ba8[_0x3e760a(0x3ff)],
            'rangedice': _0x459ba8[_0x3e760a(0x1ff)],
            'default': _0x459ba8['NaVjZ']
        }, _0x4d0dff = _0x1bbb87[_0x4f623a] || _0x1bbb87['default'];
    let _0x3a9314 = '';
    for (let _0x2aab9f = 0x0; _0x2aab9f < _0x3c8443; _0x2aab9f++) {
        _0x3a9314 += _0x4d0dff['charAt'](Math[_0x3e760a(0x26a)](_0x459ba8[_0x3e760a(0x3a9)](Math[_0x3e760a(0x21e)](), _0x4d0dff[_0x3e760a(0x33b)])));
    }
    return _0x3a9314;
}
function setCookie(_0x131761, _0x4b6acb, _0x527a26) {
    const _0x1aca7f = _0x5cf6aa, _0x300a3b = {
            'DvCeg': function (_0x39cce0, _0x52463d) {
                return _0x39cce0 * _0x52463d;
            },
            'zweeF': function (_0x23f2fc, _0x386bdd) {
                return _0x23f2fc * _0x386bdd;
            },
            'LikcL': function (_0x2e3d5f, _0x325d4b) {
                return _0x2e3d5f * _0x325d4b;
            },
            'paYOl': function (_0xae3bfb, _0x1db305) {
                return _0xae3bfb + _0x1db305;
            },
            'cacnG': _0x1aca7f(0x3bc)
        }, _0x38441e = new Date();
    _0x38441e['setTime'](_0x38441e[_0x1aca7f(0x468)]() + _0x300a3b[_0x1aca7f(0x458)](_0x300a3b['zweeF'](_0x300a3b['LikcL'](_0x527a26, 0x18), 0x3c), 0x3c) * 0x3e8);
    const _0x372824 = _0x300a3b[_0x1aca7f(0x286)](_0x300a3b['cacnG'], _0x38441e[_0x1aca7f(0x197)]());
    document['cookie'] = _0x131761 + '=' + _0x4b6acb + ';' + _0x372824 + _0x1aca7f(0x251);
}
function getCookie(_0x59fbc2) {
    const _0x924c4e = _0x5cf6aa, _0x3395ef = {
            'ZnsUo': function (_0x12016f, _0xb16c8d) {
                return _0x12016f + _0xb16c8d;
            }
        }, _0x338eca = _0x3395ef[_0x924c4e(0x44b)](_0x59fbc2, '='), _0x511ccd = document[_0x924c4e(0x355)][_0x924c4e(0x284)](';')[_0x924c4e(0x374)](_0x5aaf8c => _0x5aaf8c['trim']());
    for (const _0x4dcd7d of _0x511ccd) {
        if (_0x4dcd7d[_0x924c4e(0x1f8)](_0x338eca))
            return _0x4dcd7d[_0x924c4e(0x1f1)](_0x338eca[_0x924c4e(0x33b)]);
    }
    return '';
}
function saveScript() {
    const _0x3f1f24 = _0x5cf6aa, _0x4cf99d = {
            'cDxmG': function (_0x3bab2b, _0x164890) {
                return _0x3bab2b === _0x164890;
            },
            'sXuED': _0x3f1f24(0x26e)
        }, _0x4f3fea = _0x4cf99d[_0x3f1f24(0x28c)](mode, _0x4cf99d[_0x3f1f24(0x20c)]) ? luaEditor['getValue']() : jsEditor[_0x3f1f24(0x226)](), _0x4dfbb4 = document['createElement']('a');
    _0x4dfbb4[_0x3f1f24(0x1dd)] = window[_0x3f1f24(0x2a0)]['createObjectURL'](new Blob([_0x4f3fea], { 'type': _0x3f1f24(0x361) })), _0x4dfbb4['download'] = _0x3f1f24(0x255) + Date[_0x3f1f24(0x413)]()[_0x3f1f24(0x28e)]()[_0x3f1f24(0x448)](-0x6) + '.' + mode, _0x4dfbb4[_0x3f1f24(0x351)]();
}
function getErrMsg(_0x2258ca) {
    const _0x1c402d = _0x5cf6aa;
    return _0x2258ca[_0x1c402d(0x3f6)] && _0x2258ca['response'][_0x1c402d(0x43f)] && _0x2258ca[_0x1c402d(0x3f6)][_0x1c402d(0x43f)][_0x1c402d(0x1f7)] || _0x2258ca[_0x1c402d(0x1f7)] || _0x2258ca['toString']();
}

const _0x1d8314 = _0xeac3;
(function (_0x23d30a, _0x2c5952) {
    const _0x2c07c5 = _0xeac3, _0x352257 = _0x23d30a();
    while (!![]) {
        try {
            const _0xa4d2a1 = -parseInt(_0x2c07c5(0x1e3)) / 0x1 + -parseInt(_0x2c07c5(0x219)) / 0x2 + -parseInt(_0x2c07c5(0x1d9)) / 0x3 + parseInt(_0x2c07c5(0x1f2)) / 0x4 + parseInt(_0x2c07c5(0x20d)) / 0x5 * (parseInt(_0x2c07c5(0x206)) / 0x6) + parseInt(_0x2c07c5(0x204)) / 0x7 * (-parseInt(_0x2c07c5(0x1f8)) / 0x8) + parseInt(_0x2c07c5(0x20c)) / 0x9;
            if (_0xa4d2a1 === _0x2c5952)
                break;
            else
                _0x352257['push'](_0x352257['shift']());
        } catch (_0x188425) {
            _0x352257['push'](_0x352257['shift']());
        }
    }
}(_0x4270, 0xdd240), token = JSON['parse'](localStorage['getItem'](_0x1d8314(0x215)))['value'], remaining = 0x78);
async function beforeWork() {
    const _0x468990 = _0x1d8314, _0x4e8107 = {
            'dQWOW': function (_0x24213c, _0x350523) {
                return _0x24213c + _0x350523;
            },
            'bKNGp': 'application/json'
        };
    axios[_0x468990(0x226)][_0x468990(0x1e9)] = {
        'authorization': _0x4e8107[_0x468990(0x200)](_0x468990(0x211), token),
        'content-type': _0x4e8107[_0x468990(0x201)],
        'x-requested-with': 'XMLHttpRequest',
        'x-client-type': _0x468990(0x229),
        'x-hash-api': window['intercomSettings']['user_hash']
    };
}
function vault() {
    const _0x5bfc6c = _0x1d8314, _0x2d2837 = {
            'ayfRY': function (_0x46842b, _0x36deee) {
                return _0x46842b(_0x36deee);
            },
            'OwZIb': _0x5bfc6c(0x20f)
        };
    _0x2d2837[_0x5bfc6c(0x202)](log, _0x2d2837[_0x5bfc6c(0x1e2)]);
}
function unvault() {
    const _0x5146f1 = _0x1d8314, _0x5e9d55 = {
            'wlBZe': function (_0x245de0, _0xbcf8d) {
                return _0x245de0(_0xbcf8d);
            },
            'XhqDK': _0x5146f1(0x20f)
        };
    _0x5e9d55[_0x5146f1(0x1ef)](log, _0x5e9d55[_0x5146f1(0x1dd)]);
}
async function getListCoin() {
    const _0x5661df = _0x1d8314, _0x501002 = {
            'vdFYI': _0x5661df(0x1f7),
            'twXMG': function (_0x4f1060) {
                return _0x4f1060();
            },
            'zolJP': function (_0x7ce5b6) {
                return _0x7ce5b6();
            }
        }, {data: _0x2c5547} = await axios['get'](_0x501002['vdFYI']), _0x416e31 = _0x2c5547[_0x5661df(0x22d)];
    for (let _0x41239b = 0x0; _0x41239b < _0x416e31[_0x5661df(0x1d6)]; _0x41239b++) {
        coins[_0x5661df(0x223)](String(_0x416e31[_0x41239b][_0x5661df(0x1f4)])['toUpperCase']());
    }
    return coins = coins[_0x5661df(0x212)](), coin = coins[0x0], (_0x501002[_0x5661df(0x208)](drawSelectCoin), _0x501002[_0x5661df(0x1e6)](checkbalance));
}
async function getMinBet() {
    const _0x362449 = _0x1d8314, _0xc001bd = { 'Datcq': _0x362449(0x1d8) };
    return await axios[_0x362449(0x1fa)](_0xc001bd['Datcq']);
}
async function checkbalance() {
    const _0x126e6f = _0x1d8314, _0x36a234 = {
            'jolse': _0x126e6f(0x1f7),
            'WdbcJ': function (_0x2a0879, _0x2f1183) {
                return _0x2a0879(_0x2f1183);
            },
            'TOKvJ': function (_0x1f23be, _0xb3da87) {
                return _0x1f23be + _0xb3da87;
            },
            'JGGCW': _0x126e6f(0x1d2),
            'TKsAn': function (_0x209445) {
                return _0x209445();
            },
            'ndrAb': function (_0x46d445, _0x2ec625) {
                return _0x46d445 === _0x2ec625;
            },
            'LibcY': function (_0x260247, _0x4f83c8) {
                return _0x260247 + _0x4f83c8;
            },
            'eakdD': 'maxbet='
        };
    try {
        const {data: _0x1c6cf4} = await axios[_0x126e6f(0x1fa)](_0x36a234[_0x126e6f(0x227)]), _0x4e1f3f = _0x1c6cf4['userBalances'][_0x126e6f(0x1f1)](_0x7a178f => _0x7a178f[_0x126e6f(0x1f4)] == String(coin)[_0x126e6f(0x22c)]());
        balance = _0x36a234[_0x126e6f(0x1f3)](Number, _0x4e1f3f[_0x126e6f(0x1f5)]), fengari[_0x126e6f(0x22a)](_0x36a234[_0x126e6f(0x1ff)](_0x126e6f(0x224), balance))(), startBalance = balance, minbalance = balance, fengari['load'](_0x36a234[_0x126e6f(0x1ff)](_0x126e6f(0x1fb), balance))(), maxbalance = balance, fengari[_0x126e6f(0x22a)](_0x36a234[_0x126e6f(0x22f)] + balance)();
        const _0x61fc08 = await _0x36a234[_0x126e6f(0x1fd)](getMinBet);
        for (const _0x3d120e in _0x61fc08['data']['settings']) {
            _0x36a234['ndrAb'](String(_0x3d120e)[_0x126e6f(0x209)](), coin) && (minbet = _0x61fc08[_0x126e6f(0x21c)][_0x126e6f(0x1e4)][_0x3d120e][_0x126e6f(0x20e)][_0x126e6f(0x1df)], maxbet = _0x61fc08[_0x126e6f(0x21c)][_0x126e6f(0x1e4)][_0x3d120e][_0x126e6f(0x20e)][_0x126e6f(0x1de)]);
        }
        return fengari[_0x126e6f(0x22a)](_0x36a234[_0x126e6f(0x1fe)]('minbet=', minbet))(), fengari[_0x126e6f(0x22a)](_0x36a234[_0x126e6f(0x1fe)](_0x36a234['eakdD'], maxbet))(), _0x36a234[_0x126e6f(0x1fd)](updateStats);
    } catch (_0x1ae267) {
        return _0x36a234[_0x126e6f(0x1fd)](stop), _0x36a234[_0x126e6f(0x1f3)](log, _0x36a234['WdbcJ'](getErrMsg, _0x1ae267));
    }
}
function _0xeac3(_0x545a18, _0x301475) {
    const _0x4270fd = _0x4270();
    return _0xeac3 = function (_0xeac3f8, _0x48b795) {
        _0xeac3f8 = _0xeac3f8 - 0x1d2;
        let _0x402a1b = _0x4270fd[_0xeac3f8];
        return _0x402a1b;
    }, _0xeac3(_0x545a18, _0x301475);
}
function _0x4270() {
    const _0x3b6be3 = [
        'twXMG',
        'toUpperCase',
        'mnkHw',
        'round',
        '31297446gfQnCo',
        '245OwXXBz',
        'casino',
        'Not\x20supported',
        'WYOil',
        'Bearer\x20',
        'sort',
        'awxdX',
        'EPSILON',
        'token',
        'request',
        'issCk',
        'JefrP',
        '1623892gfmxro',
        'epXYS',
        'error',
        'data',
        'over',
        'nonce',
        'profit',
        'zoqVr',
        'under',
        'You\x20can\x20play\x20only\x20one\x20bet\x20at\x20a\x20time.',
        'push',
        'balance=',
        'bet',
        'defaults',
        'jolse',
        'GKQbA',
        'Web-Application',
        'load',
        'WaaST',
        'toLowerCase',
        'userBalances',
        'response',
        'JGGCW',
        'maxbalance=',
        'eRWlY',
        'status',
        '/api/v1/game/seed/refresh',
        'length',
        'PuPpY',
        '/api/v1/site/currencies',
        '4409823mxBiNY',
        'ITrwP',
        'You\x20have\x20insufficient\x20balance',
        'pCPbP',
        'XhqDK',
        'amount_maximum',
        'amount_minimum',
        'XbzlN',
        '/api/v1/bet/place',
        'OwZIb',
        '1117455gVTjQq',
        'settings',
        'dice',
        'zolJP',
        'IqTYX',
        'FBXdm',
        'headers',
        'YEjip',
        'daRBv',
        'split',
        'result_value',
        'Network\x20error,\x20auto\x20retry\x20after\x203s',
        'wlBZe',
        'post',
        'find',
        '5421932HLIuAb',
        'WdbcJ',
        'currency',
        'amount',
        'Wolf\x20blocks\x20fast\x20betting,\x20auto\x20retry\x20after\x203s',
        '/api/v2/user/balances',
        '51864PfDUct',
        'x-ratelimit-remaining',
        'get',
        'minbalance=',
        'fsAkh',
        'TKsAn',
        'LibcY',
        'TOKvJ',
        'dQWOW',
        'bKNGp',
        'ayfRY',
        'dTwgZ',
        '693dXNRzj',
        'HyUCF',
        '13956foxdwc',
        'UIqSQ'
    ];
    _0x4270 = function () {
        return _0x3b6be3;
    };
    return _0x4270();
}
async function resetseed() {
    const _0x2e3248 = _0x1d8314, _0x2f0b56 = {
            'GKQbA': _0x2e3248(0x1d5),
            'awxdX': function (_0x47696c) {
                return _0x47696c();
            },
            'WaaST': function (_0x249ca8, _0x4e0e34) {
                return _0x249ca8(_0x4e0e34);
            }
        };
    try {
        return axios['get'](_0x2f0b56[_0x2e3248(0x228)]);
    } catch (_0xda100a) {
        return _0x2f0b56[_0x2e3248(0x213)](stop), _0x2f0b56[_0x2e3248(0x22b)](log, _0x2f0b56[_0x2e3248(0x22b)](getErrMsg, _0xda100a));
    }
}
async function sendBet() {
    const _0x39f778 = _0x1d8314, _0x27d86d = {
            'KgwFU': function (_0x22f086, _0x3f573b) {
                return _0x22f086 / _0x3f573b;
            },
            'slxLD': function (_0x179272, _0x29f25c) {
                return _0x179272 * _0x29f25c;
            },
            'fsAkh': function (_0x31fa3a, _0x47fc79) {
                return _0x31fa3a + _0x47fc79;
            },
            'ITrwP': function (_0x374e2d, _0xa1f794) {
                return _0x374e2d - _0xa1f794;
            },
            'WYOil': function (_0x404291, _0x5cdfbc) {
                return _0x404291 / _0x5cdfbc;
            },
            'vyHMx': function (_0x5e1e50, _0x5c50b0) {
                return _0x5e1e50 + _0x5c50b0;
            },
            'UIqSQ': function (_0x5e9dcc, _0x3b8fa6) {
                return _0x5e9dcc * _0x3b8fa6;
            },
            'NqZEC': function (_0x27dbbd, _0x3d43e1) {
                return _0x27dbbd + _0x3d43e1;
            },
            'eRWlY': function (_0x337bbe, _0x43e75d) {
                return _0x337bbe(_0x43e75d);
            },
            'ZRDzW': _0x39f778(0x21d),
            'YEjip': _0x39f778(0x1e1),
            'issCk': _0x39f778(0x1f9),
            'XbzlN': function (_0x4fd398, _0x481a06) {
                return _0x4fd398 === _0x481a06;
            },
            'daRBv': _0x39f778(0x222),
            'IqTYX': function (_0x166c02) {
                return _0x166c02();
            },
            'pCPbP': function (_0xf64203, _0x236553) {
                return _0xf64203(_0x236553);
            },
            'epXYS': function (_0x3d04c1, _0x131d50) {
                return _0x3d04c1 === _0x131d50;
            },
            'JefrP': function (_0x4cbc54, _0x3f974a, _0x98b117) {
                return _0x4cbc54(_0x3f974a, _0x98b117);
            },
            'zoqVr': function (_0x39b736, _0x112b24) {
                return _0x39b736 == _0x112b24;
            },
            'EwboK': _0x39f778(0x1db),
            'dTwgZ': _0x39f778(0x1ee),
            'PuPpY': function (_0x403499, _0xecb7bf) {
                return _0x403499(_0xecb7bf);
            }
        };
    try {
        chance = _0x27d86d['KgwFU'](Math['round'](_0x27d86d['slxLD'](_0x27d86d[_0x39f778(0x1fc)](chance, Number['EPSILON']), 0x64)), 0x64), target = bethigh ? _0x27d86d[_0x39f778(0x1da)](99.99, chance) : chance, target = _0x27d86d[_0x39f778(0x210)](Math[_0x39f778(0x20b)](_0x27d86d['vyHMx'](target, Number[_0x39f778(0x214)]) * 0x64), 0x64);
        const _0x4d0235 = Math[_0x39f778(0x20b)](_0x27d86d[_0x39f778(0x207)](_0x27d86d['NqZEC'](0x63 / chance, Number['EPSILON']), 0x2710)) / 0x2710, _0x53ee00 = JSON['stringify']({
                'amount': Number(nextbet)['toFixed'](0x8),
                'auto': 0x1,
                'bet_value': target,
                'currency': _0x27d86d['eRWlY'](String, coin)[_0x39f778(0x22c)](),
                'game': _0x39f778(0x1e5),
                'multiplier': _0x4d0235,
                'rule': bethigh ? _0x27d86d['ZRDzW'] : _0x39f778(0x221)
            }), _0x55d1a6 = await axios[_0x39f778(0x1f0)](_0x27d86d[_0x39f778(0x1ea)], _0x53ee00);
        remaining = _0x55d1a6[_0x39f778(0x1e9)];
        for (item in _0x55d1a6[_0x39f778(0x1e9)]) {
            if (item === _0x27d86d[_0x39f778(0x217)])
                remaining = Number(_0x55d1a6[_0x39f778(0x1e9)][item]);
        }
        const {data: _0x3e4220} = _0x55d1a6;
        if (_0x3e4220[_0x39f778(0x21b)]) {
            if (_0x27d86d[_0x39f778(0x1e0)](_0x3e4220[_0x39f778(0x21b)], _0x27d86d[_0x39f778(0x1eb)]))
                _0x27d86d[_0x39f778(0x1e7)](sendBet);
            else
                return stop(), log(_0x3e4220['error']);
        } else
            return _0x27d86d[_0x39f778(0x1dc)](handleResult, _0x3e4220);
    } catch (_0x5a1a2a) {
        if (_0x5a1a2a[_0x39f778(0x22e)]) {
            const _0x2d317f = _0x5a1a2a[_0x39f778(0x22e)][_0x39f778(0x1d4)];
            if (!_0x2d317f || _0x27d86d[_0x39f778(0x21a)](_0x2d317f, 0x1ad)) {
                _0x27d86d['pCPbP'](log, _0x39f778(0x1f6));
                if (run)
                    _0x27d86d[_0x39f778(0x218)](setTimeout, sendBet, 0xbb8);
            }
            _0x27d86d['zoqVr'](_0x2d317f, 0x190) && (_0x27d86d[_0x39f778(0x1e7)](stop), _0x27d86d[_0x39f778(0x1dc)](log, _0x27d86d['EwboK']));
            if (_0x27d86d[_0x39f778(0x220)](_0x2d317f, 0x1a6)) {
                const _0xaa2af9 = _0x5a1a2a[_0x39f778(0x22e)][_0x39f778(0x21c)];
                for (const _0x245e2d in _0xaa2af9) {
                    stop(), _0x27d86d[_0x39f778(0x1d3)](log, _0x245e2d + ':\x20' + _0xaa2af9[_0x245e2d]);
                }
            }
        } else {
            if (_0x5a1a2a[_0x39f778(0x216)]) {
                log(_0x27d86d[_0x39f778(0x203)]);
                if (run)
                    _0x27d86d[_0x39f778(0x218)](setTimeout, sendBet, 0xbb8);
            } else
                _0x27d86d['IqTYX'](stop), _0x27d86d[_0x39f778(0x1d7)](log, getErrMsg(_0x5a1a2a));
        }
    }
}
async function handleResult(_0x19ca7b) {
    const _0x42c88a = _0x1d8314, _0x3cd2ab = {
            'FBXdm': function (_0x48897a, _0x986992) {
                return _0x48897a(_0x986992);
            },
            'HyUCF': function (_0x3e8881, _0x414114) {
                return _0x3e8881(_0x414114);
            },
            'mnkHw': function (_0x218dc4, _0x140884) {
                return _0x218dc4(_0x140884);
            },
            'rSpLL': function (_0x4362c9) {
                return _0x4362c9();
            }
        };
    try {
        const _0x3692f9 = '1|4|0|3|2|5'[_0x42c88a(0x1ec)]('|');
        let _0x1f6ae0 = 0x0;
        while (!![]) {
            switch (_0x3692f9[_0x1f6ae0++]) {
            case '0':
                result = _0x3cd2ab[_0x42c88a(0x1e8)](Number, _0x19ca7b[_0x42c88a(0x225)][_0x42c88a(0x1ed)]);
                continue;
            case '1':
                currentprofit = _0x3cd2ab['HyUCF'](Number, _0x19ca7b[_0x42c88a(0x225)][_0x42c88a(0x21f)]);
                continue;
            case '2':
                lastBet['id'] = _0x3cd2ab['mnkHw'](String, _0x19ca7b[_0x42c88a(0x225)]['hash']);
                continue;
            case '3':
                lastBet[_0x42c88a(0x21e)] = _0x19ca7b['bet'][_0x42c88a(0x21e)];
                continue;
            case '4':
                lastBet['roll'] = _0x3cd2ab[_0x42c88a(0x205)](Number, _0x19ca7b[_0x42c88a(0x225)][_0x42c88a(0x1ed)]);
                continue;
            case '5':
                return handleStats();
            }
            break;
        }
    } catch (_0x352a65) {
        _0x3cd2ab['rSpLL'](stop), _0x3cd2ab[_0x42c88a(0x20a)](log, _0x3cd2ab[_0x42c88a(0x205)](getErrMsg, _0x352a65));
    }
}