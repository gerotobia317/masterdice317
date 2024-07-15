const _0x3d490e = _0x3e59;
(function (_0x3fd058, _0x49f495) {
    const _0x273712 = _0x3e59, _0x4a4827 = _0x3fd058();
    while (!![]) {
        try {
            const _0x17fed4 = parseInt(_0x273712(0xaa)) / 0x1 + parseInt(_0x273712(0x1dd)) / 0x2 + -parseInt(_0x273712(0x188)) / 0x3 * (-parseInt(_0x273712(0x32f)) / 0x4) + parseInt(_0x273712(0xf9)) / 0x5 + -parseInt(_0x273712(0x15f)) / 0x6 + parseInt(_0x273712(0x32e)) / 0x7 + -parseInt(_0x273712(0x2bb)) / 0x8 * (parseInt(_0x273712(0xef)) / 0x9);
            if (_0x17fed4 === _0x49f495)
                break;
            else
                _0x4a4827['push'](_0x4a4827['shift']());
        } catch (_0x1d2d22) {
            _0x4a4827['push'](_0x4a4827['shift']());
        }
    }
}(_0x1788, 0x8beb8), darkMode = ![], mode = _0x3d490e(0x1c1), game = _0x3d490e(0x20a), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x3d490e(0x153), bethigh = !![], target = 0x0, result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
    'amount': 0x0,
    'Amount': 0x0,
    'chance': 0x0,
    'Chance': 0x0,
    'roll': 0x0,
    'Roll': 0x0,
    'profit': 0x0,
    'Profit': 0x0,
    'target': 0x0,
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSpeed = null, wdbTimer = null, wdbSound = new Object(new Audio(WDB_API + '/' + WDB_MODE + '/media/ching.mp3')), wdbUI = _0x3d490e(0x152) + CASINO_GAME + _0x3d490e(0xe5) + WDB_MODE + _0x3d490e(0x155) + location[_0x3d490e(0xfe)][_0x3d490e(0xea)](_0x3d490e(0x19d), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Speed:\x20<span\x20id=\x22wdbSpeed\x22>0</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
function changeMaxRows() {
    const _0x335257 = _0x3d490e, _0x47ec84 = {
            'bRWdN': function (_0x1a13eb, _0x3dbd74) {
                return _0x1a13eb(_0x3dbd74);
            },
            'QBViP': 'wdbMaxRows',
            'sjEav': function (_0x52a0ef) {
                return _0x52a0ef();
            }
        };
    maxRows = _0x47ec84[_0x335257(0x365)](Number, document[_0x335257(0xcb)](_0x47ec84['QBViP'])['value']), resetchart(), _0x47ec84[_0x335257(0x1b7)](resethistory), _0x47ec84[_0x335257(0x1b7)](resetlog);
}
function toggleDarkMode() {
    const _0x52acca = _0x3d490e, _0x4da781 = {
            'eCtUj': _0x52acca(0x374),
            'gKImq': _0x52acca(0x2c2),
            'lChgn': _0x52acca(0x27d),
            'GDryp': _0x52acca(0x317),
            'XCiLg': _0x52acca(0x237),
            'lrpLx': _0x52acca(0x29b),
            'FdGok': _0x52acca(0x193),
            'TXwSc': 'darcula',
            'YPCnf': _0x52acca(0x1b6),
            'Lcazw': _0x52acca(0x279),
            'rWoqv': _0x52acca(0x2db),
            'oGIPg': _0x52acca(0x268),
            'pqEuT': _0x52acca(0x197),
            'LdNtA': function (_0x5020a3) {
                return _0x5020a3();
            }
        };
    darkMode = !darkMode;
    if (darkMode) {
        const _0x41f494 = _0x4da781['eCtUj']['split']('|');
        let _0x43cda5 = 0x0;
        while (!![]) {
            switch (_0x41f494[_0x43cda5++]) {
            case '0':
                document[_0x52acca(0xcb)](_0x4da781[_0x52acca(0x26c)])[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x4da781['lChgn'];
                continue;
            case '1':
                chart[_0x52acca(0x25a)][_0x52acca(0x193)] = _0x4da781['GDryp'];
                continue;
            case '2':
                document['querySelector'](_0x4da781[_0x52acca(0x2ed)])[_0x52acca(0x1d2)]['backgroundColor'] = _0x4da781['lrpLx'];
                continue;
            case '3':
                jsEditor[_0x52acca(0xba)](_0x4da781[_0x52acca(0x263)], _0x4da781[_0x52acca(0xce)]);
                continue;
            case '4':
                document[_0x52acca(0x176)](_0x4da781[_0x52acca(0x2ed)])[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x52acca(0x27d);
                continue;
            case '5':
                document[_0x52acca(0xcb)](_0x4da781['gKImq'])[_0x52acca(0x1d2)]['backgroundColor'] = _0x52acca(0x29b);
                continue;
            case '6':
                luaEditor[_0x52acca(0xba)](_0x4da781['FdGok'], 'darcula');
                continue;
            case '7':
                document[_0x52acca(0x176)](_0x4da781[_0x52acca(0x353)])[_0x52acca(0x1d2)]['color'] = _0x4da781[_0x52acca(0x11a)];
                continue;
            case '8':
                document[_0x52acca(0x132)](_0x52acca(0x197))[_0x52acca(0x1e1)](_0x373e39 => _0x373e39[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x52acca(0x27d));
                continue;
            case '9':
                document[_0x52acca(0x176)]('#wdbWrapTips\x20pre')[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x4da781[_0x52acca(0x11a)];
                continue;
            case '10':
                document[_0x52acca(0x176)](_0x4da781[_0x52acca(0x353)])[_0x52acca(0x1d2)][_0x52acca(0x2f9)] = _0x4da781[_0x52acca(0x196)];
                continue;
            case '11':
                chart['render']();
                continue;
            case '12':
                document[_0x52acca(0x176)](_0x4da781['Lcazw'])[_0x52acca(0x1d2)][_0x52acca(0x2f9)] = _0x4da781['lrpLx'];
                continue;
            }
            break;
        }
    } else {
        const _0x5515ad = '12|3|0|2|5|1|9|11|8|7|6|4|10'[_0x52acca(0x2a1)]('|');
        let _0x41c888 = 0x0;
        while (!![]) {
            switch (_0x5515ad[_0x41c888++]) {
            case '0':
                chart['options'][_0x52acca(0x193)] = 'light';
                continue;
            case '1':
                jsEditor['setOption'](_0x4da781[_0x52acca(0x263)], _0x52acca(0x268));
                continue;
            case '2':
                chart['render']();
                continue;
            case '3':
                document['getElementById'](_0x4da781[_0x52acca(0x26c)])[_0x52acca(0x1d2)]['color'] = _0x4da781['rWoqv'];
                continue;
            case '4':
                document[_0x52acca(0x176)](_0x4da781[_0x52acca(0x1bf)])[_0x52acca(0x1d2)]['color'] = _0x4da781[_0x52acca(0x226)];
                continue;
            case '5':
                luaEditor[_0x52acca(0xba)](_0x4da781[_0x52acca(0x263)], _0x4da781[_0x52acca(0x114)]);
                continue;
            case '6':
                document['querySelector'](_0x4da781[_0x52acca(0x1bf)])[_0x52acca(0x1d2)]['backgroundColor'] = _0x4da781[_0x52acca(0x11a)];
                continue;
            case '7':
                document[_0x52acca(0x176)](_0x4da781[_0x52acca(0x353)])['style'][_0x52acca(0x377)] = _0x52acca(0x2db);
                continue;
            case '8':
                document[_0x52acca(0x176)](_0x52acca(0x1b6))['style'][_0x52acca(0x2f9)] = _0x4da781[_0x52acca(0x11a)];
                continue;
            case '9':
                document['querySelector'](_0x4da781[_0x52acca(0x2ed)])[_0x52acca(0x1d2)]['backgroundColor'] = _0x4da781[_0x52acca(0x11a)];
                continue;
            case '10':
                document[_0x52acca(0x132)](_0x4da781[_0x52acca(0x2a0)])[_0x52acca(0x1e1)](_0x2abebc => _0x2abebc[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x52acca(0x2db));
                continue;
            case '11':
                document['querySelector'](_0x4da781[_0x52acca(0x2ed)])[_0x52acca(0x1d2)][_0x52acca(0x377)] = _0x4da781[_0x52acca(0x226)];
                continue;
            case '12':
                document[_0x52acca(0xcb)](_0x4da781[_0x52acca(0x26c)])[_0x52acca(0x1d2)][_0x52acca(0x2f9)] = '#fff';
                continue;
            }
            break;
        }
    }
    _0x4da781[_0x52acca(0x2ea)](updateStats);
}
function toggleMinimalBot(_0x40d740) {
    const _0x716035 = _0x3d490e, _0x3e1723 = {
            'NWAdd': function (_0x231895, _0x1bd730) {
                return _0x231895 === _0x1bd730;
            },
            'CDtVB': _0x716035(0x1a1),
            'GuFBX': _0x716035(0x206),
            'fgUUk': _0x716035(0x2c2),
            'VQYMm': _0x716035(0x1a2),
            'kKbje': _0x716035(0x325),
            'zihZF': 'wdbFooter',
            'nedxO': _0x716035(0x148),
            'GcYeK': _0x716035(0xc5),
            'CdPiT': _0x716035(0x370),
            'evuVc': _0x716035(0x241),
            'JHziw': _0x716035(0x289),
            'Yywtq': _0x716035(0x225)
        };
    if (_0x3e1723['NWAdd'](_0x40d740[_0x716035(0xd8)], '▼')) {
        const _0x1e38ed = _0x3e1723[_0x716035(0x2d2)][_0x716035(0x2a1)]('|');
        let _0x3521eb = 0x0;
        while (!![]) {
            switch (_0x1e38ed[_0x3521eb++]) {
            case '0':
                _0x40d740[_0x716035(0xd8)] = '▲';
                continue;
            case '1':
                document[_0x716035(0xcb)](_0x716035(0x370))[_0x716035(0x1d2)]['display'] = _0x3e1723['GuFBX'];
                continue;
            case '2':
                document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x1ae)])[_0x716035(0x1d2)]['position'] = _0x3e1723[_0x716035(0x162)];
                continue;
            case '3':
                document[_0x716035(0xcb)]('wdb')['style']['width'] = _0x3e1723[_0x716035(0x2a6)];
                continue;
            case '4':
                document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x11f)])[_0x716035(0x1d2)]['display'] = _0x3e1723[_0x716035(0x123)];
                continue;
            case '5':
                document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x1ae)])[_0x716035(0x1d2)][_0x716035(0xee)] = _0x3e1723['nedxO'];
                continue;
            case '6':
                document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x1ae)])[_0x716035(0x1d2)][_0x716035(0x10b)] = _0x3e1723[_0x716035(0x1a9)];
                continue;
            }
            break;
        }
    } else
        document[_0x716035(0xcb)](_0x3e1723['CdPiT'])[_0x716035(0x1d2)][_0x716035(0x33c)] = _0x3e1723[_0x716035(0x200)], document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x11f)])[_0x716035(0x1d2)]['display'] = 'block', document[_0x716035(0xcb)](_0x3e1723['fgUUk'])[_0x716035(0x1d2)]['width'] = _0x3e1723[_0x716035(0x171)], document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x1ae)])[_0x716035(0x1d2)][_0x716035(0x10b)] = _0x3e1723[_0x716035(0xc9)], document[_0x716035(0xcb)](_0x3e1723[_0x716035(0x1ae)])[_0x716035(0x1d2)][_0x716035(0xee)] = _0x3e1723[_0x716035(0xc9)], _0x40d740['innerText'] = '▼';
}
function toggleHideControlBot(_0x212d99) {
    const _0x1ac75d = _0x3d490e, _0x45d5a5 = {
            'ipYqT': function (_0x4108b3, _0x3b09f6) {
                return _0x4108b3 === _0x3b09f6;
            },
            'zsgGG': _0x1ac75d(0x1e6),
            'MQJav': _0x1ac75d(0x206)
        };
    _0x45d5a5[_0x1ac75d(0x346)](_0x212d99[_0x1ac75d(0xd8)], '▲') ? (document['getElementById'](_0x45d5a5[_0x1ac75d(0x187)])[_0x1ac75d(0x1d2)][_0x1ac75d(0x33c)] = _0x45d5a5[_0x1ac75d(0x143)], _0x212d99['innerText'] = '▼') : (document[_0x1ac75d(0xcb)](_0x45d5a5['zsgGG'])[_0x1ac75d(0x1d2)][_0x1ac75d(0x33c)] = _0x1ac75d(0x364), _0x212d99[_0x1ac75d(0xd8)] = '▲');
}
function drawSelectCoin() {
    const _0x19d0cb = _0x3d490e, _0x33803a = { 'ycekX': _0x19d0cb(0xc2) };
    let _0x3ff115 = '';
    coins[_0x19d0cb(0x103)](_0x461a25 => {
        const _0x15a501 = _0x19d0cb;
        _0x3ff115 += _0x15a501(0x1cf) + _0x461a25 + '\x22>' + _0x461a25 + _0x15a501(0x175);
    }), document[_0x19d0cb(0xcb)](_0x33803a['ycekX'])[_0x19d0cb(0x28f)] = _0x3ff115, currency = String(coin)[_0x19d0cb(0xe8)](), fengari['load'](_0x19d0cb(0xf5) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x115bad = _0x3d490e, _0x46d16c = {
            'HaSdR': '4|5|2|6|7|1|3|0',
            'ILLzC': function (_0x2f7d0e, _0x573616) {
                return _0x2f7d0e - _0x573616;
            },
            'WIkcx': function (_0x1973eb, _0x1672b2) {
                return _0x1973eb + _0x1672b2;
            },
            'TjmJf': function (_0x416c86, _0x4a4353) {
                return _0x416c86 - _0x4a4353;
            },
            'XIfzH': function (_0x3ede1e, _0x455d2b) {
                return _0x3ede1e + _0x455d2b;
            },
            'HlpTX': function (_0x30909d, _0x864b34) {
                return _0x30909d + _0x864b34;
            },
            'EbLnf': 'wdbTime',
            'xgIho': _0x115bad(0x292),
            'pgOSB': _0x115bad(0x1f4),
            'oTCfy': _0x115bad(0x1d4),
            'dcKNO': _0x115bad(0x139),
            'UUeRI': _0x115bad(0x1be),
            'JggiO': _0x115bad(0x268),
            'hcouM': _0x115bad(0x1c1),
            'JhMmb': _0x115bad(0x1b1),
            'PnMXS': _0x115bad(0x29d),
            'zzNbs': 'wdbJSMode',
            'HToCQ': _0x115bad(0x206),
            'eLmpm': 'wdbWrapVariables',
            'kYjYk': _0x115bad(0xd4),
            'NEJoy': _0x115bad(0x30e),
            'thPQk': _0x115bad(0x145),
            'orBHR': _0x115bad(0x20b),
            'vhlIs': _0x115bad(0x217)
        }, _0x267848 = document[_0x115bad(0x16c)](_0x46d16c[_0x115bad(0x294)]);
    _0x267848['id'] = _0x115bad(0x29f), _0x267848[_0x115bad(0x28f)] = wdbUI, document['body']['prepend'](_0x267848);
    const _0x463433 = document[_0x115bad(0xcb)]('wdb');
    let _0x2a812e = 0x0, _0x264d61 = 0x0, _0x339485 = 0x0, _0x27d84f = 0x0;
    document['getElementById'](_0x115bad(0x1f4)) ? document[_0x115bad(0xcb)](_0x46d16c['pgOSB'])['onmousedown'] = _0x466c91 : _0x463433[_0x115bad(0x33f)] = _0x466c91, document[_0x115bad(0xcb)]('wdbFooter') ? document['getElementById'](_0x115bad(0x110))[_0x115bad(0x33f)] = _0x466c91 : _0x463433[_0x115bad(0x33f)] = _0x466c91;
    function _0x466c91(_0x19a19f) {
        const _0x4b3b6b = _0x115bad;
        _0x19a19f = _0x19a19f || window['event'], _0x19a19f[_0x4b3b6b(0x2aa)](), _0x339485 = _0x19a19f['clientX'], _0x27d84f = _0x19a19f[_0x4b3b6b(0x192)], document['onmouseup'] = _0x546fe3, document[_0x4b3b6b(0x26f)] = _0x44f930;
    }
    function _0x44f930(_0x81a49d) {
        const _0x1995e0 = _0x115bad, _0x33b31c = _0x46d16c[_0x1995e0(0x305)][_0x1995e0(0x2a1)]('|');
        let _0x5e12fc = 0x0;
        while (!![]) {
            switch (_0x33b31c[_0x5e12fc++]) {
            case '0':
                _0x463433[_0x1995e0(0x1d2)]['left'] = _0x463433[_0x1995e0(0x164)] - _0x2a812e + 'px';
                continue;
            case '1':
                _0x27d84f = _0x81a49d[_0x1995e0(0x192)];
                continue;
            case '2':
                _0x2a812e = _0x46d16c['ILLzC'](_0x339485, _0x81a49d[_0x1995e0(0x2e8)]);
                continue;
            case '3':
                _0x463433['style'][_0x1995e0(0x10b)] = _0x46d16c[_0x1995e0(0x2ca)](_0x463433['offsetTop'] - _0x264d61, 'px');
                continue;
            case '4':
                _0x81a49d = _0x81a49d || window[_0x1995e0(0x2fe)];
                continue;
            case '5':
                _0x81a49d[_0x1995e0(0x2aa)]();
                continue;
            case '6':
                _0x264d61 = _0x46d16c[_0x1995e0(0x252)](_0x27d84f, _0x81a49d[_0x1995e0(0x192)]);
                continue;
            case '7':
                _0x339485 = _0x81a49d[_0x1995e0(0x2e8)];
                continue;
            }
            break;
        }
    }
    function _0x546fe3() {
        const _0x51c7e9 = _0x115bad;
        document['onmouseup'] = null, document[_0x51c7e9(0x26f)] = null;
    }
    if (document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x142)]))
        document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x142)])[_0x115bad(0x293)]();
    if (document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x2b7)]))
        document['getElementById'](_0x46d16c[_0x115bad(0x2b7)])[_0x115bad(0x293)]();
    luaEditor = CodeMirror[_0x115bad(0x256)](document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x363)]), {
        'theme': _0x46d16c[_0x115bad(0x2fb)],
        'mode': _0x46d16c['hcouM'],
        'lineNumbers': !![]
    }), luaEditor[_0x115bad(0x1f5)](), jsEditor = CodeMirror[_0x115bad(0x256)](document[_0x115bad(0xcb)](_0x46d16c['JhMmb']), {
        'theme': _0x46d16c[_0x115bad(0x2fb)],
        'mode': _0x115bad(0x191),
        'lineNumbers': !![]
    }), jsEditor[_0x115bad(0x1f5)](), wdbSpeed = new MySpeed(), wdbTimer = new easytimer[(_0x115bad(0x280))](), wdbTimer[_0x115bad(0x1b9)](_0x46d16c[_0x115bad(0x115)], () => {
        const _0x96289e = _0x115bad, _0x5c0b57 = _0x46d16c[_0x96289e(0x26b)](_0x46d16c[_0x96289e(0x2ca)](_0x46d16c[_0x96289e(0x266)](_0x46d16c[_0x96289e(0x266)](_0x46d16c[_0x96289e(0x2ca)](_0x46d16c[_0x96289e(0x26b)](wdbTimer['getTimeValues']()[_0x96289e(0x167)], ':'), wdbTimer['getTimeValues']()[_0x96289e(0x1b5)]), ':'), wdbTimer[_0x96289e(0x1e8)]()[_0x96289e(0x24d)]), ':'), wdbTimer['getTimeValues']()[_0x96289e(0x372)]);
        document[_0x96289e(0xcb)](_0x46d16c[_0x96289e(0x108)])['innerText'] = _0x5c0b57;
    }), document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x27c)])[_0x115bad(0x1d2)][_0x115bad(0x33c)] = _0x46d16c[_0x115bad(0x1eb)], document[_0x115bad(0xcb)](_0x115bad(0x16b))[_0x115bad(0x1d2)][_0x115bad(0x33c)] = _0x46d16c['HToCQ'], document['getElementById']('wdbWrapLog')[_0x115bad(0x1d2)]['display'] = _0x46d16c[_0x115bad(0x1eb)], document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0xda)])['style'][_0x115bad(0x33c)] = _0x46d16c['HToCQ'], document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x379)])['style'][_0x115bad(0x33c)] = _0x46d16c['HToCQ'], document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x11e)])[_0x115bad(0x1d2)]['display'] = _0x115bad(0x206), document[_0x115bad(0xcb)](_0x46d16c['thPQk'])[_0x115bad(0x297)] = !![], luaFileSelector = document[_0x115bad(0xcb)](_0x115bad(0x1fc)), luaFileSelector[_0x115bad(0x1b9)](_0x46d16c['orBHR'], function () {
        const _0x17a830 = _0x115bad;
        luaFileSelector[_0x17a830(0x1ec)] = null;
    }), luaFileSelector[_0x115bad(0x1b9)]('change', async _0x1dc866 => {
        const _0x2991a3 = _0x115bad, _0x3692ac = await new Response(_0x1dc866[_0x2991a3(0xbf)][_0x2991a3(0x138)][0x0])[_0x2991a3(0x2fa)]();
        if (!_0x3692ac)
            return;
        luaEditor[_0x2991a3(0x22c)](_0x3692ac);
    }), jsFileSelector = document[_0x115bad(0xcb)](_0x46d16c[_0x115bad(0x209)]), jsFileSelector['addEventListener'](_0x115bad(0x20b), function () {
        const _0x17d096 = _0x115bad;
        jsFileSelector[_0x17d096(0x1ec)] = null;
    }), jsFileSelector[_0x115bad(0x1b9)](_0x115bad(0x212), async _0x5822ab => {
        const _0x4af57f = _0x115bad, _0x51ce99 = await new Response(_0x5822ab['target'][_0x4af57f(0x138)][0x0])[_0x4af57f(0x2fa)]();
        if (!_0x51ce99)
            return;
        jsEditor[_0x4af57f(0x22c)](_0x51ce99);
    }), drawChart();
}
async function wdbLoader(_0x3c3d6b, _0x2cb439) {
    const _0x41057b = _0x3d490e, _0x13dd13 = {
            'hoscR': _0x41057b(0xb2),
            'mpBds': function (_0x2528f3) {
                return _0x2528f3();
            },
            'egJfq': function (_0x14a7fe, _0xcb69c5) {
                return _0x14a7fe(_0xcb69c5);
            },
            'cavWe': _0x41057b(0x357),
            'thSLn': 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js',
            'CxsUN': function (_0x9bc0cb) {
                return _0x9bc0cb();
            },
            'EJYgY': _0x41057b(0x2cd),
            'IIngP': function (_0x1b469e, _0x40ff6c) {
                return _0x1b469e + _0x40ff6c;
            },
            'yVPNA': _0x41057b(0x321),
            'dDubP': function (_0x1c9441, _0x2b0712) {
                return _0x1c9441 + _0x2b0712;
            },
            'lADsu': function (_0x3810bd, _0x285115) {
                return _0x3810bd + _0x285115;
            },
            'LNftw': _0x41057b(0x327),
            'eIpHq': function (_0x3b7284, _0x2e8bf3) {
                return _0x3b7284 + _0x2e8bf3;
            },
            'jVUwd': '/lib/ms.js',
            'QfNot': _0x41057b(0x333),
            'SSQZW': _0x41057b(0x296),
            'RUswz': function (_0x465476, _0xa99528) {
                return _0x465476 + _0xa99528;
            },
            'GfysQ': function (_0x3b3edb, _0x197599) {
                return _0x3b3edb + _0x197599;
            },
            'zXlKk': '/lib/easytimer.js',
            'oLCjw': function (_0x1206a7, _0x3f2122) {
                return _0x1206a7(_0x3f2122);
            },
            'sFAik': _0x41057b(0x356),
            'SSOsP': function (_0x5cf6c2, _0x221ef0) {
                return _0x5cf6c2(_0x221ef0);
            },
            'LEmIY': 'Connected'
        }, _0x279157 = _0x13dd13[_0x41057b(0x1e9)][_0x41057b(0x2a1)]('|');
    let _0x4dc7a8 = 0x0;
    while (!![]) {
        switch (_0x279157[_0x4dc7a8++]) {
        case '0':
            await _0x13dd13[_0x41057b(0x23b)](getListCoin);
            continue;
        case '1':
            await _0x13dd13['egJfq'](_0x3c3d6b, _0x13dd13['cavWe']);
            continue;
        case '2':
            await _0x13dd13[_0x41057b(0x19c)](_0x3c3d6b, _0x13dd13[_0x41057b(0xdf)]);
            continue;
        case '3':
            await beforeWork(_0x3c3d6b);
            continue;
        case '4':
            _0x13dd13[_0x41057b(0x2cb)](initLua);
            continue;
        case '5':
            await _0x2cb439(_0x13dd13['EJYgY']);
            continue;
        case '6':
            await _0x13dd13[_0x41057b(0x19c)](_0x3c3d6b, _0x13dd13[_0x41057b(0xff)](WDB_API, '/') + WDB_MODE + '/lib/fengari.js');
            continue;
        case '7':
            await _0x2cb439(_0x13dd13[_0x41057b(0x17e)]);
            continue;
        case '8':
            await _0x3c3d6b(_0x13dd13[_0x41057b(0x28a)](_0x13dd13['dDubP'](_0x13dd13[_0x41057b(0x13e)](WDB_API, '/'), WDB_MODE), _0x13dd13[_0x41057b(0x2a7)]));
            continue;
        case '9':
            await _0x13dd13[_0x41057b(0x19c)](_0x3c3d6b, _0x13dd13[_0x41057b(0x13b)](_0x13dd13[_0x41057b(0x13e)](WDB_API + '/', WDB_MODE), _0x13dd13['jVUwd']));
            continue;
        case '10':
            return _0x13dd13[_0x41057b(0x141)];
        case '11':
            await _0x13dd13[_0x41057b(0x19c)](_0x3c3d6b, _0x13dd13['SSQZW']);
            continue;
        case '12':
            await _0x13dd13[_0x41057b(0x19c)](_0x3c3d6b, _0x13dd13['RUswz'](_0x13dd13[_0x41057b(0x343)](_0x13dd13[_0x41057b(0xff)](WDB_API, '/'), WDB_MODE), _0x13dd13[_0x41057b(0xb6)]));
            continue;
        case '13':
            await _0x13dd13['oLCjw'](_0x3c3d6b, _0x13dd13['sFAik']);
            continue;
        case '14':
            await _0x13dd13[_0x41057b(0x23b)](wdbCreateUI);
            continue;
        case '15':
            _0x13dd13[_0x41057b(0x2ff)](log, _0x13dd13[_0x41057b(0x2b6)]);
            continue;
        }
        break;
    }
}
function toggleNav(_0x173b58) {
    const _0x845e4d = _0x3d490e, _0xbb0922 = {
            'OPikX': _0x845e4d(0x210),
            'Dzrkg': _0x845e4d(0x310),
            'IjJGf': _0x845e4d(0xd4),
            'FFFOA': _0x845e4d(0x206),
            'RmIWT': _0x845e4d(0x319),
            'kMBUD': _0x845e4d(0x145),
            'yuDcE': _0x845e4d(0x183),
            'GdeeX': 'wdbWrapLog',
            'NvFmh': _0x845e4d(0x1d1),
            'hfTxy': _0x845e4d(0x241),
            'OnGsR': _0x845e4d(0x30e),
            'KRDRA': function (_0x4b2980, _0x45d7d4) {
                return _0x4b2980 === _0x45d7d4;
            },
            'MUVkf': _0x845e4d(0xe0),
            'qxbrU': _0x845e4d(0xad),
            'hsVNL': _0x845e4d(0x1a6),
            'PWUcG': _0x845e4d(0x23c),
            'azrow': 'variables',
            'moCwY': _0x845e4d(0x1ee),
            'IQQKa': function (_0x15b231, _0x5eb1de) {
                return _0x15b231 === _0x5eb1de;
            },
            'IiZny': _0x845e4d(0x2c6),
            'OfxFI': _0x845e4d(0x378)
        };
    if (_0x173b58 === _0x845e4d(0x2ee)) {
        const _0x469c0e = _0xbb0922[_0x845e4d(0x344)][_0x845e4d(0x2a1)]('|');
        let _0x375c4a = 0x0;
        while (!![]) {
            switch (_0x469c0e[_0x375c4a++]) {
            case '0':
                document['getElementById'](_0xbb0922[_0x845e4d(0x276)])[_0x845e4d(0x297)] = ![];
                continue;
            case '1':
                document[_0x845e4d(0xcb)](_0xbb0922['IjJGf'])['style'][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                continue;
            case '2':
                document['getElementById'](_0xbb0922[_0x845e4d(0x35d)])[_0x845e4d(0x297)] = ![];
                continue;
            case '3':
                document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x25b)])[_0x845e4d(0x297)] = !![];
                continue;
            case '4':
                document['getElementById'](_0xbb0922[_0x845e4d(0x267)])[_0x845e4d(0x297)] = ![];
                continue;
            case '5':
                document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0xbb)])[_0x845e4d(0x1d2)]['display'] = _0xbb0922['FFFOA'];
                continue;
            case '6':
                document['getElementById'](_0xbb0922[_0x845e4d(0x22b)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x322)];
                continue;
            case '7':
                document[_0x845e4d(0xcb)](_0x845e4d(0x23c))[_0x845e4d(0x297)] = ![];
                continue;
            case '8':
                document[_0x845e4d(0xcb)](_0xbb0922['OnGsR'])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                continue;
            case '9':
                document[_0x845e4d(0xcb)](_0x845e4d(0x1a6))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                continue;
            }
            break;
        }
    } else {
        if (_0xbb0922[_0x845e4d(0x1a8)](_0x173b58, _0xbb0922[_0x845e4d(0x1d9)])) {
            const _0x3e4c67 = _0xbb0922[_0x845e4d(0x161)]['split']('|');
            let _0x119942 = 0x0;
            while (!![]) {
                switch (_0x3e4c67[_0x119942++]) {
                case '0':
                    document['getElementById'](_0xbb0922[_0x845e4d(0x21f)])['style'][_0x845e4d(0x33c)] = _0x845e4d(0x206);
                    continue;
                case '1':
                    document[_0x845e4d(0xcb)](_0x845e4d(0x310))[_0x845e4d(0x297)] = ![];
                    continue;
                case '2':
                    document['getElementById'](_0xbb0922[_0x845e4d(0xbb)])['style'][_0x845e4d(0x33c)] = _0xbb0922['hfTxy'];
                    continue;
                case '3':
                    document[_0x845e4d(0xcb)](_0x845e4d(0x30e))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                    continue;
                case '4':
                    document[_0x845e4d(0xcb)](_0x845e4d(0x319))[_0x845e4d(0x297)] = ![];
                    continue;
                case '5':
                    document['getElementById'](_0xbb0922[_0x845e4d(0x22b)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0x845e4d(0x206);
                    continue;
                case '6':
                    document['getElementById'](_0xbb0922[_0x845e4d(0x267)])[_0x845e4d(0x297)] = ![];
                    continue;
                case '7':
                    document['getElementById'](_0xbb0922['kMBUD'])[_0x845e4d(0x297)] = ![];
                    continue;
                case '8':
                    document['getElementById'](_0xbb0922[_0x845e4d(0x2d7)])[_0x845e4d(0x297)] = !![];
                    continue;
                case '9':
                    document[_0x845e4d(0xcb)](_0x845e4d(0xd4))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0x845e4d(0x206);
                    continue;
                }
                break;
            }
        } else {
            if (_0x173b58 === _0xbb0922[_0x845e4d(0x2c0)]) {
                const _0x359b68 = _0xbb0922['moCwY']['split']('|');
                let _0x218d5a = 0x0;
                while (!![]) {
                    switch (_0x359b68[_0x218d5a++]) {
                    case '0':
                        document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x2d7)])[_0x845e4d(0x297)] = ![];
                        continue;
                    case '1':
                        document['getElementById'](_0xbb0922['IjJGf'])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                        continue;
                    case '2':
                        document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x21f)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x322)];
                        continue;
                    case '3':
                        document[_0x845e4d(0xcb)]('wdbShowMode')[_0x845e4d(0x297)] = ![];
                        continue;
                    case '4':
                        document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x276)])[_0x845e4d(0x297)] = ![];
                        continue;
                    case '5':
                        document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x21a)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                        continue;
                    case '6':
                        document['getElementById'](_0xbb0922['GdeeX'])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                        continue;
                    case '7':
                        document['getElementById'](_0xbb0922[_0x845e4d(0x22b)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922['FFFOA'];
                        continue;
                    case '8':
                        document['getElementById'](_0x845e4d(0x183))[_0x845e4d(0x297)] = !![];
                        continue;
                    case '9':
                        document[_0x845e4d(0xcb)](_0x845e4d(0x319))[_0x845e4d(0x297)] = ![];
                        continue;
                    }
                    break;
                }
            } else {
                if (_0xbb0922[_0x845e4d(0xa8)](_0x173b58, _0xbb0922['IiZny']))
                    document[_0x845e4d(0xcb)](_0x845e4d(0x1d1))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)], document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0xbb)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922['FFFOA'], document[_0x845e4d(0xcb)](_0x845e4d(0x1a6))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)], document[_0x845e4d(0xcb)](_0x845e4d(0xd4))[_0x845e4d(0x1d2)]['display'] = _0xbb0922[_0x845e4d(0x322)], document[_0x845e4d(0xcb)](_0xbb0922['OnGsR'])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0x845e4d(0x206), document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x25b)])[_0x845e4d(0x297)] = ![], document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x2d7)])[_0x845e4d(0x297)] = ![], document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x267)])[_0x845e4d(0x297)] = ![], document['getElementById'](_0xbb0922[_0x845e4d(0x276)])[_0x845e4d(0x297)] = !![], document[_0x845e4d(0xcb)](_0x845e4d(0x319))[_0x845e4d(0x297)] = ![];
                else {
                    if (_0xbb0922[_0x845e4d(0x1a8)](_0x173b58, _0xbb0922[_0x845e4d(0x12e)])) {
                        const _0x304833 = '1|2|8|0|6|3|7|4|5|9'[_0x845e4d(0x2a1)]('|');
                        let _0x7cbaa1 = 0x0;
                        while (!![]) {
                            switch (_0x304833[_0x7cbaa1++]) {
                            case '0':
                                document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x262)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                                continue;
                            case '1':
                                document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x22b)])[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                                continue;
                            case '2':
                                document[_0x845e4d(0xcb)](_0x845e4d(0x1ca))[_0x845e4d(0x1d2)]['display'] = _0xbb0922[_0x845e4d(0x329)];
                                continue;
                            case '3':
                                document['getElementById'](_0xbb0922[_0x845e4d(0x25b)])[_0x845e4d(0x297)] = ![];
                                continue;
                            case '4':
                                document[_0x845e4d(0xcb)](_0xbb0922['yuDcE'])[_0x845e4d(0x297)] = ![];
                                continue;
                            case '5':
                                document[_0x845e4d(0xcb)](_0xbb0922[_0x845e4d(0x276)])[_0x845e4d(0x297)] = ![];
                                continue;
                            case '6':
                                document['getElementById'](_0xbb0922[_0x845e4d(0x21a)])[_0x845e4d(0x1d2)]['display'] = 'block';
                                continue;
                            case '7':
                                document[_0x845e4d(0xcb)]('wdbShowLog')[_0x845e4d(0x297)] = ![];
                                continue;
                            case '8':
                                document[_0x845e4d(0xcb)](_0x845e4d(0x1a6))[_0x845e4d(0x1d2)][_0x845e4d(0x33c)] = _0xbb0922[_0x845e4d(0x329)];
                                continue;
                            case '9':
                                document[_0x845e4d(0xcb)](_0x845e4d(0x319))[_0x845e4d(0x297)] = !![];
                                continue;
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}
function toggleShow(_0x3a3df3) {
    const _0x4509f6 = _0x3d490e, _0x4b3aa4 = {
            'iiVzo': function (_0x8f9ab6, _0x4c1286) {
                return _0x8f9ab6 === _0x4c1286;
            },
            'wZZmR': function (_0x5d7c50, _0x2f60c2) {
                return _0x5d7c50(_0x2f60c2);
            },
            'nvOBg': _0x4509f6(0x1a0),
            'CPVzI': function (_0x10f956, _0x14043a) {
                return _0x10f956 === _0x14043a;
            },
            'hehuu': 'chart',
            'wZVDW': 'wdbToggleShowChart',
            'NSZTp': 'showchart',
            'bwwJG': function (_0x4acadd, _0x4e7e1e) {
                return _0x4acadd(_0x4e7e1e);
            },
            'PceOL': _0x4509f6(0x32b),
            'JTeWJ': function (_0x33c811, _0x47c366) {
                return _0x33c811 === _0x47c366;
            },
            'CWxRt': 'history',
            'UZhtg': _0x4509f6(0xa9),
            'bwKFv': function (_0x1115db, _0x291efc) {
                return _0x1115db(_0x291efc);
            },
            'wFoUU': 'showhistory',
            'iwDtr': function (_0x78b7ed, _0x294d0d) {
                return _0x78b7ed(_0x294d0d);
            },
            'Oxlcj': _0x4509f6(0x30d)
        };
    if (_0x4b3aa4[_0x4509f6(0x1e3)](_0x3a3df3, _0x4509f6(0x2a4)))
        document[_0x4509f6(0xcb)]('wdbToggleShowStats')['checked'] ? _0x4b3aa4[_0x4509f6(0x331)](selectFunction, _0x4b3aa4['nvOBg']) : selectFunction('hidestats');
    else {
        if (_0x4b3aa4['CPVzI'](_0x3a3df3, _0x4b3aa4['hehuu']))
            document[_0x4509f6(0xcb)](_0x4b3aa4['wZVDW'])['checked'] ? _0x4b3aa4[_0x4509f6(0x331)](selectFunction, _0x4b3aa4[_0x4509f6(0x13a)]) : _0x4b3aa4[_0x4509f6(0x203)](selectFunction, _0x4b3aa4[_0x4509f6(0x1e4)]);
        else
            _0x4b3aa4['JTeWJ'](_0x3a3df3, _0x4b3aa4['CWxRt']) && (document[_0x4509f6(0xcb)](_0x4b3aa4[_0x4509f6(0x29a)])[_0x4509f6(0x31f)] ? _0x4b3aa4['bwKFv'](selectFunction, _0x4b3aa4['wFoUU']) : _0x4b3aa4[_0x4509f6(0x19a)](selectFunction, _0x4b3aa4[_0x4509f6(0x2d1)]));
    }
}
function toggleLive(_0x26611f) {
    const _0x51333d = _0x3d490e, _0xc6f2b5 = {
            'HaCvf': _0x51333d(0x358),
            'cebjB': _0x51333d(0x16e),
            'PpVXn': function (_0x19ec5c, _0x27394b) {
                return _0x19ec5c(_0x27394b);
            },
            'QfoRs': _0x51333d(0x330),
            'quVoi': _0x51333d(0x190),
            'PaVeI': function (_0x300b74, _0xa5d48d) {
                return _0x300b74 === _0xa5d48d;
            },
            'QVzKl': _0x51333d(0x2c9),
            'qyVRX': _0x51333d(0x2e2),
            'XATlt': function (_0x154b4a, _0xe5b522) {
                return _0x154b4a(_0xe5b522);
            },
            'NmuPV': _0x51333d(0x147),
            'kafLx': function (_0x26c43e, _0x48a562) {
                return _0x26c43e === _0x48a562;
            },
            'eVrjj': _0x51333d(0xe0),
            'NGqRx': _0x51333d(0x34b),
            'awMIL': function (_0x4ae46a, _0x1f4770) {
                return _0x4ae46a(_0x1f4770);
            },
            'CREur': _0x51333d(0x1b4),
            'iQDib': function (_0x15f2b4, _0x293c7d) {
                return _0x15f2b4(_0x293c7d);
            },
            'cGACd': 'stoplog'
        };
    if (_0x26611f === _0xc6f2b5[_0x51333d(0x21c)])
        document['getElementById'](_0xc6f2b5[_0x51333d(0xc4)])['checked'] ? _0xc6f2b5[_0x51333d(0x375)](selectFunction, _0xc6f2b5[_0x51333d(0x301)]) : _0xc6f2b5[_0x51333d(0x375)](selectFunction, _0xc6f2b5['quVoi']);
    else {
        if (_0xc6f2b5[_0x51333d(0xbe)](_0x26611f, _0xc6f2b5[_0x51333d(0x34a)]))
            document[_0x51333d(0xcb)](_0xc6f2b5[_0x51333d(0x309)])[_0x51333d(0x31f)] ? _0xc6f2b5[_0x51333d(0x1ac)](selectFunction, _0x51333d(0x2f6)) : _0xc6f2b5[_0x51333d(0x1ac)](selectFunction, _0xc6f2b5['NmuPV']);
        else
            _0xc6f2b5[_0x51333d(0x37f)](_0x26611f, _0xc6f2b5[_0x51333d(0x2d0)]) && (document[_0x51333d(0xcb)](_0xc6f2b5['NGqRx'])[_0x51333d(0x31f)] ? _0xc6f2b5[_0x51333d(0x316)](selectFunction, _0xc6f2b5[_0x51333d(0x1f2)]) : _0xc6f2b5[_0x51333d(0xed)](selectFunction, _0xc6f2b5[_0x51333d(0xfa)]));
    }
}
function selectFunction(_0x5449c3) {
    const _0x416122 = _0x3d490e, _0x2b72b6 = {
            'DwHuW': _0x416122(0x36d),
            'qsQwr': function (_0x59719c, _0x5979fe) {
                return _0x59719c === _0x5979fe;
            },
            'vODfg': function (_0x5e3ad4, _0x1f3b8d) {
                return _0x5e3ad4(_0x1f3b8d);
            },
            'GVZzi': _0x416122(0x134),
            'iWGiG': function (_0x500a2b, _0x3a48c) {
                return _0x500a2b(_0x3a48c);
            },
            'mHSZo': _0x416122(0x339),
            'HPEGO': function (_0x20d03a, _0x585f14) {
                return _0x20d03a === _0x585f14;
            },
            'QZVpc': 'showstats',
            'FebrG': _0x416122(0x312),
            'mTklB': function (_0x59d440, _0x542955) {
                return _0x59d440 === _0x542955;
            },
            'HKDYS': _0x416122(0x109),
            'YApaF': function (_0x341c13, _0x286143) {
                return _0x341c13(_0x286143);
            },
            'GydDw': _0x416122(0x32b),
            'wRRLI': function (_0xcd1ef2, _0x483795) {
                return _0xcd1ef2 === _0x483795;
            },
            'ZIpwT': 'showhistory',
            'dtRVj': function (_0x304950, _0x56a924) {
                return _0x304950(_0x56a924);
            },
            'icNTR': function (_0x278454, _0x14d833) {
                return _0x278454 === _0x14d833;
            },
            'pdgFK': _0x416122(0x147),
            'lIbfj': 'stop',
            'RmvnG': _0x416122(0x2f6),
            'tubRa': _0x416122(0x14e),
            'FDOBC': 'hidestats',
            'eFzXj': function (_0x28884f, _0xde8f71) {
                return _0x28884f(_0xde8f71);
            },
            'SjViG': _0x416122(0x347),
            'kRLlH': function (_0x348089, _0x3a98f3) {
                return _0x348089 === _0x3a98f3;
            },
            'mMGKA': 'stopchart',
            'CwnlW': function (_0x2bfc49, _0x372eec) {
                return _0x2bfc49 === _0x372eec;
            },
            'VZGlW': _0x416122(0x111),
            'PpxYY': _0x416122(0x298),
            'QBPoU': _0x416122(0x2af),
            'KEUOd': function (_0x529b87) {
                return _0x529b87();
            },
            'fvnbX': function (_0xe99b69, _0x5ba672) {
                return _0xe99b69 === _0x5ba672;
            },
            'EEuBj': _0x416122(0x36e),
            'MeEvq': _0x416122(0xf0),
            'kpKeb': function (_0x3857a6) {
                return _0x3857a6();
            },
            'eNtvg': _0x416122(0x30c),
            'srfiJ': function (_0x1018e1, _0x2247cb) {
                return _0x1018e1(_0x2247cb);
            }
        }, _0x55aa1d = _0x2b72b6[_0x416122(0x1bc)][_0x416122(0x2a1)]('|');
    let _0x378737 = 0x0;
    while (!![]) {
        switch (_0x55aa1d[_0x378737++]) {
        case '0':
            if (_0x2b72b6[_0x416122(0x23d)](_0x5449c3, _0x416122(0x30d)))
                _0x2b72b6[_0x416122(0x323)](toggleHistory, _0x416122(0x347));
            continue;
        case '1':
            if (_0x2b72b6[_0x416122(0x23d)](_0x5449c3, _0x2b72b6['GVZzi']))
                _0x2b72b6[_0x416122(0x35b)](toggleLog, _0x2b72b6[_0x416122(0x1f3)]);
            continue;
        case '2':
            if (_0x2b72b6['HPEGO'](_0x5449c3, _0x2b72b6[_0x416122(0x2ad)]))
                _0x2b72b6[_0x416122(0x323)](toggleStats, _0x2b72b6[_0x416122(0x218)]);
            continue;
        case '3':
            if (_0x2b72b6['mTklB'](_0x5449c3, _0x2b72b6[_0x416122(0x2bd)]))
                _0x2b72b6[_0x416122(0x199)](toggleChart, _0x2b72b6[_0x416122(0x218)]);
            continue;
        case '4':
            if (_0x2b72b6[_0x416122(0x2b0)](_0x5449c3, _0x2b72b6[_0x416122(0x2b3)]))
                _0x2b72b6['vODfg'](toggleChart, _0x416122(0x347));
            continue;
        case '5':
            if (_0x2b72b6[_0x416122(0x1c2)](_0x5449c3, _0x2b72b6['ZIpwT']))
                _0x2b72b6[_0x416122(0x222)](toggleHistory, _0x2b72b6[_0x416122(0x218)]);
            continue;
        case '6':
            if (_0x2b72b6[_0x416122(0x25d)](_0x5449c3, _0x2b72b6[_0x416122(0x12f)]))
                toggleHistory(_0x2b72b6[_0x416122(0x320)]);
            continue;
        case '7':
            if (_0x5449c3 === _0x2b72b6[_0x416122(0x106)])
                toggleHistory(_0x2b72b6['tubRa']);
            continue;
        case '8':
            if (_0x5449c3 === _0x2b72b6[_0x416122(0x37c)])
                _0x2b72b6['eFzXj'](toggleStats, _0x2b72b6[_0x416122(0x137)]);
            continue;
        case '9':
            if (_0x2b72b6['kRLlH'](_0x5449c3, _0x2b72b6['mMGKA']))
                toggleChart(_0x2b72b6[_0x416122(0x320)]);
            continue;
        case '10':
            if (_0x2b72b6[_0x416122(0xc7)](_0x5449c3, 'startlog'))
                toggleLog('start');
            continue;
        case '11':
            if (_0x2b72b6[_0x416122(0xc7)](_0x5449c3, _0x2b72b6['VZGlW']))
                _0x2b72b6['YApaF'](toggleChart, _0x2b72b6['PpxYY']);
            continue;
        case '12':
            if (_0x5449c3 === _0x2b72b6['QBPoU'])
                _0x2b72b6['KEUOd'](resetstats);
            continue;
        case '13':
            if (_0x2b72b6[_0x416122(0x15a)](_0x5449c3, _0x2b72b6[_0x416122(0x227)]))
                resetseed();
            continue;
        case '14':
            if (_0x2b72b6[_0x416122(0x251)](_0x5449c3, _0x2b72b6[_0x416122(0x1dc)]))
                _0x2b72b6['dtRVj'](toggleLog, _0x2b72b6[_0x416122(0x320)]);
            continue;
        case '15':
            if (_0x2b72b6[_0x416122(0x251)](_0x5449c3, _0x416122(0x265)))
                _0x2b72b6[_0x416122(0x10c)](resetall);
            continue;
        case '16':
            if (_0x2b72b6[_0x416122(0x2b0)](_0x5449c3, _0x2b72b6[_0x416122(0x234)]))
                toggleHistory(_0x416122(0x339));
            continue;
        case '17':
            if (_0x5449c3 === 'startchart')
                _0x2b72b6['srfiJ'](toggleChart, _0x2b72b6[_0x416122(0x170)]);
            continue;
        }
        break;
    }
}
function toggleMode(_0x1569f2) {
    const _0x29ed4f = _0x3d490e, _0x2022c2 = {
            'YSjWm': function (_0x31a88b, _0x2616e6) {
                return _0x31a88b === _0x2616e6;
            },
            'mlGpU': _0x29ed4f(0x1c1),
            'lrxuV': _0x29ed4f(0x260),
            'VJZMn': 'block',
            'jKAaE': _0x29ed4f(0x306),
            'jycDb': 'none',
            'EXvhc': function (_0x2fe115, _0x57ca38) {
                return _0x2fe115 === _0x57ca38;
            },
            'arAaN': _0x29ed4f(0x16b),
            'bdFFJ': function (_0x1c71fe, _0x3f9a07) {
                return _0x1c71fe === _0x3f9a07;
            }
        };
    mode = _0x1569f2;
    if (_0x2022c2[_0x29ed4f(0x1b3)](_0x1569f2, _0x2022c2[_0x29ed4f(0x369)]))
        document[_0x29ed4f(0xcb)](_0x2022c2[_0x29ed4f(0x336)])[_0x29ed4f(0x1d2)][_0x29ed4f(0x33c)] = _0x2022c2[_0x29ed4f(0x2d8)], document[_0x29ed4f(0xcb)](_0x2022c2['jKAaE'])['style']['display'] = _0x2022c2[_0x29ed4f(0x1fe)], document[_0x29ed4f(0xcb)](_0x29ed4f(0x16b))[_0x29ed4f(0x1d2)][_0x29ed4f(0x33c)] = _0x2022c2[_0x29ed4f(0x1fe)];
    else {
        if (_0x2022c2['EXvhc'](_0x1569f2, 'js'))
            document['getElementById'](_0x29ed4f(0x260))['style'][_0x29ed4f(0x33c)] = _0x2022c2['jycDb'], document['getElementById'](_0x2022c2[_0x29ed4f(0x1ad)])[_0x29ed4f(0x1d2)][_0x29ed4f(0x33c)] = 'block', document[_0x29ed4f(0xcb)](_0x2022c2[_0x29ed4f(0x195)])[_0x29ed4f(0x1d2)][_0x29ed4f(0x33c)] = _0x29ed4f(0x206);
        else
            _0x2022c2[_0x29ed4f(0x17a)](_0x1569f2, 'advanced') && (document[_0x29ed4f(0xcb)](_0x2022c2['lrxuV'])['style'][_0x29ed4f(0x33c)] = _0x2022c2[_0x29ed4f(0x1fe)], document[_0x29ed4f(0xcb)](_0x2022c2[_0x29ed4f(0x1ad)])['style'][_0x29ed4f(0x33c)] = 'none', document[_0x29ed4f(0xcb)](_0x2022c2['arAaN'])['style'][_0x29ed4f(0x33c)] = _0x2022c2['VJZMn']);
    }
}
function toggleStats(_0x9388b1) {
    const _0x22e80a = _0x3d490e, _0x8ce2d0 = {
            'bIvxX': function (_0x469c58, _0x333736) {
                return _0x469c58 === _0x333736;
            },
            'ZFjoL': _0x22e80a(0x347),
            'nBPDS': 'wdbStats',
            'LPZcj': _0x22e80a(0x206),
            'WSgNy': _0x22e80a(0x312),
            'qIFMl': _0x22e80a(0x364)
        };
    if (_0x8ce2d0[_0x22e80a(0x299)](_0x9388b1, _0x8ce2d0['ZFjoL']))
        document[_0x22e80a(0xcb)](_0x8ce2d0[_0x22e80a(0xfd)])[_0x22e80a(0x1d2)]['display'] = _0x8ce2d0[_0x22e80a(0x16a)];
    else
        _0x8ce2d0[_0x22e80a(0x299)](_0x9388b1, _0x8ce2d0[_0x22e80a(0x31c)]) && (document[_0x22e80a(0xcb)](_0x22e80a(0x2a5))[_0x22e80a(0x1d2)][_0x22e80a(0x33c)] = _0x8ce2d0[_0x22e80a(0xe7)]);
}
function toggleChart(_0x4e9d06) {
    const _0x419afe = _0x3d490e, _0x8ed738 = {
            'NuBWO': function (_0x396a69, _0x1ff505) {
                return _0x396a69 === _0x1ff505;
            },
            'NdKzO': _0x419afe(0x347),
            'yDujl': _0x419afe(0xd2),
            'mlldz': _0x419afe(0x206),
            'pUMql': _0x419afe(0x313),
            'RGFEQ': function (_0x10b652, _0x589485) {
                return _0x10b652 === _0x589485;
            },
            'DNjjI': 'block',
            'XhIox': _0x419afe(0x220),
            'upCXh': function (_0x426e63, _0x2e0781) {
                return _0x426e63 === _0x2e0781;
            },
            'WUPKL': _0x419afe(0x307),
            'beKBJ': 'reset',
            'LpKxr': function (_0xc424a9) {
                return _0xc424a9();
            }
        };
    if (_0x8ed738[_0x419afe(0xae)](_0x4e9d06, _0x8ed738[_0x419afe(0x207)]))
        document[_0x419afe(0xcb)](_0x8ed738[_0x419afe(0x35a)])[_0x419afe(0x1d2)][_0x419afe(0x33c)] = _0x8ed738[_0x419afe(0x318)], document[_0x419afe(0xcb)](_0x8ed738[_0x419afe(0x1ba)])[_0x419afe(0x1d2)][_0x419afe(0x245)] = _0x419afe(0x11b);
    else {
        if (_0x8ed738[_0x419afe(0x2c8)](_0x4e9d06, _0x419afe(0x312)))
            document[_0x419afe(0xcb)](_0x8ed738[_0x419afe(0x35a)])[_0x419afe(0x1d2)]['display'] = _0x8ed738[_0x419afe(0x1bd)], document[_0x419afe(0xcb)](_0x8ed738['pUMql'])[_0x419afe(0x1d2)][_0x419afe(0x245)] = _0x8ed738[_0x419afe(0x361)];
        else {
            if (_0x8ed738['upCXh'](_0x4e9d06, _0x8ed738[_0x419afe(0x32d)]))
                stopChart = !![];
            else {
                if (_0x8ed738[_0x419afe(0x2c8)](_0x4e9d06, 'start'))
                    stopChart = ![];
                else
                    _0x8ed738[_0x419afe(0x2c8)](_0x4e9d06, _0x8ed738[_0x419afe(0x2d4)]) && (betsChart = 0x0, profitChart = 0x0, _0x8ed738['LpKxr'](drawChart));
            }
        }
    }
}
function toggleHistory(_0x383ed0) {
    const _0x192527 = _0x3d490e, _0x3ca8dc = {
            'srTol': function (_0x4f8969, _0xa15c68) {
                return _0x4f8969 === _0xa15c68;
            },
            'SsgSC': _0x192527(0xd2),
            'ypWrJ': _0x192527(0x11b),
            'MYdlD': function (_0xc5454f, _0x258750) {
                return _0xc5454f === _0x258750;
            },
            'omfiX': _0x192527(0x312),
            'Fbqqj': 'wdbWrapHistory',
            'gBTaX': 'block',
            'xZbwr': _0x192527(0x220),
            'PVMeY': _0x192527(0x307),
            'NMiXF': _0x192527(0x14e),
            'fMLVY': _0x192527(0x339),
            'fewiZ': _0x192527(0x2c7)
        };
    if (_0x3ca8dc[_0x192527(0x1c6)](_0x383ed0, _0x192527(0x347)))
        document[_0x192527(0xcb)](_0x192527(0x313))['style'][_0x192527(0x33c)] = _0x192527(0x206), document[_0x192527(0xcb)](_0x3ca8dc[_0x192527(0xbd)])[_0x192527(0x1d2)]['height'] = _0x3ca8dc[_0x192527(0x1d6)];
    else {
        if (_0x3ca8dc['MYdlD'](_0x383ed0, _0x3ca8dc[_0x192527(0x1d7)]))
            document[_0x192527(0xcb)](_0x3ca8dc[_0x192527(0x2c5)])[_0x192527(0x1d2)][_0x192527(0x33c)] = _0x3ca8dc['gBTaX'], document[_0x192527(0xcb)](_0x3ca8dc[_0x192527(0xbd)])['style'][_0x192527(0x245)] = _0x3ca8dc[_0x192527(0x302)];
        else {
            if (_0x3ca8dc[_0x192527(0x1c6)](_0x383ed0, _0x3ca8dc[_0x192527(0x17f)]))
                stopHistory = !![];
            else {
                if (_0x3ca8dc[_0x192527(0x1c6)](_0x383ed0, _0x3ca8dc[_0x192527(0x27f)]))
                    stopHistory = ![];
                else
                    _0x3ca8dc['MYdlD'](_0x383ed0, _0x3ca8dc[_0x192527(0xf8)]) && (document[_0x192527(0xcb)](_0x3ca8dc[_0x192527(0xc3)])['innerHTML'] = '');
            }
        }
    }
}
function toggleLog(_0x287434) {
    const _0x35b890 = _0x3d490e, _0x31074c = {
            'QgwTB': function (_0x50dd7f, _0x7323d4) {
                return _0x50dd7f === _0x7323d4;
            },
            'wENfA': _0x35b890(0x307),
            'vcugS': _0x35b890(0x14e),
            'nAIqL': function (_0x43127f, _0x2c553d) {
                return _0x43127f === _0x2c553d;
            },
            'Xkopg': _0x35b890(0x223)
        };
    if (_0x31074c['QgwTB'](_0x287434, _0x31074c[_0x35b890(0x1c3)]))
        stopLog = !![];
    else {
        if (_0x31074c[_0x35b890(0xca)](_0x287434, _0x31074c[_0x35b890(0x24e)]))
            stopLog = ![];
        else
            _0x31074c[_0x35b890(0x198)](_0x287434, 'clear') && (document[_0x35b890(0xcb)](_0x31074c[_0x35b890(0x1ed)])[_0x35b890(0x28f)] = '');
    }
}
async function handleAdvanced() {
    const _0x1fb65f = _0x3d490e, _0x10c4cb = {
            'LCJKV': function (_0x523464, _0x12255c) {
                return _0x523464(_0x12255c);
            },
            'QBkuR': _0x1fb65f(0x18c),
            'YiJRH': _0x1fb65f(0x2ce),
            'UOQwg': _0x1fb65f(0x229),
            'dbJcf': _0x1fb65f(0xab),
            'WBELZ': function (_0xcfcc55, _0x530f28) {
                return _0xcfcc55(_0x530f28);
            },
            'TJPer': _0x1fb65f(0xde),
            'lpbpQ': _0x1fb65f(0xe3),
            'liceH': 'advancedMultiOnWinCheck',
            'FseqU': _0x1fb65f(0x326),
            'PsHGg': function (_0x2ffebe, _0x31767b) {
                return _0x2ffebe(_0x31767b);
            },
            'vkiow': 'advancedMultiOnLose',
            'IEPWA': _0x1fb65f(0x362),
            'OiWDG': _0x1fb65f(0x120),
            'DbzoA': function (_0x5e0d27, _0x5ba374) {
                return _0x5e0d27 % _0x5ba374;
            },
            'eMQZG': _0x1fb65f(0x238),
            'nYdum': _0x1fb65f(0x314),
            'hdbEw': function (_0x2bf308, _0x4bb8d7) {
                return _0x2bf308 >= _0x4bb8d7;
            },
            'MJxFB': _0x1fb65f(0x27a),
            'CynuL': function (_0x1b5aad, _0x2c01de) {
                return _0x1b5aad(_0x2c01de);
            },
            'Yxhsx': _0x1fb65f(0x208),
            'vwVHR': _0x1fb65f(0x2b2),
            'BWSTc': function (_0x3c6344, _0x41806d) {
                return _0x3c6344(_0x41806d);
            },
            'TZrrX': 'advancedStopRollNumber',
            'pAfnY': function (_0x1fe98a, _0xe9b1b7) {
                return _0x1fe98a === _0xe9b1b7;
            },
            'RXYgu': function (_0x241077) {
                return _0x241077();
            },
            'yUxGz': function (_0x313ff1, _0x22ad89) {
                return _0x313ff1(_0x22ad89);
            },
            'JNFUc': function (_0x33371e, _0x257a42) {
                return _0x33371e + _0x257a42;
            },
            'YTKqJ': _0x1fb65f(0x2ab),
            'nqrNP': _0x1fb65f(0x355),
            'OYoLU': function (_0x2399ea, _0x37cbbd) {
                return _0x2399ea(_0x37cbbd);
            },
            'NNMdZ': function (_0x319f2c, _0x453467) {
                return _0x319f2c > _0x453467;
            },
            'GHUCH': function (_0x505134) {
                return _0x505134();
            },
            'luGxX': function (_0x4fceb0, _0x184ef3) {
                return _0x4fceb0(_0x184ef3);
            },
            'YNOVT': function (_0x171bc2, _0x58ebd6) {
                return _0x171bc2 + _0x58ebd6;
            },
            'JadCh': _0x1fb65f(0xd1),
            'orFrl': function (_0xb3ff86, _0x1fb63a) {
                return _0xb3ff86 <= _0x1fb63a;
            },
            'ywoHW': _0x1fb65f(0x240),
            'WoJOW': _0x1fb65f(0x2de),
            'Clgsv': function (_0x1734c2, _0x5458be) {
                return _0x1734c2 + _0x5458be;
            },
            'ColiS': function (_0x1f84d2, _0x244762) {
                return _0x1f84d2 + _0x244762;
            },
            'UNQRM': _0x1fb65f(0x18d),
            'abdEf': _0x1fb65f(0xa7),
            'vuiXw': _0x1fb65f(0x33e),
            'LOcUh': _0x1fb65f(0x216),
            'TztNI': function (_0x5bde52) {
                return _0x5bde52();
            },
            'csBJF': function (_0x35a94c, _0x2f6e3e) {
                return _0x35a94c(_0x2f6e3e);
            },
            'LniyY': function (_0x4c53ef, _0x5c52a3) {
                return _0x4c53ef + _0x5c52a3;
            },
            'Hktgr': _0x1fb65f(0xd7),
            'EMPej': _0x1fb65f(0x21e),
            'MXJNu': function (_0x1fdef8, _0x3882c4) {
                return _0x1fdef8 >= _0x3882c4;
            },
            'bhVLQ': function (_0x7c36bb, _0x1af08d) {
                return _0x7c36bb(_0x1af08d);
            },
            'XcNor': _0x1fb65f(0x30f),
            'MFegt': _0x1fb65f(0xc1),
            'qoPKW': function (_0xddafbd, _0x1ec466) {
                return _0xddafbd(_0x1ec466);
            },
            'SkBUH': _0x1fb65f(0x246),
            'HYPcZ': _0x1fb65f(0x25e),
            'kUmGa': _0x1fb65f(0x278),
            'ZPVNs': _0x1fb65f(0x180),
            'Rxyfp': _0x1fb65f(0x20e),
            'mhBmu': _0x1fb65f(0xe2),
            'hacMZ': function (_0x48112c, _0x2c12c5) {
                return _0x48112c * _0x2c12c5;
            },
            'pOIoL': _0x1fb65f(0x140),
            'JWfOU': function (_0x5a2cc9, _0x3a2fd0) {
                return _0x5a2cc9 === _0x3a2fd0;
            },
            'fCeuZ': function (_0x547211, _0x23f2b8) {
                return _0x547211 === _0x23f2b8;
            },
            'zaXoB': function (_0x1aed57, _0x2490cb) {
                return _0x1aed57 % _0x2490cb;
            },
            'GUPUJ': function (_0x42d533, _0x3dbb23) {
                return _0x42d533 * _0x3dbb23;
            }
        };
    chance = _0x10c4cb[_0x1fb65f(0x350)](Number, document[_0x1fb65f(0xcb)](_0x1fb65f(0x264))[_0x1fb65f(0x1ec)]), chanceOnWinCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x2e5)])[_0x1fb65f(0x31f)], chanceOnWinCheck ? chanceOnWin = _0x10c4cb[_0x1fb65f(0x350)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x2d3)])['value']) : chanceOnWin = chance, chanceOnWinBets = _0x10c4cb[_0x1fb65f(0x350)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb['UOQwg'])['value']), chanceOnLoseCheck = document['getElementById'](_0x10c4cb['dbJcf'])[_0x1fb65f(0x31f)], chanceOnLoseCheck ? chanceOnLose = _0x10c4cb[_0x1fb65f(0x14a)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x126)])[_0x1fb65f(0x1ec)]) : chanceOnLose = chance, chanceOnLoseBets = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x14b)])[_0x1fb65f(0x1ec)]), multiOnWinCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x275)])[_0x1fb65f(0x31f)], multiOnWinCheck ? multiOnWin = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x29e)])[_0x1fb65f(0x1ec)]) : multiOnWin = 0x1, multiOnWinBets = Number(document['getElementById'](_0x1fb65f(0x1da))['value']), multiOnLoseCheck = document['getElementById']('advancedMultiOnLoseCheck')[_0x1fb65f(0x31f)], multiOnLoseCheck ? multiOnLose = _0x10c4cb['PsHGg'](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x337)])[_0x1fb65f(0x1ec)]) : multiOnLose = 0x1, multiOnLoseBets = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x169)])[_0x1fb65f(0x1ec)]), betHighOnBetCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x1df)])[_0x1fb65f(0x31f)];
    if (betHighOnBetCheck) {
        betHighOnBet = Number(document[_0x1fb65f(0xcb)](_0x1fb65f(0x258))['value']);
        if (_0x10c4cb[_0x1fb65f(0x253)](bets, betHighOnBet) === 0x0)
            bethigh = !bethigh;
    }
    betHighOnProfitCheck = document[_0x1fb65f(0xcb)](_0x10c4cb['eMQZG'])[_0x1fb65f(0x31f)];
    if (betHighOnProfitCheck) {
        betHighOnProfit = _0x10c4cb[_0x1fb65f(0x24f)](Number, document['getElementById'](_0x10c4cb['nYdum'])[_0x1fb65f(0x1ec)]);
        if (_0x10c4cb['hdbEw'](profit, betHighOnProfit))
            bethigh = !bethigh;
    }
    resetstatsOnProfitCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x121)])[_0x1fb65f(0x31f)];
    if (resetstatsOnProfitCheck) {
        resetstatsOnProfit = _0x10c4cb[_0x1fb65f(0x1d8)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb['Yxhsx'])[_0x1fb65f(0x1ec)]);
        if (profit >= resetstatsOnProfit)
            resetstats();
    }
    stopRollNumberCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0xf2)])[_0x1fb65f(0x31f)];
    if (stopRollNumberCheck) {
        stopRollNumber = _0x10c4cb[_0x1fb65f(0x118)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x1ea)])['value']);
        if (_0x10c4cb[_0x1fb65f(0x348)](lastBet[_0x1fb65f(0x1f8)], stopRollNumber))
            _0x10c4cb[_0x1fb65f(0x328)](stop), _0x10c4cb[_0x1fb65f(0x36c)](log, _0x10c4cb[_0x1fb65f(0x33a)](_0x10c4cb[_0x1fb65f(0x286)], stopRollNumber));
    }
    stopStreakCheck = document['getElementById'](_0x10c4cb['nqrNP'])[_0x1fb65f(0x31f)];
    if (stopStreakCheck) {
        stopStreak = _0x10c4cb[_0x1fb65f(0x269)](Number, document[_0x1fb65f(0xcb)](_0x1fb65f(0x2e1))['value']);
        if (_0x10c4cb[_0x1fb65f(0x15b)](stopStreak, 0x0)) {
            if (_0x10c4cb[_0x1fb65f(0x2cf)](currentstreak, stopStreak))
                _0x10c4cb[_0x1fb65f(0x24c)](stop), _0x10c4cb['luGxX'](log, _0x10c4cb[_0x1fb65f(0x181)](_0x10c4cb[_0x1fb65f(0x324)], stopStreak));
        } else {
            if (_0x10c4cb[_0x1fb65f(0x239)](currentstreak, stopStreak))
                _0x10c4cb[_0x1fb65f(0x328)](stop), _0x10c4cb['WBELZ'](log, _0x10c4cb[_0x1fb65f(0x181)](_0x10c4cb[_0x1fb65f(0x324)], stopStreak));
        }
    }
    stopOnBetsCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x340)])[_0x1fb65f(0x31f)];
    if (stopOnBetsCheck) {
        stopOnBets = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x2d5)])[_0x1fb65f(0x1ec)]);
        if (_0x10c4cb['hdbEw'](bets, stopOnBets))
            _0x10c4cb[_0x1fb65f(0x328)](stop), log(_0x10c4cb[_0x1fb65f(0x2bf)](_0x10c4cb['ColiS'](_0x10c4cb[_0x1fb65f(0x20f)], stopOnBets), _0x10c4cb['abdEf']));
    }
    stopOnWinsCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x34c)])[_0x1fb65f(0x31f)];
    if (stopOnWinsCheck) {
        stopOnWins = _0x10c4cb[_0x1fb65f(0x350)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x16f)])[_0x1fb65f(0x1ec)]);
        if (_0x10c4cb[_0x1fb65f(0x2cf)](winstreak, stopOnWins))
            _0x10c4cb[_0x1fb65f(0xf3)](stop), _0x10c4cb[_0x1fb65f(0x25f)](log, _0x10c4cb[_0x1fb65f(0x2bf)](_0x10c4cb[_0x1fb65f(0x25c)](_0x1fb65f(0x18d), stopOnWins), _0x1fb65f(0x15c)));
    }
    stopOnLoseCheck = document[_0x1fb65f(0xcb)](_0x10c4cb['Hktgr'])['checked'];
    if (stopOnLoseCheck) {
        stopOnLose = _0x10c4cb[_0x1fb65f(0x25f)](Number, document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0xe6)])[_0x1fb65f(0x1ec)]);
        if (_0x10c4cb[_0x1fb65f(0x2e3)](losestreak, stopOnLose))
            _0x10c4cb[_0x1fb65f(0x328)](stop), _0x10c4cb[_0x1fb65f(0x1db)](log, _0x10c4cb[_0x1fb65f(0x1ff)](_0x10c4cb[_0x1fb65f(0x20f)] + stopOnLose, _0x10c4cb[_0x1fb65f(0x1c9)]));
    }
    stopOnProfitCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x373)])[_0x1fb65f(0x31f)];
    if (stopOnProfitCheck) {
        stopOnProfit = _0x10c4cb[_0x1fb65f(0x185)](Number, document['getElementById'](_0x10c4cb[_0x1fb65f(0x149)])[_0x1fb65f(0x1ec)]);
        if (profit >= stopOnProfit)
            stop(), _0x10c4cb[_0x1fb65f(0x24f)](log, _0x10c4cb['JNFUc'](_0x10c4cb[_0x1fb65f(0x2e0)], stopOnProfit));
    }
    stopOnBalanceCheck = document['getElementById'](_0x10c4cb['kUmGa'])['checked'];
    if (stopOnBalanceCheck) {
        stopOnBalance = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x36a)])[_0x1fb65f(0x1ec)]);
        if (_0x10c4cb[_0x1fb65f(0x2cf)](balance, stopOnBalance))
            stop(), _0x10c4cb[_0x1fb65f(0x14a)](log, _0x10c4cb[_0x1fb65f(0x345)] + stopOnBalance);
    }
    if (win) {
        betHighOnWinCheck = document[_0x1fb65f(0xcb)](_0x1fb65f(0xf1))[_0x1fb65f(0x31f)];
        if (betHighOnWinCheck) {
            betHighOnWin = Number(document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x2dd)])[_0x1fb65f(0x1ec)]);
            if (_0x10c4cb[_0x1fb65f(0x348)](winstreak % betHighOnWin, 0x0))
                bethigh = !bethigh;
        }
        if (winstreak % chanceOnWinBets === 0x0)
            chance = chanceOnWin;
        if (multiOnWinCheck) {
            if (_0x10c4cb[_0x1fb65f(0x348)](winstreak % multiOnWinBets, 0x0))
                nextbet = _0x10c4cb[_0x1fb65f(0x1f1)](previousbet, multiOnWin);
        } else
            nextbet = basebet;
    } else {
        betHighOnLoseCheck = document[_0x1fb65f(0xcb)](_0x10c4cb[_0x1fb65f(0x2ae)])['checked'];
        if (betHighOnLoseCheck) {
            betHighOnLose = Number(document[_0x1fb65f(0xcb)](_0x1fb65f(0x2b5))[_0x1fb65f(0x1ec)]);
            if (_0x10c4cb[_0x1fb65f(0x105)](losestreak % betHighOnLose, 0x0))
                bethigh = !bethigh;
        }
        if (_0x10c4cb[_0x1fb65f(0x253)](losestreak, chanceOnLoseBets) === 0x0)
            chance = chanceOnLose;
        if (multiOnLoseCheck) {
            if (_0x10c4cb[_0x1fb65f(0x12d)](_0x10c4cb[_0x1fb65f(0xb3)](losestreak, multiOnLoseBets), 0x0))
                nextbet = _0x10c4cb[_0x1fb65f(0xb8)](previousbet, multiOnLose);
        } else
            nextbet = basebet;
    }
    return _0x1fb65f(0x11c);
}
function changeCoin() {
    const _0xc34201 = _0x3d490e, _0x204793 = {
            'Sakja': function (_0x1bf216, _0x150d6e) {
                return _0x1bf216(_0x150d6e);
            }
        };
    coin = document[_0xc34201(0xcb)](_0xc34201(0xc2))[_0xc34201(0x1ec)], currency = _0x204793[_0xc34201(0x2c3)](String, coin)[_0xc34201(0xe8)](), fengari[_0xc34201(0x14d)](_0xc34201(0xf5) + currency + '\x22')(), checkbalance();
}
async function handleStats() {
    const _0x563f49 = _0x3d490e, _0x4f2d1d = {
            'ILzhw': _0x563f49(0x1c1),
            'GfzZe': function (_0x4110ea) {
                return _0x4110ea();
            },
            'qTMSU': function (_0x267662, _0x48b8bf) {
                return _0x267662 === _0x48b8bf;
            },
            'hucFn': function (_0x11114f, _0x4be742) {
                return _0x11114f === _0x4be742;
            },
            'nchsn': 'advanced',
            'pHYXe': function (_0x578f2f) {
                return _0x578f2f();
            },
            'LuDQC': function (_0x2809ca, _0x11c0bf) {
                return _0x2809ca && _0x11c0bf;
            },
            'VeUEL': function (_0x100304, _0x227ebe) {
                return _0x100304(_0x227ebe);
            },
            'iqOsv': _0x563f49(0x20a),
            'pAoak': function (_0x9511f1, _0x387e31) {
                return _0x9511f1 < _0x387e31;
            },
            'UgVbw': function (_0x285d89, _0xd13c73) {
                return _0x285d89 === _0xd13c73;
            },
            'aVbOY': function (_0x16e03a, _0x1af7d8) {
                return _0x16e03a >= _0x1af7d8;
            },
            'nOWql': _0x563f49(0x129),
            'ZGpFy': '4|3|5|2|0|1',
            'NxjIL': function (_0x3d1b43, _0x5cc24e) {
                return _0x3d1b43 > _0x5cc24e;
            },
            'UGASh': _0x563f49(0x303),
            'iGYTt': function (_0x2ef579, _0x40d2ed) {
                return _0x2ef579 < _0x40d2ed;
            },
            'QwUWV': function (_0x244638, _0x36d233) {
                return _0x244638 > _0x36d233;
            }
        };
    bets++, betsChart++, wdbSpeed[_0x563f49(0x156)]++, lastBet[_0x563f49(0xbf)] = target, lastBet['Target'] = target, lastBet['result'] = result, lastBet[_0x563f49(0x1b8)] = result, lastBet[_0x563f49(0x308)] = currentprofit, lastBet['Profit'] = currentprofit, lastBet[_0x563f49(0xf4)] = lastBet[_0x563f49(0x26a)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, profitChart += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    if (_0x4f2d1d['qTMSU'](game, _0x4f2d1d[_0x563f49(0x17c)]))
        bethigh ? lastBet[_0x563f49(0x1f8)] > lastBet['target'] ? win = !![] : win = ![] : _0x4f2d1d[_0x563f49(0x15e)](lastBet[_0x563f49(0x1f8)], lastBet['target']) ? win = !![] : win = ![];
    else {
        if (_0x4f2d1d[_0x563f49(0x31b)](game, _0x563f49(0x2bc)))
            lastBet[_0x563f49(0x308)] > 0x0 ? win = !![] : win = ![];
        else
            _0x4f2d1d['aVbOY'](lastBet['result'], lastBet[_0x563f49(0xbf)]) ? win = !![] : win = ![];
    }
    if (win) {
        const _0x28ea3c = '2|1|0|3|4'[_0x563f49(0x2a1)]('|');
        let _0x52fcc1 = 0x0;
        while (!![]) {
            switch (_0x28ea3c[_0x52fcc1++]) {
            case '0':
                winstreak++;
                continue;
            case '1':
                wins++;
                continue;
            case '2':
                color = _0x4f2d1d[_0x563f49(0xb7)];
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
        const _0x156451 = _0x4f2d1d[_0x563f49(0x19f)][_0x563f49(0x2a1)]('|');
        let _0x3573ac = 0x0;
        while (!![]) {
            switch (_0x156451[_0x3573ac++]) {
            case '0':
                currentstreak = 0x0 - losestreak;
                continue;
            case '1':
                if (_0x4f2d1d[_0x563f49(0x32c)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '2':
                winstreak = 0x0;
                continue;
            case '3':
                losses++;
                continue;
            case '4':
                color = _0x4f2d1d['UGASh'];
                continue;
            case '5':
                losestreak++;
                continue;
            }
            break;
        }
    }
    if (_0x4f2d1d[_0x563f49(0x32c)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (_0x4f2d1d[_0x563f49(0x32c)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x4f2d1d[_0x563f49(0x214)](balance, minbalance))
        minbalance = balance;
    if (_0x4f2d1d[_0x563f49(0x160)](balance, maxbalance))
        maxbalance = balance;
    if (_0x4f2d1d['pAoak'](profit, minprofit))
        minprofit = profit;
    if (profit > maxprofit)
        maxprofit = profit;
    const _0xa9bb60 = await _0x4f2d1d['GfzZe'](updateStats), _0x26abd8 = await updateChart(), _0x478238 = await updateHistory();
    Promise[_0x563f49(0x21d)]([
        _0xa9bb60,
        _0x26abd8,
        _0x478238
    ])[_0x563f49(0x2e6)](async _0x59d4e2 => {
        const _0x5b0e78 = _0x563f49;
        try {
            if (mode === _0x4f2d1d['ILzhw'])
                await _0x4f2d1d['GfzZe'](updateLua);
            else {
                if (_0x4f2d1d[_0x5b0e78(0x1cc)](mode, 'js'))
                    await _0x4f2d1d['GfzZe'](dobet);
                else
                    _0x4f2d1d[_0x5b0e78(0x371)](mode, _0x4f2d1d['nchsn']) && await _0x4f2d1d[_0x5b0e78(0x10d)](handleAdvanced);
            }
            if (_0x4f2d1d['LuDQC'](win, sOW))
                return stop();
            if (run)
                return playBet();
        } catch (_0x3d93e5) {
            _0x4f2d1d[_0x5b0e78(0x10d)](stop), _0x4f2d1d[_0x5b0e78(0x1c4)](log, _0x3d93e5);
        }
    });
}
async function updateStats() {
    const _0x551b3d = _0x3d490e, _0x2aa9e0 = {
            'leyfz': function (_0x3d6f79, _0xca773d) {
                return _0x3d6f79 === _0xca773d;
            },
            'gEgKN': _0x551b3d(0x1de),
            'ktqnC': function (_0x4338bd, _0x42db1c) {
                return _0x4338bd < _0x42db1c;
            },
            'KCPoC': _0x551b3d(0x303),
            'igsno': 'white',
            'eJriu': function (_0x95f996, _0xe4bb8d) {
                return _0x95f996 < _0xe4bb8d;
            },
            'glVWS': _0x551b3d(0x129),
            'BFKPp': function (_0xfadda5, _0x44cfde) {
                return _0xfadda5 > _0x44cfde;
            },
            'vsdQn': _0x551b3d(0x125),
            'wuEWx': _0x551b3d(0x34d),
            'qnFZv': _0x551b3d(0x28b),
            'ELONj': _0x551b3d(0xd5),
            'cklMw': _0x551b3d(0x273),
            'jWJRw': 'wdbLosses',
            'atkLu': _0x551b3d(0x35c),
            'qaRvb': 'wdbMinBalance',
            'cxZSz': _0x551b3d(0xb1),
            'amGRd': 'wdbMaxProfit',
            'pvBMz': function (_0x5df7e2, _0x4fe520) {
                return _0x5df7e2 / _0x4fe520;
            },
            'QQXsY': function (_0x3727bf, _0x1d63ce) {
                return _0x3727bf * _0x1d63ce;
            },
            'cOOzy': function (_0x2b7d9a, _0x18aa15) {
                return _0x2b7d9a + _0x18aa15;
            },
            'SrWTm': function (_0x12ddfa, _0x4b178d) {
                return _0x12ddfa === _0x4b178d;
            },
            'WYrIu': 'Infinity',
            'mpZtX': function (_0x313ba8, _0x2d9911) {
                return _0x313ba8(_0x2d9911);
            },
            'dhAWY': 'NaN',
            'XzMhQ': _0x551b3d(0x242),
            'GelcM': function (_0x6c2527, _0x848043) {
                return _0x6c2527 / _0x848043;
            },
            'nxJYM': function (_0x3a5251, _0x43440c) {
                return _0x3a5251(_0x43440c);
            },
            'BpDEQ': 'wdbWrapPercentProfit',
            'HCtiZ': _0x551b3d(0x24b)
        }, _0x2e8591 = _0x2aa9e0[_0x551b3d(0x2c4)](profit, 0x0) ? darkMode ? _0x551b3d(0x354) : _0x2aa9e0[_0x551b3d(0xc0)] : _0x2aa9e0[_0x551b3d(0x254)](profit, 0x0) ? _0x2aa9e0[_0x551b3d(0x37d)] : _0x551b3d(0x129), _0x2f4548 = _0x2aa9e0[_0x551b3d(0x2c4)](currentstreak, 0x0) ? darkMode ? _0x2aa9e0['igsno'] : _0x2aa9e0[_0x551b3d(0xc0)] : _0x2aa9e0[_0x551b3d(0x249)](currentstreak, 0x0) ? _0x2aa9e0[_0x551b3d(0x37d)] : _0x2aa9e0['glVWS'], _0x223f96 = maxwinstreak > 0x0 ? _0x2aa9e0[_0x551b3d(0x36f)] : _0x2aa9e0[_0x551b3d(0xc0)];
    document[_0x551b3d(0xcb)](_0x551b3d(0x2f5))[_0x551b3d(0x1d2)][_0x551b3d(0x377)] = _0x223f96;
    const _0xb43d75 = _0x2aa9e0[_0x551b3d(0x32a)](maxlosestreak, 0x0) ? _0x2aa9e0[_0x551b3d(0x37d)] : _0x551b3d(0x1de);
    document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x232)])[_0x551b3d(0x1d2)]['color'] = _0xb43d75, document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x1f0)])[_0x551b3d(0xd8)] = wagered['toFixed'](decimalAmountView), document[_0x551b3d(0xcb)](_0x551b3d(0x1e7))['innerText'] = balance[_0x551b3d(0x304)](decimalAmountView), document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x12a)])[_0x551b3d(0x1d2)][_0x551b3d(0x377)] = _0x2e8591, document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x12a)])[_0x551b3d(0xd8)] = profit[_0x551b3d(0x304)](decimalAmountView), document[_0x551b3d(0xcb)](_0x551b3d(0x1b2))[_0x551b3d(0xd8)] = maxBetAmount[_0x551b3d(0x304)](decimalAmountView), document[_0x551b3d(0xcb)](_0x551b3d(0x26e))[_0x551b3d(0xd8)] = maxLosseAmount[_0x551b3d(0x304)](decimalAmountView), document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x270)])[_0x551b3d(0xd8)] = bets, document['getElementById'](_0x2aa9e0[_0x551b3d(0x2b8)])['innerText'] = wins, document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x130)])[_0x551b3d(0xd8)] = losses, document['getElementById'](_0x2aa9e0[_0x551b3d(0x1aa)])[_0x551b3d(0x1d2)][_0x551b3d(0x377)] = _0x2f4548, document[_0x551b3d(0xcb)](_0x2aa9e0['atkLu'])[_0x551b3d(0xd8)] = currentstreak, document[_0x551b3d(0xcb)](_0x551b3d(0x2f5))[_0x551b3d(0xd8)] = maxwinstreak, document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x232)])['innerText'] = maxlosestreak, document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x290)])[_0x551b3d(0xd8)] = minbalance[_0x551b3d(0x304)](decimalAmountView), document[_0x551b3d(0xcb)]('wdbMaxBalance')['innerText'] = maxbalance[_0x551b3d(0x304)](decimalAmountView), document['getElementById'](_0x2aa9e0[_0x551b3d(0x255)])[_0x551b3d(0xd8)] = minprofit['toFixed'](decimalAmountView), document['getElementById'](_0x2aa9e0[_0x551b3d(0x35e)])['innerText'] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x2aa9e0[_0x551b3d(0x351)](wagered, startBalance), percentWagered = _0x2aa9e0[_0x551b3d(0x351)](Math[_0x551b3d(0x117)](_0x2aa9e0['QQXsY'](_0x2aa9e0[_0x551b3d(0x119)](percentWagered, Number[_0x551b3d(0x116)]), 0x64)), 0x64);
    if (_0x2aa9e0[_0x551b3d(0x202)](String(percentWagered), _0x2aa9e0[_0x551b3d(0x1d3)]) || _0x2aa9e0['leyfz'](_0x2aa9e0['mpZtX'](String, percentWagered), _0x2aa9e0[_0x551b3d(0xe9)]))
        percentWagered = 0x0;
    document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x1ce)])[_0x551b3d(0xd8)] = percentWagered, percentProfit = _0x2aa9e0[_0x551b3d(0x367)](_0x2aa9e0['pvBMz'](profit, startBalance), 0x64), percentProfit = _0x2aa9e0[_0x551b3d(0x1ab)](Math[_0x551b3d(0x117)](_0x2aa9e0[_0x551b3d(0x119)](percentProfit, Number[_0x551b3d(0x116)]) * 0x64), 0x64);
    if (_0x2aa9e0[_0x551b3d(0x2c4)](_0x2aa9e0['mpZtX'](String, percentProfit), _0x2aa9e0[_0x551b3d(0x1d3)]) || _0x2aa9e0[_0x551b3d(0xfb)](String, percentProfit) === _0x2aa9e0[_0x551b3d(0xe9)])
        percentProfit = 0x0;
    return document[_0x551b3d(0xcb)](_0x2aa9e0[_0x551b3d(0x1e5)])['style'][_0x551b3d(0x377)] = _0x2e8591, document['getElementById'](_0x2aa9e0['HCtiZ'])['innerText'] = percentProfit, _0x551b3d(0x154);
}
function drawChart() {
    const _0x10a775 = _0x3d490e, _0x412c4e = {
            'oFmLp': _0x10a775(0xd2),
            'yTUvw': _0x10a775(0x317),
            'ZIogI': _0x10a775(0x29c),
            'nVCRu': _0x10a775(0x284)
        };
    dps = [{
            'x': betsChart,
            'y': profitChart
        }], chart = new CanvasJS[(_0x10a775(0x113))](_0x412c4e[_0x10a775(0x231)], {
        'theme': darkMode ? _0x412c4e[_0x10a775(0x247)] : _0x412c4e[_0x10a775(0x2b4)],
        'axisY': { 'includeZero': ![] },
        'data': [{
                'type': _0x412c4e['nVCRu'],
                'markerSize': 0x0,
                'dataPoints': dps
            }]
    }), chart[_0x10a775(0x287)]();
}
async function updateChart() {
    const _0x44ba8d = _0x3d490e, _0x59b96d = {
            'fiiOI': function (_0x19d77a, _0x32088f) {
                return _0x19d77a > _0x32088f;
            },
            'EYJGx': function (_0x228c9d, _0x3b233a) {
                return _0x228c9d - _0x3b233a;
            },
            'ARxNF': _0x44ba8d(0x2e9)
        };
    if (!stopChart) {
        dps['push']({
            'x': betsChart,
            'y': profitChart,
            'color': color
        });
        if (_0x59b96d[_0x44ba8d(0x1fb)](dps[_0x44ba8d(0x11d)], maxRows))
            dps[_0x44ba8d(0x376)]();
        if (dps[_0x59b96d[_0x44ba8d(0x1e0)](dps[_0x44ba8d(0x11d)], 0x2)])
            dps[_0x59b96d[_0x44ba8d(0x1e0)](dps[_0x44ba8d(0x11d)], 0x2)][_0x44ba8d(0x136)] = color;
        chart[_0x44ba8d(0x287)]();
    }
    return _0x59b96d[_0x44ba8d(0x23e)];
}
async function updateHistory() {
    const _0x1f44d8 = _0x3d490e, _0x41bb54 = {
            'kioCR': function (_0x41652e, _0x180a8c) {
                return _0x41652e === _0x180a8c;
            },
            'ijXce': _0x1f44d8(0x20a),
            'TJTys': function (_0x558267, _0x58d6ac) {
                return _0x558267 + _0x58d6ac;
            },
            'dACoJ': function (_0xa34a7a, _0x425e7c) {
                return _0xa34a7a(_0x425e7c);
            },
            'rosxk': _0x1f44d8(0x2bc),
            'RdTIR': _0x1f44d8(0x28e),
            'ueJRk': _0x1f44d8(0x288),
            'DOgMg': 'wdbHistory',
            'DQPZN': _0x1f44d8(0x22f),
            'frScV': _0x1f44d8(0x12c)
        };
    if (!stopHistory) {
        const _0x12ad54 = _0x41bb54[_0x1f44d8(0x20c)](game, _0x41bb54['ijXce']) ? bethigh ? '>' : '<' : '>', _0x160a30 = bethigh ? _0x1f44d8(0x2f1) + bets + _0x1f44d8(0x261) : _0x1f44d8(0x2f1) + bets + '\x22\x20type=\x22checkbox\x22\x20/>', _0x91f03d = '' + (havePlinkoRows ? _0x41bb54['TJTys'](plinkoRow, _0x1f44d8(0xe5)) : '') + plinkoRisk, _0x453c1a = '<td>' + bets + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x41bb54['dACoJ'](Number, lastBet[_0x1f44d8(0x10a)])[_0x1f44d8(0x304)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x160a30 + _0x1f44d8(0xe4) + (game === _0x41bb54[_0x1f44d8(0x146)] ? _0x91f03d : _0x41bb54[_0x1f44d8(0x10f)](Number, lastBet[_0x1f44d8(0x36b)])[_0x1f44d8(0x304)](decimalChanceView)) + _0x1f44d8(0xe4) + Number(lastBet[_0x1f44d8(0x150)])[_0x1f44d8(0x304)](decimalChanceView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x41bb54[_0x1f44d8(0x10f)](Number, lastBet[_0x1f44d8(0x308)])[_0x1f44d8(0x304)](decimalAmountView) + _0x1f44d8(0xe4) + (_0x41bb54[_0x1f44d8(0x20c)](game, _0x41bb54['rosxk']) ? _0x91f03d : _0x41bb54[_0x1f44d8(0x122)](_0x12ad54, _0x41bb54[_0x1f44d8(0x10f)](Number, target)[_0x1f44d8(0x304)](decimalTargetResult))) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + Number(result)['toFixed'](decimalTargetResult) + _0x1f44d8(0xe4) + lastBet[_0x1f44d8(0x26a)] + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet['id'] + _0x1f44d8(0x1c0), _0x549513 = document[_0x1f44d8(0x16c)]('tr');
        if (win)
            _0x549513[_0x1f44d8(0x1d2)]['backgroundColor'] = _0x41bb54[_0x1f44d8(0xb9)];
        else
            _0x549513[_0x1f44d8(0x1d2)][_0x1f44d8(0x2f9)] = _0x41bb54[_0x1f44d8(0x300)];
        _0x549513[_0x1f44d8(0x28f)] = _0x453c1a, document['getElementById'](_0x41bb54['DOgMg'])[_0x1f44d8(0x33d)](_0x549513, document[_0x1f44d8(0xcb)](_0x41bb54[_0x1f44d8(0xd3)])[_0x1f44d8(0xc6)][0x0]);
        const _0x42c14a = document[_0x1f44d8(0x176)](_0x41bb54[_0x1f44d8(0x144)])[_0x1f44d8(0xf7)];
        if (_0x42c14a[_0x1f44d8(0x11d)] > maxRows)
            document['querySelector'](_0x41bb54[_0x1f44d8(0x144)])[_0x1f44d8(0x291)][_0x1f44d8(0x293)]();
    }
    return _0x41bb54[_0x1f44d8(0xaf)];
}
function log(_0x5cbac5) {
    const _0x9e0a77 = _0x3d490e, _0x24a91f = {
            'NsquV': 'wdbLog',
            'VIoUz': function (_0x5a8f25, _0x485b22) {
                return _0x5a8f25 > _0x485b22;
            }
        }, _0x453f9b = document['getElementById']('wdbLog'), _0x4b3f21 = document[_0x9e0a77(0x16c)]('li');
    _0x4b3f21[_0x9e0a77(0xd8)] = '' + _0x5cbac5, document[_0x9e0a77(0xcb)](_0x24a91f[_0x9e0a77(0x1cb)])['insertBefore'](_0x4b3f21, _0x453f9b[_0x9e0a77(0xc6)][0x0]);
    const _0xc460e3 = _0x453f9b[_0x9e0a77(0x2f0)]('li');
    if (_0x24a91f['VIoUz'](_0xc460e3['length'], maxRows))
        document['getElementById'](_0x24a91f[_0x9e0a77(0x1cb)])['removeChild'](_0x453f9b[_0x9e0a77(0x291)]);
}
async function start() {
    const _0x55131c = _0x3d490e, _0x1b1bac = {
            'splnc': _0x55131c(0x2df),
            'oHUJA': _0x55131c(0x2ef),
            'gozao': '#wdbSaveScriptButton',
            'iuQZB': function (_0xa00251, _0x1ef671) {
                return _0xa00251 === _0x1ef671;
            },
            'kUqGm': _0x55131c(0x1c1),
            'BkLqT': _0x55131c(0x13d),
            'vhHHQ': _0x55131c(0x100),
            'wbEji': _0x55131c(0x315),
            'dkrcC': _0x55131c(0x165),
            'GOJvZ': function (_0x3b66e8, _0x45155a) {
                return _0x3b66e8 === _0x45155a;
            },
            'IDBTL': function (_0x91364, _0x41354c) {
                return _0x91364 !== _0x41354c;
            },
            'KmzmR': _0x55131c(0x360),
            'TWaBX': _0x55131c(0x2a3),
            'gHRbI': function (_0x569bf7, _0x1f2db5) {
                return _0x569bf7 === _0x1f2db5;
            },
            'CLWay': _0x55131c(0x352),
            'ARWGu': function (_0x35dc6a, _0x4583a5) {
                return _0x35dc6a(_0x4583a5);
            },
            'XGOCX': _0x55131c(0x201),
            'xCAra': _0x55131c(0x264),
            'zkHbP': _0x55131c(0xc8),
            'btMNO': function (_0x45a344) {
                return _0x45a344();
            }
        };
    try {
        if (!run) {
            document[_0x55131c(0xcb)](_0x55131c(0x311))['innerText'] = _0x1b1bac[_0x55131c(0x37b)], document[_0x55131c(0xcb)](_0x55131c(0xc2))[_0x55131c(0x297)] = !![], document['getElementById']('wdbMenuMode')[_0x55131c(0x297)] = !![], document[_0x55131c(0xcb)](_0x55131c(0x34f))['disabled'] = !![], document[_0x55131c(0xcb)](_0x1b1bac[_0x55131c(0x2fc)])['disabled'] = !![], document[_0x55131c(0x132)](_0x1b1bac[_0x55131c(0xb5)])[_0x55131c(0x1e1)](_0x201824 => _0x201824[_0x55131c(0x297)] = !![]), document[_0x55131c(0x132)](_0x55131c(0x1f7))[_0x55131c(0x1e1)](_0x16b19c => _0x16b19c['disabled'] = !![]), run = !![], sOW = ![], wdbTimer['stop'](), wdbTimer['start'](), wdbSpeed['stop'](), wdbSpeed[_0x55131c(0x14e)]();
            if (_0x1b1bac[_0x55131c(0x221)](mode, _0x1b1bac[_0x55131c(0x283)]))
                diceScript = luaEditor[_0x55131c(0x2ac)](), diceScript = diceScript[_0x55131c(0xea)](/!=/g, '~=')['replace'](/!/g, _0x1b1bac[_0x55131c(0x104)])[_0x55131c(0xea)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1b1bac[_0x55131c(0x158)])[_0x55131c(0xea)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1b1bac[_0x55131c(0x27b)])[_0x55131c(0xea)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x1b1bac[_0x55131c(0x2f3)])[_0x55131c(0xea)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x55131c(0xdd)), fengari['load'](diceScript)();
            else {
                if (_0x1b1bac[_0x55131c(0x2a9)](mode, 'js')) {
                    if (_0x1b1bac['IDBTL'](document['getElementById'](_0x1b1bac[_0x55131c(0x2f8)]), null))
                        document['getElementById'](_0x1b1bac[_0x55131c(0x2f8)])['remove']();
                    diceScript = jsEditor[_0x55131c(0x2ac)]();
                    let _0x1dde77 = document[_0x55131c(0x16c)](_0x1b1bac[_0x55131c(0x1f6)]);
                    _0x1dde77['id'] = _0x55131c(0x360), _0x1dde77[_0x55131c(0x28f)] = diceScript, document['head'][_0x55131c(0x17d)](_0x1dde77);
                } else
                    _0x1b1bac['gHRbI'](mode, _0x1b1bac[_0x55131c(0x2da)]) && (basebet = _0x1b1bac[_0x55131c(0x2cc)](Number, document[_0x55131c(0xcb)](_0x1b1bac['XGOCX'])['value']), nextbet = basebet, chance = _0x1b1bac['ARWGu'](Number, document[_0x55131c(0xcb)](_0x1b1bac[_0x55131c(0x281)])[_0x55131c(0x1ec)]), bethigh = document['querySelector'](_0x1b1bac['zkHbP'])[_0x55131c(0x31f)]);
            }
            if (run)
                return _0x1b1bac[_0x55131c(0x15d)](playBet);
        }
    } catch (_0xfff62c) {
        _0x1b1bac[_0x55131c(0x15d)](stop), log(_0xfff62c);
    }
}
function stop() {
    const _0xc32f4b = _0x3d490e, _0x53b4f2 = {
            'UUCRS': 'wdbMenuMode',
            'gRWor': _0xc32f4b(0x34f),
            'xnONZ': _0xc32f4b(0xc2),
            'hHEHZ': _0xc32f4b(0xfc),
            'FVvkC': '#wdbSaveScriptButton',
            'pAnfz': _0xc32f4b(0x2ef)
        };
    if (run) {
        const _0x542248 = _0xc32f4b(0xd0)['split']('|');
        let _0x5292a1 = 0x0;
        while (!![]) {
            switch (_0x542248[_0x5292a1++]) {
            case '0':
                document[_0xc32f4b(0x132)]('#wdbOpenScript')['forEach'](_0x57d999 => _0x57d999[_0xc32f4b(0x297)] = ![]);
                continue;
            case '1':
                document[_0xc32f4b(0xcb)](_0x53b4f2[_0xc32f4b(0x233)])[_0xc32f4b(0x297)] = ![];
                continue;
            case '2':
                document[_0xc32f4b(0xcb)](_0x53b4f2['gRWor'])[_0xc32f4b(0x297)] = ![];
                continue;
            case '3':
                wdbTimer[_0xc32f4b(0xeb)]();
                continue;
            case '4':
                sOW = ![];
                continue;
            case '5':
                document[_0xc32f4b(0xcb)](_0x53b4f2[_0xc32f4b(0x1ef)])[_0xc32f4b(0x297)] = ![];
                continue;
            case '6':
                wdbSpeed[_0xc32f4b(0xeb)]();
                continue;
            case '7':
                document[_0xc32f4b(0xcb)](_0x53b4f2[_0xc32f4b(0x338)])[_0xc32f4b(0x297)] = ![];
                continue;
            case '8':
                document[_0xc32f4b(0x132)](_0x53b4f2[_0xc32f4b(0x194)])[_0xc32f4b(0x1e1)](_0x4e7bc1 => _0x4e7bc1[_0xc32f4b(0x297)] = ![]);
                continue;
            case '9':
                run = ![];
                continue;
            case '10':
                document['getElementById'](_0x53b4f2['pAnfz'])['disabled'] = ![];
                continue;
            }
            break;
        }
    }
}
async function resume(_0x4028f6) {
    const _0x358afa = _0x3d490e, _0x323d54 = {
            'kDssP': _0x358afa(0x2ef),
            'AlGVs': 'wdbStartButton',
            'xxoiy': function (_0x2f3e3c, _0x30f9fb) {
                return _0x2f3e3c(_0x30f9fb);
            },
            'VehtV': _0x358afa(0x182),
            'NwGmg': _0x358afa(0x2eb),
            'WzyZN': _0x358afa(0x1f7),
            'aRNxo': function (_0x1429f9) {
                return _0x1429f9();
            },
            'GWDjF': _0x358afa(0x133)
        };
    if (!run) {
        const _0x432afc = _0x358afa(0x368)[_0x358afa(0x2a1)]('|');
        let _0x5c7e1d = 0x0;
        while (!![]) {
            switch (_0x432afc[_0x5c7e1d++]) {
            case '0':
                wdbSpeed[_0x358afa(0x14e)]();
                continue;
            case '1':
                document[_0x358afa(0xcb)](_0x323d54[_0x358afa(0x13f)])[_0x358afa(0x297)] = !![];
                continue;
            case '2':
                document[_0x358afa(0xcb)](_0x323d54[_0x358afa(0x16d)])[_0x358afa(0x297)] = !![];
                continue;
            case '3':
                !_0x4028f6 && (_0x323d54['xxoiy'](log, _0x323d54[_0x358afa(0x342)]), await new Promise(_0x4ba4df => setTimeout(_0x4ba4df, 0x1388)));
                continue;
            case '4':
                sOW = ![];
                continue;
            case '5':
                wdbTimer[_0x358afa(0x14e)]();
                continue;
            case '6':
                document[_0x358afa(0xcb)](_0x323d54[_0x358afa(0xdc)])[_0x358afa(0x297)] = !![];
                continue;
            case '7':
                document[_0x358afa(0x132)](_0x323d54['WzyZN'])[_0x358afa(0x1e1)](_0x46c46a => _0x46c46a['disabled'] = !![]);
                continue;
            case '8':
                return _0x323d54[_0x358afa(0x295)](playBet);
            case '9':
                document[_0x358afa(0x132)](_0x323d54[_0x358afa(0x34e)])['forEach'](_0xc91d37 => _0xc91d37[_0x358afa(0x297)] = !![]);
                continue;
            case '10':
                document[_0x358afa(0xcb)](_0x358afa(0xc2))[_0x358afa(0x297)] = !![];
                continue;
            case '11':
                run = !![];
                continue;
            }
            break;
        }
    }
}
function stopOnWin() {
    const _0x5a9da5 = _0x3d490e, _0x558fdb = { 'pJPRA': 'wdbStopOnWinButton' };
    sOW = !![];
    if (run)
        document['getElementById'](_0x558fdb[_0x5a9da5(0xa6)])[_0x5a9da5(0x297)] = !![];
}
async function playBet() {
    const _0x26ea2f = _0x3d490e, _0x4713cc = {
            'DXCXo': function (_0x36e3f1, _0x3efefa) {
                return _0x36e3f1 === _0x3efefa;
            },
            'OGZSb': _0x26ea2f(0x1c1),
            'cosEL': _0x26ea2f(0x131),
            'KxyeZ': function (_0x3cec00, _0x3e870c) {
                return _0x3cec00(_0x3e870c);
            },
            'JVVIz': _0x26ea2f(0x2bc),
            'ZbBDA': _0x26ea2f(0xe5),
            'reDNe': function (_0x117347, _0x5b7427) {
                return _0x117347 === _0x5b7427;
            },
            'zfpky': 'high',
            'ylGhZ': function (_0x18c518) {
                return _0x18c518();
            },
            'xiESY': function (_0x2872dd, _0xf451e0) {
                return _0x2872dd(_0xf451e0);
            }
        };
    try {
        _0x4713cc[_0x26ea2f(0xcd)](mode, _0x4713cc[_0x26ea2f(0x101)]) && (nextbet = fengari['load'](_0x4713cc[_0x26ea2f(0x28c)])(), chance = fengari['load'](_0x26ea2f(0x178))(), bethigh = fengari[_0x26ea2f(0x14d)](_0x26ea2f(0x31d))());
        nextbet = Number(nextbet), chance = _0x4713cc[_0x26ea2f(0x1c7)](Number, chance), previousbet = nextbet, lastBet[_0x26ea2f(0x10a)] = nextbet, lastBet[_0x26ea2f(0x186)] = nextbet, lastBet[_0x26ea2f(0x36b)] = chance, lastBet[_0x26ea2f(0x22a)] = chance;
        if (!stopLog) {
            if (_0x4713cc[_0x26ea2f(0xcd)](game, _0x4713cc['JVVIz'])) {
                const _0x14ef7a = '' + (havePlinkoRows ? plinkoRow + _0x4713cc['ZbBDA'] : '') + plinkoRisk, _0x542dac = _0x26ea2f(0x179) + _0x4713cc[_0x26ea2f(0x1c7)](Number, lastBet[_0x26ea2f(0x10a)])[_0x26ea2f(0x304)](decimalAmountView) + '\x20at\x20' + _0x14ef7a + _0x26ea2f(0x2f7);
                log(_0x542dac);
            } else {
                const _0x3b854d = _0x4713cc['reDNe'](game, _0x26ea2f(0x20a)) ? bethigh ? _0x4713cc['zfpky'] : 'low' : _0x4713cc[_0x26ea2f(0x2d6)], _0x133557 = _0x26ea2f(0x179) + _0x4713cc[_0x26ea2f(0x1c7)](Number, lastBet[_0x26ea2f(0x10a)])[_0x26ea2f(0x304)](decimalAmountView) + _0x26ea2f(0x272) + _0x4713cc[_0x26ea2f(0x1c7)](Number, lastBet[_0x26ea2f(0x36b)])[_0x26ea2f(0x304)](decimalChanceView) + _0x26ea2f(0xac) + _0x3b854d;
                log(_0x133557);
            }
        }
        if (run)
            return _0x4713cc[_0x26ea2f(0x2dc)](sendBet);
    } catch (_0x166962) {
        stop(), _0x4713cc['xiESY'](log, _0x166962);
    }
}
function resetall() {
    const _0x1ee66b = _0x3d490e, _0x4eaa75 = {
            'fgYce': _0x1ee66b(0x22e),
            'tThDM': function (_0x3fc8c3, _0x1da9af) {
                return _0x3fc8c3(_0x1da9af);
            },
            'psLzx': _0x1ee66b(0x339),
            'eUgGg': _0x1ee66b(0x298),
            'hvsLt': _0x1ee66b(0x311),
            'pdvKP': _0x1ee66b(0x2df)
        }, _0x4cc2df = _0x4eaa75[_0x1ee66b(0x112)]['split']('|');
    let _0x369fb2 = 0x0;
    while (!![]) {
        switch (_0x4cc2df[_0x369fb2++]) {
        case '0':
            _0x4eaa75[_0x1ee66b(0x2f2)](toggleHistory, _0x4eaa75[_0x1ee66b(0x271)]);
            continue;
        case '1':
            _0x4eaa75[_0x1ee66b(0x2f2)](toggleChart, _0x4eaa75[_0x1ee66b(0x33b)]);
            continue;
        case '2':
            _0x4eaa75[_0x1ee66b(0x2f2)](toggleLog, _0x4eaa75['psLzx']);
            continue;
        case '3':
            run ? (wdbSpeed[_0x1ee66b(0x307)](), wdbSpeed['start'](), wdbTimer[_0x1ee66b(0x307)](), wdbTimer['start']()) : (wdbSpeed[_0x1ee66b(0x307)](), wdbTimer['stop']());
            continue;
        case '4':
            document[_0x1ee66b(0xcb)](_0x4eaa75[_0x1ee66b(0x30b)])[_0x1ee66b(0xd8)] = _0x4eaa75[_0x1ee66b(0xdb)];
            continue;
        case '5':
            resetstats();
            continue;
        }
        break;
    }
}
function _0x3e59(_0x450d8e, _0x32b856) {
    const _0x17887b = _0x1788();
    return _0x3e59 = function (_0x3e594d, _0xa72b28) {
        _0x3e594d = _0x3e594d - 0xa6;
        let _0x57a59d = _0x17887b[_0x3e594d];
        return _0x57a59d;
    }, _0x3e59(_0x450d8e, _0x32b856);
}
function resetchart() {
    const _0x392672 = _0x3d490e, _0x409c73 = {
            'Brlqd': function (_0xe5e0b7, _0x372581) {
                return _0xe5e0b7(_0x372581);
            },
            'ukVpx': _0x392672(0x298)
        };
    return _0x409c73[_0x392672(0xec)](toggleChart, _0x409c73[_0x392672(0x107)]);
}
function resethistory() {
    const _0x5046ce = _0x3d490e;
    return toggleHistory(_0x5046ce(0x339));
}
function resetlog() {
    const _0x3571db = _0x3d490e, _0x4ec51d = {
            'yWrbV': function (_0x1ae13a, _0x177244) {
                return _0x1ae13a(_0x177244);
            },
            'yYrXJ': _0x3571db(0x339)
        };
    return _0x4ec51d[_0x3571db(0x224)](toggleLog, _0x4ec51d[_0x3571db(0x235)]);
}
function resetstats() {
    const _0x21a0a3 = _0x3d490e, _0x3dac26 = {
            'teKAc': function (_0x11a15f) {
                return _0x11a15f();
            }
        }, _0xfbfcf9 = _0x21a0a3(0x23f)[_0x21a0a3(0x2a1)]('|');
    let _0x137365 = 0x0;
    while (!![]) {
        switch (_0xfbfcf9[_0x137365++]) {
        case '0':
            maxlosestreak = 0x0;
            continue;
        case '1':
            profit = 0x0;
            continue;
        case '2':
            percentProfit = 0x0;
            continue;
        case '3':
            maxbalance = balance;
            continue;
        case '4':
            minprofit = 0x0;
            continue;
        case '5':
            return _0x3dac26['teKAc'](updateStats);
        case '6':
            maxBetAmount = 0x0;
            continue;
        case '7':
            wins = 0x0;
            continue;
        case '8':
            currentstreak = 0x0;
            continue;
        case '9':
            losses = 0x0;
            continue;
        case '10':
            percentWagered = 0x0;
            continue;
        case '11':
            bets = 0x0;
            continue;
        case '12':
            maxLosseAmount = 0x0;
            continue;
        case '13':
            wagered = 0x0;
            continue;
        case '14':
            maxwinstreak = 0x0;
            continue;
        case '15':
            maxprofit = 0x0;
            continue;
        case '16':
            minbalance = balance;
            continue;
        case '17':
            startBalance = balance;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x20e49c) {
    return _0x20e49c;
}
function ching() {
    return wdbSound['play']();
}
function sleep(_0x15d5aa) {
    return new Promise(_0x204d0d => setTimeout(_0x204d0d, _0x15d5aa * 0x3e8));
}
function _0x1788() {
    const _0x4fd524 = [
        'advancedBetHighOnBet',
        'substring',
        'options',
        'kMBUD',
        'LniyY',
        'icNTR',
        'Stop\x20on\x20profit\x20',
        'csBJF',
        'wdbLUAMode',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'IjJGf',
        'FdGok',
        'advancedChance',
        'resetall',
        'HlpTX',
        'yuDcE',
        'default',
        'OYoLU',
        'nonce',
        'XIfzH',
        'gKImq',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'wdbHighLose',
        'onmousemove',
        'ELONj',
        'psLzx',
        '\x20at\x20',
        'wdbWins',
        'WQhJL',
        'liceH',
        'Dzrkg',
        'ufzLr',
        'stopOnBalanceCheck',
        '#wdbWrapTips\x20pre',
        'resetstatsOnProfitCheck',
        'wbEji',
        'zzNbs',
        '#fff',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'NMiXF',
        'Timer',
        'xCAra',
        'return\x20scriptname',
        'kUqGm',
        'line',
        'abcdefghijklmnopqrstuvwxyz',
        'YTKqJ',
        'render',
        '#ffc0cb',
        '1000px',
        'dDubP',
        'wdbProfit',
        'cosEL',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        '#91f190',
        'innerHTML',
        'qaRvb',
        'lastChild',
        'div',
        'remove',
        'xgIho',
        'aRNxo',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'disabled',
        'reset',
        'bIvxX',
        'UZhtg',
        '#2a2a2a',
        'light1',
        'secondsUpdated',
        'FseqU',
        'wdbWrap',
        'pqEuT',
        'split',
        'toString',
        'script',
        'stats',
        'wdbStats',
        'kKbje',
        'LNftw',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'GOJvZ',
        'preventDefault',
        'Stop\x20on\x20roll\x20number\x20',
        'getValue',
        'QZVpc',
        'pOIoL',
        'resetstats',
        'mTklB',
        'WpXHY',
        'advancedStopRollNumberCheck',
        'GydDw',
        'ZIogI',
        'advancedBetHighOnLose',
        'LEmIY',
        'dcKNO',
        'cklMw',
        '\x0a\x20\x20\x20\x20losses=',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=\x20',
        '56iKSrLP',
        'plinko',
        'HKDYS',
        'text/plain;\x20charset=utf-8',
        'Clgsv',
        'azrow',
        'numeric',
        'wdb',
        'Sakja',
        'leyfz',
        'Fbqqj',
        'functions',
        'wdbHistory',
        'RGFEQ',
        'history',
        'WIkcx',
        'CxsUN',
        'ARWGu',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'advancedChanceOnWin',
        'hdbEw',
        'eVrjj',
        'Oxlcj',
        'CDtVB',
        'YiJRH',
        'beKBJ',
        'WoJOW',
        'zfpky',
        'PWUcG',
        'VJZMn',
        'random',
        'CLWay',
        '#000',
        'ylGhZ',
        'mhBmu',
        'advancedStopOnBets',
        '0:0:0:0',
        'HYPcZ',
        'advancedStopAfterStreak',
        'wdbToggleLiveHistory',
        'MXJNu',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'QBkuR',
        'then',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'clientX',
        'updateChart\x20ok',
        'LdNtA',
        'wdbMenuMode',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'XCiLg',
        'mode',
        'wdbResumeButton',
        'getElementsByTagName',
        '<input\x20id=\x22bethigh',
        'tThDM',
        'dkrcC',
        'toUTCString',
        'wdbHighWinStreak',
        'starthistory',
        '\x20to\x20win',
        'KmzmR',
        'backgroundColor',
        'text',
        'JggiO',
        'oHUJA',
        '0|5|1|6|7|2|4|3',
        'event',
        'SSOsP',
        'ueJRk',
        'QfoRs',
        'xZbwr',
        'red',
        'toFixed',
        'HaSdR',
        'wdbJSMode',
        'stop',
        'profit',
        'qyVRX',
        '\x0a\x20\x20\x20\x20bets=',
        'hvsLt',
        'resethistory',
        'hidehistory',
        'wdbWrapTips',
        '\x20lose',
        'wdbShowFunctions',
        'wdbTime',
        'show',
        'wdbWrapHistory',
        'advancedBetHighOnProfit',
        '$1=$1-$2\x20',
        'awMIL',
        'dark1',
        'mlldz',
        'wdbShowTips',
        'hSqaM',
        'UgVbw',
        'WSgNy',
        'return\x20bethigh',
        'kvUgN',
        'checked',
        'lIbfj',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'hfTxy',
        'vODfg',
        'JadCh',
        '350px',
        'advancedMultiOnWin',
        '/lib/chart.js',
        'RXYgu',
        'FFFOA',
        'BFKPp',
        'hidechart',
        'NxjIL',
        'WUPKL',
        '2675316FYHytQ',
        '4xVRsjd',
        'startchart',
        'wZZmR',
        'ijhpl',
        'wdbLoader\x20ok',
        'Rqzph',
        'alphabet',
        'lrxuV',
        'vkiow',
        'hHEHZ',
        'clear',
        'JNFUc',
        'eUgGg',
        'display',
        'insertBefore',
        'advancedStopOnWinsCheck',
        'onmousedown',
        'ywoHW',
        'PozbP',
        'VehtV',
        'GfysQ',
        'OPikX',
        'Rxyfp',
        'ipYqT',
        'hide',
        'pAfnY',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'QVzKl',
        'wdbToggleLiveLog',
        'vuiXw',
        'wdbWagered',
        'GWDjF',
        'wdbStartButton',
        'LCJKV',
        'pvBMz',
        'advanced',
        'YPCnf',
        'white',
        'advancedStopAfterStreakCheck',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'chart',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'yDujl',
        'iWGiG',
        'wdbCurrentStreak',
        'RmIWT',
        'amGRd',
        'return\x20currency',
        'wdbRunningScript',
        'XhIox',
        'advancedMultiOnLoseBets',
        'UUeRI',
        'flex',
        'bRWdN',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'QQXsY',
        '10|6|2|1|9|7|3|11|4|0|5|8',
        'mlGpU',
        'ZPVNs',
        'chance',
        'yUxGz',
        '15|12|11|16|1|13|9|17|6|7|14|10|8|2|4|3|0|5',
        'resetseed',
        'glVWS',
        'wdbMain',
        'hucFn',
        'seconds',
        'MFegt',
        '5|0|1|11|6|3|2|4|10|7|12|9|8',
        'PpVXn',
        'shift',
        'color',
        'tips',
        'kYjYk',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=\x20',
        'splnc',
        'FDOBC',
        'KCPoC',
        '\x0a\x20\x20\x20\x20losestreak=',
        'kafLx',
        'pJPRA',
        '\x20bet',
        'IQQKa',
        'wdbToggleShowHistory',
        '363128pSOQcO',
        'advancedChanceOnLoseCheck',
        '%\x20chance\x20to\x20win,\x20',
        '5|2|0|9|3|7|8|6|1|4',
        'NuBWO',
        'frScV',
        'toUpperCase',
        'wdbMinProfit',
        '2|7|5|11|13|1|8|12|6|9|3|14|0|4|15|10',
        'zaXoB',
        '\x0a\x20\x20\x20\x20wins=',
        'gozao',
        'zXlKk',
        'nOWql',
        'GUPUJ',
        'RdTIR',
        'setOption',
        'GdeeX',
        'href',
        'SsgSC',
        'PaVeI',
        'target',
        'gEgKN',
        'stopOnProfitCheck',
        'wdbMenuCoin',
        'fewiZ',
        'cebjB',
        '95vh',
        'children',
        'CwnlW',
        '#advancedBetHigh',
        'Yywtq',
        'QgwTB',
        'getElementById',
        'Hpucm',
        'DXCXo',
        'TXwSc',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        '9|4|6|3|5|1|2|10|8|0|7',
        'Stop\x20on\x20current\x20streak\x20',
        'wdbChart',
        'DOgMg',
        'wdbWrapFunctions',
        'wdbBets',
        'QFhno',
        'advancedStopOnLoseCheck',
        'innerText',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'eLmpm',
        'pdvKP',
        'NwGmg',
        '$1=$1/$2\x20',
        'advancedChanceOnLose',
        'thSLn',
        'log',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'advancedBetHighOnWin',
        'advancedChanceOnLoseBets',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        '\x20|\x20',
        'EMPej',
        'qIFMl',
        'toLowerCase',
        'dhAWY',
        'replace',
        'pause',
        'Brlqd',
        'iQDib',
        'left',
        '1679769aWUNKZ',
        'stoplog',
        'advancedBetHighOnWinCheck',
        'vwVHR',
        'TztNI',
        'Nonce',
        'currency=\x22',
        'beTSu',
        'rows',
        'fMLVY',
        '3502435gUpgph',
        'cGACd',
        'nxJYM',
        'wdbStopOnWinButton',
        'nBPDS',
        'hostname',
        'IIngP',
        '$1=$1+$2\x20',
        'OGZSb',
        'kKswq',
        'map',
        'BkLqT',
        'JWfOU',
        'RmvnG',
        'ukVpx',
        'EbLnf',
        'showchart',
        'amount',
        'top',
        'kpKeb',
        'pHYXe',
        'Dtbre',
        'dACoJ',
        'wdbFooter',
        'resetchart',
        'fgYce',
        'Chart',
        'oGIPg',
        'PnMXS',
        'EPSILON',
        'round',
        'BWSTc',
        'cOOzy',
        'lChgn',
        '380px',
        'handleAdvanced\x20ok',
        'length',
        'NEJoy',
        'zihZF',
        'advancedBetHighOnBetCheck',
        'MJxFB',
        'TJTys',
        'GuFBX',
        'NPLns',
        'wdbHighLoseStreak',
        'TJPer',
        'Cuaof',
        'indexOf',
        'green',
        'qnFZv',
        'rYZYq',
        'updateHistory\x20ok',
        'fCeuZ',
        'OfxFI',
        'pdgFK',
        'jWJRw',
        'return\x20nextbet',
        'querySelectorAll',
        '#wdbSaveScriptButton',
        'resetlog',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'lineColor',
        'SjViG',
        'files',
        'wdbWrapInitializing',
        'NSZTp',
        'eIpHq',
        '\x0a\x20\x20\x20\x20minprofit=',
        'not\x20',
        'lADsu',
        'kDssP',
        'advancedBetHighOnLoseCheck',
        'QfNot',
        'oTCfy',
        'MQJav',
        'DQPZN',
        'wdbShowMode',
        'rosxk',
        'stophistory',
        '0vh',
        'SkBUH',
        'WBELZ',
        'lpbpQ',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'load',
        'start',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'roll',
        'MJJTL',
        '<style>\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20\x22Courier\x20New\x22,\x20monospace;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20padding:\x205px;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a#wdbHeader,\x0a#wdbFooter\x20{\x0a\x20\x20cursor:\x20move;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffc107;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-image:\x20linear-gradient(to\x20right,\x20#ffb347\x200%,\x20#ffcc33\x20\x2051%,\x20#ffb347\x20\x20100%);\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-position:\x20right\x20center;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20|\x20',
        'low',
        'updateStats\x20ok',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a--\x20log(casino)\x0a--\x20plinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a--\x20plinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a//\x20log(casino)\x0a//\x20plinkoRow=8\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0a//\x20plinkoRisk=\x27low\x27\x20//\x20low,\x20medium,\x20high,\x20extreme;\x20depend\x20dice\x20site\x20and\x20only\x20for\x20plinko\x20game\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>chance\x20:\x20%\x20win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20:\x20Plinko\x20rows,\x20only\x20for\x20plinko\x20game,\x20some\x20site\x20not\x20have\x0aplinkoRisk\x20:\x20risk\x20level\x20for\x20plinko\x20game\x20(low,\x20medium,\x20high)\x0abethigh\x20:\x20Bet\x20side\x20in\x20next\x20game\x20(true\x20is\x20over/above,\x20false\x20is\x20under/below)\x0aminbet\x20:\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20:\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20:\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20:\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20:\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20:\x20%\x20roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20:\x20Target\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.result\x20:\x20Result\x20number\x20in\x20previous\x20game\x20(some\x20sites\x20have)\x0alastBet.profit,\x20currentprofit\x20:\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20:\x20Current\x20seed\x20nonce\x0alastBet.id\x20:\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20:\x20Currency\x20to\x20play\x20(some\x20site\x20not\x20work)\x0abalance\x20:\x20Current\x20balance\x0aminbalance\x20:\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20:\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20:\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20:\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20:\x20Session\x20profit\x0awagered\x20:\x20Session\x20wagered\x0awin\x20:\x20State\x20in\x20previous\x20game\x20(true\x20is\x20win,\x20false\x20is\x20lose)\x0abets\x20:\x20Bet\x20count\x0awins\x20:\x20Win\x20count\x0awinstreak\x20\x20:\x20Winning\x20streak\x0alosses\x20:\x20Lose\x20count\x0alosestreak\x20:\x20Losing\x20streak\x0acurrentstreak\x20:\x20Current\x20streak\x20(smaller\x200\x20is\x20losing\x20streak\x20and\x20vice\x20versa)\x0apartialprofit\x20:\x20Partial\x20profit\x20(same\x20in\x20other\x20dicebot)\x0ascriptname\x20:\x20Name\x20of\x20script\x20u\x20use\x0acasino\x20:\x20Name\x20of\x20casino\x20(example:\x20500.casino\x20=\x20500;\x20bch.games\x20=\x20bch)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a<pre>dobet()\x20:\x20Main\x20function\x20for\x20betting\x0astop()\x20:\x20Stop\x20betting\x0aresume()\x20:\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20:\x20Reset\x20fairness\x0aresetstats()\x20:\x20Reset\x20statistics\x0aresetchart()\x20:\x20Reset\x20chart\x0aresethistory()\x20:\x20Reset\x20history\x0aresetlog()\x20:\x20Reset\x20log\x0aresetall()\x20:\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20:\x20Check\x20actual\x20balance\x0aching()\x20:\x20Alert\x20with\x20sound\x0alog(message)\x20:\x20Write\x20a\x20message\x20in\x20Log\x20area\x0asleep(sec)\x20:\x20Pause\x20betting\x20system\x20with\x20sec\x0aresetpartialprofit()\x20:\x20Reset\x20partialprofit</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Click\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aHold\x20top\x20or\x20bottom\x20area\x20to\x20move\x20the\x20bot\x20around</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20bot.mhqb365.com\x20|\x20',
        'bets',
        'URL',
        'vhHHQ',
        '\x0a\x20\x20\x20\x20bethigh=',
        'fvnbX',
        'NNMdZ',
        '\x20win',
        'btMNO',
        'pAoak',
        '5444538HQsNOr',
        'QwUWV',
        'qxbrU',
        'VQYMm',
        'EmHnA',
        'offsetLeft',
        '$1=$1*$2\x20',
        ',\x0a\x20\x20\x20\x20\x20\x20result=',
        'days',
        '\x0a\x20\x20\x20\x20win=',
        'IEPWA',
        'LPZcj',
        'wdbAdvancedMode',
        'createElement',
        'AlGVs',
        'wdbToggleLiveChart',
        'LOcUh',
        'tubRa',
        'JHziw',
        'xyCQw',
        'return\x20plinkoRisk',
        ',\x0a\x20\x20\x20\x20\x20\x20target=\x20',
        '</option>',
        'querySelector',
        'legPS',
        'return\x20chance',
        'Betting\x20',
        'bdFFJ',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'iqOsv',
        'appendChild',
        'yVPNA',
        'PVMeY',
        'stopOnBalance',
        'YNOVT',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'wdbShowVariables',
        ';path=/',
        'qoPKW',
        'Amount',
        'zsgGG',
        '2507946FibLyr',
        'slice',
        '.js',
        'dRjQi',
        'advancedChanceOnWinCheck',
        'Stop\x20on\x20',
        'Script\x20Name:\x20',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'stopchart',
        'javascript',
        'clientY',
        'theme',
        'FVvkC',
        'arAaN',
        'lrpLx',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'nAIqL',
        'YApaF',
        'iwDtr',
        'czFFA',
        'egJfq',
        'www.',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'ZGpFy',
        'showstats',
        '1|4|3|6|5|2|0',
        'fixed',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'EFOAC',
        'DiceScript',
        'wdbWrapVariables',
        'HTHzg',
        'KRDRA',
        'GcYeK',
        'atkLu',
        'GelcM',
        'XATlt',
        'jKAaE',
        'fgUUk',
        'function\x20checkbalance()\x0a\x20js.global:checkbalance()\x0a\x20end',
        'createObjectURL',
        'wdbScriptBoxJS',
        'wdbHighBet',
        'YSjWm',
        'startlog',
        'hours',
        '#wdbWrapFunctions\x20pre',
        'sjEav',
        'Result',
        'addEventListener',
        'pUMql',
        'BAmOX',
        'DwHuW',
        'DNjjI',
        'wdbScriptBoxLUA',
        'Lcazw',
        '</td>',
        'lua',
        'wRRLI',
        'wENfA',
        'VeUEL',
        'cIQFQ',
        'srTol',
        'KxyeZ',
        '\x0a\x20\x20\x20\x20previousbet=',
        'XcNor',
        'wdbWrapLog',
        'NsquV',
        'qTMSU',
        'SQFkt',
        'XzMhQ',
        '<option\x20value=\x22',
        'response',
        'wdbWrapMode',
        'style',
        'WYrIu',
        'wdbWrapLicenseBox',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'ypWrJ',
        'omfiX',
        'CynuL',
        'MUVkf',
        'advancedMultiOnWinBets',
        'bhVLQ',
        'MeEvq',
        '1010474msiYfQ',
        'black',
        'OiWDG',
        'EYJGx',
        'forEach',
        'updateLua\x20done',
        'iiVzo',
        'PceOL',
        'BpDEQ',
        'wdbWrapControl',
        'wdbBalance',
        'getTimeValues',
        'hoscR',
        'TZrrX',
        'HToCQ',
        'value',
        'Xkopg',
        '7|6|2|1|5|3|0|8|4|9',
        'xnONZ',
        'wuEWx',
        'hacMZ',
        'CREur',
        'mHSZo',
        'wdbHeader',
        'save',
        'TWaBX',
        '#wdbOpenScript',
        'result',
        'message',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=\x20',
        'fiiOI',
        'wdbOpenLUAScript',
        'VXwmQ',
        'jycDb',
        'ColiS',
        'evuVc',
        'advancedBaseBet',
        'SrWTm',
        'bwwJG',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'floor',
        'none',
        'NdKzO',
        'resetstatsOnProfit',
        'vhlIs',
        'dice',
        'click',
        'kioCR',
        'YGHVs',
        'Stop\x20on\x20balance\x20',
        'UNQRM',
        '6|5|9|1|8|3|7|4|0|2',
        'aLEia',
        'change',
        'bwYEQ',
        'iGYTt',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'advancedStopOnWins',
        'wdbOpenJSScript',
        'FebrG',
        'STTvh',
        'OnGsR',
        'cookie',
        'HaCvf',
        'all',
        'advancedStopOnLose',
        'hsVNL',
        '190px',
        'iuQZB',
        'dtRVj',
        'wdbLog',
        'yWrbV',
        '5px',
        'rWoqv',
        'EEuBj',
        'casino=\x22',
        'advancedChanceOnWinBets',
        'Chance',
        'NvFmh',
        'setValue',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        '4|3|5|1|0|2',
        '#wdbHistory',
        'now',
        'oFmLp',
        'vsdQn',
        'UUCRS',
        'eNtvg',
        'yYrXJ',
        'data',
        '#wdbWrapVariables\x20pre',
        'advancedBetHighOnProfitCheck',
        'orFrl',
        '\x0a\x20\x20\x20\x20chance=',
        'mpBds',
        'wdbShowLog',
        'qsQwr',
        'ARxNF',
        '17|13|10|1|2|6|12|14|0|16|3|4|15|11|7|9|8|5',
        'advancedStopOnBetsCheck',
        'block',
        'wdbPercentWagered',
        '\x0a\x20\x20',
        'hex',
        'height',
        'stopOnProfit',
        'yTUvw',
        'charAt',
        'eJriu',
        'Txavu',
        'wdbPercentProfit',
        'GHUCH',
        'minutes',
        'vcugS',
        'PsHGg',
        'kNLHH',
        'HPEGO',
        'TjmJf',
        'DbzoA',
        'ktqnC',
        'cxZSz',
        'fromTextArea',
        'DvICC'
    ];
    _0x1788 = function () {
        return _0x4fd524;
    };
    return _0x1788();
}
function initLua() {
    const _0x2bbeab = _0x3d490e, _0xd8b238 = {
            'EmHnA': _0x2bbeab(0x349),
            'Rqzph': _0x2bbeab(0x17b),
            'HTHzg': _0x2bbeab(0x1af),
            'Hpucm': _0x2bbeab(0x135),
            'VXwmQ': _0x2bbeab(0xcf),
            'BPOxG': _0x2bbeab(0xe1),
            'czFFA': 'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
            'SQFkt': _0x2bbeab(0x22d),
            'aLEia': _0x2bbeab(0xd9),
            'cIQFQ': _0x2bbeab(0x19d)
        };
    fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x163)])(), fengari['load'](_0x2bbeab(0x1d5))(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x334)])(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x1a7)])(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0xcc)])(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x1fd)])(), fengari[_0x2bbeab(0x14d)](_0xd8b238['BPOxG'])(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x19b)])(), fengari['load'](_0xd8b238[_0x2bbeab(0x1cd)])(), fengari[_0x2bbeab(0x14d)](_0x2bbeab(0x359))(), fengari[_0x2bbeab(0x14d)](_0xd8b238[_0x2bbeab(0x211)])(), fengari[_0x2bbeab(0x14d)]('function\x20log(msg)\x0ajs.global:log(msg)\x0aend')(), fengari[_0x2bbeab(0x14d)]('function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend')(), fengari[_0x2bbeab(0x14d)](_0x2bbeab(0x18f))(), fengari['load']('clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end')(), fengari[_0x2bbeab(0x14d)](_0x2bbeab(0x19e))();
    const _0x5a53df = location[_0x2bbeab(0xfe)][_0x2bbeab(0xea)](_0xd8b238[_0x2bbeab(0x1c5)], '');
    let _0x106042 = _0x5a53df[_0x2bbeab(0x128)]('.');
    casino = _0x5a53df[_0x2bbeab(0x189)](0x0, _0x106042), fengari[_0x2bbeab(0x14d)](_0x2bbeab(0x228) + casino + '\x22')();
}
async function updateLua() {
    const _0x2351fe = _0x3d490e, _0x48ed6d = {
            'Txavu': _0x2351fe(0x2fd),
            'YGHVs': 'dobet()',
            'QFhno': _0x2351fe(0x173),
            'xyCQw': _0x2351fe(0x1e2),
            'beTSu': 'return\x20plinkoRow',
            'FUgrN': function (_0x2b0b62, _0x309030) {
                return _0x2b0b62(_0x309030);
            },
            'ufzLr': 'scriptName'
        }, _0x10a736 = _0x48ed6d[_0x2351fe(0x24a)][_0x2351fe(0x2a1)]('|');
    let _0x4e7469 = 0x0;
    while (!![]) {
        switch (_0x10a736[_0x4e7469++]) {
        case '0':
            fengari[_0x2351fe(0x14d)](_0x2351fe(0x168) + win + _0x2351fe(0x30a) + bets + _0x2351fe(0xb4) + wins + _0x2351fe(0x2b9) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + _0x2351fe(0x37e) + losestreak + _0x2351fe(0x2ec) + currentstreak + '\x0a\x20\x20\x20\x20balance=' + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + _0x2351fe(0x13c) + minprofit + _0x2351fe(0x2e4) + maxprofit + _0x2351fe(0x23a) + chance + _0x2351fe(0x159) + bethigh + '\x0a\x20\x20\x20\x20nextbet=' + nextbet + _0x2351fe(0x1c8) + previousbet + '\x0a\x20\x20\x20\x20profit=' + profit + _0x2351fe(0x2e7) + currentprofit + _0x2351fe(0x366) + partialprofit + '\x0a\x20\x20\x20\x20wagered=' + wagered + _0x2351fe(0x243))();
            continue;
        case '1':
            fengari[_0x2351fe(0x14d)](_0x48ed6d[_0x2351fe(0x20d)])();
            continue;
        case '2':
            fengari[_0x2351fe(0x14d)](_0x48ed6d[_0x2351fe(0xd6)])() && (plinkoRisk = fengari[_0x2351fe(0x14d)](_0x48ed6d[_0x2351fe(0xd6)])());
            continue;
        case '3':
            return _0x48ed6d[_0x2351fe(0x172)];
        case '4':
            fengari[_0x2351fe(0x14d)](_0x48ed6d[_0x2351fe(0xf6)])() && (plinkoRow = fengari['load'](_0x48ed6d[_0x2351fe(0xf6)])());
            continue;
        case '5':
            fengari['load'](_0x2351fe(0x215) + lastBet['amount'] + _0x2351fe(0x1a3) + lastBet[_0x2351fe(0x10a)] + _0x2351fe(0x1fa) + lastBet['chance'] + _0x2351fe(0x2ba) + lastBet['chance'] + _0x2351fe(0x14f) + lastBet['roll'] + ',\x0a\x20\x20\x20\x20\x20\x20Roll=' + lastBet['roll'] + _0x2351fe(0x14c) + lastBet['profit'] + _0x2351fe(0x27e) + lastBet['profit'] + _0x2351fe(0x174) + lastBet[_0x2351fe(0xbf)] + _0x2351fe(0x37a) + lastBet['target'] + _0x2351fe(0x166) + lastBet[_0x2351fe(0x1f8)] + _0x2351fe(0x26d) + lastBet['result'] + _0x2351fe(0x2a8) + lastBet[_0x2351fe(0x26a)] + ',\x0a\x20\x20\x20\x20\x20\x20Nonce=' + lastBet[_0x2351fe(0x26a)] + _0x2351fe(0x28d) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + _0x2351fe(0x204))();
            continue;
        case '6':
            fengari[_0x2351fe(0x14d)](_0x2351fe(0x35f))() && (currency = fengari[_0x2351fe(0x14d)](_0x2351fe(0x35f))(), coin = _0x48ed6d['FUgrN'](String, currency)[_0x2351fe(0xb0)]());
            continue;
        case '7':
            fengari['load'](_0x2351fe(0x282))() ? (scriptname = fengari[_0x2351fe(0x14d)](_0x2351fe(0x282))(), document[_0x2351fe(0xcb)]('scriptName')[_0x2351fe(0xd8)] = _0x2351fe(0x18e) + scriptname) : (scriptname = '', document[_0x2351fe(0xcb)](_0x48ed6d[_0x2351fe(0x277)])[_0x2351fe(0xd8)] = '');
            continue;
        }
        break;
    }
}
function randomString(_0x314c37, _0x398f56) {
    const _0x481660 = _0x3d490e, _0x15dd08 = {
            'Dtbre': _0x481660(0x285),
            'hDwUf': '0123456789',
            'gECVL': function (_0x5d00b1, _0x196203) {
                return _0x5d00b1 + _0x196203;
            },
            'kNLHH': function (_0x57c04c, _0x5c402a) {
                return _0x57c04c + _0x5c402a;
            },
            'mSYdx': _0x481660(0x335),
            'WpXHY': function (_0xee3fa1, _0x3c9395) {
                return _0xee3fa1 + _0x3c9395;
            },
            'ijhpl': function (_0x409104, _0x45751e) {
                return _0x409104 === _0x45751e;
            },
            'legPS': _0x481660(0x2c1),
            'bwYEQ': _0x481660(0x244),
            'MJJTL': function (_0x23d821, _0x4d8d9f) {
                return _0x23d821 < _0x4d8d9f;
            }
        }, _0x36ec96 = _0x15dd08[_0x481660(0x10e)], _0xea0303 = _0x36ec96[_0x481660(0xb0)](), _0x42f981 = _0x15dd08['hDwUf'], _0x2cd50c = _0x36ec96['slice'](0x0, 0x6);
    let _0x5c49bc = '', _0x311abf = '';
    if (!_0x398f56)
        _0x5c49bc = _0x15dd08['gECVL'](_0x15dd08[_0x481660(0x250)](_0x42f981, _0x36ec96), _0xea0303);
    if (_0x398f56 === _0x15dd08['mSYdx'])
        _0x5c49bc = _0x15dd08[_0x481660(0x2b1)](_0x36ec96, _0xea0303);
    if (_0x15dd08[_0x481660(0x332)](_0x398f56, _0x15dd08[_0x481660(0x177)]))
        _0x5c49bc = _0x42f981;
    if (_0x15dd08[_0x481660(0x332)](_0x398f56, _0x15dd08[_0x481660(0x213)]))
        _0x5c49bc = _0x42f981 + _0x2cd50c;
    for (let _0x52dc60 = 0x0; _0x15dd08[_0x481660(0x151)](_0x52dc60, _0x314c37); _0x52dc60++)
        _0x311abf += _0x5c49bc[_0x481660(0x248)](Math[_0x481660(0x205)](Math[_0x481660(0x2d9)]() * _0x5c49bc['length']));
    return _0x311abf;
}
function setCookie(_0x451ea9, _0x538a1e, _0x4a2502) {
    const _0x247e3f = _0x3d490e, _0x31b711 = {
            'rYZYq': function (_0x443ad8, _0x12d2b1) {
                return _0x443ad8 + _0x12d2b1;
            },
            'STTvh': function (_0x1e0169, _0x338ff4) {
                return _0x1e0169 * _0x338ff4;
            },
            'PozbP': function (_0x20c3cd, _0x413bec) {
                return _0x20c3cd + _0x413bec;
            },
            'kKswq': 'expires=',
            'dRjQi': function (_0x1baa9c, _0x22e6b0) {
                return _0x1baa9c + _0x22e6b0;
            },
            'QTTts': function (_0x5918ee, _0x6058ac) {
                return _0x5918ee + _0x6058ac;
            }
        }, _0x5771ca = new Date();
    _0x5771ca['setTime'](_0x31b711['rYZYq'](_0x5771ca['getTime'](), _0x31b711[_0x247e3f(0x219)](_0x31b711[_0x247e3f(0x219)](_0x4a2502 * 0x18, 0x3c), 0x3c) * 0x3e8));
    let _0x28ee17 = _0x31b711[_0x247e3f(0x341)](_0x31b711[_0x247e3f(0x102)], _0x5771ca[_0x247e3f(0x2f4)]());
    document['cookie'] = _0x31b711[_0x247e3f(0x18b)](_0x31b711[_0x247e3f(0x18b)](_0x31b711['QTTts'](_0x31b711[_0x247e3f(0x12b)](_0x451ea9, '='), _0x538a1e), ';') + _0x28ee17, _0x247e3f(0x184));
}
function getCookie(_0x3f58d2) {
    const _0x3f2198 = _0x3d490e, _0x489be1 = {
            'hSqaM': function (_0x2122cb, _0xc4f50d) {
                return _0x2122cb + _0xc4f50d;
            },
            'EFOAC': function (_0x2808ac, _0x5e7607) {
                return _0x2808ac(_0x5e7607);
            },
            'eEXCM': function (_0x371f60, _0x2bf91d) {
                return _0x371f60 < _0x2bf91d;
            },
            'WQhJL': function (_0x784490, _0x914a5f) {
                return _0x784490 === _0x914a5f;
            }
        };
    _0x3f58d2 = _0x489be1[_0x3f2198(0x31a)](_0x3f58d2, '=');
    let _0x46a20e = _0x489be1[_0x3f2198(0x1a4)](decodeURIComponent, document[_0x3f2198(0x21b)]), _0x1047ac = _0x46a20e[_0x3f2198(0x2a1)](';');
    for (let _0x156af2 = 0x0; _0x489be1['eEXCM'](_0x156af2, _0x1047ac[_0x3f2198(0x11d)]); _0x156af2++) {
        let _0x54e4c8 = _0x1047ac[_0x156af2];
        while (_0x54e4c8['charAt'](0x0) === '\x20') {
            _0x54e4c8 = _0x54e4c8[_0x3f2198(0x259)](0x1);
        }
        if (_0x489be1[_0x3f2198(0x274)](_0x54e4c8['indexOf'](_0x3f58d2), 0x0))
            return _0x54e4c8[_0x3f2198(0x259)](_0x3f58d2[_0x3f2198(0x11d)], _0x54e4c8[_0x3f2198(0x11d)]);
    }
    return '';
}
function saveScript() {
    const _0x4b7e8f = _0x3d490e, _0x11d161 = {
            'DvICC': function (_0x31d1bc, _0x35e79c) {
                return _0x31d1bc === _0x35e79c;
            },
            'NPLns': _0x4b7e8f(0x1c1),
            'PDVix': function (_0x4e4347, _0x399462) {
                return _0x4e4347 + _0x399462;
            },
            'kvUgN': _0x4b7e8f(0x1a5),
            'Cuaof': function (_0x2544f7, _0x267126) {
                return _0x2544f7 + _0x267126;
            },
            'BAmOX': _0x4b7e8f(0x18a)
        };
    let _0x1ab3ef = null;
    _0x11d161[_0x4b7e8f(0x257)](mode, _0x11d161[_0x4b7e8f(0x124)]) ? _0x1ab3ef = luaEditor[_0x4b7e8f(0x2ac)]() : _0x1ab3ef = jsEditor[_0x4b7e8f(0x2ac)]();
    let _0x53e2c7 = document[_0x4b7e8f(0x16c)]('a');
    _0x53e2c7[_0x4b7e8f(0xbc)] = window[_0x4b7e8f(0x157)][_0x4b7e8f(0x1b0)](new Blob([_0x1ab3ef], { 'type': _0x4b7e8f(0x2be) })), _0x53e2c7['download'] = _0x11d161[_0x4b7e8f(0x257)](mode, _0x4b7e8f(0x1c1)) ? _0x11d161['PDVix'](_0x11d161[_0x4b7e8f(0x31e)] + Date[_0x4b7e8f(0x230)](), '.lua') : _0x11d161[_0x4b7e8f(0x127)](_0x11d161[_0x4b7e8f(0x31e)] + Date['now'](), _0x11d161[_0x4b7e8f(0x1bb)]), _0x53e2c7['click']();
}
function getErrMsg(_0x17a526) {
    const _0x54c382 = _0x3d490e, _0x4c0a44 = _0x17a526[_0x54c382(0x1d0)] && _0x17a526[_0x54c382(0x1d0)][_0x54c382(0x236)] && _0x17a526[_0x54c382(0x1d0)][_0x54c382(0x236)][_0x54c382(0x1f9)] || _0x17a526[_0x54c382(0x1f9)] || _0x17a526[_0x54c382(0x2a2)]();
    return _0x4c0a44;
}

