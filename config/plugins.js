module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIA2X6YOFPH6CIM3SWG'),
                secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
                region: env('AWS_REGION', 'us-east-1'),
                params: {
                    Bucket: env('AWS_BUCKET_NAME', 'zenpli-cms'),
                },
            },
        },
    }
  });
