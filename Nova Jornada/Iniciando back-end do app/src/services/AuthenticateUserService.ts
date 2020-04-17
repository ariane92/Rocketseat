import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';

interface RequestDTO {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({
    email,
    password,
  }: RequestDTO): Promise<{ user: User; token: string }> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Incorret email/password combination');
    }

    const token = sign({}, 'e10adc3949ba59abbe56e057f20f883e', {
      subject: user.id,
      expiresIn: '1d',
    });

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorret email/password combination');
    }

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
