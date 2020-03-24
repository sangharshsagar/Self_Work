import json
import boto3
s3_client = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Dawing_Table')

def lambda_handler(event, context):
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    file_name = event['Records'][0]['s3']['object']['key']
    print("bucket_name :",bucket_name)
    print("file_name :",file_name)
    response = s3_client.get_object( Bucket=bucket_name, Key=file_name)
    data = response['Body'].read().decode("utf-8")
    #print("data :",data)
    DrawingListData = data.split("\n")
    for Drawing in DrawingListData:
        #print(Drawing)
        Drawingdata = Drawing.split(",")
        try:
			table.put_item(
				Item = {
					"Drawing_Id" : Drawingdata[0],
					"Drawing_Name" : Drawingdata[1],
					"Drawing_Type" : Drawingdata[2],
				}
			)
		except Exception as e:
			print("Exception is ",e)
		
  
