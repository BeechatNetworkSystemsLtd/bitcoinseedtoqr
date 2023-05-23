# Seed to QR Code Generator

## Overview
This project is a client-side tool for generating Bitcoin wallet mnemonic seeds and encrypting them into a QR code. The project adheres to strict security and privacy principles and ensures that the seed never leaves the user's device. 

## Features
- Generate a mnemonic seed for a Bitcoin wallet.
- Generate a QR code for easy scanning and storage of the seed.
- The seed is encrypted with AES before it is converted into a QR code for an extra layer of security.
- Decrypt the QR code to retrieve the original mnemonic seed.
- The mnemonic seed, address, and the QR codes can be easily copied to clipboard.
- Start a QR code scanner.

## How to Use
1. Clone the repository and install all the required dependencies.
2. Run the server.
3. Open the tool in your browser.
4. Use the 'Generate Encrypted QR Code' button to generate a mnemonic seed and its QR code.
5. Use the 'Decrypt QR Code' button to decrypt an encrypted QR code and retrieve the original mnemonic seed.

## Dependencies
- html5-qrcode
- CryptoJS
- bip39
- bitcoinjs-lib
- qrcode

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## Support
If you have any issues or feature requests, please file issues and pull requests against this repo for quick response.

## Acknowledgements
We appreciate the support and contributions from the community that help make this project better.