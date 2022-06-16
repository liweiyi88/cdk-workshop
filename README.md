# cdk-workshop

## Prerequisites

### Recommended IDE for cdk development
[Visual Studio Code](https://code.visualstudio.com/) (No need to install any plugin at this stage).

### AWS CLI
[Windows installer](https://docs.aws.amazon.com/cli/v1/userguide/install-windows.html#install-msi-on-windows)
[Macos/Linux](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#install-bundle-other)

### Nodejs
Using [nvm](https://github.com/nvm-sh/nvm) to manage nodejs and npm installation.
Follow the installation step https://github.com/nvm-sh/nvm#installing-and-updating. Once its installed, you should be able to run the below commands to start use Nodejs 14 as well as npm
```
nvm install v14
nvm use v14
```

### Install CDK globally
After you have installed Nodejs and npm via `nvm` in above step. You should be able to install cdk on your local machine globally by running `npm install -g aws-cdk`. After cdk is installed, you can follow https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html to start build your cdk app. To initialise your cdk app, run the below commands.

```
mkdir hello-cdk
cd hello-cdk
cdk init app --language typescript
```

## Learning Materials
1. [AWS Offical document](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)
2. [AWS CDK typescript workshop](https://cdkworkshop.com/20-typescript.html)
3. [AWS CDK V2 API reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
