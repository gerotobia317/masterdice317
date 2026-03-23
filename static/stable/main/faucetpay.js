const _0x301a80 = _0x4b61;
(function (_0xe48d35, _0xbbbcd8) {
    const _0x3af4c8 = _0x4b61, _0x207236 = _0xe48d35();
    while (!![]) {
        try {
            const _0x236ff6 = -parseInt(_0x3af4c8(0x481)) / 0x1 * (parseInt(_0x3af4c8(0x1e0)) / 0x2) + -parseInt(_0x3af4c8(0x28c)) / 0x3 * (parseInt(_0x3af4c8(0x273)) / 0x4) + parseInt(_0x3af4c8(0x480)) / 0x5 * (-parseInt(_0x3af4c8(0x3bc)) / 0x6) + parseInt(_0x3af4c8(0x27f)) / 0x7 + -parseInt(_0x3af4c8(0x260)) / 0x8 + -parseInt(_0x3af4c8(0x2aa)) / 0x9 * (-parseInt(_0x3af4c8(0x3d4)) / 0xa) + -parseInt(_0x3af4c8(0x2e1)) / 0xb * (-parseInt(_0x3af4c8(0x2fc)) / 0xc);
            if (_0x236ff6 === _0xbbbcd8)
                break;
            else
                _0x207236['push'](_0x207236['shift']());
        } catch (_0xd30e48) {
            _0x207236['push'](_0x207236['shift']());
        }
    }
}(_0x458c, 0xf007d), Object['defineProperty'](String['prototype'], _0x301a80(0x203), {
    'value': function () {
        const _0x537258 = _0x301a80, _0x34df3d = {
                'OONTl': function (_0x23893c, _0x51fcf2) {
                    return _0x23893c + _0x51fcf2;
                }
            };
        return _0x34df3d[_0x537258(0x4aa)](this[_0x537258(0x396)](0x0)['toUpperCase'](), this[_0x537258(0x257)](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x301a80(0x1d6), game = _0x301a80(0x335), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x301a80(0x381), kenoRisk = 'classic', kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x301a80(0x29e), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x301a80(0x29e),
    'BetSide': _0x301a80(0x29e),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x301a80(0x23e))), wdbUI = _0x301a80(0x44f) + WDB_MODE + _0x301a80(0x469) + CASINO_GAME + _0x301a80(0x2bd) + WDB_HOME + _0x301a80(0x469) + location[_0x301a80(0x2f1)][_0x301a80(0x422)](_0x301a80(0x271), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = _0x301a80(0x2c5), rangediceJsScript = _0x301a80(0x21b), plinkoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', plinkoJsScript = _0x301a80(0x27c), kenoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', kenoJsScript = _0x301a80(0x28d);
function exportLog() {
    const _0x401ff8 = _0x301a80, _0x5cb268 = { 'MFIKn': 'application/json' }, _0x487afe = JSON[_0x401ff8(0x247)](fullLogs), _0x3412aa = document[_0x401ff8(0x1da)]('a');
    _0x3412aa['href'] = window[_0x401ff8(0x34a)][_0x401ff8(0x348)](new Blob([_0x487afe], { 'type': _0x5cb268[_0x401ff8(0x4a0)] })), _0x3412aa[_0x401ff8(0x3f4)] = _0x401ff8(0x47d) + Date['now']()[_0x401ff8(0x3ab)]()[_0x401ff8(0x257)](-0x6) + _0x401ff8(0x2c8), _0x3412aa[_0x401ff8(0x37c)]();
}
class Chart {
    constructor(_0x5b93e7, _0x4c1a02 = ![], _0x5ee909 = 0x64) {
        const _0xf48b30 = _0x301a80, _0x4ff6a6 = {
                'MIovk': _0xf48b30(0x3da),
                'LkcCN': _0xf48b30(0x407),
                'VVLxB': _0xf48b30(0x49c)
            }, _0x37abc2 = _0x4ff6a6['MIovk'][_0xf48b30(0x34c)]('|');
        let _0x17d080 = 0x0;
        while (!![]) {
            switch (_0x37abc2[_0x17d080++]) {
            case '0':
                this[_0xf48b30(0x1b5)] = _0x5ee909;
                continue;
            case '1':
                this[_0xf48b30(0x379)] = _0x4c1a02;
                continue;
            case '2':
                this[_0xf48b30(0x30e)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '3':
                this[_0xf48b30(0x1c6)] = new CanvasJS[(_0xf48b30(0x321))](_0x5b93e7, {
                    'theme': _0x4c1a02 ? _0x4ff6a6['LkcCN'] : _0x4ff6a6[_0xf48b30(0x372)],
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0xf48b30(0x38a),
                            'markerSize': 0x0,
                            'dataPoints': this[_0xf48b30(0x30e)]
                        }]
                });
                continue;
            case '4':
                this[_0xf48b30(0x311)] = _0x5b93e7;
                continue;
            case '5':
                this['chart'][_0xf48b30(0x338)]();
                continue;
            }
            break;
        }
    }
    set ['maxRows'](_0x358e76) {
        const _0x578353 = _0x301a80;
        this[_0x578353(0x1b5)] = _0x358e76;
    }
    get [_0x301a80(0x4a9)]() {
        const _0x1823ff = _0x301a80;
        return this[_0x1823ff(0x1b5)];
    }
    set ['darkMode'](_0x590bff) {
        const _0x39415b = _0x301a80, _0x5f1dd4 = {
                'BnUmG': 'dark1',
                'dTPjM': _0x39415b(0x49c)
            };
        this[_0x39415b(0x379)] = _0x590bff, this[_0x39415b(0x1c6)][_0x39415b(0x331)][_0x39415b(0x3a0)] = _0x590bff ? _0x5f1dd4[_0x39415b(0x325)] : _0x5f1dd4[_0x39415b(0x43d)], this[_0x39415b(0x1c6)][_0x39415b(0x338)]();
    }
    get [_0x301a80(0x419)]() {
        const _0x1cebe4 = _0x301a80;
        return this[_0x1cebe4(0x379)];
    }
    [_0x301a80(0x288)](_0x532593, _0x294b3a, _0x23ed5b) {
        const _0x546597 = _0x301a80, _0x598dc0 = {
                'jUnKo': function (_0x226a77, _0x981e29) {
                    return _0x226a77 > _0x981e29;
                },
                'zVEHg': function (_0x10837f, _0x1a0ffa) {
                    return _0x10837f - _0x1a0ffa;
                },
                'XyaQR': function (_0x1068d1, _0xcc31cc) {
                    return _0x1068d1 - _0xcc31cc;
                }
            };
        this['dps'][_0x546597(0x272)]({
            'x': _0x532593,
            'y': _0x294b3a,
            'lineColor': _0x23ed5b
        });
        if (_0x598dc0[_0x546597(0x215)](this[_0x546597(0x30e)]['length'], this[_0x546597(0x1b5)]))
            this['dps']['shift']();
        if (this['dps'][_0x598dc0[_0x546597(0x35c)](this[_0x546597(0x30e)][_0x546597(0x308)], 0x2)])
            this[_0x546597(0x30e)][_0x598dc0['XyaQR'](this[_0x546597(0x30e)][_0x546597(0x308)], 0x2)][_0x546597(0x1c4)] = _0x23ed5b;
        this[_0x546597(0x1c6)][_0x546597(0x338)]();
    }
    ['resetChart']() {
        const _0x313fe1 = _0x301a80;
        this[_0x313fe1(0x30e)] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart']['options'][_0x313fe1(0x374)][0x0][_0x313fe1(0x2f7)] = this['dps'], this[_0x313fe1(0x1c6)][_0x313fe1(0x338)]();
    }
}
function changeMaxRows() {
    const _0x22931d = _0x301a80, _0x44dfa1 = {
            'EHGrw': function (_0xd87c4c, _0x20cc86) {
                return _0xd87c4c(_0x20cc86);
            },
            'EUost': _0x22931d(0x1b4),
            'UBsNL': function (_0x39ada5) {
                return _0x39ada5();
            }
        }, _0x3c2319 = _0x22931d(0x41d)[_0x22931d(0x34c)]('|');
    let _0x5e125a = 0x0;
    while (!![]) {
        switch (_0x3c2319[_0x5e125a++]) {
        case '0':
            resetlog();
            continue;
        case '1':
            maxRows = _0x44dfa1[_0x22931d(0x2e0)](Number, document[_0x22931d(0x3f5)](_0x44dfa1[_0x22931d(0x1b3)])[_0x22931d(0x2fb)]);
            continue;
        case '2':
            _0x44dfa1[_0x22931d(0x254)](resethistory);
            continue;
        case '3':
            chart[_0x22931d(0x4a9)] = maxRows;
            continue;
        case '4':
            _0x44dfa1[_0x22931d(0x254)](resetchart);
            continue;
        }
        break;
    }
}
function _0x4b61(_0x3f7bde, _0x4db740) {
    const _0x458caf = _0x458c();
    return _0x4b61 = function (_0x4b610b, _0x32c1c5) {
        _0x4b610b = _0x4b610b - 0x1aa;
        let _0x31c7e2 = _0x458caf[_0x4b610b];
        return _0x31c7e2;
    }, _0x4b61(_0x3f7bde, _0x4db740);
}
function toggleDarkMode() {
    const _0xe9f3f5 = _0x301a80, _0x3a8ddd = {
            'JqtGt': _0xe9f3f5(0x26d),
            'yRLfa': '#fff',
            'AhoVh': _0xe9f3f5(0x438),
            'Hkbzh': 'wdb',
            'ZAclY': _0xe9f3f5(0x444),
            'TBEdn': _0xe9f3f5(0x437),
            'SdLNc': '1|6|0|5|4|8|7|3|2',
            'sPebz': _0xe9f3f5(0x3a0),
            'osUsx': _0xe9f3f5(0x28e),
            'GWckc': _0xe9f3f5(0x21f),
            'oDeWS': _0xe9f3f5(0x36e),
            'NPJJv': _0xe9f3f5(0x49e)
        };
    darkMode = !darkMode, chart[_0xe9f3f5(0x419)] = darkMode;
    const _0x3d4595 = document[_0xe9f3f5(0x3f5)](_0x3a8ddd[_0xe9f3f5(0x264)]), _0x53733d = document[_0xe9f3f5(0x3f5)](_0x3a8ddd[_0xe9f3f5(0x297)]), _0x549948 = document[_0xe9f3f5(0x415)](_0xe9f3f5(0x375)), _0x6a5717 = document[_0xe9f3f5(0x415)](_0x3a8ddd['TBEdn']), _0x30c36c = document[_0xe9f3f5(0x415)]('.wdb-stats\x20div\x20li');
    if (darkMode) {
        const _0x4b53b9 = _0x3a8ddd[_0xe9f3f5(0x38b)][_0xe9f3f5(0x34c)]('|');
        let _0x305f4c = 0x0;
        while (!![]) {
            switch (_0x4b53b9[_0x305f4c++]) {
            case '0':
                _0x3d4595['style'][_0xe9f3f5(0x1d5)] = _0x3a8ddd[_0xe9f3f5(0x406)];
                continue;
            case '1':
                _0x3d4595[_0xe9f3f5(0x214)][_0xe9f3f5(0x33b)] = _0x3a8ddd[_0xe9f3f5(0x406)];
                continue;
            case '2':
                _0x30c36c[_0xe9f3f5(0x305)](_0x460837 => _0x460837[_0xe9f3f5(0x214)]['color'] = _0xe9f3f5(0x361));
                continue;
            case '3':
                _0x6a5717['forEach'](_0x3d9001 => _0x3d9001[_0xe9f3f5(0x214)][_0xe9f3f5(0x47e)] = '#fff');
                continue;
            case '4':
                luaEditor['setOption'](_0x3a8ddd['sPebz'], _0x3a8ddd['osUsx']);
                continue;
            case '5':
                _0x53733d[_0xe9f3f5(0x214)][_0xe9f3f5(0x33b)] = _0x3a8ddd['GWckc'];
                continue;
            case '6':
                _0x3d4595[_0xe9f3f5(0x214)][_0xe9f3f5(0x47e)] = _0x3a8ddd[_0xe9f3f5(0x3ad)];
                continue;
            case '7':
                _0x549948[_0xe9f3f5(0x305)](_0x122c2e => {
                    const _0x18c788 = _0xe9f3f5;
                    _0x122c2e['style']['backgroundColor'] = _0x3a8ddd[_0x18c788(0x406)], _0x122c2e[_0x18c788(0x214)][_0x18c788(0x47e)] = _0x3a8ddd[_0x18c788(0x3ad)];
                });
                continue;
            case '8':
                jsEditor[_0xe9f3f5(0x3cd)](_0x3a8ddd[_0xe9f3f5(0x3a6)], _0xe9f3f5(0x28e));
                continue;
            }
            break;
        }
    } else
        _0x3d4595[_0xe9f3f5(0x214)][_0xe9f3f5(0x33b)] = _0x3a8ddd[_0xe9f3f5(0x3ad)], _0x3d4595[_0xe9f3f5(0x214)][_0xe9f3f5(0x47e)] = _0x3a8ddd[_0xe9f3f5(0x4ad)], _0x3d4595['style'][_0xe9f3f5(0x1d5)] = _0xe9f3f5(0x361), _0x53733d['style']['backgroundColor'] = _0x3a8ddd[_0xe9f3f5(0x35b)], luaEditor[_0xe9f3f5(0x3cd)](_0xe9f3f5(0x3a0), _0x3a8ddd[_0xe9f3f5(0x417)]), jsEditor[_0xe9f3f5(0x3cd)](_0x3a8ddd['sPebz'], _0x3a8ddd[_0xe9f3f5(0x417)]), _0x549948['forEach'](_0x1b92b9 => {
            const _0x1d65e3 = _0xe9f3f5;
            _0x1b92b9[_0x1d65e3(0x214)]['backgroundColor'] = _0x1d65e3(0x361), _0x1b92b9[_0x1d65e3(0x214)]['color'] = _0x3a8ddd['AhoVh'];
        }), _0x6a5717['forEach'](_0x470657 => _0x470657[_0xe9f3f5(0x214)][_0xe9f3f5(0x47e)] = '#000'), _0x30c36c['forEach'](_0x182598 => _0x182598[_0xe9f3f5(0x214)]['color'] = _0xe9f3f5(0x438));
    updateStats();
}
let previousPosition = {
    'top': _0x301a80(0x1c8),
    'left': _0x301a80(0x1c8),
    'position': _0x301a80(0x24e)
};
function _0x458c() {
    const _0x3b7032 = [
        '$1=$1+$2\x20',
        'setOption',
        'advancedBetHighOnBet',
        'CjSEn',
        'pCDIJ',
        'ekwmK',
        '#advancedBetHigh',
        'iGbxf',
        '7060FTAMvF',
        'OKQoK',
        'RaKED',
        'DHWaq',
        'SOQwn',
        'UZAbV',
        '4|1|0|2|3|5',
        'chance',
        'fEldT',
        'IuiME',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'bzqaV',
        'UbeUO',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        '\x20bet',
        'mzYvJ',
        'hEweP',
        'stopOnBalanceCheck',
        'xAZRn',
        '\x0a\x20\x20\x20\x20profit=',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        '4|1|2|3|0',
        'YyPDK',
        'wdbShowMode',
        'Betting\x20',
        'advancedChance',
        'fgfIy',
        'NakCa',
        'wiBmJ',
        'stopOnProfit',
        'display',
        'download',
        'getElementById',
        'querySelector',
        'RAcxT',
        'advancedStopOnBetsCheck',
        'toUTCString',
        'CDyQi',
        'wdbWrapLicenseBox',
        'xkzXc',
        'khtMg',
        '$1=$1/$2\x20',
        'jynok',
        'MbAje',
        'floor',
        'qcNwx',
        'ZDDkF',
        'HJLjB',
        'jwJnJ',
        'JqtGt',
        'dark1',
        'Chance2',
        'erKHk',
        'advancedStopRollNumberCheck',
        'mEUle',
        'ISpNT',
        'VlOYH',
        'advancedChanceOnWinCheck',
        'ZVodh',
        'resize',
        'clientX',
        'hGTIF',
        'LALEc',
        'hUNsy',
        'querySelectorAll',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'NPJJv',
        'XYnmD',
        'darkMode',
        'advancedBetHighOnLoseCheck',
        'ocTNM',
        'akFpL',
        '1|3|4|2|0',
        'BmOjK',
        'updateStats\x20ok',
        'TprFa',
        'return\x20chance2',
        'replace',
        'mQext',
        'advancedBetHighOnProfit',
        'KQIIA',
        'Giptt',
        'fGRUP',
        'keydown',
        'SYfaU',
        'LgBly',
        'setValue',
        'wdbSpeed',
        'tLqhV',
        'Xbrgr',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'target',
        'bMVoD',
        '190px',
        'return\x20nextbet',
        'mHZzz',
        'lGJjw',
        'nonce',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        '#000',
        'Chance4',
        'nwvWr',
        'NkdSH',
        'expires=',
        'dTPjM',
        'Stop\x20on\x20profit\x20',
        'advancedBaseBet',
        'voawl',
        'kBAdq',
        'wdbBalance',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        'wdbHeader',
        'brqIl',
        'rHFwo',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'getValue',
        '\x20win',
        'BuNZx',
        'offsetHeight',
        'wdbScriptBoxLUA',
        'wdbStats',
        'Nfgsc',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'LcsbU',
        'nlOlD',
        'wdbStopOnWinButton',
        '\x0a\x20\x20\x20\x20chance4=',
        'result',
        '/canvasjs.min.js',
        'closest',
        'JWthn',
        'advancedStopOnLose',
        'vNLYv',
        'HfoAF',
        'setItem',
        'advancedMultiOnWinBets',
        'nsVXp',
        'remove',
        'KUnVZ',
        '\x0a\x20\x20\x20\x20previousbet=',
        'onmouseup',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'play',
        'MSEgD',
        '\x0a\x20\x20\x20\x20minprofit=',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'wdbMenuCoin',
        'jKdyj',
        '\x20|\x20',
        'advancedChanceOnLoseCheck',
        'dxuns',
        'xXFar',
        'fromTextArea',
        'wdbRunningScript',
        'body',
        'toFixed',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'hBgoW',
        'advancedMultiOnLose',
        'Target',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'response',
        'OIMGM',
        'XEWOK',
        'nSjcV',
        '\x0a\x20\x20\x20\x20bethigh=',
        'start',
        'IstSp',
        'log-',
        'color',
        'wdbPercentWagered',
        '106105GDcBzo',
        '9DjxMeX',
        'zCKrZ',
        'hTsbu',
        'Profit',
        'Kxmwl',
        'files',
        'lCoGt',
        'head',
        'advancedStopOnWins',
        'KuQuM',
        'XojsZ',
        'advancedStopRollNumber',
        'none',
        'pCqBj',
        'CWdwk',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'chance1=',
        'return\x20chance1',
        'TNsaV',
        'children',
        'advancedBetHighOnWinCheck',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'TmzOH',
        'iSlLa',
        'Stop\x20on\x20balance\x20',
        'dISMi',
        'tzAdi',
        'light1',
        'chance1',
        'default',
        'stopOnBalance',
        'MFIKn',
        'aQgDV',
        'QpnzM',
        'Jekhy',
        'PFQWd',
        'profit',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'lJnzK',
        'return\x20scriptname',
        'maxRows',
        'OONTl',
        'Aldyn',
        'calc(100vh\x20-\x2060px)',
        'AhoVh',
        'MqpHf',
        '\x20Hits',
        'xfBKP',
        'uYiyw',
        'scriptname\x20=\x20\x22\x22',
        'hWtyG',
        'not\x20',
        'advancedStopOnLoseCheck',
        'between2',
        'NnCNc',
        'loadCSS',
        'handleAdvanced\x20ok',
        'EUost',
        'wdbMaxRows',
        '_maxRows',
        'wdbResumeButton',
        'white',
        'jjDcL',
        'wdbWrapTips',
        'wdbWrapFunctions',
        'deleteH',
        'wdbLoader\x20ok',
        'hKpwo',
        'BetSide',
        'aYJEh',
        'setTime',
        'wdbHighWinStreak',
        'NQALY',
        'chance3',
        'lineColor',
        'toUpperCase',
        'chart',
        'INPUT',
        '5px',
        'ZXMSQ',
        'lJspO',
        'XQXpj',
        'pkqBe',
        'xhpON',
        'wdbProfit',
        'Phlvz',
        'PPUaZ',
        'wdbWrapInitializing',
        'TKCgV',
        'tMKtB',
        '\x0a\x20\x20\x20\x20win=',
        'borderColor',
        'lua',
        'vjXwM',
        'SSaJp',
        'PGbUH',
        'createElement',
        'return\x20plinkoRisk',
        'innerHTML',
        'advanced',
        'oTizX',
        'wdb',
        '253106XyvmbG',
        'checked',
        'EUeuh',
        'dTNoY',
        '#ffc0cb',
        'resetstatsOnProfitCheck',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'wdbPercentProfit',
        'oduiU',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'EiZbt',
        'ZoacG',
        'HKMIz',
        'bEmQQ',
        'pbNFL',
        'CFLuS',
        'kMLcW',
        'wdbHighBet',
        'offsetWidth',
        'iRVuL',
        'XXKdJ',
        'eqpVA',
        '2|7|1|6|4|5|3|0',
        'oKOik',
        '\x0a\x20\x20\x20\x20minbalance=',
        'YBjKT',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'wdbLog',
        'aLKVE',
        'nqEsI',
        '380px',
        'Mode',
        'KOtkI',
        'advancedChanceOnLose',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'capitalize',
        'red',
        'wdbJSMode',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'puLFP',
        'wnHCP',
        '%\x20chance\x20to\x20win,\x20',
        'DaLol',
        'gVdNr',
        'dhBZF',
        'KsRie',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'Stop\x20on\x20',
        'wUYvD',
        'parse',
        'wdbMenuMode',
        'startsWith',
        'style',
        'jUnKo',
        'getComputedStyle',
        'innerWidth',
        'chance4',
        'advancedBetHighOnWin',
        'etvQi',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'wdbWrapLog',
        'rJtsy',
        '3|6|1|2|9|8|0|4|5|7',
        'dimgray',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'getTime',
        'toLowerCase',
        'QrLSr',
        'NxaXi',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'hide',
        'javascript',
        'GhGho',
        'TEXTAREA',
        'key',
        'Uloap',
        'ntPIw',
        'now',
        'vGLyJ',
        'GMdwp',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        '\x20lose',
        'nWSDS',
        '$1=$1-$2\x20',
        'xrGcU',
        '\x0a\x20\x20\x20\x20balance=',
        'wdb-bot-position',
        'CgtDr',
        'TAxux',
        'oDrwn',
        '#91f190',
        'rnjbx',
        'blGyJ',
        'lsPJz',
        '/ching.mp3',
        'wdbScriptBoxJS',
        'imIov',
        'HzRRh',
        'black',
        'tpssL',
        'onmousedown',
        'EAlxY',
        'advancedBetHighOnBetCheck',
        'stringify',
        'wdbMinBalance',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'advancedBetHighOnProfitCheck',
        'MJhtJ',
        'AyZVN',
        'NGiwE',
        'fixed',
        'aePkz',
        'XuKGL',
        'nxqVl',
        'dvaIb',
        'text',
        'UBsNL',
        'QEnay',
        'wdbWrap',
        'slice',
        'zmOUg',
        'XdcCH',
        'TAHdO',
        'round',
        'advancedChanceOnLoseBets',
        'left',
        'NKxbR',
        'ORLkl',
        '11878864YuQaux',
        'Stop\x20on\x20current\x20streak\x20',
        'message',
        'lcNSz',
        'Hkbzh',
        'nekPm',
        'XLqzK',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'vqfIU',
        'UTrln',
        'wdbToggleMinimal',
        'HdWFw',
        'wdbTime',
        '#2a2a2a',
        'wXaQn',
        'xqsLB',
        'clientY',
        'www.',
        'push',
        '8908YtVQlP',
        '1000px',
        'GPJZY',
        'oVwIa',
        'flex',
        'Chance1',
        'bethigh',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'Script\x20Name:\x20',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'return\x20chance',
        '1543913xzJCYB',
        '<td>',
        'Functions',
        'UbuDT',
        '\x0a\x20\x20\x20\x20losses=',
        'gbshr',
        'Ayrko',
        'iTXUX',
        'xoOmc',
        'updateChart',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'FtenC',
        'preventDefault',
        '2316DENxZk',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'darcula',
        'wdbChart',
        'yfXpw',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'initLuaOk',
        'oYzae',
        'advancedStopOnWinsCheck',
        'wdbMaxProfit',
        'SuIlW',
        'ZAclY',
        'bzaFV',
        'wdbOpenJSScript',
        'oxFho',
        'tWYIL',
        'FLYfD',
        '0.00',
        'between',
        'BazIE',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'rpTxw',
        'aBuxU',
        'top',
        'SnCVq',
        'offsetLeft',
        'load',
        'wdbLUAMode',
        'iZNwF',
        'wdbWagered',
        '22527BxnXuH',
        'ZupzE',
        'cwSHv',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'wdbWins',
        'sMXUF',
        '/fengari-web.min.js',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'return\x20kenoRisk',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'ypfhi',
        'ILkrM',
        'MoWop',
        'dMnwo',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        'gOaQc',
        'wdbHighLoseStreak',
        'stop',
        'zHCzc',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'map',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'advancedStopAfterStreak',
        'eemqj',
        'addEventListener',
        'DmcIR',
        'KYjqM',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'wdbWrapHistory',
        'IMcXP',
        '.json',
        'then',
        'appendChild',
        'YYepd',
        'Tips',
        'vvgAa',
        'PVWjQ',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'CLUEN',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'MIKUe',
        'CWZIW',
        'uFpMv',
        'rangedice',
        'wdbOpenLUAScript',
        'uDyUN',
        'activeElement',
        'crJPy',
        'cmRhg',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'mYsPb',
        'change',
        'ksUbO',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'EHGrw',
        '24398pvFevr',
        'LtsAg',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'NTbWE',
        'IToKG',
        'substring',
        '<option\x20value=\x22',
        'idTFS',
        'uHGeI',
        'kBuMW',
        'ykySv',
        'NnECm',
        'bEcGn',
        'jCyvX',
        'jiEjv',
        'wdbCurrentStreak',
        'hostname',
        '\x0a\x20\x20\x20\x20losestreak=',
        'gLtnx',
        'advancedChanceOnWin',
        'aPjdz',
        'stopOnProfitCheck',
        'dataPoints',
        'firstChild',
        'YwVQq',
        'chance2',
        'value',
        '20244DXsbtc',
        'xztBv',
        'Jmazk',
        'advancedMultiOnWinCheck',
        'lrOoN',
        'wdbShow',
        'dgrbN',
        'wdbHighLose',
        'return\x20bethigh',
        'forEach',
        'laDQZ',
        'PkFpR',
        'length',
        'betSide',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'showInfo\x20OK',
        'doNrv',
        'roll',
        'dps',
        'FGmDV',
        'qlzab',
        'containerId',
        'gSeGQ',
        'pKNzd',
        'Viwgn',
        'idPtg',
        'dobet()',
        'createUIOk',
        'Ycgip',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'PWzjo',
        'xANlh',
        'mHfpM',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'Efsby',
        'lNAeE',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'Chart',
        'ZoqPA',
        'offsetTop',
        'XKOhF',
        'BnUmG',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'advancedMultiOnLoseBets',
        'CTFSf',
        '\x20to\x20win,\x20',
        'cbIoe',
        'qOqCa',
        'innerText',
        'ZQrdA',
        'WDBScript',
        'WJRrT',
        'lfrZI',
        'options',
        'htiqQ',
        'UwsQr',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'dice',
        'hHGUy',
        'wdbWrapControl',
        'render',
        'HWvqK',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'backgroundColor',
        'hzhkt',
        'wdbToggleLive',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'yOZbu',
        'LPUXi',
        'XHpLX',
        'pOkfG',
        'amount',
        'insertBefore',
        'wdbMain',
        'QFgNX',
        'resetstatsOnProfit',
        'createObjectURL',
        'cZWKY',
        'URL',
        'Yjmfv',
        'split',
        'trim',
        'FSnFz',
        'gSNQB',
        'removeChild',
        'PRPIA',
        'wdbStartButton',
        'vKfXO',
        'egPkO',
        'currency=\x22',
        'NPZLX',
        'return\x20chance4',
        'reset',
        'LJnZS',
        'clear',
        'oDeWS',
        'zVEHg',
        'disabled',
        '0|2|3|1|4',
        'hqVAw',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        '#fff',
        'keno',
        'bINui',
        'high',
        'wdbToggleShow',
        'wdbBets',
        'KaDov',
        'QCXYP',
        'div',
        '\x0a\x20\x20\x20\x20chance=',
        'wdbFooter',
        'FxJNs',
        'ntGkg',
        'antiquewhite',
        'quJTt',
        'position',
        'qEvSx',
        'VVLxB',
        'PHxca',
        'data',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'VCNnm',
        'Aqxhu',
        'isTio',
        '_darkMode',
        'wdbMinProfit',
        '0123456789abcdef',
        'click',
        'nDzZo',
        'return\x20currency',
        'tagName',
        '0123456789',
        'low',
        'lastChild',
        'innerHeight',
        'uZEDl',
        'VJPdS',
        'Wkouf',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'iGlbN',
        'script',
        'line',
        'SdLNc',
        'wdbMaxBalance',
        'bzwFt',
        'NZwEv',
        'ZZFwF',
        'wdbLosses',
        'XmqPx',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'wTTPH',
        'PcQUp',
        '\x0a\x20\x20\x20\x20chance3=',
        'charAt',
        '#wdbHistory',
        'EPSILON',
        'block',
        'height',
        'OhGLR',
        'sDdeX',
        '</option>',
        'getItem',
        'uigcI',
        'theme',
        'kVMXP',
        'IFgMk',
        'Axupo',
        'plinko',
        'loadScript',
        'sPebz',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'PWDTD',
        'MAjHU',
        'bZrUa',
        'toString',
        'gspCu',
        'yRLfa',
        'Connected',
        'pWqWn',
        'filter',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        '\x20at\x20',
        'advancedMultiOnWin',
        'advancedChanceOnWinBets',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'yyvKs',
        '\x0a\x20\x20\x20\x20winstreak=',
        'rows',
        'vrAGM',
        'BnyoM',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        '114oEsACJ',
        'ILmgR',
        'show',
        'green',
        'Nonce',
        '0:0:0:0',
        'event',
        'HGhaV',
        'bDnNz',
        'wfAin',
        'mHgak',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'eyQWb',
        'width',
        'Tcwsb',
        'lXXKQ'
    ];
    _0x458c = function () {
        return _0x3b7032;
    };
    return _0x458c();
}
function loadSavedPosition() {
    const _0x5e6ce1 = _0x301a80, _0x3a3a9e = { 'MJhtJ': _0x5e6ce1(0x236) }, _0x4897c9 = localStorage[_0x5e6ce1(0x39e)](_0x3a3a9e[_0x5e6ce1(0x24b)]);
    if (_0x4897c9)
        try {
            const _0x5d3cb8 = JSON[_0x5e6ce1(0x211)](_0x4897c9);
            _0x5d3cb8[_0x5e6ce1(0x2a3)] && _0x5d3cb8[_0x5e6ce1(0x25d)] && (previousPosition = _0x5d3cb8);
        } catch (_0x3ac1cf) {
        }
}
function savePosition() {
    const _0x16fced = _0x301a80, _0xf68447 = { 'lsPJz': _0x16fced(0x236) };
    localStorage[_0x16fced(0x45b)](_0xf68447[_0x16fced(0x23d)], JSON[_0x16fced(0x247)](previousPosition));
}
function toggleMinimalBot(_0x37949b) {
    const _0x3ce12d = _0x301a80, _0xe8424f = {
            'YwVQq': _0x3ce12d(0x345),
            'dvaIb': _0x3ce12d(0x36b),
            'zmOUg': _0x3ce12d(0x1df),
            'mHfpM': '5px',
            'iZNwF': _0x3ce12d(0x24e),
            'rHFwo': function (_0x3d4e94) {
                return _0x3d4e94();
            },
            'NZwEv': 'none',
            'Rzgia': '350px',
            'OKQoK': function (_0x3c970a, _0x423439) {
                return _0x3c970a / _0x423439;
            },
            'JWthn': _0x3ce12d(0x4ac),
            'yDXiF': 'block',
            'jKdyj': _0x3ce12d(0x274)
        }, _0x5cf552 = document[_0x3ce12d(0x3f5)](_0xe8424f[_0x3ce12d(0x2f9)]), _0x541ed8 = document['getElementById'](_0xe8424f[_0x3ce12d(0x252)]), _0x53aa14 = document[_0x3ce12d(0x3f5)](_0xe8424f[_0x3ce12d(0x258)]);
    if (_0x37949b[_0x3ce12d(0x32c)] === '▼') {
        const _0x58f451 = window[_0x3ce12d(0x216)](_0x53aa14);
        previousPosition = {
            'top': _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x2a3)] || _0x58f451[_0x3ce12d(0x2a3)] || _0x3ce12d(0x1c8),
            'left': _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x25d)] || _0x58f451['left'] || _0xe8424f[_0x3ce12d(0x31c)],
            'position': _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x370)] || _0x58f451['position'] || _0xe8424f[_0x3ce12d(0x2a8)]
        }, _0xe8424f[_0x3ce12d(0x446)](savePosition), _0x5cf552[_0x3ce12d(0x214)][_0x3ce12d(0x3f3)] = _0xe8424f[_0x3ce12d(0x38e)], _0x541ed8['style'][_0x3ce12d(0x3f3)] = _0xe8424f['NZwEv'], _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x3c9)] = _0xe8424f['Rzgia'];
        const _0x450fc6 = window[_0x3ce12d(0x217)], _0x2ef77d = 0x15e, _0x1fa112 = _0xe8424f[_0x3ce12d(0x3d5)](_0x450fc6 - _0x2ef77d, 0x2);
        _0x53aa14[_0x3ce12d(0x214)]['top'] = _0xe8424f[_0x3ce12d(0x457)], _0x53aa14[_0x3ce12d(0x214)]['left'] = _0x1fa112 + 'px', _0x53aa14[_0x3ce12d(0x214)]['position'] = _0x3ce12d(0x24e), _0x37949b[_0x3ce12d(0x32c)] = '▲';
    } else
        _0x5cf552[_0x3ce12d(0x214)]['display'] = _0x3ce12d(0x399), _0x541ed8['style'][_0x3ce12d(0x3f3)] = _0xe8424f['yDXiF'], _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x3c9)] = _0xe8424f[_0x3ce12d(0x468)], _0x53aa14['style'][_0x3ce12d(0x2a3)] = previousPosition[_0x3ce12d(0x2a3)], _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x25d)] = previousPosition[_0x3ce12d(0x25d)], _0x53aa14[_0x3ce12d(0x214)][_0x3ce12d(0x370)] = previousPosition[_0x3ce12d(0x370)], _0x37949b['innerText'] = '▼';
}
function toggleHideControlBot(_0x2c3eb9) {
    const _0x4da849 = _0x301a80, _0x5cfa17 = {
            'XmqPx': _0x4da849(0x337),
            'NKxbR': function (_0x1c5249, _0x41a6fa) {
                return _0x1c5249 === _0x41a6fa;
            },
            'furnO': 'none',
            'IIYUd': _0x4da849(0x277)
        }, _0x4d8388 = document[_0x4da849(0x3f5)](_0x5cfa17[_0x4da849(0x391)]);
    _0x5cfa17[_0x4da849(0x25e)](_0x2c3eb9[_0x4da849(0x32c)], '▲') ? (_0x4d8388['style'][_0x4da849(0x3f3)] = _0x5cfa17['furnO'], _0x2c3eb9[_0x4da849(0x32c)] = '▼') : (_0x4d8388['style'][_0x4da849(0x3f3)] = _0x5cfa17['IIYUd'], _0x2c3eb9['innerText'] = '▲');
}
function drawSelectCoin() {
    const _0x4fd644 = _0x301a80, _0x4c9053 = {
            'XQXpj': function (_0xfe032a, _0x12b7dc) {
                return _0xfe032a(_0x12b7dc);
            }
        }, _0x427e67 = coins[_0x4fd644(0x2be)](_0x50dcdc => _0x4fd644(0x2e7) + _0x50dcdc + '\x22>' + _0x50dcdc + _0x4fd644(0x39d))['join']('');
    document[_0x4fd644(0x3f5)](_0x4fd644(0x467))['innerHTML'] = _0x427e67, currency = _0x4c9053[_0x4fd644(0x1cb)](String, coin)[_0x4fd644(0x222)](), fengari['load'](_0x4fd644(0x355) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x106df7 = _0x301a80, _0x882a12 = {
            'KsRie': function (_0x5e1a34, _0x32246a) {
                return _0x5e1a34 - _0x32246a;
            },
            'PHxca': function (_0x1966dd, _0x23e7ed) {
                return _0x1966dd - _0x23e7ed;
            },
            'QpnzM': function (_0x463a78, _0x378997) {
                return _0x463a78 + _0x378997;
            },
            'SYfaU': _0x106df7(0x26a),
            'iTXUX': function (_0x343e6a, _0x12000f) {
                return _0x343e6a === _0x12000f;
            },
            'doNrv': function (_0x291016) {
                return _0x291016();
            },
            'ksUbO': function (_0x31416f, _0x2fb04b) {
                return _0x31416f === _0x2fb04b;
            },
            'nwvWr': _0x106df7(0x1c7),
            'TExJk': function (_0x1f835f, _0x3656c3) {
                return _0x1f835f === _0x3656c3;
            },
            'xkzXc': _0x106df7(0x229),
            'HWvqK': '.CodeMirror',
            'XCdSY': function (_0x24c6be, _0x74c2a) {
                return _0x24c6be / _0x74c2a;
            },
            'isTio': function (_0x33e473, _0xfc32fc) {
                return _0x33e473 - _0xfc32fc;
            },
            'idTFS': function (_0xa3d8ab, _0x34851b) {
                return _0xa3d8ab / _0x34851b;
            },
            'QnwSY': function (_0x357246, _0x5afcee) {
                return _0x357246 + _0x5afcee;
            },
            'ILmgR': function (_0x4c5877, _0x584769) {
                return _0x4c5877 + _0x584769;
            },
            'kMLcW': function (_0x2ef36a, _0x50d443) {
                return _0x2ef36a === _0x50d443;
            },
            'LGyDT': function (_0x432683, _0x13be5e) {
                return _0x432683 / _0x13be5e;
            },
            'tpssL': _0x106df7(0x369),
            'voawl': _0x106df7(0x256),
            'KcQug': _0x106df7(0x444),
            'gdRuM': _0x106df7(0x428),
            'SSaJp': _0x106df7(0x3fb),
            'UbeUO': _0x106df7(0x1d1),
            'MbAje': _0x106df7(0x49e),
            'hGTIF': _0x106df7(0x1d6),
            'Hrxlo': _0x106df7(0x23f),
            'uFpMv': _0x106df7(0x227),
            'dgrbN': 'wdbJSMode',
            'TNsaV': _0x106df7(0x48d),
            'hBgoW': 'wdbAdvancedMode',
            'jCyvX': _0x106df7(0x21c),
            'etvQi': 'wdbWrapVariables',
            'lcNSz': _0x106df7(0x1b9),
            'oxFho': _0x106df7(0x3ec),
            'XojsZ': 'wdbOpenLUAScript',
            'hqVAw': 'click',
            'oYzae': _0x106df7(0x2dd),
            'YBjKT': 'wdbOpenJSScript',
            'RAcxT': _0x106df7(0x28f),
            'dISMi': _0x106df7(0x317)
        }, _0x3ee4fd = document[_0x106df7(0x1da)](_0x882a12[_0x106df7(0x243)]);
    _0x3ee4fd['id'] = _0x882a12[_0x106df7(0x440)], _0x3ee4fd[_0x106df7(0x1dc)] = wdbUI, document[_0x106df7(0x46f)]['prepend'](_0x3ee4fd);
    const _0x5813fd = document[_0x106df7(0x3f5)](_0x106df7(0x1df));
    let _0x1d203e = 0x0, _0x3ade25 = 0x0, _0x18a14d = 0x0, _0x296020 = 0x0;
    _0x882a12[_0x106df7(0x30c)](loadSavedPosition), _0x5813fd['style'][_0x106df7(0x2a3)] = previousPosition['top'], _0x5813fd[_0x106df7(0x214)][_0x106df7(0x25d)] = previousPosition['left'], _0x5813fd[_0x106df7(0x214)][_0x106df7(0x370)] = previousPosition[_0x106df7(0x370)];
    function _0x2457bc(_0x15131c) {
        const _0x5b43ae = _0x106df7;
        _0x15131c = _0x15131c || window[_0x5b43ae(0x3c2)], _0x15131c[_0x5b43ae(0x28b)](), _0x18a14d = _0x15131c['clientX'], _0x296020 = _0x15131c[_0x5b43ae(0x270)], document[_0x5b43ae(0x461)] = _0x9313a8, document['onmousemove'] = _0x458b89;
    }
    function _0x458b89(_0x5a777e) {
        const _0xe6824a = _0x106df7;
        _0x5a777e = _0x5a777e || window['event'], _0x5a777e['preventDefault'](), _0x1d203e = _0x882a12[_0xe6824a(0x20d)](_0x18a14d, _0x5a777e['clientX']), _0x3ade25 = _0x882a12[_0xe6824a(0x373)](_0x296020, _0x5a777e[_0xe6824a(0x270)]), _0x18a14d = _0x5a777e[_0xe6824a(0x411)], _0x296020 = _0x5a777e['clientY'];
        let _0x3f3253 = _0x882a12[_0xe6824a(0x20d)](_0x5813fd[_0xe6824a(0x323)], _0x3ade25), _0x4b4d88 = _0x5813fd[_0xe6824a(0x2a5)] - _0x1d203e;
        _0x5813fd[_0xe6824a(0x214)][_0xe6824a(0x2a3)] = _0x3f3253 + 'px', _0x5813fd[_0xe6824a(0x214)][_0xe6824a(0x25d)] = _0x882a12[_0xe6824a(0x4a2)](_0x4b4d88, 'px');
    }
    function _0x9313a8() {
        const _0x37a150 = _0x106df7, _0x2b141e = document[_0x37a150(0x3f5)](_0x882a12[_0x37a150(0x429)]);
        if (_0x2b141e && _0x882a12[_0x37a150(0x286)](_0x2b141e[_0x37a150(0x32c)], '▼')) {
            const _0x542ab2 = window['getComputedStyle'](_0x5813fd);
            previousPosition[_0x37a150(0x2a3)] = _0x5813fd[_0x37a150(0x214)][_0x37a150(0x2a3)] || _0x542ab2['top'], previousPosition[_0x37a150(0x25d)] = _0x5813fd[_0x37a150(0x214)][_0x37a150(0x25d)] || _0x542ab2[_0x37a150(0x25d)], _0x882a12[_0x37a150(0x30c)](savePosition);
        }
        document[_0x37a150(0x461)] = null, document['onmousemove'] = null;
    }
    document[_0x106df7(0x3f5)](_0x882a12['KcQug'])[_0x106df7(0x244)] = _0x2457bc, document[_0x106df7(0x2c2)](_0x882a12['gdRuM'], function (_0x164b4f) {
        const _0x37f9dc = _0x106df7;
        if (_0x882a12[_0x37f9dc(0x286)](_0x164b4f[_0x37f9dc(0x22a)][_0x37f9dc(0x222)](), 'w')) {
            const _0x227591 = document[_0x37f9dc(0x2d8)], _0x4fbffa = _0x882a12[_0x37f9dc(0x2de)](_0x227591[_0x37f9dc(0x37f)], _0x882a12[_0x37f9dc(0x43a)]) || _0x882a12['TExJk'](_0x227591[_0x37f9dc(0x37f)], _0x882a12[_0x37f9dc(0x3fc)]) || _0x227591['isContentEditable'] || _0x227591[_0x37f9dc(0x456)](_0x882a12[_0x37f9dc(0x339)]);
            if (!_0x4fbffa) {
                const _0x3bc9b5 = _0x882a12['XCdSY'](_0x882a12[_0x37f9dc(0x378)](window[_0x37f9dc(0x383)], _0x5813fd[_0x37f9dc(0x44b)]), 0x2), _0x1cce91 = _0x882a12[_0x37f9dc(0x2e8)](window[_0x37f9dc(0x217)] - _0x5813fd[_0x37f9dc(0x1f2)], 0x2);
                _0x5813fd[_0x37f9dc(0x214)][_0x37f9dc(0x2a3)] = _0x882a12['QnwSY'](_0x3bc9b5, 'px'), _0x5813fd[_0x37f9dc(0x214)][_0x37f9dc(0x25d)] = _0x882a12[_0x37f9dc(0x3bd)](_0x1cce91, 'px');
                const _0x389c28 = document['getElementById'](_0x882a12[_0x37f9dc(0x429)]);
                _0x389c28 && _0x882a12[_0x37f9dc(0x286)](_0x389c28[_0x37f9dc(0x32c)], '▼') && (previousPosition[_0x37f9dc(0x2a3)] = _0x5813fd[_0x37f9dc(0x214)][_0x37f9dc(0x2a3)], previousPosition[_0x37f9dc(0x25d)] = _0x5813fd[_0x37f9dc(0x214)][_0x37f9dc(0x25d)], savePosition());
            }
        }
    }), window['addEventListener'](_0x106df7(0x410), function () {
        const _0x32ff18 = _0x106df7, _0x542262 = document[_0x32ff18(0x3f5)](_0x882a12[_0x32ff18(0x429)]);
        if (_0x542262 && _0x882a12[_0x32ff18(0x1f0)](_0x542262[_0x32ff18(0x32c)], '▲')) {
            const _0x48bb43 = window[_0x32ff18(0x217)], _0x5a7e48 = 0x15e, _0x576200 = _0x882a12['LGyDT'](_0x48bb43 - _0x5a7e48, 0x2);
            _0x5813fd[_0x32ff18(0x214)][_0x32ff18(0x25d)] = _0x882a12['QpnzM'](_0x576200, 'px');
        }
    });
    if (document['getElementById'](_0x882a12[_0x106df7(0x1d8)]))
        document['getElementById'](_0x106df7(0x3fb))['remove']();
    if (document[_0x106df7(0x3f5)](_0x882a12['UbeUO']))
        document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x3e1)])[_0x106df7(0x45e)]();
    luaEditor = CodeMirror[_0x106df7(0x46d)](document[_0x106df7(0x3f5)](_0x106df7(0x44c)), {
        'theme': _0x882a12[_0x106df7(0x400)],
        'mode': _0x882a12[_0x106df7(0x412)],
        'lineNumbers': !![]
    }), luaEditor['save'](), jsEditor = CodeMirror[_0x106df7(0x46d)](document[_0x106df7(0x3f5)](_0x882a12['Hrxlo']), {
        'theme': _0x882a12[_0x106df7(0x400)],
        'mode': _0x882a12[_0x106df7(0x2d4)],
        'lineNumbers': !![]
    }), jsEditor['save'](), document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x302)])[_0x106df7(0x214)][_0x106df7(0x3f3)] = _0x882a12[_0x106df7(0x493)], document['getElementById'](_0x882a12[_0x106df7(0x472)])[_0x106df7(0x214)][_0x106df7(0x3f3)] = _0x882a12[_0x106df7(0x493)], document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x2ee)])['style'][_0x106df7(0x3f3)] = _0x106df7(0x48d), document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x21a)])['style'][_0x106df7(0x3f3)] = _0x882a12[_0x106df7(0x493)], document[_0x106df7(0x3f5)](_0x106df7(0x1ba))[_0x106df7(0x214)]['display'] = _0x106df7(0x48d), document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x263)])[_0x106df7(0x214)][_0x106df7(0x3f3)] = _0x882a12[_0x106df7(0x493)], document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x29a)])['disabled'] = !![];
    const _0x504b69 = document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x48b)]);
    _0x504b69[_0x106df7(0x2c2)](_0x882a12[_0x106df7(0x35f)], () => {
        _0x504b69['value'] = null;
    }), _0x504b69[_0x106df7(0x2c2)](_0x882a12[_0x106df7(0x293)], async _0x587811 => {
        const _0x482b0e = _0x106df7, _0x43e459 = await new Response(_0x587811[_0x482b0e(0x430)][_0x482b0e(0x486)][0x0])[_0x482b0e(0x253)]();
        if (!_0x43e459)
            return;
        luaEditor[_0x482b0e(0x42b)](_0x43e459);
    });
    const _0x6469d8 = document[_0x106df7(0x3f5)](_0x882a12[_0x106df7(0x1f9)]);
    return _0x6469d8[_0x106df7(0x2c2)](_0x882a12[_0x106df7(0x35f)], () => {
        const _0xfb8541 = _0x106df7;
        _0x6469d8[_0xfb8541(0x2fb)] = null;
    }), _0x6469d8[_0x106df7(0x2c2)](_0x106df7(0x2dd), async _0x41f17b => {
        const _0x26b6e8 = _0x106df7, _0x196b83 = await new Response(_0x41f17b[_0x26b6e8(0x430)][_0x26b6e8(0x486)][0x0])[_0x26b6e8(0x253)]();
        if (!_0x196b83)
            return;
        jsEditor[_0x26b6e8(0x42b)](_0x196b83);
    }), chart = new Chart(_0x882a12[_0x106df7(0x3f7)], ![], 0x64), _0x882a12[_0x106df7(0x49a)];
}
async function wdbLoader(_0x2a873a) {
    const _0x300415 = _0x301a80, _0xf8d2c8 = {
            'uDyUN': _0x300415(0x3bb),
            'gZzcu': _0x300415(0x30a),
            'XuKGL': _0x300415(0x447),
            'SuIlW': _0x300415(0x326),
            'brqIl': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
            'dxnVy': function (_0x2cc309, _0x1387a6) {
                return _0x2cc309 + _0x1387a6;
            },
            'ARCAy': _0x300415(0x2b0),
            'mzYvJ': function (_0x5520b7, _0x57bb32) {
                return _0x5520b7 + _0x57bb32;
            },
            'TbDLp': _0x300415(0x455),
            'tzAdi': function (_0x132802, _0x4e523e) {
                return _0x132802(_0x4e523e);
            },
            'PYRXg': function (_0x358055) {
                return _0x358055();
            },
            'IaBdB': 'rangedice',
            'uigcI': _0x300415(0x1fa),
            'PVWjQ': _0x300415(0x362),
            'oVwIa': _0x300415(0x3ae),
            'tWYIL': _0x300415(0x1bc)
        }, _0x2e636f = [
            _0xf8d2c8[_0x300415(0x2d7)],
            _0xf8d2c8['gZzcu'],
            _0xf8d2c8[_0x300415(0x250)],
            _0xf8d2c8[_0x300415(0x296)],
            _0xf8d2c8[_0x300415(0x445)],
            _0xf8d2c8['dxnVy'](WDB_LIB, _0xf8d2c8['ARCAy']),
            _0xf8d2c8[_0x300415(0x3e4)](WDB_LIB, _0xf8d2c8['TbDLp'])
        ], _0x55767e = [
            _0x300415(0x471),
            _0x300415(0x334)
        ];
    for (const _0x48bea6 of _0x2e636f) {
        await _0x2a873a[_0x300415(0x3a5)](_0x48bea6);
    }
    for (const _0x308d45 of _0x55767e) {
        await _0x2a873a[_0x300415(0x1b1)](_0x308d45);
    }
    await _0xf8d2c8[_0x300415(0x49b)](beforeWork, _0x2a873a), await _0xf8d2c8['PYRXg'](wdbCreateUI), await getListCoin(), await initLua();
    if (game === _0xf8d2c8['IaBdB'])
        luaEditor[_0x300415(0x42b)](rangediceLuaScript), jsEditor[_0x300415(0x42b)](rangediceJsScript), document[_0x300415(0x3f6)](_0xf8d2c8[_0x300415(0x39f)])[_0x300415(0x35d)] = !![];
    else {
        if (game === _0x300415(0x3a4))
            luaEditor[_0x300415(0x42b)](plinkoLuaScript), jsEditor[_0x300415(0x42b)](plinkoJsScript), document[_0x300415(0x3f6)](_0xf8d2c8[_0x300415(0x39f)])[_0x300415(0x35d)] = !![];
        else
            game === _0xf8d2c8[_0x300415(0x2ce)] && (luaEditor[_0x300415(0x42b)](kenoLuaScript), jsEditor[_0x300415(0x42b)](kenoJsScript), document['querySelector'](_0xf8d2c8[_0x300415(0x39f)])[_0x300415(0x35d)] = !![]);
    }
    return log(_0xf8d2c8[_0x300415(0x276)]), _0xf8d2c8[_0x300415(0x29b)];
}
function toggleNav(_0xc60106) {
    const _0x1e7804 = _0x301a80, _0xabdd10 = {
            'CWZIW': function (_0x1cb11b, _0x4562d9) {
                return _0x1cb11b === _0x4562d9;
            },
            'LNGtO': _0x1e7804(0x48d),
            'FLYfD': _0x1e7804(0x1ff),
            'hWtyG': 'Log',
            'lUFQI': _0x1e7804(0x281),
            'QEnay': _0x1e7804(0x2cc)
        }, _0x138869 = [
            _0xabdd10[_0x1e7804(0x29c)],
            _0xabdd10[_0x1e7804(0x1ac)],
            'Variables',
            _0xabdd10['lUFQI'],
            _0xabdd10[_0x1e7804(0x255)]
        ];
    _0x138869[_0x1e7804(0x305)](_0x52dac1 => {
        const _0x27688e = _0x1e7804, _0x1ff95e = _0xabdd10['CWZIW'](_0x52dac1[_0x27688e(0x222)](), _0xc60106) ? 'block' : _0xabdd10['LNGtO'];
        document[_0x27688e(0x3f5)]('wdbWrap' + _0x52dac1)[_0x27688e(0x214)][_0x27688e(0x3f3)] = _0x1ff95e, document[_0x27688e(0x3f5)](_0x27688e(0x301) + _0x52dac1)[_0x27688e(0x35d)] = _0xabdd10[_0x27688e(0x2d3)](_0x1ff95e, _0x27688e(0x399));
    });
}
function toggleShow(_0x4cab00) {
    const _0x52f180 = _0x301a80, _0x5da543 = {
            'cmRhg': function (_0x1ba5dc, _0x30daba) {
                return _0x1ba5dc + _0x30daba;
            }
        }, _0x56b163 = document[_0x52f180(0x3f5)](_0x52f180(0x365) + _0x5da543[_0x52f180(0x2da)](_0x4cab00['charAt'](0x0)[_0x52f180(0x1c5)](), _0x4cab00[_0x52f180(0x257)](0x1)))[_0x52f180(0x1e1)];
    selectFunction(_0x56b163 ? _0x52f180(0x3be) + _0x4cab00 : _0x52f180(0x226) + _0x4cab00);
}
function toggleLive(_0x700dd2) {
    const _0x5d9255 = _0x301a80, _0x47ec9b = {
            'Jekhy': function (_0x87ec74, _0x4683d6) {
                return _0x87ec74(_0x4683d6);
            }
        }, _0x5e51c2 = document[_0x5d9255(0x3f5)](_0x5d9255(0x33d) + (_0x700dd2[_0x5d9255(0x396)](0x0)[_0x5d9255(0x1c5)]() + _0x700dd2[_0x5d9255(0x257)](0x1)))[_0x5d9255(0x1e1)];
    _0x47ec9b[_0x5d9255(0x4a3)](selectFunction, '' + (_0x5e51c2 ? _0x5d9255(0x47b) : 'stop') + _0x700dd2);
}
function selectFunction(_0x1a7f20) {
    const _0x54b07f = _0x301a80, _0x55400c = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x54b07f(0x358)),
            'resethistory': () => toggleHistory(_0x54b07f(0x35a)),
            'resetlog': () => toggleLog(_0x54b07f(0x35a)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x54b07f(0x2bb)),
            'startchart': () => toggleChart(_0x54b07f(0x47b)),
            'stophistory': () => toggleHistory(_0x54b07f(0x2bb)),
            'starthistory': () => toggleHistory(_0x54b07f(0x47b)),
            'stoplog': () => toggleLog(_0x54b07f(0x2bb)),
            'startlog': () => toggleLog('start'),
            'hidestats': () => toggleStats(_0x54b07f(0x226)),
            'showstats': () => toggleStats(_0x54b07f(0x3be)),
            'hidechart': () => toggleChart(_0x54b07f(0x226)),
            'showchart': () => toggleChart(_0x54b07f(0x3be)),
            'hidehistory': () => toggleHistory('hide'),
            'showhistory': () => toggleHistory(_0x54b07f(0x3be))
        };
    if (_0x55400c[_0x1a7f20])
        _0x55400c[_0x1a7f20]();
}
function toggleMode(_0x7790a5) {
    const _0xf23737 = _0x301a80, _0x2d24b3 = {
            'HGhaV': function (_0x605c4b, _0x2a130f) {
                return _0x605c4b === _0x2a130f;
            },
            'AhLwX': _0xf23737(0x2d5),
            'ntGkg': function (_0x313206, _0x5c2509) {
                return _0x313206 === _0x5c2509;
            },
            'HKMIz': _0xf23737(0x2a7),
            'mEUle': _0xf23737(0x205),
            'Qzmyg': 'wdbAdvancedMode',
            'nxqVl': function (_0x1cbff4, _0x42a0e4) {
                return _0x1cbff4 === _0x42a0e4;
            },
            'PkFpR': _0xf23737(0x1d6),
            'VCNnm': _0xf23737(0x399),
            'HJLjB': function (_0x45ec5c, _0x18aa82) {
                return _0x45ec5c === _0x18aa82;
            },
            'khtMg': 'advanced'
        };
    mode = _0x7790a5;
    if (_0x2d24b3[_0xf23737(0x3c3)](game, _0x2d24b3['AhLwX']))
        luaEditor['setValue'](rangediceLuaScript), jsEditor[_0xf23737(0x42b)](rangediceJsScript);
    else {
        if (_0x2d24b3[_0xf23737(0x36d)](game, _0xf23737(0x3a4)))
            luaEditor[_0xf23737(0x42b)](plinkoLuaScript), jsEditor[_0xf23737(0x42b)](plinkoJsScript);
        else
            game === _0xf23737(0x362) && (luaEditor[_0xf23737(0x42b)](kenoLuaScript), jsEditor[_0xf23737(0x42b)](kenoJsScript));
    }
    const _0x5da706 = document[_0xf23737(0x3f5)](_0x2d24b3[_0xf23737(0x1ec)]), _0x3ec6b5 = document['getElementById'](_0x2d24b3[_0xf23737(0x40b)]), _0x292263 = document['getElementById'](_0x2d24b3['Qzmyg']);
    _0x5da706[_0xf23737(0x214)][_0xf23737(0x3f3)] = _0x2d24b3[_0xf23737(0x251)](_0x7790a5, _0x2d24b3[_0xf23737(0x307)]) ? _0xf23737(0x399) : 'none', _0x3ec6b5[_0xf23737(0x214)][_0xf23737(0x3f3)] = _0x7790a5 === 'js' ? _0x2d24b3['VCNnm'] : 'none', _0x292263['style'][_0xf23737(0x3f3)] = _0x2d24b3[_0xf23737(0x404)](_0x7790a5, _0x2d24b3[_0xf23737(0x3fd)]) ? _0x2d24b3[_0xf23737(0x376)] : 'none', luaEditor['deleteH'](), jsEditor[_0xf23737(0x1bb)]();
}
function toggleStats(_0x520852) {
    const _0x152e48 = _0x301a80, _0x1da470 = {
            'xfBKP': function (_0x48ad8a, _0xb78f8d) {
                return _0x48ad8a === _0xb78f8d;
            },
            'gIKKP': _0x152e48(0x48d),
            'ypfhi': _0x152e48(0x44d)
        }, _0x2e1bbf = _0x1da470[_0x152e48(0x4b0)](_0x520852, _0x152e48(0x226)) ? _0x1da470['gIKKP'] : _0x152e48(0x277);
    document[_0x152e48(0x3f5)](_0x1da470[_0x152e48(0x2b4)])[_0x152e48(0x214)][_0x152e48(0x3f3)] = _0x2e1bbf;
}
function toggleChart(_0x2d01e7) {
    const _0x3d4c6b = _0x301a80, _0x1214b8 = {
            'yyvKs': _0x3d4c6b(0x28f),
            'wjQdu': _0x3d4c6b(0x2c6),
            'VZOZl': _0x3d4c6b(0x226),
            'GhGho': _0x3d4c6b(0x48d),
            'YgfmE': '380px',
            'EiZbt': _0x3d4c6b(0x3be),
            'Jmazk': 'block',
            'KYjqM': _0x3d4c6b(0x432),
            'sDdeX': 'start',
            'BwIIw': _0x3d4c6b(0x358)
        }, _0x354527 = document[_0x3d4c6b(0x3f5)](_0x1214b8[_0x3d4c6b(0x3b6)]), _0x22026a = document[_0x3d4c6b(0x3f5)](_0x1214b8['wjQdu']);
    switch (_0x2d01e7) {
    case _0x1214b8['VZOZl']:
        _0x354527[_0x3d4c6b(0x214)]['display'] = _0x1214b8[_0x3d4c6b(0x228)], _0x22026a[_0x3d4c6b(0x214)][_0x3d4c6b(0x39a)] = _0x1214b8['YgfmE'];
        break;
    case _0x1214b8[_0x3d4c6b(0x1ea)]:
        _0x354527[_0x3d4c6b(0x214)][_0x3d4c6b(0x3f3)] = _0x1214b8[_0x3d4c6b(0x2fe)], _0x22026a['style']['height'] = _0x1214b8[_0x3d4c6b(0x2c4)];
        break;
    case _0x3d4c6b(0x2bb):
        stopChart = !![];
        break;
    case _0x1214b8[_0x3d4c6b(0x39c)]:
        stopChart = ![];
        break;
    case _0x1214b8['BwIIw']:
        betsChart = 0x0, profitChart = 0x0, chart['resetChart']();
        break;
    }
}
function toggleHistory(_0x2629e8) {
    const _0x1e844a = _0x301a80, _0x58c0e7 = {
            'vKfXO': 'wdbHistory',
            'NTbWE': _0x1e844a(0x28f),
            'ZZFwF': _0x1e844a(0x226),
            'nWSDS': _0x1e844a(0x48d),
            'LALEc': _0x1e844a(0x1fe),
            'xztBv': _0x1e844a(0x3be),
            'ZVodh': 'stop',
            'vUJMi': 'clear'
        }, _0x54eb17 = document[_0x1e844a(0x3f5)](_0x58c0e7[_0x1e844a(0x353)]), _0x438d65 = document[_0x1e844a(0x3f5)](_0x58c0e7[_0x1e844a(0x2e4)]);
    switch (_0x2629e8) {
    case _0x58c0e7[_0x1e844a(0x38f)]:
        _0x54eb17[_0x1e844a(0x214)][_0x1e844a(0x3f3)] = _0x58c0e7[_0x1e844a(0x232)], _0x438d65['style'][_0x1e844a(0x39a)] = _0x58c0e7[_0x1e844a(0x413)];
        break;
    case _0x58c0e7[_0x1e844a(0x2fd)]:
        _0x54eb17[_0x1e844a(0x214)][_0x1e844a(0x3f3)] = 'block', _0x438d65['style'][_0x1e844a(0x39a)] = '190px';
        break;
    case _0x58c0e7[_0x1e844a(0x40f)]:
        stopHistory = !![];
        break;
    case _0x1e844a(0x47b):
        stopHistory = ![];
        break;
    case _0x58c0e7['vUJMi']:
        _0x54eb17[_0x1e844a(0x1dc)] = '';
        break;
    }
}
function toggleLog(_0x930b6b) {
    const _0x31b679 = _0x301a80, _0x4b6385 = {
            'idPtg': _0x31b679(0x2bb),
            'fVPst': 'start',
            'fEldT': 'clear',
            'uUDHj': 'wdbLog'
        };
    switch (_0x930b6b) {
    case _0x4b6385[_0x31b679(0x315)]:
        stopLog = !![];
        break;
    case _0x4b6385['fVPst']:
        stopLog = ![];
        break;
    case _0x4b6385[_0x31b679(0x3dc)]:
        document['getElementById'](_0x4b6385['uUDHj'])[_0x31b679(0x1dc)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x469dc5 = _0x301a80, _0x257a36 = {
            'bINui': _0x469dc5(0x3ee),
            'cwSHv': _0x469dc5(0x40e),
            'IFgMk': function (_0x13ca29, _0x4ad9d6) {
                return _0x13ca29(_0x4ad9d6);
            },
            'XljmB': _0x469dc5(0x2f4),
            'OIMGM': function (_0x3a3900, _0x33cb74) {
                return _0x3a3900(_0x33cb74);
            },
            'jjDcL': _0x469dc5(0x3b4),
            'FGmDV': _0x469dc5(0x25c),
            'fgOXN': _0x469dc5(0x2ff),
            'DaLol': _0x469dc5(0x3b3),
            'bzaFV': function (_0x106331, _0x1a2984) {
                return _0x106331(_0x1a2984);
            },
            'jynok': _0x469dc5(0x45c),
            'IstSp': 'advancedMultiOnLoseCheck',
            'rJtsy': function (_0x269a2a, _0x1eb63f) {
                return _0x269a2a(_0x1eb63f);
            },
            'oTizX': _0x469dc5(0x473),
            'aQgDV': _0x469dc5(0x327),
            'lfrZI': _0x469dc5(0x246),
            'wnHCP': _0x469dc5(0x3ce),
            'zfLeI': function (_0x55c530, _0x1cb885) {
                return _0x55c530 === _0x1cb885;
            },
            'QuMxk': function (_0x30ea81, _0x4079e3) {
                return _0x30ea81 % _0x4079e3;
            },
            'Efsby': _0x469dc5(0x24a),
            'XHpLX': function (_0x5099c6, _0x33ee13) {
                return _0x5099c6 >= _0x33ee13;
            },
            'fGRUP': _0x469dc5(0x1e5),
            'xAZRn': _0x469dc5(0x347),
            'quJTt': function (_0x33a605, _0x2ebfb2) {
                return _0x33a605(_0x2ebfb2);
            },
            'hTsbu': _0x469dc5(0x48c),
            'thXJc': function (_0x24addf, _0x13a83c) {
                return _0x24addf === _0x13a83c;
            },
            'IMcXP': function (_0x3559f9) {
                return _0x3559f9();
            },
            'TmzOH': function (_0x82721d, _0x44f96c) {
                return _0x82721d + _0x44f96c;
            },
            'wfAin': 'Stop\x20on\x20roll\x20number\x20',
            'LJnZS': 'advancedStopAfterStreakCheck',
            'ILkrM': _0x469dc5(0x2c0),
            'eyQWb': function (_0x3ef5c0, _0x2a02) {
                return _0x3ef5c0 > _0x2a02;
            },
            'zHCzc': function (_0x3b15f5, _0x10e3ac) {
                return _0x3b15f5 >= _0x10e3ac;
            },
            'hKpwo': _0x469dc5(0x261),
            'iRVuL': function (_0x3de790, _0x426d57) {
                return _0x3de790 <= _0x426d57;
            },
            'SnCVq': function (_0x11b80e, _0xe64b29) {
                return _0x11b80e(_0xe64b29);
            },
            'NGiwE': _0x469dc5(0x3f8),
            'hEweP': function (_0x68146a, _0x239548) {
                return _0x68146a(_0x239548);
            },
            'IuiME': 'advancedStopOnBets',
            'iGbxf': function (_0xe96ee6, _0x2db5be) {
                return _0xe96ee6 + _0x2db5be;
            },
            'ZoacG': _0x469dc5(0x20f),
            'nDzZo': _0x469dc5(0x3e3),
            'vNLYv': _0x469dc5(0x294),
            'tLqhV': _0x469dc5(0x489),
            'NkdSH': function (_0x517642, _0x3ea6de) {
                return _0x517642(_0x3ea6de);
            },
            'gSNQB': function (_0x3a65e6, _0x3d2aed) {
                return _0x3a65e6 + _0x3d2aed;
            },
            'fcWpP': _0x469dc5(0x449),
            'MqpHf': _0x469dc5(0x1ae),
            'SEqNY': function (_0x5c0475, _0x514ff2) {
                return _0x5c0475(_0x514ff2);
            },
            'WHaRb': _0x469dc5(0x458),
            'PcQUp': _0x469dc5(0x2f6),
            'Viwgn': function (_0x4faf70, _0x2c1264) {
                return _0x4faf70(_0x2c1264);
            },
            'iVEfs': function (_0x40ccd7, _0x3d8d64) {
                return _0x40ccd7 >= _0x3d8d64;
            },
            'pKNzd': function (_0x533b75, _0x36b4b7) {
                return _0x533b75 + _0x36b4b7;
            },
            'RAlXX': _0x469dc5(0x43e),
            'aLKVE': _0x469dc5(0x3e6),
            'Nfgsc': function (_0x5236c9, _0x3b621e) {
                return _0x5236c9(_0x3b621e);
            },
            'BnyoM': _0x469dc5(0x49f),
            'IToKG': function (_0x2871b4, _0x490258) {
                return _0x2871b4 >= _0x490258;
            },
            'ocTNM': function (_0x536ad2, _0x5b798d) {
                return _0x536ad2 + _0x5b798d;
            },
            'lrOoN': _0x469dc5(0x499),
            'ZoqPA': _0x469dc5(0x219),
            'YDXDh': function (_0x282502, _0x2603b6) {
                return _0x282502 === _0x2603b6;
            },
            'nsVXp': function (_0x474b22, _0x6e54d7) {
                return _0x474b22 % _0x6e54d7;
            },
            'yfXpw': function (_0x55f555, _0x15120d) {
                return _0x55f555 === _0x15120d;
            },
            'sYIAq': function (_0x5e826f, _0x5072de) {
                return _0x5e826f % _0x5072de;
            },
            'lJnzK': function (_0x37a0b3, _0x46e9ad) {
                return _0x37a0b3 * _0x46e9ad;
            },
            'VJPdS': function (_0x25f3ce, _0x563061) {
                return _0x25f3ce(_0x563061);
            },
            'iGlbN': function (_0x24a443, _0x11b136) {
                return _0x24a443 === _0x11b136;
            },
            'SBkGM': function (_0x57d536, _0xc4762b) {
                return _0x57d536 % _0xc4762b;
            },
            'mlPDn': function (_0x5dd93e, _0x55e3b3) {
                return _0x5dd93e === _0x55e3b3;
            }
        };
    chance = Number(document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x363)])['value']);
    const _0x5de6ba = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x2ac)])[_0x469dc5(0x1e1)], _0x3a8382 = _0x5de6ba ? _0x257a36[_0x469dc5(0x3a2)](Number, document[_0x469dc5(0x3f5)](_0x257a36['XljmB'])[_0x469dc5(0x2fb)]) : chance, _0x56201b = _0x257a36[_0x469dc5(0x477)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x1b8)])[_0x469dc5(0x2fb)]), _0x166d09 = document['getElementById'](_0x469dc5(0x46a))['checked'], _0x4aa13e = _0x166d09 ? _0x257a36[_0x469dc5(0x477)](Number, document['getElementById'](_0x469dc5(0x201))[_0x469dc5(0x2fb)]) : chance, _0xc77da0 = _0x257a36[_0x469dc5(0x3a2)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x30f)])[_0x469dc5(0x2fb)]), _0x536f5d = document[_0x469dc5(0x3f5)](_0x257a36['fgOXN'])[_0x469dc5(0x1e1)], _0xcbeec4 = _0x536f5d ? _0x257a36[_0x469dc5(0x3a2)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x20a)])[_0x469dc5(0x2fb)]) : 0x1, _0x368a21 = _0x257a36['bzaFV'](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x3ff)])[_0x469dc5(0x2fb)]), _0x1b7ffc = document['getElementById'](_0x257a36[_0x469dc5(0x47c)])[_0x469dc5(0x1e1)], _0xbc5946 = _0x1b7ffc ? _0x257a36['rJtsy'](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x1de)])[_0x469dc5(0x2fb)]) : 0x1, _0x478c71 = Number(document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x4a1)])[_0x469dc5(0x2fb)]), _0x2847b8 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x330)])[_0x469dc5(0x1e1)];
    if (_0x2847b8) {
        const _0x419050 = _0x257a36[_0x469dc5(0x298)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x208)])['value']);
        if (_0x257a36['zfLeI'](_0x257a36['QuMxk'](bets, _0x419050), 0x0))
            bethigh = !bethigh;
    }
    const _0x1e6d44 = document['getElementById'](_0x257a36[_0x469dc5(0x31e)])['checked'];
    if (_0x1e6d44) {
        const _0x1b30e9 = Number(document[_0x469dc5(0x3f5)](_0x469dc5(0x424))['value']);
        if (_0x257a36['XHpLX'](profit, _0x1b30e9))
            bethigh = !bethigh;
    }
    const _0x5c57fa = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x427)])['checked'];
    if (_0x5c57fa) {
        const _0x58ad99 = Number(document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x3e7)])[_0x469dc5(0x2fb)]);
        if (_0x257a36[_0x469dc5(0x341)](profit, _0x58ad99))
            resetstats();
    }
    const _0x1817bc = document[_0x469dc5(0x3f5)](_0x469dc5(0x40a))[_0x469dc5(0x1e1)];
    if (_0x1817bc) {
        const _0x40841b = _0x257a36['quJTt'](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x483)])[_0x469dc5(0x2fb)]);
        if (_0x257a36['thXJc'](lastBet[_0x469dc5(0x454)], _0x40841b))
            _0x257a36[_0x469dc5(0x2c7)](stop), _0x257a36[_0x469dc5(0x3a2)](log, _0x257a36[_0x469dc5(0x497)](_0x257a36[_0x469dc5(0x3c5)], _0x40841b));
    }
    const _0x2b2fb8 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x359)])['checked'];
    if (_0x2b2fb8) {
        const _0x4531a4 = _0x257a36[_0x469dc5(0x36f)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x2b5)])['value']);
        if (_0x257a36[_0x469dc5(0x3c8)](_0x4531a4, 0x0)) {
            if (_0x257a36['zHCzc'](currentstreak, _0x4531a4))
                _0x257a36[_0x469dc5(0x2c7)](stop), _0x257a36[_0x469dc5(0x21d)](log, _0x257a36[_0x469dc5(0x497)](_0x257a36[_0x469dc5(0x1bd)], _0x4531a4));
        } else {
            if (_0x257a36[_0x469dc5(0x1f3)](currentstreak, _0x4531a4))
                _0x257a36[_0x469dc5(0x2c7)](stop), _0x257a36[_0x469dc5(0x2a4)](log, _0x257a36[_0x469dc5(0x497)](_0x257a36[_0x469dc5(0x1bd)], _0x4531a4));
        }
    }
    const _0x39bdf4 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x24d)])[_0x469dc5(0x1e1)];
    if (_0x39bdf4) {
        const _0x3d7f97 = _0x257a36[_0x469dc5(0x3e5)](Number, document['getElementById'](_0x257a36[_0x469dc5(0x3dd)])['value']);
        if (_0x257a36[_0x469dc5(0x2bc)](bets, _0x3d7f97))
            stop(), log(_0x257a36[_0x469dc5(0x3d3)](_0x257a36['iGbxf'](_0x257a36[_0x469dc5(0x1eb)], _0x3d7f97), _0x257a36[_0x469dc5(0x37d)]));
    }
    const _0x188745 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x459)])[_0x469dc5(0x1e1)];
    if (_0x188745) {
        const _0x2fcb70 = _0x257a36['OIMGM'](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x42d)])['value']);
        if (_0x257a36[_0x469dc5(0x341)](winstreak, _0x2fcb70))
            _0x257a36[_0x469dc5(0x2c7)](stop), _0x257a36[_0x469dc5(0x43b)](log, _0x257a36[_0x469dc5(0x3d3)](_0x257a36[_0x469dc5(0x34f)](_0x469dc5(0x20f), _0x2fcb70), _0x257a36['fcWpP']));
    }
    const _0x3100ab = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x4ae)])[_0x469dc5(0x1e1)];
    if (_0x3100ab) {
        const _0x34d91c = _0x257a36['SEqNY'](Number, document[_0x469dc5(0x3f5)](_0x257a36['WHaRb'])[_0x469dc5(0x2fb)]);
        if (losestreak >= _0x34d91c)
            _0x257a36[_0x469dc5(0x2c7)](stop), log(_0x257a36[_0x469dc5(0x1eb)] + _0x34d91c + _0x469dc5(0x231));
    }
    const _0x5412c9 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x394)])[_0x469dc5(0x1e1)];
    if (_0x5412c9) {
        const _0x51248f = _0x257a36[_0x469dc5(0x314)](Number, document['getElementById'](_0x469dc5(0x3f2))[_0x469dc5(0x2fb)]);
        if (_0x257a36['iVEfs'](profit, _0x51248f))
            _0x257a36[_0x469dc5(0x2c7)](stop), log(_0x257a36[_0x469dc5(0x313)](_0x257a36['RAlXX'], _0x51248f));
    }
    const _0x4e7402 = document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x1fc)])[_0x469dc5(0x1e1)];
    if (_0x4e7402) {
        const _0x233516 = _0x257a36[_0x469dc5(0x44e)](Number, document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x3ba)])['value']);
        if (_0x257a36[_0x469dc5(0x2e5)](balance, _0x233516))
            _0x257a36['IMcXP'](stop), log(_0x257a36[_0x469dc5(0x41b)](_0x257a36[_0x469dc5(0x300)], _0x233516));
    }
    if (win) {
        const _0x442b92 = document[_0x469dc5(0x3f5)](_0x469dc5(0x495))['checked'];
        if (_0x442b92) {
            const _0x3e2973 = Number(document[_0x469dc5(0x3f5)](_0x257a36[_0x469dc5(0x322)])['value']);
            if (_0x257a36['YDXDh'](_0x257a36['QuMxk'](winstreak, _0x3e2973), 0x0))
                bethigh = !bethigh;
        }
        if (_0x257a36[_0x469dc5(0x45d)](winstreak, _0x56201b) === 0x0)
            chance = _0x3a8382;
        if (_0x536f5d) {
            if (_0x257a36[_0x469dc5(0x290)](_0x257a36['sYIAq'](winstreak, _0x368a21), 0x0))
                nextbet = _0x257a36[_0x469dc5(0x4a7)](previousbet, _0xcbeec4);
        } else
            nextbet = basebet;
    } else {
        const _0x2e85e1 = document[_0x469dc5(0x3f5)](_0x469dc5(0x41a))['checked'];
        if (_0x2e85e1) {
            const _0x366b1d = _0x257a36[_0x469dc5(0x385)](Number, document[_0x469dc5(0x3f5)]('advancedBetHighOnLose')[_0x469dc5(0x2fb)]);
            if (_0x257a36[_0x469dc5(0x388)](_0x257a36['SBkGM'](losestreak, _0x366b1d), 0x0))
                bethigh = !bethigh;
        }
        if (_0x257a36['SBkGM'](losestreak, _0xc77da0) === 0x0)
            chance = _0x4aa13e;
        if (_0x1b7ffc) {
            if (_0x257a36['mlPDn'](_0x257a36['SBkGM'](losestreak, _0x478c71), 0x0))
                nextbet = _0x257a36[_0x469dc5(0x4a7)](previousbet, _0xbc5946);
        } else
            nextbet = basebet;
    }
    return _0x469dc5(0x1b2);
}
function changeCoin() {
    const _0x3db31e = _0x301a80, _0x162dd5 = {
            'CWdwk': function (_0x5b9947) {
                return _0x5b9947();
            }
        };
    coin = document[_0x3db31e(0x3f5)]('wdbMenuCoin')[_0x3db31e(0x2fb)], currency = coin[_0x3db31e(0x222)](), fengari[_0x3db31e(0x2a6)]('currency=\x22' + currency + '\x22')(), _0x162dd5[_0x3db31e(0x48f)](checkbalance);
}
async function handleStats() {
    const _0x2d123b = _0x301a80, _0x19fa87 = {
            'uYiyw': function (_0x4bf949) {
                return _0x4bf949();
            },
            'XdcCH': function (_0x1d5ec8, _0x39456a) {
                return _0x1d5ec8 === _0x39456a;
            },
            'pOkfG': _0x2d123b(0x1dd),
            'TKCgV': function (_0x4a90ef) {
                return _0x4a90ef();
            },
            'EUeuh': function (_0x4a3b1c) {
                return _0x4a3b1c();
            },
            'CTFSf': function (_0x58d666, _0x3960c2) {
                return _0x58d666(_0x3960c2);
            },
            'bMVoD': _0x2d123b(0x2d5),
            'UZABP': _0x2d123b(0x21e),
            'lNAeE': function (_0x1408ed, _0x39bbf7) {
                return _0x1408ed === _0x39bbf7;
            },
            'NQALY': _0x2d123b(0x335),
            'wcMgk': _0x2d123b(0x3a4),
            'wibxd': _0x2d123b(0x362),
            'eemqj': function (_0x47c923, _0x1e7d3c) {
                return _0x47c923 > _0x1e7d3c;
            },
            'ISpNT': _0x2d123b(0x29e),
            'KQIIA': function (_0x32034c, _0x2ccf41) {
                return _0x32034c > _0x2ccf41;
            },
            'Ayrko': function (_0x4be5c8, _0xf59e0) {
                return _0x4be5c8 < _0xf59e0;
            },
            'mYsPb': 'outside',
            'sMXUF': function (_0x1f5e9b, _0xdc3fab) {
                return _0x1f5e9b > _0xdc3fab;
            },
            'CLUEN': function (_0x588fc7, _0x2c69bb) {
                return _0x588fc7 || _0x2c69bb;
            },
            'swLsL': _0x2d123b(0x3ea),
            'MAjHU': _0x2d123b(0x3bf),
            'Aqxhu': function (_0x2fd365, _0x567761) {
                return _0x2fd365 > _0x567761;
            },
            'kBAdq': function (_0x244b75, _0x50baa5) {
                return _0x244b75 > _0x50baa5;
            },
            'XKOhF': function (_0x2342a3) {
                return _0x2342a3();
            }
        }, _0x37b067 = Date[_0x2d123b(0x22d)]();
    speedHistory[_0x2d123b(0x272)](_0x37b067);
    const _0x1c4e7b = 0x2710;
    speedHistory = speedHistory['filter'](_0x2f1b2c => _0x37b067 - _0x2f1b2c <= _0x1c4e7b), bets++, lastBet['Roll'] = lastBet['roll'], lastBet[_0x2d123b(0x430)] = target, lastBet[_0x2d123b(0x474)] = target;
    if (game === _0x19fa87[_0x2d123b(0x431)]) {
        const _0x5c63d4 = _0x19fa87['UZABP'][_0x2d123b(0x34c)]('|');
        let _0x1aeecf = 0x0;
        while (!![]) {
            switch (_0x5c63d4[_0x1aeecf++]) {
            case '0':
                lastBet[_0x2d123b(0x218)] = chance4;
                continue;
            case '1':
                lastBet['chance2'] = chance2;
                continue;
            case '2':
                lastBet[_0x2d123b(0x408)] = chance2;
                continue;
            case '3':
                lastBet[_0x2d123b(0x49d)] = chance1;
                continue;
            case '4':
                lastBet[_0x2d123b(0x439)] = chance4;
                continue;
            case '5':
                lastBet['betSide'] = betSide;
                continue;
            case '6':
                lastBet[_0x2d123b(0x278)] = chance1;
                continue;
            case '7':
                lastBet[_0x2d123b(0x1be)] = betSide;
                continue;
            case '8':
                lastBet['Chance3'] = chance3;
                continue;
            case '9':
                lastBet['chance3'] = chance3;
                continue;
            }
            break;
        }
    }
    lastBet['result'] = result, lastBet['Result'] = result, lastBet[_0x2d123b(0x4a5)] = currentprofit, lastBet[_0x2d123b(0x484)] = currentprofit, lastBet[_0x2d123b(0x3c0)] = lastBet[_0x2d123b(0x436)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x19fa87[_0x2d123b(0x31f)](game, _0x19fa87[_0x2d123b(0x1c2)]))
        win = lastBet[_0x2d123b(0x279)] ? lastBet[_0x2d123b(0x454)] > lastBet[_0x2d123b(0x430)] : lastBet['result'] < lastBet[_0x2d123b(0x430)];
    else {
        if (_0x19fa87[_0x2d123b(0x31f)](game, _0x19fa87['wcMgk']) || game === _0x19fa87['wibxd'])
            win = _0x19fa87[_0x2d123b(0x2c1)](lastBet['profit'], 0x0);
        else {
            if (game === _0x19fa87['bMVoD']) {
                if (lastBet[_0x2d123b(0x309)] === _0x19fa87[_0x2d123b(0x40c)])
                    win = _0x19fa87[_0x2d123b(0x425)](lastBet[_0x2d123b(0x30d)], lastBet[_0x2d123b(0x49d)]) && _0x19fa87[_0x2d123b(0x285)](lastBet['roll'], lastBet[_0x2d123b(0x2fa)]);
                else {
                    if (_0x19fa87[_0x2d123b(0x259)](lastBet[_0x2d123b(0x309)], _0x19fa87[_0x2d123b(0x2dc)]))
                        win = _0x19fa87[_0x2d123b(0x285)](lastBet[_0x2d123b(0x30d)], lastBet[_0x2d123b(0x49d)]) || _0x19fa87[_0x2d123b(0x425)](lastBet[_0x2d123b(0x30d)], lastBet['chance2']);
                    else {
                        if (lastBet[_0x2d123b(0x309)] === _0x2d123b(0x1af)) {
                            const _0x9f5887 = _0x19fa87[_0x2d123b(0x2c1)](lastBet[_0x2d123b(0x30d)], lastBet[_0x2d123b(0x49d)]) && lastBet['roll'] < lastBet[_0x2d123b(0x2fa)], _0x464c25 = _0x19fa87[_0x2d123b(0x2af)](lastBet[_0x2d123b(0x30d)], lastBet['chance3']) && _0x19fa87['Ayrko'](lastBet[_0x2d123b(0x30d)], lastBet[_0x2d123b(0x218)]);
                            win = _0x19fa87[_0x2d123b(0x2d0)](_0x9f5887, _0x464c25);
                        }
                    }
                }
            } else
                win = lastBet['result'] >= lastBet[_0x2d123b(0x430)];
        }
    }
    if (win) {
        const _0x2d0130 = _0x19fa87['swLsL'][_0x2d123b(0x34c)]('|');
        let _0x830fec = 0x0;
        while (!![]) {
            switch (_0x2d0130[_0x830fec++]) {
            case '0':
                currentstreak = winstreak;
                continue;
            case '1':
                wins++;
                continue;
            case '2':
                winstreak++;
                continue;
            case '3':
                losestreak = 0x0;
                continue;
            case '4':
                color = _0x19fa87[_0x2d123b(0x3a9)];
                continue;
            }
            break;
        }
    } else {
        color = _0x2d123b(0x204), losses++, losestreak++, winstreak = 0x0, currentstreak = -losestreak;
        if (previousbet > maxLosseAmount)
            maxLosseAmount = previousbet;
    }
    if (nextbet > maxBetAmount)
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (_0x19fa87['sMXUF'](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (balance < minbalance)
        minbalance = balance;
    if (_0x19fa87[_0x2d123b(0x377)](balance, maxbalance))
        maxbalance = balance;
    if (profit < minprofit)
        minprofit = profit;
    if (_0x19fa87[_0x2d123b(0x441)](profit, maxprofit))
        maxprofit = profit;
    _0x19fa87[_0x2d123b(0x324)](showInfo)[_0x2d123b(0x2c9)](async () => {
        const _0x5d00dd = _0x2d123b;
        try {
            if (mode === _0x5d00dd(0x1d6))
                await _0x19fa87[_0x5d00dd(0x1aa)](updateLua);
            else {
                if (mode === 'js')
                    await dobet();
                else
                    _0x19fa87['XdcCH'](mode, _0x19fa87[_0x5d00dd(0x342)]) && await handleAdvanced();
            }
            if (win && sOW)
                _0x19fa87[_0x5d00dd(0x1aa)](stop);
            if (run)
                _0x19fa87[_0x5d00dd(0x1d2)](playBet);
        } catch (_0x1fbc35) {
            _0x19fa87[_0x5d00dd(0x1e2)](stop), _0x19fa87[_0x5d00dd(0x328)](log, _0x1fbc35);
        }
    });
}
async function showInfo() {
    const _0x4ebdd8 = _0x301a80, _0x1884e4 = {
            'wiBmJ': function (_0x1b2db8, _0x52d440) {
                return _0x1b2db8 === _0x52d440;
            },
            'wUYvD': 'white',
            'aPjdz': 'black',
            'jiEjv': _0x4ebdd8(0x204),
            'pbNFL': _0x4ebdd8(0x3bf),
            'UTrln': function (_0x47b599, _0x5a225f) {
                return _0x47b599 === _0x5a225f;
            },
            'gspCu': function (_0x277d8d, _0xf23c73) {
                return _0x277d8d < _0xf23c73;
            },
            'gLtnx': function (_0x50dd3e, _0x1a7ec2) {
                return _0x50dd3e > _0x1a7ec2;
            },
            'PPUaZ': function (_0x25b505, _0x3b1680) {
                return _0x25b505 > _0x3b1680;
            },
            'gSeGQ': _0x4ebdd8(0x2ba),
            'TAxux': 'wdbWagered',
            'Slmrd': _0x4ebdd8(0x442),
            'CgtDr': _0x4ebdd8(0x1ce),
            'dbAes': _0x4ebdd8(0x1f1),
            'TAHdO': _0x4ebdd8(0x303),
            'qlzab': _0x4ebdd8(0x366),
            'wTTPH': _0x4ebdd8(0x390),
            'kBuMW': _0x4ebdd8(0x2f0),
            'oduiU': _0x4ebdd8(0x1c1),
            'fgfIy': _0x4ebdd8(0x37a),
            'CjSEn': _0x4ebdd8(0x295),
            'FxJNs': function (_0x19f9d2, _0x2e12bf) {
                return _0x19f9d2 / _0x2e12bf;
            },
            'NRCvE': function (_0x2acaa9, _0x18375b) {
                return _0x2acaa9 * _0x18375b;
            },
            'egPkO': function (_0x1c88ab, _0x39c30d) {
                return _0x1c88ab(_0x39c30d);
            },
            'nMUcv': _0x4ebdd8(0x47f),
            'Kjiet': function (_0x222b1f, _0x5ee910) {
                return _0x222b1f / _0x5ee910;
            },
            'FSnFz': function (_0x49fb0b, _0x4b3e84) {
                return _0x49fb0b * _0x4b3e84;
            },
            'eqpVA': function (_0x25994c, _0x13a862) {
                return _0x25994c + _0x13a862;
            },
            'QFgNX': function (_0x2d1407, _0x3c15b1) {
                return _0x2d1407(_0x3c15b1);
            },
            'vjXwM': 'wdbWrapPercentProfit',
            'ZDDkF': _0x4ebdd8(0x1e7),
            'YyPDK': _0x4ebdd8(0x469),
            'hUNsy': function (_0x53b2bd, _0x36fa01) {
                return _0x53b2bd !== _0x36fa01;
            },
            'OhGLR': _0x4ebdd8(0x2d5),
            'nSjcV': function (_0x510c9a, _0x5dbca6) {
                return _0x510c9a === _0x5dbca6;
            },
            'gVdNr': _0x4ebdd8(0x3a4),
            'laDQZ': function (_0x5a19da, _0x4f7d6b) {
                return _0x5a19da + _0x4f7d6b;
            },
            'yMZOd': function (_0x4cf624, _0x5907ab) {
                return _0x4cf624 === _0x5907ab;
            },
            'ntPIw': function (_0x30f47a, _0x49fcf0) {
                return _0x30f47a(_0x49fcf0);
            },
            'TprFa': function (_0x18a50e, _0x39ac9b) {
                return _0x18a50e(_0x39ac9b);
            },
            'hzhkt': function (_0x39e47f, _0x5a240d) {
                return _0x39e47f + _0x5a240d;
            },
            'NPZLX': function (_0x5b1799, _0x21eb2b) {
                return _0x5b1799 + _0x21eb2b;
            },
            'Kxmwl': function (_0x1d7498, _0x359e7f) {
                return _0x1d7498 + _0x359e7f;
            },
            'cZWKY': function (_0x4bfa51, _0x334911) {
                return _0x4bfa51 + _0x334911;
            },
            'sfFZS': _0x4ebdd8(0x362),
            'UbuDT': _0x4ebdd8(0x4af),
            'UZAbV': function (_0x4df246, _0x64cdfb) {
                return _0x4df246(_0x64cdfb);
            },
            'xoOmc': _0x4ebdd8(0x23a),
            'zCKrZ': _0x4ebdd8(0x1e4),
            'bEmQQ': 'wdbHistory',
            'LcsbU': _0x4ebdd8(0x397),
            'puLFP': function (_0x176a5a, _0x316570) {
                return _0x176a5a(_0x316570);
            },
            'ykySv': function (_0x3e051d, _0x10074c) {
                return _0x3e051d !== _0x10074c;
            },
            'vrAGM': function (_0x53c7a8, _0x14326a) {
                return _0x53c7a8 === _0x14326a;
            },
            'rJDRE': function (_0x1d577b, _0x4e8ef4) {
                return _0x1d577b(_0x4e8ef4);
            },
            'PGbUH': function (_0x489e00, _0x1b3303) {
                return _0x489e00(_0x1b3303);
            },
            'bZrUa': function (_0x4ec112, _0x383f46) {
                return _0x4ec112 === _0x383f46;
            },
            'BuNZx': function (_0x19f774, _0x302978) {
                return _0x19f774 === _0x302978;
            },
            'VlOYH': _0x4ebdd8(0x30b)
        }, _0x1bbcd3 = _0x1884e4['wiBmJ'](profit, 0x0) ? darkMode ? _0x1884e4['wUYvD'] : _0x1884e4['aPjdz'] : profit < 0x0 ? _0x1884e4[_0x4ebdd8(0x2ef)] : _0x1884e4['pbNFL'], _0xe92b0e = _0x1884e4[_0x4ebdd8(0x269)](currentstreak, 0x0) ? darkMode ? _0x1884e4[_0x4ebdd8(0x210)] : _0x4ebdd8(0x242) : _0x1884e4[_0x4ebdd8(0x3ac)](currentstreak, 0x0) ? _0x1884e4[_0x4ebdd8(0x2ef)] : _0x4ebdd8(0x3bf), _0x5b3799 = _0x1884e4[_0x4ebdd8(0x2f3)](maxwinstreak, 0x0) ? _0x1884e4[_0x4ebdd8(0x1ee)] : _0x1884e4[_0x4ebdd8(0x2f5)], _0x50ca2b = _0x1884e4[_0x4ebdd8(0x1d0)](maxlosestreak, 0x0) ? 'red' : _0x4ebdd8(0x242);
    document[_0x4ebdd8(0x3f5)]('wdbHighWinStreak')[_0x4ebdd8(0x214)][_0x4ebdd8(0x47e)] = _0x5b3799, document[_0x4ebdd8(0x3f5)](_0x1884e4['gSeGQ'])['style'][_0x4ebdd8(0x47e)] = _0x50ca2b, document['getElementById'](_0x1884e4[_0x4ebdd8(0x238)])[_0x4ebdd8(0x32c)] = wagered['toFixed'](decimalAmountView), document['getElementById'](_0x1884e4['Slmrd'])[_0x4ebdd8(0x32c)] = balance['toFixed'](decimalAmountView), document['getElementById'](_0x1884e4[_0x4ebdd8(0x237)])[_0x4ebdd8(0x214)][_0x4ebdd8(0x47e)] = _0x1bbcd3, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x237)])[_0x4ebdd8(0x32c)] = profit[_0x4ebdd8(0x470)](decimalAmountView), document['getElementById'](_0x1884e4['dbAes'])[_0x4ebdd8(0x32c)] = maxBetAmount[_0x4ebdd8(0x470)](decimalAmountView), document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x25a)])[_0x4ebdd8(0x32c)] = maxLosseAmount[_0x4ebdd8(0x470)](decimalAmountView), document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x310)])['innerText'] = bets, document[_0x4ebdd8(0x3f5)]('wdbWins')[_0x4ebdd8(0x32c)] = wins, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x393)])[_0x4ebdd8(0x32c)] = losses, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x2ea)])[_0x4ebdd8(0x214)][_0x4ebdd8(0x47e)] = _0xe92b0e, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x2ea)])[_0x4ebdd8(0x32c)] = currentstreak, document['getElementById'](_0x1884e4[_0x4ebdd8(0x1e8)])[_0x4ebdd8(0x32c)] = maxwinstreak, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x312)])[_0x4ebdd8(0x32c)] = maxlosestreak, document[_0x4ebdd8(0x3f5)](_0x4ebdd8(0x248))[_0x4ebdd8(0x32c)] = minbalance[_0x4ebdd8(0x470)](decimalAmountView), document[_0x4ebdd8(0x3f5)](_0x4ebdd8(0x38c))[_0x4ebdd8(0x32c)] = maxbalance[_0x4ebdd8(0x470)](decimalAmountView), document['getElementById'](_0x1884e4[_0x4ebdd8(0x3ef)])[_0x4ebdd8(0x32c)] = minprofit[_0x4ebdd8(0x470)](decimalAmountView), document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x3cf)])['innerText'] = maxprofit['toFixed'](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x1884e4[_0x4ebdd8(0x36c)](Math[_0x4ebdd8(0x25b)](_0x1884e4['NRCvE'](percentWagered + Number['EPSILON'], 0x2710)), 0x2710), percentWagered = _0x1884e4[_0x4ebdd8(0x354)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x4ebdd8(0x3f5)](_0x1884e4['nMUcv'])[_0x4ebdd8(0x32c)] = percentWagered, percentProfit = profit / startBalance * 0x64, percentProfit = _0x1884e4['Kjiet'](Math[_0x4ebdd8(0x25b)](_0x1884e4[_0x4ebdd8(0x34e)](_0x1884e4[_0x4ebdd8(0x1f5)](percentProfit, Number[_0x4ebdd8(0x398)]), 0x2710)), 0x2710), percentProfit = _0x1884e4[_0x4ebdd8(0x346)](isNaN, percentProfit) ? 0x0 : percentProfit, document['getElementById'](_0x1884e4[_0x4ebdd8(0x1d7)])[_0x4ebdd8(0x214)][_0x4ebdd8(0x47e)] = _0x1bbcd3, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x403)])[_0x4ebdd8(0x32c)] = percentProfit;
    if (!stopHistory) {
        const _0x877830 = _0x1884e4[_0x4ebdd8(0x3f1)](game, _0x4ebdd8(0x335)) ? lastBet[_0x4ebdd8(0x279)] ? '>' : '<' : '>', _0x4421b4 = lastBet[_0x4ebdd8(0x279)] ? '<input\x20id=\x22bethigh' + bets + _0x4ebdd8(0x2d1) : '<input\x20id=\x22bethigh' + bets + _0x4ebdd8(0x33a), _0x586f58 = '' + (havePlinkoRows ? _0x1884e4[_0x4ebdd8(0x1f5)](plinkoRow, _0x1884e4[_0x4ebdd8(0x3eb)]) : '') + plinkoRisk, _0x542a24 = _0x4ebdd8(0x280) + bets + _0x4ebdd8(0x2cf) + _0x1884e4['QFgNX'](Number, lastBet[_0x4ebdd8(0x343)])[_0x4ebdd8(0x470)](decimalAmountView) + _0x4ebdd8(0x2cf) + (_0x1884e4[_0x4ebdd8(0x414)](game, _0x1884e4['OhGLR']) ? _0x4421b4 : betSide) + _0x4ebdd8(0x2cf) + (_0x1884e4[_0x4ebdd8(0x479)](game, _0x1884e4[_0x4ebdd8(0x20b)]) ? _0x586f58 : _0x1884e4[_0x4ebdd8(0x306)](Number(lastBet[_0x4ebdd8(0x3db)])['toFixed'](decimalChanceView), '%')) + _0x4ebdd8(0x2cf) + Number(lastBet[_0x4ebdd8(0x30d)])[_0x4ebdd8(0x470)](decimalChanceView) + _0x4ebdd8(0x20e) + Number(lastBet[_0x4ebdd8(0x4a5)])[_0x4ebdd8(0x470)](decimalAmountView) + _0x4ebdd8(0x2cf) + (game !== _0x1884e4[_0x4ebdd8(0x39b)] ? _0x1884e4[_0x4ebdd8(0x3f1)](game, _0x1884e4[_0x4ebdd8(0x20b)]) ? _0x586f58 : _0x1884e4['yMZOd'](game, 'keno') ? _0x1884e4[_0x4ebdd8(0x306)](_0x1884e4[_0x4ebdd8(0x22c)](Number, lastBet[_0x4ebdd8(0x430)])[_0x4ebdd8(0x470)](0x0), '\x20Balls') : _0x877830 + _0x1884e4[_0x4ebdd8(0x420)](Number, lastBet[_0x4ebdd8(0x430)])[_0x4ebdd8(0x470)](decimalTargetResult) : _0x1884e4[_0x4ebdd8(0x33c)](_0x1884e4[_0x4ebdd8(0x356)](_0x1884e4[_0x4ebdd8(0x485)](target1 + '|', target2), target3 ? _0x1884e4['cZWKY']('|', target3) : ''), target4 ? '|' + target4 : '')) + _0x4ebdd8(0x2cf) + (game === _0x1884e4['sfFZS'] ? _0x1884e4[_0x4ebdd8(0x356)](_0x1884e4[_0x4ebdd8(0x420)](Number, result)[_0x4ebdd8(0x470)](0x0), _0x1884e4[_0x4ebdd8(0x282)]) : _0x1884e4[_0x4ebdd8(0x3d9)](Number, result)[_0x4ebdd8(0x470)](decimalTargetResult)) + _0x4ebdd8(0x2cf) + lastBet['nonce'] + _0x4ebdd8(0x2cf) + lastBet['id'] + '</td>', _0x31692b = document[_0x4ebdd8(0x1da)]('tr');
        _0x31692b[_0x4ebdd8(0x214)][_0x4ebdd8(0x33b)] = win ? _0x1884e4[_0x4ebdd8(0x287)] : _0x1884e4[_0x4ebdd8(0x482)], _0x31692b[_0x4ebdd8(0x1dc)] = _0x542a24, document[_0x4ebdd8(0x3f5)](_0x1884e4[_0x4ebdd8(0x1ed)])[_0x4ebdd8(0x344)](_0x31692b, document['getElementById'](_0x1884e4[_0x4ebdd8(0x1ed)])[_0x4ebdd8(0x494)][0x0]);
        const _0x12be89 = document[_0x4ebdd8(0x3f6)](_0x1884e4[_0x4ebdd8(0x450)])[_0x4ebdd8(0x3b8)];
        if (_0x12be89[_0x4ebdd8(0x308)] > maxRows)
            document[_0x4ebdd8(0x3f6)](_0x1884e4[_0x4ebdd8(0x450)])[_0x4ebdd8(0x382)][_0x4ebdd8(0x45e)]();
    }
    const _0x3088d5 = '' + (havePlinkoRows ? _0x1884e4[_0x4ebdd8(0x349)](plinkoRow, _0x1884e4[_0x4ebdd8(0x3eb)]) : '') + plinkoRisk;
    return fullLogs[_0x4ebdd8(0x272)]({
        'game': game,
        'bets': bets,
        'amount': _0x1884e4[_0x4ebdd8(0x207)](Number, lastBet[_0x4ebdd8(0x343)])['toFixed'](decimalAmountView),
        'bethigh': _0x1884e4[_0x4ebdd8(0x2eb)](game, _0x1884e4[_0x4ebdd8(0x39b)]) ? lastBet[_0x4ebdd8(0x279)] : null,
        'chance': game !== _0x1884e4[_0x4ebdd8(0x39b)] ? Number(lastBet[_0x4ebdd8(0x3db)])['toFixed'](decimalChanceView) : lastBet[_0x4ebdd8(0x3db)],
        'target': game !== _0x1884e4[_0x4ebdd8(0x39b)] ? _0x1884e4[_0x4ebdd8(0x3b9)](game, _0x1884e4[_0x4ebdd8(0x20b)]) ? _0x3088d5 : lastBet[_0x4ebdd8(0x430)] : null,
        'roll': _0x1884e4['rJDRE'](Number, lastBet['roll'])[_0x4ebdd8(0x470)](decimalChanceView),
        'result': _0x1884e4[_0x4ebdd8(0x1d9)](Number, result)[_0x4ebdd8(0x470)](decimalTargetResult),
        'profit': _0x1884e4[_0x4ebdd8(0x1d9)](Number, lastBet[_0x4ebdd8(0x4a5)])[_0x4ebdd8(0x470)](decimalAmountView),
        'nonce': lastBet[_0x4ebdd8(0x436)],
        'id': lastBet['id'],
        'chance1': game === _0x1884e4['OhGLR'] ? lastBet['chance1'] : null,
        'chance2': _0x1884e4[_0x4ebdd8(0x269)](game, _0x1884e4[_0x4ebdd8(0x39b)]) ? lastBet['chance2'] : null,
        'chance3': _0x1884e4[_0x4ebdd8(0x3aa)](game, _0x1884e4[_0x4ebdd8(0x39b)]) ? lastBet[_0x4ebdd8(0x1c3)] : null,
        'chance4': _0x1884e4[_0x4ebdd8(0x44a)](game, _0x1884e4['OhGLR']) ? lastBet[_0x4ebdd8(0x218)] : null,
        'betSide': game === _0x1884e4[_0x4ebdd8(0x39b)] ? lastBet[_0x4ebdd8(0x309)] : null
    }), fullLogs['length'] > 0x2710 && fullLogs['shift'](), !stopChart && chart[_0x4ebdd8(0x288)](betsChart, profitChart, color), _0x1884e4[_0x4ebdd8(0x40d)];
}
async function updateStats() {
    const _0x276797 = _0x301a80, _0x40974a = {
            'Wkouf': function (_0x404557, _0x2c02b2) {
                return _0x404557 === _0x2c02b2;
            },
            'UwsQr': 'white',
            'ZupzE': _0x276797(0x242),
            'XXKdJ': function (_0x5dd4f7, _0x1043f3) {
                return _0x5dd4f7 < _0x1043f3;
            },
            'WJRrT': 'red',
            'DmcIR': _0x276797(0x3bf),
            'HdWFw': function (_0x5d6ef5, _0x5eeb56) {
                return _0x5d6ef5 > _0x5eeb56;
            },
            'QrLSr': _0x276797(0x2ba),
            'kNzOc': _0x276797(0x2a9),
            'tMKtB': _0x276797(0x442),
            'hHGUy': _0x276797(0x1ce),
            'TShXA': _0x276797(0x1f1),
            'GqZki': _0x276797(0x303),
            'lXXKQ': _0x276797(0x366),
            'SOQwn': _0x276797(0x390),
            'dMnwo': _0x276797(0x2f0),
            'qEvSx': 'wdbHighWinStreak',
            'KUnVZ': _0x276797(0x248),
            'imIov': _0x276797(0x38c),
            'gbshr': _0x276797(0x37a),
            'NnECm': function (_0x27caea, _0x41b94b) {
                return _0x27caea / _0x41b94b;
            },
            'pMCjh': function (_0xb99212, _0x25de13) {
                return _0xb99212 / _0x25de13;
            },
            'cbIoe': function (_0x5307ae, _0x5e2e48) {
                return _0x5307ae * _0x5e2e48;
            },
            'bEcGn': function (_0x3570e0, _0x3d1a67) {
                return _0x3570e0 + _0x3d1a67;
            },
            'pWqWn': function (_0x10bc55, _0x3140e7) {
                return _0x10bc55(_0x3140e7);
            },
            'iDaXP': function (_0x129a06, _0xdbfbe) {
                return _0x129a06(_0xdbfbe);
            },
            'XEWOK': _0x276797(0x47f),
            'iSlLa': function (_0x26379e, _0x3e0962) {
                return _0x26379e * _0x3e0962;
            },
            'uHGeI': function (_0x121bea, _0x873a3c) {
                return _0x121bea / _0x873a3c;
            },
            'lJspO': function (_0x4ae13b, _0x451e82) {
                return _0x4ae13b(_0x451e82);
            },
            'xANlh': 'wdbWrapPercentProfit',
            'mQext': _0x276797(0x1e7),
            'ORLkl': _0x276797(0x41f)
        }, _0x488ed5 = _0x40974a[_0x276797(0x386)](profit, 0x0) ? darkMode ? _0x40974a['UwsQr'] : _0x40974a[_0x276797(0x2ab)] : _0x40974a[_0x276797(0x1f4)](profit, 0x0) ? _0x40974a[_0x276797(0x32f)] : _0x40974a[_0x276797(0x2c3)], _0x3de676 = _0x40974a['Wkouf'](currentstreak, 0x0) ? darkMode ? _0x276797(0x1b7) : _0x40974a['ZupzE'] : currentstreak < 0x0 ? _0x40974a[_0x276797(0x32f)] : _0x40974a[_0x276797(0x2c3)], _0x1a2303 = _0x40974a[_0x276797(0x26b)](maxwinstreak, 0x0) ? _0x40974a[_0x276797(0x2c3)] : darkMode ? _0x40974a[_0x276797(0x333)] : _0x40974a[_0x276797(0x2ab)], _0x16c708 = _0x40974a[_0x276797(0x26b)](maxlosestreak, 0x0) ? 'red' : darkMode ? _0x40974a[_0x276797(0x333)] : _0x276797(0x242);
    return document[_0x276797(0x3f5)]('wdbHighWinStreak')[_0x276797(0x214)]['color'] = _0x1a2303, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x223)])['style'][_0x276797(0x47e)] = _0x16c708, document[_0x276797(0x3f5)](_0x40974a['kNzOc'])[_0x276797(0x32c)] = wagered['toFixed'](decimalAmountView), document['getElementById'](_0x40974a[_0x276797(0x1d3)])[_0x276797(0x32c)] = balance[_0x276797(0x470)](decimalAmountView), document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x336)])[_0x276797(0x214)][_0x276797(0x47e)] = _0x488ed5, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x336)])[_0x276797(0x32c)] = profit['toFixed'](decimalAmountView), document[_0x276797(0x3f5)](_0x40974a['TShXA'])[_0x276797(0x32c)] = maxBetAmount[_0x276797(0x470)](decimalAmountView), document['getElementById'](_0x40974a['GqZki'])['innerText'] = maxLosseAmount[_0x276797(0x470)](decimalAmountView), document['getElementById'](_0x40974a[_0x276797(0x3cb)])[_0x276797(0x32c)] = bets, document[_0x276797(0x3f5)](_0x276797(0x2ae))[_0x276797(0x32c)] = wins, document['getElementById'](_0x40974a[_0x276797(0x3d8)])['innerText'] = losses, document['getElementById'](_0x40974a[_0x276797(0x2b7)])['style'][_0x276797(0x47e)] = _0x3de676, document[_0x276797(0x3f5)](_0x40974a['dMnwo'])[_0x276797(0x32c)] = currentstreak, document['getElementById'](_0x40974a[_0x276797(0x371)])[_0x276797(0x32c)] = maxwinstreak, document[_0x276797(0x3f5)](_0x276797(0x2ba))[_0x276797(0x32c)] = maxlosestreak, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x45f)])[_0x276797(0x32c)] = minbalance[_0x276797(0x470)](decimalAmountView), document['getElementById'](_0x40974a[_0x276797(0x240)])[_0x276797(0x32c)] = maxbalance[_0x276797(0x470)](decimalAmountView), document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x284)])['innerText'] = minprofit['toFixed'](decimalAmountView), document[_0x276797(0x3f5)](_0x276797(0x295))['innerText'] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x40974a[_0x276797(0x2ec)](wagered, startBalance), percentWagered = _0x40974a['pMCjh'](Math['round'](_0x40974a[_0x276797(0x32a)](_0x40974a['bEcGn'](percentWagered, Number['EPSILON']), 0x64)), 0x64), percentWagered = _0x40974a[_0x276797(0x3af)](isNaN, percentWagered) || !_0x40974a['iDaXP'](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x478)])[_0x276797(0x32c)] = percentWagered, percentProfit = _0x40974a[_0x276797(0x498)](profit / startBalance, 0x64), percentProfit = _0x40974a[_0x276797(0x2e9)](Math[_0x276797(0x25b)](_0x40974a[_0x276797(0x2ed)](percentProfit, Number[_0x276797(0x398)]) * 0x64), 0x64), percentProfit = isNaN(percentProfit) || !_0x40974a[_0x276797(0x1ca)](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x31b)])[_0x276797(0x214)]['color'] = _0x488ed5, document[_0x276797(0x3f5)](_0x40974a[_0x276797(0x423)])[_0x276797(0x32c)] = percentProfit, _0x40974a[_0x276797(0x25f)];
}
function log(_0x558bf8) {
    const _0x33aa0f = _0x301a80, _0xbdbcd4 = {
            'rpTxw': 'white',
            'crJPy': 'black'
        }, _0x2cf35f = document['getElementById'](_0x33aa0f(0x1fb)), _0x202680 = document[_0x33aa0f(0x1da)]('li');
    _0x202680[_0x33aa0f(0x32c)] = _0x558bf8, _0x202680[_0x33aa0f(0x214)][_0x33aa0f(0x47e)] = darkMode ? _0xbdbcd4[_0x33aa0f(0x2a1)] : _0xbdbcd4[_0x33aa0f(0x2d9)], _0x2cf35f[_0x33aa0f(0x344)](_0x202680, _0x2cf35f[_0x33aa0f(0x2f8)]), _0x2cf35f['children'][_0x33aa0f(0x308)] > maxRows && _0x2cf35f[_0x33aa0f(0x350)](_0x2cf35f[_0x33aa0f(0x382)]);
}
function updateSpeed() {
    const _0x5e4ac2 = _0x301a80, _0x119c45 = {
            'JgXjZ': function (_0x504a2b, _0x5c7e7d) {
                return _0x504a2b < _0x5c7e7d;
            },
            'XYnmD': 'wdbSpeed',
            'mHZzz': _0x5e4ac2(0x29d),
            'Xbrgr': function (_0x3eda7e, _0x33d767) {
                return _0x3eda7e / _0x33d767;
            },
            'bDnNz': function (_0x487c72, _0x4f2ddd) {
                return _0x487c72 - _0x4f2ddd;
            }
        };
    if (_0x119c45['JgXjZ'](speedHistory[_0x5e4ac2(0x308)], 0x2)) {
        document[_0x5e4ac2(0x3f5)](_0x119c45['XYnmD'])[_0x5e4ac2(0x32c)] = _0x119c45[_0x5e4ac2(0x434)];
        return;
    }
    const _0x3bf136 = Date[_0x5e4ac2(0x22d)](), _0x5898b3 = 0x2710;
    speedHistory = speedHistory[_0x5e4ac2(0x3b0)](_0x6cd93e => _0x3bf136 - _0x6cd93e <= _0x5898b3);
    if (speedHistory[_0x5e4ac2(0x308)] < 0x2) {
        document[_0x5e4ac2(0x3f5)](_0x119c45[_0x5e4ac2(0x418)])[_0x5e4ac2(0x32c)] = '0.00';
        return;
    }
    const _0x1fc428 = speedHistory[0x0], _0x74b2bf = _0x119c45[_0x5e4ac2(0x42e)](_0x119c45[_0x5e4ac2(0x3c4)](_0x3bf136, _0x1fc428), 0x3e8), _0x3ad1ff = _0x119c45[_0x5e4ac2(0x42e)](speedHistory[_0x5e4ac2(0x308)], _0x74b2bf);
    document[_0x5e4ac2(0x3f5)](_0x5e4ac2(0x42c))[_0x5e4ac2(0x32c)] = _0x3ad1ff[_0x5e4ac2(0x470)](0x2);
}
function updateTimer() {
    const _0x4ea614 = _0x301a80, _0x847c28 = {
            'vGLyJ': function (_0x2d4327, _0x22d78e) {
                return _0x2d4327 / _0x22d78e;
            },
            'EAlxY': function (_0x3b8a91, _0x324007) {
                return _0x3b8a91 % _0x324007;
            },
            'BazIE': function (_0x3aaced, _0x1b62cc) {
                return _0x3aaced * _0x1b62cc;
            }
        };
    elapsedTime++;
    const _0x20df1a = Math['floor'](_0x847c28[_0x4ea614(0x22e)](elapsedTime, 0x18 * 0x3c * 0x3c)), _0x45c51d = Math[_0x4ea614(0x401)](_0x847c28['EAlxY'](elapsedTime, _0x847c28[_0x4ea614(0x29f)](0x18 * 0x3c, 0x3c)) / _0x847c28[_0x4ea614(0x29f)](0x3c, 0x3c)), _0x590c87 = Math[_0x4ea614(0x401)](elapsedTime % _0x847c28[_0x4ea614(0x29f)](0x3c, 0x3c) / 0x3c), _0x1c9b55 = _0x847c28[_0x4ea614(0x245)](elapsedTime, 0x3c);
    document[_0x4ea614(0x3f5)](_0x4ea614(0x26c))[_0x4ea614(0x32c)] = _0x20df1a + ':' + _0x45c51d + ':' + _0x590c87 + ':' + _0x1c9b55;
}
async function start() {
    const _0x217541 = _0x301a80, _0x3e99ff = {
            'HfoAF': function (_0x1c4a9b, _0x5673c1) {
                return _0x1c4a9b === _0x5673c1;
            },
            'qcNwx': _0x217541(0x2d5),
            'Yldlx': _0x217541(0x29e),
            'Uloap': _0x217541(0x3c1),
            'Giptt': _0x217541(0x467),
            'dhBZF': _0x217541(0x212),
            'PFQWd': _0x217541(0x352),
            'uZEDl': _0x217541(0x1b6),
            'PWzjo': _0x217541(0x2d6),
            'HzRRh': '#wdbSaveScriptButton',
            'gOaQc': '#wdbOpenScript',
            'sqBka': function (_0x588d91, _0x135b2d) {
                return _0x588d91(_0x135b2d);
            },
            'XSZmW': function (_0x353fad, _0x4baf3a, _0x1b1f03) {
                return _0x353fad(_0x4baf3a, _0x1b1f03);
            },
            'GMdwp': _0x217541(0x35e),
            'WEGrH': _0x217541(0x4a8),
            'sKUUQ': _0x217541(0x1ad),
            'BmOjK': _0x217541(0x233),
            'EwvdZ': '$1=$1*$2\x20',
            'LtsAg': 'scriptName',
            'nlOlD': _0x217541(0x389),
            'MSEgD': _0x217541(0x46e),
            'AyZVN': function (_0x2bfcfa, _0x2ab5dd) {
                return _0x2bfcfa === _0x2ab5dd;
            },
            'TrtrX': _0x217541(0x1dd),
            'Axupo': function (_0x569559, _0x49e037) {
                return _0x569559(_0x49e037);
            },
            'lGJjw': function (_0x443018, _0x93dd73) {
                return _0x443018(_0x93dd73);
            },
            'kVMXP': function (_0x33ffe0) {
                return _0x33ffe0();
            }
        };
    if (_0x3e99ff[_0x217541(0x45a)](game, _0x3e99ff[_0x217541(0x402)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x3e99ff['Yldlx'];
        const _0x35df43 = _0x217541(0x491) + chance1 + '\x0a\x20\x20\x20\x20chance2=' + chance2 + _0x217541(0x395) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x217541(0x27d) + betSide + '\x22';
        fengari['load'](_0x35df43)();
    }
    try {
        if (!run) {
            document[_0x217541(0x3f5)]('wdbTime')['innerText'] = _0x3e99ff[_0x217541(0x22b)], document['getElementById'](_0x3e99ff[_0x217541(0x426)])['disabled'] = !![], document[_0x217541(0x3f5)](_0x3e99ff[_0x217541(0x20c)])['disabled'] = !![], document['getElementById'](_0x3e99ff[_0x217541(0x4a4)])[_0x217541(0x35d)] = !![], document[_0x217541(0x3f5)](_0x3e99ff[_0x217541(0x384)])['disabled'] = !![], document[_0x217541(0x3f5)](_0x3e99ff[_0x217541(0x31a)])[_0x217541(0x35d)] = !![], document[_0x217541(0x3f5)]('wdbOpenJSScript')['disabled'] = !![], document[_0x217541(0x415)](_0x3e99ff[_0x217541(0x241)])[_0x217541(0x305)](_0x382f53 => _0x382f53['disabled'] = !![]), document[_0x217541(0x415)](_0x3e99ff[_0x217541(0x2b9)])[_0x217541(0x305)](_0x58e145 => _0x58e145[_0x217541(0x35d)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], clearInterval(timerInterval), _0x3e99ff['sqBka'](clearInterval, speedUpdateInterval), timerInterval = _0x3e99ff['XSZmW'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), fengari[_0x217541(0x2a6)](_0x217541(0x1ab))(), fengari[_0x217541(0x2a6)](_0x217541(0x220))();
            if (mode === _0x217541(0x1d6)) {
                const _0x3f18be = _0x3e99ff[_0x217541(0x22f)][_0x217541(0x34c)]('|');
                let _0xfcf7e0 = 0x0;
                while (!![]) {
                    switch (_0x3f18be[_0xfcf7e0++]) {
                    case '0':
                        diceScript = luaEditor[_0x217541(0x448)]();
                        continue;
                    case '1':
                        scriptname = fengari['load'](_0x3e99ff['WEGrH'])();
                        continue;
                    case '2':
                        diceScript = diceScript[_0x217541(0x422)](/!=/g, '~=')['replace'](/!/g, _0x3e99ff['sKUUQ'])[_0x217541(0x422)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x217541(0x3cc))['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x3e99ff[_0x217541(0x41e)])[_0x217541(0x422)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x3e99ff['EwvdZ'])['replace'](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x217541(0x3fe));
                        continue;
                    case '3':
                        fengari[_0x217541(0x2a6)](diceScript)();
                        continue;
                    case '4':
                        document['getElementById'](_0x3e99ff[_0x217541(0x2e2)])[_0x217541(0x32c)] = scriptname ? _0x217541(0x27b) + scriptname : '';
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x3e99ff[_0x217541(0x45a)](mode, 'js')) {
                    const _0x629fc2 = document[_0x217541(0x3f5)](_0x217541(0x46e));
                    if (_0x629fc2)
                        _0x629fc2[_0x217541(0x45e)]();
                    diceScript = jsEditor['getValue']();
                    const _0x2df1f9 = document[_0x217541(0x1da)](_0x3e99ff[_0x217541(0x451)]);
                    _0x2df1f9['id'] = _0x3e99ff[_0x217541(0x464)], _0x2df1f9['innerHTML'] = diceScript, document[_0x217541(0x488)][_0x217541(0x2ca)](_0x2df1f9);
                } else
                    _0x3e99ff[_0x217541(0x24c)](mode, _0x3e99ff['TrtrX']) && (basebet = _0x3e99ff[_0x217541(0x3a3)](Number, document[_0x217541(0x3f5)](_0x217541(0x43f))[_0x217541(0x2fb)]), nextbet = basebet, chance = _0x3e99ff[_0x217541(0x435)](Number, document[_0x217541(0x3f5)](_0x217541(0x3ee))[_0x217541(0x2fb)]), bethigh = document['querySelector'](_0x217541(0x3d2))[_0x217541(0x1e1)]);
            }
            if (run)
                return _0x3e99ff[_0x217541(0x3a1)](playBet);
        }
    } catch (_0xc6b97a) {
        stop(), log(_0xc6b97a);
    }
}
function stop() {
    const _0x53e34e = _0x301a80, _0x5e2629 = {
            'lCoGt': function (_0x119336, _0x1f5172) {
                return _0x119336(_0x1f5172);
            },
            'bzwFt': function (_0xd14d60, _0x500a9d) {
                return _0xd14d60(_0x500a9d);
            },
            'GPJZY': 'wdbMenuCoin',
            'YbszD': _0x53e34e(0x212),
            'ZQrdA': _0x53e34e(0x352),
            'dTNoY': _0x53e34e(0x1b6),
            'NakCa': _0x53e34e(0x299),
            'pCDIJ': _0x53e34e(0x452),
            'Goxjp': _0x53e34e(0x2a0)
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x5e2629[_0x53e34e(0x487)](clearInterval, timerInterval), _0x5e2629[_0x53e34e(0x38d)](clearInterval, speedUpdateInterval);
    const _0x59d295 = [
        _0x5e2629[_0x53e34e(0x275)],
        _0x5e2629['YbszD'],
        _0x5e2629[_0x53e34e(0x32d)],
        _0x5e2629[_0x53e34e(0x1e3)],
        _0x53e34e(0x2d6),
        _0x5e2629[_0x53e34e(0x3f0)],
        _0x5e2629[_0x53e34e(0x3d0)]
    ];
    _0x59d295['forEach'](_0x458999 => {
        const _0x581a00 = _0x53e34e;
        document[_0x581a00(0x3f5)](_0x458999)[_0x581a00(0x35d)] = ![];
    }), document['querySelectorAll'](_0x5e2629['Goxjp'])[_0x53e34e(0x305)](_0x1341d6 => _0x1341d6['disabled'] = ![]);
}
async function resume(_0x2fbf15) {
    const _0x56af8a = _0x301a80, _0x186cfe = {
            'xhpON': _0x56af8a(0x467),
            'XLqzK': _0x56af8a(0x212),
            'MIKUe': 'wdbStartButton',
            'PRPIA': _0x56af8a(0x1b6),
            'oKkMF': _0x56af8a(0x2d6),
            'EatQi': _0x56af8a(0x299),
            'Yjmfv': '#wdbSaveScriptButton,\x20#wdbOpenScript',
            'PWDTD': _0x56af8a(0x3e9),
            'vIvfd': function (_0xdc1e3b, _0x4dbffa, _0x455e48) {
                return _0xdc1e3b(_0x4dbffa, _0x455e48);
            },
            'qOqCa': function (_0x47851a) {
                return _0x47851a();
            }
        };
    if (!run) {
        const _0x12cb48 = [
            _0x186cfe[_0x56af8a(0x1cd)],
            _0x186cfe[_0x56af8a(0x266)],
            _0x186cfe[_0x56af8a(0x2d2)],
            _0x186cfe[_0x56af8a(0x351)],
            _0x186cfe['oKkMF'],
            _0x186cfe['EatQi']
        ];
        return _0x12cb48[_0x56af8a(0x305)](_0x473760 => {
            const _0x1cd666 = _0x56af8a;
            document[_0x1cd666(0x3f5)](_0x473760)['disabled'] = !![];
        }), document[_0x56af8a(0x415)](_0x186cfe[_0x56af8a(0x34b)])[_0x56af8a(0x305)](_0x128a37 => _0x128a37[_0x56af8a(0x35d)] = !![]), !_0x2fbf15 && (log(_0x186cfe[_0x56af8a(0x3a8)]), await new Promise(_0x49369f => setTimeout(_0x49369f, 0x1388))), run = !![], sOW = ![], timerInterval = _0x186cfe['vIvfd'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x186cfe['vIvfd'](setInterval, updateSpeed, 0x1f4), _0x186cfe[_0x56af8a(0x32b)](playBet);
    }
}
function stopOnWin() {
    const _0x56dd77 = _0x301a80;
    sOW = !![];
    if (run)
        document[_0x56dd77(0x3f5)](_0x56dd77(0x452))[_0x56dd77(0x35d)] = !![];
}
async function playBet() {
    const _0x53e5eb = _0x301a80, _0x12efe7 = {
            'CDyQi': _0x53e5eb(0x1d6),
            'vvgAa': _0x53e5eb(0x1f6),
            'VHTAo': _0x53e5eb(0x304),
            'vqfIU': _0x53e5eb(0x433),
            'mHgak': _0x53e5eb(0x357),
            'bzqaV': _0x53e5eb(0x421),
            'aYJEh': 'return\x20chance3',
            'nekPm': _0x53e5eb(0x27e),
            'LgBly': function (_0x353e7c, _0x1e2f70) {
                return _0x353e7c(_0x1e2f70);
            },
            'nqEsI': _0x53e5eb(0x2d5),
            'FtenC': function (_0x4f2444, _0x121703) {
                return _0x4f2444 === _0x121703;
            },
            'oDrwn': _0x53e5eb(0x3a4),
            'aBuxU': _0x53e5eb(0x335),
            'blGyJ': _0x53e5eb(0x381),
            'htiqQ': function (_0x228f98, _0x53f205) {
                return _0x228f98 + _0x53f205;
            },
            'NnCNc': function (_0x19ec47) {
                return _0x19ec47();
            }
        };
    try {
        if (mode === _0x12efe7[_0x53e5eb(0x3fa)]) {
            const _0x3adbfd = _0x12efe7[_0x53e5eb(0x2cd)][_0x53e5eb(0x34c)]('|');
            let _0x2a730f = 0x0;
            while (!![]) {
                switch (_0x3adbfd[_0x2a730f++]) {
                case '0':
                    betSide = fengari[_0x53e5eb(0x2a6)]('return\x20betSide')();
                    continue;
                case '1':
                    bethigh = fengari[_0x53e5eb(0x2a6)](_0x12efe7['VHTAo'])();
                    continue;
                case '2':
                    nextbet = fengari[_0x53e5eb(0x2a6)](_0x12efe7[_0x53e5eb(0x268)])();
                    continue;
                case '3':
                    chance4 = fengari[_0x53e5eb(0x2a6)](_0x12efe7[_0x53e5eb(0x3c6)])();
                    continue;
                case '4':
                    chance2 = fengari['load'](_0x12efe7[_0x53e5eb(0x3e0)])();
                    continue;
                case '5':
                    chance3 = fengari[_0x53e5eb(0x2a6)](_0x12efe7[_0x53e5eb(0x1bf)])();
                    continue;
                case '6':
                    chance1 = fengari[_0x53e5eb(0x2a6)](_0x53e5eb(0x492))();
                    continue;
                case '7':
                    chance = fengari['load'](_0x12efe7[_0x53e5eb(0x265)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x12efe7[_0x53e5eb(0x42a)](Number, nextbet), chance = _0x12efe7[_0x53e5eb(0x42a)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x108f13 = _0x12efe7['LgBly'](Number, lastBet[_0x53e5eb(0x343)])[_0x53e5eb(0x470)](decimalAmountView), _0x2f4fdd = Number(lastBet[_0x53e5eb(0x3db)])[_0x53e5eb(0x470)](decimalChanceView), _0x345c4f = game !== _0x12efe7[_0x53e5eb(0x1fd)] ? _0x12efe7[_0x53e5eb(0x28a)](game, _0x12efe7[_0x53e5eb(0x239)]) ? _0x53e5eb(0x3ed) + _0x108f13 + '\x20at\x20' + (havePlinkoRows ? plinkoRow + _0x53e5eb(0x469) : '') + plinkoRisk + '\x20to\x20win' : 'Betting\x20' + _0x108f13 + _0x53e5eb(0x3b2) + _0x2f4fdd + _0x53e5eb(0x209) + (_0x12efe7[_0x53e5eb(0x28a)](game, _0x12efe7[_0x53e5eb(0x2a2)]) ? bethigh ? _0x53e5eb(0x364) : _0x12efe7[_0x53e5eb(0x23c)] : _0x53e5eb(0x364)) : 'Betting\x20' + _0x108f13 + '\x20at\x20' + chance1 + '|' + chance2 + (chance3 ? '|' + chance3 : '') + (chance4 ? _0x12efe7[_0x53e5eb(0x332)]('|', chance4) : '') + _0x53e5eb(0x329) + betSide;
            _0x12efe7[_0x53e5eb(0x42a)](log, _0x345c4f);
        }
        if (run)
            return _0x12efe7[_0x53e5eb(0x1b0)](sendBet);
    } catch (_0x4e3c69) {
        stop(), _0x12efe7[_0x53e5eb(0x42a)](log, _0x4e3c69);
    }
}
function resetall() {
    const _0x2fbc4f = _0x301a80, _0x7c2566 = {
            'pCqBj': '0:0:0:0',
            'Phlvz': 'wdbSpeed',
            'KNZIh': _0x2fbc4f(0x29d),
            'CFLuS': function (_0x20ef52) {
                return _0x20ef52();
            },
            'KuQuM': function (_0x1b6c6f) {
                return _0x1b6c6f();
            }
        };
    document[_0x2fbc4f(0x3f5)](_0x2fbc4f(0x26c))[_0x2fbc4f(0x32c)] = _0x7c2566[_0x2fbc4f(0x48e)], document['getElementById'](_0x7c2566[_0x2fbc4f(0x1cf)])[_0x2fbc4f(0x32c)] = _0x7c2566['KNZIh'], _0x7c2566[_0x2fbc4f(0x1ef)](resetstats), resetchart(), _0x7c2566[_0x2fbc4f(0x1ef)](resethistory), _0x7c2566[_0x2fbc4f(0x48a)](resetlog);
}
function resetchart() {
    const _0x13fe25 = { 'ZNktg': 'reset' };
    return toggleChart(_0x13fe25['ZNktg']);
}
function resethistory() {
    const _0x2f3485 = _0x301a80;
    return toggleHistory(_0x2f3485(0x35a));
}
function resetlog() {
    const _0x195c77 = _0x301a80, _0x106f69 = {
            'DHWaq': function (_0x17e9bc, _0x3364ed) {
                return _0x17e9bc(_0x3364ed);
            },
            'kvgoh': _0x195c77(0x35a)
        };
    return _0x106f69[_0x195c77(0x3d7)](toggleLog, _0x106f69['kvgoh']);
}
function resetstats() {
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, updateStats();
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x441ee6) {
    return _0x441ee6;
}
function ching() {
    const _0x481377 = _0x301a80;
    return wdbSound[_0x481377(0x463)]();
}
function sleep(_0x3ed9f5) {
    return new Promise(_0x1cb2a6 => setTimeout(_0x1cb2a6, _0x3ed9f5 * 0x3e8));
}
async function initLua() {
    const _0x42ce08 = _0x301a80, _0x2e2b3d = {
            'NxaXi': _0x42ce08(0x230),
            'yOZbu': _0x42ce08(0x2b1),
            'erKHk': 'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
            'ekwmK': _0x42ce08(0x387),
            'RdcQd': _0x42ce08(0x475),
            'KOtkI': _0x42ce08(0x3b1),
            'Ycgip': _0x42ce08(0x2b3),
            'OvEFB': _0x42ce08(0x466),
            'dxuns': _0x42ce08(0x2b8),
            'jwJnJ': _0x42ce08(0x3a7),
            'pkqBe': _0x42ce08(0x271),
            'MoWop': _0x42ce08(0x292)
        };
    fengari[_0x42ce08(0x2a6)](_0x42ce08(0x2e3))(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x224)])(), fengari['load'](_0x2e2b3d[_0x42ce08(0x33f)])(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x409)])(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x3d1)])(), fengari['load'](_0x42ce08(0x267))(), fengari[_0x42ce08(0x2a6)](_0x42ce08(0x27a))(), fengari[_0x42ce08(0x2a6)]('function\x20resethistory()\x0ajs.global:resethistory()\x0aend')(), fengari['load'](_0x2e2b3d['RdcQd'])(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x200)])(), fengari['load'](_0x2e2b3d[_0x42ce08(0x318)])(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d['OvEFB'])(), fengari[_0x42ce08(0x2a6)](_0x42ce08(0x3b5))(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x46b)])(), fengari[_0x42ce08(0x2a6)](_0x2e2b3d[_0x42ce08(0x405)])(), fengari[_0x42ce08(0x2a6)](_0x42ce08(0x42f))(), fengari[_0x42ce08(0x2a6)](_0x42ce08(0x496))(), fengari[_0x42ce08(0x2a6)](_0x42ce08(0x392))();
    const _0x51eb35 = location[_0x42ce08(0x2f1)][_0x42ce08(0x422)](_0x2e2b3d[_0x42ce08(0x1cc)], '');
    let _0x43358b = _0x51eb35['indexOf']('.');
    return casino = _0x51eb35[_0x42ce08(0x257)](0x0, _0x43358b), fengari[_0x42ce08(0x2a6)]('casino=\x22' + casino + '\x22')(), _0x2e2b3d[_0x42ce08(0x2b6)];
}
async function updateLua() {
    const _0x1a25dc = _0x301a80, _0x2e65e8 = {
            'jTRZN': _0x1a25dc(0x316),
            'aePkz': _0x1a25dc(0x37e),
            'xXFar': 'return\x20plinkoRow',
            'Tcwsb': _0x1a25dc(0x2b2),
            'ZXMSQ': _0x1a25dc(0x291)
        }, _0x16acbd = _0x1a25dc(0x1d4) + win + '\x0a\x20\x20\x20\x20bets=' + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x1a25dc(0x283) + losses + _0x1a25dc(0x3b7) + winstreak + _0x1a25dc(0x2f2) + losestreak + _0x1a25dc(0x31d) + currentstreak + _0x1a25dc(0x235) + balance + _0x1a25dc(0x1f8) + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + _0x1a25dc(0x465) + minprofit + '\x0a\x20\x20\x20\x20maxprofit=' + maxprofit + _0x1a25dc(0x36a) + chance + _0x1a25dc(0x47a) + bethigh + _0x1a25dc(0x206) + chance1 + '\x0a\x20\x20\x20\x20chance2=' + chance2 + _0x1a25dc(0x395) + chance3 + _0x1a25dc(0x453) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + '\x22\x0a\x0a\x20\x20\x20\x20nextbet=' + nextbet + _0x1a25dc(0x460) + previousbet + _0x1a25dc(0x3e8) + profit + _0x1a25dc(0x319) + currentprofit + _0x1a25dc(0x289) + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + _0x1a25dc(0x2db) + lastBet[_0x1a25dc(0x343)] + _0x1a25dc(0x4a6) + lastBet[_0x1a25dc(0x343)] + _0x1a25dc(0x443) + lastBet[_0x1a25dc(0x3db)] + _0x1a25dc(0x225) + lastBet[_0x1a25dc(0x3db)] + _0x1a25dc(0x490) + lastBet[_0x1a25dc(0x30d)] + _0x1a25dc(0x320) + lastBet[_0x1a25dc(0x30d)] + _0x1a25dc(0x416) + lastBet[_0x1a25dc(0x4a5)] + ',\x0a\x20\x20\x20\x20\x20\x20Profit=' + lastBet['profit'] + _0x1a25dc(0x3c7) + lastBet[_0x1a25dc(0x430)] + _0x1a25dc(0x360) + lastBet[_0x1a25dc(0x430)] + ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=' + lastBet[_0x1a25dc(0x49d)] + _0x1a25dc(0x3df) + lastBet['chance1'] + ',\x0a\x20\x20\x20\x20\x20\x20chance2=' + lastBet['chance2'] + ',\x0a\x20\x20\x20\x20\x20\x20Chance2=' + lastBet[_0x1a25dc(0x2fa)] + _0x1a25dc(0x1e9) + lastBet['chance3'] + _0x1a25dc(0x249) + lastBet['chance3'] + ',\x0a\x20\x20\x20\x20\x20\x20chance4=' + lastBet[_0x1a25dc(0x218)] + _0x1a25dc(0x2ad) + lastBet[_0x1a25dc(0x218)] + _0x1a25dc(0x33e) + lastBet[_0x1a25dc(0x309)] + _0x1a25dc(0x2df) + lastBet[_0x1a25dc(0x309)] + _0x1a25dc(0x202) + lastBet['result'] + ',\x0a\x20\x20\x20\x20\x20\x20Result=' + lastBet['result'] + _0x1a25dc(0x2bf) + lastBet[_0x1a25dc(0x436)] + ',\x0a\x20\x20\x20\x20\x20\x20Nonce=' + lastBet[_0x1a25dc(0x436)] + ',\x0a\x20\x20\x20\x20\x20\x20id=\x22' + lastBet['id'] + _0x1a25dc(0x3e2) + lastBet['id'] + _0x1a25dc(0x3de);
    fengari[_0x1a25dc(0x2a6)](_0x16acbd)(), fengari[_0x1a25dc(0x2a6)](_0x2e65e8['jTRZN'])(), currency = fengari['load'](_0x2e65e8[_0x1a25dc(0x24f)])() || currency, coin = String(currency)[_0x1a25dc(0x1c5)](), plinkoRisk = fengari[_0x1a25dc(0x2a6)](_0x1a25dc(0x1db))() || plinkoRisk, plinkoRow = fengari['load'](_0x2e65e8[_0x1a25dc(0x46c)])() || plinkoRow, kenoRisk = fengari[_0x1a25dc(0x2a6)](_0x2e65e8[_0x1a25dc(0x3ca)])() || kenoRisk;
    const _0x241954 = fengari[_0x1a25dc(0x2a6)](_0x2e65e8[_0x1a25dc(0x1c9)])();
    return _0x241954 && (window['kenoNumbers'] = _0x241954[_0x1a25dc(0x34c)](',')[_0x1a25dc(0x3b0)](_0x2be2d9 => _0x2be2d9 !== '')[_0x1a25dc(0x2be)](Number)), 'updateLua\x20done';
}
function randomString(_0x2d7c7c, _0x1b32f9) {
    const _0x54ce4e = _0x301a80, _0x1f0d86 = {
            'akFpL': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'RaKED': _0x54ce4e(0x37b),
            'oKOik': _0x54ce4e(0x1e6),
            'KaDov': function (_0x5af577, _0x1e0ad3) {
                return _0x5af577 < _0x1e0ad3;
            },
            'LPUXi': function (_0x41f95e, _0x3951c8) {
                return _0x41f95e * _0x3951c8;
            }
        }, _0x1cbbcb = {
            'alphabet': _0x1f0d86[_0x54ce4e(0x41c)],
            'numeric': _0x54ce4e(0x380),
            'hex': _0x1f0d86[_0x54ce4e(0x3d6)],
            'rangedice': _0x54ce4e(0x462),
            'default': _0x1f0d86[_0x54ce4e(0x1f7)]
        }, _0x2af4dc = _0x1cbbcb[_0x1b32f9] || _0x1cbbcb['default'];
    let _0x7a5e67 = '';
    for (let _0x195dc3 = 0x0; _0x1f0d86[_0x54ce4e(0x367)](_0x195dc3, _0x2d7c7c); _0x195dc3++) {
        _0x7a5e67 += _0x2af4dc[_0x54ce4e(0x396)](Math[_0x54ce4e(0x401)](_0x1f0d86[_0x54ce4e(0x340)](Math['random'](), _0x2af4dc['length'])));
    }
    return _0x7a5e67;
}
function setCookie(_0x428d34, _0x585c75, _0xf86267) {
    const _0xb0ada2 = _0x301a80, _0x218ecd = {
            'YYepd': function (_0x512707, _0x591cec) {
                return _0x512707 + _0x591cec;
            },
            'wXaQn': function (_0x2584d0, _0x26ee46) {
                return _0x2584d0 * _0x26ee46;
            },
            'rnjbx': function (_0x593cd8, _0x3165de) {
                return _0x593cd8 * _0x3165de;
            },
            'QCXYP': function (_0xce24e, _0x508bad) {
                return _0xce24e + _0x508bad;
            },
            'xrGcU': _0xb0ada2(0x43c)
        }, _0x4e149f = new Date();
    _0x4e149f[_0xb0ada2(0x1c0)](_0x218ecd[_0xb0ada2(0x2cb)](_0x4e149f[_0xb0ada2(0x221)](), _0x218ecd[_0xb0ada2(0x26e)](_0x218ecd[_0xb0ada2(0x26e)](_0x218ecd[_0xb0ada2(0x23b)](_0xf86267, 0x18), 0x3c) * 0x3c, 0x3e8)));
    const _0x2dfeb2 = _0x218ecd[_0xb0ada2(0x368)](_0x218ecd[_0xb0ada2(0x234)], _0x4e149f[_0xb0ada2(0x3f9)]());
    document['cookie'] = _0x428d34 + '=' + _0x585c75 + ';' + _0x2dfeb2 + ';path=/';
}
function getCookie(_0x404a33) {
    const _0x2687f0 = _0x301a80, _0x25b98c = {
            'GvABL': function (_0x91e508, _0x5ac40e) {
                return _0x91e508 + _0x5ac40e;
            }
        }, _0x53bddd = _0x25b98c['GvABL'](_0x404a33, '='), _0x496825 = document['cookie'][_0x2687f0(0x34c)](';')[_0x2687f0(0x2be)](_0x3dae14 => _0x3dae14[_0x2687f0(0x34d)]());
    for (const _0x444efd of _0x496825) {
        if (_0x444efd[_0x2687f0(0x213)](_0x53bddd))
            return _0x444efd[_0x2687f0(0x2e6)](_0x53bddd['length']);
    }
    return '';
}
function saveScript() {
    const _0x53f025 = _0x301a80, _0x20d454 = {
            'Aldyn': function (_0x1e3045, _0x525e11) {
                return _0x1e3045 === _0x525e11;
            },
            'xqsLB': _0x53f025(0x1d6),
            'IcpBE': 'text/plain;\x20charset=utf-8'
        }, _0x20d264 = _0x20d454[_0x53f025(0x4ab)](mode, _0x20d454[_0x53f025(0x26f)]) ? luaEditor[_0x53f025(0x448)]() : jsEditor[_0x53f025(0x448)](), _0x3efb98 = document[_0x53f025(0x1da)]('a');
    _0x3efb98['href'] = window[_0x53f025(0x34a)][_0x53f025(0x348)](new Blob([_0x20d264], { 'type': _0x20d454['IcpBE'] })), _0x3efb98[_0x53f025(0x3f4)] = _0x53f025(0x32e) + Date[_0x53f025(0x22d)]()['toString']()[_0x53f025(0x257)](-0x6) + '.' + mode, _0x3efb98[_0x53f025(0x37c)]();
}
function getErrMsg(_0x2932a2) {
    const _0x1f97cb = _0x301a80;
    return _0x2932a2[_0x1f97cb(0x476)] && _0x2932a2[_0x1f97cb(0x476)][_0x1f97cb(0x374)] && _0x2932a2[_0x1f97cb(0x476)][_0x1f97cb(0x374)][_0x1f97cb(0x262)] || _0x2932a2[_0x1f97cb(0x262)] || _0x2932a2['toString']();
}

const _0x35172d = _0x4101;
(function (_0x5248b8, _0x5f2372) {
    const _0x5560cc = _0x4101, _0x3c885d = _0x5248b8();
    while (!![]) {
        try {
            const _0x3ac345 = -parseInt(_0x5560cc(0x80)) / 0x1 * (parseInt(_0x5560cc(0xab)) / 0x2) + parseInt(_0x5560cc(0xa4)) / 0x3 + parseInt(_0x5560cc(0x70)) / 0x4 + -parseInt(_0x5560cc(0x8f)) / 0x5 + parseInt(_0x5560cc(0x6f)) / 0x6 + parseInt(_0x5560cc(0xb5)) / 0x7 * (parseInt(_0x5560cc(0x6e)) / 0x8) + parseInt(_0x5560cc(0xa1)) / 0x9 * (-parseInt(_0x5560cc(0xa7)) / 0xa);
            if (_0x3ac345 === _0x5f2372)
                break;
            else
                _0x3c885d['push'](_0x3c885d['shift']());
        } catch (_0x33d429) {
            _0x3c885d['push'](_0x3c885d['shift']());
        }
    }
}(_0x294c, 0x992a1), CASINO_API = _0x35172d(0xb7) + window['location']['hostname'], token = localStorage['getItem'](_0x35172d(0x75)), clientSeed = randomString(0x20), decimalTargetResult = 0x0);
async function beforeWork(_0x800dc6) {
    const _0x5d3d24 = _0x35172d, _0x32fd38 = {
            'CNqsO': function (_0x3e0b33, _0x9551f3) {
                return _0x3e0b33 + _0x9551f3;
            },
            'mwWTd': _0x5d3d24(0x99),
            'mqrtY': 'Bearer\x20',
            'noEDJ': _0x5d3d24(0x88)
        };
    await _0x800dc6[_0x5d3d24(0x9b)](_0x32fd38[_0x5d3d24(0x79)](WDB_LIB, _0x32fd38[_0x5d3d24(0x6d)])), axios['defaults'][_0x5d3d24(0x93)] = {
        'authorization': _0x32fd38['CNqsO'](_0x32fd38[_0x5d3d24(0x8a)], token),
        'content-type': _0x32fd38[_0x5d3d24(0xa5)]
    };
}
function vault() {
    const _0x2f7693 = _0x35172d, _0x5a570b = {
            'srqai': function (_0x17d989, _0x3af321) {
                return _0x17d989(_0x3af321);
            },
            'ojhaK': _0x2f7693(0xb4)
        };
    _0x5a570b[_0x2f7693(0xa9)](log, _0x5a570b['ojhaK']);
}
function unvault() {
    const _0x5ca2d1 = _0x35172d;
    log(_0x5ca2d1(0xb4));
}
function _0x4101(_0x1ebb0e, _0x6812e7) {
    const _0x294c15 = _0x294c();
    return _0x4101 = function (_0x4101b9, _0x167991) {
        _0x4101b9 = _0x4101b9 - 0x6d;
        let _0x57880b = _0x294c15[_0x4101b9];
        return _0x57880b;
    }, _0x4101(_0x1ebb0e, _0x6812e7);
}
async function getListCoin() {
    const _0x54d305 = _0x35172d, _0x14080b = {
            'QgWtW': function (_0x7c60e9, _0x91fdf3) {
                return _0x7c60e9 + _0x91fdf3;
            },
            'fwcGt': _0x54d305(0xb2),
            'LLhYg': function (_0xf791c8, _0x320342) {
                return _0xf791c8 < _0x320342;
            }
        }, {data: _0x1ed51d} = await axios['get'](_0x14080b[_0x54d305(0x98)](CASINO_API, _0x14080b['fwcGt']));
    for (let _0x50d8fb = 0x0; _0x14080b[_0x54d305(0xb3)](_0x50d8fb, _0x1ed51d[_0x54d305(0xa0)][_0x54d305(0xb1)]); _0x50d8fb++) {
        coins[_0x54d305(0x94)](_0x1ed51d['coins'][_0x50d8fb]['symbol']);
    }
    return coins = coins[_0x54d305(0x7a)](), coin = coins[0x0], (drawSelectCoin(), checkbalance());
}
async function getMinBet() {
    const _0xde6ac2 = _0x35172d, _0x866613 = {
            'sQeRI': function (_0x2c8335, _0x3f1c09) {
                return _0x2c8335 + _0x3f1c09;
            },
            'NvkHV': _0xde6ac2(0x71)
        };
    return await axios['get'](_0x866613['sQeRI'](CASINO_API, _0x866613[_0xde6ac2(0xa6)]));
}
async function checkbalance() {
    const _0x26c9e7 = _0x35172d, _0x3a3e67 = {
            'lgpLI': function (_0x442089, _0x410c89) {
                return _0x442089 === _0x410c89;
            },
            'kYeLy': function (_0x2aa5e2, _0x3707b9) {
                return _0x2aa5e2(_0x3707b9);
            },
            'yZVEn': _0x26c9e7(0x9d),
            'mLHQK': function (_0x50e913, _0x2a4350) {
                return _0x50e913 === _0x2a4350;
            },
            'WBLCE': function (_0x30ed35, _0xf29ea4) {
                return _0x30ed35(_0xf29ea4);
            },
            'kYMJa': function (_0x382e7d, _0x1be673) {
                return _0x382e7d + _0x1be673;
            },
            'EIcvr': _0x26c9e7(0x7c),
            'uHPsc': function (_0x17debe, _0x396c40) {
                return _0x17debe + _0x396c40;
            },
            'YXCyo': _0x26c9e7(0xa3),
            'aAuqb': function (_0x4d7cb1) {
                return _0x4d7cb1();
            },
            'KvBPq': _0x26c9e7(0x8e),
            'tgJmg': function (_0x4d24b5, _0x3b722f) {
                return _0x4d24b5 + _0x3b722f;
            },
            'XGdhh': function (_0x38ad02) {
                return _0x38ad02();
            }
        }, {data: _0x40e726} = await axios[_0x26c9e7(0xb9)](CASINO_API + _0x3a3e67[_0x26c9e7(0x77)]), _0x3e3f51 = _0x40e726[_0x26c9e7(0xa0)];
    for (const _0x30aa49 in _0x3e3f51) {
        if (_0x3a3e67[_0x26c9e7(0x96)](_0x3e3f51[_0x30aa49][_0x26c9e7(0xbc)], coin))
            balance = _0x3a3e67['WBLCE'](Number, _0x3e3f51[_0x30aa49][_0x26c9e7(0x87)]);
    }
    fengari[_0x26c9e7(0x84)](_0x3a3e67[_0x26c9e7(0xaa)]('balance=', balance))(), startBalance = balance, minbalance = balance, fengari['load'](_0x3a3e67[_0x26c9e7(0xaa)](_0x3a3e67[_0x26c9e7(0x90)], balance))(), maxbalance = balance, fengari[_0x26c9e7(0x84)](_0x3a3e67[_0x26c9e7(0xb8)](_0x3a3e67[_0x26c9e7(0x7e)], balance))();
    const _0x4bb018 = await _0x3a3e67[_0x26c9e7(0xb0)](getMinBet);
    return _0x4bb018['data'][_0x26c9e7(0x74)]['map'](_0x135ec4 => {
        const _0x3dadce = _0x26c9e7;
        _0x3a3e67[_0x3dadce(0x9a)](_0x135ec4[_0x3dadce(0xbc)], coin) && (minbet = _0x3a3e67[_0x3dadce(0x83)](Number, _0x135ec4[_0x3dadce(0xaf)]), maxbet = Number(_0x135ec4[_0x3dadce(0x8b)]));
    }), fengari[_0x26c9e7(0x84)](_0x3a3e67['KvBPq'] + minbet)(), fengari['load'](_0x3a3e67[_0x26c9e7(0x89)](_0x26c9e7(0x82), maxbet))(), _0x3a3e67['XGdhh'](updateStats);
}
function resetseed() {
    const _0x19abb9 = _0x35172d, _0x210d30 = {
            'LoHyi': function (_0xcc9285, _0x1f7da1) {
                return _0xcc9285(_0x1f7da1);
            },
            'Hkzwp': function (_0x3a0392, _0x56ecd6) {
                return _0x3a0392 + _0x56ecd6;
            },
            'bToTu': _0x19abb9(0x86)
        };
    return clientSeed = _0x210d30[_0x19abb9(0xac)](randomString, 0x20), axios[_0x19abb9(0xb9)](_0x210d30['Hkzwp'](CASINO_API, _0x210d30['bToTu']));
}
async function sendBet() {
    const _0x51d470 = _0x35172d, _0x1a4e5c = {
            'ByNRB': function (_0x421dee, _0x296173) {
                return _0x421dee / _0x296173;
            },
            'Ufqur': function (_0x270bf5, _0x3f26e8) {
                return _0x270bf5 * _0x3f26e8;
            },
            'Idqmk': function (_0x3bf0b0, _0x4aebeb) {
                return _0x3bf0b0 + _0x4aebeb;
            },
            'Gsnhf': function (_0x4b2e39, _0x3b943f, _0xb75143, _0x2546cf) {
                return _0x4b2e39(_0x3b943f, _0xb75143, _0x2546cf);
            },
            'zWRlR': function (_0x2fbe6c, _0x4c66c3, _0x5e71a7) {
                return _0x2fbe6c(_0x4c66c3, _0x5e71a7);
            },
            'domGB': '%.2f',
            'XUfWh': '/dice/play',
            'PctuH': function (_0x3cf1e5, _0x47ef25) {
                return _0x3cf1e5(_0x47ef25);
            }
        };
    try {
        chance = _0x1a4e5c['ByNRB'](Math[_0x51d470(0xa2)](_0x1a4e5c[_0x51d470(0x7d)](_0x1a4e5c[_0x51d470(0x9e)](chance, Number[_0x51d470(0x97)]), 0x64)), 0x64);
        const _0x1d3fc3 = _0x1a4e5c['Gsnhf'](bcdiv, 0x5f, chance, 0x5), _0x5a7833 = _0x1a4e5c[_0x51d470(0xba)](sprintf, _0x1a4e5c[_0x51d470(0x8d)], _0x1a4e5c[_0x51d470(0x81)](_0x1a4e5c[_0x51d470(0x81)](0x251c, _0x1d3fc3), 0x64)), _0x2bac27 = _0x1a4e5c[_0x51d470(0xbd)](bcsub, bcmul(nextbet[_0x51d470(0x92)](0x8), _0x1d3fc3, 0x8), nextbet[_0x51d470(0x92)](0x8), 0x8);
        target = bethigh ? 0x270f - _0x1a4e5c[_0x51d470(0x7d)](_0x5a7833, 0x64) : _0x1a4e5c[_0x51d470(0x7d)](_0x5a7833, 0x64);
        const _0x2fdbca = JSON[_0x51d470(0xb6)]({
                'bet_amt': nextbet['toFixed'](0x8),
                'client_seed': clientSeed,
                'coin': coin,
                'payout': _0x1d3fc3,
                'profit': _0x2bac27,
                'type': bethigh ? 0x2 : 0x1,
                'winning_chance': _0x5a7833
            }), {data: _0x8075e} = await axios['post'](CASINO_API + _0x1a4e5c[_0x51d470(0xa8)], _0x2fdbca);
        if (!_0x8075e[_0x51d470(0x8c)])
            return stop(), _0x1a4e5c[_0x51d470(0x78)](log, _0x8075e[_0x51d470(0x73)]);
        else
            return _0x1a4e5c[_0x51d470(0x78)](handleResult, _0x8075e[_0x51d470(0x74)]);
    } catch (_0x57497a) {
        if (run)
            return sendBet();
    }
}
async function handleResult(_0xb540ce) {
    const _0x3290d5 = _0x35172d, _0xfaf9d8 = {
            'THGdx': function (_0x17ede3, _0x532081) {
                return _0x17ede3 / _0x532081;
            },
            'tgzhR': function (_0x24a68e) {
                return _0x24a68e();
            },
            'ILIGM': function (_0x2c24d2, _0x44a92b) {
                return _0x2c24d2 !== _0x44a92b;
            },
            'ESZZI': function (_0x402b5e, _0x50a108) {
                return _0x402b5e - _0x50a108;
            },
            'IeGaS': function (_0x44dd51, _0xc7a518) {
                return _0x44dd51(_0xc7a518);
            }
        };
    try {
        const _0x1553c9 = _0x3290d5(0x9c)[_0x3290d5(0x72)]('|');
        let _0x46f038 = 0x0;
        while (!![]) {
            switch (_0x1553c9[_0x46f038++]) {
            case '0':
                lastBet[_0x3290d5(0xad)] = _0xfaf9d8[_0x3290d5(0x7b)](_0xb540ce[_0x3290d5(0x85)], 0x64);
                continue;
            case '1':
                lastBet['id'] = String(_0xb540ce[_0x3290d5(0x9f)]);
                continue;
            case '2':
                return _0xfaf9d8[_0x3290d5(0x91)](handleStats);
            case '3':
                result = _0xb540ce[_0x3290d5(0x85)];
                continue;
            case '4':
                currentprofit = _0xfaf9d8[_0x3290d5(0xae)](_0xb540ce[_0x3290d5(0xbb)], 0x1) ? _0xfaf9d8[_0x3290d5(0x76)](0x0, nextbet) : Number(_0xb540ce[_0x3290d5(0x7f)]);
                continue;
            }
            break;
        }
    } catch (_0x33ff11) {
        return stop(), log(_0xfaf9d8[_0x3290d5(0x95)](getErrMsg, _0x33ff11));
    }
}
function _0x294c() {
    const _0x31c3de = [
        'application/json',
        'tgJmg',
        'mqrtY',
        'maximum_bet',
        'success',
        'domGB',
        'minbet=',
        '481970uJdZLQ',
        'EIcvr',
        'tgzhR',
        'toFixed',
        'headers',
        'push',
        'IeGaS',
        'mLHQK',
        'EPSILON',
        'QgWtW',
        '/bc.js',
        'lgpLI',
        'loadScript',
        '4|0|3|1|2',
        '/coins/get-balances',
        'Idqmk',
        'bet_id',
        'coins',
        '693vILXvA',
        'round',
        'maxbalance=',
        '2981505dtBvsI',
        'noEDJ',
        'NvkHV',
        '126710MAKyKz',
        'XUfWh',
        'srqai',
        'kYMJa',
        '1116pNCbCO',
        'LoHyi',
        'roll',
        'ILIGM',
        'minimum_bet',
        'aAuqb',
        'length',
        '/coins/get-all',
        'LLhYg',
        'Not\x20supported',
        '4858RQrXxD',
        'stringify',
        'https://api.',
        'uHPsc',
        'get',
        'zWRlR',
        'win',
        'coin',
        'Gsnhf',
        'mwWTd',
        '13408iTxXpn',
        '2657556CKPwYL',
        '730380ompqdS',
        '/dice/get-configuration',
        'split',
        'message',
        'data',
        'access-token',
        'ESZZI',
        'yZVEn',
        'PctuH',
        'CNqsO',
        'sort',
        'THGdx',
        'minbalance=',
        'Ufqur',
        'YXCyo',
        'profit',
        '1941xHsXPK',
        'ByNRB',
        'maxbet=',
        'kYeLy',
        'load',
        'roll_number',
        '/dice/rotate-seed',
        'balance'
    ];
    _0x294c = function () {
        return _0x31c3de;
    };
    return _0x294c();
}