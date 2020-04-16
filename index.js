const AWS = require('aws-sdk');
const bucket =  'private-uploadtestregion-1';
const secretAccessKey =  '4Y1nt9kf425/J7aShOiBQs9eyFMO9oJ2';
const accessKeyId =  'AKIAINDR4DHGLVRS';

AWS.config.credentials = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  };
  AWS.config.region = 'us-east-1';
   AWS.config.getCredentials(function(err) {
        if (err) console.log('aws credentials error', err.stack); // credentials not loaded
        else console.log('AWS Credentials Loaded');
      });


const s3  = new AWS.S3(); 
const params = {
    Bucket: bucket,
    Key: 'uploads/assets/dynamic/images/tn_copyid1b2c99a40-7ef7-11ea-849d-d529834d6944.png'
};
s3.headObject(params, (err, data) => {
   if(err) console.log(err);
   else {
       console.log(data);
   }
  });

