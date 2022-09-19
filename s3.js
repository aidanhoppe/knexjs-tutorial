// const dotenv = require('dotenv')
const aws = require('aws-sdk')
const crypto = require('crypto')
const {promisify} = require('util')
const randomBytes = promisify(crypto.randomBytes)

//require('dotenv').config()
// dotenv.config()

const region = "us-west-1"
const bucketName = "pdevfree-bucket"
const accessKeyId = "AKIA3PVOPM4ANEXPHPW2"
const secretAccessKey = "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"
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
  // apiVersion: 'latest'
})

module.exports = async() => {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName+'.jpg',
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}