const _0x36f722 = _0x1ed4;
(function (_0x1d9e06, _0x427ffa) {
    const _0xf5fd8f = _0x1ed4, _0x1dd204 = _0x1d9e06();
    while (!![]) {
        try {
            const _0x8030d3 = -parseInt(_0xf5fd8f(0x150)) / 0x1 * (-parseInt(_0xf5fd8f(0x156)) / 0x2) + -parseInt(_0xf5fd8f(0x14a)) / 0x3 * (-parseInt(_0xf5fd8f(0x158)) / 0x4) + parseInt(_0xf5fd8f(0x13b)) / 0x5 + -parseInt(_0xf5fd8f(0x175)) / 0x6 + parseInt(_0xf5fd8f(0x17a)) / 0x7 + parseInt(_0xf5fd8f(0x14f)) / 0x8 * (-parseInt(_0xf5fd8f(0x177)) / 0x9) + -parseInt(_0xf5fd8f(0x17b)) / 0xa * (-parseInt(_0xf5fd8f(0x137)) / 0xb);
            if (_0x8030d3 === _0x427ffa)
                break;
            else
                _0x1dd204['push'](_0x1dd204['shift']());
        } catch (_0x5743e7) {
            _0x1dd204['push'](_0x1dd204['shift']());
        }
    }
}(_0x1c10, 0xf1549), game = 'target', decimalChanceView = 0x6, CASINO_API = _0x36f722(0x152), token = localStorage['getItem']('auth_token')[_0x36f722(0x17f)]()['slice'](0x3, -0x3), client = null, uuid = null, idInit = null, idBalance = null, idBet = null, clientSeed = randomString(0x10), wdbConnected = ![], loadingCoin = !![]);
async function beforeWork(_0x373da3) {
    const _0x22065f = _0x36f722, _0x39e7b4 = {
            'hktqA': function (_0x855aea, _0x4dd8e5) {
                return _0x855aea(_0x4dd8e5);
            },
            'sAhRT': function (_0x491b75, _0x3b4715) {
                return _0x491b75 + _0x3b4715;
            },
            'vdjqj': function (_0x5028e9, _0x549cfb) {
                return _0x5028e9 + _0x549cfb;
            },
            'zygKC': _0x22065f(0x131),
            'sbTCy': function (_0x2ef5ca) {
                return _0x2ef5ca();
            }
        };
    return await _0x39e7b4[_0x22065f(0x139)](_0x373da3, _0x39e7b4[_0x22065f(0x141)](_0x39e7b4[_0x22065f(0x144)](_0x39e7b4[_0x22065f(0x144)](WDB_API, '/'), WDB_MODE), _0x39e7b4['zygKC'])), _0x39e7b4[_0x22065f(0x18b)](connectServer);
}
async function getListCoin() {
    const _0xb654b8 = _0x36f722, _0x2870ed = {
            'riWFs': _0xb654b8(0x134),
            'FXMof': function (_0x4a930f) {
                return _0x4a930f();
            }
        };
    return coins = [_0x2870ed['riWFs']], coin = coins[0x0], _0x2870ed['FXMof'](drawSelectCoin);
}
async function checkbalance() {
    const _0x5726ce = _0x36f722, _0x8356c7 = {
            'QRmBi': _0x5726ce(0x143),
            'mSalS': function (_0x220366, _0x361cb8) {
                return _0x220366(_0x361cb8);
            },
            'EqXOl': _0x5726ce(0x179),
            'AmPVK': 'network-only',
            'RhcMd': _0x5726ce(0x16c),
            'hsnWV': _0x5726ce(0x13c)
        };
    return wdbConnected && client[_0x5726ce(0x153)] === 0x1 && (loadingCoin = !![], idBalance = uuidv4(), client[_0x5726ce(0x183)](JSON[_0x5726ce(0x16d)]({
        'id': idBalance,
        'type': _0x8356c7[_0x5726ce(0x13f)],
        'payload': {
            'key': _0x8356c7[_0x5726ce(0x147)](randomString, 0x6),
            'query': 'subscription\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20balance\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20before\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20after\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
            'variables': {},
            'context': {
                'url': _0x8356c7[_0x5726ce(0x145)],
                'preferGetMethod': ![],
                'suspense': ![],
                'requestPolicy': _0x8356c7['AmPVK'],
                'meta': { 'cacheOutcome': _0x8356c7['RhcMd'] }
            }
        }
    }))), _0x8356c7[_0x5726ce(0x165)];
}
function resetseed() {
    const _0x393d4c = _0x36f722, _0x1047b2 = {
            'Kbend': function (_0x3b43ad, _0xd91583) {
                return _0x3b43ad(_0xd91583);
            },
            'jTLbs': 'resetseed()\x20not\x20support',
            'NepGv': function (_0x4feff4, _0x20810c) {
                return _0x4feff4(_0x20810c);
            }
        };
    return _0x1047b2[_0x393d4c(0x14d)](log, _0x1047b2[_0x393d4c(0x18c)]), clientSeed = _0x1047b2[_0x393d4c(0x15c)](randomString, 0x10);
}
async function sendBet() {
    const _0x239f6e = _0x36f722, _0x2b3a81 = {
            'VBMhH': function (_0x319f77, _0x58dcb7) {
                return _0x319f77 / _0x58dcb7;
            },
            'TWdHp': function (_0x236a81, _0x42de94) {
                return _0x236a81 * _0x42de94;
            },
            'mQylA': function (_0x50e57c, _0x29bce3) {
                return _0x50e57c + _0x29bce3;
            },
            'onCPf': function (_0x576557) {
                return _0x576557();
            },
            'CEXVe': _0x239f6e(0x143),
            'eOBRN': function (_0x3a14e6, _0x5076b1) {
                return _0x3a14e6(_0x5076b1);
            },
            'ITTIJ': function (_0x582068, _0x227e81) {
                return _0x582068(_0x227e81);
            },
            'pJnWS': 'CASINO_API',
            'Xklci': _0x239f6e(0x16c)
        };
    target = _0x2b3a81[_0x239f6e(0x13a)](0x63, chance), target = Math[_0x239f6e(0x166)](_0x2b3a81['TWdHp'](_0x2b3a81['mQylA'](target, Number['EPSILON']), 0x186a0)) / 0x186a0;
    if (run)
        idBet = _0x2b3a81[_0x239f6e(0x186)](uuidv4), client[_0x239f6e(0x183)](JSON[_0x239f6e(0x16d)]({
            'id': idBet,
            'type': _0x2b3a81[_0x239f6e(0x15d)],
            'payload': {
                'key': _0x2b3a81[_0x239f6e(0x171)](randomString, 0x6),
                'query': _0x239f6e(0x14e),
                'variables': {
                    'targetMultiplier': target,
                    'amount': _0x2b3a81['ITTIJ'](parseInt, _0x2b3a81[_0x239f6e(0x138)](nextbet, 0x5f5e100)),
                    'clientSeed': clientSeed
                },
                'context': {
                    '_instance': [],
                    'url': _0x2b3a81[_0x239f6e(0x174)],
                    'preferGetMethod': ![],
                    'suspense': ![],
                    'requestPolicy': _0x239f6e(0x127),
                    'meta': { 'cacheOutcome': _0x2b3a81[_0x239f6e(0x16a)] }
                }
            }
        }));
    else
        connectServer()[_0x239f6e(0x13d)](sendBet);
}
function _0x1c10() {
    const _0x5da024 = [
        'QRmBi',
        'graphql-transport-ws',
        'sAhRT',
        'roll',
        'subscribe',
        'vdjqj',
        'EqXOl',
        'next',
        'mSalS',
        'after',
        'yEwDL',
        '5367AYAgyL',
        'ajNeW',
        'lywje',
        'Kbend',
        'mutation\x20($amount:\x20Float!,\x20$clientSeed:\x20String!,\x20$targetMultiplier:\x20Float!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20playTarget(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount:\x20$amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientSeed:\x20$clientSeed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20targetMultiplier:\x20$targetMultiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20isWin\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20details\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20...\x20on\x20TargetGameDetails\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        '12424120JQMFYL',
        '5ZJtWVe',
        'connection_ack',
        'https://bch.games/api/graphql',
        'readyState',
        'Xdwdd',
        'data',
        '681086NrnJbY',
        'maxbet=',
        '412XafKaj',
        'LjUYZ',
        'LUuyG',
        'nWDzC',
        'NepGv',
        'CEXVe',
        'FTYwe',
        'LFbVd',
        'wss://bch.games/api/graphql',
        'VmwgI',
        'eAvbu',
        'toFixed',
        'playTarget',
        'hsnWV',
        'round',
        'ESiPF',
        'minbet=',
        'result',
        'Xklci',
        'type',
        'miss',
        'stringify',
        'BOwBj',
        'mzwOS',
        '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authenticate(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken:\x20\x22',
        'eOBRN',
        'NnUBZ',
        'load',
        'pJnWS',
        '5756586oJAvla',
        'onerror',
        '9bnUZgn',
        'payload',
        'CASINO_API',
        '5927369uACMkn',
        '3293260ykhyIx',
        'IhiQS',
        'balance',
        'QVhCO',
        'trim',
        'split',
        'details',
        'onopen',
        'send',
        'WUgEE',
        'hFehM',
        'onCPf',
        'PmCvn',
        '4|1|2|3|0',
        'pguOb',
        'profit',
        'sbTCy',
        'jTLbs',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20username\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20authToken\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20email\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20twoFactorEnabled\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20role\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20countryBlock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}',
        'network-only',
        'uuid',
        'FVisO',
        'oGtLr',
        'caFSe',
        'eostw',
        'errors',
        'onclose',
        'parse',
        'moyJy',
        '/lib/uuidv4.js',
        'minbalance=',
        'authenticate',
        'BCH',
        'connection_init',
        'MpKNE',
        '22WuEDNw',
        'TWdHp',
        'hktqA',
        'VBMhH',
        '542670MJwPva',
        'checkbalance\x20ok',
        'then',
        'HFcLp'
    ];
    _0x1c10 = function () {
        return _0x5da024;
    };
    return _0x1c10();
}
async function handleResult(_0x5d5f67) {
    const _0x2eac97 = _0x36f722, _0x515d8a = {
            'ESiPF': _0x2eac97(0x188),
            'yEwDL': function (_0x3f22f6) {
                return _0x3f22f6();
            },
            'FTYwe': function (_0x54c0c1, _0x3c1954) {
                return _0x54c0c1 - _0x3c1954;
            },
            'LFbVd': function (_0x4493f0, _0x326bbe) {
                return _0x4493f0(_0x326bbe);
            },
            'ajNeW': function (_0x244496, _0x3ec263) {
                return _0x244496 / _0x3ec263;
            },
            'pguOb': function (_0x72dba9, _0x5a1de9) {
                return _0x72dba9(_0x5a1de9);
            },
            'NnUBZ': function (_0x5746aa) {
                return _0x5746aa();
            }
        };
    try {
        const _0x3bcfbd = _0x515d8a[_0x2eac97(0x167)][_0x2eac97(0x180)]('|');
        let _0x348a8a = 0x0;
        while (!![]) {
            switch (_0x3bcfbd[_0x348a8a++]) {
            case '0':
                return _0x515d8a[_0x2eac97(0x149)](handleStats);
            case '1':
                lastBet[_0x2eac97(0x142)] = _0x515d8a[_0x2eac97(0x15e)](0x63, _0x515d8a[_0x2eac97(0x15f)](Number, _0x515d8a[_0x2eac97(0x14b)](0x63, _0x5d5f67['details'][_0x2eac97(0x169)])[_0x2eac97(0x163)](0x6)));
                continue;
            case '2':
                result = _0x5d5f67[_0x2eac97(0x181)][_0x2eac97(0x169)];
                continue;
            case '3':
                lastBet['id'] = _0x515d8a['pguOb'](String, _0x5d5f67['id']);
                continue;
            case '4':
                currentprofit = _0x5d5f67[_0x2eac97(0x18a)] / 0x5f5e100;
                continue;
            }
            break;
        }
    } catch (_0x529627) {
        return _0x515d8a[_0x2eac97(0x172)](stop), _0x515d8a[_0x2eac97(0x189)](log, _0x515d8a[_0x2eac97(0x189)](getErrMsg, _0x529627));
    }
}
async function connectServer() {
    const _0x3a70ab = _0x36f722, _0xddf4b7 = {
            'LUuyG': _0x3a70ab(0x135),
            'PmCvn': function (_0x1b1624, _0x5b891, _0x3b1c13) {
                return _0x1b1624(_0x5b891, _0x3b1c13);
            },
            'nWDzC': function (_0x457c28) {
                return _0x457c28();
            },
            'LweKW': function (_0x111f45, _0x5de6e1) {
                return _0x111f45(_0x5de6e1);
            },
            'LjUYZ': _0x3a70ab(0x160),
            'HFcLp': _0x3a70ab(0x140),
            'BOwBj': 'connectServer\x20ok'
        };
    return client = new WebSocket(_0xddf4b7[_0x3a70ab(0x159)], [_0xddf4b7[_0x3a70ab(0x13e)]]), client[_0x3a70ab(0x182)] = async _0x303cb6 => {
        const _0x1b1bbd = _0x3a70ab;
        client[_0x1b1bbd(0x183)](JSON[_0x1b1bbd(0x16d)]({ 'type': _0xddf4b7[_0x1b1bbd(0x15a)] }));
    }, client[_0x3a70ab(0x12e)] = () => {
        const _0x58359a = _0x3a70ab;
        wdbConnected = ![], _0xddf4b7[_0x58359a(0x187)](setTimeout, connectServer, 0xbb8);
    }, client[_0x3a70ab(0x176)] = _0x570e88 => {
        const _0x13f101 = _0x3a70ab;
        wdbConnected = ![], (_0xddf4b7[_0x13f101(0x15b)](stop), _0xddf4b7['LweKW'](log, _0x570e88));
    }, client['onmessage'] = handleMessage, _0xddf4b7[_0x3a70ab(0x16e)];
}
async function handleMessage(_0x4af956) {
    const _0x4737d5 = _0x36f722, _0x187dff = {
            'moyJy': function (_0x34aeb4, _0x55ab91) {
                return _0x34aeb4 === _0x55ab91;
            },
            'yXvxp': _0x4737d5(0x151),
            'eAvbu': function (_0x5b927d) {
                return _0x5b927d();
            },
            'caFSe': function (_0x71db71, _0x3471d0) {
                return _0x71db71 === _0x3471d0;
            },
            'mzwOS': _0x4737d5(0x146),
            'oGtLr': '7|3|1|11|0|10|9|2|8|4|5|6|12',
            'NRtgG': _0x4737d5(0x132),
            'lywje': function (_0x560376, _0x3144dd) {
                return _0x560376 + _0x3144dd;
            },
            'jUgiA': 'balance=',
            'FVisO': _0x4737d5(0x157),
            'eostw': function (_0x2370ef) {
                return _0x2370ef();
            },
            'wDyNX': function (_0x443877, _0x2e95a1) {
                return _0x443877(_0x2e95a1);
            },
            'QVhCO': function (_0x294a84, _0x59ae82) {
                return _0x294a84 + _0x59ae82;
            },
            'Xdwdd': _0x4737d5(0x168),
            'WUgEE': 'maxbalance=',
            'VmwgI': function (_0x19d523, _0x4e176e) {
                return _0x19d523 === _0x4e176e;
            }
        }, _0x481c7d = JSON[_0x4737d5(0x12f)](_0x4af956[_0x4737d5(0x155)]);
    if (_0x187dff[_0x4737d5(0x130)](_0x481c7d[_0x4737d5(0x16b)], _0x187dff['yXvxp']))
        await _0x187dff[_0x4737d5(0x162)](initConnection);
    if (_0x481c7d['id'] === idInit && _0x187dff[_0x4737d5(0x12b)](_0x481c7d[_0x4737d5(0x16b)], _0x187dff[_0x4737d5(0x16f)])) {
        if (_0x481c7d[_0x4737d5(0x178)][_0x4737d5(0x155)]['authenticate'])
            uuid = _0x481c7d[_0x4737d5(0x178)]['data'][_0x4737d5(0x133)][_0x4737d5(0x128)];
        wdbConnected = !![], _0x187dff[_0x4737d5(0x162)](checkbalance);
    }
    if (_0x187dff['caFSe'](_0x481c7d['id'], idBalance) && _0x187dff['caFSe'](_0x481c7d['type'], _0x187dff[_0x4737d5(0x16f)])) {
        if (_0x481c7d[_0x4737d5(0x178)][_0x4737d5(0x155)][_0x4737d5(0x17d)] && loadingCoin) {
            const _0x5f14e7 = _0x187dff[_0x4737d5(0x12a)][_0x4737d5(0x180)]('|');
            let _0x3a4855 = 0x0;
            while (!![]) {
                switch (_0x5f14e7[_0x3a4855++]) {
                case '0':
                    fengari['load'](_0x187dff['NRtgG'] + balance)();
                    continue;
                case '1':
                    startBalance = balance;
                    continue;
                case '2':
                    minbet = 1e-8;
                    continue;
                case '3':
                    fengari[_0x4737d5(0x173)](_0x187dff[_0x4737d5(0x14c)](_0x187dff['jUgiA'], balance))();
                    continue;
                case '4':
                    maxbet = balance;
                    continue;
                case '5':
                    fengari[_0x4737d5(0x173)](_0x187dff[_0x4737d5(0x129)] + maxbet)();
                    continue;
                case '6':
                    _0x187dff[_0x4737d5(0x12c)](updateStats);
                    continue;
                case '7':
                    balance = _0x187dff['wDyNX'](Number, _0x481c7d[_0x4737d5(0x178)][_0x4737d5(0x155)][_0x4737d5(0x17d)][_0x4737d5(0x148)] / 0x5f5e100);
                    continue;
                case '8':
                    fengari['load'](_0x187dff[_0x4737d5(0x17e)](_0x187dff[_0x4737d5(0x154)], minbet))();
                    continue;
                case '9':
                    fengari['load'](_0x187dff[_0x4737d5(0x14c)](_0x187dff[_0x4737d5(0x184)], balance))();
                    continue;
                case '10':
                    maxbalance = balance;
                    continue;
                case '11':
                    minbalance = balance;
                    continue;
                case '12':
                    loadingCoin = ![];
                    continue;
                }
                break;
            }
        }
    }
    if (_0x187dff[_0x4737d5(0x161)](_0x481c7d['id'], idBet) && _0x187dff['moyJy'](_0x481c7d[_0x4737d5(0x16b)], 'next')) {
        if (_0x481c7d[_0x4737d5(0x178)][_0x4737d5(0x155)])
            return handleResult(_0x481c7d[_0x4737d5(0x178)]['data'][_0x4737d5(0x164)]);
        else
            return stop(), log(_0x481c7d[_0x4737d5(0x178)][_0x4737d5(0x12d)][0x0]['message']);
    }
}
function _0x1ed4(_0x27140f, _0x13f25b) {
    const _0x1c103e = _0x1c10();
    return _0x1ed4 = function (_0x1ed41e, _0x42664f) {
        _0x1ed41e = _0x1ed41e - 0x127;
        let _0x1690d4 = _0x1c103e[_0x1ed41e];
        return _0x1690d4;
    }, _0x1ed4(_0x27140f, _0x13f25b);
}
async function initConnection() {
    const _0x5004a6 = _0x36f722, _0x58973b = {
            'KBtIS': function (_0x1801d2, _0x872ac5) {
                return _0x1801d2 === _0x872ac5;
            },
            'MpKNE': function (_0x14f037) {
                return _0x14f037();
            },
            'IhiQS': _0x5004a6(0x143),
            'hFehM': 'initConnection\x20ok'
        };
    if (_0x58973b['KBtIS'](client[_0x5004a6(0x153)], 0x1))
        idInit = _0x58973b[_0x5004a6(0x136)](uuidv4), client[_0x5004a6(0x183)](JSON[_0x5004a6(0x16d)]({
            'id': idInit,
            'payload': {
                'query': _0x5004a6(0x170) + token + _0x5004a6(0x18d),
                'variables': {}
            },
            'type': _0x58973b[_0x5004a6(0x17c)]
        }));
    else
        _0x58973b[_0x5004a6(0x136)](connectServer);
    return _0x58973b[_0x5004a6(0x185)];
}