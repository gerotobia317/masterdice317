const _0x12065a = _0x5abd;
(function (_0x86e64e, _0x8449ee) {
    const _0x10a2c9 = _0x5abd, _0x19714a = _0x86e64e();
    while (!![]) {
        try {
            const _0x43d6c4 = -parseInt(_0x10a2c9(0x15e)) / 0x1 * (parseInt(_0x10a2c9(0x19a)) / 0x2) + -parseInt(_0x10a2c9(0x367)) / 0x3 * (-parseInt(_0x10a2c9(0x2ce)) / 0x4) + parseInt(_0x10a2c9(0x234)) / 0x5 + parseInt(_0x10a2c9(0x1ae)) / 0x6 + -parseInt(_0x10a2c9(0x2a0)) / 0x7 + parseInt(_0x10a2c9(0x2dd)) / 0x8 + -parseInt(_0x10a2c9(0x14e)) / 0x9;
            if (_0x43d6c4 === _0x8449ee)
                break;
            else
                _0x19714a['push'](_0x19714a['shift']());
        } catch (_0x1a872d) {
            _0x19714a['push'](_0x19714a['shift']());
        }
    }
}(_0x4fbe, 0x76304), Object[_0x12065a(0x21e)](String[_0x12065a(0x18f)], _0x12065a(0x3c0), {
    'value': function () {
        const _0x252392 = _0x12065a, _0x1eda5f = {
                'vcZaH': function (_0x132f1a, _0x5f4928) {
                    return _0x132f1a + _0x5f4928;
                }
            };
        return _0x1eda5f[_0x252392(0x31b)](this[_0x252392(0x1f2)](0x0)[_0x252392(0x34b)](), this['slice'](0x1));
    },
    'enumerable': ![]
}), fullLogs = [], client = null, darkMode = ![], timerInterval = null, elapsedTime = 0x0, speedHistory = [], speedUpdateInterval = null, mode = 'lua', game = _0x12065a(0x18a), run = ![], win = ![], sOW = ![], minbet = 0x0, maxbet = 0x0, startBalance = 0x0, percentWagered = 0x0, percentProfit = 0x0, luaEditor = null, jsEditor = null, stopHistory = ![], stopLog = ![], stopChart = ![], maxRows = 0xc8, chart = null, betsChart = 0x0, profitChart = 0x0, dps = [], coins = [], coin = null, currency = null, casino = null, balance = 0x0, minbalance = 0x0, maxbalance = 0x0, minprofit = 0x0, maxprofit = 0x0, basebet = 0x0, nextbet = 0x0, chance = 0x0, havePlinkoRows = ![], plinkoRow = 0x8, plinkoRisk = _0x12065a(0x1e4), kenoRisk = _0x12065a(0x218), kenoNumbers = [], bethigh = !![], target = 0x0, chance1 = 0x0, chance2 = 0x0, chance3 = 0x0, chance4 = 0x0, target1 = 0x0, target2 = 0x0, target3 = 0x0, target4 = 0x0, betSide = 'between', result = 0x0, bets = 0x0, wins = 0x0, losses = 0x0, profit = 0x0, wagered = 0x0, maxBetAmount = 0x0, maxLosseAmount = 0x0, currentprofit = 0x0, partialprofit = 0x0, winstreak = 0x0, losestreak = 0x0, currentstreak = 0x0, maxwinstreak = 0x0, maxlosestreak = 0x0, previousbet = 0x0, lastBet = {
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
    'BetSide': _0x12065a(0x13c),
    'Target': 0x0,
    'result': 0x0,
    'Result': 0x0,
    'nonce': 0x0,
    'Nonce': 0x0,
    'id': '',
    'Id': ''
}, scriptname = '', decimalAmountView = 0x8, decimalChanceView = 0x2, decimalTargetResult = 0x2, wdbSound = new Object(new Audio(WDB_LIB + _0x12065a(0x1a3))), wdbUI = _0x12065a(0x189) + WDB_MODE + '\x20|\x20' + CASINO_GAME + _0x12065a(0x1ce) + WDB_HOME + _0x12065a(0x1b8) + location[_0x12065a(0x323)]['replace'](_0x12065a(0x298), '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Bets/sec:\x20<span\x20id=\x22wdbSpeed\x22>0.00</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleHideControlBot\x22\x20onclick=\x22toggleHideControlBot(this)\x22>▲</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>');
const rangediceLuaScript = _0x12065a(0x283), rangediceJsScript = _0x12065a(0x2c5), plinkoLuaScript = _0x12065a(0x258), plinkoJsScript = _0x12065a(0x1b6), kenoLuaScript = _0x12065a(0x318), kenoJsScript = '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0akenoRisk\x20=\x20\x22classic\x22;\x20//\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20[3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040];\x20//\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a';
function _0x4fbe() {
    const _0x5b315e = [
        'fixed',
        'uskCz',
        'split',
        'OmwMJ',
        'pfiSZ',
        'wdbWrapLog',
        'IJadE',
        'green',
        '#wdbMenuMode\x20option[value=\x22advanced\x22]',
        'DjwFJ',
        '/canvasjs.min.js',
        'PPxLc',
        'xYhzl',
        'tcBju',
        'nOrIx',
        ',\x0a\x20\x20\x20\x20\x20\x20nonce=',
        '2|7|6|1|4|5|3|8|0',
        'WGMKK',
        ',\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20chance1=',
        'uAHEP',
        'HAxvp',
        'addEventListener',
        'classic',
        'stopOnBalanceCheck',
        'start',
        'JwviE',
        'function\x20start()\x0ajs.global:start()\x0aend',
        'wdbScriptBoxJS',
        'defineProperty',
        'QPSQV',
        'download',
        'LWPpf',
        'rHjJo',
        'Profit',
        'wdbPercentWagered',
        'KOoom',
        'wdbStats',
        'ZOvch',
        'children',
        'taxIr',
        'advancedMultiOnLoseBets',
        'oPhxJ',
        'AGCou',
        'getTime',
        'LDLqu',
        'createObjectURL',
        'vDmER',
        'Stop\x20on\x20current\x20streak\x20',
        'JuPwq',
        'wdbAdvancedMode',
        '2705945nYuAkH',
        'calc(100vh\x20-\x2060px)',
        'div',
        'oCPBF',
        'aQYgJ',
        'wdbResumeButton',
        'jJMly',
        'updateChart',
        'zzcEa',
        '0123456789abcdef',
        'lXwqB',
        'hDXYB',
        '\x20win',
        'currency=\x22',
        'VnHFa',
        'ICEOk',
        'bBFOc',
        'ZwpSj',
        'zNAye',
        ',\x0a\x20\x20\x20\x20\x20\x20target=',
        'spdmx',
        'TYBfW',
        'UcvGT',
        'text',
        'RXZtz',
        'OwEDN',
        'UOrgu',
        'INPUT',
        'tdjVE',
        'top',
        'wdbWrapFunctions',
        'tagName',
        '\x0a\x20\x20\x20\x20bets=',
        'CiGkr',
        '<td>',
        'data',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0aplinkoRow=8\x20--\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk=\x27low\x27\x20--\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'XiNIo',
        'block',
        'idRxG',
        ',\x0a\x20\x20\x20\x20\x20\x20id=\x22',
        'PxvRZ',
        'zBWDY',
        'oRVJR',
        'CPUMa',
        'if\x20type(kenoNumbers)\x20==\x20\x27table\x27\x20then\x20local\x20s\x20=\x20\x27\x27\x20for\x20k,v\x20in\x20ipairs(kenoNumbers)\x20do\x20s\x20=\x20s\x20..\x20v\x20..\x20\x27,\x27\x20end\x20return\x20s\x20end',
        'wdb-bot-position',
        'TymOF',
        'wQInT',
        'innerHeight',
        'pZHyR',
        'dps',
        '4|3|2|0|1',
        'elAwD',
        'oNmkq',
        'chart',
        'tgvfl',
        'borderColor',
        'wdbOpenJSScript',
        '\x0a\x20\x20\x20\x20bethigh=',
        'loadScript',
        '\x22,\x0a\x0a\x20\x20\x20\x20\x20\x20result=',
        'files',
        'lyGei',
        'wdbWins',
        '#2a2a2a',
        'handleAdvanced\x20ok',
        'aBjDd',
        'CHlAP',
        'theme',
        '#advancedBetHigh',
        'aKItv',
        'KGQkl',
        'wdbWrapInitializing',
        ',\x0a\x20\x20\x20\x20\x20\x20Result=',
        ',\x0a\x20\x20\x20\x20\x20\x20Roll=',
        'EEjRJ',
        'wVIcP',
        'sCeEW',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0a--\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a--\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20--\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'antiquewhite',
        'eyAXE',
        'ieAPJ',
        'eFYNA',
        'render',
        'EDvSP',
        '#wdbLog\x20li,\x20#wdbWrapVariables\x20pre,\x20#wdbWrapFunctions\x20pre,\x20#wdbWrapTips\x20pre',
        'rClKo',
        'click',
        'quLkm',
        'resetstatsOnProfitCheck',
        '\x0a\x20\x20\x20\x20currentprofit=',
        'rYxys',
        'Stop\x20on\x20roll\x20number\x20',
        'gVozt',
        'zXtct',
        'updateStats\x20ok',
        'cTULx',
        'LYKSt',
        '\x20at\x20',
        'www.',
        'cSbMz',
        'PRvfE',
        'EsuMg',
        'hnkiI',
        'advancedBaseBet',
        'mxJRj',
        'ojsMz',
        '3359041ThfPLl',
        'disabled',
        'LOAiF',
        'between2',
        'forEach',
        'slice',
        'now',
        'PMXXy',
        'closest',
        'wdbShowMode',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'IqEIu',
        'uapxh',
        'mrpiG',
        'dark1',
        'keydown',
        'backgroundColor',
        'Ixnxk',
        'DZISG',
        'kdWLN',
        'setValue',
        'function\x20ching()\x0ajs.global:ching()\x0aend',
        'WgWVy',
        'Bkcgi',
        'hxeKs',
        'njBvs',
        'chance',
        'smNlc',
        'advancedChanceOnLoseCheck',
        'MSzaj',
        'nwCAi',
        'asLEl',
        'response',
        'keno',
        ',\x0a\x20\x20\x20\x20\x20\x20betSide=\x22',
        'wdbSpeed',
        'wdbWrapPercentProfit',
        '//\x20scriptname=\x27example\x20JS\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0a//\x20chance1,\x20chance2,\x20chance3,\x20chance4\x20&\x20betSide\x20only\x20for\x20range\x20dice\x20game\x0a//\x20do\x20not\x20use\x20chance\x20in\x20range\x20dice\x20game\x0achance1\x20=\x2025\x0achance2\x20=\x2075\x0abetSide\x20=\x20\x27between\x27\x20//\x20between,\x20outside,\x20between2\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}',
        'advancedChanceOnLoseBets',
        'chance3',
        'wdbChart',
        'setTime',
        'querySelectorAll',
        'dKEmK',
        'EbALB',
        'AWBZy',
        '3156FtUKtn',
        'ATFYF',
        'function\x20resetstats()\x0ajs.global:resetstats()\x0aend',
        'cookie',
        'OvppG',
        '3|0|4|1|2',
        'KTQuM',
        'yzaUl',
        'Bliad',
        'sjfzs',
        'gqVSk',
        'LbrzJ',
        'PkTbK',
        'OHtrW',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js',
        '5574384MdkFEL',
        '\x0a\x20\x20\x20\x20balance=',
        'FEgpu',
        'mCVuf',
        '.wdb-stats\x20div\x20li',
        'wdbStartButton',
        'clientY',
        'GYaer',
        'table.getn\x20=\x20function\x20(t)\x0a\x20\x20\x20\x20local\x20count\x20=\x200\x0a\x20\x20\x20\x20for\x20_,\x20__\x20in\x20pairs(t)\x20do\x0a\x20\x20\x20\x20\x20\x20count\x20=\x20count\x20+\x201\x0a\x20\x20\x20\x20end\x0a\x20\x20\x20\x20return\x20count\x0a\x20\x20end',
        'Functions',
        'WRDrN',
        'innerWidth',
        'function\x20log(msg)\x0ajs.global:log(msg)\x0aend',
        'VpLQF',
        '\x0a\x20\x20\x20\x20wagered=',
        'muPvp',
        'YUebp',
        'DaLQG',
        'wdbHighLose',
        'advancedMultiOnLose',
        'lineColor',
        'VsOdy',
        'FFQrO',
        'ECuZM',
        'eiNDX',
        'advancedBetHighOnProfit',
        'lmjRp',
        '#wdbWrapHistory\x20table\x20thead\x20tr\x20th',
        'WkDvp',
        'resetChart',
        'chance1',
        'wfhMw',
        'Wwtqt',
        'width',
        'function\x20checkbalance()\x0ajs.global:checkbalance()\x0aend',
        'Target',
        'MNHTF',
        'zsXoz',
        'wdbMenuCoin',
        'LTFea',
        'return\x20scriptname',
        'UnRMA',
        'offsetHeight',
        'wdbToggleMinimal',
        'offsetLeft',
        'substring',
        'gLIIX',
        '_darkMode',
        'advancedBetHighOnBetCheck',
        'vzLPB',
        'dimgray',
        'QuBuH',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'fHvxC',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance4=',
        'eNHkG',
        'wdbHighWinStreak',
        'XBLkx',
        'jxPNe',
        '--\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0akenoRisk=\x27classic\x27\x20--\x20low,\x20classic,\x20high;\x20only\x20for\x20keno\x20game\x0akenoNumbers\x20=\x20{3,\x208,\x2012,\x2016,\x2021,\x2028,\x2030,\x2032,\x2036,\x2040}\x20--\x20Remove\x20this\x20line\x20to\x20auto-pick\x2010\x20random\x20balls\x0a\x0afunction\x20dobet()\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend',
        'wkfPc',
        'wdbToggleLive',
        'vcZaH',
        'head',
        'yTSQq',
        'wdbStopOnWinButton',
        'fyLKM',
        'hFEgu',
        '\x0a\x20\x20\x20\x20chance3=',
        'scriptname\x20=\x20\x22\x22',
        'hostname',
        'KpVnP',
        'red',
        'XBPCd',
        'ftDSg',
        '\x22\x0a\x0a\x20\x20\x20\x20nextbet=',
        ',\x0a\x20\x20\x20\x20\x20\x20Nonce=',
        '#wdbSaveScriptButton,\x20#wdbOpenScript',
        'aXObt',
        'return\x20kenoRisk',
        'Stop\x20on\x20profit\x20',
        'lcLZz',
        'wdbBalance',
        '<input\x20id=\x22bethigh',
        'cgXCt',
        'IMxJO',
        'Iokla',
        'EILqR',
        'hNFOV',
        'advanced',
        'eQgTj',
        'rBUCn',
        'wdbWrapLicenseBox',
        '\x0a\x20\x20\x20\x20minbalance=',
        'clear',
        'zUCgz',
        '\x0a\x20\x20\x20\x20lastBet={\x0a\x20\x20\x20\x20\x20\x20amount=',
        '7|6|2|1|0|3|4|5|8',
        '5px',
        '_maxRows',
        'xBDFh',
        '0:0:0:0',
        'Chart',
        'return\x20chance2',
        'initLuaOk',
        'PxaeH',
        'onmousedown',
        'kIsNg',
        'return\x20chance4',
        'uIMUL',
        'toUpperCase',
        'TKQxn',
        'zBhXZ',
        '\x0a\x20\x20\x20\x20maxbalance=',
        'Fybqi',
        '.CodeMirror',
        'EPSILON',
        '0.00',
        'advancedChanceOnWin',
        'change',
        'JdtcE',
        'nKEhb',
        'wdbJSMode',
        '#wdbSaveScriptButton',
        'Stop\x20on\x20',
        'filter',
        'HVBBh',
        'function\x20resethistory()\x0ajs.global:resethistory()\x0aend',
        'aaKMv',
        'round',
        'fZuEI',
        'wdbToggleShow',
        'aOJDL',
        'LBozN',
        'options',
        'left',
        'advancedChanceOnWinCheck',
        'return\x20plinkoRisk',
        '2346YtMZIT',
        'GePic',
        'OJJxT',
        'wawwV',
        'deleteH',
        'lbRLt',
        'ukkBZ',
        'QpBSc',
        'show',
        'wdbMinProfit',
        'wdbHistory',
        'YcZox',
        'Variables',
        '\x22\x20type=\x22checkbox\x22\x20/>',
        'resize',
        'advancedMultiOnWinCheck',
        'DaidC',
        'xiCyD',
        'DAQmp',
        '\x0a\x20\x20\x20\x20previousbet=',
        'iLhmc',
        'advancedStopOnWins',
        'bGwaq',
        'default',
        'VvgIX',
        'FIerV',
        'EaYCO',
        'target',
        'VyyRn',
        '\x0a\x20\x20\x20\x20losestreak=',
        'kdPnb',
        'URL',
        'ZKXTD',
        'lVqSU',
        'DKMSQ',
        '\x0a\x20\x20\x20\x20minprofit=',
        'JFKbX',
        'CauWS',
        'advancedChanceOnLose',
        'oOIxj',
        ',\x0a\x20\x20\x20\x20\x20\x20Target=',
        'setOption',
        'FbRBL',
        'innerText',
        'wdbHighBet',
        'advancedMultiOnWin',
        'roll',
        'Buqqq',
        'wdbHeader',
        'uuWJH',
        'onmousemove',
        'stopOnBalance',
        'oeqEi',
        'qlmPq',
        'remove',
        'AThvU',
        'vbqyV',
        'AziAg',
        'fXmbN',
        'YOxri',
        'MQPhF',
        'plinko',
        '\x0a\x20\x20\x20\x20betSide=\x22',
        'Script\x20Name:\x20',
        'log-',
        'chance4',
        '\x0a\x20\x20\x20\x20win=',
        'YXBYW',
        'vUSLs',
        'advancedBetHighOnLoseCheck',
        'ogyEY',
        'wdbLUAMode',
        'sOOMY',
        'hQiok',
        'DVgPw',
        'SGPUC',
        'color',
        'stop',
        'higCo',
        ',\x0a\x20\x20\x20\x20\x20\x20Profit=',
        'Betting\x20',
        '</td>\x0a\x20\x20\x20\x20\x20\x20<td>',
        'advancedBetHighOnBet',
        'lTOlx',
        '$1=$1+$2\x20',
        'RYQan',
        'zcDAp',
        'RvopJ',
        'high',
        'capitalize',
        ',\x0a\x20\x20\x20\x20\x20\x20roll=',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js',
        'profit',
        'startsWith',
        'wdbOpenLUAScript',
        'mJJfz',
        'Log',
        '190px',
        'GzBrK',
        'wdbWrap',
        'QaFFN',
        'advancedStopOnWinsCheck',
        'dSGha',
        'getValue',
        'event',
        'wdbProfit',
        'getElementById',
        'advancedStopRollNumber',
        'amount',
        'isContentEditable',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance=',
        'lJUJG',
        'lUZEP',
        'HJUGM',
        'wdbCurrentStreak',
        'gkQhY',
        'advancedStopOnBets',
        'line',
        'KerIZ',
        '$1=$1-$2\x20',
        'rShgm',
        'toFixed',
        'JlfRC',
        'OUhlU',
        'position',
        'dCDSO',
        'lastChild',
        '380px',
        'roRaU',
        'PIchf',
        'pephh',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-',
        'stringify',
        'ggdtj',
        'onmouseup',
        'SjdRl',
        '\x20Balls',
        'toLowerCase',
        'jJovG',
        'load',
        'wdbTime',
        'KQKok',
        'kbDWx',
        'createElement',
        ',\x0a\x20\x20\x20\x20\x20\x20Chance3=',
        'fromTextArea',
        'hDMqp',
        'javascript',
        'wEiuB',
        'pMVdC',
        'EyNVX',
        'shift',
        'Chance3',
        'amZfI',
        'nodqm',
        'WpPkl',
        'NVuxn',
        'bTeff',
        'innerHTML',
        'IHPDW',
        'stopOnProfit',
        'Acgut',
        'kvfbV',
        'getComputedStyle',
        'application/json',
        'wdbWrapControl',
        'darcula',
        'npCyz',
        'setItem',
        'IJKGh',
        'preventDefault',
        'YWukM',
        'pmXbn',
        'wdbBets',
        'ktTgO',
        'function\x20resetchart()\x0ajs.global:resetchart()\x0aend',
        'querySelector',
        'eNhlT',
        'JLSBe',
        'FUUjd',
        'black',
        'wdbPercentProfit',
        'checked',
        'between',
        'LUyNZ',
        'rangedice',
        'hUfZB',
        'eZBTa',
        ',\x0a\x20\x20\x20\x20\x20\x20chance4=',
        'UBrjB',
        '</td>',
        'Chance2',
        'display',
        'flex',
        'InHYl',
        'join',
        'GrMZF',
        'wdbWagered',
        'nonce',
        'TTdtd',
        'lbpHH',
        '3796641qBVUyn',
        'value',
        'appendChild',
        'NXPTn',
        '2|4|1|0|5|3',
        'Riglv',
        'dtTFe',
        '$1=$1*$2\x20',
        'NxVGn',
        'YeKRw',
        'message',
        'aBKWM',
        'return\x20currency',
        '4|13|18|16|9|0|6|17|7|14|2|15|5|12|8|10|1|11|3',
        'Roll',
        'trim',
        '742oDHhTc',
        'advancedChance',
        'paozP',
        'wdbMaxProfit',
        'height',
        'rsSxm',
        '\x0a\x20\x20\x20\x20chance4=',
        'nWBlH',
        'iLKXm',
        'SitZW',
        'KZKvS',
        'EKmKY',
        'createUIOk',
        'showInfo\x20OK',
        'vBQKw',
        'none',
        'advancedBetHighOnWinCheck',
        'wdb',
        'zQXLq',
        'imxkR',
        'OUPfy',
        'Stop\x20on\x20balance\x20',
        'lua',
        'advancedStopOnLose',
        'bgiVQ',
        'CLrZd',
        '#wdbHistory',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        'SXdIh',
        '\x0a\x0a\x20\x20\x20\x20chance1=',
        'href',
        'wdbMinBalance',
        'function\x20resetseed()\x0ajs.global:resetseed()\x0aend',
        'chance2',
        'iCRpj',
        'kxvMX',
        'style',
        'betSide',
        'HVBDa',
        'Result',
        'wdbLog',
        'JyEwE',
        '\x0a\x20\x20\x20\x20losses=',
        '<style>\x0a\x20*\x20{\x0a\x20\x20scrollbar-width:\x20auto!important;\x0a\x20\x20-webkit-font-smoothing:\x20antialiased;\x0a}\x0a\x0a::-webkit-scrollbar\x20{\x0a\x20\x20width:\x208px;\x0a\x20\x20height:\x208px;\x0a}\x0a\x0a::-webkit-scrollbar-track\x20{\x0a\x20\x20background:\x20#f1f1f1;\x0a}\x0a\x0a::-webkit-scrollbar-thumb\x20{\x0a\x20\x20background:\x20#888;\x0a}\x0a\x0a::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20background:\x20#555;\x0a}\x0a\x0a#wdb\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20width:\x201000px;\x0a\x20\x20font-family:\x20Courier\x20New,\x20monospace!important;\x0a\x20\x20font-size:\x2011px!important;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20line-height:\x201.5!important;\x0a\x20\x20top:\x205px;\x0a\x20\x20left:\x205px;\x0a\x20\x20position:\x20fixed;\x0a\x20\x20z-index:\x202147483002;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbHeader\x20{\x0a\x20\x20background-color:\x20antiquewhite;\x0a\x20\x20cursor:\x20move;\x0a\x20\x20padding:\x203px;\x0a\x20\x20border-radius:\x205px;\x0a}\x0a\x0a#wdbFooter\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a.wdb-toggle\x20{\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20padding:\x205px;\x0a\x20\x20z-index:\x202147483003;\x0a}\x0a\x0a#wdbMenu\x20{\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbMenu\x20select,\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a}\x0a\x0a#wdbMenu\x20span\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a#wdbMenu\x20select:focus\x20{\x0a\x20\x20color:\x20black!important;\x0a}\x0a\x0a.switch\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2019px;\x0a}\x0a\x0a.switch\x20input\x20{\x20\x0a\x20\x20opacity:\x200;\x0a\x20\x20width:\x200;\x0a\x20\x20height:\x200;\x0a}\x0a\x0a.slider\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#ccc;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20right:\x200;\x0a\x20\x20bottom:\x200;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.4s;\x0a\x20\x20transition:\x20.4s;\x0a}\x0a\x0a.slider:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20background:\x20white;\x0a\x20\x20height:\x2013px;\x0a\x20\x20width:\x2013px;\x0a\x20\x20left:\x203px;\x0a\x20\x20bottom:\x203.5px;\x0a\x20\x20border-radius:\x203px;\x0a\x20\x20-webkit-transition:\x20.3s;\x0a\x20\x20transition:\x20.3s;\x0a}\x0a\x0ainput:checked\x20+\x20.slider\x20{\x0a\x20\x20background-color:\x20#ffc107;\x0a}\x0a\x0ainput:focus\x20+\x20.slider\x20{\x0a\x20\x20box-shadow:\x200\x200\x201px\x20#ffca2c;\x0a}\x0a\x0ainput:checked\x20+\x20.slider:before\x20{\x0a\x20\x20-webkit-transform:\x20translateX(26px);\x0a\x20\x20-ms-transform:\x20translateX(26px);\x0a\x20\x20transform:\x20translateX(26px);\x0a}\x0a\x0a.btn-grad\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20color:\x20#000;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20#ffc107;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20transition:\x200.5s;\x0a\x20\x20padding:\x203px;\x0a\x20\x20background-size:\x20200%\x20auto;\x0a\x20\x20border:\x20#ffc107;\x0a\x20\x20border-radius:\x203px;\x0a}\x0a\x0a.btn-grad:hover\x20{\x0a\x20\x20background-color:\x20#ffca2c;\x0a\x20\x20text-decoration:\x20none;\x0a}\x0a\x0a.btn-grad:active\x20{\x0a\x20\x20opacity:\x20.65;\x0a}\x0a\x0a.btn-grad:disabled\x20{\x0a\x20\x20cursor:\x20auto;\x0a\x20\x20opacity:\x20.65;\x0a\x20\x20color:\x20dimgray;\x0a}\x0a\x0a#wdbOpenLUAScript,\x0a#wdbOpenJSScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbChart,\x0a#wdbWrapHistory\x20{\x0a\x20\x20height:\x20190px;\x0a\x20\x20padding:\x203px;\x0a}\x0a\x0a#wdbWrapHistory\x20{\x0a\x20\x20overflow-x:\x20auto;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20{\x0a\x20\x20border-collapse:\x20collapse;\x0a}\x0a\x0a#wdbWrapHistory\x20table\x20thead\x20tr\x20th\x20{\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20left;\x0a\x20\x20padding:\x201px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20color:\x20#000;\x0a}\x0a\x0a#wdbHistory\x20tr\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#fff;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a\x0a#wdbHistory\x20tr:last-child\x20{\x0a\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20white-space:\x20nowrap;\x0a\x20\x20padding:\x201.5px;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20border-left:\x201px\x20solid\x20#fff;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:first-child\x20{\x0a\x20\x20border-left:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td:last-child\x20{\x0a\x20\x20border-right:\x201px\x20solid\x20#ccc;\x0a}\x0a\x0a#wdbHistory\x20tr\x20td\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbAdvancedMode,\x0a#wdbWrapLog,\x0a#wdbWrapVariables,\x0a#wdbWrapFunctions,\x0a#wdbWrapTips\x20{\x0a\x20\x20overflow:\x20scroll;\x0a\x20\x20height:\x20300px;\x0a}\x0a\x0a#wdbWrapVariables\x20pre,\x0a#wdbWrapFunctions\x20pre,\x0a#wdbWrapTips\x20pre\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff;\x0a\x20\x20color:\x20#000;\x0a\x20\x20margin:\x200;\x0a}\x0a\x0a#wdbWrapLog\x20code\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a#wdbLog\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a\x20\x20padding-left:\x200;\x0a}\x0a\x0a#wdbOpenScript\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-stats,\x0a.wdb-flex-container\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20stretch;\x0a}\x0a\x0a.wdb-stats\x20div\x20{\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20padding:\x202px\x2032px;\x0a}\x0a\x0a.wdb-stats\x20div\x20li\x20{\x0a\x20\x20color:\x20#000;\x0a\x20\x20list-style:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20{\x0a\x20\x20line-height:\x202;\x0a\x20\x20padding:\x203px\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#e7e7e7;\x0a}\x0a\x0a.wdb-advanced-item:last-child\x20{\x0a\x20\x20border:\x20none;\x0a}\x0a\x0a.wdb-advanced-item\x20input\x20{\x0a\x20\x20all:\x20revert;\x0a}\x0a\x0a.wdb-advanced-item\x20input[type=number]\x20{\x0a\x20\x20width:\x2086px;\x0a}\x0a\x0a.clearfix::after\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20clear:\x20both;\x0a\x20\x20display:\x20table;\x0a}\x0a\x0a.float-left\x20{\x0a\x20\x20float:\x20left!important;\x0a}\x0a\x0a.float-right\x20{\x0a\x20\x20float:\x20right!important;\x0a}\x0a\x0a.wdb-menu2\x20{\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.wdb-menu2\x20span\x20{\x0a\x20\x20padding:\x203.5px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a#wdbTabMenu,\x0a#wdbControlMenu\x20{\x0a\x20\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x0a\x20\x20margin-top:\x203px;\x0a}\x0a\x0a#wdbTabMenu\x20button,\x0a#wdbControlMenu\x20button\x20{\x0a\x20\x20flex-basis:\x200;\x0a\x20\x20flex-grow:\x201;\x0a\x20\x20margin:\x203px;\x0a}\x0a\x0a.CodeMirror\x20{\x0a\x20\x20height:\x20269px;\x0a}\x0a\x0a.wdb-select\x20{\x0a\x20\x20all:\x20revert;\x0a\x20\x20background:\x20#fff!important;\x0a\x20\x20padding:\x203px\x205px;\x0a\x20\x20border:\x201px\x20solid\x20#ccc!important;\x0a\x20\x20border-radius:\x200!important;\x0a\x20\x20border-radius:\x203px!important;\x0a\x20\x20color:\x20#000!important;\x0a}\x0a</style>\x0a\x0a<div\x20id=\x22wdb\x22>\x0a\x20\x20<div\x20id=\x22wdbHeader\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Web\x20DiceBot\x20',
        'dice',
        'return\x20chance1',
        'nDVMK',
        'clientX',
        'jZcVj',
        'prototype',
        '\x0a\x20\x20\x20\x20profit=',
        'lPqpq',
        'jEySn',
        'wdbMaxBalance',
        'ULHjH',
        'sTnai',
        'huxKH',
        'yACTI',
        'wdbLoader\x20ok',
        ',\x0a\x20\x20\x20\x20\x20\x20profit=',
        '1408uvAoCF',
        'GbYoV',
        'save',
        'rKNEr',
        'wdbMenuMode',
        'oyAEt',
        'hNcxZ',
        'rbLUj',
        '\x22\x20type=\x22checkbox\x22\x20checked\x20/>',
        '/ching.mp3',
        'sViWr',
        '\x0a\x20\x20\x20\x20partialprofit=',
        'uTSYz',
        'eFeHK',
        'wTaSa',
        'ZGlyz',
        ';path=/',
        'function\x20unvault(amount,\x20password)\x0ajs.global:unvault(amount,\x20password)\x0aend',
        'result',
        'kenoNumbers\x20=\x20nil;\x20kenoRisk\x20=\x20nil',
        '319170SDnVkl',
        'white',
        'McNOG',
        'floor',
        'rcptJ',
        'darkMode',
        'AcBih',
        'GArQE',
        '//\x20scriptname=\x27example\x20LUA\x20script\x27\x0abasebet\x20=\x200.00000001;\x0anextbet\x20=\x20basebet;\x0a//\x20currency=\x27trx\x27\x0a\x0aplinkoRow\x20=\x208;\x20//\x20depend\x20dice\x20site,\x20only\x20for\x20plinko\x20game\x0aplinkoRisk\x20=\x20\x22low\x22;\x20//\x20low,\x20medium,\x20high;\x20only\x20for\x20plinko\x20game\x0a\x0afunction\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20//\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20basebet;\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet\x20=\x20previousbet\x20*\x202;\x0a\x20\x20}\x0a}\x0a',
        'stopOnProfitCheck',
        '\x20|\x20',
        'push',
        'YgRJu',
        'TozYE',
        'return\x20nextbet',
        'function\x20resetall()\x0ajs.global:resetall()\x0aend',
        'YmjLl',
        'fsSyt',
        'nckBd',
        'ehpiX',
        'MZgoM',
        'JcAyH',
        'qQXAQ',
        'qSiTi',
        'ffhak',
        'length',
        'ghvIt',
        'dUPaM',
        'light1',
        'offsetWidth',
        'Rxgjo',
        'uRboQ',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22wdb-toggle\x22\x20id=\x22wdbToggleMinimal\x22\x20onclick=\x22toggleMinimalBot(this)\x22>▼</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbMain\x22>\x0a\x20\x20\x20\x20<div\x20id=\x22wdbMenu\x22>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuMode\x22\x20class=\x22wdb-select\x22\x20onchange=\x27toggleMode(this.value)\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22lua\x22>LUA\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22js\x22>JS\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22advanced\x22>Advanced\x20Mode</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22wdbMenuCoin\x22\x20class=\x22wdb-select\x22\x20onchange=\x27changeCoin()\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option>Loading...</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Max\x20Record\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22wdbMaxRows\x22\x20class=\x22wdb-select\x22\x20value=\x22200\x22\x20onchange=\x22changeMaxRows()\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22scriptName\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-menu2\x22>\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Dark\x20Mode<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20onchange=\x22toggleDarkMode()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Stats<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowStats\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27stats\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Show\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleShowHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleShow(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Chart<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveChart\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27chart\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20History<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveHistory\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27history\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x0a\x20\x20\x20\x20\x20\x20<span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Live\x20Log<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22wdbToggleLiveLog\x22\x20type=\x22checkbox\x22\x20onchange=\x22toggleLive(\x27log\x27)\x22\x20checked=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetstats\x27)\x22>Reset\x20Stats</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetchart\x27)\x22>Reset\x20Chart</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resethistory\x27)\x22>Reset\x20History</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetlog\x27)\x22>Reset\x20Log</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetseed\x27)\x22>Reset\x20Seed</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding-top:\x2019px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20onclick=\x22selectFunction(\x27resetall\x27)\x22>Reset\x20All</button>\x0a\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-stats\x22\x20id=\x22wdbStats\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Time:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbTime\x22>0:0:0:0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Balance:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxBalance\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wagered:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22>(<span\x20id=\x22wdbPercentWagered\x22>0.00</span>x)\x20<span\x20id=\x22wdbWagered\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22\x20id=\x22wdbWrapPercentProfit\x22>(<span\x20id=\x22wdbPercentProfit\x22>0.00</span>%)\x20<span\x20id=\x22wdbProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Min\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMinProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Profit:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbMaxProfit\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Bets:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbBets\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Losses:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbLosses\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Bet:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighBet\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLose\x22>0.00000000</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Wins:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbWins\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Current\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbCurrentStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Win\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighWinStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-left\x22>Max\x20Lose\x20Streak:</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22float-right\x22><span\x20id=\x22wdbHighLoseStreak\x22>0</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22wdb-flex-container\x22\x20id=\x22wdbWrapControl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbChart\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapHistory\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20style=\x22margin-bottom:\x205px;\x22\x20onclick=\x22exportLog()\x22>Export\x20JSON</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Amount</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>High</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Chance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Profit</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Target\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Roll\x20Number</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Nonce</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Bet\x20ID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22wdbHistory\x22></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20width:\x2050%;\x20padding-left:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbTabMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowMode\x22\x20onclick=\x22toggleNav(\x27mode\x27)\x22>Mode</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowLog\x22\x20onclick=\x22toggleNav(\x27log\x27)\x22>Log</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowVariables\x22\x20onclick=\x22toggleNav(\x27variables\x27)\x22>Variables</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowFunctions\x22\x20onclick=\x22toggleNav(\x27functions\x27)\x22>Functions</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbShowTips\x22\x20onclick=\x22toggleNav(\x27tips\x27)\x22>Tips</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbLUAMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenLUAScript\x22\x20accept=\x22.txt,\x20.lua\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxLUA\x22>--scriptname=\x27example\x20LUA\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a--\x20currency=\x27trx\x27\x0a\x0afunction\x20dobet()\x0a\x20\x20--\x20log(\x27profit:\x20\x27..profit)\x0a\x20\x20--\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20then\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20else\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20end\x0aend</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbJSMode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22padding:\x205px\x202px\x205px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x22\x20id=\x22wdbSaveScriptButton\x22\x20onclick=\x22saveScript()\x22>Save</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:\x200\x203px;\x22\x20type=\x22file\x22\x20id=\x22wdbOpenJSScript\x22\x20accept=\x22.txt,\x20.js\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22wdbScriptBoxJS\x22>//scriptname=\x27example\x20JS\x20script\x27\x0achance=49.5\x0abethigh=true\x0abasebet=0.00000001\x0anextbet=basebet\x0a//\x20currency=\x27trx\x27\x0a\x0aasync\x20function\x20dobet()\x20{\x0a\x20\x20//\x20log(\x27profit:\x20\x27\x20+\x20profit)\x0a\x20\x20//\x20await\x20sleep(0.2)\x0a\x20\x20if\x20(win)\x20{\x0a\x20\x20\x20\x20nextbet=basebet\x0a\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20nextbet=previousbet*2\x0a\x20\x20}\x0a}</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbAdvancedMode\x22\x20class=\x22wdb-advanced\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chance\x20<input\x20type=\x22number\x22\x20id=\x22advancedChance\x22\x20value=\x2249.5\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Base\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedBaseBet\x22\x20value=\x220.00000001\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Bethigh\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHigh\x22\x20checked\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2245.5\x22\x20id=\x22advancedChanceOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnWinBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedChanceOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20chance\x20to\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2250.5\x22\x20id=\x22advancedChanceOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedChanceOnLoseBets\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWin\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnWinBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedMultiOnLoseCheck\x22\x20checked/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Multiplier\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLose\x22\x20value=\x222\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22advancedMultiOnLoseBets\x22\x20value=\x221\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnBetCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnBet\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnWinCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnWin\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedBetHighOnLose\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedBetHighOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Switch\x20bethigh\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22advancedBetHighOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22resetstatsOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reset\x20stats\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22number\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value=\x220.00000010\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22resetstatsOnProfit\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22wdb--input\x20wdb-w-40\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopRollNumberCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20roll\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2249.5\x22\x20id=\x22advancedStopRollNumber\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopAfterStreakCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20current\x20streak\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x22-2\x22\x20id=\x22advancedStopAfterStreak\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnBetsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x2210\x22\x20id=\x22advancedStopOnBets\x22\x20/>\x20bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnWinsCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnWins\x22\x20/>\x20win\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22advancedStopOnLoseCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x221\x22\x20id=\x22advancedStopOnLose\x22\x20/>\x20lose\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnProfitCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20profit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnProfit\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22wdb-advanced-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22stopOnBalanceCheck\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Stop\x20on\x20balance\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20value=\x220.00000010\x22\x20id=\x22stopOnBalance\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapLog\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code\x20id=\x22wdbLog\x22></code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapVariables\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbVariableList\x22>(r\x20:\x20just\x20read\x20|\x20w\x20:\x20can\x20write)\x0achance\x20--\x20(r/w)\x20%\x20Win\x20chance\x20in\x20next\x20game\x0aplinkoRow\x20--\x20(r/w)\x20Plinko\x20rows\x0aplinkoRisk\x20--\x20(r/w)\x20Plinko\x20risk\x20level:\x20\x27low\x27,\x20\x27medium\x27,\x20\x27high\x27,\x20etc..\x0abethigh\x20--\x20(r/w)\x20Bet\x20side\x20in\x20next\x20game,\x20true\x20is\x20over\x0aminbet\x20--\x20(r)\x20Minimum\x20amount\x20to\x20bet\x0amaxbet\x20--\x20(r)\x20Maximum\x20amount\x20to\x20bet\x0anextbet\x20--\x20(r/w)\x20Amount\x20in\x20next\x20game\x0alastBet.amount,\x20previousbet\x20--\x20(r/w)\x20Amount\x20in\x20previous\x20game\x0alastBet.chance\x20--\x20(r)\x20%\x20win\x20chance\x20in\x20previous\x20game\x0alastBet.roll\x20--\x20(r)\x20%\x20Roll\x20chance\x20in\x20previous\x20game\x0alastBet.target\x20--\x20(r)\x20Target\x20number\x20in\x20previous\x20game\x0alastBet.result\x20--\x20(r)\x20Result\x20number\x20in\x20previous\x20game\x0alastBet.profit,\x20currentprofit\x20--\x20(r)\x20Profit\x20in\x20previous\x20game\x0alastBet.nonce\x20--\x20(r)\x20Current\x20seed\x20nonce\x0alastBet.id\x20--\x20(r)\x20Bet\x20ID\x20in\x20previous\x20game\x0acurrency\x20--\x20(r/w)\x20Currency\x20to\x20play\x0abalance\x20--\x20(r)\x20Current\x20balance\x0aminbalance\x20--\x20(r)\x20Smallest\x20balance\x20in\x20session\x0amaxbalance\x20--\x20(r)\x20Biggest\x20balance\x20in\x20session\x0aminprofit\x20--\x20(r)\x20Smallest\x20profit\x20in\x20session\x0amaxprofit\x20--\x20(r)\x20Biggest\x20profit\x20in\x20session\x0aprofit\x20--\x20(r)\x20Session\x20profit\x0awagered\x20--\x20(r)\x20Session\x20wagered\x0awin\x20--\x20(r)\x20State\x20in\x20previous\x20game,\x20true\x20is\x20win\x0abets\x20--\x20(r)\x20Bet\x20count\x0awins\x20--\x20(r)\x20Win\x20count\x0awinstreak\x20\x20--\x20(r)\x20Winning\x20streak\x0alosses\x20--\x20(r)\x20Lose\x20count\x0alosestreak\x20--\x20(r)\x20Losing\x20streak\x0acurrentstreak\x20--\x20(r)\x20Current\x20streak,\x20smaller\x200\x20is\x20losing\x20streak\x0apartialprofit\x20--\x20(r)\x20Partial\x20profit\x0ascriptname\x20--\x20(r/w)\x20Name\x20of\x20script\x0acasino\x20--\x20(r)\x20Name\x20of\x20casino,\x20example:\x20\x27bch\x27\x20=\x20\x27bch.games\x27\x0a--\x20In\x20Range\x20Dice\x20game,\x20script\x20must\x20not\x20include\x20\x27chance\x27\x20&\x20\x27bethigh\x27\x20variable\x0a--\x20only\x20have\x20\x27chance1\x27,\x20\x27chance2\x27,\x20\x27chance3\x27,\x20\x27chance4\x0a--\x20If\x20mode\x20is\x20\x27between\x27\x20or\x20\x27outside\x27,\x20must\x20not\x20include\x20\x27chance3\x27\x20and\x20\x27chance4\x27\x0achance1\x20--\x20(r/w)\x20Win\x20chance\x201\x0achance2\x20--\x20(r/w)\x20Win\x20chance\x202\x0achance3\x20--\x20(r/w)\x20Win\x20chance\x203\x0achance4\x20--\x20(r/w)\x20Win\x20chance\x204\x0abetSide\x20--\x20(r/w)\x20Mode\x20of\x20range\x20dice\x20game:\x20\x27between\x27,\x20\x27outside\x27,\x20\x27between2\x27\x0a--\x20(some\x20site\x20not\x20have\x20\x27between2\x27)</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapFunctions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20id=\x22wdbFunctionList\x22>dobet()\x20--\x20Main\x20function\x20for\x20betting\x0astop()\x20--\x20Stop\x20betting\x0aresume()\x20--\x20Resume\x20betting\x20with\x20current\x20params\x0aresetseed()\x20--\x20Reset\x20fairness\x20\x0aresetstats()\x20--\x20Reset\x20statistics\x0aresetchart()\x20--\x20Reset\x20chart\x0aresethistory()\x20--\x20Reset\x20history\x0aresetlog()\x20--\x20Reset\x20log\x0aresetall()\x20--\x20Reset\x20time,\x20statistics,\x20chart,\x20history,\x20log\x0acheckbalance()\x20--\x20Check\x20actual\x20balance\x0aching()\x20--\x20Alert\x20with\x20sound\x0alog(message)\x20--\x20Write\x20a\x20message\x20to\x20Log\x20area\x0asleep(seconds)\x20--\x20Pause\x20betting\x20system\x20with\x20seconds,\x20in\x20JS\x20mode\x20must\x20put\x20\x27await\x27\x20before\x20sleep\x0aresetpartialprofit()\x20--\x20Reset\x20partialprofit\x0avault(amount)\x20--\x20Deposit\x20to\x20vault\x0aunvault(amount,\x20password)\x20--\x20Withdraw\x20from\x20vault</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbWrapTips\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre>Hold\x20top\x20area\x20to\x20move\x20the\x20bot\x20around\x0aClick\x20▼\x20or\x20▲\x20on\x20to\x20see\x20something\x20change\x0aDisable\x20chart,\x20history,\x20log\x20to\x20have\x20best\x20performance\x0aMany\x20cool\x20dice\x20script\x20to\x20try\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/awesome-scripts\x22\x20target=\x22_blank\x22>Awesome\x20Scripts</a>\x20(user\x20made)\x0aSome\x20extended\x20features\x20👉\x20<a\x20href=\x22https://github.com/webdicebot-project/add-ons\x22\x20target=\x22_blank\x22>Add-ons</a>\x20(user\x20made)\x0aPress\x20\x27W\x27\x20to\x20center\x20the\x20bot\x20UI</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wdbControlMenu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStartButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22start(\x27click\x27)\x22>Start</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stop()\x22>Stop</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbResumeButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22resume(\x27click\x27)\x22\x20disabled>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22wdbStopOnWinButton\x22\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22stopOnWin()\x22>Stop\x20On\x20Win</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-grad\x20btn-control\x22\x20onclick=\x22checkbalance()\x22>Check\x20Balance</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20id=\x22wdbFooter\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22clearfix\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22float-left\x22\x20style=\x22padding-left:\x205px;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'advancedBetHighOnLose',
        'HDTHe',
        '2|5|0|3|4|6|1',
        'jeVYT',
        'reset',
        'pEgdu',
        'hide',
        'NxZNi',
        'xNEUC',
        'OfeOo',
        'LDWhw',
        '$1=$1/$2\x20',
        '#000',
        'GBVWU',
        '%\x20chance\x20to\x20win,\x20',
        'advancedBetHighOnProfitCheck',
        'oWjqw',
        'advancedStopOnBetsCheck',
        'function\x20resetlog()\x0ajs.global:resetlog()\x0aend',
        'erQUz',
        'fRKiU',
        'low',
        'prepend',
        'wdbHighLoseStreak',
        'SPGhW',
        'sTFYL',
        'wdbRunningScript',
        '</option>',
        '\x0a\x20\x20\x20\x20chance2=',
        'play',
        'toString',
        'removeChild',
        'firstChild',
        'BAbtG',
        'advancedBetHighOnWin',
        'charAt',
        'UCFuP',
        'iPhfS',
        'then',
        '.json',
        'SVxdf',
        'map',
        'FoRDp',
        '\x20Hits',
        'HKZZe',
        'Call\x20resume()\x20by\x20script\x20->\x20betting\x20after\x205s',
        'return\x20chance3',
        'insertBefore',
        '9|3|6|8|0|2|4|5|7|1',
        'replace',
        'rows'
    ];
    _0x4fbe = function () {
        return _0x5b315e;
    };
    return _0x4fbe();
}
function exportLog() {
    const _0x573c20 = _0x12065a, _0x33aa09 = { 'KDrKW': _0x573c20(0x129) }, _0x337988 = JSON[_0x573c20(0x109)](fullLogs), _0x1689e3 = document[_0x573c20(0x114)]('a');
    _0x1689e3['href'] = window['URL'][_0x573c20(0x22f)](new Blob([_0x337988], { 'type': _0x33aa09['KDrKW'] })), _0x1689e3[_0x573c20(0x220)] = _0x573c20(0x3a7) + Date['now']()[_0x573c20(0x1ed)]()['slice'](-0x6) + _0x573c20(0x1f6), _0x1689e3[_0x573c20(0x28c)]();
}
class Chart {
    constructor(_0x11a797, _0x2a2ada = ![], _0xc02b73 = 0x64) {
        const _0x37ffdb = _0x12065a, _0x59f4f9 = {
                'Acgut': _0x37ffdb(0x152),
                'ZOvch': _0x37ffdb(0x2ae),
                'kvfbV': 'light1',
                'RnLKs': _0x37ffdb(0xfa)
            }, _0x3a0907 = _0x59f4f9[_0x37ffdb(0x126)][_0x37ffdb(0x204)]('|');
        let _0x33b6c1 = 0x0;
        while (!![]) {
            switch (_0x3a0907[_0x33b6c1++]) {
            case '0':
                this[_0x37ffdb(0x267)] = [{
                        'x': 0x0,
                        'y': 0x0
                    }];
                continue;
            case '1':
                this[_0x37ffdb(0x340)] = _0xc02b73;
                continue;
            case '2':
                this['containerId'] = _0x11a797;
                continue;
            case '3':
                this[_0x37ffdb(0x26b)]['render']();
                continue;
            case '4':
                this['_darkMode'] = _0x2a2ada;
                continue;
            case '5':
                this[_0x37ffdb(0x26b)] = new CanvasJS[(_0x37ffdb(0x343))](_0x11a797, {
                    'theme': _0x2a2ada ? _0x59f4f9[_0x37ffdb(0x227)] : _0x59f4f9[_0x37ffdb(0x127)],
                    'axisY': { 'includeZero': ![] },
                    'data': [{
                            'type': _0x59f4f9['RnLKs'],
                            'markerSize': 0x0,
                            'dataPoints': this['dps']
                        }]
                });
                continue;
            }
            break;
        }
    }
    set ['maxRows'](_0x146b44) {
        this['_maxRows'] = _0x146b44;
    }
    get ['maxRows']() {
        const _0x4f57ab = _0x12065a;
        return this[_0x4f57ab(0x340)];
    }
    set ['darkMode'](_0x2eba0c) {
        const _0xc6a2e1 = _0x12065a, _0x263662 = { 'Bliad': _0xc6a2e1(0x2ae) };
        this[_0xc6a2e1(0x30c)] = _0x2eba0c, this[_0xc6a2e1(0x26b)][_0xc6a2e1(0x363)]['theme'] = _0x2eba0c ? _0x263662[_0xc6a2e1(0x2d6)] : _0xc6a2e1(0x1ca), this['chart'][_0xc6a2e1(0x288)]();
    }
    get [_0x12065a(0x1b3)]() {
        const _0x541a1f = _0x12065a;
        return this[_0x541a1f(0x30c)];
    }
    [_0x12065a(0x23b)](_0xe18ee7, _0x1cd3f, _0x7ec311) {
        const _0x52319d = _0x12065a, _0x2de40f = {
                'jeVYT': function (_0x4313e1, _0x1863e3) {
                    return _0x4313e1 > _0x1863e3;
                },
                'LTFea': function (_0x45e75b, _0x43f0f2) {
                    return _0x45e75b - _0x43f0f2;
                }
            };
        this[_0x52319d(0x267)]['push']({
            'x': _0xe18ee7,
            'y': _0x1cd3f,
            'lineColor': _0x7ec311
        });
        if (_0x2de40f[_0x52319d(0x1d2)](this['dps'][_0x52319d(0x1c7)], this['_maxRows']))
            this[_0x52319d(0x267)][_0x52319d(0x11c)]();
        if (this[_0x52319d(0x267)][_0x2de40f[_0x52319d(0x304)](this[_0x52319d(0x267)][_0x52319d(0x1c7)], 0x2)])
            this['dps'][this[_0x52319d(0x267)]['length'] - 0x2][_0x52319d(0x2f1)] = _0x7ec311;
        this['chart'][_0x52319d(0x288)]();
    }
    ['resetChart']() {
        const _0x4a044f = _0x12065a;
        this[_0x4a044f(0x267)] = [{
                'x': 0x0,
                'y': 0x0
            }], this['chart'][_0x4a044f(0x363)][_0x4a044f(0x257)][0x0]['dataPoints'] = this['dps'], this[_0x4a044f(0x26b)]['render']();
    }
}
function changeMaxRows() {
    const _0x14b456 = _0x12065a, _0x412254 = {
            'PRvfE': _0x14b456(0x2d3),
            'gdxTZ': 'wdbMaxRows',
            'hmTdj': function (_0x53937b) {
                return _0x53937b();
            }
        }, _0x9eab55 = _0x412254[_0x14b456(0x29a)][_0x14b456(0x204)]('|');
    let _0x6bdf89 = 0x0;
    while (!![]) {
        switch (_0x9eab55[_0x6bdf89++]) {
        case '0':
            chart['maxRows'] = maxRows;
            continue;
        case '1':
            resethistory();
            continue;
        case '2':
            resetlog();
            continue;
        case '3':
            maxRows = Number(document['getElementById'](_0x412254['gdxTZ'])[_0x14b456(0x14f)]);
            continue;
        case '4':
            _0x412254['hmTdj'](resetchart);
            continue;
        }
        break;
    }
}
function toggleDarkMode() {
    const _0x15bd43 = _0x12065a, _0x51b8d1 = {
            'pephh': '#fff',
            'vbqyV': _0x15bd43(0x1db),
            'sTFYL': _0x15bd43(0x397),
            'KOoom': _0x15bd43(0x28a),
            'sCeEW': _0x15bd43(0x2f8),
            'WpPkl': _0x15bd43(0x2e1),
            'zUCgz': _0x15bd43(0x212),
            'HXGyz': _0x15bd43(0x30f),
            'uRboQ': _0x15bd43(0x275),
            'KGQkl': _0x15bd43(0x12b),
            'njBvs': _0x15bd43(0x279),
            'CLrZd': _0x15bd43(0x33e),
            'MSzaj': 'default',
            'fnsxk': _0x15bd43(0x284)
        };
    darkMode = !darkMode, chart[_0x15bd43(0x1b3)] = darkMode;
    const _0x5b3dd3 = document['getElementById']('wdb'), _0x145d90 = document[_0x15bd43(0xef)](_0x51b8d1[_0x15bd43(0x1e8)]), _0x531749 = document[_0x15bd43(0x2ca)](_0x51b8d1[_0x15bd43(0x225)]), _0x87d785 = document[_0x15bd43(0x2ca)](_0x51b8d1[_0x15bd43(0x282)]), _0x3eef33 = document[_0x15bd43(0x2ca)](_0x51b8d1[_0x15bd43(0x120)]);
    if (darkMode) {
        const _0x339730 = _0x51b8d1[_0x15bd43(0x33c)][_0x15bd43(0x204)]('|');
        let _0x478daf = 0x0;
        while (!![]) {
            switch (_0x339730[_0x478daf++]) {
            case '0':
                _0x3eef33['forEach'](_0x2928eb => _0x2928eb[_0x15bd43(0x182)]['color'] = '#fff');
                continue;
            case '1':
                _0x145d90[_0x15bd43(0x182)][_0x15bd43(0x2b0)] = _0x51b8d1['HXGyz'];
                continue;
            case '2':
                _0x5b3dd3[_0x15bd43(0x182)]['backgroundColor'] = _0x51b8d1[_0x15bd43(0x1cd)];
                continue;
            case '3':
                _0x531749[_0x15bd43(0x2a4)](_0x12513f => {
                    const _0x3e2ad6 = _0x15bd43;
                    _0x12513f['style'][_0x3e2ad6(0x2b0)] = _0x3e2ad6(0x275), _0x12513f['style']['color'] = '#fff';
                });
                continue;
            case '4':
                luaEditor[_0x15bd43(0x390)](_0x15bd43(0x279), _0x51b8d1[_0x15bd43(0x27c)]);
                continue;
            case '5':
                jsEditor[_0x15bd43(0x390)](_0x51b8d1[_0x15bd43(0x2b9)], 'darcula');
                continue;
            case '6':
                _0x5b3dd3[_0x15bd43(0x182)][_0x15bd43(0x26d)] = '#2a2a2a';
                continue;
            case '7':
                _0x5b3dd3[_0x15bd43(0x182)][_0x15bd43(0x3b3)] = _0x51b8d1[_0x15bd43(0x107)];
                continue;
            case '8':
                _0x87d785[_0x15bd43(0x2a4)](_0x5138cd => _0x5138cd[_0x15bd43(0x182)][_0x15bd43(0x3b3)] = '#fff');
                continue;
            }
            break;
        }
    } else {
        const _0x3d4886 = _0x51b8d1[_0x15bd43(0x177)][_0x15bd43(0x204)]('|');
        let _0x50a610 = 0x0;
        while (!![]) {
            switch (_0x3d4886[_0x50a610++]) {
            case '0':
                luaEditor[_0x15bd43(0x390)](_0x51b8d1[_0x15bd43(0x2b9)], _0x51b8d1[_0x15bd43(0x2bd)]);
                continue;
            case '1':
                _0x145d90[_0x15bd43(0x182)][_0x15bd43(0x2b0)] = _0x51b8d1['fnsxk'];
                continue;
            case '2':
                _0x5b3dd3[_0x15bd43(0x182)][_0x15bd43(0x26d)] = _0x51b8d1['pephh'];
                continue;
            case '3':
                jsEditor[_0x15bd43(0x390)](_0x51b8d1[_0x15bd43(0x2b9)], _0x51b8d1[_0x15bd43(0x2bd)]);
                continue;
            case '4':
                _0x531749[_0x15bd43(0x2a4)](_0x5507f0 => {
                    const _0x25bd12 = _0x15bd43;
                    _0x5507f0['style']['backgroundColor'] = _0x51b8d1[_0x25bd12(0x107)], _0x5507f0[_0x25bd12(0x182)][_0x25bd12(0x3b3)] = _0x51b8d1[_0x25bd12(0x39f)];
                });
                continue;
            case '5':
                _0x87d785[_0x15bd43(0x2a4)](_0x1e69d2 => _0x1e69d2[_0x15bd43(0x182)][_0x15bd43(0x3b3)] = '#000');
                continue;
            case '6':
                _0x5b3dd3['style']['color'] = _0x51b8d1[_0x15bd43(0x39f)];
                continue;
            case '7':
                _0x5b3dd3[_0x15bd43(0x182)][_0x15bd43(0x2b0)] = '#fff';
                continue;
            case '8':
                _0x3eef33[_0x15bd43(0x2a4)](_0x4db9b4 => _0x4db9b4[_0x15bd43(0x182)][_0x15bd43(0x3b3)] = _0x15bd43(0x1db));
                continue;
            }
            break;
        }
    }
    updateStats();
}
let previousPosition = {
    'top': _0x12065a(0x33f),
    'left': _0x12065a(0x33f),
    'position': _0x12065a(0x202)
};
function loadSavedPosition() {
    const _0x2461d9 = _0x12065a, _0x225f50 = { 'ICEOk': _0x2461d9(0x262) }, _0x4d285f = localStorage['getItem'](_0x225f50[_0x2461d9(0x243)]);
    if (_0x4d285f)
        try {
            const _0x33696a = JSON['parse'](_0x4d285f);
            _0x33696a[_0x2461d9(0x251)] && _0x33696a[_0x2461d9(0x364)] && (previousPosition = _0x33696a);
        } catch (_0x363ce3) {
        }
}
function savePosition() {
    const _0x1c9721 = _0x12065a, _0x17037a = { 'ZKXTD': 'wdb-bot-position' };
    localStorage[_0x1c9721(0x12d)](_0x17037a[_0x1c9721(0x387)], JSON['stringify'](previousPosition));
}
function toggleMinimalBot(_0x2f129a) {
    const _0x11750a = _0x12065a, _0x4dbac0 = {
            'UcvGT': 'wdbMain',
            'bMkhU': function (_0x33aed1, _0x194d2a) {
                return _0x33aed1 === _0x194d2a;
            },
            'EDvSP': _0x11750a(0x33f),
            'PIchf': function (_0x5f2d77) {
                return _0x5f2d77();
            },
            'vDmER': _0x11750a(0x16d),
            'QaFFN': '350px',
            'HAxvp': function (_0x11ffad, _0x3084de) {
                return _0x11ffad / _0x3084de;
            },
            'amZfI': _0x11750a(0x235),
            'OmwMJ': 'fixed',
            'ULHjH': '1000px',
            'hAJdg': 'block'
        }, _0x41c6b9 = document[_0x11750a(0xef)](_0x4dbac0[_0x11750a(0x24a)]), _0x414e19 = document['getElementById']('wdbFooter'), _0x3cfcbc = document[_0x11750a(0xef)](_0x11750a(0x16f));
    if (_0x4dbac0['bMkhU'](_0x2f129a['innerText'], '▼')) {
        const _0x104974 = window[_0x11750a(0x128)](_0x3cfcbc);
        previousPosition = {
            'top': _0x3cfcbc['style'][_0x11750a(0x251)] || _0x104974[_0x11750a(0x251)] || _0x4dbac0[_0x11750a(0x289)],
            'left': _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x364)] || _0x104974['left'] || '5px',
            'position': _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x101)] || _0x104974[_0x11750a(0x101)] || _0x11750a(0x202)
        }, _0x4dbac0[_0x11750a(0x106)](savePosition), _0x41c6b9[_0x11750a(0x182)][_0x11750a(0x145)] = _0x4dbac0[_0x11750a(0x230)], _0x414e19['style'][_0x11750a(0x145)] = _0x4dbac0[_0x11750a(0x230)], _0x3cfcbc['style'][_0x11750a(0x2fe)] = _0x4dbac0[_0x11750a(0x3cb)];
        const _0x4c5e3c = window[_0x11750a(0x2e8)], _0x10b8e6 = 0x15e, _0x31b79e = _0x4dbac0[_0x11750a(0x216)](_0x4c5e3c - _0x10b8e6, 0x2);
        _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x251)] = _0x4dbac0[_0x11750a(0x11e)], _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x364)] = _0x31b79e + 'px', _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x101)] = _0x4dbac0[_0x11750a(0x205)], _0x2f129a[_0x11750a(0x392)] = '▲';
    } else {
        const _0x2b9d69 = _0x11750a(0x1d1)[_0x11750a(0x204)]('|');
        let _0x1c9dae = 0x0;
        while (!![]) {
            switch (_0x2b9d69[_0x1c9dae++]) {
            case '0':
                _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x2fe)] = _0x4dbac0[_0x11750a(0x194)];
                continue;
            case '1':
                _0x2f129a['innerText'] = '▼';
                continue;
            case '2':
                _0x41c6b9[_0x11750a(0x182)]['display'] = _0x4dbac0['hAJdg'];
                continue;
            case '3':
                _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x251)] = previousPosition[_0x11750a(0x251)];
                continue;
            case '4':
                _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x364)] = previousPosition[_0x11750a(0x364)];
                continue;
            case '5':
                _0x414e19['style']['display'] = _0x4dbac0['hAJdg'];
                continue;
            case '6':
                _0x3cfcbc[_0x11750a(0x182)][_0x11750a(0x101)] = previousPosition[_0x11750a(0x101)];
                continue;
            }
            break;
        }
    }
}
function toggleHideControlBot(_0x144c12) {
    const _0x1b2bed = _0x12065a, _0x441b08 = {
            'eFeHK': _0x1b2bed(0x12a),
            'ptDtc': function (_0x1f86c8, _0x3bac6d) {
                return _0x1f86c8 === _0x3bac6d;
            }
        }, _0x130e71 = document['getElementById'](_0x441b08[_0x1b2bed(0x1a7)]);
    _0x441b08['ptDtc'](_0x144c12[_0x1b2bed(0x392)], '▲') ? (_0x130e71[_0x1b2bed(0x182)][_0x1b2bed(0x145)] = _0x1b2bed(0x16d), _0x144c12[_0x1b2bed(0x392)] = '▼') : (_0x130e71[_0x1b2bed(0x182)][_0x1b2bed(0x145)] = _0x1b2bed(0x146), _0x144c12[_0x1b2bed(0x392)] = '▲');
}
function drawSelectCoin() {
    const _0x35335a = _0x12065a, _0x3b436c = {
            'LDWhw': function (_0xd10c2c, _0x2f4e5c) {
                return _0xd10c2c(_0x2f4e5c);
            }
        }, _0x2a1562 = coins[_0x35335a(0x1f8)](_0x5156f8 => '<option\x20value=\x22' + _0x5156f8 + '\x22>' + _0x5156f8 + _0x35335a(0x1ea))[_0x35335a(0x148)]('');
    document['getElementById'](_0x35335a(0x303))[_0x35335a(0x123)] = _0x2a1562, currency = _0x3b436c[_0x35335a(0x1d9)](String, coin)[_0x35335a(0x10e)](), fengari['load'](_0x35335a(0x241) + currency + '\x22')();
}
async function wdbCreateUI() {
    const _0x4ba66a = _0x12065a, _0x3803f1 = {
            'PxaeH': function (_0x4d520f, _0x274778) {
                return _0x4d520f - _0x274778;
            },
            'HDTHe': _0x4ba66a(0x308),
            'TKQxn': function (_0x5c8284, _0xec8756) {
                return _0x5c8284 === _0xec8756;
            },
            'zzcEa': function (_0x60a1a9) {
                return _0x60a1a9();
            },
            'cTULx': function (_0x2ea441, _0xb1c49f) {
                return _0x2ea441 === _0xb1c49f;
            },
            'yTSQq': function (_0x38c9f7, _0x42b563) {
                return _0x38c9f7 === _0x42b563;
            },
            'EwZsB': _0x4ba66a(0x24f),
            'pjgFY': function (_0x4e5520, _0x120b51) {
                return _0x4e5520 === _0x120b51;
            },
            'EaYCO': function (_0x344d73, _0x2ddad7) {
                return _0x344d73 / _0x2ddad7;
            },
            'lRrJn': function (_0x2239d0, _0x5071e0) {
                return _0x2239d0 - _0x5071e0;
            },
            'HJUGM': function (_0x5456ed, _0x51b701) {
                return _0x5456ed - _0x51b701;
            },
            'cuiaW': function (_0x421d2c, _0x445506) {
                return _0x421d2c + _0x445506;
            },
            'WTsmc': function (_0x425c91, _0x24fd4f) {
                return _0x425c91 === _0x24fd4f;
            },
            'AGCou': function (_0xe90e90, _0x358ea8) {
                return _0xe90e90 / _0x358ea8;
            },
            'JFKbX': _0x4ba66a(0x236),
            'NVuxn': _0x4ba66a(0x3ca),
            'aKItv': 'wdb',
            'iLKXm': _0x4ba66a(0x2af),
            'spdmx': _0x4ba66a(0x375),
            'lyGei': _0x4ba66a(0x339),
            'hNFOV': _0x4ba66a(0x27d),
            'TymOF': 'wdbScriptBoxLUA',
            'hDXYB': 'default',
            'rClKo': _0x4ba66a(0x174),
            'tcBju': _0x4ba66a(0x21d),
            'JuPwq': _0x4ba66a(0x118),
            'EKmKY': _0x4ba66a(0x16d),
            'vBQKw': 'wdbWrapTips',
            'eECoi': _0x4ba66a(0x2a9),
            'YcZox': _0x4ba66a(0x354),
            'VpLQF': 'wdbOpenJSScript',
            'vUSLs': _0x4ba66a(0x28c),
            'lUZEP': _0x4ba66a(0x2c8),
            'gqVSk': _0x4ba66a(0x16a)
        }, _0x5d069a = document['createElement'](_0x3803f1[_0x4ba66a(0x38b)]);
    _0x5d069a['id'] = _0x3803f1[_0x4ba66a(0x121)], _0x5d069a[_0x4ba66a(0x123)] = wdbUI, document['body'][_0x4ba66a(0x1e5)](_0x5d069a);
    const _0x12c13e = document[_0x4ba66a(0xef)](_0x3803f1[_0x4ba66a(0x27b)]);
    let _0x263e5e = 0x0, _0x16cb57 = 0x0, _0x3582bb = 0x0, _0x286510 = 0x0;
    loadSavedPosition(), _0x12c13e[_0x4ba66a(0x182)]['top'] = previousPosition[_0x4ba66a(0x251)], _0x12c13e[_0x4ba66a(0x182)][_0x4ba66a(0x364)] = previousPosition[_0x4ba66a(0x364)], _0x12c13e[_0x4ba66a(0x182)][_0x4ba66a(0x101)] = previousPosition[_0x4ba66a(0x101)];
    function _0x370304(_0x100b5c) {
        const _0x59e0a4 = _0x4ba66a;
        _0x100b5c = _0x100b5c || window['event'], _0x100b5c['preventDefault'](), _0x3582bb = _0x100b5c[_0x59e0a4(0x18d)], _0x286510 = _0x100b5c[_0x59e0a4(0x2e3)], document['onmouseup'] = _0x564366, document['onmousemove'] = _0x5f4c87;
    }
    function _0x5f4c87(_0x4f121e) {
        const _0x5a990d = _0x4ba66a;
        _0x4f121e = _0x4f121e || window[_0x5a990d(0xed)], _0x4f121e[_0x5a990d(0x12f)](), _0x263e5e = _0x3803f1[_0x5a990d(0x346)](_0x3582bb, _0x4f121e['clientX']), _0x16cb57 = _0x3803f1['PxaeH'](_0x286510, _0x4f121e[_0x5a990d(0x2e3)]), _0x3582bb = _0x4f121e[_0x5a990d(0x18d)], _0x286510 = _0x4f121e[_0x5a990d(0x2e3)];
        let _0x488321 = _0x3803f1[_0x5a990d(0x346)](_0x12c13e['offsetTop'], _0x16cb57), _0x164e1c = _0x3803f1[_0x5a990d(0x346)](_0x12c13e[_0x5a990d(0x309)], _0x263e5e);
        _0x12c13e['style'][_0x5a990d(0x251)] = _0x488321 + 'px', _0x12c13e['style']['left'] = _0x164e1c + 'px';
    }
    function _0x564366() {
        const _0x22f335 = _0x4ba66a, _0x186310 = document[_0x22f335(0xef)](_0x3803f1[_0x22f335(0x1d0)]);
        if (_0x186310 && _0x3803f1[_0x22f335(0x34c)](_0x186310[_0x22f335(0x392)], '▼')) {
            const _0x4696db = window[_0x22f335(0x128)](_0x12c13e);
            previousPosition[_0x22f335(0x251)] = _0x12c13e[_0x22f335(0x182)][_0x22f335(0x251)] || _0x4696db[_0x22f335(0x251)], previousPosition['left'] = _0x12c13e[_0x22f335(0x182)][_0x22f335(0x364)] || _0x4696db['left'], _0x3803f1[_0x22f335(0x23c)](savePosition);
        }
        document[_0x22f335(0x10b)] = null, document[_0x22f335(0x399)] = null;
    }
    document[_0x4ba66a(0xef)](_0x4ba66a(0x397))[_0x4ba66a(0x347)] = _0x370304, document[_0x4ba66a(0x217)](_0x3803f1[_0x4ba66a(0x166)], function (_0x4550ac) {
        const _0x397086 = _0x4ba66a;
        if (_0x3803f1[_0x397086(0x295)](_0x4550ac['key'][_0x397086(0x10e)](), 'w')) {
            const _0x499cb8 = document['activeElement'], _0x36f9d6 = _0x3803f1[_0x397086(0x31d)](_0x499cb8[_0x397086(0x253)], _0x3803f1['EwZsB']) || _0x3803f1['pjgFY'](_0x499cb8['tagName'], 'TEXTAREA') || _0x499cb8[_0x397086(0xf2)] || _0x499cb8[_0x397086(0x2a8)](_0x397086(0x350));
            if (!_0x36f9d6) {
                const _0x10f024 = _0x3803f1[_0x397086(0x381)](_0x3803f1['lRrJn'](window[_0x397086(0x265)], _0x12c13e[_0x397086(0x307)]), 0x2), _0x36aae7 = _0x3803f1[_0x397086(0xf6)](window[_0x397086(0x2e8)], _0x12c13e[_0x397086(0x1cb)]) / 0x2;
                _0x12c13e[_0x397086(0x182)][_0x397086(0x251)] = _0x3803f1['cuiaW'](_0x10f024, 'px'), _0x12c13e[_0x397086(0x182)][_0x397086(0x364)] = _0x36aae7 + 'px';
                const _0x462641 = document[_0x397086(0xef)](_0x3803f1[_0x397086(0x1d0)]);
                _0x462641 && _0x462641[_0x397086(0x392)] === '▼' && (previousPosition[_0x397086(0x251)] = _0x12c13e['style'][_0x397086(0x251)], previousPosition['left'] = _0x12c13e[_0x397086(0x182)][_0x397086(0x364)], _0x3803f1[_0x397086(0x23c)](savePosition));
            }
        }
    }), window[_0x4ba66a(0x217)](_0x3803f1[_0x4ba66a(0x248)], function () {
        const _0x3f1da9 = _0x4ba66a, _0x577b03 = document[_0x3f1da9(0xef)]('wdbToggleMinimal');
        if (_0x577b03 && _0x3803f1['WTsmc'](_0x577b03[_0x3f1da9(0x392)], '▲')) {
            const _0x329dad = window['innerWidth'], _0xd98a8a = 0x15e, _0x1a0516 = _0x3803f1[_0x3f1da9(0x22c)](_0x3803f1['lRrJn'](_0x329dad, _0xd98a8a), 0x2);
            _0x12c13e[_0x3f1da9(0x182)][_0x3f1da9(0x364)] = _0x3803f1['cuiaW'](_0x1a0516, 'px');
        }
    });
    if (document[_0x4ba66a(0xef)](_0x3803f1[_0x4ba66a(0x273)]))
        document[_0x4ba66a(0xef)](_0x4ba66a(0x339))[_0x4ba66a(0x39d)]();
    if (document[_0x4ba66a(0xef)](_0x3803f1[_0x4ba66a(0x335)]))
        document[_0x4ba66a(0xef)](_0x3803f1[_0x4ba66a(0x335)])[_0x4ba66a(0x39d)]();
    luaEditor = CodeMirror['fromTextArea'](document['getElementById'](_0x3803f1[_0x4ba66a(0x263)]), {
        'theme': _0x3803f1[_0x4ba66a(0x23f)],
        'mode': _0x3803f1[_0x4ba66a(0x28b)],
        'lineNumbers': !![]
    }), luaEditor[_0x4ba66a(0x19c)](), jsEditor = CodeMirror[_0x4ba66a(0x116)](document['getElementById'](_0x3803f1[_0x4ba66a(0x20f)]), {
        'theme': _0x3803f1[_0x4ba66a(0x23f)],
        'mode': _0x3803f1[_0x4ba66a(0x232)],
        'lineNumbers': !![]
    }), jsEditor['save'](), document[_0x4ba66a(0xef)](_0x4ba66a(0x357))[_0x4ba66a(0x182)]['display'] = _0x4ba66a(0x16d), document[_0x4ba66a(0xef)]('wdbAdvancedMode')['style'][_0x4ba66a(0x145)] = _0x3803f1[_0x4ba66a(0x169)], document[_0x4ba66a(0xef)](_0x4ba66a(0x207))[_0x4ba66a(0x182)][_0x4ba66a(0x145)] = _0x3803f1[_0x4ba66a(0x169)], document[_0x4ba66a(0xef)]('wdbWrapVariables')['style'][_0x4ba66a(0x145)] = _0x3803f1[_0x4ba66a(0x169)], document[_0x4ba66a(0xef)](_0x4ba66a(0x252))[_0x4ba66a(0x182)]['display'] = _0x3803f1[_0x4ba66a(0x169)], document[_0x4ba66a(0xef)](_0x3803f1[_0x4ba66a(0x16c)])[_0x4ba66a(0x182)]['display'] = _0x3803f1[_0x4ba66a(0x169)], document['getElementById'](_0x3803f1['eECoi'])[_0x4ba66a(0x2a1)] = !![];
    const _0x38a355 = document['getElementById'](_0x4ba66a(0x3c5));
    _0x38a355[_0x4ba66a(0x217)](_0x4ba66a(0x28c), () => {
        const _0x4e660d = _0x4ba66a;
        _0x38a355[_0x4e660d(0x14f)] = null;
    }), _0x38a355['addEventListener'](_0x3803f1[_0x4ba66a(0x372)], async _0x5e718e => {
        const _0x3620cd = _0x4ba66a, _0x16d7f1 = await new Response(_0x5e718e[_0x3620cd(0x382)]['files'][0x0])[_0x3620cd(0x24b)]();
        if (!_0x16d7f1)
            return;
        luaEditor[_0x3620cd(0x2b4)](_0x16d7f1);
    });
    const _0x4aa864 = document['getElementById'](_0x3803f1[_0x4ba66a(0x2ea)]);
    return _0x4aa864[_0x4ba66a(0x217)](_0x3803f1[_0x4ba66a(0x3ab)], () => {
        _0x4aa864['value'] = null;
    }), _0x4aa864[_0x4ba66a(0x217)](_0x3803f1[_0x4ba66a(0x372)], async _0x41ca73 => {
        const _0x150e4f = _0x4ba66a, _0x10f517 = await new Response(_0x41ca73[_0x150e4f(0x382)][_0x150e4f(0x272)][0x0])[_0x150e4f(0x24b)]();
        if (!_0x10f517)
            return;
        jsEditor[_0x150e4f(0x2b4)](_0x10f517);
    }), chart = new Chart(_0x3803f1[_0x4ba66a(0xf5)], ![], 0x64), _0x3803f1[_0x4ba66a(0x2d8)];
}
async function wdbLoader(_0x28568d) {
    const _0x1d012a = _0x12065a, _0x4eb8fe = {
            'PxvRZ': _0x1d012a(0x2aa),
            'PAiiZ': 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js',
            'euJeM': _0x1d012a(0x3c2),
            'hNcxZ': _0x1d012a(0x2dc),
            'AcBih': function (_0x2cc4a8, _0x45f718) {
                return _0x2cc4a8 + _0x45f718;
            },
            'eyAXE': '/fengari-web.min.js',
            'OfeOo': function (_0x164303, _0x25290e) {
                return _0x164303 + _0x25290e;
            },
            'OHtrW': _0x1d012a(0x20c),
            'YeKRw': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css',
            'CPUMa': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css',
            'KZKvS': function (_0x268aa2, _0x321ad6) {
                return _0x268aa2(_0x321ad6);
            },
            'bYkMK': function (_0x406400) {
                return _0x406400();
            },
            'tgvfl': function (_0x5c7a9, _0x324508) {
                return _0x5c7a9 === _0x324508;
            },
            'EsuMg': _0x1d012a(0x13e),
            'dKEmK': _0x1d012a(0x20a),
            'iLhmc': function (_0x3328da, _0x3e54cd) {
                return _0x3328da(_0x3e54cd);
            },
            'EILqR': 'Connected'
        }, _0x410c46 = [
            _0x4eb8fe[_0x1d012a(0x25d)],
            _0x4eb8fe['PAiiZ'],
            'https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js',
            _0x4eb8fe['euJeM'],
            _0x4eb8fe[_0x1d012a(0x1a0)],
            _0x4eb8fe[_0x1d012a(0x1b4)](WDB_LIB, _0x4eb8fe[_0x1d012a(0x285)]),
            _0x4eb8fe[_0x1d012a(0x1d8)](WDB_LIB, _0x4eb8fe[_0x1d012a(0x2db)])
        ], _0x572daf = [
            _0x4eb8fe[_0x1d012a(0x157)],
            _0x4eb8fe[_0x1d012a(0x260)]
        ];
    for (const _0x542fac of _0x410c46) {
        await _0x28568d[_0x1d012a(0x270)](_0x542fac);
    }
    for (const _0x41b2a1 of _0x572daf) {
        await _0x28568d['loadCSS'](_0x41b2a1);
    }
    await _0x4eb8fe[_0x1d012a(0x168)](beforeWork, _0x28568d), await _0x4eb8fe['bYkMK'](wdbCreateUI), await getListCoin(), await initLua();
    if (_0x4eb8fe['tgvfl'](game, _0x4eb8fe[_0x1d012a(0x29b)]))
        luaEditor['setValue'](rangediceLuaScript), jsEditor[_0x1d012a(0x2b4)](rangediceJsScript), document[_0x1d012a(0x135)](_0x4eb8fe[_0x1d012a(0x2cb)])[_0x1d012a(0x2a1)] = !![];
    else {
        if (_0x4eb8fe[_0x1d012a(0x26c)](game, _0x1d012a(0x3a4)))
            luaEditor[_0x1d012a(0x2b4)](plinkoLuaScript), jsEditor[_0x1d012a(0x2b4)](plinkoJsScript), document[_0x1d012a(0x135)](_0x4eb8fe[_0x1d012a(0x2cb)])['disabled'] = !![];
        else
            game === 'keno' && (luaEditor[_0x1d012a(0x2b4)](kenoLuaScript), jsEditor[_0x1d012a(0x2b4)](kenoJsScript), document[_0x1d012a(0x135)]('#wdbMenuMode\x20option[value=\x22advanced\x22]')[_0x1d012a(0x2a1)] = !![]);
    }
    return _0x4eb8fe[_0x1d012a(0x37b)](log, _0x4eb8fe[_0x1d012a(0x334)]), _0x1d012a(0x198);
}
function toggleNav(_0x5657d5) {
    const _0xb64c08 = _0x12065a, _0x7f4f7f = {
            'ORgLM': function (_0x13186e, _0x31d92d) {
                return _0x13186e === _0x31d92d;
            },
            'TTdtd': _0xb64c08(0x25a),
            'nKEhb': function (_0x49b2c9, _0x5dd710) {
                return _0x49b2c9 === _0x5dd710;
            },
            'xNEUC': 'Mode',
            'DZISG': _0xb64c08(0x3c7),
            'gVozt': _0xb64c08(0x373),
            'KTQuM': _0xb64c08(0x2e6),
            'KPuiV': 'Tips'
        }, _0x44d95e = [
            _0x7f4f7f[_0xb64c08(0x1d7)],
            _0x7f4f7f[_0xb64c08(0x2b2)],
            _0x7f4f7f[_0xb64c08(0x292)],
            _0x7f4f7f[_0xb64c08(0x2d4)],
            _0x7f4f7f['KPuiV']
        ];
    _0x44d95e['forEach'](_0x3713c9 => {
        const _0x3661fb = _0xb64c08, _0x380f24 = _0x7f4f7f['ORgLM'](_0x3713c9[_0x3661fb(0x10e)](), _0x5657d5) ? _0x7f4f7f['TTdtd'] : 'none';
        document[_0x3661fb(0xef)](_0x3661fb(0x3ca) + _0x3713c9)[_0x3661fb(0x182)][_0x3661fb(0x145)] = _0x380f24, document['getElementById']('wdbShow' + _0x3713c9)[_0x3661fb(0x2a1)] = _0x7f4f7f[_0x3661fb(0x356)](_0x380f24, _0x7f4f7f[_0x3661fb(0x14c)]);
    });
}
function toggleShow(_0x5a6b11) {
    const _0x1dc939 = _0x12065a, _0x19c620 = {
            'WeNZA': function (_0x475f17, _0x197565) {
                return _0x475f17 + _0x197565;
            },
            'RXZtz': function (_0x597b1d, _0x1509fa) {
                return _0x597b1d(_0x1509fa);
            }
        }, _0x393c8d = document[_0x1dc939(0xef)](_0x1dc939(0x360) + _0x19c620['WeNZA'](_0x5a6b11['charAt'](0x0)[_0x1dc939(0x34b)](), _0x5a6b11[_0x1dc939(0x2a5)](0x1)))[_0x1dc939(0x13b)];
    _0x19c620[_0x1dc939(0x24c)](selectFunction, _0x393c8d ? _0x1dc939(0x36f) + _0x5a6b11 : 'hide' + _0x5a6b11);
}
function toggleLive(_0x10a53d) {
    const _0x2b0aa2 = _0x12065a, _0x23db0c = {
            'FIerV': function (_0x3b6f3b, _0x11578f) {
                return _0x3b6f3b + _0x11578f;
            },
            'mxJRj': function (_0x52e95b, _0x2e68b7) {
                return _0x52e95b(_0x2e68b7);
            },
            'ZqdQy': 'stop'
        }, _0x24e0a5 = document[_0x2b0aa2(0xef)](_0x2b0aa2(0x31a) + _0x23db0c[_0x2b0aa2(0x380)](_0x10a53d['charAt'](0x0)[_0x2b0aa2(0x34b)](), _0x10a53d[_0x2b0aa2(0x2a5)](0x1)))[_0x2b0aa2(0x13b)];
    _0x23db0c[_0x2b0aa2(0x29e)](selectFunction, '' + (_0x24e0a5 ? _0x2b0aa2(0x21a) : _0x23db0c['ZqdQy']) + _0x10a53d);
}
function selectFunction(_0x13a3a7) {
    const _0x3ba92f = _0x12065a, _0x49741e = {
            'resetall': resetall,
            'resetstats': resetstats,
            'resetchart': () => toggleChart(_0x3ba92f(0x1d3)),
            'resethistory': () => toggleHistory('clear'),
            'resetlog': () => toggleLog('clear'),
            'resetseed': resetseed,
            'stopchart': () => toggleChart('stop'),
            'startchart': () => toggleChart(_0x3ba92f(0x21a)),
            'stophistory': () => toggleHistory('stop'),
            'starthistory': () => toggleHistory(_0x3ba92f(0x21a)),
            'stoplog': () => toggleLog(_0x3ba92f(0x3b4)),
            'startlog': () => toggleLog(_0x3ba92f(0x21a)),
            'hidestats': () => toggleStats(_0x3ba92f(0x1d5)),
            'showstats': () => toggleStats(_0x3ba92f(0x36f)),
            'hidechart': () => toggleChart(_0x3ba92f(0x1d5)),
            'showchart': () => toggleChart('show'),
            'hidehistory': () => toggleHistory('hide'),
            'showhistory': () => toggleHistory(_0x3ba92f(0x36f))
        };
    if (_0x49741e[_0x13a3a7])
        _0x49741e[_0x13a3a7]();
}
function toggleMode(_0x22b6ae) {
    const _0x3e1e55 = _0x12065a, _0x430eda = {
            'GbYoV': function (_0x24198c, _0x3d30f5) {
                return _0x24198c === _0x3d30f5;
            },
            'YgRJu': _0x3e1e55(0x13e),
            'oyAEt': function (_0x5d9220, _0x4cbe53) {
                return _0x5d9220 === _0x4cbe53;
            },
            'XiNIo': function (_0x2035d4, _0x40f1dd) {
                return _0x2035d4 === _0x40f1dd;
            },
            'Riglv': _0x3e1e55(0x2c1),
            'McNOG': _0x3e1e55(0x3ae),
            'DVgPw': 'wdbJSMode',
            'uIMUL': _0x3e1e55(0x233),
            'oNmkq': 'lua',
            'QPSQV': _0x3e1e55(0x25a),
            'HVBDa': _0x3e1e55(0x16d),
            'ptelW': function (_0x4c2c33, _0x247dca) {
                return _0x4c2c33 === _0x247dca;
            }
        };
    mode = _0x22b6ae;
    if (_0x430eda['GbYoV'](game, _0x430eda[_0x3e1e55(0x1ba)]))
        luaEditor[_0x3e1e55(0x2b4)](rangediceLuaScript), jsEditor['setValue'](rangediceJsScript);
    else {
        if (_0x430eda[_0x3e1e55(0x19f)](game, _0x3e1e55(0x3a4)))
            luaEditor[_0x3e1e55(0x2b4)](plinkoLuaScript), jsEditor[_0x3e1e55(0x2b4)](plinkoJsScript);
        else
            _0x430eda[_0x3e1e55(0x259)](game, _0x430eda[_0x3e1e55(0x153)]) && (luaEditor[_0x3e1e55(0x2b4)](kenoLuaScript), jsEditor[_0x3e1e55(0x2b4)](kenoJsScript));
    }
    const _0x5e2cb0 = document['getElementById'](_0x430eda[_0x3e1e55(0x1b0)]), _0x24096e = document[_0x3e1e55(0xef)](_0x430eda[_0x3e1e55(0x3b1)]), _0x524d02 = document['getElementById'](_0x430eda[_0x3e1e55(0x34a)]);
    _0x5e2cb0['style']['display'] = _0x430eda[_0x3e1e55(0x19b)](_0x22b6ae, _0x430eda[_0x3e1e55(0x26a)]) ? _0x430eda['QPSQV'] : _0x430eda[_0x3e1e55(0x184)], _0x24096e[_0x3e1e55(0x182)][_0x3e1e55(0x145)] = _0x430eda['ptelW'](_0x22b6ae, 'js') ? _0x430eda[_0x3e1e55(0x21f)] : _0x3e1e55(0x16d), _0x524d02['style'][_0x3e1e55(0x145)] = _0x430eda[_0x3e1e55(0x19f)](_0x22b6ae, _0x3e1e55(0x336)) ? _0x430eda[_0x3e1e55(0x21f)] : _0x430eda[_0x3e1e55(0x184)], luaEditor[_0x3e1e55(0x36b)](), jsEditor[_0x3e1e55(0x36b)]();
}
function toggleStats(_0x35d5f8) {
    const _0x5ad576 = _0x12065a, _0x41e9b6 = {
            'sViWr': _0x5ad576(0x1d5),
            'tXRVf': 'none',
            'xYhzl': _0x5ad576(0x146),
            'oOIxj': _0x5ad576(0x226)
        }, _0x10c788 = _0x35d5f8 === _0x41e9b6[_0x5ad576(0x1a4)] ? _0x41e9b6['tXRVf'] : _0x41e9b6[_0x5ad576(0x20e)];
    document['getElementById'](_0x41e9b6[_0x5ad576(0x38e)])[_0x5ad576(0x182)][_0x5ad576(0x145)] = _0x10c788;
}
function toggleChart(_0x5be9ca) {
    const _0x22154c = _0x12065a, _0x39d580 = {
            'CRgNh': _0x22154c(0x1d5),
            'SGPUC': 'none',
            'AuMYw': _0x22154c(0x104),
            'ZGnxo': _0x22154c(0x36f),
            'rsSxm': _0x22154c(0x25a),
            'LWPpf': _0x22154c(0x3c8),
            'JCSWX': _0x22154c(0x3b4),
            'bVlnC': _0x22154c(0x1d3)
        }, _0x1fc4d0 = document[_0x22154c(0xef)](_0x22154c(0x2c8)), _0x1cf352 = document[_0x22154c(0xef)]('wdbWrapHistory');
    switch (_0x5be9ca) {
    case _0x39d580['CRgNh']:
        _0x1fc4d0[_0x22154c(0x182)][_0x22154c(0x145)] = _0x39d580[_0x22154c(0x3b2)], _0x1cf352[_0x22154c(0x182)][_0x22154c(0x162)] = _0x39d580['AuMYw'];
        break;
    case _0x39d580['ZGnxo']:
        _0x1fc4d0[_0x22154c(0x182)]['display'] = _0x39d580[_0x22154c(0x163)], _0x1cf352['style'][_0x22154c(0x162)] = _0x39d580[_0x22154c(0x221)];
        break;
    case _0x39d580['JCSWX']:
        stopChart = !![];
        break;
    case _0x22154c(0x21a):
        stopChart = ![];
        break;
    case _0x39d580['bVlnC']:
        betsChart = 0x0, profitChart = 0x0, chart[_0x22154c(0x2fa)]();
        break;
    }
}
function toggleHistory(_0x3c087a) {
    const _0x56e536 = _0x12065a, _0x3a70c2 = {
            'PkTbK': _0x56e536(0x371),
            'wawwV': _0x56e536(0x16d),
            'fRKiU': _0x56e536(0x25a),
            'cSbMz': _0x56e536(0x33b)
        }, _0x303e56 = document[_0x56e536(0xef)](_0x3a70c2[_0x56e536(0x2da)]), _0x501bde = document['getElementById'](_0x56e536(0x2c8));
    switch (_0x3c087a) {
    case _0x56e536(0x1d5):
        _0x303e56[_0x56e536(0x182)]['display'] = _0x3a70c2[_0x56e536(0x36a)], _0x501bde[_0x56e536(0x182)]['height'] = _0x56e536(0x104);
        break;
    case _0x56e536(0x36f):
        _0x303e56[_0x56e536(0x182)]['display'] = _0x3a70c2[_0x56e536(0x1e3)], _0x501bde[_0x56e536(0x182)][_0x56e536(0x162)] = _0x56e536(0x3c8);
        break;
    case _0x56e536(0x3b4):
        stopHistory = !![];
        break;
    case _0x56e536(0x21a):
        stopHistory = ![];
        break;
    case _0x3a70c2[_0x56e536(0x299)]:
        _0x303e56['innerHTML'] = '';
        break;
    }
}
function toggleLog(_0x4ebd47) {
    const _0x19a3f8 = _0x12065a, _0x3f90a5 = {
            'Iokla': _0x19a3f8(0x33b),
            'uTSYz': _0x19a3f8(0x186)
        };
    switch (_0x4ebd47) {
    case _0x19a3f8(0x3b4):
        stopLog = !![];
        break;
    case _0x19a3f8(0x21a):
        stopLog = ![];
        break;
    case _0x3f90a5[_0x19a3f8(0x333)]:
        document[_0x19a3f8(0xef)](_0x3f90a5[_0x19a3f8(0x1a6)])[_0x19a3f8(0x123)] = '';
        break;
    }
}
async function handleAdvanced() {
    const _0x3f73c4 = _0x12065a, _0x35dee7 = {
            'hnkiI': function (_0x2323e8, _0x33f0c9) {
                return _0x2323e8(_0x33f0c9);
            },
            'sTnai': _0x3f73c4(0x365),
            'eNHkG': function (_0x25c02f, _0x3e2c5c) {
                return _0x25c02f(_0x3e2c5c);
            },
            'mJJfz': function (_0x687c92, _0x27d987) {
                return _0x687c92(_0x27d987);
            },
            'NxZNi': 'advancedChanceOnWinBets',
            'GArQE': _0x3f73c4(0x2bc),
            'YmjLl': _0x3f73c4(0x38d),
            'eZBTa': function (_0x364ee2, _0x416818) {
                return _0x364ee2(_0x416818);
            },
            'vmSYM': _0x3f73c4(0x2c6),
            'vzLPB': _0x3f73c4(0x376),
            'FbRBL': _0x3f73c4(0x394),
            'bgiVQ': function (_0x4642ae, _0x2e52a8) {
                return _0x4642ae(_0x2e52a8);
            },
            'mCVuf': 'advancedMultiOnWinBets',
            'NlDnc': _0x3f73c4(0x2f0),
            'oeqEi': _0x3f73c4(0x22a),
            'ieAPJ': _0x3f73c4(0x30d),
            'rShgm': _0x3f73c4(0x3b9),
            'lPqpq': function (_0x1d24c7, _0x5c224b) {
                return _0x1d24c7 % _0x5c224b;
            },
            'VsOdy': _0x3f73c4(0x1de),
            'aXObt': _0x3f73c4(0x2f6),
            'vAoKz': function (_0x53919e, _0x85c4c7) {
                return _0x53919e(_0x85c4c7);
            },
            'qQXAQ': function (_0x492b75, _0x21d8d6) {
                return _0x492b75 >= _0x21d8d6;
            },
            'aaKMv': function (_0x5a44db) {
                return _0x5a44db();
            },
            'sOscy': 'advancedStopRollNumberCheck',
            'zBWDY': function (_0x3af68d, _0x226627) {
                return _0x3af68d(_0x226627);
            },
            'rbLUj': _0x3f73c4(0xf0),
            'tdjVE': function (_0x1ed652, _0x57b127) {
                return _0x1ed652 === _0x57b127;
            },
            'hDMqp': _0x3f73c4(0x291),
            'UnRMA': function (_0x32e325, _0x1d4e2a) {
                return _0x32e325 > _0x1d4e2a;
            },
            'WgWVy': function (_0x4f504b, _0x4f4557) {
                return _0x4f504b >= _0x4f4557;
            },
            'gbLVY': function (_0x46cc71, _0x3ecde2) {
                return _0x46cc71 <= _0x3ecde2;
            },
            'IJadE': function (_0x456be9) {
                return _0x456be9();
            },
            'nwCAi': function (_0x1e9de0, _0x23112e) {
                return _0x1e9de0 + _0x23112e;
            },
            'sdUJB': _0x3f73c4(0x231),
            'jEySn': _0x3f73c4(0x1e0),
            'LBozN': function (_0x3764a1, _0x39d105) {
                return _0x3764a1(_0x39d105);
            },
            'JcAyH': function (_0x4fd9cb, _0x390f1a) {
                return _0x4fd9cb(_0x390f1a);
            },
            'uskCz': function (_0xade5c9, _0x2009b9) {
                return _0xade5c9 + _0x2009b9;
            },
            'Ixnxk': function (_0x5ddb97, _0x41badd) {
                return _0x5ddb97 + _0x41badd;
            },
            'ZwpSj': '\x20bet',
            'LbrzJ': _0x3f73c4(0x3cc),
            'quLkm': function (_0x4c54bd, _0x3523a1) {
                return _0x4c54bd(_0x3523a1);
            },
            'wEiuB': _0x3f73c4(0x37c),
            'UCFuP': function (_0x5da085, _0x1901c7) {
                return _0x5da085(_0x1901c7);
            },
            'dtTFe': _0x3f73c4(0x359),
            'jJovG': _0x3f73c4(0x240),
            'hQiok': function (_0x32ac49) {
                return _0x32ac49();
            },
            'NXPTn': function (_0x2eb031, _0x4bbfae) {
                return _0x2eb031 + _0x4bbfae;
            },
            'mrpiG': '\x20lose',
            'KhDHT': _0x3f73c4(0x125),
            'kGBJc': function (_0x3dd022, _0x12ff61) {
                return _0x3dd022 + _0x12ff61;
            },
            'roRaU': _0x3f73c4(0x219),
            'ogyEY': function (_0x4c82b7, _0x3bd105) {
                return _0x4c82b7(_0x3bd105);
            },
            'kdPnb': _0x3f73c4(0x39a),
            'GBVWU': function (_0x1b5e23, _0x3e2bdd) {
                return _0x1b5e23(_0x3e2bdd);
            },
            'IuIRD': _0x3f73c4(0x16e),
            'smNlc': function (_0x354774, _0x8149e2) {
                return _0x354774(_0x8149e2);
            },
            'VyyRn': _0x3f73c4(0x1f1),
            'cgXCt': function (_0x3885e5, _0x673d8f) {
                return _0x3885e5 === _0x673d8f;
            },
            'PMXXy': function (_0x389fb8, _0xb764cf) {
                return _0x389fb8 % _0xb764cf;
            },
            'YWukM': function (_0x7befdf, _0x239fa9) {
                return _0x7befdf % _0x239fa9;
            },
            'FjwcY': function (_0x3e4c0d, _0xd4d2ed) {
                return _0x3e4c0d === _0xd4d2ed;
            },
            'iPhfS': _0x3f73c4(0x3ac),
            'nSbAG': _0x3f73c4(0x1cf),
            'IJKGh': function (_0x18a390, _0x2fbba5) {
                return _0x18a390 % _0x2fbba5;
            },
            'IHPDW': function (_0x27820b, _0x1d1c2d) {
                return _0x27820b * _0x1d1c2d;
            },
            'UOrgu': _0x3f73c4(0x276)
        };
    chance = _0x35dee7[_0x3f73c4(0x29c)](Number, document['getElementById'](_0x3f73c4(0x15f))[_0x3f73c4(0x14f)]);
    const _0x94b1e9 = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x195)])[_0x3f73c4(0x13b)], _0x2bee8e = _0x94b1e9 ? _0x35dee7[_0x3f73c4(0x314)](Number, document[_0x3f73c4(0xef)](_0x3f73c4(0x353))[_0x3f73c4(0x14f)]) : chance, _0x1b6192 = _0x35dee7[_0x3f73c4(0x3c6)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x1d6)])[_0x3f73c4(0x14f)]), _0x34254a = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x1b5)])[_0x3f73c4(0x13b)], _0x5e8d9f = _0x34254a ? Number(document['getElementById'](_0x35dee7[_0x3f73c4(0x1be)])[_0x3f73c4(0x14f)]) : chance, _0x3088f2 = _0x35dee7['eZBTa'](Number, document[_0x3f73c4(0xef)](_0x35dee7['vmSYM'])[_0x3f73c4(0x14f)]), _0x472cf8 = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x30e)])[_0x3f73c4(0x13b)], _0x19bfe7 = _0x472cf8 ? _0x35dee7['hnkiI'](Number, document['getElementById'](_0x35dee7[_0x3f73c4(0x391)])[_0x3f73c4(0x14f)]) : 0x1, _0x466c58 = _0x35dee7[_0x3f73c4(0x176)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x2e0)])['value']), _0x13b7f4 = document[_0x3f73c4(0xef)]('advancedMultiOnLoseCheck')['checked'], _0x201f5f = _0x13b7f4 ? _0x35dee7[_0x3f73c4(0x314)](Number, document[_0x3f73c4(0xef)](_0x35dee7['NlDnc'])[_0x3f73c4(0x14f)]) : 0x1, _0x3ed0f6 = _0x35dee7[_0x3f73c4(0x176)](Number, document['getElementById'](_0x35dee7[_0x3f73c4(0x39b)])['value']), _0x5ac358 = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x286)])[_0x3f73c4(0x13b)];
    if (_0x5ac358) {
        const _0x1638e3 = _0x35dee7[_0x3f73c4(0x140)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0xfd)])[_0x3f73c4(0x14f)]);
        if (_0x35dee7[_0x3f73c4(0x191)](bets, _0x1638e3) === 0x0)
            bethigh = !bethigh;
    }
    const _0x138a0a = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x2f2)])[_0x3f73c4(0x13b)];
    if (_0x138a0a) {
        const _0x31417b = _0x35dee7[_0x3f73c4(0x29c)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x32b)])['value']);
        if (profit >= _0x31417b)
            bethigh = !bethigh;
    }
    const _0x272f4c = document[_0x3f73c4(0xef)](_0x3f73c4(0x28e))[_0x3f73c4(0x13b)];
    if (_0x272f4c) {
        const _0x38e85e = _0x35dee7['vAoKz'](Number, document[_0x3f73c4(0xef)]('resetstatsOnProfit')[_0x3f73c4(0x14f)]);
        if (_0x35dee7[_0x3f73c4(0x1c4)](profit, _0x38e85e))
            _0x35dee7[_0x3f73c4(0x35d)](resetstats);
    }
    const _0x373f86 = document[_0x3f73c4(0xef)](_0x35dee7['sOscy'])['checked'];
    if (_0x373f86) {
        const _0x267040 = _0x35dee7[_0x3f73c4(0x25e)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x1a1)])['value']);
        if (_0x35dee7[_0x3f73c4(0x250)](lastBet[_0x3f73c4(0x1ac)], _0x267040))
            stop(), log(_0x35dee7[_0x3f73c4(0x117)] + _0x267040);
    }
    const _0x24e19d = document[_0x3f73c4(0xef)]('advancedStopAfterStreakCheck')[_0x3f73c4(0x13b)];
    if (_0x24e19d) {
        const _0x198348 = Number(document['getElementById']('advancedStopAfterStreak')[_0x3f73c4(0x14f)]);
        if (_0x35dee7[_0x3f73c4(0x306)](_0x198348, 0x0)) {
            if (_0x35dee7[_0x3f73c4(0x2b6)](currentstreak, _0x198348))
                _0x35dee7[_0x3f73c4(0x35d)](stop), log(_0x3f73c4(0x231) + _0x198348);
        } else {
            if (_0x35dee7['gbLVY'](currentstreak, _0x198348))
                _0x35dee7[_0x3f73c4(0x208)](stop), _0x35dee7[_0x3f73c4(0x3c6)](log, _0x35dee7['nwCAi'](_0x35dee7['sdUJB'], _0x198348));
        }
    }
    const _0x5ba2b6 = document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x192)])['checked'];
    if (_0x5ba2b6) {
        const _0x4a39f3 = _0x35dee7[_0x3f73c4(0x362)](Number, document[_0x3f73c4(0xef)](_0x3f73c4(0xf9))['value']);
        if (_0x35dee7[_0x3f73c4(0x1c4)](bets, _0x4a39f3))
            stop(), _0x35dee7[_0x3f73c4(0x1c3)](log, _0x35dee7['uskCz'](_0x35dee7[_0x3f73c4(0x2b1)](_0x3f73c4(0x359), _0x4a39f3), _0x35dee7[_0x3f73c4(0x245)]));
    }
    const _0x830ce6 = document['getElementById'](_0x35dee7[_0x3f73c4(0x2d9)])[_0x3f73c4(0x13b)];
    if (_0x830ce6) {
        const _0x25486f = _0x35dee7[_0x3f73c4(0x28d)](Number, document[_0x3f73c4(0xef)](_0x35dee7[_0x3f73c4(0x119)])[_0x3f73c4(0x14f)]);
        if (winstreak >= _0x25486f)
            stop(), _0x35dee7[_0x3f73c4(0x1f3)](log, _0x35dee7[_0x3f73c4(0x203)](_0x35dee7['nwCAi'](_0x35dee7[_0x3f73c4(0x154)], _0x25486f), _0x35dee7[_0x3f73c4(0x10f)]));
    }
    const _0x204c6a = document[_0x3f73c4(0xef)]('advancedStopOnLoseCheck')['checked'];
    if (_0x204c6a) {
        const _0x205c78 = _0x35dee7[_0x3f73c4(0x29c)](Number, document[_0x3f73c4(0xef)](_0x3f73c4(0x175))['value']);
        if (_0x35dee7[_0x3f73c4(0x2b6)](losestreak, _0x205c78))
            _0x35dee7[_0x3f73c4(0x3b0)](stop), log(_0x35dee7[_0x3f73c4(0x2b1)](_0x35dee7[_0x3f73c4(0x151)](_0x35dee7[_0x3f73c4(0x154)], _0x205c78), _0x35dee7[_0x3f73c4(0x2ad)]));
    }
    const _0x40a144 = document[_0x3f73c4(0xef)](_0x3f73c4(0x1b7))[_0x3f73c4(0x13b)];
    if (_0x40a144) {
        const _0x20bdd9 = _0x35dee7[_0x3f73c4(0x314)](Number, document['getElementById'](_0x35dee7['KhDHT'])[_0x3f73c4(0x14f)]);
        if (profit >= _0x20bdd9)
            _0x35dee7[_0x3f73c4(0x35d)](stop), log(_0x35dee7['kGBJc'](_0x3f73c4(0x32d), _0x20bdd9));
    }
    const _0x40757f = document['getElementById'](_0x35dee7[_0x3f73c4(0x105)])[_0x3f73c4(0x13b)];
    if (_0x40757f) {
        const _0x2e2b0c = _0x35dee7[_0x3f73c4(0x3ad)](Number, document['getElementById'](_0x35dee7[_0x3f73c4(0x385)])[_0x3f73c4(0x14f)]);
        if (_0x35dee7[_0x3f73c4(0x2b6)](balance, _0x2e2b0c))
            stop(), _0x35dee7[_0x3f73c4(0x1dc)](log, _0x35dee7[_0x3f73c4(0x2be)](_0x3f73c4(0x173), _0x2e2b0c));
    }
    if (win) {
        const _0x4abd4c = document[_0x3f73c4(0xef)](_0x35dee7['IuIRD'])[_0x3f73c4(0x13b)];
        if (_0x4abd4c) {
            const _0x3e6cf5 = _0x35dee7[_0x3f73c4(0x2bb)](Number, document['getElementById'](_0x35dee7[_0x3f73c4(0x383)])[_0x3f73c4(0x14f)]);
            if (_0x35dee7[_0x3f73c4(0x331)](_0x35dee7['PMXXy'](winstreak, _0x3e6cf5), 0x0))
                bethigh = !bethigh;
        }
        if (_0x35dee7[_0x3f73c4(0x250)](_0x35dee7[_0x3f73c4(0x130)](winstreak, _0x1b6192), 0x0))
            chance = _0x2bee8e;
        if (_0x472cf8) {
            if (_0x35dee7['FjwcY'](_0x35dee7[_0x3f73c4(0x191)](winstreak, _0x466c58), 0x0))
                nextbet = previousbet * _0x19bfe7;
        } else
            nextbet = basebet;
    } else {
        const _0x18bdf0 = document['getElementById'](_0x35dee7[_0x3f73c4(0x1f4)])[_0x3f73c4(0x13b)];
        if (_0x18bdf0) {
            const _0x3e3256 = _0x35dee7[_0x3f73c4(0x3ad)](Number, document['getElementById'](_0x35dee7['nSbAG'])[_0x3f73c4(0x14f)]);
            if (_0x35dee7[_0x3f73c4(0x2a7)](losestreak, _0x3e3256) === 0x0)
                bethigh = !bethigh;
        }
        if (losestreak % _0x3088f2 === 0x0)
            chance = _0x5e8d9f;
        if (_0x13b7f4) {
            if (_0x35dee7[_0x3f73c4(0x12e)](losestreak, _0x3ed0f6) === 0x0)
                nextbet = _0x35dee7[_0x3f73c4(0x124)](previousbet, _0x201f5f);
        } else
            nextbet = basebet;
    }
    return _0x35dee7[_0x3f73c4(0x24e)];
}
function changeCoin() {
    const _0x23ff14 = _0x12065a, _0x245e9c = {
            'InHYl': _0x23ff14(0x303),
            'hcxYW': function (_0x7774b4) {
                return _0x7774b4();
            }
        };
    coin = document[_0x23ff14(0xef)](_0x245e9c[_0x23ff14(0x147)])['value'], currency = coin[_0x23ff14(0x10e)](), fengari[_0x23ff14(0x110)](_0x23ff14(0x241) + currency + '\x22')(), _0x245e9c['hcxYW'](checkbalance);
}
async function handleStats() {
    const _0x141750 = _0x12065a, _0x20accf = {
            'uuWJH': function (_0x394169, _0x5ee0a4) {
                return _0x394169 === _0x5ee0a4;
            },
            'VnHFa': _0x141750(0x174),
            'bGwaq': function (_0x1b6436) {
                return _0x1b6436();
            },
            'pZHyR': function (_0x1f4f9c) {
                return _0x1f4f9c();
            },
            'NrAuw': function (_0x5d1d89, _0x7e1f14) {
                return _0x5d1d89 === _0x7e1f14;
            },
            'GLfuw': function (_0x251fa0, _0x169df4) {
                return _0x251fa0 && _0x169df4;
            },
            'NxVGn': function (_0x5186b9, _0x816771) {
                return _0x5186b9(_0x816771);
            },
            'ECuZM': _0x141750(0x13e),
            'ficcJ': _0x141750(0x1ff),
            'JwviE': _0x141750(0x18a),
            'bTeff': function (_0x5720bf, _0x5541c4) {
                return _0x5720bf > _0x5541c4;
            },
            'PPxLc': function (_0x399785, _0x55780c) {
                return _0x399785 < _0x55780c;
            },
            'SXdIh': function (_0x21f026, _0x5babf2) {
                return _0x21f026 === _0x5babf2;
            },
            'yACTI': _0x141750(0x3a4),
            'wTaSa': _0x141750(0x2c1),
            'FQkvh': function (_0x1f9928, _0x52a410) {
                return _0x1f9928 === _0x52a410;
            },
            'fQsmo': 'between',
            'lKjTG': function (_0x5191f3, _0x18b36b) {
                return _0x5191f3 > _0x18b36b;
            },
            'xLYHu': 'outside',
            'GrMZF': function (_0x37c903, _0x5686fe) {
                return _0x37c903 > _0x5686fe;
            },
            'IMxJO': function (_0x2df3e2, _0x43f1f9) {
                return _0x2df3e2 === _0x43f1f9;
            },
            'ZGlyz': _0x141750(0x2a3),
            'ftDSg': function (_0x4bf781, _0x1a5330) {
                return _0x4bf781 > _0x1a5330;
            },
            'OJJxT': function (_0x1fa7c1, _0x433110) {
                return _0x1fa7c1 < _0x433110;
            },
            'oPhxJ': function (_0xd09adc, _0x2fd0ea) {
                return _0xd09adc || _0x2fd0ea;
            },
            'LOAiF': _0x141750(0x268),
            'pmXbn': _0x141750(0x209),
            'OUPfy': _0x141750(0x325),
            'CoSgX': function (_0x373ff7, _0xa3e8fc) {
                return _0x373ff7 > _0xa3e8fc;
            },
            'aBjDd': function (_0xf59320, _0x4b98bc) {
                return _0xf59320 > _0x4b98bc;
            },
            'nodqm': function (_0x1b3705, _0x56c41c) {
                return _0x1b3705 > _0x56c41c;
            },
            'eswRw': function (_0x2b58d3, _0x3b4814) {
                return _0x2b58d3 > _0x3b4814;
            },
            'idRxG': function (_0x2f7e4c, _0x796eae) {
                return _0x2f7e4c > _0x796eae;
            },
            'UBrjB': function (_0x2d9713) {
                return _0x2d9713();
            }
        }, _0xc135de = Date['now']();
    speedHistory['push'](_0xc135de);
    const _0x4757a6 = 0x2710;
    speedHistory = speedHistory[_0x141750(0x35a)](_0x5dc1f2 => _0xc135de - _0x5dc1f2 <= _0x4757a6), bets++, lastBet[_0x141750(0x15c)] = lastBet[_0x141750(0x395)], lastBet['target'] = target, lastBet[_0x141750(0x300)] = target;
    if (game === _0x20accf[_0x141750(0x2f4)]) {
        const _0x24528c = _0x20accf['ficcJ'][_0x141750(0x204)]('|');
        let _0x517304 = 0x0;
        while (!![]) {
            switch (_0x24528c[_0x517304++]) {
            case '0':
                lastBet[_0x141750(0x2c7)] = chance3;
                continue;
            case '1':
                lastBet['BetSide'] = betSide;
                continue;
            case '2':
                lastBet[_0x141750(0x11d)] = chance3;
                continue;
            case '3':
                lastBet['Chance1'] = chance1;
                continue;
            case '4':
                lastBet[_0x141750(0x3a8)] = chance4;
                continue;
            case '5':
                lastBet['Chance4'] = chance4;
                continue;
            case '6':
                lastBet[_0x141750(0x17f)] = chance2;
                continue;
            case '7':
                lastBet[_0x141750(0x183)] = betSide;
                continue;
            case '8':
                lastBet[_0x141750(0x144)] = chance2;
                continue;
            case '9':
                lastBet['chance1'] = chance1;
                continue;
            }
            break;
        }
    }
    lastBet[_0x141750(0x1ac)] = result, lastBet[_0x141750(0x185)] = result, lastBet[_0x141750(0x3c3)] = currentprofit, lastBet[_0x141750(0x223)] = currentprofit, lastBet['Nonce'] = lastBet[_0x141750(0x14b)], lastBet['Id'] = lastBet['id'], balance += currentprofit, profit += currentprofit, wagered += nextbet, partialprofit += currentprofit;
    !stopChart && (betsChart++, profitChart += currentprofit);
    if (game === _0x20accf[_0x141750(0x21b)])
        win = lastBet['bethigh'] ? _0x20accf[_0x141750(0x122)](lastBet['result'], lastBet[_0x141750(0x382)]) : _0x20accf[_0x141750(0x20d)](lastBet[_0x141750(0x1ac)], lastBet[_0x141750(0x382)]);
    else {
        if (_0x20accf[_0x141750(0x17a)](game, _0x20accf[_0x141750(0x197)]) || game === _0x20accf[_0x141750(0x1a8)])
            win = _0x20accf[_0x141750(0x122)](lastBet['profit'], 0x0);
        else {
            if (_0x20accf[_0x141750(0x398)](game, _0x20accf[_0x141750(0x2f4)])) {
                if (_0x20accf['FQkvh'](lastBet[_0x141750(0x183)], _0x20accf['fQsmo']))
                    win = _0x20accf['lKjTG'](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x2fb)]) && lastBet[_0x141750(0x395)] < lastBet['chance2'];
                else {
                    if (lastBet[_0x141750(0x183)] === _0x20accf['xLYHu'])
                        win = _0x20accf[_0x141750(0x20d)](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x2fb)]) || _0x20accf[_0x141750(0x149)](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x17f)]);
                    else {
                        if (_0x20accf[_0x141750(0x332)](lastBet[_0x141750(0x183)], _0x20accf[_0x141750(0x1a9)])) {
                            const _0x339f2a = _0x20accf[_0x141750(0x327)](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x2fb)]) && _0x20accf[_0x141750(0x369)](lastBet['roll'], lastBet[_0x141750(0x17f)]), _0x36aa92 = _0x20accf[_0x141750(0x149)](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x2c7)]) && _0x20accf[_0x141750(0x369)](lastBet[_0x141750(0x395)], lastBet[_0x141750(0x3a8)]);
                            win = _0x20accf[_0x141750(0x22b)](_0x339f2a, _0x36aa92);
                        }
                    }
                }
            } else
                win = lastBet[_0x141750(0x1ac)] >= lastBet[_0x141750(0x382)];
        }
    }
    if (win) {
        const _0x2c2d69 = _0x20accf[_0x141750(0x2a2)]['split']('|');
        let _0xce701a = 0x0;
        while (!![]) {
            switch (_0x2c2d69[_0xce701a++]) {
            case '0':
                losestreak = 0x0;
                continue;
            case '1':
                currentstreak = winstreak;
                continue;
            case '2':
                winstreak++;
                continue;
            case '3':
                wins++;
                continue;
            case '4':
                color = _0x20accf[_0x141750(0x131)];
                continue;
            }
            break;
        }
    } else {
        color = _0x20accf[_0x141750(0x172)], losses++, losestreak++, winstreak = 0x0, currentstreak = -losestreak;
        if (_0x20accf['CoSgX'](previousbet, maxLosseAmount))
            maxLosseAmount = previousbet;
    }
    if (_0x20accf[_0x141750(0x277)](nextbet, maxBetAmount))
        maxBetAmount = nextbet;
    if (_0x20accf[_0x141750(0x11f)](winstreak, maxwinstreak))
        maxwinstreak = winstreak;
    if (_0x20accf[_0x141750(0x122)](losestreak, maxlosestreak))
        maxlosestreak = losestreak;
    if (balance < minbalance)
        minbalance = balance;
    if (_0x20accf['eswRw'](balance, maxbalance))
        maxbalance = balance;
    if (_0x20accf[_0x141750(0x20d)](profit, minprofit))
        minprofit = profit;
    if (_0x20accf[_0x141750(0x25b)](profit, maxprofit))
        maxprofit = profit;
    _0x20accf[_0x141750(0x142)](showInfo)[_0x141750(0x1f5)](async () => {
        const _0x11f904 = _0x141750;
        try {
            if (_0x20accf[_0x11f904(0x398)](mode, _0x20accf[_0x11f904(0x242)]))
                await _0x20accf['bGwaq'](updateLua);
            else {
                if (mode === 'js')
                    await _0x20accf[_0x11f904(0x266)](dobet);
                else
                    _0x20accf['NrAuw'](mode, _0x11f904(0x336)) && await _0x20accf[_0x11f904(0x37d)](handleAdvanced);
            }
            if (_0x20accf['GLfuw'](win, sOW))
                _0x20accf[_0x11f904(0x37d)](stop);
            if (run)
                _0x20accf[_0x11f904(0x37d)](playBet);
        } catch (_0x31b710) {
            _0x20accf[_0x11f904(0x266)](stop), _0x20accf[_0x11f904(0x156)](log, _0x31b710);
        }
    });
}
async function showInfo() {
    const _0x5d2676 = _0x12065a, _0x1da586 = {
            'DKMSQ': function (_0x43bb95, _0x1b75f6) {
                return _0x43bb95 === _0x1b75f6;
            },
            'rcptJ': 'white',
            'rYxys': 'black',
            'UXeTJ': function (_0x423a81, _0x1382fb) {
                return _0x423a81 < _0x1382fb;
            },
            'FUUjd': _0x5d2676(0x325),
            'lbpHH': _0x5d2676(0x209),
            'FEgpu': 'wdbHighWinStreak',
            'gkQhY': _0x5d2676(0x14a),
            'kIsNg': _0x5d2676(0x32f),
            'higCo': _0x5d2676(0xee),
            'aQYgJ': _0x5d2676(0x274),
            'SPGhW': 'wdbLosses',
            'lmjRp': 'wdbCurrentStreak',
            'pEgdu': _0x5d2676(0x1e6),
            'asLEl': _0x5d2676(0x17d),
            'xBDFh': _0x5d2676(0x193),
            'Rxgjo': _0x5d2676(0x161),
            'hFEgu': function (_0x54c9a1, _0x478d7a) {
                return _0x54c9a1 / _0x478d7a;
            },
            'LDLqu': function (_0x338376, _0x3bad50) {
                return _0x338376 * _0x3bad50;
            },
            'OUhlU': function (_0x4b0989, _0x707119) {
                return _0x4b0989 + _0x707119;
            },
            'hUfZB': function (_0x18bb1a, _0xbac968) {
                return _0x18bb1a(_0xbac968);
            },
            'wQInT': _0x5d2676(0x224),
            'nNjBy': function (_0x5e06df, _0x49d695) {
                return _0x5e06df / _0x49d695;
            },
            'ukkBZ': _0x5d2676(0x13a),
            'imxkR': function (_0xa4067e, _0x18f4c2) {
                return _0xa4067e === _0x18f4c2;
            },
            'AWBZy': 'dice',
            'lcLZz': function (_0x60fa4e, _0x1b17c8) {
                return _0x60fa4e !== _0x1b17c8;
            },
            'lXwqB': _0x5d2676(0x13e),
            'EyNVX': function (_0x392d30, _0x4c7461) {
                return _0x392d30 === _0x4c7461;
            },
            'fZuEI': function (_0x95f36b, _0x358555) {
                return _0x95f36b + _0x358555;
            },
            'MZgoM': function (_0x174210, _0x250a58) {
                return _0x174210(_0x250a58);
            },
            'DaLQG': function (_0x274ebb, _0x126f00) {
                return _0x274ebb(_0x126f00);
            },
            'lTOlx': function (_0x49f03e, _0x427f17) {
                return _0x49f03e !== _0x427f17;
            },
            'gLIIX': function (_0x5981dc, _0xf067c1) {
                return _0x5981dc === _0xf067c1;
            },
            'lbRLt': _0x5d2676(0x3a4),
            'VPKBw': function (_0x274712, _0x55a75e) {
                return _0x274712 === _0x55a75e;
            },
            'WIbYo': _0x5d2676(0x2c1),
            'DjwFJ': function (_0x4af9e2, _0x4089c5) {
                return _0x4af9e2(_0x4089c5);
            },
            'CHlAP': function (_0x3f071f, _0x48f7f6) {
                return _0x3f071f + _0x48f7f6;
            },
            'zcDAp': function (_0x1efebd, _0x8994cf) {
                return _0x1efebd + _0x8994cf;
            },
            'fyLKM': function (_0xbf7ccc, _0x4c3073) {
                return _0xbf7ccc + _0x4c3073;
            },
            'iQpls': _0x5d2676(0x1fa),
            'kdWLN': '#91f190',
            'KQKok': '#ffc0cb',
            'dSGha': _0x5d2676(0x371),
            'nckBd': function (_0x4d0877, _0x2f88ec) {
                return _0x4d0877 > _0x2f88ec;
            },
            'VRPHo': function (_0x1b8c45, _0x27449b) {
                return _0x1b8c45 + _0x27449b;
            },
            'GePic': '\x20|\x20',
            'JLSBe': function (_0x51d29c, _0x3de21b) {
                return _0x51d29c(_0x3de21b);
            },
            'wkfPc': function (_0xaa0353, _0x10aa07) {
                return _0xaa0353 !== _0x10aa07;
            },
            'Wwtqt': function (_0x33b5b2, _0x2be0e8) {
                return _0x33b5b2(_0x2be0e8);
            },
            'bWNEl': _0x5d2676(0x16b)
        }, _0x51c0d3 = _0x1da586[_0x5d2676(0x389)](profit, 0x0) ? darkMode ? _0x1da586[_0x5d2676(0x1b2)] : _0x1da586[_0x5d2676(0x290)] : _0x1da586['UXeTJ'](profit, 0x0) ? _0x1da586[_0x5d2676(0x138)] : _0x1da586[_0x5d2676(0x14d)], _0x556618 = currentstreak === 0x0 ? darkMode ? _0x1da586[_0x5d2676(0x1b2)] : _0x1da586['rYxys'] : currentstreak < 0x0 ? _0x1da586[_0x5d2676(0x138)] : _0x1da586['lbpHH'], _0x5b83ba = maxwinstreak > 0x0 ? _0x5d2676(0x209) : _0x1da586[_0x5d2676(0x290)], _0x199151 = maxlosestreak > 0x0 ? _0x5d2676(0x325) : _0x1da586[_0x5d2676(0x290)];
    document[_0x5d2676(0xef)](_0x1da586['FEgpu'])[_0x5d2676(0x182)][_0x5d2676(0x3b3)] = _0x5b83ba, document[_0x5d2676(0xef)](_0x5d2676(0x1e6))['style']['color'] = _0x199151, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0xf8)])[_0x5d2676(0x392)] = wagered[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x348)])['innerText'] = balance['toFixed'](decimalAmountView), document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x3b5)])[_0x5d2676(0x182)][_0x5d2676(0x3b3)] = _0x51c0d3, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x3b5)])['innerText'] = profit[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x5d2676(0x393))[_0x5d2676(0x392)] = maxBetAmount[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x5d2676(0x2ef))[_0x5d2676(0x392)] = maxLosseAmount[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x5d2676(0x132))[_0x5d2676(0x392)] = bets, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x238)])[_0x5d2676(0x392)] = wins, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x1e7)])[_0x5d2676(0x392)] = losses, document['getElementById'](_0x5d2676(0xf7))['style']['color'] = _0x556618, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x2f7)])[_0x5d2676(0x392)] = currentstreak, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x2df)])[_0x5d2676(0x392)] = maxwinstreak, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x1d4)])[_0x5d2676(0x392)] = maxlosestreak, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x2bf)])[_0x5d2676(0x392)] = minbalance[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x341)])[_0x5d2676(0x392)] = maxbalance[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x5d2676(0x370))[_0x5d2676(0x392)] = minprofit[_0x5d2676(0xfe)](decimalAmountView), document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x1cc)])[_0x5d2676(0x392)] = maxprofit[_0x5d2676(0xfe)](decimalAmountView), percentWagered = wagered / startBalance, percentWagered = _0x1da586['hFEgu'](Math[_0x5d2676(0x35e)](_0x1da586[_0x5d2676(0x22e)](_0x1da586['OUhlU'](percentWagered, Number[_0x5d2676(0x351)]), 0x2710)), 0x2710), percentWagered = _0x1da586[_0x5d2676(0x13f)](isNaN, percentWagered) ? 0x0 : percentWagered, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0x264)])['innerText'] = percentWagered, percentProfit = _0x1da586[_0x5d2676(0x22e)](_0x1da586['nNjBy'](profit, startBalance), 0x64), percentProfit = _0x1da586[_0x5d2676(0x320)](Math['round'](_0x1da586[_0x5d2676(0x100)](percentProfit, Number[_0x5d2676(0x351)]) * 0x2710), 0x2710), percentProfit = isNaN(percentProfit) ? 0x0 : percentProfit, document[_0x5d2676(0xef)]('wdbWrapPercentProfit')[_0x5d2676(0x182)][_0x5d2676(0x3b3)] = _0x51c0d3, document['getElementById'](_0x1da586[_0x5d2676(0x36d)])[_0x5d2676(0x392)] = percentProfit;
    if (!stopHistory) {
        const _0x43fbbf = _0x1da586['imxkR'](game, _0x1da586[_0x5d2676(0x2cd)]) ? lastBet['bethigh'] ? '>' : '<' : '>', _0x5a3362 = lastBet['bethigh'] ? _0x5d2676(0x330) + bets + _0x5d2676(0x1a2) : '<input\x20id=\x22bethigh' + bets + _0x5d2676(0x374), _0x56e355 = '' + (havePlinkoRows ? _0x1da586[_0x5d2676(0x100)](plinkoRow, '\x20|\x20') : '') + plinkoRisk, _0xdcf9bd = _0x5d2676(0x256) + bets + _0x5d2676(0x3b8) + _0x1da586[_0x5d2676(0x13f)](Number, lastBet[_0x5d2676(0xf1)])[_0x5d2676(0xfe)](decimalAmountView) + _0x5d2676(0x3b8) + (_0x1da586[_0x5d2676(0x32e)](game, _0x1da586[_0x5d2676(0x23e)]) ? _0x5a3362 : betSide) + _0x5d2676(0x3b8) + (_0x1da586[_0x5d2676(0x11b)](game, _0x5d2676(0x3a4)) ? _0x56e355 : _0x1da586['fZuEI'](_0x1da586[_0x5d2676(0x13f)](Number, lastBet['chance'])['toFixed'](decimalChanceView), '%')) + _0x5d2676(0x3b8) + _0x1da586[_0x5d2676(0x1c2)](Number, lastBet[_0x5d2676(0x395)])[_0x5d2676(0xfe)](decimalChanceView) + '%</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + _0x1da586['DaLQG'](Number, lastBet[_0x5d2676(0x3c3)])[_0x5d2676(0xfe)](decimalAmountView) + _0x5d2676(0x3b8) + (_0x1da586[_0x5d2676(0x3ba)](game, _0x5d2676(0x13e)) ? _0x1da586[_0x5d2676(0x30b)](game, _0x1da586['lbRLt']) ? _0x56e355 : _0x1da586['VPKBw'](game, _0x1da586['WIbYo']) ? _0x1da586['DjwFJ'](Number, lastBet[_0x5d2676(0x382)])[_0x5d2676(0xfe)](0x0) + _0x5d2676(0x10d) : _0x1da586[_0x5d2676(0x100)](_0x43fbbf, _0x1da586[_0x5d2676(0x20b)](Number, lastBet[_0x5d2676(0x382)])[_0x5d2676(0xfe)](decimalTargetResult)) : _0x1da586[_0x5d2676(0x278)](_0x1da586[_0x5d2676(0x35f)](_0x1da586[_0x5d2676(0x35f)](target1, '|'), target2), target3 ? _0x1da586[_0x5d2676(0x3bd)]('|', target3) : '') + (target4 ? _0x1da586[_0x5d2676(0x31f)]('|', target4) : '')) + _0x5d2676(0x3b8) + (_0x1da586['DKMSQ'](game, _0x1da586['WIbYo']) ? _0x1da586['OUhlU'](_0x1da586[_0x5d2676(0x13f)](Number, result)[_0x5d2676(0xfe)](0x0), _0x1da586['iQpls']) : _0x1da586[_0x5d2676(0x13f)](Number, result)['toFixed'](decimalTargetResult)) + '</td>\x0a\x20\x20\x20\x20\x20\x20<td>' + lastBet[_0x5d2676(0x14b)] + _0x5d2676(0x3b8) + lastBet['id'] + _0x5d2676(0x143), _0x31dad5 = document['createElement']('tr');
        _0x31dad5[_0x5d2676(0x182)][_0x5d2676(0x2b0)] = win ? _0x1da586[_0x5d2676(0x2b3)] : _0x1da586[_0x5d2676(0x112)], _0x31dad5[_0x5d2676(0x123)] = _0xdcf9bd, document[_0x5d2676(0xef)](_0x1da586[_0x5d2676(0xeb)])[_0x5d2676(0x1fe)](_0x31dad5, document[_0x5d2676(0xef)](_0x1da586['dSGha'])[_0x5d2676(0x228)][0x0]);
        const _0x2148b8 = document[_0x5d2676(0x135)](_0x5d2676(0x178))[_0x5d2676(0x201)];
        if (_0x1da586[_0x5d2676(0x1c0)](_0x2148b8['length'], maxRows))
            document[_0x5d2676(0x135)](_0x5d2676(0x178))['lastChild'][_0x5d2676(0x39d)]();
    }
    const _0x2d5632 = '' + (havePlinkoRows ? _0x1da586['VRPHo'](plinkoRow, _0x1da586[_0x5d2676(0x368)]) : '') + plinkoRisk;
    return fullLogs[_0x5d2676(0x1b9)]({
        'game': game,
        'bets': bets,
        'amount': _0x1da586[_0x5d2676(0x137)](Number, lastBet[_0x5d2676(0xf1)])[_0x5d2676(0xfe)](decimalAmountView),
        'bethigh': game !== 'rangedice' ? lastBet['bethigh'] : null,
        'chance': _0x1da586['lTOlx'](game, _0x1da586[_0x5d2676(0x23e)]) ? _0x1da586[_0x5d2676(0x13f)](Number, lastBet['chance'])[_0x5d2676(0xfe)](decimalChanceView) : lastBet['chance'],
        'target': _0x1da586[_0x5d2676(0x319)](game, _0x5d2676(0x13e)) ? game === _0x1da586[_0x5d2676(0x36c)] ? _0x2d5632 : lastBet[_0x5d2676(0x382)] : null,
        'roll': _0x1da586['JLSBe'](Number, lastBet['roll'])[_0x5d2676(0xfe)](decimalChanceView),
        'result': _0x1da586[_0x5d2676(0x2fd)](Number, result)[_0x5d2676(0xfe)](decimalTargetResult),
        'profit': _0x1da586[_0x5d2676(0x2ee)](Number, lastBet[_0x5d2676(0x3c3)])[_0x5d2676(0xfe)](decimalAmountView),
        'nonce': lastBet[_0x5d2676(0x14b)],
        'id': lastBet['id'],
        'chance1': _0x1da586[_0x5d2676(0x171)](game, _0x1da586[_0x5d2676(0x23e)]) ? lastBet[_0x5d2676(0x2fb)] : null,
        'chance2': game === _0x1da586['lXwqB'] ? lastBet[_0x5d2676(0x17f)] : null,
        'chance3': _0x1da586[_0x5d2676(0x171)](game, _0x1da586[_0x5d2676(0x23e)]) ? lastBet[_0x5d2676(0x2c7)] : null,
        'chance4': game === _0x5d2676(0x13e) ? lastBet[_0x5d2676(0x3a8)] : null,
        'betSide': _0x1da586[_0x5d2676(0x30b)](game, _0x1da586[_0x5d2676(0x23e)]) ? lastBet[_0x5d2676(0x183)] : null
    }), _0x1da586[_0x5d2676(0x1c0)](fullLogs[_0x5d2676(0x1c7)], 0x2710) && fullLogs['shift'](), !stopChart && chart[_0x5d2676(0x23b)](betsChart, profitChart, color), _0x1da586['bWNEl'];
}
function _0x5abd(_0x573e43, _0x58dcc1) {
    const _0x4fbe66 = _0x4fbe();
    return _0x5abd = function (_0x5abd37, _0xdb7c4b) {
        _0x5abd37 = _0x5abd37 - 0xeb;
        let _0x14c2b1 = _0x4fbe66[_0x5abd37];
        return _0x14c2b1;
    }, _0x5abd(_0x573e43, _0x58dcc1);
}
async function updateStats() {
    const _0x325c4b = _0x12065a, _0x2b251d = {
            'HKZZe': function (_0x34383e, _0x585fb9) {
                return _0x34383e === _0x585fb9;
            },
            'eNhlT': _0x325c4b(0x139),
            'kbDWx': function (_0x53cb, _0x7640a7) {
                return _0x53cb < _0x7640a7;
            },
            'bBFOc': _0x325c4b(0x325),
            'XBLkx': _0x325c4b(0x209),
            'ktTgO': _0x325c4b(0x1af),
            'AThvU': _0x325c4b(0x315),
            'OvppG': _0x325c4b(0x1e6),
            'EEjRJ': _0x325c4b(0x14a),
            'ghvIt': _0x325c4b(0x32f),
            'TYBfW': _0x325c4b(0xee),
            'Tjcwf': 'wdbHighLose',
            'taxIr': 'wdbBets',
            'fXmbN': 'wdbLosses',
            'eiNDX': _0x325c4b(0xf7),
            'UAbtK': _0x325c4b(0x17d),
            'KerIZ': _0x325c4b(0x193),
            'IqEIu': _0x325c4b(0x370),
            'GYaer': 'wdbMaxProfit',
            'zOGvT': function (_0x34de99, _0x255e91) {
                return _0x34de99 / _0x255e91;
            },
            'JdtcE': function (_0x632184, _0x171964) {
                return _0x632184 / _0x171964;
            },
            'SmNMK': function (_0x145715, _0x422e5a) {
                return _0x145715 * _0x422e5a;
            },
            'zBhXZ': function (_0x5417d6, _0x32a662) {
                return _0x5417d6(_0x32a662);
            },
            'lxkgz': _0x325c4b(0x224),
            'oCPBF': function (_0x2beaec, _0x5f3c49) {
                return _0x2beaec / _0x5f3c49;
            },
            'XBPCd': 'wdbPercentProfit'
        }, _0x5abf0c = _0x2b251d[_0x325c4b(0x1fb)](profit, 0x0) ? darkMode ? _0x325c4b(0x1af) : _0x2b251d[_0x325c4b(0x136)] : _0x2b251d[_0x325c4b(0x113)](profit, 0x0) ? _0x2b251d[_0x325c4b(0x244)] : _0x2b251d[_0x325c4b(0x316)], _0x10caaf = currentstreak === 0x0 ? darkMode ? _0x2b251d[_0x325c4b(0x133)] : _0x2b251d[_0x325c4b(0x136)] : currentstreak < 0x0 ? 'red' : _0x2b251d[_0x325c4b(0x316)], _0x54c378 = maxwinstreak > 0x0 ? _0x325c4b(0x209) : darkMode ? _0x2b251d[_0x325c4b(0x133)] : _0x2b251d['eNhlT'], _0x252135 = maxlosestreak > 0x0 ? _0x2b251d[_0x325c4b(0x244)] : darkMode ? 'white' : _0x2b251d['eNhlT'];
    return document['getElementById'](_0x2b251d[_0x325c4b(0x39e)])[_0x325c4b(0x182)][_0x325c4b(0x3b3)] = _0x54c378, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x2d2)])[_0x325c4b(0x182)][_0x325c4b(0x3b3)] = _0x252135, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x280)])[_0x325c4b(0x392)] = wagered['toFixed'](decimalAmountView), document['getElementById'](_0x2b251d[_0x325c4b(0x1c8)])[_0x325c4b(0x392)] = balance[_0x325c4b(0xfe)](decimalAmountView), document['getElementById'](_0x2b251d[_0x325c4b(0x249)])[_0x325c4b(0x182)][_0x325c4b(0x3b3)] = _0x5abf0c, document['getElementById'](_0x2b251d[_0x325c4b(0x249)])[_0x325c4b(0x392)] = profit[_0x325c4b(0xfe)](decimalAmountView), document['getElementById'](_0x325c4b(0x393))[_0x325c4b(0x392)] = maxBetAmount[_0x325c4b(0xfe)](decimalAmountView), document[_0x325c4b(0xef)](_0x2b251d['Tjcwf'])['innerText'] = maxLosseAmount[_0x325c4b(0xfe)](decimalAmountView), document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x229)])[_0x325c4b(0x392)] = bets, document[_0x325c4b(0xef)](_0x325c4b(0x274))['innerText'] = wins, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x3a1)])[_0x325c4b(0x392)] = losses, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x2f5)])[_0x325c4b(0x182)]['color'] = _0x10caaf, document[_0x325c4b(0xef)](_0x2b251d['eiNDX'])[_0x325c4b(0x392)] = currentstreak, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x39e)])[_0x325c4b(0x392)] = maxwinstreak, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x2d2)])[_0x325c4b(0x392)] = maxlosestreak, document[_0x325c4b(0xef)](_0x2b251d['UAbtK'])[_0x325c4b(0x392)] = minbalance[_0x325c4b(0xfe)](decimalAmountView), document['getElementById'](_0x2b251d[_0x325c4b(0xfb)])[_0x325c4b(0x392)] = maxbalance[_0x325c4b(0xfe)](decimalAmountView), document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x2ab)])['innerText'] = minprofit[_0x325c4b(0xfe)](decimalAmountView), document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x2e4)])[_0x325c4b(0x392)] = maxprofit[_0x325c4b(0xfe)](decimalAmountView), percentWagered = _0x2b251d['zOGvT'](wagered, startBalance), percentWagered = _0x2b251d[_0x325c4b(0x355)](Math[_0x325c4b(0x35e)](_0x2b251d['SmNMK'](percentWagered + Number[_0x325c4b(0x351)], 0x64)), 0x64), percentWagered = _0x2b251d[_0x325c4b(0x34d)](isNaN, percentWagered) || !isFinite(percentWagered) ? 0x0 : percentWagered, document['getElementById'](_0x2b251d['lxkgz'])['innerText'] = percentWagered, percentProfit = _0x2b251d[_0x325c4b(0x237)](profit, startBalance) * 0x64, percentProfit = _0x2b251d['zOGvT'](Math['round']((percentProfit + Number['EPSILON']) * 0x64), 0x64), percentProfit = isNaN(percentProfit) || !isFinite(percentProfit) ? 0x0 : percentProfit, document[_0x325c4b(0xef)](_0x325c4b(0x2c4))[_0x325c4b(0x182)][_0x325c4b(0x3b3)] = _0x5abf0c, document[_0x325c4b(0xef)](_0x2b251d[_0x325c4b(0x326)])['innerText'] = percentProfit, _0x325c4b(0x294);
}
function log(_0x34dc93) {
    const _0x16b15f = _0x12065a, _0x5d0751 = {
            'YUebp': 'wdbLog',
            'aBKWM': 'white',
            'rHjJo': _0x16b15f(0x139),
            'ggdtj': function (_0x23ecc4, _0x4a8418) {
                return _0x23ecc4 > _0x4a8418;
            }
        }, _0x2c5849 = document['getElementById'](_0x5d0751[_0x16b15f(0x2ed)]), _0x1c689e = document['createElement']('li');
    _0x1c689e[_0x16b15f(0x392)] = _0x34dc93, _0x1c689e[_0x16b15f(0x182)]['color'] = darkMode ? _0x5d0751[_0x16b15f(0x159)] : _0x5d0751[_0x16b15f(0x222)], _0x2c5849[_0x16b15f(0x1fe)](_0x1c689e, _0x2c5849[_0x16b15f(0x1ef)]), _0x5d0751[_0x16b15f(0x10a)](_0x2c5849[_0x16b15f(0x228)][_0x16b15f(0x1c7)], maxRows) && _0x2c5849[_0x16b15f(0x1ee)](_0x2c5849[_0x16b15f(0x103)]);
}
function updateSpeed() {
    const _0x3ba482 = _0x12065a, _0x3fb365 = {
            'TozYE': function (_0x37ebf0, _0x5d0271) {
                return _0x37ebf0 < _0x5d0271;
            },
            'GzBrK': _0x3ba482(0x2c3),
            'BAbtG': function (_0x6a9a5f, _0x4fee9e) {
                return _0x6a9a5f < _0x4fee9e;
            },
            'SVxdf': function (_0x8b6e50, _0x909008) {
                return _0x8b6e50 / _0x909008;
            },
            'zNAye': function (_0x59f668, _0x50bc3e) {
                return _0x59f668 / _0x50bc3e;
            }
        };
    if (_0x3fb365[_0x3ba482(0x1bb)](speedHistory[_0x3ba482(0x1c7)], 0x2)) {
        document['getElementById'](_0x3fb365[_0x3ba482(0x3c9)])[_0x3ba482(0x392)] = _0x3ba482(0x352);
        return;
    }
    const _0x4dfdcf = Date['now'](), _0x24b23a = 0x2710;
    speedHistory = speedHistory[_0x3ba482(0x35a)](_0x205482 => _0x4dfdcf - _0x205482 <= _0x24b23a);
    if (_0x3fb365[_0x3ba482(0x1f0)](speedHistory[_0x3ba482(0x1c7)], 0x2)) {
        document['getElementById'](_0x3fb365[_0x3ba482(0x3c9)])[_0x3ba482(0x392)] = _0x3ba482(0x352);
        return;
    }
    const _0x4d5cd6 = speedHistory[0x0], _0x1b55d5 = _0x3fb365[_0x3ba482(0x1f7)](_0x4dfdcf - _0x4d5cd6, 0x3e8), _0xf330b9 = _0x3fb365[_0x3ba482(0x246)](speedHistory[_0x3ba482(0x1c7)], _0x1b55d5);
    document[_0x3ba482(0xef)]('wdbSpeed')[_0x3ba482(0x392)] = _0xf330b9['toFixed'](0x2);
}
function updateTimer() {
    const _0x5e67fc = _0x12065a, _0x1d5a1f = {
            'LUyNZ': function (_0x3c5ffc, _0x2f5ca9) {
                return _0x3c5ffc * _0x2f5ca9;
            },
            'jZcVj': function (_0x2a21f3, _0x1982f5) {
                return _0x2a21f3 % _0x1982f5;
            },
            'SpBKz': _0x5e67fc(0x111)
        };
    elapsedTime++;
    const _0x57a32c = Math[_0x5e67fc(0x1b1)](elapsedTime / (_0x1d5a1f[_0x5e67fc(0x13d)](0x18, 0x3c) * 0x3c)), _0x7eb8b1 = Math[_0x5e67fc(0x1b1)](_0x1d5a1f[_0x5e67fc(0x18e)](elapsedTime, 0x18 * 0x3c * 0x3c) / (0x3c * 0x3c)), _0x350e2b = Math['floor'](elapsedTime % _0x1d5a1f['LUyNZ'](0x3c, 0x3c) / 0x3c), _0x2dfeb7 = _0x1d5a1f[_0x5e67fc(0x18e)](elapsedTime, 0x3c);
    document[_0x5e67fc(0xef)](_0x1d5a1f['SpBKz'])[_0x5e67fc(0x392)] = _0x57a32c + ':' + _0x7eb8b1 + ':' + _0x350e2b + ':' + _0x2dfeb7;
}
async function start() {
    const _0x4fbce7 = _0x12065a, _0x2a1c12 = {
            'JyEwE': function (_0x5655cf, _0x406d34) {
                return _0x5655cf === _0x406d34;
            },
            'fsSyt': 'rangedice',
            'zsXoz': 'between',
            'kWxNQ': _0x4fbce7(0x111),
            'ATFYF': _0x4fbce7(0x342),
            'WRDrN': _0x4fbce7(0x303),
            'QpBSc': _0x4fbce7(0x19e),
            'Bkcgi': _0x4fbce7(0x2e2),
            'kxvMX': _0x4fbce7(0x239),
            'nDVMK': 'wdbOpenLUAScript',
            'lJUJG': _0x4fbce7(0x26e),
            'dgLDa': _0x4fbce7(0x358),
            'pMVdC': function (_0x39dee8, _0x5b0966) {
                return _0x39dee8(_0x5b0966);
            },
            'elAwD': function (_0x5887ba, _0x5274f2) {
                return _0x5887ba(_0x5274f2);
            },
            'RYQan': function (_0x3b8f2d, _0x201524, _0x35b85a) {
                return _0x3b8f2d(_0x201524, _0x35b85a);
            },
            'YVaMy': function (_0x57f0f8, _0x7ab7b1) {
                return _0x57f0f8 === _0x7ab7b1;
            },
            'jJMly': _0x4fbce7(0x174),
            'rKNEr': _0x4fbce7(0x3bb),
            'jxPNe': _0x4fbce7(0x155),
            'YOxri': _0x4fbce7(0x305),
            'eRgki': 'scriptName',
            'MNHTF': 'script',
            'hqQlY': _0x4fbce7(0x1e9),
            'paozP': function (_0x580e87, _0x2a34ed) {
                return _0x580e87 === _0x2a34ed;
            },
            'LYKSt': _0x4fbce7(0x336),
            'EFcak': _0x4fbce7(0x27a)
        };
    if (_0x2a1c12[_0x4fbce7(0x187)](game, _0x2a1c12[_0x4fbce7(0x1bf)])) {
        chance1 = 0x19, chance2 = 0x4b, chance3 = null, chance4 = null, betSide = _0x2a1c12[_0x4fbce7(0x302)];
        const _0x110447 = 'chance1=' + chance1 + _0x4fbce7(0x1eb) + chance2 + _0x4fbce7(0x321) + chance3 + _0x4fbce7(0x164) + chance4 + _0x4fbce7(0x3a5) + betSide + '\x22';
        fengari['load'](_0x110447)();
    }
    try {
        if (!run) {
            document[_0x4fbce7(0xef)](_0x2a1c12['kWxNQ'])[_0x4fbce7(0x392)] = _0x2a1c12[_0x4fbce7(0x2cf)], document[_0x4fbce7(0xef)](_0x2a1c12[_0x4fbce7(0x2e7)])[_0x4fbce7(0x2a1)] = !![], document['getElementById'](_0x2a1c12[_0x4fbce7(0x36e)])[_0x4fbce7(0x2a1)] = !![], document['getElementById'](_0x2a1c12[_0x4fbce7(0x2b7)])[_0x4fbce7(0x2a1)] = !![], document['getElementById'](_0x2a1c12[_0x4fbce7(0x181)])[_0x4fbce7(0x2a1)] = !![], document['getElementById'](_0x2a1c12[_0x4fbce7(0x18c)])[_0x4fbce7(0x2a1)] = !![], document[_0x4fbce7(0xef)](_0x2a1c12[_0x4fbce7(0xf4)])[_0x4fbce7(0x2a1)] = !![], document[_0x4fbce7(0x2ca)](_0x2a1c12['dgLDa'])[_0x4fbce7(0x2a4)](_0x58faad => _0x58faad[_0x4fbce7(0x2a1)] = !![]), document['querySelectorAll']('#wdbOpenScript')[_0x4fbce7(0x2a4)](_0x1d175b => _0x1d175b[_0x4fbce7(0x2a1)] = !![]), run = !![], sOW = ![], elapsedTime = 0x0, speedHistory = [], _0x2a1c12[_0x4fbce7(0x11a)](clearInterval, timerInterval), _0x2a1c12[_0x4fbce7(0x269)](clearInterval, speedUpdateInterval), timerInterval = _0x2a1c12[_0x4fbce7(0x3bc)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = setInterval(updateSpeed, 0x1f4), fengari[_0x4fbce7(0x110)](_0x4fbce7(0x322))(), fengari['load'](_0x4fbce7(0x1ad))();
            if (_0x2a1c12['YVaMy'](mode, _0x2a1c12[_0x4fbce7(0x23a)]))
                diceScript = luaEditor['getValue'](), diceScript = diceScript[_0x4fbce7(0x200)](/!=/g, '~=')[_0x4fbce7(0x200)](/!/g, 'not\x20')['replace'](/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2a1c12[_0x4fbce7(0x19d)])[_0x4fbce7(0x200)](/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, _0x4fbce7(0xfc))[_0x4fbce7(0x200)](/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, _0x2a1c12[_0x4fbce7(0x317)])['replace'](/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, _0x4fbce7(0x1da)), fengari[_0x4fbce7(0x110)](diceScript)(), scriptname = fengari[_0x4fbce7(0x110)](_0x2a1c12[_0x4fbce7(0x3a2)])(), document['getElementById'](_0x2a1c12['eRgki'])[_0x4fbce7(0x392)] = scriptname ? _0x4fbce7(0x3a6) + scriptname : '';
            else {
                if (mode === 'js') {
                    const _0x2725f4 = document['getElementById'](_0x4fbce7(0x1e9));
                    if (_0x2725f4)
                        _0x2725f4[_0x4fbce7(0x39d)]();
                    diceScript = jsEditor['getValue']();
                    const _0x56bbcb = document[_0x4fbce7(0x114)](_0x2a1c12[_0x4fbce7(0x301)]);
                    _0x56bbcb['id'] = _0x2a1c12['hqQlY'], _0x56bbcb[_0x4fbce7(0x123)] = diceScript, document[_0x4fbce7(0x31c)][_0x4fbce7(0x150)](_0x56bbcb);
                } else
                    _0x2a1c12[_0x4fbce7(0x160)](mode, _0x2a1c12[_0x4fbce7(0x296)]) && (basebet = _0x2a1c12[_0x4fbce7(0x269)](Number, document[_0x4fbce7(0xef)](_0x4fbce7(0x29d))['value']), nextbet = basebet, chance = Number(document[_0x4fbce7(0xef)]('advancedChance')[_0x4fbce7(0x14f)]), bethigh = document[_0x4fbce7(0x135)](_0x2a1c12['EFcak'])['checked']);
            }
            if (run)
                return playBet();
        }
    } catch (_0x3f6176) {
        stop(), _0x2a1c12[_0x4fbce7(0x269)](log, _0x3f6176);
    }
}
function stop() {
    const _0x2aea8e = _0x12065a, _0x156b36 = {
            'WkDvp': function (_0x59f441, _0x37c6e6) {
                return _0x59f441(_0x37c6e6);
            },
            'rlgVy': function (_0x17e94a, _0x14d49a) {
                return _0x17e94a(_0x14d49a);
            },
            'oRVJR': 'wdbMenuCoin',
            'JALFw': _0x2aea8e(0x19e),
            'wZjfF': _0x2aea8e(0x239),
            'pOuBs': 'wdbOpenLUAScript',
            'huxKH': _0x2aea8e(0x26e),
            'pfiSZ': _0x2aea8e(0x31e),
            'AziAg': _0x2aea8e(0x32a)
        };
    if (!run)
        return;
    run = ![], sOW = ![], _0x156b36[_0x2aea8e(0x2f9)](clearInterval, timerInterval), _0x156b36['rlgVy'](clearInterval, speedUpdateInterval);
    const _0x3ef5c8 = [
        _0x156b36[_0x2aea8e(0x25f)],
        _0x156b36['JALFw'],
        _0x2aea8e(0x2e2),
        _0x156b36['wZjfF'],
        _0x156b36['pOuBs'],
        _0x156b36[_0x2aea8e(0x196)],
        _0x156b36[_0x2aea8e(0x206)]
    ];
    _0x3ef5c8[_0x2aea8e(0x2a4)](_0xdef173 => {
        const _0x415ccd = _0x2aea8e;
        document['getElementById'](_0xdef173)[_0x415ccd(0x2a1)] = ![];
    }), document[_0x2aea8e(0x2ca)](_0x156b36[_0x2aea8e(0x3a0)])['forEach'](_0x50e9bb => _0x50e9bb[_0x2aea8e(0x2a1)] = ![]);
}
async function resume(_0x1668f2) {
    const _0x538fc2 = _0x12065a, _0x263d9b = {
            'Lhdxt': _0x538fc2(0x303),
            'rBUCn': _0x538fc2(0x2e2),
            'KiUti': _0x538fc2(0x3c5),
            'FFQrO': _0x538fc2(0x26e),
            'CRfAj': function (_0x1b1f5f, _0x286586) {
                return _0x1b1f5f(_0x286586);
            },
            'ojsMz': _0x538fc2(0x1fc),
            'EbALB': function (_0x2293ee, _0x4d5311, _0x3bcae1) {
                return _0x2293ee(_0x4d5311, _0x3bcae1);
            },
            'DaidC': function (_0x33d635) {
                return _0x33d635();
            }
        };
    if (!run) {
        const _0x3b7f14 = [
            _0x263d9b['Lhdxt'],
            _0x538fc2(0x19e),
            _0x263d9b[_0x538fc2(0x338)],
            'wdbResumeButton',
            _0x263d9b['KiUti'],
            _0x263d9b[_0x538fc2(0x2f3)]
        ];
        return _0x3b7f14[_0x538fc2(0x2a4)](_0x1727c6 => {
            const _0x2a5a1f = _0x538fc2;
            document[_0x2a5a1f(0xef)](_0x1727c6)[_0x2a5a1f(0x2a1)] = !![];
        }), document['querySelectorAll']('#wdbSaveScriptButton,\x20#wdbOpenScript')['forEach'](_0x4b6cf6 => _0x4b6cf6[_0x538fc2(0x2a1)] = !![]), !_0x1668f2 && (_0x263d9b['CRfAj'](log, _0x263d9b[_0x538fc2(0x29f)]), await new Promise(_0xf7f102 => setTimeout(_0xf7f102, 0x1388))), run = !![], sOW = ![], timerInterval = _0x263d9b[_0x538fc2(0x2cc)](setInterval, updateTimer, 0x3e8), speedUpdateInterval = _0x263d9b[_0x538fc2(0x2cc)](setInterval, updateSpeed, 0x1f4), _0x263d9b[_0x538fc2(0x377)](playBet);
    }
}
function stopOnWin() {
    const _0x117fb6 = _0x12065a;
    sOW = !![];
    if (run)
        document[_0x117fb6(0xef)]('wdbStopOnWinButton')[_0x117fb6(0x2a1)] = !![];
}
async function playBet() {
    const _0x1f73b4 = _0x12065a, _0x375b2a = {
            'GOuIp': function (_0x4a1f07, _0x1c0970) {
                return _0x4a1f07 === _0x1c0970;
            },
            'eQgTj': _0x1f73b4(0x1bc),
            'ffhak': 'return\x20chance',
            'ZZkBf': 'return\x20bethigh',
            'iCRpj': _0x1f73b4(0x18b),
            'wfhMw': _0x1f73b4(0x344),
            'uapxh': _0x1f73b4(0x349),
            'eFYNA': 'return\x20betSide',
            'RvopJ': function (_0xd46da8, _0x32778a) {
                return _0xd46da8(_0x32778a);
            },
            'qSiTi': function (_0x4c692c, _0x426e1e) {
                return _0x4c692c !== _0x426e1e;
            },
            'sOOMY': _0x1f73b4(0x13e),
            'Buqqq': function (_0x4578fa, _0x2f527c) {
                return _0x4578fa === _0x2f527c;
            },
            'wVIcP': _0x1f73b4(0x3a4),
            'CiGkr': function (_0x20f334, _0x3760ff) {
                return _0x20f334 + _0x3760ff;
            },
            'WGMKK': function (_0x3cb24c, _0xe9011e) {
                return _0x3cb24c === _0xe9011e;
            },
            'FoRDp': _0x1f73b4(0x18a),
            'qlmPq': _0x1f73b4(0x3bf),
            'dCDSO': 'low',
            'muPvp': function (_0x5b10a5) {
                return _0x5b10a5();
            }
        };
    try {
        _0x375b2a['GOuIp'](mode, _0x1f73b4(0x174)) && (nextbet = fengari[_0x1f73b4(0x110)](_0x375b2a[_0x1f73b4(0x337)])(), chance = fengari[_0x1f73b4(0x110)](_0x375b2a[_0x1f73b4(0x1c6)])(), bethigh = fengari[_0x1f73b4(0x110)](_0x375b2a['ZZkBf'])(), chance1 = fengari[_0x1f73b4(0x110)](_0x375b2a[_0x1f73b4(0x180)])(), chance2 = fengari['load'](_0x375b2a[_0x1f73b4(0x2fc)])(), chance3 = fengari['load'](_0x1f73b4(0x1fd))(), chance4 = fengari[_0x1f73b4(0x110)](_0x375b2a[_0x1f73b4(0x2ac)])(), betSide = fengari['load'](_0x375b2a[_0x1f73b4(0x287)])());
        nextbet = _0x375b2a[_0x1f73b4(0x3be)](Number, nextbet), chance = Number(chance), previousbet = nextbet, lastBet = {
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
            const _0x2f9aa9 = Number(lastBet[_0x1f73b4(0xf1)])[_0x1f73b4(0xfe)](decimalAmountView), _0x5abe33 = _0x375b2a[_0x1f73b4(0x3be)](Number, lastBet[_0x1f73b4(0x2ba)])[_0x1f73b4(0xfe)](decimalChanceView), _0x2fe2cb = _0x375b2a[_0x1f73b4(0x1c5)](game, _0x375b2a[_0x1f73b4(0x3af)]) ? _0x375b2a[_0x1f73b4(0x396)](game, _0x375b2a[_0x1f73b4(0x281)]) ? _0x1f73b4(0x3b7) + _0x2f9aa9 + _0x1f73b4(0x297) + (havePlinkoRows ? _0x375b2a[_0x1f73b4(0x255)](plinkoRow, '\x20|\x20') : '') + plinkoRisk + '\x20to\x20win' : _0x1f73b4(0x3b7) + _0x2f9aa9 + _0x1f73b4(0x297) + _0x5abe33 + _0x1f73b4(0x1dd) + (_0x375b2a[_0x1f73b4(0x213)](game, _0x375b2a[_0x1f73b4(0x1f9)]) ? bethigh ? _0x375b2a[_0x1f73b4(0x39c)] : _0x375b2a[_0x1f73b4(0x102)] : _0x375b2a[_0x1f73b4(0x39c)]) : _0x1f73b4(0x3b7) + _0x2f9aa9 + '\x20at\x20' + chance1 + '|' + chance2 + (chance3 ? '|' + chance3 : '') + (chance4 ? _0x375b2a['CiGkr']('|', chance4) : '') + '\x20to\x20win,\x20' + betSide;
            log(_0x2fe2cb);
        }
        if (run)
            return _0x375b2a[_0x1f73b4(0x2ec)](sendBet);
    } catch (_0x26a563) {
        _0x375b2a[_0x1f73b4(0x2ec)](stop), _0x375b2a[_0x1f73b4(0x3be)](log, _0x26a563);
    }
}
function resetall() {
    const _0x2c004 = _0x12065a, _0x2a544d = {
            'oWjqw': '0.00',
            'zXtct': function (_0x38b782) {
                return _0x38b782();
            },
            'zQXLq': function (_0x652cbd) {
                return _0x652cbd();
            },
            'DAQmp': function (_0x505cd6) {
                return _0x505cd6();
            }
        };
    document[_0x2c004(0xef)]('wdbTime')[_0x2c004(0x392)] = '0:0:0:0', document[_0x2c004(0xef)]('wdbSpeed')['innerText'] = _0x2a544d[_0x2c004(0x1df)], _0x2a544d[_0x2c004(0x293)](resetstats), _0x2a544d[_0x2c004(0x170)](resetchart), _0x2a544d[_0x2c004(0x293)](resethistory), _0x2a544d[_0x2c004(0x379)](resetlog);
}
function resetchart() {
    const _0x247216 = _0x12065a, _0x43077e = {
            'KpVnP': function (_0xc51174, _0x189cc9) {
                return _0xc51174(_0x189cc9);
            },
            'KTObf': _0x247216(0x1d3)
        };
    return _0x43077e[_0x247216(0x324)](toggleChart, _0x43077e['KTObf']);
}
function resethistory() {
    const _0x5d19a1 = {
        'nISar': function (_0x14236e, _0x264035) {
            return _0x14236e(_0x264035);
        },
        'eVEkK': 'clear'
    };
    return _0x5d19a1['nISar'](toggleHistory, _0x5d19a1['eVEkK']);
}
function resetlog() {
    const _0xb9fc60 = _0x12065a, _0x4ceec5 = {
            'nWBlH': function (_0x326c85, _0x15c2db) {
                return _0x326c85(_0x15c2db);
            }
        };
    return _0x4ceec5[_0xb9fc60(0x165)](toggleLog, _0xb9fc60(0x33b));
}
function resetstats() {
    const _0xa937a9 = _0x12065a, _0xc75655 = _0xa937a9(0x15b)[_0xa937a9(0x204)]('|');
    let _0x2888d5 = 0x0;
    while (!![]) {
        switch (_0xc75655[_0x2888d5++]) {
        case '0':
            percentProfit = 0x0;
            continue;
        case '1':
            losses = 0x0;
            continue;
        case '2':
            minbalance = balance;
            continue;
        case '3':
            updateStats();
            continue;
        case '4':
            fullLogs = [];
            continue;
        case '5':
            minprofit = 0x0;
            continue;
        case '6':
            maxBetAmount = 0x0;
            continue;
        case '7':
            maxwinstreak = 0x0;
            continue;
        case '8':
            bets = 0x0;
            continue;
        case '9':
            profit = 0x0;
            continue;
        case '10':
            wins = 0x0;
            continue;
        case '11':
            currentstreak = 0x0;
            continue;
        case '12':
            maxprofit = 0x0;
            continue;
        case '13':
            startBalance = balance;
            continue;
        case '14':
            maxlosestreak = 0x0;
            continue;
        case '15':
            maxbalance = balance;
            continue;
        case '16':
            percentWagered = 0x0;
            continue;
        case '17':
            maxLosseAmount = 0x0;
            continue;
        case '18':
            wagered = 0x0;
            continue;
        }
        break;
    }
}
function resetpartialprofit() {
    partialprofit = 0x0;
}
function invest(_0x328b77) {
    return _0x328b77;
}
function ching() {
    const _0x38d03b = _0x12065a;
    return wdbSound[_0x38d03b(0x1ec)]();
}
function sleep(_0x3c40f2) {
    return new Promise(_0x3dbd7e => setTimeout(_0x3dbd7e, _0x3c40f2 * 0x3e8));
}
async function initLua() {
    const _0x1b9358 = _0x12065a, _0x2ec180 = {
            'cfUKN': _0x1b9358(0x21c),
            'sjfzs': 'function\x20stop()\x0ajs.global:stop()\x0aend',
            'hxeKs': 'function\x20resume()\x0ajs.global:resume()\x0aend',
            'adSDH': _0x1b9358(0x2ff),
            'gyCRh': _0x1b9358(0x2d0),
            'MQPhF': _0x1b9358(0x17e),
            'erQUz': _0x1b9358(0x134),
            'mcdwD': _0x1b9358(0x35c),
            'aOJDL': _0x1b9358(0x1e1),
            'SjdRl': _0x1b9358(0x1bd),
            'EksYC': _0x1b9358(0x2b5),
            'NHIyl': _0x1b9358(0x2e9),
            'dUPaM': 'function\x20invest(amount)\x0ajs.global:invest(amount)\x0aend',
            'okNBb': 'function\x20vault(amount)\x0ajs.global:vault(amount)\x0aend',
            'lVqSU': _0x1b9358(0x1ab),
            'xiCyD': 'function\x20resetpartialprofit()\x0ajs.global:resetpartialprofit()\x0aend',
            'ehpiX': 'www.',
            'HVBBh': _0x1b9358(0x345)
        };
    fengari[_0x1b9358(0x110)](_0x2ec180['cfUKN'])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x2d7)])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x2b8)])(), fengari[_0x1b9358(0x110)](_0x2ec180['adSDH'])(), fengari[_0x1b9358(0x110)](_0x2ec180['gyCRh'])(), fengari['load'](_0x2ec180[_0x1b9358(0x3a3)])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x1e2)])(), fengari[_0x1b9358(0x110)](_0x2ec180['mcdwD'])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x361)])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x10c)])(), fengari['load'](_0x2ec180['EksYC'])(), fengari['load'](_0x2ec180['NHIyl'])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x1c9)])(), fengari[_0x1b9358(0x110)](_0x2ec180['okNBb'])(), fengari[_0x1b9358(0x110)](_0x2ec180[_0x1b9358(0x388)])(), fengari['load'](_0x2ec180[_0x1b9358(0x378)])(), fengari[_0x1b9358(0x110)]('clock\x20=\x20os.clock\x0a\x20\x20function\x20sleep(n)\x0a\x20\x20\x20\x20local\x20t0\x20=\x20clock()\x0a\x20\x20\x20\x20while\x20clock()\x20-\x20t0\x20<=\x20n\x20do\x20end\x0a\x20\x20end')(), fengari[_0x1b9358(0x110)](_0x1b9358(0x2e5))();
    const _0x4bdc5b = location['hostname'][_0x1b9358(0x200)](_0x2ec180[_0x1b9358(0x1c1)], '');
    let _0x24966b = _0x4bdc5b['indexOf']('.');
    return casino = _0x4bdc5b['slice'](0x0, _0x24966b), fengari['load']('casino=\x22' + casino + '\x22')(), _0x2ec180[_0x1b9358(0x35b)];
}
async function updateLua() {
    const _0x1e0a25 = _0x12065a, _0x34b52b = {
            'OWhsq': _0x1e0a25(0x15a),
            'YKCdZ': function (_0x569d3c, _0xba93f9) {
                return _0x569d3c(_0xba93f9);
            },
            'yzaUl': _0x1e0a25(0x366),
            'VvgIX': _0x1e0a25(0x32c),
            'Fybqi': _0x1e0a25(0x261)
        }, _0x1da3b9 = _0x1e0a25(0x3a9) + win + _0x1e0a25(0x254) + bets + '\x0a\x20\x20\x20\x20wins=' + wins + _0x1e0a25(0x188) + losses + '\x0a\x20\x20\x20\x20winstreak=' + winstreak + _0x1e0a25(0x384) + losestreak + '\x0a\x20\x20\x20\x20currentstreak=' + currentstreak + _0x1e0a25(0x2de) + balance + _0x1e0a25(0x33a) + minbalance + _0x1e0a25(0x34e) + maxbalance + _0x1e0a25(0x38a) + minprofit + '\x0a\x20\x20\x20\x20maxprofit=' + maxprofit + '\x0a\x20\x20\x20\x20chance=' + chance + _0x1e0a25(0x26f) + bethigh + _0x1e0a25(0x17b) + chance1 + _0x1e0a25(0x1eb) + chance2 + _0x1e0a25(0x321) + chance3 + _0x1e0a25(0x164) + chance4 + '\x0a\x20\x20\x20\x20betSide=\x22' + betSide + _0x1e0a25(0x328) + nextbet + _0x1e0a25(0x37a) + previousbet + _0x1e0a25(0x190) + profit + _0x1e0a25(0x28f) + currentprofit + _0x1e0a25(0x1a5) + partialprofit + _0x1e0a25(0x2eb) + wagered + _0x1e0a25(0x33d) + lastBet[_0x1e0a25(0xf1)] + ',\x0a\x20\x20\x20\x20\x20\x20Amount=' + lastBet[_0x1e0a25(0xf1)] + ',\x0a\x20\x20\x20\x20\x20\x20chance=' + lastBet[_0x1e0a25(0x2ba)] + _0x1e0a25(0xf3) + lastBet[_0x1e0a25(0x2ba)] + _0x1e0a25(0x3c1) + lastBet[_0x1e0a25(0x395)] + _0x1e0a25(0x27f) + lastBet[_0x1e0a25(0x395)] + _0x1e0a25(0x199) + lastBet[_0x1e0a25(0x3c3)] + _0x1e0a25(0x3b6) + lastBet['profit'] + _0x1e0a25(0x247) + lastBet[_0x1e0a25(0x382)] + _0x1e0a25(0x38f) + lastBet['target'] + _0x1e0a25(0x214) + lastBet['chance1'] + ',\x0a\x20\x20\x20\x20\x20\x20Chance1=' + lastBet['chance1'] + ',\x0a\x20\x20\x20\x20\x20\x20chance2=' + lastBet[_0x1e0a25(0x17f)] + ',\x0a\x20\x20\x20\x20\x20\x20Chance2=' + lastBet[_0x1e0a25(0x17f)] + ',\x0a\x20\x20\x20\x20\x20\x20chance3=' + lastBet[_0x1e0a25(0x2c7)] + _0x1e0a25(0x115) + lastBet[_0x1e0a25(0x2c7)] + _0x1e0a25(0x141) + lastBet['chance4'] + _0x1e0a25(0x313) + lastBet[_0x1e0a25(0x3a8)] + _0x1e0a25(0x2c2) + lastBet[_0x1e0a25(0x183)] + '\x22,\x0a\x20\x20\x20\x20\x20\x20BetSide=\x22' + lastBet['betSide'] + _0x1e0a25(0x271) + lastBet[_0x1e0a25(0x1ac)] + _0x1e0a25(0x27e) + lastBet['result'] + _0x1e0a25(0x211) + lastBet[_0x1e0a25(0x14b)] + _0x1e0a25(0x329) + lastBet[_0x1e0a25(0x14b)] + _0x1e0a25(0x25c) + lastBet['id'] + '\x22,\x0a\x20\x20\x20\x20\x20\x20Id=\x22' + lastBet['id'] + '\x22\x0a\x20\x20\x20\x20}\x0a\x20\x20';
    fengari[_0x1e0a25(0x110)](_0x1da3b9)(), fengari[_0x1e0a25(0x110)]('dobet()')(), currency = fengari[_0x1e0a25(0x110)](_0x34b52b['OWhsq'])() || currency, coin = _0x34b52b['YKCdZ'](String, currency)[_0x1e0a25(0x34b)](), plinkoRisk = fengari['load'](_0x34b52b[_0x1e0a25(0x2d5)])() || plinkoRisk, plinkoRow = fengari['load']('return\x20plinkoRow')() || plinkoRow, kenoRisk = fengari[_0x1e0a25(0x110)](_0x34b52b[_0x1e0a25(0x37f)])() || kenoRisk;
    const _0xfea8d3 = fengari[_0x1e0a25(0x110)](_0x34b52b[_0x1e0a25(0x34f)])();
    return _0xfea8d3 && (window['kenoNumbers'] = _0xfea8d3[_0x1e0a25(0x204)](',')[_0x1e0a25(0x35a)](_0x4ec8fb => _0x4ec8fb !== '')['map'](Number)), 'updateLua\x20done';
}
function randomString(_0x174efb, _0x502a54) {
    const _0x194846 = _0x12065a, _0x390b0c = {
            'PAHcI': _0x194846(0x311),
            'CauWS': '0123456789',
            'SitZW': _0x194846(0x23d),
            'cKTPC': _0x194846(0x108),
            'OwEDN': _0x194846(0x179),
            'nOrIx': function (_0x1d034a, _0x845af5) {
                return _0x1d034a < _0x845af5;
            },
            'npCyz': function (_0x32ef97, _0x3d0726) {
                return _0x32ef97 * _0x3d0726;
            }
        }, _0x13a1b5 = {
            'alphabet': _0x390b0c['PAHcI'],
            'numeric': _0x390b0c[_0x194846(0x38c)],
            'hex': _0x390b0c[_0x194846(0x167)],
            'rangedice': _0x390b0c['cKTPC'],
            'default': _0x390b0c[_0x194846(0x24d)]
        }, _0x206a1d = _0x13a1b5[_0x502a54] || _0x13a1b5[_0x194846(0x37e)];
    let _0x108ece = '';
    for (let _0x54b0f7 = 0x0; _0x390b0c[_0x194846(0x210)](_0x54b0f7, _0x174efb); _0x54b0f7++) {
        _0x108ece += _0x206a1d[_0x194846(0x1f2)](Math[_0x194846(0x1b1)](_0x390b0c[_0x194846(0x12c)](Math['random'](), _0x206a1d[_0x194846(0x1c7)])));
    }
    return _0x108ece;
}
function setCookie(_0x5d03ad, _0x2fd84f, _0x432d58) {
    const _0x2410d3 = _0x12065a, _0x3d2337 = {
            'YXBYW': function (_0x2912d9, _0x2bd785) {
                return _0x2912d9 + _0x2bd785;
            },
            'uAHEP': function (_0x316496, _0x54e848) {
                return _0x316496 * _0x54e848;
            }
        }, _0x4c3841 = new Date();
    _0x4c3841[_0x2410d3(0x2c9)](_0x3d2337['YXBYW'](_0x4c3841[_0x2410d3(0x22d)](), _0x3d2337[_0x2410d3(0x215)](_0x3d2337['uAHEP'](_0x432d58, 0x18) * 0x3c * 0x3c, 0x3e8)));
    const _0xe18f62 = _0x3d2337[_0x2410d3(0x3aa)]('expires=', _0x4c3841['toUTCString']());
    document[_0x2410d3(0x2d1)] = _0x5d03ad + '=' + _0x2fd84f + ';' + _0xe18f62 + _0x2410d3(0x1aa);
}
function getCookie(_0x41d84f) {
    const _0x3a8207 = _0x12065a, _0x169981 = {
            'JlfRC': function (_0xbbc2fc, _0x1a1e99) {
                return _0xbbc2fc + _0x1a1e99;
            }
        }, _0x543ec5 = _0x169981[_0x3a8207(0xff)](_0x41d84f, '='), _0x174f42 = document[_0x3a8207(0x2d1)][_0x3a8207(0x204)](';')[_0x3a8207(0x1f8)](_0x54f10f => _0x54f10f[_0x3a8207(0x15d)]());
    for (const _0x241525 of _0x174f42) {
        if (_0x241525[_0x3a8207(0x3c4)](_0x543ec5))
            return _0x241525[_0x3a8207(0x30a)](_0x543ec5[_0x3a8207(0x1c7)]);
    }
    return '';
}
function saveScript() {
    const _0x3978e6 = _0x12065a, _0x5c6c43 = {
            'QuBuH': function (_0x56868f, _0x46901c) {
                return _0x56868f === _0x46901c;
            },
            'fHvxC': 'text/plain;\x20charset=utf-8'
        }, _0x2c1f3c = _0x5c6c43[_0x3978e6(0x310)](mode, 'lua') ? luaEditor['getValue']() : jsEditor[_0x3978e6(0xec)](), _0x34a083 = document[_0x3978e6(0x114)]('a');
    _0x34a083[_0x3978e6(0x17c)] = window[_0x3978e6(0x386)][_0x3978e6(0x22f)](new Blob([_0x2c1f3c], { 'type': _0x5c6c43[_0x3978e6(0x312)] })), _0x34a083[_0x3978e6(0x220)] = 'WDBScript' + Date[_0x3978e6(0x2a6)]()[_0x3978e6(0x1ed)]()[_0x3978e6(0x2a5)](-0x6) + '.' + mode, _0x34a083[_0x3978e6(0x28c)]();
}
function getErrMsg(_0x89cd85) {
    const _0x323a8e = _0x12065a;
    return _0x89cd85[_0x323a8e(0x2c0)] && _0x89cd85[_0x323a8e(0x2c0)][_0x323a8e(0x257)] && _0x89cd85[_0x323a8e(0x2c0)][_0x323a8e(0x257)]['message'] || _0x89cd85[_0x323a8e(0x158)] || _0x89cd85['toString']();
}

