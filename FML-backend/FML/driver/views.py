from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.filters import SearchFilter
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from driver.models import Songs, Playlists, Channels
from driver.serializers import SongSerializer, PlaylistSerializer, ChannelSerializer



# def get_filter(model_class):
#   class ItemFilter(filters.FilterSet):

#       date_range = filters.DateRangeFilter(field_name='date')

#       class Meta:
#           model = model_class
#           fields = ('category', 'date_range',)

#   return ItemFilter

# class BaseViewSet(viewsets.ModelViewSet, ):
#     """
#     A base viewsets that includes functions
#     and fields common to all the viewsets.
#     """

#     filter_backends = (SearchFilter, DjangoFilterBackend)
#     search_fields = ('name', 'description', 'location')

#     def perform_create(self, serializer):
#         """
#         Function for saving person in an instance
#         """

#         serializer.save(person=self.request.person)



class SongViewSet(viewsets.ModelViewSet):            
    """
    API endpoint that allows Lost items to 
    be viewed, searched and filtered.
    """

    queryset = Songs.objects.all().order_by('-id',)
    serializer_class = SongSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly,]
    http_method_names = ['get', 'post',]
    # filterset_class = get_filter(LostItem)


class ReassignRank (APIView):

  def post(self, request, r):
    obj = Songs.objects.filter(rank == r)
    obj2 = Songs.objects.get(id = request.id)
    if obj is none:
      pass
    else:
      obj3 = Songs.objects.filter(rank >= r and rank< obj2.rank)
      for objects in obj3:
        objects.rank =+ 1
        objects.save()
    obj2.rank = r
    obj2.save()


# class FoundViewSet(BaseViewSet):
#     """
#     API endpoint that allows Found items to
#     be viewed, searched and filtered.
#     """

#     queryset = FoundItem.objects.all().order_by('resolved', '-id')
#     serializer_class = FoundSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly,] 
#     http_method_names = ['get', 'post',]
#     filterset_class = get_filter(FoundItem)



# class MyFoundViewSet(BaseViewSet):
#     """
#     API endpoint that allows Found items of the corresponding
#     user to be viewed, searched and filtered.
#     """

#     serializer_class = FoundSerializer
#     permission_classes = [IsAuthenticated,]

#     def get_queryset(self):
#         """
#         Function for retrieving 
#         queryset for the class
#         """

#         queryset = FoundItem.objects.filter(person=self.request.person).order_by('-id')        
#         return queryset



# class MyLostViewSet(BaseViewSet):            
#     """
#     API endpoint that allows Lost items of the corresponding
#     user to be viewed, searched and filtered.
#     """

#     serializer_class = LostSerializer
#     permission_classes = [IsAuthenticated,]

#     def get_queryset(self):
#         """
#         Function for retrieving 
#         queryset for the class
#         """

#         queryset = LostItem.objects.filter(person=self.request.person).order_by('-id')        
#         return queryset
