import jsonwebtoken from "jsonwebtoken";

export const createToken=(payload,secret,expiresIn)=>{
 return jsonwebtoken.sign(payload,secret,{expiresIn});   
}

export const verifyToken=(token,secret)=>{
    return jsonwebtoken.verify(token,secret);
}

