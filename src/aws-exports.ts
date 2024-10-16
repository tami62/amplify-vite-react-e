const awsmobile = {
    Auth: {
        // Amazon Cognito Identity Pool ID
        identityPoolId: 'ap-south-1:7b6c74c1-8061-45e0-954b-69fefaec1cf3',
        // Amazon Cognito Region
        region: 'ap-south-1',
        // Amazon Cognito User Pool ID
        userPoolId: 'ap-south-1_Zx1QczjyB',
        // Amazon Cognito Web Client ID
        userPoolWebClientId: '66jl20gbehm24bnsume9f2mavd',
    },
    Storage: {
        // S3 Bucket Name
        bucket: 'amplify-d39zb9ohuyuxsc-ma-amplifyteamdrivebucket28-hondafoneeqe', // Ensure this matches your S3 bucket name
        region: 'ap-south-1', // Region where your bucket is created
    },
    API: {
        // API Gateway details if you're using it
    },
    // Add other AWS services as necessary
};

export default awsmobile;
