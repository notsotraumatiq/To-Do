from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def add_todo_task(request):
    if request.method == 'POST':
        # Extract the task data from the request body
        task_data = json.loads(request.body)

        # Perform validation on the task data if needed

        # Save the task to the database or perform any other required operations
        # For example, assuming you have a ToDoList model defined:
        # todo_list = ToDoList.objects.get(pk=1)  # Get the ToDoList instance
        # todo_list.tasks.append(task_data)  # Add the task to the tasks array
        # todo_list.save()  # Save the changes

        # Return a JSON response indicating success
        return JsonResponse({'message': 'Task added successfully'})

    # Handle invalid request methods
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def get_todo_task(request):
    if request.method == 'GET':

        return JsonResponse({})

    return JsonResponse({'error': 'Invalid request method'}, status=405)


def update_todo_task(request):
    if request.method == 'PUT':
        task_data = json.loads(request.body)

        return JsonResponse({})

    return JsonResponse({'error': 'Invalid request method'}, status=405)
