from django.http import JsonResponse, HttpResponse, HttpRequest
from django.views.decorators.csrf import csrf_exempt
import json
from ToDo.models import Task


@csrf_exempt
def add_todo_task(request: HttpRequest) -> HttpResponse:
    if request.method == 'POST':
        # Extract the task data from the request body
        if not request.body:
            return JsonResponse({'error': 'Please provide some data'}, status=400)
        task_data = json.loads(request.body)

        # Extract the task, and completed values from the task_data
        task = task_data.get('task')
        completed = task_data.get('completed')

        # Perform validation on the task data
        if not task or not isinstance(completed, bool):
            return JsonResponse({'error': 'Invalid task data'}, status=400)

        # Save the task to the database or perform any other required operations
        # For example, assuming you have a ToDoTask model defined:
        # todo_task = ToDoTask(id=task_id, task=task, completed=completed)
        # todo_task.save()
        api_request = Task(task=task, completed=completed)
        api_request.save()

        # Return a JSON response indicating success with id of the new task
        return JsonResponse({"task_id": api_request.id,
                             'message': 'Task added successfully'})

    # Handle invalid request methods
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def get_todo_task(request: HttpRequest) -> HttpResponse:
    if request.method == 'GET':
        # Get all the tasks from the database

        tasks = Task.objects.all()

        # Convert the tasks queryset to JSON
        # we return a json with id called task_id and value being the task and completed

        tasks_json = {task.id: {'task': task.task,
                                'completed': task.completed} for task in tasks}
        # newobject = {task['task_id']: task for task in tasks_json}

        return JsonResponse(tasks_json, safe=False)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def update_todo_task(request: HttpRequest) -> HttpResponse:
    if request.method == 'PUT':
        task_data = json.loads(request.body)
        task_data.get('task_id')
        task_data.get('task')
        task_data.get('completed')

        # Perform validation on the task data
        if not task_data.get('task_id') or not task_data.get('task') or not isinstance(task_data.get('completed'),
                                                                                       bool):
            return JsonResponse({'error': 'Invalid task data'}, status=400)

        # Update the task in the database
        database_task = Task.objects.get(id=task_data.get('task_id'))
        if not database_task:
            return JsonResponse({'error': 'Invalid task id'}, status=400)

        database_task.task = task_data.get('task')
        database_task.completed = task_data.get('completed')
        database_task.save()

        return JsonResponse({'message': 'Task updated successfully'}, status=201)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


def delete_todo_task(request: HttpRequest) -> HttpResponse:
    if request.method == 'DELETE':

        return JsonResponse({'message': 'Task deleted successfully'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)
