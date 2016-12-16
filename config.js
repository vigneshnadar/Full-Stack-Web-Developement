const env=process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const fnxyz=function(msg){
	console.log(msg);
	console.log('message ala re message vach vach message');
};

export default {
	port: env.PORT || 8080,
	//host: env.HOST || '0.0.0.0',
	host: env.HOST || 'localhost',
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};



