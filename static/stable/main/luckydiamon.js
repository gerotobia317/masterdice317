const _0x3a9bbb = _0x191a;
(function (_0x29a869, _0x15a360) {
    const _0x280947 = _0x191a, _0x5ee35d = _0x29a869();
    while (!![]) {
        try {
            const _0xe1826d = -parseInt(_0x280947(0x406)) / 0x1 * (parseInt(_0x280947(0x269)) / 0x2) + -parseInt(_0x280947(0x2a7)) / 0x3 + -parseInt(_0x280947(0x160)) / 0x4 + -parseInt(_0x280947(0x413)) / 0x5 + -parseInt(_0x280947(0x3ab)) / 0x6 * (parseInt(_0x280947(0x330)) / 0x7) + -parseInt(_0x280947(0x402)) / 0x8 * (-parseInt(_0x280947(0x312)) / 0x9) + -parseInt(_0x280947(0x3f0)) / 0xa * (-parseInt(_0x280947(0x2b0)) / 0xb);
            if (_0xe1826d === _0x15a360)
                break;
            else
                _0x5ee35d['push'](_0x5ee35d['shift']());
        } catch (_0x2460f2) {
            _0x5ee35d['push'](_0x5ee35d['shift']());
        }
    }
}(_0x4b0e, 0x40bf0), Object[_0x3a9bbb(0x3dc)](String[_0x3a9bbb(0x302)], 'capitalize', {
    'value': function () {
        const _0x2723f9 = _0x3a9bbb, _0x5b9e89 = {
                'bmCFU': function (_0x3dcf14, _0x1c8650) {
                    return _0x3dcf14 + _0x1c8650;
                }
            };
        return _0x5b9e89[_0x2723f9(0x325)](this[_0x2723f9(0x379)](0x0)[_0x2723f9(0x2e6)](), this[_0x2723f9(0x2eb)](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x3a9bbb(0x3de), game = _0x3a9bbb(0x1b9), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = 'low', kenoRisk = 'classic', kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x3a9bbb(0x422), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x3a9bbb(0x422),
    'BetSide': 'between',
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x3a9bbb(0x35f))), wdbUI = _0x3a9bbb(0x1a7) + WDB_MODE + _0x3a9bbb(0x191) + CASINO_GAME + _0x3a9bbb(0x284) + WDB_HOME + '\x20|\x20' + location['hostname']['replace'](_0x3a9bbb(0x2ea), '') + _0x3a9bbb(0x415));
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = _0x3a9bbb(0x342), plinkoLuaScript = _0x3a9bbb(0x39e), plinkoJsScript = _0x3a9bbb(0x2ba), kenoLuaScript = _0x3a9bbb(0x297), kenoJsScript = _0x3a9bbb(0x31d);
function exportLog() {
    const _0x50c9c9 = _0x3a9bbb, _0xfb5e95 = { 'tWPLA': 'application/json' }, _0x25ee41 = JSON[_0x50c9c9(0x3ea)](fullLogs), _0x1742f0 = document[_0x50c9c9(0x242)]('a');
    _0x1742f0[_0x50c9c9(0x2d1)] = window[_0x50c9c9(0x3f8)][_0x50c9c9(0x2aa)](new Blob([_0x25ee41], { 'type': _0xfb5e95[_0x50c9c9(0x190)] })), _0x1742f0[_0x50c9c9(0x205)] = _0x50c9c9(0x1d6) + Date['now']()[_0x50c9c9(0x3ff)]()[_0x50c9c9(0x2eb)](-0x6) + _0x50c9c9(0x20e), _0x1742f0[_0x50c9c9(0x228)]();
}
class Chart {
    constructor(_0x55dfcc, _0x198723 = ![], _0x4d88aa = 0x64) {
        const _0x4f4a36 = _0x3a9bbb, _0x5cf6a3 = {
                'dgthZ': _0x4f4a36(0x2bc),
                'Iaajg': _0x4f4a36(0x1d1),
                'wOdMX': _0x4f4a36(0x3b0)
            };
        this['containerId'] = _0x55dfcc, this[_0x4f4a36(0x2bd)] = _0x198723, this['_maxRows'] = _0x4d88aa, this['dps'] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart'] = new CanvasJS[(_0x4f4a36(0x3f5))](_0x55dfcc, {
            'theme': _0x198723 ? _0x5cf6a3[_0x4f4a36(0x179)] : _0x5cf6a3['Iaajg'],
            'axisY': { 'includeZero': ![] },
            'data': [{
                    'type': _0x5cf6a3[_0x4f4a36(0x257)],
                    'markerSize': 0x0,
                    'dataPoints': this[_0x4f4a36(0x254)]
                }]
        }), this[_0x4f4a36(0x352)][_0x4f4a36(0x3d4)]();
    }
    set [_0x3a9bbb(0x167)](_0x1042c8) {
        const _0x666a2f = _0x3a9bbb;
        this[_0x666a2f(0x212)] = _0x1042c8;
    }
    get ['maxRows']() {
        const _0x1fe085 = _0x3a9bbb;
        return this[_0x1fe085(0x212)];
    }
    set [_0x3a9bbb(0x409)](_0x2d3c30) {
        const _0x454687 = _0x3a9bbb, _0x40ae96 = { 'PBAdO': _0x454687(0x2bc) };
        this['_darkMode'] = _0x2d3c30, this[_0x454687(0x352)][_0x454687(0x15e)][_0x454687(0x223)] = _0x2d3c30 ? _0x40ae96['PBAdO'] : _0x454687(0x1d1), this[_0x454687(0x352)]['render']();
    }
    get [_0x3a9bbb(0x409)]() {
        const _0x76a6d7 = _0x3a9bbb;
        return this[_0x76a6d7(0x2bd)];
    }
    [_0x3a9bbb(0x41a)](_0x13b26b, _0x4bae02, _0x40d10d) {
        const _0x150972 = _0x3a9bbb, _0x5b8554 = {
                'Noiot': function (_0x39ca25, _0x3d8458) {
                    return _0x39ca25 > _0x3d8458;
                },
                'lcGLj': function (_0x185e52, _0x5cdd4c) {
                    return _0x185e52 - _0x5cdd4c;
                }
            };
        this['dps']['push']({
            'x': _0x13b26b,
            'y': _0x4bae02,
            'lineColor': _0x40d10d
        });
        if (_0x5b8554[_0x150972(0x326)](this[_0x150972(0x254)][_0x150972(0x321)], this['_maxRows']))
            this[_0x150972(0x254)][_0x150972(0x286)]();
        if (this['dps'][_0x5b8554[_0x150972(0x23e)](this[_0x150972(0x254)][_0x150972(0x321)], 0x2)])
            this[_0x150972(0x254)][this[_0x150972(0x254)][_0x150972(0x321)] - 0x2]['lineColor'] = _0x40d10d;
        this['chart'][_0x150972(0x3d4)]();
    }
    ['resetChart']() {
        const _0x1ab250 = _0x3a9bbb;
        this[_0x1ab250(0x254)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x1ab250(0x352)][_0x1ab250(0x15e)]['data'][0x0][_0x1ab250(0x3c5)] = this[_0x1ab250(0x254)], this[_0x1ab250(0x352)][_0x1ab250(0x3d4)]();
    }
}
function changeMaxRows() {
    const _0x242668 = _0x3a9bbb, _0x1b2639 = {
            'pjRYl': _0x242668(0x1bf),
            'sbNyF': function (_0x1d4cf2) {
                return _0x1d4cf2();
            },
            'SwwkV': function (_0x57b356, _0x22ac4d) {
                return _0x57b356(_0x22ac4d);
            },
            'Tztmc': _0x242668(0x1e4),
            'kntgY': function (_0x58921f) {
                return _0x58921f();
            }
        }, _0x36cc07 = _0x1b2639[_0x242668(0x1a1)]['split']('|');
    let _0xafb32a = 0x0;
    while (!![]) {
        switch (_0x36cc07[_0xafb32a++]) {
        case '0':
            resetchart();
            continue;
        case '1':
            _0x1b2639[_0x242668(0x2ed)](resetlog);
            continue;
        case '2':
            maxRows = _0x1b2639['SwwkV'](Number, document['getElementById'](_0x1b2639['Tztmc'])[_0x242668(0x2ce)]);
            continue;
        case '3':
            chart[_0x242668(0x167)] = maxRows;
            continue;
        case '4':
            _0x1b2639[_0x242668(0x363)](resethistory);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x1fc1b1 = _0x3a9bbb, _0x580350 = {
            'XhGon': _0x1fc1b1(0x2e0),
            'oNTNR': '#000',
            'GXluo': _0x1fc1b1(0x2ae),
            'lGMiG': _0x1fc1b1(0x163),
            'VxoUM': _0x1fc1b1(0x23b),
            'COOFc': _0x1fc1b1(0x314),
            'gHoxV': _0x1fc1b1(0x2f2),
            'oycCk': _0x1fc1b1(0x223),
            'pmIZK': _0x1fc1b1(0x192),
            'gwZnV': _0x1fc1b1(0x32b),
            'kZkDl': 'dimgray',
            'yhfIG': _0x1fc1b1(0x328),
            'XtdRZ': _0x1fc1b1(0x211),
            'eKCWb': function (_0x52bc7f) {
                return _0x52bc7f();
            }
        };
    darkMode = !darkMode, chart['darkMode'] = darkMode;
    const _0x42c092 = document[_0x1fc1b1(0x370)](_0x580350['GXluo']), _0xce6754 = document[_0x1fc1b1(0x370)](_0x580350[_0x1fc1b1(0x3ef)]), _0x110e68 = document[_0x1fc1b1(0x2b7)](_0x580350[_0x1fc1b1(0x20a)]), _0x13952d = document[_0x1fc1b1(0x2b7)](_0x580350[_0x1fc1b1(0x366)]), _0x3123aa = document[_0x1fc1b1(0x2b7)](_0x1fc1b1(0x337));
    if (darkMode) {
        const _0x16b4e0 = _0x580350[_0x1fc1b1(0x21c)][_0x1fc1b1(0x2a5)]('|');
        let _0x5c8b44 = 0x0;
        while (!![]) {
            switch (_0x16b4e0[_0x5c8b44++]) {
            case '0':
                _0x42c092[_0x1fc1b1(0x31c)][_0x1fc1b1(0x18d)] = _0x1fc1b1(0x2e0);
                continue;
            case '1':
                _0x13952d[_0x1fc1b1(0x3a4)](_0x3d8674 => _0x3d8674[_0x1fc1b1(0x31c)][_0x1fc1b1(0x2a3)] = _0x1fc1b1(0x32b));
                continue;
            case '2':
                luaEditor[_0x1fc1b1(0x16c)](_0x580350['oycCk'], _0x580350[_0x1fc1b1(0x30f)]);
                continue;
            case '3':
                _0x42c092[_0x1fc1b1(0x31c)][_0x1fc1b1(0x305)] = _0x1fc1b1(0x2e0);
                continue;
            case '4':
                _0x3123aa[_0x1fc1b1(0x3a4)](_0x37036c => _0x37036c[_0x1fc1b1(0x31c)][_0x1fc1b1(0x2a3)] = _0x1fc1b1(0x32b));
                continue;
            case '5':
                _0x42c092[_0x1fc1b1(0x31c)][_0x1fc1b1(0x2a3)] = _0x580350[_0x1fc1b1(0x278)];
                continue;
            case '6':
                _0x110e68[_0x1fc1b1(0x3a4)](_0x580de1 => {
                    const _0x8fcde = _0x1fc1b1;
                    _0x580de1['style']['backgroundColor'] = _0x580350[_0x8fcde(0x378)], _0x580de1['style']['color'] = _0x8fcde(0x32b);
                });
                continue;
            case '7':
                _0xce6754[_0x1fc1b1(0x31c)][_0x1fc1b1(0x305)] = _0x580350[_0x1fc1b1(0x231)];
                continue;
            case '8':
                jsEditor['setOption'](_0x580350[_0x1fc1b1(0x1e9)], _0x580350[_0x1fc1b1(0x30f)]);
                continue;
            }
            break;
        }
    } else
        _0x42c092[_0x1fc1b1(0x31c)]['backgroundColor'] = _0x580350[_0x1fc1b1(0x278)], _0x42c092[_0x1fc1b1(0x31c)]['color'] = _0x580350['oNTNR'], _0x42c092[_0x1fc1b1(0x31c)][_0x1fc1b1(0x18d)] = _0x580350[_0x1fc1b1(0x278)], _0xce6754[_0x1fc1b1(0x31c)][_0x1fc1b1(0x305)] = _0x580350[_0x1fc1b1(0x25d)], luaEditor[_0x1fc1b1(0x16c)](_0x580350[_0x1fc1b1(0x1e9)], _0x580350[_0x1fc1b1(0x165)]), jsEditor['setOption'](_0x580350[_0x1fc1b1(0x1e9)], _0x580350['XtdRZ']), _0x110e68[_0x1fc1b1(0x3a4)](_0x3fc978 => {
            const _0x5e9bfc = _0x1fc1b1;
            _0x3fc978[_0x5e9bfc(0x31c)][_0x5e9bfc(0x305)] = _0x5e9bfc(0x32b), _0x3fc978[_0x5e9bfc(0x31c)][_0x5e9bfc(0x2a3)] = _0x580350[_0x5e9bfc(0x31f)];
        }), _0x13952d['forEach'](_0x1171d7 => _0x1171d7['style'][_0x1fc1b1(0x2a3)] = _0x1fc1b1(0x1ce)), _0x3123aa['forEach'](_0x12d74b => _0x12d74b[_0x1fc1b1(0x31c)][_0x1fc1b1(0x2a3)] = '#000');
    _0x580350[_0x1fc1b1(0x391)](updateStats);
}
let previousPosition = {
    'top': '5px',
    'left': '5px',
    'position': _0x3a9bbb(0x40d)
};
function loadSavedPosition() {
    const _0x1ff14e = _0x3a9bbb, _0x4885a5 = { 'sedbu': _0x1ff14e(0x3db) }, _0x24f6dc = localStorage[_0x1ff14e(0x30a)](_0x4885a5[_0x1ff14e(0x1f4)]);
    if (_0x24f6dc)
        try {
            const _0x4ed3f3 = JSON[_0x1ff14e(0x3be)](_0x24f6dc);
            _0x4ed3f3['top'] && _0x4ed3f3[_0x1ff14e(0x22e)] && (previousPosition = _0x4ed3f3);
        } catch (_0x5d48ed) {
        }
}
function savePosition() {
    const _0x15874e = _0x3a9bbb, _0x85bce2 = { 'KoaGg': _0x15874e(0x3db) };
    localStorage[_0x15874e(0x215)](_0x85bce2['KoaGg'], JSON[_0x15874e(0x3ea)](previousPosition));
}
function toggleMinimalBot(_0x5bcd4f) {
    const _0x28dcc2 = _0x3a9bbb, _0x21d9e1 = {
            'JNQnn': 'wdbMain',
            'WqgdA': _0x28dcc2(0x3a9),
            'GxlIZ': _0x28dcc2(0x2ae),
            'SpYPy': function (_0x41a5c9, _0x4808d8) {
                return _0x41a5c9 === _0x4808d8;
            },
            'jHYsh': _0x28dcc2(0x216),
            'xqUki': _0x28dcc2(0x40d),
            'XshFU': _0x28dcc2(0x18b),
            'akJEH': function (_0x443737, _0x45ac8c) {
                return _0x443737 / _0x45ac8c;
            },
            'XNyvE': 'calc(100vh\x20-\x2060px)',
            'DLPPn': function (_0x2cc75b, _0xb3c697) {
                return _0x2cc75b + _0xb3c697;
            },
            'QeVpb': _0x28dcc2(0x2b5),
            'yxmuI': _0x28dcc2(0x2cf),
            'gdwvD': _0x28dcc2(0x1fe)
        }, _0x316996 = document[_0x28dcc2(0x370)](_0x21d9e1[_0x28dcc2(0x1bd)]), _0x3a4881 = document[_0x28dcc2(0x370)](_0x21d9e1['WqgdA']), _0x4405ab = document[_0x28dcc2(0x370)](_0x21d9e1[_0x28dcc2(0x34f)]);
    if (_0x21d9e1[_0x28dcc2(0x375)](_0x5bcd4f[_0x28dcc2(0x2f1)], '▼')) {
        const _0x52dd65 = window[_0x28dcc2(0x425)](_0x4405ab);
        previousPosition = {
            'top': _0x4405ab[_0x28dcc2(0x31c)]['top'] || _0x52dd65['top'] || _0x21d9e1[_0x28dcc2(0x16d)],
            'left': _0x4405ab['style'][_0x28dcc2(0x22e)] || _0x52dd65[_0x28dcc2(0x22e)] || _0x21d9e1[_0x28dcc2(0x16d)],
            'position': _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x351)] || _0x52dd65[_0x28dcc2(0x351)] || _0x21d9e1[_0x28dcc2(0x3d3)]
        }, savePosition(), _0x316996[_0x28dcc2(0x31c)]['display'] = _0x21d9e1[_0x28dcc2(0x2a8)], _0x3a4881[_0x28dcc2(0x31c)][_0x28dcc2(0x3d5)] = _0x21d9e1[_0x28dcc2(0x2a8)], _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x26c)] = _0x28dcc2(0x1fc);
        const _0x2d55b9 = window['innerWidth'], _0x47292b = 0x15e, _0x12013a = _0x21d9e1[_0x28dcc2(0x2f0)](_0x2d55b9 - _0x47292b, 0x2);
        _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x17c)] = _0x21d9e1[_0x28dcc2(0x38c)], _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x22e)] = _0x21d9e1[_0x28dcc2(0x2a1)](_0x12013a, 'px'), _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x351)] = _0x21d9e1['xqUki'], _0x5bcd4f['innerText'] = '▲';
    } else {
        const _0x35a97c = _0x21d9e1[_0x28dcc2(0x1b2)]['split']('|');
        let _0x2c0069 = 0x0;
        while (!![]) {
            switch (_0x35a97c[_0x2c0069++]) {
            case '0':
                _0x5bcd4f['innerText'] = '▼';
                continue;
            case '1':
                _0x4405ab['style'][_0x28dcc2(0x26c)] = _0x21d9e1[_0x28dcc2(0x1f6)];
                continue;
            case '2':
                _0x316996[_0x28dcc2(0x31c)][_0x28dcc2(0x3d5)] = _0x21d9e1['gdwvD'];
                continue;
            case '3':
                _0x4405ab['style']['position'] = previousPosition['position'];
                continue;
            case '4':
                _0x4405ab['style']['left'] = previousPosition[_0x28dcc2(0x22e)];
                continue;
            case '5':
                _0x4405ab[_0x28dcc2(0x31c)][_0x28dcc2(0x17c)] = previousPosition[_0x28dcc2(0x17c)];
                continue;
            case '6':
                _0x3a4881[_0x28dcc2(0x31c)][_0x28dcc2(0x3d5)] = _0x21d9e1['gdwvD'];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x3588ee) {
    const _0x2e01a8 = _0x3a9bbb, _0x1379a9 = {
            'fFJUp': function (_0x43fc94, _0x3e4362) {
                return _0x43fc94 === _0x3e4362;
            },
            'RRXbC': _0x2e01a8(0x18b),
            'ZpdWH': _0x2e01a8(0x27b)
        }, _0x149506 = document[_0x2e01a8(0x370)](_0x2e01a8(0x33d));
    _0x1379a9[_0x2e01a8(0x3e9)](_0x3588ee[_0x2e01a8(0x2f1)], '▲') ? (_0x149506['style'][_0x2e01a8(0x3d5)] = _0x1379a9[_0x2e01a8(0x2e4)], _0x3588ee['innerText'] = '▼') : (_0x149506[_0x2e01a8(0x31c)][_0x2e01a8(0x3d5)] = _0x1379a9[_0x2e01a8(0x27c)], _0x3588ee[_0x2e01a8(0x2f1)] = '▲');
}
function drawSelectCoin() {
    const _0x1fb7cc = _0x3a9bbb, _0x4ed03c = { 'SJylq': _0x1fb7cc(0x140) }, _0xba44bd = coins[_0x1fb7cc(0x144)](_0x393ac2 => '<option\x20value=\x22' + _0x393ac2 + '\x22>' + _0x393ac2 + _0x1fb7cc(0x2a4))['join']('');
    document[_0x1fb7cc(0x370)](_0x4ed03c[_0x1fb7cc(0x2d6)])[_0x1fb7cc(0x3b9)] = _0xba44bd, currency = String(coin)['toLowerCase'](), fengari[_0x1fb7cc(0x419)](_0x1fb7cc(0x221) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x35fe8a = _0x3a9bbb, _0x5c6487 = {
            'TExrb': _0x35fe8a(0x3ce),
            'ZUtnS': function (_0x31cfd3, _0x49b502) {
                return _0x31cfd3 - _0x49b502;
            },
            'oFIfz': function (_0x1f3b35, _0x20ea96) {
                return _0x1f3b35 + _0x20ea96;
            },
            'yhieX': function (_0x5e071d, _0x46d7ca) {
                return _0x5e071d === _0x46d7ca;
            },
            'RKWia': 'INPUT',
            'LymQe': _0x35fe8a(0x3a1),
            'kFzfC': function (_0x1851c1, _0x5705a7) {
                return _0x1851c1 / _0x5705a7;
            },
            'ZSTkJ': function (_0x48a9aa) {
                return _0x48a9aa();
            },
            'awbAm': 'wdbToggleMinimal',
            'EpyTd': function (_0x8783a7, _0x2ced20) {
                return _0x8783a7 === _0x2ced20;
            },
            'KbwAp': function (_0x1674ff, _0xa839cd) {
                return _0x1674ff - _0xa839cd;
            },
            'smTHr': _0x35fe8a(0x282),
            'ErrnH': _0x35fe8a(0x19a),
            'psYRr': 'wdb',
            'BSxAT': function (_0x4eca21) {
                return _0x4eca21();
            },
            'OxSFc': 'wdbHeader',
            'iBzAV': _0x35fe8a(0x14b),
            'nMBdB': 'resize',
            'AgmFo': _0x35fe8a(0x25f),
            'cRQqz': _0x35fe8a(0x353),
            'zmoRb': _0x35fe8a(0x1b8),
            'nJpMx': 'default',
            'ZqAAt': _0x35fe8a(0x3de),
            'wMgsG': _0x35fe8a(0x3e0),
            'wtSuT': _0x35fe8a(0x18b),
            'lrjIT': _0x35fe8a(0x189),
            'qjsWc': 'wdbWrapVariables',
            'lZSJW': _0x35fe8a(0x196),
            'NkBBB': _0x35fe8a(0x1cd),
            'xoqCC': 'wdbShowMode',
            'bGWnQ': 'wdbOpenLUAScript',
            'Ipalo': 'wdbOpenJSScript',
            'BgQyG': _0x35fe8a(0x228),
            'QdPJn': _0x35fe8a(0x21a),
            'PaVTu': _0x35fe8a(0x359)
        }, _0x28d617 = document[_0x35fe8a(0x242)](_0x5c6487[_0x35fe8a(0x1cc)]);
    _0x28d617['id'] = _0x5c6487[_0x35fe8a(0x25b)], _0x28d617[_0x35fe8a(0x3b9)] = wdbUI, document[_0x35fe8a(0x3b8)]['prepend'](_0x28d617);
    const _0x57f35a = document[_0x35fe8a(0x370)](_0x5c6487[_0x35fe8a(0x1e6)]);
    let _0x1d6e67 = 0x0, _0x42a6b9 = 0x0, _0x3a001b = 0x0, _0x56e724 = 0x0;
    _0x5c6487[_0x35fe8a(0x28c)](loadSavedPosition), _0x57f35a['style'][_0x35fe8a(0x17c)] = previousPosition['top'], _0x57f35a['style'][_0x35fe8a(0x22e)] = previousPosition[_0x35fe8a(0x22e)], _0x57f35a['style'][_0x35fe8a(0x351)] = previousPosition['position'];
    function _0x203805(_0xdcc6cc) {
        const _0x466f57 = _0x35fe8a, _0x5c6424 = _0x5c6487[_0x466f57(0x159)][_0x466f57(0x2a5)]('|');
        let _0x4ab7a2 = 0x0;
        while (!![]) {
            switch (_0x5c6424[_0x4ab7a2++]) {
            case '0':
                _0xdcc6cc = _0xdcc6cc || window[_0x466f57(0x28f)];
                continue;
            case '1':
                _0x3a001b = _0xdcc6cc['clientX'];
                continue;
            case '2':
                document['onmousemove'] = _0x568ed0;
                continue;
            case '3':
                _0x56e724 = _0xdcc6cc['clientY'];
                continue;
            case '4':
                _0xdcc6cc[_0x466f57(0x2c0)]();
                continue;
            case '5':
                document[_0x466f57(0x32a)] = _0x2ff38a;
                continue;
            }
            break;
        }
    }
    function _0x568ed0(_0x483199) {
        const _0x125981 = _0x35fe8a;
        _0x483199 = _0x483199 || window[_0x125981(0x28f)], _0x483199[_0x125981(0x2c0)](), _0x1d6e67 = _0x5c6487[_0x125981(0x403)](_0x3a001b, _0x483199[_0x125981(0x262)]), _0x42a6b9 = _0x5c6487['ZUtnS'](_0x56e724, _0x483199[_0x125981(0x152)]), _0x3a001b = _0x483199[_0x125981(0x262)], _0x56e724 = _0x483199[_0x125981(0x152)];
        let _0x348306 = _0x57f35a['offsetTop'] - _0x42a6b9, _0x1ae96d = _0x5c6487['ZUtnS'](_0x57f35a[_0x125981(0x2bf)], _0x1d6e67);
        _0x57f35a[_0x125981(0x31c)][_0x125981(0x17c)] = _0x348306 + 'px', _0x57f35a[_0x125981(0x31c)][_0x125981(0x22e)] = _0x5c6487[_0x125981(0x336)](_0x1ae96d, 'px');
    }
    function _0x2ff38a() {
        const _0x37e89 = _0x35fe8a, _0x2d57b5 = document[_0x37e89(0x370)]('wdbToggleMinimal');
        if (_0x2d57b5 && _0x5c6487[_0x37e89(0x349)](_0x2d57b5[_0x37e89(0x2f1)], '▼')) {
            const _0xd7f1b6 = window[_0x37e89(0x425)](_0x57f35a);
            previousPosition['top'] = _0x57f35a[_0x37e89(0x31c)]['top'] || _0xd7f1b6[_0x37e89(0x17c)], previousPosition['left'] = _0x57f35a[_0x37e89(0x31c)]['left'] || _0xd7f1b6['left'], savePosition();
        }
        document[_0x37e89(0x32a)] = null, document['onmousemove'] = null;
    }
    document[_0x35fe8a(0x370)](_0x5c6487[_0x35fe8a(0x277)])[_0x35fe8a(0x384)] = _0x203805, document[_0x35fe8a(0x18f)](_0x5c6487[_0x35fe8a(0x2e2)], function (_0x39b5f9) {
        const _0x135013 = _0x35fe8a;
        if (_0x5c6487[_0x135013(0x349)](_0x39b5f9['key'][_0x135013(0x2d7)](), 'w')) {
            const _0x111f68 = document[_0x135013(0x2f3)], _0xd81655 = _0x5c6487['yhieX'](_0x111f68[_0x135013(0x37f)], _0x5c6487[_0x135013(0x3f6)]) || _0x5c6487[_0x135013(0x349)](_0x111f68[_0x135013(0x37f)], _0x135013(0x258)) || _0x111f68[_0x135013(0x2a9)] || _0x111f68[_0x135013(0x218)](_0x5c6487[_0x135013(0x1dc)]);
            if (!_0xd81655) {
                const _0x398385 = _0x5c6487[_0x135013(0x403)](window[_0x135013(0x2c6)], _0x57f35a[_0x135013(0x18a)]) / 0x2, _0x2dd28d = _0x5c6487[_0x135013(0x2d9)](_0x5c6487[_0x135013(0x403)](window[_0x135013(0x390)], _0x57f35a[_0x135013(0x31a)]), 0x2);
                _0x57f35a[_0x135013(0x31c)][_0x135013(0x17c)] = _0x5c6487[_0x135013(0x336)](_0x398385, 'px'), _0x57f35a[_0x135013(0x31c)][_0x135013(0x22e)] = _0x5c6487[_0x135013(0x336)](_0x2dd28d, 'px');
                const _0x4707db = document[_0x135013(0x370)](_0x135013(0x3ec));
                _0x4707db && _0x4707db['innerText'] === '▼' && (previousPosition[_0x135013(0x17c)] = _0x57f35a[_0x135013(0x31c)][_0x135013(0x17c)], previousPosition[_0x135013(0x22e)] = _0x57f35a[_0x135013(0x31c)][_0x135013(0x22e)], _0x5c6487[_0x135013(0x1f7)](savePosition));
            }
        }
    }), window[_0x35fe8a(0x18f)](_0x5c6487[_0x35fe8a(0x19d)], function () {
        const _0x1249e1 = _0x35fe8a, _0x5891a9 = document[_0x1249e1(0x370)](_0x5c6487[_0x1249e1(0x14e)]);
        if (_0x5891a9 && _0x5c6487['EpyTd'](_0x5891a9['innerText'], '▲')) {
            const _0x53977c = window[_0x1249e1(0x390)], _0x2c65b8 = 0x15e, _0x325e42 = _0x5c6487[_0x1249e1(0x2d9)](_0x5c6487['KbwAp'](_0x53977c, _0x2c65b8), 0x2);
            _0x57f35a['style'][_0x1249e1(0x22e)] = _0x5c6487['oFIfz'](_0x325e42, 'px');
        }
    });
    if (document[_0x35fe8a(0x370)](_0x5c6487[_0x35fe8a(0x37e)]))
        document[_0x35fe8a(0x370)](_0x5c6487[_0x35fe8a(0x37e)])[_0x35fe8a(0x303)]();
    if (document['getElementById'](_0x5c6487[_0x35fe8a(0x1b1)]))
        document['getElementById'](_0x5c6487['cRQqz'])[_0x35fe8a(0x303)]();
    luaEditor = CodeMirror[_0x35fe8a(0x187)](document['getElementById'](_0x5c6487['zmoRb']), {
        'theme': _0x5c6487[_0x35fe8a(0x285)],
        'mode': _0x5c6487[_0x35fe8a(0x329)],
        'lineNumbers': !![]
    }), luaEditor[_0x35fe8a(0x154)](), jsEditor = CodeMirror[_0x35fe8a(0x187)](document[_0x35fe8a(0x370)]('wdbScriptBoxJS'), {
        'theme': _0x5c6487[_0x35fe8a(0x285)],
        'mode': _0x5c6487['wMgsG'],
        'lineNumbers': !![]
    }), jsEditor['save'](), document[_0x35fe8a(0x370)](_0x35fe8a(0x141))[_0x35fe8a(0x31c)][_0x35fe8a(0x3d5)] = _0x5c6487[_0x35fe8a(0x400)], document[_0x35fe8a(0x370)](_0x35fe8a(0x30d))[_0x35fe8a(0x31c)]['display'] = 'none', document['getElementById'](_0x5c6487['lrjIT'])[_0x35fe8a(0x31c)][_0x35fe8a(0x3d5)] = _0x5c6487[_0x35fe8a(0x400)], document[_0x35fe8a(0x370)](_0x5c6487['qjsWc'])[_0x35fe8a(0x31c)][_0x35fe8a(0x3d5)] = _0x5c6487[_0x35fe8a(0x400)], document['getElementById'](_0x5c6487[_0x35fe8a(0x3da)])['style'][_0x35fe8a(0x3d5)] = _0x5c6487[_0x35fe8a(0x400)], document[_0x35fe8a(0x370)](_0x5c6487[_0x35fe8a(0x1f3)])[_0x35fe8a(0x31c)][_0x35fe8a(0x3d5)] = _0x35fe8a(0x18b), document[_0x35fe8a(0x370)](_0x5c6487['xoqCC'])[_0x35fe8a(0x139)] = !![];
    const _0x3cf5b0 = document['getElementById'](_0x5c6487[_0x35fe8a(0x361)]);
    _0x3cf5b0[_0x35fe8a(0x18f)](_0x35fe8a(0x228), () => {
        _0x3cf5b0['value'] = null;
    }), _0x3cf5b0['addEventListener']('change', async _0x32c982 => {
        const _0x921dc2 = _0x35fe8a, _0x2a7358 = await new Response(_0x32c982[_0x921dc2(0x34d)][_0x921dc2(0x153)][0x0])[_0x921dc2(0x417)]();
        if (!_0x2a7358)
            return;
        luaEditor['setValue'](_0x2a7358);
    });
    const _0x5d8f4c = document[_0x35fe8a(0x370)](_0x5c6487['Ipalo']);
    return _0x5d8f4c[_0x35fe8a(0x18f)](_0x5c6487[_0x35fe8a(0x1ae)], () => {
        _0x5d8f4c['value'] = null;
    }), _0x5d8f4c[_0x35fe8a(0x18f)](_0x5c6487['QdPJn'], async _0x4a6c8d => {
        const _0x5677bb = _0x35fe8a, _0x5f4690 = await new Response(_0x4a6c8d[_0x5677bb(0x34d)]['files'][0x0])['text']();
        if (!_0x5f4690)
            return;
        jsEditor[_0x5677bb(0x1fa)](_0x5f4690);
    }), chart = new Chart(_0x35fe8a(0x17e), ![], 0x64), _0x5c6487[_0x35fe8a(0x263)];
}
async function wdbLoader(_0x5c6c59) {
    const _0x4c8890 = _0x3a9bbb, _0xb09b21 = {
            'vyuPJ': _0x4c8890(0x2ee),
            'RLsKJ': _0x4c8890(0x36a),
            'hHbAV': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
            'zuMil': _0x4c8890(0x368),
            'LUqiL': _0x4c8890(0x40b),
            'OusQs': function (_0x16665a, _0x4893aa) {
                return _0x16665a + _0x4893aa;
            },
            'QUkgh': _0x4c8890(0x323),
            'pozXM': function (_0x379e53, _0x21a679) {
                return _0x379e53 + _0x21a679;
            },
            'VqJFM': '/canvasjs.min.js',
            'AOwqE': _0x4c8890(0x25c),
            'rYZaY': _0x4c8890(0x308),
            'oQmrm': function (_0x44c43e, _0x98b0be) {
                return _0x44c43e(_0x98b0be);
            },
            'klWTW': function (_0x211981) {
                return _0x211981();
            },
            'KzDbI': function (_0x20a1d5) {
                return _0x20a1d5();
            },
            'yHRfR': function (_0x586e90) {
                return _0x586e90();
            },
            'giCrr': function (_0x2dd42d, _0x1174e1) {
                return _0x2dd42d === _0x1174e1;
            },
            'mJsaf': _0x4c8890(0x1d4),
            'aJOtx': _0x4c8890(0x230),
            'lkQNP': 'Connected',
            'idsfm': _0x4c8890(0x316)
        }, _0x1c7b78 = [
            _0xb09b21[_0x4c8890(0x3b2)],
            _0xb09b21['RLsKJ'],
            _0xb09b21['hHbAV'],
            _0xb09b21['zuMil'],
            _0xb09b21[_0x4c8890(0x3cc)],
            _0xb09b21[_0x4c8890(0x296)](WDB_LIB, _0xb09b21[_0x4c8890(0x3af)]),
            _0xb09b21[_0x4c8890(0x1e1)](WDB_LIB, _0xb09b21['VqJFM'])
        ], _0x8205d4 = [
            _0xb09b21[_0x4c8890(0x157)],
            _0xb09b21[_0x4c8890(0x1ac)]
        ];
    for (const _0x1b3dae of _0x1c7b78) {
        await _0x5c6c59['loadScript'](_0x1b3dae);
    }
    for (const _0x38c5cc of _0x8205d4) {
        await _0x5c6c59['loadCSS'](_0x38c5cc);
    }
    await _0xb09b21[_0x4c8890(0x424)](beforeWork, _0x5c6c59), await _0xb09b21['klWTW'](wdbCreateUI), await _0xb09b21[_0x4c8890(0x3c1)](getListCoin), await _0xb09b21[_0x4c8890(0x283)](initLua);
    if (_0xb09b21[_0x4c8890(0x19f)](game, _0xb09b21[_0x4c8890(0x237)]))
        luaEditor['setValue'](rangediceLuaScript), jsEditor[_0x4c8890(0x1fa)](rangediceJsScript), document[_0x4c8890(0x17d)](_0xb09b21[_0x4c8890(0x1e7)])[_0x4c8890(0x139)] = !![];
    else {
        if (game === _0x4c8890(0x29d))
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0x4c8890(0x1fa)](plinkoJsScript), document['querySelector'](_0xb09b21[_0x4c8890(0x1e7)])['disabled'] = !![];
        else
            _0xb09b21['giCrr'](game, _0x4c8890(0x416)) && (luaEditor[_0x4c8890(0x1fa)](kenoLuaScript), jsEditor[_0x4c8890(0x1fa)](kenoJsScript), document['querySelector'](_0xb09b21['aJOtx'])[_0x4c8890(0x139)] = !![]);
    }
    return _0xb09b21[_0x4c8890(0x424)](log, _0xb09b21['lkQNP']), _0xb09b21['idsfm'];
}
function toggleNav(_0x5afe92) {
    const _0x445a81 = _0x3a9bbb, _0xde565a = {
            'sCNCu': function (_0x41f50e, _0x2b8dbd) {
                return _0x41f50e === _0x2b8dbd;
            },
            'rqWin': 'block',
            'dJEPI': _0x445a81(0x14c),
            'BiQQS': _0x445a81(0x339),
            'jJwgv': _0x445a81(0x200),
            'ATVbS': _0x445a81(0x2a6),
            'EOPeK': _0x445a81(0x267)
        }, _0x30ec29 = [
            _0xde565a['dJEPI'],
            _0xde565a[_0x445a81(0x1d9)],
            _0xde565a['jJwgv'],
            _0xde565a[_0x445a81(0x291)],
            _0xde565a[_0x445a81(0x2da)]
        ];
    _0x30ec29[_0x445a81(0x3a4)](_0x30354c => {
        const _0x328246 = _0x445a81, _0x5e4782 = _0xde565a[_0x328246(0x29f)](_0x30354c['toLowerCase'](), _0x5afe92) ? _0xde565a[_0x328246(0x301)] : _0x328246(0x18b);
        document[_0x328246(0x370)]('wdbWrap' + _0x30354c)[_0x328246(0x31c)]['display'] = _0x5e4782, document[_0x328246(0x370)](_0x328246(0x3aa) + _0x30354c)['disabled'] = _0xde565a[_0x328246(0x29f)](_0x5e4782, _0x328246(0x1fe));
    });
}
function toggleShow(_0x8b473c) {
    const _0x5bc40c = _0x3a9bbb, _0x186c53 = {
            'eewzG': function (_0x3908b1, _0x3b1b22) {
                return _0x3908b1 + _0x3b1b22;
            }
        }, _0x5f2d23 = document[_0x5bc40c(0x370)]('wdbToggleShow' + _0x186c53[_0x5bc40c(0x410)](_0x8b473c[_0x5bc40c(0x379)](0x0)['toUpperCase'](), _0x8b473c[_0x5bc40c(0x2eb)](0x1)))[_0x5bc40c(0x2e7)];
    selectFunction(_0x5f2d23 ? _0x5bc40c(0x20b) + _0x8b473c : _0x5bc40c(0x40f) + _0x8b473c);
}
function toggleLive(_0x41e44c) {
    const _0x4cf064 = _0x3a9bbb, _0x499ba9 = {
            'LHDQz': function (_0x4131c4, _0x4ba5ef) {
                return _0x4131c4 + _0x4ba5ef;
            },
            'mtTKK': function (_0xca3c95, _0x3b2ee0) {
                return _0xca3c95(_0x3b2ee0);
            },
            'lptvy': _0x4cf064(0x3f3),
            'ytDyF': _0x4cf064(0x143)
        }, _0x385b8b = document[_0x4cf064(0x370)](_0x4cf064(0x2f4) + _0x499ba9[_0x4cf064(0x245)](_0x41e44c[_0x4cf064(0x379)](0x0)[_0x4cf064(0x2e6)](), _0x41e44c['slice'](0x1)))['checked'];
    _0x499ba9[_0x4cf064(0x331)](selectFunction, '' + (_0x385b8b ? _0x499ba9['lptvy'] : _0x499ba9['ytDyF']) + _0x41e44c);
}
function selectFunction(_0x105cf0) {
    const _0xcc24fe = _0x3a9bbb, _0x44b88b = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0xcc24fe(0x14d)),
            'resethistory': () => toggleHistory(_0xcc24fe(0x35e)),
            'resetlog': () => toggleLog(_0xcc24fe(0x35e)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0xcc24fe(0x143)),
            'startchart': () => toggleChart(_0xcc24fe(0x3f3)),
            'stophistory': () => toggleHistory(_0xcc24fe(0x143)),
            'starthistory': () => toggleHistory(_0xcc24fe(0x3f3)),
            'stoplog': () => toggleLog(_0xcc24fe(0x143)),
            'startlog': () => toggleLog('start'),
            'hidestats': () => toggleStats('hide'),
            'showstats': () => toggleStats(_0xcc24fe(0x20b)),
            'hidechart': () => toggleChart('hide'),
            'showchart': () => toggleChart('show'),
            'hidehistory': () => toggleHistory(_0xcc24fe(0x40f)),
            'showhistory': () => toggleHistory('show')
        };
    if (_0x44b88b[_0x105cf0])
        _0x44b88b[_0x105cf0]();
}
function toggleMode(_0x5dbf5d) {
    const _0x27f87f = _0x3a9bbb, _0x2a4d2b = {
            'DoIGi': function (_0x50f223, _0x2a7a90) {
                return _0x50f223 === _0x2a7a90;
            },
            'GpDux': 'rangedice',
            'iLUYR': _0x27f87f(0x29d),
            'gCyRD': function (_0xd07781, _0x28ddd3) {
                return _0xd07781 === _0x28ddd3;
            },
            'hNFiN': _0x27f87f(0x416),
            'axZtS': _0x27f87f(0x141),
            'RsqNq': function (_0x276f0b, _0x1b4c55) {
                return _0x276f0b === _0x1b4c55;
            },
            'XPIud': _0x27f87f(0x3de),
            'qgboG': _0x27f87f(0x1fe),
            'lPPva': _0x27f87f(0x18b),
            'BXOLD': function (_0x4ff0c7, _0x4419bb) {
                return _0x4ff0c7 === _0x4419bb;
            }
        };
    mode = _0x5dbf5d;
    if (_0x2a4d2b[_0x27f87f(0x3e3)](game, _0x2a4d2b[_0x27f87f(0x206)]))
        luaEditor[_0x27f87f(0x1fa)](rangediceLuaScript), jsEditor[_0x27f87f(0x1fa)](rangediceJsScript);
    else {
        if (_0x2a4d2b['DoIGi'](game, _0x2a4d2b[_0x27f87f(0x42b)]))
            luaEditor[_0x27f87f(0x1fa)](plinkoLuaScript), jsEditor[_0x27f87f(0x1fa)](plinkoJsScript);
        else
            _0x2a4d2b[_0x27f87f(0x2c4)](game, _0x2a4d2b[_0x27f87f(0x3fe)]) && (luaEditor[_0x27f87f(0x1fa)](kenoLuaScript), jsEditor['setValue'](kenoJsScript));
    }
    const _0x43e278 = document[_0x27f87f(0x370)]('wdbLUAMode'), _0x1774ed = document[_0x27f87f(0x370)](_0x2a4d2b['axZtS']), _0x37d926 = document['getElementById']('wdbAdvancedMode');
    _0x43e278[_0x27f87f(0x31c)][_0x27f87f(0x3d5)] = _0x2a4d2b[_0x27f87f(0x2cd)](_0x5dbf5d, _0x2a4d2b[_0x27f87f(0x3d7)]) ? _0x2a4d2b[_0x27f87f(0x3bb)] : _0x2a4d2b[_0x27f87f(0x2b2)], _0x1774ed['style']['display'] = _0x5dbf5d === 'js' ? _0x27f87f(0x1fe) : _0x27f87f(0x18b), _0x37d926[_0x27f87f(0x31c)][_0x27f87f(0x3d5)] = _0x2a4d2b[_0x27f87f(0x27a)](_0x5dbf5d, _0x27f87f(0x38a)) ? _0x2a4d2b['qgboG'] : _0x2a4d2b[_0x27f87f(0x2b2)], luaEditor[_0x27f87f(0x16b)](), jsEditor[_0x27f87f(0x16b)]();
}
function toggleStats(_0x81e05b) {
    const _0xf0cb76 = _0x3a9bbb, _0x2543ef = {
            'wptSH': function (_0x216d4d, _0x2b9aef) {
                return _0x216d4d === _0x2b9aef;
            },
            'TUzxN': _0xf0cb76(0x18b),
            'RMalC': _0xf0cb76(0x27b),
            'hxuqP': 'wdbStats'
        }, _0x29ebd7 = _0x2543ef[_0xf0cb76(0x37c)](_0x81e05b, 'hide') ? _0x2543ef[_0xf0cb76(0x412)] : _0x2543ef[_0xf0cb76(0x1b4)];
    document['getElementById'](_0x2543ef[_0xf0cb76(0x41f)])[_0xf0cb76(0x31c)][_0xf0cb76(0x3d5)] = _0x29ebd7;
}
function toggleChart(_0x145bb2) {
    const _0x43878f = _0x3a9bbb, _0x5b9fbb = {
            'jzeoU': _0x43878f(0x343),
            'YURJz': _0x43878f(0x40f),
            'QdsEa': 'none',
            'jZFYN': _0x43878f(0x26d),
            'GNpWz': _0x43878f(0x20b),
            'LuyuL': _0x43878f(0x1fe),
            'HhvSV': '190px',
            'FmqsB': _0x43878f(0x143),
            'DdAam': _0x43878f(0x3f3)
        }, _0x31b05d = document['getElementById']('wdbChart'), _0x45e7da = document[_0x43878f(0x370)](_0x5b9fbb[_0x43878f(0x1c8)]);
    switch (_0x145bb2) {
    case _0x5b9fbb[_0x43878f(0x3ed)]:
        _0x31b05d[_0x43878f(0x31c)]['display'] = _0x5b9fbb[_0x43878f(0x2f6)], _0x45e7da[_0x43878f(0x31c)][_0x43878f(0x193)] = _0x5b9fbb[_0x43878f(0x176)];
        break;
    case _0x5b9fbb['GNpWz']:
        _0x31b05d[_0x43878f(0x31c)][_0x43878f(0x3d5)] = _0x5b9fbb[_0x43878f(0x14f)], _0x45e7da[_0x43878f(0x31c)][_0x43878f(0x193)] = _0x5b9fbb[_0x43878f(0x183)];
        break;
    case _0x5b9fbb[_0x43878f(0x3c3)]:
        stopChart = !![];
        break;
    case _0x5b9fbb['DdAam']:
        stopChart = ![];
        break;
    case _0x43878f(0x14d):
        betsChart = 0x0, profitChart = 0x0, chart[_0x43878f(0x2b3)]();
        break;
    }
}
function toggleHistory(_0x4abbe3) {
    const _0x4e9180 = _0x3a9bbb, _0x1f4311 = {
            'ZKMfr': _0x4e9180(0x26b),
            'kuJds': _0x4e9180(0x17e),
            'xQeBw': 'hide',
            'TjNRK': _0x4e9180(0x26d),
            'MGijz': _0x4e9180(0x20b),
            'zaxeU': _0x4e9180(0x1fe),
            'XaeJH': _0x4e9180(0x300),
            'Zgcju': _0x4e9180(0x143),
            'OBTNx': _0x4e9180(0x3f3),
            'oWWUh': _0x4e9180(0x35e)
        }, _0x2e8c25 = document[_0x4e9180(0x370)](_0x1f4311['ZKMfr']), _0x4adb50 = document[_0x4e9180(0x370)](_0x1f4311['kuJds']);
    switch (_0x4abbe3) {
    case _0x1f4311[_0x4e9180(0x23a)]:
        _0x2e8c25[_0x4e9180(0x31c)][_0x4e9180(0x3d5)] = _0x4e9180(0x18b), _0x4adb50[_0x4e9180(0x31c)]['height'] = _0x1f4311[_0x4e9180(0x13b)];
        break;
    case _0x1f4311[_0x4e9180(0x182)]:
        _0x2e8c25['style']['display'] = _0x1f4311[_0x4e9180(0x1a2)], _0x4adb50[_0x4e9180(0x31c)][_0x4e9180(0x193)] = _0x1f4311['XaeJH'];
        break;
    case _0x1f4311[_0x4e9180(0x383)]:
        stopHistory = !![];
        break;
    case _0x1f4311[_0x4e9180(0x382)]:
        stopHistory = ![];
        break;
    case _0x1f4311[_0x4e9180(0x364)]:
        _0x2e8c25[_0x4e9180(0x3b9)] = '';
        break;
    }
}
function toggleLog(_0xe56ecf) {
    const _0x2dc471 = _0x3a9bbb, _0x361f16 = {
            'GwMVO': 'stop',
            'cXLbh': _0x2dc471(0x3f3)
        };
    switch (_0xe56ecf) {
    case _0x361f16[_0x2dc471(0x426)]:
        stopLog = !![];
        break;
    case _0x361f16[_0x2dc471(0x2e3)]:
        stopLog = ![];
        break;
    case _0x2dc471(0x35e):
        document['getElementById'](_0x2dc471(0x1f1))[_0x2dc471(0x3b9)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0xf31cbd = _0x3a9bbb, _0x4c2d4f = {
            'fjsbh': function (_0x351a9b, _0x3e1499) {
                return _0x351a9b(_0x3e1499);
            },
            'DEsiX': 'advancedChance',
            'iWFbj': _0xf31cbd(0x3e4),
            'iucrk': function (_0x3b76e6, _0x4125a5) {
                return _0x3b76e6(_0x4125a5);
            },
            'IurUn': function (_0x10b99f, _0x11a0bc) {
                return _0x10b99f(_0x11a0bc);
            },
            'jncDw': _0xf31cbd(0x2d2),
            'ggLlv': 'advancedChanceOnLoseCheck',
            'idpKK': 'advancedChanceOnLose',
            'acrCb': _0xf31cbd(0x380),
            'IOOFU': 'advancedMultiOnWinCheck',
            'lpEuP': function (_0x47571e, _0x4761fd) {
                return _0x47571e(_0x4761fd);
            },
            'FBYoZ': _0xf31cbd(0x1f0),
            'aPFbq': 'advancedMultiOnLoseCheck',
            'IIjqM': function (_0x2a25af, _0x9433d7) {
                return _0x2a25af(_0x9433d7);
            },
            'UCbqC': 'advancedMultiOnLose',
            'LOnnV': function (_0x394b04, _0x1e6898) {
                return _0x394b04(_0x1e6898);
            },
            'BjOax': _0xf31cbd(0x229),
            'Ubygt': function (_0x39fbba, _0x5de1bc) {
                return _0x39fbba(_0x5de1bc);
            },
            'TRBOQ': _0xf31cbd(0x1d0),
            'DtAtT': function (_0x31ef49, _0x5af2c3) {
                return _0x31ef49 === _0x5af2c3;
            },
            'bRAKY': 'advancedBetHighOnProfit',
            'xQEsm': function (_0x7cb08b, _0x218e94) {
                return _0x7cb08b >= _0x218e94;
            },
            'pOfom': _0xf31cbd(0x147),
            'FJpPm': 'resetstatsOnProfit',
            'Xpowo': function (_0x26fef9, _0x2d80dc) {
                return _0x26fef9 >= _0x2d80dc;
            },
            'jVmOs': 'advancedStopRollNumberCheck',
            'YqURG': 'advancedStopRollNumber',
            'ZYVvA': function (_0x2f1ec0) {
                return _0x2f1ec0();
            },
            'gCQoP': function (_0x515871, _0x265764) {
                return _0x515871 + _0x265764;
            },
            'PFPFR': _0xf31cbd(0x408),
            'luClC': _0xf31cbd(0x1d2),
            'qBrSO': function (_0x28edad, _0x1c1852) {
                return _0x28edad(_0x1c1852);
            },
            'AQdMx': function (_0x481a10, _0x210a58) {
                return _0x481a10 > _0x210a58;
            },
            'ArVpF': function (_0x35c43d, _0x44b07b) {
                return _0x35c43d >= _0x44b07b;
            },
            'aIGmX': function (_0x29cbb0, _0x4497b5) {
                return _0x29cbb0 <= _0x4497b5;
            },
            'PpEAs': function (_0x41e871) {
                return _0x41e871();
            },
            'KKlnY': function (_0x572e44, _0x17c791) {
                return _0x572e44 + _0x17c791;
            },
            'qgzUv': _0xf31cbd(0x149),
            'NIGpt': 'advancedStopOnBetsCheck',
            'inTQI': 'advancedStopOnBets',
            'byEep': function (_0x1462b2, _0x5deeb0) {
                return _0x1462b2 >= _0x5deeb0;
            },
            'nCqLI': function (_0x36bf9c, _0x1eea32) {
                return _0x36bf9c(_0x1eea32);
            },
            'APSXY': _0xf31cbd(0x41b),
            'WrvIc': _0xf31cbd(0x34e),
            'lYAvz': function (_0x5e5d22) {
                return _0x5e5d22();
            },
            'xkfpl': function (_0x543555, _0x421e51) {
                return _0x543555(_0x421e51);
            },
            'JliFl': _0xf31cbd(0x208),
            'kxqep': _0xf31cbd(0x3f1),
            'BZAzZ': _0xf31cbd(0x202),
            'DGzSS': function (_0x447c76, _0x294ff9) {
                return _0x447c76 >= _0x294ff9;
            },
            'kZmHS': function (_0x15eed2, _0x13e4cb) {
                return _0x15eed2 + _0x13e4cb;
            },
            'bLZYY': '\x20lose',
            'dRIEH': _0xf31cbd(0x145),
            'ugLwx': function (_0x528c7f, _0x1fb951) {
                return _0x528c7f(_0x1fb951);
            },
            'PbYPO': _0xf31cbd(0x42a),
            'TMMrw': _0xf31cbd(0x3fb),
            'gRpyD': _0xf31cbd(0x335),
            'NUyDE': _0xf31cbd(0x265),
            'QaLFV': function (_0x444923, _0x2ec301) {
                return _0x444923 + _0x2ec301;
            },
            'AedEN': _0xf31cbd(0x232),
            'taEnr': _0xf31cbd(0x25a),
            'RPzay': function (_0x368745, _0x202f75) {
                return _0x368745(_0x202f75);
            },
            'PoJmz': function (_0x5ba5a1, _0x51a077) {
                return _0x5ba5a1 === _0x51a077;
            },
            'aNwVk': function (_0x38c923, _0x50e729) {
                return _0x38c923 === _0x50e729;
            },
            'wAvng': function (_0x28fd48, _0x4e0d76) {
                return _0x28fd48 % _0x4e0d76;
            },
            'XWGxJ': function (_0x4ba486, _0x4ffc2e) {
                return _0x4ba486 * _0x4ffc2e;
            },
            'wxFYh': _0xf31cbd(0x2cb),
            'ABGaJ': _0xf31cbd(0x392),
            'LuXIU': function (_0x32ca33, _0x4279d5) {
                return _0x32ca33 === _0x4279d5;
            },
            'kdYtZ': function (_0x6472ce, _0x1f2005) {
                return _0x6472ce % _0x1f2005;
            },
            'aZfLL': function (_0x29dde4, _0x49497) {
                return _0x29dde4 === _0x49497;
            },
            'njywL': function (_0x21f2a0, _0x396a45) {
                return _0x21f2a0 % _0x396a45;
            },
            'kamgk': _0xf31cbd(0x158)
        };
    chance = _0x4c2d4f[_0xf31cbd(0x3f2)](Number, document['getElementById'](_0x4c2d4f['DEsiX'])['value']);
    const _0x3d2ec9 = document[_0xf31cbd(0x370)](_0x4c2d4f['iWFbj'])[_0xf31cbd(0x2e7)], _0x2b36eb = _0x3d2ec9 ? _0x4c2d4f[_0xf31cbd(0x2c7)](Number, document['getElementById'](_0xf31cbd(0x2d3))[_0xf31cbd(0x2ce)]) : chance, _0x356894 = _0x4c2d4f[_0xf31cbd(0x3d9)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x1a5)])[_0xf31cbd(0x2ce)]), _0x4a79eb = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x3fd)])[_0xf31cbd(0x2e7)], _0x3b4fbb = _0x4a79eb ? _0x4c2d4f['fjsbh'](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x1b5)])[_0xf31cbd(0x2ce)]) : chance, _0xfbe052 = _0x4c2d4f[_0xf31cbd(0x2c7)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x19e)])['value']), _0x2e72f7 = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x224)])[_0xf31cbd(0x2e7)], _0x3ec705 = _0x2e72f7 ? _0x4c2d4f[_0xf31cbd(0x2f8)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f['FBYoZ'])[_0xf31cbd(0x2ce)]) : 0x1, _0x495108 = Number(document[_0xf31cbd(0x370)](_0xf31cbd(0x39d))[_0xf31cbd(0x2ce)]), _0x4e0382 = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x404)])[_0xf31cbd(0x2e7)], _0x317053 = _0x4e0382 ? _0x4c2d4f[_0xf31cbd(0x20d)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x17b)])[_0xf31cbd(0x2ce)]) : 0x1, _0xc78fcb = _0x4c2d4f[_0xf31cbd(0x1a0)](Number, document[_0xf31cbd(0x370)](_0xf31cbd(0x142))[_0xf31cbd(0x2ce)]), _0x5bb13d = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x150)])['checked'];
    if (_0x5bb13d) {
        const _0x31ae11 = _0x4c2d4f['Ubygt'](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x307)])['value']);
        if (_0x4c2d4f[_0xf31cbd(0x3d2)](bets % _0x31ae11, 0x0))
            bethigh = !bethigh;
    }
    const _0x14dbd7 = document[_0xf31cbd(0x370)]('advancedBetHighOnProfitCheck')[_0xf31cbd(0x2e7)];
    if (_0x14dbd7) {
        const _0x55c7dc = _0x4c2d4f[_0xf31cbd(0x1a0)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x1d3)])['value']);
        if (_0x4c2d4f[_0xf31cbd(0x2cc)](profit, _0x55c7dc))
            bethigh = !bethigh;
    }
    const _0x47446c = document['getElementById'](_0x4c2d4f[_0xf31cbd(0x3b3)])['checked'];
    if (_0x47446c) {
        const _0x5c867a = _0x4c2d4f[_0xf31cbd(0x3f2)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x340)])[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x155)](profit, _0x5c867a))
            resetstats();
    }
    const _0x18f3fb = document['getElementById'](_0x4c2d4f[_0xf31cbd(0x209)])[_0xf31cbd(0x2e7)];
    if (_0x18f3fb) {
        const _0x38283d = _0x4c2d4f['fjsbh'](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x15a)])[_0xf31cbd(0x2ce)]);
        if (lastBet['result'] === _0x38283d)
            _0x4c2d4f[_0xf31cbd(0x2d4)](stop), log(_0x4c2d4f[_0xf31cbd(0x1b3)](_0x4c2d4f[_0xf31cbd(0x42c)], _0x38283d));
    }
    const _0xd41504 = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x362)])[_0xf31cbd(0x2e7)];
    if (_0xd41504) {
        const _0x41cd70 = _0x4c2d4f[_0xf31cbd(0x243)](Number, document['getElementById'](_0xf31cbd(0x174))[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x33b)](_0x41cd70, 0x0)) {
            if (_0x4c2d4f[_0xf31cbd(0x317)](currentstreak, _0x41cd70))
                _0x4c2d4f[_0xf31cbd(0x2d4)](stop), log(_0x4c2d4f[_0xf31cbd(0x1b3)](_0xf31cbd(0x149), _0x41cd70));
        } else {
            if (_0x4c2d4f['aIGmX'](currentstreak, _0x41cd70))
                _0x4c2d4f['PpEAs'](stop), _0x4c2d4f[_0xf31cbd(0x3d9)](log, _0x4c2d4f['KKlnY'](_0x4c2d4f[_0xf31cbd(0x3c2)], _0x41cd70));
        }
    }
    const _0x44507b = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x250)])[_0xf31cbd(0x2e7)];
    if (_0x44507b) {
        const _0x52272a = _0x4c2d4f[_0xf31cbd(0x20d)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f['inTQI'])[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x304)](bets, _0x52272a))
            _0x4c2d4f[_0xf31cbd(0x23d)](stop), _0x4c2d4f[_0xf31cbd(0x181)](log, _0xf31cbd(0x208) + _0x52272a + _0x4c2d4f['APSXY']);
    }
    const _0xc648a9 = document[_0xf31cbd(0x370)](_0xf31cbd(0x3b6))[_0xf31cbd(0x2e7)];
    if (_0xc648a9) {
        const _0x3ba6c9 = _0x4c2d4f['IurUn'](Number, document[_0xf31cbd(0x370)](_0x4c2d4f['WrvIc'])['value']);
        if (_0x4c2d4f[_0xf31cbd(0x304)](winstreak, _0x3ba6c9))
            _0x4c2d4f['lYAvz'](stop), _0x4c2d4f['xkfpl'](log, _0x4c2d4f[_0xf31cbd(0x2ca)](_0x4c2d4f[_0xf31cbd(0x1b3)](_0x4c2d4f[_0xf31cbd(0x371)], _0x3ba6c9), _0x4c2d4f['kxqep']));
    }
    const _0x550f2e = document['getElementById'](_0x4c2d4f[_0xf31cbd(0x3e6)])['checked'];
    if (_0x550f2e) {
        const _0x556bd3 = _0x4c2d4f['IurUn'](Number, document[_0xf31cbd(0x370)](_0xf31cbd(0x225))[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x394)](losestreak, _0x556bd3))
            stop(), log(_0x4c2d4f['kZmHS'](_0x4c2d4f[_0xf31cbd(0x371)], _0x556bd3) + _0x4c2d4f[_0xf31cbd(0x29b)]);
    }
    const _0x175813 = document[_0xf31cbd(0x370)](_0x4c2d4f['dRIEH'])[_0xf31cbd(0x2e7)];
    if (_0x175813) {
        const _0x2eca29 = _0x4c2d4f['ugLwx'](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x20c)])[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x317)](profit, _0x2eca29))
            _0x4c2d4f[_0xf31cbd(0x311)](stop), _0x4c2d4f[_0xf31cbd(0x3cf)](log, _0x4c2d4f[_0xf31cbd(0x2d8)](_0x4c2d4f['TMMrw'], _0x2eca29));
    }
    const _0x1a423e = document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x309)])['checked'];
    if (_0x1a423e) {
        const _0x26baa7 = Number(document[_0xf31cbd(0x370)](_0x4c2d4f['NUyDE'])[_0xf31cbd(0x2ce)]);
        if (_0x4c2d4f[_0xf31cbd(0x394)](balance, _0x26baa7))
            stop(), _0x4c2d4f['ugLwx'](log, _0x4c2d4f['QaLFV'](_0x4c2d4f[_0xf31cbd(0x3b1)], _0x26baa7));
    }
    if (win) {
        const _0x3d847 = document['getElementById'](_0x4c2d4f[_0xf31cbd(0x2ab)])[_0xf31cbd(0x2e7)];
        if (_0x3d847) {
            const _0x101cae = _0x4c2d4f[_0xf31cbd(0x33f)](Number, document['getElementById'](_0xf31cbd(0x27d))[_0xf31cbd(0x2ce)]);
            if (_0x4c2d4f[_0xf31cbd(0x3ca)](winstreak % _0x101cae, 0x0))
                bethigh = !bethigh;
        }
        if (_0x4c2d4f['aNwVk'](_0x4c2d4f[_0xf31cbd(0x28a)](winstreak, _0x356894), 0x0))
            chance = _0x2b36eb;
        if (_0x2e72f7) {
            if (_0x4c2d4f[_0xf31cbd(0x3d2)](winstreak % _0x495108, 0x0))
                nextbet = _0x4c2d4f[_0xf31cbd(0x3ba)](previousbet, _0x3ec705);
        } else
            nextbet = basebet;
    } else {
        const _0x5de6f2 = document[_0xf31cbd(0x370)](_0x4c2d4f['wxFYh'])['checked'];
        if (_0x5de6f2) {
            const _0x48d782 = _0x4c2d4f[_0xf31cbd(0x20d)](Number, document[_0xf31cbd(0x370)](_0x4c2d4f[_0xf31cbd(0x259)])[_0xf31cbd(0x2ce)]);
            if (_0x4c2d4f[_0xf31cbd(0x275)](losestreak % _0x48d782, 0x0))
                bethigh = !bethigh;
        }
        if (_0x4c2d4f['PoJmz'](_0x4c2d4f['kdYtZ'](losestreak, _0xfbe052), 0x0))
            chance = _0x3b4fbb;
        if (_0x4e0382) {
            if (_0x4c2d4f[_0xf31cbd(0x281)](_0x4c2d4f[_0xf31cbd(0x1e3)](losestreak, _0xc78fcb), 0x0))
                nextbet = _0x4c2d4f['XWGxJ'](previousbet, _0x317053);
        } else
            nextbet = basebet;
    }
    return _0x4c2d4f['kamgk'];
}
function changeCoin() {
    const _0x503220 = _0x3a9bbb, _0x2934a3 = {
            'Mgkyw': function (_0x1d7dd7) {
                return _0x1d7dd7();
            }
        };
    coin = document[_0x503220(0x370)](_0x503220(0x140))[_0x503220(0x2ce)], currency = coin[_0x503220(0x2d7)](), fengari['load'](_0x503220(0x221) + currency + '\x22')(), _0x2934a3[_0x503220(0x35d)](checkbalance);
}
async function handleStats() {
    const _0x3fa38c = _0x3a9bbb, _0x319f0b = {
            'lJjix': function (_0xc45f29, _0x489090) {
                return _0xc45f29 === _0x489090;
            },
            'iqaIK': _0x3fa38c(0x3de),
            'XFTus': function (_0x56e64e) {
                return _0x56e64e();
            },
            'IOEcX': _0x3fa38c(0x38a),
            'KRWKt': function (_0x2c8550) {
                return _0x2c8550();
            },
            'SfoYF': function (_0x5bbe3e) {
                return _0x5bbe3e();
            },
            'shWMf': function (_0x52e24e, _0x4b2757) {
                return _0x52e24e(_0x4b2757);
            },
            'FnlHb': function (_0x32e646, _0x47075e) {
                return _0x32e646 === _0x47075e;
            },
            'wcqNc': _0x3fa38c(0x1d4),
            'WuJzw': function (_0xf3f831, _0x283173) {
                return _0xf3f831 === _0x283173;
            },
            'OLDhA': _0x3fa38c(0x1b9),
            'YJwaF': _0x3fa38c(0x29d),
            'KYzgM': function (_0x59a93c, _0xbd36b5) {
                return _0x59a93c === _0xbd36b5;
            },
            'bRzZR': _0x3fa38c(0x416),
            'RmaDt': function (_0x5af59a, _0x56f8b4) {
                return _0x5af59a > _0x56f8b4;
            },
            'WYlvs': function (_0x4df156, _0x2c92e0) {
                return _0x4df156 < _0x2c92e0;
            },
            'TiTQn': 'outside',
            'Seinb': function (_0x1664c4, _0x207f35) {
                return _0x1664c4 < _0x207f35;
            },
            'QiUPa': function (_0xab1f85, _0x553f4b) {
                return _0xab1f85 === _0x553f4b;
            },
            'DbBNA': _0x3fa38c(0x24c),
            'yYLuE': function (_0x295b94, _0x3dc48e) {
                return _0x295b94 < _0x3dc48e;
            },
            'GRdQF': function (_0xba8a58, _0x24b7dd) {
                return _0xba8a58 > _0x24b7dd;
            },
            'YxrCJ': function (_0x4aaa61, _0x36793a) {
                return _0x4aaa61 || _0x36793a;
            },
            'lhhOj': _0x3fa38c(0x32e),
            'SUpYY': _0x3fa38c(0x1fd),
            'gQUqk': 'red',
            'cwGJU': function (_0x2320f8, _0x2dcbda) {
                return _0x2320f8 > _0x2dcbda;
            },
            'LXDGp': function (_0xf01790, _0x451791) {
                return _0xf01790 > _0x451791;
            }
        }, _0xc78d86 = Date[_0x3fa38c(0x214)]();
    speedHistory[_0x3fa38c(0x276)](_0xc78d86);
    const _0x169c60 = 0x2710;
    speedHistory = speedHistory[_0x3fa38c(0x2c3)](_0x286e0f => _0xc78d86 - _0x286e0f <= _0x169c60), bets++, lastBet[_0x3fa38c(0x1d5)] = lastBet[_0x3fa38c(0x175)], lastBet['target'] = target, lastBet[_0x3fa38c(0x162)] = target;
    if (_0x319f0b[_0x3fa38c(0x1ef)](game, _0x319f0b[_0x3fa38c(0x239)])) {
        const _0x18f24d = _0x3fa38c(0x2b9)[_0x3fa38c(0x2a5)]('|');
        let _0x45225f = 0x0;
        while (!![]) {
            switch (_0x18f24d[_0x45225f++]) {
            case '0':
                lastBet[_0x3fa38c(0x1c6)] = chance1;
                continue;
            case '1':
                lastBet['chance4'] = chance4;
                continue;
            case '2':
                lastBet['Chance4'] = chance4;
                continue;
            case '3':
                lastBet['BetSide'] = betSide;
                continue;
            case '4':
                lastBet[_0x3fa38c(0x360)] = chance2;
                continue;
            case '5':
                lastBet[_0x3fa38c(0x2bb)] = chance2;
                continue;
            case '6':
                lastBet[_0x3fa38c(0x21f)] = chance3;
                continue;
            case '7':
                lastBet[_0x3fa38c(0x13e)] = chance3;
                continue;
            case '8':
                lastBet[_0x3fa38c(0x264)] = betSide;
                continue;
            case '9':
                lastBet['chance1'] = chance1;
                continue;
            }
            break;
        }
    }
    lastBet[_0x3fa38c(0x3a2)] = result, lastBet['Result'] = result, lastBet[_0x3fa38c(0x318)] = currentprofit, lastBet[_0x3fa38c(0x3b7)] = currentprofit, lastBet[_0x3fa38c(0x429)] = lastBet['nonce'], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x319f0b[_0x3fa38c(0x177)](game, _0x319f0b[_0x3fa38c(0x3c6)]))
        win = lastBet[_0x3fa38c(0x427)] ? lastBet[_0x3fa38c(0x3a2)] > lastBet['target'] : lastBet[_0x3fa38c(0x3a2)] < lastBet[_0x3fa38c(0x34d)];
    else {
        if (game === _0x319f0b['YJwaF'] || _0x319f0b[_0x3fa38c(0x35a)](game, _0x319f0b[_0x3fa38c(0x1bc)]))
            win = _0x319f0b[_0x3fa38c(0x295)](lastBet[_0x3fa38c(0x318)], 0x0);
        else {
            if (_0x319f0b[_0x3fa38c(0x26f)](game, _0x319f0b[_0x3fa38c(0x239)])) {
                if (_0x319f0b[_0x3fa38c(0x26f)](lastBet[_0x3fa38c(0x264)], _0x3fa38c(0x422)))
                    win = _0x319f0b['RmaDt'](lastBet[_0x3fa38c(0x175)], lastBet[_0x3fa38c(0x244)]) && _0x319f0b['WYlvs'](lastBet[_0x3fa38c(0x175)], lastBet[_0x3fa38c(0x360)]);
                else {
                    if (_0x319f0b[_0x3fa38c(0x1ef)](lastBet[_0x3fa38c(0x264)], _0x319f0b[_0x3fa38c(0x238)]))
                        win = _0x319f0b[_0x3fa38c(0x1e8)](lastBet[_0x3fa38c(0x175)], lastBet[_0x3fa38c(0x244)]) || lastBet['roll'] > lastBet[_0x3fa38c(0x360)];
                    else {
                        if (_0x319f0b['QiUPa'](lastBet['betSide'], _0x319f0b[_0x3fa38c(0x347)])) {
                            const _0x5587fa = lastBet[_0x3fa38c(0x175)] > lastBet[_0x3fa38c(0x244)] && _0x319f0b[_0x3fa38c(0x20f)](lastBet[_0x3fa38c(0x175)], lastBet[_0x3fa38c(0x360)]), _0x181350 = _0x319f0b['GRdQF'](lastBet[_0x3fa38c(0x175)], lastBet['chance3']) && _0x319f0b[_0x3fa38c(0x20f)](lastBet[_0x3fa38c(0x175)], lastBet[_0x3fa38c(0x201)]);
                            win = _0x319f0b[_0x3fa38c(0x3fa)](_0x5587fa, _0x181350);
                        }
                    }
                }
            } else
                win = lastBet['result'] >= lastBet[_0x3fa38c(0x34d)];
        }
    }
    if (win) {
        const _0x39e50f = _0x319f0b[_0x3fa38c(0x15b)][_0x3fa38c(0x2a5)]('|');
        let _0x465601 = 0x0;
        while (!![]) {
            switch (_0x39e50f[_0x465601++]) {
            case '0':
                winstreak++;
                continue;
            case '1':
                wins++;
                continue;
            case '2':
                color = _0x3fa38c(0x374);
                continue;
            case '3':
                losestreak = 0x0;
                continue;
            case '4':
                currentstreak = winstreak;
                continue;
            }
            break;
        }
    } else {
        const _0x46cad6 = _0x319f0b[_0x3fa38c(0x156)][_0x3fa38c(0x2a5)]('|');
        let _0x2f2a4a = 0x0;
        while (!![]) {
            switch (_0x46cad6[_0x2f2a4a++]) {
            case '0':
                currentstreak = -losestreak;
                continue;
            case '1':
                color = _0x319f0b[_0x3fa38c(0x171)];
                continue;
            case '2':
                losses++;
                continue;
            case '3':
                winstreak = 0x0;
                continue;
            case '4':
                losestreak++;
                continue;
            case '5':
                if (_0x319f0b[_0x3fa38c(0x1ab)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            }
            break;
        }
    }
    if (_0x319f0b[_0x3fa38c(0x22f)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (_0x319f0b[_0x3fa38c(0x41d)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (balance < minbalance)
        minbalance = balance;
    if (balance > maxbalance)
        maxbalance = balance;
    if (_0x319f0b[_0x3fa38c(0x42e)](profit, minprofit))
        minprofit = profit;
    if (_0x319f0b[_0x3fa38c(0x1ab)](profit, maxprofit))
        maxprofit = profit;
    _0x319f0b[_0x3fa38c(0x299)](showInfo)[_0x3fa38c(0x288)](async () => {
        const _0x19a275 = _0x3fa38c;
        try {
            if (_0x319f0b[_0x19a275(0x26f)](mode, _0x319f0b[_0x19a275(0x185)]))
                await _0x319f0b[_0x19a275(0x299)](updateLua);
            else {
                if (_0x319f0b[_0x19a275(0x26f)](mode, 'js'))
                    await _0x319f0b[_0x19a275(0x299)](dobet);
                else
                    _0x319f0b[_0x19a275(0x26f)](mode, _0x319f0b[_0x19a275(0x1d7)]) && await _0x319f0b['XFTus'](handleAdvanced);
            }
            if (win && sOW)
                _0x319f0b[_0x19a275(0x39f)](stop);
            if (run)
                _0x319f0b[_0x19a275(0x299)](playBet);
        } catch (_0x3234a1) {
            _0x319f0b[_0x19a275(0x414)](stop), _0x319f0b[_0x19a275(0x1ad)](log, _0x3234a1);
        }
    });
}
async function showInfo() {
    const _0x561eec = _0x3a9bbb, _0x295905 = {
            'qzJUh': function (_0x40126d, _0x910c2) {
                return _0x40126d === _0x910c2;
            },
            'XyKOs': _0x561eec(0x354),
            'YchPr': 'green',
            'qcrIL': _0x561eec(0x18c),
            'BbMCa': _0x561eec(0x37b),
            'HBYpV': _0x561eec(0x13c),
            'zVUxX': _0x561eec(0x22d),
            'NiIZn': _0x561eec(0x365),
            'kMSUz': _0x561eec(0x3e8),
            'IMjot': _0x561eec(0x169),
            'Bibbp': 'wdbLosses',
            'sWCJm': 'wdbCurrentStreak',
            'VgiGU': _0x561eec(0x418),
            'nDndW': _0x561eec(0x199),
            'Cjeqt': 'wdbMinProfit',
            'KkUGm': _0x561eec(0x376),
            'esEWc': function (_0x9c11aa, _0x4a2e6a) {
                return _0x9c11aa / _0x4a2e6a;
            },
            'hMgYl': function (_0xfbc6c8, _0x7e70fc) {
                return _0xfbc6c8 + _0x7e70fc;
            },
            'BvoQk': function (_0x1bd79a, _0x447b73) {
                return _0x1bd79a(_0x447b73);
            },
            'hmiLm': function (_0xa391ca, _0x3c87d2) {
                return _0xa391ca * _0x3c87d2;
            },
            'LORhO': function (_0x5d3da9, _0xa1afa9) {
                return _0x5d3da9 + _0xa1afa9;
            },
            'gYJMu': _0x561eec(0x1be),
            'HMYbz': _0x561eec(0x15d),
            'YcEKP': function (_0x2f573f, _0x1b868b) {
                return _0x2f573f === _0x1b868b;
            },
            'UuedA': _0x561eec(0x1b9),
            'IiNBq': function (_0x4dd8d1, _0x17b58b) {
                return _0x4dd8d1 + _0x17b58b;
            },
            'okLrY': _0x561eec(0x191),
            'XnARJ': _0x561eec(0x1d4),
            'NElpI': _0x561eec(0x29d),
            'YLaPZ': function (_0x215f50, _0x150f37) {
                return _0x215f50(_0x150f37);
            },
            'RZZGT': function (_0x719da5, _0x39a6c6) {
                return _0x719da5 !== _0x39a6c6;
            },
            'TsUTw': function (_0x557e1d, _0x26e3af) {
                return _0x557e1d === _0x26e3af;
            },
            'jXBGI': _0x561eec(0x416),
            'nVjfO': function (_0x37deea, _0x3ba783) {
                return _0x37deea + _0x3ba783;
            },
            'DuFNg': '\x20Balls',
            'sDEMi': function (_0x19cc85, _0x8b2993) {
                return _0x19cc85 + _0x8b2993;
            },
            'MLmlS': function (_0x3162f0, _0xcd1fdf) {
                return _0x3162f0 + _0xcd1fdf;
            },
            'YKBDZ': function (_0x55a1b1, _0x308bed) {
                return _0x55a1b1 + _0x308bed;
            },
            'VUAMn': function (_0x4ccab1, _0xd6ad06) {
                return _0x4ccab1 + _0xd6ad06;
            },
            'yXWYc': function (_0x2913fd, _0xfc9916) {
                return _0x2913fd + _0xfc9916;
            },
            'ByNTD': function (_0x3b7fc1, _0x5a072b) {
                return _0x3b7fc1(_0x5a072b);
            },
            'EwgIC': _0x561eec(0x2a2),
            'scZfB': _0x561eec(0x26b),
            'TObAY': _0x561eec(0x252),
            'qwEkb': function (_0x291fe7, _0x1ca7a8) {
                return _0x291fe7(_0x1ca7a8);
            },
            'uWBkW': function (_0x5553f9, _0x269090) {
                return _0x5553f9(_0x269090);
            },
            'DbtJc': function (_0xf45371, _0x34d802) {
                return _0xf45371 !== _0x34d802;
            },
            'LfLYV': function (_0x422521, _0x160ea0) {
                return _0x422521 === _0x160ea0;
            },
            'bpPex': function (_0xa88cf7, _0x2ec822) {
                return _0xa88cf7 === _0x2ec822;
            },
            'YnACm': function (_0x2c9534, _0x3c7d13) {
                return _0x2c9534 === _0x3c7d13;
            },
            'mNZPv': function (_0x4c89ad, _0x1d6d0e) {
                return _0x4c89ad > _0x1d6d0e;
            },
            'mEeAH': _0x561eec(0x1df)
        }, _0x5e4fbd = _0x295905[_0x561eec(0x36e)](profit, 0x0) ? darkMode ? _0x561eec(0x18c) : _0x295905['XyKOs'] : profit < 0x0 ? _0x561eec(0x37b) : _0x295905[_0x561eec(0x2c2)], _0x4be935 = _0x295905[_0x561eec(0x36e)](currentstreak, 0x0) ? darkMode ? _0x295905['qcrIL'] : _0x295905[_0x561eec(0x3c9)] : currentstreak < 0x0 ? _0x561eec(0x37b) : _0x295905[_0x561eec(0x2c2)], _0x171520 = maxwinstreak > 0x0 ? _0x295905[_0x561eec(0x2c2)] : _0x295905[_0x561eec(0x3c9)], _0x31b157 = maxlosestreak > 0x0 ? _0x295905[_0x561eec(0x29c)] : _0x295905[_0x561eec(0x3c9)];
    document['getElementById'](_0x295905['HBYpV'])[_0x561eec(0x31c)][_0x561eec(0x2a3)] = _0x171520, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x2c9)])[_0x561eec(0x31c)][_0x561eec(0x2a3)] = _0x31b157, document['getElementById'](_0x561eec(0x22a))['innerText'] = wagered['toFixed'](decimalAmountView), document[_0x561eec(0x370)](_0x561eec(0x3bf))[_0x561eec(0x2f1)] = balance[_0x561eec(0x395)](decimalAmountView), document[_0x561eec(0x370)](_0x295905[_0x561eec(0x3e1)])[_0x561eec(0x31c)]['color'] = _0x5e4fbd, document[_0x561eec(0x370)](_0x295905['NiIZn'])[_0x561eec(0x2f1)] = profit[_0x561eec(0x395)](decimalAmountView), document[_0x561eec(0x370)](_0x295905[_0x561eec(0x420)])[_0x561eec(0x2f1)] = maxBetAmount[_0x561eec(0x395)](decimalAmountView), document[_0x561eec(0x370)](_0x561eec(0x42d))[_0x561eec(0x2f1)] = maxLosseAmount[_0x561eec(0x395)](decimalAmountView), document['getElementById']('wdbBets')[_0x561eec(0x2f1)] = bets, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x3f7)])[_0x561eec(0x2f1)] = wins, document['getElementById'](_0x295905[_0x561eec(0x1b7)])['innerText'] = losses, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x38d)])[_0x561eec(0x31c)][_0x561eec(0x2a3)] = _0x4be935, document['getElementById'](_0x295905[_0x561eec(0x38d)])[_0x561eec(0x2f1)] = currentstreak, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x2db)])[_0x561eec(0x2f1)] = maxwinstreak, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x2c9)])[_0x561eec(0x2f1)] = maxlosestreak, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x19c)])[_0x561eec(0x2f1)] = minbalance[_0x561eec(0x395)](decimalAmountView), document[_0x561eec(0x370)](_0x295905[_0x561eec(0x2f7)])[_0x561eec(0x2f1)] = maxbalance['toFixed'](decimalAmountView), document[_0x561eec(0x370)](_0x295905[_0x561eec(0x334)])[_0x561eec(0x2f1)] = minprofit[_0x561eec(0x395)](decimalAmountView), document[_0x561eec(0x370)](_0x295905[_0x561eec(0x3e7)])[_0x561eec(0x2f1)] = maxprofit[_0x561eec(0x395)](decimalAmountView), percentWagered = _0x295905['esEWc'](wagered, startBalance), percentWagered = _0x295905[_0x561eec(0x387)](Math[_0x561eec(0x1de)](_0x295905[_0x561eec(0x207)](percentWagered, Number[_0x561eec(0x344)]) * 0x2710), 0x2710), percentWagered = _0x295905['BvoQk'](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x561eec(0x370)](_0x561eec(0x268))[_0x561eec(0x2f1)] = percentWagered, percentProfit = _0x295905[_0x561eec(0x1ec)](_0x295905[_0x561eec(0x387)](profit, startBalance), 0x64), percentProfit = _0x295905['esEWc'](Math['round'](_0x295905[_0x561eec(0x1ec)](_0x295905['LORhO'](percentProfit, Number[_0x561eec(0x344)]), 0x2710)), 0x2710), percentProfit = _0x295905[_0x561eec(0x39c)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x561eec(0x370)](_0x295905['gYJMu'])[_0x561eec(0x31c)]['color'] = _0x5e4fbd, document['getElementById'](_0x295905[_0x561eec(0x30c)])[_0x561eec(0x2f1)] = percentProfit;
    if (!stopHistory) {
        const _0x28cfa0 = _0x295905[_0x561eec(0x324)](game, _0x295905[_0x561eec(0x31e)]) ? lastBet[_0x561eec(0x427)] ? '>' : '<' : '>', _0x11d1e4 = lastBet['bethigh'] ? _0x561eec(0x29e) + bets + _0x561eec(0x33c) : _0x561eec(0x29e) + bets + _0x561eec(0x310), _0x5a71b1 = '' + (havePlinkoRows ? _0x295905[_0x561eec(0x1e5)](plinkoRow, _0x295905[_0x561eec(0x3c7)]) : '') + plinkoRisk, _0x191e03 = _0x561eec(0x1dd) + bets + _0x561eec(0x3cd) + Number(lastBet[_0x561eec(0x407)])[_0x561eec(0x395)](decimalAmountView) + _0x561eec(0x3cd) + (game !== _0x295905[_0x561eec(0x29a)] ? _0x11d1e4 : betSide) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x295905[_0x561eec(0x324)](game, _0x295905['NElpI']) ? _0x5a71b1 : _0x295905['IiNBq'](_0x295905[_0x561eec(0x3d8)](Number, lastBet[_0x561eec(0x164)])[_0x561eec(0x395)](decimalChanceView), '%')) + _0x561eec(0x3cd) + Number(lastBet['roll'])[_0x561eec(0x395)](decimalChanceView) + _0x561eec(0x338) + Number(lastBet[_0x561eec(0x318)])[_0x561eec(0x395)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x295905[_0x561eec(0x2de)](game, _0x295905[_0x561eec(0x29a)]) ? _0x295905[_0x561eec(0x1b6)](game, _0x295905[_0x561eec(0x255)]) ? _0x5a71b1 : _0x295905[_0x561eec(0x1b6)](game, _0x295905['jXBGI']) ? _0x295905['nVjfO'](_0x295905[_0x561eec(0x3d8)](Number, lastBet['target'])[_0x561eec(0x395)](0x0), _0x295905[_0x561eec(0x1a3)]) : _0x295905[_0x561eec(0x3d6)](_0x28cfa0, Number(lastBet['target'])['toFixed'](decimalTargetResult)) : _0x295905[_0x561eec(0x3d6)](_0x295905['LORhO'](_0x295905[_0x561eec(0x36d)](_0x295905[_0x561eec(0x249)](target1, '|'), target2), target3 ? _0x295905[_0x561eec(0x1ba)]('|', target3) : ''), target4 ? _0x295905['sDEMi']('|', target4) : '')) + _0x561eec(0x3cd) + (_0x295905[_0x561eec(0x36e)](game, _0x561eec(0x416)) ? _0x295905[_0x561eec(0x292)](_0x295905['ByNTD'](Number, result)[_0x561eec(0x395)](0x0), _0x561eec(0x234)) : Number(result)[_0x561eec(0x395)](decimalTargetResult)) + _0x561eec(0x3cd) + lastBet[_0x561eec(0x23c)] + _0x561eec(0x3cd) + lastBet['id'] + '</td>', _0x4e1004 = document[_0x561eec(0x242)]('tr');
        _0x4e1004['style'][_0x561eec(0x305)] = win ? _0x295905[_0x561eec(0x2ad)] : _0x561eec(0x273), _0x4e1004[_0x561eec(0x3b9)] = _0x191e03, document[_0x561eec(0x370)](_0x295905[_0x561eec(0x2af)])[_0x561eec(0x178)](_0x4e1004, document['getElementById'](_0x295905['scZfB'])[_0x561eec(0x2f5)][0x0]);
        const _0x2792da = document[_0x561eec(0x17d)](_0x295905['TObAY'])[_0x561eec(0x2ec)];
        if (_0x2792da[_0x561eec(0x321)] > maxRows)
            document[_0x561eec(0x17d)](_0x295905[_0x561eec(0x21b)])[_0x561eec(0x3bc)][_0x561eec(0x303)]();
    }
    const _0x25b92f = '' + (havePlinkoRows ? _0x295905[_0x561eec(0x249)](plinkoRow, _0x295905[_0x561eec(0x3c7)]) : '') + plinkoRisk;
    return fullLogs['push']({
        'game': game,
        'bets': bets,
        'amount': _0x295905['qwEkb'](Number, lastBet['amount'])[_0x561eec(0x395)](decimalAmountView),
        'bethigh': game !== _0x295905['XnARJ'] ? lastBet[_0x561eec(0x427)] : null,
        'chance': game !== _0x295905[_0x561eec(0x29a)] ? _0x295905[_0x561eec(0x39a)](Number, lastBet[_0x561eec(0x164)])['toFixed'](decimalChanceView) : lastBet[_0x561eec(0x164)],
        'target': _0x295905[_0x561eec(0x1fb)](game, _0x295905[_0x561eec(0x29a)]) ? _0x295905[_0x561eec(0x22b)](game, 'plinko') ? _0x25b92f : lastBet['target'] : null,
        'roll': _0x295905[_0x561eec(0x39a)](Number, lastBet[_0x561eec(0x175)])[_0x561eec(0x395)](decimalChanceView),
        'result': _0x295905[_0x561eec(0x3d8)](Number, result)[_0x561eec(0x395)](decimalTargetResult),
        'profit': Number(lastBet[_0x561eec(0x318)])[_0x561eec(0x395)](decimalAmountView),
        'nonce': lastBet[_0x561eec(0x23c)],
        'id': lastBet['id'],
        'chance1': _0x295905['qzJUh'](game, _0x295905[_0x561eec(0x29a)]) ? lastBet[_0x561eec(0x244)] : null,
        'chance2': _0x295905['qzJUh'](game, _0x295905[_0x561eec(0x29a)]) ? lastBet['chance2'] : null,
        'chance3': _0x295905[_0x561eec(0x28e)](game, _0x561eec(0x1d4)) ? lastBet['chance3'] : null,
        'chance4': _0x295905['YnACm'](game, _0x295905[_0x561eec(0x29a)]) ? lastBet['chance4'] : null,
        'betSide': _0x295905['LfLYV'](game, _0x295905[_0x561eec(0x29a)]) ? lastBet['betSide'] : null
    }), _0x295905[_0x561eec(0x32d)](fullLogs['length'], 0x2710) && fullLogs[_0x561eec(0x286)](), !stopChart && chart[_0x561eec(0x41a)](betsChart, profitChart, color), _0x295905['mEeAH'];
}
async function updateStats() {
    const _0x245ac6 = _0x3a9bbb, _0x2005a6 = {
            'BtggN': function (_0x162b38, _0x5f145e) {
                return _0x162b38 === _0x5f145e;
            },
            'anVok': _0x245ac6(0x37b),
            'zzalF': 'white',
            'Rfqlz': _0x245ac6(0x354),
            'UNznl': function (_0x29f086, _0x265eba) {
                return _0x29f086 < _0x265eba;
            },
            'oSJYZ': _0x245ac6(0x374),
            'jikud': function (_0x22b02d, _0x5ee714) {
                return _0x22b02d > _0x5ee714;
            },
            'SXORE': _0x245ac6(0x13c),
            'nwZaU': _0x245ac6(0x22d),
            'IRGnP': _0x245ac6(0x3bf),
            'XzdPM': _0x245ac6(0x365),
            'dwVvQ': _0x245ac6(0x3e8),
            'aZBfH': _0x245ac6(0x42d),
            'RxLYM': _0x245ac6(0x315),
            'cffXJ': _0x245ac6(0x173),
            'TPYLY': 'wdbMaxBalance',
            'pQqxI': _0x245ac6(0x2dd),
            'vRJXU': function (_0x3ebfde, _0x5447f8) {
                return _0x3ebfde / _0x5447f8;
            },
            'CDGQl': function (_0xaead6e, _0x58d9b9) {
                return _0xaead6e * _0x58d9b9;
            },
            'ZvXKF': function (_0x8d61aa, _0x53170e) {
                return _0x8d61aa + _0x53170e;
            },
            'uWmdm': function (_0x5ae7ad, _0x2ed64d) {
                return _0x5ae7ad(_0x2ed64d);
            },
            'yAJrN': _0x245ac6(0x268),
            'jBRyA': function (_0x27b341, _0x2a6a81) {
                return _0x27b341 * _0x2a6a81;
            },
            'UweGN': function (_0x509935, _0x2fec3a) {
                return _0x509935 * _0x2fec3a;
            },
            'ySCAR': function (_0x50af6a, _0x2e6406) {
                return _0x50af6a + _0x2e6406;
            },
            'OwCcP': _0x245ac6(0x1be),
            'fZcdi': _0x245ac6(0x1f5)
        }, _0x2a5b77 = _0x2005a6[_0x245ac6(0x2d5)](profit, 0x0) ? darkMode ? _0x245ac6(0x18c) : _0x245ac6(0x354) : profit < 0x0 ? _0x2005a6[_0x245ac6(0x271)] : _0x245ac6(0x374), _0x478236 = _0x2005a6[_0x245ac6(0x2d5)](currentstreak, 0x0) ? darkMode ? _0x2005a6[_0x245ac6(0x3c8)] : _0x2005a6[_0x245ac6(0x3fc)] : _0x2005a6['UNznl'](currentstreak, 0x0) ? _0x2005a6['anVok'] : _0x2005a6[_0x245ac6(0x21d)], _0x396cd6 = _0x2005a6[_0x245ac6(0x1ed)](maxwinstreak, 0x0) ? _0x2005a6[_0x245ac6(0x21d)] : darkMode ? _0x2005a6[_0x245ac6(0x3c8)] : _0x2005a6[_0x245ac6(0x3fc)], _0x37af97 = _0x2005a6[_0x245ac6(0x1ed)](maxlosestreak, 0x0) ? _0x2005a6[_0x245ac6(0x271)] : darkMode ? _0x2005a6[_0x245ac6(0x3c8)] : _0x2005a6[_0x245ac6(0x3fc)];
    return document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x32c)])[_0x245ac6(0x31c)][_0x245ac6(0x2a3)] = _0x396cd6, document[_0x245ac6(0x370)](_0x2005a6['nwZaU'])[_0x245ac6(0x31c)][_0x245ac6(0x2a3)] = _0x37af97, document['getElementById'](_0x245ac6(0x22a))[_0x245ac6(0x2f1)] = wagered[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x2e1)])[_0x245ac6(0x2f1)] = balance[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x2005a6['XzdPM'])[_0x245ac6(0x31c)][_0x245ac6(0x2a3)] = _0x2a5b77, document[_0x245ac6(0x370)](_0x245ac6(0x365))[_0x245ac6(0x2f1)] = profit[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x204)])[_0x245ac6(0x2f1)] = maxBetAmount[_0x245ac6(0x395)](decimalAmountView), document['getElementById'](_0x2005a6['aZBfH'])[_0x245ac6(0x2f1)] = maxLosseAmount[_0x245ac6(0x395)](decimalAmountView), document['getElementById'](_0x2005a6['RxLYM'])['innerText'] = bets, document[_0x245ac6(0x370)](_0x245ac6(0x169))[_0x245ac6(0x2f1)] = wins, document[_0x245ac6(0x370)](_0x245ac6(0x3a6))[_0x245ac6(0x2f1)] = losses, document[_0x245ac6(0x370)](_0x2005a6['cffXJ'])[_0x245ac6(0x31c)][_0x245ac6(0x2a3)] = _0x478236, document['getElementById'](_0x2005a6[_0x245ac6(0x172)])['innerText'] = currentstreak, document[_0x245ac6(0x370)](_0x2005a6['SXORE'])[_0x245ac6(0x2f1)] = maxwinstreak, document['getElementById'](_0x2005a6[_0x245ac6(0x24f)])[_0x245ac6(0x2f1)] = maxlosestreak, document[_0x245ac6(0x370)](_0x245ac6(0x418))[_0x245ac6(0x2f1)] = minbalance[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x1d8)])[_0x245ac6(0x2f1)] = maxbalance[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x38f)])[_0x245ac6(0x2f1)] = minprofit[_0x245ac6(0x395)](decimalAmountView), document[_0x245ac6(0x370)](_0x245ac6(0x376))[_0x245ac6(0x2f1)] = maxprofit['toFixed'](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x2005a6[_0x245ac6(0x357)](Math[_0x245ac6(0x1de)](_0x2005a6['CDGQl'](_0x2005a6['ZvXKF'](percentWagered, Number[_0x245ac6(0x344)]), 0x64)), 0x64), percentWagered = _0x2005a6['uWmdm'](isNaN, percentWagered) || !isFinite(percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x2005a6['yAJrN'])[_0x245ac6(0x2f1)] = percentWagered, percentProfit = _0x2005a6[_0x245ac6(0x3cb)](_0x2005a6['vRJXU'](profit, startBalance), 0x64), percentProfit = Math[_0x245ac6(0x1de)](_0x2005a6[_0x245ac6(0x3e2)](_0x2005a6[_0x245ac6(0x1a6)](percentProfit, Number[_0x245ac6(0x344)]), 0x64)) / 0x64, percentProfit = _0x2005a6[_0x245ac6(0x38b)](isNaN, percentProfit) || !_0x2005a6['uWmdm'](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x245ac6(0x370)](_0x2005a6[_0x245ac6(0x15f)])['style'][_0x245ac6(0x2a3)] = _0x2a5b77, document['getElementById'](_0x245ac6(0x15d))['innerText'] = percentProfit, _0x2005a6['fZcdi'];
}
function log(_0x466648) {
    const _0x23a40d = _0x3a9bbb, _0xae0402 = {
            'eMFqG': _0x23a40d(0x18c),
            'FoUXP': _0x23a40d(0x354)
        }, _0x594c3a = document[_0x23a40d(0x370)](_0x23a40d(0x1f1)), _0x7ce59a = document['createElement']('li');
    _0x7ce59a[_0x23a40d(0x2f1)] = _0x466648, _0x7ce59a[_0x23a40d(0x31c)]['color'] = darkMode ? _0xae0402[_0x23a40d(0x322)] : _0xae0402[_0x23a40d(0x241)], _0x594c3a[_0x23a40d(0x178)](_0x7ce59a, _0x594c3a[_0x23a40d(0x30b)]), _0x594c3a[_0x23a40d(0x2f5)][_0x23a40d(0x321)] > maxRows && _0x594c3a[_0x23a40d(0x3ee)](_0x594c3a[_0x23a40d(0x3bc)]);
}
function updateSpeed() {
    const _0x985456 = _0x3a9bbb, _0x25cf8b = {
            'yhmqo': function (_0x5a6bb2, _0x2260f8) {
                return _0x5a6bb2 < _0x2260f8;
            },
            'uNWAF': 'wdbSpeed',
            'giOmv': '0.00',
            'QMgiQ': function (_0x48e1fd, _0x3d78c0) {
                return _0x48e1fd / _0x3d78c0;
            },
            'DjaFU': function (_0x59b725, _0x2365fa) {
                return _0x59b725 - _0x2365fa;
            }
        };
    if (_0x25cf8b['yhmqo'](speedHistory['length'], 0x2)) {
        document[_0x985456(0x370)](_0x25cf8b[_0x985456(0x24b)])[_0x985456(0x2f1)] = _0x25cf8b['giOmv'];
        return;
    }
    const _0x5aac94 = Date[_0x985456(0x214)](), _0x3a9ff4 = 0x2710;
    speedHistory = speedHistory[_0x985456(0x2c3)](_0xefeddf => _0x5aac94 - _0xefeddf <= _0x3a9ff4);
    if (_0x25cf8b[_0x985456(0x3d1)](speedHistory['length'], 0x2)) {
        document[_0x985456(0x370)](_0x25cf8b[_0x985456(0x24b)])[_0x985456(0x2f1)] = '0.00';
        return;
    }
    const _0x1178d3 = speedHistory[0x0], _0x49cc98 = _0x25cf8b['QMgiQ'](_0x25cf8b[_0x985456(0x266)](_0x5aac94, _0x1178d3), 0x3e8), _0x80bcbf = _0x25cf8b[_0x985456(0x3a7)](speedHistory[_0x985456(0x321)], _0x49cc98);
    document[_0x985456(0x370)](_0x25cf8b[_0x985456(0x24b)])[_0x985456(0x2f1)] = _0x80bcbf[_0x985456(0x395)](0x2);
}
function updateTimer() {
    const _0x29673f = _0x3a9bbb, _0x125332 = {
            'KlJNR': function (_0x4b5a82, _0x5e1021) {
                return _0x4b5a82 / _0x5e1021;
            },
            'lDjWq': function (_0x553779, _0x5aacae) {
                return _0x553779 % _0x5aacae;
            },
            'btVZJ': function (_0x5f591f, _0x5319ef) {
                return _0x5f591f * _0x5319ef;
            },
            'vhWjd': function (_0x5e2569, _0x4b6924) {
                return _0x5e2569 % _0x4b6924;
            },
            'qQWYb': _0x29673f(0x399)
        };
    elapsedTime++;
    const _0x46cef6 = Math[_0x29673f(0x2c1)](_0x125332['KlJNR'](elapsedTime, 0x18 * 0x3c * 0x3c)), _0x40b552 = Math[_0x29673f(0x2c1)](_0x125332[_0x29673f(0x248)](_0x125332[_0x29673f(0x421)](elapsedTime, _0x125332[_0x29673f(0x386)](0x18, 0x3c) * 0x3c), 0x3c * 0x3c)), _0x4c2f2e = Math[_0x29673f(0x2c1)](_0x125332[_0x29673f(0x248)](_0x125332['vhWjd'](elapsedTime, _0x125332['btVZJ'](0x3c, 0x3c)), 0x3c)), _0x509660 = elapsedTime % 0x3c;
    document[_0x29673f(0x370)](_0x125332[_0x29673f(0x346)])['innerText'] = _0x46cef6 + ':' + _0x40b552 + ':' + _0x4c2f2e + ':' + _0x509660;
}
async function start() {
    const _0x45c5cc = _0x3a9bbb, _0x1bd44d = {
            'DIkWa': function (_0xa356d5, _0xa882f2) {
                return _0xa356d5 === _0xa882f2;
            },
            'UDtuP': _0x45c5cc(0x1d4),
            'PDNua': _0x45c5cc(0x422),
            'Tffnh': _0x45c5cc(0x399),
            'hiNLu': _0x45c5cc(0x397),
            'SSMFg': _0x45c5cc(0x140),
            'IESsF': _0x45c5cc(0x17a),
            'xSllK': 'wdbResumeButton',
            'RCfUw': 'wdbOpenLUAScript',
            'zPehI': _0x45c5cc(0x32f),
            'WlvRY': _0x45c5cc(0x195),
            'tkSRB': function (_0x1bbd46, _0x16fa24, _0x5162ec) {
                return _0x1bbd46(_0x16fa24, _0x5162ec);
            },
            'LrWrT': function (_0xe30bf, _0x3eb3ab, _0x4d4eec) {
                return _0xe30bf(_0x3eb3ab, _0x4d4eec);
            },
            'WjwOv': function (_0x53fd1d, _0x135971) {
                return _0x53fd1d === _0x135971;
            },
            'MeKuQ': '1|3|2|4|0',
            'ycIOL': _0x45c5cc(0x33a),
            'DnArR': _0x45c5cc(0x28b),
            'barqK': _0x45c5cc(0x1e2),
            'vumnJ': _0x45c5cc(0x2be),
            'vZqjR': '$1=$1/$2\x20',
            'bWWqy': _0x45c5cc(0x1bb),
            'RlqHA': _0x45c5cc(0x27f),
            'IMpeC': function (_0xacfa4, _0x395015) {
                return _0xacfa4 === _0x395015;
            },
            'ASAFF': _0x45c5cc(0x38a),
            'eYdYp': function (_0x3ed6a6, _0x25f1d4) {
                return _0x3ed6a6(_0x25f1d4);
            },
            'egVyC': function (_0x5cc34f, _0xd514c9) {
                return _0x5cc34f(_0xd514c9);
            },
            'bsHHT': _0x45c5cc(0x226),
            'dTuGi': '#advancedBetHigh',
            'sabiy': function (_0x1fd0bf) {
                return _0x1fd0bf();
            }
        };
    if (_0x1bd44d[_0x45c5cc(0x16e)](game, _0x1bd44d[_0x45c5cc(0x2ff)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x1bd44d[_0x45c5cc(0x327)];
        const _0x210d4b = _0x45c5cc(0x369) + chance1 + _0x45c5cc(0x34c) + chance2 + _0x45c5cc(0x24e) + chance3 + _0x45c5cc(0x1b0) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + '\x22';
        fengari['load'](_0x210d4b)();
    }
    try {
        if (!run) {
            document['getElementById'](_0x1bd44d[_0x45c5cc(0x24a)])[_0x45c5cc(0x2f1)] = _0x1bd44d[_0x45c5cc(0x289)], document[_0x45c5cc(0x370)](_0x1bd44d[_0x45c5cc(0x17f)])[_0x45c5cc(0x139)] = !![], document['getElementById'](_0x45c5cc(0x198))[_0x45c5cc(0x139)] = !![], document['getElementById'](_0x1bd44d[_0x45c5cc(0x27e)])[_0x45c5cc(0x139)] = !![], document['getElementById'](_0x1bd44d['xSllK'])['disabled'] = !![], document[_0x45c5cc(0x370)](_0x1bd44d[_0x45c5cc(0x16f)])[_0x45c5cc(0x139)] = !![], document[_0x45c5cc(0x370)](_0x1bd44d['zPehI'])[_0x45c5cc(0x139)] = !![], document['querySelectorAll'](_0x1bd44d[_0x45c5cc(0x256)])[_0x45c5cc(0x3a4)](_0x1f2c80 => _0x1f2c80[_0x45c5cc(0x139)] = !![]), document['querySelectorAll'](_0x45c5cc(0x30e))[_0x45c5cc(0x3a4)](_0x4948c5 => _0x4948c5[_0x45c5cc(0x139)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], clearInterval(timerInterval), clearInterval(speedUpdateInterval), timerInterval = _0x1bd44d[_0x45c5cc(0x3a5)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x1bd44d[_0x45c5cc(0x26a)](setInterval, updateSpeed, 0x1f4), fengari[_0x45c5cc(0x419)](_0x45c5cc(0x367))(), fengari['load']('kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil')();
            if (_0x1bd44d['WjwOv'](mode, _0x45c5cc(0x3de))) {
                const _0x128bee = _0x1bd44d[_0x45c5cc(0x40e)][_0x45c5cc(0x2a5)]('|');
                let _0x27fc8c = 0x0;
                while (!![]) {
                    switch (_0x128bee[_0x27fc8c++]) {
                    case '0':
                        document['getElementById'](_0x1bd44d[_0x45c5cc(0x1e0)])['innerText'] = scriptname ? _0x45c5cc(0x194) + scriptname : '';
                        continue;
                    case '1':
                        diceScript = luaEditor[_0x45c5cc(0x2e8)]();
                        continue;
                    case '2':
                        fengari[_0x45c5cc(0x419)](diceScript)();
                        continue;
                    case '3':
                        diceScript = diceScript[_0x45c5cc(0x34a)](/!=/g, '~=')['replace'](/!/g, _0x1bd44d[_0x45c5cc(0x272)])['replace'](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x45c5cc(0x168))[_0x45c5cc(0x34a)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1bd44d[_0x45c5cc(0x1ea)])['replace'](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1bd44d['vumnJ'])[_0x45c5cc(0x34a)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1bd44d[_0x45c5cc(0x166)]);
                        continue;
                    case '4':
                        scriptname = fengari[_0x45c5cc(0x419)](_0x1bd44d[_0x45c5cc(0x405)])();
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x1bd44d['WjwOv'](mode, 'js')) {
                    const _0x191e84 = document['getElementById']('wdbRunningScript');
                    if (_0x191e84)
                        _0x191e84[_0x45c5cc(0x303)]();
                    diceScript = jsEditor[_0x45c5cc(0x2e8)]();
                    const _0x108d59 = document[_0x45c5cc(0x242)](_0x45c5cc(0x294));
                    _0x108d59['id'] = _0x1bd44d[_0x45c5cc(0x36c)], _0x108d59[_0x45c5cc(0x3b9)] = diceScript, document[_0x45c5cc(0x1a8)][_0x45c5cc(0x18e)](_0x108d59);
                } else
                    _0x1bd44d['IMpeC'](mode, _0x1bd44d[_0x45c5cc(0x1c2)]) && (basebet = _0x1bd44d[_0x45c5cc(0x260)](Number, document['getElementById'](_0x45c5cc(0x1ca))['value']), nextbet = basebet, chance = _0x1bd44d[_0x45c5cc(0x1c3)](Number, document[_0x45c5cc(0x370)](_0x1bd44d[_0x45c5cc(0x151)])['value']), bethigh = document[_0x45c5cc(0x17d)](_0x1bd44d['dTuGi'])[_0x45c5cc(0x2e7)]);
            }
            if (run)
                return _0x1bd44d[_0x45c5cc(0x220)](playBet);
        }
    } catch (_0x5aabed) {
        stop(), _0x1bd44d['egVyC'](log, _0x5aabed);
    }
}
function stop() {
    const _0x358491 = _0x3a9bbb, _0x362b61 = {
            'ShBYT': function (_0x8af0f0, _0x571096) {
                return _0x8af0f0(_0x571096);
            },
            'MkOPl': function (_0x2140d7, _0x37c5d2) {
                return _0x2140d7(_0x37c5d2);
            },
            'YCokO': _0x358491(0x140),
            'TigfH': _0x358491(0x198),
            'iaODQ': _0x358491(0x17a),
            'YZJhX': _0x358491(0x3df),
            'VxuQF': _0x358491(0x32f),
            'BoGGl': _0x358491(0x3bd),
            'EtSpl': '#wdbSaveScriptButton,\x20#wdbOpenScript'
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x362b61[_0x358491(0x3c0)](clearInterval, timerInterval), _0x362b61[_0x358491(0x2fe)](clearInterval, speedUpdateInterval);
    const _0x38bab8 = [
        _0x362b61['YCokO'],
        _0x362b61[_0x358491(0x25e)],
        _0x362b61['iaODQ'],
        _0x358491(0x170),
        _0x362b61[_0x358491(0x188)],
        _0x362b61[_0x358491(0x236)],
        _0x362b61[_0x358491(0x1c1)]
    ];
    _0x38bab8['forEach'](_0x5339d1 => {
        const _0x51535d = _0x358491;
        document[_0x51535d(0x370)](_0x5339d1)['disabled'] = ![];
    }), document['querySelectorAll'](_0x362b61[_0x358491(0x1af)])[_0x358491(0x3a4)](_0x475c5f => _0x475c5f['disabled'] = ![]);
}
async function resume(_0x359de2) {
    const _0x1076e2 = _0x3a9bbb, _0x2bfc2a = {
            'NDcAv': _0x1076e2(0x140),
            'akucu': 'wdbMenuMode',
            'QkaOj': _0x1076e2(0x17a),
            'JerbR': _0x1076e2(0x170),
            'JsOTd': 'wdbOpenLUAScript',
            'EjzKf': _0x1076e2(0x32f),
            'IHbRg': _0x1076e2(0x233),
            'aQOkL': _0x1076e2(0x3a3),
            'wsjLQ': function (_0x552ad8, _0x2573cc, _0xddbfc4) {
                return _0x552ad8(_0x2573cc, _0xddbfc4);
            },
            'OKrLz': function (_0x3bd29e, _0xbe9f2d, _0x2c77b8) {
                return _0x3bd29e(_0xbe9f2d, _0x2c77b8);
            },
            'dOTuA': function (_0x323f63) {
                return _0x323f63();
            }
        };
    if (!run) {
        const _0x21072b = [
            _0x2bfc2a[_0x1076e2(0x2c5)],
            _0x2bfc2a['akucu'],
            _0x2bfc2a[_0x1076e2(0x2dc)],
            _0x2bfc2a['JerbR'],
            _0x2bfc2a[_0x1076e2(0x1aa)],
            _0x2bfc2a[_0x1076e2(0x348)]
        ];
        return _0x21072b[_0x1076e2(0x3a4)](_0x42ab4d => {
            const _0x4444a3 = _0x1076e2;
            document[_0x4444a3(0x370)](_0x42ab4d)[_0x4444a3(0x139)] = !![];
        }), document[_0x1076e2(0x2b7)](_0x2bfc2a[_0x1076e2(0x1da)])[_0x1076e2(0x3a4)](_0x5a8170 => _0x5a8170[_0x1076e2(0x139)] = !![]), !_0x359de2 && (log(_0x2bfc2a[_0x1076e2(0x1ee)]), await new Promise(_0x173aa6 => setTimeout(_0x173aa6, 0x1388))), run = !![], sOW = ![], timerInterval = _0x2bfc2a['wsjLQ'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x2bfc2a['OKrLz'](setInterval, updateSpeed, 0x1f4), _0x2bfc2a[_0x1076e2(0x1db)](playBet);
    }
}
function stopOnWin() {
    const _0x368b93 = _0x3a9bbb, _0x1e1344 = { 'nVLBd': _0x368b93(0x3bd) };
    sOW = !![];
    if (run)
        document[_0x368b93(0x370)](_0x1e1344[_0x368b93(0x240)])[_0x368b93(0x139)] = !![];
}
async function playBet() {
    const _0x475683 = _0x3a9bbb, _0x3dc4dd = {
            'csTzq': _0x475683(0x3de),
            'fUMUi': 'return\x20chance4',
            'GtFzT': _0x475683(0x3f9),
            'cqDwq': _0x475683(0x333),
            'yObei': _0x475683(0x358),
            'gtlBj': _0x475683(0x210),
            'tbXuH': function (_0x5698db, _0x4452ce) {
                return _0x5698db(_0x4452ce);
            },
            'ioPsv': function (_0x43db4c, _0x14d528) {
                return _0x43db4c(_0x14d528);
            },
            'BWiZx': function (_0x590c65, _0x4488a1) {
                return _0x590c65(_0x4488a1);
            },
            'Iyrot': function (_0x3a141b, _0x383504) {
                return _0x3a141b !== _0x383504;
            },
            'XBRyj': _0x475683(0x1d4),
            'lLhVi': function (_0x966971, _0x3f589f) {
                return _0x966971 === _0x3f589f;
            },
            'OYngm': _0x475683(0x29d),
            'HcYYF': function (_0x1136be, _0x234b34) {
                return _0x1136be + _0x234b34;
            },
            'ICnAx': _0x475683(0x191),
            'pigjp': _0x475683(0x1b9),
            'yyMcM': _0x475683(0x2a0),
            'qiJnR': _0x475683(0x270),
            'eXtwZ': function (_0x52265c, _0xf12ea1) {
                return _0x52265c + _0xf12ea1;
            },
            'xbXSP': function (_0x16189d) {
                return _0x16189d();
            },
            'ATgXo': function (_0xe55357, _0x27463a) {
                return _0xe55357(_0x27463a);
            }
        };
    try {
        if (mode === _0x3dc4dd[_0x475683(0x3b5)]) {
            const _0x1eadab = _0x475683(0x290)[_0x475683(0x2a5)]('|');
            let _0x1970ae = 0x0;
            while (!![]) {
                switch (_0x1eadab[_0x1970ae++]) {
                case '0':
                    chance4 = fengari['load'](_0x3dc4dd[_0x475683(0x33e)])();
                    continue;
                case '1':
                    chance3 = fengari[_0x475683(0x419)](_0x3dc4dd[_0x475683(0x3a8)])();
                    continue;
                case '2':
                    chance2 = fengari[_0x475683(0x419)](_0x475683(0x2e5))();
                    continue;
                case '3':
                    nextbet = fengari[_0x475683(0x419)](_0x3dc4dd[_0x475683(0x28d)])();
                    continue;
                case '4':
                    bethigh = fengari[_0x475683(0x419)](_0x475683(0x37a))();
                    continue;
                case '5':
                    chance = fengari['load'](_0x3dc4dd[_0x475683(0x36b)])();
                    continue;
                case '6':
                    chance1 = fengari[_0x475683(0x419)](_0x475683(0x251))();
                    continue;
                case '7':
                    betSide = fengari[_0x475683(0x419)](_0x3dc4dd[_0x475683(0x13d)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x3dc4dd[_0x475683(0x1a9)](Number, nextbet), chance = Number(chance), previousbet = nextbet, lastBet = {
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
            const _0x2f08ef = _0x3dc4dd['ioPsv'](Number, lastBet[_0x475683(0x407)])[_0x475683(0x395)](decimalAmountView), _0x3043fd = _0x3dc4dd[_0x475683(0x31b)](Number, lastBet['chance'])[_0x475683(0x395)](decimalChanceView), _0x1d39b7 = _0x3dc4dd[_0x475683(0x398)](game, _0x3dc4dd[_0x475683(0x293)]) ? _0x3dc4dd[_0x475683(0x1f9)](game, _0x3dc4dd[_0x475683(0x393)]) ? _0x475683(0x34b) + _0x2f08ef + '\x20at\x20' + (havePlinkoRows ? _0x3dc4dd[_0x475683(0x219)](plinkoRow, _0x3dc4dd['ICnAx']) : '') + plinkoRisk + _0x475683(0x38e) : _0x475683(0x34b) + _0x2f08ef + '\x20at\x20' + _0x3043fd + '%\x20chance\x20to\x20win,\x20' + (_0x3dc4dd[_0x475683(0x1f9)](game, _0x3dc4dd['pigjp']) ? bethigh ? _0x3dc4dd['yyMcM'] : _0x3dc4dd['qiJnR'] : _0x3dc4dd[_0x475683(0x35c)]) : _0x475683(0x34b) + _0x2f08ef + _0x475683(0x341) + chance1 + '|' + chance2 + (chance3 ? _0x3dc4dd[_0x475683(0x3c4)]('|', chance3) : '') + (chance4 ? '|' + chance4 : '') + _0x475683(0x2b4) + betSide;
            _0x3dc4dd['tbXuH'](log, _0x1d39b7);
        }
        if (run)
            return _0x3dc4dd[_0x475683(0x306)](sendBet);
    } catch (_0x1b93b5) {
        stop(), _0x3dc4dd[_0x475683(0x287)](log, _0x1b93b5);
    }
}
function _0x191a(_0x5d6ae2, _0x499ca3) {
    const _0x4b0e7f = _0x4b0e();
    return _0x191a = function (_0x191ac8, _0xad66df) {
        _0x191ac8 = _0x191ac8 - 0x139;
        let _0x1e5f00 = _0x4b0e7f[_0x191ac8];
        return _0x1e5f00;
    }, _0x191a(_0x5d6ae2, _0x499ca3);
}
function resetall() {
    const _0x49363c = _0x3a9bbb, _0x5dd2ca = {
            'TCXtR': _0x49363c(0x399),
            'yNwLI': _0x49363c(0x397),
            'jePgv': _0x49363c(0x355),
            'qddbW': _0x49363c(0x253),
            'fLhSi': function (_0x1b849d) {
                return _0x1b849d();
            },
            'SrnNM': function (_0x369571) {
                return _0x369571();
            },
            'WxbqZ': function (_0x2e520e) {
                return _0x2e520e();
            }
        };
    document[_0x49363c(0x370)](_0x5dd2ca[_0x49363c(0x313)])[_0x49363c(0x2f1)] = _0x5dd2ca[_0x49363c(0x320)], document[_0x49363c(0x370)](_0x5dd2ca[_0x49363c(0x1eb)])['innerText'] = _0x5dd2ca[_0x49363c(0x298)], _0x5dd2ca[_0x49363c(0x24d)](resetstats), _0x5dd2ca[_0x49363c(0x2b1)](resetchart), _0x5dd2ca['fLhSi'](resethistory), _0x5dd2ca[_0x49363c(0x3ac)](resetlog);
}
function _0x4b0e() {
    const _0x3a2665 = [
        'toFixed',
        'HFcdY',
        '0:0:0:0',
        'Iyrot',
        'wdbTime',
        'uWBkW',
        'return\x20plinkoRow',
        'BvoQk',
        'advancedMultiOnWinBets',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'KRWKt',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        '.CodeMirror',
        'result',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'forEach',
        'tkSRB',
        'wdbLosses',
        'QMgiQ',
        'GtFzT',
        'wdbFooter',
        'wdbShow',
        '6FlVDiY',
        'WxbqZ',
        'PsMco',
        'data',
        'QUkgh',
        'line',
        'AedEN',
        'vyuPJ',
        'pOfom',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'csTzq',
        'advancedStopOnWinsCheck',
        'Profit',
        'body',
        'innerHTML',
        'XWGxJ',
        'qgboG',
        'lastChild',
        'wdbStopOnWinButton',
        'parse',
        'wdbBalance',
        'ShBYT',
        'KzDbI',
        'qgzUv',
        'FmqsB',
        'eXtwZ',
        'dataPoints',
        'OLDhA',
        'okLrY',
        'zzalF',
        'XyKOs',
        'PoJmz',
        'jBRyA',
        'LUqiL',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        '0|4|1|3|5|2',
        'xkfpl',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'yhmqo',
        'DtAtT',
        'xqUki',
        'render',
        'display',
        'sDEMi',
        'XPIud',
        'YLaPZ',
        'IurUn',
        'lZSJW',
        'wdb-bot-position',
        'defineProperty',
        '\x0a\x20\x20\x20\x20chance=',
        'lua',
        'wdbOpenLUAScript',
        'javascript',
        'NiIZn',
        'UweGN',
        'DoIGi',
        'advancedChanceOnWinCheck',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'BZAzZ',
        'KkUGm',
        'wdbHighBet',
        'fFJUp',
        'stringify',
        ';path=/',
        'wdbToggleMinimal',
        'YURJz',
        'removeChild',
        'lGMiG',
        '2125860VMFUmY',
        '\x20win',
        'fjsbh',
        'start',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'Chart',
        'RKWia',
        'IMjot',
        'URL',
        'return\x20chance3',
        'YxrCJ',
        'Stop\x20on\x20profit\x20',
        'Rfqlz',
        'ggLlv',
        'hNFiN',
        'toString',
        'wtSuT',
        'XnFDy',
        '232MFuffM',
        'ZUtnS',
        'aPFbq',
        'bWWqy',
        '191buzkTa',
        'amount',
        'Stop\x20on\x20roll\x20number\x20',
        'darkMode',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'fixed',
        'MeKuQ',
        'hide',
        'eewzG',
        '\x0a\x20\x20\x20\x20previousbet=',
        'TUzxN',
        '192390TsSWeL',
        'SfoYF',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>',
        'keno',
        'text',
        'wdbMinBalance',
        'load',
        'updateChart',
        '\x20bet',
        'initLuaOk',
        'GRdQF',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'hxuqP',
        'kMSUz',
        'lDjWq',
        'between',
        '\x0a\x20\x20\x20\x20losses=',
        'oQmrm',
        'getComputedStyle',
        'GwMVO',
        'bethigh',
        'return\x20kenoRisk',
        'Nonce',
        'stopOnProfit',
        'iLUYR',
        'PFPFR',
        'wdbHighLose',
        'WYlvs',
        'disabled',
        'lEYyH',
        'TjNRK',
        'wdbHighWinStreak',
        'gtlBj',
        'Chance3',
        'trim',
        'wdbMenuCoin',
        'wdbJSMode',
        'advancedMultiOnLoseBets',
        'stop',
        'map',
        'stopOnProfitCheck',
        'updateLua\x20done',
        'resetstatsOnProfitCheck',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'Stop\x20on\x20current\x20streak\x20',
        'gmmFX',
        'keydown',
        'Mode',
        'reset',
        'awbAm',
        'LuyuL',
        'BjOax',
        'bsHHT',
        'clientY',
        'files',
        'save',
        'Xpowo',
        'SUpYY',
        'AOwqE',
        'handleAdvanced\x20ok',
        'TExrb',
        'YqURG',
        'lhhOj',
        'text/plain;\x20charset=utf-8',
        'wdbPercentProfit',
        'options',
        'OwCcP',
        '1074696XzPAmY',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'Target',
        'wdbHeader',
        'chance',
        'XtdRZ',
        'vZqjR',
        'maxRows',
        '$1=$1+$2\x20',
        'wdbWins',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'deleteH',
        'setOption',
        'jHYsh',
        'DIkWa',
        'RCfUw',
        'wdbResumeButton',
        'gQUqk',
        'cffXJ',
        'wdbCurrentStreak',
        'advancedStopAfterStreak',
        'roll',
        'jZFYN',
        'WuJzw',
        'insertBefore',
        'dgthZ',
        'wdbStartButton',
        'UCbqC',
        'top',
        'querySelector',
        'wdbChart',
        'SSMFg',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'nCqLI',
        'MGijz',
        'HhvSV',
        'gFYYM',
        'iqaIK',
        'dobet()',
        'fromTextArea',
        'YZJhX',
        'wdbWrapLog',
        'offsetHeight',
        'none',
        'white',
        'borderColor',
        'appendChild',
        'addEventListener',
        'tWPLA',
        '\x20|\x20',
        'darcula',
        'height',
        'Script\x20Name:\x20',
        '#wdbSaveScriptButton',
        'wdbWrapFunctions',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'wdbMenuMode',
        'wdbMaxBalance',
        'wdbWrap',
        'expires=',
        'VgiGU',
        'nMBdB',
        'acrCb',
        'giCrr',
        'LOnnV',
        'pjRYl',
        'zaxeU',
        'DuFNg',
        'message',
        'jncDw',
        'ySCAR',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'head',
        'tbXuH',
        'JsOTd',
        'cwGJU',
        'rYZaY',
        'shWMf',
        'BgQyG',
        'EtSpl',
        '\x0a\x20\x20\x20\x20chance4=',
        'cRQqz',
        'QeVpb',
        'gCQoP',
        'RMalC',
        'idpKK',
        'TsUTw',
        'Bibbp',
        'wdbScriptBoxLUA',
        'dice',
        'VUAMn',
        'return\x20scriptname',
        'bRzZR',
        'JNQnn',
        'wdbWrapPercentProfit',
        '2|3|0|4|1',
        '\x0a\x20\x20\x20\x20bethigh=',
        'BoGGl',
        'ASAFF',
        'egVyC',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'Chance1',
        'gAVdP',
        'jzeoU',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'advancedBaseBet',
        'zTZSr',
        'smTHr',
        'wdbWrapTips',
        '#000',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'advancedBetHighOnBet',
        'light1',
        'advancedStopAfterStreakCheck',
        'bRAKY',
        'rangedice',
        'Roll',
        'log-',
        'IOEcX',
        'TPYLY',
        'BiQQS',
        'IHbRg',
        'dOTuA',
        'LymQe',
        '<td>',
        'round',
        'showInfo\x20OK',
        'ycIOL',
        'pozXM',
        '$1=$1-$2\x20',
        'njywL',
        'wdbMaxRows',
        'IiNBq',
        'psYRr',
        'aJOtx',
        'Seinb',
        'oycCk',
        'barqK',
        'jePgv',
        'hmiLm',
        'jikud',
        'aQOkL',
        'FnlHb',
        'advancedMultiOnWin',
        'wdbLog',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'NkBBB',
        'sedbu',
        'updateStats\x20ok',
        'yxmuI',
        'ZSTkJ',
        '\x0a\x20\x20\x20\x20profit=',
        'lLhVi',
        'setValue',
        'DbtJc',
        '350px',
        '1|2|4|3|0|5',
        'block',
        'startsWith',
        'Variables',
        'chance4',
        'advancedStopOnLoseCheck',
        'toUTCString',
        'dwVvQ',
        'download',
        'GpDux',
        'hMgYl',
        'Stop\x20on\x20',
        'jVmOs',
        'VxoUM',
        'show',
        'PbYPO',
        'IIjqM',
        '.json',
        'yYLuE',
        'return\x20betSide',
        'default',
        '_maxRows',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'now',
        'setItem',
        '5px',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'closest',
        'HcYYF',
        'change',
        'TObAY',
        'gHoxV',
        'oSJYZ',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'chance3',
        'sabiy',
        'currency=\x22',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'theme',
        'IOOFU',
        'advancedStopOnLose',
        'advancedChance',
        '\x0a\x20\x20\x20\x20bets=',
        'click',
        'advancedBetHighOnBetCheck',
        'wdbWagered',
        'LfLYV',
        '\x0a\x20\x20\x20\x20wagered=',
        'wdbHighLoseStreak',
        'left',
        'LXDGp',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'kZkDl',
        'Stop\x20on\x20balance\x20',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        '\x20Hits',
        '\x0a\x20\x20\x20\x20minprofit=',
        'VxuQF',
        'mJsaf',
        'TiTQn',
        'wcqNc',
        'xQeBw',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'nonce',
        'PpEAs',
        'lcGLj',
        'ZLFww',
        'nVLBd',
        'FoUXP',
        'createElement',
        'qBrSO',
        'chance1',
        'LHDQz',
        'bGzrE',
        'qeOOl',
        'KlJNR',
        'YKBDZ',
        'Tffnh',
        'uNWAF',
        'between2',
        'fLhSi',
        '\x0a\x20\x20\x20\x20chance3=',
        'nwZaU',
        'NIGpt',
        'return\x20chance1',
        '#wdbHistory',
        '0.00',
        'dps',
        'NElpI',
        'WlvRY',
        'wOdMX',
        'TEXTAREA',
        'ABGaJ',
        'advancedBetHighOnWinCheck',
        'ErrnH',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'yhfIG',
        'TigfH',
        'wdbWrapLicenseBox',
        'eYdYp',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'clientX',
        'PaVTu',
        'betSide',
        'stopOnBalance',
        'DjaFU',
        'Tips',
        'wdbPercentWagered',
        '3136kSdhXJ',
        'LrWrT',
        'wdbHistory',
        'width',
        '380px',
        '0123456789',
        'lJjix',
        'low',
        'anVok',
        'DnArR',
        '#ffc0cb',
        '\x0a\x20\x20\x20\x20losestreak=',
        'LuXIU',
        'push',
        'OxSFc',
        'gwZnV',
        'indexOf',
        'BXOLD',
        'flex',
        'ZpdWH',
        'advancedBetHighOnWin',
        'IESsF',
        'wdbRunningScript',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'aZfLL',
        'div',
        'yHRfR',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'nJpMx',
        'shift',
        'ATgXo',
        'then',
        'hiNLu',
        'wAvng',
        'not\x20',
        'BSxAT',
        'cqDwq',
        'bpPex',
        'event',
        '3|5|4|6|2|1|0|7',
        'ATVbS',
        'yXWYc',
        'XBRyj',
        'script',
        'RmaDt',
        'OusQs',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'qddbW',
        'XFTus',
        'XnARJ',
        'bLZYY',
        'BbMCa',
        'plinko',
        '<input\x20id=\x22bethigh',
        'sCNCu',
        'high',
        'DLPPn',
        '#91f190',
        'color',
        '</option>',
        'split',
        'Functions',
        '1112010OdaMHC',
        'XshFU',
        'isContentEditable',
        'createObjectURL',
        'taEnr',
        'RfAAs',
        'EwgIC',
        'wdb',
        'scZfB',
        '77wUtcaf',
        'SrnNM',
        'lPPva',
        'resetChart',
        '\x20to\x20win,\x20',
        '2|6|1|5|4|3|0',
        'dZvPI',
        'querySelectorAll',
        'AAULe',
        '9|0|4|5|6|7|1|2|8|3',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'Chance2',
        'dark1',
        '_darkMode',
        '$1=$1*$2\x20',
        'offsetLeft',
        'preventDefault',
        'floor',
        'YchPr',
        'filter',
        'gCyRD',
        'NDcAv',
        'innerHeight',
        'iucrk',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'zVUxX',
        'KKlnY',
        'advancedBetHighOnLoseCheck',
        'xQEsm',
        'RsqNq',
        'value',
        '1000px',
        'WDBScript',
        'href',
        'advancedChanceOnWinBets',
        'advancedChanceOnWin',
        'ZYVvA',
        'BtggN',
        'SJylq',
        'toLowerCase',
        'kZmHS',
        'kFzfC',
        'EOPeK',
        'HBYpV',
        'QkaOj',
        'wdbMinProfit',
        'RZZGT',
        'PHawV',
        '#2a2a2a',
        'IRGnP',
        'iBzAV',
        'cXLbh',
        'RRXbC',
        'return\x20chance2',
        'toUpperCase',
        'checked',
        'getValue',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'www.',
        'slice',
        'rows',
        'sbNyF',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'akJEH',
        'innerText',
        '3|5|0|7|2|8|6|1|4',
        'activeElement',
        'wdbToggleLive',
        'children',
        'QdsEa',
        'nDndW',
        'lpEuP',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'cookie',
        'WHezZ',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'MkOPl',
        'UDtuP',
        '190px',
        'rqWin',
        'prototype',
        'remove',
        'byEep',
        'backgroundColor',
        'xbXSP',
        'TRBOQ',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'gRpyD',
        'getItem',
        'firstChild',
        'HMYbz',
        'wdbAdvancedMode',
        '#wdbOpenScript',
        'pmIZK',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'lYAvz',
        '85473SJliki',
        'TCXtR',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'wdbBets',
        'wdbLoader\x20ok',
        'ArVpF',
        'profit',
        'ieDwx',
        'offsetWidth',
        'BWiZx',
        'style',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'UuedA',
        'oNTNR',
        'yNwLI',
        'length',
        'eMFqG',
        '/fengari-web.min.js',
        'YcEKP',
        'bmCFU',
        'Noiot',
        'PDNua',
        'antiquewhite',
        'ZqAAt',
        'onmouseup',
        '#fff',
        'SXORE',
        'mNZPv',
        '2|1|0|3|4',
        'wdbOpenJSScript',
        '3647035KyBWBJ',
        'mtTKK',
        'lXWzK',
        'return\x20nextbet',
        'Cjeqt',
        'stopOnBalanceCheck',
        'oFIfz',
        '.wdb-stats\x20div\x20li',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'Log',
        'scriptName',
        'AQdMx',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'wdbWrapControl',
        'fUMUi',
        'RPzay',
        'FJpPm',
        '\x20at\x20',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'wdbWrapHistory',
        'EPSILON',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'qQWYb',
        'DbBNA',
        'EjzKf',
        'yhieX',
        'replace',
        'Betting\x20',
        '\x0a\x20\x20\x20\x20chance2=',
        'target',
        'advancedStopOnWins',
        'GxlIZ',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'position',
        'chart',
        'wdbWrapInitializing',
        'black',
        'wdbSpeed',
        '0123456789abcdef',
        'vRJXU',
        'return\x20chance',
        'createUIOk',
        'KYzgM',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'yyMcM',
        'Mgkyw',
        'clear',
        '/ching.mp3',
        'chance2',
        'bGWnQ',
        'luClC',
        'kntgY',
        'oWWUh',
        'wdbProfit',
        'COOFc',
        'scriptname\x20=\x20\x22\x22',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'chance1=',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'yObei',
        'RlqHA',
        'MLmlS',
        'qzJUh',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'getElementById',
        'JliFl',
        '\x0a\x20\x20\x20\x20winstreak=',
        'setTime',
        'green',
        'SpYPy',
        'wdbMaxProfit',
        'CuitE',
        'XhGon',
        'charAt',
        'return\x20bethigh',
        'red',
        'wptSH',
        'response',
        'AgmFo',
        'tagName',
        'advancedChanceOnLoseBets',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'OBTNx',
        'Zgcju',
        'onmousedown',
        'kenoNumbers',
        'btVZJ',
        'esEWc',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'TaMtg',
        'advanced',
        'uWmdm',
        'XNyvE',
        'sWCJm',
        '\x20to\x20win',
        'pQqxI',
        'innerWidth',
        'eKCWb',
        'advancedBetHighOnLose',
        'OYngm',
        'DGzSS'
    ];
    _0x4b0e = function () {
        return _0x3a2665;
    };
    return _0x4b0e();
}
function resetchart() {
    const _0x31c0d7 = _0x3a9bbb, _0x1e3d9b = {
            'CuitE': function (_0x5b38ff, _0x3c33eb) {
                return _0x5b38ff(_0x3c33eb);
            },
            'gJsYo': _0x31c0d7(0x14d)
        };
    return _0x1e3d9b[_0x31c0d7(0x377)](toggleChart, _0x1e3d9b['gJsYo']);
}
function resethistory() {
    const _0x72a42d = {
        'vbtxT': function (_0x48e33d, _0x4157e7) {
            return _0x48e33d(_0x4157e7);
        },
        'XUuan': 'clear'
    };
    return _0x72a42d['vbtxT'](toggleHistory, _0x72a42d['XUuan']);
}
function resetlog() {
    const _0x32ca79 = {
        'SjNLK': function (_0x4f5103, _0x16a1de) {
            return _0x4f5103(_0x16a1de);
        }
    };
    return _0x32ca79['SjNLK'](toggleLog, 'clear');
}
function resetstats() {
    const _0x260d74 = {
        'sqMtc': function (_0xc33225) {
            return _0xc33225();
        }
    };
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, _0x260d74['sqMtc'](updateStats);
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x335600) {
    return _0x335600;
}
function ching() {
    return wdbSound['play']();
}
function sleep(_0x1b7adf) {
    return new Promise(_0x53383c => setTimeout(_0x53383c, _0x1b7adf * 0x3e8));
}
async function initLua() {
    const _0x78c511 = _0x3a9bbb, _0x4491d4 = {
            'bGzrE': 'function\x20start()\x0ajs.global:start()\x0aend',
            'lEYyH': 'function\x20stop()\x0ajs.global:stop()\x0aend',
            'AAULe': _0x78c511(0x161),
            'JCLOq': _0x78c511(0x148),
            'EdGDO': _0x78c511(0x222),
            'CvrBu': 'function\x20resetall()\x0ajs.global:resetall()\x0aend',
            'TaMtg': _0x78c511(0x21e),
            'PHawV': _0x78c511(0x36f),
            'pvmYp': _0x78c511(0x40c),
            'ieDwx': _0x78c511(0x3a0),
            'gmmFX': _0x78c511(0x2ea),
            'BKHiq': _0x78c511(0x41c)
        };
    fengari[_0x78c511(0x419)](_0x4491d4[_0x78c511(0x246)])(), fengari[_0x78c511(0x419)](_0x4491d4[_0x78c511(0x13a)])(), fengari['load'](_0x4491d4[_0x78c511(0x2b8)])(), fengari['load'](_0x78c511(0x261))(), fengari[_0x78c511(0x419)]('function\x20resetstats()\x0ajs.global:resetstats()\x0aend')(), fengari[_0x78c511(0x419)](_0x4491d4['JCLOq'])(), fengari[_0x78c511(0x419)](_0x78c511(0x3d0))(), fengari['load'](_0x4491d4['EdGDO'])(), fengari[_0x78c511(0x419)](_0x78c511(0x345))(), fengari[_0x78c511(0x419)](_0x4491d4['CvrBu'])(), fengari[_0x78c511(0x419)](_0x4491d4[_0x78c511(0x389)])(), fengari[_0x78c511(0x419)](_0x4491d4[_0x78c511(0x2df)])(), fengari['load'](_0x4491d4['pvmYp'])(), fengari[_0x78c511(0x419)]('function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend')(), fengari[_0x78c511(0x419)](_0x4491d4[_0x78c511(0x319)])(), fengari[_0x78c511(0x419)](_0x78c511(0x3e5))(), fengari[_0x78c511(0x419)](_0x78c511(0x2fd))(), fengari[_0x78c511(0x419)](_0x78c511(0x16a))();
    const _0x1e120e = location['hostname'][_0x78c511(0x34a)](_0x4491d4[_0x78c511(0x14a)], '');
    let _0xd25852 = _0x1e120e[_0x78c511(0x279)]('.');
    return casino = _0x1e120e[_0x78c511(0x2eb)](0x0, _0xd25852), fengari['load']('casino=\x22' + casino + '\x22')(), _0x4491d4['BKHiq'];
}
async function updateLua() {
    const _0x5a2d31 = _0x3a9bbb, _0x3b9c8d = {
            'gzotB': _0x5a2d31(0x186),
            'qeOOl': 'return\x20currency',
            'oHUWP': function (_0x1a81fe, _0x1da2c3) {
                return _0x1a81fe(_0x1da2c3);
            },
            'gFYYM': 'return\x20plinkoRisk',
            'gAVdP': _0x5a2d31(0x428),
            'vFXsC': _0x5a2d31(0x2c8),
            'SLlRe': _0x5a2d31(0x146)
        }, _0x247197 = '\x0a\x20\x20\x20\x20win=' + win + _0x5a2d31(0x227) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x5a2d31(0x423) + losses + _0x5a2d31(0x372) + winstreak + _0x5a2d31(0x274) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + '\x0a\x20\x20\x20\x20balance=' + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + _0x5a2d31(0x280) + maxbalance + _0x5a2d31(0x235) + minprofit + _0x5a2d31(0x217) + maxprofit + _0x5a2d31(0x3dd) + chance + _0x5a2d31(0x1c0) + bethigh + _0x5a2d31(0x3b4) + chance1 + _0x5a2d31(0x34c) + chance2 + '\x0a\x20\x20\x20\x20chance3=' + chance3 + _0x5a2d31(0x1b0) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + _0x5a2d31(0x41e) + nextbet + _0x5a2d31(0x411) + previousbet + _0x5a2d31(0x1f8) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x5a2d31(0x2ef) + partialprofit + _0x5a2d31(0x22c) + wagered + _0x5a2d31(0x1f2) + lastBet[_0x5a2d31(0x407)] + ',\x0a\x20\x20\x20\x20\x20\x20Amount=' + lastBet['amount'] + _0x5a2d31(0x1c4) + lastBet['chance'] + _0x5a2d31(0x197) + lastBet[_0x5a2d31(0x164)] + _0x5a2d31(0x2e9) + lastBet[_0x5a2d31(0x175)] + _0x5a2d31(0x2f9) + lastBet[_0x5a2d31(0x175)] + ',\x0a\x20\x20\x20\x20\x20\x20profit=' + lastBet['profit'] + _0x5a2d31(0x40a) + lastBet[_0x5a2d31(0x318)] + ',\x0a\x20\x20\x20\x20\x20\x20target=' + lastBet[_0x5a2d31(0x34d)] + _0x5a2d31(0x180) + lastBet[_0x5a2d31(0x34d)] + ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=' + lastBet[_0x5a2d31(0x244)] + _0x5a2d31(0x35b) + lastBet[_0x5a2d31(0x244)] + _0x5a2d31(0x1c5) + lastBet['chance2'] + _0x5a2d31(0x381) + lastBet[_0x5a2d31(0x360)] + _0x5a2d31(0x388) + lastBet[_0x5a2d31(0x21f)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance3=' + lastBet['chance3'] + ',\x0a\x20\x20\x20\x20\x20\x20chance4=' + lastBet[_0x5a2d31(0x201)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance4=' + lastBet[_0x5a2d31(0x201)] + ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22' + lastBet['betSide'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22' + lastBet[_0x5a2d31(0x264)] + _0x5a2d31(0x1cf) + lastBet[_0x5a2d31(0x3a2)] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet[_0x5a2d31(0x3a2)] + _0x5a2d31(0x213) + lastBet[_0x5a2d31(0x23c)] + _0x5a2d31(0x350) + lastBet[_0x5a2d31(0x23c)] + _0x5a2d31(0x1c9) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20';
    fengari[_0x5a2d31(0x419)](_0x247197)(), fengari[_0x5a2d31(0x419)](_0x3b9c8d['gzotB'])(), currency = fengari[_0x5a2d31(0x419)](_0x3b9c8d[_0x5a2d31(0x247)])() || currency, coin = _0x3b9c8d['oHUWP'](String, currency)[_0x5a2d31(0x2e6)](), plinkoRisk = fengari[_0x5a2d31(0x419)](_0x3b9c8d[_0x5a2d31(0x184)])() || plinkoRisk, plinkoRow = fengari[_0x5a2d31(0x419)](_0x5a2d31(0x39b))() || plinkoRow, kenoRisk = fengari['load'](_0x3b9c8d[_0x5a2d31(0x1c7)])() || kenoRisk;
    const _0x5039e7 = fengari[_0x5a2d31(0x419)](_0x3b9c8d['vFXsC'])();
    return _0x5039e7 && (window[_0x5a2d31(0x385)] = _0x5039e7['split'](',')[_0x5a2d31(0x2c3)](_0x4e2404 => _0x4e2404 !== '')[_0x5a2d31(0x144)](Number)), _0x3b9c8d['SLlRe'];
}
function randomString(_0x56f9fb, _0x2ce4b4) {
    const _0x15afb4 = _0x3a9bbb, _0x57e167 = {
            'zTZSr': _0x15afb4(0x356),
            'ZLFww': _0x15afb4(0x2fa),
            'PsMco': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        }, _0x2d509d = {
            'alphabet': _0x15afb4(0x3f4),
            'numeric': _0x15afb4(0x26e),
            'hex': _0x57e167[_0x15afb4(0x1cb)],
            'rangedice': _0x57e167[_0x15afb4(0x23f)],
            'default': _0x57e167[_0x15afb4(0x3ad)]
        }, _0x3d7c17 = _0x2d509d[_0x2ce4b4] || _0x2d509d[_0x15afb4(0x211)];
    let _0x280b6c = '';
    for (let _0x1be1f1 = 0x0; _0x1be1f1 < _0x56f9fb; _0x1be1f1++) {
        _0x280b6c += _0x3d7c17[_0x15afb4(0x379)](Math[_0x15afb4(0x2c1)](Math['random']() * _0x3d7c17['length']));
    }
    return _0x280b6c;
}
function setCookie(_0x4d6323, _0x4c9306, _0x5eb3a3) {
    const _0x21c67f = _0x3a9bbb, _0x1c835b = {
            'dZvPI': function (_0x2456ba, _0x4fb164) {
                return _0x2456ba * _0x4fb164;
            },
            'lXWzK': function (_0x53d0ba, _0x40dc34) {
                return _0x53d0ba + _0x40dc34;
            },
            'RfAAs': _0x21c67f(0x19b)
        }, _0x4bfd19 = new Date();
    _0x4bfd19[_0x21c67f(0x373)](_0x4bfd19['getTime']() + _0x1c835b['dZvPI'](_0x1c835b[_0x21c67f(0x2b6)](_0x1c835b['dZvPI'](_0x5eb3a3, 0x18), 0x3c) * 0x3c, 0x3e8));
    const _0x4facc1 = _0x1c835b[_0x21c67f(0x332)](_0x1c835b[_0x21c67f(0x2ac)], _0x4bfd19[_0x21c67f(0x203)]());
    document[_0x21c67f(0x2fb)] = _0x4d6323 + '=' + _0x4c9306 + ';' + _0x4facc1 + _0x21c67f(0x3eb);
}
function getCookie(_0x1d05d9) {
    const _0x443337 = _0x3a9bbb, _0x594268 = {
            'HFcdY': function (_0x1bc34a, _0x5a6b54) {
                return _0x1bc34a + _0x5a6b54;
            }
        }, _0x3cbbd5 = _0x594268[_0x443337(0x396)](_0x1d05d9, '='), _0xa7b89d = document[_0x443337(0x2fb)][_0x443337(0x2a5)](';')[_0x443337(0x144)](_0x242497 => _0x242497[_0x443337(0x13f)]());
    for (const _0x1c54d1 of _0xa7b89d) {
        if (_0x1c54d1[_0x443337(0x1ff)](_0x3cbbd5))
            return _0x1c54d1['substring'](_0x3cbbd5['length']);
    }
    return '';
}
function saveScript() {
    const _0x461339 = _0x3a9bbb, _0x40dbe8 = {
            'WHezZ': function (_0x31ded6, _0x18fbe1) {
                return _0x31ded6 === _0x18fbe1;
            },
            'XnFDy': _0x461339(0x3de)
        }, _0x2abc6e = _0x40dbe8[_0x461339(0x2fc)](mode, _0x40dbe8[_0x461339(0x401)]) ? luaEditor[_0x461339(0x2e8)]() : jsEditor[_0x461339(0x2e8)](), _0xba3179 = document[_0x461339(0x242)]('a');
    _0xba3179[_0x461339(0x2d1)] = window[_0x461339(0x3f8)][_0x461339(0x2aa)](new Blob([_0x2abc6e], { 'type': _0x461339(0x15c) })), _0xba3179['download'] = _0x461339(0x2d0) + Date[_0x461339(0x214)]()[_0x461339(0x3ff)]()[_0x461339(0x2eb)](-0x6) + '.' + mode, _0xba3179[_0x461339(0x228)]();
}
function getErrMsg(_0x50a6a7) {
    const _0x286be4 = _0x3a9bbb;
    return _0x50a6a7['response'] && _0x50a6a7['response']['data'] && _0x50a6a7[_0x286be4(0x37d)][_0x286be4(0x3ae)][_0x286be4(0x1a4)] || _0x50a6a7[_0x286be4(0x1a4)] || _0x50a6a7['toString']();
}

(function (_0x1fed96, _0x58bc07) {
    const _0x121fbc = _0x53f0, _0x5ea01a = _0x1fed96();
    while (!![]) {
        try {
            const _0x5131cc = parseInt(_0x121fbc(0x12a)) / 0x1 * (parseInt(_0x121fbc(0x142)) / 0x2) + parseInt(_0x121fbc(0x13f)) / 0x3 * (parseInt(_0x121fbc(0x134)) / 0x4) + parseInt(_0x121fbc(0x155)) / 0x5 * (parseInt(_0x121fbc(0x164)) / 0x6) + parseInt(_0x121fbc(0x130)) / 0x7 * (-parseInt(_0x121fbc(0x14a)) / 0x8) + parseInt(_0x121fbc(0x158)) / 0x9 * (parseInt(_0x121fbc(0x16d)) / 0xa) + -parseInt(_0x121fbc(0x137)) / 0xb + parseInt(_0x121fbc(0x12e)) / 0xc * (-parseInt(_0x121fbc(0x141)) / 0xd);
            if (_0x5131cc === _0x58bc07)
                break;
            else
                _0x5ea01a['push'](_0x5ea01a['shift']());
        } catch (_0xb0cd96) {
            _0x5ea01a['push'](_0x5ea01a['shift']());
        }
    }
}(_0x59bb, 0x89b39), token = null);
async function beforeWork() {
    const _0x40c680 = _0x53f0, _0x24bc95 = {
            'aqOeT': _0x40c680(0x13d),
            'JldYJ': function (_0x247d31) {
                return _0x247d31();
            }
        };
    document[_0x40c680(0x128)][0x1]['cssRules'][0x1a91][_0x40c680(0x12c)][_0x40c680(0x143)](_0x40c680(0x165)), axios[_0x40c680(0x157)][_0x40c680(0x163)] = { 'x-csrf-token': document[_0x40c680(0x159)](_0x24bc95['aqOeT'])[_0x40c680(0x168)] }, await _0x24bc95[_0x40c680(0x136)](getNewToken);
}
function vault() {
    const _0x58d11f = _0x53f0, _0x37c916 = {
            'xzDZg': function (_0x521eec, _0x4786ab) {
                return _0x521eec(_0x4786ab);
            },
            'GqFMq': _0x58d11f(0x15a)
        };
    _0x37c916[_0x58d11f(0x149)](log, _0x37c916['GqFMq']);
}
function unvault() {
    const _0x2b555c = _0x53f0, _0x3deb47 = {
            'ZyRNH': function (_0x1e504e, _0x2fa938) {
                return _0x1e504e(_0x2fa938);
            }
        };
    _0x3deb47[_0x2b555c(0x162)](log, _0x2b555c(0x15a));
}
function _0x59bb() {
    const _0x2d6fdf = [
        '/change-currency',
        '5fWgriF',
        'uilVv',
        'defaults',
        '158670xzAKAL',
        'querySelector',
        'Not\x20supported',
        'querySelectorAll',
        'bTboV',
        'status',
        'currencies',
        '/token/refresh',
        'jvcrB',
        'result',
        'ZyRNH',
        'headers',
        '1893012GDFLKc',
        'background-color',
        'round',
        'EPSILON',
        'content',
        'TXAMn',
        'data-currency',
        'minbalance=',
        '/api/game/dice',
        '190ECloXk',
        'KNRiI',
        'QZuxk',
        'post',
        'zmTti',
        'thyRg',
        'SfDwy',
        'styleSheets',
        '&currency=',
        '2KfPRar',
        'Dhtpe',
        'style',
        '&chance=',
        '4476NiMHXA',
        'roll',
        '1603UDQaZC',
        'toFixed',
        'message',
        'maxbalance=',
        '16aBhPfq',
        'Bearer\x20',
        'JldYJ',
        '10355587PzWYwd',
        'push',
        'ANiTj',
        'YRkOM',
        'TzCYg',
        'max',
        'meta[name=\x22csrf-token\x22]',
        'sort',
        '191676rnUwqd',
        'bIeOr',
        '3913qgzaWF',
        '975254cheJuh',
        'removeProperty',
        'SNfkw',
        'XZQAT',
        'maxbet=',
        '&auto=false&autoMore=false&actionOnWin=reset&actionOnLose=reset&amount=',
        'token',
        'xzDZg',
        '9208hvDAyl',
        'hrLkw',
        'uJBVX',
        'split',
        'balance',
        'HoNKP',
        'Xmkyx',
        'load',
        'DzRds',
        'min'
    ];
    _0x59bb = function () {
        return _0x2d6fdf;
    };
    return _0x59bb();
}
async function getListCoin() {
    const _0x348e51 = _0x53f0, _0x41fe57 = {
            'KNRiI': _0x348e51(0x16a),
            'Dhtpe': '.currency-items\x20>\x20div',
            'Xmkyx': function (_0x15efcd) {
                return _0x15efcd();
            }
        };
    return document[_0x348e51(0x15b)](_0x41fe57[_0x348e51(0x12b)])['forEach'](_0x38da9d => {
        const _0x3aa2bc = _0x348e51;
        coins[_0x3aa2bc(0x138)](_0x38da9d['getAttribute'](_0x41fe57[_0x3aa2bc(0x16e)]));
    }), coins = coins[_0x348e51(0x13e)](), coin = coins[0x0], (_0x41fe57[_0x348e51(0x150)](drawSelectCoin), _0x41fe57[_0x348e51(0x150)](checkbalance));
}
async function checkbalance() {
    const _0x2fb044 = _0x53f0, _0x91d8f9 = {
            'uJBVX': _0x2fb044(0x154),
            'jvcrB': function (_0x4c663c, _0x57ea1e) {
                return _0x4c663c(_0x57ea1e);
            },
            'uilVv': 'balance=',
            'ANiTj': function (_0xba1e7a, _0x579738) {
                return _0xba1e7a + _0x579738;
            },
            'dvJUT': function (_0x174369, _0x38641e) {
                return _0x174369 + _0x38641e;
            },
            'hrLkw': 'minbet=',
            'aYzYp': function (_0x5888f5, _0xe27db3) {
                return _0x5888f5 + _0xe27db3;
            },
            'bTboV': function (_0xd4d041) {
                return _0xd4d041();
            }
        };
    try {
        const _0x209468 = { 'currency': coin }, {data: _0x304ca9} = await axios[_0x2fb044(0x170)](_0x91d8f9[_0x2fb044(0x14c)], _0x209468);
        balance = _0x91d8f9[_0x2fb044(0x160)](Number, _0x304ca9['result'][_0x2fb044(0x14e)]), fengari['load'](_0x91d8f9[_0x2fb044(0x156)] + balance)(), startBalance = balance, minbalance = balance, fengari[_0x2fb044(0x151)](_0x91d8f9['ANiTj'](_0x2fb044(0x16b), balance))(), maxbalance = balance, fengari[_0x2fb044(0x151)](_0x91d8f9[_0x2fb044(0x139)](_0x2fb044(0x133), balance))();
        for (const _0xf2fc27 in gameSettings['currencies']) {
            _0xf2fc27 === coin && (minbet = Number(gameSettings['currencies'][_0xf2fc27][_0x2fb044(0x153)]), maxbet = Number(gameSettings[_0x2fb044(0x15e)][_0xf2fc27][_0x2fb044(0x13c)]));
        }
        return fengari[_0x2fb044(0x151)](_0x91d8f9['dvJUT'](_0x91d8f9[_0x2fb044(0x14b)], minbet))(), fengari['load'](_0x91d8f9['aYzYp'](_0x2fb044(0x146), maxbet))(), _0x91d8f9[_0x2fb044(0x15c)](updateStats);
    } catch (_0x123067) {
        return log(_0x91d8f9[_0x2fb044(0x160)](getErrMsg, _0x123067));
    }
}
async function resetseed() {
    const _0x7718a2 = _0x53f0, _0x421385 = {
            'SNfkw': function (_0x43ccde, _0x258088) {
                return _0x43ccde + _0x258088;
            },
            'fjYsp': _0x7718a2(0x135),
            'bIeOr': function (_0x19e7c5, _0x33f193) {
                return _0x19e7c5(_0x33f193);
            },
            'DzRds': function (_0x1a3124) {
                return _0x1a3124();
            }
        };
    try {
        const _0x31c222 = { 'authorization': _0x421385[_0x7718a2(0x144)](_0x421385['fjYsp'], token) }, _0x289461 = { 'clientSeed': _0x421385[_0x7718a2(0x140)](randomString, 0x10) }, {data: _0x10a639} = await axios[_0x7718a2(0x170)]('/api/game-options/change-seeds', _0x289461, { 'headers': _0x31c222 });
        if (!_0x10a639[_0x7718a2(0x15d)])
            return _0x421385['bIeOr'](log, 'please\x20reset\x20seed\x20after\x205\x20minutes');
    } catch (_0x158c31) {
        return _0x421385[_0x7718a2(0x152)](stop), _0x421385[_0x7718a2(0x140)](log, _0x421385['bIeOr'](getErrMsg, _0x158c31));
    }
}
async function sendBet() {
    const _0x41327d = _0x53f0, _0xd95f8 = {
            'SfDwy': function (_0x31f0e0, _0xbf9847) {
                return _0x31f0e0 / _0xbf9847;
            },
            'XZQAT': function (_0x3df1e6, _0x183036) {
                return _0x3df1e6 * _0x183036;
            },
            'TzCYg': function (_0x128d3e, _0x3b4f67) {
                return _0x128d3e - _0x3b4f67;
            },
            'QZuxk': function (_0x2442cd, _0x2e1224) {
                return _0x2442cd + _0x2e1224;
            },
            'YRkOM': _0x41327d(0x135),
            'EWXbV': function (_0x48a80f) {
                return _0x48a80f();
            },
            'thyRg': function (_0x20b9a8, _0xe9e96d) {
                return _0x20b9a8(_0xe9e96d);
            }
        };
    try {
        chance = _0xd95f8[_0x41327d(0x127)](Math[_0x41327d(0x166)](_0xd95f8[_0x41327d(0x145)](chance + Number[_0x41327d(0x167)], 0x64)), 0x64), target = bethigh ? _0xd95f8[_0x41327d(0x13b)](99.99, chance) : chance;
        const _0x20d2c9 = _0xd95f8[_0x41327d(0x127)](Math[_0x41327d(0x166)](_0xd95f8[_0x41327d(0x16f)](0x63 / chance, Number[_0x41327d(0x167)]) * 0x64), 0x64), _0x4addde = { 'authorization': _0xd95f8[_0x41327d(0x13a)] + token }, _0xba6c8 = 'type=%3E&condition=%3' + (bethigh ? 'E' : 'C') + _0x41327d(0x129) + coin + _0x41327d(0x147) + nextbet[_0x41327d(0x131)](0x8) + '&rolls-number=0&roll=' + target[_0x41327d(0x131)](0x2) + '&payout=' + _0x20d2c9[_0x41327d(0x131)](0x4) + _0x41327d(0x12d) + chance[_0x41327d(0x131)](0x2) + '&stop-profit=0.00000000&stop-loss=0.00000000&moreOptionsSelectWin=streak&number-win=2&moreOptionsSelectLose=streak&number-lose=2&speed=50&betting=250', {data: _0x5c80f4} = await axios['post'](_0x41327d(0x16c), _0xba6c8, { 'headers': _0x4addde });
        if (!_0x5c80f4[_0x41327d(0x15d)])
            return _0xd95f8['EWXbV'](stop), log(_0x5c80f4[_0x41327d(0x132)]);
        else
            return _0xd95f8[_0x41327d(0x126)](handleResult, _0x5c80f4[_0x41327d(0x161)]);
    } catch (_0x562cfd) {
        if (run)
            return sendBet();
    }
}
async function handleResult(_0x167643) {
    const _0x5de07b = _0x53f0, _0x460a20 = {
            'HoNKP': function (_0x153f2a, _0x15c85d) {
                return _0x153f2a(_0x15c85d);
            },
            'zmTti': function (_0x3804db) {
                return _0x3804db();
            },
            'RjHCJ': function (_0x3efd31, _0x2bbaef) {
                return _0x3efd31(_0x2bbaef);
            }
        };
    try {
        const _0x67a6a1 = '2|0|4|1|3'[_0x5de07b(0x14d)]('|');
        let _0xcce439 = 0x0;
        while (!![]) {
            switch (_0x67a6a1[_0xcce439++]) {
            case '0':
                lastBet[_0x5de07b(0x12f)] = _0x167643[_0x5de07b(0x161)];
                continue;
            case '1':
                lastBet['id'] = _0x460a20[_0x5de07b(0x14f)](String, _0x167643['id']);
                continue;
            case '2':
                currentprofit = _0x167643['profit'];
                continue;
            case '3':
                return _0x460a20[_0x5de07b(0x171)](handleStats);
            case '4':
                result = _0x167643['result'];
                continue;
            }
            break;
        }
    } catch (_0x4d8099) {
        return _0x460a20[_0x5de07b(0x171)](stop), log(_0x460a20['RjHCJ'](getErrMsg, _0x4d8099));
    }
}
function _0x53f0(_0x4ed546, _0x198011) {
    const _0x59bb71 = _0x59bb();
    return _0x53f0 = function (_0x53f0c7, _0xddc44f) {
        _0x53f0c7 = _0x53f0c7 - 0x126;
        let _0x1c3525 = _0x59bb71[_0x53f0c7];
        return _0x1c3525;
    }, _0x53f0(_0x4ed546, _0x198011);
}
async function getNewToken() {
    const _0x359ddf = _0x53f0, _0x78bcad = {
            'TXAMn': _0x359ddf(0x15f),
            'lcfnE': function (_0x3336d8, _0x4d1869) {
                return _0x3336d8(_0x4d1869);
            }
        };
    try {
        const {data: _0x3f9fc9} = await axios[_0x359ddf(0x170)](_0x78bcad[_0x359ddf(0x169)]);
        token = _0x3f9fc9[_0x359ddf(0x148)];
    } catch (_0x40c2e0) {
        return stop(), _0x78bcad['lcfnE'](log, getErrMsg(_0x40c2e0));
    }
}