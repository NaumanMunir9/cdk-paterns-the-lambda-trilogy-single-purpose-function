import { Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class SinglePurposeFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // =============================================================================
    // add lambda function
    // =============================================================================
    const addLambda = new lambda.Function(this, "addLambda", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "add.handler",
      code: lambda.Code.fromAsset("lambda"),
    });

    // =============================================================================
    // subtract lambda function
    // =============================================================================
    const subtractLambda = new lambda.Function(this, "subtractLambda", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "subtract.handler",
      code: lambda.Code.fromAsset("lambda"),
    });
  }
}
