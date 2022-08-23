from rest_framework.response import Response
from rest_framework.views import APIView
import json, logging, os
from bson import ObjectId
from rest_framework import status
from pymongo import MongoClient
import uuid

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
connection = MongoClient(mongo_uri)
db = connection['test_db']
collection = db['todo_todo']

class TodoListView(APIView):
    def get(self, request):
        response = []

        for todo in collection.find({}):
            todo['_id']=str(todo['_id'])
            response.append(todo)
        print(response)

        return Response(json.loads(json.dumps(response)), status=status.HTTP_200_OK)
        
    def post(self, request):
        data = request.data
        todo={"name":data['name'],"completed":False,"id":str(uuid.uuid1())}
        response =collection.insert_one(todo)

        todo["_id"]=str(response.inserted_id)
        return Response(json.loads(json.dumps(todo)), status=status.HTTP_200_OK)


class TodoDetail(APIView):
    def put(self, request, pk, format=None):
        data=request.data
        print(data)
        collection.update_one({"_id":ObjectId(pk)},{"$set":data})
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        collection.delete_one({"_id":ObjectId(pk)})
        return Response(status=status.HTTP_204_NO_CONTENT)