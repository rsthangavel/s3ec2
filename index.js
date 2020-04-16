const AWS = require('aws-sdk');
const bucket = 'private-uploadtestregion-1';
const secretAccessKey = process.env.S3_ACCESSKEY;
const accessKeyId = process.env.S3_ACCESSKEYID;
// AWS.config.credentials = {
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey
//   };
AWS.config.credentials = new AWS.EC2MetadataCredentials({
    httpOptions: { timeout: 5000 }, // 5 second timeout
    maxRetries: 10, // retry 10 times
    retryDelayOptions: { base: 200 } // see AWS.Config for information
});
AWS.config.region = 'us-east-1';
AWS.config.getCredentials(function (err) {
    if (err) console.log('aws credentials error', err.stack); // credentials not loaded
    else console.log('AWS Credentials Loaded');
});


const s3 = new AWS.S3();
const params = {
    Bucket: bucket,
    Key: 'uploads/assets/dynamic/images/tn_copyid1b2c99a40-7ef7-11ea-849d-d529834d6944.png'
};
s3.headObject(params, (err, data) => {
    if (err) console.log(err);
    else {
        console.log('headObject:', data);
    }
});

s3.putObject({ Bucket: bucket, Key: 'createdfromec2/test' }, function (err, data) {
    if (err) console.log(err);
    else {
        console.log('PutObject:', data);
    }
})

