import os
import motor.motor_asyncio

# MongoDB attributes
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["DB_URL"])
db = client.todolist_FARM