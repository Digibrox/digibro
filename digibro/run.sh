fuser -k 8000/tcp

#source /digibrox/digibro/venv/bin/activate
gunicorn --bind 0.0.0.0:8000 digibro.wsgi:application --daemon
