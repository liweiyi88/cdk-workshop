import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import * as path from 'path'
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront'
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins'

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'SPABucket', {
      accessControl: BucketAccessControl.PRIVATE
      // websiteIndexDocument: 'index.html',
      // websiteErrorDocument: 'index.html',
    })

    new BucketDeployment(this, 'SPABucketDeployment', {
      sources: [Source.asset(path.resolve(__dirname, '../build'))],
      destinationBucket: bucket,
    })

    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity')

    bucket.grantRead(originAccessIdentity)

    new Distribution(this, 'SPACloudfront', {
      defaultRootObject: 'index.html',
      errorResponses: [{
        httpStatus: 404,
        responseHttpStatus: 404,
        responsePagePath: '/index.html'
      }],
      defaultBehavior: {
        origin: new S3Origin(bucket, {
          originAccessIdentity
        })
      }
    })
  }
}
