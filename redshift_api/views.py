from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['POST'])
def predict_redshift(request):
    try:
        # Get the input data
        u_mag = float(request.data.get('u_mag', 0))
        g_mag = float(request.data.get('g_mag', 0))
        r_mag = float(request.data.get('r_mag', 0))
        
        # Simple calculation for now (we can make this more sophisticated later)
        # This is just a placeholder calculation
        redshift = (u_mag + g_mag + r_mag) / 30.0
        
        return Response({'prediction': redshift})
    except (ValueError, TypeError) as e:
        return Response(
            {'error': 'Invalid input data. Please provide numeric values for u_mag, g_mag, and r_mag.'},
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        return Response(
            {'error': 'An error occurred while processing your request.'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
