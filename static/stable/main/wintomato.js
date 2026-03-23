const _0x2b8a12 = _0x5b49;
(function (_0x3ad5bc, _0x5c64b2) {
    const _0x32a628 = _0x5b49, _0x120f2d = _0x3ad5bc();
    while (!![]) {
        try {
            const _0x2b08aa = parseInt(_0x32a628(0x19b)) / 0x1 + -parseInt(_0x32a628(0x235)) / 0x2 * (-parseInt(_0x32a628(0x153)) / 0x3) + parseInt(_0x32a628(0x290)) / 0x4 * (parseInt(_0x32a628(0x34b)) / 0x5) + parseInt(_0x32a628(0x185)) / 0x6 * (parseInt(_0x32a628(0x129)) / 0x7) + -parseInt(_0x32a628(0x3c4)) / 0x8 + parseInt(_0x32a628(0x1dc)) / 0x9 + -parseInt(_0x32a628(0x31e)) / 0xa;
            if (_0x2b08aa === _0x5c64b2)
                break;
            else
                _0x120f2d['push'](_0x120f2d['shift']());
        } catch (_0x7df4cf) {
            _0x120f2d['push'](_0x120f2d['shift']());
        }
    }
}(_0x4b57, 0x2aba1), Object['defineProperty'](String[_0x2b8a12(0x1a0)], 'capitalize', {
    'value': function () {
        const _0x3847f0 = _0x2b8a12, _0x22ede6 = {
                'HZAvP': function (_0x1009d1, _0x8849e6) {
                    return _0x1009d1 + _0x8849e6;
                }
            };
        return _0x22ede6['HZAvP'](this['charAt'](0x0)[_0x3847f0(0x2c9)](), this[_0x3847f0(0x160)](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x2b8a12(0x2f5), game = _0x2b8a12(0x25a), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = 'low', kenoRisk = _0x2b8a12(0x209), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = 'between', result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x2b8a12(0x1de),
    'BetSide': _0x2b8a12(0x1de),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + '/ching.mp3')), wdbUI = _0x2b8a12(0x135) + WDB_MODE + _0x2b8a12(0x39f) + CASINO_GAME + _0x2b8a12(0x30f) + WDB_HOME + _0x2b8a12(0x39f) + location[_0x2b8a12(0x316)]['replace'](_0x2b8a12(0x2bd), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = _0x2b8a12(0x21d), rangediceJsScript = _0x2b8a12(0x3b4), plinkoLuaScript = _0x2b8a12(0x139), plinkoJsScript = '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a', kenoLuaScript = _0x2b8a12(0x36e), kenoJsScript = _0x2b8a12(0x30e);
function exportLog() {
    const _0x480a22 = _0x2b8a12, _0x56d501 = { 'XGgYm': _0x480a22(0x2aa) }, _0x5603b8 = JSON[_0x480a22(0x186)](fullLogs), _0x38a063 = document['createElement']('a');
    _0x38a063[_0x480a22(0x237)] = window[_0x480a22(0x33b)][_0x480a22(0x3c7)](new Blob([_0x5603b8], { 'type': _0x56d501[_0x480a22(0x395)] })), _0x38a063[_0x480a22(0x322)] = 'log-' + Date['now']()[_0x480a22(0x239)]()[_0x480a22(0x160)](-0x6) + _0x480a22(0x27d), _0x38a063['click']();
}
class Chart {
    constructor(_0x498b14, _0x136303 = ![], _0x19e935 = 0x64) {
        const _0xb8eac3 = _0x2b8a12, _0x4b9491 = {
                'DpjGA': '2|3|5|1|4|0',
                'XHTAS': _0xb8eac3(0x172),
                'BzJqE': _0xb8eac3(0x1b7)
            }, _0x465be4 = _0x4b9491[_0xb8eac3(0x3be)][_0xb8eac3(0x2b6)]('|');
        let _0x46f4c0 = 0x0;
        while (!![]) {
            switch (_0x465be4[_0x46f4c0++]) {
            case '0':
                this[_0xb8eac3(0x19e)][_0xb8eac3(0x31c)]();
                continue;
            case '1':
                this[_0xb8eac3(0x15a)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '2':
                this[_0xb8eac3(0x2f9)] = _0x498b14;
                continue;
            case '3':
                this[_0xb8eac3(0x177)] = _0x136303;
                continue;
            case '4':
                this[_0xb8eac3(0x19e)] = new CanvasJS[(_0xb8eac3(0x389))](_0x498b14, {
                    'theme': _0x136303 ? 'dark1' : _0x4b9491[_0xb8eac3(0x163)],
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0x4b9491[_0xb8eac3(0x1f3)],
                            'markerSize': 0x0,
                            'dataPoints': this[_0xb8eac3(0x15a)]
                        }]
                });
                continue;
            case '5':
                this[_0xb8eac3(0xf4)] = _0x19e935;
                continue;
            }
            break;
        }
    }
    set [_0x2b8a12(0x1eb)](_0x17f873) {
        const _0x26f181 = _0x2b8a12;
        this[_0x26f181(0xf4)] = _0x17f873;
    }
    get [_0x2b8a12(0x1eb)]() {
        const _0x4624ec = _0x2b8a12;
        return this[_0x4624ec(0xf4)];
    }
    set [_0x2b8a12(0x31d)](_0x49f867) {
        const _0x49cb27 = _0x2b8a12, _0x3d106a = {
                'jzyyu': _0x49cb27(0x3ae),
                'rTbxK': _0x49cb27(0x172)
            };
        this['_darkMode'] = _0x49f867, this[_0x49cb27(0x19e)][_0x49cb27(0x1c1)][_0x49cb27(0x330)] = _0x49f867 ? _0x3d106a[_0x49cb27(0x33e)] : _0x3d106a['rTbxK'], this[_0x49cb27(0x19e)]['render']();
    }
    get [_0x2b8a12(0x31d)]() {
        const _0x56e83c = _0x2b8a12;
        return this[_0x56e83c(0x177)];
    }
    ['updateChart'](_0x425e45, _0x29ca5d, _0x6f16fa) {
        const _0x4dff8d = _0x2b8a12, _0x20c917 = {
                'VUSBy': function (_0x36e723, _0x3c7d61) {
                    return _0x36e723 - _0x3c7d61;
                },
                'aUkax': function (_0x47ca3f, _0x2019c1) {
                    return _0x47ca3f - _0x2019c1;
                }
            };
        this['dps']['push']({
            'x': _0x425e45,
            'y': _0x29ca5d,
            'lineColor': _0x6f16fa
        });
        if (this[_0x4dff8d(0x15a)]['length'] > this[_0x4dff8d(0xf4)])
            this[_0x4dff8d(0x15a)]['shift']();
        if (this['dps'][_0x20c917['VUSBy'](this[_0x4dff8d(0x15a)][_0x4dff8d(0x13a)], 0x2)])
            this['dps'][_0x20c917[_0x4dff8d(0x35e)](this[_0x4dff8d(0x15a)][_0x4dff8d(0x13a)], 0x2)]['lineColor'] = _0x6f16fa;
        this[_0x4dff8d(0x19e)][_0x4dff8d(0x31c)]();
    }
    [_0x2b8a12(0x291)]() {
        const _0x3eba13 = _0x2b8a12;
        this[_0x3eba13(0x15a)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x3eba13(0x19e)][_0x3eba13(0x1c1)][_0x3eba13(0x26b)][0x0][_0x3eba13(0x29e)] = this[_0x3eba13(0x15a)], this['chart'][_0x3eba13(0x31c)]();
    }
}
function changeMaxRows() {
    const _0x1facba = _0x2b8a12, _0x50058f = {
            'nVhMk': _0x1facba(0x299),
            'FldcH': function (_0x529f7a) {
                return _0x529f7a();
            },
            'eUMnn': _0x1facba(0x37c),
            'dAyDg': function (_0x3382af) {
                return _0x3382af();
            },
            'gpzWD': function (_0x4349b9) {
                return _0x4349b9();
            }
        }, _0x149925 = _0x50058f[_0x1facba(0x25d)][_0x1facba(0x2b6)]('|');
    let _0x44fc7f = 0x0;
    while (!![]) {
        switch (_0x149925[_0x44fc7f++]) {
        case '0':
            _0x50058f[_0x1facba(0x3ac)](resetchart);
            continue;
        case '1':
            maxRows = Number(document[_0x1facba(0x3d0)](_0x50058f['eUMnn'])['value']);
            continue;
        case '2':
            _0x50058f[_0x1facba(0x214)](resethistory);
            continue;
        case '3':
            chart[_0x1facba(0x1eb)] = maxRows;
            continue;
        case '4':
            _0x50058f[_0x1facba(0x266)](resetlog);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x735c04 = _0x2b8a12, _0x5f3aac = {
            'QPdFw': _0x735c04(0x31a),
            'YPAHz': _0x735c04(0x150),
            'LGdFD': _0x735c04(0x341),
            'ujYjp': _0x735c04(0x385),
            'qUylV': _0x735c04(0x37f),
            'HMWPA': _0x735c04(0x3d2),
            'ayzQW': '#2a2a2a',
            'Zkgdc': _0x735c04(0x320),
            'SGTJm': _0x735c04(0x137),
            'VOJlI': _0x735c04(0x1ec),
            'MRdrU': _0x735c04(0x330),
            'nXFuG': _0x735c04(0x1d4),
            'HaHWw': _0x735c04(0xc5)
        };
    darkMode = !darkMode, chart[_0x735c04(0x31d)] = darkMode;
    const _0x1c93d1 = document[_0x735c04(0x3d0)](_0x735c04(0x355)), _0x5c5b6e = document[_0x735c04(0x3d0)](_0x5f3aac[_0x735c04(0x353)]), _0x1cf714 = document['querySelectorAll'](_0x5f3aac[_0x735c04(0x2fa)]), _0x2a8ae0 = document[_0x735c04(0x3b8)](_0x5f3aac[_0x735c04(0x2dd)]), _0x479f7d = document[_0x735c04(0x3b8)](_0x5f3aac[_0x735c04(0x257)]);
    if (darkMode)
        _0x1c93d1[_0x735c04(0x3d4)][_0x735c04(0x18f)] = _0x5f3aac[_0x735c04(0x2c1)], _0x1c93d1[_0x735c04(0x3d4)][_0x735c04(0x29a)] = '#fff', _0x1c93d1[_0x735c04(0x3d4)]['borderColor'] = _0x5f3aac[_0x735c04(0x2c1)], _0x5c5b6e[_0x735c04(0x3d4)]['backgroundColor'] = _0x5f3aac[_0x735c04(0x30d)], luaEditor[_0x735c04(0x305)](_0x735c04(0x330), _0x5f3aac['SGTJm']), jsEditor[_0x735c04(0x305)](_0x735c04(0x330), _0x5f3aac[_0x735c04(0xd6)]), _0x1cf714[_0x735c04(0x158)](_0xe37f01 => {
            const _0x1b5329 = _0x735c04;
            _0xe37f01['style']['backgroundColor'] = _0x1b5329(0x3a0), _0xe37f01[_0x1b5329(0x3d4)]['color'] = _0x5f3aac[_0x1b5329(0x2ed)];
        }), _0x2a8ae0[_0x735c04(0x158)](_0x1bb2ed => _0x1bb2ed['style'][_0x735c04(0x29a)] = _0x735c04(0x31a)), _0x479f7d[_0x735c04(0x158)](_0x26abc6 => _0x26abc6[_0x735c04(0x3d4)][_0x735c04(0x29a)] = _0x735c04(0x31a));
    else {
        const _0x45bc5c = _0x5f3aac[_0x735c04(0x359)][_0x735c04(0x2b6)]('|');
        let _0x3e8040 = 0x0;
        while (!![]) {
            switch (_0x45bc5c[_0x3e8040++]) {
            case '0':
                _0x1cf714[_0x735c04(0x158)](_0x49f5df => {
                    const _0x32c5cf = _0x735c04;
                    _0x49f5df['style'][_0x32c5cf(0x18f)] = _0x5f3aac[_0x32c5cf(0x2ed)], _0x49f5df['style'][_0x32c5cf(0x29a)] = _0x5f3aac[_0x32c5cf(0x3d8)];
                });
                continue;
            case '1':
                _0x1c93d1[_0x735c04(0x3d4)][_0x735c04(0x18f)] = _0x5f3aac[_0x735c04(0x2ed)];
                continue;
            case '2':
                _0x1c93d1[_0x735c04(0x3d4)]['color'] = _0x5f3aac[_0x735c04(0x3d8)];
                continue;
            case '3':
                jsEditor[_0x735c04(0x305)](_0x5f3aac[_0x735c04(0x1a9)], _0x735c04(0xc5));
                continue;
            case '4':
                _0x5c5b6e[_0x735c04(0x3d4)][_0x735c04(0x18f)] = _0x5f3aac[_0x735c04(0x115)];
                continue;
            case '5':
                _0x479f7d[_0x735c04(0x158)](_0x296f9c => _0x296f9c[_0x735c04(0x3d4)]['color'] = _0x735c04(0x150));
                continue;
            case '6':
                _0x2a8ae0[_0x735c04(0x158)](_0xb099a9 => _0xb099a9[_0x735c04(0x3d4)][_0x735c04(0x29a)] = _0x735c04(0x150));
                continue;
            case '7':
                _0x1c93d1[_0x735c04(0x3d4)][_0x735c04(0x107)] = _0x735c04(0x31a);
                continue;
            case '8':
                luaEditor[_0x735c04(0x305)](_0x5f3aac[_0x735c04(0x1a9)], _0x5f3aac[_0x735c04(0x25c)]);
                continue;
            }
            break;
        }
    }
    updateStats();
}
let previousPosition = {
    'top': _0x2b8a12(0xf1),
    'left': _0x2b8a12(0xf1),
    'position': _0x2b8a12(0x231)
};
function loadSavedPosition() {
    const _0x17256e = _0x2b8a12, _0xb6a982 = { 'FauYN': _0x17256e(0x3c1) }, _0x1f6027 = localStorage['getItem'](_0xb6a982[_0x17256e(0x12a)]);
    if (_0x1f6027)
        try {
            const _0x3188da = JSON[_0x17256e(0x32e)](_0x1f6027);
            _0x3188da[_0x17256e(0x255)] && _0x3188da[_0x17256e(0xef)] && (previousPosition = _0x3188da);
        } catch (_0x53bd8a) {
        }
}
function savePosition() {
    const _0x181d4d = _0x2b8a12;
    localStorage[_0x181d4d(0x274)]('wdb-bot-position', JSON[_0x181d4d(0x186)](previousPosition));
}
function toggleMinimalBot(_0xaf0ddb) {
    const _0x5361e4 = _0x2b8a12, _0x7687a1 = {
            'sRNHt': 'wdbMain',
            'cvxnq': _0x5361e4(0x1aa),
            'cgMZX': function (_0x42c186, _0x468e3b) {
                return _0x42c186 === _0x468e3b;
            },
            'Kwhur': _0x5361e4(0xf1),
            'nTaMd': _0x5361e4(0x231),
            'ZPVBi': function (_0x13e49a) {
                return _0x13e49a();
            },
            'HeqAE': _0x5361e4(0x2c8),
            'AFVVk': '350px',
            'ZWBoD': function (_0x448e6f, _0x2c5c95) {
                return _0x448e6f / _0x2c5c95;
            },
            'Wtkrk': function (_0x15cd53, _0x51a36e) {
                return _0x15cd53 - _0x51a36e;
            },
            'nuTRc': _0x5361e4(0x124),
            'MtsEW': function (_0x2a0b1e, _0x3f0553) {
                return _0x2a0b1e + _0x3f0553;
            },
            'guxIZ': _0x5361e4(0x261),
            'Lxkwj': _0x5361e4(0x38e),
            'usZjq': _0x5361e4(0xd9)
        }, _0x820911 = document['getElementById'](_0x7687a1[_0x5361e4(0x203)]), _0x18516d = document[_0x5361e4(0x3d0)](_0x7687a1[_0x5361e4(0x3d1)]), _0x1fd4a7 = document[_0x5361e4(0x3d0)](_0x5361e4(0x355));
    if (_0x7687a1['cgMZX'](_0xaf0ddb[_0x5361e4(0x12f)], '▼')) {
        const _0x4fc1e2 = window[_0x5361e4(0x350)](_0x1fd4a7);
        previousPosition = {
            'top': _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0x255)] || _0x4fc1e2[_0x5361e4(0x255)] || _0x7687a1[_0x5361e4(0x1f6)],
            'left': _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0xef)] || _0x4fc1e2['left'] || _0x7687a1[_0x5361e4(0x1f6)],
            'position': _0x1fd4a7[_0x5361e4(0x3d4)]['position'] || _0x4fc1e2[_0x5361e4(0x21f)] || _0x7687a1['nTaMd']
        }, _0x7687a1[_0x5361e4(0x19a)](savePosition), _0x820911[_0x5361e4(0x3d4)][_0x5361e4(0x10c)] = _0x7687a1[_0x5361e4(0x176)], _0x18516d[_0x5361e4(0x3d4)]['display'] = _0x7687a1['HeqAE'], _0x1fd4a7[_0x5361e4(0x3d4)]['width'] = _0x7687a1[_0x5361e4(0xd4)];
        const _0x476578 = window[_0x5361e4(0x1a6)], _0x32409b = 0x15e, _0x5acd22 = _0x7687a1['ZWBoD'](_0x7687a1[_0x5361e4(0x3a8)](_0x476578, _0x32409b), 0x2);
        _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0x255)] = _0x7687a1[_0x5361e4(0x22a)], _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0xef)] = _0x7687a1[_0x5361e4(0x250)](_0x5acd22, 'px'), _0x1fd4a7['style']['position'] = _0x7687a1['nTaMd'], _0xaf0ddb[_0x5361e4(0x12f)] = '▲';
    } else {
        const _0x5500e1 = _0x7687a1['guxIZ']['split']('|');
        let _0x2ca0ce = 0x0;
        while (!![]) {
            switch (_0x5500e1[_0x2ca0ce++]) {
            case '0':
                _0xaf0ddb[_0x5361e4(0x12f)] = '▼';
                continue;
            case '1':
                _0x18516d['style'][_0x5361e4(0x10c)] = _0x7687a1[_0x5361e4(0x167)];
                continue;
            case '2':
                _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0xfa)] = _0x7687a1[_0x5361e4(0x300)];
                continue;
            case '3':
                _0x1fd4a7[_0x5361e4(0x3d4)]['top'] = previousPosition['top'];
                continue;
            case '4':
                _0x1fd4a7[_0x5361e4(0x3d4)][_0x5361e4(0x21f)] = previousPosition[_0x5361e4(0x21f)];
                continue;
            case '5':
                _0x1fd4a7['style']['left'] = previousPosition[_0x5361e4(0xef)];
                continue;
            case '6':
                _0x820911[_0x5361e4(0x3d4)][_0x5361e4(0x10c)] = _0x7687a1[_0x5361e4(0x167)];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x101d83) {
    const _0x1baa58 = _0x2b8a12, _0x208e4f = {
            'lhWRb': _0x1baa58(0x348),
            'rAkgN': function (_0x14e4e3, _0x2fd037) {
                return _0x14e4e3 === _0x2fd037;
            },
            'LfQuS': _0x1baa58(0x2c8)
        }, _0x14b182 = document[_0x1baa58(0x3d0)](_0x208e4f[_0x1baa58(0x23d)]);
    _0x208e4f['rAkgN'](_0x101d83[_0x1baa58(0x12f)], '▲') ? (_0x14b182[_0x1baa58(0x3d4)]['display'] = _0x208e4f[_0x1baa58(0x247)], _0x101d83[_0x1baa58(0x12f)] = '▼') : (_0x14b182[_0x1baa58(0x3d4)]['display'] = _0x1baa58(0xcd), _0x101d83['innerText'] = '▲');
}
function drawSelectCoin() {
    const _0x49ad77 = _0x2b8a12, _0x14b97e = {
            'uqoxe': function (_0x28df0f, _0x28f7ef) {
                return _0x28df0f(_0x28f7ef);
            }
        }, _0x58792c = coins['map'](_0xc18532 => _0x49ad77(0xc9) + _0xc18532 + '\x22>' + _0xc18532 + _0x49ad77(0x110))['join']('');
    document[_0x49ad77(0x3d0)](_0x49ad77(0x120))['innerHTML'] = _0x58792c, currency = _0x14b97e[_0x49ad77(0x2ce)](String, coin)[_0x49ad77(0x374)](), fengari[_0x49ad77(0x1ca)](_0x49ad77(0xf5) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0xb8ea13 = _0x2b8a12, _0x3e8504 = {
            'Qcmft': function (_0xa0cae0, _0x20e9b6) {
                return _0xa0cae0 - _0x20e9b6;
            },
            'Audnv': function (_0x135d68, _0x461da3) {
                return _0x135d68 - _0x461da3;
            },
            'OPNkA': function (_0x3ae28f, _0x1f1205) {
                return _0x3ae28f - _0x1f1205;
            },
            'VHVQC': function (_0x3f481a, _0x44468e) {
                return _0x3f481a + _0x44468e;
            },
            'jGSMo': 'wdbToggleMinimal',
            'diVKs': function (_0x4de9a8, _0x1fb955) {
                return _0x4de9a8 === _0x1fb955;
            },
            'GUjHo': function (_0x533f61) {
                return _0x533f61();
            },
            'Twubm': function (_0x1a92cf, _0x4837d9) {
                return _0x1a92cf === _0x4837d9;
            },
            'iAkzs': _0xb8ea13(0x1b0),
            'vxURh': _0xb8ea13(0x1c9),
            'TLFoy': function (_0x36f7e9, _0x3dc4a0) {
                return _0x36f7e9 / _0x3dc4a0;
            },
            'WHRhI': function (_0x13e6a1, _0x35ab1b) {
                return _0x13e6a1 - _0x35ab1b;
            },
            'wZcCo': function (_0x5130ce) {
                return _0x5130ce();
            },
            'CbFpQ': function (_0x3c1c2d, _0x1cdc12) {
                return _0x3c1c2d / _0x1cdc12;
            },
            'iDiKu': _0xb8ea13(0x1bf),
            'MPnFy': _0xb8ea13(0x244),
            'gveDd': _0xb8ea13(0x355),
            'kLyLn': _0xb8ea13(0x123),
            'dXibu': _0xb8ea13(0x11e),
            'bUKvh': 'wdbWrapInitializing',
            'DULoz': _0xb8ea13(0x20d),
            'ozxiq': _0xb8ea13(0xc5),
            'PCJqP': 'lua',
            'KWfZT': _0xb8ea13(0x21a),
            'qCRnP': _0xb8ea13(0x187),
            'IsuhW': _0xb8ea13(0x2c8),
            'YMZVf': _0xb8ea13(0x1e7),
            'EiTuU': _0xb8ea13(0x15e),
            'amWrG': _0xb8ea13(0x371),
            'yHUTc': _0xb8ea13(0xec),
            'yKVZU': 'wdbWrapTips',
            'DPKLb': _0xb8ea13(0x2ac),
            'HGgyB': 'wdbOpenLUAScript',
            'indEu': _0xb8ea13(0x210),
            'hjriq': _0xb8ea13(0x17d),
            'clhBV': 'wdbOpenJSScript',
            'wgzXN': _0xb8ea13(0x103),
            'NsqLg': 'createUIOk'
        }, _0x1d3e3d = document[_0xb8ea13(0x2f0)](_0x3e8504[_0xb8ea13(0x15f)]);
    _0x1d3e3d['id'] = _0x3e8504[_0xb8ea13(0x184)], _0x1d3e3d[_0xb8ea13(0x2e6)] = wdbUI, document[_0xb8ea13(0x272)][_0xb8ea13(0x15b)](_0x1d3e3d);
    const _0x11f1b4 = document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x318)]);
    let _0x464d9c = 0x0, _0x322a15 = 0x0, _0x1a4237 = 0x0, _0xb12fda = 0x0;
    _0x3e8504[_0xb8ea13(0x147)](loadSavedPosition), _0x11f1b4[_0xb8ea13(0x3d4)][_0xb8ea13(0x255)] = previousPosition[_0xb8ea13(0x255)], _0x11f1b4[_0xb8ea13(0x3d4)][_0xb8ea13(0xef)] = previousPosition[_0xb8ea13(0xef)], _0x11f1b4[_0xb8ea13(0x3d4)][_0xb8ea13(0x21f)] = previousPosition['position'];
    function _0x2cf0d0(_0x1d3899) {
        const _0x28a30a = _0xb8ea13;
        _0x1d3899 = _0x1d3899 || window['event'], _0x1d3899['preventDefault'](), _0x1a4237 = _0x1d3899['clientX'], _0xb12fda = _0x1d3899['clientY'], document[_0x28a30a(0x2de)] = _0x20e409, document[_0x28a30a(0x1e3)] = _0x5ec276;
    }
    function _0x5ec276(_0x126963) {
        const _0x517564 = _0xb8ea13;
        _0x126963 = _0x126963 || window[_0x517564(0x196)], _0x126963[_0x517564(0xe5)](), _0x464d9c = _0x3e8504[_0x517564(0x125)](_0x1a4237, _0x126963[_0x517564(0x213)]), _0x322a15 = _0x3e8504[_0x517564(0xca)](_0xb12fda, _0x126963[_0x517564(0x39c)]), _0x1a4237 = _0x126963[_0x517564(0x213)], _0xb12fda = _0x126963['clientY'];
        let _0x197cb5 = _0x11f1b4[_0x517564(0x27e)] - _0x322a15, _0x414ebf = _0x3e8504['OPNkA'](_0x11f1b4[_0x517564(0xfe)], _0x464d9c);
        _0x11f1b4['style'][_0x517564(0x255)] = _0x3e8504[_0x517564(0x1f1)](_0x197cb5, 'px'), _0x11f1b4[_0x517564(0x3d4)][_0x517564(0xef)] = _0x3e8504[_0x517564(0x1f1)](_0x414ebf, 'px');
    }
    function _0x20e409() {
        const _0x284e70 = _0xb8ea13, _0x1a15aa = document['getElementById'](_0x3e8504[_0x284e70(0xe4)]);
        if (_0x1a15aa && _0x3e8504[_0x284e70(0xc7)](_0x1a15aa[_0x284e70(0x12f)], '▼')) {
            const _0x5b97d1 = window[_0x284e70(0x350)](_0x11f1b4);
            previousPosition[_0x284e70(0x255)] = _0x11f1b4[_0x284e70(0x3d4)]['top'] || _0x5b97d1['top'], previousPosition[_0x284e70(0xef)] = _0x11f1b4[_0x284e70(0x3d4)][_0x284e70(0xef)] || _0x5b97d1['left'], _0x3e8504['GUjHo'](savePosition);
        }
        document[_0x284e70(0x2de)] = null, document[_0x284e70(0x1e3)] = null;
    }
    document[_0xb8ea13(0x3d0)](_0xb8ea13(0x341))[_0xb8ea13(0x1cc)] = _0x2cf0d0, document['addEventListener'](_0xb8ea13(0x16b), function (_0x45207b) {
        const _0x166e0b = _0xb8ea13;
        if (_0x3e8504['diVKs'](_0x45207b['key'][_0x166e0b(0x374)](), 'w')) {
            const _0x18837f = document[_0x166e0b(0x337)], _0x3ac52b = _0x3e8504[_0x166e0b(0xf6)](_0x18837f[_0x166e0b(0x3d7)], _0x3e8504[_0x166e0b(0x23e)]) || _0x3e8504[_0x166e0b(0xf6)](_0x18837f[_0x166e0b(0x3d7)], _0x3e8504['vxURh']) || _0x18837f[_0x166e0b(0x216)] || _0x18837f[_0x166e0b(0x30a)](_0x166e0b(0x181));
            if (!_0x3ac52b) {
                const _0x59d5c6 = _0x3e8504[_0x166e0b(0x2e3)](_0x3e8504[_0x166e0b(0xca)](window[_0x166e0b(0x392)], _0x11f1b4[_0x166e0b(0x1fd)]), 0x2), _0x1ff2a3 = _0x3e8504[_0x166e0b(0x2e3)](_0x3e8504[_0x166e0b(0x278)](window[_0x166e0b(0x1a6)], _0x11f1b4[_0x166e0b(0x2ae)]), 0x2);
                _0x11f1b4['style'][_0x166e0b(0x255)] = _0x59d5c6 + 'px', _0x11f1b4[_0x166e0b(0x3d4)][_0x166e0b(0xef)] = _0x3e8504[_0x166e0b(0x1f1)](_0x1ff2a3, 'px');
                const _0x2d716e = document[_0x166e0b(0x3d0)](_0x3e8504[_0x166e0b(0xe4)]);
                _0x2d716e && _0x3e8504[_0x166e0b(0xf6)](_0x2d716e['innerText'], '▼') && (previousPosition[_0x166e0b(0x255)] = _0x11f1b4[_0x166e0b(0x3d4)][_0x166e0b(0x255)], previousPosition[_0x166e0b(0xef)] = _0x11f1b4[_0x166e0b(0x3d4)][_0x166e0b(0xef)], _0x3e8504[_0x166e0b(0x154)](savePosition));
            }
        }
    }), window[_0xb8ea13(0x2ee)](_0x3e8504[_0xb8ea13(0x1b5)], function () {
        const _0x25014d = _0xb8ea13, _0x33c454 = document[_0x25014d(0x3d0)](_0x3e8504[_0x25014d(0xe4)]);
        if (_0x33c454 && _0x3e8504[_0x25014d(0xf6)](_0x33c454['innerText'], '▲')) {
            const _0x5d29b9 = window[_0x25014d(0x1a6)], _0x3b13b7 = 0x15e, _0x2cc093 = _0x3e8504['CbFpQ'](_0x3e8504[_0x25014d(0xca)](_0x5d29b9, _0x3b13b7), 0x2);
            _0x11f1b4['style'][_0x25014d(0xef)] = _0x2cc093 + 'px';
        }
    });
    if (document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x215)]))
        document[_0xb8ea13(0x3d0)](_0xb8ea13(0x11e))[_0xb8ea13(0x2fc)]();
    if (document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x22b)]))
        document['getElementById'](_0x3e8504['bUKvh'])[_0xb8ea13(0x2fc)]();
    luaEditor = CodeMirror['fromTextArea'](document['getElementById'](_0x3e8504[_0xb8ea13(0x321)]), {
        'theme': _0x3e8504[_0xb8ea13(0x1a7)],
        'mode': _0x3e8504[_0xb8ea13(0x11d)],
        'lineNumbers': !![]
    }), luaEditor['save'](), jsEditor = CodeMirror['fromTextArea'](document[_0xb8ea13(0x3d0)](_0xb8ea13(0x260)), {
        'theme': _0x3e8504[_0xb8ea13(0x1a7)],
        'mode': _0x3e8504[_0xb8ea13(0x29f)],
        'lineNumbers': !![]
    }), jsEditor[_0xb8ea13(0x329)](), document['getElementById'](_0x3e8504['qCRnP'])[_0xb8ea13(0x3d4)][_0xb8ea13(0x10c)] = _0x3e8504[_0xb8ea13(0x3c8)], document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x26f)])[_0xb8ea13(0x3d4)][_0xb8ea13(0x10c)] = _0x3e8504['IsuhW'], document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x1ae)])[_0xb8ea13(0x3d4)][_0xb8ea13(0x10c)] = _0xb8ea13(0x2c8), document[_0xb8ea13(0x3d0)](_0x3e8504['amWrG'])[_0xb8ea13(0x3d4)]['display'] = _0x3e8504[_0xb8ea13(0x3c8)], document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x113)])[_0xb8ea13(0x3d4)][_0xb8ea13(0x10c)] = _0x3e8504[_0xb8ea13(0x3c8)], document[_0xb8ea13(0x3d0)](_0x3e8504['yKVZU'])[_0xb8ea13(0x3d4)][_0xb8ea13(0x10c)] = _0xb8ea13(0x2c8), document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0x32a)])[_0xb8ea13(0x271)] = !![];
    const _0x89df56 = document[_0xb8ea13(0x3d0)](_0x3e8504[_0xb8ea13(0xcf)]);
    _0x89df56[_0xb8ea13(0x2ee)](_0x3e8504[_0xb8ea13(0x1a5)], () => {
        const _0x1b8cbf = _0xb8ea13;
        _0x89df56[_0x1b8cbf(0x37d)] = null;
    }), _0x89df56[_0xb8ea13(0x2ee)](_0x3e8504[_0xb8ea13(0x2e8)], async _0x544f42 => {
        const _0x4f6e21 = _0xb8ea13, _0x4ad70d = await new Response(_0x544f42[_0x4f6e21(0x1a8)][_0x4f6e21(0x382)][0x0])[_0x4f6e21(0x173)]();
        if (!_0x4ad70d)
            return;
        luaEditor[_0x4f6e21(0xdb)](_0x4ad70d);
    });
    const _0x5d2a77 = document['getElementById'](_0x3e8504[_0xb8ea13(0x2bc)]);
    return _0x5d2a77['addEventListener'](_0x3e8504[_0xb8ea13(0x1a5)], () => {
        const _0x1a8464 = _0xb8ea13;
        _0x5d2a77[_0x1a8464(0x37d)] = null;
    }), _0x5d2a77[_0xb8ea13(0x2ee)](_0x3e8504[_0xb8ea13(0x2e8)], async _0x2fcb6b => {
        const _0x1b2abf = _0xb8ea13, _0xd9fffd = await new Response(_0x2fcb6b['target'][_0x1b2abf(0x382)][0x0])[_0x1b2abf(0x173)]();
        if (!_0xd9fffd)
            return;
        jsEditor[_0x1b2abf(0xdb)](_0xd9fffd);
    }), chart = new Chart(_0x3e8504['wgzXN'], ![], 0x64), _0x3e8504[_0xb8ea13(0x3cc)];
}
async function wdbLoader(_0x2fb851) {
    const _0x5cda54 = _0x2b8a12, _0x3865a5 = {
            'WCMHg': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
            'yGarG': _0x5cda54(0xe9),
            'TlSok': _0x5cda54(0x2a8),
            'UlaqQ': _0x5cda54(0x365),
            'XReAV': '/fengari-web.min.js',
            'GJebB': function (_0x32364f, _0x2af092) {
                return _0x32364f + _0x2af092;
            },
            'zBOkT': '/canvasjs.min.js',
            'erBVL': _0x5cda54(0x12e),
            'NDTjT': _0x5cda54(0xe6),
            'tQbqS': function (_0x3093cf, _0x4d9107) {
                return _0x3093cf(_0x4d9107);
            },
            'XIIIT': function (_0xc1d014) {
                return _0xc1d014();
            },
            'RKrJa': function (_0x5e24d0, _0x4e7533) {
                return _0x5e24d0 === _0x4e7533;
            },
            'WkrSj': '#wdbMenuMode\x20option[value=\x22advanced\x22]',
            'LBdpY': _0x5cda54(0x345),
            'lhEoP': _0x5cda54(0x10e)
        }, _0x80fd32 = [
            _0x3865a5['WCMHg'],
            _0x3865a5['yGarG'],
            _0x3865a5[_0x5cda54(0x3c6)],
            _0x5cda54(0x130),
            _0x3865a5[_0x5cda54(0x11b)],
            WDB_LIB + _0x3865a5['XReAV'],
            _0x3865a5[_0x5cda54(0x18b)](WDB_LIB, _0x3865a5[_0x5cda54(0x193)])
        ], _0x28919f = [
            _0x3865a5[_0x5cda54(0x263)],
            _0x3865a5[_0x5cda54(0x19c)]
        ];
    for (const _0x405fe5 of _0x80fd32) {
        await _0x2fb851[_0x5cda54(0x18a)](_0x405fe5);
    }
    for (const _0x4d1974 of _0x28919f) {
        await _0x2fb851[_0x5cda54(0x211)](_0x4d1974);
    }
    await _0x3865a5['tQbqS'](beforeWork, _0x2fb851), await _0x3865a5[_0x5cda54(0x275)](wdbCreateUI), await getListCoin(), await _0x3865a5[_0x5cda54(0x275)](initLua);
    if (_0x3865a5[_0x5cda54(0x33f)](game, _0x5cda54(0x379)))
        luaEditor[_0x5cda54(0xdb)](rangediceLuaScript), jsEditor[_0x5cda54(0xdb)](rangediceJsScript), document[_0x5cda54(0x28a)](_0x3865a5[_0x5cda54(0x2bf)])['disabled'] = !![];
    else {
        if (game === _0x5cda54(0x12b))
            luaEditor['setValue'](plinkoLuaScript), jsEditor['setValue'](plinkoJsScript), document['querySelector'](_0x3865a5['WkrSj'])[_0x5cda54(0x271)] = !![];
        else
            game === _0x3865a5[_0x5cda54(0x119)] && (luaEditor[_0x5cda54(0xdb)](kenoLuaScript), jsEditor[_0x5cda54(0xdb)](kenoJsScript), document[_0x5cda54(0x28a)](_0x3865a5[_0x5cda54(0x2bf)])[_0x5cda54(0x271)] = !![]);
    }
    return _0x3865a5[_0x5cda54(0x23f)](log, _0x5cda54(0x3b3)), _0x3865a5[_0x5cda54(0x1db)];
}
function toggleNav(_0x572d43) {
    const _0x4b6fd2 = _0x2b8a12, _0x373d06 = {
            'sZbhv': function (_0x19444e, _0x2e42b3) {
                return _0x19444e === _0x2e42b3;
            },
            'BuNfV': _0x4b6fd2(0x38e),
            'JxAWb': _0x4b6fd2(0x2c8),
            'IfnNb': function (_0x5a3bea, _0x493ada) {
                return _0x5a3bea === _0x493ada;
            },
            'XcweE': 'Mode',
            'uDVFM': _0x4b6fd2(0x26c),
            'MozPJ': _0x4b6fd2(0x2d6)
        }, _0x4eb388 = [
            _0x373d06[_0x4b6fd2(0x252)],
            _0x373d06[_0x4b6fd2(0x251)],
            _0x373d06[_0x4b6fd2(0x29b)],
            _0x4b6fd2(0x38d),
            _0x4b6fd2(0x27b)
        ];
    _0x4eb388[_0x4b6fd2(0x158)](_0xa3d0f3 => {
        const _0x73c583 = _0x4b6fd2, _0x487238 = _0x373d06[_0x73c583(0x198)](_0xa3d0f3[_0x73c583(0x374)](), _0x572d43) ? _0x373d06[_0x73c583(0x2e4)] : _0x373d06[_0x73c583(0x1e8)];
        document[_0x73c583(0x3d0)](_0x73c583(0x244) + _0xa3d0f3)['style'][_0x73c583(0x10c)] = _0x487238, document[_0x73c583(0x3d0)](_0x73c583(0xf9) + _0xa3d0f3)[_0x73c583(0x271)] = _0x373d06[_0x73c583(0x168)](_0x487238, _0x373d06[_0x73c583(0x2e4)]);
    });
}
function toggleShow(_0x4a4bb7) {
    const _0x3eb5a3 = _0x2b8a12, _0x12876d = document[_0x3eb5a3(0x3d0)](_0x3eb5a3(0xdf) + (_0x4a4bb7[_0x3eb5a3(0x1e9)](0x0)[_0x3eb5a3(0x2c9)]() + _0x4a4bb7[_0x3eb5a3(0x160)](0x1)))[_0x3eb5a3(0x2cc)];
    selectFunction(_0x12876d ? _0x3eb5a3(0x3b6) + _0x4a4bb7 : _0x3eb5a3(0x298) + _0x4a4bb7);
}
function toggleLive(_0x59deaa) {
    const _0x313230 = _0x2b8a12, _0x4433a9 = {
            'BvWuG': function (_0x46bf66, _0x2ba46a) {
                return _0x46bf66(_0x2ba46a);
            }
        }, _0x56d1a1 = document[_0x313230(0x3d0)](_0x313230(0x13b) + (_0x59deaa[_0x313230(0x1e9)](0x0)[_0x313230(0x2c9)]() + _0x59deaa[_0x313230(0x160)](0x1)))['checked'];
    _0x4433a9[_0x313230(0x17f)](selectFunction, '' + (_0x56d1a1 ? _0x313230(0x144) : _0x313230(0x1fb)) + _0x59deaa);
}
function selectFunction(_0x417b37) {
    const _0x8991ea = _0x2b8a12, _0x49bf1e = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x8991ea(0x3a3)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog(_0x8991ea(0x1ee)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x8991ea(0x1fb)),
            'startchart': () => toggleChart(_0x8991ea(0x144)),
            'stophistory': () => toggleHistory('stop'),
            'starthistory': () => toggleHistory(_0x8991ea(0x144)),
            'stoplog': () => toggleLog(_0x8991ea(0x1fb)),
            'startlog': () => toggleLog(_0x8991ea(0x144)),
            'hidestats': () => toggleStats(_0x8991ea(0x298)),
            'showstats': () => toggleStats(_0x8991ea(0x3b6)),
            'hidechart': () => toggleChart('hide'),
            'showchart': () => toggleChart('show'),
            'hidehistory': () => toggleHistory(_0x8991ea(0x298)),
            'showhistory': () => toggleHistory('show')
        };
    if (_0x49bf1e[_0x417b37])
        _0x49bf1e[_0x417b37]();
}
function toggleMode(_0x51774a) {
    const _0x4ffa5d = _0x2b8a12, _0x248c7c = {
            'dsiOg': function (_0x191222, _0x1d0810) {
                return _0x191222 === _0x1d0810;
            },
            'BCSfT': 'plinko',
            'lMCWr': function (_0xb8dd56, _0xc23da7) {
                return _0xb8dd56 === _0xc23da7;
            },
            'bfZkg': 'keno',
            'YadGb': _0x4ffa5d(0x1e6),
            'eqRVb': _0x4ffa5d(0x187),
            'ZadRp': _0x4ffa5d(0x1e7),
            'Smbwe': _0x4ffa5d(0x2f5),
            'oOgKa': _0x4ffa5d(0x38e),
            'iHHCw': _0x4ffa5d(0x2c8),
            'OsGam': _0x4ffa5d(0x1d0)
        };
    mode = _0x51774a;
    if (_0x248c7c[_0x4ffa5d(0x1be)](game, _0x4ffa5d(0x379)))
        luaEditor[_0x4ffa5d(0xdb)](rangediceLuaScript), jsEditor[_0x4ffa5d(0xdb)](rangediceJsScript);
    else {
        if (game === _0x248c7c[_0x4ffa5d(0x141)])
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0x4ffa5d(0xdb)](plinkoJsScript);
        else
            _0x248c7c[_0x4ffa5d(0x314)](game, _0x248c7c[_0x4ffa5d(0x2f2)]) && (luaEditor[_0x4ffa5d(0xdb)](kenoLuaScript), jsEditor[_0x4ffa5d(0xdb)](kenoJsScript));
    }
    const _0x368ec5 = document['getElementById'](_0x248c7c[_0x4ffa5d(0x11c)]), _0x58d578 = document[_0x4ffa5d(0x3d0)](_0x248c7c[_0x4ffa5d(0x284)]), _0x240870 = document[_0x4ffa5d(0x3d0)](_0x248c7c[_0x4ffa5d(0x227)]);
    _0x368ec5[_0x4ffa5d(0x3d4)][_0x4ffa5d(0x10c)] = _0x248c7c['lMCWr'](_0x51774a, _0x248c7c[_0x4ffa5d(0x264)]) ? _0x248c7c[_0x4ffa5d(0xe3)] : _0x248c7c[_0x4ffa5d(0x381)], _0x58d578['style'][_0x4ffa5d(0x10c)] = _0x51774a === 'js' ? _0x248c7c[_0x4ffa5d(0xe3)] : _0x4ffa5d(0x2c8), _0x240870[_0x4ffa5d(0x3d4)][_0x4ffa5d(0x10c)] = _0x248c7c[_0x4ffa5d(0x1be)](_0x51774a, _0x248c7c[_0x4ffa5d(0x2cd)]) ? _0x248c7c[_0x4ffa5d(0xe3)] : _0x248c7c['iHHCw'], luaEditor[_0x4ffa5d(0x19f)](), jsEditor['deleteH']();
}
function _0x5b49(_0x134508, _0x528027) {
    const _0x4b5754 = _0x4b57();
    return _0x5b49 = function (_0x5b499f, _0x5f419d) {
        _0x5b499f = _0x5b499f - 0xc3;
        let _0x255d19 = _0x4b5754[_0x5b499f];
        return _0x255d19;
    }, _0x5b49(_0x134508, _0x528027);
}
function toggleStats(_0x1bd061) {
    const _0x4716e5 = _0x2b8a12, _0x12624c = {
            'dqzZn': _0x4716e5(0x298),
            'RooNB': 'flex',
            'JLCZg': _0x4716e5(0x1ef)
        }, _0x1cafdd = _0x1bd061 === _0x12624c[_0x4716e5(0x165)] ? 'none' : _0x12624c[_0x4716e5(0x145)];
    document[_0x4716e5(0x3d0)](_0x12624c[_0x4716e5(0x256)])[_0x4716e5(0x3d4)][_0x4716e5(0x10c)] = _0x1cafdd;
}
function toggleChart(_0x567fb0) {
    const _0x3855f2 = _0x2b8a12, _0x409f2f = {
            'RUFWY': _0x3855f2(0x298),
            'vqwyI': _0x3855f2(0x2c8),
            'HGSnm': _0x3855f2(0x3b1),
            'Iwknl': _0x3855f2(0x3b6),
            'uLgjZ': _0x3855f2(0x38e),
            'BvhPz': '190px',
            'vtKDf': _0x3855f2(0x144),
            'bKtpn': _0x3855f2(0x3a3)
        }, _0x29c9ca = document[_0x3855f2(0x3d0)]('wdbChart'), _0x59e7ba = document['getElementById'](_0x3855f2(0x169));
    switch (_0x567fb0) {
    case _0x409f2f['RUFWY']:
        _0x29c9ca[_0x3855f2(0x3d4)][_0x3855f2(0x10c)] = _0x409f2f[_0x3855f2(0x1b3)], _0x59e7ba['style'][_0x3855f2(0x106)] = _0x409f2f[_0x3855f2(0x3d5)];
        break;
    case _0x409f2f[_0x3855f2(0x331)]:
        _0x29c9ca[_0x3855f2(0x3d4)][_0x3855f2(0x10c)] = _0x409f2f[_0x3855f2(0x3bd)], _0x59e7ba[_0x3855f2(0x3d4)]['height'] = _0x409f2f[_0x3855f2(0x311)];
        break;
    case _0x3855f2(0x1fb):
        stopChart = !![];
        break;
    case _0x409f2f[_0x3855f2(0x23a)]:
        stopChart = ![];
        break;
    case _0x409f2f['bKtpn']:
        betsChart = 0x0, profitChart = 0x0, chart[_0x3855f2(0x291)]();
        break;
    }
}
function toggleHistory(_0x3135ab) {
    const _0x51289f = _0x2b8a12, _0x4fe5b5 = {
            'aXJQE': 'wdbHistory',
            'IoPwU': _0x51289f(0x103),
            'ngClU': _0x51289f(0x298),
            'ozICA': _0x51289f(0x3b1),
            'lFTfP': 'block',
            'bMCSv': _0x51289f(0x340),
            'IFtrV': _0x51289f(0x1fb)
        }, _0xc13893 = document[_0x51289f(0x3d0)](_0x4fe5b5['aXJQE']), _0x3ef330 = document[_0x51289f(0x3d0)](_0x4fe5b5['IoPwU']);
    switch (_0x3135ab) {
    case _0x4fe5b5[_0x51289f(0x28e)]:
        _0xc13893[_0x51289f(0x3d4)][_0x51289f(0x10c)] = 'none', _0x3ef330['style'][_0x51289f(0x106)] = _0x4fe5b5[_0x51289f(0x159)];
        break;
    case _0x51289f(0x3b6):
        _0xc13893[_0x51289f(0x3d4)][_0x51289f(0x10c)] = _0x4fe5b5[_0x51289f(0x2b3)], _0x3ef330['style']['height'] = _0x4fe5b5[_0x51289f(0x1a3)];
        break;
    case _0x4fe5b5[_0x51289f(0x2ab)]:
        stopHistory = !![];
        break;
    case _0x51289f(0x144):
        stopHistory = ![];
        break;
    case _0x51289f(0x1ee):
        _0xc13893[_0x51289f(0x2e6)] = '';
        break;
    }
}
function toggleLog(_0x57ffaa) {
    const _0x5501cd = _0x2b8a12, _0x41c8d3 = {
            'VVpbQ': _0x5501cd(0x1fb),
            'kBInE': _0x5501cd(0x144),
            'OueTE': _0x5501cd(0x253)
        };
    switch (_0x57ffaa) {
    case _0x41c8d3[_0x5501cd(0x2b9)]:
        stopLog = !![];
        break;
    case _0x41c8d3['kBInE']:
        stopLog = ![];
        break;
    case 'clear':
        document['getElementById'](_0x41c8d3[_0x5501cd(0x30b)])['innerHTML'] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x120f17 = _0x2b8a12, _0x20f821 = {
            'DOQgB': function (_0xa47029, _0x5087e4) {
                return _0xa47029(_0x5087e4);
            },
            'LMthI': _0x120f17(0xfc),
            'OUKkU': _0x120f17(0x105),
            'vvoCi': function (_0x284395, _0x421d8b) {
                return _0x284395(_0x421d8b);
            },
            'KVhIU': function (_0x3b6531, _0x5d4425) {
                return _0x3b6531(_0x5d4425);
            },
            'WFcPd': _0x120f17(0xd1),
            'iFgXx': _0x120f17(0x37b),
            'UkaNe': _0x120f17(0x221),
            'nuYgi': _0x120f17(0x108),
            'LVePM': function (_0x591a77, _0x146bca) {
                return _0x591a77(_0x146bca);
            },
            'EfdMV': _0x120f17(0x200),
            'QSYTw': _0x120f17(0x2a1),
            'sdwCT': _0x120f17(0x1f9),
            'LpYud': _0x120f17(0x3a2),
            'Sixgg': _0x120f17(0x24b),
            'vfkCw': 'advancedBetHighOnBet',
            'ajWLB': function (_0x131e02, _0x2ce3a3) {
                return _0x131e02 === _0x2ce3a3;
            },
            'zMZIs': function (_0x2bae2d, _0x16b652) {
                return _0x2bae2d % _0x16b652;
            },
            'vlnXi': 'advancedBetHighOnProfit',
            'ytHfj': function (_0x86d966, _0x45d685) {
                return _0x86d966 >= _0x45d685;
            },
            'IgHlH': 'resetstatsOnProfitCheck',
            'aKlTY': function (_0x5a5896, _0xf1cc16) {
                return _0x5a5896(_0xf1cc16);
            },
            'pkHyG': function (_0x37b8dd) {
                return _0x37b8dd();
            },
            'qMXfy': _0x120f17(0x218),
            'axsUt': function (_0x3ef93b, _0x220d93) {
                return _0x3ef93b(_0x220d93);
            },
            'VrPUj': function (_0x3e9f07, _0x4d39c7) {
                return _0x3e9f07 + _0x4d39c7;
            },
            'tWcGE': _0x120f17(0x230),
            'eqrfX': _0x120f17(0x32c),
            'adIYt': function (_0x25f173, _0x55cd39) {
                return _0x25f173 > _0x55cd39;
            },
            'llSCc': function (_0x41caf2) {
                return _0x41caf2();
            },
            'iOvQh': _0x120f17(0x295),
            'AwheG': function (_0x2f8ce5, _0x1cc366) {
                return _0x2f8ce5 <= _0x1cc366;
            },
            'lRhGQ': function (_0x3e9918, _0x1f6c57) {
                return _0x3e9918 + _0x1f6c57;
            },
            'Icaay': _0x120f17(0x204),
            'vtdOJ': function (_0x51efc6, _0x293654) {
                return _0x51efc6(_0x293654);
            },
            'QULnh': function (_0x247472, _0x24a534) {
                return _0x247472 >= _0x24a534;
            },
            'udpnq': function (_0x1714af, _0x30b450) {
                return _0x1714af(_0x30b450);
            },
            'OUeQF': function (_0x4be8f7, _0x38bc5a) {
                return _0x4be8f7 + _0x38bc5a;
            },
            'TZYHj': _0x120f17(0x369),
            'HKJVs': _0x120f17(0xfb),
            'aZCOy': function (_0x3ec211, _0x3d8247) {
                return _0x3ec211(_0x3d8247);
            },
            'JZBZq': _0x120f17(0x3d3),
            'tmWcZ': function (_0x4daa3a, _0x52a7c3) {
                return _0x4daa3a >= _0x52a7c3;
            },
            'anjXV': function (_0x267657, _0x42a375) {
                return _0x267657 + _0x42a375;
            },
            'PNeDM': _0x120f17(0x398),
            'dVQVh': _0x120f17(0x1ce),
            'vqxRs': function (_0x5cc04e, _0x305745) {
                return _0x5cc04e + _0x305745;
            },
            'JfsMI': function (_0x5b33d7, _0x1bb3b2) {
                return _0x5b33d7 + _0x1bb3b2;
            },
            'wSPsV': '\x20lose',
            'Azoys': _0x120f17(0x2e0),
            'NXKLo': function (_0x311cc8, _0x29d892) {
                return _0x311cc8(_0x29d892);
            },
            'UCDZr': 'stopOnBalanceCheck',
            'Uboxt': function (_0x50fd30, _0x20f09f) {
                return _0x50fd30(_0x20f09f);
            },
            'EoAAD': _0x120f17(0x2b7),
            'RQIkQ': _0x120f17(0x2cb),
            'RguNO': _0x120f17(0x2ad),
            'oUnFL': _0x120f17(0xe0),
            'BZeLJ': function (_0x5a3c82, _0x138aed) {
                return _0x5a3c82 === _0x138aed;
            },
            'ZnUPf': function (_0x569627, _0x543689) {
                return _0x569627 % _0x543689;
            },
            'goyxF': function (_0x35bcd6, _0x376c79) {
                return _0x35bcd6 === _0x376c79;
            },
            'FPxXP': function (_0x34ec09, _0x568445) {
                return _0x34ec09 * _0x568445;
            },
            'WPOll': _0x120f17(0x3cd),
            'SfWGP': function (_0x1df207, _0x1a137e) {
                return _0x1df207(_0x1a137e);
            },
            'PFUeA': _0x120f17(0x36d),
            'DgygN': function (_0x46453e, _0xdd3b54) {
                return _0x46453e === _0xdd3b54;
            },
            'ZcNSp': function (_0x3875a9, _0x5b7c70) {
                return _0x3875a9 % _0x5b7c70;
            },
            'eCcDQ': function (_0x3cf871, _0x7bc443) {
                return _0x3cf871 === _0x7bc443;
            },
            'MvlOj': function (_0x1e2999, _0xed1cfa) {
                return _0x1e2999 * _0xed1cfa;
            },
            'yfuqL': _0x120f17(0x35a)
        };
    chance = _0x20f821['DOQgB'](Number, document['getElementById'](_0x20f821[_0x120f17(0x22c)])['value']);
    const _0x584259 = document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x1da)])[_0x120f17(0x2cc)], _0x5c6a49 = _0x584259 ? _0x20f821['vvoCi'](Number, document[_0x120f17(0x3d0)](_0x120f17(0x3c0))[_0x120f17(0x37d)]) : chance, _0x744706 = _0x20f821[_0x120f17(0x1af)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x142)])[_0x120f17(0x37d)]), _0x1d6748 = document['getElementById'](_0x20f821['iFgXx'])[_0x120f17(0x2cc)], _0x820a89 = _0x1d6748 ? _0x20f821[_0x120f17(0x279)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x376)])['value']) : chance, _0x269560 = Number(document[_0x120f17(0x3d0)](_0x20f821['nuYgi'])[_0x120f17(0x37d)]), _0x55c7e9 = document[_0x120f17(0x3d0)](_0x120f17(0xf3))['checked'], _0x2c5e60 = _0x55c7e9 ? _0x20f821[_0x120f17(0x242)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x138)])[_0x120f17(0x37d)]) : 0x1, _0x3886c1 = _0x20f821[_0x120f17(0x232)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x270)])[_0x120f17(0x37d)]), _0x42fa7f = document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x2e2)])[_0x120f17(0x2cc)], _0x4b06f = _0x42fa7f ? Number(document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x131)])[_0x120f17(0x37d)]) : 0x1, _0x5897b7 = _0x20f821['LVePM'](Number, document[_0x120f17(0x3d0)](_0x120f17(0x2a6))[_0x120f17(0x37d)]), _0x1accb3 = document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0xd8)])[_0x120f17(0x2cc)];
    if (_0x1accb3) {
        const _0xad1d7b = _0x20f821[_0x120f17(0x279)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x303)])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x17a)](_0x20f821['zMZIs'](bets, _0xad1d7b), 0x0))
            bethigh = !bethigh;
    }
    const _0x139ed3 = document[_0x120f17(0x3d0)](_0x120f17(0x361))[_0x120f17(0x2cc)];
    if (_0x139ed3) {
        const _0x3e5d6f = _0x20f821[_0x120f17(0x232)](Number, document['getElementById'](_0x20f821[_0x120f17(0xf8)])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x16f)](profit, _0x3e5d6f))
            bethigh = !bethigh;
    }
    const _0x447710 = document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x21c)])[_0x120f17(0x2cc)];
    if (_0x447710) {
        const _0x2d9ab4 = _0x20f821['aKlTY'](Number, document[_0x120f17(0x3d0)](_0x120f17(0x132))[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x16f)](profit, _0x2d9ab4))
            _0x20f821[_0x120f17(0x313)](resetstats);
    }
    const _0x583f97 = document[_0x120f17(0x3d0)](_0x120f17(0x3a1))['checked'];
    if (_0x583f97) {
        const _0x50f25a = _0x20f821[_0x120f17(0x232)](Number, document[_0x120f17(0x3d0)](_0x20f821['qMXfy'])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x17a)](lastBet[_0x120f17(0x164)], _0x50f25a))
            _0x20f821[_0x120f17(0x313)](stop), _0x20f821[_0x120f17(0x2cf)](log, _0x20f821[_0x120f17(0x2f6)](_0x20f821['tWcGE'], _0x50f25a));
    }
    const _0x30c569 = document[_0x120f17(0x3d0)](_0x120f17(0x223))[_0x120f17(0x2cc)];
    if (_0x30c569) {
        const _0x192a2b = Number(document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x1b8)])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x2a5)](_0x192a2b, 0x0)) {
            if (_0x20f821['ytHfj'](currentstreak, _0x192a2b))
                _0x20f821[_0x120f17(0x224)](stop), _0x20f821[_0x120f17(0x242)](log, _0x20f821['iOvQh'] + _0x192a2b);
        } else {
            if (_0x20f821[_0x120f17(0x226)](currentstreak, _0x192a2b))
                _0x20f821['llSCc'](stop), _0x20f821[_0x120f17(0x279)](log, _0x20f821[_0x120f17(0x3bc)](_0x20f821['iOvQh'], _0x192a2b));
        }
    }
    const _0x35531a = document[_0x120f17(0x3d0)](_0x20f821['Icaay'])['checked'];
    if (_0x35531a) {
        const _0x2c226d = _0x20f821[_0x120f17(0x2a3)](Number, document[_0x120f17(0x3d0)](_0x120f17(0xf7))[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x1ac)](bets, _0x2c226d))
            stop(), _0x20f821[_0x120f17(0x30c)](log, _0x20f821[_0x120f17(0x287)](_0x20f821[_0x120f17(0xd2)] + _0x2c226d, _0x20f821[_0x120f17(0x179)]));
    }
    const _0x58219f = document['getElementById']('advancedStopOnWinsCheck')[_0x120f17(0x2cc)];
    if (_0x58219f) {
        const _0x35feaa = _0x20f821[_0x120f17(0x1cd)](Number, document['getElementById'](_0x20f821['JZBZq'])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x1b2)](winstreak, _0x35feaa))
            stop(), _0x20f821[_0x120f17(0x30c)](log, _0x20f821[_0x120f17(0x2a9)](_0x20f821[_0x120f17(0x3bc)](_0x120f17(0x369), _0x35feaa), _0x20f821['PNeDM']));
    }
    const _0x1e7671 = document[_0x120f17(0x3d0)](_0x120f17(0x2ec))[_0x120f17(0x2cc)];
    if (_0x1e7671) {
        const _0x448f8d = Number(document[_0x120f17(0x3d0)](_0x20f821['dVQVh'])[_0x120f17(0x37d)]);
        if (losestreak >= _0x448f8d)
            stop(), log(_0x20f821['vqxRs'](_0x20f821['JfsMI'](_0x20f821[_0x120f17(0xd2)], _0x448f8d), _0x20f821['wSPsV']));
    }
    const _0x3578b2 = document[_0x120f17(0x3d0)](_0x120f17(0x23b))[_0x120f17(0x2cc)];
    if (_0x3578b2) {
        const _0x2dea68 = Number(document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x399)])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x1ac)](profit, _0x2dea68))
            stop(), _0x20f821['NXKLo'](log, 'Stop\x20on\x20profit\x20' + _0x2dea68);
    }
    const _0x16f9e1 = document[_0x120f17(0x3d0)](_0x20f821['UCDZr'])[_0x120f17(0x2cc)];
    if (_0x16f9e1) {
        const _0x51f94e = _0x20f821[_0x120f17(0x3a7)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x222)])[_0x120f17(0x37d)]);
        if (_0x20f821[_0x120f17(0x1b2)](balance, _0x51f94e))
            _0x20f821[_0x120f17(0x224)](stop), log(_0x20f821['RQIkQ'] + _0x51f94e);
    }
    if (win) {
        const _0x2b6ba0 = document['getElementById'](_0x20f821[_0x120f17(0x386)])['checked'];
        if (_0x2b6ba0) {
            const _0x5e619a = _0x20f821[_0x120f17(0x148)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x180)])[_0x120f17(0x37d)]);
            if (winstreak % _0x5e619a === 0x0)
                bethigh = !bethigh;
        }
        if (_0x20f821[_0x120f17(0x1ea)](_0x20f821['ZnUPf'](winstreak, _0x744706), 0x0))
            chance = _0x5c6a49;
        if (_0x55c7e9) {
            if (_0x20f821[_0x120f17(0xd0)](_0x20f821[_0x120f17(0x15d)](winstreak, _0x3886c1), 0x0))
                nextbet = _0x20f821[_0x120f17(0x2d7)](previousbet, _0x2c5e60);
        } else
            nextbet = basebet;
    } else {
        const _0x39728a = document['getElementById'](_0x20f821[_0x120f17(0x128)])[_0x120f17(0x2cc)];
        if (_0x39728a) {
            const _0xe9fda2 = _0x20f821[_0x120f17(0x22f)](Number, document[_0x120f17(0x3d0)](_0x20f821[_0x120f17(0x1c7)])[_0x120f17(0x37d)]);
            if (_0x20f821[_0x120f17(0x390)](_0x20f821['ZcNSp'](losestreak, _0xe9fda2), 0x0))
                bethigh = !bethigh;
        }
        if (_0x20f821[_0x120f17(0x2a0)](losestreak, _0x269560) === 0x0)
            chance = _0x820a89;
        if (_0x42fa7f) {
            if (_0x20f821[_0x120f17(0x3ca)](losestreak % _0x5897b7, 0x0))
                nextbet = _0x20f821['MvlOj'](previousbet, _0x4b06f);
        } else
            nextbet = basebet;
    }
    return _0x20f821[_0x120f17(0x2b5)];
}
function changeCoin() {
    const _0x48fa06 = _0x2b8a12, _0xb69e11 = {
            'pGpRV': _0x48fa06(0x120),
            'NeXmM': function (_0x3de5c6) {
                return _0x3de5c6();
            }
        };
    coin = document[_0x48fa06(0x3d0)](_0xb69e11[_0x48fa06(0x13c)])[_0x48fa06(0x37d)], currency = coin[_0x48fa06(0x374)](), fengari[_0x48fa06(0x1ca)](_0x48fa06(0xf5) + currency + '\x22')(), _0xb69e11[_0x48fa06(0x33d)](checkbalance);
}
async function handleStats() {
    const _0x2da21b = _0x2b8a12, _0x35f16f = {
            'VGbUJ': function (_0x457887, _0x42ee93) {
                return _0x457887 === _0x42ee93;
            },
            'hcYlX': _0x2da21b(0x2f5),
            'neawu': function (_0x485697) {
                return _0x485697();
            },
            'TTwyu': function (_0x5c55c9, _0x46f888) {
                return _0x5c55c9 === _0x46f888;
            },
            'ErdBB': 'advanced',
            'jAtaZ': function (_0x53d57f, _0x36d214) {
                return _0x53d57f && _0x36d214;
            },
            'pTWGR': function (_0x571430) {
                return _0x571430();
            },
            'tlVcv': function (_0x25768d, _0x5c9801) {
                return _0x25768d(_0x5c9801);
            },
            'ORcjR': function (_0x623c85, _0xd066f9) {
                return _0x623c85 === _0xd066f9;
            },
            'pUDcv': _0x2da21b(0x379),
            'upWRi': _0x2da21b(0x338),
            'vmJLg': function (_0x4ea113, _0x2f5788) {
                return _0x4ea113 === _0x2f5788;
            },
            'CAvfM': function (_0x17a2b0, _0x2ff6d9) {
                return _0x17a2b0 < _0x2ff6d9;
            },
            'vnpMj': function (_0x11c809, _0x1ce14d) {
                return _0x11c809 === _0x1ce14d;
            },
            'ETlzu': _0x2da21b(0x345),
            'HwXMN': _0x2da21b(0x1de),
            'jpKla': function (_0x37f9f2, _0x1d742e) {
                return _0x37f9f2 > _0x1d742e;
            },
            'JeFuv': _0x2da21b(0xcc),
            'SCciP': function (_0x519038, _0x3cd4c8) {
                return _0x519038 === _0x3cd4c8;
            },
            'YeDIi': _0x2da21b(0x262),
            'kyUQq': function (_0x9b5b8b, _0x2da7f5) {
                return _0x9b5b8b > _0x2da7f5;
            },
            'BkukN': function (_0x138b27, _0x96193b) {
                return _0x138b27 < _0x96193b;
            },
            'UAUwP': function (_0x574c4b, _0x6931f0) {
                return _0x574c4b > _0x6931f0;
            },
            'Asncd': function (_0x4b82ed, _0x395cc8) {
                return _0x4b82ed < _0x395cc8;
            },
            'igDwE': function (_0x28718e, _0x51c7b7) {
                return _0x28718e || _0x51c7b7;
            },
            'IJKEE': function (_0xed9981, _0x4ca55a) {
                return _0xed9981 >= _0x4ca55a;
            },
            'mxgdu': _0x2da21b(0x3b7),
            'ngTqf': '3|0|5|2|4|1',
            'xTOSV': _0x2da21b(0x2f8),
            'osQvM': function (_0x532047, _0x470577) {
                return _0x532047 > _0x470577;
            },
            'sqwgg': function (_0x57cab3, _0x3ea69e) {
                return _0x57cab3 > _0x3ea69e;
            },
            'doPwH': function (_0x47a236, _0x48f864) {
                return _0x47a236 > _0x48f864;
            },
            'WDoVk': function (_0x57eeaa, _0x455a0e) {
                return _0x57eeaa < _0x455a0e;
            }
        }, _0x265d47 = Date[_0x2da21b(0x11f)]();
    speedHistory['push'](_0x265d47);
    const _0x20b45d = 0x2710;
    speedHistory = speedHistory['filter'](_0x3e8b5d => _0x265d47 - _0x3e8b5d <= _0x20b45d), bets++, lastBet['Roll'] = lastBet[_0x2da21b(0x10a)], lastBet['target'] = target, lastBet[_0x2da21b(0x197)] = target;
    if (_0x35f16f['ORcjR'](game, _0x35f16f[_0x2da21b(0x136)])) {
        const _0x13f26c = _0x35f16f[_0x2da21b(0x134)][_0x2da21b(0x2b6)]('|');
        let _0x5009fa = 0x0;
        while (!![]) {
            switch (_0x13f26c[_0x5009fa++]) {
            case '0':
                lastBet[_0x2da21b(0x14d)] = chance2;
                continue;
            case '1':
                lastBet[_0x2da21b(0x391)] = chance1;
                continue;
            case '2':
                lastBet[_0x2da21b(0x14e)] = chance3;
                continue;
            case '3':
                lastBet[_0x2da21b(0x27f)] = chance2;
                continue;
            case '4':
                lastBet['betSide'] = betSide;
                continue;
            case '5':
                lastBet[_0x2da21b(0x346)] = chance4;
                continue;
            case '6':
                lastBet[_0x2da21b(0x18d)] = chance4;
                continue;
            case '7':
                lastBet[_0x2da21b(0x229)] = betSide;
                continue;
            case '8':
                lastBet[_0x2da21b(0x2ba)] = chance3;
                continue;
            case '9':
                lastBet[_0x2da21b(0x277)] = chance1;
                continue;
            }
            break;
        }
    }
    lastBet['result'] = result, lastBet['Result'] = result, lastBet[_0x2da21b(0x3ce)] = currentprofit, lastBet['Profit'] = currentprofit, lastBet[_0x2da21b(0x2e7)] = lastBet[_0x2da21b(0x1d7)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x35f16f[_0x2da21b(0x3c5)](game, 'dice'))
        win = lastBet[_0x2da21b(0x246)] ? lastBet[_0x2da21b(0x164)] > lastBet[_0x2da21b(0x1a8)] : _0x35f16f['CAvfM'](lastBet[_0x2da21b(0x164)], lastBet[_0x2da21b(0x1a8)]);
    else {
        if (_0x35f16f['vnpMj'](game, _0x2da21b(0x12b)) || game === _0x35f16f['ETlzu'])
            win = lastBet[_0x2da21b(0x3ce)] > 0x0;
        else {
            if (_0x35f16f[_0x2da21b(0x14c)](game, _0x35f16f[_0x2da21b(0x136)])) {
                if (_0x35f16f['TTwyu'](lastBet['betSide'], _0x35f16f['HwXMN']))
                    win = _0x35f16f[_0x2da21b(0x25e)](lastBet[_0x2da21b(0x10a)], lastBet['chance1']) && _0x35f16f[_0x2da21b(0x126)](lastBet['roll'], lastBet[_0x2da21b(0x14d)]);
                else {
                    if (lastBet['betSide'] === _0x35f16f[_0x2da21b(0x2af)])
                        win = lastBet[_0x2da21b(0x10a)] < lastBet['chance1'] || _0x35f16f[_0x2da21b(0x25e)](lastBet[_0x2da21b(0x10a)], lastBet[_0x2da21b(0x14d)]);
                    else {
                        if (_0x35f16f[_0x2da21b(0x225)](lastBet['betSide'], _0x35f16f[_0x2da21b(0x26d)])) {
                            const _0x41f43e = _0x35f16f['kyUQq'](lastBet['roll'], lastBet[_0x2da21b(0x391)]) && _0x35f16f[_0x2da21b(0x307)](lastBet[_0x2da21b(0x10a)], lastBet[_0x2da21b(0x14d)]), _0x23fb0e = _0x35f16f['UAUwP'](lastBet[_0x2da21b(0x10a)], lastBet[_0x2da21b(0x2ba)]) && _0x35f16f['Asncd'](lastBet[_0x2da21b(0x10a)], lastBet[_0x2da21b(0x346)]);
                            win = _0x35f16f[_0x2da21b(0x178)](_0x41f43e, _0x23fb0e);
                        }
                    }
                }
            } else
                win = _0x35f16f[_0x2da21b(0x1d8)](lastBet['result'], lastBet[_0x2da21b(0x1a8)]);
        }
    }
    if (win) {
        const _0x45be63 = _0x35f16f[_0x2da21b(0x343)][_0x2da21b(0x2b6)]('|');
        let _0x11119d = 0x0;
        while (!![]) {
            switch (_0x45be63[_0x11119d++]) {
            case '0':
                currentstreak = winstreak;
                continue;
            case '1':
                winstreak++;
                continue;
            case '2':
                losestreak = 0x0;
                continue;
            case '3':
                color = 'green';
                continue;
            case '4':
                wins++;
                continue;
            }
            break;
        }
    } else {
        const _0xba0994 = _0x35f16f[_0x2da21b(0xeb)][_0x2da21b(0x2b6)]('|');
        let _0x30002f = 0x0;
        while (!![]) {
            switch (_0xba0994[_0x30002f++]) {
            case '0':
                losses++;
                continue;
            case '1':
                if (_0x35f16f['UAUwP'](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '2':
                winstreak = 0x0;
                continue;
            case '3':
                color = _0x35f16f['xTOSV'];
                continue;
            case '4':
                currentstreak = -losestreak;
                continue;
            case '5':
                losestreak++;
                continue;
            }
            break;
        }
    }
    if (_0x35f16f[_0x2da21b(0xdc)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x35f16f[_0x2da21b(0x11a)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x35f16f['UAUwP'](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x35f16f['BkukN'](balance, minbalance))
        minbalance = balance;
    if (_0x35f16f['doPwH'](balance, maxbalance))
        maxbalance = balance;
    if (_0x35f16f['WDoVk'](profit, minprofit))
        minprofit = profit;
    if (profit > maxprofit)
        maxprofit = profit;
    _0x35f16f[_0x2da21b(0x328)](showInfo)[_0x2da21b(0x1a2)](async () => {
        const _0x24ceb7 = _0x2da21b;
        try {
            if (_0x35f16f['VGbUJ'](mode, _0x35f16f[_0x24ceb7(0x243)]))
                await updateLua();
            else {
                if (_0x35f16f[_0x24ceb7(0x306)](mode, 'js'))
                    await _0x35f16f[_0x24ceb7(0x328)](dobet);
                else
                    _0x35f16f[_0x24ceb7(0x1d9)](mode, _0x35f16f[_0x24ceb7(0x258)]) && await handleAdvanced();
            }
            if (_0x35f16f[_0x24ceb7(0x10b)](win, sOW))
                _0x35f16f[_0x24ceb7(0x328)](stop);
            if (run)
                _0x35f16f['pTWGR'](playBet);
        } catch (_0x385e75) {
            _0x35f16f['neawu'](stop), _0x35f16f[_0x24ceb7(0x372)](log, _0x385e75);
        }
    });
}
async function showInfo() {
    const _0x59d2c0 = _0x2b8a12, _0x43aea2 = {
            'fbiIm': _0x59d2c0(0x188),
            'ITitI': function (_0x1407e8, _0x2ae22a) {
                return _0x1407e8 < _0x2ae22a;
            },
            'ojkcE': _0x59d2c0(0xd5),
            'WnpFl': function (_0x3ecfe7, _0x555512) {
                return _0x3ecfe7 === _0x555512;
            },
            'aadCb': _0x59d2c0(0x241),
            'VMdoL': function (_0x908b95, _0x2e18fa) {
                return _0x908b95 < _0x2e18fa;
            },
            'ktVge': function (_0x388ac2, _0x2996ce) {
                return _0x388ac2 > _0x2996ce;
            },
            'YvhWV': 'red',
            'PUsMT': _0x59d2c0(0x2a2),
            'hyCVi': 'wdbHighLoseStreak',
            'EskyE': 'wdbWagered',
            'SHMof': 'wdbBalance',
            'GDufw': _0x59d2c0(0x114),
            'CfmvW': 'wdbHighBet',
            'PuWRL': _0x59d2c0(0x127),
            'csIBN': _0x59d2c0(0x373),
            'usqQv': _0x59d2c0(0x116),
            'NnfOW': _0x59d2c0(0x17b),
            'jiGaW': _0x59d2c0(0x39e),
            'ZKJxA': _0x59d2c0(0x2fe),
            'wlrtO': _0x59d2c0(0x3ab),
            'SEeQe': 'wdbMaxProfit',
            'RUuyB': function (_0x1ebc64, _0x556ae9) {
                return _0x1ebc64 / _0x556ae9;
            },
            'VHeTL': function (_0x779afe, _0x1ab15a) {
                return _0x779afe * _0x1ab15a;
            },
            'zKGwT': function (_0x8efb36, _0x29418a) {
                return _0x8efb36 + _0x29418a;
            },
            'uvOUf': function (_0x11251c, _0x1c1f6f) {
                return _0x11251c(_0x1c1f6f);
            },
            'TDLqR': _0x59d2c0(0x3aa),
            'GEGUG': function (_0x146faa, _0x3102a5) {
                return _0x146faa / _0x3102a5;
            },
            'huKvn': _0x59d2c0(0x3bf),
            'xUyRg': _0x59d2c0(0x1f8),
            'nmWMR': _0x59d2c0(0x25a),
            'Dpwgj': function (_0x1c654f, _0x2df22d) {
                return _0x1c654f + _0x2df22d;
            },
            'MPqHP': _0x59d2c0(0x39f),
            'YrRFW': function (_0x447291, _0x56e5ca) {
                return _0x447291(_0x56e5ca);
            },
            'npKKw': function (_0x19fdc9, _0x310a63) {
                return _0x19fdc9 !== _0x310a63;
            },
            'snWTS': _0x59d2c0(0x12b),
            'JVICx': _0x59d2c0(0x2ea),
            'JlWhS': function (_0x10a6c4, _0x4dac51) {
                return _0x10a6c4(_0x4dac51);
            },
            'XZDOL': function (_0xb56e5d, _0x4e64bb) {
                return _0xb56e5d + _0x4e64bb;
            },
            'lbZMa': function (_0x1db06d, _0x2e05f9) {
                return _0x1db06d + _0x2e05f9;
            },
            'tZnep': function (_0x2614dc, _0x19390f) {
                return _0x2614dc(_0x19390f);
            },
            'dVlIn': _0x59d2c0(0x13f),
            'vtxri': function (_0x793cac, _0x11c352) {
                return _0x793cac(_0x11c352);
            },
            'aehxO': _0x59d2c0(0x20e),
            'PugVJ': _0x59d2c0(0x245),
            'AVgCV': _0x59d2c0(0x38f),
            'rRKTL': _0x59d2c0(0x34e),
            'ezwHd': function (_0x3a2d42, _0x44feed) {
                return _0x3a2d42(_0x44feed);
            },
            'JXlDv': 'rangedice',
            'nBBYQ': function (_0x73814d, _0x510fdb) {
                return _0x73814d !== _0x510fdb;
            },
            'APUZO': function (_0x2d746a, _0x84329c) {
                return _0x2d746a(_0x84329c);
            },
            'QIziZ': function (_0x394bc2, _0x4f75b2) {
                return _0x394bc2 === _0x4f75b2;
            },
            'zydqc': function (_0x33e795, _0x16670f) {
                return _0x33e795 === _0x16670f;
            },
            'kzjoa': function (_0x191998, _0x20c873) {
                return _0x191998 > _0x20c873;
            }
        }, _0x23b9bc = profit === 0x0 ? darkMode ? _0x59d2c0(0x241) : _0x43aea2[_0x59d2c0(0x109)] : _0x43aea2[_0x59d2c0(0xe1)](profit, 0x0) ? 'red' : _0x43aea2[_0x59d2c0(0x2d8)], _0x35f63d = _0x43aea2[_0x59d2c0(0x1b9)](currentstreak, 0x0) ? darkMode ? _0x43aea2[_0x59d2c0(0x375)] : _0x43aea2[_0x59d2c0(0x109)] : _0x43aea2[_0x59d2c0(0x1d3)](currentstreak, 0x0) ? 'red' : _0x43aea2[_0x59d2c0(0x2d8)], _0x39101d = _0x43aea2[_0x59d2c0(0x366)](maxwinstreak, 0x0) ? _0x43aea2['ojkcE'] : _0x43aea2[_0x59d2c0(0x109)], _0x33be54 = maxlosestreak > 0x0 ? _0x43aea2[_0x59d2c0(0xc6)] : _0x43aea2[_0x59d2c0(0x109)];
    document['getElementById'](_0x43aea2[_0x59d2c0(0xee)])[_0x59d2c0(0x3d4)][_0x59d2c0(0x29a)] = _0x39101d, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x12d)])[_0x59d2c0(0x3d4)][_0x59d2c0(0x29a)] = _0x33be54, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x192)])[_0x59d2c0(0x12f)] = wagered[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x35f)])[_0x59d2c0(0x12f)] = balance[_0x59d2c0(0x133)](decimalAmountView), document['getElementById'](_0x59d2c0(0x114))[_0x59d2c0(0x3d4)][_0x59d2c0(0x29a)] = _0x23b9bc, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x334)])['innerText'] = profit[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x384)])[_0x59d2c0(0x12f)] = maxBetAmount[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x59d2c0(0x13e))['innerText'] = maxLosseAmount[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x43aea2['PuWRL'])['innerText'] = bets, document[_0x59d2c0(0x3d0)](_0x43aea2['csIBN'])[_0x59d2c0(0x12f)] = wins, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x294)])['innerText'] = losses, document[_0x59d2c0(0x3d0)](_0x59d2c0(0x17b))[_0x59d2c0(0x3d4)][_0x59d2c0(0x29a)] = _0x35f63d, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x212)])['innerText'] = currentstreak, document[_0x59d2c0(0x3d0)](_0x59d2c0(0x2a2))[_0x59d2c0(0x12f)] = maxwinstreak, document['getElementById'](_0x59d2c0(0x111))[_0x59d2c0(0x12f)] = maxlosestreak, document['getElementById'](_0x43aea2['jiGaW'])['innerText'] = minbalance[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x35b)])[_0x59d2c0(0x12f)] = maxbalance[_0x59d2c0(0x133)](decimalAmountView), document['getElementById'](_0x43aea2[_0x59d2c0(0x39a)])['innerText'] = minprofit[_0x59d2c0(0x133)](decimalAmountView), document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x302)])[_0x59d2c0(0x12f)] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x43aea2[_0x59d2c0(0xff)](wagered, startBalance), percentWagered = _0x43aea2['RUuyB'](Math[_0x59d2c0(0x2eb)](_0x43aea2[_0x59d2c0(0x356)](_0x43aea2['zKGwT'](percentWagered, Number[_0x59d2c0(0x37a)]), 0x2710)), 0x2710), percentWagered = _0x43aea2['uvOUf'](isNaN, percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x43aea2['TDLqR'])[_0x59d2c0(0x12f)] = percentWagered, percentProfit = _0x43aea2[_0x59d2c0(0x356)](_0x43aea2[_0x59d2c0(0x364)](profit, startBalance), 0x64), percentProfit = Math[_0x59d2c0(0x2eb)](_0x43aea2[_0x59d2c0(0x356)](_0x43aea2[_0x59d2c0(0x220)](percentProfit, Number['EPSILON']), 0x2710)) / 0x2710, percentProfit = isNaN(percentProfit) ? 0x0 : percentProfit, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0x38b)])[_0x59d2c0(0x3d4)][_0x59d2c0(0x29a)] = _0x23b9bc, document['getElementById'](_0x43aea2['xUyRg'])['innerText'] = percentProfit;
    if (!stopHistory) {
        const _0x1556f0 = _0x43aea2[_0x59d2c0(0x1b9)](game, _0x43aea2[_0x59d2c0(0x286)]) ? lastBet[_0x59d2c0(0x246)] ? '>' : '<' : '>', _0x119703 = lastBet[_0x59d2c0(0x246)] ? _0x59d2c0(0x3ba) + bets + _0x59d2c0(0x301) : _0x59d2c0(0x3ba) + bets + '\x22\x20type=\x22checkbox\x22\x20/>', _0x4769ab = '' + (havePlinkoRows ? _0x43aea2['Dpwgj'](plinkoRow, _0x43aea2[_0x59d2c0(0x20a)]) : '') + plinkoRisk, _0x195eba = '<td>' + bets + _0x59d2c0(0x309) + _0x43aea2[_0x59d2c0(0x1c5)](Number, lastBet[_0x59d2c0(0x293)])['toFixed'](decimalAmountView) + _0x59d2c0(0x309) + (game !== _0x59d2c0(0x379) ? _0x119703 : betSide) + _0x59d2c0(0x309) + (game === _0x59d2c0(0x12b) ? _0x4769ab : _0x43aea2[_0x59d2c0(0x220)](_0x43aea2['YrRFW'](Number, lastBet[_0x59d2c0(0x22e)])[_0x59d2c0(0x133)](decimalChanceView), '%')) + _0x59d2c0(0x309) + Number(lastBet[_0x59d2c0(0x10a)])[_0x59d2c0(0x133)](decimalChanceView) + _0x59d2c0(0x3c2) + Number(lastBet[_0x59d2c0(0x3ce)])[_0x59d2c0(0x133)](decimalAmountView) + _0x59d2c0(0x309) + (_0x43aea2['npKKw'](game, _0x59d2c0(0x379)) ? game === _0x43aea2[_0x59d2c0(0x3a6)] ? _0x4769ab : game === _0x59d2c0(0x345) ? _0x43aea2['zKGwT'](Number(lastBet[_0x59d2c0(0x1a8)])[_0x59d2c0(0x133)](0x0), _0x43aea2[_0x59d2c0(0x1d6)]) : _0x43aea2['zKGwT'](_0x1556f0, _0x43aea2[_0x59d2c0(0x35c)](Number, lastBet['target'])[_0x59d2c0(0x133)](decimalTargetResult)) : _0x43aea2[_0x59d2c0(0x31f)](_0x43aea2[_0x59d2c0(0x220)](_0x43aea2[_0x59d2c0(0x285)](_0x43aea2['lbZMa'](target1, '|'), target2), target3 ? _0x43aea2[_0x59d2c0(0x285)]('|', target3) : ''), target4 ? _0x43aea2['Dpwgj']('|', target4) : '')) + _0x59d2c0(0x309) + (_0x43aea2[_0x59d2c0(0x1b9)](game, _0x59d2c0(0x345)) ? _0x43aea2['lbZMa'](_0x43aea2[_0x59d2c0(0x383)](Number, result)[_0x59d2c0(0x133)](0x0), _0x43aea2[_0x59d2c0(0x2d4)]) : _0x43aea2['vtxri'](Number, result)['toFixed'](decimalTargetResult)) + _0x59d2c0(0x309) + lastBet[_0x59d2c0(0x1d7)] + _0x59d2c0(0x309) + lastBet['id'] + _0x59d2c0(0x2f4), _0x21fe0d = document[_0x59d2c0(0x2f0)]('tr');
        _0x21fe0d[_0x59d2c0(0x3d4)]['backgroundColor'] = win ? _0x43aea2[_0x59d2c0(0x1b1)] : _0x43aea2[_0x59d2c0(0x18e)], _0x21fe0d[_0x59d2c0(0x2e6)] = _0x195eba, document[_0x59d2c0(0x3d0)](_0x43aea2[_0x59d2c0(0xcb)])['insertBefore'](_0x21fe0d, document[_0x59d2c0(0x3d0)](_0x59d2c0(0x38f))['children'][0x0]);
        const _0x571b05 = document['querySelector'](_0x43aea2['rRKTL'])['rows'];
        if (_0x571b05[_0x59d2c0(0x13a)] > maxRows)
            document[_0x59d2c0(0x28a)](_0x59d2c0(0x34e))[_0x59d2c0(0x10f)][_0x59d2c0(0x2fc)]();
    }
    const _0x3f1773 = '' + (havePlinkoRows ? _0x43aea2['zKGwT'](plinkoRow, _0x43aea2['MPqHP']) : '') + plinkoRisk;
    return fullLogs[_0x59d2c0(0x1e1)]({
        'game': game,
        'bets': bets,
        'amount': _0x43aea2[_0x59d2c0(0x339)](Number, lastBet[_0x59d2c0(0x293)])['toFixed'](decimalAmountView),
        'bethigh': _0x43aea2['npKKw'](game, _0x43aea2[_0x59d2c0(0xed)]) ? lastBet[_0x59d2c0(0x246)] : null,
        'chance': _0x43aea2[_0x59d2c0(0x1e4)](game, 'rangedice') ? _0x43aea2[_0x59d2c0(0x388)](Number, lastBet[_0x59d2c0(0x22e)])[_0x59d2c0(0x133)](decimalChanceView) : lastBet[_0x59d2c0(0x22e)],
        'target': _0x43aea2[_0x59d2c0(0x2d3)](game, _0x43aea2[_0x59d2c0(0xed)]) ? _0x43aea2['WnpFl'](game, _0x43aea2[_0x59d2c0(0x3a6)]) ? _0x3f1773 : lastBet[_0x59d2c0(0x1a8)] : null,
        'roll': _0x43aea2['APUZO'](Number, lastBet[_0x59d2c0(0x10a)])[_0x59d2c0(0x133)](decimalChanceView),
        'result': _0x43aea2[_0x59d2c0(0x2d2)](Number, result)[_0x59d2c0(0x133)](decimalTargetResult),
        'profit': _0x43aea2['uvOUf'](Number, lastBet[_0x59d2c0(0x3ce)])[_0x59d2c0(0x133)](decimalAmountView),
        'nonce': lastBet[_0x59d2c0(0x1d7)],
        'id': lastBet['id'],
        'chance1': _0x43aea2['QIziZ'](game, _0x43aea2[_0x59d2c0(0xed)]) ? lastBet['chance1'] : null,
        'chance2': _0x43aea2[_0x59d2c0(0x2c5)](game, _0x43aea2[_0x59d2c0(0xed)]) ? lastBet[_0x59d2c0(0x14d)] : null,
        'chance3': game === 'rangedice' ? lastBet[_0x59d2c0(0x2ba)] : null,
        'chance4': _0x43aea2['zydqc'](game, _0x43aea2['JXlDv']) ? lastBet['chance4'] : null,
        'betSide': _0x43aea2[_0x59d2c0(0xf2)](game, _0x59d2c0(0x379)) ? lastBet[_0x59d2c0(0x267)] : null
    }), _0x43aea2[_0x59d2c0(0x1e5)](fullLogs[_0x59d2c0(0x13a)], 0x2710) && fullLogs['shift'](), !stopChart && chart[_0x59d2c0(0x149)](betsChart, profitChart, color), _0x59d2c0(0x2df);
}
async function updateStats() {
    const _0xaee7c8 = _0x2b8a12, _0x4974d4 = {
            'IsPkS': function (_0x573b93, _0x53df55) {
                return _0x573b93 === _0x53df55;
            },
            'ypskC': _0xaee7c8(0x241),
            'GlGRb': _0xaee7c8(0x188),
            'jXZeh': function (_0x319e51, _0x3241af) {
                return _0x319e51 < _0x3241af;
            },
            'RSUTb': _0xaee7c8(0x2f8),
            'YgGZQ': 'green',
            'RkJTJ': function (_0x14840a, _0x3353e1) {
                return _0x14840a === _0x3353e1;
            },
            'jRPZu': function (_0x2301b9, _0x489937) {
                return _0x2301b9 > _0x489937;
            },
            'dRmhv': 'wdbHighWinStreak',
            'wXsDZ': _0xaee7c8(0x111),
            'lJuDi': _0xaee7c8(0x1bb),
            'ZkxPn': _0xaee7c8(0x114),
            'RTOhF': _0xaee7c8(0x13e),
            'aYNjO': _0xaee7c8(0x127),
            'jTsBZ': _0xaee7c8(0x17b),
            'FXVSJ': _0xaee7c8(0x39e),
            'vPXEv': _0xaee7c8(0x3ab),
            'ThddG': _0xaee7c8(0x378),
            'zyofN': function (_0x3d9d01, _0x5c8714) {
                return _0x3d9d01 / _0x5c8714;
            },
            'ZaqEi': function (_0x4d2f43, _0x122358) {
                return _0x4d2f43 * _0x122358;
            },
            'qksJi': function (_0xdf00ae, _0x453019) {
                return _0xdf00ae + _0x453019;
            },
            'GPgrx': function (_0x4e5a07, _0x555f1a) {
                return _0x4e5a07(_0x555f1a);
            },
            'HZRpt': function (_0x302763, _0x5aba67) {
                return _0x302763(_0x5aba67);
            },
            'PDPNU': _0xaee7c8(0x3aa),
            'uMSRH': function (_0x55b563, _0x3eb569) {
                return _0x55b563 / _0x3eb569;
            },
            'mvkqp': function (_0x44278c, _0x5496e2) {
                return _0x44278c / _0x5496e2;
            },
            'IELqN': function (_0x2b2c0b, _0x27321c) {
                return _0x2b2c0b * _0x27321c;
            },
            'hPpfP': function (_0x29eac5, _0x36704a) {
                return _0x29eac5 + _0x36704a;
            },
            'Opvfu': function (_0x184ff4, _0x397211) {
                return _0x184ff4(_0x397211);
            },
            'IAXdy': function (_0x22cbc9, _0x31e351) {
                return _0x22cbc9(_0x31e351);
            },
            'VGyQF': _0xaee7c8(0x3bf),
            'kTxhc': _0xaee7c8(0x104)
        }, _0x52c0ff = _0x4974d4[_0xaee7c8(0x394)](profit, 0x0) ? darkMode ? _0x4974d4[_0xaee7c8(0x234)] : _0x4974d4['GlGRb'] : _0x4974d4['jXZeh'](profit, 0x0) ? _0x4974d4[_0xaee7c8(0x1c4)] : _0x4974d4[_0xaee7c8(0x2d9)], _0x582b9f = _0x4974d4[_0xaee7c8(0x2e5)](currentstreak, 0x0) ? darkMode ? _0xaee7c8(0x241) : _0x4974d4[_0xaee7c8(0x352)] : _0x4974d4[_0xaee7c8(0x393)](currentstreak, 0x0) ? _0x4974d4[_0xaee7c8(0x1c4)] : _0x4974d4[_0xaee7c8(0x2d9)], _0x411adf = _0x4974d4[_0xaee7c8(0x3a4)](maxwinstreak, 0x0) ? _0x4974d4[_0xaee7c8(0x2d9)] : darkMode ? _0x4974d4[_0xaee7c8(0x234)] : _0x4974d4[_0xaee7c8(0x352)], _0xcadba8 = _0x4974d4[_0xaee7c8(0x3a4)](maxlosestreak, 0x0) ? _0xaee7c8(0x2f8) : darkMode ? _0x4974d4[_0xaee7c8(0x234)] : _0x4974d4[_0xaee7c8(0x352)];
    return document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x265)])['style'][_0xaee7c8(0x29a)] = _0x411adf, document[_0xaee7c8(0x3d0)](_0x4974d4['wXsDZ'])['style'][_0xaee7c8(0x29a)] = _0xcadba8, document['getElementById'](_0xaee7c8(0xd3))[_0xaee7c8(0x12f)] = wagered[_0xaee7c8(0x133)](decimalAmountView), document['getElementById'](_0x4974d4[_0xaee7c8(0x31b)])['innerText'] = balance['toFixed'](decimalAmountView), document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x15c)])[_0xaee7c8(0x3d4)]['color'] = _0x52c0ff, document[_0xaee7c8(0x3d0)](_0xaee7c8(0x114))[_0xaee7c8(0x12f)] = profit[_0xaee7c8(0x133)](decimalAmountView), document['getElementById'](_0xaee7c8(0x3a5))[_0xaee7c8(0x12f)] = maxBetAmount[_0xaee7c8(0x133)](decimalAmountView), document['getElementById'](_0x4974d4[_0xaee7c8(0x183)])[_0xaee7c8(0x12f)] = maxLosseAmount[_0xaee7c8(0x133)](decimalAmountView), document['getElementById'](_0x4974d4[_0xaee7c8(0x175)])[_0xaee7c8(0x12f)] = bets, document['getElementById'](_0xaee7c8(0x373))['innerText'] = wins, document['getElementById']('wdbLosses')[_0xaee7c8(0x12f)] = losses, document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x1cb)])[_0xaee7c8(0x3d4)][_0xaee7c8(0x29a)] = _0x582b9f, document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x1cb)])[_0xaee7c8(0x12f)] = currentstreak, document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x265)])[_0xaee7c8(0x12f)] = maxwinstreak, document['getElementById'](_0x4974d4['wXsDZ'])['innerText'] = maxlosestreak, document['getElementById'](_0x4974d4[_0xaee7c8(0x12c)])[_0xaee7c8(0x12f)] = minbalance['toFixed'](decimalAmountView), document[_0xaee7c8(0x3d0)](_0xaee7c8(0x2fe))['innerText'] = maxbalance[_0xaee7c8(0x133)](decimalAmountView), document['getElementById'](_0x4974d4['vPXEv'])['innerText'] = minprofit['toFixed'](decimalAmountView), document['getElementById'](_0x4974d4[_0xaee7c8(0x34f)])[_0xaee7c8(0x12f)] = maxprofit[_0xaee7c8(0x133)](decimalAmountView), percentWagered = _0x4974d4[_0xaee7c8(0x161)](wagered, startBalance), percentWagered = Math['round'](_0x4974d4['ZaqEi'](_0x4974d4[_0xaee7c8(0x20c)](percentWagered, Number[_0xaee7c8(0x37a)]), 0x64)) / 0x64, percentWagered = _0x4974d4[_0xaee7c8(0x2be)](isNaN, percentWagered) || !_0x4974d4[_0xaee7c8(0x16e)](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0xaee7c8(0x3d0)](_0x4974d4[_0xaee7c8(0x2db)])['innerText'] = percentWagered, percentProfit = _0x4974d4[_0xaee7c8(0x333)](_0x4974d4[_0xaee7c8(0x240)](profit, startBalance), 0x64), percentProfit = _0x4974d4['mvkqp'](Math[_0xaee7c8(0x2eb)](_0x4974d4[_0xaee7c8(0x2f1)](_0x4974d4[_0xaee7c8(0x362)](percentProfit, Number[_0xaee7c8(0x37a)]), 0x64)), 0x64), percentProfit = _0x4974d4['Opvfu'](isNaN, percentProfit) || !_0x4974d4[_0xaee7c8(0x2f3)](isFinite, percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x4974d4[_0xaee7c8(0x1ad)])[_0xaee7c8(0x3d4)]['color'] = _0x52c0ff, document[_0xaee7c8(0x3d0)](_0xaee7c8(0x1f8))['innerText'] = percentProfit, _0x4974d4[_0xaee7c8(0x2c2)];
}
function log(_0x467629) {
    const _0x3c55d0 = _0x2b8a12, _0x79cdca = {
            'AZwpO': _0x3c55d0(0x253),
            'FeXES': _0x3c55d0(0x241),
            'oVuoo': function (_0x518bc9, _0x36fa5d) {
                return _0x518bc9 > _0x36fa5d;
            }
        }, _0x13c73b = document[_0x3c55d0(0x3d0)](_0x79cdca[_0x3c55d0(0xdd)]), _0x2c6246 = document[_0x3c55d0(0x2f0)]('li');
    _0x2c6246['innerText'] = _0x467629, _0x2c6246[_0x3c55d0(0x3d4)]['color'] = darkMode ? _0x79cdca[_0x3c55d0(0x23c)] : _0x3c55d0(0x188), _0x13c73b[_0x3c55d0(0x1fc)](_0x2c6246, _0x13c73b[_0x3c55d0(0x3cb)]), _0x79cdca[_0x3c55d0(0x166)](_0x13c73b['children'][_0x3c55d0(0x13a)], maxRows) && _0x13c73b[_0x3c55d0(0x283)](_0x13c73b[_0x3c55d0(0x10f)]);
}
function updateSpeed() {
    const _0x5cf4a2 = _0x2b8a12, _0x4ffa51 = {
            'UqNTG': 'wdbSpeed',
            'JiFSe': function (_0x2bf851, _0xbea0b1) {
                return _0x2bf851 < _0xbea0b1;
            },
            'IMAhT': _0x5cf4a2(0x344),
            'QCIDx': function (_0x218ddf, _0x5e18b2) {
                return _0x218ddf / _0x5e18b2;
            }
        };
    if (speedHistory[_0x5cf4a2(0x13a)] < 0x2) {
        document[_0x5cf4a2(0x3d0)](_0x4ffa51['UqNTG'])[_0x5cf4a2(0x12f)] = _0x5cf4a2(0x344);
        return;
    }
    const _0x58fbf2 = Date['now'](), _0x3d0766 = 0x2710;
    speedHistory = speedHistory[_0x5cf4a2(0x34d)](_0x3b5679 => _0x58fbf2 - _0x3b5679 <= _0x3d0766);
    if (_0x4ffa51[_0x5cf4a2(0x1f5)](speedHistory[_0x5cf4a2(0x13a)], 0x2)) {
        document['getElementById'](_0x4ffa51['UqNTG'])[_0x5cf4a2(0x12f)] = _0x4ffa51[_0x5cf4a2(0x1a1)];
        return;
    }
    const _0x501a36 = speedHistory[0x0], _0x39eb8c = (_0x58fbf2 - _0x501a36) / 0x3e8, _0x258395 = _0x4ffa51['QCIDx'](speedHistory[_0x5cf4a2(0x13a)], _0x39eb8c);
    document[_0x5cf4a2(0x3d0)](_0x4ffa51[_0x5cf4a2(0x205)])[_0x5cf4a2(0x12f)] = _0x258395['toFixed'](0x2);
}
function updateTimer() {
    const _0x4f24a1 = _0x2b8a12, _0xfed336 = {
            'giUgF': function (_0x10faa0, _0x59aebe) {
                return _0x10faa0 / _0x59aebe;
            },
            'DZHUk': function (_0x883fcd, _0x4468d5) {
                return _0x883fcd * _0x4468d5;
            },
            'TDkQO': function (_0x5e706e, _0x3d0d08) {
                return _0x5e706e / _0x3d0d08;
            },
            'EtbUb': function (_0x1d5848, _0x3c59a9) {
                return _0x1d5848 * _0x3c59a9;
            },
            'coefO': function (_0x2a537a, _0x2de5f8) {
                return _0x2a537a * _0x2de5f8;
            },
            'kyARS': function (_0x446324, _0x205d60) {
                return _0x446324 % _0x205d60;
            },
            'Alwyt': function (_0x1c5d00, _0x34cf31) {
                return _0x1c5d00 * _0x34cf31;
            }
        };
    elapsedTime++;
    const _0x171ea8 = Math['floor'](_0xfed336[_0x4f24a1(0x201)](elapsedTime, _0xfed336[_0x4f24a1(0xe2)](_0xfed336['DZHUk'](0x18, 0x3c), 0x3c))), _0x16cf8b = Math['floor'](_0xfed336['TDkQO'](elapsedTime % _0xfed336[_0x4f24a1(0x1d2)](0x18 * 0x3c, 0x3c), _0xfed336[_0x4f24a1(0x24d)](0x3c, 0x3c))), _0x27dd34 = Math[_0x4f24a1(0x101)](_0xfed336['giUgF'](_0xfed336['kyARS'](elapsedTime, _0xfed336[_0x4f24a1(0x208)](0x3c, 0x3c)), 0x3c)), _0x2f4ded = _0xfed336[_0x4f24a1(0x118)](elapsedTime, 0x3c);
    document[_0x4f24a1(0x3d0)](_0x4f24a1(0x20b))[_0x4f24a1(0x12f)] = _0x171ea8 + ':' + _0x16cf8b + ':' + _0x27dd34 + ':' + _0x2f4ded;
}
async function start() {
    const _0x238dbf = _0x2b8a12, _0x102fd9 = {
            'TgMnR': function (_0x6bdb2a, _0x1de259) {
                return _0x6bdb2a === _0x1de259;
            },
            'WXAVO': _0x238dbf(0x379),
            'HRlnJ': _0x238dbf(0x120),
            'gXeOj': _0x238dbf(0x1a4),
            'ZnQgj': _0x238dbf(0x357),
            'vmatu': 'wdbResumeButton',
            'ZRDZg': _0x238dbf(0x1c3),
            'WUvQT': 'wdbOpenJSScript',
            'ikrdR': '#wdbSaveScriptButton',
            'GludW': _0x238dbf(0x296),
            'TXvhe': function (_0x208d96, _0x171cd1) {
                return _0x208d96(_0x171cd1);
            },
            'GvRIk': function (_0x4ca5dc, _0x44e2b8) {
                return _0x4ca5dc(_0x44e2b8);
            },
            'XmMxe': function (_0x253202, _0x332546, _0x574914) {
                return _0x253202(_0x332546, _0x574914);
            },
            'RiDOh': function (_0x3ea3f4, _0x165aba, _0x1640be) {
                return _0x3ea3f4(_0x165aba, _0x1640be);
            },
            'XyUSS': _0x238dbf(0x2f5),
            'QdfSt': _0x238dbf(0x363),
            'uOEQh': 'scriptName',
            'jpzeU': 'not\x20',
            'yJhvz': _0x238dbf(0x1bc),
            'KATYw': '$1=$1-$2\x20',
            'EXlXX': _0x238dbf(0x155),
            'HgEAn': '$1=$1/$2\x20',
            'OEeUq': 'return\x20scriptname',
            'EYwyo': _0x238dbf(0x24f),
            'JeSqg': _0x238dbf(0x1c8),
            'DfNtG': _0x238dbf(0x1d0),
            'jDpGp': _0x238dbf(0x2c7),
            'qiVud': function (_0x118753, _0x1f0983) {
                return _0x118753(_0x1f0983);
            },
            'kTACb': _0x238dbf(0xfc),
            'UDIYi': _0x238dbf(0x1ab),
            'kdNwu': function (_0x2ce6ac) {
                return _0x2ce6ac();
            },
            'TNcQp': function (_0x5cc2b2) {
                return _0x5cc2b2();
            },
            'mJuOM': function (_0x4d2d0b, _0x3efe1e) {
                return _0x4d2d0b(_0x3efe1e);
            }
        };
    if (_0x102fd9['TgMnR'](game, _0x102fd9[_0x238dbf(0x1e2)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = 'between';
        const _0x1517bb = 'chance1=' + chance1 + '\x0a\x20\x20\x20\x20chance2=' + chance2 + _0x238dbf(0x269) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x238dbf(0x310) + betSide + '\x22';
        fengari[_0x238dbf(0x1ca)](_0x1517bb)();
    }
    try {
        if (!run) {
            document[_0x238dbf(0x3d0)]('wdbTime')['innerText'] = _0x238dbf(0x3cf), document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x170)])[_0x238dbf(0x271)] = !![], document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x1df)])[_0x238dbf(0x271)] = !![], document['getElementById'](_0x102fd9[_0x238dbf(0x2c0)])[_0x238dbf(0x271)] = !![], document['getElementById'](_0x102fd9['vmatu'])[_0x238dbf(0x271)] = !![], document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x1ba)])[_0x238dbf(0x271)] = !![], document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x100)])[_0x238dbf(0x271)] = !![], document[_0x238dbf(0x3b8)](_0x102fd9[_0x238dbf(0x21b)])[_0x238dbf(0x158)](_0x57b79c => _0x57b79c[_0x238dbf(0x271)] = !![]), document[_0x238dbf(0x3b8)](_0x102fd9['GludW'])['forEach'](_0x5775b8 => _0x5775b8[_0x238dbf(0x271)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x102fd9[_0x238dbf(0x268)](clearInterval, timerInterval), _0x102fd9['GvRIk'](clearInterval, speedUpdateInterval), timerInterval = _0x102fd9[_0x238dbf(0x32f)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x102fd9[_0x238dbf(0x228)](setInterval, updateSpeed, 0x1f4), fengari[_0x238dbf(0x1ca)](_0x238dbf(0x14b))(), fengari[_0x238dbf(0x1ca)](_0x238dbf(0x282))();
            if (mode === _0x102fd9['XyUSS']) {
                const _0x58f828 = _0x102fd9[_0x238dbf(0x276)][_0x238dbf(0x2b6)]('|');
                let _0x472113 = 0x0;
                while (!![]) {
                    switch (_0x58f828[_0x472113++]) {
                    case '0':
                        document['getElementById'](_0x102fd9[_0x238dbf(0x13d)])[_0x238dbf(0x12f)] = scriptname ? 'Script\x20Name:\x20' + scriptname : '';
                        continue;
                    case '1':
                        diceScript = luaEditor[_0x238dbf(0x3b9)]();
                        continue;
                    case '2':
                        diceScript = diceScript['replace'](/!=/g, '~=')[_0x238dbf(0x171)](/!/g, _0x102fd9['jpzeU'])[_0x238dbf(0x171)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x102fd9[_0x238dbf(0x2da)])['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x102fd9[_0x238dbf(0x28b)])[_0x238dbf(0x171)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x102fd9[_0x238dbf(0xce)])['replace'](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x102fd9[_0x238dbf(0x17e)]);
                        continue;
                    case '3':
                        scriptname = fengari[_0x238dbf(0x1ca)](_0x102fd9[_0x238dbf(0x17c)])();
                        continue;
                    case '4':
                        fengari[_0x238dbf(0x1ca)](diceScript)();
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x102fd9['TgMnR'](mode, 'js')) {
                    const _0x90f93a = document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x1e0)]);
                    if (_0x90f93a)
                        _0x90f93a[_0x238dbf(0x2fc)]();
                    diceScript = jsEditor[_0x238dbf(0x3b9)]();
                    const _0x33db4c = document['createElement'](_0x102fd9[_0x238dbf(0x152)]);
                    _0x33db4c['id'] = _0x102fd9['EYwyo'], _0x33db4c[_0x238dbf(0x2e6)] = diceScript, document['head'][_0x238dbf(0x36a)](_0x33db4c);
                } else
                    mode === _0x102fd9[_0x238dbf(0x190)] && (basebet = _0x102fd9[_0x238dbf(0x2bb)](Number, document[_0x238dbf(0x3d0)](_0x102fd9[_0x238dbf(0x1c6)])[_0x238dbf(0x37d)]), nextbet = basebet, chance = _0x102fd9[_0x238dbf(0x3c9)](Number, document['getElementById'](_0x102fd9[_0x238dbf(0xc4)])['value']), bethigh = document[_0x238dbf(0x28a)](_0x102fd9[_0x238dbf(0x14a)])['checked']);
            }
            if (run)
                return _0x102fd9['kdNwu'](playBet);
        }
    } catch (_0x5915e6) {
        _0x102fd9[_0x238dbf(0x325)](stop), _0x102fd9[_0x238dbf(0x29c)](log, _0x5915e6);
    }
}
function stop() {
    const _0x31ae57 = _0x2b8a12, _0x34c483 = {
            'mONVn': function (_0x113f26, _0x4ae73b) {
                return _0x113f26(_0x4ae73b);
            },
            'vFUkk': _0x31ae57(0x120),
            'pyJYu': _0x31ae57(0x1a4),
            'gwUWB': _0x31ae57(0x357),
            'XQUvl': _0x31ae57(0x249),
            'FawGq': _0x31ae57(0x292),
            'qtAWa': _0x31ae57(0x387)
        };
    if (!run)
        return;
    run = ![], sOW = ![], clearInterval(timerInterval), _0x34c483[_0x31ae57(0x162)](clearInterval, speedUpdateInterval);
    const _0x2120d2 = [
        _0x34c483['vFUkk'],
        _0x34c483[_0x31ae57(0x2d0)],
        _0x34c483[_0x31ae57(0x199)],
        _0x34c483[_0x31ae57(0x238)],
        _0x31ae57(0x1c3),
        _0x34c483[_0x31ae57(0x2b0)],
        'wdbStopOnWinButton'
    ];
    _0x2120d2[_0x31ae57(0x158)](_0x1600a5 => {
        const _0x26c688 = _0x31ae57;
        document[_0x26c688(0x3d0)](_0x1600a5)['disabled'] = ![];
    }), document[_0x31ae57(0x3b8)](_0x34c483[_0x31ae57(0x32b)])[_0x31ae57(0x158)](_0x4f5c4d => _0x4f5c4d[_0x31ae57(0x271)] = ![]);
}
async function resume(_0x4f0a3f) {
    const _0x188fc6 = _0x2b8a12, _0x31a66d = {
            'ZqWht': _0x188fc6(0x120),
            'HLLHm': _0x188fc6(0x1a4),
            'UKkJQ': 'wdbStartButton',
            'QimIg': _0x188fc6(0x249),
            'mNyXq': _0x188fc6(0x1c3),
            'GOdRu': _0x188fc6(0x292),
            'BGwGS': _0x188fc6(0x387),
            'Ebepb': _0x188fc6(0x191),
            'tNLxt': function (_0x57e074, _0x95fefb, _0x59c4fe) {
                return _0x57e074(_0x95fefb, _0x59c4fe);
            },
            'HVaZE': function (_0x870e22) {
                return _0x870e22();
            }
        };
    if (!run) {
        const _0x44a427 = [
            _0x31a66d[_0x188fc6(0x3b0)],
            _0x31a66d[_0x188fc6(0x157)],
            _0x31a66d[_0x188fc6(0x16a)],
            _0x31a66d[_0x188fc6(0x28d)],
            _0x31a66d['mNyXq'],
            _0x31a66d['GOdRu']
        ];
        return _0x44a427[_0x188fc6(0x158)](_0x5a9ce6 => {
            const _0x51f7f4 = _0x188fc6;
            document[_0x51f7f4(0x3d0)](_0x5a9ce6)[_0x51f7f4(0x271)] = !![];
        }), document[_0x188fc6(0x3b8)](_0x31a66d[_0x188fc6(0x281)])[_0x188fc6(0x158)](_0x37d54f => _0x37d54f[_0x188fc6(0x271)] = !![]), !_0x4f0a3f && (log(_0x31a66d[_0x188fc6(0x319)]), await new Promise(_0x51ceee => setTimeout(_0x51ceee, 0x1388))), run = !![], sOW = ![], timerInterval = _0x31a66d['tNLxt'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x31a66d[_0x188fc6(0x32d)](setInterval, updateSpeed, 0x1f4), _0x31a66d[_0x188fc6(0x25f)](playBet);
    }
}
function _0x4b57() {
    const _0x32b79d = [
        'usZjq',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'SEeQe',
        'vfkCw',
        'OLQaX',
        'setOption',
        'VGbUJ',
        'BkukN',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'closest',
        'OueTE',
        'udpnq',
        'Zkgdc',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'BvhPz',
        'high',
        'pkHyG',
        'lMCWr',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'hostname',
        'WqcMs',
        'gveDd',
        'Ebepb',
        '#fff',
        'lJuDi',
        'render',
        'darkMode',
        '2452240FADkGl',
        'XZDOL',
        'dimgray',
        'DULoz',
        'download',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        '\x0a\x20\x20\x20\x20chance2=',
        'TNcQp',
        'OqGRK',
        'Betting\x20',
        'neawu',
        'save',
        'DPKLb',
        'qtAWa',
        'advancedStopAfterStreak',
        'tNLxt',
        'parse',
        'XmMxe',
        'theme',
        'Iwknl',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'ZaqEi',
        'GDufw',
        'FAhpO',
        '\x0a\x20\x20\x20\x20profit=',
        'activeElement',
        '1|9|0|3|8|2|5|6|4|7',
        'ezwHd',
        'gUpcu',
        'URL',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'NeXmM',
        'jzyyu',
        'RKrJa',
        '190px',
        'wdbHeader',
        'text/plain;\x20charset=utf-8',
        'mxgdu',
        '0.00',
        'keno',
        'chance4',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'wdbWrapControl',
        'SbSWH',
        'initLuaOk',
        '45tapPIc',
        'epSqp',
        'filter',
        '#wdbHistory',
        'ThddG',
        'getComputedStyle',
        'bvkey',
        'GlGRb',
        'LGdFD',
        'dmZIu',
        'wdb',
        'VHeTL',
        'wdbStartButton',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'VOJlI',
        'handleAdvanced\x20ok',
        'ZKJxA',
        'JlWhS',
        'KAYpq',
        'aUkax',
        'SHMof',
        '0123456789abcdef',
        'advancedBetHighOnProfitCheck',
        'hPpfP',
        '1|2|4|3|0',
        'GEGUG',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'ktVge',
        'uvqIQ',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'Stop\x20on\x20',
        'appendChild',
        'wdbSpeed',
        'Myyxi',
        'advancedBetHighOnLose',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'wFHcj',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'wdbWrapVariables',
        'tlVcv',
        'wdbWins',
        'toLowerCase',
        'aadCb',
        'UkaNe',
        '\x0a\x20\x20\x20\x20minbalance=',
        'wdbMaxProfit',
        'rangedice',
        'EPSILON',
        'advancedChanceOnLoseCheck',
        'wdbMaxRows',
        'value',
        'vkhem',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'iHHCw',
        'files',
        'tZnep',
        'CfmvW',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'RguNO',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'uvOUf',
        'Chart',
        'message',
        'huKvn',
        'jVMCF',
        'Functions',
        'block',
        'wdbHistory',
        'DgygN',
        'chance1',
        'innerHeight',
        'jXZeh',
        'IsPkS',
        'XGgYm',
        'kenoNumbers',
        'indexOf',
        '\x20win',
        'Azoys',
        'wlrtO',
        'wdbStopOnWinButton',
        'clientY',
        'getTime',
        'wdbMinBalance',
        '\x20|\x20',
        '#2a2a2a',
        'advancedStopRollNumberCheck',
        'advancedMultiOnLose',
        'reset',
        'jRPZu',
        'wdbHighBet',
        'snWTS',
        'Uboxt',
        'Wtkrk',
        '0123456789',
        'wdbPercentWagered',
        'wdbMinProfit',
        'FldcH',
        'random',
        'dark1',
        'HCUNv',
        'ZqWht',
        '380px',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'Connected',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        '\x0a\x20\x20\x20\x20bets=',
        'show',
        '3|4|1|2|0',
        'querySelectorAll',
        'getValue',
        '<input\x20id=\x22bethigh',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'lRhGQ',
        'uLgjZ',
        'DpjGA',
        'wdbWrapPercentProfit',
        'advancedChanceOnWin',
        'wdb-bot-position',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        '1932776VZXhKQ',
        'vmJLg',
        'TlSok',
        'createObjectURL',
        'IsuhW',
        'qiVud',
        'eCcDQ',
        'firstChild',
        'NsqLg',
        'advancedBetHighOnLoseCheck',
        'profit',
        '0:0:0:0',
        'getElementById',
        'cvxnq',
        '.wdb-stats\x20div\x20li',
        'advancedStopOnWins',
        'style',
        'HGSnm',
        '\x0a\x20\x20\x20\x20wagered=',
        'tagName',
        'YPAHz',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'kTACb',
        'default',
        'YvhWV',
        'diVKs',
        'return\x20betSide',
        '<option\x20value=\x22',
        'Audnv',
        'AVgCV',
        'outside',
        'flex',
        'EXlXX',
        'HGgyB',
        'goyxF',
        'advancedChanceOnWinBets',
        'TZYHj',
        'wdbWagered',
        'AFVVk',
        'green',
        'SGTJm',
        'substring',
        'Sixgg',
        '1000px',
        'acCJx',
        'setValue',
        'osQvM',
        'AZwpO',
        'jVgFJ',
        'wdbToggleShow',
        'advancedBetHighOnWin',
        'ITitI',
        'DZHUk',
        'oOgKa',
        'jGSMo',
        'preventDefault',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'nKhSI',
        'VsJzN',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'ngTqf',
        'wdbWrapFunctions',
        'JXlDv',
        'PUsMT',
        'left',
        'SDniO',
        '5px',
        'QIziZ',
        'advancedMultiOnWinCheck',
        '_maxRows',
        'currency=\x22',
        'Twubm',
        'advancedStopOnBets',
        'vlnXi',
        'wdbShow',
        'width',
        '\x20bet',
        'advancedChance',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'offsetLeft',
        'RUuyB',
        'WUvQT',
        'floor',
        'updateLua\x20done',
        'wdbChart',
        'updateStats\x20ok',
        'advancedChanceOnWinCheck',
        'height',
        'borderColor',
        'advancedChanceOnLoseBets',
        'fbiIm',
        'roll',
        'jAtaZ',
        'display',
        '\x20to\x20win,\x20',
        'wdbLoader\x20ok',
        'lastChild',
        '</option>',
        'wdbHighLoseStreak',
        'kWlJF',
        'yHUTc',
        'wdbProfit',
        'nXFuG',
        'wdbLosses',
        '3|0|5|1|4|2',
        'kyARS',
        'LBdpY',
        'sqwgg',
        'UlaqQ',
        'YadGb',
        'PCJqP',
        'wdbWrapLicenseBox',
        'now',
        'wdbMenuCoin',
        '\x0a\x20\x20\x20\x20bethigh=',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'resize',
        'calc(100vh\x20-\x2060px)',
        'Qcmft',
        'CAvfM',
        'wdbBets',
        'WPOll',
        '322sVftur',
        'FauYN',
        'plinko',
        'FXVSJ',
        'hyCVi',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'innerText',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'LpYud',
        'resetstatsOnProfit',
        'toFixed',
        'upWRi',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'pUDcv',
        'darcula',
        'EfdMV',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'length',
        'wdbToggleLive',
        'pGpRV',
        'uOEQh',
        'wdbHighLose',
        '\x20Hits',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'BCSfT',
        'WFcPd',
        '\x0a\x20\x20\x20\x20losses=',
        'start',
        'RooNB',
        'eIWvq',
        'GUjHo',
        'aKlTY',
        'updateChart',
        'UDIYi',
        'scriptname\x20=\x20\x22\x22',
        'ORcjR',
        'chance2',
        'Chance3',
        'cookie',
        '#000',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'JeSqg',
        '34023WgPvxI',
        'wZcCo',
        '$1=$1*$2\x20',
        'return\x20kenoRisk',
        'HLLHm',
        'forEach',
        'ozICA',
        'dps',
        'prepend',
        'ZkxPn',
        'zMZIs',
        'wdbWrapLog',
        'iDiKu',
        'slice',
        'zyofN',
        'mONVn',
        'XHTAS',
        'result',
        'dqzZn',
        'oVuoo',
        'Lxkwj',
        'IfnNb',
        'wdbWrapHistory',
        'UKkJQ',
        'keydown',
        'expires=',
        'PxftB',
        'HZRpt',
        'ytHfj',
        'HRlnJ',
        'replace',
        'light1',
        'text',
        'wpHaj',
        'aYNjO',
        'HeqAE',
        '_darkMode',
        'igDwE',
        'HKJVs',
        'ajWLB',
        'wdbCurrentStreak',
        'OEeUq',
        'change',
        'HgEAn',
        'BvWuG',
        'oUnFL',
        '.CodeMirror',
        'map',
        'RTOhF',
        'MPnFy',
        '4800phThbi',
        'stringify',
        'wdbJSMode',
        'black',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'loadScript',
        'GJebB',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'Chance4',
        'PugVJ',
        'backgroundColor',
        'DfNtG',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'EskyE',
        'zBOkT',
        'OcwyY',
        'EGsLc',
        'event',
        'Target',
        'sZbhv',
        'gwUWB',
        'ZPVBi',
        '303953PiRJkd',
        'NDTjT',
        'dobet()',
        'chart',
        'deleteH',
        'prototype',
        'IMAhT',
        'then',
        'bMCSv',
        'wdbMenuMode',
        'indEu',
        'innerWidth',
        'ozxiq',
        'target',
        'MRdrU',
        'wdbFooter',
        '#advancedBetHigh',
        'QULnh',
        'VGyQF',
        'EiTuU',
        'KVhIU',
        'INPUT',
        'aehxO',
        'tmWcZ',
        'vqwyI',
        '\x0a\x20\x20\x20\x20balance=',
        'kLyLn',
        'nqBEH',
        'line',
        'eqrfX',
        'WnpFl',
        'ZRDZg',
        'wdbBalance',
        '$1=$1+$2\x20',
        'kFvrD',
        'dsiOg',
        'div',
        'agVsA',
        'options',
        '\x20at\x20',
        'wdbOpenLUAScript',
        'RSUTb',
        'YrRFW',
        'jDpGp',
        'PFUeA',
        'script',
        'TEXTAREA',
        'load',
        'jTsBZ',
        'onmousedown',
        'aZCOy',
        'advancedStopOnLose',
        'Zlvqi',
        'advanced',
        'WBUNC',
        'EtbUb',
        'VMdoL',
        'antiquewhite',
        'EXFbA',
        'JVICx',
        'nonce',
        'IJKEE',
        'TTwyu',
        'OUKkU',
        'lhEoP',
        '1749249iplumy',
        'return\x20chance3',
        'between',
        'gXeOj',
        'EYwyo',
        'push',
        'WXAVO',
        'onmousemove',
        'npKKw',
        'kzjoa',
        'wdbLUAMode',
        'wdbAdvancedMode',
        'JxAWb',
        'charAt',
        'BZeLJ',
        'maxRows',
        '1|2|7|4|8|3|0|6|5',
        '\x0a\x20\x20\x20\x20chance4=',
        'clear',
        'wdbStats',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'VHVQC',
        'DCCFQ',
        'BzJqE',
        'Yzpdm',
        'JiFSe',
        'Kwhur',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'wdbPercentProfit',
        'advancedMultiOnLoseCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'stop',
        'insertBefore',
        'offsetHeight',
        'MZyxM',
        'lPfod',
        'advancedMultiOnWin',
        'giUgF',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'sRNHt',
        'advancedStopOnBetsCheck',
        'UqNTG',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'yADdA',
        'Alwyt',
        'classic',
        'MPqHP',
        'wdbTime',
        'qksJi',
        'wdbScriptBoxLUA',
        '#91f190',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'click',
        'loadCSS',
        'NnfOW',
        'clientX',
        'dAyDg',
        'dXibu',
        'isContentEditable',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'advancedStopRollNumber',
        'SQfwx',
        'javascript',
        'ikrdR',
        'IgHlH',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'position',
        'zKGwT',
        'advancedChanceOnLose',
        'EoAAD',
        'advancedStopAfterStreakCheck',
        'llSCc',
        'SCciP',
        'AwheG',
        'ZadRp',
        'RiDOh',
        'BetSide',
        'nuTRc',
        'bUKvh',
        'LMthI',
        'response',
        'chance',
        'SfWGP',
        'Stop\x20on\x20roll\x20number\x20',
        'fixed',
        'DOQgB',
        'SbGAj',
        'ypskC',
        '10ZtpEGB',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'href',
        'XQUvl',
        'toString',
        'vtKDf',
        'stopOnProfitCheck',
        'FeXES',
        'lhWRb',
        'iAkzs',
        'tQbqS',
        'uMSRH',
        'white',
        'LVePM',
        'hcYlX',
        'wdbWrap',
        '#ffc0cb',
        'bethigh',
        'LfQuS',
        'return\x20bethigh',
        'wdbResumeButton',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'advancedBetHighOnBetCheck',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'coefO',
        'BoWsy',
        'wdbRunningScript',
        'MtsEW',
        'uDVFM',
        'XcweE',
        'wdbLog',
        'WDBScript',
        'top',
        'JLCZg',
        'HMWPA',
        'ErdBB',
        'startsWith',
        'dice',
        'casino=\x22',
        'HaHWw',
        'nVhMk',
        'jpKla',
        'HVaZE',
        'wdbScriptBoxJS',
        '6|1|2|3|5|4|0',
        'between2',
        'erBVL',
        'Smbwe',
        'dRmhv',
        'gpzWD',
        'betSide',
        'TXvhe',
        '\x0a\x20\x20\x20\x20chance3=',
        '\x0a\x20\x20\x20\x20previousbet=',
        'data',
        'Log',
        'YeDIi',
        '%\x20chance\x20to\x20win,\x20',
        'YMZVf',
        'QSYTw',
        'disabled',
        'body',
        'QxYlC',
        'setItem',
        'XIIIT',
        'QdfSt',
        'Chance1',
        'WHRhI',
        'vvoCi',
        'WfwQn',
        'Tips',
        '6|1|2|3|7|0|5|4',
        '.json',
        'offsetTop',
        'Chance2',
        'return\x20nextbet',
        'BGwGS',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'removeChild',
        'eqRVb',
        'Dpwgj',
        'nmWMR',
        'OUeQF',
        'Pnoqw',
        'low',
        'querySelector',
        'KATYw',
        'return\x20chance4',
        'QimIg',
        'ngClU',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        '31116CkLXQO',
        'resetChart',
        'wdbOpenJSScript',
        'amount',
        'usqQv',
        'Stop\x20on\x20current\x20streak\x20',
        '#wdbOpenScript',
        'JzorF',
        'hide',
        '1|3|0|2|4',
        'color',
        'MozPJ',
        'mJuOM',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'dataPoints',
        'KWfZT',
        'ZcNSp',
        'advancedMultiOnWinBets',
        'wdbHighWinStreak',
        'vtdOJ',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'adIYt',
        'advancedMultiOnLoseBets',
        'rlbIh',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'anjXV',
        'application/json',
        'IFtrV',
        'wdbShowMode',
        'advancedBetHighOnWinCheck',
        'offsetWidth',
        'JeFuv',
        'FawGq',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'play',
        'lFTfP',
        '\x20to\x20win',
        'yfuqL',
        'split',
        'stopOnBalance',
        'qJwTD',
        'VVpbQ',
        'chance3',
        'GvRIk',
        'clhBV',
        'www.',
        'GPgrx',
        'WkrSj',
        'ZnQgj',
        'ayzQW',
        'kTxhc',
        'return\x20currency',
        'trim',
        'zydqc',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'advancedBaseBet',
        'none',
        'toUpperCase',
        'wgztU',
        'Stop\x20on\x20balance\x20',
        'checked',
        'OsGam',
        'uqoxe',
        'axsUt',
        'pyJYu',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'vtxri',
        'nBBYQ',
        'dVlIn',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'Variables',
        'FPxXP',
        'ojkcE',
        'YgGZQ',
        'yJhvz',
        'PDPNU',
        'toUTCString',
        'qUylV',
        'onmouseup',
        'showInfo\x20OK',
        'stopOnProfit',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'sdwCT',
        'TLFoy',
        'BuNfV',
        'RkJTJ',
        'innerHTML',
        'Nonce',
        'hjriq',
        'YjRmM',
        '\x20Balls',
        'round',
        'advancedStopOnLoseCheck',
        'QPdFw',
        'addEventListener',
        'OZoCl',
        'createElement',
        'IELqN',
        'bfZkg',
        'IAXdy',
        '</td>',
        'lua',
        'VrPUj',
        'pHWaW',
        'red',
        'containerId',
        'ujYjp',
        'GTwLy',
        'remove',
        'rqhHB',
        'wdbMaxBalance',
        'UcqrF'
    ];
    _0x4b57 = function () {
        return _0x32b79d;
    };
    return _0x4b57();
}
function stopOnWin() {
    const _0x2ebe9a = _0x2b8a12, _0x4aeef1 = { 'OZoCl': _0x2ebe9a(0x39b) };
    sOW = !![];
    if (run)
        document[_0x2ebe9a(0x3d0)](_0x4aeef1[_0x2ebe9a(0x2ef)])[_0x2ebe9a(0x271)] = !![];
}
async function playBet() {
    const _0x3ee01e = _0x2b8a12, _0x382817 = {
            'jVgFJ': function (_0x59828f, _0x2f2884) {
                return _0x59828f === _0x2f2884;
            },
            'WBUNC': _0x3ee01e(0x2f5),
            'iFQyl': _0x3ee01e(0x27c),
            'EXFbA': 'return\x20chance',
            'HCUNv': _0x3ee01e(0x248),
            'nqBEH': _0x3ee01e(0xc8),
            'JzorF': _0x3ee01e(0x28c),
            'nKhSI': _0x3ee01e(0x280),
            'FAhpO': 'return\x20chance2',
            'bvkey': function (_0xeb5997, _0x2d1605) {
                return _0xeb5997(_0x2d1605);
            },
            'KAYpq': function (_0x12e12a, _0x2a1884) {
                return _0x12e12a(_0x2a1884);
            },
            'jrmaB': function (_0x1b47e0, _0x869de2) {
                return _0x1b47e0(_0x869de2);
            },
            'GTwLy': _0x3ee01e(0x379),
            'ekIeD': _0x3ee01e(0x12b),
            'SDniO': function (_0x446753, _0x5cd4e3) {
                return _0x446753 === _0x5cd4e3;
            },
            'rqhHB': _0x3ee01e(0x25a),
            'MZyxM': _0x3ee01e(0x312),
            'wpHaj': _0x3ee01e(0x289),
            'PxftB': function (_0x391ecb, _0x566712) {
                return _0x391ecb + _0x566712;
            },
            'UcqrF': function (_0x1168f3) {
                return _0x1168f3();
            },
            'lPfod': function (_0x2acd51, _0x2a3dca) {
                return _0x2acd51(_0x2a3dca);
            }
        };
    try {
        if (_0x382817[_0x3ee01e(0xde)](mode, _0x382817[_0x3ee01e(0x1d1)])) {
            const _0x4e9a7e = _0x382817['iFQyl']['split']('|');
            let _0x5637d3 = 0x0;
            while (!![]) {
                switch (_0x4e9a7e[_0x5637d3++]) {
                case '0':
                    chance3 = fengari[_0x3ee01e(0x1ca)](_0x3ee01e(0x1dd))();
                    continue;
                case '1':
                    chance = fengari['load'](_0x382817[_0x3ee01e(0x1d5)])();
                    continue;
                case '2':
                    bethigh = fengari[_0x3ee01e(0x1ca)](_0x382817[_0x3ee01e(0x3af)])();
                    continue;
                case '3':
                    chance1 = fengari[_0x3ee01e(0x1ca)]('return\x20chance1')();
                    continue;
                case '4':
                    betSide = fengari[_0x3ee01e(0x1ca)](_0x382817[_0x3ee01e(0x1b6)])();
                    continue;
                case '5':
                    chance4 = fengari[_0x3ee01e(0x1ca)](_0x382817[_0x3ee01e(0x297)])();
                    continue;
                case '6':
                    nextbet = fengari[_0x3ee01e(0x1ca)](_0x382817[_0x3ee01e(0xe7)])();
                    continue;
                case '7':
                    chance2 = fengari[_0x3ee01e(0x1ca)](_0x382817[_0x3ee01e(0x335)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x382817[_0x3ee01e(0x351)](Number, nextbet), chance = _0x382817[_0x3ee01e(0x35d)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x5ea196 = _0x382817[_0x3ee01e(0x351)](Number, lastBet['amount'])[_0x3ee01e(0x133)](decimalAmountView), _0x56febf = _0x382817['jrmaB'](Number, lastBet[_0x3ee01e(0x22e)])[_0x3ee01e(0x133)](decimalChanceView), _0x300073 = game !== _0x382817[_0x3ee01e(0x2fb)] ? _0x382817[_0x3ee01e(0xde)](game, _0x382817['ekIeD']) ? _0x3ee01e(0x327) + _0x5ea196 + '\x20at\x20' + (havePlinkoRows ? plinkoRow + _0x3ee01e(0x39f) : '') + plinkoRisk + _0x3ee01e(0x2b4) : _0x3ee01e(0x327) + _0x5ea196 + _0x3ee01e(0x1c2) + _0x56febf + _0x3ee01e(0x26e) + (_0x382817[_0x3ee01e(0xf0)](game, _0x382817[_0x3ee01e(0x2fd)]) ? bethigh ? _0x382817[_0x3ee01e(0x1fe)] : _0x382817[_0x3ee01e(0x174)] : _0x382817['MZyxM']) : _0x3ee01e(0x327) + _0x5ea196 + '\x20at\x20' + chance1 + '|' + chance2 + (chance3 ? '|' + chance3 : '') + (chance4 ? _0x382817[_0x3ee01e(0x16d)]('|', chance4) : '') + _0x3ee01e(0x10d) + betSide;
            _0x382817['KAYpq'](log, _0x300073);
        }
        if (run)
            return sendBet();
    } catch (_0x596b99) {
        _0x382817[_0x3ee01e(0x2ff)](stop), _0x382817[_0x3ee01e(0x1ff)](log, _0x596b99);
    }
}
function resetall() {
    const _0x437d25 = _0x2b8a12, _0x27dbfd = {
            'rlbIh': _0x437d25(0x36b),
            'epSqp': _0x437d25(0x344),
            'OcwyY': function (_0x31bf13) {
                return _0x31bf13();
            },
            'OqGRK': _0x437d25(0x20b),
            'Yzpdm': '0:0:0:0',
            'uvqIQ': function (_0x48109f) {
                return _0x48109f();
            },
            'Zlvqi': function (_0x593279) {
                return _0x593279();
            }
        }, _0xe65219 = _0x437d25(0x117)[_0x437d25(0x2b6)]('|');
    let _0x2336f3 = 0x0;
    while (!![]) {
        switch (_0xe65219[_0x2336f3++]) {
        case '0':
            document[_0x437d25(0x3d0)](_0x27dbfd[_0x437d25(0x2a7)])[_0x437d25(0x12f)] = _0x27dbfd[_0x437d25(0x34c)];
            continue;
        case '1':
            resetchart();
            continue;
        case '2':
            _0x27dbfd[_0x437d25(0x194)](resetlog);
            continue;
        case '3':
            document['getElementById'](_0x27dbfd[_0x437d25(0x326)])['innerText'] = _0x27dbfd[_0x437d25(0x1f4)];
            continue;
        case '4':
            _0x27dbfd[_0x437d25(0x367)](resethistory);
            continue;
        case '5':
            _0x27dbfd[_0x437d25(0x1cf)](resetstats);
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x375d06 = _0x2b8a12, _0x40e718 = {
            'hNGZW': function (_0x1cd8ed, _0x7f158d) {
                return _0x1cd8ed(_0x7f158d);
            },
            'gUpcu': _0x375d06(0x3a3)
        };
    return _0x40e718['hNGZW'](toggleChart, _0x40e718[_0x375d06(0x33a)]);
}
function resethistory() {
    const _0x2df075 = {
        'mYoDL': function (_0x3821f8, _0x2c07cd) {
            return _0x3821f8(_0x2c07cd);
        }
    };
    return _0x2df075['mYoDL'](toggleHistory, 'clear');
}
function resetlog() {
    const _0x2152ff = _0x2b8a12, _0x58f1cf = {
            'pIuNx': function (_0x9d4e30, _0x20f5fa) {
                return _0x9d4e30(_0x20f5fa);
            },
            'Myyxi': _0x2152ff(0x1ee)
        };
    return _0x58f1cf['pIuNx'](toggleLog, _0x58f1cf[_0x2152ff(0x36c)]);
}
function resetstats() {
    const _0x581027 = _0x2b8a12, _0x149cd9 = {
            'EGsLc': function (_0x3358be) {
                return _0x3358be();
            }
        };
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, _0x149cd9[_0x581027(0x195)](updateStats);
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x385ba4) {
    return _0x385ba4;
}
function ching() {
    const _0x5ab865 = _0x2b8a12;
    return wdbSound[_0x5ab865(0x2b2)]();
}
function sleep(_0x2fb4d8) {
    return new Promise(_0x20626b => setTimeout(_0x20626b, _0x2fb4d8 * 0x3e8));
}
async function initLua() {
    const _0x2206b3 = _0x2b8a12, _0x5d3e90 = {
            'Pnoqw': _0x2206b3(0x2e1),
            'OLQaX': _0x2206b3(0x347),
            'DCCFQ': 'function\x20resume()\x0ajs.global:resume()\x0aend',
            'QxYlC': 'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
            'lMyWG': _0x2206b3(0x202),
            'VsJzN': _0x2206b3(0x368),
            'wFHcj': 'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
            'fAxaV': _0x2206b3(0x1f0),
            'ZrKBn': _0x2206b3(0x2d5),
            'BoWsy': 'function\x20ching()\x0ajs.global:ching()\x0aend',
            'LGFVh': _0x2206b3(0xea),
            'jVMCF': _0x2206b3(0x308),
            'agVsA': 'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
            'NTVGL': _0x2206b3(0x370),
            'kFvrD': _0x2206b3(0x2a4),
            'pHWaW': 'www.',
            'SQfwx': _0x2206b3(0x34a)
        };
    fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x288)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x304)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x1f2)])(), fengari[_0x2206b3(0x1ca)](_0x2206b3(0x2d1))(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x273)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90['lMyWG'])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0xe8)])(), fengari['load'](_0x5d3e90[_0x2206b3(0x36f)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90['fAxaV'])(), fengari['load'](_0x5d3e90['ZrKBn'])(), fengari['load'](_0x5d3e90[_0x2206b3(0x24e)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90['LGFVh'])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x38c)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90[_0x2206b3(0x1c0)])(), fengari[_0x2206b3(0x1ca)](_0x5d3e90['NTVGL'])(), fengari['load'](_0x5d3e90[_0x2206b3(0x1bd)])(), fengari[_0x2206b3(0x1ca)](_0x2206b3(0x28f))(), fengari[_0x2206b3(0x1ca)](_0x2206b3(0x1f7))();
    const _0x3045e6 = location['hostname']['replace'](_0x5d3e90[_0x2206b3(0x2f7)], '');
    let _0x180f18 = _0x3045e6[_0x2206b3(0x397)]('.');
    return casino = _0x3045e6[_0x2206b3(0x160)](0x0, _0x180f18), fengari[_0x2206b3(0x1ca)](_0x2206b3(0x25b) + casino + '\x22')(), _0x5d3e90[_0x2206b3(0x219)];
}
async function updateLua() {
    const _0x4da9fa = _0x2b8a12, _0x597b50 = {
            'ddtxc': _0x4da9fa(0x19d),
            'vkhem': function (_0xafaff6, _0x112b2f) {
                return _0xafaff6(_0x112b2f);
            },
            'WfwQn': 'return\x20plinkoRow',
            'acCJx': _0x4da9fa(0x156),
            'wfiew': _0x4da9fa(0x20f)
        }, _0x2d6105 = '\x0a\x20\x20\x20\x20win=' + win + _0x4da9fa(0x3b5) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x4da9fa(0x143) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + '\x0a\x20\x20\x20\x20losestreak=' + losestreak + _0x4da9fa(0x189) + currentstreak + _0x4da9fa(0x1b4) + balance + _0x4da9fa(0x377) + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + '\x0a\x20\x20\x20\x20minprofit=' + minprofit + _0x4da9fa(0x24c) + maxprofit + '\x0a\x20\x20\x20\x20chance=' + chance + _0x4da9fa(0x121) + bethigh + _0x4da9fa(0x236) + chance1 + _0x4da9fa(0x324) + chance2 + _0x4da9fa(0x269) + chance3 + _0x4da9fa(0x1ed) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + _0x4da9fa(0x3bb) + nextbet + _0x4da9fa(0x26a) + previousbet + _0x4da9fa(0x336) + profit + _0x4da9fa(0x3b2) + currentprofit + _0x4da9fa(0x21e) + partialprofit + _0x4da9fa(0x3d6) + wagered + _0x4da9fa(0x140) + lastBet['amount'] + ',\x0a\x20\x20\x20\x20\x20\x20Amount=' + lastBet[_0x4da9fa(0x293)] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet[_0x4da9fa(0x22e)] + _0x4da9fa(0x2c6) + lastBet[_0x4da9fa(0x22e)] + _0x4da9fa(0x1fa) + lastBet[_0x4da9fa(0x10a)] + _0x4da9fa(0x323) + lastBet[_0x4da9fa(0x10a)] + _0x4da9fa(0x3c3) + lastBet['profit'] + _0x4da9fa(0x29d) + lastBet[_0x4da9fa(0x3ce)] + _0x4da9fa(0x2b1) + lastBet[_0x4da9fa(0x1a8)] + _0x4da9fa(0x332) + lastBet[_0x4da9fa(0x1a8)] + _0x4da9fa(0x24a) + lastBet[_0x4da9fa(0x391)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance1=' + lastBet['chance1'] + _0x4da9fa(0x18c) + lastBet[_0x4da9fa(0x14d)] + _0x4da9fa(0x151) + lastBet[_0x4da9fa(0x14d)] + _0x4da9fa(0x33c) + lastBet[_0x4da9fa(0x2ba)] + _0x4da9fa(0x217) + lastBet[_0x4da9fa(0x2ba)] + ',\x0a\x20\x20\x20\x20\x20\x20chance4=' + lastBet['chance4'] + ',\x0a\x20\x20\x20\x20\x20\x20Chance4=' + lastBet[_0x4da9fa(0x346)] + _0x4da9fa(0x315) + lastBet[_0x4da9fa(0x267)] + _0x4da9fa(0x358) + lastBet['betSide'] + '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=' + lastBet[_0x4da9fa(0x164)] + _0x4da9fa(0xfd) + lastBet[_0x4da9fa(0x164)] + _0x4da9fa(0x122) + lastBet[_0x4da9fa(0x1d7)] + _0x4da9fa(0x206) + lastBet['nonce'] + ',\x0a\x20\x20\x20\x20\x20\x20id=\x22' + lastBet['id'] + _0x4da9fa(0xc3) + lastBet['id'] + '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20';
    fengari[_0x4da9fa(0x1ca)](_0x2d6105)(), fengari[_0x4da9fa(0x1ca)](_0x597b50['ddtxc'])(), currency = fengari['load'](_0x4da9fa(0x2c3))() || currency, coin = _0x597b50[_0x4da9fa(0x37e)](String, currency)[_0x4da9fa(0x2c9)](), plinkoRisk = fengari[_0x4da9fa(0x1ca)]('return\x20plinkoRisk')() || plinkoRisk, plinkoRow = fengari[_0x4da9fa(0x1ca)](_0x597b50[_0x4da9fa(0x27a)])() || plinkoRow, kenoRisk = fengari[_0x4da9fa(0x1ca)](_0x597b50[_0x4da9fa(0xda)])() || kenoRisk;
    const _0x468848 = fengari[_0x4da9fa(0x1ca)](_0x597b50['wfiew'])();
    return _0x468848 && (window[_0x4da9fa(0x396)] = _0x468848[_0x4da9fa(0x2b6)](',')[_0x4da9fa(0x34d)](_0x1cff60 => _0x1cff60 !== '')[_0x4da9fa(0x182)](Number)), _0x4da9fa(0x102);
}
function randomString(_0x4e47a5, _0x5ab954) {
    const _0xac481b = _0x2b8a12, _0x3d31ae = {
            'wgztU': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'yADdA': _0xac481b(0x3a9),
            'hqHSj': _0xac481b(0x380),
            'kWlJF': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            'YjRmM': function (_0x3a6093, _0x3632e9) {
                return _0x3a6093 < _0x3632e9;
            },
            'yMgZV': function (_0x2e1ae7, _0x2142a0) {
                return _0x2e1ae7 * _0x2142a0;
            }
        }, _0x5ba24f = {
            'alphabet': _0x3d31ae[_0xac481b(0x2ca)],
            'numeric': _0x3d31ae[_0xac481b(0x207)],
            'hex': _0xac481b(0x360),
            'rangedice': _0x3d31ae['hqHSj'],
            'default': _0x3d31ae[_0xac481b(0x112)]
        }, _0x9cb497 = _0x5ba24f[_0x5ab954] || _0x5ba24f[_0xac481b(0xc5)];
    let _0x6f35ec = '';
    for (let _0x23a437 = 0x0; _0x3d31ae[_0xac481b(0x2e9)](_0x23a437, _0x4e47a5); _0x23a437++) {
        _0x6f35ec += _0x9cb497[_0xac481b(0x1e9)](Math[_0xac481b(0x101)](_0x3d31ae['yMgZV'](Math[_0xac481b(0x3ad)](), _0x9cb497[_0xac481b(0x13a)])));
    }
    return _0x6f35ec;
}
function setCookie(_0x1cab70, _0x4664d0, _0x472d24) {
    const _0x14161d = _0x2b8a12, _0x53cdfb = {
            'WqcMs': function (_0x48b7ee, _0x25cd29) {
                return _0x48b7ee + _0x25cd29;
            },
            'xDzQF': function (_0x2130e9, _0x37eaa2) {
                return _0x2130e9 * _0x37eaa2;
            },
            'PnmZs': function (_0x105f5c, _0x379dcf) {
                return _0x105f5c * _0x379dcf;
            },
            'qJwTD': function (_0xa74ce5, _0x26e030) {
                return _0xa74ce5 * _0x26e030;
            },
            'dmZIu': function (_0x36af51, _0x468212) {
                return _0x36af51 + _0x468212;
            },
            'jOhcW': _0x14161d(0x16c)
        }, _0x40c47b = new Date();
    _0x40c47b['setTime'](_0x53cdfb[_0x14161d(0x317)](_0x40c47b[_0x14161d(0x39d)](), _0x53cdfb['xDzQF'](_0x53cdfb['PnmZs'](_0x53cdfb[_0x14161d(0x2b8)](_0x472d24, 0x18) * 0x3c, 0x3c), 0x3e8)));
    const _0x949c38 = _0x53cdfb[_0x14161d(0x354)](_0x53cdfb['jOhcW'], _0x40c47b[_0x14161d(0x2dc)]());
    document[_0x14161d(0x14f)] = _0x1cab70 + '=' + _0x4664d0 + ';' + _0x949c38 + ';path=/';
}
function getCookie(_0xf0cdb6) {
    const _0x570ca4 = _0x2b8a12, _0x55db74 = _0xf0cdb6 + '=', _0x1a7776 = document[_0x570ca4(0x14f)][_0x570ca4(0x2b6)](';')[_0x570ca4(0x182)](_0x18cfdd => _0x18cfdd[_0x570ca4(0x2c4)]());
    for (const _0x17b18f of _0x1a7776) {
        if (_0x17b18f[_0x570ca4(0x259)](_0x55db74))
            return _0x17b18f[_0x570ca4(0xd7)](_0x55db74['length']);
    }
    return '';
}
function saveScript() {
    const _0x313878 = _0x2b8a12, _0x56a0e7 = {
            'eIWvq': function (_0x282681, _0xa5e46d) {
                return _0x282681 === _0xa5e46d;
            },
            'SbSWH': _0x313878(0x2f5),
            'SbGAj': _0x313878(0x342)
        }, _0x5d1bc4 = _0x56a0e7[_0x313878(0x146)](mode, _0x56a0e7[_0x313878(0x349)]) ? luaEditor[_0x313878(0x3b9)]() : jsEditor[_0x313878(0x3b9)](), _0x240e49 = document['createElement']('a');
    _0x240e49['href'] = window[_0x313878(0x33b)]['createObjectURL'](new Blob([_0x5d1bc4], { 'type': _0x56a0e7[_0x313878(0x233)] })), _0x240e49['download'] = _0x313878(0x254) + Date[_0x313878(0x11f)]()['toString']()['slice'](-0x6) + '.' + mode, _0x240e49[_0x313878(0x210)]();
}
function getErrMsg(_0xa887d0) {
    const _0xcd1901 = _0x2b8a12;
    return _0xa887d0['response'] && _0xa887d0[_0xcd1901(0x22d)][_0xcd1901(0x26b)] && _0xa887d0[_0xcd1901(0x22d)]['data'][_0xcd1901(0x38a)] || _0xa887d0['message'] || _0xa887d0[_0xcd1901(0x239)]();
}

(function (_0x42372b, _0x1b6ade) {
    const _0x4c1ad4 = _0x50bc, _0x21c917 = _0x42372b();
    while (!![]) {
        try {
            const _0x5421af = -parseInt(_0x4c1ad4(0x1fd)) / 0x1 + -parseInt(_0x4c1ad4(0x20e)) / 0x2 * (parseInt(_0x4c1ad4(0x213)) / 0x3) + -parseInt(_0x4c1ad4(0x214)) / 0x4 * (parseInt(_0x4c1ad4(0x1ea)) / 0x5) + parseInt(_0x4c1ad4(0x200)) / 0x6 * (parseInt(_0x4c1ad4(0x1ff)) / 0x7) + parseInt(_0x4c1ad4(0x1d8)) / 0x8 * (parseInt(_0x4c1ad4(0x1c3)) / 0x9) + parseInt(_0x4c1ad4(0x1f4)) / 0xa + parseInt(_0x4c1ad4(0x1b2)) / 0xb;
            if (_0x5421af === _0x1b6ade)
                break;
            else
                _0x21c917['push'](_0x21c917['shift']());
        } catch (_0x48c193) {
            _0x21c917['push'](_0x21c917['shift']());
        }
    }
}(_0x3ae2, 0xb8a7c), loadingCoin = !![]);
let isNewCheckBalance = ![];
async function beforeWork(_0x18a713) {
    const _0x2d2285 = _0x50bc, _0x381573 = {
            'MSfrx': _0x2d2285(0x1e5),
            'ohQhw': _0x2d2285(0x1e4),
            'bsMBw': function (_0x566189, _0x51cfd9) {
                return _0x566189 + _0x51cfd9;
            },
            'WzUGC': _0x2d2285(0x1e9),
            'ITMml': _0x2d2285(0x1f7),
            'KWKit': _0x2d2285(0x1ba),
            'IEMFS': 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js'
        }, _0x1430b8 = _0x381573[_0x2d2285(0x1b5)][_0x2d2285(0x1e2)]('|');
    let _0x15edb8 = 0x0;
    while (!![]) {
        switch (_0x1430b8[_0x15edb8++]) {
        case '0':
            client['on'](_0x381573[_0x2d2285(0x1e1)], () => {
                client['connect']();
            });
            continue;
        case '1':
            await _0x18a713[_0x2d2285(0x212)](_0x381573['bsMBw'](WDB_LIB, _0x381573[_0x2d2285(0x1b3)]));
            continue;
        case '2':
            await _0x18a713['loadScript'](_0x381573[_0x2d2285(0x1bd)](WDB_LIB, _0x381573[_0x2d2285(0x209)]));
            continue;
        case '3':
            await _0x18a713[_0x2d2285(0x212)](WDB_LIB + _0x381573['KWKit']);
            continue;
        case '4':
            await _0x18a713[_0x2d2285(0x212)](_0x381573[_0x2d2285(0x207)]);
            continue;
        case '5':
            connectServer();
            continue;
        }
        break;
    }
}
function _0x50bc(_0x9efaed, _0x53abc5) {
    const _0x3ae29f = _0x3ae2();
    return _0x50bc = function (_0x50bc2a, _0x4f7e53) {
        _0x50bc2a = _0x50bc2a - 0x1aa;
        let _0x49e34d = _0x3ae29f[_0x50bc2a];
        return _0x49e34d;
    }, _0x50bc(_0x9efaed, _0x53abc5);
}
function vault() {
    const _0x591eef = _0x50bc, _0x38e1aa = { 'LTiCY': 'Not\x20supported' };
    log(_0x38e1aa[_0x591eef(0x1bb)]);
}
function unvault() {
    const _0x3a5320 = _0x50bc, _0x33d883 = {
            'Vshqi': function (_0x2a61a5, _0x2bbc91) {
                return _0x2a61a5(_0x2bbc91);
            },
            'UPQHN': _0x3a5320(0x1d1)
        };
    _0x33d883['Vshqi'](log, _0x33d883['UPQHN']);
}
async function getListCoin() {
    const _0x442113 = {
        'VuUKW': function (_0x52dbee) {
            return _0x52dbee();
        }
    };
    _0x442113['VuUKW'](checkbalance);
}
async function checkbalance() {
    isNewCheckBalance = !![], connectServer();
}
async function resetseed() {
    const _0x3aface = _0x50bc, _0x44ae85 = {
            'PDltx': _0x3aface(0x1be),
            'AeXFQ': _0x3aface(0x1d7)
        }, _0x38e768 = randomString(0x18);
    client[_0x3aface(0x1af)](_0x44ae85[_0x3aface(0x1cf)], {
        'z': o[_0x3aface(0x205)](JSON[_0x3aface(0x203)]({
            'cs': _0x38e768,
            'type': _0x44ae85[_0x3aface(0x1d3)]
        }))
    }, () => {
        const _0x2caab1 = _0x3aface;
        client[_0x2caab1(0x1af)](_0x44ae85['PDltx'], {
            'z': o[_0x2caab1(0x205)](JSON[_0x2caab1(0x203)]({
                'cs': _0x38e768,
                'type': _0x44ae85['AeXFQ']
            }))
        }, () => {
        });
    });
}
async function sendBet() {
    const _0xc7665b = _0x50bc, _0x42cf45 = {
            'dVxrS': function (_0x2042e6, _0x53d926) {
                return _0x2042e6 === _0x53d926;
            },
            'Lqhfz': _0xc7665b(0x1b6),
            'gqWNh': function (_0x8ad820, _0x2d70e4) {
                return _0x8ad820 === _0x2d70e4;
            },
            'SOKwn': 'slow_down',
            'KbatR': function (_0x474676) {
                return _0x474676();
            },
            'eroDJ': function (_0x7fc08a, _0x1fe33d) {
                return _0x7fc08a(_0x1fe33d);
            },
            'Zvaqq': function (_0x33503f, _0xbcce16) {
                return _0x33503f - _0xbcce16;
            },
            'kIvMD': function (_0x2425d9, _0x427786) {
                return _0x2425d9 / _0x427786;
            },
            'DsGNz': function (_0x5cbe59, _0x5825aa, _0x50a5fc, _0x1c53de) {
                return _0x5cbe59(_0x5825aa, _0x50a5fc, _0x1c53de);
            },
            'XgsEt': function (_0x307626, _0x315b6b) {
                return _0x307626 === _0x315b6b;
            },
            'fjQJc': 'dice',
            'ieDwq': function (_0x1daf58, _0x7d1eee, _0x29f3a1) {
                return _0x1daf58(_0x7d1eee, _0x29f3a1);
            }
        };
    target = bethigh ? _0x42cf45[_0xc7665b(0x1ac)](99.99, chance) : chance, target = _0x42cf45[_0xc7665b(0x1b9)](Math[_0xc7665b(0x1b1)]((target + Number[_0xc7665b(0x1d9)]) * 0x64), 0x64);
    const _0x3eaa81 = _0x42cf45[_0xc7665b(0x1e3)](bcdiv, 0x63, chance, 0x3), _0x326262 = {
            'over': bethigh ? 0x1 : 0x0,
            'rv': target,
            'pa': _0x3eaa81,
            'bet': nextbet,
            'short': String(coin)['toLowerCase']()
        };
    if (_0x42cf45[_0xc7665b(0x1bc)](WDB_ENV, _0xc7665b(0x1b6)))
        console[_0xc7665b(0x1c2)](_0x326262);
    const _0x3a79fe = {
        'type': _0xc7665b(0x1b8),
        'm': !![],
        'roll': _0x326262,
        'auto': {
            'bet': nextbet,
            'over': bethigh ? 0x1 : 0x0,
            'chance': chance,
            'num': 0x1,
            'pr': null,
            'l': {
                'n': 0x0,
                'sn': 0x0,
                'ev': [
                    0x0,
                    0x1
                ],
                'be': [
                    0x0,
                    0x0
                ],
                'ch': [
                    0x0,
                    0x0
                ],
                'st': [
                    0x1,
                    0x0
                ],
                're': [
                    0x0,
                    0x0
                ]
            },
            'w': {
                'n': 0x0,
                'sn': 0x0,
                'ev': [
                    0x0,
                    0x1
                ],
                'be': [
                    0x0,
                    0x0
                ],
                'ch': [
                    0x0,
                    0x0
                ],
                'st': [
                    0x1,
                    0x0
                ],
                're': [
                    0x0,
                    0x0
                ]
            },
            'li': [
                0x0,
                0x0,
                0x0,
                0x0,
                0x0
            ]
        }
    };
    if (client[_0xc7665b(0x1f8)]) {
        if (run)
            client[_0xc7665b(0x1af)](_0x42cf45[_0xc7665b(0x1c1)], { 'z': o[_0xc7665b(0x205)](JSON['stringify'](_0x3a79fe)) }, _0x42cf45['DsGNz'](withTimeout, async _0x3dba83 => {
                const _0x56ea97 = _0xc7665b, _0x228d4b = JSON[_0x56ea97(0x206)](o[_0x56ea97(0x1f6)](_0x3dba83['z']));
                if (_0x42cf45[_0x56ea97(0x1e6)](WDB_ENV, _0x42cf45[_0x56ea97(0x1b4)]))
                    console[_0x56ea97(0x1c2)](_0x228d4b);
                if (_0x228d4b['error']) {
                    if (_0x42cf45['gqWNh'](_0x228d4b[_0x56ea97(0x1e8)], _0x42cf45[_0x56ea97(0x204)])) {
                        if (run)
                            return sendBet();
                    } else
                        _0x42cf45[_0x56ea97(0x1f0)](stop), _0x42cf45[_0x56ea97(0x208)](log, _0x228d4b['message']);
                } else
                    return _0x42cf45[_0x56ea97(0x208)](handleResult, _0x228d4b);
            }, async () => {
                const _0x168322 = _0xc7665b;
                if (run)
                    return _0x42cf45[_0x168322(0x1f0)](sendBet);
            }, 0x3e8));
    } else {
        await client[_0xc7665b(0x1da)]();
        if (run)
            return _0x42cf45[_0xc7665b(0x1bf)](setTimeout, sendBet, 0xbb8);
    }
}
async function handleResult(_0x5041e4) {
    const _0x4a322b = _0x50bc, _0x14ebc3 = {
            'yUFHt': _0x4a322b(0x1c9),
            'IkHzN': function (_0x5902a6, _0x4c9d4b) {
                return _0x5902a6(_0x4c9d4b);
            },
            'BzbfG': function (_0x457fb9) {
                return _0x457fb9();
            }
        };
    try {
        const _0x3632f3 = _0x14ebc3[_0x4a322b(0x1ca)][_0x4a322b(0x1e2)]('|');
        let _0x1754bc = 0x0;
        while (!![]) {
            switch (_0x3632f3[_0x1754bc++]) {
            case '0':
                currentprofit = _0x5041e4[_0x4a322b(0x1dd)]['delta'];
                continue;
            case '1':
                lastBet['id'] = _0x14ebc3[_0x4a322b(0x1fb)](String, _0x5041e4[_0x4a322b(0x1dd)]['_id']);
                continue;
            case '2':
                result = _0x5041e4[_0x4a322b(0x1dd)][_0x4a322b(0x1c5)];
                continue;
            case '3':
                return _0x14ebc3[_0x4a322b(0x1d0)](handleStats);
            case '4':
                lastBet[_0x4a322b(0x215)] = _0x5041e4[_0x4a322b(0x1dd)]['n'];
                continue;
            case '5':
                lastBet[_0x4a322b(0x1dd)] = _0x5041e4[_0x4a322b(0x1dd)][_0x4a322b(0x1c5)];
                continue;
            }
            break;
        }
    } catch (_0x184137) {
        return _0x14ebc3[_0x4a322b(0x1d0)](stop), _0x14ebc3[_0x4a322b(0x1fb)](log, _0x14ebc3[_0x4a322b(0x1fb)](getErrMsg, _0x184137));
    }
}
async function getBalance(_0x2fa976) {
    const _0x4ebeee = _0x50bc, _0x118af9 = {
            'qCPoD': 'balance_',
            'jKQkZ': function (_0x25da21, _0x5964fb) {
                return _0x25da21 !== _0x5964fb;
            },
            'neoZP': 'total_balance_usd',
            'sGWyt': function (_0x3e9908, _0xb1ff1d) {
                return _0x3e9908(_0xb1ff1d);
            }
        };
    let _0x10ea23 = [], _0x13b6c1 = 0x0;
    for (const _0x5ad27d in _0x2fa976) {
        if (_0x5ad27d[_0x4ebeee(0x20d)](_0x118af9['qCPoD']) >= 0x0 && _0x118af9[_0x4ebeee(0x20a)](_0x5ad27d, _0x118af9[_0x4ebeee(0x1b0)]))
            _0x10ea23['push']({
                'coin': _0x5ad27d[_0x4ebeee(0x1ec)](0x8),
                'value': _0x118af9['sGWyt'](Number, _0x2fa976[_0x5ad27d])[_0x4ebeee(0x1cb)](0x8)
            });
    }
    const _0x1361cb = _0x10ea23[_0x4ebeee(0x201)](_0x218c77 => _0x218c77['coin'] === String(coin)['toLowerCase']());
    return _0x118af9[_0x4ebeee(0x20a)](_0x1361cb[_0x4ebeee(0x1c7)], 0x0) ? _0x13b6c1 = Number(_0x1361cb[0x0][_0x4ebeee(0x1fe)]) : _0x13b6c1 = 0x0, _0x13b6c1;
}
function _0x3ae2() {
    const _0x3832dc = [
        'balance',
        'push',
        '&isMobile=0',
        '5856770SdqwYl',
        'short',
        'decompressFromBase64',
        '/timeout.js',
        'connected',
        'JYxbw',
        'maxbet=',
        'IkHzN',
        'substring',
        '199768bnPHkn',
        'value',
        '7AxArXF',
        '4299744NrCUas',
        'filter',
        'LHnNQ',
        'stringify',
        'SOKwn',
        'compressToBase64',
        'parse',
        'IEMFS',
        'eroDJ',
        'ITMml',
        'jKQkZ',
        'chunk.js',
        'script',
        'search',
        '566WOHaKp',
        'startsWith',
        'KxDPz',
        'key',
        'loadScript',
        '11310BLfhui',
        '55828kaDHog',
        'nonce',
        '/static/js/main.',
        'hostname',
        'Zvaqq',
        'mQnBA',
        'toUpperCase',
        'emit',
        'neoZP',
        'round',
        '11724262QGetml',
        'WzUGC',
        'Lqhfz',
        'MSfrx',
        'development',
        'getItem',
        'auto',
        'kIvMD',
        '/bc.js',
        'LTiCY',
        'XgsEt',
        'bsMBw',
        'dice',
        'ieDwq',
        'zaQTD',
        'fjQJc',
        'log',
        '153qytCGM',
        'yXxne',
        'outcome',
        'SSORe',
        'length',
        'kJimy',
        '0|5|2|4|1|3',
        'yUFHt',
        'toFixed',
        'iwiGp',
        'maxbalance=',
        'CqUAf',
        'PDltx',
        'BzbfG',
        'Not\x20supported',
        'ZyZsm',
        'AeXFQ',
        'connectServer\x20ok',
        'rldsq',
        'onInit',
        'randomize',
        '441848yIRYTI',
        'EPSILON',
        'connect',
        'tJjOK',
        '6|8|9|5|0|7|2|10|3|1|11|4|12',
        'roll',
        'undefined',
        'https://back.',
        'load',
        'ohQhw',
        'split',
        'DsGNz',
        'disconnect',
        '4|2|1|3|5|0',
        'dVxrS',
        'jXrji',
        'message',
        '/wintomato.js',
        '460CzNNPD',
        '/sck?token=',
        'slice',
        'Gardn',
        'sort',
        'minbalance=',
        'KbatR'
    ];
    _0x3ae2 = function () {
        return _0x3832dc;
    };
    return _0x3ae2();
}
function getBuildVersion() {
    const _0x40d9a9 = _0x50bc, _0x39339a = {
            'zaQTD': function (_0x58b332, _0xe339b6) {
                return _0x58b332 === _0xe339b6;
            },
            'yXxne': _0x40d9a9(0x1de),
            'OKGSc': 'string',
            'LHnNQ': _0x40d9a9(0x1aa),
            'iwiGp': function (_0x4e2186, _0x44f82a) {
                return _0x4e2186 - _0x44f82a;
            },
            'wFNgM': _0x40d9a9(0x20b)
        };
    if (_0x39339a[_0x40d9a9(0x1c0)](typeof document, _0x39339a[_0x40d9a9(0x1c4)]))
        return;
    var _0x266a28 = document['getElementsByTagName'](_0x40d9a9(0x20c));
    let _0x141992;
    for (let _0x3afedc of _0x266a28) {
        const _0x11a414 = _0x3afedc['getAttribute']('src');
        if (typeof _0x11a414 !== _0x39339a['OKGSc'] || !_0x11a414[_0x40d9a9(0x20f)](_0x39339a[_0x40d9a9(0x202)]))
            continue;
        _0x141992 = _0x11a414[_0x40d9a9(0x1fc)](_0x39339a[_0x40d9a9(0x202)]['length'], _0x39339a[_0x40d9a9(0x1cc)](_0x39339a[_0x40d9a9(0x1cc)](_0x11a414[_0x40d9a9(0x1c7)], _0x39339a['wFNgM'][_0x40d9a9(0x1c7)]), 0x1));
        break;
    }
    return _0x141992;
}
async function connectServer() {
    const _0x38201e = _0x50bc, _0xd2945e = {
            'CqUAf': function (_0xd94f52) {
                return _0xd94f52();
            },
            'DqFzQ': _0x38201e(0x1dc),
            'Gardn': function (_0x2ae092, _0x508f4e) {
                return _0x2ae092 + _0x508f4e;
            },
            'ZyZsm': _0x38201e(0x1ef),
            'mQnBA': _0x38201e(0x1cd),
            'dqUWz': function (_0x5c2fd0, _0x2855c5) {
                return _0x5c2fd0 + _0x2855c5;
            },
            'jXrji': _0x38201e(0x1fa),
            'mwfnt': function (_0x2feb16) {
                return _0x2feb16();
            },
            'tJjOK': function (_0x48f4be, _0x3523d0, _0x5a6608) {
                return _0x48f4be(_0x3523d0, _0x5a6608);
            },
            'SSORe': _0x38201e(0x1df),
            'rldsq': _0x38201e(0x1eb),
            'XgvXW': 'cr_token',
            'KxDPz': _0x38201e(0x1f3),
            'kJimy': 'websocket',
            'JYxbw': _0x38201e(0x1d6)
        };
    return client = _0xd2945e[_0x38201e(0x1db)](io, _0xd2945e[_0x38201e(0x1ed)](_0xd2945e[_0x38201e(0x1c6)] + window['location'][_0x38201e(0x1ab)] + _0xd2945e[_0x38201e(0x1d5)], JSON[_0x38201e(0x206)](localStorage[_0x38201e(0x1b7)](_0xd2945e['XgvXW']))[_0x38201e(0x211)]) + _0xd2945e[_0x38201e(0x210)], { 'transports': [_0xd2945e[_0x38201e(0x1c8)]] }), client[_0x38201e(0x1da)](), client['on'](_0xd2945e[_0x38201e(0x1f9)], async _0x5d7ad6 => {
        const _0x246e21 = _0x38201e;
        if (loadingCoin) {
            const _0x3a5ac6 = _0x5d7ad6['coins'];
            for (const _0x429761 in _0x3a5ac6)
                coins[_0x246e21(0x1f2)](String(_0x3a5ac6[_0x429761][_0x246e21(0x1f5)])[_0x246e21(0x1ae)]());
            return coins = coins[_0x246e21(0x1ee)](), coin = coins[0x0], loadingCoin = ![], (_0xd2945e[_0x246e21(0x1ce)](drawSelectCoin), checkbalance());
        } else {
            if (isNewCheckBalance) {
                const _0x3dd67b = _0xd2945e['DqFzQ'][_0x246e21(0x1e2)]('|');
                let _0x326117 = 0x0;
                while (!![]) {
                    switch (_0x3dd67b[_0x326117++]) {
                    case '0':
                        fengari[_0x246e21(0x1e0)](_0xd2945e[_0x246e21(0x1ed)](_0xd2945e[_0x246e21(0x1d2)], balance))();
                        continue;
                    case '1':
                        maxbet = balance;
                        continue;
                    case '2':
                        fengari[_0x246e21(0x1e0)](_0xd2945e[_0x246e21(0x1ad)] + balance)();
                        continue;
                    case '3':
                        fengari[_0x246e21(0x1e0)](_0xd2945e['dqUWz']('minbet=', minbet))();
                        continue;
                    case '4':
                        isNewCheckBalance = ![];
                        continue;
                    case '5':
                        minbalance = balance;
                        continue;
                    case '6':
                        balance = await getBalance(_0x5d7ad6[_0x246e21(0x1f1)]);
                        continue;
                    case '7':
                        maxbalance = balance;
                        continue;
                    case '8':
                        fengari['load']('balance=' + balance)();
                        continue;
                    case '9':
                        startBalance = balance;
                        continue;
                    case '10':
                        minbet = 1e-8;
                        continue;
                    case '11':
                        fengari[_0x246e21(0x1e0)](_0xd2945e[_0x246e21(0x1e7)] + maxbet)();
                        continue;
                    case '12':
                        return _0xd2945e['mwfnt'](updateStats);
                    }
                    break;
                }
            }
        }
    }), _0x38201e(0x1d4);
}