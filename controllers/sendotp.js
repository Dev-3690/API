const speakeasy = require('speakeasy');

// Generate a secret key with a length 
// of 20 characters 
const sendOtp = (req, res) => {
    try {
        const secret = speakeasy.generateSecret({ length: 20 });

        const code = speakeasy.totp({
            secret: secret.base32,
            encoding: 'base32'
        });
        console.log('Secret: ', secret.base32);
        console.log('Code: ', code);

        res.status(200).json({
            status: true,
            message: "otp received",
            data: code
        })
    } catch (error) {
        res.send({
            status: false,
            message: error
        })
    }
}






