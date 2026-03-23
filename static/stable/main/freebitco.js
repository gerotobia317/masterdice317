const _0x4dbf1d = _0x3736;
(function (_0x2ef8a1, _0x228f21) {
    const _0x3870c4 = _0x3736, _0x110037 = _0x2ef8a1();
    while (!![]) {
        try {
            const _0x184def = -parseInt(_0x3870c4(0x338)) / 0x1 * (-parseInt(_0x3870c4(0x354)) / 0x2) + -parseInt(_0x3870c4(0x3bd)) / 0x3 * (-parseInt(_0x3870c4(0x156)) / 0x4) + parseInt(_0x3870c4(0x205)) / 0x5 + -parseInt(_0x3870c4(0x259)) / 0x6 * (parseInt(_0x3870c4(0x13b)) / 0x7) + -parseInt(_0x3870c4(0x124)) / 0x8 + parseInt(_0x3870c4(0x2e7)) / 0x9 + parseInt(_0x3870c4(0x200)) / 0xa;
            if (_0x184def === _0x228f21)
                break;
            else
                _0x110037['push'](_0x110037['shift']());
        } catch (_0x2f34b7) {
            _0x110037['push'](_0x110037['shift']());
        }
    }
}(_0x23ec, 0x802ab), Object[_0x4dbf1d(0x355)](String[_0x4dbf1d(0x2fc)], _0x4dbf1d(0x3a8), {
    'value': function () {
        const _0x1a4fbb = _0x4dbf1d, _0x29091b = {
                'qwQRd': function (_0x4002ca, _0x584f1b) {
                    return _0x4002ca + _0x584f1b;
                }
            };
        return _0x29091b['qwQRd'](this[_0x1a4fbb(0x361)](0x0)['toUpperCase'](), this['slice'](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = 'lua', game = _0x4dbf1d(0x134), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x4dbf1d(0x21c), kenoRisk = _0x4dbf1d(0x1b5), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x4dbf1d(0x284), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': 'between',
    'BetSide': _0x4dbf1d(0x284),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x4dbf1d(0x25a))), wdbUI = _0x4dbf1d(0x1d0) + WDB_MODE + '\x20|\x20' + CASINO_GAME + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + WDB_HOME + _0x4dbf1d(0x3b3) + location['hostname'][_0x4dbf1d(0x402)](_0x4dbf1d(0x384), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = _0x4dbf1d(0x24f), rangediceJsScript = _0x4dbf1d(0x184), plinkoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', plinkoJsScript = _0x4dbf1d(0x366), kenoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', kenoJsScript = _0x4dbf1d(0x324);
function exportLog() {
    const _0xdb59fa = _0x4dbf1d, _0x35c447 = JSON['stringify'](fullLogs), _0x3b57ef = document[_0xdb59fa(0x1fd)]('a');
    _0x3b57ef[_0xdb59fa(0x1f5)] = window['URL'][_0xdb59fa(0x1e8)](new Blob([_0x35c447], { 'type': _0xdb59fa(0x1f9) })), _0x3b57ef[_0xdb59fa(0x105)] = _0xdb59fa(0x24b) + Date[_0xdb59fa(0x39a)]()['toString']()[_0xdb59fa(0x31f)](-0x6) + _0xdb59fa(0x3bc), _0x3b57ef[_0xdb59fa(0x1fe)]();
}
class Chart {
    constructor(_0xe8b7e0, _0x319a97 = ![], _0x1013e9 = 0x64) {
        const _0xae364e = _0x4dbf1d, _0x5f00e8 = {
                'okVaV': _0xae364e(0x3de),
                'nHmII': _0xae364e(0x392)
            }, _0x3665e8 = _0x5f00e8[_0xae364e(0x126)][_0xae364e(0x15f)]('|');
        let _0x419471 = 0x0;
        while (!![]) {
            switch (_0x3665e8[_0x419471++]) {
            case '0':
                this['_darkMode'] = _0x319a97;
                continue;
            case '1':
                this[_0xae364e(0x2e1)] = _0xe8b7e0;
                continue;
            case '2':
                this[_0xae364e(0x2cd)] = new CanvasJS[(_0xae364e(0x196))](_0xe8b7e0, {
                    'theme': _0x319a97 ? _0x5f00e8[_0xae364e(0x395)] : _0xae364e(0x294),
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': 'line',
                            'markerSize': 0x0,
                            'dataPoints': this[_0xae364e(0x21a)]
                        }]
                });
                continue;
            case '3':
                this[_0xae364e(0x2cd)][_0xae364e(0x15e)]();
                continue;
            case '4':
                this[_0xae364e(0x21a)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '5':
                this[_0xae364e(0x1a8)] = _0x1013e9;
                continue;
            }
            break;
        }
    }
    set ['maxRows'](_0x3a95ca) {
        const _0xe3e1c6 = _0x4dbf1d;
        this[_0xe3e1c6(0x1a8)] = _0x3a95ca;
    }
    get [_0x4dbf1d(0x36d)]() {
        return this['_maxRows'];
    }
    set [_0x4dbf1d(0x30d)](_0x3b11de) {
        const _0x56939b = _0x4dbf1d, _0x549988 = { 'clBew': _0x56939b(0x392) };
        this[_0x56939b(0x179)] = _0x3b11de, this['chart'][_0x56939b(0x18a)][_0x56939b(0x3c7)] = _0x3b11de ? _0x549988[_0x56939b(0x2a6)] : _0x56939b(0x294), this[_0x56939b(0x2cd)][_0x56939b(0x15e)]();
    }
    get ['darkMode']() {
        const _0x1b2273 = _0x4dbf1d;
        return this[_0x1b2273(0x179)];
    }
    [_0x4dbf1d(0x261)](_0x58e832, _0x59dc23, _0x2b022b) {
        const _0x287a5c = _0x4dbf1d, _0x2e1487 = {
                'KjVlh': function (_0x548c47, _0x28fcfa) {
                    return _0x548c47 > _0x28fcfa;
                },
                'Ilxiq': function (_0x5e64c3, _0xb6894d) {
                    return _0x5e64c3 - _0xb6894d;
                }
            };
        this[_0x287a5c(0x21a)]['push']({
            'x': _0x58e832,
            'y': _0x59dc23,
            'lineColor': _0x2b022b
        });
        if (_0x2e1487[_0x287a5c(0x3f9)](this[_0x287a5c(0x21a)]['length'], this['_maxRows']))
            this[_0x287a5c(0x21a)][_0x287a5c(0x113)]();
        if (this[_0x287a5c(0x21a)][_0x2e1487[_0x287a5c(0x1d7)](this[_0x287a5c(0x21a)][_0x287a5c(0x212)], 0x2)])
            this[_0x287a5c(0x21a)][_0x2e1487[_0x287a5c(0x1d7)](this['dps'][_0x287a5c(0x212)], 0x2)][_0x287a5c(0x29a)] = _0x2b022b;
        this[_0x287a5c(0x2cd)][_0x287a5c(0x15e)]();
    }
    [_0x4dbf1d(0x17f)]() {
        const _0x10aa23 = _0x4dbf1d;
        this[_0x10aa23(0x21a)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x10aa23(0x2cd)][_0x10aa23(0x18a)][_0x10aa23(0x17a)][0x0][_0x10aa23(0x3b5)] = this[_0x10aa23(0x21a)], this[_0x10aa23(0x2cd)][_0x10aa23(0x15e)]();
    }
}
function changeMaxRows() {
    const _0x24285b = _0x4dbf1d, _0x47f333 = {
            'xKwrA': _0x24285b(0x288),
            'aLfaO': function (_0x2eb288) {
                return _0x2eb288();
            },
            'qMWqC': _0x24285b(0x37b),
            'NwBPh': function (_0x42c4d4) {
                return _0x42c4d4();
            }
        }, _0x320b22 = _0x47f333[_0x24285b(0x374)][_0x24285b(0x15f)]('|');
    let _0x27a45d = 0x0;
    while (!![]) {
        switch (_0x320b22[_0x27a45d++]) {
        case '0':
            _0x47f333['aLfaO'](resethistory);
            continue;
        case '1':
            resetchart();
            continue;
        case '2':
            chart[_0x24285b(0x36d)] = maxRows;
            continue;
        case '3':
            maxRows = Number(document[_0x24285b(0x1bf)](_0x47f333[_0x24285b(0x314)])[_0x24285b(0x202)]);
            continue;
        case '4':
            _0x47f333[_0x24285b(0x3db)](resetlog);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x357bfd = _0x4dbf1d, _0x37bf45 = {
            'HKirW': _0x357bfd(0x279),
            'XnRlQ': '#fff',
            'iWDBf': _0x357bfd(0x2e4),
            'weJMm': 'wdb',
            'ALSZu': 'wdbHeader',
            'EIneb': '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
            'fLsGg': _0x357bfd(0x3ba),
            'DDSJe': _0x357bfd(0x1b6),
            'GBJng': _0x357bfd(0x3c7),
            'fGGLm': _0x357bfd(0x219),
            'gTjkU': _0x357bfd(0x1cc),
            'bWUnV': function (_0x27387e) {
                return _0x27387e();
            }
        };
    darkMode = !darkMode, chart[_0x357bfd(0x30d)] = darkMode;
    const _0x1eef3d = document[_0x357bfd(0x1bf)](_0x37bf45['weJMm']), _0x436033 = document[_0x357bfd(0x1bf)](_0x37bf45['ALSZu']), _0x2e59e6 = document['querySelectorAll'](_0x357bfd(0x208)), _0x118f92 = document['querySelectorAll'](_0x37bf45[_0x357bfd(0x266)]), _0x4d0037 = document[_0x357bfd(0x2e5)](_0x37bf45[_0x357bfd(0x300)]);
    darkMode ? (_0x1eef3d['style'][_0x357bfd(0x2aa)] = _0x37bf45[_0x357bfd(0x28e)], _0x1eef3d[_0x357bfd(0x1c0)][_0x357bfd(0x1bc)] = '#fff', _0x1eef3d[_0x357bfd(0x1c0)][_0x357bfd(0x12d)] = _0x37bf45[_0x357bfd(0x28e)], _0x436033[_0x357bfd(0x1c0)][_0x357bfd(0x2aa)] = _0x37bf45[_0x357bfd(0x29c)], luaEditor[_0x357bfd(0x1ce)]('theme', 'darcula'), jsEditor[_0x357bfd(0x1ce)](_0x37bf45[_0x357bfd(0x35f)], _0x357bfd(0x3a1)), _0x2e59e6[_0x357bfd(0x399)](_0x4817dd => {
        const _0x16e6a2 = _0x357bfd;
        _0x4817dd[_0x16e6a2(0x1c0)][_0x16e6a2(0x2aa)] = _0x37bf45[_0x16e6a2(0x28e)], _0x4817dd['style'][_0x16e6a2(0x1bc)] = _0x37bf45[_0x16e6a2(0x29e)];
    }), _0x118f92['forEach'](_0x587432 => _0x587432[_0x357bfd(0x1c0)][_0x357bfd(0x1bc)] = _0x357bfd(0x1df)), _0x4d0037[_0x357bfd(0x399)](_0x1eced8 => _0x1eced8[_0x357bfd(0x1c0)][_0x357bfd(0x1bc)] = _0x357bfd(0x1df))) : (_0x1eef3d['style'][_0x357bfd(0x2aa)] = _0x37bf45[_0x357bfd(0x29e)], _0x1eef3d[_0x357bfd(0x1c0)][_0x357bfd(0x1bc)] = '#000', _0x1eef3d['style'][_0x357bfd(0x12d)] = _0x37bf45[_0x357bfd(0x29e)], _0x436033['style'][_0x357bfd(0x2aa)] = _0x37bf45[_0x357bfd(0x325)], luaEditor['setOption']('theme', _0x37bf45[_0x357bfd(0x3f2)]), jsEditor[_0x357bfd(0x1ce)](_0x37bf45[_0x357bfd(0x35f)], _0x37bf45['gTjkU']), _0x2e59e6['forEach'](_0x183e25 => {
        const _0x10d406 = _0x357bfd;
        _0x183e25[_0x10d406(0x1c0)][_0x10d406(0x2aa)] = _0x37bf45['XnRlQ'], _0x183e25[_0x10d406(0x1c0)][_0x10d406(0x1bc)] = _0x37bf45[_0x10d406(0x2eb)];
    }), _0x118f92[_0x357bfd(0x399)](_0x107d6f => _0x107d6f[_0x357bfd(0x1c0)][_0x357bfd(0x1bc)] = '#000'), _0x4d0037[_0x357bfd(0x399)](_0x4768bd => _0x4768bd['style'][_0x357bfd(0x1bc)] = _0x357bfd(0x2e4))), _0x37bf45['bWUnV'](updateStats);
}
let previousPosition = {
    'top': '5px',
    'left': _0x4dbf1d(0x159),
    'position': _0x4dbf1d(0x367)
};
function loadSavedPosition() {
    const _0x16bbac = _0x4dbf1d, _0x2e8ca1 = { 'NcoBB': _0x16bbac(0x388) }, _0x257743 = localStorage['getItem'](_0x2e8ca1['NcoBB']);
    if (_0x257743)
        try {
            const _0x5d4833 = JSON[_0x16bbac(0x14b)](_0x257743);
            _0x5d4833[_0x16bbac(0x2e9)] && _0x5d4833[_0x16bbac(0x26c)] && (previousPosition = _0x5d4833);
        } catch (_0x3a1638) {
        }
}
function savePosition() {
    const _0x553d97 = _0x4dbf1d;
    localStorage[_0x553d97(0x2f9)](_0x553d97(0x388), JSON[_0x553d97(0x34e)](previousPosition));
}
function toggleMinimalBot(_0x4295fb) {
    const _0x1cbceb = _0x4dbf1d, _0x442647 = {
            'UEmBf': _0x1cbceb(0x144),
            'wwWWq': _0x1cbceb(0x25c),
            'uhgZj': function (_0x499a3a, _0x5d1ecf) {
                return _0x499a3a === _0x5d1ecf;
            },
            'KoMwC': _0x1cbceb(0x159),
            'KWMVT': function (_0x518fed) {
                return _0x518fed();
            },
            'nVVgj': _0x1cbceb(0x207),
            'YUUES': _0x1cbceb(0x3c0),
            'YmYwc': function (_0x173912, _0x1d43c8) {
                return _0x173912 - _0x1d43c8;
            },
            'hstTd': _0x1cbceb(0x335),
            'oKUIj': _0x1cbceb(0x1a4)
        }, _0x52bea5 = document['getElementById'](_0x1cbceb(0x27a)), _0x380fc2 = document[_0x1cbceb(0x1bf)](_0x442647[_0x1cbceb(0x27d)]), _0x28bbc1 = document[_0x1cbceb(0x1bf)](_0x442647[_0x1cbceb(0x360)]);
    if (_0x442647[_0x1cbceb(0x285)](_0x4295fb[_0x1cbceb(0x283)], '▼')) {
        const _0x2d93b7 = window[_0x1cbceb(0x122)](_0x28bbc1);
        previousPosition = {
            'top': _0x28bbc1[_0x1cbceb(0x1c0)]['top'] || _0x2d93b7[_0x1cbceb(0x2e9)] || _0x1cbceb(0x159),
            'left': _0x28bbc1[_0x1cbceb(0x1c0)][_0x1cbceb(0x26c)] || _0x2d93b7[_0x1cbceb(0x26c)] || _0x442647['KoMwC'],
            'position': _0x28bbc1[_0x1cbceb(0x1c0)][_0x1cbceb(0x2a8)] || _0x2d93b7['position'] || _0x1cbceb(0x367)
        }, _0x442647[_0x1cbceb(0x2b1)](savePosition), _0x52bea5[_0x1cbceb(0x1c0)]['display'] = _0x1cbceb(0x207), _0x380fc2[_0x1cbceb(0x1c0)][_0x1cbceb(0x38d)] = _0x442647[_0x1cbceb(0x1e7)], _0x28bbc1[_0x1cbceb(0x1c0)][_0x1cbceb(0x224)] = _0x442647['YUUES'];
        const _0x8b7216 = window['innerWidth'], _0x1b32e6 = 0x15e, _0x2bf9dc = _0x442647[_0x1cbceb(0x11c)](_0x8b7216, _0x1b32e6) / 0x2;
        _0x28bbc1['style'][_0x1cbceb(0x2e9)] = _0x442647[_0x1cbceb(0x15c)], _0x28bbc1['style'][_0x1cbceb(0x26c)] = _0x2bf9dc + 'px', _0x28bbc1['style'][_0x1cbceb(0x2a8)] = _0x1cbceb(0x367), _0x4295fb[_0x1cbceb(0x283)] = '▲';
    } else {
        const _0x790206 = _0x1cbceb(0x262)[_0x1cbceb(0x15f)]('|');
        let _0x47afed = 0x0;
        while (!![]) {
            switch (_0x790206[_0x47afed++]) {
            case '0':
                _0x4295fb[_0x1cbceb(0x283)] = '▼';
                continue;
            case '1':
                _0x28bbc1[_0x1cbceb(0x1c0)]['left'] = previousPosition[_0x1cbceb(0x26c)];
                continue;
            case '2':
                _0x52bea5[_0x1cbceb(0x1c0)][_0x1cbceb(0x38d)] = _0x442647['oKUIj'];
                continue;
            case '3':
                _0x380fc2['style'][_0x1cbceb(0x38d)] = _0x442647[_0x1cbceb(0x154)];
                continue;
            case '4':
                _0x28bbc1['style'][_0x1cbceb(0x2a8)] = previousPosition[_0x1cbceb(0x2a8)];
                continue;
            case '5':
                _0x28bbc1[_0x1cbceb(0x1c0)][_0x1cbceb(0x2e9)] = previousPosition['top'];
                continue;
            case '6':
                _0x28bbc1['style'][_0x1cbceb(0x224)] = _0x1cbceb(0x30f);
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x3c2ea4) {
    const _0x409710 = _0x4dbf1d, _0x16655c = {
            'ynOPU': _0x409710(0x3b9),
            'fxelt': _0x409710(0x207),
            'PyUth': _0x409710(0x3a9)
        }, _0x3609d8 = document['getElementById'](_0x16655c[_0x409710(0x246)]);
    _0x3c2ea4[_0x409710(0x283)] === '▲' ? (_0x3609d8[_0x409710(0x1c0)][_0x409710(0x38d)] = _0x16655c['fxelt'], _0x3c2ea4[_0x409710(0x283)] = '▼') : (_0x3609d8[_0x409710(0x1c0)][_0x409710(0x38d)] = _0x16655c[_0x409710(0x2a1)], _0x3c2ea4['innerText'] = '▲');
}
function drawSelectCoin() {
    const _0x134cf6 = _0x4dbf1d, _0x1aa907 = { 'iBZVP': 'wdbMenuCoin' }, _0x271f8f = coins[_0x134cf6(0x3b4)](_0x5ebeb => _0x134cf6(0x1f4) + _0x5ebeb + '\x22>' + _0x5ebeb + _0x134cf6(0x3f6))[_0x134cf6(0x3f1)]('');
    document[_0x134cf6(0x1bf)](_0x1aa907['iBZVP'])[_0x134cf6(0x248)] = _0x271f8f, currency = String(coin)[_0x134cf6(0x245)](), fengari[_0x134cf6(0x3d8)](_0x134cf6(0x340) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x2c9292 = _0x4dbf1d, _0x50fbdc = {
            'EupIq': _0x2c9292(0x28b),
            'wiggD': function (_0x3cd9e8, _0x41198e) {
                return _0x3cd9e8 - _0x41198e;
            },
            'WecTJ': function (_0x578131, _0x42a40f) {
                return _0x578131 - _0x42a40f;
            },
            'PQQZE': function (_0x3c6db3, _0x4f30b0) {
                return _0x3c6db3 - _0x4f30b0;
            },
            'RTYSp': function (_0x44edd5, _0x287c06) {
                return _0x44edd5 + _0x287c06;
            },
            'csQjv': function (_0x5633f3, _0x512af2) {
                return _0x5633f3 + _0x512af2;
            },
            'gLiLi': function (_0x13c206, _0x31b530) {
                return _0x13c206 === _0x31b530;
            },
            'byMKf': function (_0x3bd161) {
                return _0x3bd161();
            },
            'Eppgj': function (_0x57f9a9, _0x3e0f9c) {
                return _0x57f9a9 === _0x3e0f9c;
            },
            'kgvhq': function (_0x447d0c, _0x6acaa3) {
                return _0x447d0c === _0x6acaa3;
            },
            'aYTXk': 'INPUT',
            'qYVQl': function (_0x272d61, _0x305181) {
                return _0x272d61 === _0x305181;
            },
            'RaDzQ': _0x2c9292(0x2cb),
            'GxkaN': function (_0x3018b9, _0x4381a2) {
                return _0x3018b9 / _0x4381a2;
            },
            'ivUrt': function (_0x381682, _0x2216b6) {
                return _0x381682 - _0x2216b6;
            },
            'RkZHk': 'wdbToggleMinimal',
            'oJqSW': function (_0x59fcb0, _0x106c74) {
                return _0x59fcb0 + _0x106c74;
            },
            'rsYHf': 'div',
            'rGMSE': _0x2c9292(0x2b2),
            'VPndE': 'wdb',
            'pEFkH': function (_0x3c4eae) {
                return _0x3c4eae();
            },
            'nyRpa': _0x2c9292(0x223),
            'sAKfN': 'keydown',
            'ysHos': _0x2c9292(0x23a),
            'NodCY': 'wdbWrapLicenseBox',
            'PcGIr': 'wdbWrapInitializing',
            'Innms': 'wdbScriptBoxLUA',
            'teSwV': _0x2c9292(0x1cc),
            'JwFhe': _0x2c9292(0x3ce),
            'eCoXO': _0x2c9292(0x11b),
            'EbvJn': _0x2c9292(0x38b),
            'aCDIR': _0x2c9292(0x227),
            'fDeoX': _0x2c9292(0x207),
            'baDXe': 'wdbAdvancedMode',
            'NKYSd': 'wdbWrapLog',
            'DOlTF': _0x2c9292(0x39c),
            'ADOxV': _0x2c9292(0x3f5),
            'Nrism': _0x2c9292(0x221),
            'ZnIyp': _0x2c9292(0x216),
            'BpsfZ': _0x2c9292(0x1fe),
            'OOAxb': 'wdbOpenJSScript',
            'MpgNr': _0x2c9292(0x204),
            'zGTok': 'createUIOk'
        }, _0x1d452a = document[_0x2c9292(0x1fd)](_0x50fbdc[_0x2c9292(0x1b2)]);
    _0x1d452a['id'] = _0x50fbdc[_0x2c9292(0x241)], _0x1d452a[_0x2c9292(0x248)] = wdbUI, document[_0x2c9292(0x310)][_0x2c9292(0x1e6)](_0x1d452a);
    const _0x380667 = document['getElementById'](_0x50fbdc[_0x2c9292(0x2fe)]);
    let _0x3f1e48 = 0x0, _0x137332 = 0x0, _0x4376f5 = 0x0, _0x507a2e = 0x0;
    _0x50fbdc[_0x2c9292(0x377)](loadSavedPosition), _0x380667[_0x2c9292(0x1c0)][_0x2c9292(0x2e9)] = previousPosition[_0x2c9292(0x2e9)], _0x380667[_0x2c9292(0x1c0)][_0x2c9292(0x26c)] = previousPosition[_0x2c9292(0x26c)], _0x380667['style']['position'] = previousPosition[_0x2c9292(0x2a8)];
    function _0xf3f6b0(_0x379082) {
        const _0x294acc = _0x2c9292, _0x1b29ad = _0x50fbdc[_0x294acc(0x187)][_0x294acc(0x15f)]('|');
        let _0x4dfc38 = 0x0;
        while (!![]) {
            switch (_0x1b29ad[_0x4dfc38++]) {
            case '0':
                _0x4376f5 = _0x379082['clientX'];
                continue;
            case '1':
                _0x379082 = _0x379082 || window[_0x294acc(0x3c2)];
                continue;
            case '2':
                _0x379082[_0x294acc(0x229)]();
                continue;
            case '3':
                document['onmouseup'] = _0x582ae6;
                continue;
            case '4':
                document[_0x294acc(0x132)] = _0x4f5668;
                continue;
            case '5':
                _0x507a2e = _0x379082[_0x294acc(0x222)];
                continue;
            }
            break;
        }
    }
    function _0x4f5668(_0x4b4c23) {
        const _0x5a0802 = _0x2c9292;
        _0x4b4c23 = _0x4b4c23 || window[_0x5a0802(0x3c2)], _0x4b4c23[_0x5a0802(0x229)](), _0x3f1e48 = _0x50fbdc[_0x5a0802(0x37e)](_0x4376f5, _0x4b4c23[_0x5a0802(0x1bd)]), _0x137332 = _0x50fbdc[_0x5a0802(0x3c9)](_0x507a2e, _0x4b4c23[_0x5a0802(0x222)]), _0x4376f5 = _0x4b4c23['clientX'], _0x507a2e = _0x4b4c23[_0x5a0802(0x222)];
        let _0x83ead4 = _0x50fbdc[_0x5a0802(0x372)](_0x380667[_0x5a0802(0x37d)], _0x137332), _0x1f0c8b = _0x50fbdc['wiggD'](_0x380667['offsetLeft'], _0x3f1e48);
        _0x380667[_0x5a0802(0x1c0)][_0x5a0802(0x2e9)] = _0x50fbdc['RTYSp'](_0x83ead4, 'px'), _0x380667['style'][_0x5a0802(0x26c)] = _0x50fbdc[_0x5a0802(0x291)](_0x1f0c8b, 'px');
    }
    function _0x582ae6() {
        const _0x2dd0a1 = _0x2c9292, _0x2432fb = document['getElementById'](_0x2dd0a1(0x2df));
        if (_0x2432fb && _0x50fbdc['gLiLi'](_0x2432fb['innerText'], '▼')) {
            const _0x35fcea = window[_0x2dd0a1(0x122)](_0x380667);
            previousPosition[_0x2dd0a1(0x2e9)] = _0x380667[_0x2dd0a1(0x1c0)][_0x2dd0a1(0x2e9)] || _0x35fcea[_0x2dd0a1(0x2e9)], previousPosition[_0x2dd0a1(0x26c)] = _0x380667[_0x2dd0a1(0x1c0)]['left'] || _0x35fcea[_0x2dd0a1(0x26c)], _0x50fbdc[_0x2dd0a1(0x170)](savePosition);
        }
        document[_0x2dd0a1(0x139)] = null, document[_0x2dd0a1(0x132)] = null;
    }
    document[_0x2c9292(0x1bf)](_0x50fbdc['nyRpa'])[_0x2c9292(0x267)] = _0xf3f6b0, document['addEventListener'](_0x50fbdc[_0x2c9292(0x2cc)], function (_0x1c4ca2) {
        const _0x3e237d = _0x2c9292;
        if (_0x50fbdc[_0x3e237d(0x3e0)](_0x1c4ca2[_0x3e237d(0x123)]['toLowerCase'](), 'w')) {
            const _0x1a8193 = document['activeElement'], _0x6a394b = _0x50fbdc[_0x3e237d(0x1c4)](_0x1a8193[_0x3e237d(0x257)], _0x50fbdc['aYTXk']) || _0x50fbdc[_0x3e237d(0x3cb)](_0x1a8193[_0x3e237d(0x257)], _0x3e237d(0x307)) || _0x1a8193[_0x3e237d(0x316)] || _0x1a8193[_0x3e237d(0x163)](_0x50fbdc[_0x3e237d(0x322)]);
            if (!_0x6a394b) {
                const _0x41ab0d = _0x50fbdc[_0x3e237d(0x1c7)](window[_0x3e237d(0x31c)] - _0x380667[_0x3e237d(0x104)], 0x2), _0x5dabec = _0x50fbdc['GxkaN'](_0x50fbdc['ivUrt'](window[_0x3e237d(0x3e6)], _0x380667[_0x3e237d(0x160)]), 0x2);
                _0x380667[_0x3e237d(0x1c0)][_0x3e237d(0x2e9)] = _0x41ab0d + 'px', _0x380667[_0x3e237d(0x1c0)][_0x3e237d(0x26c)] = _0x50fbdc['RTYSp'](_0x5dabec, 'px');
                const _0xd6d9ad = document[_0x3e237d(0x1bf)](_0x50fbdc[_0x3e237d(0x177)]);
                _0xd6d9ad && _0x50fbdc['kgvhq'](_0xd6d9ad[_0x3e237d(0x283)], '▼') && (previousPosition[_0x3e237d(0x2e9)] = _0x380667[_0x3e237d(0x1c0)]['top'], previousPosition[_0x3e237d(0x26c)] = _0x380667['style'][_0x3e237d(0x26c)], _0x50fbdc[_0x3e237d(0x170)](savePosition));
            }
        }
    }), window[_0x2c9292(0x35a)](_0x50fbdc[_0x2c9292(0x190)], function () {
        const _0x31273e = _0x2c9292, _0x87c57a = document[_0x31273e(0x1bf)](_0x31273e(0x2df));
        if (_0x87c57a && _0x50fbdc[_0x31273e(0x3cb)](_0x87c57a[_0x31273e(0x283)], '▲')) {
            const _0x4503b7 = window[_0x31273e(0x3e6)], _0x2695ef = 0x15e, _0x3b8629 = _0x50fbdc[_0x31273e(0x37e)](_0x4503b7, _0x2695ef) / 0x2;
            _0x380667[_0x31273e(0x1c0)][_0x31273e(0x26c)] = _0x50fbdc[_0x31273e(0x158)](_0x3b8629, 'px');
        }
    });
    if (document[_0x2c9292(0x1bf)](_0x2c9292(0x149)))
        document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x1f0)])[_0x2c9292(0x10d)]();
    if (document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x3d7)]))
        document[_0x2c9292(0x1bf)](_0x50fbdc['PcGIr'])['remove']();
    luaEditor = CodeMirror[_0x2c9292(0x13c)](document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x365)]), {
        'theme': _0x50fbdc[_0x2c9292(0x23e)],
        'mode': _0x50fbdc['JwFhe'],
        'lineNumbers': !![]
    }), luaEditor[_0x2c9292(0x380)](), jsEditor = CodeMirror[_0x2c9292(0x13c)](document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x274)]), {
        'theme': _0x50fbdc[_0x2c9292(0x23e)],
        'mode': _0x50fbdc['EbvJn'],
        'lineNumbers': !![]
    }), jsEditor[_0x2c9292(0x380)](), document[_0x2c9292(0x1bf)](_0x50fbdc['aCDIR'])[_0x2c9292(0x1c0)]['display'] = _0x50fbdc[_0x2c9292(0x3d3)], document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x2cf)])[_0x2c9292(0x1c0)][_0x2c9292(0x38d)] = _0x50fbdc[_0x2c9292(0x3d3)], document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x1ea)])[_0x2c9292(0x1c0)][_0x2c9292(0x38d)] = _0x2c9292(0x207), document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x230)])[_0x2c9292(0x1c0)]['display'] = _0x50fbdc['fDeoX'], document[_0x2c9292(0x1bf)](_0x2c9292(0x1bb))[_0x2c9292(0x1c0)][_0x2c9292(0x38d)] = _0x2c9292(0x207), document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x186)])[_0x2c9292(0x1c0)]['display'] = _0x50fbdc[_0x2c9292(0x3d3)], document[_0x2c9292(0x1bf)](_0x50fbdc[_0x2c9292(0x1dd)])[_0x2c9292(0x140)] = !![];
    const _0x21478b = document['getElementById'](_0x50fbdc[_0x2c9292(0x383)]);
    _0x21478b[_0x2c9292(0x35a)](_0x50fbdc['BpsfZ'], () => {
        const _0x182e0b = _0x2c9292;
        _0x21478b[_0x182e0b(0x202)] = null;
    }), _0x21478b[_0x2c9292(0x35a)](_0x2c9292(0x204), async _0x4bd0f8 => {
        const _0xe68b42 = _0x2c9292, _0x97e8d2 = await new Response(_0x4bd0f8['target'][_0xe68b42(0x2bf)][0x0])[_0xe68b42(0x1d6)]();
        if (!_0x97e8d2)
            return;
        luaEditor[_0xe68b42(0x1af)](_0x97e8d2);
    });
    const _0x5e9605 = document['getElementById'](_0x50fbdc[_0x2c9292(0x382)]);
    return _0x5e9605[_0x2c9292(0x35a)](_0x50fbdc['BpsfZ'], () => {
        _0x5e9605['value'] = null;
    }), _0x5e9605['addEventListener'](_0x50fbdc[_0x2c9292(0x287)], async _0x1f1044 => {
        const _0x7c0692 = _0x2c9292, _0x51b5da = await new Response(_0x1f1044[_0x7c0692(0x3c8)][_0x7c0692(0x2bf)][0x0])[_0x7c0692(0x1d6)]();
        if (!_0x51b5da)
            return;
        jsEditor[_0x7c0692(0x1af)](_0x51b5da);
    }), chart = new Chart(_0x2c9292(0x3c5), ![], 0x64), _0x50fbdc[_0x2c9292(0x398)];
}
async function wdbLoader(_0x329fa5) {
    const _0x26be7a = _0x4dbf1d, _0x5e8d44 = {
            'JUlNa': _0x26be7a(0x1d4),
            'jBzkO': _0x26be7a(0x3ff),
            'vzXOl': _0x26be7a(0x317),
            'ZjktU': _0x26be7a(0x2d5),
            'Idqwl': _0x26be7a(0x3e7),
            'xQzAd': function (_0x29fb4c, _0x42a24c) {
                return _0x29fb4c + _0x42a24c;
            },
            'mvYUt': _0x26be7a(0x13d),
            'BpdTY': _0x26be7a(0x371),
            'hxCnZ': function (_0x338e70) {
                return _0x338e70();
            },
            'ttJoN': _0x26be7a(0x3f0),
            'CEqrj': function (_0x1fcd21, _0x531bfd) {
                return _0x1fcd21 === _0x531bfd;
            },
            'gaNyQ': _0x26be7a(0x27e)
        }, _0x906f40 = [
            _0x5e8d44[_0x26be7a(0x3b6)],
            _0x5e8d44['jBzkO'],
            _0x5e8d44[_0x26be7a(0x3dc)],
            _0x26be7a(0x199),
            _0x5e8d44[_0x26be7a(0x17b)],
            WDB_LIB + _0x5e8d44[_0x26be7a(0x330)],
            _0x5e8d44[_0x26be7a(0x341)](WDB_LIB, _0x26be7a(0x3af))
        ], _0x3d6fd0 = [
            _0x5e8d44['mvYUt'],
            _0x5e8d44[_0x26be7a(0x1a7)]
        ];
    for (const _0x44bd53 of _0x906f40) {
        await _0x329fa5[_0x26be7a(0x298)](_0x44bd53);
    }
    for (const _0x568fce of _0x3d6fd0) {
        await _0x329fa5[_0x26be7a(0x28f)](_0x568fce);
    }
    await beforeWork(_0x329fa5), await _0x5e8d44[_0x26be7a(0x2e8)](wdbCreateUI), await _0x5e8d44[_0x26be7a(0x2e8)](getListCoin), await _0x5e8d44[_0x26be7a(0x2e8)](initLua);
    if (game === _0x26be7a(0x15b))
        luaEditor['setValue'](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript), document['querySelector'](_0x5e8d44['ttJoN'])['disabled'] = !![];
    else {
        if (_0x5e8d44[_0x26be7a(0x175)](game, 'plinko'))
            luaEditor[_0x26be7a(0x1af)](plinkoLuaScript), jsEditor[_0x26be7a(0x1af)](plinkoJsScript), document[_0x26be7a(0x3c6)](_0x5e8d44[_0x26be7a(0x336)])[_0x26be7a(0x140)] = !![];
        else
            game === _0x5e8d44[_0x26be7a(0x2b8)] && (luaEditor[_0x26be7a(0x1af)](kenoLuaScript), jsEditor[_0x26be7a(0x1af)](kenoJsScript), document[_0x26be7a(0x3c6)](_0x5e8d44[_0x26be7a(0x336)])[_0x26be7a(0x140)] = !![]);
    }
    return log(_0x26be7a(0x185)), _0x26be7a(0x128);
}
function toggleNav(_0x1ebc27) {
    const _0x376c87 = _0x4dbf1d, _0x538008 = {
            'YizGn': function (_0x57f9be, _0x4d8878) {
                return _0x57f9be === _0x4d8878;
            },
            'XoVwF': _0x376c87(0x1a4),
            'IMZPi': _0x376c87(0x207),
            'UnKkL': function (_0x1d0214, _0x4e9614) {
                return _0x1d0214 === _0x4e9614;
            },
            'tDZYu': _0x376c87(0x2d8),
            'JQrkI': _0x376c87(0x2dc),
            'xNwIg': _0x376c87(0x39e),
            'MCptH': _0x376c87(0x2fb)
        }, _0x3262e3 = [
            _0x538008[_0x376c87(0x188)],
            _0x376c87(0x352),
            _0x538008[_0x376c87(0x2fd)],
            _0x538008[_0x376c87(0x3e1)],
            _0x538008[_0x376c87(0x2c5)]
        ];
    _0x3262e3[_0x376c87(0x399)](_0x4f8b1e => {
        const _0x3a52d8 = _0x376c87, _0x26a99f = _0x538008[_0x3a52d8(0x3e4)](_0x4f8b1e[_0x3a52d8(0x245)](), _0x1ebc27) ? _0x538008['XoVwF'] : _0x538008[_0x3a52d8(0x131)];
        document[_0x3a52d8(0x1bf)](_0x3a52d8(0x2b2) + _0x4f8b1e)[_0x3a52d8(0x1c0)]['display'] = _0x26a99f, document[_0x3a52d8(0x1bf)]('wdbShow' + _0x4f8b1e)[_0x3a52d8(0x140)] = _0x538008[_0x3a52d8(0x147)](_0x26a99f, _0x3a52d8(0x1a4));
    });
}
function toggleShow(_0xb50f39) {
    const _0x32ede3 = _0x4dbf1d, _0x20c7e7 = {
            'tIOQV': function (_0x206454, _0x37c168) {
                return _0x206454 + _0x37c168;
            },
            'DCfif': function (_0x3cbec8, _0xae4af) {
                return _0x3cbec8(_0xae4af);
            }
        }, _0x55e775 = document['getElementById'](_0x32ede3(0x1ab) + _0x20c7e7['tIOQV'](_0xb50f39[_0x32ede3(0x361)](0x0)['toUpperCase'](), _0xb50f39[_0x32ede3(0x31f)](0x1)))[_0x32ede3(0x368)];
    _0x20c7e7[_0x32ede3(0x3d9)](selectFunction, _0x55e775 ? _0x32ede3(0x264) + _0xb50f39 : 'hide' + _0xb50f39);
}
function toggleLive(_0x2e0ace) {
    const _0x4854cf = _0x4dbf1d, _0x2e0ba9 = {
            'ryhZf': function (_0x422c75, _0x467080) {
                return _0x422c75 + _0x467080;
            },
            'pFmor': function (_0x528767, _0x3e11f1) {
                return _0x528767(_0x3e11f1);
            },
            'KKNCT': _0x4854cf(0x136),
            'TmAks': _0x4854cf(0x36c)
        }, _0x297ebe = document[_0x4854cf(0x1bf)](_0x4854cf(0x1e9) + _0x2e0ba9[_0x4854cf(0x1d5)](_0x2e0ace[_0x4854cf(0x361)](0x0)[_0x4854cf(0x1d8)](), _0x2e0ace['slice'](0x1)))['checked'];
    _0x2e0ba9[_0x4854cf(0x2e6)](selectFunction, '' + (_0x297ebe ? _0x2e0ba9[_0x4854cf(0x153)] : _0x2e0ba9['TmAks']) + _0x2e0ace);
}
function selectFunction(_0x278386) {
    const _0x58d4fc = _0x4dbf1d, _0x709578 = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x58d4fc(0x1dc)),
            'resethistory': () => toggleHistory(_0x58d4fc(0x249)),
            'resetlog': () => toggleLog(_0x58d4fc(0x249)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x58d4fc(0x36c)),
            'startchart': () => toggleChart(_0x58d4fc(0x136)),
            'stophistory': () => toggleHistory(_0x58d4fc(0x36c)),
            'starthistory': () => toggleHistory(_0x58d4fc(0x136)),
            'stoplog': () => toggleLog(_0x58d4fc(0x36c)),
            'startlog': () => toggleLog(_0x58d4fc(0x136)),
            'hidestats': () => toggleStats(_0x58d4fc(0x263)),
            'showstats': () => toggleStats(_0x58d4fc(0x264)),
            'hidechart': () => toggleChart(_0x58d4fc(0x263)),
            'showchart': () => toggleChart(_0x58d4fc(0x264)),
            'hidehistory': () => toggleHistory(_0x58d4fc(0x263)),
            'showhistory': () => toggleHistory('show')
        };
    if (_0x709578[_0x278386])
        _0x709578[_0x278386]();
}
function toggleMode(_0x1d8f0f) {
    const _0x3f7b4c = _0x4dbf1d, _0x555fd7 = {
            'mKXDB': function (_0x924933, _0x104136) {
                return _0x924933 === _0x104136;
            },
            'CPIKb': function (_0x3294fc, _0x226f73) {
                return _0x3294fc === _0x226f73;
            },
            'IZMTj': 'wdbLUAMode',
            'GJXak': 'wdbJSMode',
            'XqHyR': function (_0x3b2eda, _0x50ad0f) {
                return _0x3b2eda === _0x50ad0f;
            },
            'KomCW': 'lua',
            'wSSQv': _0x3f7b4c(0x1a4),
            'FOrKX': 'none',
            'omTwP': function (_0x5e161c, _0x4f337f) {
                return _0x5e161c === _0x4f337f;
            },
            'xRGQf': _0x3f7b4c(0x3e3)
        };
    mode = _0x1d8f0f;
    if (game === _0x3f7b4c(0x15b))
        luaEditor['setValue'](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript);
    else {
        if (_0x555fd7['mKXDB'](game, _0x3f7b4c(0x290)))
            luaEditor[_0x3f7b4c(0x1af)](plinkoLuaScript), jsEditor[_0x3f7b4c(0x1af)](plinkoJsScript);
        else
            _0x555fd7[_0x3f7b4c(0x16b)](game, _0x3f7b4c(0x27e)) && (luaEditor[_0x3f7b4c(0x1af)](kenoLuaScript), jsEditor[_0x3f7b4c(0x1af)](kenoJsScript));
    }
    const _0x2723f0 = document['getElementById'](_0x555fd7[_0x3f7b4c(0x38e)]), _0x2a0cfc = document[_0x3f7b4c(0x1bf)](_0x555fd7['GJXak']), _0x3dfa3e = document[_0x3f7b4c(0x1bf)](_0x3f7b4c(0x312));
    _0x2723f0[_0x3f7b4c(0x1c0)]['display'] = _0x555fd7[_0x3f7b4c(0x3cc)](_0x1d8f0f, _0x555fd7[_0x3f7b4c(0x236)]) ? _0x555fd7[_0x3f7b4c(0x311)] : _0x3f7b4c(0x207), _0x2a0cfc['style'][_0x3f7b4c(0x38d)] = _0x1d8f0f === 'js' ? _0x555fd7[_0x3f7b4c(0x311)] : _0x555fd7[_0x3f7b4c(0x201)], _0x3dfa3e[_0x3f7b4c(0x1c0)][_0x3f7b4c(0x38d)] = _0x555fd7['omTwP'](_0x1d8f0f, _0x555fd7[_0x3f7b4c(0x295)]) ? _0x3f7b4c(0x1a4) : _0x555fd7[_0x3f7b4c(0x201)], luaEditor[_0x3f7b4c(0x116)](), jsEditor[_0x3f7b4c(0x116)]();
}
function toggleStats(_0x13c1ca) {
    const _0x40b4aa = _0x4dbf1d, _0x455ccb = {
            'HHxqs': function (_0x42f726, _0x4e688c) {
                return _0x42f726 === _0x4e688c;
            },
            'UBgXm': _0x40b4aa(0x207),
            'xRJvb': _0x40b4aa(0x3a9),
            'OibhW': _0x40b4aa(0x306)
        }, _0x270343 = _0x455ccb[_0x40b4aa(0x211)](_0x13c1ca, 'hide') ? _0x455ccb[_0x40b4aa(0x14c)] : _0x455ccb[_0x40b4aa(0x2ac)];
    document['getElementById'](_0x455ccb[_0x40b4aa(0x18b)])[_0x40b4aa(0x1c0)][_0x40b4aa(0x38d)] = _0x270343;
}
function toggleChart(_0x45f6fc) {
    const _0x29df2d = _0x4dbf1d, _0x73bb79 = {
            'eqRRm': 'wdbChart',
            'LVNiC': _0x29df2d(0x3ec),
            'xYdqU': _0x29df2d(0x207),
            'ykLDW': _0x29df2d(0x321),
            'aEtrp': _0x29df2d(0x264),
            'FIvJH': _0x29df2d(0x1a4),
            'FotVy': '190px',
            'gZgEV': 'start',
            'FlOKW': _0x29df2d(0x1dc)
        }, _0x17de57 = document[_0x29df2d(0x1bf)](_0x73bb79[_0x29df2d(0x1c6)]), _0x386fb7 = document[_0x29df2d(0x1bf)](_0x73bb79[_0x29df2d(0x1d3)]);
    switch (_0x45f6fc) {
    case _0x29df2d(0x263):
        _0x17de57[_0x29df2d(0x1c0)]['display'] = _0x73bb79['xYdqU'], _0x386fb7[_0x29df2d(0x1c0)][_0x29df2d(0x3e5)] = _0x73bb79[_0x29df2d(0x194)];
        break;
    case _0x73bb79[_0x29df2d(0x22c)]:
        _0x17de57[_0x29df2d(0x1c0)][_0x29df2d(0x38d)] = _0x73bb79[_0x29df2d(0x13e)], _0x386fb7[_0x29df2d(0x1c0)][_0x29df2d(0x3e5)] = _0x73bb79[_0x29df2d(0x33d)];
        break;
    case _0x29df2d(0x36c):
        stopChart = !![];
        break;
    case _0x73bb79[_0x29df2d(0x27c)]:
        stopChart = ![];
        break;
    case _0x73bb79[_0x29df2d(0x343)]:
        betsChart = 0x0, profitChart = 0x0, chart[_0x29df2d(0x17f)]();
        break;
    }
}
function _0x3736(_0x1d74a6, _0x4bbe64) {
    const _0x23ec00 = _0x23ec();
    return _0x3736 = function (_0x37367c, _0x4546bf) {
        _0x37367c = _0x37367c - 0x104;
        let _0x1e0b03 = _0x23ec00[_0x37367c];
        return _0x1e0b03;
    }, _0x3736(_0x1d74a6, _0x4bbe64);
}
function toggleHistory(_0x364bce) {
    const _0x36c50c = _0x4dbf1d, _0x1c84d8 = {
            'Rbzpd': _0x36c50c(0x3c5),
            'Ilicv': _0x36c50c(0x263),
            'yklJI': _0x36c50c(0x207),
            'eaAWE': _0x36c50c(0x1a4),
            'QkyMe': _0x36c50c(0x36c),
            'hlBWU': _0x36c50c(0x136),
            'TAaMi': 'clear'
        }, _0x648a72 = document['getElementById']('wdbHistory'), _0x559d46 = document[_0x36c50c(0x1bf)](_0x1c84d8[_0x36c50c(0x130)]);
    switch (_0x364bce) {
    case _0x1c84d8['Ilicv']:
        _0x648a72[_0x36c50c(0x1c0)]['display'] = _0x1c84d8['yklJI'], _0x559d46['style'][_0x36c50c(0x3e5)] = _0x36c50c(0x321);
        break;
    case _0x36c50c(0x264):
        _0x648a72[_0x36c50c(0x1c0)][_0x36c50c(0x38d)] = _0x1c84d8[_0x36c50c(0x151)], _0x559d46['style'][_0x36c50c(0x3e5)] = _0x36c50c(0x1e5);
        break;
    case _0x1c84d8[_0x36c50c(0x332)]:
        stopHistory = !![];
        break;
    case _0x1c84d8['hlBWU']:
        stopHistory = ![];
        break;
    case _0x1c84d8[_0x36c50c(0x1b7)]:
        _0x648a72['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x5d8092) {
    const _0x1d1425 = _0x4dbf1d, _0x359e10 = {
            'BCamG': 'stop',
            'nNfZr': _0x1d1425(0x136),
            'wQZJE': _0x1d1425(0x249)
        };
    switch (_0x5d8092) {
    case _0x359e10['BCamG']:
        stopLog = !![];
        break;
    case _0x359e10[_0x1d1425(0x329)]:
        stopLog = ![];
        break;
    case _0x359e10[_0x1d1425(0x15a)]:
        document[_0x1d1425(0x1bf)]('wdbLog')['innerHTML'] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x246e89 = _0x4dbf1d, _0x2b8d60 = {
            'BXMnN': function (_0x50de95, _0x58fccd) {
                return _0x50de95(_0x58fccd);
            },
            'lMiAp': _0x246e89(0x1d2),
            'gvofK': _0x246e89(0x3ac),
            'GTrXG': _0x246e89(0x39f),
            'yDDdI': _0x246e89(0x2f3),
            'rQhKr': function (_0x54ffe1, _0x11a363) {
                return _0x54ffe1(_0x11a363);
            },
            'wlxRF': function (_0x4d5237, _0x3c26b4) {
                return _0x4d5237(_0x3c26b4);
            },
            'Ifoul': _0x246e89(0x32e),
            'ozpAK': _0x246e89(0x3fe),
            'oCgin': function (_0x29b4a9, _0x53183) {
                return _0x29b4a9(_0x53183);
            },
            'QXLaa': 'advancedMultiOnLose',
            'cwMLA': _0x246e89(0x308),
            'vDcgO': 'advancedBetHighOnBetCheck',
            'OubNn': _0x246e89(0x27f),
            'VDKCp': _0x246e89(0x394),
            'ahtrU': function (_0x52f4c3, _0xe4142d) {
                return _0x52f4c3 >= _0xe4142d;
            },
            'lIbYC': _0x246e89(0x2c4),
            'lvgBQ': 'resetstatsOnProfit',
            'ZpgYx': function (_0x45a24d) {
                return _0x45a24d();
            },
            'SKttg': 'advancedStopRollNumberCheck',
            'GmrfZ': 'advancedStopRollNumber',
            'FIQzM': function (_0x6ae989, _0x4a5561) {
                return _0x6ae989 === _0x4a5561;
            },
            'oMjfB': _0x246e89(0x373),
            'CYTug': function (_0x46c526, _0x190923) {
                return _0x46c526(_0x190923);
            },
            'EkSmW': _0x246e89(0x141),
            'HqFOD': function (_0x18b8c4, _0x45e140) {
                return _0x18b8c4 > _0x45e140;
            },
            'sdoKE': function (_0x5900b9, _0x38fed6) {
                return _0x5900b9 + _0x38fed6;
            },
            'pOZil': 'Stop\x20on\x20current\x20streak\x20',
            'rPJJF': function (_0x4cfb16) {
                return _0x4cfb16();
            },
            'eIKsr': _0x246e89(0x2e2),
            'MCyyz': function (_0xf9d17e, _0x1686d8) {
                return _0xf9d17e(_0x1686d8);
            },
            'plXLf': 'advancedStopOnBets',
            'VbXLF': function (_0x4ab86b) {
                return _0x4ab86b();
            },
            'FWhnP': function (_0x10ec95, _0x4eaa5e) {
                return _0x10ec95(_0x4eaa5e);
            },
            'ItdrH': _0x246e89(0x173),
            'IUkIR': _0x246e89(0x3b7),
            'cNZlB': _0x246e89(0x22f),
            'nivEs': _0x246e89(0x390),
            'HujWZ': function (_0x406cf0, _0xcf9e3d) {
                return _0x406cf0 >= _0xcf9e3d;
            },
            'cBJZH': function (_0x30d818, _0x53ca03) {
                return _0x30d818(_0x53ca03);
            },
            'oBDwq': function (_0x4bf83e, _0x4bf0cd) {
                return _0x4bf83e + _0x4bf0cd;
            },
            'ysrCr': _0x246e89(0x34d),
            'fzfGc': _0x246e89(0x393),
            'YHrXL': function (_0x2f125b, _0x4bc864) {
                return _0x2f125b(_0x4bc864);
            },
            'PoZZx': _0x246e89(0x2e3),
            'XlkCH': function (_0x251c58) {
                return _0x251c58();
            },
            'CZAAS': _0x246e89(0x3e9),
            'JIPGo': _0x246e89(0x110),
            'RqLuj': _0x246e89(0x33a),
            'WJwCu': function (_0x57e9be, _0x14f901) {
                return _0x57e9be(_0x14f901);
            },
            'vDcmd': _0x246e89(0x265),
            'eAuPF': _0x246e89(0x2d2),
            'yKJuu': _0x246e89(0x39d),
            'kTyal': function (_0x5382cc, _0xff4e30) {
                return _0x5382cc + _0xff4e30;
            },
            'SGtpN': 'advancedBetHighOnWinCheck',
            'APpyq': function (_0x4dff9d, _0x2eeb4e) {
                return _0x4dff9d(_0x2eeb4e);
            },
            'HeKTr': 'advancedBetHighOnWin',
            'Uhdts': function (_0x1dadb9, _0x324387) {
                return _0x1dadb9 === _0x324387;
            },
            'AUttM': function (_0x56d47d, _0x396d71) {
                return _0x56d47d % _0x396d71;
            },
            'VHudl': function (_0x337752, _0x4657cd) {
                return _0x337752 === _0x4657cd;
            },
            'srxVk': function (_0x2a7a0f, _0x36bbcc) {
                return _0x2a7a0f % _0x36bbcc;
            },
            'xJEQr': function (_0x146cc3, _0x132d22) {
                return _0x146cc3 === _0x132d22;
            },
            'asmpF': function (_0x478cef, _0x38e013) {
                return _0x478cef * _0x38e013;
            },
            'hQFiR': 'advancedBetHighOnLose',
            'EUMDc': function (_0x10f761, _0x103a36) {
                return _0x10f761 % _0x103a36;
            }
        };
    chance = _0x2b8d60[_0x246e89(0x376)](Number, document[_0x246e89(0x1bf)](_0x2b8d60['lMiAp'])['value']);
    const _0x56af12 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x20a)])['checked'], _0x379246 = _0x56af12 ? Number(document[_0x246e89(0x1bf)](_0x246e89(0x3fa))[_0x246e89(0x202)]) : chance, _0x202b9f = Number(document[_0x246e89(0x1bf)]('advancedChanceOnWinBets')['value']), _0x394480 = document['getElementById'](_0x2b8d60[_0x246e89(0x2a0)])['checked'], _0x4cb9e4 = _0x394480 ? _0x2b8d60[_0x246e89(0x376)](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x32c)])['value']) : chance, _0x304007 = _0x2b8d60[_0x246e89(0x376)](Number, document[_0x246e89(0x1bf)]('advancedChanceOnLoseBets')[_0x246e89(0x202)]), _0xe8127d = document[_0x246e89(0x1bf)]('advancedMultiOnWinCheck')[_0x246e89(0x368)], _0x117a7a = _0xe8127d ? _0x2b8d60[_0x246e89(0x1b8)](Number, document['getElementById'](_0x246e89(0x193))[_0x246e89(0x202)]) : 0x1, _0x4f35f2 = _0x2b8d60[_0x246e89(0x180)](Number, document[_0x246e89(0x1bf)](_0x2b8d60['Ifoul'])[_0x246e89(0x202)]), _0x538651 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x20d)])[_0x246e89(0x368)], _0x3a24ef = _0x538651 ? _0x2b8d60['oCgin'](Number, document['getElementById'](_0x2b8d60[_0x246e89(0x16f)])['value']) : 0x1, _0x562302 = Number(document[_0x246e89(0x1bf)](_0x2b8d60['cwMLA'])[_0x246e89(0x202)]), _0x282ead = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x3d6)])[_0x246e89(0x368)];
    if (_0x282ead) {
        const _0x3f4b7d = _0x2b8d60['BXMnN'](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x217)])[_0x246e89(0x202)]);
        if (bets % _0x3f4b7d === 0x0)
            bethigh = !bethigh;
    }
    const _0x2a076b = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x299)])[_0x246e89(0x368)];
    if (_0x2a076b) {
        const _0x3419a6 = _0x2b8d60['oCgin'](Number, document[_0x246e89(0x1bf)](_0x246e89(0x21b))[_0x246e89(0x202)]);
        if (_0x2b8d60['ahtrU'](profit, _0x3419a6))
            bethigh = !bethigh;
    }
    const _0x21b2d7 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x33f)])[_0x246e89(0x368)];
    if (_0x21b2d7) {
        const _0xe77ee1 = Number(document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x1ae)])[_0x246e89(0x202)]);
        if (_0x2b8d60[_0x246e89(0x304)](profit, _0xe77ee1))
            _0x2b8d60[_0x246e89(0x389)](resetstats);
    }
    const _0x4ba6b8 = document[_0x246e89(0x1bf)](_0x2b8d60['SKttg'])[_0x246e89(0x368)];
    if (_0x4ba6b8) {
        const _0x471361 = Number(document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x30c)])[_0x246e89(0x202)]);
        if (_0x2b8d60[_0x246e89(0x16a)](lastBet['result'], _0x471361))
            _0x2b8d60[_0x246e89(0x389)](stop), _0x2b8d60['rQhKr'](log, _0x2b8d60[_0x246e89(0x11a)] + _0x471361);
    }
    const _0xfc0a1d = document['getElementById'](_0x246e89(0x347))[_0x246e89(0x368)];
    if (_0xfc0a1d) {
        const _0x1978cd = _0x2b8d60['CYTug'](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x174)])['value']);
        if (_0x2b8d60[_0x246e89(0x225)](_0x1978cd, 0x0)) {
            if (_0x2b8d60['ahtrU'](currentstreak, _0x1978cd))
                _0x2b8d60[_0x246e89(0x389)](stop), _0x2b8d60[_0x246e89(0x3bf)](log, _0x2b8d60[_0x246e89(0x37f)](_0x2b8d60['pOZil'], _0x1978cd));
        } else {
            if (currentstreak <= _0x1978cd)
                _0x2b8d60[_0x246e89(0x277)](stop), _0x2b8d60[_0x246e89(0x3bf)](log, _0x2b8d60['sdoKE'](_0x2b8d60[_0x246e89(0x129)], _0x1978cd));
        }
    }
    const _0x248742 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x334)])[_0x246e89(0x368)];
    if (_0x248742) {
        const _0x48ffd0 = _0x2b8d60[_0x246e89(0x118)](Number, document[_0x246e89(0x1bf)](_0x2b8d60['plXLf'])[_0x246e89(0x202)]);
        if (bets >= _0x48ffd0)
            _0x2b8d60['VbXLF'](stop), _0x2b8d60[_0x246e89(0x2ff)](log, _0x2b8d60[_0x246e89(0x2ae)] + _0x48ffd0 + _0x2b8d60[_0x246e89(0x26e)]);
    }
    const _0x17e3f4 = document['getElementById'](_0x2b8d60['cNZlB'])['checked'];
    if (_0x17e3f4) {
        const _0x1f3fb5 = _0x2b8d60[_0x246e89(0x376)](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x3df)])[_0x246e89(0x202)]);
        if (_0x2b8d60['HujWZ'](winstreak, _0x1f3fb5))
            _0x2b8d60[_0x246e89(0x277)](stop), _0x2b8d60['cBJZH'](log, _0x2b8d60[_0x246e89(0x2ed)](_0x2b8d60[_0x246e89(0x2ed)](_0x2b8d60['ItdrH'], _0x1f3fb5), _0x2b8d60['ysrCr']));
    }
    const _0x52dcf3 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x1eb)])[_0x246e89(0x368)];
    if (_0x52dcf3) {
        const _0x1d677d = _0x2b8d60[_0x246e89(0x172)](Number, document[_0x246e89(0x1bf)](_0x2b8d60['PoZZx'])[_0x246e89(0x202)]);
        if (_0x2b8d60[_0x246e89(0x1ff)](losestreak, _0x1d677d))
            _0x2b8d60[_0x246e89(0x1a1)](stop), log(_0x2b8d60[_0x246e89(0x2ed)](_0x2b8d60['ItdrH'], _0x1d677d) + _0x2b8d60[_0x246e89(0x19d)]);
    }
    const _0x65b5e3 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x386)])[_0x246e89(0x368)];
    if (_0x65b5e3) {
        const _0x5d6aaf = _0x2b8d60[_0x246e89(0x3bf)](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x397)])[_0x246e89(0x202)]);
        if (_0x2b8d60['ahtrU'](profit, _0x5d6aaf))
            _0x2b8d60[_0x246e89(0x277)](stop), _0x2b8d60['WJwCu'](log, _0x2b8d60[_0x246e89(0x171)] + _0x5d6aaf);
    }
    const _0x1f86e8 = document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x21e)])[_0x246e89(0x368)];
    if (_0x1f86e8) {
        const _0x53d02f = _0x2b8d60[_0x246e89(0x376)](Number, document['getElementById'](_0x2b8d60[_0x246e89(0x1f2)])['value']);
        if (_0x2b8d60[_0x246e89(0x304)](balance, _0x53d02f))
            stop(), _0x2b8d60[_0x246e89(0x1b8)](log, _0x2b8d60[_0x246e89(0x357)]('Stop\x20on\x20balance\x20', _0x53d02f));
    }
    if (win) {
        const _0x2346f3 = document['getElementById'](_0x2b8d60['SGtpN'])[_0x246e89(0x368)];
        if (_0x2346f3) {
            const _0x54542f = _0x2b8d60[_0x246e89(0x35c)](Number, document[_0x246e89(0x1bf)](_0x2b8d60[_0x246e89(0x362)])[_0x246e89(0x202)]);
            if (_0x2b8d60[_0x246e89(0x1c9)](_0x2b8d60[_0x246e89(0x20b)](winstreak, _0x54542f), 0x0))
                bethigh = !bethigh;
        }
        if (_0x2b8d60['VHudl'](_0x2b8d60[_0x246e89(0x142)](winstreak, _0x202b9f), 0x0))
            chance = _0x379246;
        if (_0xe8127d) {
            if (_0x2b8d60['xJEQr'](_0x2b8d60['srxVk'](winstreak, _0x4f35f2), 0x0))
                nextbet = _0x2b8d60['asmpF'](previousbet, _0x117a7a);
        } else
            nextbet = basebet;
    } else {
        const _0x21ccba = document[_0x246e89(0x1bf)](_0x246e89(0x26f))[_0x246e89(0x368)];
        if (_0x21ccba) {
            const _0xac52a0 = _0x2b8d60[_0x246e89(0x197)](Number, document['getElementById'](_0x2b8d60['hQFiR'])[_0x246e89(0x202)]);
            if (_0x2b8d60['EUMDc'](losestreak, _0xac52a0) === 0x0)
                bethigh = !bethigh;
        }
        if (_0x2b8d60[_0x246e89(0x369)](_0x2b8d60[_0x246e89(0x2f4)](losestreak, _0x304007), 0x0))
            chance = _0x4cb9e4;
        if (_0x538651) {
            if (_0x2b8d60[_0x246e89(0x369)](losestreak % _0x562302, 0x0))
                nextbet = _0x2b8d60[_0x246e89(0x2a2)](previousbet, _0x3a24ef);
        } else
            nextbet = basebet;
    }
    return 'handleAdvanced\x20ok';
}
function changeCoin() {
    const _0x5153a9 = _0x4dbf1d, _0x5bc553 = {
            'mAuvc': _0x5153a9(0x178),
            'SNFFy': function (_0x77d096) {
                return _0x77d096();
            }
        };
    coin = document[_0x5153a9(0x1bf)](_0x5bc553[_0x5153a9(0x2c6)])[_0x5153a9(0x202)], currency = coin[_0x5153a9(0x245)](), fengari[_0x5153a9(0x3d8)]('currency=\x22' + currency + '\x22')(), _0x5bc553[_0x5153a9(0x109)](checkbalance);
}
async function handleStats() {
    const _0x440793 = _0x4dbf1d, _0x52d612 = {
            'TuhnU': _0x440793(0x3ce),
            'ECeuk': function (_0x5ae13e) {
                return _0x5ae13e();
            },
            'ifklU': function (_0x48ea80, _0x273a3e) {
                return _0x48ea80 === _0x273a3e;
            },
            'OVpIo': function (_0x581f3e, _0x410f29) {
                return _0x581f3e && _0x410f29;
            },
            'lrNfe': function (_0x5c835c) {
                return _0x5c835c();
            },
            'yVXSy': function (_0x849e86, _0x426d13) {
                return _0x849e86(_0x426d13);
            },
            'dqWvu': function (_0x5be753, _0x372b33) {
                return _0x5be753 === _0x372b33;
            },
            'UtoeT': _0x440793(0x15b),
            'aMCHk': _0x440793(0x134),
            'gzwCh': function (_0xc8a97d, _0x8cfb68) {
                return _0xc8a97d > _0x8cfb68;
            },
            'yXlFW': function (_0x3faf29, _0x27ee2e) {
                return _0x3faf29 < _0x27ee2e;
            },
            'uodWd': 'plinko',
            'yPmFN': function (_0x4213a7, _0x88560b) {
                return _0x4213a7 === _0x88560b;
            },
            'TNyGP': _0x440793(0x27e),
            'zdmYn': function (_0x1e4095, _0x144b46) {
                return _0x1e4095 === _0x144b46;
            },
            'xYCYr': function (_0x401c15, _0x477d77) {
                return _0x401c15 === _0x477d77;
            },
            'aevGR': _0x440793(0x284),
            'ebMac': function (_0x23ba2b, _0xd11764) {
                return _0x23ba2b > _0xd11764;
            },
            'qyOsg': function (_0x4c8b64, _0x81f1d2) {
                return _0x4c8b64 === _0x81f1d2;
            },
            'plpzF': 'outside',
            'iSNOm': function (_0x4399ff, _0x400127) {
                return _0x4399ff < _0x400127;
            },
            'tfWit': _0x440793(0x26a),
            'HNBvB': function (_0x150eea, _0x18cd0a) {
                return _0x150eea < _0x18cd0a;
            },
            'aLbJA': function (_0xeedeea, _0xbdc280) {
                return _0xeedeea > _0xbdc280;
            },
            'OthXg': function (_0x1d9d54, _0x4a1920) {
                return _0x1d9d54 < _0x4a1920;
            },
            'GqufP': function (_0x48d908, _0x39940e) {
                return _0x48d908 || _0x39940e;
            },
            'ZBlsq': function (_0x1c6100, _0x2551f8) {
                return _0x1c6100 >= _0x2551f8;
            },
            'KSpGj': _0x440793(0x1e0),
            'pYWIk': _0x440793(0x19b),
            'CmIjf': '3|4|1|5|2|0',
            'YfNbj': function (_0x3d7f7b, _0x2f034d) {
                return _0x3d7f7b > _0x2f034d;
            },
            'vjjlS': _0x440793(0x3a4),
            'InvEU': function (_0x4a855c, _0x507ec1) {
                return _0x4a855c > _0x507ec1;
            },
            'rVmCc': function (_0x207ecb, _0x2416f5) {
                return _0x207ecb > _0x2416f5;
            },
            'csnMs': function (_0x43c92d, _0x504409) {
                return _0x43c92d < _0x504409;
            }
        }, _0x553231 = Date[_0x440793(0x39a)]();
    speedHistory[_0x440793(0x14e)](_0x553231);
    const _0x24b746 = 0x2710;
    speedHistory = speedHistory['filter'](_0x334c0f => _0x553231 - _0x334c0f <= _0x24b746), bets++, lastBet[_0x440793(0x12e)] = lastBet['roll'], lastBet[_0x440793(0x3c8)] = target, lastBet[_0x440793(0x2a3)] = target;
    _0x52d612[_0x440793(0x2d7)](game, _0x52d612[_0x440793(0x3b2)]) && (lastBet[_0x440793(0x3d4)] = chance1, lastBet[_0x440793(0x166)] = chance1, lastBet[_0x440793(0x3be)] = chance2, lastBet[_0x440793(0x26d)] = chance2, lastBet[_0x440793(0x191)] = chance3, lastBet[_0x440793(0x3c4)] = chance3, lastBet[_0x440793(0x155)] = chance4, lastBet['Chance4'] = chance4, lastBet[_0x440793(0x3ee)] = betSide, lastBet[_0x440793(0x127)] = betSide);
    lastBet['result'] = result, lastBet[_0x440793(0x331)] = result, lastBet[_0x440793(0x146)] = currentprofit, lastBet[_0x440793(0x3ae)] = currentprofit, lastBet['Nonce'] = lastBet[_0x440793(0x145)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (game === _0x52d612[_0x440793(0x135)])
        win = lastBet[_0x440793(0x39b)] ? _0x52d612[_0x440793(0x133)](lastBet[_0x440793(0x1f7)], lastBet['target']) : _0x52d612['yXlFW'](lastBet[_0x440793(0x1f7)], lastBet[_0x440793(0x3c8)]);
    else {
        if (_0x52d612[_0x440793(0x2d7)](game, _0x52d612[_0x440793(0x17e)]) || _0x52d612[_0x440793(0x1a2)](game, _0x52d612[_0x440793(0x10f)]))
            win = lastBet[_0x440793(0x146)] > 0x0;
        else {
            if (_0x52d612[_0x440793(0x25f)](game, _0x52d612['UtoeT'])) {
                if (_0x52d612[_0x440793(0x206)](lastBet[_0x440793(0x3ee)], _0x52d612['aevGR']))
                    win = _0x52d612[_0x440793(0x1b1)](lastBet[_0x440793(0x215)], lastBet[_0x440793(0x3d4)]) && lastBet['roll'] < lastBet[_0x440793(0x3be)];
                else {
                    if (_0x52d612['qyOsg'](lastBet[_0x440793(0x3ee)], _0x52d612[_0x440793(0x228)]))
                        win = _0x52d612[_0x440793(0x275)](lastBet['roll'], lastBet[_0x440793(0x3d4)]) || _0x52d612['ebMac'](lastBet['roll'], lastBet['chance2']);
                    else {
                        if (_0x52d612[_0x440793(0x32f)](lastBet[_0x440793(0x3ee)], _0x52d612[_0x440793(0x28a)])) {
                            const _0x221a60 = lastBet[_0x440793(0x215)] > lastBet['chance1'] && _0x52d612[_0x440793(0x2c9)](lastBet['roll'], lastBet[_0x440793(0x3be)]), _0x177e53 = _0x52d612[_0x440793(0x3ad)](lastBet['roll'], lastBet[_0x440793(0x191)]) && _0x52d612[_0x440793(0x2de)](lastBet[_0x440793(0x215)], lastBet[_0x440793(0x155)]);
                            win = _0x52d612[_0x440793(0x1f6)](_0x221a60, _0x177e53);
                        }
                    }
                }
            } else
                win = _0x52d612[_0x440793(0x328)](lastBet[_0x440793(0x1f7)], lastBet[_0x440793(0x3c8)]);
        }
    }
    if (win) {
        const _0x5f48a3 = _0x52d612['KSpGj'][_0x440793(0x15f)]('|');
        let _0x337170 = 0x0;
        while (!![]) {
            switch (_0x5f48a3[_0x337170++]) {
            case '0':
                winstreak++;
                continue;
            case '1':
                color = _0x52d612[_0x440793(0x24a)];
                continue;
            case '2':
                wins++;
                continue;
            case '3':
                currentstreak = winstreak;
                continue;
            case '4':
                losestreak = 0x0;
                continue;
            }
            break;
        }
    } else {
        const _0x4fe482 = _0x52d612[_0x440793(0x1f8)][_0x440793(0x15f)]('|');
        let _0x53f9d8 = 0x0;
        while (!![]) {
            switch (_0x4fe482[_0x53f9d8++]) {
            case '0':
                if (_0x52d612[_0x440793(0x36a)](previousbet, maxLosseAmount))
                    maxLosseAmount = previousbet;
                continue;
            case '1':
                losestreak++;
                continue;
            case '2':
                currentstreak = -losestreak;
                continue;
            case '3':
                color = _0x52d612['vjjlS'];
                continue;
            case '4':
                losses++;
                continue;
            case '5':
                winstreak = 0x0;
                continue;
            }
            break;
        }
    }
    if (_0x52d612[_0x440793(0x405)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x52d612[_0x440793(0x143)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x52d612[_0x440793(0x1b1)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x52d612[_0x440793(0x2c0)](balance, minbalance))
        minbalance = balance;
    if (_0x52d612['aLbJA'](balance, maxbalance))
        maxbalance = balance;
    if (_0x52d612[_0x440793(0x2c0)](profit, minprofit))
        minprofit = profit;
    if (profit > maxprofit)
        maxprofit = profit;
    showInfo()['then'](async () => {
        const _0x31bd82 = _0x440793;
        try {
            if (mode === _0x52d612['TuhnU'])
                await _0x52d612[_0x31bd82(0x3d1)](updateLua);
            else {
                if (mode === 'js')
                    await _0x52d612[_0x31bd82(0x3d1)](dobet);
                else
                    _0x52d612[_0x31bd82(0x2d0)](mode, _0x31bd82(0x3e3)) && await handleAdvanced();
            }
            if (_0x52d612[_0x31bd82(0x3cf)](win, sOW))
                _0x52d612[_0x31bd82(0x3d1)](stop);
            if (run)
                _0x52d612[_0x31bd82(0x3d1)](playBet);
        } catch (_0x55042d) {
            _0x52d612[_0x31bd82(0x3f8)](stop), _0x52d612[_0x31bd82(0x3d2)](log, _0x55042d);
        }
    });
}
async function showInfo() {
    const _0x5f4f4f = _0x4dbf1d, _0x3056fc = {
            'RyrjF': _0x5f4f4f(0x30b),
            'fcPYV': function (_0x4ec8dd, _0x144ed7) {
                return _0x4ec8dd < _0x144ed7;
            },
            'EQzbV': _0x5f4f4f(0x3a4),
            'uHNTz': _0x5f4f4f(0x19b),
            'mfwfu': function (_0x5cbf12, _0x1da911) {
                return _0x5cbf12 === _0x1da911;
            },
            'YAqSF': _0x5f4f4f(0x2c3),
            'hvtSc': function (_0x566ee2, _0x5a1e27) {
                return _0x566ee2 > _0x5a1e27;
            },
            'tlPdv': function (_0x25f0ce, _0x4394b5) {
                return _0x25f0ce > _0x4394b5;
            },
            'gsACd': _0x5f4f4f(0x3f4),
            'YhbDF': _0x5f4f4f(0x17c),
            'fbUST': _0x5f4f4f(0x346),
            'FJOZq': _0x5f4f4f(0x1cd),
            'bMFJd': 'wdbLosses',
            'UvlkO': _0x5f4f4f(0x2d9),
            'mruvY': _0x5f4f4f(0x234),
            'xhBOX': 'wdbMaxProfit',
            'twiYo': function (_0x29016b, _0xdc4528) {
                return _0x29016b / _0xdc4528;
            },
            'ndEsR': function (_0x5bda57, _0x2f026f) {
                return _0x5bda57 * _0x2f026f;
            },
            'iTMce': function (_0x3eba87, _0x49e6a3) {
                return _0x3eba87(_0x49e6a3);
            },
            'rVMxV': function (_0x2893c4, _0x285d99) {
                return _0x2893c4 / _0x285d99;
            },
            'Jjegb': function (_0x13a19e, _0xde1be3) {
                return _0x13a19e + _0xde1be3;
            },
            'YSaau': function (_0x51ec5a, _0x106d05) {
                return _0x51ec5a(_0x106d05);
            },
            'HXvMv': 'wdbWrapPercentProfit',
            'pJFVB': _0x5f4f4f(0x134),
            'euPfX': function (_0x24436f, _0x8eb0c4) {
                return _0x24436f(_0x8eb0c4);
            },
            'wdOrJ': _0x5f4f4f(0x15b),
            'oNUcq': _0x5f4f4f(0x290),
            'QRcSP': function (_0x5588ae, _0x157c83) {
                return _0x5588ae + _0x157c83;
            },
            'nJhSP': function (_0x1cc68f, _0x1f06ff) {
                return _0x1cc68f(_0x1f06ff);
            },
            'Xcxur': function (_0x5ed4f1, _0xbb3b82) {
                return _0x5ed4f1(_0xbb3b82);
            },
            'bCGPo': function (_0x334e45, _0x32d4d7) {
                return _0x334e45(_0x32d4d7);
            },
            'XFNWm': 'keno',
            'fFatL': function (_0x30177e, _0x2da8ba) {
                return _0x30177e(_0x2da8ba);
            },
            'hByyo': _0x5f4f4f(0x345),
            'aiOLS': function (_0x27a154, _0x249cad) {
                return _0x27a154 + _0x249cad;
            },
            'gmMlq': function (_0x25cbe4, _0x3d0452) {
                return _0x25cbe4 + _0x3d0452;
            },
            'XtyAE': function (_0x176e42, _0x479e6e) {
                return _0x176e42 + _0x479e6e;
            },
            'tREFa': function (_0x2a393d, _0xfa28e4) {
                return _0x2a393d + _0xfa28e4;
            },
            'EOGGF': function (_0x59085b, _0x4e74fb) {
                return _0x59085b + _0x4e74fb;
            },
            'JGYsz': function (_0x2c3497, _0x5d74eb) {
                return _0x2c3497 === _0x5d74eb;
            },
            'aRtqv': function (_0x121864, _0x4c8b52) {
                return _0x121864(_0x4c8b52);
            },
            'HYKVE': _0x5f4f4f(0x1b0),
            'oWNkH': '#91f190',
            'rxbbE': _0x5f4f4f(0x2d3),
            'BvzFQ': 'wdbHistory',
            'TKjhP': '#wdbHistory',
            'VHIEB': '\x20|\x20',
            'MvzlS': function (_0x1cd4e7, _0x2b7391) {
                return _0x1cd4e7 !== _0x2b7391;
            },
            'TziJh': function (_0x1f23e9, _0x5ce503) {
                return _0x1f23e9 !== _0x5ce503;
            },
            'YHhjq': function (_0x2939e7, _0x2cd24d) {
                return _0x2939e7(_0x2cd24d);
            },
            'ItsQk': function (_0x55f3eb, _0x24c5c6) {
                return _0x55f3eb !== _0x24c5c6;
            },
            'fEtTI': function (_0x5c39ff, _0x5c245e) {
                return _0x5c39ff === _0x5c245e;
            },
            'ypiPR': function (_0x3bcccb, _0x59c870) {
                return _0x3bcccb(_0x59c870);
            },
            'hXuzs': function (_0x4546e7, _0xd32217) {
                return _0x4546e7(_0xd32217);
            },
            'xsQqg': function (_0x17df3c, _0x391595) {
                return _0x17df3c === _0x391595;
            },
            'JIymv': function (_0x389385, _0x543e90) {
                return _0x389385 === _0x543e90;
            },
            'HOxNK': function (_0x1f3f8c, _0x3dc700) {
                return _0x1f3f8c === _0x3dc700;
            },
            'ZQhEk': function (_0x4f4948, _0x580a35) {
                return _0x4f4948 === _0x580a35;
            },
            'PFAUj': function (_0x2bf9f6, _0x390c21) {
                return _0x2bf9f6 === _0x390c21;
            },
            'WoopO': function (_0x5d5f79, _0x3afed2) {
                return _0x5d5f79 > _0x3afed2;
            }
        }, _0x4cb39c = profit === 0x0 ? darkMode ? _0x5f4f4f(0x2c3) : _0x3056fc[_0x5f4f4f(0x35b)] : _0x3056fc[_0x5f4f4f(0x2bb)](profit, 0x0) ? _0x3056fc['EQzbV'] : _0x3056fc[_0x5f4f4f(0x3a0)], _0x28f3e7 = _0x3056fc[_0x5f4f4f(0x167)](currentstreak, 0x0) ? darkMode ? _0x3056fc[_0x5f4f4f(0x3fb)] : _0x3056fc[_0x5f4f4f(0x35b)] : _0x3056fc[_0x5f4f4f(0x2bb)](currentstreak, 0x0) ? _0x3056fc[_0x5f4f4f(0x233)] : _0x3056fc[_0x5f4f4f(0x3a0)], _0x4a35e2 = _0x3056fc[_0x5f4f4f(0x25b)](maxwinstreak, 0x0) ? _0x3056fc[_0x5f4f4f(0x3a0)] : _0x3056fc[_0x5f4f4f(0x35b)], _0x9f4a2c = _0x3056fc[_0x5f4f4f(0x381)](maxlosestreak, 0x0) ? _0x3056fc[_0x5f4f4f(0x233)] : _0x3056fc[_0x5f4f4f(0x35b)];
    document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x22e)])[_0x5f4f4f(0x1c0)]['color'] = _0x4a35e2, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x112))[_0x5f4f4f(0x1c0)][_0x5f4f4f(0x1bc)] = _0x9f4a2c, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x1db)])['innerText'] = wagered[_0x5f4f4f(0x23c)](decimalAmountView), document['getElementById'](_0x5f4f4f(0x34b))['innerText'] = balance[_0x5f4f4f(0x23c)](decimalAmountView), document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x293)])[_0x5f4f4f(0x1c0)][_0x5f4f4f(0x1bc)] = _0x4cb39c, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x293)])[_0x5f4f4f(0x283)] = profit[_0x5f4f4f(0x23c)](decimalAmountView), document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x2c7))[_0x5f4f4f(0x283)] = maxBetAmount[_0x5f4f4f(0x23c)](decimalAmountView), document['getElementById']('wdbHighLose')[_0x5f4f4f(0x283)] = maxLosseAmount['toFixed'](decimalAmountView), document[_0x5f4f4f(0x1bf)](_0x3056fc['FJOZq'])['innerText'] = bets, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x23b))[_0x5f4f4f(0x283)] = wins, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x2bc)])[_0x5f4f4f(0x283)] = losses, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x2d9))[_0x5f4f4f(0x1c0)][_0x5f4f4f(0x1bc)] = _0x28f3e7, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x10c)])['innerText'] = currentstreak, document[_0x5f4f4f(0x1bf)](_0x3056fc['gsACd'])[_0x5f4f4f(0x283)] = maxwinstreak, document['getElementById']('wdbHighLoseStreak')[_0x5f4f4f(0x283)] = maxlosestreak, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x2b5))[_0x5f4f4f(0x283)] = minbalance['toFixed'](decimalAmountView), document[_0x5f4f4f(0x1bf)](_0x3056fc['mruvY'])['innerText'] = maxbalance['toFixed'](decimalAmountView), document[_0x5f4f4f(0x1bf)]('wdbMinProfit')[_0x5f4f4f(0x283)] = minprofit[_0x5f4f4f(0x23c)](decimalAmountView), document['getElementById'](_0x3056fc['xhBOX'])[_0x5f4f4f(0x283)] = maxprofit['toFixed'](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x3056fc[_0x5f4f4f(0x280)](Math[_0x5f4f4f(0x3cd)](_0x3056fc[_0x5f4f4f(0x3dd)](percentWagered + Number['EPSILON'], 0x2710)), 0x2710), percentWagered = _0x3056fc[_0x5f4f4f(0x235)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x192))[_0x5f4f4f(0x283)] = percentWagered, percentProfit = _0x3056fc[_0x5f4f4f(0x280)](profit, startBalance) * 0x64, percentProfit = _0x3056fc[_0x5f4f4f(0x209)](Math['round'](_0x3056fc['ndEsR'](_0x3056fc[_0x5f4f4f(0x351)](percentProfit, Number[_0x5f4f4f(0x296)]), 0x2710)), 0x2710), percentProfit = _0x3056fc[_0x5f4f4f(0x3ef)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x240)])[_0x5f4f4f(0x1c0)][_0x5f4f4f(0x1bc)] = _0x4cb39c, document[_0x5f4f4f(0x1bf)](_0x5f4f4f(0x16c))[_0x5f4f4f(0x283)] = percentProfit;
    if (!stopHistory) {
        const _0x2a839a = _0x3056fc[_0x5f4f4f(0x167)](game, _0x3056fc[_0x5f4f4f(0x1de)]) ? lastBet[_0x5f4f4f(0x39b)] ? '>' : '<' : '>', _0x2e89fd = lastBet[_0x5f4f4f(0x39b)] ? _0x5f4f4f(0x20e) + bets + '\x22\x20type=\x22checkbox\x22\x20checked\x20/>' : '<input\x20id=\x22bethigh' + bets + _0x5f4f4f(0x1c5), _0x22ba2f = '' + (havePlinkoRows ? _0x3056fc[_0x5f4f4f(0x351)](plinkoRow, _0x5f4f4f(0x3b3)) : '') + plinkoRisk, _0x2ac002 = _0x5f4f4f(0x18f) + bets + _0x5f4f4f(0x255) + _0x3056fc['euPfX'](Number, lastBet[_0x5f4f4f(0x337)])[_0x5f4f4f(0x23c)](decimalAmountView) + _0x5f4f4f(0x255) + (game !== _0x3056fc['wdOrJ'] ? _0x2e89fd : betSide) + _0x5f4f4f(0x255) + (game === _0x3056fc[_0x5f4f4f(0x24c)] ? _0x22ba2f : _0x3056fc[_0x5f4f4f(0x31d)](_0x3056fc[_0x5f4f4f(0x281)](Number, lastBet[_0x5f4f4f(0x19f)])['toFixed'](decimalChanceView), '%')) + _0x5f4f4f(0x255) + _0x3056fc[_0x5f4f4f(0x3ca)](Number, lastBet['roll'])[_0x5f4f4f(0x23c)](decimalChanceView) + '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x3056fc[_0x5f4f4f(0x342)](Number, lastBet[_0x5f4f4f(0x146)])['toFixed'](decimalAmountView) + _0x5f4f4f(0x255) + (game !== 'rangedice' ? _0x3056fc[_0x5f4f4f(0x167)](game, _0x5f4f4f(0x290)) ? _0x22ba2f : _0x3056fc['mfwfu'](game, _0x3056fc[_0x5f4f4f(0x387)]) ? _0x3056fc[_0x5f4f4f(0x28d)](Number, lastBet['target'])[_0x5f4f4f(0x23c)](0x0) + _0x3056fc['hByyo'] : _0x3056fc['aiOLS'](_0x2a839a, Number(lastBet[_0x5f4f4f(0x3c8)])[_0x5f4f4f(0x23c)](decimalTargetResult)) : _0x3056fc[_0x5f4f4f(0x271)](_0x3056fc['XtyAE'](_0x3056fc[_0x5f4f4f(0x30a)](target1 + '|', target2), target3 ? _0x3056fc[_0x5f4f4f(0x31d)]('|', target3) : ''), target4 ? _0x3056fc[_0x5f4f4f(0x2b3)]('|', target4) : '')) + _0x5f4f4f(0x255) + (_0x3056fc[_0x5f4f4f(0x35d)](game, _0x3056fc[_0x5f4f4f(0x387)]) ? _0x3056fc[_0x5f4f4f(0x31d)](_0x3056fc[_0x5f4f4f(0x181)](Number, result)[_0x5f4f4f(0x23c)](0x0), _0x3056fc[_0x5f4f4f(0x2fa)]) : _0x3056fc[_0x5f4f4f(0x3ef)](Number, result)['toFixed'](decimalTargetResult)) + _0x5f4f4f(0x255) + lastBet[_0x5f4f4f(0x145)] + _0x5f4f4f(0x255) + lastBet['id'] + _0x5f4f4f(0x28c), _0x207c53 = document[_0x5f4f4f(0x1fd)]('tr');
        _0x207c53[_0x5f4f4f(0x1c0)]['backgroundColor'] = win ? _0x3056fc[_0x5f4f4f(0x203)] : _0x3056fc['rxbbE'], _0x207c53[_0x5f4f4f(0x248)] = _0x2ac002, document[_0x5f4f4f(0x1bf)](_0x3056fc[_0x5f4f4f(0x276)])[_0x5f4f4f(0x31a)](_0x207c53, document['getElementById'](_0x3056fc[_0x5f4f4f(0x276)])[_0x5f4f4f(0x3a7)][0x0]);
        const _0x126e78 = document[_0x5f4f4f(0x3c6)](_0x3056fc[_0x5f4f4f(0x1e2)])[_0x5f4f4f(0x2dd)];
        if (_0x3056fc[_0x5f4f4f(0x25b)](_0x126e78[_0x5f4f4f(0x212)], maxRows))
            document[_0x5f4f4f(0x3c6)](_0x3056fc[_0x5f4f4f(0x1e2)])[_0x5f4f4f(0x29d)]['remove']();
    }
    const _0x7b7e90 = '' + (havePlinkoRows ? _0x3056fc[_0x5f4f4f(0x31d)](plinkoRow, _0x3056fc['VHIEB']) : '') + plinkoRisk;
    return fullLogs[_0x5f4f4f(0x14e)]({
        'game': game,
        'bets': bets,
        'amount': _0x3056fc[_0x5f4f4f(0x3ef)](Number, lastBet['amount'])[_0x5f4f4f(0x23c)](decimalAmountView),
        'bethigh': _0x3056fc['MvzlS'](game, _0x5f4f4f(0x15b)) ? lastBet[_0x5f4f4f(0x39b)] : null,
        'chance': _0x3056fc['TziJh'](game, _0x3056fc[_0x5f4f4f(0x30e)]) ? _0x3056fc[_0x5f4f4f(0x1c1)](Number, lastBet[_0x5f4f4f(0x19f)])['toFixed'](decimalChanceView) : lastBet[_0x5f4f4f(0x19f)],
        'target': _0x3056fc[_0x5f4f4f(0x38a)](game, _0x3056fc[_0x5f4f4f(0x30e)]) ? _0x3056fc[_0x5f4f4f(0x2f5)](game, _0x3056fc['oNUcq']) ? _0x7b7e90 : lastBet[_0x5f4f4f(0x3c8)] : null,
        'roll': _0x3056fc[_0x5f4f4f(0x2c1)](Number, lastBet['roll'])[_0x5f4f4f(0x23c)](decimalChanceView),
        'result': Number(result)[_0x5f4f4f(0x23c)](decimalTargetResult),
        'profit': _0x3056fc['hXuzs'](Number, lastBet[_0x5f4f4f(0x146)])[_0x5f4f4f(0x23c)](decimalAmountView),
        'nonce': lastBet[_0x5f4f4f(0x145)],
        'id': lastBet['id'],
        'chance1': _0x3056fc[_0x5f4f4f(0x396)](game, _0x5f4f4f(0x15b)) ? lastBet[_0x5f4f4f(0x3d4)] : null,
        'chance2': _0x3056fc[_0x5f4f4f(0x3a2)](game, _0x3056fc[_0x5f4f4f(0x30e)]) ? lastBet['chance2'] : null,
        'chance3': _0x3056fc[_0x5f4f4f(0x14f)](game, _0x3056fc[_0x5f4f4f(0x30e)]) ? lastBet['chance3'] : null,
        'chance4': _0x3056fc[_0x5f4f4f(0x3ea)](game, _0x5f4f4f(0x15b)) ? lastBet[_0x5f4f4f(0x155)] : null,
        'betSide': _0x3056fc[_0x5f4f4f(0x1b3)](game, _0x3056fc[_0x5f4f4f(0x30e)]) ? lastBet[_0x5f4f4f(0x3ee)] : null
    }), _0x3056fc[_0x5f4f4f(0x2ca)](fullLogs[_0x5f4f4f(0x212)], 0x2710) && fullLogs[_0x5f4f4f(0x113)](), !stopChart && chart[_0x5f4f4f(0x261)](betsChart, profitChart, color), _0x5f4f4f(0x1ac);
}
async function updateStats() {
    const _0x51ea0d = _0x4dbf1d, _0x5ac182 = {
            'oNJqH': function (_0x5e20bd, _0x25d4e5) {
                return _0x5e20bd === _0x25d4e5;
            },
            'ynLAD': _0x51ea0d(0x2c3),
            'UJZnE': 'black',
            'axMGk': 'red',
            'OMIsN': _0x51ea0d(0x19b),
            'BECel': function (_0x4d6580, _0x49a297) {
                return _0x4d6580 < _0x49a297;
            },
            'nAceX': function (_0xa27f4d, _0x1633e9) {
                return _0xa27f4d > _0x1633e9;
            },
            'XpdTu': _0x51ea0d(0x3f4),
            'BJbzW': _0x51ea0d(0x17c),
            'AUkjG': 'wdbBalance',
            'puNRB': 'wdbProfit',
            'baSOJ': _0x51ea0d(0x2c7),
            'HyXuH': _0x51ea0d(0x1cd),
            'yEHdj': _0x51ea0d(0x23b),
            'dirFo': _0x51ea0d(0x243),
            'ocGyE': _0x51ea0d(0x2d9),
            'JQrEy': _0x51ea0d(0x2b5),
            'UUoyZ': _0x51ea0d(0x234),
            'mYmaK': _0x51ea0d(0x137),
            'TtAcM': _0x51ea0d(0x3c1),
            'fHKzU': function (_0x570105, _0x100296) {
                return _0x570105 / _0x100296;
            },
            'WLCvJ': function (_0x453f36, _0x577a25) {
                return _0x453f36 * _0x577a25;
            },
            'EJlRc': function (_0x6657f2, _0x1be12e) {
                return _0x6657f2 + _0x1be12e;
            },
            'DRvpP': function (_0x2c60c9, _0x284a3d) {
                return _0x2c60c9(_0x284a3d);
            },
            'fToAU': function (_0x307017, _0x221899) {
                return _0x307017(_0x221899);
            },
            'eTssk': _0x51ea0d(0x192),
            'DcnpX': function (_0x43d91e, _0x4120d4) {
                return _0x43d91e * _0x4120d4;
            },
            'KJapd': function (_0x42fd27, _0x4992de) {
                return _0x42fd27 + _0x4992de;
            },
            'SNcdQ': _0x51ea0d(0x3d5),
            'PuLcC': _0x51ea0d(0x16c),
            'ktTnm': _0x51ea0d(0x1b9)
        }, _0x24e24e = _0x5ac182[_0x51ea0d(0x3a3)](profit, 0x0) ? darkMode ? _0x5ac182[_0x51ea0d(0x1c2)] : _0x5ac182[_0x51ea0d(0x25d)] : profit < 0x0 ? _0x5ac182[_0x51ea0d(0x268)] : _0x5ac182[_0x51ea0d(0x108)], _0x48b7f5 = currentstreak === 0x0 ? darkMode ? _0x5ac182[_0x51ea0d(0x1c2)] : _0x51ea0d(0x30b) : _0x5ac182[_0x51ea0d(0x21d)](currentstreak, 0x0) ? _0x5ac182[_0x51ea0d(0x268)] : _0x5ac182['OMIsN'], _0x3eed15 = _0x5ac182['nAceX'](maxwinstreak, 0x0) ? _0x5ac182[_0x51ea0d(0x108)] : darkMode ? _0x5ac182[_0x51ea0d(0x1c2)] : _0x5ac182[_0x51ea0d(0x25d)], _0x75a7a9 = _0x5ac182[_0x51ea0d(0x34a)](maxlosestreak, 0x0) ? _0x51ea0d(0x3a4) : darkMode ? _0x5ac182[_0x51ea0d(0x1c2)] : _0x5ac182[_0x51ea0d(0x25d)];
    return document[_0x51ea0d(0x1bf)](_0x5ac182['XpdTu'])[_0x51ea0d(0x1c0)][_0x51ea0d(0x1bc)] = _0x3eed15, document[_0x51ea0d(0x1bf)]('wdbHighLoseStreak')[_0x51ea0d(0x1c0)][_0x51ea0d(0x1bc)] = _0x75a7a9, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x36b)])[_0x51ea0d(0x283)] = wagered[_0x51ea0d(0x23c)](decimalAmountView), document['getElementById'](_0x5ac182[_0x51ea0d(0x24e)])[_0x51ea0d(0x283)] = balance['toFixed'](decimalAmountView), document['getElementById'](_0x5ac182['puNRB'])[_0x51ea0d(0x1c0)][_0x51ea0d(0x1bc)] = _0x24e24e, document[_0x51ea0d(0x1bf)](_0x51ea0d(0x346))[_0x51ea0d(0x283)] = profit[_0x51ea0d(0x23c)](decimalAmountView), document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x10a)])[_0x51ea0d(0x283)] = maxBetAmount[_0x51ea0d(0x23c)](decimalAmountView), document['getElementById'](_0x51ea0d(0x244))[_0x51ea0d(0x283)] = maxLosseAmount[_0x51ea0d(0x23c)](decimalAmountView), document[_0x51ea0d(0x1bf)](_0x5ac182['HyXuH'])[_0x51ea0d(0x283)] = bets, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x119)])[_0x51ea0d(0x283)] = wins, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x2ec)])[_0x51ea0d(0x283)] = losses, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x20f)])['style']['color'] = _0x48b7f5, document[_0x51ea0d(0x1bf)](_0x5ac182['ocGyE'])['innerText'] = currentstreak, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x2f1)])[_0x51ea0d(0x283)] = maxwinstreak, document['getElementById'](_0x51ea0d(0x112))[_0x51ea0d(0x283)] = maxlosestreak, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x33c)])[_0x51ea0d(0x283)] = minbalance[_0x51ea0d(0x23c)](decimalAmountView), document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x391)])[_0x51ea0d(0x283)] = maxbalance[_0x51ea0d(0x23c)](decimalAmountView), document[_0x51ea0d(0x1bf)](_0x5ac182['mYmaK'])[_0x51ea0d(0x283)] = minprofit[_0x51ea0d(0x23c)](decimalAmountView), document[_0x51ea0d(0x1bf)](_0x5ac182['TtAcM'])[_0x51ea0d(0x283)] = maxprofit[_0x51ea0d(0x23c)](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x5ac182[_0x51ea0d(0x350)](Math['round'](_0x5ac182['WLCvJ'](_0x5ac182[_0x51ea0d(0x270)](percentWagered, Number['EPSILON']), 0x64)), 0x64), percentWagered = _0x5ac182[_0x51ea0d(0x214)](isNaN, percentWagered) || !_0x5ac182[_0x51ea0d(0x21f)](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x51ea0d(0x1bf)](_0x5ac182['eTssk'])[_0x51ea0d(0x283)] = percentWagered, percentProfit = _0x5ac182[_0x51ea0d(0x2f7)](_0x5ac182[_0x51ea0d(0x350)](profit, startBalance), 0x64), percentProfit = _0x5ac182[_0x51ea0d(0x350)](Math[_0x51ea0d(0x3cd)](_0x5ac182[_0x51ea0d(0x18c)](_0x5ac182[_0x51ea0d(0x2db)](percentProfit, Number[_0x51ea0d(0x296)]), 0x64)), 0x64), percentProfit = isNaN(percentProfit) || !_0x5ac182['DRvpP'](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x51ea0d(0x1bf)](_0x5ac182[_0x51ea0d(0x3fc)])[_0x51ea0d(0x1c0)][_0x51ea0d(0x1bc)] = _0x24e24e, document['getElementById'](_0x5ac182[_0x51ea0d(0x378)])[_0x51ea0d(0x283)] = percentProfit, _0x5ac182[_0x51ea0d(0x198)];
}
function log(_0x2ec2ff) {
    const _0x416ccd = _0x4dbf1d, _0x26a0cf = {
            'tRDJv': 'white',
            'aoNrv': function (_0x49fc2f, _0x42dd47) {
                return _0x49fc2f > _0x42dd47;
            }
        }, _0x18f3e2 = document[_0x416ccd(0x1bf)]('wdbLog'), _0x43086d = document[_0x416ccd(0x1fd)]('li');
    _0x43086d['innerText'] = _0x2ec2ff, _0x43086d[_0x416ccd(0x1c0)][_0x416ccd(0x1bc)] = darkMode ? _0x26a0cf[_0x416ccd(0x2be)] : _0x416ccd(0x30b), _0x18f3e2[_0x416ccd(0x31a)](_0x43086d, _0x18f3e2[_0x416ccd(0x12f)]), _0x26a0cf[_0x416ccd(0x318)](_0x18f3e2[_0x416ccd(0x3a7)][_0x416ccd(0x212)], maxRows) && _0x18f3e2['removeChild'](_0x18f3e2[_0x416ccd(0x29d)]);
}
function _0x23ec() {
    const _0x4d0485 = [
        '\x20to\x20win',
        'between2',
        '\x0a\x20\x20\x20\x20chance2=',
        'left',
        'Chance2',
        'IUkIR',
        'advancedBetHighOnLoseCheck',
        'EJlRc',
        'gmMlq',
        'rywVO',
        'scriptname\x20=\x20\x22\x22',
        'eCoXO',
        'iSNOm',
        'BvzFQ',
        'rPJJF',
        'filter',
        '#2a2a2a',
        'wdbMain',
        'not\x20',
        'gZgEV',
        'UEmBf',
        'keno',
        'advancedBetHighOnBet',
        'twiYo',
        'nJhSP',
        '\x0a\x20\x20\x20\x20wagered=',
        'innerText',
        'between',
        'uhgZj',
        'UrObF',
        'MpgNr',
        '3|2|1|0|4',
        'response',
        'tfWit',
        '1|2|0|5|3|4',
        '</td>',
        'fFatL',
        'HKirW',
        'loadCSS',
        'plinko',
        'csQjv',
        'RDVzR',
        'fbUST',
        'light1',
        'xRGQf',
        'EPSILON',
        'BJVPF',
        'loadScript',
        'VDKCp',
        'lineColor',
        'Betting\x20',
        'DDSJe',
        'lastChild',
        'XnRlQ',
        '\x0a\x20\x20\x20\x20chance4=',
        'GTrXG',
        'PyUth',
        'asmpF',
        'Target',
        '\x0a\x20\x20\x20\x20win=',
        'kenoNumbers',
        'clBew',
        'wqxoc',
        'position',
        'QAvAy',
        'backgroundColor',
        '\x0a\x20\x20\x20\x20bets=',
        'xRJvb',
        'Nnmar',
        'ItdrH',
        'FOlbw',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'KWMVT',
        'wdbWrap',
        'EOGGF',
        'KPSGx',
        'wdbMinBalance',
        'YlQWY',
        'YsgWZ',
        'gaNyQ',
        '$1=$1-$2\x20',
        'tgSUx',
        'fcPYV',
        'bMFJd',
        '\x20at\x20',
        'tRDJv',
        'files',
        'csnMs',
        'ypiPR',
        'ulVEv',
        'white',
        'resetstatsOnProfitCheck',
        'MCptH',
        'mAuvc',
        'wdbHighBet',
        'beIpB',
        'HNBvB',
        'WoopO',
        '.CodeMirror',
        'sAKfN',
        'chart',
        'LHfFc',
        'baDXe',
        'ifklU',
        'vNPBM',
        'stopOnBalanceCheck',
        '#ffc0cb',
        'YpSXJ',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'dqWvu',
        'Mode',
        'wdbCurrentStreak',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'KJapd',
        'Variables',
        'rows',
        'OthXg',
        'wdbToggleMinimal',
        'return\x20betSide',
        'containerId',
        'advancedStopOnBetsCheck',
        'advancedStopOnLose',
        '#000',
        'querySelectorAll',
        'pFmor',
        '1601622NCTYdC',
        'hxCnZ',
        'top',
        'SzGnP',
        'iWDBf',
        'dirFo',
        'oBDwq',
        'Uimap',
        'BnqMg',
        'dlVUs',
        'XpdTu',
        'floor',
        'advancedChanceOnLose',
        'EUMDc',
        'fEtTI',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'WLCvJ',
        'XTQkw',
        'setItem',
        'HYKVE',
        'Tips',
        'prototype',
        'JQrkI',
        'VPndE',
        'FWhnP',
        'fLsGg',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'ZMrgc',
        'ahtrU',
        'play',
        'wdbStats',
        'TEXTAREA',
        'advancedMultiOnLoseBets',
        'getValue',
        'tREFa',
        'black',
        'GmrfZ',
        'darkMode',
        'wdOrJ',
        '1000px',
        'body',
        'wSSQv',
        'wdbAdvancedMode',
        '\x0a\x20\x20\x20\x20previousbet=',
        'qMWqC',
        'Mhalj',
        'isContentEditable',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'aoNrv',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'insertBefore',
        'ZhaBz',
        'innerHeight',
        'QRcSP',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        'slice',
        '$1=$1/$2\x20',
        '380px',
        'RaDzQ',
        'oCqtl',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'fGGLm',
        'return\x20plinkoRow',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'ZBlsq',
        'nNfZr',
        'Brwgs',
        '%\x20chance\x20to\x20win,\x20',
        'yDDdI',
        'cWHgh',
        'advancedMultiOnWinBets',
        'qyOsg',
        'Idqwl',
        'Result',
        'QkyMe',
        'bcXls',
        'eIKsr',
        'calc(100vh\x20-\x2060px)',
        'ttJoN',
        'amount',
        '2BbDcMr',
        '$1=$1+$2\x20',
        'stopOnProfit',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'JQrEy',
        'FotVy',
        'UQmKg',
        'lIbYC',
        'currency=\x22',
        'xQzAd',
        'bCGPo',
        'FlOKW',
        '\x0a\x20\x20\x20\x20maxprofit=',
        '\x20Balls',
        'wdbProfit',
        'advancedStopAfterStreakCheck',
        'casino=\x22',
        'THuwH',
        'nAceX',
        'wdbBalance',
        'vDeFj',
        '\x20win',
        'stringify',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'fHKzU',
        'Jjegb',
        'Log',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        '700066rOKAeL',
        'defineProperty',
        'setTime',
        'kTyal',
        '#advancedBetHigh',
        '\x0a\x20\x20\x20\x20winstreak=',
        'addEventListener',
        'RyrjF',
        'APpyq',
        'JGYsz',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'GBJng',
        'wwWWq',
        'charAt',
        'HeKTr',
        'zIRNs',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'Innms',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'fixed',
        'checked',
        'xJEQr',
        'YfNbj',
        'BJbzW',
        'stop',
        'maxRows',
        'htAxE',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22',
        'ccUge',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'PQQZE',
        'Stop\x20on\x20roll\x20number\x20',
        'xKwrA',
        'initLuaOk',
        'BXMnN',
        'pEFkH',
        'PuLcC',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'wdbMaxRows',
        'ocMmH',
        'offsetTop',
        'wiggD',
        'sdoKE',
        'save',
        'tlPdv',
        'OOAxb',
        'ZnIyp',
        'www.',
        'lvNKe',
        'JIPGo',
        'XFNWm',
        'wdb-bot-position',
        'ZpgYx',
        'ItsQk',
        'javascript',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'display',
        'IZMTj',
        '\x0a\x20\x20\x20\x20losestreak=',
        'advancedStopOnWins',
        'UUoyZ',
        'dark1',
        'advancedStopOnLoseCheck',
        'advancedBetHighOnProfitCheck',
        'nHmII',
        'xsQqg',
        'RqLuj',
        'zGTok',
        'forEach',
        'now',
        'bethigh',
        'wdbWrapVariables',
        'stopOnBalance',
        'Functions',
        'advancedChanceOnLoseCheck',
        'uHNTz',
        'darcula',
        'JIymv',
        'oNJqH',
        'red',
        'yUnAa',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'children',
        'capitalize',
        'flex',
        'hostname',
        '0:0:0:0',
        'advancedChanceOnWinCheck',
        'aLbJA',
        'Profit',
        '/canvasjs.min.js',
        '\x0a\x20\x20\x20\x20minprofit=',
        'cBGtk',
        'UtoeT',
        '\x20|\x20',
        'map',
        'dataPoints',
        'JUlNa',
        '\x20bet',
        'ZYODb',
        'wdbWrapControl',
        '.wdb-stats\x20div\x20li',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        '.json',
        '4413LnqZWK',
        'chance2',
        'CYTug',
        '350px',
        'wdbMaxProfit',
        'event',
        'return\x20chance1',
        'Chance3',
        'wdbChart',
        'querySelector',
        'theme',
        'target',
        'WecTJ',
        'Xcxur',
        'qYVQl',
        'XqHyR',
        'round',
        'lua',
        'OVpIo',
        'ZevAr',
        'ECeuk',
        'yVXSy',
        'fDeoX',
        'chance1',
        'wdbWrapPercentProfit',
        'vDcgO',
        'PcGIr',
        'load',
        'DCfif',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'NwBPh',
        'vzXOl',
        'ndEsR',
        '1|0|5|4|2|3',
        'nivEs',
        'Eppgj',
        'xNwIg',
        'vFeNz',
        'advanced',
        'YizGn',
        'height',
        'innerWidth',
        '/fengari-web.min.js',
        'EuUhi',
        '\x20lose',
        'ZQhEk',
        'return\x20kenoRisk',
        'wdbWrapHistory',
        'BDFHG',
        'betSide',
        'YSaau',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'join',
        'gTjkU',
        'kwHRL',
        'wdbHighWinStreak',
        'wdbWrapTips',
        '</option>',
        'spKTR',
        'lrNfe',
        'KjVlh',
        'advancedChanceOnWin',
        'YAqSF',
        'SNcdQ',
        'getTime',
        'advancedMultiOnLoseCheck',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'OkdkA',
        'kidVo',
        'replace',
        'xBuKj',
        'ktLWe',
        'InvEU',
        'offsetHeight',
        'download',
        'BLrHm',
        '7|6|3|1|2|0|4|5',
        'OMIsN',
        'SNFFy',
        'baSOJ',
        'krqNq',
        'UvlkO',
        'remove',
        'return\x20chance',
        'TNyGP',
        'stopOnProfitCheck',
        ';path=/',
        'wdbHighLoseStreak',
        'shift',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'qgGNv',
        'deleteH',
        'expires=',
        'MCyyz',
        'yEHdj',
        'oMjfB',
        'wdbScriptBoxJS',
        'YmYwc',
        'nYLiJ',
        'Gaqlp',
        'toString',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'xVrME',
        'getComputedStyle',
        'key',
        '2475312mhZQfV',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'okVaV',
        'BetSide',
        'wdbLoader\x20ok',
        'pOZil',
        'wdbOpenJSScript',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'return\x20currency',
        'borderColor',
        'Roll',
        'firstChild',
        'Rbzpd',
        'IMZPi',
        'onmousemove',
        'gzwCh',
        'dice',
        'aMCHk',
        'start',
        'wdbMinProfit',
        'nvDsU',
        'onmouseup',
        'wCASW',
        '7dorREs',
        'fromTextArea',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'FIvJH',
        'aOFse',
        'disabled',
        'advancedStopAfterStreak',
        'srxVk',
        'rVmCc',
        'wdbFooter',
        'nonce',
        'profit',
        'UnKkL',
        'MlAdJ',
        'wdbWrapLicenseBox',
        'fBeTL',
        'parse',
        'UBgXm',
        'auZoe',
        'push',
        'HOxNK',
        'xWgrG',
        'eaAWE',
        'kgNOv',
        'KKNCT',
        'oKUIj',
        'chance4',
        '632SJizKW',
        '\x0a\x20\x20\x20\x20balance=',
        'oJqSW',
        '5px',
        'wQZJE',
        'rangedice',
        'hstTd',
        'ShLnA',
        'render',
        'split',
        'offsetWidth',
        'scriptName',
        'akBsY',
        'closest',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'UxxxJ',
        'Chance1',
        'mfwfu',
        'yZqtS',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'FIQzM',
        'CPIKb',
        'wdbPercentProfit',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'KHRJu',
        'QXLaa',
        'byMKf',
        'vDcmd',
        'YHrXL',
        'Stop\x20on\x20',
        'EkSmW',
        'CEqrj',
        '\x0a\x20\x20\x20\x20losses=',
        'RkZHk',
        'wdbMenuCoin',
        '_darkMode',
        'data',
        'ZjktU',
        'wdbWagered',
        'jgTtG',
        'uodWd',
        'resetChart',
        'wlxRF',
        'aRtqv',
        'xtaNi',
        'XmQob',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'Connected',
        'ADOxV',
        'EupIq',
        'tDZYu',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'options',
        'OibhW',
        'DcnpX',
        'lDOhS',
        'VvspO',
        '<td>',
        'ysHos',
        'chance3',
        'wdbPercentWagered',
        'advancedMultiOnWin',
        'ykLDW',
        'wdbMenuMode',
        'Chart',
        'WJwCu',
        'ktTnm',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        '#wdbOpenScript',
        'green',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'CZAAS',
        'return\x20plinkoRisk',
        'chance',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'XlkCH',
        'yPmFN',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'block',
        '\x0a\x20\x20\x20\x20chance3=',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'BpdTY',
        '_maxRows',
        '0123456789abcdef',
        'wdbTime',
        'wdbToggleShow',
        'showInfo\x20OK',
        'OMVfB',
        'lvgBQ',
        'setValue',
        '\x20Hits',
        'ebMac',
        'rsYHf',
        'PFAUj',
        'Skjmb',
        'classic',
        'dimgray',
        'TAaMi',
        'rQhKr',
        'updateStats\x20ok',
        'WDBScript',
        'wdbWrapFunctions',
        'color',
        'clientX',
        'syxqi',
        'getElementById',
        'style',
        'YHhjq',
        'ynLAD',
        'substring',
        'kgvhq',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'eqRRm',
        'GxkaN',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'Uhdts',
        'GrpQP',
        'Thlop',
        'default',
        'wdbBets',
        'setOption',
        'cookie',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'RdPKr',
        'advancedChance',
        'LVNiC',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'ryhZf',
        'text',
        'Ilxiq',
        'toUpperCase',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'jmFeH',
        'YhbDF',
        'reset',
        'Nrism',
        'pJFVB',
        '#fff',
        '1|2|0|4|3',
        'ujErr',
        'TKjhP',
        'efKJO',
        '4|2|6|9|15|8|17|16|3|7|10|5|0|13|12|1|14|18|11',
        '190px',
        'prepend',
        'nVVgj',
        'createObjectURL',
        'wdbToggleLive',
        'NKYSd',
        'fzfGc',
        '\x0a\x20\x20\x20\x20wins=',
        'toUTCString',
        'KXzOd',
        'FLXnH',
        'NodCY',
        'text/plain;\x20charset=utf-8',
        'yKJuu',
        'advancedBaseBet',
        '<option\x20value=\x22',
        'href',
        'GqufP',
        'result',
        'CmIjf',
        'application/json',
        'netmt',
        'URL',
        'HbPVm',
        'createElement',
        'click',
        'HujWZ',
        '3835250okHgLM',
        'FOrKX',
        'value',
        'oWNkH',
        'change',
        '388725ZycshU',
        'xYCYr',
        'none',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'rVMxV',
        'gvofK',
        'AUttM',
        'TOHgh',
        'ozpAK',
        '<input\x20id=\x22bethigh',
        'ocGyE',
        'wdbStartButton',
        'HHxqs',
        'length',
        '\x20to\x20win,\x20',
        'DRvpP',
        'roll',
        'wdbOpenLUAScript',
        'OubNn',
        '$1=$1*$2\x20',
        'antiquewhite',
        'dps',
        'advancedBetHighOnProfit',
        'low',
        'BECel',
        'eAuPF',
        'fToAU',
        'efBOg',
        'wdbShowMode',
        'clientY',
        'wdbHeader',
        'width',
        'HqFOD',
        'imCPT',
        'wdbJSMode',
        'plpzF',
        'preventDefault',
        'wdbStopOnWinButton',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'aEtrp',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'gsACd',
        'advancedStopOnWinsCheck',
        'DOlTF',
        'wXZrB',
        '0.00',
        'EQzbV',
        'wdbMaxBalance',
        'iTMce',
        'KomCW',
        'Script\x20Name:\x20',
        'SPVxr',
        'return\x20nextbet',
        'resize',
        'wdbWins',
        'toFixed',
        'message',
        'teSwV',
        '0123456789',
        'HXvMv',
        'rGMSE',
        'wdbResumeButton',
        'wdbLosses',
        'wdbHighLose',
        'toLowerCase',
        'ynOPU',
        'hkYgu',
        'innerHTML',
        'clear',
        'pYWIk',
        'log-',
        'oNUcq',
        '\x0a\x20\x20\x20\x20bethigh=',
        'AUkjG',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'xmPdD',
        'iaqQp',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'dobet()',
        'CSjrB',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'tagName',
        'wFihj',
        '4423962DgWKeI',
        '/ching.mp3',
        'hvtSc',
        'wdb',
        'UJZnE',
        'kWHRW',
        'zdmYn',
        'eyGiI',
        'updateChart',
        '2|3|6|5|1|4|0',
        'hide',
        'show',
        'Stop\x20on\x20profit\x20',
        'EIneb',
        'onmousedown',
        'axMGk'
    ];
    _0x23ec = function () {
        return _0x4d0485;
    };
    return _0x23ec();
}
function updateSpeed() {
    const _0x2f1676 = _0x4dbf1d, _0xdc4d6d = {
            'ktLWe': function (_0x514c6b, _0xb445d8) {
                return _0x514c6b < _0xb445d8;
            },
            'UrObF': 'wdbSpeed',
            'vNPBM': _0x2f1676(0x232),
            'rywVO': function (_0x375cd8, _0x5e0621) {
                return _0x375cd8 < _0x5e0621;
            },
            'lvNKe': function (_0x17f46a, _0x266394) {
                return _0x17f46a - _0x266394;
            },
            'wFihj': function (_0x5b91a4, _0x43e5b6) {
                return _0x5b91a4 / _0x43e5b6;
            }
        };
    if (_0xdc4d6d[_0x2f1676(0x404)](speedHistory[_0x2f1676(0x212)], 0x2)) {
        document[_0x2f1676(0x1bf)](_0xdc4d6d[_0x2f1676(0x286)])['innerText'] = _0xdc4d6d[_0x2f1676(0x2d1)];
        return;
    }
    const _0x1f8be2 = Date[_0x2f1676(0x39a)](), _0x2dbcc2 = 0x2710;
    speedHistory = speedHistory[_0x2f1676(0x278)](_0x2df713 => _0x1f8be2 - _0x2df713 <= _0x2dbcc2);
    if (_0xdc4d6d[_0x2f1676(0x272)](speedHistory['length'], 0x2)) {
        document[_0x2f1676(0x1bf)](_0xdc4d6d[_0x2f1676(0x286)])[_0x2f1676(0x283)] = _0xdc4d6d[_0x2f1676(0x2d1)];
        return;
    }
    const _0x5d582f = speedHistory[0x0], _0x482094 = _0xdc4d6d[_0x2f1676(0x385)](_0x1f8be2, _0x5d582f) / 0x3e8, _0x5ed70f = _0xdc4d6d[_0x2f1676(0x258)](speedHistory['length'], _0x482094);
    document[_0x2f1676(0x1bf)](_0xdc4d6d[_0x2f1676(0x286)])[_0x2f1676(0x283)] = _0x5ed70f[_0x2f1676(0x23c)](0x2);
}
function updateTimer() {
    const _0x3bfe98 = _0x4dbf1d, _0x171393 = {
            'RdPKr': function (_0x11ca88, _0x197404) {
                return _0x11ca88 / _0x197404;
            },
            'YlQWY': function (_0x47c774, _0x412a89) {
                return _0x47c774 * _0x412a89;
            },
            'ThAsl': function (_0x17a6e2, _0x2a19c2) {
                return _0x17a6e2 * _0x2a19c2;
            },
            'kidVo': function (_0x3d9f77, _0x4907fa) {
                return _0x3d9f77 % _0x4907fa;
            },
            'GrpQP': function (_0x7a51b6, _0x351d9b) {
                return _0x7a51b6 * _0x351d9b;
            },
            'ZMrgc': function (_0x3e0a47, _0x89d080) {
                return _0x3e0a47 / _0x89d080;
            },
            'fBeTL': function (_0x1c9071, _0x2dda55) {
                return _0x1c9071 * _0x2dda55;
            },
            'yUnAa': _0x3bfe98(0x1aa)
        };
    elapsedTime++;
    const _0x30949c = Math[_0x3bfe98(0x2f2)](_0x171393[_0x3bfe98(0x1d1)](elapsedTime, _0x171393[_0x3bfe98(0x2b6)](_0x171393['ThAsl'](0x18, 0x3c), 0x3c))), _0x4ced30 = Math[_0x3bfe98(0x2f2)](_0x171393['RdPKr'](_0x171393['kidVo'](elapsedTime, _0x171393['YlQWY'](_0x171393[_0x3bfe98(0x1ca)](0x18, 0x3c), 0x3c)), _0x171393[_0x3bfe98(0x1ca)](0x3c, 0x3c))), _0x398404 = Math[_0x3bfe98(0x2f2)](_0x171393[_0x3bfe98(0x303)](_0x171393[_0x3bfe98(0x401)](elapsedTime, _0x171393[_0x3bfe98(0x14a)](0x3c, 0x3c)), 0x3c)), _0x13e171 = elapsedTime % 0x3c;
    document[_0x3bfe98(0x1bf)](_0x171393[_0x3bfe98(0x3a5)])['innerText'] = _0x30949c + ':' + _0x4ced30 + ':' + _0x398404 + ':' + _0x13e171;
}
async function start() {
    const _0xc1df84 = _0x4dbf1d, _0x511b05 = {
            'akBsY': function (_0x147283, _0x17fdb4) {
                return _0x147283 === _0x17fdb4;
            },
            'YpSXJ': 'rangedice',
            'vDeFj': _0xc1df84(0x284),
            'TVlQb': _0xc1df84(0x3ab),
            'QAvAy': _0xc1df84(0x178),
            'JZDFT': 'wdbStartButton',
            'GozTp': _0xc1df84(0x242),
            'xLvrT': _0xc1df84(0x216),
            'kwHRL': '#wdbSaveScriptButton',
            'XmQob': function (_0x8d898b, _0x4079a2, _0x269173) {
                return _0x8d898b(_0x4079a2, _0x269173);
            },
            'lJFQL': function (_0x21a06e, _0x1d9c7e, _0x18d6f5) {
                return _0x21a06e(_0x1d9c7e, _0x18d6f5);
            },
            'lDOhS': _0xc1df84(0x3ce),
            'gadTt': _0xc1df84(0x27b),
            'nvDsU': _0xc1df84(0x320),
            'Brwgs': 'return\x20scriptname',
            'vFeNz': 'wdbRunningScript',
            'Uimap': 'script',
            'Upvxo': function (_0xa3651a, _0x5abe48) {
                return _0xa3651a(_0x5abe48);
            },
            'xtaNi': function (_0x269fbe, _0x34da7b) {
                return _0x269fbe(_0x34da7b);
            },
            'oCqtl': 'advancedChance',
            'cWHgh': function (_0x27764c) {
                return _0x27764c();
            },
            'FOlbw': function (_0x2cdf70) {
                return _0x2cdf70();
            }
        };
    if (_0x511b05[_0xc1df84(0x162)](game, _0x511b05[_0xc1df84(0x2d4)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x511b05[_0xc1df84(0x34c)];
        const _0x3d0a24 = 'chance1=' + chance1 + _0xc1df84(0x26b) + chance2 + _0xc1df84(0x1a5) + chance3 + _0xc1df84(0x29f) + chance4 + _0xc1df84(0x22d) + betSide + '\x22';
        fengari['load'](_0x3d0a24)();
    }
    try {
        if (!run) {
            document[_0xc1df84(0x1bf)](_0xc1df84(0x1aa))[_0xc1df84(0x283)] = _0x511b05['TVlQb'], document['getElementById'](_0x511b05[_0xc1df84(0x2a9)])[_0xc1df84(0x140)] = !![], document[_0xc1df84(0x1bf)](_0xc1df84(0x195))[_0xc1df84(0x140)] = !![], document[_0xc1df84(0x1bf)](_0x511b05['JZDFT'])[_0xc1df84(0x140)] = !![], document[_0xc1df84(0x1bf)](_0x511b05['GozTp'])['disabled'] = !![], document['getElementById'](_0x511b05['xLvrT'])[_0xc1df84(0x140)] = !![], document[_0xc1df84(0x1bf)](_0xc1df84(0x12a))['disabled'] = !![], document[_0xc1df84(0x2e5)](_0x511b05[_0xc1df84(0x3f3)])['forEach'](_0x25531a => _0x25531a[_0xc1df84(0x140)] = !![]), document['querySelectorAll'](_0xc1df84(0x19a))['forEach'](_0x28d030 => _0x28d030[_0xc1df84(0x140)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], clearInterval(timerInterval), clearInterval(speedUpdateInterval), timerInterval = _0x511b05[_0xc1df84(0x183)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x511b05['lJFQL'](setInterval, updateSpeed, 0x1f4), fengari[_0xc1df84(0x3d8)](_0xc1df84(0x273))(), fengari[_0xc1df84(0x3d8)](_0xc1df84(0x327))();
            if (_0x511b05[_0xc1df84(0x162)](mode, _0x511b05[_0xc1df84(0x18d)]))
                diceScript = luaEditor[_0xc1df84(0x309)](), diceScript = diceScript[_0xc1df84(0x402)](/!=/g, '~=')[_0xc1df84(0x402)](/!/g, _0x511b05['gadTt'])[_0xc1df84(0x402)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0xc1df84(0x339))['replace'](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0xc1df84(0x2b9))[_0xc1df84(0x402)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0xc1df84(0x218))[_0xc1df84(0x402)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x511b05[_0xc1df84(0x138)]), fengari[_0xc1df84(0x3d8)](diceScript)(), scriptname = fengari['load'](_0x511b05[_0xc1df84(0x32a)])(), document['getElementById'](_0xc1df84(0x161))[_0xc1df84(0x283)] = scriptname ? _0xc1df84(0x237) + scriptname : '';
            else {
                if (_0x511b05[_0xc1df84(0x162)](mode, 'js')) {
                    const _0x9db53d = document[_0xc1df84(0x1bf)](_0x511b05['vFeNz']);
                    if (_0x9db53d)
                        _0x9db53d['remove']();
                    diceScript = jsEditor['getValue']();
                    const _0x30730a = document[_0xc1df84(0x1fd)](_0x511b05[_0xc1df84(0x2ee)]);
                    _0x30730a['id'] = _0x511b05[_0xc1df84(0x3e2)], _0x30730a[_0xc1df84(0x248)] = diceScript, document['head']['appendChild'](_0x30730a);
                } else
                    mode === 'advanced' && (basebet = _0x511b05['Upvxo'](Number, document[_0xc1df84(0x1bf)](_0xc1df84(0x1f3))[_0xc1df84(0x202)]), nextbet = basebet, chance = _0x511b05[_0xc1df84(0x182)](Number, document[_0xc1df84(0x1bf)](_0x511b05[_0xc1df84(0x323)])[_0xc1df84(0x202)]), bethigh = document['querySelector'](_0xc1df84(0x358))[_0xc1df84(0x368)]);
            }
            if (run)
                return _0x511b05[_0xc1df84(0x32d)](playBet);
        }
    } catch (_0x5af421) {
        _0x511b05[_0xc1df84(0x2af)](stop), _0x511b05[_0xc1df84(0x182)](log, _0x5af421);
    }
}
function stop() {
    const _0x23fa2d = _0x4dbf1d, _0x24ca97 = {
            'imCPT': function (_0x34d109, _0x1a0391) {
                return _0x34d109(_0x1a0391);
            },
            'hkYgu': 'wdbMenuCoin',
            'RDVzR': _0x23fa2d(0x195),
            'HbPVm': _0x23fa2d(0x210),
            'BDFHG': 'wdbResumeButton',
            'SPVxr': 'wdbOpenLUAScript',
            'wXZrB': _0x23fa2d(0x12a),
            'BJVPF': '#wdbSaveScriptButton,\x20#wdbOpenScript'
        };
    if (!run)
        return;
    run = ![], sOW = ![], clearInterval(timerInterval), _0x24ca97[_0x23fa2d(0x226)](clearInterval, speedUpdateInterval);
    const _0x302b7c = [
        _0x24ca97[_0x23fa2d(0x247)],
        _0x24ca97[_0x23fa2d(0x292)],
        _0x24ca97[_0x23fa2d(0x1fc)],
        _0x24ca97[_0x23fa2d(0x3ed)],
        _0x24ca97[_0x23fa2d(0x238)],
        _0x24ca97[_0x23fa2d(0x231)],
        'wdbStopOnWinButton'
    ];
    _0x302b7c['forEach'](_0x55b41c => {
        const _0x3e9086 = _0x23fa2d;
        document['getElementById'](_0x55b41c)[_0x3e9086(0x140)] = ![];
    }), document[_0x23fa2d(0x2e5)](_0x24ca97[_0x23fa2d(0x297)])[_0x23fa2d(0x399)](_0x291936 => _0x291936[_0x23fa2d(0x140)] = ![]);
}
async function resume(_0x2c245c) {
    const _0x40d72d = _0x4dbf1d, _0x34fc65 = {
            'cBGtk': _0x40d72d(0x178),
            'jpRGm': _0x40d72d(0x195),
            'auZoe': 'wdbStartButton',
            'MWvHs': _0x40d72d(0x216),
            'KPSGx': 'wdbOpenJSScript',
            'WMjoC': _0x40d72d(0x2b0),
            'jgTtG': function (_0xdd4cbc, _0x54a9f6) {
                return _0xdd4cbc(_0x54a9f6);
            },
            'HdNjL': _0x40d72d(0x2d6),
            'XTQkw': function (_0x1b88a2, _0x3314a6, _0x51bfcc) {
                return _0x1b88a2(_0x3314a6, _0x51bfcc);
            },
            'ShLnA': function (_0x330e21) {
                return _0x330e21();
            }
        };
    if (!run) {
        const _0x1fb4c3 = [
            _0x34fc65[_0x40d72d(0x3b1)],
            _0x34fc65['jpRGm'],
            _0x34fc65[_0x40d72d(0x14d)],
            'wdbResumeButton',
            _0x34fc65['MWvHs'],
            _0x34fc65[_0x40d72d(0x2b4)]
        ];
        return _0x1fb4c3[_0x40d72d(0x399)](_0x12119f => {
            const _0x3da718 = _0x40d72d;
            document['getElementById'](_0x12119f)[_0x3da718(0x140)] = !![];
        }), document[_0x40d72d(0x2e5)](_0x34fc65['WMjoC'])[_0x40d72d(0x399)](_0x5de567 => _0x5de567[_0x40d72d(0x140)] = !![]), !_0x2c245c && (_0x34fc65[_0x40d72d(0x17d)](log, _0x34fc65['HdNjL']), await new Promise(_0x14a402 => setTimeout(_0x14a402, 0x1388))), run = !![], sOW = ![], timerInterval = setInterval(updateTimer, 0x3e8), speedUpdateInterval = _0x34fc65[_0x40d72d(0x2f8)](setInterval, updateSpeed, 0x1f4), _0x34fc65[_0x40d72d(0x15d)](playBet);
    }
}
function stopOnWin() {
    const _0x1b9d96 = _0x4dbf1d;
    sOW = !![];
    if (run)
        document[_0x1b9d96(0x1bf)](_0x1b9d96(0x22a))[_0x1b9d96(0x140)] = !![];
}
async function playBet() {
    const _0x324948 = _0x4dbf1d, _0x3d40c1 = {
            'ocMmH': _0x324948(0x107),
            'Gaqlp': 'return\x20chance3',
            'UQmKg': _0x324948(0x3c3),
            'yZqtS': 'return\x20chance2',
            'ulVEv': 'return\x20bethigh',
            'yBkDj': _0x324948(0x10e),
            'VvspO': _0x324948(0x239),
            'UxxxJ': function (_0x10d084, _0x3968fa) {
                return _0x10d084(_0x3968fa);
            },
            'bcXls': function (_0x3c9ff0, _0x5bd71f) {
                return _0x3c9ff0(_0x5bd71f);
            },
            'ZevAr': function (_0x29773f, _0x311a9d) {
                return _0x29773f !== _0x311a9d;
            },
            'ZYODb': _0x324948(0x15b),
            'PFLJE': function (_0x4b885b, _0x5945db) {
                return _0x4b885b === _0x5945db;
            },
            'OkdkA': function (_0x17a165, _0x2d7410) {
                return _0x17a165 + _0x2d7410;
            },
            'Nnmar': _0x324948(0x3b3),
            'KHRJu': function (_0x2a647e, _0x2b42e1) {
                return _0x2a647e === _0x2b42e1;
            },
            'MmHIJ': 'dice',
            'htAxE': 'high',
            'CSjrB': function (_0x3ed08e, _0x173e5e) {
                return _0x3ed08e + _0x173e5e;
            },
            'spKTR': function (_0x2a93b0, _0x1883c9) {
                return _0x2a93b0 + _0x1883c9;
            },
            'EuPJp': function (_0x24f5ce, _0x56b8a7) {
                return _0x24f5ce(_0x56b8a7);
            },
            'Mhalj': function (_0x5e3ec3) {
                return _0x5e3ec3();
            },
            'LCLHd': function (_0x2495e5, _0x21373f) {
                return _0x2495e5(_0x21373f);
            }
        };
    try {
        if (mode === _0x324948(0x3ce)) {
            const _0x5a19dc = _0x3d40c1[_0x324948(0x37c)][_0x324948(0x15f)]('|');
            let _0x1299fe = 0x0;
            while (!![]) {
                switch (_0x5a19dc[_0x1299fe++]) {
                case '0':
                    chance3 = fengari[_0x324948(0x3d8)](_0x3d40c1[_0x324948(0x11e)])();
                    continue;
                case '1':
                    chance1 = fengari[_0x324948(0x3d8)](_0x3d40c1[_0x324948(0x33e)])();
                    continue;
                case '2':
                    chance2 = fengari['load'](_0x3d40c1[_0x324948(0x168)])();
                    continue;
                case '3':
                    bethigh = fengari[_0x324948(0x3d8)](_0x3d40c1[_0x324948(0x2c2)])();
                    continue;
                case '4':
                    chance4 = fengari[_0x324948(0x3d8)]('return\x20chance4')();
                    continue;
                case '5':
                    betSide = fengari[_0x324948(0x3d8)](_0x324948(0x2e0))();
                    continue;
                case '6':
                    chance = fengari[_0x324948(0x3d8)](_0x3d40c1['yBkDj'])();
                    continue;
                case '7':
                    nextbet = fengari[_0x324948(0x3d8)](_0x3d40c1[_0x324948(0x18e)])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x3d40c1['UxxxJ'](Number, nextbet), chance = _0x3d40c1[_0x324948(0x165)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x142625 = _0x3d40c1[_0x324948(0x333)](Number, lastBet[_0x324948(0x337)])[_0x324948(0x23c)](decimalAmountView), _0x17ff3d = Number(lastBet[_0x324948(0x19f)])['toFixed'](decimalChanceView), _0x1016a0 = _0x3d40c1[_0x324948(0x3d0)](game, _0x3d40c1[_0x324948(0x3b8)]) ? _0x3d40c1['PFLJE'](game, _0x324948(0x290)) ? _0x324948(0x29b) + _0x142625 + _0x324948(0x2bd) + (havePlinkoRows ? _0x3d40c1[_0x324948(0x400)](plinkoRow, _0x3d40c1[_0x324948(0x2ad)]) : '') + plinkoRisk + _0x324948(0x269) : _0x324948(0x29b) + _0x142625 + _0x324948(0x2bd) + _0x17ff3d + _0x324948(0x32b) + (_0x3d40c1[_0x324948(0x16e)](game, _0x3d40c1['MmHIJ']) ? bethigh ? _0x3d40c1['htAxE'] : _0x324948(0x21c) : _0x3d40c1[_0x324948(0x36e)]) : 'Betting\x20' + _0x142625 + _0x324948(0x2bd) + chance1 + '|' + chance2 + (chance3 ? _0x3d40c1[_0x324948(0x254)]('|', chance3) : '') + (chance4 ? _0x3d40c1[_0x324948(0x3f7)]('|', chance4) : '') + _0x324948(0x213) + betSide;
            _0x3d40c1['EuPJp'](log, _0x1016a0);
        }
        if (run)
            return _0x3d40c1['Mhalj'](sendBet);
    } catch (_0x5e528c) {
        _0x3d40c1[_0x324948(0x315)](stop), _0x3d40c1['LCLHd'](log, _0x5e528c);
    }
}
function resetall() {
    const _0x4017ae = _0x4dbf1d, _0x281a2b = {
            'RuSmK': 'wdbTime',
            'krqNq': _0x4017ae(0x3ab),
            'Skjmb': 'wdbSpeed',
            'kgNOv': '0.00',
            'xWgrG': function (_0x8b107b) {
                return _0x8b107b();
            },
            'THuwH': function (_0x46f47b) {
                return _0x46f47b();
            },
            'nCmkl': function (_0x4b7eb4) {
                return _0x4b7eb4();
            },
            'netmt': function (_0x5b6dbf) {
                return _0x5b6dbf();
            }
        };
    document[_0x4017ae(0x1bf)](_0x281a2b['RuSmK'])[_0x4017ae(0x283)] = _0x281a2b[_0x4017ae(0x10b)], document[_0x4017ae(0x1bf)](_0x281a2b[_0x4017ae(0x1b4)])[_0x4017ae(0x283)] = _0x281a2b[_0x4017ae(0x152)], _0x281a2b[_0x4017ae(0x150)](resetstats), _0x281a2b[_0x4017ae(0x349)](resetchart), _0x281a2b['nCmkl'](resethistory), _0x281a2b[_0x4017ae(0x1fa)](resetlog);
}
function resetchart() {
    const _0x546bd2 = {
        'oBaOY': function (_0x28c7b9, _0x3fc53a) {
            return _0x28c7b9(_0x3fc53a);
        }
    };
    return _0x546bd2['oBaOY'](toggleChart, 'reset');
}
function resethistory() {
    const _0x1fa9ce = _0x4dbf1d, _0x4cba1d = {
            'ujErr': function (_0x372b03, _0x1211a7) {
                return _0x372b03(_0x1211a7);
            },
            'lKqWs': _0x1fa9ce(0x249)
        };
    return _0x4cba1d[_0x1fa9ce(0x1e1)](toggleHistory, _0x4cba1d['lKqWs']);
}
function resetlog() {
    const _0xd2019e = _0x4dbf1d, _0x917ee8 = {
            'iaqQp': function (_0x5ea39e, _0x2ee9a3) {
                return _0x5ea39e(_0x2ee9a3);
            },
            'efBOg': _0xd2019e(0x249)
        };
    return _0x917ee8[_0xd2019e(0x251)](toggleLog, _0x917ee8[_0xd2019e(0x220)]);
}
function resetstats() {
    const _0x4fc687 = _0x4dbf1d, _0x3d452f = {
            'ccUge': _0x4fc687(0x1e4),
            'beIpB': function (_0x518d49) {
                return _0x518d49();
            }
        }, _0x988e0a = _0x3d452f[_0x4fc687(0x370)][_0x4fc687(0x15f)]('|');
    let _0x458049 = 0x0;
    while (!![]) {
        switch (_0x988e0a[_0x458049++]) {
        case '0':
            minprofit = 0x0;
            continue;
        case '1':
            wins = 0x0;
            continue;
        case '2':
            startBalance = balance;
            continue;
        case '3':
            maxwinstreak = 0x0;
            continue;
        case '4':
            fullLogs = [];
            continue;
        case '5':
            maxbalance = balance;
            continue;
        case '6':
            wagered = 0x0;
            continue;
        case '7':
            maxlosestreak = 0x0;
            continue;
        case '8':
            percentProfit = 0x0;
            continue;
        case '9':
            percentWagered = 0x0;
            continue;
        case '10':
            minbalance = balance;
            continue;
        case '11':
            _0x3d452f[_0x4fc687(0x2c8)](updateStats);
            continue;
        case '12':
            bets = 0x0;
            continue;
        case '13':
            maxprofit = 0x0;
            continue;
        case '14':
            losses = 0x0;
            continue;
        case '15':
            profit = 0x0;
            continue;
        case '16':
            maxLosseAmount = 0x0;
            continue;
        case '17':
            maxBetAmount = 0x0;
            continue;
        case '18':
            currentstreak = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x4b2f64) {
    return _0x4b2f64;
}
function ching() {
    const _0xd07cff = _0x4dbf1d;
    return wdbSound[_0xd07cff(0x305)]();
}
function sleep(_0x1f6eb7) {
    return new Promise(_0x3d6b05 => setTimeout(_0x3d6b05, _0x1f6eb7 * 0x3e8));
}
async function initLua() {
    const _0x43b2af = _0x4dbf1d, _0x237248 = {
            'eyGiI': 'function\x20start()\x0ajs.global:start()\x0aend',
            'dlVUs': 'function\x20stop()\x0ajs.global:stop()\x0aend',
            'jmFeH': _0x43b2af(0x3a6),
            'FLXnH': 'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
            'wqxoc': 'function\x20resetall()\x0ajs.global:resetall()\x0aend',
            'nYLiJ': _0x43b2af(0x353),
            'TOHgh': _0x43b2af(0x1d9),
            'YsgWZ': _0x43b2af(0x19c),
            'qgGNv': _0x43b2af(0x31e),
            'KXzOd': _0x43b2af(0x164),
            'OMVfB': 'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
            'MlAdJ': _0x43b2af(0x375)
        };
    fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x260)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x2f0)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x1da)])(), fengari[_0x43b2af(0x3d8)](_0x43b2af(0x1a3))(), fengari[_0x43b2af(0x3d8)](_0x43b2af(0x379))(), fengari[_0x43b2af(0x3d8)]('function\x20resetseed()\x0ajs.global:resetseed()\x0aend')(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x1ef)])(), fengari[_0x43b2af(0x3d8)](_0x43b2af(0x34f))(), fengari['load'](_0x43b2af(0x256))(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x2a7)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x11d)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x20c)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x2b7)])(), fengari['load'](_0x237248[_0x43b2af(0x115)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x1ee)])(), fengari[_0x43b2af(0x3d8)](_0x237248[_0x43b2af(0x1ad)])(), fengari[_0x43b2af(0x3d8)](_0x43b2af(0x35e))(), fengari[_0x43b2af(0x3d8)]('table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end')();
    const _0x8e00f4 = location[_0x43b2af(0x3aa)][_0x43b2af(0x402)](_0x43b2af(0x384), '');
    let _0x3a9e7c = _0x8e00f4['indexOf']('.');
    return casino = _0x8e00f4['slice'](0x0, _0x3a9e7c), fengari[_0x43b2af(0x3d8)](_0x43b2af(0x348) + casino + '\x22')(), _0x237248[_0x43b2af(0x148)];
}
async function updateLua() {
    const _0x3f118d = _0x4dbf1d, _0x37ed72 = {
            'EuUhi': _0x3f118d(0x253),
            'pdoTb': _0x3f118d(0x12c),
            'Thlop': function (_0x445069, _0x370464) {
                return _0x445069(_0x370464);
            },
            'LHfFc': _0x3f118d(0x19e),
            'tgSUx': _0x3f118d(0x326),
            'BLrHm': _0x3f118d(0x3eb),
            'xmPdD': 'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
            'BnqMg': 'updateLua\x20done'
        }, _0x323791 = _0x3f118d(0x2a4) + win + _0x3f118d(0x2ab) + bets + _0x3f118d(0x1ec) + wins + _0x3f118d(0x176) + losses + _0x3f118d(0x359) + winstreak + _0x3f118d(0x38f) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + _0x3f118d(0x157) + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + '\x0a\x20\x20\x20\x20maxbalance=' + maxbalance + _0x3f118d(0x3b0) + minprofit + _0x3f118d(0x344) + maxprofit + '\x0a\x20\x20\x20\x20chance=' + chance + _0x3f118d(0x24d) + bethigh + _0x3f118d(0x120) + chance1 + _0x3f118d(0x26b) + chance2 + _0x3f118d(0x1a5) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + _0x3f118d(0x38c) + nextbet + _0x3f118d(0x313) + previousbet + '\x0a\x20\x20\x20\x20profit=' + profit + _0x3f118d(0x114) + currentprofit + '\x0a\x20\x20\x20\x20partialprofit=' + partialprofit + _0x3f118d(0x282) + wagered + '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=' + lastBet[_0x3f118d(0x337)] + _0x3f118d(0x12b) + lastBet[_0x3f118d(0x337)] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet[_0x3f118d(0x19f)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=' + lastBet[_0x3f118d(0x19f)] + ',\x0a\x20\x20\x20\x20\x20\x20roll=' + lastBet[_0x3f118d(0x215)] + _0x3f118d(0x16d) + lastBet[_0x3f118d(0x215)] + _0x3f118d(0x3da) + lastBet[_0x3f118d(0x146)] + _0x3f118d(0x3bb) + lastBet['profit'] + _0x3f118d(0x2f6) + lastBet[_0x3f118d(0x3c8)] + _0x3f118d(0x302) + lastBet[_0x3f118d(0x3c8)] + ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=' + lastBet[_0x3f118d(0x3d4)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance1=' + lastBet['chance1'] + _0x3f118d(0x189) + lastBet[_0x3f118d(0x3be)] + _0x3f118d(0x1c8) + lastBet[_0x3f118d(0x3be)] + _0x3f118d(0x252) + lastBet['chance3'] + _0x3f118d(0x301) + lastBet[_0x3f118d(0x191)] + ',\x0a\x20\x20\x20\x20\x20\x20chance4=' + lastBet[_0x3f118d(0x155)] + _0x3f118d(0x364) + lastBet[_0x3f118d(0x155)] + _0x3f118d(0x319) + lastBet[_0x3f118d(0x3ee)] + _0x3f118d(0x36f) + lastBet['betSide'] + '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=' + lastBet[_0x3f118d(0x1f7)] + _0x3f118d(0x22b) + lastBet[_0x3f118d(0x1f7)] + _0x3f118d(0x33b) + lastBet[_0x3f118d(0x145)] + _0x3f118d(0x1a6) + lastBet[_0x3f118d(0x145)] + ',\x0a\x20\x20\x20\x20\x20\x20id=\x22' + lastBet['id'] + _0x3f118d(0x1a0) + lastBet['id'] + _0x3f118d(0x169);
    fengari[_0x3f118d(0x3d8)](_0x323791)(), fengari[_0x3f118d(0x3d8)](_0x37ed72[_0x3f118d(0x3e8)])(), currency = fengari[_0x3f118d(0x3d8)](_0x37ed72['pdoTb'])() || currency, coin = _0x37ed72[_0x3f118d(0x1cb)](String, currency)[_0x3f118d(0x1d8)](), plinkoRisk = fengari[_0x3f118d(0x3d8)](_0x37ed72[_0x3f118d(0x2ce)])() || plinkoRisk, plinkoRow = fengari[_0x3f118d(0x3d8)](_0x37ed72[_0x3f118d(0x2ba)])() || plinkoRow, kenoRisk = fengari[_0x3f118d(0x3d8)](_0x37ed72[_0x3f118d(0x106)])() || kenoRisk;
    const _0x4f614c = fengari[_0x3f118d(0x3d8)](_0x37ed72[_0x3f118d(0x250)])();
    return _0x4f614c && (window[_0x3f118d(0x2a5)] = _0x4f614c['split'](',')[_0x3f118d(0x278)](_0x4bab68 => _0x4bab68 !== '')['map'](Number)), _0x37ed72[_0x3f118d(0x2ef)];
}
function randomString(_0x23cdd2, _0x2ccec6) {
    const _0x195f0a = _0x4dbf1d, _0x319349 = {
            'zIRNs': _0x195f0a(0x125),
            'xVrME': _0x195f0a(0x1a9),
            'syxqi': _0x195f0a(0x2da),
            'xBuKj': _0x195f0a(0x37a),
            'efKJO': function (_0x539a26, _0x533b5d) {
                return _0x539a26 * _0x533b5d;
            }
        }, _0x4d9233 = {
            'alphabet': _0x319349[_0x195f0a(0x363)],
            'numeric': _0x195f0a(0x23f),
            'hex': _0x319349[_0x195f0a(0x121)],
            'rangedice': _0x319349[_0x195f0a(0x1be)],
            'default': _0x319349[_0x195f0a(0x403)]
        }, _0x348a0c = _0x4d9233[_0x2ccec6] || _0x4d9233[_0x195f0a(0x1cc)];
    let _0x4312ab = '';
    for (let _0x586be0 = 0x0; _0x586be0 < _0x23cdd2; _0x586be0++) {
        _0x4312ab += _0x348a0c['charAt'](Math['floor'](_0x319349[_0x195f0a(0x1e3)](Math['random'](), _0x348a0c[_0x195f0a(0x212)])));
    }
    return _0x4312ab;
}
function setCookie(_0x4aeb58, _0x23b0af, _0x2b106b) {
    const _0x5d68ef = _0x4dbf1d, _0x311d2c = {
            'ZhaBz': function (_0x1a6098, _0x1a16c1) {
                return _0x1a6098 + _0x1a16c1;
            },
            'wCASW': function (_0x1ff74d, _0x2f3a46) {
                return _0x1ff74d * _0x2f3a46;
            }
        }, _0xb33c8e = new Date();
    _0xb33c8e[_0x5d68ef(0x356)](_0x311d2c[_0x5d68ef(0x31b)](_0xb33c8e[_0x5d68ef(0x3fd)](), _0x311d2c[_0x5d68ef(0x13a)](_0x311d2c[_0x5d68ef(0x13a)](_0x311d2c[_0x5d68ef(0x13a)](_0x2b106b, 0x18), 0x3c) * 0x3c, 0x3e8)));
    const _0x3b386f = _0x5d68ef(0x117) + _0xb33c8e[_0x5d68ef(0x1ed)]();
    document['cookie'] = _0x4aeb58 + '=' + _0x23b0af + ';' + _0x3b386f + _0x5d68ef(0x111);
}
function getCookie(_0x22dc10) {
    const _0x33bbb2 = _0x4dbf1d, _0x2a1eb6 = {
            'aOFse': function (_0x1766fd, _0x3291eb) {
                return _0x1766fd + _0x3291eb;
            }
        }, _0x56230b = _0x2a1eb6[_0x33bbb2(0x13f)](_0x22dc10, '='), _0x12c347 = document[_0x33bbb2(0x1cf)][_0x33bbb2(0x15f)](';')[_0x33bbb2(0x3b4)](_0x3be73b => _0x3be73b['trim']());
    for (const _0x36ca67 of _0x12c347) {
        if (_0x36ca67['startsWith'](_0x56230b))
            return _0x36ca67[_0x33bbb2(0x1c3)](_0x56230b[_0x33bbb2(0x212)]);
    }
    return '';
}
function saveScript() {
    const _0x393632 = _0x4dbf1d, _0x3fa771 = {
            'SzGnP': function (_0x8b2478, _0x2b0265) {
                return _0x8b2478 === _0x2b0265;
            },
            'kWHRW': _0x393632(0x1f1)
        }, _0x3de3af = _0x3fa771[_0x393632(0x2ea)](mode, _0x393632(0x3ce)) ? luaEditor['getValue']() : jsEditor['getValue'](), _0x2b59a2 = document[_0x393632(0x1fd)]('a');
    _0x2b59a2[_0x393632(0x1f5)] = window[_0x393632(0x1fb)][_0x393632(0x1e8)](new Blob([_0x3de3af], { 'type': _0x3fa771[_0x393632(0x25e)] })), _0x2b59a2[_0x393632(0x105)] = _0x393632(0x1ba) + Date[_0x393632(0x39a)]()[_0x393632(0x11f)]()[_0x393632(0x31f)](-0x6) + '.' + mode, _0x2b59a2[_0x393632(0x1fe)]();
}
function getErrMsg(_0x14a43c) {
    const _0x2b220b = _0x4dbf1d;
    return _0x14a43c[_0x2b220b(0x289)] && _0x14a43c['response'][_0x2b220b(0x17a)] && _0x14a43c['response']['data'][_0x2b220b(0x23d)] || _0x14a43c[_0x2b220b(0x23d)] || _0x14a43c[_0x2b220b(0x11f)]();
}

const _0x274f8d = _0x4346;
(function (_0x4ca5b7, _0x1a3da4) {
    const _0x11c00b = _0x4346, _0x18636a = _0x4ca5b7();
    while (!![]) {
        try {
            const _0xdba1a8 = parseInt(_0x11c00b(0xbf)) / 0x1 + parseInt(_0x11c00b(0xc1)) / 0x2 * (-parseInt(_0x11c00b(0xbc)) / 0x3) + -parseInt(_0x11c00b(0xad)) / 0x4 + -parseInt(_0x11c00b(0xd9)) / 0x5 * (-parseInt(_0x11c00b(0xba)) / 0x6) + -parseInt(_0x11c00b(0xac)) / 0x7 * (parseInt(_0x11c00b(0xc4)) / 0x8) + -parseInt(_0x11c00b(0xd4)) / 0x9 * (parseInt(_0x11c00b(0xd5)) / 0xa) + -parseInt(_0x11c00b(0xd0)) / 0xb * (-parseInt(_0x11c00b(0xdf)) / 0xc);
            if (_0xdba1a8 === _0x1a3da4)
                break;
            else
                _0x18636a['push'](_0x18636a['shift']());
        } catch (_0x3b9cb8) {
            _0x18636a['push'](_0x18636a['shift']());
        }
    }
}(_0x46c5, 0xc9d4c), csrf_token = getCookie(_0x274f8d(0xcd)), decimalTargetResult = 0x0);
async function beforeWork() {
    const _0x54af00 = _0x274f8d;
    axios[_0x54af00(0xe2)][_0x54af00(0xc2)] = { 'x-csrf-token': csrf_token };
}
function vault() {
    const _0x4fd4cc = _0x274f8d, _0x2e2282 = {
            'wKRbn': function (_0x914f6e, _0x14a94f) {
                return _0x914f6e(_0x14a94f);
            },
            'MNuhx': _0x4fd4cc(0xaa)
        };
    _0x2e2282[_0x4fd4cc(0xbd)](log, _0x2e2282['MNuhx']);
}
function unvault() {
    const _0x4a4a38 = { 'bOKCI': 'Not\x20supported' };
    log(_0x4a4a38['bOKCI']);
}
async function getListCoin() {
    const _0x1e94e5 = _0x274f8d, _0x17e762 = {
            'eEjDR': 'BTC',
            'SRAix': function (_0x3fa830) {
                return _0x3fa830();
            }
        };
    return coins = [_0x17e762[_0x1e94e5(0xb9)]], coin = coins[0x0], (_0x17e762[_0x1e94e5(0xcc)](drawSelectCoin), checkbalance());
}
async function checkbalance() {
    const _0x3ab273 = _0x274f8d, _0x3c1f36 = {
            'LaDRo': _0x3ab273(0xb0),
            'HYjRc': function (_0x1e970f, _0x460db8) {
                return _0x1e970f(_0x460db8);
            },
            'BTxYv': function (_0x596822, _0x551a25) {
                return _0x596822 / _0x551a25;
            },
            'gbJKY': function (_0xea2bb8, _0x392837) {
                return _0xea2bb8 + _0x392837;
            },
            'iwpSH': 'balance=',
            'aLCXH': function (_0x1b86a7, _0x2f92f0) {
                return _0x1b86a7 + _0x2f92f0;
            },
            'miboF': _0x3ab273(0xb6),
            'JbZEp': function (_0x317180, _0xda6fe1) {
                return _0x317180 + _0xda6fe1;
            },
            'mCuQG': _0x3ab273(0xc8),
            'NIWMh': _0x3ab273(0xa8),
            'jdLNF': function (_0x4a2f28) {
                return _0x4a2f28();
            },
            'JzCkX': function (_0x2f75c9, _0xa709e3) {
                return _0x2f75c9(_0xa709e3);
            }
        };
    try {
        const {data: _0x2c649a} = await axios[_0x3ab273(0xe4)](_0x3c1f36['LaDRo']);
        return balance = _0x3c1f36[_0x3ab273(0xa9)](Number, _0x3c1f36[_0x3ab273(0xcf)](_0x2c649a[_0x3ab273(0xb1)], 0x5f5e100)), fengari[_0x3ab273(0xb7)](_0x3c1f36['gbJKY'](_0x3c1f36[_0x3ab273(0xa3)], balance))(), startBalance = balance, minbalance = balance, fengari['load'](_0x3c1f36[_0x3ab273(0xc5)](_0x3c1f36[_0x3ab273(0xb3)], balance))(), maxbalance = balance, fengari['load'](_0x3c1f36['JbZEp'](_0x3c1f36[_0x3ab273(0xc3)], balance))(), minbet = 1e-8, fengari[_0x3ab273(0xb7)](_0x3ab273(0xb8) + minbet)(), maxbet = balance, fengari[_0x3ab273(0xb7)](_0x3c1f36[_0x3ab273(0xe0)](_0x3c1f36[_0x3ab273(0xa6)], maxbet))(), _0x3c1f36[_0x3ab273(0xbb)](updateStats);
    } catch (_0x7210a9) {
        return _0x3c1f36['jdLNF'](stop), _0x3c1f36[_0x3ab273(0xe1)](log, _0x3c1f36[_0x3ab273(0xe1)](getErrMsg, _0x7210a9));
    }
}
function _0x4346(_0x5db7e3, _0x49918f) {
    const _0x46c51b = _0x46c5();
    return _0x4346 = function (_0x4346c4, _0x1d83e6) {
        _0x4346c4 = _0x4346c4 - 0xa1;
        let _0x383768 = _0x46c51b[_0x4346c4];
        return _0x383768;
    }, _0x4346(_0x5db7e3, _0x49918f);
}
function _0x46c5() {
    const _0x29cd2c = [
        'aLCXH',
        'aPvSH',
        'JnBPo',
        'maxbalance=',
        'EPSILON',
        '&jackpot=0&stake=',
        'nonce',
        'SRAix',
        'csrf_token',
        'resetseed()\x20not\x20support',
        'BTxYv',
        '22HbsWtI',
        'CijEH',
        '&csrf_token=',
        'QxZOs',
        '1233OHaKbc',
        '68910YtrlIL',
        'split',
        'plRUu',
        '&client_seed=',
        '10XZBArI',
        'tHsmr',
        'roll',
        'GSShd',
        'hjRJD',
        'uBTgM',
        '13004580wthKNn',
        'gbJKY',
        'JzCkX',
        'defaults',
        'toFixed',
        'get',
        'dtvIe',
        'random',
        'iwpSH',
        'kPtZu',
        'VtpLB',
        'NIWMh',
        'liZDy',
        'maxbet=',
        'HYjRc',
        'Not\x20supported',
        'HyGhz',
        '91XWLwIG',
        '3628460dRrqOz',
        'HxdZq',
        'jyaWH',
        '/cgi-bin/api.pl?op=get_user_stats',
        'balance',
        '/cgi-bin/bet.pl?',
        'miboF',
        'FaATK',
        'Balance\x20is\x20low',
        'minbalance=',
        'load',
        'minbet=',
        'eEjDR',
        '1278852XZFuPI',
        'jdLNF',
        '81lqYOsZ',
        'wKRbn',
        'round',
        '480347hKYPro',
        'qmcVi',
        '7444raiIIS',
        'headers',
        'mCuQG',
        '181960cdIfKa'
    ];
    _0x46c5 = function () {
        return _0x29cd2c;
    };
    return _0x46c5();
}
function resetseed() {
    const _0x8d8b73 = _0x274f8d, _0x2f9fb3 = {
            'AtrPO': function (_0x4f7a40, _0x2e8116) {
                return _0x4f7a40(_0x2e8116);
            },
            'qmcVi': _0x8d8b73(0xce)
        };
    return _0x2f9fb3['AtrPO'](log, _0x2f9fb3[_0x8d8b73(0xc0)]);
}
async function sendBet() {
    const _0x431627 = _0x274f8d, _0x2462e7 = {
            'aPvSH': function (_0x47a3fb, _0xa3ec67) {
                return _0x47a3fb / _0xa3ec67;
            },
            'liZDy': function (_0x1810ff, _0x468fc7) {
                return _0x1810ff + _0x468fc7;
            },
            'kPtZu': function (_0x5ba3ce, _0x11a970) {
                return _0x5ba3ce - _0x11a970;
            },
            'uBTgM': function (_0x4da0a4, _0x50fbac) {
                return _0x4da0a4 * _0x50fbac;
            },
            'hjRJD': function (_0x5e8f9a, _0x3e26af) {
                return _0x5e8f9a + _0x3e26af;
            },
            'FaATK': function (_0x4fde1a, _0x3452ea) {
                return _0x4fde1a / _0x3452ea;
            },
            'dtvIe': 'next_client_seed',
            'CijEH': _0x431627(0xb2),
            'tHsmr': function (_0x293b64, _0x4b702e) {
                return _0x293b64 !== _0x4b702e;
            },
            'QxZOs': function (_0x5cd164) {
                return _0x5cd164();
            },
            'jyaWH': function (_0xe1e17a, _0x418418) {
                return _0xe1e17a(_0x418418);
            },
            'GSShd': _0x431627(0xb5)
        };
    try {
        chance = _0x2462e7[_0x431627(0xc6)](Math[_0x431627(0xbe)](_0x2462e7[_0x431627(0xa7)](chance, Number['EPSILON']) * 0x64), 0x64), target = bethigh ? _0x2462e7[_0x431627(0xa4)](0x2710, parseInt(_0x2462e7['uBTgM'](chance, 0x64))) : parseInt(_0x2462e7['uBTgM'](chance, 0x64));
        const _0x2aca77 = Math['round'](_0x2462e7[_0x431627(0xde)](_0x2462e7[_0x431627(0xdd)](_0x2462e7[_0x431627(0xb4)](0x5f, chance), Number[_0x431627(0xc9)]), 0x64)) / 0x64, _0x51c6dc = document['getElementById'](_0x2462e7[_0x431627(0xa1)])['value'], _0x41ed66 = 'm=' + (bethigh ? 'hi' : 'lo') + _0x431627(0xd8) + _0x51c6dc + _0x431627(0xca) + nextbet[_0x431627(0xe3)](0x8) + '&multiplier=' + _0x2aca77 + '&rand=' + Math[_0x431627(0xa2)]() + _0x431627(0xd2) + csrf_token;
        let {data: _0x30136f} = await axios['get'](_0x2462e7[_0x431627(0xa7)](_0x2462e7[_0x431627(0xd1)], _0x41ed66));
        _0x30136f = _0x30136f[_0x431627(0xd6)](':');
        if (_0x2462e7[_0x431627(0xda)](_0x30136f[0x0], 's1'))
            return _0x2462e7[_0x431627(0xd3)](stop), _0x2462e7[_0x431627(0xaf)](log, _0x2462e7[_0x431627(0xdc)]);
        else
            return handleResult(_0x30136f);
    } catch (_0x289fe0) {
        if (run)
            return sendBet();
    }
}
async function handleResult(_0x30f35f) {
    const _0x2659eb = _0x274f8d, _0x1674cd = {
            'JnBPo': function (_0x7336e4, _0x3e8881) {
                return _0x7336e4 === _0x3e8881;
            },
            'VtpLB': function (_0x1b5c9f, _0x2074e6) {
                return _0x1b5c9f(_0x2074e6);
            },
            'HyGhz': function (_0x3ee8e2, _0x4783ed) {
                return _0x3ee8e2(_0x4783ed);
            },
            'plRUu': function (_0x314f6e, _0x5e2414) {
                return _0x314f6e / _0x5e2414;
            },
            'HxdZq': function (_0x2bf1b9, _0x20c2d9) {
                return _0x2bf1b9(_0x20c2d9);
            },
            'ZeyqH': function (_0x19eeb3) {
                return _0x19eeb3();
            },
            'TtxtN': function (_0x11e02d) {
                return _0x11e02d();
            }
        };
    try {
        return _0x1674cd[_0x2659eb(0xc7)](_0x30f35f[0x1], 'w') ? currentprofit = _0x1674cd['VtpLB'](Number, _0x30f35f[0x4]) : currentprofit = 0x0 - _0x1674cd[_0x2659eb(0xab)](Number, _0x30f35f[0x4]), lastBet[_0x2659eb(0xdb)] = _0x1674cd[_0x2659eb(0xd7)](Number(_0x30f35f[0x2]), 0x64), result = _0x1674cd[_0x2659eb(0xa5)](Number, _0x30f35f[0x2]), lastBet[_0x2659eb(0xcb)] = _0x1674cd[_0x2659eb(0xae)](Number, _0x30f35f[0xc]), _0x1674cd['ZeyqH'](handleStats);
    } catch (_0x2a0f78) {
        return _0x1674cd['TtxtN'](stop), _0x1674cd[_0x2659eb(0xae)](log, getErrMsg(_0x2a0f78));
    }
}