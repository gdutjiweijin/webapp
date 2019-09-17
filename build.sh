
# build
# test
yarn run build

# copy file to android
rm -rf ./cordovawebapp/platforms/android/app/src/main/assets/www/static
rm -rf ./cordovawebapp/platforms/android/app/src/main/assets/www/index.html
cp -r dist/ ./cordovawebapp/platforms/android/app/src/main/assets/www/


# copy file to ios
rm -rf ./cordovawebapp/platforms/ios/www/static
rm -rf ./cordovawebapp/platforms/ios/www/index.html
cp -r dist/ ./cordovawebapp/platforms/ios/www/
