const app=require('./app.js');

app.set('port',process.env.PORT || 3000);

const mongoose=require('mongoose');
const mongo_url='mongodb://localhost:27017/MERN';

mongoose.Promise=global.Promise;

mongoose.connect(mongo_url)
                .then(()=>{
                    console.log('Conexion a la base de datos exitosa');

                    app.listen(app.get('port'),()=>{
                        console.log(`Servidor corriendo correctamente en ${app.get('port')}`);
                    })
                })
                .catch((error)=>{
                    console.log(error);
                })