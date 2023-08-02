from django.urls import include, path
from teacher.views import ProfessorView


urlpatterns = [
    path('', ProfessorView.as_view(), name='get-professor'),
]

