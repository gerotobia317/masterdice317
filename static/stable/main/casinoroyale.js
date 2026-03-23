const _0x49b003 = _0x40c1;
(function (_0xc5c2fe, _0x35ea31) {
    const _0x2b56bc = _0x40c1, _0x410459 = _0xc5c2fe();
    while (!![]) {
        try {
            const _0x36c2d0 = parseInt(_0x2b56bc(0x1a2)) / 0x1 + -parseInt(_0x2b56bc(0x1d3)) / 0x2 * (parseInt(_0x2b56bc(0x209)) / 0x3) + parseInt(_0x2b56bc(0x430)) / 0x4 + parseInt(_0x2b56bc(0x1f3)) / 0x5 + parseInt(_0x2b56bc(0x340)) / 0x6 * (parseInt(_0x2b56bc(0x453)) / 0x7) + -parseInt(_0x2b56bc(0x384)) / 0x8 + -parseInt(_0x2b56bc(0x22a)) / 0x9 * (-parseInt(_0x2b56bc(0x3f5)) / 0xa);
            if (_0x36c2d0 === _0x35ea31)
                break;
            else
                _0x410459['push'](_0x410459['shift']());
        } catch (_0x1a3a2a) {
            _0x410459['push'](_0x410459['shift']());
        }
    }
}(_0x4274, 0xe89b4), Object['defineProperty'](String[_0x49b003(0x34f)], 'capitalize', {
    'value': function () {
        const _0x5c4718 = _0x49b003, _0x210d44 = {
                'Npcan': function (_0x18594c, _0x154043) {
                    return _0x18594c + _0x154043;
                }
            };
        return _0x210d44[_0x5c4718(0x1db)](this[_0x5c4718(0x28b)](0x0)['toUpperCase'](), this['slice'](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = _0x49b003(0x1d6), game = _0x49b003(0x450), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = 'low', kenoRisk = _0x49b003(0x2f9), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = _0x49b003(0x1b5), result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'BetSide': _0x49b003(0x1b5),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x49b003(0x423))), wdbUI = _0x49b003(0x36e) + WDB_MODE + '\x20|\x20' + CASINO_GAME + _0x49b003(0x1d7) + WDB_HOME + '\x20|\x20' + location[_0x49b003(0x3d7)][_0x49b003(0x277)](_0x49b003(0x465), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', rangediceJsScript = '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}', plinkoLuaScript = _0x49b003(0x308), plinkoJsScript = '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a', kenoLuaScript = '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend', kenoJsScript = _0x49b003(0x20b);
function _0x4274() {
    const _0x3eb75e = [
        '\x0a\x20\x20\x20\x20wins=',
        'GKQKR',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'Qtfer',
        'GwRKe',
        'wmDYx',
        'cookie',
        'wdbMaxBalance',
        'oqyRS',
        'body',
        'Stop\x20on\x20',
        'dZtjb',
        'ctFfl',
        'createElement',
        'shift',
        'zNVcp',
        'vAXoe',
        'wdbCurrentStreak',
        'JyOwC',
        '<input\x20id=\x22bethigh',
        'amount',
        'wdbShow',
        'wdbSpeed',
        'betSide',
        'wdbWrapFunctions',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'offsetHeight',
        'NVPHj',
        'XYCyM',
        'uELkW',
        'fQJIZ',
        'toUTCString',
        'appendChild',
        'VyVJz',
        'uNjei',
        '$1=$1+$2\x20',
        'hostname',
        'resize',
        'aMKDu',
        '\x20to\x20win',
        'none',
        'ScSbF',
        'Xdnrd',
        'WCfpL',
        'DiLaf',
        'pbOIo',
        'wZdPe',
        'download',
        'wdbAdvancedMode',
        'advancedMultiOnLose',
        'updateStats\x20ok',
        'firstChild',
        'Stop\x20on\x20current\x20streak\x20',
        '</option>',
        'auQrN',
        'ADbjB',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'function\x20stop()\x0ajs.global:stop()\x0aend',
        'HxliO',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'click',
        'ZDDiA',
        'VNZzz',
        'BCavS',
        'dobet()',
        'OrCHK',
        '70GPHWpC',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        'uiqvU',
        'setTime',
        'mdazW',
        'position',
        'xRNHh',
        'VtRUp',
        'return\x20chance3',
        'AWlrr',
        'cxSWp',
        'closest',
        'QMJcA',
        'tItnI',
        'WbaAr',
        'hdnyz',
        'EwHeQ',
        'event',
        '\x0a\x20\x20\x20\x20winstreak=',
        'EPSILON',
        '\x20at\x20',
        'CVSKa',
        'NTdqX',
        'XQBto',
        'currency=\x22',
        'green',
        'antiquewhite',
        'vkssM',
        'bosMy',
        'rZtVs',
        'fLkhO',
        'maxRows',
        'function\x20resume()\x0ajs.global:resume()\x0aend',
        'keydown',
        'voRKF',
        'wkkjA',
        'fweKX',
        'HnGBx',
        'gFaxZ',
        'play',
        'wdbHighLoseStreak',
        'trim',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        'javascript',
        'split',
        'LmAMm',
        '/ching.mp3',
        'nVdsW',
        'advancedChance',
        'reset',
        'chance',
        'xBpvo',
        'jElAt',
        'EHKAK',
        'TEXTAREA',
        'TSHMn',
        'sqblN',
        'URL',
        'join',
        '514588TcnyPa',
        'block',
        'qiqby',
        'wdbHighBet',
        'deleteH',
        'jEHvF',
        'INPUT',
        'uXBTY',
        'tdahD',
        'awGby',
        'yGLAR',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'advancedBetHighOnProfit',
        'SurKh',
        'stopOnProfit',
        'CUcou',
        'oUITT',
        'mxmHM',
        'Xrtgj',
        ';path=/',
        'Chart',
        'MURZw',
        'parse',
        'CTiuA',
        'MGGcx',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'oUVgf',
        'oPOFA',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        'advancedBetHighOnLoseCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        'offsetWidth',
        'dice',
        'FXJwK',
        'evDei',
        '7yqWoHO',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'ZIWaN',
        'CWoih',
        'glhsP',
        '\x0a\x20\x20\x20\x20bethigh=',
        'tBVeT',
        'advanced',
        'CAmNu',
        'ESzFu',
        'YoaUU',
        'WZrmz',
        'advancedChanceOnWin',
        'gESWl',
        '$1=$1/$2\x20',
        'xHEZb',
        'sHQPo',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        'www.',
        'advancedBetHighOnProfitCheck',
        'MCBob',
        'imtSd',
        'lastChild',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'lWlUI',
        'xNtny',
        'EeWTi',
        '1|4|2|3|0',
        ',\x0a\x20\x20\x20\x20\x20\x20chance3=',
        'wdbOpenJSScript',
        'DATKT',
        'resetstatsOnProfit',
        'now',
        'backgroundColor',
        'ZSHiN',
        'pOUzJ',
        'UdGQm',
        'map',
        'rjgHw',
        'toFixed',
        'Sftpe',
        'dataPoints',
        'vjwiW',
        'khHdn',
        'theme',
        'XJeMt',
        'jzWXQ',
        'chance1',
        'xDzNa',
        'REYre',
        'Sknie',
        'QEqEd',
        'VHVFk',
        'EQzpa',
        'FtHDl',
        'updateLua\x20done',
        'Esspc',
        'BBvUB',
        'buKEy',
        'WADpi',
        'qMmcZ',
        'save',
        'aovuo',
        'wdbLog',
        'Qabat',
        'qNtyF',
        'AyDoK',
        'dGFHl',
        '#wdbSaveScriptButton',
        'NCntL',
        'gRnCJ',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        '#fff',
        'RVQGZ',
        'Profit',
        'innerHTML',
        'LWFaQ',
        'Chance4',
        '760503UcWmyX',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'wdbHistory',
        'bUWhl',
        'application/json',
        'YBTNU',
        'removeChild',
        'aoGFT',
        'advancedBaseBet',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'YLyvT',
        'stopOnProfitCheck',
        'advancedBetHighOnLose',
        'uWLLJ',
        'vwNdm',
        'VGuDF',
        '.wdb-stats\x20div\x20li',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'tagName',
        'between',
        'ssxOu',
        '#000',
        'return\x20bethigh',
        'wdbLUAMode',
        'gkRIj',
        'chance2',
        'bethigh',
        'yzaoV',
        'slice',
        'KOEyV',
        'whTnv',
        'querySelector',
        '\x0a\x20\x20\x20\x20chance2=',
        'wdbBets',
        'fromTextArea',
        'ViInU',
        'initLuaOk',
        'setValue',
        'xeDLX',
        'JdUyE',
        'dimgray',
        'ezfjN',
        'wdbWrapLog',
        'Uwmas',
        'HydFh',
        'forEach',
        'JLlev',
        'wdbBalance',
        'wdbWrapControl',
        '700LXgLQF',
        'then',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'lua',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'ZNcSQ',
        'pSbxG',
        'KHrfj',
        'Npcan',
        'height',
        'UGfqY',
        'ztFEj',
        'zNEub',
        '\x0a\x20\x20\x20\x20chance=',
        'vsGBK',
        '_darkMode',
        'MakuY',
        'xSXiT',
        'THjZm',
        'roll',
        'lxemr',
        '\x20bet',
        'advancedChanceOnWinCheck',
        ',\x0a\x20\x20\x20\x20\x20\x20chance=',
        'FCXRk',
        'keno',
        'text',
        'borderColor',
        'IiyLG',
        'onmouseup',
        'MIHQO',
        'head',
        '2213145WzKEmf',
        'DTDxw',
        'bknca',
        'hdpOr',
        'nuQNJ',
        'djeET',
        'loadCSS',
        'advancedMultiOnWin',
        'prepend',
        'oHFvJ',
        'createObjectURL',
        'innerWidth',
        'USgYj',
        '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        '350px',
        'qzrZP',
        'wdbResumeButton',
        'wdbLosses',
        'OnXwP',
        'wdb-bot-position',
        '3|2|1|8|6|5|0|4|7',
        '\x0a\x20\x20\x20\x20win=',
        '7740EECNEw',
        'RVQfI',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'showInfo\x20OK',
        'SSBAa',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'wdbMinBalance',
        'nMMtT',
        'lineColor',
        'between2',
        ',\x0a\x20\x20\x20\x20\x20\x20Amount=',
        'qsxHU',
        'XYrVx',
        '_maxRows',
        'getItem',
        'qDUcX',
        'dMfuS',
        'clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end',
        'style',
        'Chance3',
        'iegKZ',
        'offsetTop',
        'CbGti',
        'chance3',
        'black',
        'light1',
        '.json',
        'QWaJc',
        'line',
        'OiQmC',
        'hide',
        'casino=\x22',
        '538839NADwUK',
        'wdbScriptBoxJS',
        'message',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        '/canvasjs.min.js',
        'oyNmh',
        'hVhxv',
        'zFEpx',
        'return\x20plinkoRow',
        'handleAdvanced\x20ok',
        'XaQFc',
        'wdbPercentProfit',
        'stopOnBalance',
        'EzsME',
        'wdbJSMode',
        'QqMts',
        'advancedStopOnWins',
        '1000px',
        'knVfl',
        'ppYqp',
        'setOption',
        'KrNuS',
        'checked',
        'wdbTime',
        'xedhh',
        'wdbMenuMode',
        'NcmUo',
        'tlLjb',
        'activeElement',
        'div',
        'pwaaX',
        'wPdHu',
        'Wbvjd',
        'ztFir',
        'stopOnBalanceCheck',
        'kqoHd',
        'mGBTD',
        'response',
        '\x0a\x20\x20\x20\x20chance3=',
        'start',
        'wdbWrapTips',
        'oYOGR',
        'DRhTi',
        'FGpyB',
        '1|5|2|4|0|3',
        'wdbChart',
        'SEPQf',
        'darkMode',
        'IEpIy',
        'Result',
        '\x0a\x20\x20\x20\x20maxprofit=',
        'FfTeW',
        'FqJSh',
        'VMQjr',
        'QaSdQ',
        'fclmo',
        'JWLjl',
        'nEOOD',
        'mEbfc',
        '\x0a\x20\x20\x20\x20wagered=',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'sfAOr',
        'sFymq',
        'OEBuE',
        'DtOPF',
        '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20',
        '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'KuBik',
        'KcCEk',
        'high',
        'kenoNumbers',
        'red',
        'return\x20currency',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'NhsiB',
        'Betting\x20',
        'replace',
        'Connected',
        'pEwEU',
        'wdbWrapHistory',
        'BxZes',
        '0:0:0:0',
        'return\x20plinkoRisk',
        'wdbScriptBoxLUA',
        'ulrJM',
        'querySelectorAll',
        'ixnqo',
        'FNyRP',
        'oBIvs',
        'EuQnG',
        'NTZMy',
        'advancedMultiOnLoseCheck',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
        'lmFrz',
        'EsbbF',
        'BWMCY',
        'charAt',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'HCPDr',
        'substring',
        '\x20to\x20win,\x20',
        'clientX',
        'vlyUg',
        'clientY',
        'Chance1',
        'gGJIa',
        'wdbProfit',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        'CQRmr',
        'calc(100vh\x20-\x2060px)',
        'advancedChanceOnWinBets',
        'wdbRunningScript',
        'USkKG',
        'remove',
        'Chance2',
        'wYNup',
        'wdbWrapPercentProfit',
        'resetChart',
        'wdbShowMode',
        'BrKyb',
        'isContentEditable',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'advancedStopOnWinsCheck',
        'ZtQLP',
        'Wvamm',
        'jwSgM',
        'Tips',
        '/fengari-web.min.js',
        'TAWYt',
        'tiDLm',
        'qojTP',
        'lUJDe',
        'wdbWrap',
        'Bisco',
        'white',
        'href',
        'text/plain;\x20charset=utf-8',
        '#ffc0cb',
        'return\x20scriptname',
        'nFkVD',
        'round',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance1=',
        'wdbOpenLUAScript',
        'WxZqc',
        'ONdBj',
        'sPeko',
        'exNoL',
        '0123456789abcdef',
        'color',
        'insertBefore',
        'aATsb',
        'innerText',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        '0|2|1|4|3',
        'xwAHU',
        'bCZpc',
        'filter',
        'hbNrB',
        'FqAoh',
        'xRAXM',
        'nwpDZ',
        'wdbWrapInitializing',
        'toLowerCase',
        'FuZEf',
        '4|0|3|2|1',
        'wdbMenuCoin',
        'wdbWrapVariables',
        'preventDefault',
        'Lnigz',
        'SUnRv',
        'render',
        'oguvk',
        'toString',
        'ZrnXb',
        'getElementById',
        'random',
        'setItem',
        'ibsNA',
        'JGpUr',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'advancedStopOnLoseCheck',
        '\x20|\x20',
        'wtCzW',
        'plinko',
        'QwiLY',
        'mEJGt',
        'HSFGR',
        'LiOGh',
        '\x0a\x20\x20\x20\x20balance=',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
        'LBRDZ',
        'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
        'Script\x20Name:\x20',
        'wdbMinProfit',
        'vnjxD',
        'FHiDU',
        'GTnao',
        'disabled',
        'ZSkyt',
        'advancedStopRollNumberCheck',
        'BUpPY',
        'wdbMaxRows',
        'LTRBN',
        'return\x20nextbet',
        ',\x0a\x20\x20\x20\x20\x20\x20chance2=',
        'files',
        'classic',
        'gKdhz',
        'BkjwX',
        'BPatr',
        'dark1',
        'wdbHeader',
        'ioMiP',
        'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
        '\x0a\x20\x20\x20\x20currentstreak=',
        'qHaip',
        'nonce',
        'TRRZd',
        '190px',
        'lhnZO',
        'lTfwg',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'wdbStartButton',
        'addEventListener',
        'ZUOJm',
        'darcula',
        'bjVgS',
        'wfNpa',
        'default',
        'uTCBx',
        'hwKuz',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'SvsrP',
        'raUTi',
        'wdbMaxProfit',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance2=',
        'floor',
        'PaTur',
        'UKEya',
        'Sgiik',
        'UniwD',
        'VSrDk',
        'oTTvS',
        'ZYTeT',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'advancedBetHighOnWin',
        'gBOaJ',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'ijcAz',
        '\x0a\x20\x20\x20\x20profit=',
        'hKpkU',
        'log-',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'cRvrJ',
        'OvPXF',
        'xwcxW',
        '#91f190',
        'Nonce',
        'fixed',
        'scriptName',
        'profit',
        'FSvJc',
        'rangedice',
        'QRLyh',
        'value',
        'expires=',
        'getValue',
        'stop',
        'wdbStats',
        '380px',
        'return\x20betSide',
        'FNXZb',
        'length',
        '6|5|1|2|3|0|4',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'chance4',
        '7137246KcDNJE',
        'indexOf',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'containerId',
        '\x20Hits',
        'load',
        'blEDz',
        'Stop\x20on\x20balance\x20',
        'change',
        'DAtNm',
        'kZNva',
        'BQzhp',
        'HbytV',
        'Gyejh',
        'prototype',
        'top',
        '\x0a\x20\x20\x20\x20chance4=',
        'jbYwU',
        '#wdbHistory',
        '\x0a\x20\x20\x20\x20bets=',
        'HpxmH',
        'LqwEQ',
        'Mode',
        'DPlSZ',
        'stringify',
        'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
        'xUNRm',
        'yRFzM',
        '0.00',
        'zrXBI',
        '\x0a\x20\x20\x20\x20losestreak=',
        'sdFsl',
        'zpJbm',
        '%\x20chance\x20to\x20win,\x20',
        'MNfOO',
        '#wdbOpenScript',
        'nkWHQ',
        'uBoSt',
        'BbLXw',
        'gSkGP',
        'wdbHighLose',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'wdbWagered',
        'show',
        'dhkSt',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'getTime',
        'IwEce',
        'resetstatsOnProfitCheck',
        'Ivunt',
        'knHCj',
        'toUpperCase',
        'push',
        'VIaGq',
        'JuwoE',
        'display',
        'chart',
        'wdbHighWinStreak',
        'QaQmg',
        'ineJl',
        'wdbPercentWagered',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        'wdbToggleLive',
        'dps',
        'children',
        'options',
        '8677288VQVpDY',
        'wdbWins',
        'onmousemove',
        'QBsxV',
        'LeuKu',
        'wdbLoader\x20ok',
        'KOiAP',
        'advancedBetHighOnWinCheck',
        'wdbStopOnWinButton',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        'Functions',
        'advancedMultiOnLoseBets',
        'wrhKd',
        'return\x20chance1',
        'lEfqx',
        'target',
        'wdb',
        'PxKkj',
        'GNeTg',
        'MdGwj',
        'result',
        '#2a2a2a',
        'left',
        'data',
        '5px',
        'wAoLw',
        'flex',
        'clear',
        'width',
        'scriptname\x20=\x20\x22\x22',
        'UDjuK',
        'LHrbv',
        '\x20lose',
        'offsetLeft',
        'woZaA',
        'IrzBz',
        'wdbFooter',
        'NeaSv',
        '$1=$1*$2\x20',
        'nmtRh',
        'mcqsQ',
        'FzMOX',
        'ineBJ',
        'tAkJM',
        'XfuTs',
        'advancedChanceOnLoseCheck',
        'YwgYe'
    ];
    _0x4274 = function () {
        return _0x3eb75e;
    };
    return _0x4274();
}
function exportLog() {
    const _0x588f82 = _0x49b003, _0x11aa4f = { 'xSXiT': _0x588f82(0x1a6) }, _0x396ae4 = JSON[_0x588f82(0x359)](fullLogs), _0x58461e = document[_0x588f82(0x3c0)]('a');
    _0x58461e['href'] = window[_0x588f82(0x42e)][_0x588f82(0x1fd)](new Blob([_0x396ae4], { 'type': _0x11aa4f[_0x588f82(0x1e4)] })), _0x58461e[_0x588f82(0x3e2)] = _0x588f82(0x327) + Date[_0x588f82(0x174)]()[_0x588f82(0x2d7)]()[_0x588f82(0x1be)](-0x6) + _0x588f82(0x224), _0x58461e[_0x588f82(0x3ef)]();
}
class Chart {
    constructor(_0x402bf5, _0x54be3d = ![], _0x33e584 = 0x64) {
        const _0x3fdab5 = _0x49b003, _0x1b9f14 = {
                'pSbxG': _0x3fdab5(0x2fd),
                'ryyPI': _0x3fdab5(0x223)
            };
        this[_0x3fdab5(0x344)] = _0x402bf5, this[_0x3fdab5(0x1e2)] = _0x54be3d, this[_0x3fdab5(0x217)] = _0x33e584, this[_0x3fdab5(0x381)] = [{
                'x': 0x0,
                'y': 0x0
            }], this[_0x3fdab5(0x379)] = new CanvasJS[(_0x3fdab5(0x444))](_0x402bf5, {
            'theme': _0x54be3d ? _0x1b9f14[_0x3fdab5(0x1d9)] : _0x1b9f14['ryyPI'],
            'axisY': { 'includeZero': ![] },
            'data': [{
                    'type': _0x3fdab5(0x226),
                    'markerSize': 0x0,
                    'dataPoints': this[_0x3fdab5(0x381)]
                }]
        }), this[_0x3fdab5(0x379)][_0x3fdab5(0x2d5)]();
    }
    set [_0x49b003(0x414)](_0x575a9a) {
        const _0x30591e = _0x49b003;
        this[_0x30591e(0x217)] = _0x575a9a;
    }
    get [_0x49b003(0x414)]() {
        const _0xf8f3b = _0x49b003;
        return this[_0xf8f3b(0x217)];
    }
    set [_0x49b003(0x259)](_0x47f32d) {
        const _0x179fb1 = _0x49b003, _0x476343 = {
                'NcmUo': _0x179fb1(0x2fd),
                'ulrJM': _0x179fb1(0x223)
            };
        this['_darkMode'] = _0x47f32d, this[_0x179fb1(0x379)]['options'][_0x179fb1(0x180)] = _0x47f32d ? _0x476343[_0x179fb1(0x244)] : _0x476343[_0x179fb1(0x27f)], this[_0x179fb1(0x379)][_0x179fb1(0x2d5)]();
    }
    get ['darkMode']() {
        return this['_darkMode'];
    }
    ['updateChart'](_0x226226, _0x14a15b, _0x244cc8) {
        const _0xc1ee49 = _0x49b003, _0x1ab14c = {
                'PaTur': function (_0xaea1aa, _0x5e67ef) {
                    return _0xaea1aa - _0x5e67ef;
                }
            };
        this[_0xc1ee49(0x381)][_0xc1ee49(0x375)]({
            'x': _0x226226,
            'y': _0x14a15b,
            'lineColor': _0x244cc8
        });
        if (this[_0xc1ee49(0x381)][_0xc1ee49(0x33c)] > this[_0xc1ee49(0x217)])
            this[_0xc1ee49(0x381)][_0xc1ee49(0x3c1)]();
        if (this['dps'][_0x1ab14c[_0xc1ee49(0x319)](this[_0xc1ee49(0x381)]['length'], 0x2)])
            this[_0xc1ee49(0x381)][this[_0xc1ee49(0x381)][_0xc1ee49(0x33c)] - 0x2][_0xc1ee49(0x212)] = _0x244cc8;
        this['chart'][_0xc1ee49(0x2d5)]();
    }
    [_0x49b003(0x2a0)]() {
        const _0x487e32 = _0x49b003;
        this[_0x487e32(0x381)] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart'][_0x487e32(0x383)][_0x487e32(0x39b)][0x0][_0x487e32(0x17d)] = this[_0x487e32(0x381)], this['chart']['render']();
    }
}
function changeMaxRows() {
    const _0x28f0d3 = _0x49b003, _0x3fc284 = {
            'vipAR': _0x28f0d3(0x2cf),
            'CTiuA': function (_0x1de516) {
                return _0x1de516();
            },
            'khHdn': function (_0xb22e16) {
                return _0xb22e16();
            },
            'gESWl': function (_0x57d15a, _0x3b587f) {
                return _0x57d15a(_0x3b587f);
            },
            'sNIFL': _0x28f0d3(0x2f4)
        }, _0x5ebc9e = _0x3fc284['vipAR'][_0x28f0d3(0x421)]('|');
    let _0x4ce0ce = 0x0;
    while (!![]) {
        switch (_0x5ebc9e[_0x4ce0ce++]) {
        case '0':
            chart[_0x28f0d3(0x414)] = maxRows;
            continue;
        case '1':
            _0x3fc284[_0x28f0d3(0x447)](resetlog);
            continue;
        case '2':
            resethistory();
            continue;
        case '3':
            _0x3fc284[_0x28f0d3(0x17f)](resetchart);
            continue;
        case '4':
            maxRows = _0x3fc284[_0x28f0d3(0x460)](Number, document['getElementById'](_0x3fc284['sNIFL'])['value']);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x371ea4 = _0x49b003, _0x4e72af = {
            'vnjxD': _0x371ea4(0x399),
            'VHVFk': '#fff',
            'ibsNA': _0x371ea4(0x1b7),
            'znPjA': _0x371ea4(0x394),
            'vsGBK': _0x371ea4(0x2fe),
            'LmAMm': _0x371ea4(0x2a4),
            'rhDQS': _0x371ea4(0x449),
            'IuNmp': _0x371ea4(0x1b2),
            'pbOIo': _0x371ea4(0x207),
            'wAoLw': _0x371ea4(0x30c),
            'THjZm': _0x371ea4(0x180),
            'LREXj': _0x371ea4(0x1ca),
            'hOSIf': _0x371ea4(0x40f),
            'uBoSt': _0x371ea4(0x30f),
            'BrKyb': function (_0x238e50) {
                return _0x238e50();
            }
        };
    darkMode = !darkMode, chart[_0x371ea4(0x259)] = darkMode;
    const _0x113b26 = document[_0x371ea4(0x2d9)](_0x4e72af['znPjA']), _0x72ce64 = document[_0x371ea4(0x2d9)](_0x4e72af[_0x371ea4(0x1e1)]), _0xacadfc = document[_0x371ea4(0x280)](_0x4e72af[_0x371ea4(0x422)]), _0x39604f = document[_0x371ea4(0x280)](_0x4e72af['rhDQS']), _0x44c2cf = document[_0x371ea4(0x280)](_0x4e72af['IuNmp']);
    if (darkMode) {
        const _0x4ea836 = _0x4e72af[_0x371ea4(0x3e0)][_0x371ea4(0x421)]('|');
        let _0x26e3f5 = 0x0;
        while (!![]) {
            switch (_0x4ea836[_0x26e3f5++]) {
            case '0':
                _0xacadfc['forEach'](_0x26506f => {
                    const _0x25eb02 = _0x371ea4;
                    _0x26506f['style']['backgroundColor'] = _0x4e72af[_0x25eb02(0x2ed)], _0x26506f[_0x25eb02(0x21c)][_0x25eb02(0x2bf)] = _0x4e72af['VHVFk'];
                });
                continue;
            case '1':
                _0x113b26[_0x371ea4(0x21c)][_0x371ea4(0x1ee)] = '#2a2a2a';
                continue;
            case '2':
                _0x113b26[_0x371ea4(0x21c)][_0x371ea4(0x2bf)] = _0x4e72af[_0x371ea4(0x188)];
                continue;
            case '3':
                _0x113b26['style'][_0x371ea4(0x175)] = _0x371ea4(0x399);
                continue;
            case '4':
                _0x39604f[_0x371ea4(0x1cf)](_0x283e35 => _0x283e35['style'][_0x371ea4(0x2bf)] = _0x371ea4(0x19c));
                continue;
            case '5':
                jsEditor[_0x371ea4(0x23e)](_0x371ea4(0x180), _0x4e72af[_0x371ea4(0x39d)]);
                continue;
            case '6':
                luaEditor[_0x371ea4(0x23e)](_0x4e72af[_0x371ea4(0x1e5)], _0x4e72af['wAoLw']);
                continue;
            case '7':
                _0x44c2cf['forEach'](_0xabcbbe => _0xabcbbe['style'][_0x371ea4(0x2bf)] = _0x371ea4(0x19c));
                continue;
            case '8':
                _0x72ce64[_0x371ea4(0x21c)]['backgroundColor'] = _0x4e72af['LREXj'];
                continue;
            }
            break;
        }
    } else
        _0x113b26['style'][_0x371ea4(0x175)] = _0x371ea4(0x19c), _0x113b26[_0x371ea4(0x21c)][_0x371ea4(0x2bf)] = _0x4e72af[_0x371ea4(0x2dc)], _0x113b26[_0x371ea4(0x21c)]['borderColor'] = _0x4e72af[_0x371ea4(0x188)], _0x72ce64[_0x371ea4(0x21c)]['backgroundColor'] = _0x4e72af['hOSIf'], luaEditor[_0x371ea4(0x23e)](_0x4e72af[_0x371ea4(0x1e5)], _0x4e72af[_0x371ea4(0x366)]), jsEditor['setOption'](_0x371ea4(0x180), _0x4e72af[_0x371ea4(0x366)]), _0xacadfc['forEach'](_0x6185a7 => {
            const _0x187b87 = _0x371ea4;
            _0x6185a7[_0x187b87(0x21c)][_0x187b87(0x175)] = _0x4e72af[_0x187b87(0x188)], _0x6185a7['style'][_0x187b87(0x2bf)] = _0x4e72af['ibsNA'];
        }), _0x39604f[_0x371ea4(0x1cf)](_0x54bf55 => _0x54bf55['style'][_0x371ea4(0x2bf)] = _0x371ea4(0x1b7)), _0x44c2cf['forEach'](_0x3339c1 => _0x3339c1[_0x371ea4(0x21c)]['color'] = '#000');
    _0x4e72af[_0x371ea4(0x2a2)](updateStats);
}
let previousPosition = {
    'top': _0x49b003(0x39c),
    'left': _0x49b003(0x39c),
    'position': _0x49b003(0x32e)
};
function loadSavedPosition() {
    const _0x33c63b = _0x49b003, _0x368757 = { 'ssxOu': _0x33c63b(0x206) }, _0x49b4da = localStorage[_0x33c63b(0x218)](_0x368757[_0x33c63b(0x1b6)]);
    if (_0x49b4da)
        try {
            const _0x495182 = JSON[_0x33c63b(0x446)](_0x49b4da);
            _0x495182['top'] && _0x495182[_0x33c63b(0x39a)] && (previousPosition = _0x495182);
        } catch (_0x3388a4) {
        }
}
function savePosition() {
    const _0x20d26f = _0x49b003, _0x127ca4 = { 'YBTNU': 'wdb-bot-position' };
    localStorage[_0x20d26f(0x2db)](_0x127ca4[_0x20d26f(0x1a7)], JSON[_0x20d26f(0x359)](previousPosition));
}
function toggleMinimalBot(_0x53995a) {
    const _0x584fd3 = _0x49b003, _0x506621 = {
            'rQQMo': 'wdbMain',
            'PawgA': _0x584fd3(0x3a8),
            'raUTi': _0x584fd3(0x394),
            'kqoHd': function (_0x179afb, _0x209101) {
                return _0x179afb === _0x209101;
            },
            'QwiLY': _0x584fd3(0x39c),
            'hbNrB': function (_0x32dc11) {
                return _0x32dc11();
            },
            'Sknie': _0x584fd3(0x3db),
            'SurKh': _0x584fd3(0x201),
            'Sftpe': function (_0xf6e74e, _0x160b7e) {
                return _0xf6e74e / _0x160b7e;
            },
            'tYslQ': function (_0x14fb61, _0x446d0b) {
                return _0x14fb61 - _0x446d0b;
            },
            'nuQNJ': _0x584fd3(0x298),
            'vAXoe': 'fixed',
            'WCfpL': _0x584fd3(0x23b),
            'ZIWaN': _0x584fd3(0x431)
        }, _0x165c58 = document[_0x584fd3(0x2d9)](_0x506621['rQQMo']), _0xcc4540 = document[_0x584fd3(0x2d9)](_0x506621['PawgA']), _0x23930e = document['getElementById'](_0x506621[_0x584fd3(0x315)]);
    if (_0x506621[_0x584fd3(0x24d)](_0x53995a[_0x584fd3(0x2c2)], '▼')) {
        const _0x1385ae = window['getComputedStyle'](_0x23930e);
        previousPosition = {
            'top': _0x23930e['style'][_0x584fd3(0x350)] || _0x1385ae[_0x584fd3(0x350)] || _0x506621[_0x584fd3(0x2e3)],
            'left': _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x39a)] || _0x1385ae[_0x584fd3(0x39a)] || _0x506621[_0x584fd3(0x2e3)],
            'position': _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x3fa)] || _0x1385ae['position'] || _0x584fd3(0x32e)
        }, _0x506621[_0x584fd3(0x2c8)](savePosition), _0x165c58[_0x584fd3(0x21c)][_0x584fd3(0x378)] = _0x506621[_0x584fd3(0x186)], _0xcc4540[_0x584fd3(0x21c)][_0x584fd3(0x378)] = _0x506621[_0x584fd3(0x186)], _0x23930e['style']['width'] = _0x506621[_0x584fd3(0x43d)];
        const _0x5a5881 = window[_0x584fd3(0x1fe)], _0x1ea98c = 0x15e, _0x35755d = _0x506621[_0x584fd3(0x17c)](_0x506621['tYslQ'](_0x5a5881, _0x1ea98c), 0x2);
        _0x23930e[_0x584fd3(0x21c)]['top'] = _0x506621[_0x584fd3(0x1f7)], _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x39a)] = _0x35755d + 'px', _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x3fa)] = _0x506621[_0x584fd3(0x3c3)], _0x53995a[_0x584fd3(0x2c2)] = '▲';
    } else {
        const _0x23bb18 = _0x584fd3(0x33d)[_0x584fd3(0x421)]('|');
        let _0x13b48d = 0x0;
        while (!![]) {
            switch (_0x23bb18[_0x13b48d++]) {
            case '0':
                _0x23930e['style'][_0x584fd3(0x3fa)] = previousPosition[_0x584fd3(0x3fa)];
                continue;
            case '1':
                _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x3a0)] = _0x506621[_0x584fd3(0x3de)];
                continue;
            case '2':
                _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x350)] = previousPosition['top'];
                continue;
            case '3':
                _0x23930e[_0x584fd3(0x21c)][_0x584fd3(0x39a)] = previousPosition[_0x584fd3(0x39a)];
                continue;
            case '4':
                _0x53995a[_0x584fd3(0x2c2)] = '▼';
                continue;
            case '5':
                _0xcc4540['style'][_0x584fd3(0x378)] = _0x506621[_0x584fd3(0x455)];
                continue;
            case '6':
                _0x165c58['style'][_0x584fd3(0x378)] = _0x584fd3(0x431);
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x339435) {
    const _0xda5aea = _0x49b003, _0x5b77a3 = {
            'qWonF': _0xda5aea(0x1d2),
            'hwKuz': function (_0x1e348c, _0x6834cd) {
                return _0x1e348c === _0x6834cd;
            },
            'ugupM': _0xda5aea(0x39e)
        }, _0x325117 = document[_0xda5aea(0x2d9)](_0x5b77a3['qWonF']);
    _0x5b77a3[_0xda5aea(0x311)](_0x339435[_0xda5aea(0x2c2)], '▲') ? (_0x325117[_0xda5aea(0x21c)][_0xda5aea(0x378)] = 'none', _0x339435['innerText'] = '▼') : (_0x325117[_0xda5aea(0x21c)][_0xda5aea(0x378)] = _0x5b77a3['ugupM'], _0x339435[_0xda5aea(0x2c2)] = '▲');
}
function drawSelectCoin() {
    const _0x1b5943 = _0x49b003, _0x581f7e = {
            'ZNcSQ': 'wdbMenuCoin',
            'QUgcS': function (_0x352480, _0x29f89c) {
                return _0x352480(_0x29f89c);
            }
        }, _0x1d3897 = coins[_0x1b5943(0x179)](_0x4c6ad6 => '<option\x20value=\x22' + _0x4c6ad6 + '\x22>' + _0x4c6ad6 + _0x1b5943(0x3e8))[_0x1b5943(0x42f)]('');
    document[_0x1b5943(0x2d9)](_0x581f7e[_0x1b5943(0x1d8)])['innerHTML'] = _0x1d3897, currency = _0x581f7e['QUgcS'](String, coin)[_0x1b5943(0x2cd)](), fengari[_0x1b5943(0x346)](_0x1b5943(0x40d) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x403587 = _0x49b003, _0x1c5baa = {
            'EeWTi': function (_0x5f2481, _0x42243a) {
                return _0x5f2481 - _0x42243a;
            },
            'zObTt': function (_0x548152, _0x529f2c) {
                return _0x548152 + _0x529f2c;
            },
            'BCavS': 'wdbToggleMinimal',
            'MNfOO': function (_0x36269e, _0xd1d5ed) {
                return _0x36269e === _0xd1d5ed;
            },
            'NKBHB': function (_0x32324a, _0x43dd04) {
                return _0x32324a === _0x43dd04;
            },
            'iYPQa': _0x403587(0x42b),
            'YLyvT': function (_0x338c9e, _0x5f49e2) {
                return _0x338c9e / _0x5f49e2;
            },
            'fweKX': function (_0x5e0f91, _0x277047) {
                return _0x5e0f91 + _0x277047;
            },
            'BPatr': function (_0x464460, _0x5c2a2d) {
                return _0x464460 + _0x5c2a2d;
            },
            'gNLDd': function (_0x58d156, _0x586cac) {
                return _0x58d156 === _0x586cac;
            },
            'jbYwU': function (_0x533958, _0x2ad392) {
                return _0x533958 - _0x2ad392;
            },
            'xNtny': function (_0x28245f, _0xb76515) {
                return _0x28245f + _0xb76515;
            },
            'lxemr': _0x403587(0x247),
            'ADbjB': _0x403587(0x2af),
            'wrhKd': function (_0x37a669) {
                return _0x37a669();
            },
            'QaSdQ': 'wdbHeader',
            'bgIjj': _0x403587(0x416),
            'HpxmH': _0x403587(0x3d8),
            'wkkjA': 'wdbWrapLicenseBox',
            'nmbtC': 'wdbWrapInitializing',
            'tBVeT': _0x403587(0x27e),
            'voRKF': 'default',
            'xeDLX': _0x403587(0x420),
            'BUpPY': _0x403587(0x3db),
            'sFymq': _0x403587(0x3e3),
            'VGuDF': _0x403587(0x1cc),
            'NVPHj': _0x403587(0x2d1),
            'rjgHw': _0x403587(0x252),
            'ioMiP': 'click',
            'SEPQf': _0x403587(0x349),
            'gFaxZ': _0x403587(0x171),
            'BbLXw': 'createUIOk'
        }, _0x321bbd = document[_0x403587(0x3c0)](_0x1c5baa[_0x403587(0x1e7)]);
    _0x321bbd['id'] = _0x1c5baa[_0x403587(0x3ea)], _0x321bbd[_0x403587(0x19f)] = wdbUI, document[_0x403587(0x3bc)][_0x403587(0x1fb)](_0x321bbd);
    const _0x1c3d9b = document[_0x403587(0x2d9)](_0x403587(0x394));
    let _0x46494c = 0x0, _0x338134 = 0x0, _0x1f6717 = 0x0, _0xd58ece = 0x0;
    _0x1c5baa[_0x403587(0x390)](loadSavedPosition), _0x1c3d9b[_0x403587(0x21c)][_0x403587(0x350)] = previousPosition['top'], _0x1c3d9b['style'][_0x403587(0x39a)] = previousPosition[_0x403587(0x39a)], _0x1c3d9b[_0x403587(0x21c)]['position'] = previousPosition[_0x403587(0x3fa)];
    function _0x467da3(_0x5a0e73) {
        const _0x20bad5 = _0x403587, _0x277763 = _0x20bad5(0x256)[_0x20bad5(0x421)]('|');
        let _0x4de20e = 0x0;
        while (!![]) {
            switch (_0x277763[_0x4de20e++]) {
            case '0':
                document['onmouseup'] = _0x252cf0;
                continue;
            case '1':
                _0x5a0e73 = _0x5a0e73 || window[_0x20bad5(0x406)];
                continue;
            case '2':
                _0x1f6717 = _0x5a0e73['clientX'];
                continue;
            case '3':
                document[_0x20bad5(0x386)] = _0x206c65;
                continue;
            case '4':
                _0xd58ece = _0x5a0e73['clientY'];
                continue;
            case '5':
                _0x5a0e73[_0x20bad5(0x2d2)]();
                continue;
            }
            break;
        }
    }
    function _0x206c65(_0x35e087) {
        const _0x4f5eb4 = _0x403587;
        _0x35e087 = _0x35e087 || window['event'], _0x35e087[_0x4f5eb4(0x2d2)](), _0x46494c = _0x1c5baa['EeWTi'](_0x1f6717, _0x35e087[_0x4f5eb4(0x290)]), _0x338134 = _0xd58ece - _0x35e087['clientY'], _0x1f6717 = _0x35e087['clientX'], _0xd58ece = _0x35e087[_0x4f5eb4(0x292)];
        let _0x23ec1e = _0x1c5baa['EeWTi'](_0x1c3d9b[_0x4f5eb4(0x21f)], _0x338134), _0x25d9f5 = _0x1c5baa[_0x4f5eb4(0x16e)](_0x1c3d9b[_0x4f5eb4(0x3a5)], _0x46494c);
        _0x1c3d9b[_0x4f5eb4(0x21c)][_0x4f5eb4(0x350)] = _0x23ec1e + 'px', _0x1c3d9b[_0x4f5eb4(0x21c)]['left'] = _0x1c5baa['zObTt'](_0x25d9f5, 'px');
    }
    function _0x252cf0() {
        const _0x50374d = _0x403587, _0x1b8492 = document['getElementById'](_0x1c5baa[_0x50374d(0x3f2)]);
        if (_0x1b8492 && _0x1c5baa[_0x50374d(0x363)](_0x1b8492['innerText'], '▼')) {
            const _0x3b8583 = window['getComputedStyle'](_0x1c3d9b);
            previousPosition[_0x50374d(0x350)] = _0x1c3d9b['style'][_0x50374d(0x350)] || _0x3b8583[_0x50374d(0x350)], previousPosition[_0x50374d(0x39a)] = _0x1c3d9b[_0x50374d(0x21c)][_0x50374d(0x39a)] || _0x3b8583['left'], savePosition();
        }
        document[_0x50374d(0x1f0)] = null, document[_0x50374d(0x386)] = null;
    }
    document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x260)])['onmousedown'] = _0x467da3, document['addEventListener'](_0x1c5baa['bgIjj'], function (_0xe61c55) {
        const _0x20236a = _0x403587;
        if (_0x1c5baa[_0x20236a(0x363)](_0xe61c55['key']['toLowerCase'](), 'w')) {
            const _0x36d58e = document[_0x20236a(0x246)], _0x4f8349 = _0x1c5baa[_0x20236a(0x363)](_0x36d58e[_0x20236a(0x1b4)], _0x20236a(0x436)) || _0x1c5baa['NKBHB'](_0x36d58e[_0x20236a(0x1b4)], _0x1c5baa['iYPQa']) || _0x36d58e[_0x20236a(0x2a3)] || _0x36d58e[_0x20236a(0x400)]('.CodeMirror');
            if (!_0x4f8349) {
                const _0x487bb0 = _0x1c5baa[_0x20236a(0x16e)](window['innerHeight'], _0x1c3d9b[_0x20236a(0x3cd)]) / 0x2, _0xcc0f67 = _0x1c5baa[_0x20236a(0x1ac)](_0x1c5baa['EeWTi'](window[_0x20236a(0x1fe)], _0x1c3d9b[_0x20236a(0x44f)]), 0x2);
                _0x1c3d9b[_0x20236a(0x21c)][_0x20236a(0x350)] = _0x1c5baa[_0x20236a(0x419)](_0x487bb0, 'px'), _0x1c3d9b[_0x20236a(0x21c)][_0x20236a(0x39a)] = _0x1c5baa[_0x20236a(0x2fc)](_0xcc0f67, 'px');
                const _0x232ca3 = document['getElementById'](_0x1c5baa['BCavS']);
                _0x232ca3 && _0x232ca3[_0x20236a(0x2c2)] === '▼' && (previousPosition[_0x20236a(0x350)] = _0x1c3d9b[_0x20236a(0x21c)][_0x20236a(0x350)], previousPosition[_0x20236a(0x39a)] = _0x1c3d9b[_0x20236a(0x21c)][_0x20236a(0x39a)], savePosition());
            }
        }
    }), window[_0x403587(0x30a)](_0x1c5baa[_0x403587(0x355)], function () {
        const _0x256faa = _0x403587, _0x4ef683 = document[_0x256faa(0x2d9)](_0x1c5baa[_0x256faa(0x3f2)]);
        if (_0x4ef683 && _0x1c5baa['gNLDd'](_0x4ef683[_0x256faa(0x2c2)], '▲')) {
            const _0x59c71b = window['innerWidth'], _0x1a0d3d = 0x15e, _0x433e1b = _0x1c5baa[_0x256faa(0x352)](_0x59c71b, _0x1a0d3d) / 0x2;
            _0x1c3d9b[_0x256faa(0x21c)][_0x256faa(0x39a)] = _0x1c5baa[_0x256faa(0x46d)](_0x433e1b, 'px');
        }
    });
    if (document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x418)]))
        document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x418)])['remove']();
    if (document[_0x403587(0x2d9)](_0x403587(0x2cc)))
        document[_0x403587(0x2d9)](_0x1c5baa['nmbtC'])['remove']();
    luaEditor = CodeMirror[_0x403587(0x1c4)](document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x459)]), {
        'theme': _0x1c5baa[_0x403587(0x417)],
        'mode': _0x403587(0x1d6),
        'lineNumbers': !![]
    }), luaEditor[_0x403587(0x191)](), jsEditor = CodeMirror[_0x403587(0x1c4)](document[_0x403587(0x2d9)](_0x403587(0x22b)), {
        'theme': _0x1c5baa[_0x403587(0x417)],
        'mode': _0x1c5baa[_0x403587(0x1c8)],
        'lineNumbers': !![]
    }), jsEditor['save'](), document[_0x403587(0x2d9)](_0x403587(0x238))[_0x403587(0x21c)][_0x403587(0x378)] = _0x1c5baa[_0x403587(0x2f3)], document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x268)])[_0x403587(0x21c)][_0x403587(0x378)] = _0x1c5baa['BUpPY'], document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x1b1)])[_0x403587(0x21c)][_0x403587(0x378)] = _0x403587(0x3db), document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x3ce)])['style']['display'] = _0x403587(0x3db), document[_0x403587(0x2d9)](_0x403587(0x3cb))[_0x403587(0x21c)]['display'] = _0x1c5baa[_0x403587(0x2f3)], document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x17a)])[_0x403587(0x21c)]['display'] = _0x1c5baa[_0x403587(0x2f3)], document['getElementById'](_0x403587(0x2a1))[_0x403587(0x2f0)] = !![];
    const _0x48b765 = document['getElementById'](_0x403587(0x2b9));
    _0x48b765['addEventListener'](_0x1c5baa[_0x403587(0x2ff)], () => {
        _0x48b765['value'] = null;
    }), _0x48b765['addEventListener'](_0x1c5baa[_0x403587(0x258)], async _0x3c8a81 => {
        const _0x5bb211 = _0x403587, _0x55c055 = await new Response(_0x3c8a81[_0x5bb211(0x393)][_0x5bb211(0x2f8)][0x0])[_0x5bb211(0x1ed)]();
        if (!_0x55c055)
            return;
        luaEditor[_0x5bb211(0x1c7)](_0x55c055);
    });
    const _0x51192d = document[_0x403587(0x2d9)](_0x1c5baa[_0x403587(0x41b)]);
    return _0x51192d[_0x403587(0x30a)](_0x1c5baa[_0x403587(0x2ff)], () => {
        const _0x20d64e = _0x403587;
        _0x51192d[_0x20d64e(0x334)] = null;
    }), _0x51192d[_0x403587(0x30a)](_0x403587(0x349), async _0x3baf46 => {
        const _0x5c2d1c = _0x403587, _0x38ae4d = await new Response(_0x3baf46['target']['files'][0x0])[_0x5c2d1c(0x1ed)]();
        if (!_0x38ae4d)
            return;
        jsEditor[_0x5c2d1c(0x1c7)](_0x38ae4d);
    }), chart = new Chart('wdbChart', ![], 0x64), _0x1c5baa[_0x403587(0x367)];
}
async function wdbLoader(_0x5470a4) {
    const _0x5e5c24 = _0x49b003, _0x5daa90 = {
            'NTZMy': _0x5e5c24(0x2e8),
            'JdftS': _0x5e5c24(0x320),
            'YFSKh': _0x5e5c24(0x41f),
            'zNEub': function (_0x2705a4, _0xf77d49) {
                return _0x2705a4 + _0xf77d49;
            },
            'Mepbm': _0x5e5c24(0x2aa),
            'aATsb': _0x5e5c24(0x22e),
            'xqxXi': _0x5e5c24(0x287),
            'CbGti': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
            'VoSMt': function (_0x55fbfc, _0x2e2b1e) {
                return _0x55fbfc(_0x2e2b1e);
            },
            'kZNva': function (_0x477f2f) {
                return _0x477f2f();
            },
            'HCPDr': function (_0x8d818) {
                return _0x8d818();
            },
            'hdpOr': function (_0x2dffaa, _0x9718db) {
                return _0x2dffaa === _0x9718db;
            },
            'QgzGK': _0x5e5c24(0x332),
            'lWlUI': _0x5e5c24(0x323),
            'EHKAK': function (_0x3d1582, _0x26730e) {
                return _0x3d1582 === _0x26730e;
            },
            'hVhxv': _0x5e5c24(0x1ec),
            'WZrmz': _0x5e5c24(0x278),
            'nCDFG': _0x5e5c24(0x389)
        }, _0x599581 = [
            _0x5e5c24(0x20f),
            _0x5daa90[_0x5e5c24(0x285)],
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
            _0x5daa90['JdftS'],
            _0x5daa90['YFSKh'],
            _0x5daa90[_0x5e5c24(0x1df)](WDB_LIB, _0x5daa90['Mepbm']),
            _0x5daa90[_0x5e5c24(0x1df)](WDB_LIB, _0x5daa90[_0x5e5c24(0x2c1)])
        ], _0xe9a3ef = [
            _0x5daa90['xqxXi'],
            _0x5daa90[_0x5e5c24(0x220)]
        ];
    for (const _0x2871e3 of _0x599581) {
        await _0x5470a4['loadScript'](_0x2871e3);
    }
    for (const _0x2ebbf6 of _0xe9a3ef) {
        await _0x5470a4[_0x5e5c24(0x1f9)](_0x2ebbf6);
    }
    await _0x5daa90['VoSMt'](beforeWork, _0x5470a4), await _0x5daa90[_0x5e5c24(0x34b)](wdbCreateUI), await _0x5daa90[_0x5e5c24(0x28d)](getListCoin), await _0x5daa90['HCPDr'](initLua);
    if (_0x5daa90[_0x5e5c24(0x1f6)](game, _0x5daa90['QgzGK']))
        luaEditor[_0x5e5c24(0x1c7)](rangediceLuaScript), jsEditor[_0x5e5c24(0x1c7)](rangediceJsScript), document[_0x5e5c24(0x1c1)](_0x5daa90[_0x5e5c24(0x46c)])[_0x5e5c24(0x2f0)] = !![];
    else {
        if (_0x5daa90[_0x5e5c24(0x42a)](game, _0x5e5c24(0x2e2)))
            luaEditor['setValue'](plinkoLuaScript), jsEditor[_0x5e5c24(0x1c7)](plinkoJsScript), document[_0x5e5c24(0x1c1)](_0x5daa90[_0x5e5c24(0x46c)])['disabled'] = !![];
        else
            game === _0x5daa90[_0x5e5c24(0x230)] && (luaEditor[_0x5e5c24(0x1c7)](kenoLuaScript), jsEditor['setValue'](kenoJsScript), document[_0x5e5c24(0x1c1)](_0x5e5c24(0x323))[_0x5e5c24(0x2f0)] = !![]);
    }
    return log(_0x5daa90[_0x5e5c24(0x45e)]), _0x5daa90['nCDFG'];
}
function toggleNav(_0x2ab9c0) {
    const _0x3e39f4 = _0x49b003, _0x5bdb1d = {
            'BWMCY': function (_0x40530e, _0x30bce5) {
                return _0x40530e === _0x30bce5;
            },
            'pKHxH': _0x3e39f4(0x3db),
            'NmjWX': _0x3e39f4(0x431),
            'DiLaf': _0x3e39f4(0x357),
            'MvEbS': 'Log',
            'kdDNc': 'Variables',
            'LoPrJ': _0x3e39f4(0x38e),
            'nFkVD': _0x3e39f4(0x2a9)
        }, _0x1f074a = [
            _0x5bdb1d[_0x3e39f4(0x3df)],
            _0x5bdb1d['MvEbS'],
            _0x5bdb1d['kdDNc'],
            _0x5bdb1d['LoPrJ'],
            _0x5bdb1d[_0x3e39f4(0x2b6)]
        ];
    _0x1f074a[_0x3e39f4(0x1cf)](_0x55397b => {
        const _0xa4db3b = _0x3e39f4, _0x5c3720 = _0x5bdb1d[_0xa4db3b(0x28a)](_0x55397b[_0xa4db3b(0x2cd)](), _0x2ab9c0) ? _0xa4db3b(0x431) : _0x5bdb1d['pKHxH'];
        document[_0xa4db3b(0x2d9)](_0xa4db3b(0x2af) + _0x55397b)['style'][_0xa4db3b(0x378)] = _0x5c3720, document[_0xa4db3b(0x2d9)](_0xa4db3b(0x3c8) + _0x55397b)[_0xa4db3b(0x2f0)] = _0x5bdb1d['BWMCY'](_0x5c3720, _0x5bdb1d['NmjWX']);
    });
}
function toggleShow(_0x2c6dc1) {
    const _0x4fc42d = _0x49b003, _0x1650b3 = {
            'zRLpL': function (_0x3bf16f, _0x33ee8b) {
                return _0x3bf16f + _0x33ee8b;
            },
            'EQbyD': function (_0x363826, _0x19e7d9) {
                return _0x363826(_0x19e7d9);
            }
        }, _0x438580 = document[_0x4fc42d(0x2d9)]('wdbToggleShow' + _0x1650b3['zRLpL'](_0x2c6dc1[_0x4fc42d(0x28b)](0x0)[_0x4fc42d(0x374)](), _0x2c6dc1[_0x4fc42d(0x1be)](0x1)))[_0x4fc42d(0x240)];
    _0x1650b3['EQbyD'](selectFunction, _0x438580 ? 'show' + _0x2c6dc1 : 'hide' + _0x2c6dc1);
}
function toggleLive(_0x1cac68) {
    const _0x27a293 = _0x49b003, _0x148c61 = {
            'DRhTi': function (_0x1131f6, _0x456a4a) {
                return _0x1131f6 + _0x456a4a;
            },
            'gGJIa': function (_0xe5db5b, _0x58e970) {
                return _0xe5db5b(_0x58e970);
            },
            'ZYTeT': _0x27a293(0x251),
            'qPiua': _0x27a293(0x337)
        }, _0xfed754 = document['getElementById'](_0x27a293(0x380) + _0x148c61[_0x27a293(0x254)](_0x1cac68[_0x27a293(0x28b)](0x0)[_0x27a293(0x374)](), _0x1cac68[_0x27a293(0x1be)](0x1)))[_0x27a293(0x240)];
    _0x148c61[_0x27a293(0x294)](selectFunction, '' + (_0xfed754 ? _0x148c61[_0x27a293(0x31f)] : _0x148c61['qPiua']) + _0x1cac68);
}
function selectFunction(_0x2e88f1) {
    const _0x2448e0 = _0x49b003, _0x6d183f = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x2448e0(0x426)),
            'resethistory': () => toggleHistory(_0x2448e0(0x39f)),
            'resetlog': () => toggleLog(_0x2448e0(0x39f)),
            'resetseed': resetseed,
            'stopchart': () => toggleChart(_0x2448e0(0x337)),
            'startchart': () => toggleChart(_0x2448e0(0x251)),
            'stophistory': () => toggleHistory(_0x2448e0(0x337)),
            'starthistory': () => toggleHistory(_0x2448e0(0x251)),
            'stoplog': () => toggleLog('stop'),
            'startlog': () => toggleLog(_0x2448e0(0x251)),
            'hidestats': () => toggleStats('hide'),
            'showstats': () => toggleStats('show'),
            'hidechart': () => toggleChart(_0x2448e0(0x228)),
            'showchart': () => toggleChart(_0x2448e0(0x36c)),
            'hidehistory': () => toggleHistory('hide'),
            'showhistory': () => toggleHistory(_0x2448e0(0x36c))
        };
    if (_0x6d183f[_0x2e88f1])
        _0x6d183f[_0x2e88f1]();
}
function toggleMode(_0x35783d) {
    const _0x3adbb5 = _0x49b003, _0x2e8a76 = {
            'rdulJ': 'rangedice',
            'buKEy': function (_0x5aabb3, _0x12ed47) {
                return _0x5aabb3 === _0x12ed47;
            },
            'tiDLm': _0x3adbb5(0x2e2),
            'vkssM': _0x3adbb5(0x1ec),
            'LBRDZ': _0x3adbb5(0x1b9),
            'DPlSZ': _0x3adbb5(0x238),
            'blEDz': _0x3adbb5(0x3e3),
            'qsxHU': _0x3adbb5(0x431),
            'qiqby': _0x3adbb5(0x3db),
            'GNeTg': function (_0x4fac4e, _0x437353) {
                return _0x4fac4e === _0x437353;
            },
            'KcCEk': function (_0x181352, _0x4ab68c) {
                return _0x181352 === _0x4ab68c;
            }
        };
    mode = _0x35783d;
    if (game === _0x2e8a76['rdulJ'])
        luaEditor[_0x3adbb5(0x1c7)](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript);
    else {
        if (_0x2e8a76[_0x3adbb5(0x18e)](game, _0x2e8a76[_0x3adbb5(0x2ac)]))
            luaEditor['setValue'](plinkoLuaScript), jsEditor['setValue'](plinkoJsScript);
        else
            game === _0x2e8a76[_0x3adbb5(0x410)] && (luaEditor[_0x3adbb5(0x1c7)](kenoLuaScript), jsEditor[_0x3adbb5(0x1c7)](kenoJsScript));
    }
    const _0x228f5a = document['getElementById'](_0x2e8a76[_0x3adbb5(0x2e9)]), _0x528944 = document[_0x3adbb5(0x2d9)](_0x2e8a76[_0x3adbb5(0x358)]), _0x432b2a = document[_0x3adbb5(0x2d9)](_0x2e8a76[_0x3adbb5(0x347)]);
    _0x228f5a[_0x3adbb5(0x21c)][_0x3adbb5(0x378)] = _0x35783d === _0x3adbb5(0x1d6) ? _0x2e8a76[_0x3adbb5(0x215)] : _0x2e8a76[_0x3adbb5(0x432)], _0x528944[_0x3adbb5(0x21c)][_0x3adbb5(0x378)] = _0x2e8a76[_0x3adbb5(0x396)](_0x35783d, 'js') ? 'block' : _0x2e8a76[_0x3adbb5(0x432)], _0x432b2a[_0x3adbb5(0x21c)][_0x3adbb5(0x378)] = _0x2e8a76[_0x3adbb5(0x26f)](_0x35783d, 'advanced') ? _0x3adbb5(0x431) : _0x3adbb5(0x3db), luaEditor[_0x3adbb5(0x434)](), jsEditor[_0x3adbb5(0x434)]();
}
function toggleStats(_0x3dee22) {
    const _0x2c78a7 = _0x49b003, _0x98b16b = {
            'LqwEQ': function (_0x2cd567, _0x4c6400) {
                return _0x2cd567 === _0x4c6400;
            },
            'EQzpa': _0x2c78a7(0x228),
            'EuQnG': _0x2c78a7(0x3db),
            'Wbvjd': _0x2c78a7(0x39e)
        }, _0x3ac075 = _0x98b16b[_0x2c78a7(0x356)](_0x3dee22, _0x98b16b[_0x2c78a7(0x189)]) ? _0x98b16b[_0x2c78a7(0x284)] : _0x98b16b[_0x2c78a7(0x24a)];
    document[_0x2c78a7(0x2d9)](_0x2c78a7(0x338))[_0x2c78a7(0x21c)][_0x2c78a7(0x378)] = _0x3ac075;
}
function toggleChart(_0x555284) {
    const _0x4d2a78 = _0x49b003, _0x4d18b9 = {
            'bknca': _0x4d2a78(0x257),
            'VSrDk': _0x4d2a78(0x27a),
            'uiqvU': 'none',
            'cnoLe': '380px',
            'awGby': _0x4d2a78(0x305),
            'aMKDu': _0x4d2a78(0x337),
            'bjVgS': _0x4d2a78(0x251)
        }, _0x5a1566 = document[_0x4d2a78(0x2d9)](_0x4d18b9[_0x4d2a78(0x1f5)]), _0x41437f = document['getElementById'](_0x4d18b9[_0x4d2a78(0x31d)]);
    switch (_0x555284) {
    case _0x4d2a78(0x228):
        _0x5a1566[_0x4d2a78(0x21c)][_0x4d2a78(0x378)] = _0x4d18b9[_0x4d2a78(0x3f7)], _0x41437f[_0x4d2a78(0x21c)]['height'] = _0x4d18b9['cnoLe'];
        break;
    case _0x4d2a78(0x36c):
        _0x5a1566[_0x4d2a78(0x21c)][_0x4d2a78(0x378)] = _0x4d2a78(0x431), _0x41437f[_0x4d2a78(0x21c)][_0x4d2a78(0x1dc)] = _0x4d18b9[_0x4d2a78(0x439)];
        break;
    case _0x4d18b9[_0x4d2a78(0x3d9)]:
        stopChart = !![];
        break;
    case _0x4d18b9[_0x4d2a78(0x30d)]:
        stopChart = ![];
        break;
    case _0x4d2a78(0x426):
        betsChart = 0x0, profitChart = 0x0, chart[_0x4d2a78(0x2a0)]();
        break;
    }
}
function toggleHistory(_0x25efa7) {
    const _0x548aac = _0x49b003, _0x14a452 = {
            'DTDxw': _0x548aac(0x1a4),
            'ONdBj': _0x548aac(0x257),
            'mMSrm': _0x548aac(0x339),
            'rvhgb': _0x548aac(0x36c),
            'xwAHU': 'block',
            'GwRKe': _0x548aac(0x305),
            'FSvJc': _0x548aac(0x337),
            'WxZqc': _0x548aac(0x251),
            'ZrnXb': _0x548aac(0x39f)
        }, _0x285cbf = document[_0x548aac(0x2d9)](_0x14a452[_0x548aac(0x1f4)]), _0x1690ff = document[_0x548aac(0x2d9)](_0x14a452[_0x548aac(0x2bb)]);
    switch (_0x25efa7) {
    case _0x548aac(0x228):
        _0x285cbf[_0x548aac(0x21c)]['display'] = 'none', _0x1690ff[_0x548aac(0x21c)]['height'] = _0x14a452['mMSrm'];
        break;
    case _0x14a452['rvhgb']:
        _0x285cbf[_0x548aac(0x21c)]['display'] = _0x14a452[_0x548aac(0x2c5)], _0x1690ff[_0x548aac(0x21c)][_0x548aac(0x1dc)] = _0x14a452[_0x548aac(0x3b7)];
        break;
    case _0x14a452[_0x548aac(0x331)]:
        stopHistory = !![];
        break;
    case _0x14a452[_0x548aac(0x2ba)]:
        stopHistory = ![];
        break;
    case _0x14a452[_0x548aac(0x2d8)]:
        _0x285cbf['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x19464e) {
    const _0x38ebb2 = _0x49b003, _0x16a029 = { 'ppYqp': _0x38ebb2(0x251) };
    switch (_0x19464e) {
    case 'stop':
        stopLog = !![];
        break;
    case _0x16a029[_0x38ebb2(0x23d)]:
        stopLog = ![];
        break;
    case _0x38ebb2(0x39f):
        document['getElementById']('wdbLog')[_0x38ebb2(0x19f)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0xa82089 = _0x49b003, _0x161fde = {
            'FGpyB': function (_0x3aa21e, _0x319f65) {
                return _0x3aa21e(_0x319f65);
            },
            'TjxPn': _0xa82089(0x425),
            'FuZEf': function (_0x2bc504, _0x54bcbb) {
                return _0x2bc504(_0x54bcbb);
            },
            'ViInU': _0xa82089(0x45f),
            'GTnao': _0xa82089(0x3b1),
            'FNXZb': function (_0x4a2064, _0x6061fe) {
                return _0x4a2064(_0x6061fe);
            },
            'FNyRP': function (_0x242b88, _0x40a5b6) {
                return _0x242b88(_0x40a5b6);
            },
            'dZtjb': 'advancedChanceOnLoseBets',
            'KOiAP': 'advancedMultiOnWinCheck',
            'RjLXE': _0xa82089(0x1fa),
            'tnJrO': 'advancedMultiOnWinBets',
            'mEbfc': function (_0x3fc701, _0x46929c) {
                return _0x3fc701(_0x46929c);
            },
            'tlLjb': 'advancedBetHighOnBetCheck',
            'wPdHu': function (_0x4d11df, _0x597e7e) {
                return _0x4d11df(_0x597e7e);
            },
            'SvsrP': function (_0x47487f, _0x4e60f3) {
                return _0x47487f % _0x4e60f3;
            },
            'zNVcp': function (_0x4e4fad, _0x53cfde) {
                return _0x4e4fad >= _0x53cfde;
            },
            'KuBik': _0xa82089(0x371),
            'oYOGR': function (_0x2e1218) {
                return _0x2e1218();
            },
            'FqAoh': _0xa82089(0x2f2),
            'USgYj': 'advancedStopRollNumber',
            'nVdsW': function (_0x11db1a, _0x3bd79a) {
                return _0x11db1a === _0x3bd79a;
            },
            'uXBTY': function (_0x52560b, _0xf27257) {
                return _0x52560b(_0xf27257);
            },
            'ineBJ': 'Stop\x20on\x20roll\x20number\x20',
            'DATKT': 'advancedStopAfterStreakCheck',
            'FHiDU': 'advancedStopAfterStreak',
            'QBsxV': function (_0x2af89d, _0x41301c) {
                return _0x2af89d > _0x41301c;
            },
            'WbaAr': function (_0xf6874a, _0x1917d5) {
                return _0xf6874a(_0x1917d5);
            },
            'ypXRT': 'Stop\x20on\x20current\x20streak\x20',
            'OGuDQ': function (_0x48eca3, _0x58774e) {
                return _0x48eca3 <= _0x58774e;
            },
            'lEfqx': function (_0x3eb70e) {
                return _0x3eb70e();
            },
            'mGBTD': function (_0x32d7e7, _0x1c9fdd) {
                return _0x32d7e7(_0x1c9fdd);
            },
            'Xrtgj': function (_0x4f8ee9, _0x5479ed) {
                return _0x4f8ee9 + _0x5479ed;
            },
            'wYNup': 'advancedStopOnBetsCheck',
            'cMghP': 'advancedStopOnBets',
            'ezfjN': function (_0x411673, _0x58680d) {
                return _0x411673 >= _0x58680d;
            },
            'pEwEU': function (_0x538213, _0x2fc14b) {
                return _0x538213(_0x2fc14b);
            },
            'wfNpa': function (_0x744368, _0x23f30e) {
                return _0x744368 + _0x23f30e;
            },
            'EzsME': _0xa82089(0x3bd),
            'ineJl': _0xa82089(0x1e8),
            'SSBAa': function (_0x207c30, _0x546669) {
                return _0x207c30(_0x546669);
            },
            'BBvUB': _0xa82089(0x23a),
            'gRnCJ': function (_0x467138) {
                return _0x467138();
            },
            'HxliO': function (_0x1c3ded, _0xa763b) {
                return _0x1c3ded(_0xa763b);
            },
            'HOWyl': _0xa82089(0x2df),
            'mEJGt': function (_0x2506dc, _0x1eba87) {
                return _0x2506dc >= _0x1eba87;
            },
            'XfuTs': function (_0x39573f, _0x44cb24) {
                return _0x39573f + _0x44cb24;
            },
            'FtHDl': _0xa82089(0x3a4),
            'NhsiB': _0xa82089(0x1ad),
            'ScSbF': function (_0xe255f0, _0x452e60) {
                return _0xe255f0 >= _0x452e60;
            },
            'wtCzW': function (_0x1679af) {
                return _0x1679af();
            },
            'TSHMn': _0xa82089(0x24c),
            'EwHeQ': _0xa82089(0x236),
            'jwSgM': _0xa82089(0x38b),
            'zpJbm': _0xa82089(0x321),
            'qDUcX': function (_0xf2fe0d, _0x552441) {
                return _0xf2fe0d % _0x552441;
            },
            'MIHQO': function (_0x14ca3b, _0x290ac5) {
                return _0x14ca3b === _0x290ac5;
            },
            'whTnv': function (_0x267419, _0x34266b) {
                return _0x267419 === _0x34266b;
            },
            'Jrxqe': function (_0x5174e4, _0x2e8e8a) {
                return _0x5174e4 * _0x2e8e8a;
            },
            'pwaaX': _0xa82089(0x44d),
            'xedhh': _0xa82089(0x1ae),
            'imtSd': function (_0x20d530, _0x312a1a) {
                return _0x20d530 === _0x312a1a;
            },
            'qojTP': function (_0x4f77be, _0x4115a6) {
                return _0x4f77be % _0x4115a6;
            },
            'DszTf': _0xa82089(0x233)
        };
    chance = _0x161fde[_0xa82089(0x255)](Number, document[_0xa82089(0x2d9)](_0x161fde['TjxPn'])[_0xa82089(0x334)]);
    const _0x403104 = document[_0xa82089(0x2d9)](_0xa82089(0x1e9))['checked'], _0x9ef5d9 = _0x403104 ? _0x161fde[_0xa82089(0x2ce)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x1c5)])[_0xa82089(0x334)]) : chance, _0xecfee1 = _0x161fde[_0xa82089(0x2ce)](Number, document[_0xa82089(0x2d9)](_0xa82089(0x299))[_0xa82089(0x334)]), _0x27c946 = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x2ef)])[_0xa82089(0x240)], _0x1d0af2 = _0x27c946 ? _0x161fde[_0xa82089(0x33b)](Number, document[_0xa82089(0x2d9)]('advancedChanceOnLose')[_0xa82089(0x334)]) : chance, _0x1a346a = _0x161fde[_0xa82089(0x282)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x3be)])[_0xa82089(0x334)]), _0x12b304 = document['getElementById'](_0x161fde[_0xa82089(0x38a)])[_0xa82089(0x240)], _0xc57947 = _0x12b304 ? Number(document['getElementById'](_0x161fde['RjLXE'])['value']) : 0x1, _0xb1cafa = _0x161fde[_0xa82089(0x33b)](Number, document[_0xa82089(0x2d9)](_0x161fde['tnJrO'])[_0xa82089(0x334)]), _0x38af41 = document[_0xa82089(0x2d9)](_0xa82089(0x286))['checked'], _0x32703b = _0x38af41 ? _0x161fde[_0xa82089(0x264)](Number, document[_0xa82089(0x2d9)](_0xa82089(0x3e4))[_0xa82089(0x334)]) : 0x1, _0x3de150 = _0x161fde[_0xa82089(0x264)](Number, document[_0xa82089(0x2d9)](_0xa82089(0x38f))[_0xa82089(0x334)]), _0x4f117 = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x245)])['checked'];
    if (_0x4f117) {
        const _0x2eef69 = _0x161fde[_0xa82089(0x249)](Number, document[_0xa82089(0x2d9)]('advancedBetHighOnBet')['value']);
        if (_0x161fde[_0xa82089(0x314)](bets, _0x2eef69) === 0x0)
            bethigh = !bethigh;
    }
    const _0x209935 = document['getElementById'](_0xa82089(0x466))[_0xa82089(0x240)];
    if (_0x209935) {
        const _0x4820b = Number(document[_0xa82089(0x2d9)](_0xa82089(0x43c))['value']);
        if (_0x161fde[_0xa82089(0x3c2)](profit, _0x4820b))
            bethigh = !bethigh;
    }
    const _0x250a9c = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x26e)])['checked'];
    if (_0x250a9c) {
        const _0x3e1ed3 = _0x161fde[_0xa82089(0x264)](Number, document['getElementById'](_0xa82089(0x173))[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x3c2)](profit, _0x3e1ed3))
            _0x161fde[_0xa82089(0x253)](resetstats);
    }
    const _0x225158 = document['getElementById'](_0x161fde[_0xa82089(0x2c9)])[_0xa82089(0x240)];
    if (_0x225158) {
        const _0x5a0414 = Number(document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x1ff)])[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x424)](lastBet[_0xa82089(0x398)], _0x5a0414))
            _0x161fde[_0xa82089(0x253)](stop), _0x161fde[_0xa82089(0x437)](log, _0x161fde[_0xa82089(0x3ae)] + _0x5a0414);
    }
    const _0x1f2fa2 = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x172)])[_0xa82089(0x240)];
    if (_0x1f2fa2) {
        const _0x4343f5 = _0x161fde[_0xa82089(0x264)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x2ee)])[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x387)](_0x4343f5, 0x0)) {
            if (_0x161fde[_0xa82089(0x3c2)](currentstreak, _0x4343f5))
                _0x161fde[_0xa82089(0x253)](stop), _0x161fde[_0xa82089(0x403)](log, _0x161fde['ypXRT'] + _0x4343f5);
        } else {
            if (_0x161fde['OGuDQ'](currentstreak, _0x4343f5))
                _0x161fde[_0xa82089(0x392)](stop), _0x161fde[_0xa82089(0x24e)](log, _0x161fde['Xrtgj'](_0xa82089(0x3e7), _0x4343f5));
        }
    }
    const _0x17d73b = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x29e)])['checked'];
    if (_0x17d73b) {
        const _0x2139fb = _0x161fde[_0xa82089(0x264)](Number, document[_0xa82089(0x2d9)](_0x161fde['cMghP'])[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x1cb)](bets, _0x2139fb))
            _0x161fde['oYOGR'](stop), _0x161fde[_0xa82089(0x279)](log, _0x161fde[_0xa82089(0x30e)](_0x161fde[_0xa82089(0x442)](_0x161fde[_0xa82089(0x237)], _0x2139fb), _0x161fde[_0xa82089(0x37c)]));
    }
    const _0x346e78 = document['getElementById'](_0xa82089(0x2a5))[_0xa82089(0x240)];
    if (_0x346e78) {
        const _0x27e01b = _0x161fde[_0xa82089(0x20e)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x18d)])['value']);
        if (_0x161fde['zNVcp'](winstreak, _0x27e01b))
            _0x161fde[_0xa82089(0x19a)](stop), _0x161fde[_0xa82089(0x3ed)](log, _0x161fde[_0xa82089(0x237)] + _0x27e01b + '\x20win');
    }
    const _0x5e3246 = document['getElementById'](_0x161fde['HOWyl'])['checked'];
    if (_0x5e3246) {
        const _0x852ff1 = Number(document['getElementById']('advancedStopOnLose')[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x2e4)](losestreak, _0x852ff1))
            stop(), _0x161fde[_0xa82089(0x20e)](log, _0x161fde[_0xa82089(0x3b0)](_0x161fde[_0xa82089(0x237)], _0x852ff1) + _0x161fde[_0xa82089(0x18a)]);
    }
    const _0x1325fb = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x275)])[_0xa82089(0x240)];
    if (_0x1325fb) {
        const _0x310857 = Number(document[_0xa82089(0x2d9)](_0xa82089(0x43e))[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x3dc)](profit, _0x310857))
            _0x161fde[_0xa82089(0x2e1)](stop), log('Stop\x20on\x20profit\x20' + _0x310857);
    }
    const _0x468bc6 = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x42c)])['checked'];
    if (_0x468bc6) {
        const _0x85709f = _0x161fde[_0xa82089(0x33b)](Number, document['getElementById'](_0x161fde[_0xa82089(0x405)])[_0xa82089(0x334)]);
        if (_0x161fde[_0xa82089(0x3dc)](balance, _0x85709f))
            stop(), _0x161fde[_0xa82089(0x24e)](log, _0x161fde[_0xa82089(0x442)](_0xa82089(0x348), _0x85709f));
    }
    if (win) {
        const _0x3401e5 = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x2a8)])[_0xa82089(0x240)];
        if (_0x3401e5) {
            const _0x3a138b = _0x161fde[_0xa82089(0x264)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x361)])['value']);
            if (_0x161fde[_0xa82089(0x219)](winstreak, _0x3a138b) === 0x0)
                bethigh = !bethigh;
        }
        if (_0x161fde['MIHQO'](_0x161fde['qDUcX'](winstreak, _0xecfee1), 0x0))
            chance = _0x9ef5d9;
        if (_0x12b304) {
            if (_0x161fde[_0xa82089(0x1c0)](winstreak % _0xb1cafa, 0x0))
                nextbet = _0x161fde['Jrxqe'](previousbet, _0xc57947);
        } else
            nextbet = basebet;
    } else {
        const _0xe47e2c = document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x248)])['checked'];
        if (_0xe47e2c) {
            const _0x42a727 = _0x161fde[_0xa82089(0x403)](Number, document[_0xa82089(0x2d9)](_0x161fde[_0xa82089(0x242)])[_0xa82089(0x334)]);
            if (_0x161fde[_0xa82089(0x1f1)](_0x161fde[_0xa82089(0x219)](losestreak, _0x42a727), 0x0))
                bethigh = !bethigh;
        }
        if (_0x161fde[_0xa82089(0x468)](_0x161fde[_0xa82089(0x219)](losestreak, _0x1a346a), 0x0))
            chance = _0x1d0af2;
        if (_0x38af41) {
            if (_0x161fde[_0xa82089(0x2ad)](losestreak, _0x3de150) === 0x0)
                nextbet = previousbet * _0x32703b;
        } else
            nextbet = basebet;
    }
    return _0x161fde['DszTf'];
}
function changeCoin() {
    const _0x2eee82 = _0x49b003;
    coin = document[_0x2eee82(0x2d9)]('wdbMenuCoin')[_0x2eee82(0x334)], currency = coin[_0x2eee82(0x2cd)](), fengari[_0x2eee82(0x346)](_0x2eee82(0x40d) + currency + '\x22')(), checkbalance();
}
async function handleStats() {
    const _0x5957e8 = _0x49b003, _0x4fc934 = {
            'sPeko': function (_0x295764, _0x5eacb7) {
                return _0x295764 === _0x5eacb7;
            },
            'CQRmr': _0x5957e8(0x1d6),
            'yRFzM': function (_0x5b8a45) {
                return _0x5b8a45();
            },
            'XJeMt': function (_0x4f6c6d, _0xc78a8c) {
                return _0x4f6c6d && _0xc78a8c;
            },
            'Gyejh': function (_0x437c69) {
                return _0x437c69();
            },
            'evDei': function (_0x506829, _0x997f51) {
                return _0x506829 === _0x997f51;
            },
            'pOUzJ': _0x5957e8(0x332),
            'nwpDZ': '5|4|0|3|2|1|6|9|7|8',
            'OEBuE': function (_0x14425b, _0x30bbf7) {
                return _0x14425b === _0x30bbf7;
            },
            'nluSa': _0x5957e8(0x450),
            'gSkGP': function (_0x4529c0, _0x450fda) {
                return _0x4529c0 > _0x450fda;
            },
            'fLkhO': function (_0x3026e9, _0x2895b3) {
                return _0x3026e9 < _0x2895b3;
            },
            'hKpkU': _0x5957e8(0x2e2),
            'VtRUp': function (_0x1a2c75, _0xa9c862) {
                return _0x1a2c75 === _0xa9c862;
            },
            'vjwiW': _0x5957e8(0x1ec),
            'Uwmas': function (_0x1afcb4, _0x1a44aa) {
                return _0x1afcb4 > _0x1a44aa;
            },
            'JyOwC': function (_0x1a09c6, _0x3364f8) {
                return _0x1a09c6 === _0x3364f8;
            },
            'gBOaJ': _0x5957e8(0x1b5),
            'ZUOJm': 'outside',
            'gKdhz': function (_0x38dc4e, _0x2d4cb5) {
                return _0x38dc4e < _0x2d4cb5;
            },
            'PigEk': function (_0x12eb16, _0x1d3efb) {
                return _0x12eb16 > _0x1d3efb;
            },
            'AWlrr': _0x5957e8(0x213),
            'Lnigz': function (_0x328ece, _0x274610) {
                return _0x328ece < _0x274610;
            },
            'yySuh': _0x5957e8(0x16f),
            'XQBto': _0x5957e8(0x272),
            'FzMOX': function (_0x5ea9a6, _0x25badc) {
                return _0x5ea9a6 > _0x25badc;
            },
            'vlyUg': function (_0x1ccdf4, _0x266c62) {
                return _0x1ccdf4 > _0x266c62;
            },
            'iegKZ': function (_0x19dd16, _0x488607) {
                return _0x19dd16 > _0x488607;
            },
            'oUVgf': function (_0x4c3e57, _0x1f1a08) {
                return _0x4c3e57 > _0x1f1a08;
            }
        }, _0x4c8c01 = Date[_0x5957e8(0x174)]();
    speedHistory['push'](_0x4c8c01);
    const _0x4ce7d1 = 0x2710;
    speedHistory = speedHistory['filter'](_0x5be191 => _0x4c8c01 - _0x5be191 <= _0x4ce7d1), bets++, lastBet['Roll'] = lastBet['roll'], lastBet[_0x5957e8(0x393)] = target, lastBet['Target'] = target;
    if (_0x4fc934[_0x5957e8(0x452)](game, _0x4fc934[_0x5957e8(0x177)])) {
        const _0x363b8c = _0x4fc934[_0x5957e8(0x2cb)][_0x5957e8(0x421)]('|');
        let _0x5ceeed = 0x0;
        while (!![]) {
            switch (_0x363b8c[_0x5ceeed++]) {
            case '0':
                lastBet[_0x5957e8(0x1bb)] = chance2;
                continue;
            case '1':
                lastBet[_0x5957e8(0x21d)] = chance3;
                continue;
            case '2':
                lastBet[_0x5957e8(0x221)] = chance3;
                continue;
            case '3':
                lastBet[_0x5957e8(0x29d)] = chance2;
                continue;
            case '4':
                lastBet[_0x5957e8(0x293)] = chance1;
                continue;
            case '5':
                lastBet[_0x5957e8(0x183)] = chance1;
                continue;
            case '6':
                lastBet['chance4'] = chance4;
                continue;
            case '7':
                lastBet[_0x5957e8(0x3ca)] = betSide;
                continue;
            case '8':
                lastBet['BetSide'] = betSide;
                continue;
            case '9':
                lastBet[_0x5957e8(0x1a1)] = chance4;
                continue;
            }
            break;
        }
    }
    lastBet['result'] = result, lastBet[_0x5957e8(0x25b)] = result, lastBet[_0x5957e8(0x330)] = currentprofit, lastBet[_0x5957e8(0x19e)] = currentprofit, lastBet[_0x5957e8(0x32d)] = lastBet['nonce'], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (_0x4fc934[_0x5957e8(0x269)](game, _0x4fc934['nluSa']))
        win = lastBet[_0x5957e8(0x1bc)] ? _0x4fc934[_0x5957e8(0x368)](lastBet[_0x5957e8(0x398)], lastBet[_0x5957e8(0x393)]) : _0x4fc934[_0x5957e8(0x413)](lastBet[_0x5957e8(0x398)], lastBet[_0x5957e8(0x393)]);
    else {
        if (_0x4fc934['sPeko'](game, _0x4fc934[_0x5957e8(0x326)]) || _0x4fc934[_0x5957e8(0x3fc)](game, _0x4fc934[_0x5957e8(0x17e)]))
            win = _0x4fc934[_0x5957e8(0x1cd)](lastBet['profit'], 0x0);
        else {
            if (game === _0x5957e8(0x332)) {
                if (_0x4fc934[_0x5957e8(0x3c5)](lastBet['betSide'], _0x4fc934[_0x5957e8(0x322)]))
                    win = lastBet[_0x5957e8(0x1e6)] > lastBet[_0x5957e8(0x183)] && lastBet['roll'] < lastBet[_0x5957e8(0x1bb)];
                else {
                    if (_0x4fc934[_0x5957e8(0x2bc)](lastBet[_0x5957e8(0x3ca)], _0x4fc934[_0x5957e8(0x30b)]))
                        win = _0x4fc934[_0x5957e8(0x2fa)](lastBet[_0x5957e8(0x1e6)], lastBet['chance1']) || _0x4fc934['PigEk'](lastBet[_0x5957e8(0x1e6)], lastBet[_0x5957e8(0x1bb)]);
                    else {
                        if (_0x4fc934[_0x5957e8(0x3c5)](lastBet[_0x5957e8(0x3ca)], _0x4fc934[_0x5957e8(0x3fe)])) {
                            const _0x396c79 = lastBet[_0x5957e8(0x1e6)] > lastBet[_0x5957e8(0x183)] && _0x4fc934[_0x5957e8(0x2d3)](lastBet[_0x5957e8(0x1e6)], lastBet[_0x5957e8(0x1bb)]), _0x117238 = _0x4fc934[_0x5957e8(0x368)](lastBet[_0x5957e8(0x1e6)], lastBet[_0x5957e8(0x221)]) && _0x4fc934[_0x5957e8(0x2fa)](lastBet['roll'], lastBet[_0x5957e8(0x33f)]);
                            win = _0x396c79 || _0x117238;
                        }
                    }
                }
            } else
                win = lastBet['result'] >= lastBet['target'];
        }
    }
    if (win) {
        const _0x4823c9 = _0x4fc934['yySuh'][_0x5957e8(0x421)]('|');
        let _0x271346 = 0x0;
        while (!![]) {
            switch (_0x4823c9[_0x271346++]) {
            case '0':
                currentstreak = winstreak;
                continue;
            case '1':
                color = _0x5957e8(0x40e);
                continue;
            case '2':
                winstreak++;
                continue;
            case '3':
                losestreak = 0x0;
                continue;
            case '4':
                wins++;
                continue;
            }
            break;
        }
    } else {
        color = _0x4fc934[_0x5957e8(0x40c)], losses++, losestreak++, winstreak = 0x0, currentstreak = -losestreak;
        if (_0x4fc934[_0x5957e8(0x3ad)](previousbet, maxLosseAmount))
            maxLosseAmount = previousbet;
    }
    if (_0x4fc934[_0x5957e8(0x291)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (winstreak > maxwinstreak)
        maxwinstreak = winstreak;
    if (_0x4fc934[_0x5957e8(0x21e)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (_0x4fc934[_0x5957e8(0x2d3)](balance, minbalance))
        minbalance = balance;
    if (_0x4fc934['FzMOX'](balance, maxbalance))
        maxbalance = balance;
    if (profit < minprofit)
        minprofit = profit;
    if (_0x4fc934[_0x5957e8(0x44a)](profit, maxprofit))
        maxprofit = profit;
    _0x4fc934[_0x5957e8(0x34e)](showInfo)[_0x5957e8(0x1d4)](async () => {
        const _0x2c0be0 = _0x5957e8;
        try {
            if (_0x4fc934[_0x2c0be0(0x2bc)](mode, _0x4fc934[_0x2c0be0(0x297)]))
                await updateLua();
            else {
                if (mode === 'js')
                    await _0x4fc934[_0x2c0be0(0x35c)](dobet);
                else
                    _0x4fc934[_0x2c0be0(0x2bc)](mode, 'advanced') && await _0x4fc934[_0x2c0be0(0x35c)](handleAdvanced);
            }
            if (_0x4fc934[_0x2c0be0(0x181)](win, sOW))
                _0x4fc934[_0x2c0be0(0x35c)](stop);
            if (run)
                _0x4fc934[_0x2c0be0(0x35c)](playBet);
        } catch (_0x2effb5) {
            _0x4fc934[_0x2c0be0(0x34e)](stop), log(_0x2effb5);
        }
    });
}
async function showInfo() {
    const _0x17be3c = _0x49b003, _0x4c9749 = {
            'MakuY': function (_0x156e43, _0x4885e4) {
                return _0x156e43 === _0x4885e4;
            },
            'aovuo': function (_0xf67c86, _0x1cce1c) {
                return _0xf67c86 < _0x1cce1c;
            },
            'WADpi': _0x17be3c(0x272),
            'zFEpx': 'green',
            'MCBob': _0x17be3c(0x2b1),
            'uNjei': function (_0x2e753a, _0x21aaa3) {
                return _0x2e753a > _0x21aaa3;
            },
            'YYBvl': _0x17be3c(0x222),
            'FCXRk': _0x17be3c(0x37a),
            'tzirC': _0x17be3c(0x41d),
            'ZDDiA': 'wdbWagered',
            'tdahD': _0x17be3c(0x1d1),
            'zrXBI': 'wdbProfit',
            'FqJSh': _0x17be3c(0x433),
            'xHEZb': _0x17be3c(0x369),
            'NTdqX': _0x17be3c(0x1c3),
            'hvMeY': _0x17be3c(0x385),
            'qMmcZ': _0x17be3c(0x204),
            'KHrfj': 'wdbCurrentStreak',
            'Wvamm': _0x17be3c(0x210),
            'RVQGZ': _0x17be3c(0x3ba),
            'xRNHh': _0x17be3c(0x2ec),
            'glhsP': _0x17be3c(0x316),
            'qNtyF': function (_0xb06e7a, _0x2b2846) {
                return _0xb06e7a / _0x2b2846;
            },
            'VlktY': function (_0x2a3c7d, _0xcd5257) {
                return _0x2a3c7d / _0xcd5257;
            },
            'phmpE': function (_0x4e66f6, _0x20fecf) {
                return _0x4e66f6 * _0x20fecf;
            },
            'gkRIj': function (_0x2437a0, _0x4966de) {
                return _0x2437a0 + _0x4966de;
            },
            'sqblN': function (_0x41bea9, _0x5115e1) {
                return _0x41bea9(_0x5115e1);
            },
            'oBIvs': _0x17be3c(0x37d),
            'Qabat': function (_0x538e5d, _0x1d5768) {
                return _0x538e5d / _0x1d5768;
            },
            'jElAt': function (_0x549663, _0x15a7d9) {
                return _0x549663 / _0x15a7d9;
            },
            'oqyRS': function (_0x1ca5b2, _0x3ad172) {
                return _0x1ca5b2 + _0x3ad172;
            },
            'DAtNm': _0x17be3c(0x29f),
            'ZSHiN': _0x17be3c(0x235),
            'Esspc': function (_0x5741ca, _0x27c1bd) {
                return _0x5741ca === _0x27c1bd;
            },
            'yzaoV': _0x17be3c(0x450),
            'xUNRm': _0x17be3c(0x2e0),
            'IiyLG': function (_0x5f3d6e, _0x905a1) {
                return _0x5f3d6e !== _0x905a1;
            },
            'JdUyE': _0x17be3c(0x332),
            'auQrN': 'plinko',
            'fQJIZ': function (_0x508db1, _0x211ac1) {
                return _0x508db1(_0x211ac1);
            },
            'JuwoE': function (_0xbbab95, _0x598822) {
                return _0xbbab95(_0x598822);
            },
            'KrNuS': function (_0x1ac271, _0x7ff22) {
                return _0x1ac271 === _0x7ff22;
            },
            'DtOPF': function (_0x4564d8, _0x1e4f6d) {
                return _0x4564d8 === _0x1e4f6d;
            },
            'JWLjl': _0x17be3c(0x1ec),
            'UdGQm': function (_0x5c78fd, _0x52c25b) {
                return _0x5c78fd(_0x52c25b);
            },
            'LWFaQ': '\x20Balls',
            'LeuKu': function (_0x2fbfe6, _0x3779a7) {
                return _0x2fbfe6 + _0x3779a7;
            },
            'EsbbF': function (_0x2ef2e8, _0x4e26fa) {
                return _0x2ef2e8 + _0x4e26fa;
            },
            'yGLAR': function (_0x3663fa, _0xa6700) {
                return _0x3663fa + _0xa6700;
            },
            'CUcou': function (_0x4b1aa8, _0x548d86) {
                return _0x4b1aa8 + _0x548d86;
            },
            'LiOGh': function (_0x166a17, _0x44527f) {
                return _0x166a17 + _0x44527f;
            },
            'DBGPo': function (_0x1c09d2, _0x382f42) {
                return _0x1c09d2(_0x382f42);
            },
            'BQzhp': _0x17be3c(0x345),
            'vMvWx': _0x17be3c(0x32c),
            'BxZes': _0x17be3c(0x2b4),
            'OrCHK': 'wdbHistory',
            'JVDuV': _0x17be3c(0x353),
            'dMfuS': function (_0x38c625, _0x2b9dcd) {
                return _0x38c625 > _0x2b9dcd;
            },
            'CWoih': function (_0x4fe66d, _0x58c7c5) {
                return _0x4fe66d(_0x58c7c5);
            },
            'RVQfI': function (_0x59e02c, _0x52242c) {
                return _0x59e02c !== _0x52242c;
            },
            'SUnRv': function (_0x290032, _0x23a8fb) {
                return _0x290032 !== _0x23a8fb;
            },
            'cRvrJ': function (_0x732971, _0x1f9b5e) {
                return _0x732971(_0x1f9b5e);
            },
            'kxMVY': function (_0x42f896, _0x40580e) {
                return _0x42f896 !== _0x40580e;
            },
            'hdnyz': function (_0xc7b4e, _0x597651) {
                return _0xc7b4e === _0x597651;
            },
            'LTRBN': function (_0x51232c, _0x4a1489) {
                return _0x51232c(_0x4a1489);
            },
            'Bisco': function (_0xffe01b, _0x714254) {
                return _0xffe01b(_0x714254);
            },
            'HydFh': function (_0x3c8b5e, _0x247e79) {
                return _0x3c8b5e > _0x247e79;
            }
        }, _0x3c45a5 = _0x4c9749[_0x17be3c(0x1e3)](profit, 0x0) ? darkMode ? _0x17be3c(0x2b1) : _0x17be3c(0x222) : _0x4c9749[_0x17be3c(0x192)](profit, 0x0) ? _0x4c9749[_0x17be3c(0x18f)] : _0x4c9749[_0x17be3c(0x231)], _0x17488c = _0x4c9749[_0x17be3c(0x1e3)](currentstreak, 0x0) ? darkMode ? _0x4c9749[_0x17be3c(0x467)] : 'black' : currentstreak < 0x0 ? _0x4c9749['WADpi'] : 'green', _0x380704 = _0x4c9749[_0x17be3c(0x3d5)](maxwinstreak, 0x0) ? _0x17be3c(0x40e) : 'black', _0x1b3b43 = _0x4c9749['uNjei'](maxlosestreak, 0x0) ? _0x4c9749[_0x17be3c(0x18f)] : _0x4c9749['YYBvl'];
    document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x1eb)])[_0x17be3c(0x21c)][_0x17be3c(0x2bf)] = _0x380704, document[_0x17be3c(0x2d9)](_0x4c9749['tzirC'])[_0x17be3c(0x21c)]['color'] = _0x1b3b43, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x3f0)])[_0x17be3c(0x2c2)] = wagered[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x438)])[_0x17be3c(0x2c2)] = balance[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x17be3c(0x295))[_0x17be3c(0x21c)][_0x17be3c(0x2bf)] = _0x3c45a5, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x35e)])[_0x17be3c(0x2c2)] = profit[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x25e)])[_0x17be3c(0x2c2)] = maxBetAmount[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x462)])['innerText'] = maxLosseAmount[_0x17be3c(0x17b)](decimalAmountView), document['getElementById'](_0x4c9749[_0x17be3c(0x40b)])[_0x17be3c(0x2c2)] = bets, document[_0x17be3c(0x2d9)](_0x4c9749['hvMeY'])[_0x17be3c(0x2c2)] = wins, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x190)])[_0x17be3c(0x2c2)] = losses, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x1da)])[_0x17be3c(0x21c)][_0x17be3c(0x2bf)] = _0x17488c, document['getElementById'](_0x4c9749[_0x17be3c(0x1da)])[_0x17be3c(0x2c2)] = currentstreak, document['getElementById'](_0x4c9749[_0x17be3c(0x1eb)])['innerText'] = maxwinstreak, document[_0x17be3c(0x2d9)](_0x4c9749['tzirC'])[_0x17be3c(0x2c2)] = maxlosestreak, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x2a7)])[_0x17be3c(0x2c2)] = minbalance[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x19d)])[_0x17be3c(0x2c2)] = maxbalance[_0x17be3c(0x17b)](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x3fb)])[_0x17be3c(0x2c2)] = minprofit['toFixed'](decimalAmountView), document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x457)])[_0x17be3c(0x2c2)] = maxprofit['toFixed'](decimalAmountView), percentWagered = _0x4c9749[_0x17be3c(0x195)](wagered, startBalance), percentWagered = _0x4c9749['VlktY'](Math[_0x17be3c(0x2b7)](_0x4c9749['phmpE'](_0x4c9749[_0x17be3c(0x1ba)](percentWagered, Number['EPSILON']), 0x2710)), 0x2710), percentWagered = _0x4c9749[_0x17be3c(0x42d)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x283)])[_0x17be3c(0x2c2)] = percentWagered, percentProfit = _0x4c9749[_0x17be3c(0x194)](profit, startBalance) * 0x64, percentProfit = _0x4c9749[_0x17be3c(0x429)](Math[_0x17be3c(0x2b7)](_0x4c9749[_0x17be3c(0x3bb)](percentProfit, Number[_0x17be3c(0x408)]) * 0x2710), 0x2710), percentProfit = _0x4c9749[_0x17be3c(0x42d)](isNaN, percentProfit) ? 0x0 : percentProfit, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x34a)])[_0x17be3c(0x21c)]['color'] = _0x3c45a5, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x176)])[_0x17be3c(0x2c2)] = percentProfit;
    if (!stopHistory) {
        const _0x4b4c1a = _0x4c9749[_0x17be3c(0x18c)](game, _0x4c9749[_0x17be3c(0x1bd)]) ? lastBet['bethigh'] ? '>' : '<' : '>', _0x46ddc3 = lastBet['bethigh'] ? _0x17be3c(0x3c6) + bets + _0x17be3c(0x38d) : '<input\x20id=\x22bethigh' + bets + '\x22\x20type=\x22checkbox\x22\x20/>', _0x3167c1 = '' + (havePlinkoRows ? plinkoRow + _0x4c9749['xUNRm'] : '') + plinkoRisk, _0x565c14 = '<td>' + bets + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + Number(lastBet['amount'])[_0x17be3c(0x17b)](decimalAmountView) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x4c9749[_0x17be3c(0x1ef)](game, _0x4c9749['JdUyE']) ? _0x46ddc3 : betSide) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + (_0x4c9749[_0x17be3c(0x18c)](game, _0x4c9749['auQrN']) ? _0x3167c1 : _0x4c9749[_0x17be3c(0x3bb)](_0x4c9749[_0x17be3c(0x3d1)](Number, lastBet[_0x17be3c(0x427)])[_0x17be3c(0x17b)](decimalChanceView), '%')) + _0x17be3c(0x312) + Number(lastBet[_0x17be3c(0x1e6)])['toFixed'](decimalChanceView) + _0x17be3c(0x200) + _0x4c9749[_0x17be3c(0x377)](Number, lastBet[_0x17be3c(0x330)])[_0x17be3c(0x17b)](decimalAmountView) + _0x17be3c(0x312) + (_0x4c9749[_0x17be3c(0x1ef)](game, _0x4c9749[_0x17be3c(0x1c9)]) ? _0x4c9749[_0x17be3c(0x23f)](game, _0x4c9749['auQrN']) ? _0x3167c1 : _0x4c9749[_0x17be3c(0x26a)](game, _0x4c9749[_0x17be3c(0x262)]) ? _0x4c9749[_0x17be3c(0x178)](Number, lastBet[_0x17be3c(0x393)])[_0x17be3c(0x17b)](0x0) + _0x4c9749[_0x17be3c(0x1a0)] : _0x4c9749[_0x17be3c(0x388)](_0x4b4c1a, Number(lastBet[_0x17be3c(0x393)])[_0x17be3c(0x17b)](decimalTargetResult)) : _0x4c9749[_0x17be3c(0x289)](_0x4c9749[_0x17be3c(0x43a)](_0x4c9749[_0x17be3c(0x43f)](target1, '|'), target2) + (target3 ? _0x4c9749[_0x17be3c(0x289)]('|', target3) : ''), target4 ? '|' + target4 : '')) + _0x17be3c(0x312) + (_0x4c9749[_0x17be3c(0x23f)](game, _0x17be3c(0x1ec)) ? _0x4c9749[_0x17be3c(0x2e6)](_0x4c9749['DBGPo'](Number, result)[_0x17be3c(0x17b)](0x0), _0x4c9749[_0x17be3c(0x34c)]) : Number(result)[_0x17be3c(0x17b)](decimalTargetResult)) + _0x17be3c(0x312) + lastBet[_0x17be3c(0x303)] + _0x17be3c(0x312) + lastBet['id'] + '</td>', _0x57c85d = document[_0x17be3c(0x3c0)]('tr');
        _0x57c85d['style'][_0x17be3c(0x175)] = win ? _0x4c9749['vMvWx'] : _0x4c9749[_0x17be3c(0x27b)], _0x57c85d[_0x17be3c(0x19f)] = _0x565c14, document[_0x17be3c(0x2d9)](_0x4c9749['OrCHK'])[_0x17be3c(0x2c0)](_0x57c85d, document[_0x17be3c(0x2d9)](_0x4c9749[_0x17be3c(0x3f4)])[_0x17be3c(0x382)][0x0]);
        const _0x37a2be = document[_0x17be3c(0x1c1)](_0x4c9749['JVDuV'])['rows'];
        if (_0x4c9749[_0x17be3c(0x21a)](_0x37a2be[_0x17be3c(0x33c)], maxRows))
            document['querySelector'](_0x4c9749['JVDuV'])[_0x17be3c(0x469)][_0x17be3c(0x29c)]();
    }
    const _0x5529b9 = '' + (havePlinkoRows ? _0x4c9749[_0x17be3c(0x3bb)](plinkoRow, _0x4c9749[_0x17be3c(0x35b)]) : '') + plinkoRisk;
    return fullLogs[_0x17be3c(0x375)]({
        'game': game,
        'bets': bets,
        'amount': _0x4c9749[_0x17be3c(0x456)](Number, lastBet[_0x17be3c(0x3c7)])['toFixed'](decimalAmountView),
        'bethigh': _0x4c9749[_0x17be3c(0x20a)](game, _0x17be3c(0x332)) ? lastBet[_0x17be3c(0x1bc)] : null,
        'chance': _0x4c9749[_0x17be3c(0x2d4)](game, _0x4c9749[_0x17be3c(0x1c9)]) ? _0x4c9749[_0x17be3c(0x329)](Number, lastBet[_0x17be3c(0x427)])[_0x17be3c(0x17b)](decimalChanceView) : lastBet[_0x17be3c(0x427)],
        'target': _0x4c9749['kxMVY'](game, _0x4c9749[_0x17be3c(0x1c9)]) ? _0x4c9749[_0x17be3c(0x404)](game, _0x4c9749[_0x17be3c(0x3e9)]) ? _0x5529b9 : lastBet['target'] : null,
        'roll': Number(lastBet[_0x17be3c(0x1e6)])[_0x17be3c(0x17b)](decimalChanceView),
        'result': _0x4c9749[_0x17be3c(0x2f5)](Number, result)['toFixed'](decimalTargetResult),
        'profit': _0x4c9749[_0x17be3c(0x2b0)](Number, lastBet['profit'])['toFixed'](decimalAmountView),
        'nonce': lastBet[_0x17be3c(0x303)],
        'id': lastBet['id'],
        'chance1': _0x4c9749[_0x17be3c(0x1e3)](game, _0x4c9749[_0x17be3c(0x1c9)]) ? lastBet['chance1'] : null,
        'chance2': _0x4c9749[_0x17be3c(0x404)](game, _0x4c9749[_0x17be3c(0x1c9)]) ? lastBet[_0x17be3c(0x1bb)] : null,
        'chance3': game === _0x17be3c(0x332) ? lastBet['chance3'] : null,
        'chance4': game === _0x4c9749[_0x17be3c(0x1c9)] ? lastBet[_0x17be3c(0x33f)] : null,
        'betSide': _0x4c9749['DtOPF'](game, _0x4c9749['JdUyE']) ? lastBet[_0x17be3c(0x3ca)] : null
    }), _0x4c9749[_0x17be3c(0x1ce)](fullLogs[_0x17be3c(0x33c)], 0x2710) && fullLogs[_0x17be3c(0x3c1)](), !stopChart && chart['updateChart'](betsChart, profitChart, color), _0x17be3c(0x20d);
}
async function updateStats() {
    const _0x378056 = _0x49b003, _0x5cd107 = {
            'CVSKa': function (_0x26ad52, _0x3b1877) {
                return _0x26ad52 === _0x3b1877;
            },
            'IEpIy': _0x378056(0x2b1),
            'mdazW': _0x378056(0x222),
            'TAWYt': function (_0x13bf6b, _0x471005) {
                return _0x13bf6b < _0x471005;
            },
            'FfTeW': _0x378056(0x272),
            'knHCj': _0x378056(0x40e),
            'tAkJM': function (_0x1d1c59, _0x49262d) {
                return _0x1d1c59 < _0x49262d;
            },
            'HbytV': function (_0x550fc4, _0x19d471) {
                return _0x550fc4 > _0x19d471;
            },
            'jEHvF': _0x378056(0x37a),
            'uTCBx': _0x378056(0x41d),
            'IwEce': _0x378056(0x36b),
            'mxmHM': _0x378056(0x1d1),
            'dGFHl': _0x378056(0x295),
            'SjoHj': _0x378056(0x433),
            'ijcAz': _0x378056(0x369),
            'xwcxW': _0x378056(0x1c3),
            'CBafA': 'wdbWins',
            'oPOFA': 'wdbLosses',
            'IrzBz': 'wdbCurrentStreak',
            'QEqEd': _0x378056(0x210),
            'JLlev': _0x378056(0x316),
            'VyVJz': function (_0x441346, _0x5ace0c) {
                return _0x441346 / _0x5ace0c;
            },
            'OvPXF': function (_0x123e15, _0x25d426) {
                return _0x123e15(_0x25d426);
            },
            'fMnyt': function (_0x4d5259, _0x5e1c16) {
                return _0x4d5259(_0x5e1c16);
            },
            'EHoCG': 'wdbPercentWagered',
            'LxFJl': function (_0x2010ae, _0x35cee9) {
                return _0x2010ae * _0x35cee9;
            },
            'HAnxh': function (_0x2d287c, _0x3dc9fa) {
                return _0x2d287c + _0x3dc9fa;
            },
            'xRAXM': function (_0x3b15f1, _0x348403) {
                return _0x3b15f1(_0x348403);
            },
            'uWLLJ': _0x378056(0x3e5)
        }, _0x150ba1 = _0x5cd107[_0x378056(0x40a)](profit, 0x0) ? darkMode ? _0x5cd107[_0x378056(0x25a)] : _0x5cd107[_0x378056(0x3f9)] : _0x5cd107[_0x378056(0x2ab)](profit, 0x0) ? _0x5cd107[_0x378056(0x25d)] : _0x5cd107['knHCj'], _0x190616 = currentstreak === 0x0 ? darkMode ? _0x5cd107[_0x378056(0x25a)] : _0x5cd107['mdazW'] : _0x5cd107[_0x378056(0x3af)](currentstreak, 0x0) ? _0x5cd107[_0x378056(0x25d)] : _0x5cd107[_0x378056(0x373)], _0x18d629 = _0x5cd107[_0x378056(0x34d)](maxwinstreak, 0x0) ? _0x378056(0x40e) : darkMode ? _0x5cd107[_0x378056(0x25a)] : _0x5cd107[_0x378056(0x3f9)], _0x4c3973 = _0x5cd107[_0x378056(0x34d)](maxlosestreak, 0x0) ? _0x5cd107['FfTeW'] : darkMode ? _0x5cd107[_0x378056(0x25a)] : _0x5cd107[_0x378056(0x3f9)];
    return document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x435)])[_0x378056(0x21c)][_0x378056(0x2bf)] = _0x18d629, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x310)])[_0x378056(0x21c)][_0x378056(0x2bf)] = _0x4c3973, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x370)])[_0x378056(0x2c2)] = wagered[_0x378056(0x17b)](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x441)])[_0x378056(0x2c2)] = balance[_0x378056(0x17b)](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x197)])[_0x378056(0x21c)]['color'] = _0x150ba1, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x197)])[_0x378056(0x2c2)] = profit['toFixed'](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107['SjoHj'])[_0x378056(0x2c2)] = maxBetAmount['toFixed'](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x324)])[_0x378056(0x2c2)] = maxLosseAmount[_0x378056(0x17b)](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x32b)])[_0x378056(0x2c2)] = bets, document[_0x378056(0x2d9)](_0x5cd107['CBafA'])[_0x378056(0x2c2)] = wins, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x44b)])[_0x378056(0x2c2)] = losses, document['getElementById'](_0x5cd107[_0x378056(0x3a7)])[_0x378056(0x21c)][_0x378056(0x2bf)] = _0x190616, document[_0x378056(0x2d9)](_0x378056(0x3c4))[_0x378056(0x2c2)] = currentstreak, document[_0x378056(0x2d9)](_0x378056(0x37a))[_0x378056(0x2c2)] = maxwinstreak, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x310)])[_0x378056(0x2c2)] = maxlosestreak, document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x187)])['innerText'] = minbalance[_0x378056(0x17b)](decimalAmountView), document[_0x378056(0x2d9)]('wdbMaxBalance')[_0x378056(0x2c2)] = maxbalance['toFixed'](decimalAmountView), document[_0x378056(0x2d9)](_0x378056(0x2ec))[_0x378056(0x2c2)] = minprofit[_0x378056(0x17b)](decimalAmountView), document[_0x378056(0x2d9)](_0x5cd107[_0x378056(0x1d0)])['innerText'] = maxprofit['toFixed'](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x5cd107[_0x378056(0x3d4)](Math['round']((percentWagered + Number['EPSILON']) * 0x64), 0x64), percentWagered = _0x5cd107[_0x378056(0x32a)](isNaN, percentWagered) || !_0x5cd107['fMnyt'](isFinite, percentWagered) ? 0x0 : percentWagered, document[_0x378056(0x2d9)](_0x5cd107['EHoCG'])[_0x378056(0x2c2)] = percentWagered, percentProfit = _0x5cd107['LxFJl'](_0x5cd107['VyVJz'](profit, startBalance), 0x64), percentProfit = Math[_0x378056(0x2b7)](_0x5cd107['HAnxh'](percentProfit, Number[_0x378056(0x408)]) * 0x64) / 0x64, percentProfit = _0x5cd107[_0x378056(0x2ca)](isNaN, percentProfit) || !_0x5cd107[_0x378056(0x32a)](isFinite, percentProfit) ? 0x0 : percentProfit, document[_0x378056(0x2d9)](_0x378056(0x29f))['style'][_0x378056(0x2bf)] = _0x150ba1, document[_0x378056(0x2d9)](_0x378056(0x235))[_0x378056(0x2c2)] = percentProfit, _0x5cd107[_0x378056(0x1af)];
}
function log(_0x573dd5) {
    const _0x24e749 = _0x49b003, _0x307ac1 = {
            'wZrsn': function (_0x32917a, _0x573f26) {
                return _0x32917a > _0x573f26;
            }
        }, _0x150ecc = document[_0x24e749(0x2d9)](_0x24e749(0x193)), _0x5595c2 = document['createElement']('li');
    _0x5595c2[_0x24e749(0x2c2)] = _0x573dd5, _0x5595c2[_0x24e749(0x21c)][_0x24e749(0x2bf)] = darkMode ? _0x24e749(0x2b1) : _0x24e749(0x222), _0x150ecc[_0x24e749(0x2c0)](_0x5595c2, _0x150ecc[_0x24e749(0x3e6)]), _0x307ac1['wZrsn'](_0x150ecc['children']['length'], maxRows) && _0x150ecc[_0x24e749(0x1a8)](_0x150ecc['lastChild']);
}
function updateSpeed() {
    const _0x53dfd8 = _0x49b003, _0x3f8700 = {
            'BkjwX': function (_0x1ade08, _0x2f1a78) {
                return _0x1ade08 < _0x2f1a78;
            },
            'ctFfl': _0x53dfd8(0x3c9),
            'MdGwj': _0x53dfd8(0x35d),
            'QWaJc': function (_0x480538, _0x25e896) {
                return _0x480538 / _0x25e896;
            },
            'XYCyM': function (_0x175d18, _0x518146) {
                return _0x175d18 - _0x518146;
            },
            'ztFEj': function (_0x4cdafc, _0x4cfa78) {
                return _0x4cdafc / _0x4cfa78;
            }
        };
    if (_0x3f8700[_0x53dfd8(0x2fb)](speedHistory[_0x53dfd8(0x33c)], 0x2)) {
        document[_0x53dfd8(0x2d9)](_0x3f8700[_0x53dfd8(0x3bf)])[_0x53dfd8(0x2c2)] = _0x3f8700[_0x53dfd8(0x397)];
        return;
    }
    const _0xcd349f = Date[_0x53dfd8(0x174)](), _0x1e83c1 = 0x2710;
    speedHistory = speedHistory[_0x53dfd8(0x2c7)](_0x778d7 => _0xcd349f - _0x778d7 <= _0x1e83c1);
    if (speedHistory[_0x53dfd8(0x33c)] < 0x2) {
        document['getElementById'](_0x3f8700[_0x53dfd8(0x3bf)])[_0x53dfd8(0x2c2)] = '0.00';
        return;
    }
    const _0x3c0689 = speedHistory[0x0], _0x5b7f47 = _0x3f8700[_0x53dfd8(0x225)](_0x3f8700[_0x53dfd8(0x3cf)](_0xcd349f, _0x3c0689), 0x3e8), _0x259475 = _0x3f8700[_0x53dfd8(0x1de)](speedHistory[_0x53dfd8(0x33c)], _0x5b7f47);
    document[_0x53dfd8(0x2d9)](_0x3f8700[_0x53dfd8(0x3bf)])['innerText'] = _0x259475[_0x53dfd8(0x17b)](0x2);
}
function updateTimer() {
    const _0x1e13be = _0x49b003, _0x2d3bd0 = {
            'abPFH': function (_0x14a6b1, _0x9c40d1) {
                return _0x14a6b1 / _0x9c40d1;
            },
            'FXJwK': function (_0x22d19c, _0x54250e) {
                return _0x22d19c * _0x54250e;
            },
            'NCntL': function (_0x2e50f0, _0x40defc) {
                return _0x2e50f0 / _0x40defc;
            },
            'Sgiik': function (_0x4e7696, _0xee645d) {
                return _0x4e7696 % _0xee645d;
            },
            'MGGcx': function (_0x5eedf0, _0x4081d2) {
                return _0x5eedf0 / _0x4081d2;
            },
            'qHaip': _0x1e13be(0x241)
        };
    elapsedTime++;
    const _0x5356e6 = Math[_0x1e13be(0x318)](_0x2d3bd0['abPFH'](elapsedTime, _0x2d3bd0[_0x1e13be(0x451)](_0x2d3bd0[_0x1e13be(0x451)](0x18, 0x3c), 0x3c))), _0x3b3fae = Math[_0x1e13be(0x318)](_0x2d3bd0[_0x1e13be(0x199)](_0x2d3bd0[_0x1e13be(0x31b)](elapsedTime, _0x2d3bd0['FXJwK'](_0x2d3bd0[_0x1e13be(0x451)](0x18, 0x3c), 0x3c)), _0x2d3bd0[_0x1e13be(0x451)](0x3c, 0x3c))), _0x5cab23 = Math[_0x1e13be(0x318)](_0x2d3bd0[_0x1e13be(0x448)](_0x2d3bd0[_0x1e13be(0x31b)](elapsedTime, _0x2d3bd0['FXJwK'](0x3c, 0x3c)), 0x3c)), _0x5cca7e = elapsedTime % 0x3c;
    document[_0x1e13be(0x2d9)](_0x2d3bd0[_0x1e13be(0x302)])[_0x1e13be(0x2c2)] = _0x5356e6 + ':' + _0x3b3fae + ':' + _0x5cab23 + ':' + _0x5cca7e;
}
async function start() {
    const _0x3f31ee = _0x49b003, _0x56211d = {
            'ztFir': _0x3f31ee(0x332),
            'LHrbv': _0x3f31ee(0x241),
            'jzWXQ': _0x3f31ee(0x27c),
            'sfAOr': _0x3f31ee(0x2d0),
            'YoaUU': _0x3f31ee(0x309),
            'oVcPj': _0x3f31ee(0x203),
            'oHFvJ': _0x3f31ee(0x2b9),
            'BZEOJ': _0x3f31ee(0x171),
            'bCZpc': function (_0x2a174a, _0x3b64b1) {
                return _0x2a174a(_0x3b64b1);
            },
            'fclmo': function (_0x503c95, _0x1df65c, _0x1aaab1) {
                return _0x503c95(_0x1df65c, _0x1aaab1);
            },
            'knVfl': function (_0x54d246, _0x5e26e1, _0x4fe707) {
                return _0x54d246(_0x5e26e1, _0x4fe707);
            },
            'lTfwg': function (_0x3c9f34, _0x43cf96) {
                return _0x3c9f34 === _0x43cf96;
            },
            'djeET': _0x3f31ee(0x1d6),
            'nMMtT': _0x3f31ee(0x2c4),
            'QMJcA': 'not\x20',
            'vdlkf': _0x3f31ee(0x3d6),
            'oyNmh': '$1=$1-$2\x20',
            'seHSB': _0x3f31ee(0x3aa),
            'uELkW': _0x3f31ee(0x461),
            'HSFGR': _0x3f31ee(0x32f),
            'VNZzz': _0x3f31ee(0x2b5),
            'lmFrz': 'script',
            'exNoL': _0x3f31ee(0x29a),
            'ZSkyt': _0x3f31ee(0x45a),
            'mcqsQ': _0x3f31ee(0x1aa),
            'aoGFT': function (_0x5782c7, _0x2488e4) {
                return _0x5782c7(_0x2488e4);
            },
            'Gfana': function (_0x3d99c6) {
                return _0x3d99c6();
            }
        };
    if (game === _0x56211d[_0x3f31ee(0x24b)]) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = 'between';
        const _0x2ff6ec = 'chance1=' + chance1 + _0x3f31ee(0x1c2) + chance2 + _0x3f31ee(0x250) + chance3 + '\x0a\x20\x20\x20\x20chance4=' + chance4 + _0x3f31ee(0x43b) + betSide + '\x22';
        fengari['load'](_0x2ff6ec)();
    }
    try {
        if (!run) {
            document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x3a3)])[_0x3f31ee(0x2c2)] = _0x56211d[_0x3f31ee(0x182)], document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x267)])[_0x3f31ee(0x2f0)] = !![], document[_0x3f31ee(0x2d9)]('wdbMenuMode')[_0x3f31ee(0x2f0)] = !![], document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x45d)])[_0x3f31ee(0x2f0)] = !![], document[_0x3f31ee(0x2d9)](_0x56211d['oVcPj'])[_0x3f31ee(0x2f0)] = !![], document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x1fc)])['disabled'] = !![], document[_0x3f31ee(0x2d9)](_0x56211d['BZEOJ'])[_0x3f31ee(0x2f0)] = !![], document['querySelectorAll'](_0x3f31ee(0x198))['forEach'](_0x58c0d9 => _0x58c0d9[_0x3f31ee(0x2f0)] = !![]), document['querySelectorAll'](_0x3f31ee(0x364))[_0x3f31ee(0x1cf)](_0x335c30 => _0x335c30[_0x3f31ee(0x2f0)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x56211d[_0x3f31ee(0x2c6)](clearInterval, timerInterval), _0x56211d[_0x3f31ee(0x2c6)](clearInterval, speedUpdateInterval), timerInterval = _0x56211d[_0x3f31ee(0x261)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x56211d[_0x3f31ee(0x23c)](setInterval, updateSpeed, 0x1f4), fengari[_0x3f31ee(0x346)](_0x3f31ee(0x3a1))(), fengari[_0x3f31ee(0x346)](_0x3f31ee(0x3f6))();
            if (_0x56211d[_0x3f31ee(0x307)](mode, _0x56211d[_0x3f31ee(0x1f8)])) {
                const _0x3e5d5b = _0x56211d[_0x3f31ee(0x211)][_0x3f31ee(0x421)]('|');
                let _0x4c3f62 = 0x0;
                while (!![]) {
                    switch (_0x3e5d5b[_0x4c3f62++]) {
                    case '0':
                        diceScript = luaEditor[_0x3f31ee(0x336)]();
                        continue;
                    case '1':
                        fengari[_0x3f31ee(0x346)](diceScript)();
                        continue;
                    case '2':
                        diceScript = diceScript[_0x3f31ee(0x277)](/!=/g, '~=')['replace'](/!/g, _0x56211d[_0x3f31ee(0x401)])[_0x3f31ee(0x277)](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x56211d['vdlkf'])[_0x3f31ee(0x277)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x56211d[_0x3f31ee(0x22f)])['replace'](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x56211d['seHSB'])[_0x3f31ee(0x277)](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x56211d[_0x3f31ee(0x3d0)]);
                        continue;
                    case '3':
                        document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x2e5)])[_0x3f31ee(0x2c2)] = scriptname ? _0x3f31ee(0x2eb) + scriptname : '';
                        continue;
                    case '4':
                        scriptname = fengari[_0x3f31ee(0x346)](_0x56211d[_0x3f31ee(0x3f1)])();
                        continue;
                    }
                    break;
                }
            } else {
                if (_0x56211d[_0x3f31ee(0x307)](mode, 'js')) {
                    const _0x27cae4 = document[_0x3f31ee(0x2d9)]('wdbRunningScript');
                    if (_0x27cae4)
                        _0x27cae4[_0x3f31ee(0x29c)]();
                    diceScript = jsEditor[_0x3f31ee(0x336)]();
                    const _0x30ca23 = document[_0x3f31ee(0x3c0)](_0x56211d[_0x3f31ee(0x288)]);
                    _0x30ca23['id'] = _0x56211d[_0x3f31ee(0x2bd)], _0x30ca23[_0x3f31ee(0x19f)] = diceScript, document[_0x3f31ee(0x1f2)][_0x3f31ee(0x3d3)](_0x30ca23);
                } else
                    _0x56211d['lTfwg'](mode, _0x56211d[_0x3f31ee(0x2f1)]) && (basebet = _0x56211d[_0x3f31ee(0x2c6)](Number, document[_0x3f31ee(0x2d9)](_0x56211d[_0x3f31ee(0x3ac)])['value']), nextbet = basebet, chance = _0x56211d[_0x3f31ee(0x1a9)](Number, document[_0x3f31ee(0x2d9)](_0x3f31ee(0x425))[_0x3f31ee(0x334)]), bethigh = document[_0x3f31ee(0x1c1)]('#advancedBetHigh')[_0x3f31ee(0x240)]);
            }
            if (run)
                return playBet();
        }
    } catch (_0x53ec76) {
        _0x56211d['Gfana'](stop), _0x56211d['bCZpc'](log, _0x53ec76);
    }
}
function stop() {
    const _0xe0b27d = _0x49b003, _0x2e668e = {
            'bosMy': 'wdbStartButton',
            'Qtfer': _0xe0b27d(0x203),
            'Ivunt': _0xe0b27d(0x2b9),
            'pKuiw': _0xe0b27d(0x171),
            'REYre': '#wdbSaveScriptButton,\x20#wdbOpenScript'
        };
    if (!run)
        return;
    run = ![], sOW = ![], clearInterval(timerInterval), clearInterval(speedUpdateInterval);
    const _0x1316a1 = [
        _0xe0b27d(0x2d0),
        'wdbMenuMode',
        _0x2e668e[_0xe0b27d(0x411)],
        _0x2e668e[_0xe0b27d(0x3b6)],
        _0x2e668e[_0xe0b27d(0x372)],
        _0x2e668e['pKuiw'],
        _0xe0b27d(0x38c)
    ];
    _0x1316a1[_0xe0b27d(0x1cf)](_0x2ae12c => {
        const _0x4eceb3 = _0xe0b27d;
        document[_0x4eceb3(0x2d9)](_0x2ae12c)[_0x4eceb3(0x2f0)] = ![];
    }), document[_0xe0b27d(0x280)](_0x2e668e[_0xe0b27d(0x185)])[_0xe0b27d(0x1cf)](_0x38d3e9 => _0x38d3e9[_0xe0b27d(0x2f0)] = ![]);
}
function _0x40c1(_0x56cbd4, _0x5d6e17) {
    const _0x427492 = _0x4274();
    return _0x40c1 = function (_0x40c1bb, _0x42ea06) {
        _0x40c1bb = _0x40c1bb - 0x16e;
        let _0x5e24d5 = _0x427492[_0x40c1bb];
        return _0x5e24d5;
    }, _0x40c1(_0x56cbd4, _0x5d6e17);
}
async function resume(_0x2738a6) {
    const _0x3012cd = _0x49b003, _0x10f543 = {
            'Xdnrd': _0x3012cd(0x2d0),
            'NeaSv': _0x3012cd(0x243),
            'aYOLF': _0x3012cd(0x309),
            'ixnqo': _0x3012cd(0x2b9),
            'XaQFc': 'wdbOpenJSScript',
            'lhnZO': _0x3012cd(0x26d),
            'PYhKH': function (_0x9e5a97, _0x1f9d35) {
                return _0x9e5a97(_0x1f9d35);
            },
            'xBpvo': function (_0x17502e, _0x34c2d4, _0x542824) {
                return _0x17502e(_0x34c2d4, _0x542824);
            },
            'UGfqY': function (_0x39f3ef) {
                return _0x39f3ef();
            }
        };
    if (!run) {
        const _0x2e49a8 = [
            _0x10f543[_0x3012cd(0x3dd)],
            _0x10f543[_0x3012cd(0x3a9)],
            _0x10f543['aYOLF'],
            _0x3012cd(0x203),
            _0x10f543[_0x3012cd(0x281)],
            _0x10f543[_0x3012cd(0x234)]
        ];
        return _0x2e49a8[_0x3012cd(0x1cf)](_0x2652fd => {
            const _0x35befb = _0x3012cd;
            document[_0x35befb(0x2d9)](_0x2652fd)[_0x35befb(0x2f0)] = !![];
        }), document[_0x3012cd(0x280)](_0x10f543[_0x3012cd(0x306)])[_0x3012cd(0x1cf)](_0x38306c => _0x38306c['disabled'] = !![]), !_0x2738a6 && (_0x10f543['PYhKH'](log, 'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s'), await new Promise(_0x456376 => setTimeout(_0x456376, 0x1388))), run = !![], sOW = ![], timerInterval = _0x10f543[_0x3012cd(0x428)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x10f543['xBpvo'](setInterval, updateSpeed, 0x1f4), _0x10f543[_0x3012cd(0x1dd)](playBet);
    }
}
function stopOnWin() {
    const _0x40d183 = _0x49b003, _0x2a5421 = { 'lTzCg': 'wdbStopOnWinButton' };
    sOW = !![];
    if (run)
        document['getElementById'](_0x2a5421['lTzCg'])[_0x40d183(0x2f0)] = !![];
}
async function playBet() {
    const _0x3a111e = _0x49b003, _0x42e8a2 = {
            'cxSWp': function (_0x516ded, _0xa67456) {
                return _0x516ded === _0xa67456;
            },
            'GKQKR': _0x3a111e(0x1d6),
            'oUITT': '4|0|6|5|7|3|1|2',
            'psUvw': 'return\x20chance',
            'nkWHQ': 'return\x20chance4',
            'CyyLu': _0x3a111e(0x33a),
            'USkKG': _0x3a111e(0x3fd),
            'OnXwP': _0x3a111e(0x391),
            'sdFsl': function (_0x10e161, _0x145c08) {
                return _0x10e161(_0x145c08);
            },
            'UniwD': function (_0x594eef, _0x1a06a8) {
                return _0x594eef(_0x1a06a8);
            },
            'XYrVx': _0x3a111e(0x332),
            'VMQjr': function (_0x2af5f2, _0x2472f0) {
                return _0x2af5f2 + _0x2472f0;
            },
            'YwgYe': _0x3a111e(0x2e0),
            'UDjuK': 'dice',
            'AyDoK': _0x3a111e(0x270),
            'oTTvS': 'low',
            'txYLW': function (_0x50ce28) {
                return _0x50ce28();
            }
        };
    try {
        if (_0x42e8a2[_0x3a111e(0x3ff)](mode, _0x42e8a2[_0x3a111e(0x3b4)])) {
            const _0x162711 = _0x42e8a2[_0x3a111e(0x440)][_0x3a111e(0x421)]('|');
            let _0x27ced2 = 0x0;
            while (!![]) {
                switch (_0x162711[_0x27ced2++]) {
                case '0':
                    chance = fengari[_0x3a111e(0x346)](_0x42e8a2['psUvw'])();
                    continue;
                case '1':
                    chance4 = fengari[_0x3a111e(0x346)](_0x42e8a2[_0x3a111e(0x365)])();
                    continue;
                case '2':
                    betSide = fengari['load'](_0x42e8a2['CyyLu'])();
                    continue;
                case '3':
                    chance3 = fengari[_0x3a111e(0x346)](_0x42e8a2[_0x3a111e(0x29b)])();
                    continue;
                case '4':
                    nextbet = fengari[_0x3a111e(0x346)](_0x3a111e(0x2f6))();
                    continue;
                case '5':
                    chance1 = fengari[_0x3a111e(0x346)](_0x42e8a2[_0x3a111e(0x205)])();
                    continue;
                case '6':
                    bethigh = fengari['load'](_0x3a111e(0x1b8))();
                    continue;
                case '7':
                    chance2 = fengari[_0x3a111e(0x346)]('return\x20chance2')();
                    continue;
                }
                break;
            }
        }
        nextbet = Number(nextbet), chance = _0x42e8a2[_0x3a111e(0x360)](Number, chance), previousbet = nextbet, lastBet = {
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
            const _0x43729c = _0x42e8a2[_0x3a111e(0x360)](Number, lastBet[_0x3a111e(0x3c7)])[_0x3a111e(0x17b)](decimalAmountView), _0x23928c = _0x42e8a2[_0x3a111e(0x31c)](Number, lastBet['chance'])[_0x3a111e(0x17b)](decimalChanceView), _0x5046b7 = game !== _0x42e8a2[_0x3a111e(0x216)] ? _0x42e8a2[_0x3a111e(0x3ff)](game, _0x3a111e(0x2e2)) ? _0x3a111e(0x276) + _0x43729c + _0x3a111e(0x409) + (havePlinkoRows ? _0x42e8a2[_0x3a111e(0x25f)](plinkoRow, _0x42e8a2[_0x3a111e(0x3b2)]) : '') + plinkoRisk + _0x3a111e(0x3da) : _0x3a111e(0x276) + _0x43729c + _0x3a111e(0x409) + _0x23928c + _0x3a111e(0x362) + (_0x42e8a2['cxSWp'](game, _0x42e8a2[_0x3a111e(0x3a2)]) ? bethigh ? _0x42e8a2[_0x3a111e(0x196)] : _0x42e8a2[_0x3a111e(0x31e)] : _0x42e8a2[_0x3a111e(0x196)]) : _0x3a111e(0x276) + _0x43729c + _0x3a111e(0x409) + chance1 + '|' + chance2 + (chance3 ? _0x42e8a2['VMQjr']('|', chance3) : '') + (chance4 ? _0x42e8a2['VMQjr']('|', chance4) : '') + _0x3a111e(0x28f) + betSide;
            _0x42e8a2['sdFsl'](log, _0x5046b7);
        }
        if (run)
            return _0x42e8a2['txYLW'](sendBet);
    } catch (_0x572079) {
        stop(), _0x42e8a2['UniwD'](log, _0x572079);
    }
}
function resetall() {
    const _0x7e0243 = _0x49b003, _0x27109e = {
            'MURZw': _0x7e0243(0x241),
            'xDzNa': _0x7e0243(0x35d),
            'woZaA': function (_0x3f9376) {
                return _0x3f9376();
            },
            'wZdPe': function (_0x4539fb) {
                return _0x4539fb();
            }
        };
    document['getElementById'](_0x27109e[_0x7e0243(0x445)])['innerText'] = _0x7e0243(0x27c), document[_0x7e0243(0x2d9)](_0x7e0243(0x3c9))[_0x7e0243(0x2c2)] = _0x27109e[_0x7e0243(0x184)], _0x27109e['woZaA'](resetstats), _0x27109e[_0x7e0243(0x3e1)](resetchart), _0x27109e[_0x7e0243(0x3a6)](resethistory), _0x27109e['woZaA'](resetlog);
}
function resetchart() {
    const _0x37d9ae = _0x49b003;
    return toggleChart(_0x37d9ae(0x426));
}
function resethistory() {
    const _0x270242 = _0x49b003, _0x4b3caa = {
            'vwNdm': function (_0x432d3b, _0x1b5c72) {
                return _0x432d3b(_0x1b5c72);
            },
            'PxKkj': _0x270242(0x39f)
        };
    return _0x4b3caa[_0x270242(0x1b0)](toggleHistory, _0x4b3caa[_0x270242(0x395)]);
}
function resetlog() {
    const _0x5fb1b1 = _0x49b003, _0x5217af = {
            'oguvk': function (_0x4c756a, _0x4f64bf) {
                return _0x4c756a(_0x4f64bf);
            },
            'ESzFu': _0x5fb1b1(0x39f)
        };
    return _0x5217af[_0x5fb1b1(0x2d6)](toggleLog, _0x5217af[_0x5fb1b1(0x45c)]);
}
function resetstats() {
    const _0x141631 = _0x49b003, _0x2178c1 = {
            'tItnI': '7|4|9|13|3|5|8|15|12|10|0|18|6|2|16|14|17|11|1',
            'Yrhhp': function (_0xa3bdf7) {
                return _0xa3bdf7();
            }
        }, _0x5dffbe = _0x2178c1[_0x141631(0x402)]['split']('|');
    let _0x4d7a22 = 0x0;
    while (!![]) {
        switch (_0x5dffbe[_0x4d7a22++]) {
        case '0':
            minbalance = balance;
            continue;
        case '1':
            _0x2178c1['Yrhhp'](updateStats);
            continue;
        case '2':
            maxprofit = 0x0;
            continue;
        case '3':
            profit = 0x0;
            continue;
        case '4':
            startBalance = balance;
            continue;
        case '5':
            percentProfit = 0x0;
            continue;
        case '6':
            minprofit = 0x0;
            continue;
        case '7':
            fullLogs = [];
            continue;
        case '8':
            maxBetAmount = 0x0;
            continue;
        case '9':
            wagered = 0x0;
            continue;
        case '10':
            maxlosestreak = 0x0;
            continue;
        case '11':
            currentstreak = 0x0;
            continue;
        case '12':
            maxwinstreak = 0x0;
            continue;
        case '13':
            percentWagered = 0x0;
            continue;
        case '14':
            wins = 0x0;
            continue;
        case '15':
            maxLosseAmount = 0x0;
            continue;
        case '16':
            bets = 0x0;
            continue;
        case '17':
            losses = 0x0;
            continue;
        case '18':
            maxbalance = balance;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x105c66) {
    return _0x105c66;
}
function ching() {
    const _0x40b750 = _0x49b003;
    return wdbSound[_0x40b750(0x41c)]();
}
function sleep(_0x1367c0) {
    return new Promise(_0x534077 => setTimeout(_0x534077, _0x1367c0 * 0x3e8));
}
async function initLua() {
    const _0x34ee10 = _0x49b003, _0x3b9ef6 = {
            'KOEyV': _0x34ee10(0x1b3),
            'UKEya': _0x34ee10(0x3ec),
            'QaQmg': _0x34ee10(0x22d),
            'lUJDe': _0x34ee10(0x3ee),
            'CAmNu': _0x34ee10(0x46b),
            'sHQPo': _0x34ee10(0x266),
            'LafCz': _0x34ee10(0x343),
            'nmtRh': _0x34ee10(0x3b5),
            'QqMts': _0x34ee10(0x454),
            'rZtVs': _0x34ee10(0x36a),
            'HnGBx': _0x34ee10(0x3eb),
            'fKkzU': _0x34ee10(0x300),
            'JGpUr': _0x34ee10(0x3cc),
            'QRLyh': _0x34ee10(0x35a),
            'bUWhl': _0x34ee10(0x465)
        };
    fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x1bf)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x31a)])(), fengari[_0x34ee10(0x346)](_0x34ee10(0x415))(), fengari['load'](_0x3b9ef6[_0x34ee10(0x37b)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x2ae)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x45b)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x463)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6['LafCz'])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x3ab)])(), fengari['load'](_0x3b9ef6[_0x34ee10(0x239)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x412)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x41a)])(), fengari[_0x34ee10(0x346)](_0x34ee10(0x2ea))(), fengari[_0x34ee10(0x346)](_0x3b9ef6['fKkzU'])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x2dd)])(), fengari[_0x34ee10(0x346)](_0x3b9ef6[_0x34ee10(0x333)])(), fengari[_0x34ee10(0x346)](_0x34ee10(0x21b))(), fengari[_0x34ee10(0x346)]('table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end')();
    const _0x6ac9db = location[_0x34ee10(0x3d7)][_0x34ee10(0x277)](_0x3b9ef6[_0x34ee10(0x1a5)], '');
    let _0x194a9f = _0x6ac9db[_0x34ee10(0x341)]('.');
    return casino = _0x6ac9db['slice'](0x0, _0x194a9f), fengari[_0x34ee10(0x346)](_0x34ee10(0x229) + casino + '\x22')(), _0x34ee10(0x1c6);
}
async function updateLua() {
    const _0x2c3a81 = _0x49b003, _0x13d1d3 = {
            'wmDYx': _0x2c3a81(0x3f3),
            'VIaGq': function (_0x4309b9, _0x5c120a) {
                return _0x4309b9(_0x5c120a);
            },
            'ZtQLP': _0x2c3a81(0x46a),
            'qzrZP': _0x2c3a81(0x18b)
        }, _0x447292 = _0x2c3a81(0x208) + win + _0x2c3a81(0x354) + bets + _0x2c3a81(0x3b3) + wins + '\x0a\x20\x20\x20\x20losses=' + losses + _0x2c3a81(0x407) + winstreak + _0x2c3a81(0x35f) + losestreak + _0x2c3a81(0x301) + currentstreak + _0x2c3a81(0x2e7) + balance + '\x0a\x20\x20\x20\x20minbalance=' + minbalance + _0x2c3a81(0x313) + maxbalance + '\x0a\x20\x20\x20\x20minprofit=' + minprofit + _0x2c3a81(0x25c) + maxprofit + _0x2c3a81(0x1e0) + chance + _0x2c3a81(0x458) + bethigh + '\x0a\x0a\x20\x20\x20\x20chance1=' + chance1 + _0x2c3a81(0x1c2) + chance2 + '\x0a\x20\x20\x20\x20chance3=' + chance3 + _0x2c3a81(0x351) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + _0x2c3a81(0x296) + nextbet + '\x0a\x20\x20\x20\x20previousbet=' + previousbet + _0x2c3a81(0x325) + profit + '\x0a\x20\x20\x20\x20currentprofit=' + currentprofit + _0x2c3a81(0x328) + partialprofit + _0x2c3a81(0x265) + wagered + _0x2c3a81(0x44c) + lastBet['amount'] + _0x2c3a81(0x214) + lastBet[_0x2c3a81(0x3c7)] + _0x2c3a81(0x1ea) + lastBet['chance'] + ',\x0a\x20\x20\x20\x20\x20\x20Chance=' + lastBet[_0x2c3a81(0x427)] + _0x2c3a81(0x274) + lastBet[_0x2c3a81(0x1e6)] + _0x2c3a81(0x2c3) + lastBet[_0x2c3a81(0x1e6)] + _0x2c3a81(0x464) + lastBet[_0x2c3a81(0x330)] + ',\x0a\x20\x20\x20\x20\x20\x20Profit=' + lastBet[_0x2c3a81(0x330)] + ',\x0a\x20\x20\x20\x20\x20\x20target=' + lastBet[_0x2c3a81(0x393)] + _0x2c3a81(0x19b) + lastBet[_0x2c3a81(0x393)] + ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=' + lastBet['chance1'] + _0x2c3a81(0x2b8) + lastBet[_0x2c3a81(0x183)] + _0x2c3a81(0x2f7) + lastBet['chance2'] + _0x2c3a81(0x317) + lastBet['chance2'] + _0x2c3a81(0x170) + lastBet[_0x2c3a81(0x221)] + _0x2c3a81(0x20c) + lastBet[_0x2c3a81(0x221)] + _0x2c3a81(0x1a3) + lastBet[_0x2c3a81(0x33f)] + _0x2c3a81(0x1ab) + lastBet[_0x2c3a81(0x33f)] + _0x2c3a81(0x342) + lastBet[_0x2c3a81(0x3ca)] + '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22' + lastBet[_0x2c3a81(0x3ca)] + _0x2c3a81(0x37e) + lastBet['result'] + _0x2c3a81(0x44e) + lastBet[_0x2c3a81(0x398)] + _0x2c3a81(0x37f) + lastBet['nonce'] + ',\x0a\x20\x20\x20\x20\x20\x20Nonce=' + lastBet[_0x2c3a81(0x303)] + _0x2c3a81(0x28c) + lastBet['id'] + _0x2c3a81(0x26c) + lastBet['id'] + _0x2c3a81(0x26b);
    fengari[_0x2c3a81(0x346)](_0x447292)(), fengari[_0x2c3a81(0x346)](_0x13d1d3[_0x2c3a81(0x3b8)])(), currency = fengari['load'](_0x2c3a81(0x273))() || currency, coin = _0x13d1d3[_0x2c3a81(0x376)](String, currency)[_0x2c3a81(0x374)](), plinkoRisk = fengari[_0x2c3a81(0x346)](_0x2c3a81(0x27d))() || plinkoRisk, plinkoRow = fengari[_0x2c3a81(0x346)](_0x2c3a81(0x232))() || plinkoRow, kenoRisk = fengari[_0x2c3a81(0x346)]('return\x20kenoRisk')() || kenoRisk;
    const _0x29f636 = fengari[_0x2c3a81(0x346)](_0x13d1d3[_0x2c3a81(0x2a6)])();
    return _0x29f636 && (window[_0x2c3a81(0x271)] = _0x29f636['split'](',')[_0x2c3a81(0x2c7)](_0x2a2700 => _0x2a2700 !== '')[_0x2c3a81(0x179)](Number)), _0x13d1d3[_0x2c3a81(0x202)];
}
function randomString(_0x5a446c, _0x4e4579) {
    const _0x507898 = _0x49b003, _0x179bcf = {
            'XDKmy': _0x507898(0x33e),
            'GDFIJ': '0123456789',
            'iApwq': _0x507898(0x1d5),
            'WxnhM': _0x507898(0x2de),
            'dhkSt': function (_0x4b1455, _0x29b017) {
                return _0x4b1455 < _0x29b017;
            }
        }, _0x152ec0 = {
            'alphabet': _0x179bcf['XDKmy'],
            'numeric': _0x179bcf['GDFIJ'],
            'hex': _0x507898(0x2be),
            'rangedice': _0x179bcf['iApwq'],
            'default': _0x179bcf['WxnhM']
        }, _0x4a373d = _0x152ec0[_0x4e4579] || _0x152ec0[_0x507898(0x30f)];
    let _0x5880d3 = '';
    for (let _0x5b0604 = 0x0; _0x179bcf[_0x507898(0x36d)](_0x5b0604, _0x5a446c); _0x5b0604++) {
        _0x5880d3 += _0x4a373d[_0x507898(0x28b)](Math['floor'](Math[_0x507898(0x2da)]() * _0x4a373d[_0x507898(0x33c)]));
    }
    return _0x5880d3;
}
function setCookie(_0x5158a8, _0x2dd471, _0x50e588) {
    const _0x24b923 = _0x49b003, _0x5d0812 = {
            'XThWZ': function (_0x2b8c86, _0x5ce728) {
                return _0x2b8c86 + _0x5ce728;
            },
            'nEOOD': function (_0xf3bcbf, _0x50fcf9) {
                return _0xf3bcbf * _0x50fcf9;
            }
        }, _0x2bf603 = new Date();
    _0x2bf603[_0x24b923(0x3f8)](_0x5d0812['XThWZ'](_0x2bf603[_0x24b923(0x36f)](), _0x5d0812[_0x24b923(0x263)](_0x5d0812[_0x24b923(0x263)](_0x5d0812[_0x24b923(0x263)](_0x50e588 * 0x18, 0x3c), 0x3c), 0x3e8)));
    const _0x5598ba = _0x24b923(0x335) + _0x2bf603[_0x24b923(0x3d2)]();
    document[_0x24b923(0x3b9)] = _0x5158a8 + '=' + _0x2dd471 + ';' + _0x5598ba + _0x24b923(0x443);
}
function getCookie(_0x4699be) {
    const _0xe4edf2 = _0x49b003, _0x31f0b1 = {
            'FNXKE': function (_0x45dc70, _0x5342ea) {
                return _0x45dc70 + _0x5342ea;
            }
        }, _0x1e42ac = _0x31f0b1['FNXKE'](_0x4699be, '='), _0x591bc1 = document['cookie'][_0xe4edf2(0x421)](';')[_0xe4edf2(0x179)](_0x9cfb03 => _0x9cfb03[_0xe4edf2(0x41e)]());
    for (const _0x52f99f of _0x591bc1) {
        if (_0x52f99f['startsWith'](_0x1e42ac))
            return _0x52f99f[_0xe4edf2(0x28e)](_0x1e42ac['length']);
    }
    return '';
}
function saveScript() {
    const _0xae4bd7 = _0x49b003, _0x13263f = {
            'OiQmC': function (_0x4e81ba, _0x4d43b6) {
                return _0x4e81ba === _0x4d43b6;
            },
            'YbDvh': _0xae4bd7(0x1d6),
            'TRRZd': _0xae4bd7(0x2b3)
        }, _0x40e26f = _0x13263f[_0xae4bd7(0x227)](mode, _0x13263f['YbDvh']) ? luaEditor['getValue']() : jsEditor['getValue'](), _0x5116af = document[_0xae4bd7(0x3c0)]('a');
    _0x5116af[_0xae4bd7(0x2b2)] = window['URL'][_0xae4bd7(0x1fd)](new Blob([_0x40e26f], { 'type': _0x13263f[_0xae4bd7(0x304)] })), _0x5116af[_0xae4bd7(0x3e2)] = 'WDBScript' + Date[_0xae4bd7(0x174)]()['toString']()[_0xae4bd7(0x1be)](-0x6) + '.' + mode, _0x5116af[_0xae4bd7(0x3ef)]();
}
function getErrMsg(_0x2158f7) {
    const _0x86beb0 = _0x49b003;
    return _0x2158f7[_0x86beb0(0x24f)] && _0x2158f7[_0x86beb0(0x24f)][_0x86beb0(0x39b)] && _0x2158f7['response'][_0x86beb0(0x39b)][_0x86beb0(0x22c)] || _0x2158f7[_0x86beb0(0x22c)] || _0x2158f7['toString']();
}

