from rest_framework.views import APIView
from rest_framework.response import Response
from teacher.models import Professor
from teacher.serializers import ProfessorSerializer
from rest_framework import status


class ProfessorView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all()
        serializer = ProfessorSerializer(professores, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AulaView(APIView):
    def post(self, request, id, format=None):
        ...
