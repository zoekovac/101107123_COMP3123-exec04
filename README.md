### Project Setup

````bash
mkdir 101107123_COMP3123-exec04
cd 101107123_COMP3123-exec04
npm init -y
npm install express
npm install --save-dev nodemon
mkdir public
````

### Run and Test Project

````bash
npm run dev
curl http://localhost:3000/hello
curl "http://localhost:3000/user?firstname=John&lastname=Doe"
curl -X POST http://localhost:3000/user/John/Doe
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '[{"firstname":Zoë","lastname":"Kovac"},{"firstname":"John","lastname":"Doe"}]'
````

http://localhost:3000/instruction.html
