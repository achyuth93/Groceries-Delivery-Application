import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { LoginUser } from '../model/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signupUser(user:User){
    return this.http.post("http://localhost:8000/users",user)
  }

  realUser:User;
  loginUser(user:LoginUser){
 return this.getUser(user)
  }

  baseURL="http://localhost:8000"

  getURL=`${this.baseURL}/${'users'}`

  getUser(user:LoginUser){
console.log(this.getURL+"?"+"uemail="+user.uemail+"&"+"upwd="+user.upwd)
    return this.http.get<User>(this.getURL+"?"+"uemail="+user.uemail+"&"+"upwd="+user.upwd)
  }

}
