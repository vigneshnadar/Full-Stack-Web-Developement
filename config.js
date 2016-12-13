const env=process.env;

export const abc = env.Bas_kya || 'Bas Kya';
export const fnxyz=function(msg){
	console.log(msg);
	console.log('message ala re message vach vach message');
};
export default {
	port: env.PORT || 8080
};