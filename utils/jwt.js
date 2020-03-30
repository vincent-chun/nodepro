let jwt = require('jsonwebtoken');
module.exports={
	sign:({username,_id})=>{
		return jwt.sign({username,_id},'cfs',{expires:60*60*24})
	},
	verify:(token)=>{
		return new Promise((resolve,reject)=>{
			jwt.verify(token,'cfs1221', (err,decode)=>{
			if(!err){
				resolve(decode)
			}else{
				reject(err.message)
			}
		})
	}
	)
}
}
