// app.js

'use strict';

const os = require('os');

const { exec } = require('child_process');

function getMac(iface) {
    return new Promise((resolve, reject) => {
        exec(`ip link show ${iface}`, (err, stdout) => {
            if (err) {
                reject(err);
            } else {
                const xx = '[0-9A-F]{2}';
                const regexp = new RegExp(`link/ether (${xx}:${xx}:${xx}:${xx}:${xx}:${xx})`, 'i');

                const lines = stdout.split(os.EOL);

                for (let i = 0; i < lines.length; i++) {
                    const match = regexp.exec(lines[i]);
                    if (match) {
                        const mac = match[1];
                        resolve({ iface, mac });
                        return;
                    }
                }

                reject(new Error(`ip link/ether match not found: ${iface}`));
            }
        });
    });
}

(async () => {
    try {
        const result = await getMac('eth0');
        console.log(result);
    } catch (err) {
        console.log(`${err}`);
    }
})();
