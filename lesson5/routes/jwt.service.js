/* should use .env file for secrect key */

const Buffer = require('buffer').Buffer;
const crypto = require('crypto');

const SECRECT_KEY = "secrect-key"
const ALGO = 'sha256'; //sha512


function generateJWT(payload) {
        /*
         * In minutes : (m * 60) m = number of minutes
         * In days : (n * 24 * 60 * 60 ) n = no of days            
         */
        payload.exp = Date.now() + (1 * 60 * 1000); // expire in one minute
        let header = {"type":'JWT', "algo": ALGO}
        let $signature = sign(header, payload);
    
        console.log($signature)
        return `${Buffer.from(JSON.stringify(header)).toString('base64')}.${Buffer.from(JSON.stringify(payload)).toString('base64')}.${$signature}`
}

   
function sign(header, payload) {
    return crypto.createHmac(ALGO, SECRECT_KEY)
                        .update(`${JSON.stringify(header)}${JSON.stringify(payload)}`)
                        .digest('base64')             
}




function valididateJWT(authorizationHeader) {
    
    if (!authorizationHeader) {
        throw new Error('Token Required');      
    }
    
    // let token = authorizationHeader.match(/Bearer\s(\S+)/).pop()  
    const [authType, token] = authorizationHeader.split(' ')
    if (authType !== 'Bearer') throw new Error('Expected a Bearer token')
    let segments = token.split('.')
    let header = JSON.parse(Buffer.from(segments[0], 'base64').toString())
    let payload = JSON.parse(Buffer.from(segments[1], 'base64').toString())
    let signature = segments[2]
    
    let isValid = signature === sign(header, payload)
         
    if (!isValid) {
        throw new Error('Signature verification failed')       
    }
    
    if (payload.exp &&   Date.now() > payload.exp) {
        throw new Error('Token expired')   
    }

  // Access granted...
  return true
}


module.exports.generate = generateJWT
module.exports.valididate = valididateJWT