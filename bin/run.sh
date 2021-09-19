cd ../Front-End
npm run build

echo Removing old Build
rm -r ../Back-End/src/main/resources/public/build

echo Copying New Build 
cp -R ./build ../Back-End/src/main/resources/public
cd ../Back-End
mvn package
cd target
java -jar Server-2.0-jar-with-dependencies.jar