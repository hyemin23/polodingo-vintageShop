import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('join')
  create(@Body() createUserDto: UserDto): Promise<any> {
    return this.userService.joinUser(createUserDto);
  }

  // @Get('wishList')
  // getWishList(@Param() productId: string) {
  //   console.log('장바구니 컨트롤러');
  //   return this.userService.getWishList(productId);
  // }

  // @Post('student')
  // createStudent(@Body() createStudentDto: CreateStudentDto): Promise<any> {
  //   return this.userService.create(createStudentDto);
  // }

  // @Post('teacher')
  // createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<any> {
  //   return this.userService.create(createTeacherDto);
  // }

  // @Get()
  // @Role("admin")
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  // findAll(): Promise<User[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // @Role("user")
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  // findOne(@Param('id') id: string): Promise<User> {
  // return this.userService.findOne(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.userService.remove(id);
  // }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<any> {
  //   return this.userService.update(id, updateUserDto);
  // }
}