const _0x366f9a = _0xd1bb;
(function (_0xa68f0c, _0x1a5313) {
    const _0x2ef444 = _0xd1bb, _0x43508c = _0xa68f0c();
    while (!![]) {
        try {
            const _0x1390fe = -parseInt(_0x2ef444(0x1ba)) / 0x1 + -parseInt(_0x2ef444(0x1a3)) / 0x2 + parseInt(_0x2ef444(0x1b4)) / 0x3 + parseInt(_0x2ef444(0x1d3)) / 0x4 * (-parseInt(_0x2ef444(0x1b5)) / 0x5) + -parseInt(_0x2ef444(0x19c)) / 0x6 * (parseInt(_0x2ef444(0x19d)) / 0x7) + -parseInt(_0x2ef444(0x1cc)) / 0x8 + parseInt(_0x2ef444(0x199)) / 0x9 * (parseInt(_0x2ef444(0x19a)) / 0xa);
            if (_0x1390fe === _0x1a5313)
                break;
            else
                _0x43508c['push'](_0x43508c['shift']());
        } catch (_0x2972ad) {
            _0x43508c['push'](_0x43508c['shift']());
        }
    }
}(_0x5b24, 0x8af33), CASINO_API = 'https://api2.' + window[_0x366f9a(0x1ae)][_0x366f9a(0x17a)] + '/v1', token = null, idUser = null, decimalAmountView = 0x8, diceToken = null, sid = self?.[_0x366f9a(0x1ca)]?.[_0x366f9a(0x196)]?.());
async function getId() {
    const _0x43cd6d = _0x366f9a, _0x389e24 = {
            'Hieyv': function (_0x1c0345, _0x947336) {
                return _0x1c0345 + _0x947336;
            },
            'SSPwD': _0x43cd6d(0x1ac),
            'IstpN': 'en-US,en;q=0.9,vi;q=0.8',
            'NhWNF': 'no-cache',
            'MWcRJ': 'u=1,\x20i'
        };
    try {
        const {data: _0xa9e72f} = await axios(_0x389e24[_0x43cd6d(0x195)](CASINO_API, _0x43cd6d(0x180)), {
            'method': _0x389e24['SSPwD'],
            'headers': {
                'accept': _0x43cd6d(0x190),
                'accept-language': _0x389e24[_0x43cd6d(0x1bf)],
                'cache-control': _0x389e24['NhWNF'],
                'priority': _0x389e24[_0x43cd6d(0x1c3)]
            },
            'withCredentials': !![]
        });
        idUser = _0xa9e72f[_0x43cd6d(0x17b)]['payload']['id'];
    } catch (_0x1bfe70) {
        return null;
    }
}
async function getDiceToken() {
    const _0xe6c2b1 = _0x366f9a, _0x580b62 = {
            'tGBUY': function (_0x4dffad, _0x4f50e4, _0x5a7f6e) {
                return _0x4dffad(_0x4f50e4, _0x5a7f6e);
            },
            'RiYaM': '/games/our-game/start',
            'IcQLx': _0xe6c2b1(0x1b7),
            'IuJWh': _0xe6c2b1(0x185),
            'enyBq': _0xe6c2b1(0x17c),
            'YAWPG': _0xe6c2b1(0x1a2),
            'HmjIY': _0xe6c2b1(0x181)
        };
    try {
        const {data: _0x452599} = await _0x580b62['tGBUY'](axios, CASINO_API + _0x580b62[_0xe6c2b1(0x1c2)], {
            'method': _0xe6c2b1(0x17d),
            'headers': {
                'accept': _0xe6c2b1(0x190),
                'accept-language': _0x580b62[_0xe6c2b1(0x1a4)],
                'cache-control': _0x580b62['IuJWh'],
                'priority': _0x580b62[_0xe6c2b1(0x1d6)],
                'x-auth-uid': idUser
            },
            'withCredentials': !![],
            'data': JSON[_0xe6c2b1(0x186)]({
                'game': _0x580b62[_0xe6c2b1(0x1aa)],
                'platform': _0x580b62[_0xe6c2b1(0x193)]
            })
        });
        return _0x452599[_0xe6c2b1(0x17b)];
    } catch (_0x4d6ed6) {
        return null;
    }
}
async function beforeWork() {
    const _0x463cb5 = _0x366f9a, _0x5cfaf6 = { 'brnVu': 'application/json' };
    axios[_0x463cb5(0x183)][_0x463cb5(0x1d5)] = { 'content-type': _0x5cfaf6[_0x463cb5(0x1a6)] }, await getId();
}
async function vault(_0x3055ac) {
    const _0x35e361 = _0x366f9a, _0x3281f0 = {
            'iCKfH': function (_0x5ca18b, _0x41e657) {
                return _0x5ca18b(_0x41e657);
            },
            'ucMXX': 'Not\x20support\x20right\x20now'
        };
    _0x3281f0['iCKfH'](log, _0x3281f0[_0x35e361(0x18e)]);
}
async function unvault(_0x4ccd28, _0x293a00) {
    const _0x49dfb3 = _0x366f9a, _0x5a76ab = { 'OWCHF': _0x49dfb3(0x18f) };
    log(_0x5a76ab[_0x49dfb3(0x19e)]);
}
async function getListCoin() {
    const _0x4a4792 = _0x366f9a, _0x2186d2 = {
            'PHelC': function (_0x138c19, _0x5a2ad5) {
                return _0x138c19 + _0x5a2ad5;
            },
            'fphfI': _0x4a4792(0x190),
            'mGyYC': _0x4a4792(0x1b7),
            'mBili': _0x4a4792(0x185),
            'fvMCB': _0x4a4792(0x17c),
            'qnRSl': function (_0x3b197c) {
                return _0x3b197c();
            },
            'CJENq': function (_0x21a16e, _0x478e2e) {
                return _0x21a16e(_0x478e2e);
            },
            'zndDs': function (_0x1584ae, _0x9e1ef2) {
                return _0x1584ae(_0x9e1ef2);
            }
        };
    try {
        coins = [];
        const {data: _0x4af34a} = await axios(_0x2186d2['PHelC'](CASINO_API, _0x4a4792(0x1be)), {
                'method': _0x4a4792(0x1ac),
                'headers': {
                    'accept': _0x2186d2['fphfI'],
                    'accept-language': _0x2186d2[_0x4a4792(0x1d2)],
                    'cache-control': _0x2186d2[_0x4a4792(0x198)],
                    'priority': _0x2186d2[_0x4a4792(0x1af)],
                    'x-auth-uid': idUser
                },
                'withCredentials': !![]
            }), _0x7c38fc = _0x4af34a[_0x4a4792(0x17b)][_0x4a4792(0x19f)];
        return coins = [...new Set(_0x7c38fc[_0x4a4792(0x194)](_0x1876c8 => _0x1876c8[_0x4a4792(0x1cb)]))], coins = coins[_0x4a4792(0x17f)](), coin = coins[0x0], (_0x2186d2[_0x4a4792(0x1b8)](drawSelectCoin), _0x2186d2['qnRSl'](checkbalance));
    } catch (_0x2c4322) {
        return stop(), _0x2186d2['CJENq'](log, _0x2186d2[_0x4a4792(0x1a7)](getErrMsg, _0x2c4322));
    }
}
async function checkbalance() {
    const _0x3c59bb = _0x366f9a, _0x90c835 = {
            'sDJWX': function (_0x413b3d, _0x16a65c) {
                return _0x413b3d(_0x16a65c);
            },
            'AxFdW': _0x3c59bb(0x189),
            'vopBc': _0x3c59bb(0x190),
            'kSBnZ': _0x3c59bb(0x1b7),
            'fmLvr': _0x3c59bb(0x185),
            'ydrhv': _0x3c59bb(0x17c),
            'cVSKM': function (_0x380c80) {
                return _0x380c80();
            },
            'UwLKr': 'https://originals.winna.com/dice/data',
            'ZbueY': function (_0x6138fe, _0x7b071) {
                return _0x6138fe + _0x7b071;
            },
            'sKzXP': _0x3c59bb(0x1ad),
            'uPjYx': _0x3c59bb(0x1b9),
            'cxvZn': _0x3c59bb(0x1c7),
            'IvTxi': _0x3c59bb(0x1d9),
            'TNsTq': 'maxbet=',
            'udXSI': function (_0x3e696a, _0x5831be) {
                return _0x3e696a(_0x5831be);
            }
        };
    try {
        await _0x90c835[_0x3c59bb(0x1c4)](axios, {
            'url': CASINO_API + _0x90c835[_0x3c59bb(0x1cd)],
            'method': 'POST',
            'data': { 'coin': coin },
            'headers': {
                'accept': _0x90c835['vopBc'],
                'accept-language': _0x90c835[_0x3c59bb(0x1c9)],
                'cache-control': _0x90c835[_0x3c59bb(0x18d)],
                'priority': _0x90c835[_0x3c59bb(0x1d4)],
                'x-auth-uid': idUser
            },
            'withCredentials': !![]
        });
        const {result: _0x1f75d5} = await _0x90c835[_0x3c59bb(0x18c)](getDiceToken);
        diceToken = _0x1f75d5[_0x3c59bb(0x178)];
        const {data: _0x7967c8} = await _0x90c835[_0x3c59bb(0x1c4)](axios, {
            'url': _0x90c835[_0x3c59bb(0x191)],
            'method': _0x3c59bb(0x1ac),
            'headers': {
                'accept': _0x90c835[_0x3c59bb(0x1d7)],
                'accept-language': _0x90c835[_0x3c59bb(0x1c9)],
                'cache-control': _0x90c835[_0x3c59bb(0x18d)],
                'priority': _0x90c835[_0x3c59bb(0x1d4)],
                'token': diceToken,
                'sid': sid
            },
            'withCredentials': !![]
        });
        return balance = _0x7967c8[_0x3c59bb(0x1d0)], fengari[_0x3c59bb(0x19b)](_0x90c835['ZbueY'](_0x90c835[_0x3c59bb(0x1d1)], balance))(), startBalance = balance, minbalance = balance, fengari['load'](_0x90c835[_0x3c59bb(0x1c1)](_0x90c835[_0x3c59bb(0x18b)], balance))(), maxbalance = balance, fengari['load'](_0x90c835[_0x3c59bb(0x1c1)](_0x90c835['cxvZn'], balance))(), minbet = 0x0, fengari[_0x3c59bb(0x19b)](_0x90c835[_0x3c59bb(0x1c1)](_0x90c835[_0x3c59bb(0x1ab)], minbet))(), maxbet = balance, fengari['load'](_0x90c835['TNsTq'] + maxbet)(), _0x90c835[_0x3c59bb(0x18c)](updateStats);
    } catch (_0x59d479) {
        return stop(), _0x90c835['udXSI'](log, _0x90c835[_0x3c59bb(0x192)](getErrMsg, _0x59d479));
    }
}
async function resetseed() {
    const _0x1873ac = _0x366f9a, _0x5dd25b = {
            'igHqe': function (_0x4e09cb, _0x51e455) {
                return _0x4e09cb(_0x51e455);
            },
            'gueEy': function (_0x22d5e5, _0x2834b7) {
                return _0x22d5e5 + _0x2834b7;
            },
            'vWDUV': _0x1873ac(0x1c8),
            'UVXGJ': _0x1873ac(0x1ac),
            'bkqUU': _0x1873ac(0x190),
            'SbWph': _0x1873ac(0x1b7),
            'amkCF': _0x1873ac(0x17c),
            'iebWk': _0x1873ac(0x1a0),
            'wpLZW': _0x1873ac(0x17d),
            'ivYWH': _0x1873ac(0x185),
            'ZDZiW': function (_0x526715) {
                return _0x526715();
            }
        };
    try {
        const {data: _0x502a87} = await _0x5dd25b[_0x1873ac(0x1c5)](axios, {
            'url': _0x5dd25b[_0x1873ac(0x188)](CASINO_API, _0x5dd25b['vWDUV']),
            'method': _0x5dd25b[_0x1873ac(0x1bb)],
            'headers': {
                'accept': _0x5dd25b['bkqUU'],
                'accept-language': _0x5dd25b['SbWph'],
                'cache-control': 'no-cache',
                'priority': _0x5dd25b['amkCF'],
                'x-auth-uid': idUser
            },
            'withCredentials': !![]
        });
        return _0x5dd25b[_0x1873ac(0x1c5)](axios, {
            'url': _0x5dd25b[_0x1873ac(0x188)](CASINO_API, _0x5dd25b[_0x1873ac(0x1b0)]),
            'method': _0x5dd25b['wpLZW'],
            'data': { 'seedId': _0x502a87[_0x1873ac(0x17b)]['id'] },
            'headers': {
                'accept': _0x1873ac(0x190),
                'accept-language': _0x5dd25b[_0x1873ac(0x1c0)],
                'cache-control': _0x5dd25b[_0x1873ac(0x179)],
                'priority': _0x5dd25b[_0x1873ac(0x184)],
                'x-auth-uid': idUser
            },
            'withCredentials': !![]
        });
    } catch (_0x1aa90e) {
        return _0x5dd25b[_0x1873ac(0x1a1)](stop), _0x5dd25b[_0x1873ac(0x1c5)](log, getErrMsg(_0x1aa90e));
    }
}
async function sendBet() {
    const _0x2f9d54 = _0x366f9a, _0x48c9aa = {
            'mHFpV': function (_0x4203df, _0x4e50e2) {
                return _0x4203df - _0x4e50e2;
            },
            'iXIMG': _0x2f9d54(0x1ce),
            'uBFWO': _0x2f9d54(0x1b2),
            'sIIjC': _0x2f9d54(0x1b1),
            'qOjCV': _0x2f9d54(0x17d),
            'LOSCj': _0x2f9d54(0x182),
            'VSKKU': function (_0x3289cf, _0x9a5c2d) {
                return _0x3289cf(_0x9a5c2d);
            },
            'drABD': function (_0x3f8012) {
                return _0x3f8012();
            },
            'FzAcb': function (_0x3c2abc, _0x1f053b) {
                return _0x3c2abc(_0x1f053b);
            },
            'OPHhl': function (_0x436308, _0x3e2a7e) {
                return _0x436308(_0x3e2a7e);
            }
        };
    try {
        target = bethigh ? _0x48c9aa['mHFpV'](0x64, chance) : chance;
        const _0x333d54 = JSON[_0x2f9d54(0x186)]({
                'turbo': !![],
                'bet': nextbet,
                'data': {
                    'mode': _0x48c9aa[_0x2f9d54(0x1bd)],
                    'target': bethigh ? _0x48c9aa['uBFWO'] : _0x48c9aa[_0x2f9d54(0x197)],
                    'value': target
                }
            }), {data: _0x2dd034} = await axios({
                'method': _0x48c9aa['qOjCV'],
                'url': _0x48c9aa[_0x2f9d54(0x1b6)],
                'data': _0x333d54,
                'withCredentials': !![],
                'headers': {
                    'token': diceToken,
                    'sid': sid
                }
            });
        return _0x48c9aa[_0x2f9d54(0x1cf)](handleResult, _0x2dd034);
    } catch (_0x377348) {
        if (_0x377348[_0x2f9d54(0x17b)]) {
            const _0x517714 = _0x377348['response'][_0x2f9d54(0x18a)];
            if (_0x517714 === 0x190)
                return stop(), _0x48c9aa[_0x2f9d54(0x1cf)](log, _0x377348['response']['data']['message']);
            if (run)
                return _0x48c9aa['drABD'](sendBet);
        } else {
            if (_0x377348[_0x2f9d54(0x1b3)]) {
                if (run)
                    return sendBet();
            } else
                return _0x48c9aa['drABD'](stop), _0x48c9aa[_0x2f9d54(0x1a5)](log, _0x48c9aa['OPHhl'](getErrMsg, _0x377348));
        }
    }
}
function _0x5b24() {
    const _0x159002 = [
        '16929018HibFpb',
        '10rHtkfz',
        'load',
        '3612tuxTPh',
        '14POFzje',
        'OWCHF',
        'payload',
        '/games/our-game/unhash',
        'ZDZiW',
        'dice',
        '711162ipOEsS',
        'IcQLx',
        'FzAcb',
        'brnVu',
        'zndDs',
        'roll',
        'number',
        'YAWPG',
        'IvTxi',
        'GET',
        'balance=',
        'location',
        'fvMCB',
        'iebWk',
        'lower',
        'higher',
        'request',
        '1170522BbAotw',
        '6835tnrFVt',
        'LOSCj',
        'en-US,en;q=0.9,vi;q=0.8',
        'qnRSl',
        'minbalance=',
        '598957aGJFHk',
        'UVXGJ',
        'data',
        'iXIMG',
        '/payments/wallets',
        'IstpN',
        'SbWph',
        'ZbueY',
        'RiYaM',
        'MWcRJ',
        'sDJWX',
        'igHqe',
        'VztHh',
        'maxbalance=',
        '/games/our-game/get-active-seed',
        'kSBnZ',
        'crypto',
        'coin',
        '3422272LeAMsP',
        'AxFdW',
        'classic',
        'VSKKU',
        'balance',
        'sKzXP',
        'mGyYC',
        '932GdrRyA',
        'ydrhv',
        'headers',
        'enyBq',
        'vopBc',
        'CohEb',
        'minbet=',
        'jwt',
        'ivYWH',
        'host',
        'response',
        'u=1,\x20i',
        'POST',
        'split',
        'sort',
        '/user',
        'GPL_DESKTOP',
        'https://originals.winna.com/dice/play',
        'defaults',
        'amkCF',
        'no-cache',
        'stringify',
        'SttdQ',
        'gueEy',
        '/user/change-wallet-coin',
        'status',
        'uPjYx',
        'cVSKM',
        'fmLvr',
        'ucMXX',
        'Not\x20support\x20right\x20now',
        'application/json,\x20text/plain,\x20*/*',
        'UwLKr',
        'udXSI',
        'HmjIY',
        'map',
        'Hieyv',
        'randomUUID',
        'sIIjC',
        'mBili'
    ];
    _0x5b24 = function () {
        return _0x159002;
    };
    return _0x5b24();
}
function _0xd1bb(_0x20ca9b, _0x2c7be8) {
    const _0x5b241c = _0x5b24();
    return _0xd1bb = function (_0xd1bb41, _0x451fda) {
        _0xd1bb41 = _0xd1bb41 - 0x178;
        let _0x1182db = _0x5b241c[_0xd1bb41];
        return _0x1182db;
    }, _0xd1bb(_0x20ca9b, _0x2c7be8);
}
async function handleResult(_0x446343) {
    const _0x3dc3dd = _0x366f9a, _0x476655 = {
            'VztHh': function (_0x4553f1, _0x1fcf10) {
                return _0x4553f1 - _0x1fcf10;
            },
            'CohEb': function (_0x4e98f2) {
                return _0x4e98f2();
            },
            'SttdQ': function (_0x57dd3f, _0x102c5c) {
                return _0x57dd3f(_0x102c5c);
            }
        };
    try {
        const _0x15f786 = '0|1|2|3|4'[_0x3dc3dd(0x17e)]('|');
        let _0x264b85 = 0x0;
        while (!![]) {
            switch (_0x15f786[_0x264b85++]) {
            case '0':
                currentprofit = _0x476655[_0x3dc3dd(0x1c6)](_0x446343['profit'], _0x446343['wager']);
                continue;
            case '1':
                lastBet[_0x3dc3dd(0x1a8)] = _0x446343[_0x3dc3dd(0x1bc)]['number'];
                continue;
            case '2':
                result = _0x446343['data'][_0x3dc3dd(0x1a9)];
                continue;
            case '3':
                lastBet['id'] = String(_0x446343['id']);
                continue;
            case '4':
                return handleStats();
            }
            break;
        }
    } catch (_0x2d4259) {
        return _0x476655[_0x3dc3dd(0x1d8)](stop), _0x476655[_0x3dc3dd(0x187)](log, _0x476655['SttdQ'](getErrMsg, _0x2d4259));
    }
}