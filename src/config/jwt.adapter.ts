import jwt from 'jsonwebtoken';

import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {

  static async generateToken(payload: any, duration: string = '2h') {

    // jwt.sign(payload, "SEED", { expiresIn: duration }, (err, token) => {});

    return new Promise((resolve, reject) => {

      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {

        if ( err) return resolve(null);

        return resolve(token);
        
      });

    });

  }

  static validateToken(token: string) {

    return {};
  }

}