cd client/
yarn build

cd ../server
python manage.py collectstatic

cd ../
cp client/build/index.html server/templates/

git add .
git commit -m "Deployment script execution"
git push heroku master
