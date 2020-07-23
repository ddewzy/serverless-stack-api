export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-uploads.d",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7hpbdpk9fg.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pLdq7updw",
    APP_CLIENT_ID: "2hc8v37i5sq56hm0qjir4ecquc",
    IDENTITY_POOL_ID: "us-east-1:5dfd1497-17e6-44db-a90f-1928a2e5074e",
  },
};