const _0x5edb7 = _0xd0c6;
(function (_0x31a292, _0x42d97a) {
    const _0x1e27a2 = _0xd0c6, _0x3ee5d3 = _0x31a292();
    while (!![]) {
        try {
            const _0x7c3a44 = parseInt(_0x1e27a2(0xfb)) / 0x1 * (-parseInt(_0x1e27a2(0x10c)) / 0x2) + parseInt(_0x1e27a2(0x120)) / 0x3 * (-parseInt(_0x1e27a2(0x10b)) / 0x4) + -parseInt(_0x1e27a2(0xdc)) / 0x5 + -parseInt(_0x1e27a2(0x105)) / 0x6 + parseInt(_0x1e27a2(0xe0)) / 0x7 * (-parseInt(_0x1e27a2(0xe2)) / 0x8) + parseInt(_0x1e27a2(0xdf)) / 0x9 + parseInt(_0x1e27a2(0xf3)) / 0xa;
            if (_0x7c3a44 === _0x42d97a)
                break;
            else
                _0x3ee5d3['push'](_0x3ee5d3['shift']());
        } catch (_0x106c23) {
            _0x3ee5d3['push'](_0x3ee5d3['shift']());
        }
    }
}(_0x52c0, 0xbf035), token = JSON[_0x5edb7(0xee)](localStorage[_0x5edb7(0x110)](_0x5edb7(0xf0)))[_0x5edb7(0x10f)], loadingCoin = !![], decimalAmountView = 0xa);
async function beforeWork(_0x570261) {
    const _0xc0488 = _0x5edb7, _0x4331a3 = {
            'axIYK': function (_0x50a15e) {
                return _0x50a15e();
            },
            'seEvU': function (_0x5e5c52, _0x2b28e3) {
                return _0x5e5c52(_0x2b28e3);
            },
            'KGqKi': function (_0xce8e0e) {
                return _0xce8e0e();
            },
            'XBgFe': function (_0x546e65, _0x5f0d4b) {
                return _0x546e65 + _0x5f0d4b;
            },
            'dyUke': 'balance=',
            'RIHYC': _0xc0488(0x119),
            'LyuvC': _0xc0488(0xe1),
            'lkKMD': function (_0x2fbccb, _0x2f49f4) {
                return _0x2fbccb + _0x2f49f4;
            },
            'MqGGN': 'maxbet=',
            'MKslI': _0xc0488(0x100),
            'lZcyD': _0xc0488(0xf1),
            'VlpHE': _0xc0488(0xed)
        };
    await _0x570261[_0xc0488(0x121)](_0x4331a3[_0xc0488(0x118)]), _0x4331a3[_0xc0488(0x112)](connectServer), setTimeout(() => {
        const _0x362b2f = _0xc0488;
        client['emit'](_0x362b2f(0x109));
    }, 0x3e8), client['on'](_0x4331a3[_0xc0488(0x10a)], _0x589a40 => {
        const _0x595c04 = _0xc0488;
        _0x4331a3[_0x595c04(0xde)](stop), _0x4331a3[_0x595c04(0xea)](log, _0x589a40[_0x595c04(0xe8)]);
    }), client['on']('GOT_USER_INFO', async _0x1ce574 => {
        const _0x4cedc9 = _0xc0488, _0x4b2314 = _0x1ce574[_0x4cedc9(0x117)][_0x4cedc9(0x11b)];
        if (loadingCoin) {
            for (const _0x187d8e in _0x4b2314)
                coins['push'](_0x4b2314[_0x187d8e]['short']);
            return coins = coins[_0x4cedc9(0xf6)](), coin = coins[0x0], loadingCoin = ![], (_0x4331a3['KGqKi'](drawSelectCoin), _0x4331a3[_0x4cedc9(0xde)](checkbalance));
        } else {
            for (const _0x141aac in _0x4b2314)
                if (_0x4b2314[_0x141aac]['short'] === coin)
                    balance = _0x4331a3[_0x4cedc9(0xea)](Number, _0x4b2314[_0x141aac][_0x4cedc9(0xfd)]);
            return fengari[_0x4cedc9(0x107)](_0x4331a3[_0x4cedc9(0x11d)](_0x4331a3[_0x4cedc9(0xd9)], balance))(), startBalance = balance, minbalance = balance, fengari[_0x4cedc9(0x107)](_0x4331a3[_0x4cedc9(0x11d)](_0x4331a3[_0x4cedc9(0x108)], balance))(), maxbalance = balance, fengari[_0x4cedc9(0x107)](_0x4331a3[_0x4cedc9(0x11d)](_0x4cedc9(0xfe), balance))(), minbet = 1e-8, fengari[_0x4cedc9(0x107)](_0x4331a3[_0x4cedc9(0x11d)](_0x4331a3[_0x4cedc9(0x11f)], minbet))(), maxbet = balance, fengari[_0x4cedc9(0x107)](_0x4331a3[_0x4cedc9(0x114)](_0x4331a3[_0x4cedc9(0xe3)], maxbet))(), _0x4331a3[_0x4cedc9(0xde)](updateStats);
        }
    }), client['on'](_0x4331a3[_0xc0488(0xf7)], async _0x1ee566 => await handleResult(_0x1ee566));
}
function vault() {
    const _0x1b31f4 = _0x5edb7, _0xdd4249 = {
            'xqZDD': function (_0x1aa372, _0x1edb48) {
                return _0x1aa372(_0x1edb48);
            },
            'JKNcZ': _0x1b31f4(0xec)
        };
    _0xdd4249[_0x1b31f4(0xef)](log, _0xdd4249[_0x1b31f4(0xfc)]);
}
function unvault() {
    const _0x15acc6 = _0x5edb7;
    log(_0x15acc6(0xec));
}
function getListCoin() {
    const _0x2a5b80 = _0x5edb7, _0x50a70d = {
            'Jxveo': function (_0x27da9b) {
                return _0x27da9b();
            }
        };
    return _0x50a70d[_0x2a5b80(0xff)](checkbalance);
}
function _0x52c0() {
    const _0x50c549 = [
        '2746188voqPXa',
        '49RJYDYt',
        'minbet=',
        '1058136lrfNsn',
        'MqGGN',
        'KOvAf',
        'over',
        'eOUxX',
        'ohfNs',
        'message',
        'PvLNP',
        'seEvU',
        'ulIlg',
        'Not\x20supported',
        'SEND_MY_TR',
        'parse',
        'xqZDD',
        'dice_token',
        'ERROR',
        'now',
        '51510170bgvhDg',
        'onARJ',
        'emit',
        'sort',
        'VlpHE',
        'gMdjt',
        'rollNumber',
        'roll',
        '1167969aFvHQz',
        'JKNcZ',
        'balance',
        'maxbalance=',
        'Jxveo',
        'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.5.0/socket.io.js',
        'connected',
        'round',
        'split',
        'nonce',
        '1670988sDXgsv',
        'WJqrf',
        'load',
        'RIHYC',
        'GET_USER_INFO',
        'lZcyD',
        '4MZUsoW',
        '2mIWgsh',
        'pKQgP',
        'ROLL',
        'key',
        'getItem',
        'rollAmount',
        'KGqKi',
        '_id',
        'lkKMD',
        'eUoNl',
        '/dice',
        'player',
        'MKslI',
        'minbalance=',
        'EPSILON',
        'funds',
        'websocket',
        'XBgFe',
        'outcome',
        'LyuvC',
        '2563482jFTAYZ',
        'loadScript',
        'then',
        'Bnlik',
        'KCmZz',
        'DkCVB',
        'UyacU',
        'RuaEi',
        'eWrmq',
        'dyUke',
        'ytAVf',
        'icIun',
        '7234650LyZHqK',
        'resetseed()\x20not\x20support',
        'axIYK'
    ];
    _0x52c0 = function () {
        return _0x50c549;
    };
    return _0x52c0();
}
function _0xd0c6(_0x2d1403, _0x49ae35) {
    const _0x52c093 = _0x52c0();
    return _0xd0c6 = function (_0xd0c69, _0x3f8a75) {
        _0xd0c69 = _0xd0c69 - 0xd9;
        let _0x4a0bd1 = _0x52c093[_0xd0c69];
        return _0x4a0bd1;
    }, _0xd0c6(_0x2d1403, _0x49ae35);
}
function checkbalance() {
    const _0x3ee46e = _0x5edb7, _0xf8af4e = { 'onARJ': _0x3ee46e(0x109) };
    client['emit'](_0xf8af4e[_0x3ee46e(0xf4)]);
}
function resetseed() {
    const _0x2777f0 = _0x5edb7, _0x4dff83 = {
            'PvLNP': function (_0x5982d1, _0x2786f1) {
                return _0x5982d1(_0x2786f1);
            },
            'KOvAf': _0x2777f0(0xdd)
        };
    _0x4dff83[_0x2777f0(0xe9)](log, _0x4dff83[_0x2777f0(0xe4)]);
}
function sendBet() {
    const _0x58d0ca = _0x5edb7, _0x4b1dc9 = {
            'ytAVf': function (_0x20cea4, _0x424cd6) {
                return _0x20cea4 * _0x424cd6;
            },
            'UyacU': function (_0x7ce105, _0x20ed6b) {
                return _0x7ce105 + _0x20ed6b;
            },
            'WJqrf': function (_0x2b3f1e, _0x45d2c0) {
                return _0x2b3f1e - _0x45d2c0;
            },
            'eOUxX': _0x58d0ca(0xe5),
            'ehOkN': 'under',
            'pKQgP': function (_0x54a0ac) {
                return _0x54a0ac();
            }
        };
    chance = Math[_0x58d0ca(0x102)](_0x4b1dc9[_0x58d0ca(0xda)](_0x4b1dc9[_0x58d0ca(0x126)](chance, Number[_0x58d0ca(0x11a)]), 0x64)) / 0x64, target = bethigh ? _0x4b1dc9[_0x58d0ca(0x106)](99.99, chance) : chance, client[_0x58d0ca(0x101)] ? client['emit']('ROLL', {
        'amount': nextbet,
        'coinName': coin,
        'rollTime': Date[_0x58d0ca(0xf2)](),
        'rollType': bethigh ? _0x4b1dc9[_0x58d0ca(0xe6)] : _0x4b1dc9['ehOkN'],
        'rollValue': target
    }) : _0x4b1dc9[_0x58d0ca(0x10d)](connectServer)[_0x58d0ca(0x122)](() => client[_0x58d0ca(0xf5)](_0x58d0ca(0x10e), {
        'amount': nextbet,
        'coinName': coin,
        'rollTime': Date[_0x58d0ca(0xf2)](),
        'rollType': bethigh ? _0x58d0ca(0xe5) : 'under',
        'rollValue': target
    }));
}
async function handleResult(_0x1dc795) {
    const _0x66ea5a = _0x5edb7, _0x3dc3e9 = {
            'Bnlik': '0|2|3|4|5|1',
            'gMdjt': function (_0x24d2ac, _0xd3b92d) {
                return _0x24d2ac(_0xd3b92d);
            },
            'icIun': function (_0xe9911e, _0x1bdb0e) {
                return _0xe9911e - _0x1bdb0e;
            },
            'RuaEi': function (_0x1f398a, _0x162e75) {
                return _0x1f398a(_0x162e75);
            },
            'DkCVB': function (_0x2daf7f, _0x5eb6ed) {
                return _0x2daf7f(_0x5eb6ed);
            },
            'ulIlg': function (_0x49a155) {
                return _0x49a155();
            },
            'ppsXb': function (_0x2cf6c9, _0x1eb964) {
                return _0x2cf6c9(_0x1eb964);
            },
            'eWrmq': function (_0x10381c) {
                return _0x10381c();
            },
            'KCmZz': function (_0x473e3b, _0xdebf18) {
                return _0x473e3b(_0xdebf18);
            }
        };
    try {
        const _0x15e88a = _0x3dc3e9[_0x66ea5a(0x123)][_0x66ea5a(0x103)]('|');
        let _0x35aaa6 = 0x0;
        while (!![]) {
            switch (_0x15e88a[_0x35aaa6++]) {
            case '0':
                currentprofit = _0x3dc3e9[_0x66ea5a(0xf8)](Number, _0x1dc795[_0x66ea5a(0x11e)]) < 0x0 ? _0x3dc3e9['icIun'](0x0, _0x3dc3e9[_0x66ea5a(0xf8)](Number, _0x1dc795[_0x66ea5a(0x111)])) : _0x3dc3e9[_0x66ea5a(0xdb)](_0x3dc3e9[_0x66ea5a(0xf8)](Number, _0x1dc795[_0x66ea5a(0x111)]) * _0x3dc3e9[_0x66ea5a(0x127)](Number, _0x1dc795['payout']), _0x3dc3e9[_0x66ea5a(0x125)](Number, _0x1dc795[_0x66ea5a(0x111)]));
                continue;
            case '1':
                return _0x3dc3e9[_0x66ea5a(0xeb)](handleStats);
            case '2':
                lastBet[_0x66ea5a(0xfa)] = _0x3dc3e9[_0x66ea5a(0x125)](Number, _0x1dc795[_0x66ea5a(0xf9)]);
                continue;
            case '3':
                result = _0x3dc3e9['ppsXb'](Number, _0x1dc795['rollNumber']);
                continue;
            case '4':
                lastBet[_0x66ea5a(0x104)] = _0x1dc795[_0x66ea5a(0x104)];
                continue;
            case '5':
                lastBet['id'] = String(_0x1dc795[_0x66ea5a(0x113)]);
                continue;
            }
            break;
        }
    } catch (_0x460cd8) {
        return _0x3dc3e9[_0x66ea5a(0x128)](stop), log(_0x3dc3e9[_0x66ea5a(0x124)](getErrMsg, _0x460cd8));
    }
}
async function connectServer() {
    const _0x2aa5ae = _0x5edb7, _0x45c39b = {
            'ohfNs': function (_0x28f061, _0x361866, _0x937005) {
                return _0x28f061(_0x361866, _0x937005);
            },
            'eUoNl': _0x2aa5ae(0x116),
            'vtuqJ': _0x2aa5ae(0x11c)
        };
    client = _0x45c39b[_0x2aa5ae(0xe7)](io, _0x45c39b[_0x2aa5ae(0x115)], {
        'transports': [_0x45c39b['vtuqJ']],
        'query': { 'token': token }
    });
}