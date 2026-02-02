import config from '../config/index.js';

export const getS3Config = () => ({
  endpoint: config.s3.endpoint,
  region: config.s3.region,
  bucket: config.s3.bucket,
  accessKeyId: config.s3.accessKeyId
});
