from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from ToDo.models import APIRequest

@csrf_exempt
def add_todo_task(request):
    if request.method == 'POST':
        # Extract the task data from the request body
        if not request.body:
            return JsonResponse({'error': 'Please provide some data'}, status=400)
        task_data = json.loads(request.body)

        # Extract the id, task, and completed values from the task_data
        task_id = task_data.get('id')
        task = task_data.get('task')
        completed = task_data.get('completed')

        # Perform validation on the task data
        if not task_id or not task or not isinstance(completed, bool):
            return JsonResponse({'error': 'Invalid task data'}, status=400)

        # Save the task to the database or perform any other required operations
        # For example, assuming you have a ToDoTask model defined:
        # todo_task = ToDoTask(id=task_id, task=task, completed=completed)
        # todo_task.save()
        api_request = APIRequest(id=task_id, task=task, completed=completed)
        api_request.save()

        # Return a JSON response indicating success
        return JsonResponse({'message': 'Task added successfully'})

    # Handle invalid request methods
    return JsonResponse({'error': 'Invalid request method'}, status=405)



# def get_todo_task(request):
#     if request.method == 'GET':

#         return JsonResponse({})

#     return JsonResponse({'error': 'Invalid request method'}, status=405)


# def update_todo_task(request):
#     if request.method == 'PUT':
#         task_data = json.loads(request.body)

#         return JsonResponse({})

#     return JsonResponse({'error': 'Invalid request method'}, status=405)
