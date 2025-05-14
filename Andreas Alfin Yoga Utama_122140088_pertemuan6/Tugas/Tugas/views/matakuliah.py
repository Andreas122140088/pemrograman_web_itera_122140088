from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list(request):
    matakuliahs = request.dbsession.query(Matakuliah).all()
    return {'matakuliah': [mk.to_dict() for mk in matakuliahs]}

# Tambahkan juga view untuk: detail, add (POST), update (PUT), delete (DELETE)
