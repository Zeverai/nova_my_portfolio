# You are in: -- ( resources.py ) --
from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from tastypie.resources import ALL_WITH_RELATIONS
from tastypie import fields
from api.models import Project
from api.models import Note


class ProjectResource(ModelResource):
    class Meta:
        queryset = Project.objects.all()
        resource_name = 'project'
        authorization = Authorization()


class NoteResource(ModelResource):
    project = fields.ForeignKey(ProjectResource, 'project')

    class Meta:
        queryset = Note.objects.all()
        resource_name = 'note'
        authorization = Authorization()
        fields = ['title', 'body']
        filtering = {
            'project': ALL_WITH_RELATIONS
        }

    # fields allows us to only show the data we want to show, ie we hide important data this way
    # fields = ['title']
