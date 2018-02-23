## getmac ##

Get MAC Address for Linux Network Interface

Experiment with:

  * Node child process
  * Regular expressions
  * Promises and async/await
  * Node v9
  * Yarn package manager
  * Prettier code formatter
  * ESLint with airbnb-base

This app can get the MAC address for a network interface that has not been assigned an IP address.

That differs from [os.networkInterfaces()](https://nodejs.org/api/os.html#os_os_networkinterfaces) in the Node API:

    The os.networkInterfaces() method returns an object containing
    only network interfaces that have been assigned a network address.

Use yarn to install packages:

    [jfathman@debian getmac]$ yarn install
    yarn install v1.3.2
    [1/4] Resolving packages...
    [2/4] Fetching packages...
    [3/4] Linking dependencies...
    [4/4] Building fresh packages...
    Done in 1.99s.

Use yarn (per script in package.json) to run prettier and eslint on app.js:

    [jfathman@debian getmac]$ yarn run format
    yarn run v1.3.2
    $ prettier --single-quote --tab-width=4 --print-width=120 --write app.js; eslint app.js; exit 0
    app.js 97ms
    Done in 1.54s.

Use node to run app.js to get the MAC address for Linux network interface eth0:

    [jfathman@debian getmac]$ node app.js
    { iface: 'eth0', mac: 'f2:3c:91:24:f9:84' }

