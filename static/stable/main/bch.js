const _0x5df213 = _0x1caa;
(function (_0x584c57, _0x51918e) {
    const _0x5f1d3c = _0x1caa, _0x22afee = _0x584c57();
    while (!![]) {
        try {
            const _0x55e65b = -parseInt(_0x5f1d3c(0x4be)) / 0x1 * (parseInt(_0x5f1d3c(0x1d7)) / 0x2) + parseInt(_0x5f1d3c(0x2e7)) / 0x3 * (parseInt(_0x5f1d3c(0x242)) / 0x4) + -parseInt(_0x5f1d3c(0x1dd)) / 0x5 + parseInt(_0x5f1d3c(0x36f)) / 0x6 * (-parseInt(_0x5f1d3c(0x3e3)) / 0x7) + -parseInt(_0x5f1d3c(0x28c)) / 0x8 * (-parseInt(_0x5f1d3c(0x3df)) / 0x9) + -parseInt(_0x5f1d3c(0x319)) / 0xa + parseInt(_0x5f1d3c(0x452)) / 0xb;
            if (_0x55e65b === _0x51918e)
                break;
            else
                _0x22afee['push'](_0x22afee['shift']());
        } catch (_0x2b55e3) {
            _0x22afee['push'](_0x22afee['shift']());
        }
    }
}(_0x4d5a, 0x86744), Object[_0x5df213(0x29f)](String[_0x5df213(0x3f2)], 'capitalize', {
    'value': function () {
        const _0x124600 = _0x5df213;
        return this[_0x124600(0x335)](0x0)[_0x124600(0x1cd)]() + this[_0x124600(0x478)](0x1);
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = 'lua', game = _0x5df213(0x484), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x5df213(0x1e4), kenoRisk = _0x5df213(0x32d), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x5df213(0x4c0), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x5df213(0x4c0),
    'BetSide': 'between',
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x5df213(0x2c4))), wdbUI = _0x5df213(0x3ca) + WDB_MODE + _0x5df213(0x2b2) + CASINO_GAME + _0x5df213(0x2b5) + WDB_HOME + _0x5df213(0x2b2) + location[_0x5df213(0x288)]['replace'](_0x5df213(0x2f4), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = _0x5df213(0x4ba), plinkoLuaScript = _0x5df213(0x362), plinkoJsScript = _0x5df213(0x236), kenoLuaScript = _0x5df213(0x254), kenoJsScript = _0x5df213(0x251);
function exportLog() {
    const _0x487e45 = _0x5df213, _0x59c228 = { 'VYPMU': _0x487e45(0x3a4) }, _0x2810cf = JSON[_0x487e45(0x359)](fullLogs), _0x41017a = document['createElement']('a');
    _0x41017a['href'] = window[_0x487e45(0x1f2)][_0x487e45(0x225)](new Blob([_0x2810cf], { 'type': _0x59c228[_0x487e45(0x43d)] })), _0x41017a[_0x487e45(0x33a)] = _0x487e45(0x397) + Date[_0x487e45(0x31b)]()[_0x487e45(0x34b)]()[_0x487e45(0x478)](-0x6) + _0x487e45(0x253), _0x41017a[_0x487e45(0x28a)]();
}
class Chart {
    constructor(_0x269653, _0x2a2044 = ![], _0x471a8a = 0x64) {
        const _0x2d1aef = _0x5df213, _0x4dedea = {
                'iMBIv': _0x2d1aef(0x44b),
                'HhOgB': 'dark1'
            }, _0x175598 = _0x4dedea[_0x2d1aef(0x426)][_0x2d1aef(0x3a3)]('|');
        let _0x1997cb = 0x0;
        while (!![]) {
            switch (_0x175598[_0x1997cb++]) {
            case '0':
                this['dps'] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '1':
                this[_0x2d1aef(0x385)] = new CanvasJS[(_0x2d1aef(0x2fe))](_0x269653, {
                    'theme': _0x2a2044 ? _0x4dedea['HhOgB'] : _0x2d1aef(0x45f),
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': 'line',
                            'markerSize': 0x0,
                            'dataPoints': this[_0x2d1aef(0x2c6)]
                        }]
                });
                continue;
            case '2':
                this[_0x2d1aef(0x33e)] = _0x471a8a;
                continue;
            case '3':
                this['containerId'] = _0x269653;
                continue;
            case '4':
                this[_0x2d1aef(0x385)][_0x2d1aef(0x467)]();
                continue;
            case '5':
                this[_0x2d1aef(0x203)] = _0x2a2044;
                continue;
            }
            break;
        }
    }
    set ['maxRows'](_0x10d136) {
        const _0x53131c = _0x5df213;
        this[_0x53131c(0x33e)] = _0x10d136;
    }
    get [_0x5df213(0x25e)]() {
        const _0x3aea6b = _0x5df213;
        return this[_0x3aea6b(0x33e)];
    }
    set [_0x5df213(0x2f0)](_0x3db223) {
        const _0x5aafdf = _0x5df213, _0x17a7d5 = {
                'LDJwG': _0x5aafdf(0x296),
                'MFMsZ': _0x5aafdf(0x45f)
            };
        this[_0x5aafdf(0x203)] = _0x3db223, this[_0x5aafdf(0x385)][_0x5aafdf(0x34a)]['theme'] = _0x3db223 ? _0x17a7d5[_0x5aafdf(0x376)] : _0x17a7d5[_0x5aafdf(0x3cc)], this['chart'][_0x5aafdf(0x467)]();
    }
    get ['darkMode']() {
        return this['_darkMode'];
    }
    [_0x5df213(0x46f)](_0x1351ba, _0x2c3d33, _0x58d956) {
        const _0xcc0a95 = _0x5df213, _0x27c507 = {
                'HChVE': function (_0xab8915, _0x540d58) {
                    return _0xab8915 > _0x540d58;
                },
                'qbuuW': function (_0x1aa5b7, _0x314bff) {
                    return _0x1aa5b7 - _0x314bff;
                }
            };
        this[_0xcc0a95(0x2c6)][_0xcc0a95(0x41f)]({
            'x': _0x1351ba,
            'y': _0x2c3d33,
            'lineColor': _0x58d956
        });
        if (_0x27c507[_0xcc0a95(0x3e9)](this['dps'][_0xcc0a95(0x424)], this['_maxRows']))
            this[_0xcc0a95(0x2c6)]['shift']();
        if (this[_0xcc0a95(0x2c6)][_0x27c507['qbuuW'](this[_0xcc0a95(0x2c6)][_0xcc0a95(0x424)], 0x2)])
            this['dps'][_0x27c507['qbuuW'](this[_0xcc0a95(0x2c6)][_0xcc0a95(0x424)], 0x2)][_0xcc0a95(0x38b)] = _0x58d956;
        this[_0xcc0a95(0x385)][_0xcc0a95(0x467)]();
    }
    ['resetChart']() {
        const _0x35826c = _0x5df213;
        this['dps'] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x35826c(0x385)][_0x35826c(0x34a)][_0x35826c(0x393)][0x0][_0x35826c(0x322)] = this[_0x35826c(0x2c6)], this[_0x35826c(0x385)][_0x35826c(0x467)]();
    }
}
function changeMaxRows() {
    const _0x5590f4 = _0x5df213, _0x4749b5 = {
            'gqfFg': _0x5590f4(0x317),
            'nbUez': function (_0x30cd38) {
                return _0x30cd38();
            }
        }, _0x336789 = _0x4749b5[_0x5590f4(0x41d)]['split']('|');
    let _0x1d01c3 = 0x0;
    while (!![]) {
        switch (_0x336789[_0x1d01c3++]) {
        case '0':
            _0x4749b5[_0x5590f4(0x43b)](resethistory);
            continue;
        case '1':
            _0x4749b5['nbUez'](resetchart);
            continue;
        case '2':
            chart[_0x5590f4(0x25e)] = maxRows;
            continue;
        case '3':
            maxRows = Number(document[_0x5590f4(0x262)](_0x5590f4(0x290))[_0x5590f4(0x3db)]);
            continue;
        case '4':
            resetlog();
            continue;
        }
        break;
    }
}
function _0x1caa(_0x485e74, _0x1c7f5d) {
    const _0x4d5ab1 = _0x4d5a();
    return _0x1caa = function (_0x1caa5b, _0x37a437) {
        _0x1caa5b = _0x1caa5b - 0x1ca;
        let _0x52926c = _0x4d5ab1[_0x1caa5b];
        return _0x52926c;
    }, _0x1caa(_0x485e74, _0x1c7f5d);
}
function toggleDarkMode() {
    const _0x22d199 = _0x5df213, _0x5cddc7 = {
            'wLutW': '#2a2a2a',
            'QmGtS': _0x22d199(0x1da),
            'HTQpU': _0x22d199(0x496),
            'FUOvM': 'wdb',
            'ujvLq': _0x22d199(0x48d),
            'KvWdm': _0x22d199(0x357),
            'IHAXg': _0x22d199(0x325),
            'QRKCM': _0x22d199(0x39e),
            'dwCbG': _0x22d199(0x1cb),
            'OWmKO': 'darcula',
            'TwMGc': _0x22d199(0x250),
            'ruhqG': 'antiquewhite',
            'zKHOM': _0x22d199(0x434),
            'wLQWm': function (_0x5c0cd0) {
                return _0x5c0cd0();
            }
        };
    darkMode = !darkMode, chart[_0x22d199(0x2f0)] = darkMode;
    const _0x380ccb = document[_0x22d199(0x262)](_0x5cddc7[_0x22d199(0x2d0)]), _0x52b615 = document[_0x22d199(0x262)](_0x5cddc7[_0x22d199(0x4b9)]), _0x19ddfc = document[_0x22d199(0x1d2)](_0x22d199(0x388)), _0x4d2ca1 = document[_0x22d199(0x1d2)](_0x5cddc7['KvWdm']), _0x21a99b = document['querySelectorAll'](_0x5cddc7['IHAXg']);
    if (darkMode) {
        const _0x480638 = _0x22d199(0x379)['split']('|');
        let _0x3c5896 = 0x0;
        while (!![]) {
            switch (_0x480638[_0x3c5896++]) {
            case '0':
                luaEditor[_0x22d199(0x2d2)](_0x5cddc7[_0x22d199(0x23b)], 'darcula');
                continue;
            case '1':
                _0x52b615[_0x22d199(0x3d3)][_0x22d199(0x1eb)] = _0x5cddc7['dwCbG'];
                continue;
            case '2':
                _0x380ccb['style'][_0x22d199(0x35c)] = _0x5cddc7[_0x22d199(0x48a)];
                continue;
            case '3':
                _0x380ccb[_0x22d199(0x3d3)]['borderColor'] = _0x22d199(0x42e);
                continue;
            case '4':
                _0x19ddfc[_0x22d199(0x3ef)](_0x389988 => {
                    const _0x45afa1 = _0x22d199;
                    _0x389988[_0x45afa1(0x3d3)][_0x45afa1(0x1eb)] = _0x5cddc7[_0x45afa1(0x208)], _0x389988['style'][_0x45afa1(0x35c)] = _0x5cddc7[_0x45afa1(0x48a)];
                });
                continue;
            case '5':
                jsEditor[_0x22d199(0x2d2)](_0x5cddc7[_0x22d199(0x23b)], _0x5cddc7['OWmKO']);
                continue;
            case '6':
                _0x21a99b[_0x22d199(0x3ef)](_0x42c3c8 => _0x42c3c8[_0x22d199(0x3d3)][_0x22d199(0x35c)] = _0x22d199(0x1da));
                continue;
            case '7':
                _0x380ccb[_0x22d199(0x3d3)][_0x22d199(0x1eb)] = _0x5cddc7['wLutW'];
                continue;
            case '8':
                _0x4d2ca1[_0x22d199(0x3ef)](_0x27f70a => _0x27f70a[_0x22d199(0x3d3)][_0x22d199(0x35c)] = _0x22d199(0x1da));
                continue;
            }
            break;
        }
    } else {
        const _0x5909f1 = _0x5cddc7[_0x22d199(0x268)][_0x22d199(0x3a3)]('|');
        let _0x539d30 = 0x0;
        while (!![]) {
            switch (_0x5909f1[_0x539d30++]) {
            case '0':
                luaEditor['setOption'](_0x5cddc7[_0x22d199(0x23b)], _0x22d199(0x434));
                continue;
            case '1':
                _0x380ccb[_0x22d199(0x3d3)]['borderColor'] = _0x5cddc7['QmGtS'];
                continue;
            case '2':
                _0x380ccb['style'][_0x22d199(0x35c)] = _0x5cddc7[_0x22d199(0x1e3)];
                continue;
            case '3':
                _0x380ccb[_0x22d199(0x3d3)][_0x22d199(0x1eb)] = _0x22d199(0x1da);
                continue;
            case '4':
                _0x21a99b[_0x22d199(0x3ef)](_0x32159c => _0x32159c[_0x22d199(0x3d3)]['color'] = _0x22d199(0x496));
                continue;
            case '5':
                _0x19ddfc['forEach'](_0xc7ac45 => {
                    const _0x2f7872 = _0x22d199;
                    _0xc7ac45[_0x2f7872(0x3d3)][_0x2f7872(0x1eb)] = _0x5cddc7['QmGtS'], _0xc7ac45[_0x2f7872(0x3d3)][_0x2f7872(0x35c)] = _0x5cddc7[_0x2f7872(0x1e3)];
                });
                continue;
            case '6':
                _0x52b615[_0x22d199(0x3d3)]['backgroundColor'] = _0x5cddc7['ruhqG'];
                continue;
            case '7':
                jsEditor[_0x22d199(0x2d2)](_0x5cddc7[_0x22d199(0x23b)], _0x5cddc7[_0x22d199(0x231)]);
                continue;
            case '8':
                _0x4d2ca1['forEach'](_0x3deee6 => _0x3deee6[_0x22d199(0x3d3)][_0x22d199(0x35c)] = '#000');
                continue;
            }
            break;
        }
    }
    _0x5cddc7['wLQWm'](updateStats);
}
let previousPosition = {
    'top': '5px',
    'left': _0x5df213(0x221),
    'position': _0x5df213(0x3ad)
};
function loadSavedPosition() {
    const _0x18a323 = _0x5df213, _0xefae8b = { 'BEtRP': 'wdb-bot-position' }, _0x42173f = localStorage[_0x18a323(0x20b)](_0xefae8b[_0x18a323(0x2fb)]);
    if (_0x42173f)
        try {
            const _0x280f53 = JSON['parse'](_0x42173f);
            _0x280f53[_0x18a323(0x41c)] && _0x280f53[_0x18a323(0x3bd)] && (previousPosition = _0x280f53);
        } catch (_0x2b3dfe) {
        }
}
function _0x4d5a() {
    const _0x2fd4ab = [
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'bethigh',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'YVFkX',
        'znjUR',
        'wdbWagered',
        'plMix',
        '$1=$1*$2\x20',
        '3|2|1|0|4',
        'wpZsV',
        '4893560dgOXxC',
        'wdbMenuMode',
        'now',
        'Log',
        'JFKKe',
        'eNfkS',
        'xJLFc',
        'XqiWt',
        'iZxXY',
        'dataPoints',
        'dobet()',
        '\x0a\x20\x20\x20\x20chance=',
        '.wdb-stats\x20div\x20li',
        'betSide',
        'Result',
        'jClnn',
        '\x0a\x20\x20\x20\x20balance=',
        'innerHeight',
        'wdbHighWinStreak',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'classic',
        'HhLSp',
        'PmRCI',
        'return\x20chance1',
        'WKlbL',
        'CPlhi',
        'aMFAW',
        'cbHRe',
        'charAt',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'resetChart',
        'wdbStopOnWinButton',
        'response',
        'download',
        'CiNJu',
        'wdbWrapLog',
        'HMGwH',
        '_maxRows',
        '\x0a\x20\x20\x20\x20winstreak=',
        'wdbWrapLicenseBox',
        'LlUbW',
        'return\x20plinkoRisk',
        'appendChild',
        'LPGYk',
        'yYPRQ',
        'tagName',
        'BHvrj',
        'WOZib',
        'bnyXu',
        'options',
        'toString',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'rlomY',
        'bBMJh',
        'wdbOpenJSScript',
        'NQWIh',
        'pSZwU',
        'EXhQm',
        'JiohF',
        '2|1|5|4|3|0',
        'WYFZg',
        'HinMW',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        '190px',
        'stringify',
        'YMzAX',
        'chance2',
        'color',
        'files',
        'BetSide',
        'qZSTj',
        'MSPgt',
        'advancedMultiOnLoseCheck',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'hEqml',
        'AUUtL',
        'UvBuV',
        'hwirC',
        '%\x20chance\x20to\x20win,\x20',
        'ggOUa',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'tCTzN',
        '380px',
        'mVUis',
        'OIYIR',
        '#wdbHistory',
        '1501662FYYTay',
        'flex',
        'ZSbpq',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'YJptT',
        'koKPi',
        'nRcSH',
        'LDJwG',
        'calc(100vh\x20-\x2060px)',
        'setTime',
        '7|2|3|1|0|5|4|8|6',
        'AGrGG',
        'join',
        'WDBScript',
        'uOMDw',
        'BaJNU',
        'Stop\x20on\x20current\x20streak\x20',
        'wdbStartButton',
        'hfsxe',
        'getComputedStyle',
        'save',
        'gWkDn',
        'chart',
        'floor',
        'red',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'eyOAc',
        'toFixed',
        'lineColor',
        'activeElement',
        'RWwTR',
        'jcZRp',
        'cookie',
        'RPKwU',
        'STwHi',
        '\x0a\x20\x20\x20\x20chance4=',
        'data',
        'zozSC',
        'firstChild',
        'Betting\x20',
        'log-',
        'CZhei',
        'onmousemove',
        'advancedBetHighOnProfit',
        'WsChL',
        'dYopg',
        'wdbHighLose',
        'theme',
        'WZZYn',
        'nujmO',
        'YkHyI',
        'iBbkz',
        'split',
        'application/json',
        '#ffc0cb',
        'roll',
        'KknGN',
        'random',
        'nYuxL',
        'wdbResumeButton',
        'pLgST',
        'qzQlJ',
        'fixed',
        'wdbWrapInitializing',
        'lAHrD',
        'LQtgj',
        'handleAdvanced\x20ok',
        'closest',
        'white',
        'wdbRunningScript',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'wqhzJ',
        'ahClG',
        'xGjRz',
        '</td>',
        'wdbPercentWagered',
        'LiBFz',
        'advancedChance',
        'left',
        '#advancedBetHigh',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'FyRNT',
        '$1=$1/$2\x20',
        'EpsIq',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'piDpG',
        'wdbHistory',
        'saXUg',
        'PtoFR',
        'round',
        'wdbAdvancedMode',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'wdbLUAMode',
        'MFMsZ',
        'TNpNO',
        'XuNsU',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'gGNQD',
        'XVNuN',
        'yfTTm',
        'style',
        'wdbLog',
        'DIICw',
        'block',
        'sUoya',
        'wdbWrapVariables',
        'reset',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'value',
        'JvEys',
        'HYJxX',
        'offsetTop',
        '9AxWbhw',
        'offsetHeight',
        'pJSYG',
        'nonce',
        '14JTwpML',
        'high',
        'return\x20scriptname',
        'naEEJ',
        'hdJno',
        'bVKRa',
        'HChVE',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'pUELZ',
        'wdbToggleShow',
        'wdbToggleLive',
        'play',
        'forEach',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'XGZrf',
        'prototype',
        'nlTsD',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'qsXLC',
        'QBNeC',
        'DJuRR',
        'getValue',
        'ZuuLF',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'Pvybi',
        'oeCXn',
        'DPiDK',
        'pCmRX',
        'advanced',
        'currency=\x22',
        'svrwH',
        'keno',
        'position',
        'liBSt',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'qcEnj',
        'EtSpu',
        'insertBefore',
        '/fengari-web.min.js',
        'njhTO',
        'xgxmP',
        'IhZYA',
        'HgfKr',
        'yGgqO',
        'Shdet',
        'wdbHighLoseStreak',
        'IZVgb',
        'TmHcR',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'advancedStopOnLoseCheck',
        'NMatd',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'qtdVp',
        'EIUsr',
        'tBNVs',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'top',
        'gqfFg',
        'HkqIE',
        'push',
        '\x20to\x20win,\x20',
        'Chance1',
        'message',
        'wdbJSMode',
        'length',
        'advancedChanceOnWinCheck',
        'iMBIv',
        'yuDLI',
        'advancedMultiOnLoseBets',
        'result',
        'amount',
        'event',
        'KkHHs',
        'createElement',
        '#2a2a2a',
        'cVHxI',
        'Kewsj',
        'stopOnProfitCheck',
        'wdbMain',
        'pBfNT',
        'default',
        'wdb-bot-position',
        'Ranxf',
        'hhDEp',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'Omagr',
        'advancedBetHighOnLose',
        'nbUez',
        'wdbCurrentStreak',
        'VYPMU',
        'THzpH',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'igjYY',
        'lBaue',
        'advancedBetHighOnProfitCheck',
        'qggSW',
        'TEXTAREA',
        'wdbToggleMinimal',
        'wdbMaxProfit',
        'advancedChanceOnLoseCheck',
        'HhiQz',
        '0123456789abcdef',
        'deleteH',
        '3|5|2|0|1|4',
        'stopOnBalanceCheck',
        'advancedBaseBet',
        'cldjz',
        'wdbWins',
        'ZxsbV',
        'urfQq',
        '13952774VgDiVL',
        'PbMwW',
        'jinrv',
        'lspsQ',
        'disabled',
        'Stop\x20on\x20roll\x20number\x20',
        'advancedMultiOnWinCheck',
        'QMgbk',
        'wnZVS',
        'setItem',
        'XzKup',
        'return\x20nextbet',
        'Tips',
        'light1',
        'wSPug',
        'gYKaU',
        'preventDefault',
        'loadScript',
        'skIlv',
        'dihQL',
        'green',
        'render',
        '\x0a\x20\x20\x20\x20profit=',
        'chance',
        '/canvasjs.min.js',
        'RLnzS',
        'KcLXA',
        'sNcoj',
        'QyqIa',
        'updateChart',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'yLrzD',
        'itggg',
        '\x0a\x20\x20\x20\x20minprofit=',
        'Eyhph',
        'WWiFl',
        'bvbDM',
        'slice',
        'Jbmuc',
        'PLjYu',
        'sxYPP',
        'Variables',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'dnyXJ',
        'chance4',
        'KZlNJ',
        'kenoNumbers',
        'hlXHi',
        'huBOp',
        'dice',
        'ZnXpI',
        'wdbScriptBoxLUA',
        'setValue',
        'IpLtE',
        'RlpWF',
        'QmGtS',
        'return\x20chance',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'wdbHeader',
        'QEBnJ',
        'not\x20',
        'vlNFl',
        'DKlAa',
        'innerHTML',
        'Schua',
        'rKHqo',
        '1|2|5|4|3|6|0',
        '#000',
        'checked',
        'JpRHN',
        'BkCwX',
        ';path=/',
        'kWvaK',
        'wdbPercentProfit',
        'advancedMultiOnWinBets',
        'wdbWrapHistory',
        'fSfui',
        'CMLYw',
        'advancedMultiOnLose',
        'cdjjj',
        'HwfLD',
        'yNfvd',
        '1000px',
        'kzTgh',
        'advancedStopOnWinsCheck',
        'wdbLosses',
        'xdMxF',
        'text',
        'JDpkQ',
        'qjHKp',
        '\x0a\x20\x20\x20\x20wins=',
        '\x0a\x20\x20\x20\x20bethigh=',
        '0.00',
        'show',
        'start',
        'wdbWrapControl',
        'rViVN',
        'wdbMinProfit',
        'VIbhh',
        'kVMRB',
        'KKXMl',
        'sbTTD',
        'ujvLq',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'mNaOG',
        'replace',
        'pDBYW',
        '1033hUMHDD',
        'xYCcz',
        'between',
        'TUins',
        'dimgray',
        'PVhFm',
        'toUpperCase',
        'cWSwa',
        'bexBT',
        'mnIEk',
        'wdbShow',
        'querySelectorAll',
        'HIRaT',
        'AiSXD',
        'yKVdU',
        'advancedStopOnBets',
        '650ukKnAE',
        'wdbWrapTips',
        'KOfpP',
        '#fff',
        'div',
        'isContentEditable',
        '1216630EQwFMb',
        'head',
        'DNPnM',
        'hrWqR',
        'QgDLY',
        'CapqW',
        'HTQpU',
        'low',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'onmouseup',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        'eKmFw',
        '\x20at\x20',
        'lua',
        'backgroundColor',
        'NYKVh',
        'dqEUD',
        'HxWYC',
        'AIEOH',
        'hide',
        'ROdQH',
        'URL',
        'outside',
        'rangedice',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'DfORX',
        'gXlbo',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'addEventListener',
        'YlsYZ',
        'diqWf',
        'TUxmf',
        'advancedStopOnLose',
        'clientY',
        'REyym',
        'EQryZ',
        'QBwyM',
        'Connected',
        '_darkMode',
        'bgfBK',
        'scriptName',
        'ZEeil',
        'KWEQq',
        'wLutW',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'showInfo\x20OK',
        'getItem',
        'sgQjJ',
        'stop',
        'ICzmk',
        '0:0:0:0',
        'rTWej',
        'yGUXn',
        'advancedBetHighOnWin',
        'querySelector',
        'SluIR',
        'return\x20betSide',
        'ttDCb',
        'FJQGx',
        '<input\x20id=\x22bethigh',
        'pTlxh',
        'fJEOY',
        'iQkhy',
        '<option\x20value=\x22',
        'remove',
        'ncrYq',
        'advancedBetHighOnLoseCheck',
        'lastChild',
        '5px',
        'LQhco',
        'offsetLeft',
        'wdb',
        'createObjectURL',
        '#wdbSaveScriptButton',
        'return\x20chance4',
        'href',
        '\x0a\x20\x20\x20\x20chance2=',
        'AtbIy',
        'yVZVY',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'advancedStopAfterStreak',
        'WqxOW',
        '\x0a\x20\x20\x20\x20losses=',
        'DNwCK',
        'zKHOM',
        'onmousedown',
        'TVzoJ',
        'KhdQU',
        'EPSILON',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'wEHyZ',
        'return\x20chance3',
        'QRKCM',
        'vYYvX',
        '$1=$1-$2\x20',
        'dYhwt',
        'BXgvW',
        'clear',
        'Ilaau',
        '1328qzcrYc',
        'Chance2',
        'QOobh',
        'FHPbG',
        'ydGOj',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'wdbChart',
        'NcbTs',
        'display',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'wdbWrap',
        'wdbMaxBalance',
        'FVQsU',
        'mWOJk',
        '3|2|1|6|0|7|5|8|4',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'hHNil',
        '.json',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'EtmPv',
        'CHtTZ',
        'JZZty',
        'XanED',
        'none',
        'CRCne',
        'chance1',
        'MdzDe',
        'advancedStopOnWins',
        'maxRows',
        'VQbJO',
        'YTIgq',
        'advancedChanceOnWin',
        'getElementById',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'uTiTU',
        'return\x20kenoRisk',
        'indexOf',
        '\x0a\x20\x20\x20\x20losestreak=',
        'TwMGc',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'GCbqF',
        'black',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'plinko',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'getTime',
        'LRrVT',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'tSDWD',
        'BaEOY',
        'wdbShowMode',
        'load',
        'MEtqJ',
        '0123456789',
        'LRgjk',
        'advancedBetHighOnBetCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'wdbHighBet',
        'width',
        'FyDrp',
        'ywINr',
        'return\x20currency',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'Roll',
        'AdeUH',
        'ZqRXx',
        'YLVAz',
        'ciqkm',
        'rrcwA',
        'hostname',
        'jBWTO',
        'click',
        'target',
        '3444856ezMQlP',
        'bCPsD',
        'advancedStopRollNumber',
        'innerText',
        'wdbMaxRows',
        'BlNfN',
        'SycoL',
        'children',
        'dDvBQ',
        'XypXv',
        'dark1',
        'iOvra',
        'updateLua\x20done',
        '0|4|3|5|2|1',
        'EEBwZ',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'wwNiJ',
        'javascript',
        'ZVYuJ',
        'defineProperty',
        'shift',
        'rCbXM',
        'ViOoN',
        'wdbWrapPercentProfit',
        'text/plain;\x20charset=utf-8',
        'EfLuF',
        'toLowerCase',
        'advancedChanceOnWinBets',
        'FCZOS',
        'SoRPa',
        'xjHiy',
        'ehKEj',
        'xACHv',
        'ygRzr',
        'advancedBetHighOnWinCheck',
        'VIutk',
        'trim',
        'umULF',
        '\x20|\x20',
        'script',
        'mHIEb',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'PcWjn',
        'eEMQe',
        'then',
        'toUTCString',
        'cDoqm',
        'wdbMinBalance',
        'EcJAU',
        'BGDeJ',
        'mbJac',
        'mXDGQ',
        'HOqeL',
        'BsgFO',
        'loadCSS',
        'chance3',
        '/ching.mp3',
        'advancedMultiOnWin',
        'dps',
        'jysEA',
        'iwTzo',
        'SkyVJ',
        'height',
        'swTVT',
        'DxCEp',
        'clientX',
        'edWZc',
        'map',
        'FUOvM',
        'wdbWrapFunctions',
        'setOption',
        '\x0a\x20\x20\x20\x20bets=',
        'fromTextArea',
        'dyCUJ',
        'wdbSpeed',
        'AFTSg',
        'wdbBets',
        'Zmwob',
        'INPUT',
        'gdgAF',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'hDMEG',
        'filter',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        '\x0a\x20\x20\x20\x20minbalance=',
        'innerWidth',
        'Wtqrm',
        'advancedStopAfterStreakCheck',
        'profit',
        '\x20lose',
        'CuyHZ',
        '3801CmVuaE',
        '\x0a\x20\x20\x20\x20win=',
        'Chance4',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'LJzyp',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'Script\x20Name:\x20',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'darkMode',
        'wdbTime',
        'wdbOpenLUAScript',
        'change',
        'www.',
        'pIicf',
        'YEgUP',
        'wdbScriptBoxJS',
        'LvDCj',
        'mUrOb',
        'vZPju',
        'BEtRP',
        'UOPod',
        'hEYDK',
        'Chart',
        '#wdbOpenScript',
        '\x20bet',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        '0|9|3|8|1|4|6|5|7|2',
        'wdbMenuCoin',
        'tBOyO',
        '\x0a\x20\x20\x20\x20chance3=',
        'HbtJp',
        '0|4|2|3|1',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        '\x20to\x20win',
        'Functions',
        'updateStats\x20ok',
        'jrMaD',
        'wdbProfit'
    ];
    _0x4d5a = function () {
        return _0x2fd4ab;
    };
    return _0x4d5a();
}
function savePosition() {
    const _0x1741ff = _0x5df213, _0x1a8115 = { 'LRrVT': _0x1741ff(0x435) };
    localStorage[_0x1741ff(0x45b)](_0x1a8115[_0x1741ff(0x270)], JSON[_0x1741ff(0x359)](previousPosition));
}
function toggleMinimalBot(_0x230dd8) {
    const _0x560eca = _0x5df213, _0x4369a0 = {
            'cDoqm': _0x560eca(0x432),
            'LRgjk': 'wdbFooter',
            'rTWej': _0x560eca(0x224),
            'ncrYq': _0x560eca(0x221),
            'cbHRe': _0x560eca(0x3ad),
            'ZEeil': function (_0x1f1982) {
                return _0x1f1982();
            },
            'wwNiJ': _0x560eca(0x259),
            'NcbTs': '350px',
            'mnIEk': function (_0x165d76, _0x28ee77) {
                return _0x165d76 / _0x28ee77;
            },
            'LvDCj': function (_0x1e7a03, _0x67eb5d) {
                return _0x1e7a03 - _0x67eb5d;
            },
            'qtdVp': _0x560eca(0x377),
            'DPiDK': function (_0x537426, _0x57194d) {
                return _0x537426 + _0x57194d;
            },
            'exYMr': _0x560eca(0x495),
            'KcLXA': 'block',
            'qcEnj': _0x560eca(0x4a5)
        }, _0x2e15de = document[_0x560eca(0x262)](_0x4369a0[_0x560eca(0x2ba)]), _0x154977 = document[_0x560eca(0x262)](_0x4369a0[_0x560eca(0x278)]), _0x55adbd = document[_0x560eca(0x262)](_0x4369a0[_0x560eca(0x210)]);
    if (_0x230dd8[_0x560eca(0x28f)] === '▼') {
        const _0x11af95 = window[_0x560eca(0x382)](_0x55adbd);
        previousPosition = {
            'top': _0x55adbd[_0x560eca(0x3d3)][_0x560eca(0x41c)] || _0x11af95['top'] || _0x4369a0['ncrYq'],
            'left': _0x55adbd[_0x560eca(0x3d3)][_0x560eca(0x3bd)] || _0x11af95[_0x560eca(0x3bd)] || _0x4369a0[_0x560eca(0x21e)],
            'position': _0x55adbd[_0x560eca(0x3d3)]['position'] || _0x11af95['position'] || _0x4369a0[_0x560eca(0x334)]
        }, _0x4369a0[_0x560eca(0x206)](savePosition), _0x2e15de[_0x560eca(0x3d3)]['display'] = _0x4369a0[_0x560eca(0x29c)], _0x154977[_0x560eca(0x3d3)]['display'] = _0x560eca(0x259), _0x55adbd[_0x560eca(0x3d3)]['width'] = _0x4369a0[_0x560eca(0x249)];
        const _0x39ea62 = window['innerWidth'], _0x22a0e5 = 0x15e, _0x55de59 = _0x4369a0[_0x560eca(0x1d0)](_0x4369a0[_0x560eca(0x2f8)](_0x39ea62, _0x22a0e5), 0x2);
        _0x55adbd[_0x560eca(0x3d3)][_0x560eca(0x41c)] = _0x4369a0[_0x560eca(0x418)], _0x55adbd['style'][_0x560eca(0x3bd)] = _0x4369a0[_0x560eca(0x3fd)](_0x55de59, 'px'), _0x55adbd[_0x560eca(0x3d3)]['position'] = _0x4369a0[_0x560eca(0x334)], _0x230dd8[_0x560eca(0x28f)] = '▲';
    } else {
        const _0x37ef70 = _0x4369a0['exYMr'][_0x560eca(0x3a3)]('|');
        let _0x5152d4 = 0x0;
        while (!![]) {
            switch (_0x37ef70[_0x5152d4++]) {
            case '0':
                _0x230dd8['innerText'] = '▼';
                continue;
            case '1':
                _0x2e15de[_0x560eca(0x3d3)][_0x560eca(0x24a)] = 'block';
                continue;
            case '2':
                _0x154977[_0x560eca(0x3d3)][_0x560eca(0x24a)] = _0x4369a0[_0x560eca(0x46c)];
                continue;
            case '3':
                _0x55adbd['style'][_0x560eca(0x3bd)] = previousPosition[_0x560eca(0x3bd)];
                continue;
            case '4':
                _0x55adbd['style']['top'] = previousPosition[_0x560eca(0x41c)];
                continue;
            case '5':
                _0x55adbd['style'][_0x560eca(0x27d)] = _0x4369a0[_0x560eca(0x406)];
                continue;
            case '6':
                _0x55adbd[_0x560eca(0x3d3)][_0x560eca(0x403)] = previousPosition['position'];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x3c5eea) {
    const _0x5e79f4 = _0x5df213, _0x4bc226 = {
            'CMLYw': _0x5e79f4(0x4b2),
            'QMgbk': function (_0x3bbe4e, _0x4c5f02) {
                return _0x3bbe4e === _0x4c5f02;
            },
            'EtmPv': _0x5e79f4(0x259),
            'CHtTZ': _0x5e79f4(0x370)
        }, _0x3e16d2 = document['getElementById'](_0x4bc226[_0x5e79f4(0x4a0)]);
    _0x4bc226[_0x5e79f4(0x459)](_0x3c5eea[_0x5e79f4(0x28f)], '▲') ? (_0x3e16d2[_0x5e79f4(0x3d3)][_0x5e79f4(0x24a)] = _0x4bc226[_0x5e79f4(0x255)], _0x3c5eea[_0x5e79f4(0x28f)] = '▼') : (_0x3e16d2[_0x5e79f4(0x3d3)][_0x5e79f4(0x24a)] = _0x4bc226[_0x5e79f4(0x256)], _0x3c5eea[_0x5e79f4(0x28f)] = '▲');
}
function drawSelectCoin() {
    const _0xa2571e = _0x5df213, _0x56a632 = { 'qsXLC': 'wdbMenuCoin' }, _0x689910 = coins['map'](_0x13e417 => _0xa2571e(0x21c) + _0x13e417 + '\x22>' + _0x13e417 + '</option>')[_0xa2571e(0x37b)]('');
    document[_0xa2571e(0x262)](_0x56a632[_0xa2571e(0x3f5)])[_0xa2571e(0x492)] = _0x689910, currency = String(coin)[_0xa2571e(0x2a6)](), fengari[_0xa2571e(0x275)](_0xa2571e(0x400) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x510351 = _0x5df213, _0x21834b = {
            'Jbmuc': _0x510351(0x299),
            'qzQlJ': function (_0x46f930, _0x1619e8) {
                return _0x46f930 - _0x1619e8;
            },
            'KZlNJ': function (_0x2c4255, _0x16db24) {
                return _0x2c4255 + _0x16db24;
            },
            'BXgvW': _0x510351(0x445),
            'rkxeg': function (_0x3a5807) {
                return _0x3a5807();
            },
            'TUins': function (_0x204fc7, _0x40e081) {
                return _0x204fc7 === _0x40e081;
            },
            'naEEJ': _0x510351(0x2da),
            'hwirC': _0x510351(0x444),
            'uXaAR': '.CodeMirror',
            'CUHwE': function (_0xc11c72, _0x40d987) {
                return _0xc11c72 / _0x40d987;
            },
            'nlTsD': function (_0x26b677, _0x424f80) {
                return _0x26b677 / _0x424f80;
            },
            'iqqib': function (_0x1afec3, _0x9a9276) {
                return _0x1afec3 === _0x9a9276;
            },
            'hBElf': function (_0xa75434, _0x356d0a) {
                return _0xa75434 === _0x356d0a;
            },
            'bVKRa': function (_0x5963ed, _0x178d4f) {
                return _0x5963ed + _0x178d4f;
            },
            'cVHxI': function (_0x156546) {
                return _0x156546();
            },
            'LQtgj': 'wdbHeader',
            'yYPRQ': 'keydown',
            'SnPvo': 'resize',
            'ALJsd': _0x510351(0x340),
            'hDMEG': _0x510351(0x3ae),
            'bvbDM': _0x510351(0x486),
            'UOPod': _0x510351(0x434),
            'edWZc': 'lua',
            'bBMJh': _0x510351(0x29d),
            'PJMPX': _0x510351(0x423),
            'jrMaD': _0x510351(0x259),
            'CZhei': 'wdbAdvancedMode',
            'FyRNT': _0x510351(0x33c),
            'mVUis': _0x510351(0x3d8),
            'hfsxe': _0x510351(0x2d1),
            'KrwVO': _0x510351(0x274),
            'HYJxX': _0x510351(0x28a),
            'cldjz': _0x510351(0x2f3),
            'bgfBK': _0x510351(0x248)
        }, _0x3a0afd = document[_0x510351(0x42d)](_0x510351(0x1db));
    _0x3a0afd['id'] = _0x510351(0x24c), _0x3a0afd[_0x510351(0x492)] = wdbUI, document['body']['prepend'](_0x3a0afd);
    const _0x4bca52 = document[_0x510351(0x262)]('wdb');
    let _0x14c287 = 0x0, _0x5b8004 = 0x0, _0x2f7f8e = 0x0, _0x414186 = 0x0;
    _0x21834b[_0x510351(0x42f)](loadSavedPosition), _0x4bca52[_0x510351(0x3d3)][_0x510351(0x41c)] = previousPosition[_0x510351(0x41c)], _0x4bca52['style'][_0x510351(0x3bd)] = previousPosition[_0x510351(0x3bd)], _0x4bca52[_0x510351(0x3d3)][_0x510351(0x403)] = previousPosition[_0x510351(0x403)];
    function _0x16af7e(_0x2633e2) {
        const _0x38f2d3 = _0x510351, _0x416d16 = _0x21834b[_0x38f2d3(0x479)][_0x38f2d3(0x3a3)]('|');
        let _0xe02095 = 0x0;
        while (!![]) {
            switch (_0x416d16[_0xe02095++]) {
            case '0':
                _0x2633e2 = _0x2633e2 || window['event'];
                continue;
            case '1':
                document[_0x38f2d3(0x399)] = _0x4db724;
                continue;
            case '2':
                document[_0x38f2d3(0x1e6)] = _0x1e27fd;
                continue;
            case '3':
                _0x2f7f8e = _0x2633e2[_0x38f2d3(0x2cd)];
                continue;
            case '4':
                _0x2633e2[_0x38f2d3(0x462)]();
                continue;
            case '5':
                _0x414186 = _0x2633e2[_0x38f2d3(0x1fe)];
                continue;
            }
            break;
        }
    }
    function _0x4db724(_0x4cabd9) {
        const _0x5c0ae2 = _0x510351;
        _0x4cabd9 = _0x4cabd9 || window[_0x5c0ae2(0x42b)], _0x4cabd9[_0x5c0ae2(0x462)](), _0x14c287 = _0x21834b[_0x5c0ae2(0x3ac)](_0x2f7f8e, _0x4cabd9[_0x5c0ae2(0x2cd)]), _0x5b8004 = _0x414186 - _0x4cabd9['clientY'], _0x2f7f8e = _0x4cabd9[_0x5c0ae2(0x2cd)], _0x414186 = _0x4cabd9['clientY'];
        let _0x28751c = _0x21834b[_0x5c0ae2(0x3ac)](_0x4bca52[_0x5c0ae2(0x3de)], _0x5b8004), _0xc13bc2 = _0x21834b['qzQlJ'](_0x4bca52[_0x5c0ae2(0x223)], _0x14c287);
        _0x4bca52[_0x5c0ae2(0x3d3)]['top'] = _0x21834b[_0x5c0ae2(0x480)](_0x28751c, 'px'), _0x4bca52['style'][_0x5c0ae2(0x3bd)] = _0x21834b['KZlNJ'](_0xc13bc2, 'px');
    }
    function _0x1e27fd() {
        const _0x780cd3 = _0x510351, _0x1fe09e = document[_0x780cd3(0x262)](_0x21834b[_0x780cd3(0x23f)]);
        if (_0x1fe09e && _0x1fe09e[_0x780cd3(0x28f)] === '▼') {
            const _0x202d3d = window[_0x780cd3(0x382)](_0x4bca52);
            previousPosition[_0x780cd3(0x41c)] = _0x4bca52[_0x780cd3(0x3d3)]['top'] || _0x202d3d['top'], previousPosition['left'] = _0x4bca52[_0x780cd3(0x3d3)][_0x780cd3(0x3bd)] || _0x202d3d[_0x780cd3(0x3bd)], _0x21834b['rkxeg'](savePosition);
        }
        document[_0x780cd3(0x1e6)] = null, document[_0x780cd3(0x399)] = null;
    }
    document[_0x510351(0x262)](_0x21834b[_0x510351(0x3b0)])[_0x510351(0x232)] = _0x16af7e, document['addEventListener'](_0x21834b[_0x510351(0x345)], function (_0x2d28de) {
        const _0x234865 = _0x510351;
        if (_0x2d28de['key']['toLowerCase']() === 'w') {
            const _0x47c904 = document[_0x234865(0x38c)], _0x481acd = _0x21834b[_0x234865(0x1ca)](_0x47c904[_0x234865(0x346)], _0x21834b[_0x234865(0x3e6)]) || _0x21834b[_0x234865(0x1ca)](_0x47c904['tagName'], _0x21834b[_0x234865(0x366)]) || _0x47c904[_0x234865(0x1dc)] || _0x47c904[_0x234865(0x3b2)](_0x21834b['uXaAR']);
            if (!_0x481acd) {
                const _0x50f9fb = _0x21834b['CUHwE'](window[_0x234865(0x32a)] - _0x4bca52[_0x234865(0x3e0)], 0x2), _0xde719d = _0x21834b[_0x234865(0x3f3)](_0x21834b[_0x234865(0x3ac)](window[_0x234865(0x2e1)], _0x4bca52['offsetWidth']), 0x2);
                _0x4bca52[_0x234865(0x3d3)]['top'] = _0x21834b['KZlNJ'](_0x50f9fb, 'px'), _0x4bca52['style']['left'] = _0xde719d + 'px';
                const _0xe970e1 = document[_0x234865(0x262)](_0x234865(0x445));
                _0xe970e1 && _0x21834b['iqqib'](_0xe970e1[_0x234865(0x28f)], '▼') && (previousPosition['top'] = _0x4bca52['style'][_0x234865(0x41c)], previousPosition[_0x234865(0x3bd)] = _0x4bca52[_0x234865(0x3d3)][_0x234865(0x3bd)], savePosition());
            }
        }
    }), window[_0x510351(0x1f9)](_0x21834b['SnPvo'], function () {
        const _0x402a10 = _0x510351, _0x56d472 = document[_0x402a10(0x262)](_0x21834b[_0x402a10(0x23f)]);
        if (_0x56d472 && _0x21834b['hBElf'](_0x56d472[_0x402a10(0x28f)], '▲')) {
            const _0x5422bc = window[_0x402a10(0x2e1)], _0x28cfe8 = 0x15e, _0x3d3915 = _0x21834b['qzQlJ'](_0x5422bc, _0x28cfe8) / 0x2;
            _0x4bca52[_0x402a10(0x3d3)][_0x402a10(0x3bd)] = _0x21834b[_0x402a10(0x3e8)](_0x3d3915, 'px');
        }
    });
    if (document['getElementById'](_0x21834b['ALJsd']))
        document[_0x510351(0x262)](_0x21834b['ALJsd'])[_0x510351(0x21d)]();
    if (document['getElementById'](_0x21834b[_0x510351(0x2dd)]))
        document[_0x510351(0x262)](_0x21834b['hDMEG'])[_0x510351(0x21d)]();
    luaEditor = CodeMirror[_0x510351(0x2d4)](document[_0x510351(0x262)](_0x21834b[_0x510351(0x477)]), {
        'theme': _0x21834b[_0x510351(0x2fc)],
        'mode': _0x21834b[_0x510351(0x2ce)],
        'lineNumbers': !![]
    }), luaEditor[_0x510351(0x383)](), jsEditor = CodeMirror[_0x510351(0x2d4)](document[_0x510351(0x262)](_0x510351(0x2f7)), {
        'theme': _0x21834b[_0x510351(0x2fc)],
        'mode': _0x21834b[_0x510351(0x34e)],
        'lineNumbers': !![]
    }), jsEditor[_0x510351(0x383)](), document['getElementById'](_0x21834b['PJMPX'])[_0x510351(0x3d3)]['display'] = _0x21834b[_0x510351(0x30d)], document[_0x510351(0x262)](_0x21834b[_0x510351(0x398)])['style']['display'] = _0x21834b[_0x510351(0x30d)], document[_0x510351(0x262)](_0x21834b[_0x510351(0x3c0)])[_0x510351(0x3d3)]['display'] = _0x21834b[_0x510351(0x30d)], document[_0x510351(0x262)](_0x21834b[_0x510351(0x36c)])[_0x510351(0x3d3)][_0x510351(0x24a)] = _0x21834b[_0x510351(0x30d)], document[_0x510351(0x262)](_0x21834b[_0x510351(0x381)])[_0x510351(0x3d3)][_0x510351(0x24a)] = _0x21834b[_0x510351(0x30d)], document[_0x510351(0x262)](_0x510351(0x1d8))['style'][_0x510351(0x24a)] = _0x21834b[_0x510351(0x30d)], document['getElementById'](_0x21834b['KrwVO'])['disabled'] = !![];
    const _0x21580a = document[_0x510351(0x262)](_0x510351(0x2f2));
    _0x21580a['addEventListener'](_0x21834b[_0x510351(0x3dd)], () => {
        _0x21580a['value'] = null;
    }), _0x21580a['addEventListener'](_0x21834b[_0x510351(0x44e)], async _0x4822af => {
        const _0x5b63b0 = _0x510351, _0x5b7a2b = await new Response(_0x4822af[_0x5b63b0(0x28b)]['files'][0x0])[_0x5b63b0(0x4aa)]();
        if (!_0x5b7a2b)
            return;
        luaEditor[_0x5b63b0(0x487)](_0x5b7a2b);
    });
    const _0x43e3e4 = document[_0x510351(0x262)]('wdbOpenJSScript');
    return _0x43e3e4[_0x510351(0x1f9)]('click', () => {
        const _0x1d055b = _0x510351;
        _0x43e3e4[_0x1d055b(0x3db)] = null;
    }), _0x43e3e4[_0x510351(0x1f9)](_0x21834b['cldjz'], async _0x56eaa8 => {
        const _0x4434ef = _0x510351, _0x40e884 = await new Response(_0x56eaa8[_0x4434ef(0x28b)][_0x4434ef(0x35d)][0x0])[_0x4434ef(0x4aa)]();
        if (!_0x40e884)
            return;
        jsEditor[_0x4434ef(0x487)](_0x40e884);
    }), chart = new Chart(_0x21834b[_0x510351(0x204)], ![], 0x64), 'createUIOk';
}
async function wdbLoader(_0x2903ad) {
    const _0xe0ac84 = _0x5df213, _0xa0c864 = {
            'BaJNU': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
            'DxCEp': 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
            'ZrWBB': _0xe0ac84(0x3ea),
            'YlsYZ': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
            'oSccq': function (_0x1c91c0, _0x2ea5b9) {
                return _0x1c91c0 + _0x2ea5b9;
            },
            'TVzoJ': _0xe0ac84(0x409),
            'EEBwZ': _0xe0ac84(0x46a),
            'NYKVh': _0xe0ac84(0x2ec),
            'kMNPR': _0xe0ac84(0x238),
            'ywINr': function (_0x1ef3e1, _0x795bb) {
                return _0x1ef3e1(_0x795bb);
            },
            'LPGYk': function (_0x354076) {
                return _0x354076();
            },
            'LQhco': function (_0x382981, _0x28944c) {
                return _0x382981 === _0x28944c;
            },
            'eKmFw': 'rangedice',
            'FCZOS': _0xe0ac84(0x209),
            'ZSbpq': _0xe0ac84(0x402),
            'CPlhi': _0xe0ac84(0x202),
            'mHIEb': 'wdbLoader\x20ok'
        }, _0x431217 = [
            _0xa0c864[_0xe0ac84(0x37e)],
            _0xa0c864[_0xe0ac84(0x2cc)],
            _0xa0c864['ZrWBB'],
            _0xe0ac84(0x3cf),
            _0xa0c864[_0xe0ac84(0x1fa)],
            _0xa0c864['oSccq'](WDB_LIB, _0xa0c864[_0xe0ac84(0x233)]),
            WDB_LIB + _0xa0c864[_0xe0ac84(0x29a)]
        ], _0x515ea8 = [
            _0xa0c864[_0xe0ac84(0x1ec)],
            _0xa0c864['kMNPR']
        ];
    for (const _0xd1ce69 of _0x431217) {
        await _0x2903ad[_0xe0ac84(0x463)](_0xd1ce69);
    }
    for (const _0x43de7f of _0x515ea8) {
        await _0x2903ad[_0xe0ac84(0x2c2)](_0x43de7f);
    }
    await _0xa0c864[_0xe0ac84(0x27f)](beforeWork, _0x2903ad), await wdbCreateUI(), await getListCoin(), await _0xa0c864[_0xe0ac84(0x344)](initLua);
    if (_0xa0c864[_0xe0ac84(0x222)](game, _0xa0c864[_0xe0ac84(0x1e8)]))
        luaEditor[_0xe0ac84(0x487)](rangediceLuaScript), jsEditor[_0xe0ac84(0x487)](rangediceJsScript), document[_0xe0ac84(0x213)]('#wdbMenuMode\x20option[value=\x22advanced\x22]')[_0xe0ac84(0x456)] = !![];
    else {
        if (_0xa0c864['LQhco'](game, 'plinko'))
            luaEditor[_0xe0ac84(0x487)](plinkoLuaScript), jsEditor[_0xe0ac84(0x487)](plinkoJsScript), document[_0xe0ac84(0x213)](_0xa0c864[_0xe0ac84(0x2a8)])['disabled'] = !![];
        else
            game === _0xa0c864[_0xe0ac84(0x371)] && (luaEditor['setValue'](kenoLuaScript), jsEditor[_0xe0ac84(0x487)](kenoJsScript), document[_0xe0ac84(0x213)](_0xa0c864[_0xe0ac84(0x2a8)])[_0xe0ac84(0x456)] = !![]);
    }
    return _0xa0c864[_0xe0ac84(0x27f)](log, _0xa0c864[_0xe0ac84(0x332)]), _0xa0c864[_0xe0ac84(0x2b4)];
}
function toggleNav(_0x2f9ed7) {
    const _0x1bf41f = _0x5df213, _0x1d541d = {
            'MEtqJ': function (_0x432ebb, _0x1db41d) {
                return _0x432ebb === _0x1db41d;
            },
            'QofGB': _0x1bf41f(0x3d6),
            'rCbXM': _0x1bf41f(0x259),
            'XzKup': function (_0x1d3286, _0x56a616) {
                return _0x1d3286 === _0x56a616;
            },
            'eoNkp': 'Mode',
            'wpZsV': _0x1bf41f(0x31c),
            'iOvra': _0x1bf41f(0x30b),
            'yGUXn': _0x1bf41f(0x45e)
        }, _0x1a534 = [
            _0x1d541d['eoNkp'],
            _0x1d541d[_0x1bf41f(0x318)],
            _0x1bf41f(0x47c),
            _0x1d541d[_0x1bf41f(0x297)],
            _0x1d541d[_0x1bf41f(0x211)]
        ];
    _0x1a534[_0x1bf41f(0x3ef)](_0x5303b2 => {
        const _0x253452 = _0x1bf41f, _0x4c3058 = _0x1d541d[_0x253452(0x276)](_0x5303b2[_0x253452(0x2a6)](), _0x2f9ed7) ? _0x1d541d['QofGB'] : _0x1d541d[_0x253452(0x2a1)];
        document[_0x253452(0x262)](_0x253452(0x24c) + _0x5303b2)[_0x253452(0x3d3)][_0x253452(0x24a)] = _0x4c3058, document[_0x253452(0x262)](_0x253452(0x1d1) + _0x5303b2)['disabled'] = _0x1d541d[_0x253452(0x45c)](_0x4c3058, _0x253452(0x3d6));
    });
}
function toggleShow(_0x599c5c) {
    const _0xb7fd79 = _0x5df213, _0x426817 = {
            'WeHQE': function (_0x277f0a, _0x5cf6f1) {
                return _0x277f0a + _0x5cf6f1;
            }
        }, _0x28b2f8 = document[_0xb7fd79(0x262)](_0xb7fd79(0x3ec) + _0x426817['WeHQE'](_0x599c5c['charAt'](0x0)[_0xb7fd79(0x1cd)](), _0x599c5c[_0xb7fd79(0x478)](0x1)))[_0xb7fd79(0x497)];
    selectFunction(_0x28b2f8 ? _0xb7fd79(0x4b0) + _0x599c5c : _0xb7fd79(0x1f0) + _0x599c5c);
}
function toggleLive(_0x20a76f) {
    const _0x312ea4 = _0x5df213, _0x390fd3 = {
            'PbMwW': 'start',
            'bCPsD': _0x312ea4(0x20d)
        }, _0xc9c7a = document[_0x312ea4(0x262)](_0x312ea4(0x3ed) + (_0x20a76f[_0x312ea4(0x335)](0x0)[_0x312ea4(0x1cd)]() + _0x20a76f[_0x312ea4(0x478)](0x1)))[_0x312ea4(0x497)];
    selectFunction('' + (_0xc9c7a ? _0x390fd3[_0x312ea4(0x453)] : _0x390fd3[_0x312ea4(0x28d)]) + _0x20a76f);
}
function selectFunction(_0x42d05c) {
    const _0xe0d42d = _0x5df213, _0x41e3c0 = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0xe0d42d(0x3d9)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog(_0xe0d42d(0x240)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0xe0d42d(0x20d)),
            'startchart': () => toggleChart('start'),
            'stophistory': () => toggleHistory(_0xe0d42d(0x20d)),
            'starthistory': () => toggleHistory(_0xe0d42d(0x4b1)),
            'stoplog': () => toggleLog(_0xe0d42d(0x20d)),
            'startlog': () => toggleLog(_0xe0d42d(0x4b1)),
            'hidestats': () => toggleStats(_0xe0d42d(0x1f0)),
            'showstats': () => toggleStats(_0xe0d42d(0x4b0)),
            'hidechart': () => toggleChart(_0xe0d42d(0x1f0)),
            'showchart': () => toggleChart('show'),
            'hidehistory': () => toggleHistory(_0xe0d42d(0x1f0)),
            'showhistory': () => toggleHistory(_0xe0d42d(0x4b0))
        };
    if (_0x41e3c0[_0x42d05c])
        _0x41e3c0[_0x42d05c]();
}
function toggleMode(_0x548cdb) {
    const _0x18d704 = _0x5df213, _0x1695d5 = {
            'SUjle': _0x18d704(0x1f4),
            'DVRfO': _0x18d704(0x26d),
            'BWwpc': 'keno',
            'qZSTj': _0x18d704(0x3c9),
            'jBWTO': function (_0x5b5a17, _0x10b6ac) {
                return _0x5b5a17 === _0x10b6ac;
            },
            'rrcwA': _0x18d704(0x3d6),
            'HMGwH': _0x18d704(0x259)
        };
    mode = _0x548cdb;
    if (game === _0x1695d5['SUjle'])
        luaEditor['setValue'](rangediceLuaScript), jsEditor[_0x18d704(0x487)](rangediceJsScript);
    else {
        if (game === _0x1695d5['DVRfO'])
            luaEditor[_0x18d704(0x487)](plinkoLuaScript), jsEditor[_0x18d704(0x487)](plinkoJsScript);
        else
            game === _0x1695d5['BWwpc'] && (luaEditor[_0x18d704(0x487)](kenoLuaScript), jsEditor[_0x18d704(0x487)](kenoJsScript));
    }
    const _0x56b6e9 = document[_0x18d704(0x262)](_0x18d704(0x3cb)), _0x26fb92 = document[_0x18d704(0x262)](_0x18d704(0x423)), _0x4a2611 = document[_0x18d704(0x262)](_0x1695d5[_0x18d704(0x35f)]);
    _0x56b6e9[_0x18d704(0x3d3)][_0x18d704(0x24a)] = _0x1695d5[_0x18d704(0x289)](_0x548cdb, _0x18d704(0x1ea)) ? _0x1695d5[_0x18d704(0x287)] : _0x1695d5[_0x18d704(0x33d)], _0x26fb92['style'][_0x18d704(0x24a)] = _0x1695d5[_0x18d704(0x289)](_0x548cdb, 'js') ? _0x1695d5[_0x18d704(0x287)] : _0x1695d5[_0x18d704(0x33d)], _0x4a2611[_0x18d704(0x3d3)][_0x18d704(0x24a)] = _0x548cdb === 'advanced' ? _0x1695d5[_0x18d704(0x287)] : _0x1695d5[_0x18d704(0x33d)], luaEditor[_0x18d704(0x44a)](), jsEditor[_0x18d704(0x44a)]();
}
function toggleStats(_0x26bb57) {
    const _0x5b08b9 = _0x5df213, _0x16c9c5 = {
            'XOHeU': function (_0x2ae2bb, _0x597406) {
                return _0x2ae2bb === _0x597406;
            },
            'PtoFR': _0x5b08b9(0x1f0),
            'yuDLI': _0x5b08b9(0x259),
            'Schua': _0x5b08b9(0x370)
        }, _0x2fc705 = _0x16c9c5['XOHeU'](_0x26bb57, _0x16c9c5[_0x5b08b9(0x3c7)]) ? _0x16c9c5[_0x5b08b9(0x427)] : _0x16c9c5[_0x5b08b9(0x493)];
    document[_0x5b08b9(0x262)]('wdbStats')[_0x5b08b9(0x3d3)][_0x5b08b9(0x24a)] = _0x2fc705;
}
function toggleChart(_0x5b3650) {
    const _0xdba7b = _0x5df213, _0x4a48af = {
            'dsQvW': 'wdbChart',
            'xYCcz': _0xdba7b(0x49e),
            'plMix': _0xdba7b(0x1f0),
            'ytWgF': _0xdba7b(0x36b),
            'ttDCb': _0xdba7b(0x4b0),
            'KkHHs': '190px',
            'QyqIa': _0xdba7b(0x20d),
            'ZnXpI': 'start',
            'ehKEj': _0xdba7b(0x3d9)
        }, _0x400fe6 = document[_0xdba7b(0x262)](_0x4a48af['dsQvW']), _0x441fd2 = document['getElementById'](_0x4a48af[_0xdba7b(0x4bf)]);
    switch (_0x5b3650) {
    case _0x4a48af[_0xdba7b(0x315)]:
        _0x400fe6[_0xdba7b(0x3d3)][_0xdba7b(0x24a)] = _0xdba7b(0x259), _0x441fd2['style'][_0xdba7b(0x2ca)] = _0x4a48af['ytWgF'];
        break;
    case _0x4a48af[_0xdba7b(0x216)]:
        _0x400fe6['style']['display'] = _0xdba7b(0x3d6), _0x441fd2[_0xdba7b(0x3d3)][_0xdba7b(0x2ca)] = _0x4a48af[_0xdba7b(0x42c)];
        break;
    case _0x4a48af[_0xdba7b(0x46e)]:
        stopChart = !![];
        break;
    case _0x4a48af[_0xdba7b(0x485)]:
        stopChart = ![];
        break;
    case _0x4a48af[_0xdba7b(0x2ab)]:
        betsChart = 0x0, profitChart = 0x0, chart[_0xdba7b(0x337)]();
        break;
    }
}
function toggleHistory(_0x1266fa) {
    const _0x54e7c5 = _0x5df213, _0x48d322 = {
            'YLVAz': _0x54e7c5(0x1f0),
            'yVZVY': _0x54e7c5(0x259),
            'rViVN': _0x54e7c5(0x36b),
            'Omagr': _0x54e7c5(0x4b0),
            'tSDWD': _0x54e7c5(0x20d),
            'hcKHz': 'start',
            'yGgqO': _0x54e7c5(0x240)
        }, _0x12bdbb = document[_0x54e7c5(0x262)]('wdbHistory'), _0xb36445 = document[_0x54e7c5(0x262)](_0x54e7c5(0x248));
    switch (_0x1266fa) {
    case _0x48d322[_0x54e7c5(0x285)]:
        _0x12bdbb[_0x54e7c5(0x3d3)][_0x54e7c5(0x24a)] = _0x48d322[_0x54e7c5(0x22b)], _0xb36445[_0x54e7c5(0x3d3)][_0x54e7c5(0x2ca)] = _0x48d322[_0x54e7c5(0x4b3)];
        break;
    case _0x48d322[_0x54e7c5(0x439)]:
        _0x12bdbb['style'][_0x54e7c5(0x24a)] = _0x54e7c5(0x3d6), _0xb36445[_0x54e7c5(0x3d3)]['height'] = _0x54e7c5(0x358);
        break;
    case _0x48d322[_0x54e7c5(0x272)]:
        stopHistory = !![];
        break;
    case _0x48d322['hcKHz']:
        stopHistory = ![];
        break;
    case _0x48d322[_0x54e7c5(0x40e)]:
        _0x12bdbb['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x25b691) {
    const _0x32cdc2 = _0x5df213, _0x5a549a = {
            'PcNyS': 'stop',
            'CiNJu': _0x32cdc2(0x4b1),
            'mbJac': _0x32cdc2(0x240),
            'UALVz': _0x32cdc2(0x3d4)
        };
    switch (_0x25b691) {
    case _0x5a549a['PcNyS']:
        stopLog = !![];
        break;
    case _0x5a549a[_0x32cdc2(0x33b)]:
        stopLog = ![];
        break;
    case _0x5a549a[_0x32cdc2(0x2be)]:
        document['getElementById'](_0x5a549a['UALVz'])[_0x32cdc2(0x492)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x2df557 = _0x5df213, _0x57adc9 = {
            'JcejJ': _0x2df557(0x3bc),
            'WsChL': function (_0x384d53, _0x5de705) {
                return _0x384d53(_0x5de705);
            },
            'uOMDw': _0x2df557(0x261),
            'hlXHi': function (_0xb8999c, _0x45fc76) {
                return _0xb8999c(_0x45fc76);
            },
            'ROdQH': _0x2df557(0x2a7),
            'cWSwa': _0x2df557(0x447),
            'YEgUP': function (_0x3ebd8b, _0x56eef3) {
                return _0x3ebd8b(_0x56eef3);
            },
            'xdMxF': function (_0x23342f, _0x255e65) {
                return _0x23342f(_0x255e65);
            },
            'Zmwob': 'advancedChanceOnLoseBets',
            'Kewsj': _0x2df557(0x458),
            'wEHyZ': _0x2df557(0x2c5),
            'skIlv': _0x2df557(0x49d),
            'SLPTr': _0x2df557(0x361),
            'NQWIh': function (_0x8f81d5, _0x42bbf0) {
                return _0x8f81d5(_0x42bbf0);
            },
            'lSWET': _0x2df557(0x428),
            'lncjG': _0x2df557(0x279),
            'Shdet': function (_0x22309b, _0x54dc18) {
                return _0x22309b(_0x54dc18);
            },
            'URsQI': function (_0x4a19fe, _0x34d3fb) {
                return _0x4a19fe === _0x34d3fb;
            },
            'gGNQD': _0x2df557(0x39a),
            'IZVgb': 'resetstatsOnProfitCheck',
            'cQooJ': function (_0x18dcda, _0x247cc6) {
                return _0x18dcda(_0x247cc6);
            },
            'XypXv': 'resetstatsOnProfit',
            'BHvrj': function (_0x2e4d6e, _0x512640) {
                return _0x2e4d6e >= _0x512640;
            },
            'XGZrf': function (_0x3112a2) {
                return _0x3112a2();
            },
            'UYNZr': 'advancedStopRollNumberCheck',
            'DYQLY': _0x2df557(0x28e),
            'xJLFc': function (_0x45fefb, _0x117fd6) {
                return _0x45fefb === _0x117fd6;
            },
            'tyuWv': function (_0x570ca9) {
                return _0x570ca9();
            },
            'Wtqrm': function (_0x11c4ab, _0xe9bee2) {
                return _0x11c4ab(_0xe9bee2);
            },
            'WZZYn': function (_0x5ed5a7, _0x2ddbf1) {
                return _0x5ed5a7 + _0x2ddbf1;
            },
            'njhTO': _0x2df557(0x457),
            'ZVYuJ': _0x2df557(0x2e3),
            'LZSbR': function (_0x5513a7, _0x58085e) {
                return _0x5513a7 > _0x58085e;
            },
            'wnZVS': _0x2df557(0x37f),
            'piDpG': function (_0x2701df, _0x5b9413) {
                return _0x2701df <= _0x5b9413;
            },
            'iQkhy': 'advancedStopOnBetsCheck',
            'qggSW': function (_0x331547, _0x3fcbe9) {
                return _0x331547(_0x3fcbe9);
            },
            'MSPgt': _0x2df557(0x1d6),
            'UWTJh': function (_0x8f402a, _0x102fb0) {
                return _0x8f402a(_0x102fb0);
            },
            'Ilaau': function (_0x587d30, _0x1f7e8f) {
                return _0x587d30 + _0x1f7e8f;
            },
            'wqhzJ': 'Stop\x20on\x20',
            'rlomY': _0x2df557(0x300),
            'EQryZ': function (_0x4f1934, _0x4ae580) {
                return _0x4f1934(_0x4ae580);
            },
            'PcWjn': _0x2df557(0x25d),
            'DNPnM': function (_0x51d919, _0x336e9d) {
                return _0x51d919(_0x336e9d);
            },
            'HhLSp': _0x2df557(0x1fd),
            'xACHv': function (_0x3beaea, _0x25b788) {
                return _0x3beaea + _0x25b788;
            },
            'ibjUr': function (_0x39b6fe, _0x50f1b4) {
                return _0x39b6fe + _0x50f1b4;
            },
            'hHNil': _0x2df557(0x2e5),
            'dihQL': _0x2df557(0x431),
            'yLrzD': 'stopOnProfit',
            'EcJAU': _0x2df557(0x44c),
            'QntII': function (_0x1d9b1b, _0x33d734) {
                return _0x1d9b1b >= _0x33d734;
            },
            'UvBuV': function (_0x2b4d18, _0xd23c1a) {
                return _0x2b4d18 + _0xd23c1a;
            },
            'DJuRR': 'Stop\x20on\x20balance\x20',
            'lRcmq': _0x2df557(0x2ae),
            'YMzAX': _0x2df557(0x212),
            'QgDLY': function (_0x215856, _0x36554c) {
                return _0x215856 === _0x36554c;
            },
            'VIbhh': function (_0x5a2295, _0x179d3) {
                return _0x5a2295 === _0x179d3;
            },
            'JZZty': function (_0x5491c4, _0x3cfc81) {
                return _0x5491c4 % _0x3cfc81;
            },
            'zllFa': function (_0x1d39e7, _0x303801) {
                return _0x1d39e7 * _0x303801;
            },
            'ICzmk': _0x2df557(0x21f),
            'ydGOj': _0x2df557(0x43a),
            'tBNVs': function (_0x4d54b4, _0x1919c5) {
                return _0x4d54b4 === _0x1919c5;
            },
            'QcqTL': function (_0x1a8862, _0x520cc9) {
                return _0x1a8862 === _0x520cc9;
            }
        };
    chance = Number(document[_0x2df557(0x262)](_0x57adc9['JcejJ'])[_0x2df557(0x3db)]);
    const _0x165b7c = document[_0x2df557(0x262)](_0x2df557(0x425))[_0x2df557(0x497)], _0x58ee7b = _0x165b7c ? _0x57adc9[_0x2df557(0x39b)](Number, document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x37d)])[_0x2df557(0x3db)]) : chance, _0x44a0f1 = _0x57adc9['hlXHi'](Number, document['getElementById'](_0x57adc9[_0x2df557(0x1f1)])[_0x2df557(0x3db)]), _0x2fc41e = document['getElementById'](_0x57adc9[_0x2df557(0x1ce)])[_0x2df557(0x497)], _0x1848b5 = _0x2fc41e ? _0x57adc9[_0x2df557(0x2f6)](Number, document[_0x2df557(0x262)]('advancedChanceOnLose')[_0x2df557(0x3db)]) : chance, _0x58195f = _0x57adc9[_0x2df557(0x4a9)](Number, document['getElementById'](_0x57adc9[_0x2df557(0x2d9)])['value']), _0x4a533e = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x430)])[_0x2df557(0x497)], _0x2ddc36 = _0x4a533e ? _0x57adc9['hlXHi'](Number, document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x239)])['value']) : 0x1, _0x5436a7 = Number(document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x464)])[_0x2df557(0x3db)]), _0x4586e6 = document['getElementById'](_0x57adc9['SLPTr'])[_0x2df557(0x497)], _0x4aec26 = _0x4586e6 ? _0x57adc9[_0x2df557(0x350)](Number, document[_0x2df557(0x262)](_0x2df557(0x4a1))[_0x2df557(0x3db)]) : 0x1, _0x404fa8 = _0x57adc9[_0x2df557(0x4a9)](Number, document[_0x2df557(0x262)](_0x57adc9['lSWET'])[_0x2df557(0x3db)]), _0x2d1391 = document[_0x2df557(0x262)](_0x57adc9['lncjG'])[_0x2df557(0x497)];
    if (_0x2d1391) {
        const _0xb537a4 = _0x57adc9[_0x2df557(0x40f)](Number, document[_0x2df557(0x262)]('advancedBetHighOnBet')['value']);
        if (_0x57adc9['URsQI'](bets % _0xb537a4, 0x0))
            bethigh = !bethigh;
    }
    const _0x2902bf = document[_0x2df557(0x262)](_0x2df557(0x442))['checked'];
    if (_0x2902bf) {
        const _0x4498f3 = _0x57adc9['YEgUP'](Number, document['getElementById'](_0x57adc9[_0x2df557(0x3d0)])[_0x2df557(0x3db)]);
        if (profit >= _0x4498f3)
            bethigh = !bethigh;
    }
    const _0x35df54 = document['getElementById'](_0x57adc9[_0x2df557(0x411)])[_0x2df557(0x497)];
    if (_0x35df54) {
        const _0x18dc2c = _0x57adc9['cQooJ'](Number, document['getElementById'](_0x57adc9[_0x2df557(0x295)])[_0x2df557(0x3db)]);
        if (_0x57adc9[_0x2df557(0x347)](profit, _0x18dc2c))
            _0x57adc9[_0x2df557(0x3f1)](resetstats);
    }
    const _0x16c3cc = document['getElementById'](_0x57adc9['UYNZr'])[_0x2df557(0x497)];
    if (_0x16c3cc) {
        const _0x517527 = _0x57adc9[_0x2df557(0x482)](Number, document['getElementById'](_0x57adc9['DYQLY'])[_0x2df557(0x3db)]);
        if (_0x57adc9['xJLFc'](lastBet[_0x2df557(0x429)], _0x517527))
            _0x57adc9['tyuWv'](stop), _0x57adc9[_0x2df557(0x2e2)](log, _0x57adc9[_0x2df557(0x39f)](_0x57adc9[_0x2df557(0x40a)], _0x517527));
    }
    const _0x456821 = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x29e)])[_0x2df557(0x497)];
    if (_0x456821) {
        const _0x52fb57 = _0x57adc9['xdMxF'](Number, document[_0x2df557(0x262)](_0x2df557(0x22d))[_0x2df557(0x3db)]);
        if (_0x57adc9['LZSbR'](_0x52fb57, 0x0)) {
            if (_0x57adc9[_0x2df557(0x347)](currentstreak, _0x52fb57))
                stop(), _0x57adc9[_0x2df557(0x4a9)](log, _0x57adc9[_0x2df557(0x39f)](_0x57adc9[_0x2df557(0x45a)], _0x52fb57));
        } else {
            if (_0x57adc9[_0x2df557(0x3c4)](currentstreak, _0x52fb57))
                stop(), log(_0x57adc9[_0x2df557(0x39f)](_0x2df557(0x37f), _0x52fb57));
        }
    }
    const _0x19faa0 = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x21b)])['checked'];
    if (_0x19faa0) {
        const _0x23faf3 = _0x57adc9[_0x2df557(0x443)](Number, document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x360)])[_0x2df557(0x3db)]);
        if (_0x57adc9[_0x2df557(0x347)](bets, _0x23faf3))
            stop(), _0x57adc9['UWTJh'](log, _0x57adc9[_0x2df557(0x39f)](_0x57adc9[_0x2df557(0x241)](_0x57adc9[_0x2df557(0x3b6)], _0x23faf3), _0x57adc9[_0x2df557(0x34d)]));
    }
    const _0x5e9439 = document[_0x2df557(0x262)](_0x2df557(0x4a7))[_0x2df557(0x497)];
    if (_0x5e9439) {
        const _0x42929c = _0x57adc9[_0x2df557(0x200)](Number, document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x2b6)])[_0x2df557(0x3db)]);
        if (_0x57adc9[_0x2df557(0x347)](winstreak, _0x42929c))
            stop(), _0x57adc9['cQooJ'](log, _0x57adc9[_0x2df557(0x241)](_0x57adc9[_0x2df557(0x39f)](_0x57adc9[_0x2df557(0x3b6)], _0x42929c), '\x20win'));
    }
    const _0x3d4e58 = document['getElementById'](_0x2df557(0x414))[_0x2df557(0x497)];
    if (_0x3d4e58) {
        const _0x51f8eb = _0x57adc9[_0x2df557(0x1df)](Number, document['getElementById'](_0x57adc9[_0x2df557(0x32e)])[_0x2df557(0x3db)]);
        if (losestreak >= _0x51f8eb)
            _0x57adc9[_0x2df557(0x3f1)](stop), log(_0x57adc9[_0x2df557(0x2ac)](_0x57adc9['ibjUr'](_0x57adc9[_0x2df557(0x3b6)], _0x51f8eb), _0x57adc9[_0x2df557(0x252)]));
    }
    const _0x3a33a6 = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x465)])[_0x2df557(0x497)];
    if (_0x3a33a6) {
        const _0x210b6b = Number(document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x472)])[_0x2df557(0x3db)]);
        if (_0x57adc9[_0x2df557(0x347)](profit, _0x210b6b))
            stop(), _0x57adc9[_0x2df557(0x2e2)](log, 'Stop\x20on\x20profit\x20' + _0x210b6b);
    }
    const _0x27e9a5 = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x2bc)])[_0x2df557(0x497)];
    if (_0x27e9a5) {
        const _0x376e74 = _0x57adc9['cQooJ'](Number, document[_0x2df557(0x262)]('stopOnBalance')['value']);
        if (_0x57adc9['QntII'](balance, _0x376e74))
            stop(), _0x57adc9['NQWIh'](log, _0x57adc9[_0x2df557(0x365)](_0x57adc9[_0x2df557(0x3f7)], _0x376e74));
    }
    if (win) {
        const _0x27fbd0 = document['getElementById'](_0x57adc9['lRcmq'])[_0x2df557(0x497)];
        if (_0x27fbd0) {
            const _0x15cb12 = Number(document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x35a)])[_0x2df557(0x3db)]);
            if (_0x57adc9[_0x2df557(0x1e1)](winstreak % _0x15cb12, 0x0))
                bethigh = !bethigh;
        }
        if (_0x57adc9[_0x2df557(0x4b5)](winstreak % _0x44a0f1, 0x0))
            chance = _0x58ee7b;
        if (_0x4a533e) {
            if (_0x57adc9[_0x2df557(0x31f)](_0x57adc9[_0x2df557(0x257)](winstreak, _0x5436a7), 0x0))
                nextbet = _0x57adc9['zllFa'](previousbet, _0x2ddc36);
        } else
            nextbet = basebet;
    } else {
        const _0x1014ae = document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x20e)])[_0x2df557(0x497)];
        if (_0x1014ae) {
            const _0x45028d = _0x57adc9['NQWIh'](Number, document[_0x2df557(0x262)](_0x57adc9[_0x2df557(0x246)])[_0x2df557(0x3db)]);
            if (losestreak % _0x45028d === 0x0)
                bethigh = !bethigh;
        }
        if (_0x57adc9[_0x2df557(0x41a)](_0x57adc9[_0x2df557(0x257)](losestreak, _0x58195f), 0x0))
            chance = _0x1848b5;
        if (_0x4586e6) {
            if (_0x57adc9['QcqTL'](losestreak % _0x404fa8, 0x0))
                nextbet = _0x57adc9['zllFa'](previousbet, _0x4aec26);
        } else
            nextbet = basebet;
    }
    return _0x2df557(0x3b1);
}
function changeCoin() {
    const _0x57e6c0 = _0x5df213, _0x39dff9 = {
            'RLnzS': _0x57e6c0(0x303),
            'AFTSg': function (_0xbf162c) {
                return _0xbf162c();
            }
        };
    coin = document['getElementById'](_0x39dff9[_0x57e6c0(0x46b)])['value'], currency = coin['toLowerCase'](), fengari[_0x57e6c0(0x275)](_0x57e6c0(0x400) + currency + '\x22')(), _0x39dff9[_0x57e6c0(0x2d7)](checkbalance);
}
async function handleStats() {
    const _0x2493f = _0x5df213, _0x566fa1 = {
            'CRCne': function (_0x160523, _0x274eaf) {
                return _0x160523 === _0x274eaf;
            },
            'EXhQm': _0x2493f(0x1ea),
            'mNaOG': function (_0x12309a) {
                return _0x12309a();
            },
            'UrVKf': function (_0x43dea0, _0xca7608) {
                return _0x43dea0 === _0xca7608;
            },
            'RlpWF': function (_0x32c8f6) {
                return _0x32c8f6();
            },
            'DKlAa': function (_0x1264fe, _0x43dcad) {
                return _0x1264fe && _0x43dcad;
            },
            'gFdLe': function (_0x5c94b2) {
                return _0x5c94b2();
            },
            'xgxmP': function (_0x5b1161) {
                return _0x5b1161();
            },
            'tXxca': function (_0x3992c2, _0x4d108e) {
                return _0x3992c2(_0x4d108e);
            },
            'igjYY': _0x2493f(0x1f4),
            'gdgAF': _0x2493f(0x302),
            'jysEA': function (_0x434950, _0x380f2b) {
                return _0x434950 === _0x380f2b;
            },
            'TNpNO': _0x2493f(0x484),
            'lAHrD': function (_0x365bd0, _0x1bbbad) {
                return _0x365bd0 < _0x1bbbad;
            },
            'mXDGQ': function (_0x3a96fa, _0x2cd12a) {
                return _0x3a96fa === _0x2cd12a;
            },
            'svrwH': 'plinko',
            'iBbkz': 'keno',
            'vYYvX': function (_0x181964, _0x7254b4) {
                return _0x181964 > _0x7254b4;
            },
            'VIutk': function (_0x2b23a3, _0x3b064d) {
                return _0x2b23a3 === _0x3b064d;
            },
            'RWwTR': function (_0x1371fa, _0x5a8108) {
                return _0x1371fa === _0x5a8108;
            },
            'vdfYA': _0x2493f(0x4c0),
            'lBaue': _0x2493f(0x1f3),
            'bnyXu': 'between2',
            'ygRzr': function (_0x156404, _0x42d570) {
                return _0x156404 > _0x42d570;
            },
            'ggOUa': function (_0x4190b0, _0x2143d7) {
                return _0x4190b0 > _0x2143d7;
            },
            'diqWf': function (_0xe2089d, _0x3a3840) {
                return _0xe2089d < _0x3a3840;
            },
            'tCTzN': function (_0x419069, _0x2f2366) {
                return _0x419069 || _0x2f2366;
            },
            'BaEOY': function (_0x11a4e7, _0x2e777e) {
                return _0x11a4e7 >= _0x2e777e;
            },
            'HinMW': '2|0|3|4|1',
            'ZxsbV': '5|0|3|1|2|4',
            'KOfpP': 'red',
            'GTGOb': function (_0x121c70, _0x7f959b) {
                return _0x121c70 > _0x7f959b;
            }
        }, _0x459340 = Date['now']();
    speedHistory[_0x2493f(0x41f)](_0x459340);
    const _0x497ab2 = 0x2710;
    speedHistory = speedHistory[_0x2493f(0x2de)](_0x36fca5 => _0x459340 - _0x36fca5 <= _0x497ab2), bets++, lastBet[_0x2493f(0x282)] = lastBet['roll'], lastBet[_0x2493f(0x28b)] = target, lastBet['Target'] = target;
    if (game === _0x566fa1[_0x2493f(0x440)]) {
        const _0x36a854 = _0x566fa1[_0x2493f(0x2db)][_0x2493f(0x3a3)]('|');
        let _0x5d2b7e = 0x0;
        while (!![]) {
            switch (_0x36a854[_0x5d2b7e++]) {
            case '0':
                lastBet[_0x2493f(0x25b)] = chance1;
                continue;
            case '1':
                lastBet['chance3'] = chance3;
                continue;
            case '2':
                lastBet[_0x2493f(0x35e)] = betSide;
                continue;
            case '3':
                lastBet[_0x2493f(0x35b)] = chance2;
                continue;
            case '4':
                lastBet['Chance3'] = chance3;
                continue;
            case '5':
                lastBet[_0x2493f(0x2e9)] = chance4;
                continue;
            case '6':
                lastBet[_0x2493f(0x47f)] = chance4;
                continue;
            case '7':
                lastBet[_0x2493f(0x326)] = betSide;
                continue;
            case '8':
                lastBet[_0x2493f(0x243)] = chance2;
                continue;
            case '9':
                lastBet[_0x2493f(0x421)] = chance1;
                continue;
            }
            break;
        }
    }
    lastBet['result'] = result, lastBet[_0x2493f(0x327)] = result, lastBet[_0x2493f(0x2e4)] = currentprofit, lastBet['Profit'] = currentprofit, lastBet['Nonce'] = lastBet['nonce'], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x566fa1[_0x2493f(0x2c7)](game, _0x566fa1[_0x2493f(0x3cd)]))
        win = lastBet[_0x2493f(0x310)] ? lastBet[_0x2493f(0x429)] > lastBet[_0x2493f(0x28b)] : _0x566fa1['lAHrD'](lastBet['result'], lastBet['target']);
    else {
        if (_0x566fa1[_0x2493f(0x2bf)](game, _0x566fa1[_0x2493f(0x401)]) || _0x566fa1[_0x2493f(0x25a)](game, _0x566fa1[_0x2493f(0x3a2)]))
            win = _0x566fa1[_0x2493f(0x23c)](lastBet[_0x2493f(0x2e4)], 0x0);
        else {
            if (_0x566fa1[_0x2493f(0x2af)](game, _0x566fa1['igjYY'])) {
                if (_0x566fa1['RWwTR'](lastBet[_0x2493f(0x326)], _0x566fa1['vdfYA']))
                    win = _0x566fa1['vYYvX'](lastBet['roll'], lastBet[_0x2493f(0x25b)]) && _0x566fa1['lAHrD'](lastBet[_0x2493f(0x3a6)], lastBet['chance2']);
                else {
                    if (lastBet[_0x2493f(0x326)] === _0x566fa1[_0x2493f(0x441)])
                        win = _0x566fa1[_0x2493f(0x3af)](lastBet[_0x2493f(0x3a6)], lastBet[_0x2493f(0x25b)]) || lastBet[_0x2493f(0x3a6)] > lastBet[_0x2493f(0x35b)];
                    else {
                        if (_0x566fa1[_0x2493f(0x38d)](lastBet[_0x2493f(0x326)], _0x566fa1[_0x2493f(0x349)])) {
                            const _0x103950 = _0x566fa1[_0x2493f(0x2ad)](lastBet[_0x2493f(0x3a6)], lastBet[_0x2493f(0x25b)]) && _0x566fa1['lAHrD'](lastBet[_0x2493f(0x3a6)], lastBet['chance2']), _0x20ea89 = _0x566fa1[_0x2493f(0x368)](lastBet[_0x2493f(0x3a6)], lastBet[_0x2493f(0x2c3)]) && _0x566fa1[_0x2493f(0x1fb)](lastBet[_0x2493f(0x3a6)], lastBet[_0x2493f(0x47f)]);
                            win = _0x566fa1[_0x2493f(0x36a)](_0x103950, _0x20ea89);
                        }
                    }
                }
            } else
                win = _0x566fa1[_0x2493f(0x273)](lastBet[_0x2493f(0x429)], lastBet[_0x2493f(0x28b)]);
        }
    }
    if (win) {
        const _0x31ac7a = _0x566fa1[_0x2493f(0x356)][_0x2493f(0x3a3)]('|');
        let _0x4c1157 = 0x0;
        while (!![]) {
            switch (_0x31ac7a[_0x4c1157++]) {
            case '0':
                wins++;
                continue;
            case '1':
                currentstreak = winstreak;
                continue;
            case '2':
                color = _0x2493f(0x466);
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
        const _0xe7a0a1 = _0x566fa1[_0x2493f(0x450)][_0x2493f(0x3a3)]('|');
        let _0x7e84a6 = 0x0;
        while (!![]) {
            switch (_0xe7a0a1[_0x7e84a6++]) {
            case '0':
                losses++;
                continue;
            case '1':
                winstreak = 0x0;
                continue;
            case '2':
                currentstreak = -losestreak;
                continue;
            case '3':
                losestreak++;
                continue;
            case '4':
                if (_0x566fa1['vYYvX'](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '5':
                color = _0x566fa1[_0x2493f(0x1d9)];
                continue;
            }
            break;
        }
    }
    if (_0x566fa1['GTGOb'](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x566fa1[_0x2493f(0x2ad)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (losestreak > maxlosestreak)
        maxlosestreak = losestreak;
    if (balance < minbalance)
        minbalance = balance;
    if (_0x566fa1[_0x2493f(0x368)](balance, maxbalance))
        maxbalance = balance;
    if (profit < minprofit)
        minprofit = profit;
    if (_0x566fa1['GTGOb'](profit, maxprofit))
        maxprofit = profit;
    _0x566fa1[_0x2493f(0x40b)](showInfo)[_0x2493f(0x2b8)](async () => {
        const _0x1acd83 = _0x2493f;
        try {
            if (_0x566fa1[_0x1acd83(0x25a)](mode, _0x566fa1[_0x1acd83(0x352)]))
                await _0x566fa1[_0x1acd83(0x4bb)](updateLua);
            else {
                if (_0x566fa1['UrVKf'](mode, 'js'))
                    await _0x566fa1[_0x1acd83(0x489)](dobet);
                else
                    _0x566fa1[_0x1acd83(0x25a)](mode, _0x1acd83(0x3ff)) && await _0x566fa1[_0x1acd83(0x4bb)](handleAdvanced);
            }
            if (_0x566fa1[_0x1acd83(0x491)](win, sOW))
                _0x566fa1['gFdLe'](stop);
            if (run)
                playBet();
        } catch (_0x3cdd15) {
            _0x566fa1[_0x1acd83(0x40b)](stop), _0x566fa1['tXxca'](log, _0x3cdd15);
        }
    });
}
async function showInfo() {
    const _0x260096 = _0x5df213, _0x5b1c50 = {
            'THzpH': function (_0x3f9beb, _0x5c83b3) {
                return _0x3f9beb === _0x5c83b3;
            },
            'nbPxR': _0x260096(0x3b3),
            'HkqIE': _0x260096(0x26b),
            'oQAaq': function (_0x15eedb, _0xec198) {
                return _0x15eedb < _0xec198;
            },
            'dnyXJ': function (_0x421552, _0x1cb061) {
                return _0x421552 < _0x1cb061;
            },
            'umULF': _0x260096(0x387),
            'UUSkm': _0x260096(0x466),
            'FVQsU': function (_0x1c28a4, _0x37ed8e) {
                return _0x1c28a4 > _0x37ed8e;
            },
            'WqxOW': 'wdbHighWinStreak',
            'CuyHZ': _0x260096(0x410),
            'wSPug': _0x260096(0x314),
            'WWiFl': 'wdbProfit',
            'AUUtL': _0x260096(0x27c),
            'hhDEp': _0x260096(0x39d),
            'wBKyM': 'wdbBets',
            'HwfLD': _0x260096(0x44f),
            'ZqRXx': _0x260096(0x43c),
            'YTIgq': 'wdbMaxBalance',
            'LJzyp': _0x260096(0x4b4),
            'fSfui': _0x260096(0x446),
            'gYKaU': function (_0x547fab, _0x39e78d) {
                return _0x547fab / _0x39e78d;
            },
            'QEBnJ': function (_0x2f3671, _0x3961e8) {
                return _0x2f3671 * _0x3961e8;
            },
            'Ranxf': function (_0x59456b, _0x4e1a76) {
                return _0x59456b + _0x4e1a76;
            },
            'Eyhph': function (_0x1e8a23, _0x3e42dc) {
                return _0x1e8a23(_0x3e42dc);
            },
            'jQXZW': function (_0x318212, _0x5cce91) {
                return _0x318212 * _0x5cce91;
            },
            'SluIR': _0x260096(0x49c),
            'YVFkX': function (_0x23668c, _0x218ad1) {
                return _0x23668c === _0x218ad1;
            },
            'OIYIR': _0x260096(0x484),
            'huBOp': function (_0x1d3a12, _0x478c10) {
                return _0x1d3a12 + _0x478c10;
            },
            'JDpkQ': function (_0x1edde6, _0xe006af) {
                return _0x1edde6 !== _0xe006af;
            },
            'pBfNT': _0x260096(0x1f4),
            'PmRCI': _0x260096(0x26d),
            'HbtJp': function (_0x4b6193, _0x243c88) {
                return _0x4b6193(_0x243c88);
            },
            'kCjIq': function (_0x15e3e4, _0x35f509) {
                return _0x15e3e4(_0x35f509);
            },
            'iZxXY': function (_0xe3d33d, _0xaeb400) {
                return _0xe3d33d(_0xaeb400);
            },
            'PVhFm': '\x20Balls',
            'EpsIq': function (_0x5294cb, _0x4e9b2) {
                return _0x5294cb + _0x4e9b2;
            },
            'EtSpu': function (_0x1f7338, _0x4eec21) {
                return _0x1f7338 + _0x4eec21;
            },
            'saXUg': function (_0x3a8c7c, _0x13f72e) {
                return _0x3a8c7c + _0x13f72e;
            },
            'MiuWW': function (_0x2f9ee9, _0xc08c4c) {
                return _0x2f9ee9 + _0xc08c4c;
            },
            'KWEQq': function (_0x21fdaf, _0x4d5a8f) {
                return _0x21fdaf + _0x4d5a8f;
            },
            'VQbJO': function (_0x25d489, _0x1f6b5f) {
                return _0x25d489 === _0x1f6b5f;
            },
            'sUoya': function (_0x148c68, _0x5734cd) {
                return _0x148c68 + _0x5734cd;
            },
            'kWvaK': function (_0xf93a7, _0x47868b) {
                return _0xf93a7(_0x47868b);
            },
            'OGjPn': '#91f190',
            'REyym': 'wdbHistory',
            'urfQq': '#wdbHistory',
            'gWkDn': _0x260096(0x2b2),
            'EIUsr': function (_0x4506c7, _0x5a0d0e) {
                return _0x4506c7 === _0x5a0d0e;
            },
            'JpRHN': function (_0x2d7866, _0x5220b3) {
                return _0x2d7866 === _0x5220b3;
            },
            'bexBT': function (_0x186345, _0x403670) {
                return _0x186345 === _0x403670;
            },
            'KknGN': _0x260096(0x20a)
        }, _0x2b9b16 = _0x5b1c50['THzpH'](profit, 0x0) ? darkMode ? _0x5b1c50['nbPxR'] : _0x5b1c50[_0x260096(0x41e)] : _0x5b1c50['oQAaq'](profit, 0x0) ? _0x260096(0x387) : _0x260096(0x466), _0x2cc919 = _0x5b1c50[_0x260096(0x43e)](currentstreak, 0x0) ? darkMode ? _0x5b1c50['nbPxR'] : _0x5b1c50[_0x260096(0x41e)] : _0x5b1c50[_0x260096(0x47e)](currentstreak, 0x0) ? _0x5b1c50[_0x260096(0x2b1)] : _0x5b1c50['UUSkm'], _0x3ea862 = _0x5b1c50[_0x260096(0x24e)](maxwinstreak, 0x0) ? _0x260096(0x466) : _0x5b1c50[_0x260096(0x41e)], _0xf07854 = _0x5b1c50[_0x260096(0x24e)](maxlosestreak, 0x0) ? _0x5b1c50['umULF'] : _0x5b1c50[_0x260096(0x41e)];
    document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x22e)])[_0x260096(0x3d3)][_0x260096(0x35c)] = _0x3ea862, document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x2e6)])[_0x260096(0x3d3)][_0x260096(0x35c)] = _0xf07854, document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x460)])[_0x260096(0x28f)] = wagered['toFixed'](decimalAmountView), document['getElementById']('wdbBalance')['innerText'] = balance['toFixed'](decimalAmountView), document[_0x260096(0x262)]('wdbProfit')['style'][_0x260096(0x35c)] = _0x2b9b16, document['getElementById'](_0x5b1c50[_0x260096(0x476)])[_0x260096(0x28f)] = profit[_0x260096(0x38a)](decimalAmountView), document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x364)])[_0x260096(0x28f)] = maxBetAmount[_0x260096(0x38a)](decimalAmountView), document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x437)])[_0x260096(0x28f)] = maxLosseAmount['toFixed'](decimalAmountView), document[_0x260096(0x262)](_0x5b1c50['wBKyM'])['innerText'] = bets, document['getElementById'](_0x5b1c50[_0x260096(0x4a3)])['innerText'] = wins, document[_0x260096(0x262)](_0x260096(0x4a8))[_0x260096(0x28f)] = losses, document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x284)])[_0x260096(0x3d3)]['color'] = _0x2cc919, document['getElementById'](_0x260096(0x43c))[_0x260096(0x28f)] = currentstreak, document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x22e)])[_0x260096(0x28f)] = maxwinstreak, document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x2e6)])[_0x260096(0x28f)] = maxlosestreak, document['getElementById']('wdbMinBalance')['innerText'] = minbalance[_0x260096(0x38a)](decimalAmountView), document['getElementById'](_0x5b1c50[_0x260096(0x260)])['innerText'] = maxbalance[_0x260096(0x38a)](decimalAmountView), document[_0x260096(0x262)](_0x5b1c50[_0x260096(0x2eb)])['innerText'] = minprofit[_0x260096(0x38a)](decimalAmountView), document['getElementById'](_0x5b1c50[_0x260096(0x49f)])[_0x260096(0x28f)] = maxprofit[_0x260096(0x38a)](decimalAmountView), percentWagered = _0x5b1c50[_0x260096(0x461)](wagered, startBalance), percentWagered = Math[_0x260096(0x3c8)](_0x5b1c50[_0x260096(0x48e)](_0x5b1c50[_0x260096(0x436)](percentWagered, Number['EPSILON']), 0x2710)) / 0x2710, percentWagered = _0x5b1c50[_0x260096(0x475)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x260096(0x262)](_0x260096(0x3ba))[_0x260096(0x28f)] = percentWagered, percentProfit = _0x5b1c50['jQXZW'](_0x5b1c50[_0x260096(0x461)](profit, startBalance), 0x64), percentProfit = _0x5b1c50[_0x260096(0x461)](Math['round'](_0x5b1c50['QEBnJ'](percentProfit + Number[_0x260096(0x235)], 0x2710)), 0x2710), percentProfit = _0x5b1c50[_0x260096(0x475)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x260096(0x262)](_0x260096(0x2a3))[_0x260096(0x3d3)][_0x260096(0x35c)] = _0x2b9b16, document['getElementById'](_0x5b1c50[_0x260096(0x214)])['innerText'] = percentProfit;
    if (!stopHistory) {
        const _0x5220d8 = _0x5b1c50[_0x260096(0x312)](game, _0x5b1c50[_0x260096(0x36d)]) ? lastBet[_0x260096(0x310)] ? '>' : '<' : '>', _0x852ca7 = lastBet['bethigh'] ? _0x260096(0x218) + bets + '\x22\x20type=\x22checkbox\x22\x20checked\x20/>' : _0x260096(0x218) + bets + _0x260096(0x32c), _0x2c9799 = '' + (havePlinkoRows ? _0x5b1c50['huBOp'](plinkoRow, _0x260096(0x2b2)) : '') + plinkoRisk, _0x29dc51 = '<td>' + bets + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x5b1c50['Eyhph'](Number, lastBet[_0x260096(0x42a)])[_0x260096(0x38a)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x5b1c50[_0x260096(0x4ab)](game, _0x5b1c50['pBfNT']) ? _0x852ca7 : betSide) + _0x260096(0x3f0) + (_0x5b1c50['YVFkX'](game, _0x5b1c50[_0x260096(0x32f)]) ? _0x2c9799 : _0x5b1c50[_0x260096(0x483)](Number(lastBet['chance'])[_0x260096(0x38a)](decimalChanceView), '%')) + _0x260096(0x3f0) + _0x5b1c50[_0x260096(0x306)](Number, lastBet['roll'])['toFixed'](decimalChanceView) + _0x260096(0x2ef) + _0x5b1c50['kCjIq'](Number, lastBet[_0x260096(0x2e4)])[_0x260096(0x38a)](decimalAmountView) + _0x260096(0x3f0) + (game !== _0x5b1c50['pBfNT'] ? game === _0x5b1c50[_0x260096(0x32f)] ? _0x2c9799 : game === _0x260096(0x402) ? _0x5b1c50[_0x260096(0x321)](Number, lastBet[_0x260096(0x28b)])[_0x260096(0x38a)](0x0) + _0x5b1c50[_0x260096(0x1cc)] : _0x5b1c50[_0x260096(0x3c2)](_0x5220d8, _0x5b1c50[_0x260096(0x306)](Number, lastBet[_0x260096(0x28b)])['toFixed'](decimalTargetResult)) : _0x5b1c50['EpsIq'](_0x5b1c50['Ranxf'](_0x5b1c50[_0x260096(0x407)](_0x5b1c50[_0x260096(0x3c6)](target1, '|'), target2), target3 ? _0x5b1c50['MiuWW']('|', target3) : ''), target4 ? _0x5b1c50[_0x260096(0x207)]('|', target4) : '')) + _0x260096(0x3f0) + (_0x5b1c50[_0x260096(0x25f)](game, 'keno') ? _0x5b1c50[_0x260096(0x3d7)](_0x5b1c50[_0x260096(0x306)](Number, result)[_0x260096(0x38a)](0x0), '\x20Hits') : _0x5b1c50[_0x260096(0x49b)](Number, result)[_0x260096(0x38a)](decimalTargetResult)) + _0x260096(0x3f0) + lastBet[_0x260096(0x3e2)] + _0x260096(0x3f0) + lastBet['id'] + _0x260096(0x3b9), _0x490761 = document[_0x260096(0x42d)]('tr');
        _0x490761[_0x260096(0x3d3)]['backgroundColor'] = win ? _0x5b1c50['OGjPn'] : _0x260096(0x3a5), _0x490761[_0x260096(0x492)] = _0x29dc51, document['getElementById'](_0x5b1c50[_0x260096(0x1ff)])[_0x260096(0x408)](_0x490761, document[_0x260096(0x262)](_0x260096(0x3c5))[_0x260096(0x293)][0x0]);
        const _0x1f7a56 = document['querySelector'](_0x5b1c50[_0x260096(0x451)])['rows'];
        if (_0x1f7a56[_0x260096(0x424)] > maxRows)
            document[_0x260096(0x213)](_0x260096(0x36e))[_0x260096(0x220)][_0x260096(0x21d)]();
    }
    const _0x2c36a4 = '' + (havePlinkoRows ? _0x5b1c50['EtSpu'](plinkoRow, _0x5b1c50[_0x260096(0x384)]) : '') + plinkoRisk;
    return fullLogs[_0x260096(0x41f)]({
        'game': game,
        'bets': bets,
        'amount': Number(lastBet[_0x260096(0x42a)])[_0x260096(0x38a)](decimalAmountView),
        'bethigh': game !== _0x260096(0x1f4) ? lastBet[_0x260096(0x310)] : null,
        'chance': game !== _0x5b1c50['pBfNT'] ? _0x5b1c50[_0x260096(0x306)](Number, lastBet[_0x260096(0x469)])[_0x260096(0x38a)](decimalChanceView) : lastBet['chance'],
        'target': _0x5b1c50[_0x260096(0x4ab)](game, _0x5b1c50['pBfNT']) ? _0x5b1c50[_0x260096(0x25f)](game, _0x260096(0x26d)) ? _0x2c36a4 : lastBet['target'] : null,
        'roll': Number(lastBet['roll'])[_0x260096(0x38a)](decimalChanceView),
        'result': _0x5b1c50[_0x260096(0x306)](Number, result)[_0x260096(0x38a)](decimalTargetResult),
        'profit': _0x5b1c50[_0x260096(0x475)](Number, lastBet[_0x260096(0x2e4)])[_0x260096(0x38a)](decimalAmountView),
        'nonce': lastBet[_0x260096(0x3e2)],
        'id': lastBet['id'],
        'chance1': _0x5b1c50[_0x260096(0x419)](game, _0x5b1c50[_0x260096(0x433)]) ? lastBet['chance1'] : null,
        'chance2': _0x5b1c50[_0x260096(0x25f)](game, _0x5b1c50[_0x260096(0x433)]) ? lastBet['chance2'] : null,
        'chance3': _0x5b1c50[_0x260096(0x498)](game, _0x260096(0x1f4)) ? lastBet[_0x260096(0x2c3)] : null,
        'chance4': _0x5b1c50[_0x260096(0x1cf)](game, 'rangedice') ? lastBet[_0x260096(0x47f)] : null,
        'betSide': _0x5b1c50[_0x260096(0x25f)](game, _0x260096(0x1f4)) ? lastBet[_0x260096(0x326)] : null
    }), _0x5b1c50[_0x260096(0x24e)](fullLogs['length'], 0x2710) && fullLogs[_0x260096(0x2a0)](), !stopChart && chart[_0x260096(0x46f)](betsChart, profitChart, color), _0x5b1c50[_0x260096(0x3a7)];
}
async function updateStats() {
    const _0x5ced54 = _0x5df213, _0x555140 = {
            'hEYDK': function (_0x550253, _0x3c6403) {
                return _0x550253 === _0x3c6403;
            },
            'eEMQe': _0x5ced54(0x3b3),
            'xjHiy': _0x5ced54(0x26b),
            'HIRaT': function (_0x51b368, _0x3cd293) {
                return _0x51b368 < _0x3cd293;
            },
            'WYFZg': _0x5ced54(0x387),
            'pTlxh': 'green',
            'IpLtE': _0x5ced54(0x32b),
            'mUrOb': 'wdbWagered',
            'znjUR': 'wdbBalance',
            'xGjRz': _0x5ced54(0x30e),
            'KhdQU': 'wdbHighBet',
            'cuaUM': 'wdbHighLose',
            'zHxFM': _0x5ced54(0x2d8),
            'pUELZ': 'wdbWins',
            'AdeUH': _0x5ced54(0x43c),
            'nRcSH': _0x5ced54(0x410),
            'FJQGx': _0x5ced54(0x2bb),
            'aMFAW': _0x5ced54(0x24d),
            'nYuxL': _0x5ced54(0x4b4),
            'zlWxm': _0x5ced54(0x446),
            'LiBFz': function (_0x18e50a, _0x29b1ea) {
                return _0x18e50a / _0x29b1ea;
            },
            'BlNfN': function (_0x17a800, _0x2f1432) {
                return _0x17a800 / _0x2f1432;
            },
            'uTiTU': function (_0x79f5e4, _0x18d487) {
                return _0x79f5e4 * _0x18d487;
            },
            'jcZRp': function (_0x2727e3, _0x27d85a) {
                return _0x2727e3 + _0x27d85a;
            },
            'JFKKe': function (_0x3cc21d, _0x39e9bb) {
                return _0x3cc21d(_0x39e9bb);
            },
            'EfLuF': _0x5ced54(0x3ba),
            'SycoL': function (_0x1d4846, _0x1768b5) {
                return _0x1d4846 * _0x1768b5;
            },
            'kzTgh': function (_0x250e95, _0x29d217) {
                return _0x250e95 + _0x29d217;
            },
            'vZPju': 'wdbPercentProfit',
            'hCYQL': _0x5ced54(0x30c)
        }, _0x5ad7bf = _0x555140[_0x5ced54(0x2fd)](profit, 0x0) ? darkMode ? _0x555140[_0x5ced54(0x2b7)] : _0x555140['xjHiy'] : profit < 0x0 ? _0x5ced54(0x387) : _0x5ced54(0x466), _0x32199d = _0x555140[_0x5ced54(0x2fd)](currentstreak, 0x0) ? darkMode ? _0x555140[_0x5ced54(0x2b7)] : _0x555140[_0x5ced54(0x2aa)] : _0x555140[_0x5ced54(0x1d3)](currentstreak, 0x0) ? _0x555140['WYFZg'] : _0x555140[_0x5ced54(0x219)], _0xcd6fcc = maxwinstreak > 0x0 ? _0x555140[_0x5ced54(0x219)] : darkMode ? 'white' : _0x555140['xjHiy'], _0x1fe9b1 = maxlosestreak > 0x0 ? _0x555140[_0x5ced54(0x355)] : darkMode ? _0x555140[_0x5ced54(0x2b7)] : _0x5ced54(0x26b);
    return document['getElementById'](_0x555140[_0x5ced54(0x488)])[_0x5ced54(0x3d3)][_0x5ced54(0x35c)] = _0xcd6fcc, document['getElementById']('wdbHighLoseStreak')[_0x5ced54(0x3d3)][_0x5ced54(0x35c)] = _0x1fe9b1, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x2f9)])['innerText'] = wagered['toFixed'](decimalAmountView), document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x313)])[_0x5ced54(0x28f)] = balance['toFixed'](decimalAmountView), document[_0x5ced54(0x262)](_0x555140['xGjRz'])[_0x5ced54(0x3d3)][_0x5ced54(0x35c)] = _0x5ad7bf, document['getElementById'](_0x555140[_0x5ced54(0x3b8)])[_0x5ced54(0x28f)] = profit['toFixed'](decimalAmountView), document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x234)])[_0x5ced54(0x28f)] = maxBetAmount['toFixed'](decimalAmountView), document[_0x5ced54(0x262)](_0x555140['cuaUM'])['innerText'] = maxLosseAmount[_0x5ced54(0x38a)](decimalAmountView), document[_0x5ced54(0x262)](_0x555140['zHxFM'])['innerText'] = bets, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x3eb)])[_0x5ced54(0x28f)] = wins, document['getElementById'](_0x5ced54(0x4a8))[_0x5ced54(0x28f)] = losses, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x283)])['style'][_0x5ced54(0x35c)] = _0x32199d, document[_0x5ced54(0x262)](_0x5ced54(0x43c))[_0x5ced54(0x28f)] = currentstreak, document['getElementById'](_0x555140[_0x5ced54(0x488)])[_0x5ced54(0x28f)] = maxwinstreak, document['getElementById'](_0x555140[_0x5ced54(0x375)])['innerText'] = maxlosestreak, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x217)])[_0x5ced54(0x28f)] = minbalance[_0x5ced54(0x38a)](decimalAmountView), document['getElementById'](_0x555140[_0x5ced54(0x333)])['innerText'] = maxbalance[_0x5ced54(0x38a)](decimalAmountView), document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x3a9)])[_0x5ced54(0x28f)] = minprofit[_0x5ced54(0x38a)](decimalAmountView), document[_0x5ced54(0x262)](_0x555140['zlWxm'])[_0x5ced54(0x28f)] = maxprofit[_0x5ced54(0x38a)](decimalAmountView), percentWagered = _0x555140[_0x5ced54(0x3bb)](wagered, startBalance), percentWagered = _0x555140[_0x5ced54(0x291)](Math[_0x5ced54(0x3c8)](_0x555140[_0x5ced54(0x264)](_0x555140[_0x5ced54(0x38e)](percentWagered, Number[_0x5ced54(0x235)]), 0x64)), 0x64), percentWagered = isNaN(percentWagered) || !_0x555140[_0x5ced54(0x31d)](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x2a5)])[_0x5ced54(0x28f)] = percentWagered, percentProfit = _0x555140[_0x5ced54(0x292)](_0x555140[_0x5ced54(0x3bb)](profit, startBalance), 0x64), percentProfit = _0x555140[_0x5ced54(0x291)](Math[_0x5ced54(0x3c8)](_0x555140['SycoL'](_0x555140[_0x5ced54(0x4a6)](percentProfit, Number[_0x5ced54(0x235)]), 0x64)), 0x64), percentProfit = _0x555140[_0x5ced54(0x31d)](isNaN, percentProfit) || !_0x555140['JFKKe'](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x5ced54(0x262)](_0x5ced54(0x2a3))[_0x5ced54(0x3d3)]['color'] = _0x5ad7bf, document[_0x5ced54(0x262)](_0x555140[_0x5ced54(0x2fa)])[_0x5ced54(0x28f)] = percentProfit, _0x555140['hCYQL'];
}
function log(_0x142052) {
    const _0x111a3a = _0x5df213, _0x48c181 = {
            'nujmO': _0x111a3a(0x3d4),
            'zozSC': _0x111a3a(0x3b3),
            'yNfvd': function (_0x59ae77, _0x443010) {
                return _0x59ae77 > _0x443010;
            }
        }, _0x3fe3b5 = document[_0x111a3a(0x262)](_0x48c181[_0x111a3a(0x3a0)]), _0x1f5bcc = document['createElement']('li');
    _0x1f5bcc[_0x111a3a(0x28f)] = _0x142052, _0x1f5bcc[_0x111a3a(0x3d3)][_0x111a3a(0x35c)] = darkMode ? _0x48c181[_0x111a3a(0x394)] : 'black', _0x3fe3b5[_0x111a3a(0x408)](_0x1f5bcc, _0x3fe3b5[_0x111a3a(0x395)]), _0x48c181[_0x111a3a(0x4a4)](_0x3fe3b5[_0x111a3a(0x293)][_0x111a3a(0x424)], maxRows) && _0x3fe3b5['removeChild'](_0x3fe3b5['lastChild']);
}
function updateSpeed() {
    const _0x4f81b8 = _0x5df213, _0x93654e = {
            'Pvybi': _0x4f81b8(0x2d6),
            'RPKwU': _0x4f81b8(0x4af),
            'AtbIy': function (_0x360f5e, _0x549d2a) {
                return _0x360f5e < _0x549d2a;
            },
            'SNTIp': function (_0x452f06, _0x23d564) {
                return _0x452f06 / _0x23d564;
            }
        };
    if (speedHistory['length'] < 0x2) {
        document[_0x4f81b8(0x262)](_0x93654e[_0x4f81b8(0x3fb)])['innerText'] = _0x93654e[_0x4f81b8(0x390)];
        return;
    }
    const _0x1ff089 = Date['now'](), _0x2fd5cd = 0x2710;
    speedHistory = speedHistory[_0x4f81b8(0x2de)](_0x49eeec => _0x1ff089 - _0x49eeec <= _0x2fd5cd);
    if (_0x93654e[_0x4f81b8(0x22a)](speedHistory['length'], 0x2)) {
        document['getElementById']('wdbSpeed')[_0x4f81b8(0x28f)] = _0x93654e['RPKwU'];
        return;
    }
    const _0x4ef75a = speedHistory[0x0], _0x3e01cc = (_0x1ff089 - _0x4ef75a) / 0x3e8, _0x722082 = _0x93654e['SNTIp'](speedHistory[_0x4f81b8(0x424)], _0x3e01cc);
    document[_0x4f81b8(0x262)](_0x4f81b8(0x2d6))[_0x4f81b8(0x28f)] = _0x722082[_0x4f81b8(0x38a)](0x2);
}
function updateTimer() {
    const _0x43e67f = _0x5df213, _0x1d6c08 = {
            'ZuuLF': function (_0x1edb1b, _0x405961) {
                return _0x1edb1b / _0x405961;
            },
            'FHPbG': function (_0x15a113, _0x4bc431) {
                return _0x15a113 % _0x4bc431;
            },
            'XuNsU': function (_0x455248, _0x322b20) {
                return _0x455248 * _0x322b20;
            },
            'hEqml': function (_0x1daaf1, _0x40cb89) {
                return _0x1daaf1 * _0x40cb89;
            }
        };
    elapsedTime++;
    const _0x1c4c90 = Math[_0x43e67f(0x386)](_0x1d6c08[_0x43e67f(0x3f9)](elapsedTime, 0x18 * 0x3c * 0x3c)), _0x2f92e4 = Math['floor'](_0x1d6c08[_0x43e67f(0x245)](elapsedTime, _0x1d6c08[_0x43e67f(0x3ce)](0x18, 0x3c) * 0x3c) / _0x1d6c08[_0x43e67f(0x363)](0x3c, 0x3c)), _0x218b96 = Math['floor'](_0x1d6c08[_0x43e67f(0x3f9)](elapsedTime % (0x3c * 0x3c), 0x3c)), _0x36bb8c = elapsedTime % 0x3c;
    document[_0x43e67f(0x262)]('wdbTime')[_0x43e67f(0x28f)] = _0x1c4c90 + ':' + _0x2f92e4 + ':' + _0x218b96 + ':' + _0x36bb8c;
}
async function start() {
    const _0x3e5daf = _0x5df213, _0x14a481 = {
            'bntkE': function (_0x3dc0b5, _0x1dd174) {
                return _0x3dc0b5 === _0x1dd174;
            },
            'pCmRX': _0x3e5daf(0x1f4),
            'axbgN': 'between',
            'dyCUJ': 'wdbTime',
            'nUuic': _0x3e5daf(0x20f),
            'HhiQz': _0x3e5daf(0x31a),
            'qxsmZ': _0x3e5daf(0x3aa),
            'cdjjj': 'wdbOpenJSScript',
            'yKVdU': _0x3e5daf(0x226),
            'pIicf': _0x3e5daf(0x2ff),
            'QBwyM': function (_0x59c65e, _0x19c17a) {
                return _0x59c65e(_0x19c17a);
            },
            'GCbqF': function (_0x419b99, _0x171dcf) {
                return _0x419b99(_0x171dcf);
            },
            'pSZwU': function (_0x1a9f68, _0x133b3d, _0x22fb47) {
                return _0x1a9f68(_0x133b3d, _0x22fb47);
            },
            'UTQVf': _0x3e5daf(0x1ea),
            'ahClG': _0x3e5daf(0x307),
            'YJptT': _0x3e5daf(0x205),
            'XVNuN': _0x3e5daf(0x3e5),
            'gXlbo': _0x3e5daf(0x48f),
            'dYopg': '$1=$1+$2\x20',
            'SbLIz': _0x3e5daf(0x23d),
            'CapqW': _0x3e5daf(0x316),
            'sNcoj': _0x3e5daf(0x3c1),
            'DIICw': _0x3e5daf(0x3b4),
            'pJSYG': _0x3e5daf(0x2b3),
            'JiohF': _0x3e5daf(0x3ff),
            'AGrGG': function (_0xbf5131, _0x53370d) {
                return _0xbf5131(_0x53370d);
            },
            'NMatd': _0x3e5daf(0x44d),
            'dDvBQ': _0x3e5daf(0x3bc),
            'kVMRB': _0x3e5daf(0x3be),
            'pLgST': function (_0x248742) {
                return _0x248742();
            },
            'KKXMl': function (_0xeb6c3, _0x507cac) {
                return _0xeb6c3(_0x507cac);
            }
        };
    if (_0x14a481['bntkE'](game, _0x14a481[_0x3e5daf(0x3fe)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x14a481['axbgN'];
        const _0x429c09 = 'chance1=' + chance1 + _0x3e5daf(0x229) + chance2 + '\x0a\x20\x20\x20\x20chance3=' + chance3 + _0x3e5daf(0x392) + chance4 + _0x3e5daf(0x369) + betSide + '\x22';
        fengari['load'](_0x429c09)();
    }
    try {
        if (!run) {
            document[_0x3e5daf(0x262)](_0x14a481[_0x3e5daf(0x2d5)])[_0x3e5daf(0x28f)] = _0x14a481['nUuic'], document[_0x3e5daf(0x262)](_0x3e5daf(0x303))['disabled'] = !![], document['getElementById'](_0x14a481[_0x3e5daf(0x448)])['disabled'] = !![], document['getElementById']('wdbStartButton')['disabled'] = !![], document[_0x3e5daf(0x262)](_0x14a481['qxsmZ'])[_0x3e5daf(0x456)] = !![], document[_0x3e5daf(0x262)](_0x3e5daf(0x2f2))[_0x3e5daf(0x456)] = !![], document['getElementById'](_0x14a481[_0x3e5daf(0x4a2)])['disabled'] = !![], document[_0x3e5daf(0x1d2)](_0x14a481[_0x3e5daf(0x1d5)])[_0x3e5daf(0x3ef)](_0x584c94 => _0x584c94['disabled'] = !![]), document[_0x3e5daf(0x1d2)](_0x14a481[_0x3e5daf(0x2f5)])['forEach'](_0x25fbf4 => _0x25fbf4[_0x3e5daf(0x456)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x14a481[_0x3e5daf(0x201)](clearInterval, timerInterval), _0x14a481[_0x3e5daf(0x26a)](clearInterval, speedUpdateInterval), timerInterval = _0x14a481[_0x3e5daf(0x351)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x14a481[_0x3e5daf(0x351)](setInterval, updateSpeed, 0x1f4), fengari[_0x3e5daf(0x275)]('scriptname\x20=\x20\x22\x22')(), fengari[_0x3e5daf(0x275)](_0x3e5daf(0x413))();
            if (mode === _0x14a481['UTQVf']) {
                const _0x419bcc = _0x14a481[_0x3e5daf(0x3b7)][_0x3e5daf(0x3a3)]('|');
                let _0x53525d = 0x0;
                while (!![]) {
                    switch (_0x419bcc[_0x53525d++]) {
                    case '0':
                        diceScript = luaEditor[_0x3e5daf(0x3f8)]();
                        continue;
                    case '1':
                        document[_0x3e5daf(0x262)](_0x14a481[_0x3e5daf(0x373)])[_0x3e5daf(0x28f)] = scriptname ? _0x3e5daf(0x2ed) + scriptname : '';
                        continue;
                    case '2':
                        fengari['load'](diceScript)();
                        continue;
                    case '3':
                        scriptname = fengari['load'](_0x14a481[_0x3e5daf(0x3d1)])();
                        continue;
                    case '4':
                        diceScript = diceScript[_0x3e5daf(0x4bc)](/!=/g, '~=')[_0x3e5daf(0x4bc)](/!/g, _0x14a481[_0x3e5daf(0x1f7)])['replace'](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x14a481[_0x3e5daf(0x39c)])[_0x3e5daf(0x4bc)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x14a481['SbLIz'])[_0x3e5daf(0x4bc)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x14a481[_0x3e5daf(0x1e2)])[_0x3e5daf(0x4bc)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x14a481[_0x3e5daf(0x46d)]);
                        continue;
                    }
                    break;
                }
            } else {
                if (mode === 'js') {
                    const _0x31190c = document['getElementById'](_0x14a481[_0x3e5daf(0x3d5)]);
                    if (_0x31190c)
                        _0x31190c[_0x3e5daf(0x21d)]();
                    diceScript = jsEditor[_0x3e5daf(0x3f8)]();
                    const _0x267583 = document[_0x3e5daf(0x42d)](_0x14a481[_0x3e5daf(0x3e1)]);
                    _0x267583['id'] = _0x14a481['DIICw'], _0x267583[_0x3e5daf(0x492)] = diceScript, document[_0x3e5daf(0x1de)][_0x3e5daf(0x343)](_0x267583);
                } else
                    _0x14a481['bntkE'](mode, _0x14a481[_0x3e5daf(0x353)]) && (basebet = _0x14a481[_0x3e5daf(0x37a)](Number, document[_0x3e5daf(0x262)](_0x14a481[_0x3e5daf(0x415)])['value']), nextbet = basebet, chance = _0x14a481[_0x3e5daf(0x201)](Number, document[_0x3e5daf(0x262)](_0x14a481[_0x3e5daf(0x294)])[_0x3e5daf(0x3db)]), bethigh = document[_0x3e5daf(0x213)](_0x14a481[_0x3e5daf(0x4b6)])[_0x3e5daf(0x497)]);
            }
            if (run)
                return _0x14a481[_0x3e5daf(0x3ab)](playBet);
        }
    } catch (_0x2fe58f) {
        stop(), _0x14a481[_0x3e5daf(0x4b7)](log, _0x2fe58f);
    }
}
function stop() {
    const _0x37b432 = _0x5df213, _0x99bec1 = {
            'jxYfN': function (_0x270ca7, _0x39bf51) {
                return _0x270ca7(_0x39bf51);
            },
            'dYhwt': 'wdbMenuCoin',
            'SoRPa': _0x37b432(0x380),
            'XanED': _0x37b432(0x2f2),
            'BsgFO': 'wdbStopOnWinButton',
            'WKlbL': '#wdbSaveScriptButton,\x20#wdbOpenScript'
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x99bec1['jxYfN'](clearInterval, timerInterval), clearInterval(speedUpdateInterval);
    const _0x423692 = [
        _0x99bec1[_0x37b432(0x23e)],
        'wdbMenuMode',
        _0x99bec1[_0x37b432(0x2a9)],
        'wdbResumeButton',
        _0x99bec1[_0x37b432(0x258)],
        _0x37b432(0x34f),
        _0x99bec1[_0x37b432(0x2c1)]
    ];
    _0x423692['forEach'](_0x2ff591 => {
        const _0x142e0e = _0x37b432;
        document[_0x142e0e(0x262)](_0x2ff591)[_0x142e0e(0x456)] = ![];
    }), document['querySelectorAll'](_0x99bec1[_0x37b432(0x331)])[_0x37b432(0x3ef)](_0x32a681 => _0x32a681['disabled'] = ![]);
}
async function resume(_0x121a96) {
    const _0x4ad05a = _0x5df213, _0xf8918a = {
            'WOZib': _0x4ad05a(0x303),
            'qjHKp': _0x4ad05a(0x31a),
            'rKHqo': _0x4ad05a(0x3aa),
            'HxWYC': _0x4ad05a(0x2f2),
            'HgfKr': _0x4ad05a(0x34f),
            'sxYPP': '#wdbSaveScriptButton,\x20#wdbOpenScript',
            'jinrv': _0x4ad05a(0x2df),
            'hLiFH': function (_0x413446, _0x33ae32, _0x546356) {
                return _0x413446(_0x33ae32, _0x546356);
            },
            'DNwCK': function (_0x4b609e, _0x164b52, _0x26d764) {
                return _0x4b609e(_0x164b52, _0x26d764);
            },
            'vSglw': function (_0x45df08) {
                return _0x45df08();
            }
        };
    if (!run) {
        const _0xdf59ac = [
            _0xf8918a[_0x4ad05a(0x348)],
            _0xf8918a[_0x4ad05a(0x4ac)],
            _0x4ad05a(0x380),
            _0xf8918a[_0x4ad05a(0x494)],
            _0xf8918a[_0x4ad05a(0x1ee)],
            _0xf8918a[_0x4ad05a(0x40d)]
        ];
        return _0xdf59ac['forEach'](_0x37589c => {
            const _0x3ed9c6 = _0x4ad05a;
            document[_0x3ed9c6(0x262)](_0x37589c)['disabled'] = !![];
        }), document[_0x4ad05a(0x1d2)](_0xf8918a[_0x4ad05a(0x47b)])['forEach'](_0x1dbd44 => _0x1dbd44[_0x4ad05a(0x456)] = !![]), !_0x121a96 && (log(_0xf8918a[_0x4ad05a(0x454)]), await new Promise(_0x4edf66 => setTimeout(_0x4edf66, 0x1388))), run = !![], sOW = ![], timerInterval = _0xf8918a['hLiFH'](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0xf8918a[_0x4ad05a(0x230)](setInterval, updateSpeed, 0x1f4), _0xf8918a['vSglw'](playBet);
    }
}
function stopOnWin() {
    const _0x4cc8a1 = _0x5df213, _0x26c9f6 = { 'TmHcR': _0x4cc8a1(0x338) };
    sOW = !![];
    if (run)
        document[_0x4cc8a1(0x262)](_0x26c9f6[_0x4cc8a1(0x412)])[_0x4cc8a1(0x456)] = !![];
}
async function playBet() {
    const _0xf35bee = _0x5df213, _0x28195a = {
            'HOqeL': _0xf35bee(0x45d),
            'sbTTD': _0xf35bee(0x48b),
            'jWEwE': 'return\x20bethigh',
            'ViOoN': _0xf35bee(0x330),
            'ChPPn': 'return\x20chance2',
            'UyLCg': _0xf35bee(0x227),
            'AIEOH': function (_0x215ebd, _0x3ff537) {
                return _0x215ebd(_0x3ff537);
            },
            'tBOyO': _0xf35bee(0x1f4),
            'vggpw': _0xf35bee(0x26d),
            'itggg': _0xf35bee(0x2b2),
            'FyDrp': function (_0x2a9d2a, _0x521e2d) {
                return _0x2a9d2a === _0x521e2d;
            },
            'DhdLq': _0xf35bee(0x3e4),
            'jClnn': function (_0x7785f6, _0x35bae5) {
                return _0x7785f6 + _0x35bae5;
            },
            'mUdLF': function (_0x35aa4c) {
                return _0x35aa4c();
            },
            'QBNeC': function (_0x1e687f, _0x34cdf2) {
                return _0x1e687f(_0x34cdf2);
            }
        };
    try {
        mode === 'lua' && (nextbet = fengari[_0xf35bee(0x275)](_0x28195a[_0xf35bee(0x2c0)])(), chance = fengari[_0xf35bee(0x275)](_0x28195a[_0xf35bee(0x4b8)])(), bethigh = fengari[_0xf35bee(0x275)](_0x28195a['jWEwE'])(), chance1 = fengari['load'](_0x28195a[_0xf35bee(0x2a2)])(), chance2 = fengari[_0xf35bee(0x275)](_0x28195a['ChPPn'])(), chance3 = fengari[_0xf35bee(0x275)](_0xf35bee(0x23a))(), chance4 = fengari[_0xf35bee(0x275)](_0x28195a['UyLCg'])(), betSide = fengari['load'](_0xf35bee(0x215))());
        nextbet = Number(nextbet), chance = Number(chance), previousbet = nextbet, lastBet = {
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
            const _0x44edae = _0x28195a[_0xf35bee(0x1ef)](Number, lastBet[_0xf35bee(0x42a)])['toFixed'](decimalAmountView), _0x1913b8 = _0x28195a[_0xf35bee(0x1ef)](Number, lastBet[_0xf35bee(0x469)])[_0xf35bee(0x38a)](decimalChanceView), _0x593bc7 = game !== _0x28195a[_0xf35bee(0x304)] ? game === _0x28195a['vggpw'] ? _0xf35bee(0x396) + _0x44edae + _0xf35bee(0x1e9) + (havePlinkoRows ? plinkoRow + _0x28195a[_0xf35bee(0x473)] : '') + plinkoRisk + _0xf35bee(0x30a) : 'Betting\x20' + _0x44edae + '\x20at\x20' + _0x1913b8 + _0xf35bee(0x367) + (_0x28195a[_0xf35bee(0x27e)](game, _0xf35bee(0x484)) ? bethigh ? _0x28195a['DhdLq'] : _0xf35bee(0x1e4) : _0x28195a['DhdLq']) : _0xf35bee(0x396) + _0x44edae + _0xf35bee(0x1e9) + chance1 + '|' + chance2 + (chance3 ? _0x28195a[_0xf35bee(0x328)]('|', chance3) : '') + (chance4 ? _0x28195a[_0xf35bee(0x328)]('|', chance4) : '') + _0xf35bee(0x420) + betSide;
            _0x28195a[_0xf35bee(0x1ef)](log, _0x593bc7);
        }
        if (run)
            return _0x28195a['mUdLF'](sendBet);
    } catch (_0x3b3ad7) {
        stop(), _0x28195a[_0xf35bee(0x3f6)](log, _0x3b3ad7);
    }
}
function resetall() {
    const _0x265131 = _0x5df213, _0x12e348 = {
            'uVMIS': _0x265131(0x354),
            'vlNFl': function (_0x393055) {
                return _0x393055();
            },
            'STwHi': '0.00',
            'AiSXD': _0x265131(0x2f1),
            'sgQjJ': _0x265131(0x20f),
            'eyOAc': function (_0x57d959) {
                return _0x57d959();
            },
            'yfTTm': function (_0x5c3264) {
                return _0x5c3264();
            }
        }, _0x30b59c = _0x12e348['uVMIS'][_0x265131(0x3a3)]('|');
    let _0x43982a = 0x0;
    while (!![]) {
        switch (_0x30b59c[_0x43982a++]) {
        case '0':
            _0x12e348[_0x265131(0x490)](resetlog);
            continue;
        case '1':
            document[_0x265131(0x262)](_0x265131(0x2d6))[_0x265131(0x28f)] = _0x12e348[_0x265131(0x391)];
            continue;
        case '2':
            document[_0x265131(0x262)](_0x12e348[_0x265131(0x1d4)])[_0x265131(0x28f)] = _0x12e348[_0x265131(0x20c)];
            continue;
        case '3':
            _0x12e348[_0x265131(0x389)](resethistory);
            continue;
        case '4':
            _0x12e348[_0x265131(0x3d2)](resetchart);
            continue;
        case '5':
            resetstats();
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x23816f = _0x5df213, _0xbb839e = {
            'QOobh': function (_0x360b4d, _0xc4d343) {
                return _0x360b4d(_0xc4d343);
            },
            'eNfkS': _0x23816f(0x3d9)
        };
    return _0xbb839e[_0x23816f(0x244)](toggleChart, _0xbb839e[_0x23816f(0x31e)]);
}
function resethistory() {
    const _0x402d99 = _0x5df213, _0x275029 = { 'nnocn': _0x402d99(0x240) };
    return toggleHistory(_0x275029['nnocn']);
}
function resetlog() {
    const _0x3f0700 = _0x5df213, _0x4a0a6a = {
            'liBSt': function (_0x1394b8, _0x12fe30) {
                return _0x1394b8(_0x12fe30);
            },
            'lspsQ': _0x3f0700(0x240)
        };
    return _0x4a0a6a[_0x3f0700(0x404)](toggleLog, _0x4a0a6a[_0x3f0700(0x455)]);
}
function resetstats() {
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, updateStats();
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x376beb) {
    return _0x376beb;
}
function ching() {
    const _0x502e8a = _0x5df213;
    return wdbSound[_0x502e8a(0x3ee)]();
}
function sleep(_0x3a7406) {
    return new Promise(_0x2402f1 => setTimeout(_0x2402f1, _0x3a7406 * 0x3e8));
}
async function initLua() {
    const _0x2faa00 = _0x5df213, _0x31075a = {
            'swTVT': _0x2faa00(0x237),
            'MdzDe': 'function\x20resume()\x0ajs.global:resume()\x0aend',
            'sNkxr': _0x2faa00(0x48c),
            'oeCXn': _0x2faa00(0x308),
            'SkyVJ': 'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
            'TUxmf': _0x2faa00(0x263),
            'ZyZvV': _0x2faa00(0x470),
            'hrWqR': _0x2faa00(0x1e7),
            'JvEys': 'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
            'YkHyI': _0x2faa00(0x2ea)
        };
    fengari[_0x2faa00(0x275)](_0x31075a[_0x2faa00(0x2cb)])(), fengari[_0x2faa00(0x275)](_0x2faa00(0x309))(), fengari['load'](_0x31075a[_0x2faa00(0x25c)])(), fengari[_0x2faa00(0x275)](_0x31075a['sNkxr'])(), fengari['load'](_0x31075a[_0x2faa00(0x3fc)])(), fengari[_0x2faa00(0x275)](_0x2faa00(0x1f5))(), fengari['load'](_0x2faa00(0x1f8))(), fengari['load'](_0x31075a[_0x2faa00(0x2c9)])(), fengari[_0x2faa00(0x275)](_0x2faa00(0x3b5))(), fengari[_0x2faa00(0x275)](_0x31075a[_0x2faa00(0x1fc)])(), fengari[_0x2faa00(0x275)](_0x2faa00(0x29b))(), fengari[_0x2faa00(0x275)](_0x2faa00(0x405))(), fengari[_0x2faa00(0x275)](_0x31075a['ZyZvV'])(), fengari[_0x2faa00(0x275)](_0x31075a[_0x2faa00(0x1e0)])(), fengari[_0x2faa00(0x275)](_0x31075a[_0x2faa00(0x3dc)])(), fengari[_0x2faa00(0x275)](_0x31075a[_0x2faa00(0x3a1)])(), fengari[_0x2faa00(0x275)](_0x2faa00(0x22c))(), fengari[_0x2faa00(0x275)]('table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end')();
    const _0x1dd005 = location[_0x2faa00(0x288)][_0x2faa00(0x4bc)](_0x2faa00(0x2f4), '');
    let _0x3bfbf5 = _0x1dd005[_0x2faa00(0x266)]('.');
    return casino = _0x1dd005[_0x2faa00(0x478)](0x0, _0x3bfbf5), fengari[_0x2faa00(0x275)]('casino=\x22' + casino + '\x22')(), 'initLuaOk';
}
async function updateLua() {
    const _0x516349 = _0x5df213, _0x447153 = {
            'ciqkm': _0x516349(0x323),
            'XqiWt': function (_0x48f646, _0x1cc7b3) {
                return _0x48f646(_0x1cc7b3);
            },
            'PLjYu': _0x516349(0x342),
            'LlUbW': 'return\x20plinkoRow',
            'koKPi': _0x516349(0x265),
            'BkCwX': _0x516349(0x47d),
            'zgXQX': _0x516349(0x298)
        }, _0x103238 = _0x516349(0x2e8) + win + _0x516349(0x2d3) + bets + _0x516349(0x4ad) + wins + _0x516349(0x22f) + losses + _0x516349(0x33f) + winstreak + _0x516349(0x267) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + _0x516349(0x329) + balance + _0x516349(0x2e0) + minbalance + _0x516349(0x311) + maxbalance + _0x516349(0x474) + minprofit + '\x0a\x20\x20\x20\x20maxprofit=' + maxprofit + _0x516349(0x324) + chance + _0x516349(0x4ae) + bethigh + _0x516349(0x3f4) + chance1 + _0x516349(0x229) + chance2 + _0x516349(0x305) + chance3 + _0x516349(0x392) + chance4 + _0x516349(0x369) + betSide + _0x516349(0x372) + nextbet + '\x0a\x20\x20\x20\x20previousbet=' + previousbet + _0x516349(0x468) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + '\x0a\x20\x20\x20\x20partialprofit=' + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=' + lastBet[_0x516349(0x42a)] + _0x516349(0x2ee) + lastBet[_0x516349(0x42a)] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet[_0x516349(0x469)] + _0x516349(0x41b) + lastBet[_0x516349(0x469)] + _0x516349(0x24b) + lastBet['roll'] + ',\x0a\x20\x20\x20\x20\x20\x20Roll=' + lastBet['roll'] + _0x516349(0x3c3) + lastBet['profit'] + ',\x0a\x20\x20\x20\x20\x20\x20Profit=' + lastBet[_0x516349(0x2e4)] + _0x516349(0x336) + lastBet['target'] + _0x516349(0x438) + lastBet[_0x516349(0x28b)] + _0x516349(0x3bf) + lastBet[_0x516349(0x25b)] + _0x516349(0x1e5) + lastBet['chance1'] + _0x516349(0x30f) + lastBet[_0x516349(0x35b)] + _0x516349(0x471) + lastBet[_0x516349(0x35b)] + _0x516349(0x301) + lastBet[_0x516349(0x2c3)] + _0x516349(0x417) + lastBet[_0x516349(0x2c3)] + _0x516349(0x271) + lastBet['chance4'] + _0x516349(0x269) + lastBet['chance4'] + _0x516349(0x34c) + lastBet[_0x516349(0x326)] + _0x516349(0x247) + lastBet[_0x516349(0x326)] + _0x516349(0x416) + lastBet['result'] + _0x516349(0x2dc) + lastBet[_0x516349(0x429)] + _0x516349(0x281) + lastBet[_0x516349(0x3e2)] + _0x516349(0x27a) + lastBet[_0x516349(0x3e2)] + _0x516349(0x3da) + lastBet['id'] + _0x516349(0x27b) + lastBet['id'] + _0x516349(0x3fa);
    fengari[_0x516349(0x275)](_0x103238)(), fengari['load'](_0x447153[_0x516349(0x286)])(), currency = fengari['load'](_0x516349(0x280))() || currency, coin = _0x447153[_0x516349(0x320)](String, currency)[_0x516349(0x1cd)](), plinkoRisk = fengari['load'](_0x447153[_0x516349(0x47a)])() || plinkoRisk, plinkoRow = fengari[_0x516349(0x275)](_0x447153[_0x516349(0x341)])() || plinkoRow, kenoRisk = fengari[_0x516349(0x275)](_0x447153[_0x516349(0x374)])() || kenoRisk;
    const _0x1907a0 = fengari[_0x516349(0x275)](_0x447153[_0x516349(0x499)])();
    return _0x1907a0 && (window[_0x516349(0x481)] = _0x1907a0[_0x516349(0x3a3)](',')['filter'](_0x535906 => _0x535906 !== '')[_0x516349(0x2cf)](Number)), _0x447153['zgXQX'];
}
function randomString(_0x536bb9, _0x1ec43b) {
    const _0x33766d = _0x5df213, _0x1babff = {
            'jIHGe': _0x33766d(0x277),
            'hdJno': _0x33766d(0x449),
            'BGDeJ': _0x33766d(0x26c),
            'IhZYA': function (_0x4d0262, _0x5787f8) {
                return _0x4d0262 * _0x5787f8;
            }
        }, _0x6354d1 = {
            'alphabet': _0x33766d(0x43f),
            'numeric': _0x1babff['jIHGe'],
            'hex': _0x1babff[_0x33766d(0x3e7)],
            'rangedice': _0x33766d(0x26e),
            'default': _0x1babff[_0x33766d(0x2bd)]
        }, _0x498b8c = _0x6354d1[_0x1ec43b] || _0x6354d1[_0x33766d(0x434)];
    let _0x2ad187 = '';
    for (let _0x56e811 = 0x0; _0x56e811 < _0x536bb9; _0x56e811++) {
        _0x2ad187 += _0x498b8c[_0x33766d(0x335)](Math[_0x33766d(0x386)](_0x1babff[_0x33766d(0x40c)](Math[_0x33766d(0x3a8)](), _0x498b8c[_0x33766d(0x424)])));
    }
    return _0x2ad187;
}
function setCookie(_0x71e005, _0x47274e, _0x31446e) {
    const _0x49ed0a = _0x5df213, _0x3df69c = {
            'dqEUD': function (_0x46c5c9, _0x28bc3f) {
                return _0x46c5c9 + _0x28bc3f;
            },
            'fJEOY': function (_0x31d53c, _0x2116b0) {
                return _0x31d53c * _0x2116b0;
            },
            'mWOJk': function (_0x2fbefa, _0x4cbbe9) {
                return _0x2fbefa * _0x4cbbe9;
            }
        }, _0x2bb322 = new Date();
    _0x2bb322[_0x49ed0a(0x378)](_0x3df69c[_0x49ed0a(0x1ed)](_0x2bb322[_0x49ed0a(0x26f)](), _0x3df69c[_0x49ed0a(0x21a)](_0x3df69c['fJEOY'](_0x3df69c[_0x49ed0a(0x24f)](_0x31446e, 0x18) * 0x3c, 0x3c), 0x3e8)));
    const _0x3a5d2e = _0x3df69c[_0x49ed0a(0x1ed)]('expires=', _0x2bb322[_0x49ed0a(0x2b9)]());
    document[_0x49ed0a(0x38f)] = _0x71e005 + '=' + _0x47274e + ';' + _0x3a5d2e + _0x49ed0a(0x49a);
}
function getCookie(_0x5a0fcf) {
    const _0x564048 = _0x5df213, _0x443f3d = {
            'TWSxg': function (_0x3cc967, _0x108661) {
                return _0x3cc967 + _0x108661;
            }
        }, _0x1d75f2 = _0x443f3d['TWSxg'](_0x5a0fcf, '='), _0x369193 = document[_0x564048(0x38f)][_0x564048(0x3a3)](';')['map'](_0x3cc2e2 => _0x3cc2e2[_0x564048(0x2b0)]());
    for (const _0x5083ee of _0x369193) {
        if (_0x5083ee['startsWith'](_0x1d75f2))
            return _0x5083ee['substring'](_0x1d75f2[_0x564048(0x424)]);
    }
    return '';
}
function saveScript() {
    const _0x1c1ff5 = _0x5df213, _0x3402cf = {
            'pDBYW': function (_0x503ada, _0x2e5965) {
                return _0x503ada === _0x2e5965;
            },
            'DfORX': 'lua',
            'iwTzo': _0x1c1ff5(0x2a4)
        }, _0x2ec82a = _0x3402cf[_0x1c1ff5(0x4bd)](mode, _0x3402cf[_0x1c1ff5(0x1f6)]) ? luaEditor['getValue']() : jsEditor[_0x1c1ff5(0x3f8)](), _0x5bd128 = document[_0x1c1ff5(0x42d)]('a');
    _0x5bd128[_0x1c1ff5(0x228)] = window[_0x1c1ff5(0x1f2)][_0x1c1ff5(0x225)](new Blob([_0x2ec82a], { 'type': _0x3402cf[_0x1c1ff5(0x2c8)] })), _0x5bd128['download'] = _0x1c1ff5(0x37c) + Date['now']()[_0x1c1ff5(0x34b)]()[_0x1c1ff5(0x478)](-0x6) + '.' + mode, _0x5bd128[_0x1c1ff5(0x28a)]();
}
function getErrMsg(_0x16028e) {
    const _0x4f4a32 = _0x5df213;
    return _0x16028e[_0x4f4a32(0x339)] && _0x16028e[_0x4f4a32(0x339)][_0x4f4a32(0x393)] && _0x16028e[_0x4f4a32(0x339)][_0x4f4a32(0x393)]['message'] || _0x16028e[_0x4f4a32(0x422)] || _0x16028e[_0x4f4a32(0x34b)]();
}

const _0x48bada = _0x2544;
(function (_0x44e170, _0x258a5c) {
    const _0x5e8520 = _0x2544, _0x5c7254 = _0x44e170();
    while (!![]) {
        try {
            const _0x51eae0 = -parseInt(_0x5e8520(0x1c0)) / 0x1 * (parseInt(_0x5e8520(0x1af)) / 0x2) + -parseInt(_0x5e8520(0x193)) / 0x3 + parseInt(_0x5e8520(0x1a7)) / 0x4 + -parseInt(_0x5e8520(0x16a)) / 0x5 + parseInt(_0x5e8520(0x174)) / 0x6 + parseInt(_0x5e8520(0x15c)) / 0x7 * (-parseInt(_0x5e8520(0x192)) / 0x8) + -parseInt(_0x5e8520(0x1b2)) / 0x9 * (-parseInt(_0x5e8520(0x171)) / 0xa);
            if (_0x51eae0 === _0x258a5c)
                break;
            else
                _0x5c7254['push'](_0x5c7254['shift']());
        } catch (_0x5e8e5d) {
            _0x5c7254['push'](_0x5c7254['shift']());
        }
    }
}(_0x5bf5, 0x52c20), CASINO_API = 'https://bch.games/api/graphql', token = localStorage['getItem'](_0x48bada(0x1b4))['trim']()['slice'](0x1, -0x1), client = null, uuid = null, idInit = null, idBalance = null, idBet = null, idVault = null, amountVault = null, idUnVault = null, amountUnVault = 0x0, clientSeed = randomString(0x10), wdbConnected = ![], loadingCoin = !![], decimalAmountView = 0x9, startBalance = null, minbalance = null, maxbalance = null);
async function beforeWork() {
    return connectServer();
}
function vault(_0x22e95a) {
    const _0x4be318 = _0x48bada, _0x4feed6 = {
            'cCHuk': _0x4be318(0x1ab),
            'WQwiP': function (_0x258695, _0x40af01) {
                return _0x258695 * _0x40af01;
            }
        };
    idVault = crypto[_0x4be318(0x15a)](), amountVault = _0x22e95a;
    const _0x42becb = {
        'id': idVault,
        'type': _0x4feed6[_0x4be318(0x16e)],
        'payload': {
            'query': _0x4be318(0x187),
            'variables': { 'amount': _0x4feed6[_0x4be318(0x156)](_0x22e95a, 0x5f5e100) }
        }
    };
    client[_0x4be318(0x178)](JSON[_0x4be318(0x1a3)](_0x42becb));
}
function unvault(_0xcedb17) {
    const _0x5bce47 = _0x48bada, _0x494cb5 = {
            'ZUjlK': _0x5bce47(0x1ab),
            'xZCXf': function (_0x168307, _0x5b1e04) {
                return _0x168307 * _0x5b1e04;
            }
        };
    idUnVault = crypto[_0x5bce47(0x15a)](), amountUnVault = _0xcedb17;
    const _0x565ccb = {
        'id': idUnVault,
        'type': _0x494cb5[_0x5bce47(0x190)],
        'payload': {
            'query': _0x5bce47(0x1bb),
            'variables': { 'amount': _0x494cb5['xZCXf'](_0xcedb17, 0x5f5e100) }
        }
    };
    client[_0x5bce47(0x178)](JSON[_0x5bce47(0x1a3)](_0x565ccb));
}
async function getListCoin() {
    const _0x364699 = _0x48bada, _0x59240b = { 'OgnDH': _0x364699(0x1aa) };
    return coins = [_0x59240b[_0x364699(0x1c4)]], coin = coins[0x0], drawSelectCoin();
}
async function checkbalance() {
    const _0x4b3bde = _0x48bada, _0xa258ef = {
            'aqskm': function (_0x3e84b2, _0x44f85a) {
                return _0x3e84b2 === _0x44f85a;
            },
            'LKjMY': 'subscribe',
            'RUZrd': function (_0x162a5b, _0x56f663) {
                return _0x162a5b(_0x56f663);
            },
            'XAhcd': 'network-only',
            'GAgMV': _0x4b3bde(0x157),
            'wFziK': 'checkbalance\x20ok'
        };
    return wdbConnected && _0xa258ef['aqskm'](client[_0x4b3bde(0x181)], 0x1) && (loadingCoin = !![], idBalance = crypto[_0x4b3bde(0x15a)](), client[_0x4b3bde(0x178)](JSON['stringify']({
        'id': idBalance,
        'type': _0xa258ef[_0x4b3bde(0x15f)],
        'payload': {
            'key': _0xa258ef[_0x4b3bde(0x19c)](randomString, 0x6),
            'query': _0x4b3bde(0x1c2),
            'variables': {},
            'context': {
                'url': CASINO_API,
                'preferGetMethod': ![],
                'suspense': ![],
                'requestPolicy': _0xa258ef[_0x4b3bde(0x162)],
                'meta': { 'cacheOutcome': _0xa258ef[_0x4b3bde(0x161)] }
            }
        }
    }))), _0xa258ef[_0x4b3bde(0x182)];
}
function resetseed() {
    const _0x56d210 = {
        'bFMgI': function (_0x4243d2, _0x1fabce) {
            return _0x4243d2(_0x1fabce);
        }
    };
    return _0x56d210['bFMgI'](log, 'resetseed()\x20not\x20support'), clientSeed = randomString(0x10);
}
async function sendBet() {
    const _0x2ab0e7 = _0x48bada, _0x3245b1 = {
            'Kbjhy': function (_0x3950ae, _0x4d3a50) {
                return _0x3950ae / _0x4d3a50;
            },
            'Opnlo': function (_0x3ff1d3, _0x5e78c2) {
                return _0x3ff1d3 * _0x5e78c2;
            },
            'sDKMw': function (_0x5c2181, _0x30c4e5) {
                return _0x5c2181 + _0x30c4e5;
            },
            'sDoaY': function (_0x70edd6, _0x1846c4) {
                return _0x70edd6 - _0x1846c4;
            },
            'GVxrd': function (_0x1e5ac9, _0x2d7d7f) {
                return _0x1e5ac9 / _0x2d7d7f;
            },
            'VrPuA': function (_0x389c01, _0x59bc34) {
                return _0x389c01 * _0x59bc34;
            },
            'pcrqN': function (_0x1f2654, _0xc3af6f) {
                return _0x1f2654(_0xc3af6f);
            },
            'tALtw': _0x2ab0e7(0x1b3),
            'vpCgu': function (_0xd5e07a, _0x6a8dd4) {
                return _0xd5e07a * _0x6a8dd4;
            },
            'kGYQB': 'network-only',
            'nFQDf': 'miss',
            'QlSgg': function (_0x23c9cd) {
                return _0x23c9cd();
            }
        };
    chance = _0x3245b1[_0x2ab0e7(0x18c)](Math[_0x2ab0e7(0x15e)](_0x3245b1[_0x2ab0e7(0x1a9)](_0x3245b1[_0x2ab0e7(0x194)](chance, Number[_0x2ab0e7(0x176)]), 0x64)), 0x64), target = bethigh ? _0x3245b1['sDoaY'](99.99, chance) : chance, target = _0x3245b1[_0x2ab0e7(0x195)](Math['round'](_0x3245b1[_0x2ab0e7(0x18d)](_0x3245b1['sDKMw'](target, Number[_0x2ab0e7(0x176)]), 0x64)), 0x64);
    if (run)
        idBet = crypto[_0x2ab0e7(0x15a)](), client[_0x2ab0e7(0x178)](JSON['stringify']({
            'id': idBet,
            'type': 'subscribe',
            'payload': {
                'key': _0x3245b1[_0x2ab0e7(0x18f)](randomString, 0x6),
                'query': _0x2ab0e7(0x17b),
                'variables': {
                    'dividingPoint': target,
                    'mode': bethigh ? 'RollOver' : _0x3245b1['tALtw'],
                    'amount': parseInt(_0x3245b1[_0x2ab0e7(0x1b9)](nextbet, 0x5f5e100)),
                    'clientSeed': clientSeed
                },
                'context': {
                    '_instance': [],
                    'url': CASINO_API,
                    'preferGetMethod': ![],
                    'suspense': ![],
                    'requestPolicy': _0x3245b1['kGYQB'],
                    'meta': { 'cacheOutcome': _0x3245b1['nFQDf'] }
                }
            }
        }));
    else
        _0x3245b1[_0x2ab0e7(0x1a1)](connectServer)['then'](sendBet);
}
async function handleResult(_0x268e1f) {
    const _0x258b7e = _0x48bada, _0x571c9f = {
            'SCHmh': _0x258b7e(0x179),
            'ndubS': function (_0x5482e8, _0xad4e4d) {
                return _0x5482e8 / _0xad4e4d;
            },
            'sVjzT': function (_0x49560) {
                return _0x49560();
            },
            'qYCCt': function (_0x322c58) {
                return _0x322c58();
            },
            'zjKLn': function (_0x18fb83, _0x3ac779) {
                return _0x18fb83(_0x3ac779);
            }
        };
    try {
        const _0x4d337b = _0x571c9f['SCHmh'][_0x258b7e(0x188)]('|');
        let _0x376f6b = 0x0;
        while (!![]) {
            switch (_0x4d337b[_0x376f6b++]) {
            case '0':
                lastBet['id'] = String(_0x268e1f['id']);
                continue;
            case '1':
                result = _0x268e1f[_0x258b7e(0x1a0)][_0x258b7e(0x1bd)];
                continue;
            case '2':
                lastBet[_0x258b7e(0x180)] = _0x268e1f[_0x258b7e(0x1a0)][_0x258b7e(0x1bd)];
                continue;
            case '3':
                currentprofit = _0x571c9f[_0x258b7e(0x1ad)](_0x268e1f['profit'], 0x5f5e100);
                continue;
            case '4':
                return _0x571c9f['sVjzT'](handleStats);
            }
            break;
        }
    } catch (_0x58e2d5) {
        return _0x571c9f['qYCCt'](stop), _0x571c9f[_0x258b7e(0x163)](log, _0x571c9f['zjKLn'](getErrMsg, _0x58e2d5));
    }
}
async function connectServer() {
    const _0x2e741f = _0x48bada, _0x59613d = {
            'XJLei': _0x2e741f(0x166),
            'MeKjM': function (_0x23d6b6, _0x3df4e1, _0x162185) {
                return _0x23d6b6(_0x3df4e1, _0x162185);
            },
            'KqWHX': function (_0x1ee41a) {
                return _0x1ee41a();
            },
            'PWesw': function (_0x804108, _0x432638) {
                return _0x804108(_0x432638);
            },
            'FCRat': _0x2e741f(0x17c),
            'rjsaM': _0x2e741f(0x19e)
        };
    return client = new WebSocket(_0x59613d[_0x2e741f(0x19a)], [_0x59613d[_0x2e741f(0x16c)]]), client[_0x2e741f(0x19d)] = async _0x35f230 => {
        const _0x46ff5a = _0x2e741f;
        client[_0x46ff5a(0x178)](JSON[_0x46ff5a(0x1a3)]({ 'type': _0x59613d[_0x46ff5a(0x1bc)] }));
    }, client[_0x2e741f(0x1bf)] = () => {
        const _0xc6a81f = _0x2e741f;
        wdbConnected = ![], _0x59613d[_0xc6a81f(0x17d)](setTimeout, connectServer, 0xbb8);
    }, client[_0x2e741f(0x158)] = _0x9b413d => {
        const _0x28942f = _0x2e741f;
        wdbConnected = ![], (_0x59613d[_0x28942f(0x1a5)](stop), _0x59613d[_0x28942f(0x167)](log, _0x9b413d));
    }, client['onmessage'] = handleMessage, _0x2e741f(0x183);
}
function _0x2544(_0xf45e51, _0x4d99e3) {
    const _0x5bf56a = _0x5bf5();
    return _0x2544 = function (_0x254401, _0x23ea34) {
        _0x254401 = _0x254401 - 0x156;
        let _0x31d8cd = _0x5bf56a[_0x254401];
        return _0x31d8cd;
    }, _0x2544(_0xf45e51, _0x4d99e3);
}
function _0x5bf5() {
    const _0x410c7f = [
        'TEchR',
        'mutation\x20($amount:\x20Float!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20withdrawFromVault(amount:\x20$amount)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}',
        'XJLei',
        'result',
        'qLYWE',
        'onclose',
        '3686IwGIfG',
        'sKSGM',
        'subscription\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20balance\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20before\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20after\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'reehI',
        'OgnDH',
        'WQwiP',
        'miss',
        'onerror',
        'MGOYj',
        'randomUUID',
        'uuid',
        '35EaLRsg',
        'undefined',
        'round',
        'LKjMY',
        '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authenticate(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken:\x20\x22',
        'GAgMV',
        'XAhcd',
        'zjKLn',
        'balance=',
        'lXaJq',
        'connection_init',
        'PWesw',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20username\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20email\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20twoFactorEnabled\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20role\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20countryBlock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'XBTcf',
        '1701620UlPRGh',
        'HYHKR',
        'rjsaM',
        'JbzZD',
        'cCHuk',
        'authenticate',
        'maxbet=',
        '8587830NOKxAB',
        'balance',
        'GrUdQ',
        '2361216jgzRay',
        'FCKvN',
        'EPSILON',
        'after',
        'send',
        '3|2|1|0|4',
        'maxbalance=',
        'mutation\x20($amount:\x20Float!,\x20$clientSeed:\x20String!,\x20$dividingPoint:\x20Float!,\x20$mode:\x20DiceGameMode!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20playDice(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount:\x20$amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientSeed:\x20$clientSeed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dividingPoint:\x20$dividingPoint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mode:\x20$mode\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20isWin\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20details\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...\x20on\x20DiceGameDetails\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dividingPoint\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'wss://bch.games/api/graphql',
        'MeKjM',
        'wZFYz',
        'next',
        'roll',
        'readyState',
        'wFziK',
        'connectServer\x20ok',
        'qKdCS',
        'errors',
        'mBdWe',
        'mutation\x20($amount:\x20Float!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20depositToVault(amount:\x20$amount)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}',
        'split',
        'message',
        'MhDmB',
        'mYKjZ',
        'Kbjhy',
        'VrPuA',
        'complete',
        'pcrqN',
        'ZUjlK',
        'wDYjP',
        '219336PBzAdh',
        '588921JaRGYZ',
        'sDKMw',
        'GVxrd',
        'minbalance=',
        'connection_ack',
        'initConnection\x20ok',
        'playDice',
        'FCRat',
        'jzXJd',
        'RUZrd',
        'onopen',
        'graphql-transport-ws',
        'kIlem',
        'details',
        'QlSgg',
        'Vaulted\x20',
        'stringify',
        'BiUhS',
        'KqWHX',
        'toFixed',
        '1371044JNExmI',
        'Vzhic',
        'Opnlo',
        'BCH',
        'subscribe',
        'type',
        'ndubS',
        'data',
        '316jGYLXe',
        'OhnhD',
        'load',
        '9TiiuBY',
        'RollUnder',
        'auth_token_v1',
        'dOmfg',
        'vdYEI',
        'payload',
        'LzgzI',
        'vpCgu'
    ];
    _0x5bf5 = function () {
        return _0x410c7f;
    };
    return _0x5bf5();
}
async function handleMessage(_0x1ae4c3) {
    const _0x270357 = _0x48bada, _0x1f95de = {
            'cWQsF': function (_0x39c832, _0x51aff2) {
                return _0x39c832 === _0x51aff2;
            },
            'sKSGM': _0x270357(0x197),
            'qKdCS': function (_0x1a3e8e) {
                return _0x1a3e8e();
            },
            'MGOYj': function (_0x2ccfce, _0x1306d8) {
                return _0x2ccfce === _0x1306d8;
            },
            'VOgWt': function (_0x194eea, _0x244ece) {
                return _0x194eea === _0x244ece;
            },
            'mYKjZ': _0x270357(0x17f),
            'wDYjP': function (_0x28d67d) {
                return _0x28d67d();
            },
            'OhnhD': function (_0x295d86, _0x2273a1) {
                return _0x295d86 === _0x2273a1;
            },
            'Vzhic': function (_0x3d12be, _0x9ab101) {
                return _0x3d12be(_0x9ab101);
            },
            'vdYEI': function (_0x5ef786, _0x2ee970) {
                return _0x5ef786 + _0x2ee970;
            },
            'jzXJd': _0x270357(0x164),
            'ZMXfl': '7|6|3|0|2|1|5|8|4',
            'Gknhp': _0x270357(0x17a),
            'tcynH': function (_0xa541, _0x53cbd9) {
                return _0xa541 + _0x53cbd9;
            },
            'LzgzI': function (_0x173c53, _0x4647e9) {
                return _0x173c53 + _0x4647e9;
            },
            'JbzZD': _0x270357(0x170),
            'lXaJq': function (_0x4f2b1d, _0x442adf) {
                return _0x4f2b1d + _0x442adf;
            },
            'WpufQ': 'minbet=',
            'GrUdQ': function (_0xb71232, _0x564b9e) {
                return _0xb71232 !== _0x564b9e;
            },
            'qLYWE': _0x270357(0x15d),
            'kIlem': function (_0x6e7c31) {
                return _0x6e7c31();
            },
            'mBdWe': function (_0x5d02bb, _0x2bc146) {
                return _0x5d02bb(_0x2bc146);
            },
            'TEchR': function (_0x30361a, _0x459075) {
                return _0x30361a === _0x459075;
            },
            'XBTcf': function (_0x183907, _0x2dbbac) {
                return _0x183907 + _0x2dbbac;
            },
            'dOmfg': function (_0x48c0ab, _0xf6902b) {
                return _0x48c0ab(_0xf6902b);
            },
            'FCKvN': function (_0x1e3569, _0x320e35) {
                return _0x1e3569 === _0x320e35;
            },
            'reehI': _0x270357(0x18e),
            'HYHKR': function (_0x41010a) {
                return _0x41010a();
            },
            'BiUhS': function (_0x1ef5de, _0x3bc4b9) {
                return _0x1ef5de(_0x3bc4b9);
            }
        }, _0x5a827b = JSON['parse'](_0x1ae4c3[_0x270357(0x1ae)]);
    if (_0x1f95de['cWQsF'](_0x5a827b['type'], _0x1f95de[_0x270357(0x1c1)]))
        await _0x1f95de[_0x270357(0x184)](initConnection);
    if (_0x1f95de[_0x270357(0x159)](_0x5a827b['id'], idInit) && _0x1f95de['VOgWt'](_0x5a827b[_0x270357(0x1ac)], _0x1f95de[_0x270357(0x18b)])) {
        if (_0x5a827b['payload'][_0x270357(0x1ae)][_0x270357(0x16f)])
            uuid = _0x5a827b['payload'][_0x270357(0x1ae)][_0x270357(0x16f)][_0x270357(0x15b)];
        wdbConnected = !![], _0x1f95de[_0x270357(0x191)](checkbalance);
    }
    if (_0x5a827b['id'] === idBalance && _0x1f95de['OhnhD'](_0x5a827b['type'], _0x1f95de[_0x270357(0x18b)])) {
        if (_0x5a827b[_0x270357(0x1b7)][_0x270357(0x1ae)][_0x270357(0x172)] && loadingCoin) {
            balance = _0x1f95de[_0x270357(0x1a8)](Number, _0x5a827b[_0x270357(0x1b7)][_0x270357(0x1ae)][_0x270357(0x172)][_0x270357(0x177)] / 0x5f5e100), fengari[_0x270357(0x1b1)](_0x1f95de['vdYEI'](_0x1f95de[_0x270357(0x19b)], balance))();
            if (_0x1f95de[_0x270357(0x1b0)](startBalance, null)) {
                const _0x1debeb = _0x1f95de['ZMXfl'][_0x270357(0x188)]('|');
                let _0x3ea7aa = 0x0;
                while (!![]) {
                    switch (_0x1debeb[_0x3ea7aa++]) {
                    case '0':
                        maxbalance = balance;
                        continue;
                    case '1':
                        minbet = 1e-8;
                        continue;
                    case '2':
                        fengari['load'](_0x1f95de[_0x270357(0x1b6)](_0x1f95de['Gknhp'], balance))();
                        continue;
                    case '3':
                        fengari[_0x270357(0x1b1)](_0x1f95de['tcynH'](_0x270357(0x196), balance))();
                        continue;
                    case '4':
                        fengari[_0x270357(0x1b1)](_0x1f95de[_0x270357(0x1b8)](_0x1f95de[_0x270357(0x16d)], maxbet))();
                        continue;
                    case '5':
                        fengari['load'](_0x1f95de[_0x270357(0x165)](_0x1f95de['WpufQ'], minbet))();
                        continue;
                    case '6':
                        minbalance = balance;
                        continue;
                    case '7':
                        startBalance = balance;
                        continue;
                    case '8':
                        maxbet = balance;
                        continue;
                    }
                    break;
                }
            }
            loadingCoin = ![], _0x1f95de[_0x270357(0x191)](updateStats);
            _0x1f95de[_0x270357(0x173)](typeof run, _0x1f95de[_0x270357(0x1be)]) && run && sendBet();
            return;
        }
    }
    if (_0x5a827b['id'] === idBet && _0x5a827b['type'] === _0x270357(0x17f)) {
        if (_0x5a827b[_0x270357(0x1b7)]['data'])
            return _0x1f95de[_0x270357(0x1a8)](handleResult, _0x5a827b['payload'][_0x270357(0x1ae)][_0x270357(0x199)]);
        return _0x1f95de[_0x270357(0x19f)](stop), _0x1f95de[_0x270357(0x186)](log, _0x5a827b[_0x270357(0x1b7)][_0x270357(0x185)][0x0][_0x270357(0x189)]);
    }
    _0x1f95de[_0x270357(0x1ba)](_0x5a827b['id'], idVault) && _0x1f95de[_0x270357(0x159)](_0x5a827b[_0x270357(0x1ac)], _0x270357(0x18e)) && (balance -= amountVault, fengari[_0x270357(0x1b1)](_0x1f95de[_0x270357(0x169)](_0x1f95de['jzXJd'], balance))(), _0x1f95de['wDYjP'](updateStats), _0x1f95de[_0x270357(0x1b5)](log, _0x270357(0x1a2) + _0x1f95de[_0x270357(0x186)](Number, amountVault)[_0x270357(0x1a6)](0x8) + '\x20' + coin)), _0x1f95de[_0x270357(0x175)](_0x5a827b['id'], idUnVault) && _0x1f95de['cWQsF'](_0x5a827b['type'], _0x1f95de[_0x270357(0x1c3)]) && (balance += amountUnVault, fengari[_0x270357(0x1b1)](_0x1f95de[_0x270357(0x19b)] + balance)(), _0x1f95de[_0x270357(0x16b)](updateStats), _0x1f95de[_0x270357(0x1a4)](log, 'Unvaulted\x20' + Number(amountUnVault)[_0x270357(0x1a6)](0x8) + '\x20' + coin));
}
async function initConnection() {
    const _0x3f02b9 = _0x48bada, _0x51c200 = {
            'MhDmB': function (_0x369736) {
                return _0x369736();
            },
            'wZFYz': _0x3f02b9(0x198)
        };
    if (client['readyState'] === 0x1)
        idInit = crypto[_0x3f02b9(0x15a)](), client['send'](JSON[_0x3f02b9(0x1a3)]({
            'id': idInit,
            'payload': {
                'query': _0x3f02b9(0x160) + token + _0x3f02b9(0x168),
                'variables': {}
            },
            'type': _0x3f02b9(0x1ab)
        }));
    else
        _0x51c200[_0x3f02b9(0x18a)](connectServer);
    return _0x51c200[_0x3f02b9(0x17e)];
}