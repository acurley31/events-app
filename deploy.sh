cd client/
yarn build

cd ../server
python manage.py collectstatic

cd ../
cp client/build/index.html server/templates/

heroku push origin master
