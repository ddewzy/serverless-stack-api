import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  console.log(event);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: data.userId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };
  console.log(params);
  let result = await dynamoDb.put(params);
  console.log(result);
  return params.Item;
});
