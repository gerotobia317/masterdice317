const _0x4f1b09 = _0x3bce;
(function (_0x156cc0, _0x1a4692) {
    const _0x2c21e6 = _0x3bce, _0x23d38b = _0x156cc0();
    while (!![]) {
        try {
            const _0x31a098 = -parseInt(_0x2c21e6(0x28f)) / 0x1 + parseInt(_0x2c21e6(0x43f)) / 0x2 + parseInt(_0x2c21e6(0x476)) / 0x3 + -parseInt(_0x2c21e6(0x306)) / 0x4 + parseInt(_0x2c21e6(0x266)) / 0x5 + parseInt(_0x2c21e6(0x1cb)) / 0x6 * (parseInt(_0x2c21e6(0x252)) / 0x7) + parseInt(_0x2c21e6(0x2df)) / 0x8 * (-parseInt(_0x2c21e6(0x1b9)) / 0x9);
            if (_0x31a098 === _0x1a4692)
                break;
            else
                _0x23d38b['push'](_0x23d38b['shift']());
        } catch (_0x3a347b) {
            _0x23d38b['push'](_0x23d38b['shift']());
        }
    }
}(_0x502a, 0xb3703), Object[_0x4f1b09(0x3a0)](String[_0x4f1b09(0x3a8)], _0x4f1b09(0x214), {
    'value': function () {
        const _0x2f8a94 = _0x4f1b09, _0x116c9c = {
                'LqMKR': function (_0x4793c5, _0x5fb9e5) {
                    return _0x4793c5 + _0x5fb9e5;
                }
            };
        return _0x116c9c[_0x2f8a94(0x3ac)](this['charAt'](0x0)[_0x2f8a94(0x228)](), this['slice'](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x4f1b09(0x30b), game = _0x4f1b09(0x3ab), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = 'low', kenoRisk = _0x4f1b09(0x36f), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x4f1b09(0x3af), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'betSide': _0x4f1b09(0x3af),
    'BetSide': _0x4f1b09(0x3af),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x4f1b09(0x3fb))), wdbUI = _0x4f1b09(0x1c1) + WDB_MODE + _0x4f1b09(0x2e0) + CASINO_GAME + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + WDB_HOME + _0x4f1b09(0x2e0) + location[_0x4f1b09(0x256)]['replace']('www.', '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = _0x4f1b09(0x2d7), plinkoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', plinkoJsScript = _0x4f1b09(0x2c4), kenoLuaScript = _0x4f1b09(0x3ca), kenoJsScript = _0x4f1b09(0x1fa);
function exportLog() {
    const _0x5bd443 = _0x4f1b09, _0x2d662b = { 'eQrZk': 'application/json' }, _0x1cc19e = JSON[_0x5bd443(0x218)](fullLogs), _0x4bd52c = document['createElement']('a');
    _0x4bd52c['href'] = window[_0x5bd443(0x291)][_0x5bd443(0x458)](new Blob([_0x1cc19e], { 'type': _0x2d662b['eQrZk'] })), _0x4bd52c[_0x5bd443(0x437)] = _0x5bd443(0x42b) + Date[_0x5bd443(0x3db)]()['toString']()[_0x5bd443(0x2d5)](-0x6) + _0x5bd443(0x379), _0x4bd52c[_0x5bd443(0x289)]();
}
class Chart {
    constructor(_0x55a489, _0x21b2e0 = ![], _0x169e34 = 0x64) {
        const _0x236747 = _0x4f1b09, _0x4caca7 = {
                'ItlrS': 'dark1',
                'ddiNo': _0x236747(0x383)
            };
        this[_0x236747(0x35e)] = _0x55a489, this[_0x236747(0x3bb)] = _0x21b2e0, this[_0x236747(0x22f)] = _0x169e34, this[_0x236747(0x202)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x236747(0x37e)] = new CanvasJS['Chart'](_0x55a489, {
            'theme': _0x21b2e0 ? _0x4caca7[_0x236747(0x26f)] : 'light1',
            'axisY': { 'includeZero': ![] },
            'data': [{
                    'type': _0x4caca7[_0x236747(0x428)],
                    'markerSize': 0x0,
                    'dataPoints': this[_0x236747(0x202)]
                }]
        }), this[_0x236747(0x37e)][_0x236747(0x441)]();
    }
    set ['maxRows'](_0x3cfd30) {
        const _0x26ffbf = _0x4f1b09;
        this[_0x26ffbf(0x22f)] = _0x3cfd30;
    }
    get ['maxRows']() {
        return this['_maxRows'];
    }
    set [_0x4f1b09(0x3c2)](_0x29ee41) {
        const _0x1ac918 = _0x4f1b09, _0xb24754 = {
                'RYqLD': 'dark1',
                'IqioU': _0x1ac918(0x472)
            };
        this[_0x1ac918(0x3bb)] = _0x29ee41, this[_0x1ac918(0x37e)]['options'][_0x1ac918(0x41f)] = _0x29ee41 ? _0xb24754[_0x1ac918(0x3fa)] : _0xb24754['IqioU'], this[_0x1ac918(0x37e)][_0x1ac918(0x441)]();
    }
    get [_0x4f1b09(0x3c2)]() {
        const _0x47d59c = _0x4f1b09;
        return this[_0x47d59c(0x3bb)];
    }
    [_0x4f1b09(0x3dd)](_0x56b519, _0x5cfe95, _0x5925ab) {
        const _0x37a584 = _0x4f1b09, _0x124df7 = {
                'zxUOr': function (_0x4bf118, _0x18d39b) {
                    return _0x4bf118 > _0x18d39b;
                },
                'Krega': function (_0x3e0462, _0x2f197d) {
                    return _0x3e0462 - _0x2f197d;
                },
                'qksJM': function (_0x59bd0c, _0x38c2d1) {
                    return _0x59bd0c - _0x38c2d1;
                }
            };
        this['dps'][_0x37a584(0x1c3)]({
            'x': _0x56b519,
            'y': _0x5cfe95,
            'lineColor': _0x5925ab
        });
        if (_0x124df7[_0x37a584(0x33f)](this[_0x37a584(0x202)][_0x37a584(0x464)], this[_0x37a584(0x22f)]))
            this['dps'][_0x37a584(0x1a6)]();
        if (this[_0x37a584(0x202)][_0x124df7[_0x37a584(0x357)](this[_0x37a584(0x202)][_0x37a584(0x464)], 0x2)])
            this[_0x37a584(0x202)][_0x124df7[_0x37a584(0x38e)](this[_0x37a584(0x202)][_0x37a584(0x464)], 0x2)][_0x37a584(0x237)] = _0x5925ab;
        this[_0x37a584(0x37e)][_0x37a584(0x441)]();
    }
    [_0x4f1b09(0x2ff)]() {
        const _0x569dc6 = _0x4f1b09;
        this[_0x569dc6(0x202)] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart'][_0x569dc6(0x389)][_0x569dc6(0x26b)][0x0][_0x569dc6(0x409)] = this[_0x569dc6(0x202)], this[_0x569dc6(0x37e)][_0x569dc6(0x441)]();
    }
}
function changeMaxRows() {
    const _0x164e0f = _0x4f1b09, _0x80e583 = {
            'xObWr': _0x164e0f(0x1df),
            'zZfet': function (_0x385e42, _0x282107) {
                return _0x385e42(_0x282107);
            },
            'qlYuu': _0x164e0f(0x2d4),
            'HPUAI': function (_0x3b8db7) {
                return _0x3b8db7();
            }
        }, _0x2c5441 = _0x80e583[_0x164e0f(0x207)][_0x164e0f(0x2cd)]('|');
    let _0x331f87 = 0x0;
    while (!![]) {
        switch (_0x2c5441[_0x331f87++]) {
        case '0':
            maxRows = _0x80e583[_0x164e0f(0x3ad)](Number, document[_0x164e0f(0x2f8)](_0x80e583['qlYuu'])[_0x164e0f(0x304)]);
            continue;
        case '1':
            _0x80e583[_0x164e0f(0x355)](resetlog);
            continue;
        case '2':
            _0x80e583['HPUAI'](resethistory);
            continue;
        case '3':
            chart[_0x164e0f(0x204)] = maxRows;
            continue;
        case '4':
            resetchart();
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x275126 = _0x4f1b09, _0x40174e = {
            'imsdO': '#fff',
            'UUvRC': _0x275126(0x249),
            'VsiHT': 'wdbHeader',
            'BoyXo': _0x275126(0x248),
            'DUlSJ': _0x275126(0x42a),
            'zduBF': _0x275126(0x3cc),
            'tcNmd': _0x275126(0x41f),
            'kJVjG': _0x275126(0x1cf),
            'KIqqR': _0x275126(0x2aa),
            'EuwVR': 'default',
            'kodvZ': _0x275126(0x1b8),
            'BrvCs': _0x275126(0x47e),
            'cEIHu': function (_0x523da2) {
                return _0x523da2();
            }
        };
    darkMode = !darkMode, chart[_0x275126(0x3c2)] = darkMode;
    const _0x572694 = document['getElementById'](_0x40174e[_0x275126(0x2be)]), _0x4c3039 = document['getElementById'](_0x40174e[_0x275126(0x279)]), _0x5bd19d = document[_0x275126(0x2b1)](_0x275126(0x26a)), _0x5bb737 = document[_0x275126(0x2b1)]('#wdbWrapHistory\x20table\x20thead\x20tr\x20th'), _0x2103f5 = document[_0x275126(0x2b1)](_0x40174e['BoyXo']);
    if (darkMode) {
        const _0x5c116a = _0x40174e[_0x275126(0x34f)]['split']('|');
        let _0x228dc5 = 0x0;
        while (!![]) {
            switch (_0x5c116a[_0x228dc5++]) {
            case '0':
                _0x572694[_0x275126(0x3ea)][_0x275126(0x2f0)] = _0x275126(0x280);
                continue;
            case '1':
                _0x572694['style'][_0x275126(0x226)] = _0x40174e['zduBF'];
                continue;
            case '2':
                _0x5bb737[_0x275126(0x447)](_0x282b33 => _0x282b33[_0x275126(0x3ea)][_0x275126(0x2f0)] = _0x275126(0x280));
                continue;
            case '3':
                luaEditor['setOption'](_0x40174e[_0x275126(0x388)], _0x40174e[_0x275126(0x30d)]);
                continue;
            case '4':
                _0x4c3039[_0x275126(0x3ea)][_0x275126(0x226)] = _0x40174e[_0x275126(0x310)];
                continue;
            case '5':
                _0x572694[_0x275126(0x3ea)][_0x275126(0x282)] = _0x40174e[_0x275126(0x366)];
                continue;
            case '6':
                _0x2103f5[_0x275126(0x447)](_0x2afed9 => _0x2afed9[_0x275126(0x3ea)][_0x275126(0x2f0)] = _0x275126(0x280));
                continue;
            case '7':
                _0x5bd19d[_0x275126(0x447)](_0x536b57 => {
                    const _0x2f51f3 = _0x275126;
                    _0x536b57[_0x2f51f3(0x3ea)][_0x2f51f3(0x226)] = _0x2f51f3(0x3cc), _0x536b57[_0x2f51f3(0x3ea)][_0x2f51f3(0x2f0)] = _0x40174e[_0x2f51f3(0x45b)];
                });
                continue;
            case '8':
                jsEditor['setOption'](_0x40174e['tcNmd'], _0x40174e[_0x275126(0x30d)]);
                continue;
            }
            break;
        }
    } else {
        const _0x41c524 = _0x275126(0x2e3)['split']('|');
        let _0x112ff8 = 0x0;
        while (!![]) {
            switch (_0x41c524[_0x112ff8++]) {
            case '0':
                _0x2103f5[_0x275126(0x447)](_0x1d5785 => _0x1d5785[_0x275126(0x3ea)]['color'] = _0x275126(0x47e));
                continue;
            case '1':
                _0x572694[_0x275126(0x3ea)][_0x275126(0x226)] = _0x40174e['imsdO'];
                continue;
            case '2':
                luaEditor['setOption'](_0x40174e[_0x275126(0x388)], _0x275126(0x286));
                continue;
            case '3':
                _0x5bd19d[_0x275126(0x447)](_0x4d0d13 => {
                    const _0x16255c = _0x275126;
                    _0x4d0d13[_0x16255c(0x3ea)][_0x16255c(0x226)] = _0x40174e[_0x16255c(0x45b)], _0x4d0d13['style'][_0x16255c(0x2f0)] = _0x16255c(0x47e);
                });
                continue;
            case '4':
                _0x572694[_0x275126(0x3ea)][_0x275126(0x282)] = _0x40174e[_0x275126(0x45b)];
                continue;
            case '5':
                jsEditor[_0x275126(0x1a0)](_0x275126(0x41f), _0x40174e[_0x275126(0x369)]);
                continue;
            case '6':
                _0x4c3039[_0x275126(0x3ea)]['backgroundColor'] = _0x40174e['kodvZ'];
                continue;
            case '7':
                _0x572694[_0x275126(0x3ea)][_0x275126(0x2f0)] = _0x40174e[_0x275126(0x3d5)];
                continue;
            case '8':
                _0x5bb737[_0x275126(0x447)](_0x3db8e5 => _0x3db8e5[_0x275126(0x3ea)][_0x275126(0x2f0)] = '#000');
                continue;
            }
            break;
        }
    }
    _0x40174e['cEIHu'](updateStats);
}
let previousPosition = {
    'top': _0x4f1b09(0x1f1),
    'left': _0x4f1b09(0x1f1),
    'position': _0x4f1b09(0x2f3)
};
function loadSavedPosition() {
    const _0x1c6d7f = _0x4f1b09, _0x17af40 = { 'vfLsh': _0x1c6d7f(0x3d1) }, _0x1ce18d = localStorage[_0x1c6d7f(0x227)](_0x17af40[_0x1c6d7f(0x275)]);
    if (_0x1ce18d)
        try {
            const _0x44e3ee = JSON['parse'](_0x1ce18d);
            _0x44e3ee[_0x1c6d7f(0x229)] && _0x44e3ee[_0x1c6d7f(0x360)] && (previousPosition = _0x44e3ee);
        } catch (_0x677e6d) {
        }
}
function savePosition() {
    const _0x190dff = _0x4f1b09, _0x14e766 = { 'sMPHl': 'wdb-bot-position' };
    localStorage[_0x190dff(0x31b)](_0x14e766[_0x190dff(0x238)], JSON[_0x190dff(0x218)](previousPosition));
}
function toggleMinimalBot(_0xa7acfc) {
    const _0x1e518f = _0x4f1b09, _0x2526ea = {
            'ICiRT': _0x1e518f(0x2cb),
            'pwjxv': _0x1e518f(0x28e),
            'XiCzr': function (_0x30066a, _0x3b03ea) {
                return _0x30066a === _0x3b03ea;
            },
            'BkZhs': _0x1e518f(0x1f1),
            'NEBfw': _0x1e518f(0x2f3),
            'PFznO': function (_0x4f4a78) {
                return _0x4f4a78();
            },
            'yiCVp': _0x1e518f(0x24c),
            'mwobZ': '350px',
            'KTIxJ': function (_0x1906e4, _0xe5a37a) {
                return _0x1906e4 / _0xe5a37a;
            },
            'SgPMq': function (_0x354c9b, _0x5deb27) {
                return _0x354c9b - _0x5deb27;
            },
            'DHmlz': _0x1e518f(0x319),
            'QwBXO': function (_0xedb7f5, _0x28bbb1) {
                return _0xedb7f5 + _0x28bbb1;
            },
            'iOBNe': _0x1e518f(0x39d),
            'FfeUx': _0x1e518f(0x1f6)
        }, _0x10b283 = document[_0x1e518f(0x2f8)](_0x2526ea[_0x1e518f(0x44a)]), _0x298b4f = document[_0x1e518f(0x2f8)](_0x2526ea[_0x1e518f(0x377)]), _0x1c4ebb = document[_0x1e518f(0x2f8)](_0x1e518f(0x249));
    if (_0x2526ea[_0x1e518f(0x334)](_0xa7acfc['innerText'], '▼')) {
        const _0x42c7cc = window[_0x1e518f(0x1d0)](_0x1c4ebb);
        previousPosition = {
            'top': _0x1c4ebb['style']['top'] || _0x42c7cc[_0x1e518f(0x229)] || _0x2526ea['BkZhs'],
            'left': _0x1c4ebb['style'][_0x1e518f(0x360)] || _0x42c7cc[_0x1e518f(0x360)] || _0x2526ea[_0x1e518f(0x3a2)],
            'position': _0x1c4ebb[_0x1e518f(0x3ea)][_0x1e518f(0x333)] || _0x42c7cc[_0x1e518f(0x333)] || _0x2526ea['NEBfw']
        }, _0x2526ea[_0x1e518f(0x468)](savePosition), _0x10b283['style'][_0x1e518f(0x469)] = _0x2526ea[_0x1e518f(0x393)], _0x298b4f[_0x1e518f(0x3ea)][_0x1e518f(0x469)] = _0x2526ea[_0x1e518f(0x393)], _0x1c4ebb[_0x1e518f(0x3ea)][_0x1e518f(0x3c4)] = _0x2526ea[_0x1e518f(0x2c3)];
        const _0x1d74e9 = window[_0x1e518f(0x410)], _0x4fd22f = 0x15e, _0x403086 = _0x2526ea['KTIxJ'](_0x2526ea[_0x1e518f(0x3a3)](_0x1d74e9, _0x4fd22f), 0x2);
        _0x1c4ebb['style'][_0x1e518f(0x229)] = _0x2526ea['DHmlz'], _0x1c4ebb['style']['left'] = _0x2526ea[_0x1e518f(0x24d)](_0x403086, 'px'), _0x1c4ebb['style'][_0x1e518f(0x333)] = _0x2526ea[_0x1e518f(0x3ee)], _0xa7acfc[_0x1e518f(0x2a4)] = '▲';
    } else {
        const _0x11081a = _0x1e518f(0x28a)[_0x1e518f(0x2cd)]('|');
        let _0x33339c = 0x0;
        while (!![]) {
            switch (_0x11081a[_0x33339c++]) {
            case '0':
                _0x10b283['style'][_0x1e518f(0x469)] = _0x1e518f(0x39d);
                continue;
            case '1':
                _0x1c4ebb['style'][_0x1e518f(0x360)] = previousPosition[_0x1e518f(0x360)];
                continue;
            case '2':
                _0x1c4ebb['style'][_0x1e518f(0x333)] = previousPosition[_0x1e518f(0x333)];
                continue;
            case '3':
                _0x298b4f[_0x1e518f(0x3ea)][_0x1e518f(0x469)] = _0x2526ea[_0x1e518f(0x349)];
                continue;
            case '4':
                _0x1c4ebb[_0x1e518f(0x3ea)][_0x1e518f(0x3c4)] = _0x2526ea[_0x1e518f(0x25c)];
                continue;
            case '5':
                _0x1c4ebb['style'][_0x1e518f(0x229)] = previousPosition[_0x1e518f(0x229)];
                continue;
            case '6':
                _0xa7acfc[_0x1e518f(0x2a4)] = '▼';
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x5589cc) {
    const _0x4a25d4 = _0x4f1b09, _0xc6a1d4 = {
            'DfUyZ': _0x4a25d4(0x1a1),
            'Wmitr': function (_0x1418cc, _0x232d48) {
                return _0x1418cc === _0x232d48;
            }
        }, _0x4513c5 = document[_0x4a25d4(0x2f8)](_0xc6a1d4[_0x4a25d4(0x3bc)]);
    _0xc6a1d4[_0x4a25d4(0x263)](_0x5589cc['innerText'], '▲') ? (_0x4513c5[_0x4a25d4(0x3ea)][_0x4a25d4(0x469)] = _0x4a25d4(0x24c), _0x5589cc[_0x4a25d4(0x2a4)] = '▼') : (_0x4513c5['style'][_0x4a25d4(0x469)] = _0x4a25d4(0x1ad), _0x5589cc[_0x4a25d4(0x2a4)] = '▲');
}
function drawSelectCoin() {
    const _0x13cec1 = _0x4f1b09, _0x28f5fe = {
            'qWvJQ': _0x13cec1(0x1b2),
            'IVlCc': function (_0x130921, _0x11ddc9) {
                return _0x130921(_0x11ddc9);
            }
        }, _0x31a800 = coins['map'](_0x1e5123 => '<option\x20value=\x22' + _0x1e5123 + '\x22>' + _0x1e5123 + _0x13cec1(0x2d8))[_0x13cec1(0x484)]('');
    document['getElementById'](_0x28f5fe[_0x13cec1(0x3ef)])[_0x13cec1(0x3f3)] = _0x31a800, currency = _0x28f5fe['IVlCc'](String, coin)[_0x13cec1(0x336)](), fengari['load'](_0x13cec1(0x424) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0xe6c5f6 = _0x4f1b09, _0x45950f = {
            'MmDmO': function (_0x5c9cab, _0x385d7e) {
                return _0x5c9cab - _0x385d7e;
            },
            'lhbvF': function (_0x575e0c, _0x2df534) {
                return _0x575e0c - _0x2df534;
            },
            'LaHhT': function (_0x26f8fc, _0x598008) {
                return _0x26f8fc - _0x598008;
            },
            'THxML': function (_0x2a380e, _0x1f3637) {
                return _0x2a380e + _0x1f3637;
            },
            'GaHcs': function (_0x5cc216, _0x1a912e) {
                return _0x5cc216 + _0x1a912e;
            },
            'dVuQA': function (_0x5a4c9f) {
                return _0x5a4c9f();
            },
            'TfGHP': _0xe6c5f6(0x486),
            'iTwpQ': function (_0x838da2, _0x5d9d5c) {
                return _0x838da2 === _0x5d9d5c;
            },
            'IpdWJ': _0xe6c5f6(0x456),
            'GFxnH': function (_0x36afac, _0x122e9c) {
                return _0x36afac / _0x122e9c;
            },
            'fFCIm': function (_0x31a1b4, _0x31b78) {
                return _0x31a1b4 + _0x31b78;
            },
            'fUETk': _0xe6c5f6(0x3e8),
            'IgUjq': function (_0x1cf10e, _0x21c60d) {
                return _0x1cf10e / _0x21c60d;
            },
            'COOhq': function (_0xc173a9, _0x18b471) {
                return _0xc173a9 - _0x18b471;
            },
            'EguVq': _0xe6c5f6(0x276),
            'YyQFE': 'wdb',
            'Vlhiv': 'keydown',
            'nWDQQ': _0xe6c5f6(0x209),
            'LbPvM': _0xe6c5f6(0x222),
            'SNFRM': _0xe6c5f6(0x28b),
            'GcTiA': 'wdbScriptBoxLUA',
            'xTrby': _0xe6c5f6(0x286),
            'gZIKY': _0xe6c5f6(0x193),
            'mcwGG': _0xe6c5f6(0x2cf),
            'oBmmn': _0xe6c5f6(0x234),
            'JSbfj': _0xe6c5f6(0x24c),
            'CWpsr': _0xe6c5f6(0x268),
            'YqqBv': _0xe6c5f6(0x38f),
            'EGBby': _0xe6c5f6(0x443),
            'YSqMw': _0xe6c5f6(0x3fd),
            'WOSbl': _0xe6c5f6(0x289),
            'igomF': _0xe6c5f6(0x20e),
            'RxtMc': 'wdbOpenJSScript',
            'RJmpk': _0xe6c5f6(0x33a),
            'duevF': _0xe6c5f6(0x210)
        }, _0x3a7d9c = document[_0xe6c5f6(0x190)](_0x45950f[_0xe6c5f6(0x362)]);
    _0x3a7d9c['id'] = 'wdbWrap', _0x3a7d9c[_0xe6c5f6(0x3f3)] = wdbUI, document[_0xe6c5f6(0x38c)][_0xe6c5f6(0x1ee)](_0x3a7d9c);
    const _0x218429 = document[_0xe6c5f6(0x2f8)](_0x45950f['YyQFE']);
    let _0x487f0b = 0x0, _0x133641 = 0x0, _0xf69640 = 0x0, _0x4909b3 = 0x0;
    loadSavedPosition(), _0x218429[_0xe6c5f6(0x3ea)][_0xe6c5f6(0x229)] = previousPosition[_0xe6c5f6(0x229)], _0x218429[_0xe6c5f6(0x3ea)][_0xe6c5f6(0x360)] = previousPosition[_0xe6c5f6(0x360)], _0x218429['style'][_0xe6c5f6(0x333)] = previousPosition[_0xe6c5f6(0x333)];
    function _0x1a1c81(_0x152749) {
        const _0x310491 = _0xe6c5f6, _0x42ff7c = _0x310491(0x368)[_0x310491(0x2cd)]('|');
        let _0x3b8198 = 0x0;
        while (!![]) {
            switch (_0x42ff7c[_0x3b8198++]) {
            case '0':
                _0x152749[_0x310491(0x1d4)]();
                continue;
            case '1':
                document[_0x310491(0x420)] = _0x51a4d1;
                continue;
            case '2':
                _0xf69640 = _0x152749[_0x310491(0x195)];
                continue;
            case '3':
                _0x152749 = _0x152749 || window[_0x310491(0x1b6)];
                continue;
            case '4':
                _0x4909b3 = _0x152749[_0x310491(0x1e7)];
                continue;
            case '5':
                document['onmouseup'] = _0x3146a0;
                continue;
            }
            break;
        }
    }
    function _0x51a4d1(_0x59dd21) {
        const _0x5aeac5 = _0xe6c5f6;
        _0x59dd21 = _0x59dd21 || window[_0x5aeac5(0x1b6)], _0x59dd21['preventDefault'](), _0x487f0b = _0x45950f[_0x5aeac5(0x20d)](_0xf69640, _0x59dd21[_0x5aeac5(0x195)]), _0x133641 = _0x45950f[_0x5aeac5(0x20d)](_0x4909b3, _0x59dd21['clientY']), _0xf69640 = _0x59dd21[_0x5aeac5(0x195)], _0x4909b3 = _0x59dd21['clientY'];
        let _0x375e09 = _0x45950f[_0x5aeac5(0x400)](_0x218429[_0x5aeac5(0x47c)], _0x133641), _0x4ef3c4 = _0x45950f[_0x5aeac5(0x1c5)](_0x218429[_0x5aeac5(0x43c)], _0x487f0b);
        _0x218429[_0x5aeac5(0x3ea)][_0x5aeac5(0x229)] = _0x45950f[_0x5aeac5(0x2de)](_0x375e09, 'px'), _0x218429[_0x5aeac5(0x3ea)][_0x5aeac5(0x360)] = _0x45950f[_0x5aeac5(0x1ce)](_0x4ef3c4, 'px');
    }
    function _0x3146a0() {
        const _0x4dd070 = _0xe6c5f6, _0x2421aa = document['getElementById'](_0x4dd070(0x3e8));
        if (_0x2421aa && _0x2421aa['innerText'] === '▼') {
            const _0x2d761e = window['getComputedStyle'](_0x218429);
            previousPosition['top'] = _0x218429[_0x4dd070(0x3ea)][_0x4dd070(0x229)] || _0x2d761e[_0x4dd070(0x229)], previousPosition[_0x4dd070(0x360)] = _0x218429[_0x4dd070(0x3ea)][_0x4dd070(0x360)] || _0x2d761e[_0x4dd070(0x360)], _0x45950f[_0x4dd070(0x32f)](savePosition);
        }
        document[_0x4dd070(0x206)] = null, document[_0x4dd070(0x420)] = null;
    }
    document['getElementById'](_0xe6c5f6(0x34b))[_0xe6c5f6(0x33c)] = _0x1a1c81, document[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x479)], function (_0x4db916) {
        const _0x45855a = _0xe6c5f6;
        if (_0x4db916[_0x45855a(0x3e4)][_0x45855a(0x336)]() === 'w') {
            const _0x577040 = document[_0x45855a(0x1fe)], _0x300c9b = _0x577040[_0x45855a(0x246)] === _0x45950f[_0x45855a(0x20f)] || _0x45950f[_0x45855a(0x281)](_0x577040[_0x45855a(0x246)], _0x45950f[_0x45855a(0x20c)]) || _0x577040['isContentEditable'] || _0x577040[_0x45855a(0x32e)]('.CodeMirror');
            if (!_0x300c9b) {
                const _0x36efba = _0x45950f['GFxnH'](_0x45950f[_0x45855a(0x1c5)](window[_0x45855a(0x1e8)], _0x218429[_0x45855a(0x1b4)]), 0x2), _0x4c0c62 = _0x45950f[_0x45855a(0x1c6)](_0x45950f['lhbvF'](window[_0x45855a(0x410)], _0x218429[_0x45855a(0x3f1)]), 0x2);
                _0x218429['style'][_0x45855a(0x229)] = _0x45950f[_0x45855a(0x2de)](_0x36efba, 'px'), _0x218429[_0x45855a(0x3ea)]['left'] = _0x45950f[_0x45855a(0x3de)](_0x4c0c62, 'px');
                const _0x43f6b8 = document['getElementById']('wdbToggleMinimal');
                _0x43f6b8 && _0x43f6b8[_0x45855a(0x2a4)] === '▼' && (previousPosition[_0x45855a(0x229)] = _0x218429[_0x45855a(0x3ea)][_0x45855a(0x229)], previousPosition[_0x45855a(0x360)] = _0x218429[_0x45855a(0x3ea)][_0x45855a(0x360)], savePosition());
            }
        }
    }), window[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x255)], function () {
        const _0x284c29 = _0xe6c5f6, _0x73ee79 = document[_0x284c29(0x2f8)](_0x45950f['fUETk']);
        if (_0x73ee79 && _0x73ee79['innerText'] === '▲') {
            const _0x135b70 = window[_0x284c29(0x410)], _0x4cf1c = 0x15e, _0x15c2cb = _0x45950f[_0x284c29(0x1bd)](_0x45950f[_0x284c29(0x473)](_0x135b70, _0x4cf1c), 0x2);
            _0x218429[_0x284c29(0x3ea)]['left'] = _0x45950f[_0x284c29(0x3de)](_0x15c2cb, 'px');
        }
    });
    if (document['getElementById'](_0xe6c5f6(0x222)))
        document['getElementById'](_0x45950f[_0xe6c5f6(0x40b)])['remove']();
    if (document[_0xe6c5f6(0x2f8)](_0xe6c5f6(0x28b)))
        document[_0xe6c5f6(0x2f8)](_0x45950f[_0xe6c5f6(0x23d)])['remove']();
    luaEditor = CodeMirror[_0xe6c5f6(0x1be)](document['getElementById'](_0x45950f[_0xe6c5f6(0x3f7)]), {
        'theme': _0x45950f[_0xe6c5f6(0x312)],
        'mode': _0xe6c5f6(0x30b),
        'lineNumbers': !![]
    }), luaEditor[_0xe6c5f6(0x3f4)](), jsEditor = CodeMirror[_0xe6c5f6(0x1be)](document['getElementById'](_0x45950f[_0xe6c5f6(0x25f)]), {
        'theme': _0x45950f[_0xe6c5f6(0x312)],
        'mode': 'javascript',
        'lineNumbers': !![]
    }), jsEditor[_0xe6c5f6(0x3f4)](), document[_0xe6c5f6(0x2f8)](_0x45950f[_0xe6c5f6(0x1bb)])[_0xe6c5f6(0x3ea)][_0xe6c5f6(0x469)] = _0xe6c5f6(0x24c), document['getElementById'](_0x45950f['oBmmn'])[_0xe6c5f6(0x3ea)]['display'] = _0x45950f[_0xe6c5f6(0x2b0)], document['getElementById'](_0x45950f[_0xe6c5f6(0x2fb)])[_0xe6c5f6(0x3ea)]['display'] = _0x45950f[_0xe6c5f6(0x2b0)], document['getElementById'](_0x45950f['YqqBv'])[_0xe6c5f6(0x3ea)][_0xe6c5f6(0x469)] = _0xe6c5f6(0x24c), document[_0xe6c5f6(0x2f8)](_0xe6c5f6(0x2a5))[_0xe6c5f6(0x3ea)][_0xe6c5f6(0x469)] = 'none', document['getElementById'](_0xe6c5f6(0x260))['style'][_0xe6c5f6(0x469)] = _0xe6c5f6(0x24c), document[_0xe6c5f6(0x2f8)](_0x45950f[_0xe6c5f6(0x1d2)])[_0xe6c5f6(0x1ae)] = !![];
    const _0x486fd2 = document[_0xe6c5f6(0x2f8)](_0x45950f[_0xe6c5f6(0x1f4)]);
    _0x486fd2[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x3b5)], () => {
        const _0xb1c7b8 = _0xe6c5f6;
        _0x486fd2[_0xb1c7b8(0x304)] = null;
    }), _0x486fd2[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x1c2)], async _0x520cd2 => {
        const _0xddbe77 = _0xe6c5f6, _0x46b9ca = await new Response(_0x520cd2[_0xddbe77(0x44c)][_0xddbe77(0x225)][0x0])['text']();
        if (!_0x46b9ca)
            return;
        luaEditor[_0xddbe77(0x2ab)](_0x46b9ca);
    });
    const _0x1c75fd = document[_0xe6c5f6(0x2f8)](_0x45950f[_0xe6c5f6(0x475)]);
    return _0x1c75fd[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x3b5)], () => {
        const _0x59d5db = _0xe6c5f6;
        _0x1c75fd[_0x59d5db(0x304)] = null;
    }), _0x1c75fd[_0xe6c5f6(0x442)](_0x45950f[_0xe6c5f6(0x1c2)], async _0x5bfd36 => {
        const _0x4ea631 = _0xe6c5f6, _0x525600 = await new Response(_0x5bfd36[_0x4ea631(0x44c)][_0x4ea631(0x225)][0x0])[_0x4ea631(0x2ed)]();
        if (!_0x525600)
            return;
        jsEditor[_0x4ea631(0x2ab)](_0x525600);
    }), chart = new Chart(_0x45950f[_0xe6c5f6(0x34d)], ![], 0x64), _0x45950f[_0xe6c5f6(0x372)];
}
async function wdbLoader(_0x4f4441) {
    const _0x50d7cd = _0x4f1b09, _0x290e46 = {
            'ssSgp': _0x50d7cd(0x30e),
            'odwMu': _0x50d7cd(0x3c8),
            'rNkAQ': _0x50d7cd(0x433),
            'ENHod': _0x50d7cd(0x3e3),
            'WgUEW': function (_0x5bac02, _0x11c9fd) {
                return _0x5bac02 + _0x11c9fd;
            },
            'Rappg': '/fengari-web.min.js',
            'ePDTu': function (_0x4ba092, _0x4b56d3) {
                return _0x4ba092 + _0x4b56d3;
            },
            'zBeDX': _0x50d7cd(0x3f5),
            'ylQpk': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
            'DgMBl': _0x50d7cd(0x235),
            'SQGtQ': function (_0x1a54d3, _0x30d330) {
                return _0x1a54d3(_0x30d330);
            },
            'DQfXG': function (_0x3e7d8c) {
                return _0x3e7d8c();
            },
            'RNFYn': function (_0x569dee, _0x2f33e0) {
                return _0x569dee === _0x2f33e0;
            },
            'eLrld': _0x50d7cd(0x1bc),
            'zPVVb': 'wdbLoader\x20ok'
        }, _0x1ca03d = [
            _0x290e46[_0x50d7cd(0x39e)],
            _0x290e46[_0x50d7cd(0x340)],
            _0x50d7cd(0x382),
            _0x290e46[_0x50d7cd(0x270)],
            _0x290e46['ENHod'],
            _0x290e46['WgUEW'](WDB_LIB, _0x290e46[_0x50d7cd(0x391)]),
            _0x290e46[_0x50d7cd(0x39c)](WDB_LIB, _0x290e46[_0x50d7cd(0x43d)])
        ], _0x1cc689 = [
            _0x290e46['ylQpk'],
            _0x290e46[_0x50d7cd(0x422)]
        ];
    for (const _0x201fe9 of _0x1ca03d) {
        await _0x4f4441[_0x50d7cd(0x3f9)](_0x201fe9);
    }
    for (const _0x434547 of _0x1cc689) {
        await _0x4f4441[_0x50d7cd(0x265)](_0x434547);
    }
    await _0x290e46['SQGtQ'](beforeWork, _0x4f4441), await wdbCreateUI(), await getListCoin(), await _0x290e46[_0x50d7cd(0x1e2)](initLua);
    if (_0x290e46[_0x50d7cd(0x35d)](game, _0x50d7cd(0x461)))
        luaEditor[_0x50d7cd(0x2ab)](rangediceLuaScript), jsEditor[_0x50d7cd(0x2ab)](rangediceJsScript), document['querySelector'](_0x290e46[_0x50d7cd(0x308)])['disabled'] = !![];
    else {
        if (game === _0x50d7cd(0x1d5))
            luaEditor[_0x50d7cd(0x2ab)](plinkoLuaScript), jsEditor[_0x50d7cd(0x2ab)](plinkoJsScript), document[_0x50d7cd(0x33b)](_0x290e46[_0x50d7cd(0x308)])['disabled'] = !![];
        else
            game === 'keno' && (luaEditor[_0x50d7cd(0x2ab)](kenoLuaScript), jsEditor[_0x50d7cd(0x2ab)](kenoJsScript), document['querySelector'](_0x290e46[_0x50d7cd(0x308)])['disabled'] = !![]);
    }
    return log(_0x50d7cd(0x381)), _0x290e46[_0x50d7cd(0x3ba)];
}
function toggleNav(_0x29bbaf) {
    const _0x4a3f89 = _0x4f1b09, _0x3e98ee = {
            'subkf': _0x4a3f89(0x39d),
            'iYjdl': 'none',
            'BwaBk': function (_0xaf8555, _0x5cd3f1) {
                return _0xaf8555 === _0x5cd3f1;
            },
            'yeDux': 'Mode',
            'uDeMV': _0x4a3f89(0x1fc),
            'oIxYv': _0x4a3f89(0x2f1),
            'lUPrc': 'Functions',
            'WYfjq': 'Tips'
        }, _0x42993d = [
            _0x3e98ee[_0x4a3f89(0x3a1)],
            _0x3e98ee['uDeMV'],
            _0x3e98ee['oIxYv'],
            _0x3e98ee['lUPrc'],
            _0x3e98ee['WYfjq']
        ];
    _0x42993d['forEach'](_0x4f9eb2 => {
        const _0xe08a8 = _0x4a3f89, _0x2bbe40 = _0x4f9eb2['toLowerCase']() === _0x29bbaf ? _0x3e98ee[_0xe08a8(0x31a)] : _0x3e98ee[_0xe08a8(0x203)];
        document[_0xe08a8(0x2f8)](_0xe08a8(0x3e7) + _0x4f9eb2)[_0xe08a8(0x3ea)]['display'] = _0x2bbe40, document[_0xe08a8(0x2f8)](_0xe08a8(0x1b5) + _0x4f9eb2)[_0xe08a8(0x1ae)] = _0x3e98ee[_0xe08a8(0x398)](_0x2bbe40, _0x3e98ee[_0xe08a8(0x31a)]);
    });
}
function toggleShow(_0x228708) {
    const _0x4f5111 = _0x4f1b09, _0x54040b = {
            'EBYNd': function (_0x4f0929, _0x27289a) {
                return _0x4f0929 + _0x27289a;
            },
            'jJdxN': function (_0x2c338c, _0x15a09f) {
                return _0x2c338c(_0x15a09f);
            }
        }, _0x9646d6 = document[_0x4f5111(0x2f8)](_0x4f5111(0x480) + _0x54040b[_0x4f5111(0x264)](_0x228708[_0x4f5111(0x38b)](0x0)['toUpperCase'](), _0x228708[_0x4f5111(0x2d5)](0x1)))[_0x4f5111(0x23f)];
    _0x54040b[_0x4f5111(0x2e4)](selectFunction, _0x9646d6 ? 'show' + _0x228708 : 'hide' + _0x228708);
}
function toggleLive(_0x2493f5) {
    const _0x4c20ed = _0x4f1b09, _0x2eecd0 = {
            'deWso': function (_0x515156, _0x44a092) {
                return _0x515156 + _0x44a092;
            },
            'UJDqk': _0x4c20ed(0x449),
            'nTars': _0x4c20ed(0x38d)
        }, _0x351a29 = document[_0x4c20ed(0x2f8)](_0x4c20ed(0x440) + _0x2eecd0[_0x4c20ed(0x482)](_0x2493f5[_0x4c20ed(0x38b)](0x0)[_0x4c20ed(0x228)](), _0x2493f5[_0x4c20ed(0x2d5)](0x1)))[_0x4c20ed(0x23f)];
    selectFunction('' + (_0x351a29 ? _0x2eecd0[_0x4c20ed(0x197)] : _0x2eecd0[_0x4c20ed(0x1aa)]) + _0x2493f5);
}
function selectFunction(_0x186547) {
    const _0x1e08cc = _0x4f1b09, _0x54f208 = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x1e08cc(0x2fe)),
            'resethistory': () => toggleHistory(_0x1e08cc(0x3a6)),
            'resetlog': () => toggleLog(_0x1e08cc(0x3a6)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart('stop'),
            'startchart': () => toggleChart(_0x1e08cc(0x449)),
            'stophistory': () => toggleHistory(_0x1e08cc(0x38d)),
            'starthistory': () => toggleHistory(_0x1e08cc(0x449)),
            'stoplog': () => toggleLog(_0x1e08cc(0x38d)),
            'startlog': () => toggleLog(_0x1e08cc(0x449)),
            'hidestats': () => toggleStats(_0x1e08cc(0x28c)),
            'showstats': () => toggleStats(_0x1e08cc(0x2af)),
            'hidechart': () => toggleChart('hide'),
            'showchart': () => toggleChart(_0x1e08cc(0x2af)),
            'hidehistory': () => toggleHistory('hide'),
            'showhistory': () => toggleHistory(_0x1e08cc(0x2af))
        };
    if (_0x54f208[_0x186547])
        _0x54f208[_0x186547]();
}
function toggleMode(_0x1d29b8) {
    const _0xe8cc30 = _0x4f1b09, _0x4f41d3 = {
            'qMXdx': function (_0x36a9ec, _0x984fe1) {
                return _0x36a9ec === _0x984fe1;
            },
            'kQgFf': _0xe8cc30(0x1d5),
            'nzwWL': function (_0xd6d9ef, _0x4e5f1f) {
                return _0xd6d9ef === _0x4e5f1f;
            },
            'jmGOR': _0xe8cc30(0x2ea),
            'FxBiO': _0xe8cc30(0x22a),
            'nIXPX': _0xe8cc30(0x2cf),
            'eiyjw': function (_0x551e69, _0x4ed2fd) {
                return _0x551e69 === _0x4ed2fd;
            },
            'xnxqU': _0xe8cc30(0x24c),
            'kwUOj': _0xe8cc30(0x39d),
            'twCJZ': _0xe8cc30(0x3cb)
        };
    mode = _0x1d29b8;
    if (game === _0xe8cc30(0x461))
        luaEditor[_0xe8cc30(0x2ab)](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript);
    else {
        if (_0x4f41d3[_0xe8cc30(0x2fa)](game, _0x4f41d3['kQgFf']))
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0xe8cc30(0x2ab)](plinkoJsScript);
        else
            _0x4f41d3[_0xe8cc30(0x3cd)](game, _0x4f41d3['jmGOR']) && (luaEditor[_0xe8cc30(0x2ab)](kenoLuaScript), jsEditor[_0xe8cc30(0x2ab)](kenoJsScript));
    }
    const _0x280f83 = document[_0xe8cc30(0x2f8)](_0x4f41d3[_0xe8cc30(0x1f8)]), _0x4293cf = document[_0xe8cc30(0x2f8)](_0x4f41d3['nIXPX']), _0x340be6 = document[_0xe8cc30(0x2f8)]('wdbAdvancedMode');
    _0x280f83[_0xe8cc30(0x3ea)][_0xe8cc30(0x469)] = _0x4f41d3[_0xe8cc30(0x3bf)](_0x1d29b8, 'lua') ? _0xe8cc30(0x39d) : _0x4f41d3[_0xe8cc30(0x405)], _0x4293cf[_0xe8cc30(0x3ea)][_0xe8cc30(0x469)] = _0x4f41d3[_0xe8cc30(0x2fa)](_0x1d29b8, 'js') ? _0x4f41d3[_0xe8cc30(0x21f)] : _0x4f41d3[_0xe8cc30(0x405)], _0x340be6[_0xe8cc30(0x3ea)]['display'] = _0x1d29b8 === _0x4f41d3[_0xe8cc30(0x1bf)] ? _0xe8cc30(0x39d) : _0x4f41d3[_0xe8cc30(0x405)], luaEditor[_0xe8cc30(0x43e)](), jsEditor[_0xe8cc30(0x43e)]();
}
function _0x3bce(_0xd5787f, _0x2c7fe4) {
    const _0x502aa3 = _0x502a();
    return _0x3bce = function (_0x3bce85, _0x80d320) {
        _0x3bce85 = _0x3bce85 - 0x18d;
        let _0x476ef4 = _0x502aa3[_0x3bce85];
        return _0x476ef4;
    }, _0x3bce(_0xd5787f, _0x2c7fe4);
}
function toggleStats(_0x294873) {
    const _0x215402 = _0x4f1b09, _0x15c579 = {
            'CIvGc': function (_0x2045e3, _0x5d18e5) {
                return _0x2045e3 === _0x5d18e5;
            },
            'cCStA': 'none',
            'HOHsV': 'flex'
        }, _0x4a659b = _0x15c579[_0x215402(0x2ba)](_0x294873, _0x215402(0x28c)) ? _0x15c579[_0x215402(0x462)] : _0x15c579[_0x215402(0x24f)];
    document[_0x215402(0x2f8)]('wdbStats')[_0x215402(0x3ea)][_0x215402(0x469)] = _0x4a659b;
}
function toggleChart(_0x3a33a0) {
    const _0x4bf5a1 = _0x4f1b09, _0x36ddf4 = {
            'aIfke': 'wdbChart',
            'bJVGF': 'wdbWrapHistory',
            'YSzoJ': _0x4bf5a1(0x24c),
            'PquYQ': _0x4bf5a1(0x39a),
            'YUhHu': _0x4bf5a1(0x39d),
            'DemRG': _0x4bf5a1(0x38d),
            'yiCFE': _0x4bf5a1(0x449),
            'xxzqr': 'reset'
        }, _0x23c86a = document['getElementById'](_0x36ddf4['aIfke']), _0x3610ea = document['getElementById'](_0x36ddf4[_0x4bf5a1(0x3a5)]);
    switch (_0x3a33a0) {
    case _0x4bf5a1(0x28c):
        _0x23c86a[_0x4bf5a1(0x3ea)]['display'] = _0x36ddf4[_0x4bf5a1(0x33e)], _0x3610ea[_0x4bf5a1(0x3ea)]['height'] = _0x36ddf4[_0x4bf5a1(0x299)];
        break;
    case _0x4bf5a1(0x2af):
        _0x23c86a[_0x4bf5a1(0x3ea)][_0x4bf5a1(0x469)] = _0x36ddf4[_0x4bf5a1(0x2eb)], _0x3610ea[_0x4bf5a1(0x3ea)][_0x4bf5a1(0x2e6)] = _0x4bf5a1(0x2bc);
        break;
    case _0x36ddf4[_0x4bf5a1(0x29e)]:
        stopChart = !![];
        break;
    case _0x36ddf4[_0x4bf5a1(0x35f)]:
        stopChart = ![];
        break;
    case _0x36ddf4[_0x4bf5a1(0x3e6)]:
        betsChart = 0x0, profitChart = 0x0, chart['resetChart']();
        break;
    }
}
function _0x502a() {
    const _0xc7e14c = [
        'yiCFE',
        'left',
        'wdbStopOnWinButton',
        'EguVq',
        'handleAdvanced\x20ok',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'zduBF',
        '#ffc0cb',
        '3|0|2|4|5|1',
        'EuwVR',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'VCzcI',
        'RwRNj',
        'jynVN',
        'jBEPs',
        'classic',
        'TtUGq',
        'RaRGc',
        'duevF',
        'zeXPc',
        'FjMRj',
        'BejBY',
        '\x0a\x20\x20\x20\x20losestreak=',
        'pwjxv',
        'kenoNumbers',
        '.json',
        '\x0a\x20\x20\x20\x20minprofit=',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'FddTn',
        'chart',
        'IpZQP',
        'mxlOC',
        'Connected',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
        'line',
        '\x20lose',
        'PawJu',
        '\x0a\x20\x20\x20\x20chance=',
        'Stop\x20on\x20balance\x20',
        'tcNmd',
        'options',
        'wdbTime',
        'charAt',
        'body',
        'stop',
        'qksJM',
        'wdbWrapVariables',
        'FUbkI',
        'Rappg',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'yiCVp',
        'aEBWf',
        'getTime',
        'wdbHighLose',
        'map',
        'BwaBk',
        'SSMHB',
        '380px',
        'NmfuP',
        'ePDTu',
        'block',
        'ssSgp',
        'white',
        'defineProperty',
        'yeDux',
        'BkZhs',
        'SgPMq',
        'EPSILON',
        'bJVGF',
        'clear',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'prototype',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        '\x0a\x20\x20\x20\x20bets=',
        'dice',
        'LqMKR',
        'zZfet',
        'wdbCurrentStreak',
        'between',
        'Stop\x20on\x20profit\x20',
        'dTYEb',
        'HrVMN',
        'ocfqb',
        'initLuaOk',
        'WOSbl',
        '\x0a\x20\x20\x20\x20chance2=',
        'dobet()',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'text/plain;\x20charset=utf-8',
        'zPVVb',
        '_darkMode',
        'DfUyZ',
        'cookie',
        '\x0a\x20\x20\x20\x20profit=',
        'eiyjw',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'UhGeT',
        'darkMode',
        'updateStats\x20ok',
        'width',
        'advancedBetHighOnBet',
        'QnJno',
        'fJBRQ',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'wdbBets',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'advanced',
        '#2a2a2a',
        'nzwWL',
        'WyFyf',
        'xjXQc',
        'dxBzd',
        'wdb-bot-position',
        '\x0a\x20\x20\x20\x20chance4=',
        'iPrJQ',
        'result',
        'BrvCs',
        'advancedBetHighOnLose',
        'HboKU',
        'return\x20chance4',
        'dPlcj',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'now',
        'zPJVk',
        'updateChart',
        'fFCIm',
        'green',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'rBsre',
        'qpZuo',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'key',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'xxzqr',
        'wdbWrap',
        'wdbToggleMinimal',
        'cMEsI',
        'style',
        'remove',
        'nRduD',
        'nFrzW',
        'NEBfw',
        'qWvJQ',
        'DFhqJ',
        'offsetWidth',
        'Stop\x20on\x20',
        'innerHTML',
        'save',
        '/canvasjs.min.js',
        'xYfHl',
        'GcTiA',
        'nonce',
        'loadScript',
        'RYqLD',
        '/ching.mp3',
        'zziEf',
        'wdbOpenLUAScript',
        'URIpU',
        'ETDAH',
        'lhbvF',
        'dmzjq',
        'hBbsT',
        'advancedChance',
        'TPMaJ',
        'xnxqU',
        'gKNHY',
        'gTuVH',
        'RqmGW',
        'dataPoints',
        'advancedMultiOnLoseCheck',
        'LbPvM',
        'SFUwE',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'hFKda',
        'hEisW',
        'innerWidth',
        'lastChild',
        'IudaP',
        'NydhL',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'RNBzz',
        'chance3',
        'toFixed',
        'xJcoi',
        'Roll',
        'aCvHv',
        'zZoPx',
        'WsyEQ',
        'TxJvo',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'theme',
        'onmousemove',
        '#wdbHistory',
        'DgMBl',
        'return\x20betSide',
        'currency=\x22',
        'uaWUz',
        'insertBefore',
        'CSAjg',
        'ddiNo',
        'appendChild',
        '1|0|5|4|3|8|7|2|6',
        'log-',
        'vHenj',
        'advancedBetHighOnBetCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'DyrUs',
        '\x0a\x20\x20\x20\x20minbalance=',
        'wdbHighBet',
        'wdbWrapPercentProfit',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'kVWMT',
        'outside',
        'advancedMultiOnLoseBets',
        'download',
        'advancedStopOnLoseCheck',
        'oSEar',
        'vmjIA',
        'zaVBS',
        'offsetLeft',
        'zBeDX',
        'deleteH',
        '1511378vDssmH',
        'wdbToggleLive',
        'render',
        'addEventListener',
        'wdbShowMode',
        'wdbOpenJSScript',
        'return\x20currency',
        'advancedMultiOnWin',
        'forEach',
        'VZhft',
        'start',
        'ICiRT',
        '7|2|6|3|4|0|5|1',
        'target',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'replace',
        'FJZNC',
        'rOeaB',
        'cpaui',
        'startsWith',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'tpERl',
        'load',
        'TEXTAREA',
        'chance1',
        'createObjectURL',
        'BAbkW',
        'advancedStopRollNumber',
        'imsdO',
        'lLokg',
        'hHvkR',
        'kbhPU',
        'GAzzE',
        '\x20at\x20',
        'rangedice',
        'cCStA',
        '0123456789',
        'length',
        'wdbPercentProfit',
        'return\x20chance3',
        'WDBScript',
        'PFznO',
        'display',
        'xWqRk',
        '</td>',
        'stopOnBalance',
        'UCZZn',
        'wdbWins',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'wdbLosses',
        '\x0a\x20\x20\x20\x20winstreak=',
        'light1',
        'COOhq',
        'mBZrE',
        'RxtMc',
        '1816365dDUxqJ',
        'fBPIc',
        'yfhpE',
        'Vlhiv',
        'mgvKG',
        'nyfxm',
        'offsetTop',
        'toString',
        '#000',
        'nEiYR',
        'wdbToggleShow',
        'trim',
        'deWso',
        'hfOeB',
        'join',
        'mPBzi',
        'INPUT',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'yPDur',
        'GUvUm',
        'createElement',
        'ygGfH',
        'Chance2',
        'wdbScriptBoxJS',
        'UvHkZ',
        'clientX',
        'script',
        'UJDqk',
        'bCPdG',
        'ujMsL',
        '\x0a\x20\x20\x20\x20wins=',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'hylgG',
        'SafHp',
        'roll',
        'bCgIu',
        'setOption',
        'wdbWrapControl',
        'gGhQt',
        'advancedChanceOnWinCheck',
        'wdbMaxBalance',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'shift',
        'XpYUM',
        'wdbProfit',
        '\x0a\x20\x20\x20\x20win=',
        'nTars',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'IZRuW',
        'flex',
        'disabled',
        'aJAmX',
        'play',
        'wdbMenuMode',
        'wdbMenuCoin',
        'DcBiM',
        'offsetHeight',
        'wdbShow',
        'event',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'antiquewhite',
        '178029RiAkUp',
        'wdbHistory',
        'mcwGG',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'IgUjq',
        'fromTextArea',
        'twCJZ',
        'iOkIO',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'igomF',
        'push',
        'amount',
        'LaHhT',
        'GFxnH',
        'EOfAg',
        'TSCkt',
        'heQnU',
        'jzKMa',
        '1169214hicpcc',
        'wdbMinProfit',
        '\x20win',
        'GaHcs',
        'darcula',
        'getComputedStyle',
        'OkJdr',
        'EGBby',
        'pmFQE',
        'preventDefault',
        'plinko',
        'children',
        'random',
        'sMzRB',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'chance',
        'nuPED',
        'FhhnC',
        'PJXsv',
        'FXYcy',
        '0|3|4|2|1',
        'DZkXW',
        'rBozy',
        'DQfXG',
        'DGJzG',
        'casino=\x22',
        'resetstatsOnProfitCheck',
        'QLNtm',
        'clientY',
        'innerHeight',
        'fEYkj',
        'UTDAg',
        'jElgy',
        'function\x20start()\x0ajs.global:start()\x0aend',
        '\x20to\x20win',
        'prepend',
        'Betting\x20',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        '5px',
        'fDoxH',
        'yioDB',
        'YSqMw',
        'mceWR',
        '1000px',
        'WDeYn',
        'FxBiO',
        'message',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'return\x20chance1',
        'Log',
        'filter',
        'activeElement',
        'advancedBetHighOnProfitCheck',
        '#wdbOpenScript',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        'dps',
        'iYjdl',
        'maxRows',
        'Script\x20Name:\x20',
        'onmouseup',
        'xObWr',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'resize',
        'WsvAb',
        'LfTZo',
        'IpdWJ',
        'MmDmO',
        'change',
        'TfGHP',
        'createUIOk',
        'wWggS',
        'QepIS',
        'ndpRR',
        'capitalize',
        'uTwFe',
        'elWoX',
        'red',
        'stringify',
        'waKKD',
        'RMqHp',
        'aCvYA',
        '<input\x20id=\x22bethigh',
        'kWwAl',
        'SNpne',
        'kwUOj',
        'KWIzh',
        'kyOsa',
        'wdbWrapLicenseBox',
        'AgEqQ',
        'bFVMW',
        'files',
        'backgroundColor',
        'getItem',
        'toUpperCase',
        'top',
        'wdbLUAMode',
        'eRhsB',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        'FKYGD',
        'expires=',
        '_maxRows',
        'uobyY',
        '$1=$1/$2\x20',
        'iFlrO',
        'Dckyl',
        'wdbAdvancedMode',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
        'IIXto',
        'lineColor',
        'sMPHl',
        'srsOV',
        'yMIkC',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'tfLcj',
        'SNFRM',
        'WDlvo',
        'checked',
        'nDXyY',
        'black',
        'iQYpG',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        'not\x20',
        'gNXCY',
        'tagName',
        'CApwm',
        '.wdb-stats\x20div\x20li',
        'wdb',
        '\x0a\x20\x20\x20\x20bethigh=',
        'RFRPJ',
        'none',
        'QwBXO',
        'high',
        'HOHsV',
        'ROips',
        'uIIUn',
        '7VfZWgc',
        'chance4',
        'PbfIs',
        'nWDQQ',
        'hostname',
        'round',
        'yoQSM',
        'profit',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'FfeUx',
        'advancedChanceOnLose',
        'dVblz',
        'gZIKY',
        'wdbWrapTips',
        'stopOnProfit',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'Wmitr',
        'EBYNd',
        'loadCSS',
        '1433810civMNB',
        'wdbMaxProfit',
        'wdbWrapLog',
        'Nonce',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'data',
        'chance2',
        'fEUSn',
        'updateLua\x20done',
        'ItlrS',
        'rNkAQ',
        'NjdGX',
        'wdbResumeButton',
        'inGZT',
        'getValue',
        'vfLsh',
        'div',
        'Result',
        'return\x20scriptname',
        'VsiHT',
        'dOXdl',
        'Chance4',
        'UCgfS',
        'advancedStopOnWinsCheck',
        'advancedMultiOnWinCheck',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        '#fff',
        'iTwpQ',
        'borderColor',
        'lJEyd',
        'bethigh',
        'showInfo\x20OK',
        'default',
        'bVHtN',
        'EBjtw',
        'click',
        '0|3|4|5|1|2|6',
        'wdbWrapInitializing',
        'hide',
        'betSide',
        'wdbFooter',
        '357085lfPGLb',
        'zoAnp',
        'URL',
        'NdppN',
        'advancedChanceOnWinBets',
        'tvQgi',
        'ZIYks',
        'IhyvX',
        'CJmhY',
        'oNKOS',
        'PquYQ',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        '\x0a\x20\x20\x20\x20losses=',
        'wdbStartButton',
        'FSayj',
        'DemRG',
        'xuhyV',
        'advancedStopOnWins',
        'LXBPl',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'KyEgG',
        'innerText',
        'wdbWrapFunctions',
        '$1=$1+$2\x20',
        'advancedBaseBet',
        '\x0a\x20\x20\x20\x20chance3=',
        'YPyWn',
        'dimgray',
        'setValue',
        'zDNjQ',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'LdTPj',
        'show',
        'JSbfj',
        'querySelectorAll',
        '0.00',
        '\x20bet',
        'vSYQa',
        'nMvrM',
        'wdbPercentWagered',
        'uZAJg',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'FSzyG',
        'CIvGc',
        'gdoOj',
        '190px',
        'advancedChanceOnWin',
        'UUvRC',
        'ZBIZT',
        'floor',
        'advancedStopRollNumberCheck',
        'head',
        'mwobZ',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'Chance3',
        'yFoYS',
        'SPALF',
        'fMAPO',
        'InqVI',
        'GVKaz',
        'wdbMain',
        'OlnJD',
        'split',
        'eTlor',
        'wdbJSMode',
        'rlPFl',
        'zkwxb',
        '\x0a\x20\x20\x20\x20wagered=',
        'Stop\x20on\x20current\x20streak\x20',
        'wdbMaxRows',
        'slice',
        'wdbBalance',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        '</option>',
        'wdbHighLoseStreak',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'BetSide',
        '<td>',
        'low',
        'THxML',
        '112YdqOuD',
        '\x20|\x20',
        'JNThW',
        'Qiadj',
        '1|7|4|6|2|5|3|8|0',
        'jJdxN',
        'firstChild',
        'height',
        'RULmO',
        'return\x20chance',
        'dJXUO',
        'keno',
        'YUhHu',
        'removeChild',
        'text',
        'PdIGp',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'color',
        'Variables',
        'TTFKc',
        'fixed',
        'mGxIA',
        'wdbLog',
        'AWEPO',
        'adAKw',
        'getElementById',
        'sZGzC',
        'qMXdx',
        'CWpsr',
        '4|2|3|1|0',
        'UjGTE',
        'reset',
        'resetChart',
        '\x20to\x20win,\x20',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'ZPvyw',
        'TDmuB',
        'value',
        'Uazwz',
        '1895108XjEpao',
        'PcrWS',
        'eLrld',
        'resetstatsOnProfit',
        'yzFNY',
        'lua',
        'Qofnz',
        'kJVjG',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'wdbWagered',
        'KIqqR',
        'JzLdB',
        'xTrby',
        'advancedStopOnBetsCheck',
        '\x20Hits',
        'stopOnProfitCheck',
        'eupgP',
        'www.',
        '#wdbSaveScriptButton',
        'calc(100vh\x20-\x2060px)',
        'subkf',
        'setItem',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'uyZxh',
        'shSBG',
        '\x0a\x20\x20\x20\x20previousbet=',
        'Ulkcl',
        'bURfi',
        'WEgEo',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'Profit',
        'OprTQ',
        'Chance1',
        'PNQIC',
        'XOeJm',
        'then',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'wdbSpeed',
        'DWznf',
        'KzsTv',
        'closest',
        'dVuQA',
        'NknHp',
        '\x20Balls',
        'RjzqG',
        'position',
        'XiCzr',
        'dPfMA',
        'toLowerCase',
        'MnztA',
        'ILwtB',
        'UVxag',
        'wdbChart',
        'querySelector',
        'onmousedown',
        'spuLR',
        'YSzoJ',
        'zxUOr',
        'odwMu',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'advancedBetHighOnLoseCheck',
        'VQcvI',
        'rlbAC',
        'return\x20bethigh',
        'xhsgy',
        'HpjtO',
        'Target',
        'iOBNe',
        'UmtKm',
        'wdbHeader',
        'wKPsH',
        'RJmpk',
        'VMxhD',
        'DUlSJ',
        'return\x20kenoRisk',
        'chance1=',
        'advancedChanceOnLoseCheck',
        'xNSbT',
        'response',
        'HPUAI',
        'EWCjB',
        'Krega',
        'EegUe',
        'HEfFN',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        'substring',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'RNFYn',
        'containerId'
    ];
    _0x502a = function () {
        return _0xc7e14c;
    };
    return _0x502a();
}
function toggleHistory(_0x112edb) {
    const _0x42516a = _0x4f1b09, _0x576960 = {
            'Qofnz': _0x42516a(0x1ba),
            'kVWMT': 'wdbChart',
            'DyrUs': _0x42516a(0x28c),
            'QepIS': _0x42516a(0x24c),
            'iQYpG': _0x42516a(0x2af),
            'nDXyY': _0x42516a(0x39d),
            'rlbAC': _0x42516a(0x2bc),
            'exQXa': _0x42516a(0x38d),
            'KzNAj': _0x42516a(0x449)
        }, _0x49944d = document['getElementById'](_0x576960[_0x42516a(0x30c)]), _0x4de027 = document[_0x42516a(0x2f8)](_0x576960[_0x42516a(0x434)]);
    switch (_0x112edb) {
    case _0x576960[_0x42516a(0x42f)]:
        _0x49944d['style'][_0x42516a(0x469)] = _0x576960[_0x42516a(0x212)], _0x4de027['style'][_0x42516a(0x2e6)] = _0x42516a(0x39a);
        break;
    case _0x576960[_0x42516a(0x242)]:
        _0x49944d[_0x42516a(0x3ea)][_0x42516a(0x469)] = _0x576960[_0x42516a(0x240)], _0x4de027['style'][_0x42516a(0x2e6)] = _0x576960[_0x42516a(0x344)];
        break;
    case _0x576960['exQXa']:
        stopHistory = !![];
        break;
    case _0x576960['KzNAj']:
        stopHistory = ![];
        break;
    case _0x42516a(0x3a6):
        _0x49944d[_0x42516a(0x3f3)] = '';
        break;
    }
}
function toggleLog(_0x50f98f) {
    const _0x4057b2 = _0x4f1b09, _0x92a590 = {
            'XpYUM': _0x4057b2(0x38d),
            'dTYEb': 'start',
            'FJZNC': 'clear',
            'GgQwX': _0x4057b2(0x2f5)
        };
    switch (_0x50f98f) {
    case _0x92a590[_0x4057b2(0x1a7)]:
        stopLog = !![];
        break;
    case _0x92a590[_0x4057b2(0x3b1)]:
        stopLog = ![];
        break;
    case _0x92a590[_0x4057b2(0x44f)]:
        document['getElementById'](_0x92a590['GgQwX'])['innerHTML'] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x791029 = _0x4f1b09, _0x3725c3 = {
            'wKPsH': function (_0xf353ac, _0x5d15e0) {
                return _0xf353ac(_0x5d15e0);
            },
            'awOlg': _0x791029(0x403),
            'UCZZn': _0x791029(0x1a3),
            'zziEf': _0x791029(0x2bd),
            'UVxag': _0x791029(0x352),
            'dOXdl': function (_0x3a07c1, _0x56d330) {
                return _0x3a07c1(_0x56d330);
            },
            'bFVMW': _0x791029(0x25d),
            'USwbL': 'advancedChanceOnLoseBets',
            'EQTGr': _0x791029(0x27e),
            'RFRPJ': _0x791029(0x446),
            'DcBiM': function (_0x388a00, _0x388674) {
                return _0x388a00(_0x388674);
            },
            'RNBzz': 'advancedMultiOnWinBets',
            'Vovbn': _0x791029(0x40a),
            'yfhpE': 'advancedMultiOnLose',
            'zoAnp': function (_0x4463b2, _0x5fd4cb) {
                return _0x4463b2(_0x5fd4cb);
            },
            'PdIGp': _0x791029(0x436),
            'jzKMa': _0x791029(0x42d),
            'WsyEQ': _0x791029(0x3c5),
            'GVKaz': function (_0x200435, _0x2363b0) {
                return _0x200435 === _0x2363b0;
            },
            'CGewL': _0x791029(0x1ff),
            'cQDOa': 'advancedBetHighOnProfit',
            'ILwtB': function (_0x3c0919, _0x358a1c) {
                return _0x3c0919 >= _0x358a1c;
            },
            'oSEar': _0x791029(0x309),
            'Wafrf': function (_0x389649) {
                return _0x389649();
            },
            'xWqRk': _0x791029(0x2c1),
            'UhGeT': function (_0x442b33, _0x3705c4) {
                return _0x442b33(_0x3705c4);
            },
            'ekXaa': _0x791029(0x45a),
            'rBsre': function (_0x481c6f) {
                return _0x481c6f();
            },
            'WEgEo': function (_0x463082, _0x1f25b6) {
                return _0x463082 + _0x1f25b6;
            },
            'BAbkW': 'advancedStopAfterStreakCheck',
            'fgibW': 'advancedStopAfterStreak',
            'uTwFe': function (_0x4d47fc, _0x25dccd) {
                return _0x4d47fc > _0x25dccd;
            },
            'MnztA': function (_0x23a8d6, _0x182da9) {
                return _0x23a8d6 + _0x182da9;
            },
            'eTlor': _0x791029(0x2d3),
            'yMIkC': function (_0x421e61, _0x4e0851) {
                return _0x421e61 <= _0x4e0851;
            },
            'IpZQP': _0x791029(0x313),
            'jynVN': function (_0x453c48, _0x875a20) {
                return _0x453c48(_0x875a20);
            },
            'TPMaJ': 'advancedStopOnBets',
            'rOeaB': function (_0x3d56c4, _0x30e77b) {
                return _0x3d56c4(_0x30e77b);
            },
            'XOeJm': function (_0x330cbd, _0x5e6f4a) {
                return _0x330cbd + _0x5e6f4a;
            },
            'yoQSM': _0x791029(0x3f2),
            'InqVI': _0x791029(0x2b3),
            'UAWiq': _0x791029(0x27d),
            'WyFyf': _0x791029(0x2a0),
            'QmnZH': _0x791029(0x1cd),
            'VCzcI': 'advancedStopOnLose',
            'Ulkcl': function (_0x484281, _0x18ede9) {
                return _0x484281 >= _0x18ede9;
            },
            'lLokg': function (_0x4985ce) {
                return _0x4985ce();
            },
            'uLFNM': function (_0x29a9f2, _0x19b6d4) {
                return _0x29a9f2 + _0x19b6d4;
            },
            'PlMCB': _0x791029(0x384),
            'aCvYA': _0x791029(0x315),
            'mgvKG': function (_0x15bcc2, _0x2b08f9) {
                return _0x15bcc2(_0x2b08f9);
            },
            'PcrWS': _0x791029(0x261),
            'UCgfS': function (_0x198af7, _0xc2bdaf) {
                return _0x198af7 >= _0xc2bdaf;
            },
            'zPJVk': function (_0x417d55, _0x56c828) {
                return _0x417d55(_0x56c828);
            },
            'iEWzv': _0x791029(0x3b0),
            'nMvrM': 'stopOnBalanceCheck',
            'AOCCX': _0x791029(0x46c),
            'WDlvo': function (_0xc06f8f) {
                return _0xc06f8f();
            },
            'aROLs': function (_0x1663cf, _0x39263c) {
                return _0x1663cf + _0x39263c;
            },
            'PvBXi': _0x791029(0x387),
            'nRduD': 'advancedBetHighOnWinCheck',
            'CApwm': 'advancedBetHighOnWin',
            'uobyY': function (_0x23d43b, _0x1aaf78) {
                return _0x23d43b % _0x1aaf78;
            },
            'IZRuW': function (_0xb75adb, _0x56ad00) {
                return _0xb75adb % _0x56ad00;
            },
            'xPAvX': _0x791029(0x342),
            'pCtFW': function (_0x4c43f1, _0x187d42) {
                return _0x4c43f1 === _0x187d42;
            },
            'SafHp': function (_0x17694a, _0x3c0df7) {
                return _0x17694a === _0x3c0df7;
            },
            'sMzRB': function (_0x1623fb, _0x8a5148) {
                return _0x1623fb * _0x8a5148;
            }
        };
    chance = _0x3725c3['wKPsH'](Number, document[_0x791029(0x2f8)](_0x3725c3['awOlg'])[_0x791029(0x304)]);
    const _0x12be6a = document['getElementById'](_0x3725c3[_0x791029(0x46d)])['checked'], _0x5138fc = _0x12be6a ? _0x3725c3[_0x791029(0x34c)](Number, document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x3fc)])[_0x791029(0x304)]) : chance, _0x483099 = Number(document[_0x791029(0x2f8)](_0x791029(0x293))[_0x791029(0x304)]), _0x830e55 = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x339)])[_0x791029(0x23f)], _0x5711f8 = _0x830e55 ? _0x3725c3[_0x791029(0x27a)](Number, document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x224)])[_0x791029(0x304)]) : chance, _0x15ea5d = Number(document[_0x791029(0x2f8)](_0x3725c3['USwbL'])[_0x791029(0x304)]), _0x5dcf80 = document[_0x791029(0x2f8)](_0x3725c3['EQTGr'])[_0x791029(0x23f)], _0x2ed093 = _0x5dcf80 ? _0x3725c3[_0x791029(0x27a)](Number, document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x24b)])[_0x791029(0x304)]) : 0x1, _0x5a4644 = _0x3725c3[_0x791029(0x1b3)](Number, document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x415)])[_0x791029(0x304)]), _0x10cc7a = document[_0x791029(0x2f8)](_0x3725c3['Vovbn'])[_0x791029(0x23f)], _0x56e5de = _0x10cc7a ? Number(document['getElementById'](_0x3725c3[_0x791029(0x478)])['value']) : 0x1, _0x1a7402 = _0x3725c3[_0x791029(0x290)](Number, document['getElementById'](_0x3725c3[_0x791029(0x2ee)])[_0x791029(0x304)]), _0x2187f8 = document['getElementById'](_0x3725c3[_0x791029(0x1ca)])[_0x791029(0x23f)];
    if (_0x2187f8) {
        const _0x410c8c = Number(document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x41c)])[_0x791029(0x304)]);
        if (_0x3725c3[_0x791029(0x2ca)](bets % _0x410c8c, 0x0))
            bethigh = !bethigh;
    }
    const _0x434b75 = document['getElementById'](_0x3725c3['CGewL'])['checked'];
    if (_0x434b75) {
        const _0x310ceb = Number(document['getElementById'](_0x3725c3['cQDOa'])['value']);
        if (_0x3725c3[_0x791029(0x338)](profit, _0x310ceb))
            bethigh = !bethigh;
    }
    const _0x33eb77 = document[_0x791029(0x2f8)](_0x791029(0x1e5))[_0x791029(0x23f)];
    if (_0x33eb77) {
        const _0x232330 = Number(document['getElementById'](_0x3725c3[_0x791029(0x439)])[_0x791029(0x304)]);
        if (profit >= _0x232330)
            _0x3725c3['Wafrf'](resetstats);
    }
    const _0x47fe8f = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x46a)])['checked'];
    if (_0x47fe8f) {
        const _0x575fd5 = _0x3725c3[_0x791029(0x3c1)](Number, document[_0x791029(0x2f8)](_0x3725c3['ekXaa'])['value']);
        if (_0x3725c3[_0x791029(0x2ca)](lastBet['result'], _0x575fd5))
            _0x3725c3[_0x791029(0x3e1)](stop), log(_0x3725c3[_0x791029(0x322)]('Stop\x20on\x20roll\x20number\x20', _0x575fd5));
    }
    const _0x2b96c4 = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x459)])['checked'];
    if (_0x2b96c4) {
        const _0x36dd47 = Number(document[_0x791029(0x2f8)](_0x3725c3['fgibW'])[_0x791029(0x304)]);
        if (_0x3725c3[_0x791029(0x215)](_0x36dd47, 0x0)) {
            if (_0x3725c3[_0x791029(0x338)](currentstreak, _0x36dd47))
                stop(), log(_0x3725c3['MnztA'](_0x3725c3[_0x791029(0x2ce)], _0x36dd47));
        } else {
            if (_0x3725c3[_0x791029(0x23a)](currentstreak, _0x36dd47))
                stop(), _0x3725c3[_0x791029(0x27a)](log, _0x3725c3[_0x791029(0x337)](_0x3725c3[_0x791029(0x2ce)], _0x36dd47));
        }
    }
    const _0x5695a5 = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x37f)])[_0x791029(0x23f)];
    if (_0x5695a5) {
        const _0x3131f9 = _0x3725c3[_0x791029(0x36d)](Number, document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x404)])[_0x791029(0x304)]);
        if (_0x3725c3[_0x791029(0x338)](bets, _0x3131f9))
            _0x3725c3['rBsre'](stop), _0x3725c3[_0x791029(0x450)](log, _0x3725c3[_0x791029(0x328)](_0x3725c3['XOeJm'](_0x3725c3[_0x791029(0x258)], _0x3131f9), _0x3725c3[_0x791029(0x2c9)]));
    }
    const _0xc8c6d6 = document[_0x791029(0x2f8)](_0x3725c3['UAWiq'])[_0x791029(0x23f)];
    if (_0xc8c6d6) {
        const _0x193e38 = _0x3725c3[_0x791029(0x34c)](Number, document['getElementById'](_0x3725c3[_0x791029(0x3ce)])[_0x791029(0x304)]);
        if (winstreak >= _0x193e38)
            _0x3725c3[_0x791029(0x3e1)](stop), log(_0x3725c3['XOeJm'](_0x3725c3[_0x791029(0x258)], _0x193e38) + _0x3725c3['QmnZH']);
    }
    const _0x2b0241 = document[_0x791029(0x2f8)](_0x791029(0x438))['checked'];
    if (_0x2b0241) {
        const _0x198647 = Number(document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x36b)])[_0x791029(0x304)]);
        if (_0x3725c3[_0x791029(0x320)](losestreak, _0x198647))
            _0x3725c3[_0x791029(0x45c)](stop), _0x3725c3['DcBiM'](log, _0x3725c3['uLFNM'](_0x3725c3[_0x791029(0x258)], _0x198647) + _0x3725c3['PlMCB']);
    }
    const _0x24b10e = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x21b)])['checked'];
    if (_0x24b10e) {
        const _0x3e517e = _0x3725c3[_0x791029(0x47a)](Number, document['getElementById'](_0x3725c3[_0x791029(0x307)])[_0x791029(0x304)]);
        if (_0x3725c3[_0x791029(0x27c)](profit, _0x3e517e))
            _0x3725c3[_0x791029(0x45c)](stop), _0x3725c3[_0x791029(0x3dc)](log, _0x3725c3['XOeJm'](_0x3725c3['iEWzv'], _0x3e517e));
    }
    const _0x541359 = document[_0x791029(0x2f8)](_0x3725c3[_0x791029(0x2b5)])[_0x791029(0x23f)];
    if (_0x541359) {
        const _0x1b7f17 = Number(document[_0x791029(0x2f8)](_0x3725c3['AOCCX'])[_0x791029(0x304)]);
        if (balance >= _0x1b7f17)
            _0x3725c3[_0x791029(0x23e)](stop), _0x3725c3[_0x791029(0x1b3)](log, _0x3725c3['aROLs'](_0x3725c3['PvBXi'], _0x1b7f17));
    }
    if (win) {
        const _0x4de731 = document['getElementById'](_0x3725c3[_0x791029(0x3ec)])[_0x791029(0x23f)];
        if (_0x4de731) {
            const _0x20c382 = Number(document['getElementById'](_0x3725c3[_0x791029(0x247)])['value']);
            if (_0x3725c3[_0x791029(0x2ca)](_0x3725c3[_0x791029(0x230)](winstreak, _0x20c382), 0x0))
                bethigh = !bethigh;
        }
        if (_0x3725c3['IZRuW'](winstreak, _0x483099) === 0x0)
            chance = _0x5138fc;
        if (_0x5dcf80) {
            if (_0x3725c3[_0x791029(0x2ca)](_0x3725c3['IZRuW'](winstreak, _0x5a4644), 0x0))
                nextbet = previousbet * _0x2ed093;
        } else
            nextbet = basebet;
    } else {
        const _0x5a0f5c = document[_0x791029(0x2f8)](_0x3725c3['xPAvX'])[_0x791029(0x23f)];
        if (_0x5a0f5c) {
            const _0x4279b6 = _0x3725c3[_0x791029(0x27a)](Number, document['getElementById'](_0x791029(0x3d6))['value']);
            if (_0x3725c3['GVKaz'](_0x3725c3[_0x791029(0x230)](losestreak, _0x4279b6), 0x0))
                bethigh = !bethigh;
        }
        if (_0x3725c3['pCtFW'](_0x3725c3[_0x791029(0x1ac)](losestreak, _0x15ea5d), 0x0))
            chance = _0x5711f8;
        if (_0x10cc7a) {
            if (_0x3725c3[_0x791029(0x19d)](_0x3725c3[_0x791029(0x230)](losestreak, _0x1a7402), 0x0))
                nextbet = _0x3725c3[_0x791029(0x1d8)](previousbet, _0x56e5de);
        } else
            nextbet = basebet;
    }
    return _0x791029(0x363);
}
function changeCoin() {
    const _0x3f43db = _0x4f1b09, _0x5e3f70 = {
            'tfLcj': _0x3f43db(0x1b2),
            'RyVSW': function (_0x42e56e) {
                return _0x42e56e();
            }
        };
    coin = document[_0x3f43db(0x2f8)](_0x5e3f70[_0x3f43db(0x23c)])[_0x3f43db(0x304)], currency = coin['toLowerCase'](), fengari[_0x3f43db(0x455)]('currency=\x22' + currency + '\x22')(), _0x5e3f70['RyVSW'](checkbalance);
}
async function handleStats() {
    const _0x13ca28 = _0x4f1b09, _0x364854 = {
            'spuLR': function (_0x506bb7, _0xdce676) {
                return _0x506bb7 === _0xdce676;
            },
            'nFrzW': _0x13ca28(0x30b),
            'cEyii': function (_0x179587) {
                return _0x179587();
            },
            'FXYcy': function (_0x4bcc6c, _0x4470fe) {
                return _0x4bcc6c === _0x4470fe;
            },
            'OkJdr': function (_0x2aca21) {
                return _0x2aca21();
            },
            'eupgP': 'advanced',
            'EOfAg': function (_0xeddf0c, _0x2856b4) {
                return _0xeddf0c(_0x2856b4);
            },
            'UvHkZ': _0x13ca28(0x461),
            'kWwAl': function (_0x386bf3, _0x304a8a) {
                return _0x386bf3 === _0x304a8a;
            },
            'azUQn': _0x13ca28(0x3ab),
            'TxJvo': function (_0x24822d, _0x33a2f1) {
                return _0x24822d > _0x33a2f1;
            },
            'xNSbT': function (_0x3b00fa, _0x55f4f9) {
                return _0x3b00fa < _0x55f4f9;
            },
            'oNKOS': _0x13ca28(0x1d5),
            'SxFYg': _0x13ca28(0x2ea),
            'uyZxh': _0x13ca28(0x3af),
            'SSMHB': _0x13ca28(0x435),
            'Jhtya': function (_0x258384, _0x1ed292) {
                return _0x258384 < _0x1ed292;
            },
            'NdppN': function (_0x2487bf, _0x1da6af) {
                return _0x2487bf > _0x1da6af;
            },
            'YPyWn': 'between2',
            'NmfuP': function (_0x44d4e6, _0x53a620) {
                return _0x44d4e6 > _0x53a620;
            },
            'gTuVH': function (_0x33d208, _0x25fbf6) {
                return _0x33d208 < _0x25fbf6;
            },
            'TSCkt': function (_0x18ef48, _0x1fa608) {
                return _0x18ef48 < _0x1fa608;
            },
            'XQrMi': function (_0x378dfe, _0x22ccaa) {
                return _0x378dfe || _0x22ccaa;
            },
            'dPlcj': 'green',
            'FSzyG': _0x13ca28(0x217),
            'HEfFN': function (_0x48e307, _0x441709) {
                return _0x48e307 > _0x441709;
            },
            'KyEgG': function (_0x5a9bfa, _0x1a92fd) {
                return _0x5a9bfa < _0x1a92fd;
            },
            'DEqfV': function (_0x5e7aed, _0x3e7974) {
                return _0x5e7aed > _0x3e7974;
            },
            'SRaOo': function (_0x2c05e6) {
                return _0x2c05e6();
            }
        }, _0x368846 = Date['now']();
    speedHistory[_0x13ca28(0x1c3)](_0x368846);
    const _0x4749f8 = 0x2710;
    speedHistory = speedHistory['filter'](_0x238e00 => _0x368846 - _0x238e00 <= _0x4749f8), bets++, lastBet[_0x13ca28(0x419)] = lastBet[_0x13ca28(0x19e)], lastBet['target'] = target, lastBet[_0x13ca28(0x348)] = target;
    _0x364854[_0x13ca28(0x33d)](game, _0x364854['UvHkZ']) && (lastBet['chance1'] = chance1, lastBet[_0x13ca28(0x326)] = chance1, lastBet[_0x13ca28(0x26c)] = chance2, lastBet[_0x13ca28(0x192)] = chance2, lastBet[_0x13ca28(0x416)] = chance3, lastBet[_0x13ca28(0x2c5)] = chance3, lastBet[_0x13ca28(0x253)] = chance4, lastBet[_0x13ca28(0x27b)] = chance4, lastBet[_0x13ca28(0x28d)] = betSide, lastBet[_0x13ca28(0x2db)] = betSide);
    lastBet[_0x13ca28(0x3d4)] = result, lastBet[_0x13ca28(0x277)] = result, lastBet[_0x13ca28(0x259)] = currentprofit, lastBet[_0x13ca28(0x324)] = currentprofit, lastBet[_0x13ca28(0x269)] = lastBet[_0x13ca28(0x3f8)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x364854[_0x13ca28(0x21d)](game, _0x364854['azUQn']))
        win = lastBet['bethigh'] ? _0x364854[_0x13ca28(0x41d)](lastBet[_0x13ca28(0x3d4)], lastBet[_0x13ca28(0x44c)]) : _0x364854[_0x13ca28(0x353)](lastBet[_0x13ca28(0x3d4)], lastBet[_0x13ca28(0x44c)]);
    else {
        if (game === _0x364854[_0x13ca28(0x298)] || _0x364854['FXYcy'](game, _0x364854['SxFYg']))
            win = lastBet[_0x13ca28(0x259)] > 0x0;
        else {
            if (game === _0x364854[_0x13ca28(0x194)]) {
                if (_0x364854['spuLR'](lastBet[_0x13ca28(0x28d)], _0x364854[_0x13ca28(0x31d)]))
                    win = lastBet[_0x13ca28(0x19e)] > lastBet[_0x13ca28(0x457)] && _0x364854['xNSbT'](lastBet[_0x13ca28(0x19e)], lastBet[_0x13ca28(0x26c)]);
                else {
                    if (lastBet[_0x13ca28(0x28d)] === _0x364854[_0x13ca28(0x399)])
                        win = _0x364854['Jhtya'](lastBet[_0x13ca28(0x19e)], lastBet[_0x13ca28(0x457)]) || _0x364854[_0x13ca28(0x292)](lastBet['roll'], lastBet['chance2']);
                    else {
                        if (_0x364854[_0x13ca28(0x21d)](lastBet[_0x13ca28(0x28d)], _0x364854[_0x13ca28(0x2a9)])) {
                            const _0x4e282e = _0x364854[_0x13ca28(0x39b)](lastBet['roll'], lastBet[_0x13ca28(0x457)]) && _0x364854[_0x13ca28(0x407)](lastBet[_0x13ca28(0x19e)], lastBet[_0x13ca28(0x26c)]), _0x534c13 = lastBet['roll'] > lastBet[_0x13ca28(0x416)] && _0x364854[_0x13ca28(0x1c8)](lastBet[_0x13ca28(0x19e)], lastBet[_0x13ca28(0x253)]);
                            win = _0x364854['XQrMi'](_0x4e282e, _0x534c13);
                        }
                    }
                }
            } else
                win = lastBet['result'] >= lastBet[_0x13ca28(0x44c)];
        }
    }
    if (win)
        color = _0x364854[_0x13ca28(0x3d9)], wins++, winstreak++, losestreak = 0x0, currentstreak = winstreak;
    else {
        color = _0x364854[_0x13ca28(0x2b9)], losses++, losestreak++, winstreak = 0x0, currentstreak = -losestreak;
        if (_0x364854[_0x13ca28(0x41d)](previousbet, maxLosseAmount))
            maxLosseAmount = previousbet;
    }
    if (_0x364854[_0x13ca28(0x359)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x364854[_0x13ca28(0x39b)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x364854[_0x13ca28(0x39b)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x364854[_0x13ca28(0x2a3)](balance, minbalance))
        minbalance = balance;
    if (balance > maxbalance)
        maxbalance = balance;
    if (profit < minprofit)
        minprofit = profit;
    if (_0x364854['DEqfV'](profit, maxprofit))
        maxprofit = profit;
    _0x364854['SRaOo'](showInfo)[_0x13ca28(0x329)](async () => {
        const _0x3e910c = _0x13ca28;
        try {
            if (_0x364854[_0x3e910c(0x33d)](mode, _0x364854[_0x3e910c(0x3ed)]))
                await _0x364854['cEyii'](updateLua);
            else {
                if (_0x364854[_0x3e910c(0x1de)](mode, 'js'))
                    await _0x364854[_0x3e910c(0x1d1)](dobet);
                else
                    mode === _0x364854[_0x3e910c(0x316)] && await handleAdvanced();
            }
            if (win && sOW)
                _0x364854['cEyii'](stop);
            if (run)
                _0x364854[_0x3e910c(0x1d1)](playBet);
        } catch (_0xba4c5e) {
            stop(), _0x364854[_0x3e910c(0x1c7)](log, _0xba4c5e);
        }
    });
}
async function showInfo() {
    const _0x63baa8 = _0x4f1b09, _0x59543b = {
            'bCgIu': function (_0x2b9e69, _0x19d1e0) {
                return _0x2b9e69 === _0x19d1e0;
            },
            'IhyvX': _0x63baa8(0x39f),
            'HboKU': 'black',
            'hylgG': function (_0x3a983f, _0x356289) {
                return _0x3a983f < _0x356289;
            },
            'uZAJg': _0x63baa8(0x3df),
            'GAzzE': function (_0x37bcb5, _0x54520d) {
                return _0x37bcb5 < _0x54520d;
            },
            'heQnU': _0x63baa8(0x217),
            'ndpRR': function (_0x24d167, _0x5efd5e) {
                return _0x24d167 > _0x5efd5e;
            },
            'RwRNj': 'wdbHighWinStreak',
            'uaWUz': _0x63baa8(0x2d9),
            'BejBY': _0x63baa8(0x2d6),
            'nuPED': _0x63baa8(0x1a8),
            'cpaui': 'wdbHighLose',
            'FhhnC': _0x63baa8(0x3c9),
            'eRhsB': _0x63baa8(0x46e),
            'dVblz': _0x63baa8(0x470),
            'tvQgi': _0x63baa8(0x3ae),
            'HrVMN': _0x63baa8(0x1cc),
            'RMqHp': 'wdbMaxProfit',
            'OlnJD': function (_0x575cb5, _0x1c0d1e) {
                return _0x575cb5 / _0x1c0d1e;
            },
            'TDmuB': function (_0x3c7309, _0x2c4f3f) {
                return _0x3c7309 + _0x2c4f3f;
            },
            'EBjtw': function (_0x1c073b, _0x26f0f2) {
                return _0x1c073b(_0x26f0f2);
            },
            'fiusQ': _0x63baa8(0x2b6),
            'rzUwC': function (_0x25cf09, _0x275ab2) {
                return _0x25cf09 * _0x275ab2;
            },
            'WDeYn': function (_0x2c3b50, _0x31bacb) {
                return _0x2c3b50 * _0x31bacb;
            },
            'URIpU': function (_0x5b559e, _0x5e3aca) {
                return _0x5b559e + _0x5e3aca;
            },
            'UTDAg': 'wdbWrapPercentProfit',
            'mxlOC': _0x63baa8(0x465),
            'NUhMs': function (_0x3a04da, _0x34ad41) {
                return _0x3a04da === _0x34ad41;
            },
            'SPALF': _0x63baa8(0x2e0),
            'PawJu': function (_0x599886, _0x1502cc) {
                return _0x599886(_0x1502cc);
            },
            'vmjIA': function (_0x28f35f, _0x41ef73) {
                return _0x28f35f !== _0x41ef73;
            },
            'zkwxb': _0x63baa8(0x1d5),
            'aJAmX': function (_0x28bcbb, _0x5b8adc) {
                return _0x28bcbb(_0x5b8adc);
            },
            'fDoxH': function (_0x2e95ae, _0x2c1aed) {
                return _0x2e95ae(_0x2c1aed);
            },
            'CJmhY': _0x63baa8(0x461),
            'ETDAH': function (_0x321a5b, _0x33953f) {
                return _0x321a5b === _0x33953f;
            },
            'ocfqb': function (_0x1c6a50, _0x36246b) {
                return _0x1c6a50 + _0x36246b;
            },
            'TtUGq': _0x63baa8(0x2ea),
            'mceWR': function (_0x56988a, _0xba3492) {
                return _0x56988a(_0xba3492);
            },
            'IIXto': _0x63baa8(0x314),
            'SNpne': '#91f190',
            'vkSkK': _0x63baa8(0x367),
            'pmFQE': _0x63baa8(0x1ba),
            'mBZrE': _0x63baa8(0x421),
            'aZvBC': function (_0x2b3122, _0x2bef86) {
                return _0x2b3122 !== _0x2bef86;
            },
            'yFoYS': function (_0x3aa299, _0x380dbe) {
                return _0x3aa299(_0x380dbe);
            },
            'xYfHl': function (_0x38fafb, _0x302e5f) {
                return _0x38fafb === _0x302e5f;
            },
            'jRDGj': function (_0x323bba, _0x5c4bfd) {
                return _0x323bba > _0x5c4bfd;
            },
            'QVAbG': _0x63baa8(0x285)
        }, _0x48f11b = _0x59543b[_0x63baa8(0x19f)](profit, 0x0) ? darkMode ? _0x59543b[_0x63baa8(0x296)] : _0x59543b[_0x63baa8(0x3d7)] : _0x59543b[_0x63baa8(0x19c)](profit, 0x0) ? 'red' : _0x59543b[_0x63baa8(0x2b7)], _0x276749 = _0x59543b[_0x63baa8(0x19f)](currentstreak, 0x0) ? darkMode ? _0x63baa8(0x39f) : _0x59543b['HboKU'] : _0x59543b[_0x63baa8(0x45f)](currentstreak, 0x0) ? _0x59543b['heQnU'] : _0x59543b['uZAJg'], _0x4fa988 = _0x59543b[_0x63baa8(0x213)](maxwinstreak, 0x0) ? _0x59543b[_0x63baa8(0x2b7)] : _0x59543b['HboKU'], _0x2fed2f = maxlosestreak > 0x0 ? _0x59543b[_0x63baa8(0x1c9)] : _0x59543b['HboKU'];
    document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x36c)])[_0x63baa8(0x3ea)][_0x63baa8(0x2f0)] = _0x4fa988, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x425)])[_0x63baa8(0x3ea)]['color'] = _0x2fed2f, document[_0x63baa8(0x2f8)](_0x63baa8(0x30f))[_0x63baa8(0x2a4)] = wagered[_0x63baa8(0x417)](decimalAmountView), document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x375)])[_0x63baa8(0x2a4)] = balance[_0x63baa8(0x417)](decimalAmountView), document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x1db)])[_0x63baa8(0x3ea)][_0x63baa8(0x2f0)] = _0x48f11b, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x1db)])['innerText'] = profit[_0x63baa8(0x417)](decimalAmountView), document[_0x63baa8(0x2f8)](_0x63baa8(0x431))['innerText'] = maxBetAmount['toFixed'](decimalAmountView), document['getElementById'](_0x59543b[_0x63baa8(0x451)])[_0x63baa8(0x2a4)] = maxLosseAmount[_0x63baa8(0x417)](decimalAmountView), document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x1dc)])[_0x63baa8(0x2a4)] = bets, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x22b)])[_0x63baa8(0x2a4)] = wins, document['getElementById'](_0x59543b[_0x63baa8(0x25e)])[_0x63baa8(0x2a4)] = losses, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x294)])[_0x63baa8(0x3ea)][_0x63baa8(0x2f0)] = _0x276749, document[_0x63baa8(0x2f8)](_0x59543b['tvQgi'])[_0x63baa8(0x2a4)] = currentstreak, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x36c)])[_0x63baa8(0x2a4)] = maxwinstreak, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x425)])[_0x63baa8(0x2a4)] = maxlosestreak, document[_0x63baa8(0x2f8)]('wdbMinBalance')[_0x63baa8(0x2a4)] = minbalance[_0x63baa8(0x417)](decimalAmountView), document[_0x63baa8(0x2f8)](_0x63baa8(0x1a4))[_0x63baa8(0x2a4)] = maxbalance[_0x63baa8(0x417)](decimalAmountView), document['getElementById'](_0x59543b[_0x63baa8(0x3b2)])[_0x63baa8(0x2a4)] = minprofit['toFixed'](decimalAmountView), document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x21a)])[_0x63baa8(0x2a4)] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x59543b[_0x63baa8(0x2cc)](wagered, startBalance), percentWagered = _0x59543b['OlnJD'](Math[_0x63baa8(0x257)](_0x59543b[_0x63baa8(0x303)](percentWagered, Number[_0x63baa8(0x3a4)]) * 0x2710), 0x2710), percentWagered = _0x59543b[_0x63baa8(0x288)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x63baa8(0x2f8)](_0x59543b['fiusQ'])[_0x63baa8(0x2a4)] = percentWagered, percentProfit = _0x59543b['rzUwC'](_0x59543b[_0x63baa8(0x2cc)](profit, startBalance), 0x64), percentProfit = Math[_0x63baa8(0x257)](_0x59543b[_0x63baa8(0x1f7)](_0x59543b[_0x63baa8(0x3fe)](percentProfit, Number[_0x63baa8(0x3a4)]), 0x2710)) / 0x2710, percentProfit = _0x59543b[_0x63baa8(0x288)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x1ea)])['style'][_0x63baa8(0x2f0)] = _0x48f11b, document['getElementById'](_0x59543b[_0x63baa8(0x380)])[_0x63baa8(0x2a4)] = percentProfit;
    if (!stopHistory) {
        const _0x478d0e = _0x59543b['NUhMs'](game, _0x63baa8(0x3ab)) ? lastBet[_0x63baa8(0x284)] ? '>' : '<' : '>', _0x41bc4b = lastBet[_0x63baa8(0x284)] ? _0x63baa8(0x21c) + bets + _0x63baa8(0x1f0) : _0x63baa8(0x21c) + bets + _0x63baa8(0x323), _0x530232 = '' + (havePlinkoRows ? _0x59543b[_0x63baa8(0x3fe)](plinkoRow, _0x59543b[_0x63baa8(0x2c7)]) : '') + plinkoRisk, _0x2318ed = _0x63baa8(0x2dc) + bets + _0x63baa8(0x453) + _0x59543b[_0x63baa8(0x385)](Number, lastBet['amount'])[_0x63baa8(0x417)](decimalAmountView) + _0x63baa8(0x453) + (_0x59543b[_0x63baa8(0x43a)](game, 'rangedice') ? _0x41bc4b : betSide) + _0x63baa8(0x453) + (_0x59543b['NUhMs'](game, _0x59543b[_0x63baa8(0x2d1)]) ? _0x530232 : Number(lastBet[_0x63baa8(0x1da)])[_0x63baa8(0x417)](decimalChanceView) + '%') + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x59543b[_0x63baa8(0x1af)](Number, lastBet[_0x63baa8(0x19e)])['toFixed'](decimalChanceView) + _0x63baa8(0x3a9) + _0x59543b[_0x63baa8(0x1f2)](Number, lastBet[_0x63baa8(0x259)])[_0x63baa8(0x417)](decimalAmountView) + _0x63baa8(0x453) + (game !== _0x59543b['CJmhY'] ? _0x59543b[_0x63baa8(0x19f)](game, _0x59543b[_0x63baa8(0x2d1)]) ? _0x530232 : _0x59543b['ETDAH'](game, _0x63baa8(0x2ea)) ? _0x59543b['aJAmX'](Number, lastBet[_0x63baa8(0x44c)])[_0x63baa8(0x417)](0x0) + _0x63baa8(0x331) : _0x59543b['ocfqb'](_0x478d0e, _0x59543b[_0x63baa8(0x1f2)](Number, lastBet[_0x63baa8(0x44c)])['toFixed'](decimalTargetResult)) : _0x59543b[_0x63baa8(0x303)](_0x59543b[_0x63baa8(0x3b3)](_0x59543b[_0x63baa8(0x303)](target1 + '|', target2), target3 ? _0x59543b[_0x63baa8(0x3fe)]('|', target3) : ''), target4 ? _0x59543b[_0x63baa8(0x3b3)]('|', target4) : '')) + _0x63baa8(0x453) + (game === _0x59543b[_0x63baa8(0x370)] ? _0x59543b[_0x63baa8(0x1f5)](Number, result)['toFixed'](0x0) + _0x59543b[_0x63baa8(0x236)] : _0x59543b[_0x63baa8(0x288)](Number, result)[_0x63baa8(0x417)](decimalTargetResult)) + _0x63baa8(0x453) + lastBet[_0x63baa8(0x3f8)] + _0x63baa8(0x453) + lastBet['id'] + _0x63baa8(0x46b), _0x5aaa79 = document[_0x63baa8(0x190)]('tr');
        _0x5aaa79['style'][_0x63baa8(0x226)] = win ? _0x59543b[_0x63baa8(0x21e)] : _0x59543b['vkSkK'], _0x5aaa79[_0x63baa8(0x3f3)] = _0x2318ed, document[_0x63baa8(0x2f8)](_0x59543b[_0x63baa8(0x1d3)])['insertBefore'](_0x5aaa79, document[_0x63baa8(0x2f8)]('wdbHistory')[_0x63baa8(0x1d6)][0x0]);
        const _0x3497ad = document[_0x63baa8(0x33b)](_0x59543b[_0x63baa8(0x474)])['rows'];
        if (_0x3497ad[_0x63baa8(0x464)] > maxRows)
            document[_0x63baa8(0x33b)](_0x59543b[_0x63baa8(0x474)])[_0x63baa8(0x411)][_0x63baa8(0x3eb)]();
    }
    const _0x4282c4 = '' + (havePlinkoRows ? plinkoRow + _0x63baa8(0x2e0) : '') + plinkoRisk;
    return fullLogs[_0x63baa8(0x1c3)]({
        'game': game,
        'bets': bets,
        'amount': _0x59543b[_0x63baa8(0x1f2)](Number, lastBet[_0x63baa8(0x1c4)])['toFixed'](decimalAmountView),
        'bethigh': _0x59543b['aZvBC'](game, _0x59543b[_0x63baa8(0x297)]) ? lastBet[_0x63baa8(0x284)] : null,
        'chance': game !== _0x59543b['CJmhY'] ? Number(lastBet[_0x63baa8(0x1da)])[_0x63baa8(0x417)](decimalChanceView) : lastBet[_0x63baa8(0x1da)],
        'target': _0x59543b['vmjIA'](game, _0x63baa8(0x461)) ? game === _0x59543b[_0x63baa8(0x2d1)] ? _0x4282c4 : lastBet['target'] : null,
        'roll': Number(lastBet[_0x63baa8(0x19e)])['toFixed'](decimalChanceView),
        'result': _0x59543b[_0x63baa8(0x2c6)](Number, result)['toFixed'](decimalTargetResult),
        'profit': _0x59543b[_0x63baa8(0x288)](Number, lastBet[_0x63baa8(0x259)])[_0x63baa8(0x417)](decimalAmountView),
        'nonce': lastBet[_0x63baa8(0x3f8)],
        'id': lastBet['id'],
        'chance1': game === _0x59543b[_0x63baa8(0x297)] ? lastBet[_0x63baa8(0x457)] : null,
        'chance2': _0x59543b[_0x63baa8(0x3f6)](game, _0x59543b[_0x63baa8(0x297)]) ? lastBet[_0x63baa8(0x26c)] : null,
        'chance3': _0x59543b[_0x63baa8(0x3ff)](game, _0x59543b[_0x63baa8(0x297)]) ? lastBet['chance3'] : null,
        'chance4': game === _0x63baa8(0x461) ? lastBet['chance4'] : null,
        'betSide': game === _0x59543b[_0x63baa8(0x297)] ? lastBet[_0x63baa8(0x28d)] : null
    }), _0x59543b['jRDGj'](fullLogs[_0x63baa8(0x464)], 0x2710) && fullLogs[_0x63baa8(0x1a6)](), !stopChart && chart[_0x63baa8(0x3dd)](betsChart, profitChart, color), _0x59543b['QVAbG'];
}
async function updateStats() {
    const _0x582f88 = _0x4f1b09, _0x599f86 = {
            'RqmGW': function (_0x16e1ef, _0x7b2967) {
                return _0x16e1ef === _0x7b2967;
            },
            'QLNtm': _0x582f88(0x39f),
            'hHvkR': 'black',
            'vXvAl': function (_0x2f8f92, _0x341c28) {
                return _0x2f8f92 < _0x341c28;
            },
            'rBozy': _0x582f88(0x217),
            'RULmO': function (_0x36ecdc, _0x3d436b) {
                return _0x36ecdc > _0x3d436b;
            },
            'LeCyd': function (_0x17844e, _0x465200) {
                return _0x17844e > _0x465200;
            },
            'rlPFl': 'wdbHighWinStreak',
            'ROips': 'wdbHighLoseStreak',
            'UjGTE': _0x582f88(0x30f),
            'dmzjq': 'wdbProfit',
            'KWIzh': _0x582f88(0x431),
            'waKKD': 'wdbBets',
            'kbhPU': _0x582f88(0x46e),
            'UmtKm': 'wdbLosses',
            'mgXqb': _0x582f88(0x3ae),
            'KzsTv': 'wdbMinBalance',
            'SJfmB': _0x582f88(0x1a4),
            'dJXUO': 'wdbMinProfit',
            'LfTZo': _0x582f88(0x267),
            'gKNHY': function (_0x202fed, _0x244f85) {
                return _0x202fed / _0x244f85;
            },
            'JzLdB': function (_0x126f84, _0x5c8ad2) {
                return _0x126f84 / _0x5c8ad2;
            },
            'fPgUH': function (_0x29e764, _0x3bd2d3) {
                return _0x29e764(_0x3bd2d3);
            },
            'BTnuD': _0x582f88(0x2b6),
            'vSYQa': function (_0x21daab, _0x3413b3) {
                return _0x21daab * _0x3413b3;
            },
            'MjVHQ': function (_0x119bc8, _0x2e2220) {
                return _0x119bc8 + _0x2e2220;
            },
            'EegUe': _0x582f88(0x465),
            'fBPIc': _0x582f88(0x3c3)
        }, _0x3fb577 = _0x599f86[_0x582f88(0x408)](profit, 0x0) ? darkMode ? _0x599f86[_0x582f88(0x1e6)] : _0x599f86[_0x582f88(0x45d)] : _0x599f86['vXvAl'](profit, 0x0) ? _0x599f86[_0x582f88(0x1e1)] : _0x582f88(0x3df), _0xc83cee = _0x599f86[_0x582f88(0x408)](currentstreak, 0x0) ? darkMode ? _0x599f86[_0x582f88(0x1e6)] : _0x599f86['hHvkR'] : currentstreak < 0x0 ? _0x599f86[_0x582f88(0x1e1)] : _0x582f88(0x3df), _0x1973f2 = _0x599f86[_0x582f88(0x2e7)](maxwinstreak, 0x0) ? _0x582f88(0x3df) : darkMode ? 'white' : _0x599f86[_0x582f88(0x45d)], _0x4b1380 = _0x599f86['LeCyd'](maxlosestreak, 0x0) ? _0x599f86[_0x582f88(0x1e1)] : darkMode ? _0x599f86[_0x582f88(0x1e6)] : _0x599f86[_0x582f88(0x45d)];
    return document[_0x582f88(0x2f8)](_0x599f86['rlPFl'])[_0x582f88(0x3ea)][_0x582f88(0x2f0)] = _0x1973f2, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x250)])['style'][_0x582f88(0x2f0)] = _0x4b1380, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x2fd)])[_0x582f88(0x2a4)] = wagered[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x582f88(0x2d6))['innerText'] = balance[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)]('wdbProfit')['style'][_0x582f88(0x2f0)] = _0x3fb577, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x401)])[_0x582f88(0x2a4)] = profit[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x220)])[_0x582f88(0x2a4)] = maxBetAmount[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x582f88(0x396))[_0x582f88(0x2a4)] = maxLosseAmount[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x219)])['innerText'] = bets, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x45e)])[_0x582f88(0x2a4)] = wins, document['getElementById'](_0x599f86[_0x582f88(0x34a)])[_0x582f88(0x2a4)] = losses, document[_0x582f88(0x2f8)](_0x582f88(0x3ae))['style'][_0x582f88(0x2f0)] = _0xc83cee, document[_0x582f88(0x2f8)](_0x599f86['mgXqb'])[_0x582f88(0x2a4)] = currentstreak, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x2d0)])['innerText'] = maxwinstreak, document['getElementById'](_0x582f88(0x2d9))[_0x582f88(0x2a4)] = maxlosestreak, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x32d)])['innerText'] = minbalance[_0x582f88(0x417)](decimalAmountView), document['getElementById'](_0x599f86['SJfmB'])[_0x582f88(0x2a4)] = maxbalance[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x2e9)])['innerText'] = minprofit[_0x582f88(0x417)](decimalAmountView), document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x20b)])[_0x582f88(0x2a4)] = maxprofit[_0x582f88(0x417)](decimalAmountView), percentWagered = _0x599f86[_0x582f88(0x406)](wagered, startBalance), percentWagered = _0x599f86[_0x582f88(0x311)](Math[_0x582f88(0x257)]((percentWagered + Number[_0x582f88(0x3a4)]) * 0x64), 0x64), percentWagered = _0x599f86['fPgUH'](isNaN, percentWagered) || !_0x599f86['fPgUH'](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x582f88(0x2f8)](_0x599f86['BTnuD'])[_0x582f88(0x2a4)] = percentWagered, percentProfit = _0x599f86[_0x582f88(0x2b4)](_0x599f86[_0x582f88(0x406)](profit, startBalance), 0x64), percentProfit = _0x599f86[_0x582f88(0x311)](Math[_0x582f88(0x257)](_0x599f86['MjVHQ'](percentProfit, Number[_0x582f88(0x3a4)]) * 0x64), 0x64), percentProfit = _0x599f86['fPgUH'](isNaN, percentProfit) || !isFinite(percentProfit) ? 0x0 : percentProfit, document[_0x582f88(0x2f8)](_0x582f88(0x432))[_0x582f88(0x3ea)][_0x582f88(0x2f0)] = _0x3fb577, document[_0x582f88(0x2f8)](_0x599f86[_0x582f88(0x358)])['innerText'] = percentProfit, _0x599f86[_0x582f88(0x477)];
}
function log(_0x5cfbc3) {
    const _0x1cdba5 = _0x4f1b09, _0x32e1dc = {
            'zeXPc': _0x1cdba5(0x2f5),
            'fJBRQ': _0x1cdba5(0x39f),
            'geffE': _0x1cdba5(0x241),
            'GUvUm': function (_0x47268a, _0x3d9919) {
                return _0x47268a > _0x3d9919;
            }
        }, _0xa218f4 = document[_0x1cdba5(0x2f8)](_0x32e1dc[_0x1cdba5(0x373)]), _0x3f52af = document[_0x1cdba5(0x190)]('li');
    _0x3f52af['innerText'] = _0x5cfbc3, _0x3f52af[_0x1cdba5(0x3ea)][_0x1cdba5(0x2f0)] = darkMode ? _0x32e1dc[_0x1cdba5(0x3c7)] : _0x32e1dc['geffE'], _0xa218f4[_0x1cdba5(0x426)](_0x3f52af, _0xa218f4[_0x1cdba5(0x2e5)]), _0x32e1dc[_0x1cdba5(0x18f)](_0xa218f4['children']['length'], maxRows) && _0xa218f4[_0x1cdba5(0x2ec)](_0xa218f4[_0x1cdba5(0x411)]);
}
function updateSpeed() {
    const _0x173743 = _0x4f1b09, _0x5cc8b7 = {
            'NknHp': _0x173743(0x32b),
            'xjXQc': _0x173743(0x2b2),
            'aEBWf': function (_0xa281d2, _0x525715) {
                return _0xa281d2 - _0x525715;
            },
            'gGhQt': function (_0x307540, _0x5a2263) {
                return _0x307540 / _0x5a2263;
            }
        };
    if (speedHistory[_0x173743(0x464)] < 0x2) {
        document[_0x173743(0x2f8)](_0x5cc8b7['NknHp'])[_0x173743(0x2a4)] = _0x5cc8b7[_0x173743(0x3cf)];
        return;
    }
    const _0x288173 = Date[_0x173743(0x3db)](), _0x5cd7af = 0x2710;
    speedHistory = speedHistory[_0x173743(0x1fd)](_0x2fb857 => _0x288173 - _0x2fb857 <= _0x5cd7af);
    if (speedHistory[_0x173743(0x464)] < 0x2) {
        document['getElementById'](_0x5cc8b7[_0x173743(0x330)])['innerText'] = _0x173743(0x2b2);
        return;
    }
    const _0x4e3712 = speedHistory[0x0], _0x4b045b = _0x5cc8b7[_0x173743(0x394)](_0x288173, _0x4e3712) / 0x3e8, _0x4089d7 = _0x5cc8b7[_0x173743(0x1a2)](speedHistory[_0x173743(0x464)], _0x4b045b);
    document[_0x173743(0x2f8)](_0x5cc8b7[_0x173743(0x330)])['innerText'] = _0x4089d7[_0x173743(0x417)](0x2);
}
function updateTimer() {
    const _0x2666ba = _0x4f1b09, _0x1d28a6 = {
            'JGVcf': function (_0x3c4075, _0x3830d5) {
                return _0x3c4075 * _0x3830d5;
            },
            'shSBG': function (_0x43c693, _0x12a8d4) {
                return _0x43c693 / _0x12a8d4;
            },
            'inGZT': function (_0x2ccf70, _0x5b769a) {
                return _0x2ccf70 % _0x5b769a;
            },
            'AxHse': function (_0x3e5a8f, _0x489703) {
                return _0x3e5a8f * _0x489703;
            },
            'iYWIO': function (_0x36948b, _0x439489) {
                return _0x36948b / _0x439489;
            },
            'PJXsv': function (_0x139f53, _0x1ecbd0) {
                return _0x139f53 % _0x1ecbd0;
            }
        };
    elapsedTime++;
    const _0x13e426 = Math[_0x2666ba(0x2c0)](elapsedTime / _0x1d28a6['JGVcf'](0x18 * 0x3c, 0x3c)), _0x493d90 = Math['floor'](_0x1d28a6[_0x2666ba(0x31e)](_0x1d28a6[_0x2666ba(0x273)](elapsedTime, _0x1d28a6['AxHse'](0x18, 0x3c) * 0x3c), 0x3c * 0x3c)), _0x387faf = Math[_0x2666ba(0x2c0)](_0x1d28a6['iYWIO'](_0x1d28a6[_0x2666ba(0x1dd)](elapsedTime, 0x3c * 0x3c), 0x3c)), _0x53989c = _0x1d28a6[_0x2666ba(0x1dd)](elapsedTime, 0x3c);
    document[_0x2666ba(0x2f8)](_0x2666ba(0x38a))[_0x2666ba(0x2a4)] = _0x13e426 + ':' + _0x493d90 + ':' + _0x387faf + ':' + _0x53989c;
}
async function start() {
    const _0x50f96b = _0x4f1b09, _0x2de2ca = {
            'VQcvI': function (_0x283dd5, _0x116b7f) {
                return _0x283dd5 === _0x116b7f;
            },
            'uIIUn': 'rangedice',
            'yioDB': 'between',
            'xJcoi': '0:0:0:0',
            'VMxhD': _0x50f96b(0x1b1),
            'OprTQ': _0x50f96b(0x29c),
            'LXBPl': _0x50f96b(0x272),
            'FKYGD': _0x50f96b(0x3fd),
            'TvLwB': _0x50f96b(0x444),
            'Qiadj': _0x50f96b(0x318),
            'AgEqQ': _0x50f96b(0x200),
            'RjzqG': function (_0x9eb37c, _0x56f248) {
                return _0x9eb37c(_0x56f248);
            },
            'ddlZd': function (_0x3b9064, _0x29704f) {
                return _0x3b9064(_0x29704f);
            },
            'DZkXW': function (_0x36e663, _0x25c660, _0xadfe73) {
                return _0x36e663(_0x25c660, _0xadfe73);
            },
            'SFUwE': function (_0x3acd6e, _0x5d22d0, _0x3fc356) {
                return _0x3acd6e(_0x5d22d0, _0x3fc356);
            },
            'DFhqJ': _0x50f96b(0x30b),
            'lJEyd': _0x50f96b(0x2fc),
            'NvpSn': 'scriptName',
            'YpCQt': _0x50f96b(0x278),
            'HpjtO': _0x50f96b(0x244),
            'JNThW': _0x50f96b(0x2a6),
            'FSayj': '$1=$1-$2\x20',
            'PbfIs': '$1=$1*$2\x20',
            'YoQxp': _0x50f96b(0x231),
            'iFlrO': function (_0x5e13b4, _0x218d70) {
                return _0x5e13b4 === _0x218d70;
            },
            'OGmeD': 'wdbRunningScript',
            'ZIYks': _0x50f96b(0x196),
            'QnJno': _0x50f96b(0x3cb),
            'xhsgy': function (_0x48151f, _0x5d0a37) {
                return _0x48151f(_0x5d0a37);
            },
            'adAKw': _0x50f96b(0x2a7),
            'aCvHv': _0x50f96b(0x403),
            'iOkIO': function (_0x4d4c32) {
                return _0x4d4c32();
            },
            'ipphb': function (_0x45bd38) {
                return _0x45bd38();
            },
            'FUbkI': function (_0xe32dc5, _0x508c97) {
                return _0xe32dc5(_0x508c97);
            }
        };
    if (_0x2de2ca[_0x50f96b(0x343)](game, _0x2de2ca[_0x50f96b(0x251)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x2de2ca[_0x50f96b(0x1f3)];
        const _0x3b6413 = _0x50f96b(0x351) + chance1 + '\x0a\x20\x20\x20\x20chance2=' + chance2 + _0x50f96b(0x2a8) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x50f96b(0x19b) + betSide + '\x22';
        fengari[_0x50f96b(0x455)](_0x3b6413)();
    }
    try {
        if (!run) {
            document['getElementById'](_0x50f96b(0x38a))[_0x50f96b(0x2a4)] = _0x2de2ca[_0x50f96b(0x418)], document[_0x50f96b(0x2f8)](_0x50f96b(0x1b2))[_0x50f96b(0x1ae)] = !![], document[_0x50f96b(0x2f8)](_0x2de2ca[_0x50f96b(0x34e)])[_0x50f96b(0x1ae)] = !![], document[_0x50f96b(0x2f8)](_0x2de2ca[_0x50f96b(0x325)])[_0x50f96b(0x1ae)] = !![], document['getElementById'](_0x2de2ca[_0x50f96b(0x2a1)])['disabled'] = !![], document[_0x50f96b(0x2f8)](_0x2de2ca[_0x50f96b(0x22d)])[_0x50f96b(0x1ae)] = !![], document[_0x50f96b(0x2f8)](_0x2de2ca['TvLwB'])[_0x50f96b(0x1ae)] = !![], document[_0x50f96b(0x2b1)](_0x2de2ca[_0x50f96b(0x2e2)])['forEach'](_0x5c4c08 => _0x5c4c08['disabled'] = !![]), document[_0x50f96b(0x2b1)](_0x2de2ca[_0x50f96b(0x223)])[_0x50f96b(0x447)](_0x145df2 => _0x145df2[_0x50f96b(0x1ae)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x2de2ca[_0x50f96b(0x332)](clearInterval, timerInterval), _0x2de2ca['ddlZd'](clearInterval, speedUpdateInterval), timerInterval = _0x2de2ca[_0x50f96b(0x1e0)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x2de2ca[_0x50f96b(0x40c)](setInterval, updateSpeed, 0x1f4), fengari[_0x50f96b(0x455)]('scriptname\x20=\x20\x22\x22')(), fengari[_0x50f96b(0x455)](_0x50f96b(0x31c))();
            if (mode === _0x2de2ca[_0x50f96b(0x3f0)]) {
                const _0x46aed6 = _0x2de2ca[_0x50f96b(0x283)][_0x50f96b(0x2cd)]('|');
                let _0x22d6b5 = 0x0;
                while (!![]) {
                    switch (_0x46aed6[_0x22d6b5++]) {
                    case '0':
                        document[_0x50f96b(0x2f8)](_0x2de2ca['NvpSn'])[_0x50f96b(0x2a4)] = scriptname ? _0x50f96b(0x205) + scriptname : '';
                        continue;
                    case '1':
                        scriptname = fengari[_0x50f96b(0x455)](_0x2de2ca['YpCQt'])();
                        continue;
                    case '2':
                        diceScript = diceScript[_0x50f96b(0x44e)](/!=/g, '~=')[_0x50f96b(0x44e)](/!/g, _0x2de2ca[_0x50f96b(0x347)])[_0x50f96b(0x44e)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2de2ca[_0x50f96b(0x2e1)])[_0x50f96b(0x44e)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2de2ca[_0x50f96b(0x29d)])[_0x50f96b(0x44e)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2de2ca[_0x50f96b(0x254)])[_0x50f96b(0x44e)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2de2ca['YoQxp']);
                        continue;
                    case '3':
                        fengari[_0x50f96b(0x455)](diceScript)();
                        continue;
                    case '4':
                        diceScript = luaEditor[_0x50f96b(0x274)]();
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x2de2ca[_0x50f96b(0x232)](mode, 'js')) {
                    const _0x56f310 = document['getElementById'](_0x2de2ca['OGmeD']);
                    if (_0x56f310)
                        _0x56f310[_0x50f96b(0x3eb)]();
                    diceScript = jsEditor[_0x50f96b(0x274)]();
                    const _0x41fad4 = document['createElement'](_0x2de2ca[_0x50f96b(0x295)]);
                    _0x41fad4['id'] = _0x2de2ca['OGmeD'], _0x41fad4[_0x50f96b(0x3f3)] = diceScript, document[_0x50f96b(0x2c2)][_0x50f96b(0x429)](_0x41fad4);
                } else
                    _0x2de2ca[_0x50f96b(0x343)](mode, _0x2de2ca[_0x50f96b(0x3c6)]) && (basebet = _0x2de2ca[_0x50f96b(0x346)](Number, document[_0x50f96b(0x2f8)](_0x2de2ca[_0x50f96b(0x2f7)])['value']), nextbet = basebet, chance = _0x2de2ca[_0x50f96b(0x332)](Number, document[_0x50f96b(0x2f8)](_0x2de2ca[_0x50f96b(0x41a)])[_0x50f96b(0x304)]), bethigh = document[_0x50f96b(0x33b)]('#advancedBetHigh')['checked']);
            }
            if (run)
                return _0x2de2ca[_0x50f96b(0x1c0)](playBet);
        }
    } catch (_0x4920ea) {
        _0x2de2ca['ipphb'](stop), _0x2de2ca[_0x50f96b(0x390)](log, _0x4920ea);
    }
}
function stop() {
    const _0x35b563 = _0x4f1b09, _0x5f23d4 = {
            'bVHtN': _0x35b563(0x1b1),
            'fMAPO': _0x35b563(0x29c),
            'JannF': _0x35b563(0x272),
            'yzFNY': 'wdbOpenLUAScript',
            'lmHXI': _0x35b563(0x361)
        };
    if (!run)
        return;
    run = ![], sOW = ![], clearInterval(timerInterval), clearInterval(speedUpdateInterval);
    const _0xeab2f8 = [
        'wdbMenuCoin',
        _0x5f23d4[_0x35b563(0x287)],
        _0x5f23d4[_0x35b563(0x2c8)],
        _0x5f23d4['JannF'],
        _0x5f23d4[_0x35b563(0x30a)],
        'wdbOpenJSScript',
        _0x5f23d4['lmHXI']
    ];
    _0xeab2f8['forEach'](_0x50d783 => {
        const _0x1ae02c = _0x35b563;
        document['getElementById'](_0x50d783)[_0x1ae02c(0x1ae)] = ![];
    }), document['querySelectorAll'](_0x35b563(0x1d9))[_0x35b563(0x447)](_0xcaa9a8 => _0xcaa9a8[_0x35b563(0x1ae)] = ![]);
}
async function resume(_0x38291f) {
    const _0x3537c1 = _0x4f1b09, _0x5b9f91 = {
            'AmCJm': 'wdbMenuMode',
            'IudaP': _0x3537c1(0x272),
            'VeJEI': _0x3537c1(0x3fd),
            'dPfMA': _0x3537c1(0x444),
            'FjMRj': _0x3537c1(0x1d9),
            'hFKda': _0x3537c1(0x1a5),
            'fEUSn': function (_0x4cec6b, _0x3e92af, _0x25eb1d) {
                return _0x4cec6b(_0x3e92af, _0x25eb1d);
            },
            'ZBIZT': function (_0x327d84) {
                return _0x327d84();
            }
        };
    if (!run) {
        const _0x4872bc = [
            _0x3537c1(0x1b2),
            _0x5b9f91['AmCJm'],
            _0x3537c1(0x29c),
            _0x5b9f91[_0x3537c1(0x412)],
            _0x5b9f91['VeJEI'],
            _0x5b9f91[_0x3537c1(0x335)]
        ];
        return _0x4872bc['forEach'](_0x199900 => {
            const _0x1ad258 = _0x3537c1;
            document['getElementById'](_0x199900)[_0x1ad258(0x1ae)] = !![];
        }), document[_0x3537c1(0x2b1)](_0x5b9f91[_0x3537c1(0x374)])[_0x3537c1(0x447)](_0x2e9353 => _0x2e9353[_0x3537c1(0x1ae)] = !![]), !_0x38291f && (log(_0x5b9f91[_0x3537c1(0x40e)]), await new Promise(_0x13a421 => setTimeout(_0x13a421, 0x1388))), run = !![], sOW = ![], timerInterval = _0x5b9f91[_0x3537c1(0x26d)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x5b9f91[_0x3537c1(0x26d)](setInterval, updateSpeed, 0x1f4), _0x5b9f91[_0x3537c1(0x2bf)](playBet);
    }
}
function stopOnWin() {
    const _0x1cd753 = _0x4f1b09;
    sOW = !![];
    if (run)
        document[_0x1cd753(0x2f8)](_0x1cd753(0x361))[_0x1cd753(0x1ae)] = !![];
}
async function playBet() {
    const _0x5aa68a = _0x4f1b09, _0x31ef96 = {
            'KxBFj': _0x5aa68a(0x44b),
            'qpZuo': _0x5aa68a(0x466),
            'DvCSA': _0x5aa68a(0x423),
            'Yyimi': _0x5aa68a(0x2e8),
            'tpERl': _0x5aa68a(0x1fb),
            'VZhft': 'return\x20chance2',
            'OsiNd': _0x5aa68a(0x3d8),
            'ujMsL': _0x5aa68a(0x345),
            'qJlfj': 'return\x20nextbet',
            'gdoOj': function (_0x22d9ea, _0x3d56d7) {
                return _0x22d9ea(_0x3d56d7);
            },
            'CIDtV': function (_0x41fdfe, _0x2b9d46) {
                return _0x41fdfe(_0x2b9d46);
            },
            'LdTPj': function (_0x1123dd, _0x3cc540) {
                return _0x1123dd(_0x3cc540);
            },
            'GgKZi': function (_0x38e802, _0x3b01da) {
                return _0x38e802 !== _0x3b01da;
            },
            'Dckyl': _0x5aa68a(0x461),
            'NydhL': _0x5aa68a(0x1d5),
            'sZGzC': _0x5aa68a(0x2e0),
            'hBbsT': function (_0x173155, _0x12dcff) {
                return _0x173155 === _0x12dcff;
            },
            'CSAjg': _0x5aa68a(0x3ab),
            'fEYkj': _0x5aa68a(0x24e),
            'bURfi': _0x5aa68a(0x2dd),
            'zZoPx': function (_0x86784c, _0x36e6a8) {
                return _0x86784c + _0x36e6a8;
            },
            'TTFKc': function (_0x3e3e95) {
                return _0x3e3e95();
            },
            'KAxeG': function (_0x32ec52) {
                return _0x32ec52();
            },
            'RiYzT': function (_0x5c60e4, _0x343e06) {
                return _0x5c60e4(_0x343e06);
            }
        };
    try {
        if (mode === _0x5aa68a(0x30b)) {
            const _0x11586f = _0x31ef96['KxBFj']['split']('|');
            let _0x3c518c = 0x0;
            while (!![]) {
                switch (_0x11586f[_0x3c518c++]) {
                case '0':
                    chance3 = fengari[_0x5aa68a(0x455)](_0x31ef96[_0x5aa68a(0x3e2)])();
                    continue;
                case '1':
                    betSide = fengari[_0x5aa68a(0x455)](_0x31ef96['DvCSA'])();
                    continue;
                case '2':
                    chance = fengari['load'](_0x31ef96['Yyimi'])();
                    continue;
                case '3':
                    chance1 = fengari['load'](_0x31ef96[_0x5aa68a(0x454)])();
                    continue;
                case '4':
                    chance2 = fengari[_0x5aa68a(0x455)](_0x31ef96[_0x5aa68a(0x448)])();
                    continue;
                case '5':
                    chance4 = fengari[_0x5aa68a(0x455)](_0x31ef96['OsiNd'])();
                    continue;
                case '6':
                    bethigh = fengari['load'](_0x31ef96[_0x5aa68a(0x199)])();
                    continue;
                case '7':
                    nextbet = fengari[_0x5aa68a(0x455)](_0x31ef96['qJlfj'])();
                    continue;
                }
                break;
            }
        }
        nextbet = _0x31ef96[_0x5aa68a(0x2bb)](Number, nextbet), chance = _0x31ef96[_0x5aa68a(0x2bb)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x1d7685 = _0x31ef96['CIDtV'](Number, lastBet[_0x5aa68a(0x1c4)])['toFixed'](decimalAmountView), _0x147c5a = _0x31ef96[_0x5aa68a(0x2ae)](Number, lastBet[_0x5aa68a(0x1da)])[_0x5aa68a(0x417)](decimalChanceView), _0x156827 = _0x31ef96['GgKZi'](game, _0x31ef96[_0x5aa68a(0x233)]) ? game === _0x31ef96[_0x5aa68a(0x413)] ? _0x5aa68a(0x1ef) + _0x1d7685 + '\x20at\x20' + (havePlinkoRows ? plinkoRow + _0x31ef96[_0x5aa68a(0x2f9)] : '') + plinkoRisk + _0x5aa68a(0x1ed) : _0x5aa68a(0x1ef) + _0x1d7685 + '\x20at\x20' + _0x147c5a + '%\x20chance\x20to\x20win,\x20' + (_0x31ef96[_0x5aa68a(0x402)](game, _0x31ef96[_0x5aa68a(0x427)]) ? bethigh ? _0x31ef96[_0x5aa68a(0x1e9)] : _0x31ef96[_0x5aa68a(0x321)] : _0x31ef96['fEYkj']) : _0x5aa68a(0x1ef) + _0x1d7685 + _0x5aa68a(0x460) + chance1 + '|' + chance2 + (chance3 ? _0x31ef96[_0x5aa68a(0x41b)]('|', chance3) : '') + (chance4 ? _0x31ef96['zZoPx']('|', chance4) : '') + _0x5aa68a(0x300) + betSide;
            _0x31ef96[_0x5aa68a(0x2ae)](log, _0x156827);
        }
        if (run)
            return _0x31ef96[_0x5aa68a(0x2f2)](sendBet);
    } catch (_0xa4850) {
        _0x31ef96['KAxeG'](stop), _0x31ef96['RiYzT'](log, _0xa4850);
    }
}
function resetall() {
    const _0x16714f = _0x4f1b09, _0x4ebab7 = {
            'WsvAb': '5|1|4|0|2|3',
            'jElgy': function (_0x491929) {
                return _0x491929();
            },
            'hEisW': function (_0x539dad) {
                return _0x539dad();
            }
        }, _0x5bc144 = _0x4ebab7[_0x16714f(0x20a)][_0x16714f(0x2cd)]('|');
    let _0x43f8c6 = 0x0;
    while (!![]) {
        switch (_0x5bc144[_0x43f8c6++]) {
        case '0':
            _0x4ebab7[_0x16714f(0x1eb)](resetchart);
            continue;
        case '1':
            document[_0x16714f(0x2f8)](_0x16714f(0x32b))[_0x16714f(0x2a4)] = _0x16714f(0x2b2);
            continue;
        case '2':
            _0x4ebab7[_0x16714f(0x1eb)](resethistory);
            continue;
        case '3':
            _0x4ebab7[_0x16714f(0x40f)](resetlog);
            continue;
        case '4':
            resetstats();
            continue;
        case '5':
            document['getElementById']('wdbTime')[_0x16714f(0x2a4)] = '0:0:0:0';
            continue;
        }
        break;
    }
}
function resetchart() {
    const _0x4d87b3 = _0x4f1b09, _0x37f0cb = {
            'nyfxm': function (_0x1344c5, _0xf0b195) {
                return _0x1344c5(_0xf0b195);
            }
        };
    return _0x37f0cb[_0x4d87b3(0x47b)](toggleChart, 'reset');
}
function resethistory() {
    const _0x2060d8 = _0x4f1b09, _0x552f0b = {
            'FddTn': function (_0x5357e9, _0x2eed25) {
                return _0x5357e9(_0x2eed25);
            }
        };
    return _0x552f0b[_0x2060d8(0x37d)](toggleHistory, _0x2060d8(0x3a6));
}
function resetlog() {
    const _0x3e45a5 = _0x4f1b09, _0x5e454f = {
            'DWznf': function (_0x49abcb, _0x39bfce) {
                return _0x49abcb(_0x39bfce);
            }
        };
    return _0x5e454f[_0x3e45a5(0x32c)](toggleLog, _0x3e45a5(0x3a6));
}
function resetstats() {
    const _0x87acac = {
        'edsNP': function (_0x2ed1a0) {
            return _0x2ed1a0();
        }
    };
    fullLogs = [], startBalance = balance, wagered = 0x0, percentWagered = 0x0, profit = 0x0, percentProfit = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, minbalance = balance, maxbalance = balance, minprofit = 0x0, maxprofit = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, currentstreak = 0x0, _0x87acac['edsNP'](updateStats);
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x2cddc6) {
    return _0x2cddc6;
}
function ching() {
    const _0x34f6d1 = _0x4f1b09;
    return wdbSound[_0x34f6d1(0x1b0)]();
}
function sleep(_0x38061f) {
    return new Promise(_0x20b09e => setTimeout(_0x20b09e, _0x38061f * 0x3e8));
}
async function initLua() {
    const _0x2b4a42 = _0x4f1b09, _0x6f8f5 = {
            'gNXCY': _0x2b4a42(0x35c),
            'NjdGX': _0x2b4a42(0x29a),
            'LFfEA': _0x2b4a42(0x3b8),
            'iKaUP': _0x2b4a42(0x1ab),
            'zDNjQ': _0x2b4a42(0x2ef),
            'mPBzi': _0x2b4a42(0x25a),
            'dxBzd': _0x2b4a42(0x364),
            'kyOsa': _0x2b4a42(0x208),
            'RaRGc': _0x2b4a42(0x32a),
            'yCVtZ': _0x2b4a42(0x201),
            'EWCjB': _0x2b4a42(0x37b),
            'elWoX': _0x2b4a42(0x27f),
            'vHenj': _0x2b4a42(0x317),
            'yPDur': _0x2b4a42(0x3b4)
        };
    fengari['load'](_0x2b4a42(0x1ec))(), fengari['load'](_0x2b4a42(0x36a))(), fengari['load'](_0x6f8f5[_0x2b4a42(0x245)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x271)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5['LFfEA'])(), fengari[_0x2b4a42(0x455)](_0x6f8f5['iKaUP'])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x2ac)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x485)])(), fengari[_0x2b4a42(0x455)]('function\x20resetlog()\x0ajs.global:resetlog()\x0aend')(), fengari[_0x2b4a42(0x455)](_0x2b4a42(0x46f))(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x3d0)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x221)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x371)])(), fengari[_0x2b4a42(0x455)](_0x6f8f5['yCVtZ'])(), fengari[_0x2b4a42(0x455)](_0x6f8f5[_0x2b4a42(0x356)])(), fengari['load'](_0x6f8f5[_0x2b4a42(0x216)])(), fengari[_0x2b4a42(0x455)]('clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end')(), fengari['load'](_0x2b4a42(0x2ad))();
    const _0x21b044 = location[_0x2b4a42(0x256)][_0x2b4a42(0x44e)](_0x6f8f5[_0x2b4a42(0x42c)], '');
    let _0x4f8772 = _0x21b044['indexOf']('.');
    return casino = _0x21b044[_0x2b4a42(0x2d5)](0x0, _0x4f8772), fengari[_0x2b4a42(0x455)](_0x2b4a42(0x1e4) + casino + '\x22')(), _0x6f8f5[_0x2b4a42(0x18e)];
}
async function updateLua() {
    const _0x330544 = _0x4f1b09, _0xfb655d = {
            'bCPdG': _0x330544(0x3b7),
            'nEiYR': _0x330544(0x445),
            'DGJzG': function (_0x388987, _0x16262a) {
                return _0x388987(_0x16262a);
            },
            'PZjJG': 'return\x20plinkoRisk',
            'Uazwz': 'return\x20plinkoRow',
            'PPvhq': _0x330544(0x350),
            'wWggS': 'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
            'mGxIA': _0x330544(0x26e)
        }, _0x6bfc7d = _0x330544(0x1a9) + win + _0x330544(0x3aa) + bets + _0x330544(0x19a) + wins + _0x330544(0x29b) + losses + _0x330544(0x471) + winstreak + _0x330544(0x376) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + '\x0a\x20\x20\x20\x20balance=' + balance + _0x330544(0x430) + minbalance + _0x330544(0x18d) + maxbalance + _0x330544(0x37a) + minprofit + _0x330544(0x2a2) + maxprofit + _0x330544(0x386) + chance + _0x330544(0x24a) + bethigh + _0x330544(0x37c) + chance1 + _0x330544(0x3b6) + chance2 + _0x330544(0x2a8) + chance3 + _0x330544(0x3d2) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + '\x22\x0a\x0a\x20\x20\x20\x20nextbet=' + nextbet + _0x330544(0x31f) + previousbet + _0x330544(0x3be) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x330544(0x3e0) + partialprofit + _0x330544(0x2d2) + wagered + '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=' + lastBet[_0x330544(0x1c4)] + ',\x0a\x20\x20\x20\x20\x20\x20Amount=' + lastBet[_0x330544(0x1c4)] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet[_0x330544(0x1da)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=' + lastBet[_0x330544(0x1da)] + ',\x0a\x20\x20\x20\x20\x20\x20roll=' + lastBet[_0x330544(0x19e)] + _0x330544(0x41e) + lastBet[_0x330544(0x19e)] + _0x330544(0x1b7) + lastBet[_0x330544(0x259)] + _0x330544(0x392) + lastBet[_0x330544(0x259)] + ',\x0a\x20\x20\x20\x20\x20\x20target=' + lastBet[_0x330544(0x44c)] + ',\x0a\x20\x20\x20\x20\x20\x20Target=' + lastBet[_0x330544(0x44c)] + _0x330544(0x2da) + lastBet[_0x330544(0x457)] + _0x330544(0x3da) + lastBet['chance1'] + _0x330544(0x3e5) + lastBet[_0x330544(0x26c)] + _0x330544(0x414) + lastBet['chance2'] + _0x330544(0x23b) + lastBet[_0x330544(0x416)] + _0x330544(0x301) + lastBet['chance3'] + _0x330544(0x42e) + lastBet[_0x330544(0x253)] + _0x330544(0x365) + lastBet['chance4'] + _0x330544(0x40d) + lastBet[_0x330544(0x28d)] + '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22' + lastBet[_0x330544(0x28d)] + _0x330544(0x262) + lastBet[_0x330544(0x3d4)] + _0x330544(0x2b8) + lastBet['result'] + _0x330544(0x25b) + lastBet[_0x330544(0x3f8)] + _0x330544(0x22c) + lastBet[_0x330544(0x3f8)] + _0x330544(0x3a7) + lastBet['id'] + _0x330544(0x35a) + lastBet['id'] + _0x330544(0x243);
    fengari['load'](_0x6bfc7d)(), fengari['load'](_0xfb655d[_0x330544(0x198)])(), currency = fengari[_0x330544(0x455)](_0xfb655d[_0x330544(0x47f)])() || currency, coin = _0xfb655d[_0x330544(0x1e3)](String, currency)[_0x330544(0x228)](), plinkoRisk = fengari[_0x330544(0x455)](_0xfb655d['PZjJG'])() || plinkoRisk, plinkoRow = fengari['load'](_0xfb655d[_0x330544(0x305)])() || plinkoRow, kenoRisk = fengari[_0x330544(0x455)](_0xfb655d['PPvhq'])() || kenoRisk;
    const _0x3ce81e = fengari[_0x330544(0x455)](_0xfb655d[_0x330544(0x211)])();
    return _0x3ce81e && (window[_0x330544(0x378)] = _0x3ce81e[_0x330544(0x2cd)](',')[_0x330544(0x1fd)](_0x4f0b48 => _0x4f0b48 !== '')[_0x330544(0x397)](Number)), _0xfb655d[_0x330544(0x2f4)];
}
function randomString(_0x19030e, _0x40f66f) {
    const _0x1bb416 = _0x4f1b09, _0x23b1bb = {
            'PNQIC': _0x1bb416(0x341),
            'ygGfH': _0x1bb416(0x463),
            'jBEPs': '0123456789abcdef',
            'azege': _0x1bb416(0x44d),
            'AWEPO': _0x1bb416(0x3c0),
            'iPrJQ': function (_0x1b0688, _0xb0a0c2) {
                return _0x1b0688 < _0xb0a0c2;
            },
            'srsOV': function (_0x45a1de, _0x4751a1) {
                return _0x45a1de * _0x4751a1;
            }
        }, _0x4210e2 = {
            'alphabet': _0x23b1bb[_0x1bb416(0x327)],
            'numeric': _0x23b1bb[_0x1bb416(0x191)],
            'hex': _0x23b1bb[_0x1bb416(0x36e)],
            'rangedice': _0x23b1bb['azege'],
            'default': _0x23b1bb[_0x1bb416(0x2f6)]
        }, _0x588842 = _0x4210e2[_0x40f66f] || _0x4210e2[_0x1bb416(0x286)];
    let _0x4a0225 = '';
    for (let _0x3822c2 = 0x0; _0x23b1bb[_0x1bb416(0x3d3)](_0x3822c2, _0x19030e); _0x3822c2++) {
        _0x4a0225 += _0x588842[_0x1bb416(0x38b)](Math['floor'](_0x23b1bb[_0x1bb416(0x239)](Math[_0x1bb416(0x1d7)](), _0x588842[_0x1bb416(0x464)])));
    }
    return _0x4a0225;
}
function setCookie(_0x52c03a, _0x579888, _0x79e72a) {
    const _0x3af39c = _0x4f1b09, _0x2dc58a = {
            'xuhyV': function (_0x3ab235, _0x225d68) {
                return _0x3ab235 + _0x225d68;
            },
            'hfOeB': function (_0x1e3b2f, _0x245161) {
                return _0x1e3b2f * _0x245161;
            },
            'zaVBS': function (_0x1cf988, _0x3cd07d) {
                return _0x1cf988 * _0x3cd07d;
            }
        }, _0x253397 = new Date();
    _0x253397['setTime'](_0x2dc58a['xuhyV'](_0x253397[_0x3af39c(0x395)](), _0x2dc58a[_0x3af39c(0x483)](_0x2dc58a[_0x3af39c(0x43b)](_0x2dc58a['hfOeB'](_0x79e72a, 0x18) * 0x3c, 0x3c), 0x3e8)));
    const _0x36ce2a = _0x2dc58a[_0x3af39c(0x29f)](_0x3af39c(0x22e), _0x253397['toUTCString']());
    document[_0x3af39c(0x3bd)] = _0x52c03a + '=' + _0x579888 + ';' + _0x36ce2a + ';path=/';
}
function getCookie(_0x4b65e0) {
    const _0x3ff62b = _0x4f1b09, _0x9ea8dd = {
            'ZPvyw': function (_0x25829d, _0x24fb04) {
                return _0x25829d + _0x24fb04;
            }
        }, _0x454241 = _0x9ea8dd[_0x3ff62b(0x302)](_0x4b65e0, '='), _0xb4ed9 = document['cookie']['split'](';')[_0x3ff62b(0x397)](_0x54aba6 => _0x54aba6[_0x3ff62b(0x481)]());
    for (const _0x3d3716 of _0xb4ed9) {
        if (_0x3d3716[_0x3ff62b(0x452)](_0x454241))
            return _0x3d3716[_0x3ff62b(0x35b)](_0x454241[_0x3ff62b(0x464)]);
    }
    return '';
}
function saveScript() {
    const _0x50b506 = _0x4f1b09, _0x550cd0 = { 'cMEsI': _0x50b506(0x30b) }, _0x1c6d58 = mode === _0x550cd0[_0x50b506(0x3e9)] ? luaEditor[_0x50b506(0x274)]() : jsEditor[_0x50b506(0x274)](), _0x493f71 = document[_0x50b506(0x190)]('a');
    _0x493f71['href'] = window['URL']['createObjectURL'](new Blob([_0x1c6d58], { 'type': _0x50b506(0x3b9) })), _0x493f71[_0x50b506(0x437)] = _0x50b506(0x467) + Date[_0x50b506(0x3db)]()[_0x50b506(0x47d)]()[_0x50b506(0x2d5)](-0x6) + '.' + mode, _0x493f71[_0x50b506(0x289)]();
}
function getErrMsg(_0x3a6105) {
    const _0x6883f = _0x4f1b09;
    return _0x3a6105[_0x6883f(0x354)] && _0x3a6105['response']['data'] && _0x3a6105[_0x6883f(0x354)][_0x6883f(0x26b)][_0x6883f(0x1f9)] || _0x3a6105[_0x6883f(0x1f9)] || _0x3a6105[_0x6883f(0x47d)]();
}

const _0x42ceb4 = _0x2514;
(function (_0x149a98, _0x408ba2) {
    const _0x6d5f02 = _0x2514, _0x1d5cd7 = _0x149a98();
    while (!![]) {
        try {
            const _0x35d405 = parseInt(_0x6d5f02(0x1cc)) / 0x1 + -parseInt(_0x6d5f02(0x1e7)) / 0x2 * (parseInt(_0x6d5f02(0x1e8)) / 0x3) + parseInt(_0x6d5f02(0x19a)) / 0x4 + -parseInt(_0x6d5f02(0x1b5)) / 0x5 * (parseInt(_0x6d5f02(0x1e1)) / 0x6) + -parseInt(_0x6d5f02(0x1c8)) / 0x7 + -parseInt(_0x6d5f02(0x1ac)) / 0x8 * (-parseInt(_0x6d5f02(0x18b)) / 0x9) + -parseInt(_0x6d5f02(0x1dc)) / 0xa * (-parseInt(_0x6d5f02(0x1b2)) / 0xb);
            if (_0x35d405 === _0x408ba2)
                break;
            else
                _0x1d5cd7['push'](_0x1d5cd7['shift']());
        } catch (_0x598f17) {
            _0x1d5cd7['push'](_0x1d5cd7['shift']());
        }
    }
}(_0x2c0d, 0x5fcbe), CASINO_API = _0x42ceb4(0x1d2) + window[_0x42ceb4(0x1d8)]['host'], token = null, decimalTargetResult = 0x0);
async function beforeWork() {
    const _0x2206b8 = _0x42ceb4, _0x1d6b57 = { 'jMRvH': _0x2206b8(0x19d) };
    axios[_0x2206b8(0x191)][_0x2206b8(0x1bd)] = { 'content-type': _0x1d6b57[_0x2206b8(0x19b)] };
}
async function vault(_0x1fd990) {
    const _0x5d00e5 = _0x42ceb4, _0x3c2789 = {
            'pcAqG': function (_0x1bf420, _0x26269e) {
                return _0x1bf420 + _0x26269e;
            },
            'Gbvzq': _0x5d00e5(0x195),
            'ugmQH': function (_0xf8a7dd, _0x49b3d1) {
                return _0xf8a7dd === _0x49b3d1;
            },
            'SVKUC': function (_0xc9e5a8, _0x41c0d7) {
                return _0xc9e5a8(_0x41c0d7);
            },
            'JhRdj': 'balance='
        };
    try {
        const _0x3b8f09 = { 'authorization': _0x3c2789[_0x5d00e5(0x1af)]('Bearer\x20', localStorage[_0x5d00e5(0x1ca)](_0x5d00e5(0x1a3))) }, _0x30be93 = {
                'curr': coin[_0x5d00e5(0x197)](),
                'amount': _0x1fd990 * 0x3e8
            }, {data: _0x335a50} = await axios[_0x5d00e5(0x1a5)](_0x3c2789['Gbvzq'], _0x30be93, { 'headers': _0x3b8f09 });
        _0x3c2789['ugmQH'](_0x335a50[_0x5d00e5(0x1c9)], _0x5d00e5(0x1bf)) ? _0x3c2789[_0x5d00e5(0x19e)](log, _0x335a50[_0x5d00e5(0x1a2)]) : (balance -= _0x1fd990, fengari['load'](_0x3c2789[_0x5d00e5(0x1af)](_0x3c2789['JhRdj'], balance))(), _0x3c2789[_0x5d00e5(0x19e)](log, _0x5d00e5(0x1c7) + _0x1fd990 + '\x20' + coin), updateStats());
    } catch (_0x5220ed) {
        console[_0x5d00e5(0x1b7)](_0x5220ed);
    }
}
async function unvault(_0xee002f) {
    const _0x4eb65c = _0x42ceb4, _0x249a2a = {
            'OEthz': function (_0x554192, _0x44e37c) {
                return _0x554192 + _0x44e37c;
            },
            'IXIQZ': _0x4eb65c(0x1c5),
            'VlKjB': _0x4eb65c(0x1bf),
            'DoRbJ': function (_0x39db69, _0x109357) {
                return _0x39db69(_0x109357);
            },
            'oqktU': function (_0x291c24, _0x4fe6a8) {
                return _0x291c24 + _0x4fe6a8;
            }
        };
    try {
        const _0x2e2b5e = { 'authorization': _0x249a2a['OEthz'](_0x4eb65c(0x1cf), localStorage['getItem'](_0x4eb65c(0x1a3))) }, _0x262045 = {
                'curr': coin[_0x4eb65c(0x197)](),
                'amount': _0xee002f * 0x3e8
            }, {data: _0x49f247} = await axios[_0x4eb65c(0x1a5)](_0x249a2a[_0x4eb65c(0x196)], _0x262045, { 'headers': _0x2e2b5e });
        _0x49f247[_0x4eb65c(0x1c9)] === _0x249a2a[_0x4eb65c(0x1bb)] ? _0x249a2a[_0x4eb65c(0x18d)](log, _0x49f247[_0x4eb65c(0x1a2)]) : (balance += _0xee002f, fengari[_0x4eb65c(0x1e9)](_0x249a2a[_0x4eb65c(0x1d7)](_0x4eb65c(0x198), balance))(), _0x249a2a['DoRbJ'](log, 'Unvaulted\x20' + _0xee002f + '\x20' + coin), updateStats());
    } catch (_0xf56091) {
        console['log'](_0xf56091);
    }
}
async function getListCoin() {
    const _0x5bc540 = _0x42ceb4, _0x54b661 = {
            'UxIuD': function (_0x4f68b8, _0x28eee6) {
                return _0x4f68b8 + _0x28eee6;
            },
            'vttyT': function (_0x4ab701, _0x32d8cd) {
                return _0x4ab701 + _0x32d8cd;
            },
            'NnMHP': function (_0x57a4c2, _0x7c3a12) {
                return _0x57a4c2 + _0x7c3a12;
            },
            'yiwqb': function (_0x59f5c1, _0x1b6e73) {
                return _0x59f5c1 < _0x1b6e73;
            },
            'Crbzw': function (_0x4cb977, _0x2b5998) {
                return _0x4cb977(_0x2b5998);
            },
            'biYlt': function (_0x26d921) {
                return _0x26d921();
            },
            'DzCPJ': function (_0x42c51b) {
                return _0x42c51b();
            }
        }, _0xc47397 = { 'authorization': _0x54b661[_0x5bc540(0x1d4)](_0x5bc540(0x1cf), localStorage['getItem']('user-token')) }, {data: _0x44ada9} = await axios[_0x5bc540(0x1dd)](_0x54b661[_0x5bc540(0x1d6)](_0x54b661[_0x5bc540(0x1a7)](CASINO_API, _0x5bc540(0x1ba)), Date[_0x5bc540(0x1d0)]()), { 'headers': _0xc47397 });
    token = _0x44ada9['data'][_0x5bc540(0x1db)];
    const _0x36c5d1 = _0x44ada9[_0x5bc540(0x1a4)][_0x5bc540(0x1c1)];
    for (let _0x5b3f10 = 0x0; _0x54b661[_0x5bc540(0x1b6)](_0x5b3f10, _0x36c5d1[_0x5bc540(0x19c)]); _0x5b3f10++) {
        coins['push'](_0x54b661[_0x5bc540(0x199)](String, _0x36c5d1[_0x5b3f10][_0x5bc540(0x1b8)])[_0x5bc540(0x1ab)]());
    }
    return coins = coins[_0x5bc540(0x1b3)](), coin = coins[0x0], (_0x54b661[_0x5bc540(0x1c6)](drawSelectCoin), _0x54b661['DzCPJ'](checkbalance));
}
function _0x2514(_0x5dd869, _0x5ae5cc) {
    const _0x2c0db0 = _0x2c0d();
    return _0x2514 = function (_0x25141e, _0x38695a) {
        _0x25141e = _0x25141e - 0x18a;
        let _0x28f45d = _0x2c0db0[_0x25141e];
        return _0x28f45d;
    }, _0x2514(_0x5dd869, _0x5ae5cc);
}
async function getMinBet() {
    const _0x4ba896 = _0x42ceb4, _0x4c4014 = {
            'gwkDv': function (_0x136002, _0x2175c2) {
                return _0x136002 === _0x2175c2;
            },
            'TEpPa': _0x4ba896(0x1c2),
            'QKxCf': function (_0x2b6848, _0x1d5557) {
                return _0x2b6848(_0x1d5557);
            },
            'ykYfc': function (_0x46516c, _0x4114a0) {
                return _0x46516c + _0x4114a0;
            },
            'HSaYZ': 'minbet=',
            'HDUkw': function (_0x1974df, _0x2d9025) {
                return _0x1974df === _0x2d9025;
            },
            'MQIAs': function (_0x1345a7, _0x58e4ca) {
                return _0x1345a7(_0x58e4ca);
            },
            'SasPu': 'maxbet=',
            'mUIXZ': _0x4ba896(0x1e0)
        };
    client = new WebSocket(_0x4c4014[_0x4ba896(0x1c0)]), client[_0x4ba896(0x1a0)] = _0x930a5f => {
        const _0x326873 = _0x4ba896;
        _0x930a5f = JSON[_0x326873(0x1a1)](_0x930a5f[_0x326873(0x1a4)]);
        if (_0x4c4014[_0x326873(0x1b1)](_0x930a5f[_0x326873(0x1b9)], _0x4c4014['TEpPa'])) {
            minbetList = _0x930a5f[_0x326873(0x1a4)][_0x326873(0x18f)];
            for (const _0x1a4d37 in minbetList) {
                if (_0x4c4014[_0x326873(0x1b1)](_0x4c4014['QKxCf'](String, _0x1a4d37)[_0x326873(0x1ab)](), coin))
                    minbet = minbetList[_0x1a4d37];
            }
            fengari[_0x326873(0x1e9)](_0x4c4014[_0x326873(0x194)](_0x4c4014[_0x326873(0x1a8)], minbet))(), maxbetList = _0x930a5f['data'][_0x326873(0x1cd)];
            for (const _0x48f65d in maxbetList) {
                if (_0x4c4014[_0x326873(0x1df)](_0x4c4014[_0x326873(0x1ad)](String, _0x48f65d)['toUpperCase'](), coin))
                    maxbet = maxbetList[_0x48f65d];
            }
            fengari[_0x326873(0x1e9)](_0x4c4014[_0x326873(0x194)](_0x4c4014[_0x326873(0x1b4)], maxbet))();
        }
    };
}
async function checkbalance() {
    const _0x3da24e = _0x42ceb4, _0x48c67a = {
            'PCwmL': function (_0x125134, _0x410a07) {
                return _0x125134 + _0x410a07;
            },
            'DUqwx': _0x3da24e(0x1a3),
            'MRiUU': function (_0x5c1253, _0x740846) {
                return _0x5c1253 + _0x740846;
            },
            'oFkQP': function (_0x3597d2, _0x15d976) {
                return _0x3597d2 === _0x15d976;
            },
            'BAtaY': function (_0x28d6e2, _0x402f96) {
                return _0x28d6e2(_0x402f96);
            },
            'nRxmW': function (_0x3cc40a, _0x5ccb62) {
                return _0x3cc40a / _0x5ccb62;
            },
            'YnrhG': 'minbalance=',
            'WeORY': function (_0x4fe773, _0x54249c) {
                return _0x4fe773 + _0x54249c;
            },
            'qGfxb': function (_0x227e5a) {
                return _0x227e5a();
            },
            'eRGQC': function (_0x36e484, _0x3338bc) {
                return _0x36e484(_0x3338bc);
            },
            'kFwHC': function (_0x2ab486, _0x3eb0f3) {
                return _0x2ab486(_0x3eb0f3);
            }
        };
    try {
        const _0x3a6c30 = { 'authorization': _0x48c67a[_0x3da24e(0x1ce)](_0x3da24e(0x1cf), localStorage[_0x3da24e(0x1ca)](_0x48c67a[_0x3da24e(0x192)])) }, {data: _0x464ca3} = await axios[_0x3da24e(0x1dd)](_0x48c67a[_0x3da24e(0x1ce)](_0x48c67a[_0x3da24e(0x1c3)](CASINO_API, _0x3da24e(0x1ba)), Date[_0x3da24e(0x1d0)]()), { 'headers': _0x3a6c30 });
        token = _0x464ca3[_0x3da24e(0x1a4)][_0x3da24e(0x1db)];
        const _0x5e4d51 = _0x464ca3[_0x3da24e(0x1a4)]['balance'];
        for (const _0x28cac4 of _0x5e4d51) {
            if (_0x48c67a['oFkQP'](_0x28cac4[_0x3da24e(0x1b8)], _0x48c67a['BAtaY'](String, coin)['toLowerCase']()))
                balance = _0x48c67a['nRxmW'](_0x48c67a[_0x3da24e(0x19f)](Number, _0x28cac4['amount']), 0x3e8);
        }
        return fengari[_0x3da24e(0x1e9)](_0x3da24e(0x198) + balance)(), startBalance = balance, minbalance = balance, fengari['load'](_0x48c67a[_0x3da24e(0x1d1)] + balance)(), maxbalance = balance, fengari[_0x3da24e(0x1e9)](_0x48c67a[_0x3da24e(0x1de)]('maxbalance=', balance))(), (_0x48c67a[_0x3da24e(0x1e2)](getMinBet), _0x48c67a[_0x3da24e(0x1e2)](updateStats));
    } catch (_0x2c9ada) {
        return stop(), _0x48c67a['eRGQC'](log, _0x48c67a[_0x3da24e(0x18c)](getErrMsg, _0x2c9ada));
    }
}
function _0x2c0d() {
    const _0x5aac24 = [
        'curr',
        'action',
        '/auth/user?',
        'VlKjB',
        'YioOS',
        'headers',
        'UMlyb',
        'error',
        'mUIXZ',
        'balance',
        'game_data',
        'MRiUU',
        'win',
        'https://api.windice.io/user/bank/take',
        'biYlt',
        'Vaulted\x20',
        '3402140QFTnnt',
        'status',
        'getItem',
        'AULsE',
        '146512JXIliV',
        'maximum',
        'PCwmL',
        'Bearer\x20',
        'now',
        'YnrhG',
        'https://api.',
        '/api/v1/api/seed',
        'UxIuD',
        'diZFG',
        'vttyT',
        'oqktU',
        'location',
        'EPSILON',
        'pfiPx',
        'api',
        '5515050lBtMwV',
        'get',
        'WeORY',
        'HDUkw',
        'wss://windice.io/ws',
        '338406KKykYI',
        'qGfxb',
        'MtDIG',
        'kVIhK',
        'result',
        'cltRO',
        '185780gUOovt',
        '18UEFLKP',
        'load',
        'kqTym',
        '2357370wOBDIE',
        'kFwHC',
        'DoRbJ',
        'MDgOj',
        'minimum',
        'oKDwB',
        'defaults',
        'DUqwx',
        'success',
        'ykYfc',
        'https://api.windice.io/user/bank/send',
        'IXIQZ',
        'toLowerCase',
        'balance=',
        'Crbzw',
        '1306668WrzjDZ',
        'jMRvH',
        'length',
        'application/json',
        'SVKUC',
        'BAtaY',
        'onmessage',
        'parse',
        'message',
        'user-token',
        'data',
        'post',
        'nonce',
        'NnMHP',
        'HSaYZ',
        '/api/v1/api/roll',
        'uVZhJ',
        'toUpperCase',
        '16YsGhur',
        'MQIAs',
        'bet',
        'pcAqG',
        'xgoLI',
        'gwkDv',
        '11ehCfie',
        'sort',
        'SasPu',
        '10KVFPTv',
        'yiwqb',
        'log'
    ];
    _0x2c0d = function () {
        return _0x5aac24;
    };
    return _0x2c0d();
}
async function resetseed() {
    const _0x757fe = _0x42ceb4, _0x97daf3 = {
            'NULYo': _0x757fe(0x1d3),
            'uVZhJ': function (_0x1128ff) {
                return _0x1128ff();
            },
            'kqTym': function (_0x4b0dce, _0xdda34a) {
                return _0x4b0dce(_0xdda34a);
            }
        };
    try {
        const _0x2f98d8 = { 'authorization': token }, _0x439d56 = JSON['stringify']({ 'value': randomString(0x1e) });
        return axios[_0x757fe(0x1a5)](_0x97daf3['NULYo'], _0x439d56, { 'headers': _0x2f98d8 });
    } catch (_0x29f107) {
        return _0x97daf3[_0x757fe(0x1aa)](stop), log(_0x97daf3[_0x757fe(0x18a)](getErrMsg, _0x29f107));
    }
}
async function sendBet() {
    const _0x28e235 = _0x42ceb4, _0x102a76 = {
            'UMlyb': function (_0x406674, _0x5938e7) {
                return _0x406674 / _0x5938e7;
            },
            'kVIhK': function (_0x3fd987, _0x11d678) {
                return _0x3fd987 * _0x11d678;
            },
            'UxQRq': function (_0x2d56b4, _0x4526be) {
                return _0x2d56b4 + _0x4526be;
            },
            'oKDwB': function (_0x2387a5, _0x43a651) {
                return _0x2387a5 - _0x43a651;
            },
            'YioOS': function (_0x4bfbe7, _0x45c4a7) {
                return _0x4bfbe7 * _0x45c4a7;
            },
            'xgoLI': function (_0x58b931, _0x1cc48e) {
                return _0x58b931(_0x1cc48e);
            },
            'MDgOj': function (_0x3ef3b4, _0x3fa90c) {
                return _0x3ef3b4 - _0x3fa90c;
            },
            'Doenj': function (_0x5b41eb, _0x445854) {
                return _0x5b41eb !== _0x445854;
            },
            'YptXs': _0x28e235(0x193),
            'diZFG': function (_0xb221ab) {
                return _0xb221ab();
            },
            'AULsE': function (_0x20c930, _0x2ef300) {
                return _0x20c930(_0x2ef300);
            },
            'waQbY': function (_0x12af62) {
                return _0x12af62();
            }
        };
    try {
        chance = _0x102a76[_0x28e235(0x1be)](Math['round'](_0x102a76[_0x28e235(0x1e4)](_0x102a76['UxQRq'](chance, Number[_0x28e235(0x1d9)]), 0x64)), 0x64), target = bethigh ? _0x102a76[_0x28e235(0x190)](0x270f, parseInt(_0x102a76[_0x28e235(0x1bc)](chance, 0x64))) : _0x102a76[_0x28e235(0x1b0)](parseInt, _0x102a76[_0x28e235(0x1bc)](chance, 0x64));
        const _0x2d9345 = { 'authorization': token }, _0x45403d = JSON['stringify']({
                'curr': _0x102a76['xgoLI'](String, coin)[_0x28e235(0x197)](),
                'bet': nextbet,
                'game': 'in',
                'low': bethigh ? _0x102a76[_0x28e235(0x18e)](0x270f, parseInt(_0x102a76[_0x28e235(0x1e4)](chance, 0x64))) : 0x0,
                'high': bethigh ? 0x270f : _0x102a76[_0x28e235(0x1b0)](parseInt, _0x102a76[_0x28e235(0x1e4)](chance, 0x64))
            }), {data: _0x2cf85e} = await axios[_0x28e235(0x1a5)](_0x28e235(0x1a9), _0x45403d, { 'headers': _0x2d9345 });
        if (_0x102a76['Doenj'](_0x2cf85e[_0x28e235(0x1c9)], _0x102a76['YptXs']))
            return _0x102a76[_0x28e235(0x1d5)](stop), _0x102a76[_0x28e235(0x1cb)](log, _0x2cf85e['message']);
        else
            return _0x102a76[_0x28e235(0x1cb)](handleResult, _0x2cf85e);
    } catch (_0x14edde) {
        if (run)
            await _0x102a76['waQbY'](sendBet);
    }
}
async function handleResult(_0xe00d7f) {
    const _0x2e60a9 = _0x42ceb4, _0xc092fe = {
            'pfiPx': function (_0x9d79dc, _0x40d509) {
                return _0x9d79dc(_0x40d509);
            },
            'MtDIG': function (_0x3cdb5c, _0x2daa5b) {
                return _0x3cdb5c / _0x2daa5b;
            },
            'cltRO': function (_0x513cd2) {
                return _0x513cd2();
            }
        };
    try {
        return currentprofit = Number(_0xe00d7f['data'][_0x2e60a9(0x1c4)]) - _0xc092fe[_0x2e60a9(0x1da)](Number, _0xe00d7f[_0x2e60a9(0x1a4)][_0x2e60a9(0x1ae)]), lastBet['roll'] = _0xc092fe[_0x2e60a9(0x1e3)](_0xe00d7f['data'][_0x2e60a9(0x1e5)], 0x64), result = _0xe00d7f[_0x2e60a9(0x1a4)]['result'], lastBet[_0x2e60a9(0x1a6)] = _0xe00d7f[_0x2e60a9(0x1a4)][_0x2e60a9(0x1a6)], lastBet['id'] = String(_0xe00d7f[_0x2e60a9(0x1a4)]['hash']), _0xc092fe[_0x2e60a9(0x1e6)](handleStats);
    } catch (_0x1974fc) {
        return stop(), _0xc092fe[_0x2e60a9(0x1da)](log, _0xc092fe[_0x2e60a9(0x1da)](getErrMsg, _0x1974fc));
    }
}