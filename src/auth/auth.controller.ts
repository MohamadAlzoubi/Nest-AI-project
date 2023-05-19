/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('auth/signup')
    signup() {
        this.authService.signup()
    }

    @Post('auth/signin')
    signin() {
        this.authService.signin()
    }

    @Post('auth/createuser')
    createUser() {
        this.authService.createUser()
    }
}