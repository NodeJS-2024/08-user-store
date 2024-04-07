import { JwtAdapter, bcryptAdapter } from '../../config';
import { UserModel } from '../../data';
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from '../../domain';

export class AuthService {

  // DI
  constructor() {}

  public async registerUser(registerUserDto: RegisterUserDto) {

    const existUser = await UserModel.findOne({ email: registerUserDto.email });

    if ( existUser ) throw CustomError.badRequest('Email already exist');

    try {
      
      const user = new UserModel(registerUserDto);
      
      // Encriptar contraseña
      user.password = bcryptAdapter.hash(registerUserDto.password);
      await user.save();

      // Generar JWT
      const token = await JwtAdapter.generateToken({ id: user.id });
      if ( !token ) throw CustomError.internalServer('Error while creating JWT');

      // Email de confirmacion

      const { password, ...userEntity } = UserEntity.fromObject(user);

      return { 
        user: userEntity,
        token
      }
    } catch (error) {
      throw CustomError.internalServer(`${ error }`);
    }

  }

  public async loginUser(loginUserDto: LoginUserDto) {

    const user = await UserModel.findOne({ email: loginUserDto.email });
    if ( !user ) throw CustomError.badRequest('Invalid Credentials - email');

    const isMatching = bcryptAdapter.compare(loginUserDto.password, user!.password);
    if ( !isMatching ) throw CustomError.badRequest('Invalid Credentials - password');

    const { password, ...userEntity } = UserEntity.fromObject(user);

    const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });
    if ( !token ) throw CustomError.internalServer('Error while creating JWT');

    return {
      user: userEntity,
      token
    }

  }

}