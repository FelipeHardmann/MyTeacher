from django.urls import include, path
from teacher.views import ProfessorView, AulaView


urlpatterns = [
    path('', ProfessorView.as_view(), name='get-professor'),
    path('<int:id>/aulas', AulaView.as_view(), name='post-aula')
]

