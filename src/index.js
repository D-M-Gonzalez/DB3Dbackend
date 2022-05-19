import app from './app';
import './database';
import 'dotenv';

//Basic app start
app.listen(app.get('port'));

console.log('server on port',app.get('port'));
