const Html5QrcodeScanner = require('html5-qrcode').Html5QrcodeScanner;
const CryptoJS = require('crypto-js');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const QRCode = require('qrcode');



function generateSeed() {
    let mnemonic = bip39.generateMnemonic(128);
    if (mnemonic === "") {
        alert("Mnemonic cannot be empty!");
        return;
    }
    document.getElementById('mnemonic').value = mnemonic;

    let seed = bip39.mnemonicToSeedSync(mnemonic);
    let root = bitcoin.bip32.fromSeed(seed);
    let path = "m/44'/0'/0'/0/0";
    let keyPair = root.derivePath(path);
    let { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.bitcoin });

    document.getElementById('address').value = address;

    QRCode.toCanvas(document.getElementById('mnemonic-qr'), mnemonic, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Mnemonic QR code successfully generated!');
        document.getElementById('mnemonic-qr').parentNode.style.display = "block";
    });
    QRCode.toCanvas(document.getElementById('address-qr'), address, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Address QR code successfully generated!');
        document.getElementById('address-qr').parentNode.style.display = "block";
    });
}


document.getElementById('generate-seed').addEventListener('click', generateSeed);



function updateAllData() {
    let mnemonic = document.getElementById('mnemonic').value;
    if (mnemonic === "") {
        alert("Mnemonic cannot be empty!");
        return;
    }

    let seed = bip39.mnemonicToSeedSync(mnemonic);
    let root = bitcoin.bip32.fromSeed(seed);
    let path = "m/44'/0'/0'/0/0";
    let keyPair = root.derivePath(path);
    let { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.bitcoin });

    document.getElementById('address').value = address;

    QRCode.toCanvas(document.getElementById('mnemonic-qr'), mnemonic, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Mnemonic QR code successfully generated!');
        document.getElementById('mnemonic-qr').parentNode.style.display = "block";
    });
    QRCode.toCanvas(document.getElementById('address-qr'), address, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Address QR code successfully generated!');
        document.getElementById('address-qr').parentNode.style.display = "block";
    });
}

document.getElementById('update-all-data').addEventListener('click', updateAllData);



document.getElementById('generate').addEventListener('click', () => {
    let mnemonic = document.getElementById('mnemonic').value;
    let password = document.getElementById('password').value;

    if (mnemonic === "" || password === "") {
        alert("Mnemonic and password cannot be empty!");
        return;
    }

    let ciphertext = CryptoJS.AES.encrypt(mnemonic, password).toString();

    console.log('Ciphertext:', ciphertext);  // Log ciphertext to console

    if (ciphertext) {
        QRCode.toCanvas(document.getElementById('encrypted-qr'), ciphertext, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
            if (error) console.error('Error generating QR code:', error);
            else {
                console.log('QR code successfully generated!');
                document.getElementById('encrypted-qr').parentNode.style.display = "block";  // Show the canvas container
            }
        });

        document.getElementById('ciphertext').value = ciphertext;  // Store ciphertext
    } else {
        console.error('No ciphertext was generated!');
    }
});


function copyToClipboard(id) {
    let copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    if (!navigator.clipboard) {
        try {
            document.execCommand('copy');
            alert('Copied to clipboard');
        } catch (err) {
            alert('Failed to copy text');
        }
    } else {
        navigator.clipboard.writeText(copyText.value).then(function () {
            alert('Copied to clipboard');
        }, function (err) {
            alert('Failed to copy text: ', err);
        });
    }
}

document.getElementById('copy-mnemonic').addEventListener('click', function () {
    copyToClipboard('mnemonic');
});

document.getElementById('copy-address').addEventListener('click', function () {
    copyToClipboard('address');
});

document.getElementById('update-balance').addEventListener('click', function () {
    let address = document.getElementById('address').value;
    fetch(`https://blockchain.info/rawaddr/${address}`)
        .then(response => response.json())
        .then(data => {
            // Convert Satoshi to BTC
            let balance = data.final_balance / 100000000;
            document.getElementById('balance').value = balance + ' BTC';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to update balance');
        });
});
//...



document.getElementById('decrypt').addEventListener('click', () => {
    let ciphertext = document.getElementById('scanned-ciphertext').value;
    let password = document.getElementById('password').value;

    if (ciphertext === "" || password === "") {
        alert("Scanned ciphertext and password cannot be empty!");
        return;
    }
    let bytes = CryptoJS.AES.decrypt(ciphertext, password);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('mnemonic').value = originalText;
    console.log(originalText);

    let seed = bip39.mnemonicToSeedSync(originalText);
    let root = bitcoin.bip32.fromSeed(seed);
    let path = "m/44'/0'/0'/0/0";
    let keyPair = root.derivePath(path);
    let { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.bitcoin });

    document.getElementById('address').value = address;

    QRCode.toCanvas(document.getElementById('mnemonic-qr'), originalText, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Mnemonic QR code successfully regenerated!');
    });
    QRCode.toCanvas(document.getElementById('address-qr'), address, { errorCorrectionLevel: 'H', scale: 6 }, function (error) {
        if (error) console.error(error);
        console.log('Address QR code successfully regenerated!');
    });
});


document.getElementById('update-all').addEventListener('click', updateAllData);




let scanner = new Html5QrcodeScanner("scanner", { fps: 10, qrbox: 250 });
document.getElementById('start-scanner').addEventListener('click', () => {
    scanner.render(successCallback, errorCallback);
});

function successCallback(message) {
    document.getElementById('scan-result').innerText = "QR code scanned successfully.";
    document.getElementById('scanned-ciphertext').value = message;
    scanner.clear();
}


function errorCallback(error) {
    console.log(error);
}
