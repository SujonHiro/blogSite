import jsonwebtoken from "jsonwebtoken";

const createToken=(payload,secret,expiresIn)=>{
 return jsonwebtoken.sign(payload,secret,{expiresIn});   
}
export default createToken;