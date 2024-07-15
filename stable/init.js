window.WDB_MODE = 'stable';
const pswd = 'freeisgood';
const wdbLoadJS = function (_0x4abb2a) {
  let _0x4537a8 = [];
  return function (_0x1dc01d) {
    return _0x4537a8[_0x1dc01d] || (_0x4537a8[_0x1dc01d] = new Promise((_0x34cd67, _0x3b4bff) => {
      let _0x4608e9 = document.createElement('script');
      _0x4608e9.defer = true;
      _0x4608e9.src = _0x1dc01d;
      _0x4608e9.onload = _0x34cd67;
      _0x4608e9.onerror = _0x3b4bff;
      document.head.append(_0x4608e9);
    }));
  };
}();
const wdbLoadCSS = function (_0x253516) {
  let _0x35aad8 = [];
  return function (_0xe17997) {
    return _0x35aad8[_0xe17997] || (_0x35aad8[_0xe17997] = new Promise((_0xec92f, _0x1f6754) => {
      let _0x4368c7 = document.createElement("link");
      _0x4368c7.defer = true;
      _0x4368c7.rel = "stylesheet";
      _0x4368c7.type = "text/css";
      _0x4368c7.href = _0xe17997;
      _0x4368c7.onload = _0xec92f;
      _0x4368c7.onerror = _0x1f6754;
      document.head.append(_0x4368c7);
    }));
  };
}();
function makeBoxEnterLicense() {
  const _0x2a8334 = document.createElement('div');
  _0x2a8334.id = "wdbWrapLicenseBox";
  _0x2a8334.innerHTML = "\n      <style>\n        #wdbLicenseBox {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n\n        .wdb-input {\n          all: revert;\n          padding: 2px;\n          border: 1px solid #ccc;\n          border-radius: 3px;\n        }\n        \n        .btn-grad {\n          all: revert;\n          cursor: pointer;\n          background-image: linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%);\n          text-align: center;\n          transition: 0.5s;\n          padding: 3px;\n          background-size: 200% auto;\n          border: #ffc107;\n          border-radius: 3px;\n        }\n        \n        .btn-grad:hover {\n          background-position: right center;\n          text-decoration: none;\n        }\n        \n        .btn-grad:active {\n          opacity: .65;\n        }\n        \n        .btn-grad:disabled {\n          cursor: auto;\n          opacity: .65;\n          color: #fff;\n        }\n\n        #wdbLicenseAlert {\n          text-align: left!important;\n          color: red;\n          margin-top: 5px;\n        }\n      </style>\n\n      <div id=\"wdbLicenseBox\">\n        <div>Web DiceBot require your license</div>\n        <input type=\"text\" class=\"wdb-input\" id=\"wdbLicenseInput\" />\n        <button id=\"wdbLicenseButton\" class=\"btn-grad\">Save</button>\n        <div id=\"wdbLicenseAlert\">Maybe your license has expired</div>\n      </div>";
  document.body.prepend(_0x2a8334);
  setTimeout(() => {
    document.getElementById("wdbLicenseAlert").innerText = '';
  }, 0x7d0);
  document.getElementById("wdbLicenseButton").onclick = () => {
    const _0x409efe = document.getElementById("wdbLicenseInput").value;
    if (!_0x409efe) {
      document.getElementById("wdbLicenseAlert").innerText = "Enter your license";
      setTimeout(() => {
        document.getElementById("wdbLicenseAlert").innerText = '';
      }, 0x7d0);
    } else if (_0x409efe !== pswd) {
      document.getElementById("wdbLicenseAlert").innerText = "Wrong license";
      setTimeout(() => {
        document.getElementById("wdbLicenseAlert").innerText = '';
      }, 0x7d0);
    } else {
      localStorage.setItem("license", _0x409efe);
      document.getElementById("wdbLicenseAlert").style.color = "green";
      document.getElementById("wdbLicenseAlert").innerText = "License saved\nInitializing...";
      setTimeout(init, 0x1f4);
    }
  };
}
async function init() {
  try {
    const _0x42ea98 = localStorage.getItem('license');
    if (!_0x42ea98) {
      return makeBoxEnterLicense();
    }
    const _0x3a4891 = document.createElement('div');
    _0x3a4891.id = "wdbWrapInitializing";
    _0x3a4891.innerHTML = "\n      <style>\n        #wdbInitializing {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n      </style>\n\n      <div id=\"wdbInitializing\">\n        Web DiceBot initializing...\n      </div>";
    document.body.prepend(_0x3a4891);
    const _0x510198 = WDB_API + '/' + WDB_MODE + "/main/" + CASINO_GAME + '?license=' + _0x42ea98;
    await wdbLoadJS(_0x510198);
    await wdbLoader(wdbLoadJS, wdbLoadCSS);
  } catch (_0x82f104) {
    if (document.getElementById("wdbLicenseBox")) {
      document.getElementById("wdbLicenseBox").remove();
    }
    if (document.getElementById("wdbInitializing")) {
      document.getElementById("wdbInitializing").remove();
    }
    makeBoxEnterLicense();
  }
}
init();