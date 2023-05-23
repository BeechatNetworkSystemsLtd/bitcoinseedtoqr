# Bitcoin Seed to QR

Bitcoin Seed to QR is an advanced, client-side tool designed to create and encrypt Bitcoin wallet mnemonic seeds into QR codes. Developed by Beechat Network Systems Ltd, this application upholds the principles of enhanced security, user privacy, and simplicity in its functionality. Built with Javascript, Seed to QR integrates several libraries such as `html5-qrcode`, `crypto-js`, `bip39`, `bitcoinjs-lib`, and `qrcode`.

## File Structure

The architecture of the application is organized as follows:

- `index.html`: The main HTML file serving as the skeleton of the application's web page.
- `main.js`: A Javascript file embodying the core logic of the application, including the generation of mnemonic seeds, their conversion to QR codes, and the overall management of the encryption and decryption process.
- `bundle.js`: A file compiled by Browserify that packages `main.js` along with all its dependencies, ensuring compatibility with the browser environment.
- `base.html`: A template HTML file extended by `index.html`.
- `style.css`: A style file that contains uniform styles applied across the application.

## Application Workflow

1. Upon clicking the "Generate Encrypted QR Code" button, a mnemonic seed and corresponding Bitcoin address is generated client-side.
2. Both the mnemonic seed and its QR code version are displayed to the user.
3. The user can opt to input a password for encrypting the mnemonic seed. The encrypted seed is then converted into a QR code and exhibited to the user.
4. The application includes "Copy" buttons to facilitate easy copying of the mnemonic seed and address.
5. Moreover, the application provides a feature to decrypt an encrypted QR code. This can be achieved by scanning the QR code using the device's camera and providing the correct password.

To maintain the highest level of privacy, all QR codes are generated entirely on the client-side, ensuring sensitive information never leaves the user's device.

## Bundling

Browserify is employed to bundle the JavaScript file (`main.js`) into `bundle.js`. This process enables the usage of Node.js-style `require()` calls within the browser and guarantees the inclusion of all dependencies in a single file, increasing the portability and ease-of-use of the application in a browser environment.

The following command is used to bundle the file:

```bash
browserify main.js -o bundle.js
```

This command instructs Browserify to use `main.js` as input, bundle it together with its dependencies, and output the result into `bundle.js`.

## Usage

Before running the application, please ensure that Python and Flask are installed on your system. If they're not, follow the installation steps provided.

Once installed, you can use the application by following these steps:

1. Clone the repository from https://github.com/BeechatNetworkSystemsLtd/bitcoinseedtoqr or download the source files.
2. Using the terminal or command prompt, navigate to the directory where the files are stored.
3. Use the command `export FLASK_APP=app.py` to set the application.
4. Start the server using the command `flask run`.
5. After the server starts running, open your web browser and navigate to `http://localhost:5000`.
6. You should now see the application running in your browser.
7. Click the "Generate Encrypted QR Code" button.
8. The application will generate a new mnemonic seed, Bitcoin address, and corresponding QR codes.
9. Optionally, provide a password to encrypt the mnemonic seed.
10. To copy the mnemonic seed or Bitcoin address, click the respective "Copy" buttons.
11. To decrypt an encrypted QR code, scan the QR code and enter the password used during encryption.

Please note: If the name of your Flask application differs from `app.py`, remember to replace it in the above command.

## Contributing

Contributions to Bitcoin Seed to QR are more than welcome! We appreciate any help to improve and expand the functionality of this tool.

Here's how you can contribute:

1. Fork the project from our [GitHub repository](https://github.com/BeechatNetworkSystemsLtd/bitcoinseedtoqr).
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request so we can review your contribution.

Please make sure your code adheres to our coding standards and is well-commented. Also, please ensure your changes do not break the existing functionality of the application.

## License

Bitcoin Seed to QR is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT). Please see the `LICENSE` file for more information. This means that you're free to use, modify, and distribute the application, but you must include the original copyright notice and disclaimers.

## Acknowledgments

We would like to thank all the contributors for their time and expertise in making Bitcoin Seed to QR a helpful and reliable tool. We appreciate your efforts in helping us improve the Bitcoin community's experience. 

## Contact

For any issues, suggestions, or general feedback, please create an issue in our [GitHub repository](https://github.com/BeechatNetworkSystemsLtd/bitcoinseedtoqr/issues). We'll do our best to address your concerns as promptly as possible.

Thank you for using Bitcoin Seed to QR.