const _0x4ceade = _0x16c8;
(function (_0x5a40f7, _0x217da0) {
    const _0x415e47 = _0x16c8, _0x4d5487 = _0x5a40f7();
    while (!![]) {
        try {
            const _0x2b25e0 = parseInt(_0x415e47(0x255)) / 0x1 + parseInt(_0x415e47(0x2cd)) / 0x2 + -parseInt(_0x415e47(0x40b)) / 0x3 * (parseInt(_0x415e47(0x496)) / 0x4) + parseInt(_0x415e47(0x31c)) / 0x5 + parseInt(_0x415e47(0x3c1)) / 0x6 + parseInt(_0x415e47(0x2a5)) / 0x7 + parseInt(_0x415e47(0x445)) / 0x8 * (-parseInt(_0x415e47(0x1d7)) / 0x9);
            if (_0x2b25e0 === _0x217da0)
                break;
            else
                _0x4d5487['push'](_0x4d5487['shift']());
        } catch (_0x2588bc) {
            _0x4d5487['push'](_0x4d5487['shift']());
        }
    }
}(_0x3193, 0xe7033), Object[_0x4ceade(0x497)](String[_0x4ceade(0x44a)], _0x4ceade(0x3ab), {
    'value': function () {
        const _0xfda2b7 = _0x4ceade;
        return this[_0xfda2b7(0x409)](0x0)[_0xfda2b7(0x1ef)]() + this[_0xfda2b7(0x268)](0x1);
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = 'lua', game = _0x4ceade(0x2f1), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x4ceade(0x390), kenoRisk = _0x4ceade(0x1c7), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x4ceade(0x220), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x4ceade(0x220),
    'BetSide': _0x4ceade(0x220),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x4ceade(0x370))), wdbUI = _0x4ceade(0x373) + WDB_MODE + '\x20|\x20' + CASINO_GAME + _0x4ceade(0x2b7) + WDB_HOME + _0x4ceade(0x3f7) + location['hostname']['replace']('www.', '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
function _0x16c8(_0xf3cc80, _0x116cb7) {
    const _0x319346 = _0x3193();
    return _0x16c8 = function (_0x16c8d6, _0x4eb339) {
        _0x16c8d6 = _0x16c8d6 - 0x1b4;
        let _0x277892 = _0x319346[_0x16c8d6];
        return _0x277892;
    }, _0x16c8(_0xf3cc80, _0x116cb7);
}
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = _0x4ceade(0x25e), plinkoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', plinkoJsScript = _0x4ceade(0x2f0), kenoLuaScript = _0x4ceade(0x45a), kenoJsScript = _0x4ceade(0x1dd);
function exportLog() {
    const _0x5e10e1 = _0x4ceade, _0x291999 = { 'UqXyQ': _0x5e10e1(0x2e0) }, _0x58ed07 = JSON['stringify'](fullLogs), _0x178f09 = document[_0x5e10e1(0x226)]('a');
    _0x178f09[_0x5e10e1(0x3e8)] = window[_0x5e10e1(0x34d)][_0x5e10e1(0x404)](new Blob([_0x58ed07], { 'type': _0x291999[_0x5e10e1(0x2f4)] })), _0x178f09[_0x5e10e1(0x38c)] = _0x5e10e1(0x1c3) + Date['now']()[_0x5e10e1(0x43c)]()[_0x5e10e1(0x268)](-0x6) + _0x5e10e1(0x1cf), _0x178f09[_0x5e10e1(0x35a)]();
}
class Chart {
    constructor(_0x1b6611, _0x4e8de6 = ![], _0x306c81 = 0x64) {
        const _0x31e896 = _0x4ceade, _0x38d11c = {
                'qHHBR': _0x31e896(0x42a),
                'YQYxm': 'light1',
                'SzSVU': _0x31e896(0x272)
            }, _0x29b10d = _0x31e896(0x243)[_0x31e896(0x318)]('|');
        let _0x20969f = 0x0;
        while (!![]) {
            switch (_0x29b10d[_0x20969f++]) {
            case '0':
                this[_0x31e896(0x32d)] = _0x1b6611;
                continue;
            case '1':
                this[_0x31e896(0x353)] = _0x4e8de6;
                continue;
            case '2':
                this['chart'] = new CanvasJS[(_0x31e896(0x313))](_0x1b6611, {
                    'theme': _0x4e8de6 ? _0x38d11c[_0x31e896(0x352)] : _0x38d11c[_0x31e896(0x1b5)],
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0x38d11c[_0x31e896(0x206)],
                            'markerSize': 0x0,
                            'dataPoints': this[_0x31e896(0x47c)]
                        }]
                });
                continue;
            case '3':
                this[_0x31e896(0x1dc)] = _0x306c81;
                continue;
            case '4':
                this[_0x31e896(0x47c)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '5':
                this[_0x31e896(0x4a3)][_0x31e896(0x23c)]();
                continue;
            }
            break;
        }
    }
    set [_0x4ceade(0x2dc)](_0x3abcc1) {
        const _0x3136a8 = _0x4ceade;
        this[_0x3136a8(0x1dc)] = _0x3abcc1;
    }
    get [_0x4ceade(0x2dc)]() {
        const _0x115b12 = _0x4ceade;
        return this[_0x115b12(0x1dc)];
    }
    set [_0x4ceade(0x2e9)](_0x309e79) {
        const _0x51ac35 = _0x4ceade, _0x3ec864 = { 'VwOES': _0x51ac35(0x42a) };
        this[_0x51ac35(0x353)] = _0x309e79, this[_0x51ac35(0x4a3)][_0x51ac35(0x2d3)][_0x51ac35(0x271)] = _0x309e79 ? _0x3ec864['VwOES'] : 'light1', this[_0x51ac35(0x4a3)][_0x51ac35(0x23c)]();
    }
    get [_0x4ceade(0x2e9)]() {
        const _0x44584c = _0x4ceade;
        return this[_0x44584c(0x353)];
    }
    [_0x4ceade(0x340)](_0x25b076, _0x2abf1e, _0x4ce199) {
        const _0x218252 = _0x4ceade, _0x5da301 = {
                'RKROm': function (_0xdbcd56, _0x171614) {
                    return _0xdbcd56 - _0x171614;
                }
            };
        this['dps']['push']({
            'x': _0x25b076,
            'y': _0x2abf1e,
            'lineColor': _0x4ce199
        });
        if (this[_0x218252(0x47c)][_0x218252(0x2ad)] > this[_0x218252(0x1dc)])
            this[_0x218252(0x47c)][_0x218252(0x26c)]();
        if (this[_0x218252(0x47c)][this[_0x218252(0x47c)][_0x218252(0x2ad)] - 0x2])
            this[_0x218252(0x47c)][_0x5da301['RKROm'](this[_0x218252(0x47c)][_0x218252(0x2ad)], 0x2)][_0x218252(0x25d)] = _0x4ce199;
        this['chart'][_0x218252(0x23c)]();
    }
    [_0x4ceade(0x1e8)]() {
        const _0x2f8b00 = _0x4ceade;
        this['dps'] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x2f8b00(0x4a3)]['options'][_0x2f8b00(0x24f)][0x0][_0x2f8b00(0x417)] = this[_0x2f8b00(0x47c)], this[_0x2f8b00(0x4a3)][_0x2f8b00(0x23c)]();
    }
}
function changeMaxRows() {
    const _0x197bdf = _0x4ceade, _0x4e665d = {
            'oluNP': _0x197bdf(0x392),
            'hJUTF': function (_0x40b132) {
                return _0x40b132();
            },
            'Vaxqf': function (_0x21595e) {
                return _0x21595e();
            },
            'qhudV': function (_0x5141d3, _0x57fe66) {
                return _0x5141d3(_0x57fe66);
            },
            'RYBKQ': _0x197bdf(0x48e)
        }, _0x2a4843 = _0x4e665d[_0x197bdf(0x410)][_0x197bdf(0x318)]('|');
    let _0x3716d5 = 0x0;
    while (!![]) {
        switch (_0x2a4843[_0x3716d5++]) {
        case '0':
            _0x4e665d[_0x197bdf(0x25a)](resethistory);
            continue;
        case '1':
            _0x4e665d[_0x197bdf(0x485)](resetlog);
            continue;
        case '2':
            resetchart();
            continue;
        case '3':
            maxRows = _0x4e665d[_0x197bdf(0x3e1)](Number, document[_0x197bdf(0x341)](_0x4e665d[_0x197bdf(0x362)])[_0x197bdf(0x2ec)]);
            continue;
        case '4':
            chart[_0x197bdf(0x2dc)] = maxRows;
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x1aba3e = _0x4ceade, _0xc66ed3 = {
            'kaHDD': _0x1aba3e(0x492),
            'ZopOW': '#000',
            'ZYqzG': _0x1aba3e(0x298),
            'dVZWt': _0x1aba3e(0x308),
            'oQAws': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'GoeVv': _0x1aba3e(0x1c8),
            'YHvOj': _0x1aba3e(0x2df),
            'abMLf': _0x1aba3e(0x2eb),
            'mjsid': _0x1aba3e(0x271),
            'EZkEW': _0x1aba3e(0x3cd),
            'HrYxt': '0|1|7|8|2|3|4|5|6',
            'DEOpt': function (_0x42a22c) {
                return _0x42a22c();
            }
        };
    darkMode = !darkMode, chart[_0x1aba3e(0x2e9)] = darkMode;
    const _0x4d6a72 = document[_0x1aba3e(0x341)](_0xc66ed3[_0x1aba3e(0x49b)]), _0x1c7d89 = document['getElementById'](_0x1aba3e(0x247)), _0x283f81 = document[_0x1aba3e(0x316)](_0xc66ed3[_0x1aba3e(0x20a)]), _0x147740 = document[_0x1aba3e(0x316)](_0xc66ed3[_0x1aba3e(0x2fc)]), _0x376dfb = document[_0x1aba3e(0x316)](_0xc66ed3['GoeVv']);
    if (darkMode)
        _0x4d6a72[_0x1aba3e(0x38a)][_0x1aba3e(0x283)] = _0x1aba3e(0x2df), _0x4d6a72[_0x1aba3e(0x38a)][_0x1aba3e(0x1c5)] = _0xc66ed3[_0x1aba3e(0x38e)], _0x4d6a72[_0x1aba3e(0x38a)][_0x1aba3e(0x47b)] = _0xc66ed3[_0x1aba3e(0x449)], _0x1c7d89[_0x1aba3e(0x38a)][_0x1aba3e(0x283)] = _0xc66ed3['abMLf'], luaEditor[_0x1aba3e(0x29b)](_0xc66ed3['mjsid'], _0x1aba3e(0x3cd)), jsEditor[_0x1aba3e(0x29b)]('theme', _0xc66ed3[_0x1aba3e(0x2d6)]), _0x283f81[_0x1aba3e(0x356)](_0x2fe66c => {
            const _0x13bba1 = _0x1aba3e;
            _0x2fe66c['style'][_0x13bba1(0x283)] = '#2a2a2a', _0x2fe66c[_0x13bba1(0x38a)][_0x13bba1(0x1c5)] = _0xc66ed3[_0x13bba1(0x38e)];
        }), _0x147740[_0x1aba3e(0x356)](_0x3a5dcd => _0x3a5dcd[_0x1aba3e(0x38a)][_0x1aba3e(0x1c5)] = _0x1aba3e(0x492)), _0x376dfb[_0x1aba3e(0x356)](_0x3e1798 => _0x3e1798[_0x1aba3e(0x38a)][_0x1aba3e(0x1c5)] = _0x1aba3e(0x492));
    else {
        const _0x3fa104 = _0xc66ed3['HrYxt']['split']('|');
        let _0x44bd1d = 0x0;
        while (!![]) {
            switch (_0x3fa104[_0x44bd1d++]) {
            case '0':
                _0x4d6a72['style'][_0x1aba3e(0x283)] = _0xc66ed3[_0x1aba3e(0x38e)];
                continue;
            case '1':
                _0x4d6a72[_0x1aba3e(0x38a)]['color'] = _0xc66ed3[_0x1aba3e(0x27e)];
                continue;
            case '2':
                luaEditor['setOption'](_0xc66ed3['mjsid'], 'default');
                continue;
            case '3':
                jsEditor[_0x1aba3e(0x29b)](_0xc66ed3[_0x1aba3e(0x3cf)], _0x1aba3e(0x405));
                continue;
            case '4':
                _0x283f81[_0x1aba3e(0x356)](_0x240ed6 => {
                    const _0x2e29d9 = _0x1aba3e;
                    _0x240ed6[_0x2e29d9(0x38a)][_0x2e29d9(0x283)] = '#fff', _0x240ed6['style'][_0x2e29d9(0x1c5)] = _0xc66ed3[_0x2e29d9(0x27e)];
                });
                continue;
            case '5':
                _0x147740[_0x1aba3e(0x356)](_0x2a4afd => _0x2a4afd[_0x1aba3e(0x38a)][_0x1aba3e(0x1c5)] = _0x1aba3e(0x263));
                continue;
            case '6':
                _0x376dfb[_0x1aba3e(0x356)](_0x49bc38 => _0x49bc38[_0x1aba3e(0x38a)]['color'] = _0x1aba3e(0x263));
                continue;
            case '7':
                _0x4d6a72[_0x1aba3e(0x38a)][_0x1aba3e(0x47b)] = _0x1aba3e(0x492);
                continue;
            case '8':
                _0x1c7d89[_0x1aba3e(0x38a)][_0x1aba3e(0x283)] = _0x1aba3e(0x279);
                continue;
            }
            break;
        }
    }
    _0xc66ed3[_0x1aba3e(0x3ac)](updateStats);
}
let previousPosition = {
    'top': _0x4ceade(0x1ed),
    'left': '5px',
    'position': _0x4ceade(0x34f)
};
function loadSavedPosition() {
    const _0x5bf7e4 = _0x4ceade, _0x4457ab = localStorage[_0x5bf7e4(0x30a)](_0x5bf7e4(0x295));
    if (_0x4457ab)
        try {
            const _0x4e8954 = JSON['parse'](_0x4457ab);
            _0x4e8954[_0x5bf7e4(0x3b2)] && _0x4e8954[_0x5bf7e4(0x381)] && (previousPosition = _0x4e8954);
        } catch (_0x261489) {
        }
}
function savePosition() {
    const _0x275a68 = _0x4ceade, _0xeaad16 = { 'Mmfpo': _0x275a68(0x295) };
    localStorage[_0x275a68(0x403)](_0xeaad16[_0x275a68(0x2e8)], JSON['stringify'](previousPosition));
}
function toggleMinimalBot(_0xfa32a7) {
    const _0x4c9b2a = _0x4ceade, _0x43d961 = {
            'NrzTa': _0x4c9b2a(0x2da),
            'nsBBX': _0x4c9b2a(0x298),
            'yvGMP': _0x4c9b2a(0x1ed),
            'JqTwE': function (_0x36d9d0) {
                return _0x36d9d0();
            },
            'XYKDW': _0x4c9b2a(0x351),
            'nGhKv': _0x4c9b2a(0x252),
            'BZNgA': function (_0x4d2063, _0x268fc8) {
                return _0x4d2063 / _0x268fc8;
            },
            'NzPEn': function (_0x1a524b, _0xd41f61) {
                return _0x1a524b - _0xd41f61;
            },
            'TBOAK': function (_0x184ac8, _0x40261d) {
                return _0x184ac8 + _0x40261d;
            },
            'nHaxO': _0x4c9b2a(0x490),
            'codDJ': _0x4c9b2a(0x331)
        }, _0xeec371 = document[_0x4c9b2a(0x341)](_0x43d961['NrzTa']), _0x53159e = document[_0x4c9b2a(0x341)](_0x4c9b2a(0x422)), _0x509fb8 = document[_0x4c9b2a(0x341)](_0x43d961[_0x4c9b2a(0x382)]);
    if (_0xfa32a7[_0x4c9b2a(0x39d)] === '▼') {
        const _0x237521 = window[_0x4c9b2a(0x233)](_0x509fb8);
        previousPosition = {
            'top': _0x509fb8['style'][_0x4c9b2a(0x3b2)] || _0x237521['top'] || '5px',
            'left': _0x509fb8['style'][_0x4c9b2a(0x381)] || _0x237521[_0x4c9b2a(0x381)] || _0x43d961[_0x4c9b2a(0x223)],
            'position': _0x509fb8[_0x4c9b2a(0x38a)]['position'] || _0x237521[_0x4c9b2a(0x40a)] || _0x4c9b2a(0x34f)
        }, _0x43d961[_0x4c9b2a(0x253)](savePosition), _0xeec371[_0x4c9b2a(0x38a)][_0x4c9b2a(0x49e)] = _0x4c9b2a(0x351), _0x53159e[_0x4c9b2a(0x38a)][_0x4c9b2a(0x49e)] = _0x43d961[_0x4c9b2a(0x277)], _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x265)] = _0x43d961[_0x4c9b2a(0x327)];
        const _0x1bf80f = window[_0x4c9b2a(0x37c)], _0x3fb351 = 0x15e, _0x6ae29 = _0x43d961[_0x4c9b2a(0x208)](_0x43d961[_0x4c9b2a(0x3d5)](_0x1bf80f, _0x3fb351), 0x2);
        _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x3b2)] = _0x4c9b2a(0x29a), _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x381)] = _0x43d961['TBOAK'](_0x6ae29, 'px'), _0x509fb8[_0x4c9b2a(0x38a)]['position'] = 'fixed', _0xfa32a7[_0x4c9b2a(0x39d)] = '▲';
    } else {
        const _0x2c9dbb = _0x43d961[_0x4c9b2a(0x246)][_0x4c9b2a(0x318)]('|');
        let _0xb7f3bc = 0x0;
        while (!![]) {
            switch (_0x2c9dbb[_0xb7f3bc++]) {
            case '0':
                _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x40a)] = previousPosition[_0x4c9b2a(0x40a)];
                continue;
            case '1':
                _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x381)] = previousPosition[_0x4c9b2a(0x381)];
                continue;
            case '2':
                _0x509fb8['style'][_0x4c9b2a(0x3b2)] = previousPosition[_0x4c9b2a(0x3b2)];
                continue;
            case '3':
                _0x509fb8[_0x4c9b2a(0x38a)][_0x4c9b2a(0x265)] = _0x43d961[_0x4c9b2a(0x231)];
                continue;
            case '4':
                _0xfa32a7[_0x4c9b2a(0x39d)] = '▼';
                continue;
            case '5':
                _0x53159e['style'][_0x4c9b2a(0x49e)] = _0x4c9b2a(0x43b);
                continue;
            case '6':
                _0xeec371[_0x4c9b2a(0x38a)][_0x4c9b2a(0x49e)] = _0x4c9b2a(0x43b);
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x3d5723) {
    const _0x184408 = _0x4ceade, _0x1e4f41 = {
            'jrtlE': 'wdbWrapControl',
            'BOshw': 'flex'
        }, _0x5ab086 = document[_0x184408(0x341)](_0x1e4f41[_0x184408(0x260)]);
    _0x3d5723[_0x184408(0x39d)] === '▲' ? (_0x5ab086[_0x184408(0x38a)][_0x184408(0x49e)] = _0x184408(0x351), _0x3d5723[_0x184408(0x39d)] = '▼') : (_0x5ab086[_0x184408(0x38a)][_0x184408(0x49e)] = _0x1e4f41[_0x184408(0x2b6)], _0x3d5723[_0x184408(0x39d)] = '▲');
}
function drawSelectCoin() {
    const _0x379cc4 = _0x4ceade, _0x492383 = {
            'nfRZu': _0x379cc4(0x3d6),
            'mTFSO': function (_0x3ca19d, _0x53b858) {
                return _0x3ca19d(_0x53b858);
            }
        }, _0x42b6b2 = coins[_0x379cc4(0x3aa)](_0x117cf8 => '<option\x20value=\x22' + _0x117cf8 + '\x22>' + _0x117cf8 + _0x379cc4(0x489))['join']('');
    document[_0x379cc4(0x341)](_0x492383[_0x379cc4(0x280)])['innerHTML'] = _0x42b6b2, currency = _0x492383[_0x379cc4(0x2fa)](String, coin)['toLowerCase'](), fengari[_0x379cc4(0x306)](_0x379cc4(0x3a9) + currency + '\x22')();
}
function _0x3193() {
    const _0xc39a76 = [
        'eRaaT',
        'wpdvc',
        'BOshw',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'DdQZk',
        'stopOnBalance',
        'wzlqg',
        '190px',
        'then',
        'ubBGa',
        'Nonce',
        'LygrI',
        'pSSNQ',
        'offsetHeight',
        'loadScript',
        'change',
        'ZIvYK',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        '/canvasjs.min.js',
        'mNWiU',
        'vuIOM',
        'RsBTh',
        'onmousemove',
        'xHqvd',
        'SLXGc',
        '551288DzqKYS',
        'keno',
        'LeVhO',
        'advancedStopRollNumber',
        'XzfFy',
        'qNSes',
        'options',
        'Stop\x20on\x20',
        'OMGAv',
        'EZkEW',
        'dobet()',
        'umCZY',
        'sMmex',
        'wdbMain',
        'ltQXL',
        'maxRows',
        'fdKEu',
        'Roll',
        '#2a2a2a',
        'application/json',
        'URDRI',
        'wdbTime',
        'LBNCL',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'wdbToggleMinimal',
        'NdnAO',
        'height',
        'Mmfpo',
        'darkMode',
        'jJNAo',
        'dimgray',
        'value',
        'www.',
        'FBIpq',
        'yHAWa',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'dice',
        'jHpzS',
        'hTUbk',
        'UqXyQ',
        'KZrVX',
        'uzsYP',
        'advancedBetHighOnLoseCheck',
        'stopOnProfit',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'mTFSO',
        'YzWBT',
        'oQAws',
        'offsetWidth',
        'show',
        'children',
        'JRyUb',
        'Connected',
        'GiWrX',
        'clientY',
        'dkBMx',
        'hWfgy',
        'load',
        'aJTjH',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'kwbwD',
        'getItem',
        '<td>',
        'RncCF',
        'cowUu',
        'NanGu',
        'HBwsb',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'oSZCd',
        'advancedBetHighOnBet',
        'Chart',
        '/fengari-web.min.js',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'querySelectorAll',
        'IWcTm',
        'split',
        'jjstu',
        'wdbWrapLicenseBox',
        'hide',
        '9405225zIwjwf',
        'dLxaI',
        'initLuaOk',
        'VjAbg',
        'gGwuY',
        'rangedice',
        'wdbWagered',
        'checked',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'HSTFn',
        'nGhKv',
        'jNKAb',
        'offsetLeft',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'MPeiX',
        'FMDML',
        'containerId',
        'zOOsa',
        'SewdQ',
        'AzNTB',
        '1000px',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'green',
        'nBtNh',
        'scriptname\x20=\x20\x22\x22',
        'HFWhp',
        'GrbvW',
        'Mode',
        'xpKRs',
        'nsLtc',
        'yFRKh',
        'QkgPm',
        'Profit',
        'qCgeD',
        'updateChart',
        'getElementById',
        'WDBScript',
        '0123456789abcdef',
        'return\x20currency',
        'EPSILON',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'return\x20chance4',
        ';path=/',
        'return\x20scriptname',
        '\x0a\x20\x20\x20\x20minbalance=',
        'advancedChanceOnWinBets',
        'yLyXg',
        'URL',
        'XdMOg',
        'fixed',
        'fromTextArea',
        'none',
        'qHHBR',
        '_darkMode',
        'ElkKA',
        '\x20Balls',
        'forEach',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'yLbYj',
        'resetstatsOnProfitCheck',
        'click',
        'AKqHP',
        'BNoNv',
        'DXdxJ',
        'zCrkg',
        'dqtnv',
        'now',
        'advancedBetHighOnWinCheck',
        'RYBKQ',
        'PhMXq',
        'mcjTM',
        'uLsgU',
        'Result',
        'MzvrX',
        'replace',
        'KWYlr',
        'ybjLG',
        'stopOnProfitCheck',
        'PwLXC',
        'UowAs',
        '\x20Hits',
        'advancedMultiOnWinCheck',
        '/ching.mp3',
        'mVwsC',
        'createUIOk',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        '0|4|3|1|2',
        '\x20win',
        '$1=$1/$2\x20',
        'xUrCr',
        'ypfTQ',
        'OFVXB',
        'remove',
        '\x20bet',
        'innerWidth',
        'cuvzd',
        'wdbHighLose',
        'DmHJd',
        'ohSkv',
        'left',
        'nsBBX',
        'zjwLh',
        'zUKVL',
        'chance3',
        'mqokh',
        'advancedStopRollNumberCheck',
        'Chance2',
        'resetstatsOnProfit',
        'style',
        'wdbOpenLUAScript',
        'download',
        'DbbdN',
        'kaHDD',
        'advancedStopAfterStreak',
        'low',
        'IQapY',
        '3|4|2|0|1',
        'wdbAdvancedMode',
        'fGYpl',
        'wWvHx',
        'YsWEe',
        'bethigh',
        'yMSmh',
        'DwzmE',
        'zcTLl',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'innerText',
        'lastChild',
        'FPqOy',
        'vhIZi',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'wdbStats',
        '0.00',
        'KCVPX',
        'advancedMultiOnLose',
        'xriAt',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'nRrbH',
        'currency=\x22',
        'map',
        'capitalize',
        'DEOpt',
        'kKfpq',
        'foFkM',
        'tCcHR',
        'Chance1',
        'INOUo',
        'top',
        'CPUtp',
        'TpUYz',
        'advancedChanceOnLoseCheck',
        'handleAdvanced\x20ok',
        'wdbShowMode',
        'nonce',
        'HdWmv',
        'startsWith',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'eRwXB',
        'YUGhh',
        'event',
        'BeHfK',
        'pCWmw',
        '7216008zqeJth',
        '\x0a\x20\x20\x20\x20chance2=',
        'XloTI',
        'OmuKI',
        'cavYu',
        'SzmuJ',
        'UmCfU',
        'fWrzK',
        'chance1',
        'wdbRunningScript',
        'wdbWrap',
        'ndMQI',
        'darcula',
        'gmMtM',
        'mjsid',
        'wdbOpenJSScript',
        'AcnrY',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        '\x0a\x20\x20\x20\x20losestreak=',
        'wdbWrapInitializing',
        'NzPEn',
        'wdbMenuCoin',
        'wdbHighBet',
        'black',
        'lWqjJ',
        'chance1=',
        '\x0a\x20\x20\x20\x20chance3=',
        'TjXup',
        'xJBtc',
        'xRjnj',
        'WeanK',
        'ZFwgg',
        'qhudV',
        'VJxlN',
        'KerFd',
        'Stop\x20on\x20balance\x20',
        'dsZJU',
        'RjhuW',
        'advancedBetHighOnWin',
        'href',
        '#91f190',
        'return\x20betSide',
        'GAaHw',
        'Lmxly',
        'response',
        'CSSSh',
        'NZZtO',
        'RbxWz',
        'wdbHistory',
        'wdbResumeButton',
        'qNGId',
        'wdbScriptBoxLUA',
        'roYni',
        'scriptName',
        '\x20|\x20',
        'Bolxb',
        'anDrR',
        'nBCTo',
        '0123456789',
        'QZBof',
        'getValue',
        'ZeQkS',
        'advancedBetHighOnBetCheck',
        'HdumA',
        'MoTtO',
        'JYYUf',
        'setItem',
        'createObjectURL',
        'default',
        'ANnmM',
        'advancedStopAfterStreakCheck',
        'OWZTj',
        'charAt',
        'position',
        '519BgpFQY',
        'message',
        'wdbProfit',
        'ExLqe',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'oluNP',
        'wdbWrapVariables',
        'UHhIV',
        'target',
        'advancedMultiOnLoseCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'advancedChanceOnWinCheck',
        'dataPoints',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'kZpxw',
        'VBKEA',
        'toFixed',
        'betSide',
        'wdbMinBalance',
        'wdbChart',
        'iqYzD',
        'tagName',
        'setTime',
        'wdbFooter',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'CkpFH',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'YgkXJ',
        '\x0a\x20\x20\x20\x20losses=',
        'MAffk',
        'start',
        'dark1',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        '\x0a\x20\x20\x20\x20wagered=',
        'wdbWrapPercentProfit',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'expires=',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'wiEmt',
        'onmouseup',
        'between2',
        'AHmcU',
        '$1=$1+$2\x20',
        'LYerM',
        'round',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'wDgYG',
        'stopOnBalanceCheck',
        'block',
        'toString',
        'disabled',
        'VTylm',
        'CDpXl',
        'VkrFv',
        'upxle',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'wdbHighWinStreak',
        'setValue',
        '30860728vRGUBA',
        'Functions',
        'zPNfs',
        'wdbShow',
        'YHvOj',
        'prototype',
        'offsetTop',
        'advancedStopOnWins',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        'AUyYE',
        'cUHXt',
        'advancedChance',
        'tzPSN',
        'csXSV',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'advancedBetHighOnProfitCheck',
        '0:0:0:0',
        'tfVJC',
        'wjZtR',
        'wdbMenuMode',
        'Log',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'nWLYo',
        'preventDefault',
        'EMWgg',
        'NSbgD',
        'showInfo\x20OK',
        'chance',
        'result',
        'MlqqZ',
        'udmZp',
        'uKsWD',
        'ylpRp',
        'roll',
        'vpDdj',
        '$1=$1-$2\x20',
        'VQmSA',
        'QAhcN',
        'pcFvl',
        'filter',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'wdbBalance',
        'ZGnlA',
        'closest',
        'PCqrY',
        'casino=\x22',
        '<input\x20id=\x22bethigh',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'MVxVh',
        'xnSjC',
        'oUFxG',
        'reset',
        'IyzRA',
        'hoJoc',
        'borderColor',
        'dps',
        'kbuvu',
        'sQRhx',
        'hostname',
        'save',
        'eLpCG',
        'youcF',
        'INPUT',
        'qpttt',
        'Vaxqf',
        'gYqBv',
        'profit',
        'odCZh',
        '</option>',
        'JQqsA',
        'advancedMultiOnWin',
        'wdbPercentProfit',
        'KhnCM',
        'wdbMaxRows',
        'wdbLosses',
        '6|5|3|2|1|0|4',
        'advancedChanceOnWin',
        '#fff',
        'saTnw',
        'PBQRw',
        'lloQC',
        '9388TAHlay',
        'defineProperty',
        'files',
        'wVfAz',
        'random',
        'ZYqzG',
        'jiuCY',
        'xNgZD',
        'display',
        'vXSAo',
        'aNzYB',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'wdbWrapFunctions',
        'chart',
        'wdbMaxProfit',
        'GPYPp',
        'RrnvA',
        'YQYxm',
        'outside',
        'UcqaD',
        'dhPZV',
        'IWVTc',
        'Script\x20Name:\x20',
        'KUlVX',
        'toUTCString',
        '3|2|4|1|0',
        'JevSl',
        'zdJQC',
        'cpGId',
        'rODor',
        'return\x20bethigh',
        'log-',
        'zRhmT',
        'color',
        'wTLQt',
        'classic',
        '.wdb-stats\x20div\x20li',
        'jlrBR',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'rvaNf',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'wdbToggleShow',
        'PnKzp',
        '.json',
        '#wdbHistory',
        '380px',
        'LAQEG',
        'iiMrS',
        'jSSnn',
        'AeJjW',
        '\x0a\x20\x20\x20\x20bets=',
        '9hxUofc',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'wdbLoader\x20ok',
        'hIMoH',
        'ODprG',
        '_maxRows',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'trim',
        'kqKjY',
        'xUIEk',
        'ylqXL',
        'amount',
        'advancedStopOnLoseCheck',
        'lua',
        'IRHnx',
        'EGhcW',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'resetChart',
        'NYvMl',
        'key',
        'ibUBc',
        'EMiun',
        '5px',
        'wdbStartButton',
        'toUpperCase',
        'FyZYh',
        'gkzeJ',
        'red',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'qUOxT',
        'UCVZz',
        'crZgl',
        'ajFaJ',
        'GfqWn',
        'PZvfT',
        'dfSWY',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'wdbBets',
        'floor',
        'yEGFT',
        'YtDQU',
        'OReUQ',
        'iVoNi',
        'not\x20',
        'iPBss',
        'jDjXh',
        'return\x20chance',
        'SzSVU',
        'plinko',
        'BZNgA',
        'csnrM',
        'dVZWt',
        'OoCLV',
        'PMLrY',
        'Stop\x20on\x20current\x20streak\x20',
        'querySelector',
        'ogjyi',
        'TBhUK',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'advancedMultiOnLoseBets',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'prepend',
        'wdbLog',
        '0|3|5|2|4|1',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'UUgUP',
        'wdbHighLoseStreak',
        '\x20at\x20',
        'ZOzIz',
        'FQKlm',
        'text',
        'text/plain;\x20charset=utf-8',
        'MHegs',
        'between',
        'wdbStopOnWinButton',
        '\x20to\x20win,\x20',
        'yvGMP',
        'wdbSpeed',
        'chance2',
        'createElement',
        '\x0a\x20\x20\x20\x20previousbet=',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        '#ffc0cb',
        'insertBefore',
        'EGafo',
        'rows',
        'toLowerCase',
        'uARmJ',
        'updateStats\x20ok',
        'wdbToggleLive',
        'codDJ',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'getComputedStyle',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'removeChild',
        'ZcOWY',
        'clientX',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'advancedChanceOnLose',
        'WtRKJ',
        'return\x20plinkoRow',
        'render',
        '%\x20chance\x20to\x20win,\x20',
        'flex',
        'fIElL',
        'fjNTQ',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        '\x0a\x20\x20\x20\x20maxprofit=',
        '0|1|3|4|2|5',
        'ilQOx',
        'yJZaV',
        'nHaxO',
        'wdbHeader',
        'Tips',
        'deleteH',
        'DTiyx',
        'weNzJ',
        'byxRU',
        'xYZWo',
        'lNnIo',
        'data',
        'nKttU',
        'pgDrV',
        '350px',
        'JqTwE',
        'resize',
        '644958msCjPY',
        'xleGJ',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'XpXkQ',
        'riBwM',
        'hJUTF',
        'chance4',
        'AZkxN',
        'lineColor',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'ZITpa',
        'jrtlE',
        'wdbJSMode',
        'wdbMaxBalance',
        '#000',
        'return\x20plinkoRisk',
        'width',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'wdbWins',
        'slice',
        'dIKms',
        'NMqUM',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'shift',
        'mqIlc',
        'LTkde',
        'UFPpi',
        'VWcca',
        'theme',
        'line',
        'lCgsJ',
        'goECW',
        'NFUiF',
        'advancedStopOnWinsCheck',
        'XYKDW',
        'phQnR',
        'antiquewhite',
        'white',
        'Target',
        'Wcoxu',
        'clear',
        'ZopOW',
        'stop',
        'nfRZu',
        'push',
        'innerHTML',
        'backgroundColor',
        'OVZfs',
        'CltAP',
        'KoRRP',
        'Tyxjk',
        'xEktR',
        'lHTdn',
        'bBtms',
        'RkuQj',
        'JbaXx',
        'return\x20chance1',
        'updateLua\x20done',
        'mGbKP',
        'addEventListener',
        'tRxce',
        'Esmgb',
        'return\x20chance3',
        '\x0a\x20\x20\x20\x20minprofit=',
        'wdb-bot-position',
        'isContentEditable',
        'DqWWR',
        'wdb',
        'innerHeight',
        'calc(100vh\x20-\x2060px)',
        'setOption',
        'keydown',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'advanced',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'iihPA',
        'advancedBaseBet',
        'acblv',
        'script',
        '8438738uoUESO',
        'RQHhk',
        'Chance4',
        'INkNt',
        'head',
        'pgXqe',
        'mJfNR',
        'SyebX',
        'length',
        'high',
        'CJYKN',
        'wdbCurrentStreak',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '5|2|4|0|3|1',
        'ZBBUM'
    ];
    _0x3193 = function () {
        return _0xc39a76;
    };
    return _0x3193();
}
async function wdbCreateUI() {
    const _0x155d5f = _0x4ceade, _0x229e89 = {
            'NMqUM': function (_0x41a98a, _0x227fdf) {
                return _0x41a98a - _0x227fdf;
            },
            'KWYlr': function (_0x5eab3c, _0x3bd8b9) {
                return _0x5eab3c + _0x3bd8b9;
            },
            'GOeLU': _0x155d5f(0x2e5),
            'iihPA': function (_0x4732af, _0x51c807) {
                return _0x4732af === _0x51c807;
            },
            'ElkKA': function (_0x2eec1e) {
                return _0x2eec1e();
            },
            'mqIlc': function (_0x437038, _0x267661) {
                return _0x437038 === _0x267661;
            },
            'EMiun': _0x155d5f(0x483),
            'iPBss': function (_0x59f599, _0x3a9347) {
                return _0x59f599 === _0x3a9347;
            },
            'IYXFk': '.CodeMirror',
            'wzBzK': function (_0x3a938f, _0x53e152) {
                return _0x3a938f / _0x53e152;
            },
            'pgDrV': function (_0x6e7fe8, _0x3b30af) {
                return _0x6e7fe8 - _0x3b30af;
            },
            'lGCDB': function (_0x2fc2ab, _0x38615d) {
                return _0x2fc2ab === _0x38615d;
            },
            'jXRax': function (_0x501bc0) {
                return _0x501bc0();
            },
            'VNmBT': function (_0x23125d, _0xc47fb2) {
                return _0x23125d / _0xc47fb2;
            },
            'KhnCM': function (_0x51d998, _0x33ae01) {
                return _0x51d998 - _0x33ae01;
            },
            'PnKzp': 'div',
            'zWELZ': 'wdb',
            'kZpxw': function (_0x2452ab) {
                return _0x2452ab();
            },
            'QkBMy': 'wdbHeader',
            'fTklL': _0x155d5f(0x29c),
            'tRxce': _0x155d5f(0x254),
            'vhIZi': _0x155d5f(0x31a),
            'nRrbH': _0x155d5f(0x3d4),
            'TFIoN': _0x155d5f(0x3f4),
            'xJBtc': _0x155d5f(0x405),
            'AzNTB': _0x155d5f(0x1e4),
            'MAffk': 'wdbScriptBoxJS',
            'qNSes': 'javascript',
            'VbyMw': _0x155d5f(0x393),
            'udmZp': _0x155d5f(0x351),
            'wiEmt': _0x155d5f(0x411),
            'iqYzD': _0x155d5f(0x4a2),
            'rUnKq': 'wdbWrapTips',
            'NyRIU': _0x155d5f(0x3b7),
            'JRyUb': _0x155d5f(0x3d0),
            'WbfJs': _0x155d5f(0x35a),
            'UmCfU': _0x155d5f(0x2c3),
            'DmHJd': _0x155d5f(0x41e),
            'xUIEk': _0x155d5f(0x372)
        }, _0x4e6579 = document['createElement'](_0x229e89[_0x155d5f(0x1ce)]);
    _0x4e6579['id'] = _0x155d5f(0x3cb), _0x4e6579['innerHTML'] = wdbUI, document['body'][_0x155d5f(0x214)](_0x4e6579);
    const _0x441b95 = document[_0x155d5f(0x341)](_0x229e89['zWELZ']);
    let _0x35d606 = 0x0, _0x1ce758 = 0x0, _0x48adf9 = 0x0, _0x15e33a = 0x0;
    _0x229e89[_0x155d5f(0x419)](loadSavedPosition), _0x441b95[_0x155d5f(0x38a)]['top'] = previousPosition[_0x155d5f(0x3b2)], _0x441b95[_0x155d5f(0x38a)][_0x155d5f(0x381)] = previousPosition[_0x155d5f(0x381)], _0x441b95[_0x155d5f(0x38a)][_0x155d5f(0x40a)] = previousPosition[_0x155d5f(0x40a)];
    function _0x4588a3(_0x49b56f) {
        const _0x33ec23 = _0x155d5f, _0x2a3bd4 = _0x33ec23(0x216)['split']('|');
        let _0x322d42 = 0x0;
        while (!![]) {
            switch (_0x2a3bd4[_0x322d42++]) {
            case '0':
                _0x49b56f = _0x49b56f || window[_0x33ec23(0x3be)];
                continue;
            case '1':
                document[_0x33ec23(0x2ca)] = _0x3041d2;
                continue;
            case '2':
                _0x15e33a = _0x49b56f[_0x33ec23(0x303)];
                continue;
            case '3':
                _0x49b56f[_0x33ec23(0x45c)]();
                continue;
            case '4':
                document[_0x33ec23(0x432)] = _0x4c8750;
                continue;
            case '5':
                _0x48adf9 = _0x49b56f[_0x33ec23(0x237)];
                continue;
            }
            break;
        }
    }
    function _0x3041d2(_0x4f983a) {
        const _0x505e89 = _0x155d5f;
        _0x4f983a = _0x4f983a || window['event'], _0x4f983a['preventDefault'](), _0x35d606 = _0x229e89[_0x505e89(0x26a)](_0x48adf9, _0x4f983a['clientX']), _0x1ce758 = _0x15e33a - _0x4f983a[_0x505e89(0x303)], _0x48adf9 = _0x4f983a[_0x505e89(0x237)], _0x15e33a = _0x4f983a[_0x505e89(0x303)];
        let _0x36415b = _0x229e89[_0x505e89(0x26a)](_0x441b95[_0x505e89(0x44b)], _0x1ce758), _0x4f4499 = _0x229e89[_0x505e89(0x26a)](_0x441b95[_0x505e89(0x329)], _0x35d606);
        _0x441b95[_0x505e89(0x38a)][_0x505e89(0x3b2)] = _0x229e89[_0x505e89(0x369)](_0x36415b, 'px'), _0x441b95[_0x505e89(0x38a)][_0x505e89(0x381)] = _0x229e89[_0x505e89(0x369)](_0x4f4499, 'px');
    }
    function _0x4c8750() {
        const _0x5a965c = _0x155d5f, _0x1a17ee = document[_0x5a965c(0x341)](_0x229e89['GOeLU']);
        if (_0x1a17ee && _0x229e89[_0x5a965c(0x2a1)](_0x1a17ee[_0x5a965c(0x39d)], '▼')) {
            const _0x2b5cd0 = window[_0x5a965c(0x233)](_0x441b95);
            previousPosition[_0x5a965c(0x3b2)] = _0x441b95[_0x5a965c(0x38a)]['top'] || _0x2b5cd0[_0x5a965c(0x3b2)], previousPosition['left'] = _0x441b95[_0x5a965c(0x38a)][_0x5a965c(0x381)] || _0x2b5cd0[_0x5a965c(0x381)], _0x229e89[_0x5a965c(0x354)](savePosition);
        }
        document['onmouseup'] = null, document[_0x5a965c(0x2ca)] = null;
    }
    document['getElementById'](_0x229e89['QkBMy'])['onmousedown'] = _0x4588a3, document[_0x155d5f(0x290)](_0x229e89['fTklL'], function (_0x14927a) {
        const _0x1dac41 = _0x155d5f;
        if (_0x229e89[_0x1dac41(0x2a1)](_0x14927a[_0x1dac41(0x1ea)][_0x1dac41(0x22d)](), 'w')) {
            const _0x5dc043 = document['activeElement'], _0x313973 = _0x229e89[_0x1dac41(0x26d)](_0x5dc043[_0x1dac41(0x420)], _0x229e89[_0x1dac41(0x1ec)]) || _0x229e89[_0x1dac41(0x203)](_0x5dc043[_0x1dac41(0x420)], 'TEXTAREA') || _0x5dc043[_0x1dac41(0x296)] || _0x5dc043[_0x1dac41(0x470)](_0x229e89['IYXFk']);
            if (!_0x313973) {
                const _0x2115d7 = (window[_0x1dac41(0x299)] - _0x441b95[_0x1dac41(0x2c1)]) / 0x2, _0x9455c6 = _0x229e89['wzBzK'](_0x229e89[_0x1dac41(0x251)](window['innerWidth'], _0x441b95[_0x1dac41(0x2fd)]), 0x2);
                _0x441b95[_0x1dac41(0x38a)][_0x1dac41(0x3b2)] = _0x229e89[_0x1dac41(0x369)](_0x2115d7, 'px'), _0x441b95[_0x1dac41(0x38a)]['left'] = _0x9455c6 + 'px';
                const _0x4227dc = document[_0x1dac41(0x341)](_0x229e89['GOeLU']);
                _0x4227dc && _0x229e89['lGCDB'](_0x4227dc[_0x1dac41(0x39d)], '▼') && (previousPosition[_0x1dac41(0x3b2)] = _0x441b95[_0x1dac41(0x38a)][_0x1dac41(0x3b2)], previousPosition[_0x1dac41(0x381)] = _0x441b95['style'][_0x1dac41(0x381)], _0x229e89['jXRax'](savePosition));
            }
        }
    }), window['addEventListener'](_0x229e89[_0x155d5f(0x291)], function () {
        const _0x1bd2fa = _0x155d5f, _0x492e9d = document[_0x1bd2fa(0x341)](_0x229e89['GOeLU']);
        if (_0x492e9d && _0x492e9d['innerText'] === '▲') {
            const _0x4eaf6b = window['innerWidth'], _0x3b5a0b = 0x15e, _0x97b841 = _0x229e89['VNmBT'](_0x229e89[_0x1bd2fa(0x48d)](_0x4eaf6b, _0x3b5a0b), 0x2);
            _0x441b95[_0x1bd2fa(0x38a)]['left'] = _0x229e89['KWYlr'](_0x97b841, 'px');
        }
    });
    if (document[_0x155d5f(0x341)](_0x229e89[_0x155d5f(0x3a0)]))
        document[_0x155d5f(0x341)](_0x229e89['vhIZi'])[_0x155d5f(0x37a)]();
    if (document['getElementById'](_0x229e89[_0x155d5f(0x3a8)]))
        document[_0x155d5f(0x341)](_0x229e89[_0x155d5f(0x3a8)])['remove']();
    luaEditor = CodeMirror['fromTextArea'](document['getElementById'](_0x229e89['TFIoN']), {
        'theme': _0x229e89[_0x155d5f(0x3dd)],
        'mode': _0x229e89[_0x155d5f(0x330)],
        'lineNumbers': !![]
    }), luaEditor[_0x155d5f(0x480)](), jsEditor = CodeMirror[_0x155d5f(0x350)](document[_0x155d5f(0x341)](_0x229e89[_0x155d5f(0x428)]), {
        'theme': _0x229e89[_0x155d5f(0x3dd)],
        'mode': _0x229e89[_0x155d5f(0x2d2)],
        'lineNumbers': !![]
    }), jsEditor[_0x155d5f(0x480)](), document[_0x155d5f(0x341)](_0x155d5f(0x261))[_0x155d5f(0x38a)]['display'] = _0x155d5f(0x351), document[_0x155d5f(0x341)](_0x229e89['VbyMw'])[_0x155d5f(0x38a)][_0x155d5f(0x49e)] = _0x229e89[_0x155d5f(0x463)], document['getElementById']('wdbWrapLog')[_0x155d5f(0x38a)][_0x155d5f(0x49e)] = _0x229e89[_0x155d5f(0x463)], document[_0x155d5f(0x341)](_0x229e89[_0x155d5f(0x431)])['style'][_0x155d5f(0x49e)] = _0x155d5f(0x351), document['getElementById'](_0x229e89[_0x155d5f(0x41f)])['style']['display'] = _0x155d5f(0x351), document[_0x155d5f(0x341)](_0x229e89['rUnKq'])['style']['display'] = _0x229e89[_0x155d5f(0x463)], document[_0x155d5f(0x341)](_0x229e89['NyRIU'])['disabled'] = !![];
    const _0x4a9bfe = document[_0x155d5f(0x341)]('wdbOpenLUAScript');
    _0x4a9bfe['addEventListener'](_0x155d5f(0x35a), () => {
        const _0x8a234a = _0x155d5f;
        _0x4a9bfe[_0x8a234a(0x2ec)] = null;
    }), _0x4a9bfe['addEventListener']('change', async _0x1a3610 => {
        const _0x3d0985 = _0x155d5f, _0x3d0858 = await new Response(_0x1a3610[_0x3d0985(0x413)][_0x3d0985(0x498)][0x0])[_0x3d0985(0x21d)]();
        if (!_0x3d0858)
            return;
        luaEditor[_0x3d0985(0x444)](_0x3d0858);
    });
    const _0x764c8f = document['getElementById'](_0x229e89[_0x155d5f(0x300)]);
    return _0x764c8f[_0x155d5f(0x290)](_0x229e89['WbfJs'], () => {
        const _0x3ea47a = _0x155d5f;
        _0x764c8f[_0x3ea47a(0x2ec)] = null;
    }), _0x764c8f['addEventListener'](_0x229e89[_0x155d5f(0x3c7)], async _0x1d25f8 => {
        const _0x1d4e86 = _0x155d5f, _0x3f821e = await new Response(_0x1d25f8['target'][_0x1d4e86(0x498)][0x0])['text']();
        if (!_0x3f821e)
            return;
        jsEditor[_0x1d4e86(0x444)](_0x3f821e);
    }), chart = new Chart(_0x229e89[_0x155d5f(0x37f)], ![], 0x64), _0x229e89[_0x155d5f(0x1e0)];
}
async function wdbLoader(_0xa82f9b) {
    const _0x10eb0c = _0x4ceade, _0x507985 = {
            'wzlqg': _0x10eb0c(0x234),
            'CJYKN': _0x10eb0c(0x430),
            'OVZfs': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
            'YsWEe': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
            'MAqfm': _0x10eb0c(0x1f3),
            'YtDQU': function (_0xf17df0, _0x1d74ac) {
                return _0xf17df0 + _0x1d74ac;
            },
            'PCqrY': _0x10eb0c(0x332),
            'YzWBT': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
            'pSSNQ': function (_0x17ec45, _0x193045) {
                return _0x17ec45(_0x193045);
            },
            'xEktR': function (_0x9daf51) {
                return _0x9daf51();
            },
            'pwJud': function (_0x3262d9) {
                return _0x3262d9();
            },
            'INOUo': function (_0x2b44a9, _0x420fb4) {
                return _0x2b44a9 === _0x420fb4;
            },
            'VjAbg': _0x10eb0c(0x321),
            'OMGAv': _0x10eb0c(0x207),
            'ZITpa': _0x10eb0c(0x3d2),
            'EGhcW': function (_0x2746b3, _0x55bf15) {
                return _0x2746b3 === _0x55bf15;
            },
            'ltQXL': _0x10eb0c(0x2ce),
            'WKLgD': function (_0x3ae6fd, _0x1e9c01) {
                return _0x3ae6fd(_0x1e9c01);
            },
            'IRHnx': _0x10eb0c(0x1d9)
        }, _0x527754 = [
            _0x507985[_0x10eb0c(0x2ba)],
            _0x507985[_0x10eb0c(0x2af)],
            _0x507985[_0x10eb0c(0x284)],
            _0x507985[_0x10eb0c(0x396)],
            _0x507985['MAqfm'],
            WDB_LIB + _0x10eb0c(0x314),
            _0x507985[_0x10eb0c(0x1ff)](WDB_LIB, _0x10eb0c(0x2c6))
        ], _0x4c577a = [
            _0x507985[_0x10eb0c(0x471)],
            _0x507985[_0x10eb0c(0x2fb)]
        ];
    for (const _0x545dc7 of _0x527754) {
        await _0xa82f9b[_0x10eb0c(0x2c2)](_0x545dc7);
    }
    for (const _0x493bad of _0x4c577a) {
        await _0xa82f9b['loadCSS'](_0x493bad);
    }
    await _0x507985[_0x10eb0c(0x2c0)](beforeWork, _0xa82f9b), await _0x507985[_0x10eb0c(0x288)](wdbCreateUI), await _0x507985[_0x10eb0c(0x288)](getListCoin), await _0x507985['pwJud'](initLua);
    if (_0x507985['INOUo'](game, _0x507985[_0x10eb0c(0x31f)]))
        luaEditor['setValue'](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript), document[_0x10eb0c(0x20e)](_0x10eb0c(0x3d2))[_0x10eb0c(0x43d)] = !![];
    else {
        if (_0x507985[_0x10eb0c(0x3b1)](game, _0x507985[_0x10eb0c(0x2d5)]))
            luaEditor[_0x10eb0c(0x444)](plinkoLuaScript), jsEditor[_0x10eb0c(0x444)](plinkoJsScript), document['querySelector'](_0x507985[_0x10eb0c(0x25f)])[_0x10eb0c(0x43d)] = !![];
        else
            _0x507985[_0x10eb0c(0x1e6)](game, _0x507985[_0x10eb0c(0x2db)]) && (luaEditor[_0x10eb0c(0x444)](kenoLuaScript), jsEditor['setValue'](kenoJsScript), document[_0x10eb0c(0x20e)](_0x507985[_0x10eb0c(0x25f)])[_0x10eb0c(0x43d)] = !![]);
    }
    return _0x507985['WKLgD'](log, _0x10eb0c(0x301)), _0x507985[_0x10eb0c(0x1e5)];
}
function toggleNav(_0x3559c7) {
    const _0x2c0172 = _0x4ceade, _0x10e011 = {
            'xRjnj': function (_0x1a6707, _0x47775e) {
                return _0x1a6707 === _0x47775e;
            },
            'dwDOo': _0x2c0172(0x43b),
            'ylpRp': _0x2c0172(0x351),
            'MoTtO': _0x2c0172(0x339),
            'KZrVX': _0x2c0172(0x459),
            'dhPZV': 'Variables',
            'OOGog': _0x2c0172(0x446),
            'ZIvYK': _0x2c0172(0x248)
        }, _0x6b9fd1 = [
            _0x10e011[_0x2c0172(0x401)],
            _0x10e011[_0x2c0172(0x2f5)],
            _0x10e011[_0x2c0172(0x1b8)],
            _0x10e011['OOGog'],
            _0x10e011[_0x2c0172(0x2c4)]
        ];
    _0x6b9fd1[_0x2c0172(0x356)](_0x5812fe => {
        const _0x144037 = _0x2c0172, _0x407c7f = _0x10e011[_0x144037(0x3de)](_0x5812fe['toLowerCase'](), _0x3559c7) ? _0x10e011['dwDOo'] : _0x10e011[_0x144037(0x465)];
        document['getElementById'](_0x144037(0x3cb) + _0x5812fe)['style'][_0x144037(0x49e)] = _0x407c7f, document[_0x144037(0x341)](_0x144037(0x448) + _0x5812fe)[_0x144037(0x43d)] = _0x10e011['xRjnj'](_0x407c7f, _0x144037(0x43b));
    });
}
function toggleShow(_0x12c2e7) {
    const _0x2d89a7 = _0x4ceade, _0x3db542 = {
            'JQqsA': function (_0x20c04d, _0x3938f8) {
                return _0x20c04d + _0x3938f8;
            },
            'anDrR': function (_0xc7e517, _0x9e8dd0) {
                return _0xc7e517(_0x9e8dd0);
            }
        }, _0x1a5efa = document[_0x2d89a7(0x341)](_0x2d89a7(0x1cd) + _0x3db542[_0x2d89a7(0x48a)](_0x12c2e7[_0x2d89a7(0x409)](0x0)[_0x2d89a7(0x1ef)](), _0x12c2e7[_0x2d89a7(0x268)](0x1)))[_0x2d89a7(0x323)];
    _0x3db542[_0x2d89a7(0x3f9)](selectFunction, _0x1a5efa ? _0x2d89a7(0x2fe) + _0x12c2e7 : _0x2d89a7(0x31b) + _0x12c2e7);
}
function toggleLive(_0x412322) {
    const _0x1ca3cb = _0x4ceade, _0x323d82 = {
            'HBwsb': function (_0x3f66dc, _0x25c1af) {
                return _0x3f66dc + _0x25c1af;
            },
            'GiWrX': function (_0x534a57, _0x25b043) {
                return _0x534a57(_0x25b043);
            },
            'AKqHP': _0x1ca3cb(0x429),
            'cUHXt': _0x1ca3cb(0x27f)
        }, _0x1cea9b = document[_0x1ca3cb(0x341)](_0x1ca3cb(0x230) + _0x323d82[_0x1ca3cb(0x30f)](_0x412322['charAt'](0x0)[_0x1ca3cb(0x1ef)](), _0x412322[_0x1ca3cb(0x268)](0x1)))[_0x1ca3cb(0x323)];
    _0x323d82[_0x1ca3cb(0x302)](selectFunction, '' + (_0x1cea9b ? _0x323d82[_0x1ca3cb(0x35b)] : _0x323d82[_0x1ca3cb(0x44f)]) + _0x412322);
}
function selectFunction(_0x142b46) {
    const _0x53e603 = _0x4ceade, _0xb147f2 = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x53e603(0x478)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog(_0x53e603(0x27d)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x53e603(0x27f)),
            'startchart': () => toggleChart(_0x53e603(0x429)),
            'stophistory': () => toggleHistory(_0x53e603(0x27f)),
            'starthistory': () => toggleHistory(_0x53e603(0x429)),
            'stoplog': () => toggleLog('stop'),
            'startlog': () => toggleLog(_0x53e603(0x429)),
            'hidestats': () => toggleStats('hide'),
            'showstats': () => toggleStats(_0x53e603(0x2fe)),
            'hidechart': () => toggleChart('hide'),
            'showchart': () => toggleChart(_0x53e603(0x2fe)),
            'hidehistory': () => toggleHistory(_0x53e603(0x31b)),
            'showhistory': () => toggleHistory(_0x53e603(0x2fe))
        };
    if (_0xb147f2[_0x142b46])
        _0xb147f2[_0x142b46]();
}
function toggleMode(_0xd14d53) {
    const _0x37c7d4 = _0x4ceade, _0x397634 = {
            'dfSWY': function (_0x12753c, _0x336481) {
                return _0x12753c === _0x336481;
            },
            'JevSl': _0x37c7d4(0x321),
            'Lmxly': _0x37c7d4(0x2ce),
            'UCVZz': 'wdbLUAMode',
            'SrrRT': 'wdbJSMode',
            'fIElL': 'lua',
            'KoRRP': _0x37c7d4(0x43b),
            'RbxWz': _0x37c7d4(0x351),
            'zdJQC': function (_0x42a293, _0x5a0447) {
                return _0x42a293 === _0x5a0447;
            },
            'ybjLG': function (_0x4411e9, _0x12dfbf) {
                return _0x4411e9 === _0x12dfbf;
            },
            'vXSAo': _0x37c7d4(0x29e)
        };
    mode = _0xd14d53;
    if (_0x397634['dfSWY'](game, _0x397634[_0x37c7d4(0x1be)]))
        luaEditor[_0x37c7d4(0x444)](rangediceLuaScript), jsEditor[_0x37c7d4(0x444)](rangediceJsScript);
    else {
        if (_0x397634[_0x37c7d4(0x1fa)](game, 'plinko'))
            luaEditor[_0x37c7d4(0x444)](plinkoLuaScript), jsEditor[_0x37c7d4(0x444)](plinkoJsScript);
        else
            _0x397634['dfSWY'](game, _0x397634[_0x37c7d4(0x3ec)]) && (luaEditor['setValue'](kenoLuaScript), jsEditor[_0x37c7d4(0x444)](kenoJsScript));
    }
    const _0x4d2568 = document[_0x37c7d4(0x341)](_0x397634[_0x37c7d4(0x1f5)]), _0x515b81 = document[_0x37c7d4(0x341)](_0x397634['SrrRT']), _0x2e7177 = document['getElementById'](_0x37c7d4(0x393));
    _0x4d2568[_0x37c7d4(0x38a)][_0x37c7d4(0x49e)] = _0x397634[_0x37c7d4(0x1fa)](_0xd14d53, _0x397634[_0x37c7d4(0x23f)]) ? _0x397634[_0x37c7d4(0x286)] : _0x397634[_0x37c7d4(0x3f0)], _0x515b81['style']['display'] = _0x397634[_0x37c7d4(0x1bf)](_0xd14d53, 'js') ? _0x37c7d4(0x43b) : _0x397634['RbxWz'], _0x2e7177[_0x37c7d4(0x38a)][_0x37c7d4(0x49e)] = _0x397634[_0x37c7d4(0x36a)](_0xd14d53, _0x397634[_0x37c7d4(0x49f)]) ? _0x397634[_0x37c7d4(0x286)] : _0x37c7d4(0x351), luaEditor[_0x37c7d4(0x249)](), jsEditor['deleteH']();
}
function toggleStats(_0x50da81) {
    const _0xf24e8c = _0x4ceade, _0x1fc399 = {
            'TjXup': function (_0x46a8ac, _0x1e88f0) {
                return _0x46a8ac === _0x1e88f0;
            },
            'PhMXq': 'hide',
            'IWcTm': 'none',
            'tCcHR': _0xf24e8c(0x23e),
            'uARmJ': _0xf24e8c(0x3a2)
        }, _0x3add19 = _0x1fc399[_0xf24e8c(0x3dc)](_0x50da81, _0x1fc399[_0xf24e8c(0x363)]) ? _0x1fc399[_0xf24e8c(0x317)] : _0x1fc399[_0xf24e8c(0x3af)];
    document[_0xf24e8c(0x341)](_0x1fc399[_0xf24e8c(0x22e)])[_0xf24e8c(0x38a)][_0xf24e8c(0x49e)] = _0x3add19;
}
function toggleChart(_0x547848) {
    const _0x145ed5 = _0x4ceade, _0xd40181 = {
            'BeZOd': _0x145ed5(0x41e),
            'tTwQt': _0x145ed5(0x31b),
            'nKttU': _0x145ed5(0x351),
            'youcF': _0x145ed5(0x2fe),
            'XzfFy': _0x145ed5(0x43b),
            'xDFZY': _0x145ed5(0x27f),
            'lHTdn': _0x145ed5(0x429),
            'cowUu': 'reset'
        }, _0x1ac17a = document[_0x145ed5(0x341)](_0xd40181['BeZOd']), _0x15254d = document['getElementById']('wdbWrapHistory');
    switch (_0x547848) {
    case _0xd40181['tTwQt']:
        _0x1ac17a['style'][_0x145ed5(0x49e)] = _0xd40181[_0x145ed5(0x250)], _0x15254d['style'][_0x145ed5(0x2e7)] = _0x145ed5(0x1d1);
        break;
    case _0xd40181[_0x145ed5(0x482)]:
        _0x1ac17a[_0x145ed5(0x38a)][_0x145ed5(0x49e)] = _0xd40181[_0x145ed5(0x2d1)], _0x15254d[_0x145ed5(0x38a)][_0x145ed5(0x2e7)] = _0x145ed5(0x2bb);
        break;
    case _0xd40181['xDFZY']:
        stopChart = !![];
        break;
    case _0xd40181[_0x145ed5(0x289)]:
        stopChart = ![];
        break;
    case _0xd40181[_0x145ed5(0x30d)]:
        betsChart = 0x0, profitChart = 0x0, chart[_0x145ed5(0x1e8)]();
        break;
    }
}
function toggleHistory(_0x2db015) {
    const _0x50c6db = _0x4ceade, _0x2f8135 = {
            'wVfAz': _0x50c6db(0x3f1),
            'XdMOg': _0x50c6db(0x41e),
            'ADqcv': _0x50c6db(0x31b),
            'qUOxT': _0x50c6db(0x351),
            'ZOzIz': '380px',
            'neKVr': _0x50c6db(0x2fe),
            'hoJoc': 'block',
            'CkpFH': _0x50c6db(0x27f),
            'riBwM': _0x50c6db(0x429),
            'UUgUP': _0x50c6db(0x27d)
        }, _0xd75caf = document[_0x50c6db(0x341)](_0x2f8135[_0x50c6db(0x499)]), _0x4637ca = document[_0x50c6db(0x341)](_0x2f8135[_0x50c6db(0x34e)]);
    switch (_0x2db015) {
    case _0x2f8135['ADqcv']:
        _0xd75caf['style']['display'] = _0x2f8135[_0x50c6db(0x1f4)], _0x4637ca[_0x50c6db(0x38a)][_0x50c6db(0x2e7)] = _0x2f8135[_0x50c6db(0x21b)];
        break;
    case _0x2f8135['neKVr']:
        _0xd75caf[_0x50c6db(0x38a)]['display'] = _0x2f8135[_0x50c6db(0x47a)], _0x4637ca[_0x50c6db(0x38a)][_0x50c6db(0x2e7)] = _0x50c6db(0x2bb);
        break;
    case _0x2f8135[_0x50c6db(0x424)]:
        stopHistory = !![];
        break;
    case _0x2f8135[_0x50c6db(0x259)]:
        stopHistory = ![];
        break;
    case _0x2f8135[_0x50c6db(0x218)]:
        _0xd75caf['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x2eb087) {
    const _0x4b2c25 = _0x4ceade, _0x7e8118 = {
            'nFamQ': _0x4b2c25(0x27f),
            'HXgHH': _0x4b2c25(0x429),
            'CuTNj': _0x4b2c25(0x215)
        };
    switch (_0x2eb087) {
    case _0x7e8118['nFamQ']:
        stopLog = !![];
        break;
    case _0x7e8118['HXgHH']:
        stopLog = ![];
        break;
    case _0x4b2c25(0x27d):
        document[_0x4b2c25(0x341)](_0x7e8118['CuTNj'])[_0x4b2c25(0x282)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x547942 = _0x4ceade, _0x1fbced = {
            'rODor': _0x547942(0x416),
            'kwbwD': function (_0x1dc845, _0x520546) {
                return _0x1dc845(_0x520546);
            },
            'gmMtM': _0x547942(0x491),
            'wpdvc': _0x547942(0x34b),
            'tfVJC': _0x547942(0x3b5),
            'uzwcM': function (_0x39783d, _0x70c8b8) {
                return _0x39783d(_0x70c8b8);
            },
            'cUMjQ': _0x547942(0x239),
            'yHAWa': function (_0x2abd0a, _0x30d96c) {
                return _0x2abd0a(_0x30d96c);
            },
            'uKsWD': _0x547942(0x36f),
            'kbuvu': function (_0x149df5, _0x4298df) {
                return _0x149df5(_0x4298df);
            },
            'dqtnv': _0x547942(0x48b),
            'gkzeJ': function (_0x5a6d76, _0x196c16) {
                return _0x5a6d76(_0x196c16);
            },
            'UowAs': 'advancedMultiOnWinBets',
            'JbaXx': _0x547942(0x414),
            'jjstu': _0x547942(0x3a5),
            'kqKjY': _0x547942(0x212),
            'wjZtR': _0x547942(0x3ff),
            'UcqaD': function (_0x5a06f0, _0x2382f8) {
                return _0x5a06f0 === _0x2382f8;
            },
            'ghSrM': _0x547942(0x454),
            'LeVhO': 'advancedBetHighOnProfit',
            'LpBTA': function (_0x113de4, _0x3255e4) {
                return _0x113de4 >= _0x3255e4;
            },
            'AMqNi': _0x547942(0x359),
            'MVxVh': function (_0x5023a1, _0x12b7a9) {
                return _0x5023a1(_0x12b7a9);
            },
            'NanGu': function (_0x59b34f, _0x1ed128) {
                return _0x59b34f >= _0x1ed128;
            },
            'xYZWo': function (_0x4decdd) {
                return _0x4decdd();
            },
            'HdWmv': _0x547942(0x387),
            'EIoyr': function (_0x493637, _0x40ebca) {
                return _0x493637(_0x40ebca);
            },
            'csXSV': function (_0x15dbb8) {
                return _0x15dbb8();
            },
            'bBtms': 'Stop\x20on\x20roll\x20number\x20',
            'eRwXB': _0x547942(0x407),
            'hTUbk': function (_0x1b2814, _0x40c0ac) {
                return _0x1b2814(_0x40c0ac);
            },
            'MlqqZ': function (_0x487970, _0xe5d26c) {
                return _0x487970 > _0xe5d26c;
            },
            'GPYPp': function (_0x2a9eea) {
                return _0x2a9eea();
            },
            'uLsgU': function (_0x10f8ae, _0x3f4d8e) {
                return _0x10f8ae(_0x3f4d8e);
            },
            'yLyXg': function (_0x2d00da, _0x3deb12) {
                return _0x2d00da + _0x3deb12;
            },
            'VJxlN': function (_0x57161b, _0x407aca) {
                return _0x57161b <= _0x407aca;
            },
            'qNGId': function (_0x412438, _0x109470) {
                return _0x412438(_0x109470);
            },
            'NYvMl': function (_0x4a1e90, _0x39a5ba) {
                return _0x4a1e90 + _0x39a5ba;
            },
            'ajFaJ': 'advancedStopOnBetsCheck',
            'dsZJU': function (_0x2fe365, _0xcc5759) {
                return _0x2fe365(_0xcc5759);
            },
            'cTXtj': function (_0x7af32, _0xa08871) {
                return _0x7af32(_0xa08871);
            },
            'LYerM': _0x547942(0x2d4),
            'DUDLZ': _0x547942(0x37b),
            'jHpzS': _0x547942(0x44c),
            'jlrBR': function (_0x40fce8, _0xa7c095) {
                return _0x40fce8 + _0xa7c095;
            },
            'SLXGc': _0x547942(0x375),
            'yEGFT': function (_0x3feb2c, _0x235eee) {
                return _0x3feb2c(_0x235eee);
            },
            'MSuvF': function (_0x33e9a8, _0x5906c6) {
                return _0x33e9a8 >= _0x5906c6;
            },
            'ZGnlA': function (_0xf13e56, _0x4b2fc6) {
                return _0xf13e56(_0x4b2fc6);
            },
            'nBtNh': _0x547942(0x36b),
            'ibUBc': _0x547942(0x2f8),
            'ubBGa': 'Stop\x20on\x20profit\x20',
            'mNWiU': _0x547942(0x43a),
            'IWVTc': _0x547942(0x2b9),
            'ODprG': function (_0xc6eeb3, _0x35f210) {
                return _0xc6eeb3 >= _0x35f210;
            },
            'ZcOWY': function (_0x5e7465) {
                return _0x5e7465();
            },
            'crZgl': _0x547942(0x3e4),
            'jlick': _0x547942(0x361),
            'ZWXuY': function (_0x786968, _0x1e4a15) {
                return _0x786968(_0x1e4a15);
            },
            'xnSjC': function (_0x536ec9, _0xee239b) {
                return _0x536ec9 === _0xee239b;
            },
            'KUlVX': function (_0x4a1a0a, _0x34d6e7) {
                return _0x4a1a0a % _0x34d6e7;
            },
            'FyZYh': function (_0x342640, _0x3f841a) {
                return _0x342640 % _0x3f841a;
            },
            'AeJjW': _0x547942(0x2f7),
            'UHhIV': function (_0x37a413, _0x465172) {
                return _0x37a413(_0x465172);
            },
            'DbbdN': function (_0x542caf, _0x58f38d) {
                return _0x542caf % _0x58f38d;
            },
            'mcjTM': function (_0x2344f4, _0x1f503e) {
                return _0x2344f4 % _0x1f503e;
            },
            'DTiyx': function (_0x36758b, _0xec5431) {
                return _0x36758b % _0xec5431;
            },
            'LBNCL': _0x547942(0x3b6)
        };
    chance = Number(document[_0x547942(0x341)](_0x547942(0x450))['value']);
    const _0x48527d = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x1c1)])['checked'], _0x27ea96 = _0x48527d ? _0x1fbced[_0x547942(0x309)](Number, document[_0x547942(0x341)](_0x1fbced[_0x547942(0x3ce)])[_0x547942(0x2ec)]) : chance, _0x1a9116 = _0x1fbced[_0x547942(0x309)](Number, document['getElementById'](_0x1fbced[_0x547942(0x2b5)])[_0x547942(0x2ec)]), _0x3f6b8a = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x456)])[_0x547942(0x323)], _0x5b030c = _0x3f6b8a ? _0x1fbced['uzwcM'](Number, document[_0x547942(0x341)](_0x1fbced['cUMjQ'])[_0x547942(0x2ec)]) : chance, _0x4186f1 = _0x1fbced[_0x547942(0x2ef)](Number, document[_0x547942(0x341)]('advancedChanceOnLoseBets')[_0x547942(0x2ec)]), _0x149211 = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x464)])[_0x547942(0x323)], _0x5f3c08 = _0x149211 ? _0x1fbced[_0x547942(0x47d)](Number, document[_0x547942(0x341)](_0x1fbced[_0x547942(0x35f)])['value']) : 0x1, _0x4096c8 = _0x1fbced[_0x547942(0x1f1)](Number, document['getElementById'](_0x1fbced[_0x547942(0x36d)])[_0x547942(0x2ec)]), _0x223cb3 = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x28c)])[_0x547942(0x323)], _0x9f3fb8 = _0x223cb3 ? _0x1fbced[_0x547942(0x309)](Number, document['getElementById'](_0x1fbced[_0x547942(0x319)])[_0x547942(0x2ec)]) : 0x1, _0x4174d8 = Number(document[_0x547942(0x341)](_0x1fbced[_0x547942(0x1df)])[_0x547942(0x2ec)]), _0x44a61c = document['getElementById'](_0x1fbced[_0x547942(0x457)])[_0x547942(0x323)];
    if (_0x44a61c) {
        const _0x4ade6b = _0x1fbced['gkzeJ'](Number, document[_0x547942(0x341)](_0x547942(0x312))[_0x547942(0x2ec)]);
        if (_0x1fbced[_0x547942(0x1b7)](bets % _0x4ade6b, 0x0))
            bethigh = !bethigh;
    }
    const _0x2bb432 = document['getElementById'](_0x1fbced['ghSrM'])['checked'];
    if (_0x2bb432) {
        const _0x4ff225 = _0x1fbced[_0x547942(0x2ef)](Number, document[_0x547942(0x341)](_0x1fbced[_0x547942(0x2cf)])[_0x547942(0x2ec)]);
        if (_0x1fbced['LpBTA'](profit, _0x4ff225))
            bethigh = !bethigh;
    }
    const _0x326924 = document[_0x547942(0x341)](_0x1fbced['AMqNi'])[_0x547942(0x323)];
    if (_0x326924) {
        const _0x5ab4f3 = _0x1fbced[_0x547942(0x475)](Number, document['getElementById'](_0x547942(0x389))[_0x547942(0x2ec)]);
        if (_0x1fbced[_0x547942(0x30e)](profit, _0x5ab4f3))
            _0x1fbced[_0x547942(0x24d)](resetstats);
    }
    const _0x316ee6 = document['getElementById'](_0x1fbced[_0x547942(0x3b9)])[_0x547942(0x323)];
    if (_0x316ee6) {
        const _0x5b8e33 = _0x1fbced['EIoyr'](Number, document[_0x547942(0x341)](_0x547942(0x2d0))[_0x547942(0x2ec)]);
        if (lastBet[_0x547942(0x461)] === _0x5b8e33)
            _0x1fbced[_0x547942(0x452)](stop), _0x1fbced[_0x547942(0x309)](log, _0x1fbced[_0x547942(0x28a)] + _0x5b8e33);
    }
    const _0x3e0f10 = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x3bc)])['checked'];
    if (_0x3e0f10) {
        const _0x254dea = _0x1fbced[_0x547942(0x2f3)](Number, document[_0x547942(0x341)](_0x547942(0x38f))['value']);
        if (_0x1fbced[_0x547942(0x462)](_0x254dea, 0x0)) {
            if (currentstreak >= _0x254dea)
                _0x1fbced['GPYPp'](stop), _0x1fbced[_0x547942(0x365)](log, _0x1fbced[_0x547942(0x34c)]('Stop\x20on\x20current\x20streak\x20', _0x254dea));
        } else {
            if (_0x1fbced[_0x547942(0x3e2)](currentstreak, _0x254dea))
                stop(), _0x1fbced[_0x547942(0x3f3)](log, _0x1fbced[_0x547942(0x1e9)](_0x547942(0x20d), _0x254dea));
        }
    }
    const _0x340b6a = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x1f7)])[_0x547942(0x323)];
    if (_0x340b6a) {
        const _0x2a0c53 = _0x1fbced[_0x547942(0x3e5)](Number, document[_0x547942(0x341)]('advancedStopOnBets')['value']);
        if (bets >= _0x2a0c53)
            _0x1fbced[_0x547942(0x24d)](stop), _0x1fbced['cTXtj'](log, _0x1fbced[_0x547942(0x436)] + _0x2a0c53 + _0x1fbced['DUDLZ']);
    }
    const _0x375954 = document[_0x547942(0x341)](_0x547942(0x276))['checked'];
    if (_0x375954) {
        const _0x465a85 = _0x1fbced['EIoyr'](Number, document[_0x547942(0x341)](_0x1fbced[_0x547942(0x2f2)])['value']);
        if (winstreak >= _0x465a85)
            _0x1fbced['xYZWo'](stop), _0x1fbced[_0x547942(0x309)](log, _0x1fbced[_0x547942(0x1c9)]('Stop\x20on\x20', _0x465a85) + _0x1fbced[_0x547942(0x2cc)]);
    }
    const _0x2ee45a = document['getElementById'](_0x547942(0x1e3))[_0x547942(0x323)];
    if (_0x2ee45a) {
        const _0x2ce128 = _0x1fbced[_0x547942(0x1fe)](Number, document[_0x547942(0x341)]('advancedStopOnLose')['value']);
        if (_0x1fbced['MSuvF'](losestreak, _0x2ce128))
            stop(), _0x1fbced[_0x547942(0x46f)](log, _0x1fbced[_0x547942(0x34c)](_0x547942(0x2d4), _0x2ce128) + '\x20lose');
    }
    const _0x2ef63a = document['getElementById'](_0x1fbced[_0x547942(0x335)])[_0x547942(0x323)];
    if (_0x2ef63a) {
        const _0x4c387f = _0x1fbced['dsZJU'](Number, document['getElementById'](_0x1fbced[_0x547942(0x1eb)])['value']);
        if (profit >= _0x4c387f)
            _0x1fbced[_0x547942(0x4a5)](stop), _0x1fbced[_0x547942(0x309)](log, _0x1fbced[_0x547942(0x1e9)](_0x1fbced[_0x547942(0x2bd)], _0x4c387f));
    }
    const _0x275df6 = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x2c7)])[_0x547942(0x323)];
    if (_0x275df6) {
        const _0x4cb8f9 = Number(document[_0x547942(0x341)](_0x1fbced[_0x547942(0x1b9)])[_0x547942(0x2ec)]);
        if (_0x1fbced[_0x547942(0x1db)](balance, _0x4cb8f9))
            _0x1fbced[_0x547942(0x236)](stop), log(_0x1fbced[_0x547942(0x34c)](_0x1fbced[_0x547942(0x1f6)], _0x4cb8f9));
    }
    if (win) {
        const _0x32d63b = document[_0x547942(0x341)](_0x1fbced['jlick'])[_0x547942(0x323)];
        if (_0x32d63b) {
            const _0x83270d = _0x1fbced['ZWXuY'](Number, document['getElementById'](_0x547942(0x3e7))['value']);
            if (_0x1fbced[_0x547942(0x1b7)](winstreak % _0x83270d, 0x0))
                bethigh = !bethigh;
        }
        if (_0x1fbced[_0x547942(0x476)](_0x1fbced[_0x547942(0x1bb)](winstreak, _0x1a9116), 0x0))
            chance = _0x27ea96;
        if (_0x149211) {
            if (_0x1fbced[_0x547942(0x476)](_0x1fbced[_0x547942(0x1f0)](winstreak, _0x4096c8), 0x0))
                nextbet = previousbet * _0x5f3c08;
        } else
            nextbet = basebet;
    } else {
        const _0x19a413 = document[_0x547942(0x341)](_0x1fbced[_0x547942(0x1d5)])[_0x547942(0x323)];
        if (_0x19a413) {
            const _0x17147b = _0x1fbced[_0x547942(0x412)](Number, document[_0x547942(0x341)]('advancedBetHighOnLose')['value']);
            if (_0x1fbced[_0x547942(0x38d)](losestreak, _0x17147b) === 0x0)
                bethigh = !bethigh;
        }
        if (_0x1fbced[_0x547942(0x1b7)](_0x1fbced[_0x547942(0x364)](losestreak, _0x4186f1), 0x0))
            chance = _0x5b030c;
        if (_0x223cb3) {
            if (_0x1fbced[_0x547942(0x24a)](losestreak, _0x4174d8) === 0x0)
                nextbet = previousbet * _0x9f3fb8;
        } else
            nextbet = basebet;
    }
    return _0x1fbced[_0x547942(0x2e3)];
}
function changeCoin() {
    const _0xf586bc = _0x4ceade, _0x3d206d = {
            'RQHhk': 'wdbMenuCoin',
            'CPUtp': function (_0x2cb8cc) {
                return _0x2cb8cc();
            }
        };
    coin = document[_0xf586bc(0x341)](_0x3d206d[_0xf586bc(0x2a6)])[_0xf586bc(0x2ec)], currency = coin[_0xf586bc(0x22d)](), fengari['load'](_0xf586bc(0x3a9) + currency + '\x22')(), _0x3d206d[_0xf586bc(0x3b3)](checkbalance);
}
async function handleStats() {
    const _0x28267e = _0x4ceade, _0x265616 = {
            'vpDdj': function (_0x36d4a6, _0x196de2) {
                return _0x36d4a6 === _0x196de2;
            },
            'UxCrY': function (_0x2239f2) {
                return _0x2239f2();
            },
            'VBKEA': function (_0x335d71) {
                return _0x335d71();
            },
            'IlelV': function (_0x5e25ec, _0x49b7ea) {
                return _0x5e25ec && _0x49b7ea;
            },
            'NyQLZ': function (_0x140a50) {
                return _0x140a50();
            },
            'AcnrY': function (_0x56997d) {
                return _0x56997d();
            },
            'SewdQ': function (_0x36e231, _0x2345ef) {
                return _0x36e231(_0x2345ef);
            },
            'nWLYo': function (_0x4ed8b7, _0xb4351a) {
                return _0x4ed8b7 === _0xb4351a;
            },
            'DwzmE': _0x28267e(0x321),
            'EGafo': _0x28267e(0x2f1),
            'jNKAb': function (_0x39a750, _0x444056) {
                return _0x39a750 > _0x444056;
            },
            'Tyxjk': function (_0x1cd3db, _0x4ceaea) {
                return _0x1cd3db < _0x4ceaea;
            },
            'AHmcU': function (_0x53cff1, _0x80b197) {
                return _0x53cff1 === _0x80b197;
            },
            'Wcoxu': _0x28267e(0x220),
            'AUyYE': function (_0x14767f, _0x15608b) {
                return _0x14767f > _0x15608b;
            },
            'XnmtB': function (_0x66e788, _0x1c0a1b) {
                return _0x66e788 < _0x1c0a1b;
            },
            'xNgZD': _0x28267e(0x1b6),
            'wRZNV': function (_0x2c66ae, _0x47c103) {
                return _0x2c66ae < _0x47c103;
            },
            'NFUiF': function (_0x4798e6, _0x5cd474) {
                return _0x4798e6 > _0x5cd474;
            },
            'aJTjH': function (_0x1359a7, _0x2578a4) {
                return _0x1359a7 < _0x2578a4;
            },
            'yMSmh': _0x28267e(0x374),
            'OmuKI': _0x28267e(0x334),
            'jDjXh': _0x28267e(0x2b2),
            'DdQZk': function (_0x506396, _0x1599ae) {
                return _0x506396 > _0x1599ae;
            },
            'zOOsa': _0x28267e(0x1f2),
            'fdKEu': function (_0x2af230, _0x43754d) {
                return _0x2af230 > _0x43754d;
            },
            'KCVPX': function (_0x51b1cc, _0x5aedf1) {
                return _0x51b1cc > _0x5aedf1;
            }
        }, _0x15633d = Date['now']();
    speedHistory[_0x28267e(0x281)](_0x15633d);
    const _0x2b33ae = 0x2710;
    speedHistory = speedHistory[_0x28267e(0x46c)](_0x1e5d7b => _0x15633d - _0x1e5d7b <= _0x2b33ae), bets++, lastBet[_0x28267e(0x2de)] = lastBet['roll'], lastBet['target'] = target, lastBet[_0x28267e(0x27b)] = target;
    _0x265616[_0x28267e(0x45b)](game, _0x265616[_0x28267e(0x399)]) && (lastBet[_0x28267e(0x3c9)] = chance1, lastBet[_0x28267e(0x3b0)] = chance1, lastBet[_0x28267e(0x225)] = chance2, lastBet[_0x28267e(0x388)] = chance2, lastBet['chance3'] = chance3, lastBet['Chance3'] = chance3, lastBet[_0x28267e(0x25b)] = chance4, lastBet[_0x28267e(0x2a7)] = chance4, lastBet[_0x28267e(0x41c)] = betSide, lastBet['BetSide'] = betSide);
    lastBet[_0x28267e(0x461)] = result, lastBet[_0x28267e(0x366)] = result, lastBet[_0x28267e(0x487)] = currentprofit, lastBet[_0x28267e(0x33e)] = currentprofit, lastBet[_0x28267e(0x2be)] = lastBet[_0x28267e(0x3b8)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (game === _0x265616[_0x28267e(0x22b)])
        win = lastBet['bethigh'] ? _0x265616['jNKAb'](lastBet[_0x28267e(0x461)], lastBet[_0x28267e(0x413)]) : _0x265616[_0x28267e(0x287)](lastBet[_0x28267e(0x461)], lastBet[_0x28267e(0x413)]);
    else {
        if (_0x265616[_0x28267e(0x434)](game, _0x28267e(0x207)) || _0x265616[_0x28267e(0x467)](game, _0x28267e(0x2ce)))
            win = lastBet[_0x28267e(0x487)] > 0x0;
        else {
            if (_0x265616[_0x28267e(0x467)](game, _0x265616[_0x28267e(0x399)])) {
                if (_0x265616['nWLYo'](lastBet['betSide'], _0x265616[_0x28267e(0x27c)]))
                    win = _0x265616[_0x28267e(0x44e)](lastBet[_0x28267e(0x466)], lastBet[_0x28267e(0x3c9)]) && _0x265616['XnmtB'](lastBet['roll'], lastBet[_0x28267e(0x225)]);
                else {
                    if (_0x265616[_0x28267e(0x467)](lastBet[_0x28267e(0x41c)], _0x265616[_0x28267e(0x49d)]))
                        win = lastBet[_0x28267e(0x466)] < lastBet[_0x28267e(0x3c9)] || _0x265616[_0x28267e(0x328)](lastBet[_0x28267e(0x466)], lastBet[_0x28267e(0x225)]);
                    else {
                        if (_0x265616[_0x28267e(0x434)](lastBet[_0x28267e(0x41c)], _0x28267e(0x433))) {
                            const _0x48ff26 = _0x265616[_0x28267e(0x44e)](lastBet['roll'], lastBet[_0x28267e(0x3c9)]) && _0x265616['wRZNV'](lastBet[_0x28267e(0x466)], lastBet[_0x28267e(0x225)]), _0x9fd7fd = _0x265616[_0x28267e(0x275)](lastBet[_0x28267e(0x466)], lastBet[_0x28267e(0x385)]) && _0x265616[_0x28267e(0x307)](lastBet[_0x28267e(0x466)], lastBet[_0x28267e(0x25b)]);
                            win = _0x48ff26 || _0x9fd7fd;
                        }
                    }
                }
            } else
                win = lastBet[_0x28267e(0x461)] >= lastBet[_0x28267e(0x413)];
        }
    }
    if (win) {
        const _0x19fe70 = _0x265616[_0x28267e(0x398)]['split']('|');
        let _0x57facb = 0x0;
        while (!![]) {
            switch (_0x19fe70[_0x57facb++]) {
            case '0':
                color = _0x265616[_0x28267e(0x3c4)];
                continue;
            case '1':
                losestreak = 0x0;
                continue;
            case '2':
                currentstreak = winstreak;
                continue;
            case '3':
                winstreak++;
                continue;
            case '4':
                wins++;
                continue;
            }
            break;
        }
    } else {
        const _0xb154bf = _0x265616[_0x28267e(0x204)][_0x28267e(0x318)]('|');
        let _0xd2ade1 = 0x0;
        while (!![]) {
            switch (_0xb154bf[_0xd2ade1++]) {
            case '0':
                winstreak = 0x0;
                continue;
            case '1':
                if (_0x265616[_0x28267e(0x2b8)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '2':
                losses++;
                continue;
            case '3':
                currentstreak = -losestreak;
                continue;
            case '4':
                losestreak++;
                continue;
            case '5':
                color = _0x265616[_0x28267e(0x32e)];
                continue;
            }
            break;
        }
    }
    if (_0x265616[_0x28267e(0x2dd)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x265616[_0x28267e(0x3a4)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (losestreak > maxlosestreak)
        maxlosestreak = losestreak;
    if (balance < minbalance)
        minbalance = balance;
    if (_0x265616['fdKEu'](balance, maxbalance))
        maxbalance = balance;
    if (_0x265616['XnmtB'](profit, minprofit))
        minprofit = profit;
    if (_0x265616[_0x28267e(0x44e)](profit, maxprofit))
        maxprofit = profit;
    _0x265616[_0x28267e(0x3d1)](showInfo)[_0x28267e(0x2bc)](async () => {
        const _0x3b7bc4 = _0x28267e;
        try {
            if (_0x265616[_0x3b7bc4(0x467)](mode, _0x3b7bc4(0x1e4)))
                await _0x265616['UxCrY'](updateLua);
            else {
                if (mode === 'js')
                    await _0x265616['VBKEA'](dobet);
                else
                    _0x265616['vpDdj'](mode, 'advanced') && await _0x265616[_0x3b7bc4(0x41a)](handleAdvanced);
            }
            if (_0x265616['IlelV'](win, sOW))
                _0x265616[_0x3b7bc4(0x41a)](stop);
            if (run)
                _0x265616['NyQLZ'](playBet);
        } catch (_0x1ea3b6) {
            _0x265616[_0x3b7bc4(0x3d1)](stop), _0x265616[_0x3b7bc4(0x32f)](log, _0x1ea3b6);
        }
    });
}
async function showInfo() {
    const _0x172bd4 = _0x4ceade, _0x2d32fb = {
            'VWcca': function (_0x116251, _0x455977) {
                return _0x116251 === _0x455977;
            },
            'tzPSN': _0x172bd4(0x27a),
            'lNnIo': function (_0x2fbeff, _0x572d7b) {
                return _0x2fbeff < _0x572d7b;
            },
            'yFRKh': _0x172bd4(0x1f2),
            'zcTLl': 'green',
            'mqokh': _0x172bd4(0x3d8),
            'Osudj': function (_0x227da7, _0x1ecf16) {
                return _0x227da7 > _0x1ecf16;
            },
            'fGYpl': _0x172bd4(0x443),
            'UFPpi': _0x172bd4(0x40d),
            'MHegs': _0x172bd4(0x3d7),
            'PMLrY': 'wdbHighLose',
            'wDgYG': _0x172bd4(0x1fc),
            'PBQRw': 'wdbLosses',
            'ObwJo': _0x172bd4(0x2b0),
            'vuIOM': 'wdbHighLoseStreak',
            'mAVUB': _0x172bd4(0x41d),
            'byxRU': _0x172bd4(0x262),
            'eLpCG': 'wdbMinProfit',
            'goECW': _0x172bd4(0x4a4),
            'fWrzK': function (_0x3a3ac8, _0x45a868) {
                return _0x3a3ac8 / _0x45a868;
            },
            'xUrCr': function (_0x324c8a, _0x55bbc6) {
                return _0x324c8a / _0x55bbc6;
            },
            'zPNfs': function (_0x1eb628, _0x4f4f9c) {
                return _0x1eb628 * _0x4f4f9c;
            },
            'DmpCy': function (_0x35563f, _0x5eedfb) {
                return _0x35563f + _0x5eedfb;
            },
            'dIKms': 'wdbPercentWagered',
            'zjwLh': function (_0x4c11c2, _0xbb22b8) {
                return _0x4c11c2 / _0xbb22b8;
            },
            'DdXio': function (_0x148395, _0x17aa35) {
                return _0x148395 * _0x17aa35;
            },
            'TBhUK': function (_0x5f5844, _0x304e1d) {
                return _0x5f5844 + _0x304e1d;
            },
            'saTnw': function (_0x2b338a, _0x2d8cd4) {
                return _0x2b338a(_0x2d8cd4);
            },
            'EMWgg': _0x172bd4(0x42d),
            'BNoNv': _0x172bd4(0x48c),
            'xriAt': _0x172bd4(0x2f1),
            'ANnmM': _0x172bd4(0x3f7),
            'ilQOx': function (_0x51904b, _0x456f6e) {
                return _0x51904b !== _0x456f6e;
            },
            'zRhmT': _0x172bd4(0x321),
            'kKfpq': 'plinko',
            'roYni': function (_0x40fdfc, _0x375bcf) {
                return _0x40fdfc + _0x375bcf;
            },
            'Bolxb': function (_0x33b5e, _0x5db708) {
                return _0x33b5e(_0x5db708);
            },
            'tHTyG': function (_0x41e4b5, _0x3a8bc9) {
                return _0x41e4b5(_0x3a8bc9);
            },
            'rvaNf': _0x172bd4(0x355),
            'RsBTh': function (_0x2533a3, _0x3e1c42) {
                return _0x2533a3 + _0x3e1c42;
            },
            'XpXkQ': function (_0x446ab7, _0x46087b) {
                return _0x446ab7 + _0x46087b;
            },
            'xleGJ': function (_0x2b153f, _0x2e240f) {
                return _0x2b153f + _0x2e240f;
            },
            'BeHfK': _0x172bd4(0x2ce),
            'NZZtO': _0x172bd4(0x36e),
            'ohSkv': _0x172bd4(0x229),
            'ZBBUM': _0x172bd4(0x3f1),
            'lloQC': '#wdbHistory',
            'phQnR': function (_0x40ced6, _0x2d4066) {
                return _0x40ced6 + _0x2d4066;
            },
            'dYXbG': function (_0x3fbc4e, _0x2f9180) {
                return _0x3fbc4e(_0x2f9180);
            },
            'QkgPm': function (_0x4f9d95, _0x225e63) {
                return _0x4f9d95(_0x225e63);
            },
            'upxle': function (_0x11f9ac, _0x5d5166) {
                return _0x11f9ac(_0x5d5166);
            },
            'isHeB': function (_0x358bd1, _0x2f85ba) {
                return _0x358bd1(_0x2f85ba);
            },
            'nsLtc': function (_0x4b8260, _0x85f3da) {
                return _0x4b8260 === _0x85f3da;
            },
            'nBCTo': function (_0x1169b2, _0x34116c) {
                return _0x1169b2 === _0x34116c;
            },
            'URDRI': function (_0x4173ee, _0x19407c) {
                return _0x4173ee === _0x19407c;
            },
            'ogjyi': function (_0x1f442b, _0x2b1586) {
                return _0x1f442b > _0x2b1586;
            },
            'FQKlm': _0x172bd4(0x45f)
        }, _0x582eac = _0x2d32fb[_0x172bd4(0x270)](profit, 0x0) ? darkMode ? _0x2d32fb['tzPSN'] : _0x172bd4(0x3d8) : _0x2d32fb[_0x172bd4(0x24e)](profit, 0x0) ? _0x2d32fb[_0x172bd4(0x33c)] : _0x2d32fb['zcTLl'], _0x457937 = currentstreak === 0x0 ? darkMode ? _0x2d32fb[_0x172bd4(0x451)] : _0x2d32fb[_0x172bd4(0x386)] : currentstreak < 0x0 ? _0x2d32fb[_0x172bd4(0x33c)] : _0x2d32fb[_0x172bd4(0x39a)], _0x3038f0 = _0x2d32fb['Osudj'](maxwinstreak, 0x0) ? _0x2d32fb[_0x172bd4(0x39a)] : _0x2d32fb[_0x172bd4(0x386)], _0x27ff9c = maxlosestreak > 0x0 ? _0x2d32fb[_0x172bd4(0x33c)] : _0x172bd4(0x3d8);
    document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x394)])[_0x172bd4(0x38a)][_0x172bd4(0x1c5)] = _0x3038f0, document[_0x172bd4(0x341)]('wdbHighLoseStreak')['style']['color'] = _0x27ff9c, document[_0x172bd4(0x341)](_0x172bd4(0x322))[_0x172bd4(0x39d)] = wagered[_0x172bd4(0x41b)](decimalAmountView), document[_0x172bd4(0x341)](_0x172bd4(0x46e))[_0x172bd4(0x39d)] = balance[_0x172bd4(0x41b)](decimalAmountView), document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x26f)])[_0x172bd4(0x38a)][_0x172bd4(0x1c5)] = _0x582eac, document['getElementById'](_0x172bd4(0x40d))[_0x172bd4(0x39d)] = profit[_0x172bd4(0x41b)](decimalAmountView), document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x21f)])[_0x172bd4(0x39d)] = maxBetAmount['toFixed'](decimalAmountView), document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x20c)])[_0x172bd4(0x39d)] = maxLosseAmount[_0x172bd4(0x41b)](decimalAmountView), document['getElementById'](_0x2d32fb[_0x172bd4(0x439)])[_0x172bd4(0x39d)] = bets, document[_0x172bd4(0x341)](_0x172bd4(0x267))[_0x172bd4(0x39d)] = wins, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x494)])[_0x172bd4(0x39d)] = losses, document[_0x172bd4(0x341)](_0x2d32fb['ObwJo'])[_0x172bd4(0x38a)]['color'] = _0x457937, document[_0x172bd4(0x341)](_0x172bd4(0x2b0))[_0x172bd4(0x39d)] = currentstreak, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x394)])['innerText'] = maxwinstreak, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x2c8)])['innerText'] = maxlosestreak, document[_0x172bd4(0x341)](_0x2d32fb['mAVUB'])[_0x172bd4(0x39d)] = minbalance['toFixed'](decimalAmountView), document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x24c)])[_0x172bd4(0x39d)] = maxbalance[_0x172bd4(0x41b)](decimalAmountView), document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x481)])[_0x172bd4(0x39d)] = minprofit['toFixed'](decimalAmountView), document['getElementById'](_0x2d32fb[_0x172bd4(0x274)])[_0x172bd4(0x39d)] = maxprofit[_0x172bd4(0x41b)](decimalAmountView), percentWagered = _0x2d32fb[_0x172bd4(0x3c8)](wagered, startBalance), percentWagered = _0x2d32fb[_0x172bd4(0x377)](Math[_0x172bd4(0x437)](_0x2d32fb[_0x172bd4(0x447)](_0x2d32fb['DmpCy'](percentWagered, Number[_0x172bd4(0x345)]), 0x2710)), 0x2710), percentWagered = isNaN(percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x2d32fb[_0x172bd4(0x269)])[_0x172bd4(0x39d)] = percentWagered, percentProfit = _0x2d32fb[_0x172bd4(0x383)](profit, startBalance) * 0x64, percentProfit = Math[_0x172bd4(0x437)](_0x2d32fb['DdXio'](_0x2d32fb[_0x172bd4(0x210)](percentProfit, Number[_0x172bd4(0x345)]), 0x2710)) / 0x2710, percentProfit = _0x2d32fb[_0x172bd4(0x493)](isNaN, percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x2d32fb[_0x172bd4(0x45d)])[_0x172bd4(0x38a)]['color'] = _0x582eac, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x35c)])[_0x172bd4(0x39d)] = percentProfit;
    if (!stopHistory) {
        const _0x12dbd6 = _0x2d32fb['VWcca'](game, _0x2d32fb[_0x172bd4(0x3a6)]) ? lastBet['bethigh'] ? '>' : '<' : '>', _0x14c442 = lastBet[_0x172bd4(0x397)] ? _0x172bd4(0x473) + bets + _0x172bd4(0x4a1) : _0x172bd4(0x473) + bets + _0x172bd4(0x357), _0x54bff3 = '' + (havePlinkoRows ? _0x2d32fb[_0x172bd4(0x210)](plinkoRow, _0x2d32fb[_0x172bd4(0x406)]) : '') + plinkoRisk, _0x50ccca = _0x172bd4(0x30b) + bets + _0x172bd4(0x438) + _0x2d32fb['saTnw'](Number, lastBet['amount'])['toFixed'](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x2d32fb[_0x172bd4(0x244)](game, _0x2d32fb[_0x172bd4(0x1c4)]) ? _0x14c442 : betSide) + _0x172bd4(0x438) + (_0x2d32fb[_0x172bd4(0x270)](game, _0x2d32fb[_0x172bd4(0x3ad)]) ? _0x54bff3 : _0x2d32fb[_0x172bd4(0x3f5)](_0x2d32fb[_0x172bd4(0x3f8)](Number, lastBet[_0x172bd4(0x460)])[_0x172bd4(0x41b)](decimalChanceView), '%')) + _0x172bd4(0x438) + _0x2d32fb[_0x172bd4(0x493)](Number, lastBet[_0x172bd4(0x466)])[_0x172bd4(0x41b)](decimalChanceView) + _0x172bd4(0x474) + _0x2d32fb['tHTyG'](Number, lastBet[_0x172bd4(0x487)])[_0x172bd4(0x41b)](decimalAmountView) + _0x172bd4(0x438) + (_0x2d32fb[_0x172bd4(0x244)](game, _0x172bd4(0x321)) ? _0x2d32fb[_0x172bd4(0x270)](game, _0x2d32fb[_0x172bd4(0x3ad)]) ? _0x54bff3 : _0x2d32fb[_0x172bd4(0x270)](game, _0x172bd4(0x2ce)) ? _0x2d32fb[_0x172bd4(0x210)](Number(lastBet[_0x172bd4(0x413)])[_0x172bd4(0x41b)](0x0), _0x2d32fb[_0x172bd4(0x1cb)]) : _0x2d32fb[_0x172bd4(0x3f5)](_0x12dbd6, Number(lastBet[_0x172bd4(0x413)])[_0x172bd4(0x41b)](decimalTargetResult)) : _0x2d32fb[_0x172bd4(0x210)](_0x2d32fb['RsBTh'](_0x2d32fb[_0x172bd4(0x258)](_0x2d32fb[_0x172bd4(0x256)](target1, '|'), target2), target3 ? _0x2d32fb[_0x172bd4(0x258)]('|', target3) : ''), target4 ? _0x2d32fb['TBhUK']('|', target4) : '')) + _0x172bd4(0x438) + (game === _0x2d32fb[_0x172bd4(0x3bf)] ? _0x2d32fb[_0x172bd4(0x2c9)](_0x2d32fb['saTnw'](Number, result)[_0x172bd4(0x41b)](0x0), _0x2d32fb[_0x172bd4(0x3ef)]) : _0x2d32fb[_0x172bd4(0x493)](Number, result)[_0x172bd4(0x41b)](decimalTargetResult)) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet[_0x172bd4(0x3b8)] + _0x172bd4(0x438) + lastBet['id'] + '</td>', _0x47779e = document[_0x172bd4(0x226)]('tr');
        _0x47779e[_0x172bd4(0x38a)]['backgroundColor'] = win ? _0x172bd4(0x3e9) : _0x2d32fb[_0x172bd4(0x380)], _0x47779e['innerHTML'] = _0x50ccca, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x2b3)])[_0x172bd4(0x22a)](_0x47779e, document[_0x172bd4(0x341)](_0x2d32fb[_0x172bd4(0x2b3)])[_0x172bd4(0x2ff)][0x0]);
        const _0x123b9f = document[_0x172bd4(0x20e)](_0x2d32fb[_0x172bd4(0x495)])[_0x172bd4(0x22c)];
        if (_0x123b9f[_0x172bd4(0x2ad)] > maxRows)
            document[_0x172bd4(0x20e)](_0x172bd4(0x1d0))[_0x172bd4(0x39e)][_0x172bd4(0x37a)]();
    }
    const _0x299c89 = '' + (havePlinkoRows ? _0x2d32fb[_0x172bd4(0x278)](plinkoRow, _0x2d32fb[_0x172bd4(0x406)]) : '') + plinkoRisk;
    return fullLogs[_0x172bd4(0x281)]({
        'game': game,
        'bets': bets,
        'amount': _0x2d32fb['dYXbG'](Number, lastBet['amount'])[_0x172bd4(0x41b)](decimalAmountView),
        'bethigh': _0x2d32fb[_0x172bd4(0x244)](game, _0x172bd4(0x321)) ? lastBet[_0x172bd4(0x397)] : null,
        'chance': _0x2d32fb[_0x172bd4(0x244)](game, _0x2d32fb[_0x172bd4(0x1c4)]) ? _0x2d32fb[_0x172bd4(0x33d)](Number, lastBet[_0x172bd4(0x460)])[_0x172bd4(0x41b)](decimalChanceView) : lastBet[_0x172bd4(0x460)],
        'target': _0x2d32fb['ilQOx'](game, _0x2d32fb['zRhmT']) ? _0x2d32fb['VWcca'](game, _0x2d32fb['kKfpq']) ? _0x299c89 : lastBet['target'] : null,
        'roll': _0x2d32fb[_0x172bd4(0x493)](Number, lastBet[_0x172bd4(0x466)])[_0x172bd4(0x41b)](decimalChanceView),
        'result': _0x2d32fb[_0x172bd4(0x441)](Number, result)['toFixed'](decimalTargetResult),
        'profit': _0x2d32fb['isHeB'](Number, lastBet[_0x172bd4(0x487)])[_0x172bd4(0x41b)](decimalAmountView),
        'nonce': lastBet[_0x172bd4(0x3b8)],
        'id': lastBet['id'],
        'chance1': _0x2d32fb[_0x172bd4(0x33b)](game, _0x2d32fb['zRhmT']) ? lastBet[_0x172bd4(0x3c9)] : null,
        'chance2': _0x2d32fb['nBCTo'](game, _0x2d32fb[_0x172bd4(0x1c4)]) ? lastBet['chance2'] : null,
        'chance3': _0x2d32fb[_0x172bd4(0x3fa)](game, _0x172bd4(0x321)) ? lastBet[_0x172bd4(0x385)] : null,
        'chance4': _0x2d32fb[_0x172bd4(0x2e1)](game, _0x2d32fb[_0x172bd4(0x1c4)]) ? lastBet[_0x172bd4(0x25b)] : null,
        'betSide': _0x2d32fb[_0x172bd4(0x270)](game, _0x2d32fb[_0x172bd4(0x1c4)]) ? lastBet[_0x172bd4(0x41c)] : null
    }), _0x2d32fb[_0x172bd4(0x20f)](fullLogs['length'], 0x2710) && fullLogs[_0x172bd4(0x26c)](), !stopChart && chart[_0x172bd4(0x340)](betsChart, profitChart, color), _0x2d32fb[_0x172bd4(0x21c)];
}
async function updateStats() {
    const _0x47c971 = _0x4ceade, _0x3fb4b1 = {
            'jJNAo': function (_0x46ca00, _0x1783b5) {
                return _0x46ca00 === _0x1783b5;
            },
            'RrnvA': 'black',
            'ZFwgg': _0x47c971(0x1f2),
            'OReUQ': _0x47c971(0x334),
            'DqWWR': 'white',
            'sMmex': function (_0x4ca38c, _0x265b45) {
                return _0x4ca38c < _0x265b45;
            },
            'jiuCY': function (_0x3356a9, _0x412d84) {
                return _0x3356a9 > _0x412d84;
            },
            'TpUYz': _0x47c971(0x443),
            'oUFxG': _0x47c971(0x219),
            'HdumA': _0x47c971(0x322),
            'aNzYB': 'wdbBalance',
            'hWfgy': _0x47c971(0x40d),
            'zYWxm': _0x47c971(0x3d7),
            'jSSnn': _0x47c971(0x37e),
            'fjNTQ': _0x47c971(0x1fc),
            'afDkp': _0x47c971(0x267),
            'uzsYP': _0x47c971(0x48f),
            'csnrM': _0x47c971(0x2b0),
            'bJYyP': _0x47c971(0x41d),
            'ZeQkS': _0x47c971(0x262),
            'MzvrX': _0x47c971(0x4a4),
            'YgkXJ': function (_0x515ee2, _0x1f87ea) {
                return _0x515ee2 / _0x1f87ea;
            },
            'CDpXl': function (_0x3fce4e, _0x3518cb) {
                return _0x3fce4e * _0x3518cb;
            },
            'wTLQt': function (_0x3dceba, _0x28cd42) {
                return _0x3dceba + _0x28cd42;
            },
            'ExLqe': function (_0x3dba28, _0x1f7d9e) {
                return _0x3dba28(_0x1f7d9e);
            },
            'zCrkg': 'wdbPercentWagered',
            'AZkxN': function (_0x146168, _0x4f89c9) {
                return _0x146168 * _0x4f89c9;
            },
            'RjhuW': function (_0x4d6ccd, _0x5a12cc) {
                return _0x4d6ccd(_0x5a12cc);
            },
            'IQapY': _0x47c971(0x42d),
            'WXgjb': _0x47c971(0x48c),
            'zUKVL': _0x47c971(0x22f)
        }, _0x505073 = _0x3fb4b1[_0x47c971(0x2ea)](profit, 0x0) ? darkMode ? _0x47c971(0x27a) : _0x3fb4b1[_0x47c971(0x1b4)] : profit < 0x0 ? _0x3fb4b1[_0x47c971(0x3e0)] : _0x3fb4b1[_0x47c971(0x200)], _0x22c72f = currentstreak === 0x0 ? darkMode ? _0x3fb4b1[_0x47c971(0x297)] : _0x3fb4b1['RrnvA'] : _0x3fb4b1[_0x47c971(0x2d9)](currentstreak, 0x0) ? _0x47c971(0x1f2) : _0x3fb4b1[_0x47c971(0x200)], _0x476331 = maxwinstreak > 0x0 ? _0x47c971(0x334) : darkMode ? _0x3fb4b1[_0x47c971(0x297)] : _0x3fb4b1['RrnvA'], _0x38c652 = _0x3fb4b1[_0x47c971(0x49c)](maxlosestreak, 0x0) ? _0x47c971(0x1f2) : darkMode ? _0x3fb4b1[_0x47c971(0x297)] : _0x47c971(0x3d8);
    return document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x3b4)])[_0x47c971(0x38a)]['color'] = _0x476331, document['getElementById'](_0x3fb4b1[_0x47c971(0x477)])[_0x47c971(0x38a)][_0x47c971(0x1c5)] = _0x38c652, document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x400)])[_0x47c971(0x39d)] = wagered[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x4a0)])[_0x47c971(0x39d)] = balance[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x305)])[_0x47c971(0x38a)][_0x47c971(0x1c5)] = _0x505073, document[_0x47c971(0x341)](_0x47c971(0x40d))[_0x47c971(0x39d)] = profit[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1['zYWxm'])['innerText'] = maxBetAmount[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x1d4)])['innerText'] = maxLosseAmount[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x240)])[_0x47c971(0x39d)] = bets, document[_0x47c971(0x341)](_0x3fb4b1['afDkp'])['innerText'] = wins, document['getElementById'](_0x3fb4b1[_0x47c971(0x2f6)])[_0x47c971(0x39d)] = losses, document['getElementById'](_0x3fb4b1[_0x47c971(0x209)])[_0x47c971(0x38a)][_0x47c971(0x1c5)] = _0x22c72f, document[_0x47c971(0x341)](_0x47c971(0x2b0))[_0x47c971(0x39d)] = currentstreak, document[_0x47c971(0x341)](_0x3fb4b1['TpUYz'])[_0x47c971(0x39d)] = maxwinstreak, document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x477)])[_0x47c971(0x39d)] = maxlosestreak, document[_0x47c971(0x341)](_0x3fb4b1['bJYyP'])[_0x47c971(0x39d)] = minbalance['toFixed'](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x3fe)])[_0x47c971(0x39d)] = maxbalance[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)]('wdbMinProfit')[_0x47c971(0x39d)] = minprofit[_0x47c971(0x41b)](decimalAmountView), document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x367)])[_0x47c971(0x39d)] = maxprofit[_0x47c971(0x41b)](decimalAmountView), percentWagered = _0x3fb4b1[_0x47c971(0x426)](wagered, startBalance), percentWagered = _0x3fb4b1[_0x47c971(0x426)](Math[_0x47c971(0x437)](_0x3fb4b1[_0x47c971(0x43f)](_0x3fb4b1[_0x47c971(0x1c6)](percentWagered, Number[_0x47c971(0x345)]), 0x64)), 0x64), percentWagered = isNaN(percentWagered) || !_0x3fb4b1[_0x47c971(0x40e)](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x47c971(0x341)](_0x3fb4b1[_0x47c971(0x35e)])[_0x47c971(0x39d)] = percentWagered, percentProfit = _0x3fb4b1[_0x47c971(0x25c)](_0x3fb4b1[_0x47c971(0x426)](profit, startBalance), 0x64), percentProfit = Math[_0x47c971(0x437)](_0x3fb4b1[_0x47c971(0x43f)](_0x3fb4b1[_0x47c971(0x1c6)](percentProfit, Number[_0x47c971(0x345)]), 0x64)) / 0x64, percentProfit = _0x3fb4b1[_0x47c971(0x40e)](isNaN, percentProfit) || !_0x3fb4b1[_0x47c971(0x3e6)](isFinite, percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x3fb4b1[_0x47c971(0x391)])[_0x47c971(0x38a)][_0x47c971(0x1c5)] = _0x505073, document[_0x47c971(0x341)](_0x3fb4b1['WXgjb'])[_0x47c971(0x39d)] = percentProfit, _0x3fb4b1[_0x47c971(0x384)];
}
function log(_0x3c170d) {
    const _0x3f663d = _0x4ceade, _0x5dafba = {
            'PwLXC': _0x3f663d(0x27a),
            'OFVXB': _0x3f663d(0x3d8),
            'VFyIv': function (_0x3b317e, _0x2b4ad9) {
                return _0x3b317e > _0x2b4ad9;
            }
        }, _0x4950f4 = document[_0x3f663d(0x341)](_0x3f663d(0x215)), _0x3db9dd = document['createElement']('li');
    _0x3db9dd[_0x3f663d(0x39d)] = _0x3c170d, _0x3db9dd[_0x3f663d(0x38a)][_0x3f663d(0x1c5)] = darkMode ? _0x5dafba[_0x3f663d(0x36c)] : _0x5dafba[_0x3f663d(0x379)], _0x4950f4[_0x3f663d(0x22a)](_0x3db9dd, _0x4950f4['firstChild']), _0x5dafba['VFyIv'](_0x4950f4[_0x3f663d(0x2ff)][_0x3f663d(0x2ad)], maxRows) && _0x4950f4[_0x3f663d(0x235)](_0x4950f4[_0x3f663d(0x39e)]);
}
function updateSpeed() {
    const _0x61bffb = _0x4ceade, _0x2c9b3c = {
            'umCZY': function (_0x22734c, _0x438de4) {
                return _0x22734c < _0x438de4;
            },
            'MPeiX': 'wdbSpeed',
            'acblv': '0.00',
            'QfMsR': function (_0x365299, _0x21c491) {
                return _0x365299 / _0x21c491;
            },
            'zrUic': function (_0x3e9006, _0x590d24) {
                return _0x3e9006 / _0x590d24;
            }
        };
    if (speedHistory[_0x61bffb(0x2ad)] < 0x2) {
        document[_0x61bffb(0x341)](_0x61bffb(0x224))[_0x61bffb(0x39d)] = _0x61bffb(0x3a3);
        return;
    }
    const _0x5c5d98 = Date[_0x61bffb(0x360)](), _0x2dc0d7 = 0x2710;
    speedHistory = speedHistory[_0x61bffb(0x46c)](_0x53bf51 => _0x5c5d98 - _0x53bf51 <= _0x2dc0d7);
    if (_0x2c9b3c[_0x61bffb(0x2d8)](speedHistory['length'], 0x2)) {
        document[_0x61bffb(0x341)](_0x2c9b3c[_0x61bffb(0x32b)])['innerText'] = _0x2c9b3c[_0x61bffb(0x2a3)];
        return;
    }
    const _0x419347 = speedHistory[0x0], _0x436b1a = _0x2c9b3c['QfMsR'](_0x5c5d98 - _0x419347, 0x3e8), _0x3d5ffa = _0x2c9b3c['zrUic'](speedHistory[_0x61bffb(0x2ad)], _0x436b1a);
    document[_0x61bffb(0x341)](_0x2c9b3c[_0x61bffb(0x32b)])['innerText'] = _0x3d5ffa['toFixed'](0x2);
}
function updateTimer() {
    const _0x1a94fc = _0x4ceade, _0x2b7eed = {
            'pocjt': function (_0x37c508, _0x4e2979) {
                return _0x37c508 * _0x4e2979;
            },
            'qCgeD': function (_0xd682a5, _0x40301f) {
                return _0xd682a5 / _0x40301f;
            },
            'xpKRs': function (_0x4f1701, _0x245266) {
                return _0x4f1701 % _0x245266;
            },
            'iVoNi': function (_0x398bce, _0x3367ce) {
                return _0x398bce * _0x3367ce;
            },
            'SyebX': function (_0x3f8a3d, _0x57c954) {
                return _0x3f8a3d / _0x57c954;
            },
            'lWqjJ': _0x1a94fc(0x2e2)
        };
    elapsedTime++;
    const _0xf42d14 = Math[_0x1a94fc(0x1fd)](elapsedTime / _0x2b7eed['pocjt'](0x18 * 0x3c, 0x3c)), _0x498875 = Math['floor'](_0x2b7eed[_0x1a94fc(0x33f)](_0x2b7eed[_0x1a94fc(0x33a)](elapsedTime, _0x2b7eed[_0x1a94fc(0x201)](_0x2b7eed['pocjt'](0x18, 0x3c), 0x3c)), 0x3c * 0x3c)), _0x4fb2b6 = Math[_0x1a94fc(0x1fd)](_0x2b7eed[_0x1a94fc(0x2ac)](elapsedTime % _0x2b7eed[_0x1a94fc(0x201)](0x3c, 0x3c), 0x3c)), _0x55b9d8 = _0x2b7eed['xpKRs'](elapsedTime, 0x3c);
    document[_0x1a94fc(0x341)](_0x2b7eed[_0x1a94fc(0x3d9)])[_0x1a94fc(0x39d)] = _0xf42d14 + ':' + _0x498875 + ':' + _0x4fb2b6 + ':' + _0x55b9d8;
}
async function start() {
    const _0x58d13f = _0x4ceade, _0x2704b8 = {
            'VTylm': 'rangedice',
            'weNzJ': _0x58d13f(0x455),
            'VQmSA': 'wdbMenuCoin',
            'GfqWn': 'wdbStartButton',
            'gYqBv': _0x58d13f(0x3f2),
            'foFkM': 'wdbOpenJSScript',
            'gGwuY': '#wdbSaveScriptButton',
            'XloTI': '#wdbOpenScript',
            'qpttt': function (_0x306e28, _0x20d31d) {
                return _0x306e28(_0x20d31d);
            },
            'LAQEG': function (_0x2ed432, _0x1df10e) {
                return _0x2ed432(_0x1df10e);
            },
            'NdnAO': function (_0x49dc5b, _0x3bc4d8, _0x15927f) {
                return _0x49dc5b(_0x3bc4d8, _0x15927f);
            },
            'OWZTj': function (_0x46fc7d, _0x393edc) {
                return _0x46fc7d === _0x393edc;
            },
            'GAaHw': _0x58d13f(0x349),
            'cavYu': _0x58d13f(0x202),
            'pcFvl': _0x58d13f(0x468),
            'QAhcN': '$1=$1*$2\x20',
            'dLxaI': _0x58d13f(0x3ca),
            'WeanK': _0x58d13f(0x2a4),
            'VkrFv': _0x58d13f(0x29e),
            'IkBih': _0x58d13f(0x2a2),
            'hKdYI': function (_0x4371b9, _0x50e033) {
                return _0x4371b9(_0x50e033);
            },
            'JIvsx': '#advancedBetHigh',
            'LygrI': function (_0x62ea4c) {
                return _0x62ea4c();
            }
        };
    if (game === _0x2704b8[_0x58d13f(0x43e)]) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = 'between';
        const _0x58d033 = _0x58d13f(0x3da) + chance1 + _0x58d13f(0x3c2) + chance2 + _0x58d13f(0x3db) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + '\x22';
        fengari[_0x58d13f(0x306)](_0x58d033)();
    }
    try {
        if (!run) {
            document[_0x58d13f(0x341)](_0x58d13f(0x2e2))[_0x58d13f(0x39d)] = _0x2704b8[_0x58d13f(0x24b)], document['getElementById'](_0x2704b8[_0x58d13f(0x469)])[_0x58d13f(0x43d)] = !![], document[_0x58d13f(0x341)]('wdbMenuMode')['disabled'] = !![], document[_0x58d13f(0x341)](_0x2704b8[_0x58d13f(0x1f8)])[_0x58d13f(0x43d)] = !![], document['getElementById'](_0x2704b8[_0x58d13f(0x486)])[_0x58d13f(0x43d)] = !![], document[_0x58d13f(0x341)]('wdbOpenLUAScript')[_0x58d13f(0x43d)] = !![], document[_0x58d13f(0x341)](_0x2704b8[_0x58d13f(0x3ae)])[_0x58d13f(0x43d)] = !![], document[_0x58d13f(0x316)](_0x2704b8[_0x58d13f(0x320)])['forEach'](_0x3ca108 => _0x3ca108['disabled'] = !![]), document['querySelectorAll'](_0x2704b8[_0x58d13f(0x3c3)])[_0x58d13f(0x356)](_0x2c4094 => _0x2c4094[_0x58d13f(0x43d)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x2704b8[_0x58d13f(0x484)](clearInterval, timerInterval), _0x2704b8[_0x58d13f(0x1d2)](clearInterval, speedUpdateInterval), timerInterval = _0x2704b8[_0x58d13f(0x2e6)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), fengari[_0x58d13f(0x306)](_0x58d13f(0x336))(), fengari[_0x58d13f(0x306)](_0x58d13f(0x310))();
            if (_0x2704b8[_0x58d13f(0x408)](mode, 'lua')) {
                const _0x13d200 = _0x58d13f(0x1bd)[_0x58d13f(0x318)]('|');
                let _0x1cd415 = 0x0;
                while (!![]) {
                    switch (_0x13d200[_0x1cd415++]) {
                    case '0':
                        document[_0x58d13f(0x341)](_0x58d13f(0x3f6))['innerText'] = scriptname ? _0x58d13f(0x1ba) + scriptname : '';
                        continue;
                    case '1':
                        scriptname = fengari['load'](_0x2704b8[_0x58d13f(0x3eb)])();
                        continue;
                    case '2':
                        diceScript = diceScript['replace'](/!=/g, '~=')[_0x58d13f(0x368)](/!/g, _0x2704b8[_0x58d13f(0x3c5)])[_0x58d13f(0x368)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x58d13f(0x435))[_0x58d13f(0x368)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2704b8[_0x58d13f(0x46b)])[_0x58d13f(0x368)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2704b8[_0x58d13f(0x46a)])[_0x58d13f(0x368)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x58d13f(0x376));
                        continue;
                    case '3':
                        diceScript = luaEditor[_0x58d13f(0x3fd)]();
                        continue;
                    case '4':
                        fengari[_0x58d13f(0x306)](diceScript)();
                        continue;
                    }
                    break;
                }
            } else {
                if (mode === 'js') {
                    const _0x4fcd5d = document['getElementById'](_0x2704b8[_0x58d13f(0x31d)]);
                    if (_0x4fcd5d)
                        _0x4fcd5d[_0x58d13f(0x37a)]();
                    diceScript = jsEditor[_0x58d13f(0x3fd)]();
                    const _0x25a121 = document[_0x58d13f(0x226)](_0x2704b8[_0x58d13f(0x3df)]);
                    _0x25a121['id'] = _0x2704b8[_0x58d13f(0x31d)], _0x25a121[_0x58d13f(0x282)] = diceScript, document[_0x58d13f(0x2a9)]['appendChild'](_0x25a121);
                } else
                    mode === _0x2704b8[_0x58d13f(0x440)] && (basebet = _0x2704b8[_0x58d13f(0x484)](Number, document['getElementById'](_0x2704b8['IkBih'])['value']), nextbet = basebet, chance = _0x2704b8['hKdYI'](Number, document[_0x58d13f(0x341)](_0x58d13f(0x450))[_0x58d13f(0x2ec)]), bethigh = document[_0x58d13f(0x20e)](_0x2704b8['JIvsx'])['checked']);
            }
            if (run)
                return playBet();
        }
    } catch (_0x1f4a9b) {
        _0x2704b8[_0x58d13f(0x2bf)](stop), _0x2704b8[_0x58d13f(0x1d2)](log, _0x1f4a9b);
    }
}
function stop() {
    const _0x348b14 = _0x4ceade, _0x5a0ccd = {
            'FMDML': function (_0x1d5386, _0x421ba9) {
                return _0x1d5386(_0x421ba9);
            },
            'eWEAl': 'wdbMenuCoin',
            'eRaaT': _0x348b14(0x1ee),
            'majKO': _0x348b14(0x38b),
            'KCiXJ': _0x348b14(0x3d0),
            'FPqOy': _0x348b14(0x3a7)
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x5a0ccd[_0x348b14(0x32c)](clearInterval, timerInterval), _0x5a0ccd[_0x348b14(0x32c)](clearInterval, speedUpdateInterval);
    const _0x4c7b6a = [
        _0x5a0ccd['eWEAl'],
        'wdbMenuMode',
        _0x5a0ccd[_0x348b14(0x2b4)],
        'wdbResumeButton',
        _0x5a0ccd['majKO'],
        _0x5a0ccd['KCiXJ'],
        'wdbStopOnWinButton'
    ];
    _0x4c7b6a[_0x348b14(0x356)](_0x51c8f0 => {
        const _0xd44afb = _0x348b14;
        document[_0xd44afb(0x341)](_0x51c8f0)[_0xd44afb(0x43d)] = ![];
    }), document[_0x348b14(0x316)](_0x5a0ccd[_0x348b14(0x39f)])[_0x348b14(0x356)](_0x376e98 => _0x376e98[_0x348b14(0x43d)] = ![]);
}
async function resume(_0x313c8f) {
    const _0x443f5b = _0x4ceade, _0x30b6ba = {
            'IyzRA': _0x443f5b(0x1ee),
            'fZDyv': _0x443f5b(0x3f2),
            'LxMXB': _0x443f5b(0x38b),
            'QnOzn': _0x443f5b(0x3d0),
            'Esmgb': _0x443f5b(0x3bb),
            'ubIZq': function (_0x726149, _0x15584a, _0x134e9f) {
                return _0x726149(_0x15584a, _0x134e9f);
            }
        };
    if (!run) {
        const _0x41a309 = [
            _0x443f5b(0x3d6),
            _0x443f5b(0x458),
            _0x30b6ba[_0x443f5b(0x479)],
            _0x30b6ba['fZDyv'],
            _0x30b6ba['LxMXB'],
            _0x30b6ba['QnOzn']
        ];
        return _0x41a309['forEach'](_0x3fa179 => {
            const _0x4bd19f = _0x443f5b;
            document[_0x4bd19f(0x341)](_0x3fa179)['disabled'] = !![];
        }), document['querySelectorAll'](_0x443f5b(0x3a7))[_0x443f5b(0x356)](_0x1c193a => _0x1c193a[_0x443f5b(0x43d)] = !![]), !_0x313c8f && (log(_0x30b6ba[_0x443f5b(0x292)]), await new Promise(_0x359b85 => setTimeout(_0x359b85, 0x1388))), run = !![], sOW = ![], timerInterval = _0x30b6ba['ubIZq'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), playBet();
    }
}
function stopOnWin() {
    const _0x18f214 = _0x4ceade;
    sOW = !![];
    if (run)
        document[_0x18f214(0x341)](_0x18f214(0x221))[_0x18f214(0x43d)] = !![];
}
async function playBet() {
    const _0x43073f = _0x4ceade, _0x3dd282 = {
            'pCWmw': _0x43073f(0x1e4),
            'cpGId': _0x43073f(0x28d),
            'CltAP': _0x43073f(0x347),
            'KerFd': _0x43073f(0x3ea),
            'HFWhp': function (_0x16c59a, _0x2329b9) {
                return _0x16c59a(_0x2329b9);
            },
            'LTkde': function (_0x57bfe2, _0x1de03f) {
                return _0x57bfe2(_0x1de03f);
            },
            'RncCF': function (_0x517711, _0x539800) {
                return _0x517711(_0x539800);
            },
            'SzmuJ': function (_0x31cc86, _0x30ac33) {
                return _0x31cc86 !== _0x30ac33;
            },
            'mVwsC': 'rangedice',
            'KrxlC': function (_0x1608a1, _0x1a315f) {
                return _0x1608a1 === _0x1a315f;
            },
            'dkBMx': _0x43073f(0x207),
            'ipczL': _0x43073f(0x3f7),
            'hIMoH': function (_0xed6aa, _0x108dbc) {
                return _0xed6aa === _0x108dbc;
            },
            'YUGhh': 'high',
            'SVjYg': function (_0x454b5a, _0x2fcdf9) {
                return _0x454b5a + _0x2fcdf9;
            },
            'PqSwA': function (_0x2da876, _0x5da109) {
                return _0x2da876 + _0x5da109;
            },
            'JYYUf': function (_0x588542) {
                return _0x588542();
            },
            'iiMrS': function (_0x1794f2, _0x15f1ea) {
                return _0x1794f2(_0x15f1ea);
            }
        };
    try {
        mode === _0x3dd282[_0x43073f(0x3c0)] && (nextbet = fengari[_0x43073f(0x306)]('return\x20nextbet')(), chance = fengari[_0x43073f(0x306)](_0x43073f(0x205))(), bethigh = fengari[_0x43073f(0x306)](_0x43073f(0x1c2))(), chance1 = fengari[_0x43073f(0x306)](_0x3dd282[_0x43073f(0x1c0)])(), chance2 = fengari[_0x43073f(0x306)]('return\x20chance2')(), chance3 = fengari[_0x43073f(0x306)](_0x43073f(0x293))(), chance4 = fengari[_0x43073f(0x306)](_0x3dd282[_0x43073f(0x285)])(), betSide = fengari[_0x43073f(0x306)](_0x3dd282[_0x43073f(0x3e3)])());
        nextbet = _0x3dd282['HFWhp'](Number, nextbet), chance = _0x3dd282[_0x43073f(0x26e)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x305493 = _0x3dd282[_0x43073f(0x337)](Number, lastBet[_0x43073f(0x1e2)])[_0x43073f(0x41b)](decimalAmountView), _0x4fa462 = _0x3dd282[_0x43073f(0x30c)](Number, lastBet['chance'])['toFixed'](decimalChanceView), _0x45f8e6 = _0x3dd282[_0x43073f(0x3c6)](game, _0x3dd282[_0x43073f(0x371)]) ? _0x3dd282['KrxlC'](game, _0x3dd282[_0x43073f(0x304)]) ? 'Betting\x20' + _0x305493 + _0x43073f(0x21a) + (havePlinkoRows ? plinkoRow + _0x3dd282['ipczL'] : '') + plinkoRisk + '\x20to\x20win' : 'Betting\x20' + _0x305493 + '\x20at\x20' + _0x4fa462 + _0x43073f(0x23d) + (_0x3dd282[_0x43073f(0x1da)](game, _0x43073f(0x2f1)) ? bethigh ? _0x43073f(0x2ae) : _0x43073f(0x390) : _0x3dd282[_0x43073f(0x3bd)]) : 'Betting\x20' + _0x305493 + '\x20at\x20' + chance1 + '|' + chance2 + (chance3 ? _0x3dd282['SVjYg']('|', chance3) : '') + (chance4 ? _0x3dd282['PqSwA']('|', chance4) : '') + _0x43073f(0x222) + betSide;
            _0x3dd282[_0x43073f(0x337)](log, _0x45f8e6);
        }
        if (run)
            return _0x3dd282[_0x43073f(0x402)](sendBet);
    } catch (_0x3dec1c) {
        _0x3dd282[_0x43073f(0x402)](stop), _0x3dd282[_0x43073f(0x1d3)](log, _0x3dec1c);
    }
}
function resetall() {
    const _0x23268d = _0x4ceade, _0x409c72 = {
            'ZWKex': '5|1|3|2|0|4',
            'SzRaz': function (_0xabc007) {
                return _0xabc007();
            },
            'rpAIt': _0x23268d(0x224),
            'mGbKP': _0x23268d(0x3a3),
            'OoCLV': function (_0x31daa6) {
                return _0x31daa6();
            },
            'HSTFn': _0x23268d(0x2e2),
            'FBIpq': _0x23268d(0x455)
        }, _0x66da51 = _0x409c72['ZWKex']['split']('|');
    let _0x3a234b = 0x0;
    while (!![]) {
        switch (_0x66da51[_0x3a234b++]) {
        case '0':
            _0x409c72['SzRaz'](resethistory);
            continue;
        case '1':
            document[_0x23268d(0x341)](_0x409c72['rpAIt'])[_0x23268d(0x39d)] = _0x409c72[_0x23268d(0x28f)];
            continue;
        case '2':
            _0x409c72[_0x23268d(0x20b)](resetchart);
            continue;
        case '3':
            resetstats();
            continue;
        case '4':
            resetlog();
            continue;
        case '5':
            document[_0x23268d(0x341)](_0x409c72[_0x23268d(0x326)])[_0x23268d(0x39d)] = _0x409c72[_0x23268d(0x2ee)];
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0xab4af8 = _0x4ceade, _0x596910 = {
            'cuvzd': function (_0x581ddf, _0x8bacf) {
                return _0x581ddf(_0x8bacf);
            },
            'WtRKJ': 'reset'
        };
    return _0x596910[_0xab4af8(0x37d)](toggleChart, _0x596910[_0xab4af8(0x23a)]);
}
function resethistory() {
    const _0x3c5bc7 = _0x4ceade, _0x2ee059 = {
            'wWvHx': function (_0x406542, _0x58e5d9) {
                return _0x406542(_0x58e5d9);
            },
            'yJZaV': _0x3c5bc7(0x27d)
        };
    return _0x2ee059[_0x3c5bc7(0x395)](toggleHistory, _0x2ee059[_0x3c5bc7(0x245)]);
}
function resetlog() {
    const _0x2179e2 = _0x4ceade, _0x8c9628 = {
            'oSZCd': function (_0x290443, _0x25140f) {
                return _0x290443(_0x25140f);
            }
        };
    return _0x8c9628[_0x2179e2(0x311)](toggleLog, _0x2179e2(0x27d));
}
function resetstats() {
    const _0x19d5aa = {
        'KqLnt': function (_0x98af88) {
            return _0x98af88();
        }
    };
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, _0x19d5aa['KqLnt'](updateStats);
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x11a92b) {
    return _0x11a92b;
}
function ching() {
    return wdbSound['play']();
}
function sleep(_0xda94d4) {
    return new Promise(_0x28c972 => setTimeout(_0x28c972, _0xda94d4 * 0x3e8));
}
async function initLua() {
    const _0x221b02 = _0x4ceade, _0x281d94 = {
            'xHqvd': _0x221b02(0x346),
            'nZSCX': _0x221b02(0x324),
            'paCZs': _0x221b02(0x29f),
            'ZFdBY': _0x221b02(0x425),
            'yLbYj': _0x221b02(0x29d),
            'INkNt': _0x221b02(0x46d),
            'ndMQI': 'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
            'CyFkf': 'function\x20resetall()\x0ajs.global:resetall()\x0aend',
            'sQRhx': _0x221b02(0x423),
            'qfnRR': _0x221b02(0x42b),
            'JPNey': 'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
            'GrbvW': 'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
            'XZNtt': _0x221b02(0x39b)
        };
    fengari['load'](_0x281d94[_0x221b02(0x2cb)])(), fengari[_0x221b02(0x306)](_0x221b02(0x213))(), fengari[_0x221b02(0x306)](_0x281d94['nZSCX'])(), fengari[_0x221b02(0x306)](_0x281d94['paCZs'])(), fengari[_0x221b02(0x306)](_0x221b02(0x1fb))(), fengari[_0x221b02(0x306)](_0x281d94['ZFdBY'])(), fengari['load'](_0x281d94[_0x221b02(0x358)])(), fengari[_0x221b02(0x306)](_0x281d94[_0x221b02(0x2a8)])(), fengari[_0x221b02(0x306)](_0x281d94[_0x221b02(0x3cc)])(), fengari['load'](_0x281d94['CyFkf'])(), fengari[_0x221b02(0x306)](_0x281d94[_0x221b02(0x47e)])(), fengari[_0x221b02(0x306)](_0x221b02(0x39c))(), fengari[_0x221b02(0x306)](_0x281d94['qfnRR'])(), fengari[_0x221b02(0x306)](_0x281d94['JPNey'])(), fengari[_0x221b02(0x306)](_0x281d94[_0x221b02(0x338)])(), fengari['load'](_0x281d94['XZNtt'])(), fengari[_0x221b02(0x306)](_0x221b02(0x217))(), fengari[_0x221b02(0x306)]('table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end')();
    const _0x5d660b = location[_0x221b02(0x47f)][_0x221b02(0x368)](_0x221b02(0x2ed), '');
    let _0xbb3f0e = _0x5d660b['indexOf']('.');
    return casino = _0x5d660b[_0x221b02(0x268)](0x0, _0xbb3f0e), fengari[_0x221b02(0x306)](_0x221b02(0x472) + casino + '\x22')(), _0x221b02(0x31e);
}
async function updateLua() {
    const _0x3b073f = _0x4ceade, _0x3fecdd = {
            'RkuQj': _0x3b073f(0x264),
            'QZBof': _0x3b073f(0x23b),
            'ypfTQ': _0x3b073f(0x32a)
        }, _0x1186ad = '\x0a\x20\x20\x20\x20win=' + win + _0x3b073f(0x1d6) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x3b073f(0x427) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + _0x3b073f(0x3d3) + losestreak + _0x3b073f(0x1e7) + currentstreak + '\x0a\x20\x20\x20\x20balance=' + balance + _0x3b073f(0x34a) + minbalance + _0x3b073f(0x333) + maxbalance + _0x3b073f(0x294) + minprofit + _0x3b073f(0x242) + maxprofit + '\x0a\x20\x20\x20\x20chance=' + chance + '\x0a\x20\x20\x20\x20bethigh=' + bethigh + '\x0a\x0a\x20\x20\x20\x20chance1=' + chance1 + _0x3b073f(0x3c2) + chance2 + _0x3b073f(0x3db) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x3b073f(0x1ca) + betSide + '\x22\x0a\x0a\x20\x20\x20\x20nextbet=' + nextbet + _0x3b073f(0x227) + previousbet + '\x0a\x20\x20\x20\x20profit=' + profit + _0x3b073f(0x2e4) + currentprofit + _0x3b073f(0x266) + partialprofit + _0x3b073f(0x42c) + wagered + _0x3b073f(0x315) + lastBet[_0x3b073f(0x1e2)] + _0x3b073f(0x238) + lastBet[_0x3b073f(0x1e2)] + _0x3b073f(0x44d) + lastBet[_0x3b073f(0x460)] + _0x3b073f(0x453) + lastBet[_0x3b073f(0x460)] + ',\x0a\x20\x20\x20\x20\x20\x20roll=' + lastBet['roll'] + _0x3b073f(0x40f) + lastBet[_0x3b073f(0x466)] + ',\x0a\x20\x20\x20\x20\x20\x20profit=' + lastBet[_0x3b073f(0x487)] + ',\x0a\x20\x20\x20\x20\x20\x20Profit=' + lastBet[_0x3b073f(0x487)] + ',\x0a\x20\x20\x20\x20\x20\x20target=' + lastBet[_0x3b073f(0x413)] + ',\x0a\x20\x20\x20\x20\x20\x20Target=' + lastBet['target'] + _0x3b073f(0x415) + lastBet['chance1'] + _0x3b073f(0x241) + lastBet[_0x3b073f(0x3c9)] + _0x3b073f(0x257) + lastBet[_0x3b073f(0x225)] + _0x3b073f(0x232) + lastBet['chance2'] + ',\x0a\x20\x20\x20\x20\x20\x20chance3=' + lastBet[_0x3b073f(0x385)] + _0x3b073f(0x211) + lastBet[_0x3b073f(0x385)] + _0x3b073f(0x3a1) + lastBet['chance4'] + _0x3b073f(0x228) + lastBet['chance4'] + _0x3b073f(0x418) + lastBet[_0x3b073f(0x41c)] + _0x3b073f(0x1d8) + lastBet[_0x3b073f(0x41c)] + _0x3b073f(0x1cc) + lastBet[_0x3b073f(0x461)] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet[_0x3b073f(0x461)] + _0x3b073f(0x325) + lastBet[_0x3b073f(0x3b8)] + _0x3b073f(0x442) + lastBet[_0x3b073f(0x3b8)] + _0x3b073f(0x26b) + lastBet['id'] + _0x3b073f(0x42e) + lastBet['id'] + _0x3b073f(0x2a0);
    fengari[_0x3b073f(0x306)](_0x1186ad)(), fengari[_0x3b073f(0x306)](_0x3b073f(0x2d7))(), currency = fengari[_0x3b073f(0x306)](_0x3b073f(0x344))() || currency, coin = String(currency)[_0x3b073f(0x1ef)](), plinkoRisk = fengari[_0x3b073f(0x306)](_0x3fecdd[_0x3b073f(0x28b)])() || plinkoRisk, plinkoRow = fengari[_0x3b073f(0x306)](_0x3fecdd[_0x3b073f(0x3fc)])() || plinkoRow, kenoRisk = fengari[_0x3b073f(0x306)]('return\x20kenoRisk')() || kenoRisk;
    const _0x53cbd9 = fengari['load'](_0x3fecdd[_0x3b073f(0x378)])();
    return _0x53cbd9 && (window['kenoNumbers'] = _0x53cbd9[_0x3b073f(0x318)](',')[_0x3b073f(0x46c)](_0x3d4a7b => _0x3d4a7b !== '')[_0x3b073f(0x3aa)](Number)), _0x3b073f(0x28e);
}
function randomString(_0x22ac52, _0x2ede85) {
    const _0x268411 = _0x4ceade, _0x2a4efc = {
            'NSbgD': _0x268411(0x2b1),
            'odCZh': _0x268411(0x3fb),
            'pgXqe': _0x268411(0x343),
            'mJfNR': function (_0x10513b, _0xcad77a) {
                return _0x10513b < _0xcad77a;
            },
            'CSSSh': function (_0x1dc0df, _0x151de1) {
                return _0x1dc0df * _0x151de1;
            }
        }, _0x4a4a6d = {
            'alphabet': _0x2a4efc[_0x268411(0x45e)],
            'numeric': _0x2a4efc[_0x268411(0x488)],
            'hex': _0x2a4efc[_0x268411(0x2aa)],
            'rangedice': _0x268411(0x2f9),
            'default': _0x268411(0x2c5)
        }, _0x1b70e9 = _0x4a4a6d[_0x2ede85] || _0x4a4a6d[_0x268411(0x405)];
    let _0x54db8c = '';
    for (let _0x4e4309 = 0x0; _0x2a4efc[_0x268411(0x2ab)](_0x4e4309, _0x22ac52); _0x4e4309++) {
        _0x54db8c += _0x1b70e9[_0x268411(0x409)](Math[_0x268411(0x1fd)](_0x2a4efc[_0x268411(0x3ee)](Math[_0x268411(0x49a)](), _0x1b70e9[_0x268411(0x2ad)])));
    }
    return _0x54db8c;
}
function setCookie(_0x5b9cf2, _0xe977c, _0x5d39c4) {
    const _0x3f1561 = _0x4ceade, _0x165d92 = {
            'PZvfT': function (_0x1ab2eb, _0xde2284) {
                return _0x1ab2eb + _0xde2284;
            },
            'DXdxJ': function (_0x31a585, _0x1074d0) {
                return _0x31a585 * _0x1074d0;
            },
            'xqKnY': function (_0xbc16ec, _0x581fb0) {
                return _0xbc16ec * _0x581fb0;
            },
            'lCgsJ': function (_0x21dc59, _0x4d4811) {
                return _0x21dc59 + _0x4d4811;
            },
            'ylqXL': _0x3f1561(0x42f)
        }, _0x3bd81a = new Date();
    _0x3bd81a[_0x3f1561(0x421)](_0x165d92[_0x3f1561(0x1f9)](_0x3bd81a['getTime'](), _0x165d92[_0x3f1561(0x35d)](_0x165d92['DXdxJ'](_0x165d92['xqKnY'](_0x5d39c4, 0x18) * 0x3c, 0x3c), 0x3e8)));
    const _0x3d256b = _0x165d92[_0x3f1561(0x273)](_0x165d92[_0x3f1561(0x1e1)], _0x3bd81a[_0x3f1561(0x1bc)]());
    document['cookie'] = _0x5b9cf2 + '=' + _0xe977c + ';' + _0x3d256b + _0x3f1561(0x348);
}
function getCookie(_0x545854) {
    const _0x4f5c24 = _0x4ceade, _0x4aa096 = _0x545854 + '=', _0x64be45 = document['cookie'][_0x4f5c24(0x318)](';')[_0x4f5c24(0x3aa)](_0x1616f7 => _0x1616f7[_0x4f5c24(0x1de)]());
    for (const _0x50f03a of _0x64be45) {
        if (_0x50f03a[_0x4f5c24(0x3ba)](_0x4aa096))
            return _0x50f03a['substring'](_0x4aa096[_0x4f5c24(0x2ad)]);
    }
    return '';
}
function saveScript() {
    const _0x5dc416 = _0x4ceade, _0x5400e3 = {
            'XfdWp': function (_0x428573, _0x17a8df) {
                return _0x428573 === _0x17a8df;
            },
            'cEoDc': 'lua'
        }, _0x2b224b = _0x5400e3['XfdWp'](mode, _0x5400e3['cEoDc']) ? luaEditor['getValue']() : jsEditor[_0x5dc416(0x3fd)](), _0x200f91 = document[_0x5dc416(0x226)]('a');
    _0x200f91[_0x5dc416(0x3e8)] = window['URL'][_0x5dc416(0x404)](new Blob([_0x2b224b], { 'type': _0x5dc416(0x21e) })), _0x200f91['download'] = _0x5dc416(0x342) + Date[_0x5dc416(0x360)]()[_0x5dc416(0x43c)]()[_0x5dc416(0x268)](-0x6) + '.' + mode, _0x200f91[_0x5dc416(0x35a)]();
}
function getErrMsg(_0x400ebe) {
    const _0x2062bd = _0x4ceade;
    return _0x400ebe[_0x2062bd(0x3ed)] && _0x400ebe[_0x2062bd(0x3ed)][_0x2062bd(0x24f)] && _0x400ebe[_0x2062bd(0x3ed)][_0x2062bd(0x24f)][_0x2062bd(0x40c)] || _0x400ebe[_0x2062bd(0x40c)] || _0x400ebe['toString']();
}

(function (_0x1c863c, _0xae10e4) {
    const _0x2ebea7 = _0x155d, _0x1f592a = _0x1c863c();
    while (!![]) {
        try {
            const _0x332707 = -parseInt(_0x2ebea7(0xa4)) / 0x1 + -parseInt(_0x2ebea7(0xad)) / 0x2 + parseInt(_0x2ebea7(0x89)) / 0x3 * (parseInt(_0x2ebea7(0x93)) / 0x4) + parseInt(_0x2ebea7(0x90)) / 0x5 * (parseInt(_0x2ebea7(0x9e)) / 0x6) + parseInt(_0x2ebea7(0x98)) / 0x7 + -parseInt(_0x2ebea7(0x7f)) / 0x8 * (-parseInt(_0x2ebea7(0x9c)) / 0x9) + -parseInt(_0x2ebea7(0x81)) / 0xa;
            if (_0x332707 === _0xae10e4)
                break;
            else
                _0x1f592a['push'](_0x1f592a['shift']());
        } catch (_0x597ea) {
            _0x1f592a['push'](_0x1f592a['shift']());
        }
    }
}(_0x208b, 0x32905), decimalTargetResult = 0x0);
function _0x155d(_0x17d993, _0x8a3931) {
    const _0x208b4c = _0x208b();
    return _0x155d = function (_0x155da2, _0x42ca2e) {
        _0x155da2 = _0x155da2 - 0x77;
        let _0x40ad68 = _0x208b4c[_0x155da2];
        return _0x40ad68;
    }, _0x155d(_0x17d993, _0x8a3931);
}
async function beforeWork() {
}
function _0x208b() {
    const _0x388867 = [
        'SKgEL',
        '5hQrstW',
        'aKRDT',
        'pCzjE',
        '120748NGefQF',
        'dwXDi',
        'dQeDv',
        'ngizd',
        'hersa',
        '2741326wmLsms',
        'HVQfX',
        'text',
        'jKjXJ',
        '9KBbRJA',
        'php/betnow.php',
        '2425956eKiYpg',
        'Not\x20supported',
        'sBeyG',
        'xIfrR',
        'Pckiq',
        'load',
        '61338lOxQPK',
        'cYmlA',
        'money',
        'PYUbH',
        'messege',
        'zjMes',
        'EPSILON',
        'LTC',
        'winchance',
        '573236wtDUEm',
        'roll',
        'eRiON',
        '7|8|0|9|2|5|11|6|10|1|4|3',
        'cryptoearned',
        'request',
        'append',
        'QBSmK',
        'JIyFU',
        '310192RuuzuU',
        'minbet=',
        '5513360ZbQZac',
        'SHKVu',
        'response',
        'FPXEa',
        'maxbet=',
        '#money',
        'post',
        'NqLiz',
        '27EQGUkN',
        'jlYIf',
        'minbalance=',
        'sudalicha',
        'split',
        'number'
    ];
    _0x208b = function () {
        return _0x388867;
    };
    return _0x208b();
}
function vault() {
    const _0x3a9ee3 = _0x155d, _0x4083d7 = {
            'SKgEL': function (_0x26ff7f, _0x278be1) {
                return _0x26ff7f(_0x278be1);
            },
            'qZmcU': _0x3a9ee3(0x9f)
        };
    _0x4083d7[_0x3a9ee3(0x8f)](log, _0x4083d7['qZmcU']);
}
function unvault() {
    const _0x3e7201 = _0x155d, _0x5f58d2 = {
            'jlYIf': function (_0x1e0a29, _0x4b11ef) {
                return _0x1e0a29(_0x4b11ef);
            },
            'JvYGT': _0x3e7201(0x9f)
        };
    _0x5f58d2[_0x3e7201(0x8a)](log, _0x5f58d2['JvYGT']);
}
async function getListCoin() {
    const _0x441482 = _0x155d, _0x3c90f6 = {
            'pCzjE': _0x441482(0xab),
            'cYmlA': function (_0x1dacd3) {
                return _0x1dacd3();
            }
        };
    return coins = [_0x3c90f6[_0x441482(0x92)]], coin = coins[0x0], (_0x3c90f6[_0x441482(0xa5)](drawSelectCoin), _0x3c90f6['cYmlA'](checkbalance));
}
async function checkbalance() {
    const _0x1948a2 = _0x155d, _0x310959 = {
            'EGLZn': _0x1948a2(0x79),
            'dwXDi': function (_0x5dcff7, _0x310a67) {
                return _0x5dcff7 + _0x310a67;
            },
            'KiSse': _0x1948a2(0x8b),
            'QBSmK': function (_0x39c426) {
                return _0x39c426();
            },
            'xIfrR': _0x1948a2(0x85),
            'aKRDT': function (_0x19c95b, _0x5a460a) {
                return _0x19c95b(_0x5a460a);
            },
            'hersa': 'balance=',
            'sLqDu': function (_0x3ea5d1, _0x789f76) {
                return _0x3ea5d1 + _0x789f76;
            },
            'XfVrU': _0x1948a2(0x80),
            'zjMes': 'maxbalance=',
            'PYUbH': function (_0x279633) {
                return _0x279633();
            },
            'ngizd': function (_0x4c5793, _0x20be49) {
                return _0x4c5793(_0x20be49);
            }
        };
    try {
        const _0x43613b = _0x310959['EGLZn'][_0x1948a2(0x8d)]('|');
        let _0x3f80b9 = 0x0;
        while (!![]) {
            switch (_0x43613b[_0x3f80b9++]) {
            case '0':
                startBalance = balance;
                continue;
            case '1':
                maxbet = balance;
                continue;
            case '2':
                fengari[_0x1948a2(0xa3)](_0x310959[_0x1948a2(0x94)](_0x310959['KiSse'], balance))();
                continue;
            case '3':
                return _0x310959[_0x1948a2(0x7d)](updateStats);
            case '4':
                fengari[_0x1948a2(0xa3)](_0x310959[_0x1948a2(0xa1)] + maxbet)();
                continue;
            case '5':
                maxbalance = balance;
                continue;
            case '6':
                minbet = 1e-8;
                continue;
            case '7':
                balance = Number(_0x310959[_0x1948a2(0x91)]($, _0x1948a2(0x86))[_0x1948a2(0x9a)]());
                continue;
            case '8':
                fengari['load'](_0x310959[_0x1948a2(0x94)](_0x310959[_0x1948a2(0x97)], balance))();
                continue;
            case '9':
                minbalance = balance;
                continue;
            case '10':
                fengari['load'](_0x310959['sLqDu'](_0x310959['XfVrU'], minbet))();
                continue;
            case '11':
                fengari[_0x1948a2(0xa3)](_0x310959[_0x1948a2(0xa9)] + balance)();
                continue;
            }
            break;
        }
    } catch (_0x2259c9) {
        return _0x310959[_0x1948a2(0xa7)](stop), _0x310959[_0x1948a2(0x96)](log, _0x310959['ngizd'](getErrMsg, _0x2259c9));
    }
}
async function resetseed() {
}
async function sendBet() {
    const _0x3693ff = _0x155d, _0x3c42bf = {
            'dQeDv': function (_0x5a9a0b, _0x55a33e) {
                return _0x5a9a0b / _0x55a33e;
            },
            'HVQfX': function (_0x5e777d, _0xe9e957) {
                return _0x5e777d * _0xe9e957;
            },
            'NqLiz': function (_0x47ea82, _0x691e6f) {
                return _0x47ea82 + _0x691e6f;
            },
            'UuFNX': function (_0x23a994, _0x559052) {
                return _0x23a994 - _0x559052;
            },
            'jKjXJ': function (_0x354c92, _0x4b1ca2) {
                return _0x354c92 * _0x4b1ca2;
            },
            'SHKVu': function (_0x4731f5, _0x3ba79b) {
                return _0x4731f5(_0x3ba79b);
            },
            'CEXwf': _0x3693ff(0xa6),
            'FPXEa': _0x3693ff(0x8c),
            'Pckiq': _0x3693ff(0x9d),
            'sBeyG': function (_0x3a3de1, _0xd22c48) {
                return _0x3a3de1(_0xd22c48);
            }
        };
    try {
        chance = _0x3c42bf[_0x3693ff(0x95)](Math['round'](_0x3c42bf[_0x3693ff(0x99)](_0x3c42bf[_0x3693ff(0x88)](chance, Number[_0x3693ff(0xaa)]), 0x64)), 0x64), target = bethigh ? _0x3c42bf['UuFNX'](0x186a0, parseInt(_0x3c42bf[_0x3693ff(0x9b)](chance, 0x3e8))) : _0x3c42bf[_0x3693ff(0x82)](parseInt, _0x3c42bf[_0x3693ff(0x9b)](chance, 0x3e8));
        const _0x304b05 = new FormData();
        _0x304b05[_0x3693ff(0x7c)](_0x3c42bf['CEXwf'], nextbet), _0x304b05[_0x3693ff(0x7c)](_0x3693ff(0xac), chance), _0x304b05[_0x3693ff(0x7c)](_0x3c42bf[_0x3693ff(0x84)], bethigh ? 0x1 : 0x0);
        const {data: _0x543cb3} = await axios[_0x3693ff(0x87)](_0x3c42bf[_0x3693ff(0xa2)], _0x304b05);
        if (!_0x543cb3['state'])
            return stop(), _0x3c42bf['SHKVu'](log, _0x543cb3[_0x3693ff(0xa8)]);
        handleResult(_0x543cb3);
    } catch (_0x5b8616) {
        if (_0x5b8616[_0x3693ff(0x83)]) {
        } else {
            if (_0x5b8616[_0x3693ff(0x7b)]) {
            } else
                return stop(), _0x3c42bf[_0x3693ff(0xa0)](log, _0x3c42bf[_0x3693ff(0x82)](getErrMsg, _0x5b8616));
        }
    }
}
async function handleResult(_0x345e6b) {
    const _0x53ad34 = _0x155d, _0x11302b = {
            'eRiON': function (_0x50a730, _0x511448) {
                return _0x50a730(_0x511448);
            },
            'SGtMt': function (_0x171fa1, _0x5f11b5) {
                return _0x171fa1 / _0x5f11b5;
            },
            'JIyFU': function (_0x3a0d20) {
                return _0x3a0d20();
            }
        };
    try {
        return currentprofit = _0x11302b[_0x53ad34(0x78)](Number, _0x345e6b[_0x53ad34(0x7a)]), lastBet[_0x53ad34(0x77)] = _0x11302b['SGtMt'](_0x345e6b[_0x53ad34(0x8e)], 0x3e8), result = _0x345e6b[_0x53ad34(0x8e)], handleStats();
    } catch (_0x13fc40) {
        return _0x11302b[_0x53ad34(0x7e)](stop), _0x11302b[_0x53ad34(0x78)](log, getErrMsg(_0x13fc40));
    }
}