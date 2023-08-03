from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from teacher.models import Aula, Professor
from teacher.serializers import AulaSerializer, CadastrarAulaSerializer, ProfessorSerializer
from rest_framework import status



class ProfessorView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all()
        serializer = ProfessorSerializer(professores, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AulaView(APIView):
    def post(self, request, id, format=None):
        professor = get_object_or_404(Professor, id=id)
        serializer = CadastrarAulaSerializer(data=request.data)
        if serializer.is_valid():
            aula = Aula(
                nome = serializer.validated_data.get('nome'),
                email = serializer.validated_data.get('email'),
                professor = professor
            )
            aula.save()
            aula_serializer = AulaSerializer(aula, many=False)
            return Response(aula_serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {'message': 'Houveram erros de validação',
            'erros': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
