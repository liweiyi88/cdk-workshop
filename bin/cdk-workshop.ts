#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();

const env = { account: '722141136946', region: 'ap-southeast-2'}

new CdkWorkshopStack(app, 'CdkWorkshopStack', {
  env
});
