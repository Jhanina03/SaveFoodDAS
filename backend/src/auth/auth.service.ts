import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register({ name, email, password, role }: any) {
    const existingUser = await (this.prisma as any).user.findUnique({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await (this.prisma as any).user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    };
  }

  async login({ email, password }: any) {
    const user = await (this.prisma as any).user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    };
  }
}
