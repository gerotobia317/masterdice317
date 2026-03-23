(() => {
  "use strict";

  const PASSWORD = "manukpakEKO";
  const statusId = "bangjack-password-status";
  const defaultBootstrapUrl = "https://bangjack-offline.cemu.my.id/code.js";

  function ensureStatusNode() {
    let node = document.getElementById(statusId);
    if (node) {
      return node;
    }

    if (!document.body) {
      return null;
    }

    node = document.createElement("div");
    node.id = statusId;
    node.style.cssText = [
      "all: initial",
      "position: fixed",
      "top: 16px",
      "left: 16px",
      "z-index: 2147483002",
      "max-width: 420px",
      "padding: 10px 12px",
      "border: 1px solid #d7d7d7",
      "border-radius: 8px",
      "box-shadow: 0 8px 24px rgba(0,0,0,.12)",
      "background: #ffffff",
      "color: #111827",
      "font: 13px/1.5 Consolas, 'Courier New', monospace",
      "white-space: pre-wrap",
    ].join(";");

    document.body.prepend(node);
    return node;
  }

  function setStatus(message, color) {
    const node = ensureStatusNode();
    if (!node) {
      return;
    }

    node.textContent = message;
    node.style.color = color;
  }

  function getConfig() {
    const userConfig =
      typeof window.BANGJACK_PASSWORD_BOOTSTRAP === "object" &&
      window.BANGJACK_PASSWORD_BOOTSTRAP !== null
        ? window.BANGJACK_PASSWORD_BOOTSTRAP
        : {};

    return {
      bootstrapUrl: userConfig.bootstrapUrl || defaultBootstrapUrl,
      promptMessage:
        userConfig.promptMessage || "Masukkan password untuk menjalankan script:",
      providedPassword:
        typeof userConfig.password === "string" ? userConfig.password : null,
    };
  }

  function requestPassword(promptMessage, providedPassword) {
    if (typeof providedPassword === "string") {
      return providedPassword;
    }

    if (typeof window.prompt !== "function") {
      return null;
    }

    return window.prompt(promptMessage, "");
  }

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-bangjack-bootstrap="${url}"]`);
      if (existing) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.dataset.bangjackBootstrap = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Gagal memuat bootstrap: ${url}`));
      document.head.appendChild(script);
    });
  }

  async function init() {
    const config = getConfig();
    const inputPassword = requestPassword(
      config.promptMessage,
      config.providedPassword
    );

    if (inputPassword === null) {
      setStatus("Password dibatalkan. Script tidak dijalankan.", "#b45309");
      return;
    }

    if (inputPassword !== PASSWORD) {
      setStatus("Password salah. Script tidak dijalankan.", "#b91c1c");
      return;
    }

    try {
      setStatus("Password benar. Menjalankan bootstrap...", "#111827");
      await loadScript(config.bootstrapUrl);
      setStatus("Bootstrap berhasil dijalankan.", "#047857");
    } catch (error) {
      console.error(error);
      setStatus(
        "Bootstrap gagal dijalankan. Cek URL bootstrap atau koneksi.",
        "#b91c1c"
      );
    }
  }

  init();
})();
